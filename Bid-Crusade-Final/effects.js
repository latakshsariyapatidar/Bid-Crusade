// ============================================
// BID CRUSADES — Visual Effects Engine
// Custom cursor, particles, confetti, glitch
// ============================================

(function () {
    'use strict';

    // ── CUSTOM CURSOR ──
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let isMoving = false;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
        if (!isMoving) { isMoving = true; requestAnimationFrame(animateRing); }
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';
        requestAnimationFrame(animateRing);
    }

    // Hover effect on interactive elements
    const hoverTargets = 'button, a, input, select, [data-hover], .asset-list-item:not(.sold), .team-bid-btn, .nav-btn, .filter-btn, .disaster-btn, .asset-card';
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(hoverTargets.split(',').map(s => s.trim()).join(','))) {
            document.body.classList.add('cursor-hover');
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(hoverTargets.split(',').map(s => s.trim()).join(','))) {
            document.body.classList.remove('cursor-hover');
        }
    });
    document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
    document.addEventListener('mouseup', () => document.body.classList.remove('cursor-click'));

    // Spawn trail particles on mouse move (throttled)
    let trailThrottle = 0;
    document.addEventListener('mousemove', (e) => {
        trailThrottle++;
        if (trailThrottle % 4 !== 0) return;
        spawnTrailParticle(e.clientX, e.clientY);
    });

    function spawnTrailParticle(x, y) {
        const p = document.createElement('div');
        const size = Math.random() * 5 + 2;
        const colors = ['#f6c445', '#00e5ff', '#b06eff', '#ff4b7b'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        p.style.cssText = `
            position:fixed; pointer-events:none; z-index:99990;
            width:${size}px; height:${size}px; border-radius:50%;
            background:${color}; left:${x}px; top:${y}px;
            transform:translate(-50%,-50%);
            box-shadow:0 0 6px ${color};
            animation:trailFade ${0.5 + Math.random() * 0.3}s ease forwards;
        `;
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 800);
    }

    // Inject trail animation keyframe once
    const trailStyle = document.createElement('style');
    trailStyle.textContent = `
        @keyframes trailFade {
            0%   { opacity: 0.8; transform: translate(-50%,-50%) scale(1); }
            100% { opacity: 0;   transform: translate(-50%,-50%) scale(0) translateY(-20px); }
        }
    `;
    document.head.appendChild(trailStyle);


    // ── PARTICLE BACKGROUND ──
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');

    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    let mx = W / 2, my = H / 2;

    window.addEventListener('resize', () => {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    });

    document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });

    const NUM_PARTICLES = 80;
    const particles = [];

    class Particle {
        constructor() { this.reset(true); }
        reset(init = false) {
            this.x = Math.random() * W;
            this.y = init ? Math.random() * H : H + 10;
            this.vy = -(Math.random() * 0.4 + 0.1);
            this.vx = (Math.random() - 0.5) * 0.2;
            this.size = Math.random() * 2 + 0.5;
            this.life = 0;
            this.maxLife = Math.random() * 300 + 200;
            const hues = [45, 185, 270, 340]; // gold, cyan, violet, rose
            this.hue = hues[Math.floor(Math.random() * hues.length)];
        }
        update() {
            this.x += this.vx + (mx / W - 0.5) * 0.05;
            this.y += this.vy;
            this.life++;
            if (this.y < -10 || this.life > this.maxLife) this.reset();
        }
        draw() {
            const alpha = Math.sin((this.life / this.maxLife) * Math.PI) * 0.7;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${this.hue}, 100%, 70%, ${alpha})`;
            ctx.shadowColor = `hsl(${this.hue}, 100%, 70%)`;
            ctx.shadowBlur = 6;
            ctx.fill();
        }
    }

    for (let i = 0; i < NUM_PARTICLES; i++) particles.push(new Particle());

    // Connection lines
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i], p2 = particles[j];
                const dx = p1.x - p2.x, dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    const alpha = (1 - dist / 120) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(246, 196, 69, ${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, W, H);
        ctx.shadowBlur = 0;
        drawConnections();
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();


    // ── CONFETTI ──
    const CONFETTI_COLORS = ['#f6c445', '#00e5ff', '#b06eff', '#ff4b7b', '#00ffb3', '#ff7a20', '#4da6ff', '#ffe066'];

    window.launchConfetti = function () {
        const count = 120;
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const piece = document.createElement('div');
                piece.className = 'confetti-piece';
                const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
                const x = Math.random() * 100;
                const rotDir = Math.random() > 0.5 ? 1 : -1;
                const duration = 2 + Math.random() * 2;
                const shape = Math.random() > 0.5 ? '50%' : (Math.random() > 0.5 ? '2px' : '0%');
                piece.style.cssText = `
                    left:${x}vw; top:-20px;
                    background:${color};
                    border-radius:${shape};
                    width:${6 + Math.random() * 6}px;
                    height:${6 + Math.random() * 8}px;
                    animation-duration:${duration}s;
                    animation-delay:${Math.random() * 0.5}s;
                    box-shadow:0 0 4px ${color};
                `;
                document.body.appendChild(piece);
                setTimeout(() => piece.remove(), (duration + 0.5) * 1000);
            }, i * 12);
        }
    };


    // ── GLITCH TEXT EFFECT ──
    // Occasionally glitch the logo
    const logoEl = document.querySelector('.logo');
    if (logoEl) {
        setInterval(() => {
            if (Math.random() > 0.85) {
                logoEl.style.textShadow = `
                    2px 0 0 rgba(255,0,100,0.6),
                    -2px 0 0 rgba(0,229,255,0.6)
                `;
                setTimeout(() => { logoEl.style.textShadow = ''; }, 80);
                setTimeout(() => {
                    logoEl.style.textShadow = `3px 0 0 rgba(0,229,255,0.5), -3px 0 0 rgba(255,0,100,0.5)`;
                    setTimeout(() => { logoEl.style.textShadow = ''; }, 60);
                }, 120);
            }
        }, 3000);
    }


    // ── ASSET CARD STAGGER ANIMATION ──
    window.staggerCards = function (selector = '.asset-card, .team-card, .asset-list-item') {
        const cards = document.querySelectorAll(selector);
        cards.forEach((card, i) => {
            card.style.animationDelay = `${i * 0.04}s`;
        });
    };


    // ── RIPPLE EFFECT on button click ──
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;
        const rect = btn.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        ripple.style.cssText = `
            position:absolute; border-radius:50%;
            width:${size}px; height:${size}px;
            left:${e.clientX - rect.left - size / 2}px;
            top:${e.clientY - rect.top - size / 2}px;
            background:rgba(255,255,255,0.12);
            transform:scale(0); pointer-events:none;
            animation:rippleAnim 0.5s ease forwards;
        `;
        if (getComputedStyle(btn).position === 'static') btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });

    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `@keyframes rippleAnim { to { transform:scale(3); opacity:0; } }`;
    document.head.appendChild(rippleStyle);


    // ── NUMBER COUNTER ANIMATION for price changes ──
    window.animateNumber = function (element, start, end, duration = 600, prefix = '₹', suffix = ' Cr') {
        const startTime = performance.now();
        const range = end - start;
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + range * eased);
            element.textContent = prefix + current + suffix;
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    };


    // ── PAGE LOAD ENTRANCE ──
    document.addEventListener('DOMContentLoaded', () => {
        document.body.style.opacity = '0';
        document.body.style.transform = 'scale(0.97)';
        document.body.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        setTimeout(() => {
            document.body.style.opacity = '1';
            document.body.style.transform = 'scale(1)';
            setTimeout(() => {
                document.body.style.transform = '';
                document.body.style.transition = '';
            }, 700);
        }, 100);
    });

})();
