// ============================================
// BID A BIZ – LIGHTWEIGHT REALTIME NODE SERVER
// With Real-time Server-Sent Events (SSE) Broadcast
// ============================================

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8085;
const PUBLIC_DIR = __dirname;
const STATE_FILE = path.join(__dirname, 'bid_biz_state.json');

// Store all connected SSE clients (browsers/devices)
let sseClients = [];

function broadcastToClients(dataString) {
    const payload = `data: ${dataString}\n\n`;
    sseClients.forEach((client, index) => {
        try {
            client.write(payload);
        } catch (e) {
            sseClients.splice(index, 1);
        }
    });
}

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json',
    '.pdf': 'application/pdf',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.ico': 'image/x-icon',
    '.svg': 'image/svg+xml',
    '.woff2': 'font/woff2'
};

const server = http.createServer((req, res) => {
    // Enable CORS for API requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // 1. GET /api/events — Real-time Server-Sent Events (SSE) stream
    if (req.url === '/api/events' && req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Access-Control-Allow-Origin': '*'
        });

        // Send current state on connection if available
        if (fs.existsSync(STATE_FILE)) {
            fs.readFile(STATE_FILE, 'utf8', (err, data) => {
                if (!err && data) {
                    res.write(`data: ${data}\n\n`);
                }
            });
        }

        sseClients.push(res);

        req.on('close', () => {
            sseClients = sseClients.filter(client => client !== res);
        });
        return;
    }

    // 2. GET /api/state — Retrieve current state from bid_biz_state.json
    if (req.url === '/api/state' && req.method === 'GET') {
        if (fs.existsSync(STATE_FILE)) {
            fs.readFile(STATE_FILE, 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Failed to read state' }));
                } else {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(data);
                }
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'No saved state found yet' }));
        }
        return;
    }

    // 3. POST /api/state — Save live auction state & broadcast instantly
    if (req.url === '/api/state' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                const parsed = JSON.parse(body);
                const dataStr = JSON.stringify(parsed);
                fs.writeFile(STATE_FILE, JSON.stringify(parsed, null, 2), 'utf8', (err) => {
                    if (err) {
                        res.writeHead(500, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'Failed to write state' }));
                    } else {
                        // Broadcast updated state to all connected devices in real-time
                        broadcastToClients(dataStr);

                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ success: true, timestamp: Date.now() }));
                    }
                });
            } catch (e) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
            }
        });
        return;
    }

    // 4. Static File Server
    let filePath = path.join(PUBLIC_DIR, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
    
    if (!filePath.startsWith(PUBLIC_DIR)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            filePath = path.join(PUBLIC_DIR, 'index.html');
        }
        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        fs.readFile(filePath, (readErr, content) => {
            if (readErr) {
                res.writeHead(500);
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content);
            }
        });
    });
});

server.listen(PORT, () => {
    console.log(`Bid A Biz Server running at http://127.0.0.1:${PORT}`);
});
