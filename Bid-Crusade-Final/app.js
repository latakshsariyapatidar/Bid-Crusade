// ============================================
// BID A BIZ GRAND FINALE — PARTICIPANT-FIRST & DYNAMIC SIMULATION ENGINE (v3.0)
// Real-time Startup Strategic Acquisition & Auction Platform
// ============================================

(function () {
    'use strict';

    // Default Datasets
    function getDefaultAssets() {
        return [
            { id: 1, name: "Pan-India Distribution Rights", category: "A", vertical: "V3", basePrice: 11, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 2, name: "Multi-Specialty Hospital Unit", category: "A", vertical: "V1", basePrice: 21, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 3, name: "Multi-Sector ESG Certification Portfolio", category: "A", vertical: "V4", basePrice: 6, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 4, name: "Automated Robotics Assembly System", category: "A", vertical: "V2", basePrice: 14, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 5, name: "Regional Telecom Spectrum Allocation", category: "A", vertical: "V3", basePrice: 18, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 6, name: "Industrial Manufacturing Plant", category: "A", vertical: "V1", basePrice: 21, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 7, name: "Urban Smart Monitoring Network", category: "A", vertical: "V2", basePrice: 9, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 8, name: "Government Infrastructure Contract", category: "A", vertical: "V4", basePrice: 16, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 9, name: "Infrastructure Maintenance Rights", category: "A", vertical: "V4", basePrice: 7, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 10, name: "Mining & Raw Material Extraction Lease", category: "A", vertical: "V1", basePrice: 22, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 11, name: "National Logistics Fleet & Warehousing", category: "B", vertical: "V3", basePrice: 15, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 12, name: "Advanced Cybersecurity Suite", category: "B", vertical: "V2", basePrice: 10, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 13, name: "Tier-2 City Zoned Land Bank", category: "B", vertical: "V4", basePrice: 15, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 14, name: "Multi-Brand Automobile Assembly Unit", category: "B", vertical: "V1", basePrice: 20, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 15, name: "Export-Import Multi-Nation License", category: "B", vertical: "V3", basePrice: 12, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 16, name: "AI & Data Analytics Infrastructure", category: "B", vertical: "V2", basePrice: 12, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 17, name: "Private Power Backup Microgrid", category: "B", vertical: "V4", basePrice: 9, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 18, name: "Cross-Platform Mobile App Ecosystem", category: "B", vertical: "V2", basePrice: 8, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 19, name: "Cold Chain Pharma Distribution", category: "B", vertical: "V3", basePrice: 13, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 20, name: "Cloud Server Farm Facility", category: "B", vertical: "V1", basePrice: 18, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 21, name: "Regulatory Compliance Shield", category: "C", vertical: "V4", basePrice: 8, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 22, name: "Cross-Industry Patent Portfolio", category: "C", vertical: "V2", basePrice: 9, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 23, name: "Multi-State Retail Franchise Rights", category: "C", vertical: "V3", basePrice: 13, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 24, name: "Metropolitan Commercial Tower", category: "C", vertical: "V1", basePrice: 19, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 25, name: "Strategic Smart City Land Reserve", category: "C", vertical: "V4", basePrice: 13, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 26, name: "R&D Innovation Hub", category: "C", vertical: "V2", basePrice: 11, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 27, name: "Commercial Banking & NBFC License", category: "C", vertical: "V3", basePrice: 14, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 28, name: "Pharmaceutical Manufacturing Facility", category: "C", vertical: "V1", basePrice: 19, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 29, name: "Cold Storage Network", category: "C", vertical: "V3", basePrice: 12, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 30, name: "High-Speed Data Cable Network", category: "C", vertical: "V2", basePrice: 11, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 31, name: "Long-Term Raw Material Supply Contract", category: "D", vertical: "V4", basePrice: 10, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 32, name: "Agricultural Processing Facility", category: "D", vertical: "V1", basePrice: 15, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 33, name: "Scalable E-Commerce Platform", category: "D", vertical: "V3", basePrice: 13, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 34, name: "Data Center Cooling System", category: "D", vertical: "V2", basePrice: 8, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 35, name: "Commodity Trading Desk License", category: "D", vertical: "V4", basePrice: 11, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 36, name: "Green Hydrogen Pilot Plant", category: "D", vertical: "V1", basePrice: 19, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 37, name: "National Warehouse Network", category: "D", vertical: "V3", basePrice: 15, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 38, name: "Renewable Energy Solar Grid", category: "D", vertical: "V1", basePrice: 20, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 39, name: "Strategic Insurance & Risk Hedging", category: "D", vertical: "V4", basePrice: 7, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] },
            { id: 40, name: "Enterprise ERP & Automation System", category: "D", vertical: "V2", basePrice: 10, ownerTeamId: null, purchasePrice: null, status: 'Available', released: false, highestBid: null, highestBidderTeamId: null, highestBidderTeamName: null, bidHistory: [] }
        ];
    }

    function getDefaultPhases() {
        return [
            { id: 1, name: "Welcome & Briefing", desc: "Welcome address, event ground rules overview, and team orientation." },
            { id: 2, name: "Sector Allocation", desc: "Sealed envelope selection and domain strategy assignment for competing teams." },
            { id: 3, name: "Premium Auction", desc: "High-value flagship asset bidding round (Gold Theme)." },
            { id: 4, name: "Core Auction", desc: "Core business driver asset bidding round (Silver Theme)." },
            { id: 5, name: "Support Auction", desc: "Enabler, infrastructure, and technology asset bidding round (Bronze Theme)." },
            { id: 6, name: "Industry Disruption", desc: "Unforeseen macro-economic shift event reshuffling strategic valuations." },
            { id: 7, name: "Negotiation Window", desc: "10-minute inter-team trading, sector realignment, and deal-making phase." },
            { id: 8, name: "Redistribution Market", desc: "Strategic asset restructuring release and secondary bidding market." },
            { id: 9, name: "Final PPT Submission", desc: "20-minute timer to submit final presentation deck via WhatsApp." },
            { id: 10, name: "Evaluation", desc: "Executive jury panel reviews portfolios, strategic depth, and risk discipline." },
            { id: 11, name: "Results", desc: "Grand Finale winners announcement and email notification." }
        ];
    }

    function getDefaultTeams() {
        return [
            { id: 1, name: "Team Apex Velocity", members: "Alex, Jordan, Sam", sector: "Formula 1 & Motorsports", remainingBudget: 100, envelopeOpened: false, password: "apex@2026" },
            { id: 2, name: "Team Ocean Dynamics", members: "Chris, Taylor, Morgan", sector: "OceanX (Marine & Water Mobility)", remainingBudget: 100, envelopeOpened: false, password: "ocean@2026" },
            { id: 3, name: "Team Aero Horizon", members: "Riley, Casey, Drew", sector: "SkyRush (Air Mobility & Aviation Innovation)", remainingBudget: 100, envelopeOpened: false, password: "aero@2026" },
            { id: 4, name: "Team Drive Matrix", members: "Avery, Quinn, Dakota", sector: "DriveVerse (Future Ground Mobility)", remainingBudget: 100, envelopeOpened: false, password: "drive@2026" },
            { id: 5, name: "Team HyperDrive", members: "Reese, Peyton, Hayden", sector: "Formula 1 & Motorsports", remainingBudget: 100, envelopeOpened: false, password: "hyper@2026" },
            { id: 6, name: "Team Nautilus", members: "Emerson, Rowan, Kai", sector: "OceanX (Marine & Water Mobility)", remainingBudget: 100, envelopeOpened: false, password: "nautilus@2026" },
            { id: 7, name: "Team Skystream", members: "Skyler, Jesse, Frankie", sector: "SkyRush (Air Mobility & Aviation Innovation)", remainingBudget: 100, envelopeOpened: false, password: "skystream@2026" },
            { id: 8, name: "Team GroundForce", members: "Micah, Shiloh, Logan", sector: "DriveVerse (Future Ground Mobility)", remainingBudget: 100, envelopeOpened: false, password: "ground@2026" }
        ];
    }

    function getShortSectorName(sector) {
        if (!sector) return 'Unassigned';
        if (sector.includes('Formula 1')) return 'Formula 1';
        if (sector.includes('OceanX')) return 'OceanX';
        if (sector.includes('SkyRush')) return 'SkyRush';
        if (sector.includes('DriveVerse')) return 'DriveVerse';
        return sector;
    }

    const DEFAULT_PASSCODE = 'bid@2026@adm!n';
    const STORAGE_KEY = 'bid_biz_finale_v30';
    const SESSION_KEY = 'bid_biz_user_session_v30';
    const BROADCAST_CHANNEL_NAME = 'bid_biz_events_v30';

    // APPLICATION STATE
    let state = {
        currentUser: null, // { role: 'participant' | 'admin', teamId: number | null, teamName: string | null }
        currentPhase: 1,
        activeView: 'landing', // LANDING DEFAULT VIEW BEFORE LOGIN
        activeAdminSubtab: 'auction',
        announcements: [
            { id: 1, text: "💡 Recommend one teammate keeps updating the PPT presentation throughout the auction!", time: new Date().toLocaleTimeString() }
        ],
        eventPhases: getDefaultPhases(),
        teams: getDefaultTeams(),
        assets: getDefaultAssets(),
        historyStack: [],
        timers: {
            negotiation: 600, // 10 mins
            negotiationRunning: false,
            submission: 1200, // 20 mins
            submissionRunning: false
        },
        editingAssetSaleId: null
    };

    let timerInterval = null;

    // ===========================
    // INITIALIZATION & TIMERS
    // ===========================
    function initApp() {
        loadState();
        loadSession();

        setupEventListeners();
        startTimerTick();

        if (state.currentUser) {
            switchView('home');
        } else {
            switchView('landing');
        }

        checkServerStatePoll();
    }

    function startTimerTick() {
        if (timerInterval) clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            let updated = false;
            if (state.timers.negotiationRunning && state.timers.negotiation > 0) {
                state.timers.negotiation--;
                updated = true;
            }
            if (state.timers.submissionRunning && state.timers.submission > 0) {
                state.timers.submission--;
                updated = true;
            }
            if (updated) {
                updateTimerDisplays();
            }
        }, 1000);
    }

    function updateTimerDisplays() {
        const negElem = document.getElementById('negotiation-timer-display');
        if (negElem) negElem.innerText = formatTime(state.timers.negotiation);

        const subElem = document.getElementById('submission-timer-display');
        if (subElem) subElem.innerText = formatTime(state.timers.submission);
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // ===========================
    // USER SESSION MANAGEMENT
    // ===========================
    function loadSession() {
        try {
            const savedSession = localStorage.getItem(SESSION_KEY);
            if (savedSession) {
                state.currentUser = JSON.parse(savedSession);
            }
        } catch (e) {}
        updateUserHeaderUI();
    }

    function saveSession() {
        try {
            if (state.currentUser) {
                localStorage.setItem(SESSION_KEY, JSON.stringify(state.currentUser));
            } else {
                localStorage.removeItem(SESSION_KEY);
            }
        } catch (e) {}
        updateUserHeaderUI();
    }

    function updateUserHeaderUI() {
        const userBadge = document.getElementById('user-session-badge');
        const userNameElem = document.getElementById('logged-in-user-name');
        const adminIndicator = document.getElementById('admin-session-indicator');
        const adminNav = document.getElementById('nav-admin');
        const logoutNav = document.getElementById('nav-logout');

        if (state.currentUser) {
            if (userBadge) userBadge.style.display = 'inline-flex';
            if (userNameElem) {
                userNameElem.innerHTML = state.currentUser.role === 'admin'
                    ? '<i class="fa-solid fa-shield-halved"></i> Admin'
                    : `<i class="fa-solid fa-user"></i> ${state.currentUser.teamName || 'Participant'}`;
            }
            if (logoutNav) logoutNav.style.display = 'inline-flex';

            if (state.currentUser.role === 'admin') {
                if (adminIndicator) adminIndicator.style.display = 'flex';
                if (adminNav) adminNav.style.display = 'inline-flex';
            } else {
                if (adminIndicator) adminIndicator.style.display = 'none';
                if (adminNav) adminNav.style.display = 'none';
            }
        } else {
            if (userBadge) userBadge.style.display = 'none';
            if (adminIndicator) adminIndicator.style.display = 'none';
            if (adminNav) adminNav.style.display = 'none';
            if (logoutNav) logoutNav.style.display = 'none';
        }
    }

    function logoutUser() {
        state.currentUser = null;
        saveSession();
        switchView('landing');
        showToast('<i class="fa-solid fa-right-from-bracket"></i> Logged out successfully.');
    }

    // ===========================
    // VIEW NAVIGATION
    // ===========================
    function switchView(viewId) {
        if (state.currentUser) {
            // If logged in, landing page maps to home dashboard
            if (viewId === 'landing') {
                viewId = 'home';
            }
        } else {
            // If NOT logged in, home maps to landing login page
            if (viewId === 'home') {
                viewId = 'landing';
            }
        }

        state.activeView = viewId;

        document.querySelectorAll('#main-header-nav .nav-btn').forEach(btn => {
            const targetNavView = viewId === 'landing' ? 'home' : viewId;
            btn.classList.toggle('active', btn.dataset.view === targetNavView);
        });

        document.querySelectorAll('main .view').forEach(sec => {
            sec.classList.toggle('active', sec.id === `view-${viewId}`);
        });

        renderAllViews();
        window.scrollTo({ top: 0, behavior: 'smooth' });
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

    // ===========================
    // VIEW RENDERERS
    // ===========================
    function renderAllViews() {
        updateUserHeaderUI();
        renderHeaderAndAnnouncements();
        renderHomeView();
        renderPortfoliosView();
        renderAdminControls();
        checkDisruptionModal();
    }

    function renderHeaderAndAnnouncements() {
        const curPhaseObj = state.eventPhases.find(p => p.id === state.currentPhase) || state.eventPhases[0];
        const numTag = document.getElementById('header-phase-num');
        const nameTag = document.getElementById('header-phase-name');
        const landingPhaseTitle = document.getElementById('landing-phase-title');
        const timelinePhaseTitle = document.getElementById('timeline-current-phase-name');

        if (numTag) numTag.innerText = `Phase ${curPhaseObj.id}/${state.eventPhases.length}`;
        if (nameTag) nameTag.innerText = curPhaseObj.name;
        if (landingPhaseTitle) landingPhaseTitle.innerText = `Phase ${curPhaseObj.id} - ${curPhaseObj.name}`;
        if (timelinePhaseTitle) timelinePhaseTitle.innerText = `Phase ${curPhaseObj.id} - ${curPhaseObj.name}`;

        const dropdownMenu = document.getElementById('header-phase-dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.innerHTML = state.eventPhases.map(p => {
                const isActive = p.id === state.currentPhase;
                return `
                    <div class="phase-dropdown-item ${isActive ? 'active' : ''}" onclick="window.BidApp.setActivePhase(${p.id})">
                        <div class="phase-dropdown-title">
                            <span>${p.id}. ${p.name}</span>
                            ${isActive ? '<span class="role-badge" style="font-size:0.7rem; background:var(--accent-orange); color:white; font-weight:800;">ACTIVE</span>' : ''}
                        </div>
                        <div class="phase-dropdown-desc">${p.desc}</div>
                    </div>
                `;
            }).join('');
        }

        if (state.announcements.length > 0) {
            const latest = state.announcements[state.announcements.length - 1];
            const textElem = document.getElementById('announcement-text');
            if (textElem) textElem.innerText = latest.text;
        }
    }

    // Phase-Driven Home View Renderer
    function renderHomeView() {
        const container = document.getElementById('home-phase-content');
        if (!container) return;

        const phase = state.currentPhase;
        let html = '';

        switch (phase) {
            case 1:
                html = `
                    <div class="home-hero-card" style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:3rem 2rem; text-align:center; box-shadow:var(--shadow-lg);">
                        <div class="grand-badge" style="margin-bottom:1rem;"><i class="fa-solid fa-bullhorn"></i> PHASE 1: WELCOME & BRIEFING</div>
                        <h1 style="font-size:2.8rem; font-weight:900; margin-bottom:1rem; color:var(--text-primary);">Welcome to <span style="color:var(--accent-orange);">Bid A Biz Grand Finale</span></h1>
                        <p style="font-size:1.1rem; color:var(--text-secondary); max-width:700px; margin:0 auto 2rem auto; line-height:1.6;">
                            Welcome participants! Review the official event Rulebook, inspect the Asset Catalogue, and track the Event Timeline. Sector allocation will begin in Phase 2.
                        </p>

                        <div style="display:flex; justify-content:center; gap:1.2rem; flex-wrap:wrap; margin-bottom:2.5rem;">
                            <button class="btn-primary-glow" style="max-width:220px;" onclick="window.BidApp.switchView('rulebook')">
                                <i class="fa-solid fa-book"></i> Read Rulebook
                            </button>
                            <button class="btn-secondary" style="max-width:220px;" onclick="window.BidApp.switchView('catalogue')">
                                <i class="fa-solid fa-box"></i> Asset Catalogue
                            </button>
                        </div>

                        <div style="background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:8px; padding:1.2rem; max-width:550px; margin:0 auto;">
                            <div style="display:flex; align-items:center; justify-content:center; gap:0.6rem; color:var(--text-muted); font-size:0.9rem;">
                                <i class="fa-solid fa-lock" style="color:var(--accent-orange);"></i>
                                <span><strong>Portfolio Locked:</strong> Team Portfolios will unlock automatically after Phase 2 Sector Allocation.</span>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 2:
                html = renderSectorAllocationHome();
                break;

            case 3:
            case 4:
            case 5:
            case 8:
                html = renderLiveAuctionHome(phase);
                break;

            case 6:
                html = `
                    <div class="home-hero-card" style="background:var(--bg-card); border:2px solid var(--accent-rose); border-radius:var(--radius-lg); padding:3rem 2rem; text-align:center; box-shadow:var(--shadow-lg);">
                        <span class="role-badge" style="background:var(--accent-rose); color:white; font-size:0.85rem; padding:0.4rem 1rem; margin-bottom:1rem;"><i class="fa-solid fa-triangle-exclamation"></i> PHASE 6: INDUSTRY DISRUPTION</span>
                        <h1 style="font-size:2.6rem; font-weight:900; margin-bottom:1rem; color:var(--text-primary);">Unforeseen Industry Disruption Event</h1>
                        <p style="font-size:1.1rem; color:var(--text-secondary); max-width:700px; margin:0 auto 1.8rem auto; line-height:1.6;">
                            Macro-economic changes have impacted sector valuations! Read your sector's case study first, then inspect your competitors' case studies to plan your negotiation strategy.
                        </p>
                        <button class="btn-primary-glow" style="max-width:300px; margin:0 auto;" onclick="window.BidApp.openDisruptionModal()">
                            <i class="fa-solid fa-folder-open"></i> Review All 4 Sector Case Studies →
                        </button>
                    </div>
                `;
                break;

            case 7:
                html = `
                    <div class="timer-container">
                        <span class="grand-badge" style="margin-bottom:0.5rem;"><i class="fa-solid fa-handshake"></i> PHASE 7: NEGOTIATION WINDOW</span>
                        <h2 style="font-size:1.8rem; margin-bottom:0.5rem; color:var(--text-primary);">10-Minute Inter-Team Trading</h2>
                        <p style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:1.5rem;">
                            Offline negotiations only! Forge strategic alliances, discuss asset swaps, and align portfolios before the Redistribution Market.
                        </p>

                        <div class="timer-display" id="negotiation-timer-display">${formatTime(state.timers.negotiation)}</div>

                        <div style="display:flex; justify-content:center; gap:0.8rem; margin-top:1.5rem;">
                            ${state.currentUser && state.currentUser.role === 'admin' ? `
                                <button class="btn-primary-glow btn-small" onclick="window.BidApp.toggleTimer('negotiation')">
                                    ${state.timers.negotiationRunning ? '<i class="fa-solid fa-pause"></i> Pause Timer' : '<i class="fa-solid fa-play"></i> Start Timer'}
                                </button>
                                <button class="btn-secondary btn-small" onclick="window.BidApp.resetTimer('negotiation', 600)">Reset (10m)</button>
                            ` : '<span style="font-size:0.85rem; color:var(--text-muted);"><i class="fa-solid fa-clock"></i> Synchronized Live Event Timer</span>'}
                        </div>

                        <div style="margin-top:2rem; background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:8px; padding:1.2rem; text-align:left;">
                            <h4 style="color:var(--accent-orange); margin-bottom:0.5rem;"><i class="fa-solid fa-lightbulb"></i> Strategic Guidance:</h4>
                            <p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.5;">
                                "Identify teams holding assets that synergize with your sector. Negotiate fair valuations before asset restructuring!"
                            </p>
                        </div>
                    </div>
                `;
                break;

            case 9:
                html = `
                    <div class="timer-container">
                        <span class="grand-badge" style="margin-bottom:0.5rem;"><i class="fa-solid fa-file-powerpoint"></i> PHASE 9: FINAL PPT SUBMISSION</span>
                        <h2 style="font-size:1.8rem; margin-bottom:0.5rem; color:var(--text-primary);">20-Minute Final Submission Window</h2>
                        <p style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:1.5rem;">
                            Finalize your strategic pitch deck and submit directly via WhatsApp before the timer expires.
                        </p>

                        <div class="timer-display" id="submission-timer-display">${formatTime(state.timers.submission)}</div>

                        <div style="display:flex; justify-content:center; gap:0.8rem; margin-top:1rem; margin-bottom:2rem;">
                            ${state.currentUser && state.currentUser.role === 'admin' ? `
                                <button class="btn-primary-glow btn-small" onclick="window.BidApp.toggleTimer('submission')">
                                    ${state.timers.submissionRunning ? '<i class="fa-solid fa-pause"></i> Pause Timer' : '<i class="fa-solid fa-play"></i> Start Timer'}
                                </button>
                                <button class="btn-secondary btn-small" onclick="window.BidApp.resetTimer('submission', 1200)">Reset (20m)</button>
                            ` : ''}
                        </div>

                        <div style="background:var(--bg-primary); border:2px solid var(--accent-emerald); border-radius:12px; padding:1.5rem; text-align:center;">
                            <h3 style="color:var(--accent-emerald); font-size:1.3rem; margin-bottom:0.8rem;"><i class="fa-brands fa-whatsapp"></i> Submission Details</h3>
                            <div style="font-size:1.4rem; font-family:'JetBrains Mono'; font-weight:800; color:var(--text-primary); margin-bottom:0.5rem;">
                                +91 63625 32438
                            </div>
                            <p style="font-size:0.95rem; color:var(--text-secondary);">
                                ⚠️ <strong>Mandatory:</strong> Please mention your <strong>Team Name</strong> clearly in the WhatsApp submission message.
                            </p>
                        </div>
                    </div>
                `;
                break;

            case 10:
            case 11:
                html = `
                    <div class="home-hero-card" style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:3.5rem 2rem; text-align:center; box-shadow:var(--shadow-lg);">
                        <span class="role-badge" style="background:var(--accent-emerald); color:white; font-size:0.85rem; padding:0.4rem 1rem; margin-bottom:1rem;"><i class="fa-solid fa-circle-check"></i> SUBMISSIONS CLOSED</span>
                        <h1 style="font-size:2.8rem; font-weight:900; margin-bottom:1rem; color:var(--text-primary);">Judges Evaluating Portfolios</h1>
                        <p style="font-size:1.15rem; color:var(--text-secondary); max-width:650px; margin:0 auto 2rem auto; line-height:1.6;">
                            The executive jury panel is reviewing all portfolio presentations, strategic depth, and risk discipline.
                        </p>
                        <div style="background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:8px; padding:1.5rem; max-width:500px; margin:0 auto; color:var(--accent-orange); font-weight:700; font-size:1.1rem;">
                            📩 Results & Grand Winners will be announced later via email.
                        </div>
                    </div>
                `;
                break;

            default:
                html = `<div style="text-align:center; padding:2rem;">Phase in progress</div>`;
        }

        container.innerHTML = html;
    }

    function renderSectorAllocationHome() {
        const userTeamId = state.currentUser ? state.currentUser.teamId : null;
        const myTeam = state.teams.find(t => t.id === userTeamId);

        return `
            <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:3rem 2rem; box-shadow:var(--shadow-lg); text-align:center;">
                <span class="grand-badge" style="margin-bottom:0.5rem;"><i class="fa-solid fa-car-side"></i> PHASE 2: SECTOR ALLOCATION</span>
                <h2 style="font-size:2.2rem; font-weight:800; color:var(--text-primary); margin-bottom:0.5rem;">Team Sector Allocation</h2>
                <p style="color:var(--text-secondary); font-size:0.95rem; max-width:600px; margin:0 auto 2rem auto;">
                    Domain sectors and ₹100 Cr starting budgets have been officially allocated to all participating teams.
                </p>

                ${myTeam ? `
                    <div style="background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:12px; padding:1.8rem; max-width:520px; margin:0 auto; text-align:center;">
                        <span style="color:var(--text-muted); font-size:0.85rem; font-weight:700; letter-spacing:1px;">YOUR LOGGED-IN TEAM</span>
                        <h3 style="color:var(--accent-orange); font-size:1.6rem; margin:0.4rem 0;">${myTeam.name}</h3>
                        <div style="font-size:1.1rem; color:var(--text-primary); margin-top:0.5rem;">
                            Assigned Sector: <strong>${myTeam.sector || 'Unassigned'}</strong>
                        </div>
                        <div style="font-size:1.1rem; color:var(--accent-orange); font-weight:800; margin-top:0.3rem;">
                            Starting Budget: ₹${myTeam.remainingBudget} Cr
                        </div>
                    </div>
                ` : `
                    <div style="background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:12px; padding:1.5rem; max-width:520px; margin:0 auto;">
                        <p style="font-size:1rem; color:var(--text-secondary); margin:0;">
                            Please log in as a team participant or inspect the <strong>Portfolio</strong> tab to view team sector assignments.
                        </p>
                    </div>
                `}
            </div>
        `;
    }

    function renderLiveAuctionHome(phase) {
        let themeClass = 'auction-theme-gold';
        let roundTitle = 'Premium Auction (Gold Round)';
        let categoryFilter = ['A'];

        if (phase === 4) {
            themeClass = 'auction-theme-silver';
            roundTitle = 'Core Auction (Silver Round)';
            categoryFilter = ['B'];
        } else if (phase === 5) {
            themeClass = 'auction-theme-bronze';
            roundTitle = 'Support Auction (Bronze Round)';
            categoryFilter = ['C', 'D'];
        } else if (phase === 8) {
            themeClass = 'auction-theme-gold';
            roundTitle = 'Redistribution Market Auction';
            categoryFilter = ['A', 'B', 'C', 'D'];
        }

        let roundAssets = state.assets.filter(a => {
            if (phase === 8) {
                return a.status === 'Available' || a.released === true;
            }
            return a.status === 'Available' && categoryFilter.includes(a.category);
        });

        const currentAsset = roundAssets.length > 0 ? roundAssets[0] : null;

        if (!currentAsset) {
            return `
                <div class="home-hero-card" style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:3rem 2rem; text-align:center;">
                    <span class="round-theme-badge role-badge" style="margin-bottom:1rem; font-size:0.85rem; padding:0.4rem 1rem;">${roundTitle}</span>
                    <h2 style="font-size:2rem; color:var(--text-primary); margin-bottom:0.5rem;">All Assets Sold in this Round!</h2>
                    <p style="color:var(--text-secondary);">Admin can advance to the next event phase using the phase control badge.</p>
                </div>
            `;
        }

        const userTeamId = state.currentUser && state.currentUser.role === 'participant' ? state.currentUser.teamId : null;
        const myTeam = userTeamId ? state.teams.find(t => t.id === userTeamId) : null;

        const highestBidAmount = currentAsset.highestBid || currentAsset.basePrice;
        const highestBidderName = currentAsset.highestBidderTeamName || 'No Bids Yet';
        const bidHistory = currentAsset.bidHistory || [];

        const defaultNextBid = (currentAsset.highestBid ? currentAsset.highestBid + 1 : currentAsset.basePrice);

        return `
            <div class="auction-card-wrapper ${themeClass}" style="border-radius:var(--radius-lg); padding:2rem;">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; border-bottom:1px solid var(--border-subtle); padding-bottom:1rem; margin-bottom:1.5rem;">
                    <div>
                        <span class="round-theme-badge role-badge" style="font-size:0.8rem; padding:0.35rem 0.8rem; border-radius:4px;"><i class="fa-solid fa-gavel"></i> ${roundTitle}</span>
                        <h2 style="font-size:1.8rem; font-weight:900; margin-top:0.4rem; color:var(--text-primary);">Live Asset Auction</h2>
                    </div>
                    <div style="font-size:0.85rem; color:var(--text-muted); font-weight:700;">
                        Remaining Assets in Round: <span style="color:var(--text-primary); font-size:1rem;">${roundAssets.length}</span>
                    </div>
                </div>

                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:1.5rem;">
                    <!-- 1. ASSET SPECIFICATION -->
                    <div style="background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.5rem;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <span class="role-badge" style="font-size:0.8rem;">Asset #${currentAsset.id}</span>
                            <span class="role-badge" style="background:var(--bg-secondary); color:var(--accent-orange);">Category ${currentAsset.category} (${currentAsset.vertical})</span>
                        </div>
                        <h3 style="font-size:1.5rem; font-weight:800; color:var(--text-primary); margin-bottom:0.8rem;">${currentAsset.name}</h3>
                        <div style="font-size:1.1rem; color:var(--text-muted); margin-bottom:1.2rem;">
                            Base Valuation: <strong style="color:var(--text-primary); font-family:'JetBrains Mono';">₹${currentAsset.basePrice} Cr</strong>
                        </div>
                        <div class="auction-progress-bar-container" style="background:var(--bg-secondary); border-radius:4px; height:8px; overflow:hidden;">
                            <div style="width:100%; height:100%; background:var(--accent-orange); animation: pulse 2s infinite;"></div>
                        </div>
                    </div>

                    <!-- 2. LIVE HIGHEST BIDDER -->
                    <div style="background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.5rem;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                            <h4 style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin:0;">CURRENT HIGHEST BIDDER</h4>
                            ${currentAsset.highestBid ? `<span class="badge-highest-bidder"><i class="fa-solid fa-fire"></i> LEADING BID</span>` : ''}
                        </div>

                        <div style="font-size:2.8rem; font-weight:900; font-family:'JetBrains Mono'; color:var(--accent-orange); margin-bottom:0.4rem;">
                            ₹${highestBidAmount} Cr
                        </div>

                        <div style="font-size:1.2rem; font-weight:800; color:var(--text-primary); margin-bottom:0.8rem;">
                            ${highestBidderName}
                        </div>

                        <div style="font-size:0.82rem; color:var(--text-secondary); border-top:1px dashed var(--border-subtle); padding-top:0.6rem;">
                            ${currentAsset.highestBid ? `Latest live competitive bid` : `Base Valuation (Awaiting First Participant Bid)`}
                        </div>
                    </div>

                    <!-- 3. PARTICIPANT BIDDING ACTION BOX -->
                    <div style="background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.5rem;">
                        <h4 style="font-size:0.8rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:0.8rem;"><i class="fa-solid fa-gavel"></i> PLACE YOUR TEAM BID</h4>

                        ${myTeam ? `
                            <div style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:0.8rem;">
                                Logged in as: <strong style="color:var(--accent-orange);">${myTeam.name}</strong><br>
                                Remaining Budget: <strong style="color:var(--text-primary); font-family:'JetBrains Mono'; font-weight:800;">₹${myTeam.remainingBudget} Cr</strong>
                            </div>

                            <div class="form-group" style="margin-bottom:0.8rem;">
                                <label style="font-size:0.8rem;">Enter Bid Amount (₹ Cr)</label>
                                <input type="number" id="participant-bid-amount-input-${currentAsset.id}" class="form-control" value="${defaultNextBid}" min="${currentAsset.highestBid ? currentAsset.highestBid + 1 : currentAsset.basePrice}" max="${myTeam.remainingBudget}" step="1">
                            </div>

                            <div style="display:flex; gap:0.4rem; margin-bottom:0.8rem;">
                                <button class="btn-tag" onclick="window.BidApp.quickBidIncrement(${currentAsset.id}, 1)">+₹1 Cr</button>
                                <button class="btn-tag" onclick="window.BidApp.quickBidIncrement(${currentAsset.id}, 2)">+₹2 Cr</button>
                                <button class="btn-tag" onclick="window.BidApp.quickBidIncrement(${currentAsset.id}, 5)">+₹5 Cr</button>
                            </div>

                            <button class="btn-primary-glow btn-full" style="padding:0.6rem;" onclick="window.BidApp.submitParticipantBid(${currentAsset.id})">
                                Submit Live Bid →
                            </button>
                        ` : `
                            <div style="padding:1.2rem 0; text-align:center;">
                                <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:1rem;">
                                    You must log in with your participant team password to place live bids.
                                </p>
                                <button class="btn-secondary btn-small" onclick="window.BidApp.openParticipantModal()">Participant Login</button>
                            </div>
                        `}
                    </div>
                </div>

                <!-- LIVE RECENT BIDS STREAM -->
                ${bidHistory.length > 0 ? `
                    <div style="margin-top:1.5rem; background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.2rem;">
                        <h4 style="font-size:0.85rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:0.8rem;"><i class="fa-solid fa-list-ol"></i> Recent Bids Activity Log</h4>
                        <div class="bid-history-list" style="display:flex; flex-direction:column; gap:0.4rem; max-height:140px; overflow-y:auto;">
                            ${bidHistory.map(b => `
                                <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-card); padding:0.4rem 0.8rem; border-radius:4px; font-size:0.85rem; border:1px solid var(--border-subtle);">
                                    <div><strong style="color:var(--text-primary);">${b.teamName}</strong> placed a bid</div>
                                    <div style="display:flex; gap:1rem; align-items:center;">
                                        <span style="font-family:'JetBrains Mono'; font-weight:800; color:var(--accent-orange);">₹${b.amount} Cr</span>
                                        <span style="font-size:0.75rem; color:var(--text-muted);">${b.time}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- ADMIN CONTROL PANEL OVERRIDE -->
                ${state.currentUser && state.currentUser.role === 'admin' ? `
                    <div style="margin-top:1.5rem; background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:1.5rem;">
                        <h4 style="color:var(--accent-orange); font-size:1.1rem; margin-bottom:1rem;"><i class="fa-solid fa-gavel"></i> Admin Auction Finalization Panel</h4>
                        <div class="form-grid-3">
                            <div class="form-group" style="margin:0;">
                                <label>Winning Team</label>
                                <select id="home-auction-team-select" class="form-control">
                                    ${state.teams.map(t => {
                                        const count = state.assets.filter(a => a.ownerTeamId === t.id && a.status === 'Sold').length;
                                        const selected = (currentAsset.highestBidderTeamId === t.id) ? 'selected' : '';
                                        return `<option value="${t.id}" ${selected}>${t.name} (Budget: ₹${t.remainingBudget} Cr, Assets: ${count}/5)</option>`;
                                    }).join('')}
                                </select>
                            </div>
                            <div class="form-group" style="margin:0;">
                                <label>Final Sale Price (₹ Cr)</label>
                                <input type="number" id="home-auction-price-input" class="form-control" value="${highestBidAmount}" min="1" step="1">
                            </div>
                            <div style="display:flex; align-items:flex-end;">
                                <button class="btn-primary-glow" onclick="window.BidApp.submitAuctionSale(${currentAsset.id})">
                                    Finalize Sale & Next Asset →
                                </button>
                            </div>
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }

    function renderTimelineView() {
        const container = document.getElementById('timeline-grid-container');
        if (!container) return;

        const curPhase = state.currentPhase;

        container.innerHTML = state.eventPhases.map(p => {
            let statusClass = 'locked';
            let statusText = '<i class="fa-solid fa-lock"></i> Locked';

            if (p.id < curPhase) {
                statusClass = 'completed';
                statusText = '<i class="fa-solid fa-circle-check"></i> Completed ✓';
            } else if (p.id === curPhase) {
                statusClass = 'current';
                statusText = '<i class="fa-solid fa-spinner fa-spin"></i> Active Current';
            }

            return `
                <div class="timeline-card ${statusClass}">
                    <span class="timeline-badge-status">${statusText}</span>
                    <h3 style="font-size:1.15rem; font-weight:800; margin-bottom:0.4rem; color:var(--text-primary);">
                        ${p.id}. ${p.name}
                    </h3>
                    <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.4;">
                        ${p.desc}
                    </p>
                </div>
            `;
        }).join('');
    }

    function renderPortfoliosView() {
        const lockedOverlay = document.getElementById('portfolio-locked-overlay');
        const unlockedContent = document.getElementById('portfolio-unlocked-content');
        const container = document.getElementById('portfolios-grid-container');
        const selector = document.getElementById('portfolio-team-selector');

        if (!lockedOverlay || !unlockedContent || !container || !selector) return;

        if (state.currentPhase === 1) {
            lockedOverlay.style.display = 'block';
            unlockedContent.style.display = 'none';
            return;
        } else {
            lockedOverlay.style.display = 'none';
            unlockedContent.style.display = 'block';
        }

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

    function renderAdminControls() {
        const assignAssetSel = document.getElementById('admin-assign-asset-select');
        const assignTeamSel = document.getElementById('admin-assign-team-select');
        const priceInput = document.getElementById('admin-assign-price-input');
        const infoBanner = document.getElementById('admin-live-bidder-info-banner');

        const sectorTeamSel = document.getElementById('admin-sector-team-select');
        const budgetTeamSel = document.getElementById('admin-budget-team-select');
        const phaseSelect = document.getElementById('admin-phase-select');
        const teamsEditList = document.getElementById('admin-teams-edit-list');
        const phasesEditList = document.getElementById('admin-phases-edit-list');
        const assetsTbody = document.getElementById('admin-assets-tbody');

        if (!assignAssetSel) return;

        const availableAssets = state.assets.filter(a => a.status === 'Available');
        assignAssetSel.innerHTML = availableAssets.length === 0 ? '<option value="">No Available Assets</option>' :
            availableAssets.map(a => {
                const liveBidText = a.highestBid ? ` 🔥 Live Bid: ₹${a.highestBid} Cr (${a.highestBidderTeamName})` : '';
                return `<option value="${a.id}">[Asset #${a.id}] ${a.name} (Base: ₹${a.basePrice} Cr)${liveBidText}</option>`;
            }).join('');

        const teamOptions = state.teams.length === 0 ? '<option value="">No Teams Created</option>' :
            state.teams.map(t => {
                const ownedCount = state.assets.filter(a => a.ownerTeamId === t.id && a.status === 'Sold').length;
                const isFull = ownedCount >= 5;
                return `<option value="${t.id}" ${isFull ? 'disabled' : ''}>
                    ${isFull ? '[FULL 5/5] ' : ''}${t.name} (Assets: ${ownedCount}/5, Budget: ₹${t.remainingBudget} Cr)
                </option>`;
            }).join('');
        assignTeamSel.innerHTML = teamOptions;

        // Pre-select leading bidder and pre-fill price for selected asset
        const selectedAssetId = parseInt(assignAssetSel.value);
        const selectedAsset = state.assets.find(a => a.id === selectedAssetId);

        if (selectedAsset) {
            if (selectedAsset.highestBidderTeamId && assignTeamSel.querySelector(`option[value="${selectedAsset.highestBidderTeamId}"]`)) {
                assignTeamSel.value = selectedAsset.highestBidderTeamId;
            }
            if (priceInput) {
                priceInput.value = selectedAsset.highestBid || selectedAsset.basePrice;
            }
            if (infoBanner) {
                if (selectedAsset.highestBid) {
                    infoBanner.innerHTML = `
                        <div style="background:rgba(255,107,0,0.1); border:1px solid var(--accent-orange); border-radius:8px; padding:0.8rem 1.2rem; margin-top:1rem; display:flex; justify-content:space-between; align-items:center;">
                            <div>
                                <span class="badge-highest-bidder"><i class="fa-solid fa-fire"></i> LIVE HIGHEST BIDDER DETECTED</span>
                                <div style="font-size:1.1rem; font-weight:800; color:var(--text-primary); margin-top:0.2rem;">
                                    ${selectedAsset.highestBidderTeamName} — <span style="color:var(--accent-orange); font-family:'JetBrains Mono';">₹${selectedAsset.highestBid} Cr</span>
                                </div>
                            </div>
                            <span style="font-size:0.8rem; color:var(--text-muted);">Auto-filled in form below</span>
                        </div>
                    `;
                } else {
                    infoBanner.innerHTML = '';
                }
            }
        } else {
            if (infoBanner) infoBanner.innerHTML = '';
        }

        const generalTeamOptions = state.teams.length === 0 ? '<option value="">No Teams Created</option>' :
            state.teams.map(t => `<option value="${t.id}">${t.name} (Budget: ₹${t.remainingBudget} Cr)</option>`).join('');
        sectorTeamSel.innerHTML = generalTeamOptions;
        budgetTeamSel.innerHTML = generalTeamOptions;

        phaseSelect.innerHTML = state.eventPhases.map(p => `<option value="${p.id}">${p.id}. ${p.name}</option>`).join('');
        phaseSelect.value = state.currentPhase;

        const negTimerElem = document.getElementById('admin-timer-status-negotiation');
        const subTimerElem = document.getElementById('admin-timer-status-submission');
        if (negTimerElem) negTimerElem.textContent = formatTime(state.timers.negotiation) + (state.timers.negotiationRunning ? ' ⏱️ (Running)' : ' ⏸️ (Paused)');
        if (subTimerElem) subTimerElem.textContent = formatTime(state.timers.submission) + (state.timers.submissionRunning ? ' ⏱️ (Running)' : ' ⏸️ (Paused)');

        const assetFilterElem = document.getElementById('admin-asset-status-filter');
        const assetFilter = assetFilterElem ? assetFilterElem.value : 'all';
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
            <div style="display:grid; grid-template-columns: 1fr 1fr 100px 140px 80px 80px; gap:0.6rem; align-items:center; margin-bottom:0.8rem; background:var(--bg-primary); padding:0.6rem; border-radius:6px; border:1px solid var(--border-subtle);">
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
            <div style="display:grid; grid-template-columns: 60px 1.5fr 3fr 80px 80px; gap:0.6rem; align-items:center; margin-bottom:0.8rem; background:var(--bg-primary); padding:0.6rem; border-radius:6px; border:1px solid var(--border-subtle);">
                <strong style="color:var(--accent-orange); font-size:0.9rem; text-align:center;">#${p.id}</strong>
                <input type="text" class="form-control" id="edit-pname-${p.id}" value="${p.name}">
                <input type="text" class="form-control" id="edit-pdesc-${p.id}" value="${p.desc}">
                <button class="btn-primary-glow btn-small" onclick="window.BidApp.savePhaseDetails(${p.id})">Save</button>
                <button class="btn-danger btn-small" onclick="window.BidApp.deletePhase(${p.id})">Delete</button>
            </div>
        `).join('');
    }

    function checkDisruptionModal() {
        if (state.currentPhase === 6) {
            const hasSeen = sessionStorage.getItem('bid_biz_seen_disruption');
            if (!hasSeen) {
                openDisruptionModal();
            }
        }
    }

    function showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            modal.classList.add('active');
            modal.classList.add('show');
        }
    }

    function hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            modal.classList.remove('active');
            modal.classList.remove('show');
        }
    }

    function openDisruptionModal() {
        showModal('modal-disruption');
    }

    function closeDisruptionModal() {
        hideModal('modal-disruption');
        sessionStorage.setItem('bid_biz_seen_disruption', 'true');
    }

    function openParticipantModal() {
        const select = document.getElementById('participant-team-select-input');
        const passInput = document.getElementById('participant-password-input');
        if (select) {
            select.innerHTML = state.teams.map(t => `<option value="${t.id}">${t.name} (${getShortSectorName(t.sector)})</option>`).join('');
        }
        if (passInput) passInput.value = '';
        showModal('participant-login-modal');
        if (passInput) passInput.focus();
    }

    function closeParticipantModal() {
        hideModal('participant-login-modal');
    }

    function submitParticipantLogin() {
        const select = document.getElementById('participant-team-select-input');
        const passInput = document.getElementById('participant-password-input');

        if (!select || !passInput) return;

        const teamId = parseInt(select.value);
        const enteredPass = passInput.value.trim();
        const team = state.teams.find(t => t.id === teamId);

        if (!team) {
            showToast('Please select a valid team.', true);
            return;
        }

        const expectedPass = team.password || `team${team.id}@2026`;

        if (!enteredPass) {
            showToast('Please enter your team password.', true);
            passInput.focus();
            return;
        }

        if (enteredPass !== expectedPass) {
            showToast('⚠️ Invalid Team Password! Please check with your team members.', true);
            passInput.focus();
            return;
        }

        state.currentUser = { role: 'participant', teamId: team.id, teamName: team.name };
        saveSession();
        hideModal('participant-login-modal');
        switchView('home');
        showToast(`<i class="fa-solid fa-user-check"></i> Logged in as ${team.name}`);
    }

    function openAdminModal() {
        const input = document.getElementById('admin-passcode-input');
        if (input) input.value = '';
        showModal('admin-passcode-modal');
        if (input) input.focus();
    }

    function closeAdminModal() {
        hideModal('admin-passcode-modal');
    }

    function submitAdminLogin() {
        const input = document.getElementById('admin-passcode-input');
        if (input) {
            const val = input.value.trim();
            if (val === DEFAULT_PASSCODE) {
                state.currentUser = { role: 'admin', teamId: null, teamName: 'Admin' };
                saveSession();
                hideModal('admin-passcode-modal');
                switchView('admin');
                showToast('<i class="fa-solid fa-shield-halved"></i> Admin Access Authenticated!');
            } else {
                showToast('Invalid Admin Passcode!', true);
            }
        }
    }

    function openEnvelope(teamId) {
        pushHistorySnapshot();
        const team = state.teams.find(t => t.id === teamId);
        if (team) {
            team.envelopeOpened = true;
            if (!team.sector || team.sector === 'Unassigned') {
                const sectors = [
                    "Formula 1 & Motorsports",
                    "OceanX (Marine & Water Mobility)",
                    "SkyRush (Air Mobility & Aviation Innovation)",
                    "DriveVerse (Future Ground Mobility)"
                ];
                team.sector = sectors[(teamId - 1) % sectors.length];
            }
            broadcastUpdate();
            renderAllViews();
            showToast(`<i class="fa-solid fa-envelope-open-text"></i> ${team.name} revealed sector: ${team.sector}!`);
        }
    }

    function submitParticipantBid(assetId, customAmount) {
        if (!state.currentUser || state.currentUser.role !== 'participant') {
            showToast('Please log in with your participant team password to place live bids.', true);
            openParticipantModal();
            return;
        }

        const team = state.teams.find(t => t.id === state.currentUser.teamId);
        if (!team) {
            showToast('Participant team details not found.', true);
            return;
        }

        const asset = state.assets.find(a => a.id === assetId);
        if (!asset || asset.status === 'Sold') {
            showToast('This asset is no longer available for bidding.', true);
            return;
        }

        let amount = customAmount;
        if (amount === undefined || amount === null) {
            const input = document.getElementById(`participant-bid-amount-input-${assetId}`);
            if (input) amount = parseInt(input.value);
        }

        const bidAmount = parseInt(amount);
        if (isNaN(bidAmount) || bidAmount <= 0) {
            showToast('Please enter a valid bid amount in ₹ Cr.', true);
            return;
        }

        if (asset.highestBid && bidAmount <= asset.highestBid) {
            showToast(`⚠️ Bid must be higher than current highest bid (₹${asset.highestBid} Cr)!`, true);
            return;
        }

        if (!asset.highestBid && bidAmount < asset.basePrice) {
            showToast(`⚠️ Bid cannot be lower than base valuation (₹${asset.basePrice} Cr)!`, true);
            return;
        }

        if (bidAmount > team.remainingBudget) {
            showToast(`⚠️ Insufficient budget! Your team's remaining budget is ₹${team.remainingBudget} Cr.`, true);
            return;
        }

        pushHistorySnapshot();

        asset.highestBid = bidAmount;
        asset.highestBidderTeamId = team.id;
        asset.highestBidderTeamName = team.name;

        if (!asset.bidHistory) asset.bidHistory = [];
        asset.bidHistory.unshift({
            teamId: team.id,
            teamName: team.name,
            amount: bidAmount,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
        });

        saveState();
        broadcastUpdate();
        renderAllViews();
        showToast(`<i class="fa-solid fa-gavel"></i> 🚀 Bid of ₹${bidAmount} Cr placed by ${team.name}!`);
    }

    function quickBidIncrement(assetId, delta) {
        const asset = state.assets.find(a => a.id === assetId);
        if (!asset) return;

        const currentHighest = asset.highestBid ? asset.highestBid : asset.basePrice;
        const newBid = currentHighest + delta;

        submitParticipantBid(assetId, newBid);
    }

    function submitAuctionSale(assetId) {
        const selElem = document.getElementById('home-auction-team-select');
        const priceElem = document.getElementById('home-auction-price-input');
        if (!selElem || !priceElem) return;

        const teamId = parseInt(selElem.value);
        const price = parseInt(priceElem.value);

        if (!teamId || isNaN(price) || price <= 0) {
            showToast('Please select a valid team and enter a valid purchase price.', true);
            return;
        }

        const team = state.teams.find(t => t.id === teamId);
        const asset = state.assets.find(a => a.id === assetId);

        if (!team || !asset) return;

        if (team.remainingBudget < price) {
            showToast(`Team ${team.name} does not have enough remaining budget (₹${team.remainingBudget} Cr)!`, true);
            return;
        }

        pushHistorySnapshot();

        asset.ownerTeamId = team.id;
        asset.purchasePrice = price;
        asset.status = 'Sold';
        asset.released = false;

        team.remainingBudget -= price;

        state.announcements.push({
            id: Date.now(),
            text: `🔨 SOLD! [Asset #${asset.id}] ${asset.name} acquired by ${team.name} for ₹${price} Cr!`,
            time: new Date().toLocaleTimeString()
        });

        broadcastUpdate();
        renderAllViews();
        showToast(`<i class="fa-solid fa-gavel"></i> Asset #${asset.id} sold to ${team.name} for ₹${price} Cr!`);
    }

    function toggleTimer(timerType) {
        if (timerType === 'negotiation') {
            state.timers.negotiationRunning = !state.timers.negotiationRunning;
        } else if (timerType === 'submission') {
            state.timers.submissionRunning = !state.timers.submissionRunning;
        }
        renderHomeView();
    }

    function resetTimer(timerType, seconds) {
        if (timerType === 'negotiation') {
            state.timers.negotiation = seconds;
            state.timers.negotiationRunning = false;
        } else if (timerType === 'submission') {
            state.timers.submission = seconds;
            state.timers.submissionRunning = false;
        }
        renderHomeView();
    }

    function setActivePhase(phaseId) {
        pushHistorySnapshot();
        state.currentPhase = phaseId;
        const phaseObj = state.eventPhases.find(p => p.id === phaseId);
        if (phaseObj) {
            state.announcements.push({
                id: Date.now(),
                text: `🚩 EVENT PHASE UPDATE: Event has advanced to Phase ${phaseId} — ${phaseObj.name}`,
                time: new Date().toLocaleTimeString()
            });
        }
        broadcastUpdate();
        renderAllViews();
        showToast(`<i class="fa-solid fa-flag-checkered"></i> Active phase updated to Phase ${phaseId}`);
    }

    function toggleTheme() {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
        const themeBtn = document.getElementById('btn-theme-toggle');
        if (themeBtn) {
            themeBtn.innerHTML = isDark ? '<i class="fa-solid fa-moon"></i> Dark' : '<i class="fa-solid fa-sun"></i> Light';
        }
    }

    function pushPresetNotice(text) {
        if (text) {
            pushHistorySnapshot();
            state.announcements.push({
                id: Date.now(),
                text: text,
                time: new Date().toLocaleTimeString()
            });
            broadcastUpdate();
            renderAllViews();
            showToast(`<i class="fa-solid fa-bullhorn"></i> Announcement pushed!`);
        }
    }

    function submitAdminRecordBid() {
        const assetId = parseInt(document.getElementById('admin-assign-asset-select').value);
        const teamId = parseInt(document.getElementById('admin-assign-team-select').value);
        const price = parseInt(document.getElementById('admin-assign-price-input').value);

        if (!assetId || !teamId || isNaN(price) || price <= 0) {
            showToast('Invalid assignment options or purchase price.', true);
            return;
        }

        const team = state.teams.find(t => t.id === teamId);
        const asset = state.assets.find(a => a.id === assetId);

        if (team && asset) {
            pushHistorySnapshot();
            asset.ownerTeamId = team.id;
            asset.purchasePrice = price;
            asset.status = 'Sold';
            team.remainingBudget -= price;

            state.announcements.push({
                id: Date.now(),
                text: `🔨 [Admin Record] Asset #${asset.id} ${asset.name} assigned to ${team.name} for ₹${price} Cr`,
                time: new Date().toLocaleTimeString()
            });

            broadcastUpdate();
            renderAllViews();
            showToast(`<i class="fa-solid fa-check"></i> Asset sale recorded!`);
        }
    }

    function submitAdminAssignSector() {
        const teamId = parseInt(document.getElementById('admin-sector-team-select').value);
        const sector = document.getElementById('admin-sector-name-select').value;
        const team = state.teams.find(t => t.id === teamId);
        if (team) {
            pushHistorySnapshot();
            team.sector = sector;
            broadcastUpdate();
            renderAllViews();
            showToast(`<i class="fa-solid fa-car-side"></i> Assigned ${sector} to ${team.name}`);
        }
    }

    function submitAdminAdjustBudget() {
        const teamId = parseInt(document.getElementById('admin-budget-team-select').value);
        const type = document.getElementById('admin-budget-type-select').value;
        const amount = parseInt(document.getElementById('admin-budget-amount-input').value);

        const team = state.teams.find(t => t.id === teamId);
        if (team && !isNaN(amount)) {
            pushHistorySnapshot();
            if (type === 'add') team.remainingBudget += amount;
            else if (type === 'deduct') team.remainingBudget -= amount;
            else if (type === 'set') team.remainingBudget = amount;

            broadcastUpdate();
            renderAllViews();
            showToast(`<i class="fa-solid fa-coins"></i> Budget updated for ${team.name}`);
        }
    }

    function submitAdminSetPhase() {
        const pId = parseInt(document.getElementById('admin-phase-select').value);
        if (pId) setActivePhase(pId);
    }

    function submitAdminPushNotice() {
        const input = document.getElementById('admin-notice-input');
        if (input && input.value.trim()) {
            pushHistorySnapshot();
            state.announcements.push({
                id: Date.now(),
                text: input.value.trim(),
                time: new Date().toLocaleTimeString()
            });
            input.value = '';
            broadcastUpdate();
            renderAllViews();
            showToast(`<i class="fa-solid fa-bullhorn"></i> Announcement pushed live!`);
        }
    }

    function submitAdminCreateTeam() {
        const name = document.getElementById('admin-new-team-name').value.trim();
        const members = document.getElementById('admin-new-team-members').value.trim();
        const budget = parseInt(document.getElementById('admin-new-team-budget').value) || 100;
        const sector = document.getElementById('admin-new-team-sector').value;

        if (!name) {
            showToast('Please enter a team name.', true);
            return;
        }

        pushHistorySnapshot();
        const newId = state.teams.length > 0 ? Math.max(...state.teams.map(t => t.id)) + 1 : 1;
        state.teams.push({
            id: newId,
            name: name,
            members: members || 'Team Member',
            sector: sector,
            remainingBudget: budget,
            envelopeOpened: false
        });

        document.getElementById('admin-new-team-name').value = '';
        document.getElementById('admin-new-team-members').value = '';

        broadcastUpdate();
        renderAllViews();
        showToast(`<i class="fa-solid fa-user-plus"></i> Created new team: ${name}`);
    }

    function submitAdminCreateAsset() {
        const name = document.getElementById('admin-new-asset-name').value.trim();
        const price = parseInt(document.getElementById('admin-new-asset-price').value) || 10;
        const cat = document.getElementById('admin-new-asset-cat').value;
        const vert = document.getElementById('admin-new-asset-vert').value;

        if (!name) {
            showToast('Please enter an asset name.', true);
            return;
        }

        pushHistorySnapshot();
        const newId = state.assets.length > 0 ? Math.max(...state.assets.map(a => a.id)) + 1 : 1;
        state.assets.push({
            id: newId,
            name: name,
            category: cat,
            vertical: vert,
            basePrice: price,
            ownerTeamId: null,
            purchasePrice: null,
            status: 'Available',
            released: false
        });

        document.getElementById('admin-new-asset-name').value = '';

        broadcastUpdate();
        renderAllViews();
        showToast(`<i class="fa-solid fa-box"></i> Created new asset: ${name}`);
    }

    function submitAdminCreatePhase() {
        const name = document.getElementById('admin-new-phase-name').value.trim();
        const desc = document.getElementById('admin-new-phase-desc').value.trim();

        if (!name) {
            showToast('Please enter a phase name.', true);
            return;
        }

        pushHistorySnapshot();
        const newId = state.eventPhases.length > 0 ? Math.max(...state.eventPhases.map(p => p.id)) + 1 : 1;
        state.eventPhases.push({
            id: newId,
            name: name,
            desc: desc || 'Custom event phase'
        });

        document.getElementById('admin-new-phase-name').value = '';
        document.getElementById('admin-new-phase-desc').value = '';

        broadcastUpdate();
        renderAllViews();
        showToast(`<i class="fa-solid fa-plus"></i> Created new phase: #${newId} ${name}`);
    }

    function openEditSaleModal(assetId) {
        state.editingAssetSaleId = assetId;
        const asset = state.assets.find(a => a.id === assetId);
        if (!asset) return;

        const teamSel = document.getElementById('edit-sale-team-select');
        const priceInput = document.getElementById('edit-sale-price-input');

        if (teamSel && priceInput) {
            teamSel.innerHTML = state.teams.map(t => `<option value="${t.id}" ${t.id === asset.ownerTeamId ? 'selected' : ''}>${t.name}</option>`).join('');
            priceInput.value = asset.purchasePrice || asset.basePrice;
            showModal('edit-sale-modal');
        }
    }

    function saveEditSaleModal() {
        if (!state.editingAssetSaleId) return;
        const asset = state.assets.find(a => a.id === state.editingAssetSaleId);
        const teamSel = document.getElementById('edit-sale-team-select');
        const priceInput = document.getElementById('edit-sale-price-input');

        if (asset && teamSel && priceInput) {
            const newTeamId = parseInt(teamSel.value);
            const newPrice = parseInt(priceInput.value);

            if (!newTeamId || isNaN(newPrice) || newPrice <= 0) return;

            pushHistorySnapshot();

            const oldTeam = state.teams.find(t => t.id === asset.ownerTeamId);
            if (oldTeam) oldTeam.remainingBudget += (asset.purchasePrice || 0);

            asset.ownerTeamId = newTeamId;
            asset.purchasePrice = newPrice;
            const newTeam = state.teams.find(t => t.id === newTeamId);
            if (newTeam) newTeam.remainingBudget -= newPrice;

            hideModal('edit-sale-modal');
            state.editingAssetSaleId = null;

            broadcastUpdate();
            renderAllViews();
            showToast('<i class="fa-solid fa-pen-to-square"></i> Sale price updated.');
        }
    }

    function openPortfolioModal(teamId) {
        const team = state.teams.find(t => t.id === teamId);
        if (!team) return;

        document.getElementById('modal-team-name').innerText = team.name;
        document.getElementById('modal-team-sector').innerText = team.sector || 'Unassigned';
        document.getElementById('modal-team-members').innerText = team.members || 'No members listed';
        document.getElementById('modal-team-budget').innerText = `₹${team.remainingBudget} Cr`;

        const ownedAssets = state.assets.filter(a => a.ownerTeamId === team.id && a.status === 'Sold');
        const totalSpend = ownedAssets.reduce((sum, a) => sum + (a.purchasePrice || 0), 0);

        document.getElementById('modal-team-assets-count').innerText = `${ownedAssets.length}/5`;
        document.getElementById('modal-team-total-spend').innerText = `₹${totalSpend} Cr`;

        const tbody = document.getElementById('modal-portfolio-assets-tbody');
        if (tbody) {
            tbody.innerHTML = ownedAssets.length === 0 ? '<tr><td colspan="4" style="text-align:center; color:var(--text-muted);">No assets acquired yet</td></tr>' :
                ownedAssets.map(a => `
                    <tr>
                        <td><strong>#${a.id}</strong></td>
                        <td>${a.name}</td>
                        <td><span class="role-badge">${a.category} (${a.vertical})</span></td>
                        <td><strong style="color:var(--accent-rose); font-family:'JetBrains Mono';">₹${a.purchasePrice} Cr</strong></td>
                    </tr>
                `).join('');
        }

        showModal('portfolio-modal');
    }

    function resetSystem() {
        if (confirm('⚠️ Are you sure you want to reset all state back to initial default data?')) {
            localStorage.removeItem(STORAGE_KEY);
            state.currentPhase = 1;
            state.eventPhases = getDefaultPhases();
            state.teams = getDefaultTeams();
            state.assets = getDefaultAssets();
            state.historyStack = [];
            broadcastUpdate();
            renderAllViews();
            showToast('System state reset to defaults.');
        }
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
    // SYNC & STORAGE LOGIC
    // ===========================
    let broadcastChannel = null;
    try {
        if ('BroadcastChannel' in window) {
            broadcastChannel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
            broadcastChannel.onmessage = function (event) {
                if (event.data && event.data.type === 'STATE_UPDATE') {
                    loadState();
                    renderAllViews();
                }
            };
        }
    } catch (e) {}

    window.addEventListener('storage', function (e) {
        if (e.key === STORAGE_KEY) {
            loadState();
            renderAllViews();
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
                timers: state.timers,
                historyStack: state.historyStack
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
            syncServerState(dataToSave);
        } catch (e) {}
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
            } catch (e) {}
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
                state.timers = parsed.timers || state.timers;
                state.historyStack = parsed.historyStack || [];
            }
        } catch (e) {}
    }

    function pushHistorySnapshot() {
        if (state.historyStack.length > 20) state.historyStack.shift();
        state.historyStack.push(JSON.stringify({
            currentPhase: state.currentPhase,
            announcements: state.announcements,
            eventPhases: state.eventPhases,
            teams: state.teams,
            assets: state.assets,
            timers: state.timers
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
        state.timers = lastSnapshot.timers;
        broadcastUpdate();
        renderAllViews();
        showToast('<i class="fa-solid fa-rotate-left"></i> Previous action undone!');
    }

    // ===========================
    // GLOBAL EVENT DELEGATION
    // ===========================
    function setupEventListeners() {
        // Dropdown menu click outside listener
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

        // Passcode Enter key
        const adminInput = document.getElementById('admin-passcode-input');
        if (adminInput) {
            adminInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') submitAdminLogin();
            });
        }

        const partPassInput = document.getElementById('participant-password-input');
        if (partPassInput) {
            partPassInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') submitParticipantLogin();
            });
        }

        const assignAssetSel = document.getElementById('admin-assign-asset-select');
        if (assignAssetSel) {
            assignAssetSel.addEventListener('change', () => {
                const assetId = parseInt(assignAssetSel.value);
                const asset = state.assets.find(a => a.id === assetId);
                const teamSel = document.getElementById('admin-assign-team-select');
                const priceInput = document.getElementById('admin-assign-price-input');
                const infoBanner = document.getElementById('admin-live-bidder-info-banner');

                if (asset) {
                    if (asset.highestBidderTeamId && teamSel && teamSel.querySelector(`option[value="${asset.highestBidderTeamId}"]`)) {
                        teamSel.value = asset.highestBidderTeamId;
                    }
                    if (priceInput) {
                        priceInput.value = asset.highestBid || asset.basePrice;
                    }
                    if (infoBanner) {
                        if (asset.highestBid) {
                            infoBanner.innerHTML = `
                                <div style="background:rgba(255,107,0,0.1); border:1px solid var(--accent-orange); border-radius:8px; padding:0.8rem 1.2rem; margin-top:1rem; display:flex; justify-content:space-between; align-items:center;">
                                    <div>
                                        <span class="badge-highest-bidder"><i class="fa-solid fa-fire"></i> LIVE HIGHEST BIDDER DETECTED</span>
                                        <div style="font-size:1.1rem; font-weight:800; color:var(--text-primary); margin-top:0.2rem;">
                                            ${asset.highestBidderTeamName} — <span style="color:var(--accent-orange); font-family:'JetBrains Mono';">₹${asset.highestBid} Cr</span>
                                        </div>
                                    </div>
                                    <span style="font-size:0.8rem; color:var(--text-muted);">Auto-filled in form below</span>
                                </div>
                            `;
                        } else {
                            infoBanner.innerHTML = '';
                        }
                    }
                }
            });
        }

        // Keyboard Shortcut: Ctrl+Shift+A -> Admin Modal
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
                e.preventDefault();
                openAdminModal();
            }
        });

        // Global Event Delegation for clicks
        document.addEventListener('click', (e) => {
            // Participant login triggers
            if (e.target.closest('#btn-open-participant-login, #card-login-participant')) {
                openParticipantModal();
                return;
            }
            // Admin login triggers
            if (e.target.closest('#btn-open-admin-login, #card-login-admin, #footer-admin-trigger')) {
                openAdminModal();
                return;
            }
            // Navigation buttons
            const navBtn = e.target.closest('.nav-btn');
            if (navBtn) {
                const view = navBtn.dataset.view;
                if (view) switchView(view);
                return;
            }
            // Admin subtabs
            const subtabBtn = e.target.closest('.admin-subtab-btn');
            if (subtabBtn) {
                const subtab = subtabBtn.dataset.subtab;
                if (subtab) switchAdminSubtab(subtab);
                return;
            }
        });
    }

    function showToast(msgText, isError = false) {
        const container = document.getElementById('toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast-msg';
        if (isError) toast.style.borderColor = 'var(--accent-rose)';
        toast.innerHTML = msgText;
        container.appendChild(toast);
        setTimeout(() => {
            toast.remove();
        }, 3500);
    }

    // ===========================
    // EXPOSE GLOBAL API BINDINGS AT TOP
    // ===========================
    window.BidApp = {
        switchView,
        switchAdminSubtab,
        setActivePhase,
        openEnvelope,
        submitAuctionSale,
        openPortfolioModal,
        openDisruptionModal,
        closeDisruptionModal,
        openParticipantModal,
        closeParticipantModal,
        submitParticipantLogin,
        openAdminModal,
        closeAdminModal,
        submitAdminLogin,
        logoutUser,
        toggleTimer,
        resetTimer,
        toggleTheme,
        pushPresetNotice,
        submitAdminRecordBid,
        submitAdminAssignSector,
        submitAdminAdjustBudget,
        submitAdminSetPhase,
        submitAdminPushNotice,
        submitAdminCreateTeam,
        submitAdminCreateAsset,
        submitAdminCreatePhase,
        openEditSaleModal,
        saveEditSaleModal,
        undoLastAction,
        resetSystem,
        renderPortfoliosView,
        renderAdminControls,
        onLogoClick: function() {
            if (state.currentUser) switchView('home');
            else switchView('landing');
        },
        saveTeamDetails: function(tId) {
            const team = state.teams.find(t => t.id === tId);
            if (team) {
                pushHistorySnapshot();
                team.name = document.getElementById(`edit-tname-${tId}`).value;
                team.members = document.getElementById(`edit-tmembers-${tId}`).value;
                team.remainingBudget = parseInt(document.getElementById(`edit-tbudget-${tId}`).value) || 0;
                team.sector = document.getElementById(`edit-tsector-${tId}`).value;
                broadcastUpdate();
                renderAllViews();
                showToast(`Team ${team.name} updated!`);
            }
        },
        deleteTeam: function(tId) {
            if (confirm('Delete this team?')) {
                pushHistorySnapshot();
                state.teams = state.teams.filter(t => t.id !== tId);
                broadcastUpdate();
                renderAllViews();
                showToast('Team deleted.');
            }
        },
        saveAssetDetails: function(aId) {
            const asset = state.assets.find(a => a.id === aId);
            if (asset) {
                pushHistorySnapshot();
                asset.name = document.getElementById(`edit-aname-${aId}`).value;
                asset.basePrice = parseInt(document.getElementById(`edit-aprice-${aId}`).value) || 1;
                broadcastUpdate();
                renderAllViews();
                showToast(`Asset #${asset.id} updated!`);
            }
        },
        releaseAsset: function(aId) {
            const asset = state.assets.find(a => a.id === aId);
            if (asset && asset.status === 'Sold') {
                pushHistorySnapshot();
                const team = state.teams.find(t => t.id === asset.ownerTeamId);
                if (team) {
                    team.remainingBudget += asset.purchasePrice || 0;
                }
                asset.status = 'Available';
                asset.ownerTeamId = null;
                asset.purchasePrice = null;
                asset.released = true;

                broadcastUpdate();
                renderAllViews();
                showToast(`Asset #${asset.id} released back to pool.`);
            }
        },
        deleteAsset: function(aId) {
            if (confirm('Delete this asset?')) {
                pushHistorySnapshot();
                state.assets = state.assets.filter(a => a.id !== aId);
                broadcastUpdate();
                renderAllViews();
                showToast('Asset deleted.');
            }
        },
        savePhaseDetails: function(pId) {
            const phase = state.eventPhases.find(p => p.id === pId);
            if (phase) {
                pushHistorySnapshot();
                phase.name = document.getElementById(`edit-pname-${pId}`).value;
                phase.desc = document.getElementById(`edit-pdesc-${pId}`).value;
                broadcastUpdate();
                renderAllViews();
                showToast(`Phase #${pId} updated!`);
            }
        },
        deletePhase: function(pId) {
            if (confirm('Delete this event phase?')) {
                pushHistorySnapshot();
                state.eventPhases = state.eventPhases.filter(p => p.id !== pId);
                broadcastUpdate();
                renderAllViews();
                showToast('Phase deleted.');
            }
        },
        submitParticipantBid: submitParticipantBid,
        quickBidIncrement: quickBidIncrement
    };

    // DOM Ready Initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }

})();
