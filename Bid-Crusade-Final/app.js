// ============================================
// BID A BIZ GRAND FINALE — PARTICIPANT-FIRST & DYNAMIC ADMIN ENGINE
// Continuous Scroll & Mouse Wheel Zoomable PDF Engine
// ============================================

(function () {
    'use strict';

    // ===========================
    // DEFAULT INITIAL DATASETS (FALLBACKS)
    // ===========================
    function getDefaultAssets() {
        return [
            { id: 1, name: "Pan-India Distribution Rights", category: "A", vertical: "V3", basePrice: 11, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 2, name: "Multi-Specialty Hospital Unit", category: "A", vertical: "V1", basePrice: 21, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 3, name: "Multi-Sector ESG Certification Portfolio", category: "A", vertical: "V4", basePrice: 6, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 4, name: "Automated Robotics Assembly System", category: "A", vertical: "V2", basePrice: 14, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 5, name: "Regional Telecom Spectrum Allocation", category: "A", vertical: "V3", basePrice: 18, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 6, name: "Industrial Manufacturing Plant", category: "A", vertical: "V1", basePrice: 21, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 7, name: "Urban Smart Monitoring Network", category: "A", vertical: "V2", basePrice: 9, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 8, name: "Government Infrastructure Contract", category: "A", vertical: "V4", basePrice: 16, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 9, name: "Infrastructure Maintenance Rights", category: "A", vertical: "V4", basePrice: 7, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 10, name: "Mining & Raw Material Extraction Lease", category: "A", vertical: "V1", basePrice: 22, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 11, name: "National Logistics Fleet & Warehousing", category: "B", vertical: "V3", basePrice: 15, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 12, name: "Advanced Cybersecurity Suite", category: "B", vertical: "V2", basePrice: 10, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 13, name: "Tier-2 City Zoned Land Bank", category: "B", vertical: "V4", basePrice: 15, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 14, name: "Multi-Brand Automobile Assembly Unit", category: "B", vertical: "V1", basePrice: 20, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 15, name: "Export-Import Multi-Nation License", category: "B", vertical: "V3", basePrice: 12, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 16, name: "AI & Data Analytics Infrastructure", category: "B", vertical: "V2", basePrice: 12, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 17, name: "Private Power Backup Microgrid", category: "B", vertical: "V4", basePrice: 9, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 18, name: "Cross-Platform Mobile App Ecosystem", category: "B", vertical: "V2", basePrice: 8, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 19, name: "Cold Chain Pharma Distribution", category: "B", vertical: "V3", basePrice: 13, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 20, name: "Cloud Server Farm Facility", category: "B", vertical: "V1", basePrice: 18, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 21, name: "Regulatory Compliance Shield", category: "C", vertical: "V4", basePrice: 8, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 22, name: "Cross-Industry Patent Portfolio", category: "C", vertical: "V2", basePrice: 9, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 23, name: "Multi-State Retail Franchise Rights", category: "C", vertical: "V3", basePrice: 13, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 24, name: "Metropolitan Commercial Tower", category: "C", vertical: "V1", basePrice: 19, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 25, name: "Strategic Smart City Land Reserve", category: "C", vertical: "V4", basePrice: 13, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 26, name: "R&D Innovation Hub", category: "C", vertical: "V2", basePrice: 11, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 27, name: "Commercial Banking & NBFC License", category: "C", vertical: "V3", basePrice: 14, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 28, name: "Pharmaceutical Manufacturing Facility", category: "C", vertical: "V1", basePrice: 19, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 29, name: "Cold Storage Network", category: "C", vertical: "V3", basePrice: 12, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 30, name: "High-Speed Data Cable Network", category: "C", vertical: "V2", basePrice: 11, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 31, name: "Long-Term Raw Material Supply Contract", category: "D", vertical: "V4", basePrice: 10, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 32, name: "Agricultural Processing Facility", category: "D", vertical: "V1", basePrice: 15, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 33, name: "Scalable E-Commerce Platform", category: "D", vertical: "V3", basePrice: 13, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 34, name: "Data Center Cooling System", category: "D", vertical: "V2", basePrice: 8, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 35, name: "Commodity Trading Desk License", category: "D", vertical: "V4", basePrice: 11, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 36, name: "Green Hydrogen Pilot Plant", category: "D", vertical: "V1", basePrice: 19, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 37, name: "National Warehouse Network", category: "D", vertical: "V3", basePrice: 15, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 38, name: "Renewable Energy Solar Grid", category: "D", vertical: "V1", basePrice: 20, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 39, name: "Strategic Insurance & Risk Hedging", category: "D", vertical: "V4", basePrice: 7, ownerTeamId: null, purchasePrice: null, status: 'Available' },
            { id: 40, name: "Enterprise ERP & Automation System", category: "D", vertical: "V2", basePrice: 10, ownerTeamId: null, purchasePrice: null, status: 'Available' }
        ];
    }

    function getDefaultPhases() {
        return [
            { id: 1, name: "Welcome & Briefing", desc: "Welcome address, event ground rules overview, and team orientation." },
            { id: 2, name: "Sector Allocation", desc: "Sector selection and domain strategy assignment for all competing teams." },
            { id: 3, name: "Premium Auction", desc: "High-value flagship asset bidding round." },
            { id: 4, name: "Core Auction", desc: "Core business driver asset bidding round." },
            { id: 5, name: "Support Auction", desc: "Enabler, infrastructure, and technology asset bidding round." },
            { id: 6, name: "Industry Disruption", desc: "Unforeseen macro-economic shift event reshuffling strategic valuations." },
            { id: 7, name: "Negotiation Window", desc: "Inter-team trading, sector realignment, and deal-making phase." },
            { id: 8, name: "Redistribution Market", desc: "Secondary asset redistribution and capital balancing market." },
            { id: 9, name: "Final PPT Submission", desc: "Teams compile and submit their final pitch presentation decks." },
            { id: 10, name: "Evaluation", desc: "Executive jury panel reviews portfolios, strategic depth, and risk discipline." },
            { id: 11, name: "Results", desc: "Grand Finale winners announcement and awards presentation." }
        ];
    }

    function getDefaultTeams() {
        return [
            { id: 1, name: "Team Apex Velocity", members: "Alex, Jordan, Sam", sector: "Formula 1 & Motorsports", remainingBudget: 100 },
            { id: 2, name: "Team Ocean Dynamics", members: "Chris, Taylor, Morgan", sector: "OceanX (Marine & Water Mobility)", remainingBudget: 100 },
            { id: 3, name: "Team Aero Horizon", members: "Riley, Casey, Drew", sector: "SkyRush (Air Mobility & Aviation Innovation)", remainingBudget: 100 },
            { id: 4, name: "Team Drive Matrix", members: "Avery, Quinn, Dakota", sector: "DriveVerse (Future Ground Mobility)", remainingBudget: 100 },
            { id: 5, name: "Team HyperDrive", members: "Reese, Peyton, Hayden", sector: "Formula 1 & Motorsports", remainingBudget: 100 },
            { id: 6, name: "Team Nautilus", members: "Emerson, Rowan, Kai", sector: "OceanX (Marine & Water Mobility)", remainingBudget: 100 },
            { id: 7, name: "Team Skystream", members: "Skyler, Jesse, Frankie", sector: "SkyRush (Air Mobility & Aviation Innovation)", remainingBudget: 100 },
            { id: 8, name: "Team GroundForce", members: "Micah, Shiloh, Logan", sector: "DriveVerse (Future Ground Mobility)", remainingBudget: 100 }
        ];
    }

    const DEFAULT_PASSCODE = 'bid@2026@adm!n';
    const STORAGE_KEY = 'bid_biz_finale_dynamic_v10';
    const BROADCAST_CHANNEL_NAME = 'bid_biz_events_v10';

    // APPLICATION DYNAMIC STATE
    let state = {
        role: 'participant',
        currentPhase: 1,
        activeView: 'rulebook', // RULEBOOK DEFAULT LANDING VIEW
        activeAdminSubtab: 'auction',
        announcements: [
            { id: 1, text: "Welcome to Bid A Biz Grand Finale! Real-time offline auction updates will be broadcast live.", time: new Date().toLocaleTimeString() }
        ],
        eventPhases: getDefaultPhases(),
        teams: getDefaultTeams(),
        assets: getDefaultAssets(),
        historyStack: []
    };

    let editingAssetId = null;

    // ===========================
    // NATIVE WEB SYSTEM NOTIFICATIONS & AUDIO CHIME
    // ===========================
    function playChimeSound() {
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            const ctx = new AudioCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(587.33, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);

            gain.gain.setValueAtTime(0.3, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + 0.35);
        } catch (e) {}
    }

    function requestNotificationPermission(isAutoPrompt = false) {
        if (!('Notification' in window)) {
            if (!isAutoPrompt) showToast('Desktop Notifications not supported in this browser.', true);
            return;
        }

        Notification.requestPermission().then(permission => {
            updateNotificationButtonUI(permission);
            if (permission === 'granted') {
                showToast('<i class="fa-solid fa-bell"></i> Native System Notifications activated!');
                sendSystemNotification('Bid A Biz Notifications Active', 'You will receive OS desktop alerts for live auction updates and announcements.');
            } else if (permission === 'denied' && !isAutoPrompt) {
                showToast('Notifications blocked in browser settings.', true);
            }
        });
    }

    function updateNotificationButtonUI(permission) {
        const btn = document.getElementById('btn-enable-notifications');
        if (!btn) return;
        const status = permission || (('Notification' in window) ? Notification.permission : 'unsupported');
        if (status === 'granted') {
            btn.innerHTML = '<i class="fa-solid fa-bell"></i> Notifications Active';
            btn.style.borderColor = 'var(--border-subtle)';
            btn.style.color = 'var(--text-primary)';
        } else if (status === 'denied') {
            btn.innerHTML = '<i class="fa-solid fa-bell-slash"></i> Blocked';
            btn.style.borderColor = 'var(--border-subtle)';
            btn.style.color = 'var(--text-muted)';
        } else {
            btn.innerHTML = '<i class="fa-solid fa-bell"></i> Notifications';
            btn.style.borderColor = 'var(--border-subtle)';
            btn.style.color = 'var(--text-secondary)';
        }
    }

    function sendSystemNotification(title, bodyText) {
        if ('Notification' in window && Notification.permission === 'granted') {
            try {
                const notif = new Notification(title, {
                    body: bodyText,
                    tag: 'bid-biz-' + Date.now(),
                    renotify: true
                });
                playChimeSound();
            } catch (e) {
                console.error("OS Notification error:", e);
            }
        }
    }

    // ===========================
    // BROADCAST CHANNEL & STORAGE SYNC
    // ===========================
    let broadcastChannel = null;
    try {
        if ('BroadcastChannel' in window) {
            broadcastChannel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
            broadcastChannel.onmessage = function (event) {
                if (event.data && event.data.type === 'STATE_UPDATE') {
                    const oldLatestNotice = state.announcements.length > 0 ? state.announcements[state.announcements.length - 1].text : '';
                    loadState();
                    renderAllViews();
                    const newLatestNotice = state.announcements.length > 0 ? state.announcements[state.announcements.length - 1].text : '';
                    
                    showToast('<i class="fa-solid fa-bolt"></i> Live update received!');

                    if (newLatestNotice && newLatestNotice !== oldLatestNotice) {
                        sendSystemNotification('Bid A Biz Announcement', newLatestNotice);
                    } else {
                        sendSystemNotification('Live Auction Update', 'The event state or leaderboard has been updated live.');
                    }
                }
            };
        }
    } catch (e) { }

    window.addEventListener('storage', function (e) {
        if (e.key === STORAGE_KEY) {
            loadState();
            renderAllViews();
            showToast('<i class="fa-solid fa-bolt"></i> Live update synced across tabs!');
            sendSystemNotification('Event State Updated', 'Event data has been updated by the Admin.');
        }
    });

    function saveState() {
        try {
            const dataToSave = {
                currentPhase: state.currentPhase,
                announcements: state.announcements,
                eventPhases: state.eventPhases,
                teams: state.teams,
                assets: state.assets,
                historyStack: state.historyStack
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
            syncServerState(dataToSave);
        } catch (e) { }
    }

    function syncServerState(dataToSave) {
        try {
            fetch('/api/state', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSave)
            }).catch(function() {});
        } catch (e) {}
    }

    function checkServerStatePoll() {
        try {
            fetch('/api/state')
                .then(res => res.ok ? res.json() : null)
                .then(data => {
                    if (data && data.currentPhase) {
                        const localStr = localStorage.getItem(STORAGE_KEY);
                        const serverStr = JSON.stringify(data);
                        if (localStr !== serverStr) {
                            localStorage.setItem(STORAGE_KEY, serverStr);
                            loadState();
                            renderAllViews();
                        }
                    }
                })
                .catch(function() {});
        } catch (e) {}
    }

    function broadcastUpdate() {
        saveState();
        if (broadcastChannel) {
            try {
                broadcastChannel.postMessage({ type: 'STATE_UPDATE', timestamp: Date.now() });
            } catch (e) { }
        }
    }

    function loadState() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                state.currentPhase = parsed.currentPhase || 1;
                state.announcements = parsed.announcements || state.announcements;
                state.eventPhases = (parsed.eventPhases && parsed.eventPhases.length > 0) ? parsed.eventPhases : getDefaultPhases();
                state.teams = (parsed.teams && parsed.teams.length > 0) ? parsed.teams : getDefaultTeams();
                state.assets = (parsed.assets && parsed.assets.length > 0) ? parsed.assets : getDefaultAssets();
                state.historyStack = parsed.historyStack || [];
            }
        } catch (e) { }
    }

    function pushHistorySnapshot() {
        if (state.historyStack.length > 20) state.historyStack.shift();
        state.historyStack.push(JSON.stringify({
            currentPhase: state.currentPhase,
            announcements: state.announcements,
            eventPhases: state.eventPhases,
            teams: state.teams,
            assets: state.assets
        }));
    }

    function undoLastAction() {
        if (state.historyStack.length === 0) {
            showToast('No actions to undo!', true);
            return;
        }
        const lastSnapshot = JSON.parse(state.historyStack.pop());
        state.currentPhase = lastSnapshot.currentPhase;
        state.announcements = lastSnapshot.announcements;
        state.eventPhases = lastSnapshot.eventPhases;
        state.teams = lastSnapshot.teams;
        state.assets = lastSnapshot.assets;
        broadcastUpdate();
        renderAllViews();
        showToast('<i class="fa-solid fa-rotate-left"></i> Previous action undone!');
    }

    // ===========================
    // ROLE & VIEW NAVIGATION
    // ===========================

    function setRole(role) {
        state.role = role;
        const adminNav = document.getElementById('nav-admin');
        const adminIndicator = document.getElementById('admin-session-indicator');

        if (role === 'admin') {
            if (adminNav) adminNav.style.display = 'inline-flex';
            if (adminIndicator) adminIndicator.style.display = 'flex';
        } else {
            if (adminNav) adminNav.style.display = 'none';
            if (adminIndicator) adminIndicator.style.display = 'none';
            if (state.activeView === 'admin') switchView('rulebook');
        }
    }

    function switchView(viewId) {
        state.activeView = viewId;

        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === viewId);
        });

        document.querySelectorAll('main .view').forEach(sec => {
            sec.classList.toggle('active', sec.id === `view-${viewId}`);
        });

        if (viewId === 'rulebook') initPDFViewer('rulebook', 'Rulebook.pdf');
        if (viewId === 'catalogue') initPDFViewer('catalogue', 'Asset List.pdf');
    }

    function switchAdminSubtab(subtabId) {
        state.activeAdminSubtab = subtabId;
        document.querySelectorAll('.admin-subtab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.subtab === subtabId);
        });
        document.querySelectorAll('.admin-subtab-panel').forEach(panel => {
            panel.classList.toggle('active', panel.id === `admin-subtab-panel-${subtabId}`);
        });
    }

    function renderAllViews() {
        renderHeaderAndAnnouncements();
        renderLeaderboard();
        renderPortfoliosView();
        renderAdminControls();
    }

    function renderHeaderAndAnnouncements() {
        const curPhaseObj = state.eventPhases.find(p => p.id === state.currentPhase) || state.eventPhases[0] || { id: 1, name: "Event in Progress" };
        document.getElementById('header-phase-num').innerText = `Phase ${curPhaseObj.id}/${state.eventPhases.length}`;
        document.getElementById('header-phase-name').innerText = curPhaseObj.name;

        const dropdownMenu = document.getElementById('header-phase-dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.innerHTML = state.eventPhases.map(p => {
                const isActive = p.id === state.currentPhase;
                return `
                    <div class="phase-dropdown-item ${isActive ? 'active' : ''}" ${state.role === 'admin' ? `onclick="window.BidApp.setActivePhase(${p.id})"` : ''}>
                        <div class="phase-dropdown-title">
                            <span>${p.id}. ${p.name}</span>
                            ${isActive ? '<span class="role-badge" style="font-size:0.7rem; background:var(--accent-gold); color:black; font-weight:800;">ACTIVE</span>' : ''}
                        </div>
                        <div class="phase-dropdown-desc">${p.desc}</div>
                    </div>
                `;
            }).join('');
        }

        if (state.announcements.length > 0) {
            const latest = state.announcements[state.announcements.length - 1];
            document.getElementById('announcement-text').innerText = latest.text;
        }
    }

    // 1. DYNAMIC LEADERBOARD RENDERER
    function renderLeaderboard() {
        const tbody = document.getElementById('leaderboard-tbody');
        if (!tbody) return;

        const teamStats = state.teams.map(t => {
            const ownedAssets = state.assets.filter(a => a.ownerTeamId === t.id && a.status === 'Sold');
            const assetsCount = ownedAssets.length;
            const totalSpend = ownedAssets.reduce((sum, a) => sum + (a.purchasePrice || 0), 0);
            return {
                ...t,
                assetsCount,
                totalSpend,
                ownedAssets
            };
        });

        teamStats.sort((a, b) => (b.assetsCount - a.assetsCount) || (b.remainingBudget - a.remainingBudget));

        const totalSold = state.assets.filter(a => a.status === 'Sold').length;
        document.getElementById('lb-teams-count').innerText = state.teams.length;
        document.getElementById('lb-assets-sold').innerText = `${totalSold}/${state.assets.length}`;

        tbody.innerHTML = teamStats.map((t, idx) => {
            const sectorClass = getSectorBadgeClass(t.sector);
            return `
                <tr>
                    <td><strong style="color:var(--accent-orange);">#${idx + 1}</strong></td>
                    <td>
                        <strong style="font-size:1.05rem; color:var(--text-primary); cursor:pointer;" onclick="window.BidApp.openPortfolioModal(${t.id})">
                            ${t.name}
                        </strong>
                        <div style="font-size:0.75rem; color:var(--text-muted);">${t.members || 'No members listed'}</div>
                    </td>
                    <td><span class="sector-badge ${sectorClass}">${t.sector || 'Unassigned'}</span></td>
                    <td><strong style="color:var(--accent-emerald); font-family:'JetBrains Mono';">₹${t.remainingBudget} Cr</strong></td>
                    <td><span class="role-badge" style="font-size:0.85rem;">${t.assetsCount}/5</span></td>
                    <td><strong style="font-family:'JetBrains Mono'; color:var(--accent-rose);">₹${t.totalSpend} Cr</strong></td>
                    <td>
                        <button class="pdf-btn" onclick="window.BidApp.openPortfolioModal(${t.id})">View Portfolio <i class="fa-solid fa-briefcase"></i></button>
                    </td>
                </tr>
            `;
        }).join('');
    }

    // 2. DYNAMIC TEAM PORTFOLIOS RENDERER
    function renderPortfoliosView() {
        const container = document.getElementById('portfolios-grid-container');
        const selector = document.getElementById('portfolio-team-selector');
        if (!container || !selector) return;

        const selectedVal = selector.value;
        selector.innerHTML = '<option value="all">All Teams</option>' + state.teams.map(t => `<option value="${t.id}">${t.name}</option>`).join('');
        selector.value = selectedVal || 'all';

        let filterTeams = state.teams;
        if (selector.value !== 'all') {
            filterTeams = state.teams.filter(t => t.id === parseInt(selector.value));
        }

        container.innerHTML = filterTeams.map(t => {
            const ownedAssets = state.assets.filter(a => a.ownerTeamId === t.id && a.status === 'Sold');
            const totalSpend = ownedAssets.reduce((sum, a) => sum + (a.purchasePrice || 0), 0);
            const sectorClass = getSectorBadgeClass(t.sector);
            const isFull = ownedAssets.length >= 5;

            return `
                <div class="portfolio-card">
                    <div class="portfolio-card-header">
                        <div>
                            <div class="portfolio-team-title">${t.name}</div>
                            <span class="sector-badge ${sectorClass}">${t.sector || 'Unassigned'}</span>
                        </div>
                        <span class="portfolio-asset-badge ${isFull ? 'full' : ''}">${isFull ? '5/5 FULL' : `${ownedAssets.length}/5 Assets`}</span>
                    </div>

                    <div class="portfolio-stats-grid">
                        <div class="portfolio-stat-item">
                            <label>REMAINING BUDGET</label>
                            <div class="portfolio-stat-val" style="color:var(--accent-emerald);">₹${t.remainingBudget} Cr</div>
                        </div>
                        <div class="portfolio-stat-item">
                            <label>TOTAL SPEND</label>
                            <div class="portfolio-stat-val" style="color:var(--accent-rose);">₹${totalSpend} Cr</div>
                        </div>
                    </div>

                    <h4 style="font-size:0.82rem; color:var(--text-secondary); margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.5px; font-weight:700;">Acquired Portfolio (${ownedAssets.length}):</h4>
                    <div class="portfolio-assets-container">
                        ${ownedAssets.length === 0 ? '<div style="font-size:0.82rem; color:var(--text-muted); font-style:italic; padding:0.6rem; text-align:center; background:var(--bg-primary); border-radius:4px;">No assets acquired yet</div>' :
                            ownedAssets.map(a => `
                                <div class="portfolio-asset-item">
                                    <span class="portfolio-asset-name" title="#${a.id} ${a.name}">#${a.id} ${a.name}</span>
                                    <span class="portfolio-asset-price">₹${a.purchasePrice} Cr</span>
                                </div>
                            `).join('')
                        }
                    </div>

                    <button class="btn-primary-glow btn-small" style="margin-top:auto;" onclick="window.BidApp.openPortfolioModal(${t.id})">
                        <i class="fa-solid fa-briefcase"></i> Inspect Portfolio Details
                    </button>
                </div>
            `;
        }).join('');
    }

    // 3. DYNAMIC ADMIN CONTROLS RENDERER
    function renderAdminControls() {
        const assignAssetSel = document.getElementById('admin-assign-asset-select');
        const assignTeamSel = document.getElementById('admin-assign-team-select');
        const sectorTeamSel = document.getElementById('admin-sector-team-select');
        const budgetTeamSel = document.getElementById('admin-budget-team-select');
        const phaseSelect = document.getElementById('admin-phase-select');
        const teamsEditList = document.getElementById('admin-teams-edit-list');
        const phasesEditList = document.getElementById('admin-phases-edit-list');
        const assetsTbody = document.getElementById('admin-assets-tbody');

        if (!assignAssetSel) return;

        const availableAssets = state.assets.filter(a => a.status === 'Available');
        assignAssetSel.innerHTML = availableAssets.length === 0 ? '<option value="">No Available Assets</option>' :
            availableAssets.map(a => `<option value="${a.id}">[Asset #${a.id}] ${a.name} (Base: ₹${a.basePrice} Cr)</option>`).join('');

        const teamOptions = state.teams.length === 0 ? '<option value="">No Teams Created</option>' :
            state.teams.map(t => {
                const ownedCount = state.assets.filter(a => a.ownerTeamId === t.id && a.status === 'Sold').length;
                const isFull = ownedCount >= 5;
                return `<option value="${t.id}" ${isFull ? 'disabled' : ''}>
                    ${isFull ? '[FULL 5/5] ' : ''}${t.name} (Assets: ${ownedCount}/5, Budget: ₹${t.remainingBudget} Cr)
                </option>`;
            }).join('');
        assignTeamSel.innerHTML = teamOptions;

        const generalTeamOptions = state.teams.length === 0 ? '<option value="">No Teams Created</option>' :
            state.teams.map(t => `<option value="${t.id}">${t.name} (Budget: ₹${t.remainingBudget} Cr)</option>`).join('');
        sectorTeamSel.innerHTML = generalTeamOptions;
        budgetTeamSel.innerHTML = generalTeamOptions;

        phaseSelect.innerHTML = state.eventPhases.map(p => `<option value="${p.id}">${p.id}. ${p.name}</option>`).join('');
        phaseSelect.value = state.currentPhase;

        const assetFilter = document.getElementById('admin-asset-status-filter').value;
        let showAssets = state.assets;
        if (assetFilter !== 'all') {
            showAssets = state.assets.filter(a => a.status === assetFilter);
        }

        assetsTbody.innerHTML = showAssets.length === 0 ? '<tr><td colspan="8" style="text-align:center; color:var(--text-muted);">No assets match filter</td></tr>' :
            showAssets.map(a => {
                const ownerTeam = state.teams.find(t => t.id === a.ownerTeamId);
                return `
                <tr>
                    <td><strong>#${a.id}</strong></td>
                    <td>
                        <input type="text" class="form-control" id="edit-aname-${a.id}" value="${a.name}" style="padding:0.3rem 0.5rem; font-size:0.85rem;">
                    </td>
                    <td>
                        <input type="number" class="form-control" id="edit-aprice-${a.id}" value="${a.basePrice}" min="1" step="1" style="width:70px; padding:0.3rem; font-size:0.85rem; text-align:center;">
                    </td>
                    <td>
                        <span class="role-badge">${a.category || 'A'} (${a.vertical || 'V1'})</span>
                    </td>
                    <td>${ownerTeam ? ownerTeam.name : '<span style="color:var(--text-muted);">Unassigned</span>'}</td>
                    <td>${a.purchasePrice ? `₹${a.purchasePrice} Cr` : '-'}</td>
                    <td><span class="role-badge" style="background:${a.status === 'Sold' ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.05)'}; color:${a.status === 'Sold' ? 'var(--accent-emerald)' : 'var(--text-muted)'}">${a.status}</span></td>
                    <td>
                        <button class="pdf-btn" style="padding:0.25rem 0.5rem; font-size:0.8rem;" onclick="window.BidApp.saveAssetDetails(${a.id})">Save</button>
                        ${a.status === 'Sold' ? `
                            <button class="pdf-btn" style="padding:0.25rem 0.5rem; font-size:0.8rem;" onclick="window.BidApp.openEditSaleModal(${a.id})">Edit Price</button>
                            <button class="pdf-btn" style="padding:0.25rem 0.5rem; font-size:0.8rem; border-color:var(--accent-rose); color:var(--accent-rose);" onclick="window.BidApp.releaseAsset(${a.id})">Release</button>
                        ` : ''}
                        <button class="btn-danger btn-small" style="padding:0.25rem 0.5rem; font-size:0.8rem;" onclick="window.BidApp.deleteAsset(${a.id})">Delete</button>
                    </td>
                </tr>
            `;
            }).join('');

        teamsEditList.innerHTML = state.teams.length === 0 ? '<p style="color:var(--text-muted);">No teams created yet.</p>' :
            state.teams.map(t => `
            <div style="display:grid; grid-template-columns: 1fr 1fr 100px 140px 80px 80px; gap:0.6rem; align-items:center; margin-bottom:0.8rem; background:#0f172a; padding:0.6rem; border-radius:6px; border:1px solid #1e293b;">
                <input type="text" class="form-control" id="edit-tname-${t.id}" value="${t.name}">
                <input type="text" class="form-control" id="edit-tmembers-${t.id}" value="${t.members}">
                <input type="number" class="form-control" id="edit-tbudget-${t.id}" value="${t.remainingBudget}" min="0" step="1" title="Remaining Budget">
                <select class="form-control" id="edit-tsector-${t.id}">
                    <option value="Formula 1 & Motorsports" ${t.sector === 'Formula 1 & Motorsports' ? 'selected' : ''}>Formula 1</option>
                    <option value="OceanX (Marine & Water Mobility)" ${t.sector === 'OceanX (Marine & Water Mobility)' ? 'selected' : ''}>OceanX</option>
                    <option value="SkyRush (Air Mobility & Aviation Innovation)" ${t.sector === 'SkyRush (Air Mobility & Aviation Innovation)' ? 'selected' : ''}>SkyRush</option>
                    <option value="DriveVerse (Future Ground Mobility)" ${t.sector === 'DriveVerse (Future Ground Mobility)' ? 'selected' : ''}>DriveVerse</option>
                    <option value="Unassigned" ${!t.sector || t.sector === 'Unassigned' ? 'selected' : ''}>Unassigned</option>
                </select>
                <button class="btn-primary-glow btn-small" onclick="window.BidApp.saveTeamDetails(${t.id})">Save</button>
                <button class="btn-danger btn-small" onclick="window.BidApp.deleteTeam(${t.id})">Delete</button>
            </div>
        `).join('');

        phasesEditList.innerHTML = state.eventPhases.length === 0 ? '<p style="color:var(--text-muted);">No event phases created.</p>' :
            state.eventPhases.map(p => `
            <div style="display:grid; grid-template-columns: 60px 1.5fr 3fr 80px 80px; gap:0.6rem; align-items:center; margin-bottom:0.8rem; background:#0f172a; padding:0.6rem; border-radius:6px; border:1px solid #1e293b;">
                <strong style="color:var(--accent-gold); font-size:0.9rem; text-align:center;">#${p.id}</strong>
                <input type="text" class="form-control" id="edit-pname-${p.id}" value="${p.name}">
                <input type="text" class="form-control" id="edit-pdesc-${p.id}" value="${p.desc}">
                <button class="btn-primary-glow btn-small" onclick="window.BidApp.savePhaseDetails(${p.id})">Save</button>
                <button class="btn-danger btn-small" onclick="window.BidApp.deletePhase(${p.id})">Delete</button>
            </div>
        `).join('');
    }

    function getSectorBadgeClass(sector) {
        if (!sector) return 'sector-unassigned';
        if (sector.includes('Formula 1')) return 'sector-f1';
        if (sector.includes('OceanX')) return 'sector-oceanx';
        if (sector.includes('SkyRush')) return 'sector-skyrush';
        if (sector.includes('DriveVerse')) return 'sector-driveverse';
        return 'sector-unassigned';
    }

    // ===========================
    // CONTINUOUS SCROLL & MOUSE WHEEL ZOOMABLE PDF MODULE
    // ===========================
    const pdfState = {
        rulebook: { pdfDoc: null, pageNum: 1, zoom: 1.0, url: 'Rulebook.pdf' },
        catalogue: { pdfDoc: null, pageNum: 1, zoom: 1.0, url: 'Asset List.pdf' }
    };

    function initPDFViewer(type, pdfUrl) {
        const ps = pdfState[type];
        ps.url = pdfUrl;

        const container = document.getElementById(`${type}-canvas-container`);
        const viewportWrapper = document.getElementById(`${type}-pdf-body`);
        const fallbackIframe = document.getElementById(`${type}-fallback-iframe`);

        if (typeof pdfjsLib !== 'undefined') {
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
                ps.pdfDoc = pdf;
                document.getElementById(`${type}-page-count`).innerText = pdf.numPages;
                renderPDFDocument(type);

                if (container) container.style.display = 'flex';
                if (fallbackIframe) fallbackIframe.style.display = 'none';

                // Setup wheel zoom & scroll tracking
                setupPDFWheelAndScrollHandlers(type);
            }).catch(err => {
                if (container) container.style.display = 'none';
                if (fallbackIframe) fallbackIframe.style.display = 'block';
            });
        } else {
            if (container) container.style.display = 'none';
            if (fallbackIframe) fallbackIframe.style.display = 'block';
        }
    }

    function renderPDFDocument(type) {
        const ps = pdfState[type];
        if (!ps.pdfDoc) return;

        const container = document.getElementById(`${type}-canvas-container`);
        if (!container) return;
        container.innerHTML = '';

        const totalPages = ps.pdfDoc.numPages;

        for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
            const pageCanvas = document.createElement('canvas');
            pageCanvas.id = `${type}-page-canvas-${pageNum}`;
            pageCanvas.className = 'pdf-page-canvas';
            container.appendChild(pageCanvas);

            (function (num, canvas) {
                ps.pdfDoc.getPage(num).then(page => {
                    const ctx = canvas.getContext('2d');
                    const viewport = page.getViewport({ scale: ps.zoom });

                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    const renderContext = {
                        canvasContext: ctx,
                        viewport: viewport
                    };
                    page.render(renderContext);
                });
            })(pageNum, pageCanvas);
        }
    }

    function setupPDFWheelAndScrollHandlers(type) {
        const ps = pdfState[type];
        const viewportWrapper = document.getElementById(`${type}-pdf-body`);
        if (!viewportWrapper || viewportWrapper.dataset.wheelBound) return;

        viewportWrapper.dataset.wheelBound = "true";

        // MOUSE WHEEL ZOOM HANDLER (Ctrl + Wheel or Pinch)
        viewportWrapper.addEventListener('wheel', (e) => {
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                const delta = e.deltaY < 0 ? 0.15 : -0.15;
                const newZoom = Math.min(Math.max(0.4, ps.zoom + delta), 3.0);
                if (newZoom !== ps.zoom) {
                    ps.zoom = newZoom;
                    renderPDFDocument(type);
                }
            }
        }, { passive: false });

        // DYNAMIC PAGE NUMBER TRACKING ON VERTICAL SCROLL
        viewportWrapper.addEventListener('scroll', () => {
            if (!ps.pdfDoc) return;
            const container = document.getElementById(`${type}-canvas-container`);
            if (!container) return;

            const canvases = container.querySelectorAll('.pdf-page-canvas');
            const wrapperRect = viewportWrapper.getBoundingClientRect();

            canvases.forEach((canvas, index) => {
                const rect = canvas.getBoundingClientRect();
                if (rect.top <= wrapperRect.top + 100 && rect.bottom >= wrapperRect.top + 50) {
                    const currentPage = index + 1;
                    if (ps.pageNum !== currentPage) {
                        ps.pageNum = currentPage;
                        const pageInput = document.getElementById(`${type}-page-num`);
                        if (pageInput) pageInput.value = currentPage;
                    }
                }
            });
        });
    }

    function jumpToPDFPage(type, targetPage) {
        const ps = pdfState[type];
        if (!ps.pdfDoc || targetPage < 1 || targetPage > ps.pdfDoc.numPages) return;
        ps.pageNum = targetPage;
        document.getElementById(`${type}-page-num`).value = targetPage;

        const targetCanvas = document.getElementById(`${type}-page-canvas-${targetPage}`);
        if (targetCanvas) {
            targetCanvas.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // ===========================
    // THEME ENGINE (LIGHT: WHITE & ORANGE / DARK: DARK GREY & ORANGE)
    // ===========================
    function initTheme() {
        const savedTheme = localStorage.getItem('bid_biz_theme_pref') || 'light';
        setTheme(savedTheme);
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('bid_biz_theme_pref', theme);
        const toggleBtn = document.getElementById('btn-theme-toggle');
        if (toggleBtn) {
            if (theme === 'dark') {
                toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Light';
            } else {
                toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark';
            }
        }
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
        showToast(`<i class="fa-solid fa-palette"></i> Switched to ${nextTheme === 'dark' ? 'Dark Grey' : 'White'} & Orange Theme`);
    }

    // ===========================
    // EVENT LISTENERS & ACTION HANDLERS
    // ===========================
    function setupEventListeners() {
        // Theme Toggle Button
        const themeBtn = document.getElementById('btn-theme-toggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', toggleTheme);
        }

        // Phase Dropdown Toggle in Navbar
        const phaseTrigger = document.getElementById('phase-badge-trigger');
        const phaseMenu = document.getElementById('header-phase-dropdown-menu');

        if (phaseTrigger && phaseMenu) {
            phaseTrigger.addEventListener('click', (e) => {
                e.stopPropagation();
                phaseMenu.classList.toggle('show');
            });

            document.addEventListener('click', () => {
                phaseMenu.classList.remove('show');
            });
        }

        // Enable System Notifications Button
        const btnNotif = document.getElementById('btn-enable-notifications');
        if (btnNotif) {
            btnNotif.addEventListener('click', () => requestNotificationPermission(false));
            updateNotificationButtonUI();
        }

        // Admin Passcode Modal Submit
        document.getElementById('admin-passcode-submit').addEventListener('click', () => {
            const input = document.getElementById('admin-passcode-input').value;
            if (input === DEFAULT_PASSCODE || input === '') {
                document.getElementById('admin-passcode-modal').style.display = 'none';
                document.getElementById('admin-passcode-input').value = '';
                setRole('admin');
                switchView('admin');
                showToast('<i class="fa-solid fa-bolt"></i> Logged in as Admin');
            } else {
                showToast('Invalid Passcode!', true);
            }
        });

        document.getElementById('admin-passcode-cancel').addEventListener('click', () => {
            document.getElementById('admin-passcode-modal').style.display = 'none';
            document.getElementById('admin-passcode-input').value = '';
        });

        document.getElementById('btn-admin-logout').addEventListener('click', () => {
            setRole('participant');
            showToast('Logged out of Admin Mode');
        });

        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') || (e.shiftKey && e.key.toLowerCase() === 'a' && document.activeElement.tagName !== 'INPUT')) {
                e.preventDefault();
                document.getElementById('admin-passcode-modal').style.display = 'flex';
                document.getElementById('admin-passcode-input').focus();
            }
        });

        const footerTrigger = document.getElementById('footer-admin-trigger');
        if (footerTrigger) {
            footerTrigger.addEventListener('click', () => {
                document.getElementById('admin-passcode-modal').style.display = 'flex';
                document.getElementById('admin-passcode-input').focus();
            });
        }

        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => switchView(btn.dataset.view));
        });

        document.getElementById('header-logo-click').addEventListener('click', () => switchView('rulebook'));

        document.getElementById('btn-close-announcement').addEventListener('click', () => {
            document.getElementById('announcement-bar').style.display = 'none';
        });

        document.querySelectorAll('.admin-subtab-btn').forEach(btn => {
            btn.addEventListener('click', () => switchAdminSubtab(btn.dataset.subtab));
        });

        // Admin Action: Record Offline Bid
        document.getElementById('btn-admin-submit-bid').addEventListener('click', () => {
            const assetId = parseInt(document.getElementById('admin-assign-asset-select').value);
            const teamId = parseInt(document.getElementById('admin-assign-team-select').value);
            const price = parseFloat(document.getElementById('admin-assign-price-input').value);

            if (!assetId || !teamId || isNaN(price) || price <= 0) {
                showToast('Please select valid asset, team and purchase price!', true);
                return;
            }

            const team = state.teams.find(t => t.id === teamId);
            const asset = state.assets.find(a => a.id === assetId);

            const ownedCount = state.assets.filter(a => a.ownerTeamId === teamId && a.status === 'Sold').length;
            if (ownedCount >= 5) {
                showToast(`Limit Reached! ${team.name} already owns the maximum allowed 5 assets.`, true);
                return;
            }

            if (team.remainingBudget < price) {
                showToast(`Insufficient Budget! ${team.name} only has ₹${team.remainingBudget} Cr remaining.`, true);
                return;
            }

            pushHistorySnapshot();
            team.remainingBudget -= price;
            asset.ownerTeamId = teamId;
            asset.purchasePrice = price;
            asset.status = 'Sold';

            document.getElementById('admin-assign-price-input').value = '';
            broadcastUpdate();
            renderAllViews();
            showToast(`<i class="fa-solid fa-gavel"></i> Asset #${asset.id} sold to ${team.name} for ₹${price} Cr!`);
            sendSystemNotification('Asset Sold', `Asset #${asset.id} ${asset.name} sold to ${team.name} for ₹${price} Cr!`);
        });

        // Admin Action: Assign Sector
        document.getElementById('btn-admin-submit-sector').addEventListener('click', () => {
            const teamId = parseInt(document.getElementById('admin-sector-team-select').value);
            const sectorName = document.getElementById('admin-sector-name-select').value;
            const team = state.teams.find(t => t.id === teamId);

            if (team) {
                pushHistorySnapshot();
                team.sector = sectorName;
                broadcastUpdate();
                renderAllViews();
                showToast(`<i class="fa-solid fa-car-side"></i> ${team.name} assigned to sector: ${sectorName}`);
                sendSystemNotification('Sector Assigned', `${team.name} assigned to sector: ${sectorName}`);
            }
        });

        // Admin Action: Adjust Budget
        document.getElementById('btn-admin-submit-budget').addEventListener('click', () => {
            const teamId = parseInt(document.getElementById('admin-budget-team-select').value);
            const type = document.getElementById('admin-budget-type-select').value;
            const amount = parseFloat(document.getElementById('admin-budget-amount-input').value);
            const team = state.teams.find(t => t.id === teamId);

            if (!team || isNaN(amount) || amount < 0) {
                showToast('Please enter a valid amount!', true);
                return;
            }

            pushHistorySnapshot();
            if (type === 'add') team.remainingBudget += amount;
            if (type === 'deduct') team.remainingBudget = Math.max(0, team.remainingBudget - amount);
            if (type === 'set') team.remainingBudget = amount;

            document.getElementById('admin-budget-amount-input').value = '';
            broadcastUpdate();
            renderAllViews();
            showToast(`<i class="fa-solid fa-coins"></i> Budget updated for ${team.name}: ₹${team.remainingBudget} Cr`);
        });

        // Admin Action: Change Phase
        document.getElementById('btn-admin-submit-phase').addEventListener('click', () => {
            const phaseVal = parseInt(document.getElementById('admin-phase-select').value);
            setActivePhaseInternal(phaseVal);
        });

        // Admin Action: Push Announcement
        document.getElementById('btn-admin-submit-notice').addEventListener('click', () => {
            const text = document.getElementById('admin-notice-input').value.trim();
            if (!text) {
                showToast('Please enter notice text!', true);
                return;
            }
            pushHistorySnapshot();
            state.announcements.push({
                id: Date.now(),
                text: text,
                time: new Date().toLocaleTimeString()
            });
            document.getElementById('admin-notice-input').value = '';
            broadcastUpdate();
            renderAllViews();
            showToast('<i class="fa-solid fa-bullhorn"></i> Announcement published!');
            sendSystemNotification('Bid A Biz Announcement', text);
        });

        // DYNAMIC ADD TEAM
        document.getElementById('btn-admin-add-team').addEventListener('click', () => {
            const name = document.getElementById('admin-new-team-name').value.trim();
            const members = document.getElementById('admin-new-team-members').value.trim();
            const budget = parseFloat(document.getElementById('admin-new-team-budget').value);
            const sector = document.getElementById('admin-new-team-sector').value;

            if (!name) {
                showToast('Please enter a Team Name!', true);
                return;
            }

            pushHistorySnapshot();
            const newId = state.teams.length > 0 ? Math.max(...state.teams.map(t => t.id)) + 1 : 1;
            state.teams.push({
                id: newId,
                name: name,
                members: members || 'Unspecified',
                remainingBudget: isNaN(budget) ? 100 : budget,
                sector: sector || 'Unassigned'
            });

            document.getElementById('admin-new-team-name').value = '';
            document.getElementById('admin-new-team-members').value = '';
            broadcastUpdate();
            renderAllViews();
            showToast(`<i class="fa-solid fa-users"></i> Team "${name}" created!`);
        });

        // DYNAMIC ADD ASSET
        document.getElementById('btn-admin-add-asset').addEventListener('click', () => {
            const name = document.getElementById('admin-new-asset-name').value.trim();
            const price = parseFloat(document.getElementById('admin-new-asset-price').value);
            const category = document.getElementById('admin-new-asset-cat').value;
            const vertical = document.getElementById('admin-new-asset-vert').value;

            if (!name || isNaN(price) || price <= 0) {
                showToast('Please enter asset name and valid base price!', true);
                return;
            }

            pushHistorySnapshot();
            const newId = state.assets.length > 0 ? Math.max(...state.assets.map(a => a.id)) + 1 : 1;
            state.assets.push({
                id: newId,
                name: name,
                basePrice: price,
                category: category,
                vertical: vertical,
                ownerTeamId: null,
                purchasePrice: null,
                status: 'Available'
            });

            document.getElementById('admin-new-asset-name').value = '';
            document.getElementById('admin-new-asset-price').value = '';
            broadcastUpdate();
            renderAllViews();
            showToast(`<i class="fa-solid fa-box"></i> Asset #${newId} "${name}" created!`);
        });

        // DYNAMIC ADD EVENT PHASE
        document.getElementById('btn-admin-add-phase').addEventListener('click', () => {
            const name = document.getElementById('admin-new-phase-name').value.trim();
            const desc = document.getElementById('admin-new-phase-desc').value.trim();

            if (!name) {
                showToast('Please enter phase title!', true);
                return;
            }

            pushHistorySnapshot();
            const newId = state.eventPhases.length > 0 ? Math.max(...state.eventPhases.map(p => p.id)) + 1 : 1;
            state.eventPhases.push({
                id: newId,
                name: name,
                desc: desc || 'Custom event stage'
            });

            document.getElementById('admin-new-phase-name').value = '';
            document.getElementById('admin-new-phase-desc').value = '';
            broadcastUpdate();
            renderAllViews();
            showToast(`<i class="fa-solid fa-list-check"></i> Event Phase #${newId} "${name}" created!`);
        });

        // Preset notice buttons
        document.querySelectorAll('.preset-announcement-btns .btn-tag').forEach(btn => {
            btn.addEventListener('click', () => {
                document.getElementById('admin-notice-input').value = btn.dataset.notice;
            });
        });

        document.getElementById('btn-admin-undo').addEventListener('click', undoLastAction);
        document.getElementById('btn-admin-reset-system').addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all teams, assets, and event phases to default state?')) {
                pushHistorySnapshot();
                state.eventPhases = getDefaultPhases();
                state.teams = getDefaultTeams();
                state.assets = getDefaultAssets();
                state.currentPhase = 1;
                broadcastUpdate();
                renderAllViews();
                showToast('<i class="fa-solid fa-triangle-exclamation"></i> Reset state to defaults!');
            }
        });

        // Edit Sale Modal Save
        document.getElementById('edit-sale-save').addEventListener('click', () => {
            if (!editingAssetId) return;
            const newTeamId = parseInt(document.getElementById('edit-sale-team-select').value);
            const newPrice = parseFloat(document.getElementById('edit-sale-price-input').value);
            const asset = state.assets.find(a => a.id === editingAssetId);

            if (!asset || isNaN(newPrice) || newPrice <= 0) {
                showToast('Invalid purchase price!', true);
                return;
            }

            if (asset.ownerTeamId !== newTeamId) {
                const targetOwned = state.assets.filter(a => a.ownerTeamId === newTeamId && a.status === 'Sold').length;
                if (targetOwned >= 5) {
                    showToast(`Limit Reached! Target team already owns the maximum 5 assets.`, true);
                    return;
                }
            }

            pushHistorySnapshot();

            if (asset.ownerTeamId) {
                const oldTeam = state.teams.find(t => t.id === asset.ownerTeamId);
                if (oldTeam) oldTeam.remainingBudget += asset.purchasePrice;
            }

            const newTeam = state.teams.find(t => t.id === newTeamId);
            if (newTeam) newTeam.remainingBudget -= newPrice;

            asset.ownerTeamId = newTeamId;
            asset.purchasePrice = newPrice;
            asset.status = 'Sold';

            document.getElementById('edit-sale-modal').style.display = 'none';
            broadcastUpdate();
            renderAllViews();
            showToast('<i class="fa-solid fa-pen-to-square"></i> Sale updated successfully!');
        });

        document.getElementById('edit-sale-cancel').addEventListener('click', () => {
            document.getElementById('edit-sale-modal').style.display = 'none';
        });

        document.getElementById('btn-close-portfolio-modal').addEventListener('click', () => {
            document.getElementById('portfolio-modal').style.display = 'none';
        });

        document.getElementById('portfolio-team-selector').addEventListener('change', renderPortfoliosView);
        document.getElementById('admin-asset-status-filter').addEventListener('change', renderAdminControls);

        // PDF Viewer Navigation Controls
        ['rulebook', 'catalogue'].forEach(type => {
            const ps = pdfState[type];
            document.getElementById(`${type}-prev`).addEventListener('click', () => {
                if (ps.pageNum > 1) {
                    jumpToPDFPage(type, ps.pageNum - 1);
                }
            });
            document.getElementById(`${type}-next`).addEventListener('click', () => {
                if (ps.pdfDoc && ps.pageNum < ps.pdfDoc.numPages) {
                    jumpToPDFPage(type, ps.pageNum + 1);
                }
            });
            document.getElementById(`${type}-page-num`).addEventListener('change', (e) => {
                const val = parseInt(e.target.value);
                if (ps.pdfDoc && val >= 1 && val <= ps.pdfDoc.numPages) {
                    jumpToPDFPage(type, val);
                }
            });
        });
    }

    function setActivePhaseInternal(phaseVal) {
        pushHistorySnapshot();
        state.currentPhase = phaseVal;

        const phaseObj = state.eventPhases.find(p => p.id === phaseVal) || { name: `Phase ${phaseVal}` };
        const noticeMsg = `Phase Transition: Event is now in Phase ${phaseVal} — ${phaseObj.name}`;
        state.announcements.push({
            id: Date.now(),
            text: noticeMsg,
            time: new Date().toLocaleTimeString()
        });

        broadcastUpdate();
        renderAllViews();
        showToast(`<i class="fa-solid fa-bolt"></i> Phase changed to: ${phaseObj.name}`);
        sendSystemNotification('Event Phase Transition', noticeMsg);
    }

    // EXPOSE PUBLIC METHODS FOR INLINE ONCLICK HANDLERS
    window.BidApp = {
        setActivePhase: function(phaseId) {
            if (state.role === 'admin') {
                setActivePhaseInternal(phaseId);
            }
        },

        openPortfolioModal: function (teamId) {
            const team = state.teams.find(t => t.id === teamId);
            if (!team) return;
            const ownedAssets = state.assets.filter(a => a.ownerTeamId === team.id && a.status === 'Sold');
            const totalSpend = ownedAssets.reduce((sum, a) => sum + (a.purchasePrice || 0), 0);

            document.getElementById('modal-team-name').innerText = team.name;
            document.getElementById('modal-team-sector').innerText = team.sector || 'Unassigned';
            document.getElementById('modal-team-sector').className = `sector-badge ${getSectorBadgeClass(team.sector)}`;
            document.getElementById('modal-team-budget').innerText = `₹${team.remainingBudget} Cr`;
            document.getElementById('modal-team-assets-count').innerText = `${ownedAssets.length}/5`;
            document.getElementById('modal-team-total-spend').innerText = `₹${totalSpend} Cr`;
            document.getElementById('modal-team-members').innerText = team.members || 'No members listed';

            const tbody = document.getElementById('modal-portfolio-assets-tbody');
            tbody.innerHTML = ownedAssets.length === 0 ? '<tr><td colspan="4" style="text-align:center; color:var(--text-muted);">No assets owned yet</td></tr>' :
                ownedAssets.map(a => `
                    <tr>
                        <td><strong>#${a.id}</strong></td>
                        <td>${a.name}</td>
                        <td>Category ${a.category} (${a.vertical})</td>
                        <td><strong style="color:var(--accent-rose);">₹${a.purchasePrice} Cr</strong></td>
                    </tr>
                `).join('');

            document.getElementById('portfolio-modal').style.display = 'flex';
        },

        openEditSaleModal: function (assetId) {
            editingAssetId = assetId;
            const asset = state.assets.find(a => a.id === assetId);
            if (!asset) return;

            document.getElementById('edit-sale-title').innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Edit Sale: #${asset.id} ${asset.name}`;
            const sel = document.getElementById('edit-sale-team-select');
            sel.innerHTML = state.teams.map(t => {
                const ownedCount = state.assets.filter(a => a.ownerTeamId === t.id && a.status === 'Sold').length;
                const isFull = ownedCount >= 5 && t.id !== asset.ownerTeamId;
                return `<option value="${t.id}" ${isFull ? 'disabled' : ''}>
                    ${isFull ? '[FULL 5/5] ' : ''}${t.name} (Assets: ${ownedCount}/5)
                </option>`;
            }).join('');
            sel.value = asset.ownerTeamId;
            document.getElementById('edit-sale-price-input').value = asset.purchasePrice || asset.basePrice;

            document.getElementById('edit-sale-modal').style.display = 'flex';
        },

        releaseAsset: function (assetId) {
            const asset = state.assets.find(a => a.id === assetId);
            if (!asset || asset.status !== 'Sold') return;
            if (confirm(`Release #${asset.id} ${asset.name} back to Available market?`)) {
                pushHistorySnapshot();
                const team = state.teams.find(t => t.id === asset.ownerTeamId);
                if (team) team.remainingBudget += asset.purchasePrice;

                asset.ownerTeamId = null;
                asset.purchasePrice = null;
                asset.status = 'Available';

                broadcastUpdate();
                renderAllViews();
                showToast(`<i class="fa-solid fa-lock-open"></i> Asset #${asset.id} released back to Available market.`);
            }
        },

        saveTeamDetails: function (teamId) {
            const name = document.getElementById(`edit-tname-${teamId}`).value.trim();
            const members = document.getElementById(`edit-tmembers-${teamId}`).value.trim();
            const budget = parseFloat(document.getElementById(`edit-tbudget-${teamId}`).value);
            const sector = document.getElementById(`edit-tsector-${teamId}`).value;
            const team = state.teams.find(t => t.id === teamId);

            if (team && name) {
                pushHistorySnapshot();
                team.name = name;
                team.members = members;
                if (!isNaN(budget)) team.remainingBudget = budget;
                team.sector = sector;
                broadcastUpdate();
                renderAllViews();
                showToast(`<i class="fa-solid fa-users"></i> Details updated for ${team.name}`);
            }
        },

        deleteTeam: function (teamId) {
            const team = state.teams.find(t => t.id === teamId);
            if (!team) return;
            if (confirm(`Delete team "${team.name}"? Any owned assets will be released back to market.`)) {
                pushHistorySnapshot();
                state.assets.forEach(a => {
                    if (a.ownerTeamId === teamId) {
                        a.ownerTeamId = null;
                        a.purchasePrice = null;
                        a.status = 'Available';
                    }
                });
                state.teams = state.teams.filter(t => t.id !== teamId);
                broadcastUpdate();
                renderAllViews();
                showToast(`<i class="fa-solid fa-trash-can"></i> Team "${team.name}" deleted.`);
            }
        },

        saveAssetDetails: function (assetId) {
            const name = document.getElementById(`edit-aname-${assetId}`).value.trim();
            const basePrice = parseFloat(document.getElementById(`edit-aprice-${assetId}`).value);
            const asset = state.assets.find(a => a.id === assetId);

            if (asset && name && !isNaN(basePrice)) {
                pushHistorySnapshot();
                asset.name = name;
                asset.basePrice = basePrice;
                broadcastUpdate();
                renderAllViews();
                showToast(`<i class="fa-solid fa-box"></i> Asset #${asset.id} updated!`);
            }
        },

        deleteAsset: function (assetId) {
            const asset = state.assets.find(a => a.id === assetId);
            if (!asset) return;
            if (confirm(`Delete asset #${asset.id} "${asset.name}"?`)) {
                pushHistorySnapshot();
                if (asset.ownerTeamId && asset.purchasePrice) {
                    const team = state.teams.find(t => t.id === asset.ownerTeamId);
                    if (team) team.remainingBudget += asset.purchasePrice;
                }
                state.assets = state.assets.filter(a => a.id !== assetId);
                broadcastUpdate();
                renderAllViews();
                showToast(`<i class="fa-solid fa-trash-can"></i> Asset #${assetId} deleted.`);
            }
        },

        savePhaseDetails: function (phaseId) {
            const name = document.getElementById(`edit-pname-${phaseId}`).value.trim();
            const desc = document.getElementById(`edit-pdesc-${phaseId}`).value.trim();
            const phase = state.eventPhases.find(p => p.id === phaseId);

            if (phase && name) {
                pushHistorySnapshot();
                phase.name = name;
                phase.desc = desc;
                broadcastUpdate();
                renderAllViews();
                showToast(`<i class="fa-solid fa-list-check"></i> Phase #${phase.id} updated!`);
            }
        },

        deletePhase: function (phaseId) {
            const phase = state.eventPhases.find(p => p.id === phaseId);
            if (!phase) return;
            if (confirm(`Delete event phase #${phase.id} "${phase.name}"?`)) {
                pushHistorySnapshot();
                state.eventPhases = state.eventPhases.filter(p => p.id !== phaseId);
                if (state.currentPhase === phaseId) {
                    state.currentPhase = state.eventPhases.length > 0 ? state.eventPhases[0].id : 1;
                }
                broadcastUpdate();
                renderAllViews();
                showToast(`<i class="fa-solid fa-trash-can"></i> Phase #${phaseId} deleted.`);
            }
        }
    };

    function showToast(msg, isError = false) {
        const container = document.getElementById('toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast-msg';
        if (isError) toast.style.borderColor = '#ef4444';
        toast.innerHTML = msg;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3500);
    }

    document.addEventListener('DOMContentLoaded', () => {
        initTheme();
        loadState();
        setupEventListeners();
        setRole('participant');
        renderAllViews();
        switchView('rulebook');
        setInterval(checkServerStatePoll, 3000);

        if ('Notification' in window && Notification.permission === 'default') {
            setTimeout(() => {
                requestNotificationPermission(true);
            }, 600);
        }
    });

})();
