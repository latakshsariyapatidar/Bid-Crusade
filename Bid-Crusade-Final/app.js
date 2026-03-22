// ============================================
// BID CRUSADES — Live Auction Application
// ============================================

(function () {
    'use strict';

    // ===========================
    // ASSET DATABASE
    // (ID, Name, Visible Category, Hidden Vertical, Base Price)
    // Matching score.py exactly
    // ===========================
    const ASSETS = [

        { id: 1, originalId: 23, name: "Pan-India Distribution Rights", fullName: "Pan-India Distribution Rights (Multi-Category)", category: "A", vertical: "V3", basePrice: 11 },
        { id: 2, originalId: 5, name: "Multi-Specialty Hospital Infrastructure Unit", fullName: "Multi-Specialty Hospital Infrastructure Unit", category: "A", vertical: "V1", basePrice: 21 },
        { id: 3, originalId: 38, name: "Multi-Sector ESG Certification Portfolio", fullName: "Multi-Sector ESG Certification Portfolio", category: "A", vertical: "V4", basePrice: 6 },
        { id: 4, originalId: 12, name: "Automated Robotics Assembly System", fullName: "Automated Robotics Assembly System", category: "A", vertical: "V2", basePrice: 14 },
        { id: 5, originalId: 29, name: "Regional Telecom Spectrum Allocation", fullName: "Regional Telecom Spectrum Allocation", category: "A", vertical: "V3", basePrice: 18 },
        { id: 6, originalId: 2, name: "Industrial Manufacturing Plant", fullName: "Industrial Manufacturing Plant (Ready-to-Operate)", category: "A", vertical: "V1", basePrice: 21 },
        { id: 7, originalId: 17, name: "Urban Smart Monitoring Network", fullName: "Urban Smart Monitoring Network", category: "A", vertical: "V2", basePrice: 9 },
        { id: 8, originalId: 34, name: "Government Infrastructure Contract", fullName: "Government Infrastructure Contract (5-Year Assured)", category: "A", vertical: "V4", basePrice: 16 },
        { id: 9, originalId: 40, name: "Infrastructure Maintenance & AMC Rights", fullName: "Infrastructure Maintenance & AMC Rights", category: "A", vertical: "V4", basePrice: 7 },
        { id: 10, originalId: 9, name: "Mining & Raw Material Extraction Lease", fullName: "Mining & Raw Material Extraction Lease", category: "A", vertical: "V1", basePrice: 22 },
        { id: 11, originalId: 21, name: "National Logistics Fleet & Warehousing Rights", fullName: "National Logistics Fleet & Warehousing Rights", category: "B", vertical: "V3", basePrice: 15 },
        { id: 12, originalId: 15, name: "Advanced Cybersecurity Infrastructure Suite", fullName: "Advanced Cybersecurity Infrastructure Suite", category: "B", vertical: "V2", basePrice: 10 },
        { id: 13, originalId: 31, name: "Tier-2 City Land Bank", fullName: "Tier-2 City Land Bank (50 Acres, Zoned)", category: "B", vertical: "V4", basePrice: 15 },
        { id: 14, originalId: 7, name: "Multi-Brand Automobile Assembly Unit", fullName: "Multi-Brand Automobile Assembly Unit", category: "B", vertical: "V1", basePrice: 20 },
        { id: 15, originalId: 26, name: "Export-Import Multi-Nation Trade License", fullName: "Export-Import Multi-Nation Trade License", category: "B", vertical: "V3", basePrice: 12 },
        { id: 16, originalId: 11, name: "AI & Data Analytics Infrastructure Suite", fullName: "AI & Data Analytics Infrastructure Suite", category: "B", vertical: "V2", basePrice: 12 },
        { id: 17, originalId: 33, name: "Private Power Backup & Microgrid System", fullName: "Private Power Backup & Microgrid System", category: "B", vertical: "V4", basePrice: 9 },
        { id: 18, originalId: 19, name: "Cross-Platform Mobile Application Ecosystem", fullName: "Cross-Platform Mobile Application Ecosystem", category: "B", vertical: "V2", basePrice: 8 },
        { id: 19, originalId: 28, name: "Cold Chain Pharmaceutical Distribution Network", fullName: "Cold Chain Pharmaceutical Distribution Network", category: "B", vertical: "V3", basePrice: 13 },
        { id: 20, originalId: 4, name: "Cloud Server Farm Facility", fullName: "Cloud Server Farm Facility", category: "B", vertical: "V1", basePrice: 18 },
        { id: 21, originalId: 37, name: "Regulatory Compliance & Legal Shield Framework", fullName: "Regulatory Compliance & Legal Shield Framework", category: "C", vertical: "V4", basePrice: 8 },
        { id: 22, originalId: 14, name: "Cross-Industry Patent Portfolio", fullName: "Cross-Industry Patent Portfolio", category: "C", vertical: "V2", basePrice: 9 },
        { id: 23, originalId: 25, name: "Multi-State Retail Franchise Rights", fullName: "Multi-State Retail Franchise Rights", category: "C", vertical: "V3", basePrice: 13 },
        { id: 24, originalId: 1, name: "Metropolitan Commercial Tower", fullName: "Metropolitan Commercial Tower (Tier-1 City)", category: "C", vertical: "V1", basePrice: 19 },
        { id: 25, originalId: 36, name: "Strategic Land Reserve in Emerging Smart City Zone", fullName: "Strategic Land Reserve in Emerging Smart City Zone", category: "C", vertical: "V4", basePrice: 13 },
        { id: 26, originalId: 18, name: "Research & Development Innovation Hub", fullName: "Research & Development Innovation Hub", category: "C", vertical: "V2", basePrice: 11 },
        { id: 27, originalId: 30, name: "Commercial Banking Infrastructure & NBFC License", fullName: "Commercial Banking Infrastructure & NBFC License", category: "C", vertical: "V3", basePrice: 14 },
        { id: 28, originalId: 8, name: "Pharmaceutical Manufacturing Facility", fullName: "Pharmaceutical Manufacturing Facility", category: "C", vertical: "V1", basePrice: 19 },
        { id: 29, originalId: 24, name: "Cold Storage & Warehousing Network", fullName: "Cold Storage & Warehousing Network", category: "C", vertical: "V3", basePrice: 12 },
        { id: 30, originalId: 13, name: "High-Speed Data Cable Network", fullName: "High-Speed Data Cable Network", category: "C", vertical: "V2", basePrice: 11 },
        { id: 31, originalId: 39, name: "Long-Term Raw Material Supply Contract", fullName: "Long-Term Raw Material Supply Contract", category: "D", vertical: "V4", basePrice: 10 },
        { id: 32, originalId: 6, name: "Agricultural Processing Facility", fullName: "Agricultural Processing Facility (Certified)", category: "D", vertical: "V1", basePrice: 15 },
        { id: 33, originalId: 22, name: "Scalable E-Commerce Marketplace Platform", fullName: "Scalable E-Commerce Marketplace Platform", category: "D", vertical: "V3", basePrice: 13 },
        { id: 34, originalId: 16, name: "Data Center Cooling & Infrastructure System", fullName: "Data Center Cooling & Infrastructure System", category: "D", vertical: "V2", basePrice: 8 },
        { id: 35, originalId: 35, name: "Diversified Commodity Trading Desk", fullName: "Diversified Commodity Trading Desk (Licensed)", category: "D", vertical: "V4", basePrice: 11 },
        { id: 36, originalId: 10, name: "Green Hydrogen Pilot Plant", fullName: "Green Hydrogen Pilot Plant", category: "D", vertical: "V1", basePrice: 19 },
        { id: 37, originalId: 27, name: "National Warehouse & Fulfillment Network", fullName: "National Warehouse & Fulfillment Network", category: "D", vertical: "V3", basePrice: 15 },
        { id: 38, originalId: 3, name: "Renewable Energy Solar Grid", fullName: "Renewable Energy Solar Grid (Operational)", category: "D", vertical: "V1", basePrice: 20 },
        { id: 39, originalId: 32, name: "Strategic Insurance & Risk Hedging Contract Portfolio", fullName: "Strategic Insurance & Risk Hedging Contract Portfolio", category: "D", vertical: "V4", basePrice: 7 },
        { id: 40, originalId: 20, name: "Enterprise ERP & Automation System", fullName: "Enterprise ERP & Automation System", category: "D", vertical: "V2", basePrice: 10 },
    ];

    // Vertical labels
    const VERTICAL_NAMES = {
        "V1": "Core Value Creation",
        "V2": "Enablers & Technology",
        "V3": "Market Access & Distribution",
        "V4": "Stability & Strategic"
    };

    // Disaster multipliers (from vision.pdf)
    const DISASTER_TABLE = {
        "W": { "A": 1.20, "B": 1.00, "C": 1.00, "D": 0.80 },
        "X": { "B": 1.20, "C": 1.00, "A": 0.80, "D": 1.00 },
        "Y": { "C": 1.20, "D": 1.00, "A": 1.00, "B": 0.80 },
        "Z": { "D": 1.20, "A": 1.00, "B": 1.00, "C": 0.80 }
    };

    // Team colors
    const TEAM_COLORS = [
        '#ef4444', '#3b82f6', '#22c55e', '#f59e0b',
        '#a855f7', '#ec4899', '#14b8a6', '#f97316'
    ];

    const INITIAL_CAPITAL = 100;
    const NUM_TEAMS = 8;

    // ===========================
    // APPLICATION STATE
    // ===========================
    let state = {
        teams: [],
        sales: [],              // { assetId, teamIndex, price, order }
        unsoldAssets: [],
        currentView: 'auction',
        auctionAssetId: null,    // Currently auctioned asset ID
        currentBid: 0,           // Current highest bid
        selectedTeamIndex: null, // Selected team for bid
        disasterCode: null,
        disasterApplied: false,
        saleOrder: 0
    };

    // ===========================
    // STATE PERSISTENCE
    // ===========================
    const STORAGE_KEY = 'bid_crusades_state';

    function saveState() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (e) { /* silently fail */ }
    }

    function loadState() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                state = { ...state, ...parsed };
                return true;
            }
        } catch (e) { /* silently fail */ }
        return false;
    }

    function initTeams() {
        state.teams = [];
        for (let i = 0; i < NUM_TEAMS; i++) {
            state.teams.push({
                name: `Team ${i + 1}`,
                budget: INITIAL_CAPITAL,
                color: TEAM_COLORS[i]
            });
        }
    }

    // ===========================
    // CUSTOM MODAL SYSTEM
    // ===========================
    function showCustomModal(title, message, showInput, confirmText, isDanger, onConfirm) {
        const overlay = document.getElementById('custom-dialog-overlay');
        const titleEl = document.getElementById('dialog-title');
        const msgEl = document.getElementById('dialog-message');
        const inputEl = document.getElementById('dialog-input');
        const cancelBtn = document.getElementById('dialog-btn-cancel');
        const confirmBtn = document.getElementById('dialog-btn-confirm');

        titleEl.innerHTML = title;
        msgEl.innerHTML = message;
        inputEl.style.display = showInput ? 'block' : 'none';
        inputEl.value = '';
        confirmBtn.innerHTML = confirmText;

        confirmBtn.className = isDanger ? 'btn-danger' : 'btn-sell';

        overlay.style.display = 'flex';
        if (showInput) {
            setTimeout(() => inputEl.focus(), 50);
        }

        const close = () => {
            overlay.style.display = 'none';
            cancelBtn.removeEventListener('click', close);
            confirmBtn.removeEventListener('click', handleConfirm);
            inputEl.removeEventListener('keypress', handleEnter);
        };

        const handleConfirm = () => {
            const val = showInput ? inputEl.value : true;
            close();
            onConfirm(val);
        };

        const handleEnter = (e) => {
            if (e.key === 'Enter') handleConfirm();
        };

        cancelBtn.addEventListener('click', close);
        confirmBtn.addEventListener('click', handleConfirm);
        if (showInput) inputEl.addEventListener('keypress', handleEnter);
    }

    // ===========================
    // HELPERS
    // ===========================

    function getAssetById(id) {
        return ASSETS.find(a => a.id === id);
    }

    function getSaleForAsset(assetId) {
        return state.sales.find(s => s.assetId === assetId);
    }

    function isAssetSold(assetId) {
        return state.sales.some(s => s.assetId === assetId);
    }

    function isAssetUnsold(assetId) {
        return state.unsoldAssets && state.unsoldAssets.includes(assetId);
    }

    function getTeamAssets(teamIndex) {
        return state.sales.filter(s => s.teamIndex === teamIndex);
    }

    function getTeamSpent(teamIndex) {
        return getTeamAssets(teamIndex).reduce((sum, s) => sum + s.price, 0);
    }

    function getSoldCount() {
        return state.sales.length;
    }

    function getMinIncrement(currentPrice) {
        if (currentPrice < 15) return 1;
        if (currentPrice <= 25) return 2;
        return 4;
    }

    function getDisasterMultiplier(category, code) {
        if (!code || !DISASTER_TABLE[code]) return 1;
        return DISASTER_TABLE[code][category] || 1;
    }

    // ===========================
    // TOAST NOTIFICATIONS
    // ===========================
    function showToast(message, type = 'info') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    // ===========================
    // NAVIGATION
    // ===========================
    function switchView(viewName) {
        state.currentView = viewName;
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.getElementById(`view-${viewName}`).classList.add('active');
        document.querySelector(`.nav-btn[data-view="${viewName}"]`).classList.add('active');

        // Refresh view content
        if (viewName === 'assets') renderAssetsView();
        if (viewName === 'teams') renderTeamsView();
        if (viewName === 'results') renderResultsView();
        if (viewName === 'auction') renderAuctionSidebar();
    }

    // ===========================
    // HEADER UPDATES
    // ===========================
    function updateHeaderStats() {
        document.getElementById('header-sold-count').textContent = `${getSoldCount()}/40`;
    }

    // ===========================
    // AUCTION SIDEBAR
    // ===========================
    function renderAuctionSidebar(filter = 'all') {
        const container = document.getElementById('asset-list-container');
        container.innerHTML = '';

        let filteredAssets = ASSETS;
        if (filter === 'available') filteredAssets = ASSETS.filter(a => !isAssetSold(a.id));
        if (filter === 'sold') filteredAssets = ASSETS.filter(a => isAssetSold(a.id));

        filteredAssets.forEach(asset => {
            const sold = isAssetSold(asset.id);
            const unsold = isAssetUnsold(asset.id);
            const sale = getSaleForAsset(asset.id);
            const isActive = state.auctionAssetId === asset.id;

            const item = document.createElement('div');
            item.className = `asset-list-item${sold ? ' sold' : ''}${unsold && !sold ? ' unsold' : ''}${isActive ? ' active-auction' : ''}`;

            if (sold) {
                item.innerHTML = `
                    <span class="ali-id">#${asset.id}</span>
                    <span class="ali-name">${asset.name}</span>
                    <span class="ali-sold-tag">${state.teams[sale.teamIndex].name}</span>
                    <span class="ali-price">₹${sale.price} Cr</span>
                    <span class="ali-edit-btn" title="Edit sale" data-asset-id="${asset.id}">✏️</span>
                `;
                item.querySelector('.ali-edit-btn').addEventListener('click', (e) => {
                    e.stopPropagation();
                    editSoldAsset(asset.id);
                });
            } else if (unsold) {
                item.innerHTML = `
                    <span class="ali-id">#${asset.id}</span>
                    <span class="ali-name" style="opacity: 0.6;">${asset.name}</span>
                    <span class="ali-sold-tag" style="background: var(--text-muted); color: var(--bg-main);">UNSOLD</span>
                `;
                item.addEventListener('click', () => startAuction(asset.id));
            } else {
                item.innerHTML = `
                    <span class="ali-id">#${asset.id}</span>
                    <span class="ali-name">${asset.name}</span>
                    <span class="ali-price">₹${asset.basePrice} Cr</span>
                `;
                item.addEventListener('click', () => startAuction(asset.id));
            }

            container.appendChild(item);
        });
    }

    // ===========================
    // AUCTION STAGE
    // ===========================
    function startAuction(assetId) {
        if (isAssetSold(assetId)) return;

        const asset = getAssetById(assetId);
        state.auctionAssetId = assetId;
        state.currentBid = asset.basePrice;
        state.selectedTeamIndex = null;

        // Show active state
        document.getElementById('auction-empty-state').style.display = 'none';
        document.getElementById('auction-active-state').style.display = 'flex';
        document.getElementById('sold-overlay').style.display = 'none';

        // Populate card
        document.getElementById('auction-asset-category').textContent = asset.category;
        document.getElementById('auction-asset-id').textContent = `Asset #${asset.id}`;
        document.getElementById('auction-asset-name').textContent = asset.fullName;
        document.getElementById('auction-base-price').textContent = `₹${asset.basePrice} Cr`;

        updateAuctionPrice();
        updateBidInput();
        renderTeamBidGrid();
        renderAuctionSidebar();
        updateSellButton();

        saveState();
    }

    function updateAuctionPrice(oldPrice = null) {
        const priceEl = document.getElementById('auction-current-price');

        if (oldPrice !== null && oldPrice !== state.currentBid && typeof window.animateNumber === 'function') {
            window.animateNumber(priceEl, oldPrice, state.currentBid);
        } else {
            priceEl.textContent = `₹${state.currentBid} Cr`;
        }

        // Bump animation
        priceEl.classList.add('bump');
        setTimeout(() => priceEl.classList.remove('bump'), 300);

        const minInc = getMinIncrement(state.currentBid);
        document.getElementById('auction-min-increment').textContent = `₹${minInc} Cr`;
    }

    function updateBidInput() {
        const minInc = getMinIncrement(state.currentBid);
        const inputEl = document.getElementById('bid-amount-input');
        inputEl.value = minInc;
        inputEl.min = minInc;
        inputEl.step = 1;
        updateBidDisplay();
    }

    function updateBidDisplay() {
        const bidAmount = parseInt(document.getElementById('bid-amount-input').value) || 0;
        const newTotal = state.currentBid + bidAmount;
        document.getElementById('bid-total-display').textContent = newTotal;
    }

    function placeBid() {
        const bidAmount = parseInt(document.getElementById('bid-amount-input').value) || 0;
        const minInc = getMinIncrement(state.currentBid);

        if (bidAmount < minInc) {
            showToast(`Minimum increment is ₹${minInc} Cr`, 'error');
            return;
        }

        const oldPrice = state.currentBid;
        state.currentBid += bidAmount;
        updateAuctionPrice(oldPrice);
        updateBidInput();
        renderTeamBidGrid();
        updateSellButton();

        showToast(`Bid raised to ₹${state.currentBid} Cr`, 'info');
    }

    // ===========================
    // TEAM BID GRID
    // ===========================
    function renderTeamBidGrid() {
        const grid = document.getElementById('team-bid-grid');
        grid.innerHTML = '';

        state.teams.forEach((team, idx) => {
            const btn = document.createElement('button');
            const canAfford = team.budget >= state.currentBid;
            btn.className = `team-bid-btn${state.selectedTeamIndex === idx ? ' selected' : ''}${!canAfford ? ' insufficient' : ''}`;
            btn.innerHTML = `
                <span class="team-bid-name" style="color: ${team.color}">${team.name}</span>
                <span class="team-bid-budget">₹${team.budget.toFixed(1)} Cr left</span>
            `;

            if (canAfford) {
                btn.addEventListener('click', () => {
                    state.selectedTeamIndex = idx;
                    renderTeamBidGrid();
                    updateSellButton();
                });
            }

            grid.appendChild(btn);
        });
    }

    function updateSellButton() {
        const btn = document.getElementById('btn-sell');
        if (state.selectedTeamIndex !== null) {
            const team = state.teams[state.selectedTeamIndex];
            btn.disabled = false;
            btn.textContent = `🔨 SELL TO ${team.name.toUpperCase()} — ₹${state.currentBid} Cr`;
        } else {
            btn.disabled = true;
            btn.textContent = '🔨 SELECT A TEAM FIRST';
        }
    }

    // ===========================
    // SELL ASSET
    // ===========================
    function sellAsset() {
        if (state.selectedTeamIndex === null || state.auctionAssetId === null) return;

        const teamIdx = state.selectedTeamIndex;
        const assetId = state.auctionAssetId;
        const price = state.currentBid;
        const asset = getAssetById(assetId);
        const team = state.teams[teamIdx];

        if (team.budget < price) {
            showToast(`${team.name} cannot afford ₹${price} Cr!`, 'error');
            return;
        }

        // Record sale
        state.saleOrder++;
        state.sales.push({
            assetId: assetId,
            teamIndex: teamIdx,
            price: price,
            order: state.saleOrder
        });

        if (state.unsoldAssets && state.unsoldAssets.includes(assetId)) {
            state.unsoldAssets = state.unsoldAssets.filter(id => id !== assetId);
        }

        // Deduct budget
        team.budget -= price;

        // Show sold overlay
        document.getElementById('sold-asset-name').textContent = asset.fullName;
        document.getElementById('sold-team-name').textContent = team.name;
        document.getElementById('sold-team-name').style.color = team.color;
        document.getElementById('sold-price').textContent = `₹${price} Cr`;
        document.getElementById('sold-overlay').style.display = 'flex';

        updateHeaderStats();
        saveState();

        if (typeof window.launchConfetti === 'function') window.launchConfetti();
        showToast(`${asset.name} sold to ${team.name} for ₹${price} Cr`, 'success');
    }

    function closeSoldOverlay() {
        document.getElementById('sold-overlay').style.display = 'none';

        const lastAssetId = state.auctionAssetId;
        state.auctionAssetId = null;
        state.currentBid = 0;
        state.selectedTeamIndex = null;

        // Auto-select the next available asset
        let nextAssetId = null;
        if (lastAssetId !== null) {
            for (let i = lastAssetId; i < ASSETS.length; i++) {
                const checkId = ASSETS[i].id;
                if (!isAssetSold(checkId) && !isAssetUnsold(checkId)) {
                    nextAssetId = checkId;
                    break;
                }
            }
        }

        if (nextAssetId !== null) {
            renderAuctionSidebar();
            saveState();
            startAuction(nextAssetId);
        } else {
            document.getElementById('auction-active-state').style.display = 'none';
            document.getElementById('auction-empty-state').style.display = '';
            renderAuctionSidebar();
            saveState();
        }
    }

    // ===========================
    // EDIT SOLD ASSET
    // ===========================
    function editSoldAsset(assetId) {
        const sale = getSaleForAsset(assetId);
        if (!sale) return;
        const asset = getAssetById(assetId);

        const overlay = document.getElementById('edit-sale-overlay');
        const titleEl = document.getElementById('edit-sale-title');
        const teamSelect = document.getElementById('edit-sale-team');
        const priceInput = document.getElementById('edit-sale-price');
        const cancelBtn = document.getElementById('edit-sale-cancel');
        const confirmBtn = document.getElementById('edit-sale-confirm');

        titleEl.textContent = `✏️ Edit: ${asset.name}`;

        // Populate team dropdown
        teamSelect.innerHTML = '';
        state.teams.forEach((team, idx) => {
            const opt = document.createElement('option');
            opt.value = idx;
            opt.textContent = team.name;
            if (idx === sale.teamIndex) opt.selected = true;
            teamSelect.appendChild(opt);
        });

        // Set current price
        priceInput.value = sale.price;

        overlay.style.display = 'flex';

        const close = () => {
            overlay.style.display = 'none';
            cancelBtn.removeEventListener('click', close);
            confirmBtn.removeEventListener('click', handleSave);
        };

        const handleSave = () => {
            const newTeamIndex = parseInt(teamSelect.value);
            const newPrice = parseInt(priceInput.value);

            if (isNaN(newPrice) || newPrice < 1) {
                showToast('Price must be at least ₹1 Cr', 'error');
                return;
            }

            const oldTeamIndex = sale.teamIndex;
            const oldPrice = sale.price;

            // Refund old team
            state.teams[oldTeamIndex].budget += oldPrice;

            // Check if new team can afford it
            if (state.teams[newTeamIndex].budget < newPrice) {
                // Undo refund
                state.teams[oldTeamIndex].budget -= oldPrice;
                showToast(`${state.teams[newTeamIndex].name} cannot afford ₹${newPrice} Cr (budget: ₹${state.teams[newTeamIndex].budget.toFixed(1)} Cr)`, 'error');
                return;
            }

            // Deduct from new team
            state.teams[newTeamIndex].budget -= newPrice;

            // Update sale record
            sale.teamIndex = newTeamIndex;
            sale.price = newPrice;

            saveState();
            renderAuctionSidebar();
            updateHeaderStats();
            close();

            const changeDetails = [];
            if (oldTeamIndex !== newTeamIndex) changeDetails.push(`team → ${state.teams[newTeamIndex].name}`);
            if (oldPrice !== newPrice) changeDetails.push(`price → ₹${newPrice} Cr`);
            showToast(`${asset.name} updated: ${changeDetails.join(', ')}`, 'success');
        };

        cancelBtn.addEventListener('click', close);
        confirmBtn.addEventListener('click', handleSave);
    }

    function markUnsold() {
        if (!state.unsoldAssets) state.unsoldAssets = [];
        if (state.auctionAssetId !== null && !state.unsoldAssets.includes(state.auctionAssetId)) {
            state.unsoldAssets.push(state.auctionAssetId);
        }

        const lastAssetId = state.auctionAssetId;
        state.auctionAssetId = null;
        state.currentBid = 0;
        state.selectedTeamIndex = null;

        let nextAssetId = null;
        if (lastAssetId !== null) {
            for (let i = lastAssetId; i < ASSETS.length; i++) {
                const checkId = ASSETS[i].id;
                if (!isAssetSold(checkId) && !isAssetUnsold(checkId)) {
                    nextAssetId = checkId;
                    break;
                }
            }
        }

        showToast('Asset marked as unsold', 'info');

        if (nextAssetId !== null) {
            renderAuctionSidebar();
            saveState();
            startAuction(nextAssetId);
        } else {
            document.getElementById('auction-active-state').style.display = 'none';
            document.getElementById('auction-empty-state').style.display = '';
            renderAuctionSidebar();
            saveState();
        }
    }

    function cancelAuction() {
        state.auctionAssetId = null;
        state.currentBid = 0;
        state.selectedTeamIndex = null;

        document.getElementById('auction-active-state').style.display = 'none';
        document.getElementById('auction-empty-state').style.display = '';

        renderAuctionSidebar();
        saveState();
    }

    // ===========================
    // ASSETS VIEW
    // ===========================
    let globalVerticalsVisible = true;

    function renderAssetsView() {
        const grid = document.getElementById('assets-grid-view');
        const verticalFilter = document.getElementById('asset-vertical-filter').value;
        const statusFilter = document.getElementById('asset-status-filter').value;

        let filtered = ASSETS;
        if (verticalFilter !== 'all') filtered = filtered.filter(a => a.vertical === verticalFilter);
        if (statusFilter === 'available') filtered = filtered.filter(a => !isAssetSold(a.id));
        if (statusFilter === 'sold') filtered = filtered.filter(a => isAssetSold(a.id));

        grid.innerHTML = '';

        filtered.forEach(asset => {
            const sold = isAssetSold(asset.id);
            const unsold = isAssetUnsold(asset.id);
            const sale = getSaleForAsset(asset.id);

            const card = document.createElement('div');
            card.className = `asset-card${sold ? ' sold' : ''}${unsold && !sold ? ' unsold' : ''}`;

            let footerHTML = `<span class="ac-base-price">₹${asset.basePrice} Cr</span>`;
            if (sold) {
                const team = state.teams[sale.teamIndex];
                footerHTML += `
                    <div class="ac-sold-info">
                        <div class="ac-sold-team" style="color: ${team.color}">${team.name}</div>
                        <div class="ac-sold-price">₹${sale.price} Cr</div>
                    </div>
                `;
            } else if (unsold) {
                footerHTML += `
                    <div class="ac-sold-info">
                        <div class="ac-sold-team" style="color: var(--text-muted); background: rgba(255,255,255,0.1); padding: 0.2rem 0.5rem; border-radius: 4px;">UNSOLD</div>
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="ac-header">
                    <span class="ac-id">#${asset.id}</span>
                    <span class="ac-category cat-${asset.category}">Cat ${asset.category}</span>
                    <span class="ac-vertical" style="display: ${globalVerticalsVisible ? 'inline-block' : 'none'};">${asset.vertical}</span>
                </div>
                <div class="ac-name" style="${unsold && !sold ? 'opacity:0.6;' : ''}">${asset.fullName}</div>
                <div class="ac-footer">${footerHTML}</div>
            `;

            grid.appendChild(card);
        });

        const toggleBtn = document.getElementById('btn-global-toggle-verticals');
        if (toggleBtn) {
            toggleBtn.title = globalVerticalsVisible ? 'Hide Verticals' : 'Show Verticals';
            toggleBtn.innerHTML = globalVerticalsVisible ? '👁️' : '🙈';
        }
    }

    // ===========================
    // TEAMS VIEW
    // ===========================
    // Global UI state for expanding team portfolios
    let globalAssetsExpanded = false;
    let globalPortfoliosVisible = false;

    function renderTeamsView() {
        const grid = document.getElementById('teams-grid-view');
        grid.innerHTML = '';

        state.teams.forEach((team, idx) => {
            const teamAssets = getTeamAssets(idx);
            const spent = getTeamSpent(idx);
            const assetCount = teamAssets.length;

            const card = document.createElement('div');
            card.className = 'team-card';

            let assetsListHTML = '';

            if (teamAssets.length > 0) {
                assetsListHTML = `<div class="tc-assets-list" style="display: ${globalAssetsExpanded ? 'block' : 'none'}; margin-top: 0.5rem;">`;
                teamAssets.forEach(s => {
                    const a = getAssetById(s.assetId);
                    assetsListHTML += `
                        <div class="tc-asset-row" style="flex-direction: column; align-items: flex-start; gap: 0.2rem; padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
                            <div style="width: 100%; display: flex; justify-content: space-between;">
                                <span class="tc-asset-name" style="font-weight: 600;">Auction ID: #${a.id} | ${a.name}</span>
                                <span class="tc-asset-price" style="font-size: 0.9rem; color: var(--accent-gold);">Sold: ₹${s.price} Cr</span>
                            </div>
                            <div style="width: 100%; display: flex; justify-content: space-between;">
                                <span style="font-size: 0.75rem; color: var(--text-muted);">Base: ₹${a.basePrice} Cr</span>
                            </div>
                        </div>
                    `;
                });
                assetsListHTML += '</div>';
            } else {
                assetsListHTML = `<div class="tc-empty" style="display: ${globalAssetsExpanded ? 'block' : 'none'}; margin-top: 0.5rem;">No assets purchased yet</div>`;
            }

            card.innerHTML = `
                <div class="tc-header">
                    <div class="tc-name-section">
                        <div class="tc-color-dot" style="background: ${team.color}"></div>
                        <span class="tc-name" data-team="${idx}">${team.name}</span>
                        <button class="tc-edit-btn" data-team="${idx}">✏️</button>
                    </div>
                    <div class="tc-budget">
                        <div class="tc-budget-label">Budget Remaining</div>
                        <div class="tc-budget-value ${team.budget < 20 ? 'low' : ''}">₹${team.budget.toFixed(1)} Cr</div>
                    </div>
                </div>
                <div class="tc-stats">
                    <div class="tc-stat">
                        <span class="tc-stat-label">Assets</span>
                        <span class="tc-stat-val">${assetCount}</span>
                    </div>
                    <div class="tc-stat">
                        <span class="tc-stat-label">Invested</span>
                        <span class="tc-stat-val">₹${spent.toFixed(1)} Cr</span>
                    </div>
                    <div class="tc-stat">
                        <span class="tc-stat-label">Budget Used</span>
                        <span class="tc-stat-val">${((spent / INITIAL_CAPITAL) * 100).toFixed(0)}%</span>
                    </div>
                </div>
                ${assetsListHTML}
            `;

            grid.appendChild(card);
        });

        // Attach edit handlers
        document.querySelectorAll('.tc-edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const teamIdx = parseInt(e.target.dataset.team);
                startTeamNameEdit(teamIdx, e.target);
            });
        });

        // Update global toggle button text
        const globalBtn = document.getElementById('btn-global-toggle-assets');
        if (globalBtn) {
            globalBtn.textContent = globalAssetsExpanded ? '▲ Hide All Assets' : '▼ Show All Assets';
        }
    }

    function startTeamNameEdit(teamIdx, btnElement) {
        const nameSpan = document.querySelector(`.tc-name[data-team="${teamIdx}"]`);
        const currentName = state.teams[teamIdx].name;
        const parent = nameSpan.parentElement;

        // Replace name + button with input
        const editDiv = document.createElement('div');
        editDiv.className = 'tc-name-edit-inline';
        editDiv.innerHTML = `
                        <input type= "text" value = "${currentName}" maxlength = "30" >
            <button class="save-name">✓</button>
            <button class="cancel-name">✕</button>
                    `;

        nameSpan.style.display = 'none';
        btnElement.style.display = 'none';
        parent.appendChild(editDiv);

        const input = editDiv.querySelector('input');
        input.focus();
        input.select();

        const finish = (save) => {
            if (save) {
                const newName = input.value.trim() || currentName;
                state.teams[teamIdx].name = newName;
                saveState();
            }
            renderTeamsView();
        };

        editDiv.querySelector('.save-name').addEventListener('click', () => finish(true));
        editDiv.querySelector('.cancel-name').addEventListener('click', () => finish(false));
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') finish(true);
            if (e.key === 'Escape') finish(false);
        });
    }

    // ===========================
    // RESULTS VIEW
    // ===========================
    function renderResultsView() {
        renderSalesLog();
        updateDisasterUI();
        if (state.disasterApplied) {
            renderPostDisasterResults();
        }
    }

    function renderSalesLog() {
        const container = document.getElementById('sales-log-table');
        if (state.sales.length === 0) {
            container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 2rem;">No sales recorded yet</p>';
            return;
        }

        const sortedSales = [...state.sales].sort((a, b) => a.order - b.order);

        let html = `
                        <table>
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Asset ID</th>
                        <th>Asset Name</th>
                        <th>Category</th>
                        <th>Base Price</th>
                        <th>Sold Price</th>
                        <th>Premium</th>
                        <th>Team</th>
                    </tr>
                </thead>
                <tbody>
        `;

        sortedSales.forEach(sale => {
            const asset = getAssetById(sale.assetId);
            const team = state.teams[sale.teamIndex];
            const premium = ((sale.price - asset.basePrice) / asset.basePrice * 100).toFixed(0);

            html += `
                <tr>
                    <td>${sale.order}</td>
                    <td>#${asset.originalId}</td>
                    <td style="font-family: 'Outfit'; font-weight: 500;">${asset.name}</td>
                    <td>${asset.category}</td>
                    <td>₹${asset.basePrice} Cr</td>
                    <td style="color: var(--accent-gold);">₹${sale.price} Cr</td>
                    <td style="color: ${premium > 0 ? 'var(--accent-emerald)' : 'var(--text-muted)'};">${premium > 0 ? '+' : ''}${premium}%</td>
                    <td style="color: ${team.color}; font-family: 'Outfit'; font-weight: 600;">${team.name}</td>
                </tr>
            `;
        });

        html += '</tbody></table> ';
        container.innerHTML = html;
    }

    // ===========================
    // DISASTER
    // ===========================
    let selectedDisasterCode = null;

    function updateDisasterUI() {
        document.querySelectorAll('.disaster-btn').forEach(btn => {
            btn.classList.toggle('selected', btn.dataset.code === selectedDisasterCode);
        });

        const applyBtn = document.getElementById('btn-apply-disaster');
        const resetBtn = document.getElementById('btn-reset-disaster');
        const infoDiv = document.getElementById('disaster-info');

        if (state.disasterApplied) {
            applyBtn.style.display = 'none';
            resetBtn.style.display = 'inline-block';
            infoDiv.innerHTML = `<div class="disaster-applied-banner">⚠️ Disaster ${state.disasterCode} has been applied</div>`;
            // Disable buttons
            document.querySelectorAll('.disaster-btn').forEach(btn => {
                btn.style.pointerEvents = 'none';
                btn.style.opacity = btn.dataset.code === state.disasterCode ? '1' : '0.3';
            });
        } else if (selectedDisasterCode) {
            applyBtn.disabled = false;
            applyBtn.style.display = 'inline-block';
            resetBtn.style.display = 'none';
            const d = DISASTER_TABLE[selectedDisasterCode];
            infoDiv.innerHTML = `
                <table>
                    <tr><th>Category</th><th>A</th><th>B</th><th>C</th><th>D</th></tr>
                    <tr>
                        <td>Impact</td>
                        <td class="${d.A > 1 ? 'val-up' : d.A < 1 ? 'val-down' : 'val-neutral'}">${d.A > 1 ? '+20%' : d.A < 1 ? '−20%' : '0%'}</td>
                        <td class="${d.B > 1 ? 'val-up' : d.B < 1 ? 'val-down' : 'val-neutral'}">${d.B > 1 ? '+20%' : d.B < 1 ? '−20%' : '0%'}</td>
                        <td class="${d.C > 1 ? 'val-up' : d.C < 1 ? 'val-down' : 'val-neutral'}">${d.C > 1 ? '+20%' : d.C < 1 ? '−20%' : '0%'}</td>
                        <td class="${d.D > 1 ? 'val-up' : d.D < 1 ? 'val-down' : 'val-neutral'}">${d.D > 1 ? '+20%' : d.D < 1 ? '−20%' : '0%'}</td>
                    </tr>
                </table>
            `;
            document.querySelectorAll('.disaster-btn').forEach(btn => {
                btn.style.pointerEvents = '';
                btn.style.opacity = '';
            });
        } else {
            applyBtn.disabled = true;
            applyBtn.style.display = 'inline-block';
            resetBtn.style.display = 'none';
            infoDiv.innerHTML = '<p>Select a disaster code to apply post-auction impact</p>';
            document.querySelectorAll('.disaster-btn').forEach(btn => {
                btn.style.pointerEvents = '';
                btn.style.opacity = '';
            });
        }
    }

    function applyDisaster() {
        if (!selectedDisasterCode) return;

        showCustomModal(
            '⚠️ Apply Disaster',
            `Are you sure you want to apply Disaster <b style="color:var(--accent-gold); font-size:1.2rem;">${selectedDisasterCode}</b>?<br>This will permanently recalculate all portfolio values.`,
            false,
            'Yes, Apply Disaster',
            true, // isDanger
            () => {
                state.disasterCode = selectedDisasterCode;
                state.disasterApplied = true;
                saveState();

                updateDisasterUI();
                renderPostDisasterResults();
                // Assuming globalPortfoliosVisible is defined elsewhere and its default is now false
                document.getElementById('post-disaster-results-body').style.display = 'none'; // Always hide initially after disaster application

                const portfoliosToggleBtn = document.getElementById('btn-global-toggle-portfolios');
                if (portfoliosToggleBtn) {
                    // If globalPortfoliosVisible is false by default, this will correctly show '▶ Show'
                    portfoliosToggleBtn.title = 'Show Portfolios';
                    portfoliosToggleBtn.innerHTML = '▶ Show';
                }

                showToast(`Disaster ${selectedDisasterCode} applied!`, 'error');
            }
        );
    }

    function resetDisaster() {
        showCustomModal(
            '↺ Reset Disaster',
            'Reset disaster? This will undo the portfolio recalculations and restore prior values.',
            false,
            'Yes, Reset',
            false,
            () => {
                state.disasterCode = null;
                state.disasterApplied = false;
                // Keep selectedDisasterCode so they can quickly re-apply it
                saveState();

                document.getElementById('post-disaster-results-body').style.display = 'none';
                updateDisasterUI();

                showToast('Disaster reset', 'info');
            }
        );
    }

    function renderPostDisasterResults() {
        const container = document.getElementById('results-table-container');
        if (!state.disasterApplied) { container.innerHTML = ''; return; }

        let html = `
            <table>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Assets</th>
                        <th>Total Invested</th>
                        <th>Post-Disaster Value</th>
                        <th>ROI</th>
                        <th>V1</th><th>V2</th><th>V3</th><th>V4</th>
                        <th>Verticals</th>
                        <th>Max Exposure</th>
                        <th>Bus. Strength</th>
                        <th>Bonus</th>
                        <th>Org Score (50)</th>
                    </tr>
                </thead>
                <tbody>
        `;

        state.teams.forEach((team, idx) => {
            const teamSales = getTeamAssets(idx);
            const totalInvested = teamSales.reduce((s, sale) => s + sale.price, 0);

            if (teamSales.length === 0) {
                html += `<tr><td style="color: ${team.color}; font-family:'Outfit'; font-weight:600;">${team.name}</td><td colspan="13" style="color: var(--text-muted);">No assets</td></tr>`;
                return;
            }

            let postValue = 0;
            const categoryInv = { A: 0, B: 0, C: 0, D: 0 };
            const verticalPresence = { V1: 0, V2: 0, V3: 0, V4: 0 };

            teamSales.forEach(sale => {
                const asset = getAssetById(sale.assetId);
                const multiplier = getDisasterMultiplier(asset.category, state.disasterCode);
                postValue += sale.price * multiplier;
                categoryInv[asset.category] += sale.price;
                verticalPresence[asset.vertical] = 1;
            });

            const rawRoi = totalInvested > 0 ? (postValue - totalInvested) / totalInvested : 0;
            const rawMaxExposure = totalInvested > 0 ? Math.max(...Object.values(categoryInv)) / totalInvested : 0;

            // Fix floating point inaccuracies (e.g. 0.450000000000001)
            const roi = Math.round(rawRoi * 100000) / 100000;
            const maxExposure = Math.round(rawMaxExposure * 100000) / 100000;

            const verticalCount = Object.values(verticalPresence).reduce((a, b) => a + b, 0);

            // Scoring
            const verticalScore = (verticalCount / 4) * 15;
            const riskScore = maxExposure <= 0.45 ? 15 : Math.round(15 * Math.pow((1 - maxExposure) / 0.55, 2) * 10) / 10;
            const roiScore = Math.round(Math.max(0, Math.min(10, roi * 50)) * 10) / 10;

            const businessStrength = verticalScore + riskScore + roiScore;

            const extraAsset = teamSales.length >= 5 ? 1 : 0;
            const roiCondition = roi >= 0.08 ? 1 : 0;
            const exposureCondition = maxExposure <= 0.45 ? 1 : 0;
            const conditions = (verticalCount === 4 && extraAsset ? 1 : 0) + roiCondition + exposureCondition;

            let bonus = 0;
            if (conditions === 3) bonus = 10;
            else if (conditions === 2) bonus = 6;
            else if (conditions === 1) bonus = 3;

            const orgScore = businessStrength + bonus;

            html += `
                <tr>
                    <td style="color: ${team.color}; font-family:'Outfit'; font-weight:600;">${team.name}</td>
                    <td>${teamSales.length}</td>
                    <td>₹${totalInvested.toFixed(1)} Cr</td>
                    <td>₹${postValue.toFixed(1)} Cr</td>
                    <td class="${roi >= 0 ? 'val-up' : 'val-down'}">${(roi * 100).toFixed(1)}%</td>
                    <td>${verticalPresence.V1 ? '✓' : '✕'}</td>
                    <td>${verticalPresence.V2 ? '✓' : '✕'}</td>
                    <td>${verticalPresence.V3 ? '✓' : '✕'}</td>
                    <td>${verticalPresence.V4 ? '✓' : '✕'}</td>
                    <td>${verticalCount}/4</td>
                    <td class="${maxExposure <= 0.45 ? 'val-up' : 'val-down'}">${(maxExposure * 100).toFixed(0)}%</td>
                    <td>${businessStrength.toFixed(1)}</td>
                    <td>${bonus}</td>
                    <td style="color: var(--accent-gold); font-size: 1.1rem; font-weight:700;">${orgScore.toFixed(1)}</td>
                </tr>
            `;
        });

        html += '</tbody></table>';
        container.innerHTML = html;
    }

    // ===========================
    // CSV EXPORT
    // ===========================
    function downloadCSV(filename, csvContent) {
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
        URL.revokeObjectURL(link.href);
    }

    function exportMasterSheet() {
        if (state.sales.length === 0) {
            showToast('No sales data to export', 'error');
            return;
        }

        let csv = '=== BEFORE DISASTER (AUCTION LOG) ===\n';
        csv += 'Sale Order,Auction ID,Asset ID,Asset Name,Category,Vertical,Base Price (Cr),Sold Price (Cr),Premium (%),Team\n';

        const sorted = [...state.sales].sort((a, b) => a.order - b.order);
        sorted.forEach(sale => {
            const asset = getAssetById(sale.assetId);
            const team = state.teams[sale.teamIndex];
            const premium = ((sale.price - asset.basePrice) / asset.basePrice * 100).toFixed(1);
            csv += `${sale.order},${asset.id},${asset.originalId},"${asset.fullName}",${asset.category},${asset.vertical},${asset.basePrice},${sale.price},${premium},"${team.name}"\n`;
        });

        // Add summary
        csv += '\n\n=== TEAM SUMMARY (PRE-DISASTER) ===\n';
        csv += 'Team,Assets Bought,Total Invested (Cr),Budget Remaining (Cr)\n';
        state.teams.forEach((team, idx) => {
            const teamSales = getTeamAssets(idx);
            const spent = getTeamSpent(idx);
            csv += `"${team.name}",${teamSales.length},${spent.toFixed(1)},${team.budget.toFixed(1)}\n`;
        });

        // If disaster applied, add post-disaster data
        if (state.disasterApplied) {
            csv += `\n\n=== AFTER DISASTER: CODE ${state.disasterCode} ===\n`;
            csv += 'Sale Order,Auction ID,Asset ID,Asset Name,Category,Team,Purchased For (Cr),Multiplier,Post-Disaster Value (Cr)\n';

            sorted.forEach(sale => {
                const asset = getAssetById(sale.assetId);
                const team = state.teams[sale.teamIndex];
                const multiplier = getDisasterMultiplier(asset.category, state.disasterCode);
                const newValue = sale.price * multiplier;
                csv += `${sale.order},${asset.id},${asset.originalId},"${asset.fullName}",${asset.category},"${team.name}",${sale.price},${multiplier}x,${newValue.toFixed(1)}\n`;
            });

            csv += '\n\n=== TEAM SUMMARY (POST-DISASTER) ===\n';
            csv += 'Team,Total Invested (Cr),Post-Disaster Value (Cr),Profit/Loss (Cr),ROI (%),Vertical Count,Max Exposure (%),Business Strength,Bonus,Organizer Score\n';

            state.teams.forEach((team, idx) => {
                const teamSales = getTeamAssets(idx);
                const totalInvested = teamSales.reduce((s, sale) => s + sale.price, 0);
                if (teamSales.length === 0) return;

                let postValue = 0;
                const catInv = { A: 0, B: 0, C: 0, D: 0 };
                const vertPres = { V1: 0, V2: 0, V3: 0, V4: 0 };

                teamSales.forEach(sale => {
                    const asset = getAssetById(sale.assetId);
                    postValue += sale.price * getDisasterMultiplier(asset.category, state.disasterCode);
                    catInv[asset.category] += sale.price;
                    vertPres[asset.vertical] = 1;
                });

                const profitLoss = postValue - totalInvested;
                const rawRoi = totalInvested > 0 ? profitLoss / totalInvested : 0;
                const rawMaxExp = totalInvested > 0 ? Math.max(...Object.values(catInv)) / totalInvested : 0;
                const vCount = Object.values(vertPres).reduce((a, b) => a + b, 0);

                const roi = Math.round(rawRoi * 100000) / 100000;
                const maxExp = Math.round(rawMaxExp * 100000) / 100000;

                const vScore = (vCount / 4) * 15;
                const rScore = maxExp <= 0.45 ? 15 : Math.round(15 * Math.pow((1 - maxExp) / 0.55, 2) * 10) / 10;
                const roiScore = Math.round(Math.max(0, Math.min(10, roi * 50)) * 10) / 10;
                const bStr = vScore + rScore + roiScore;

                const extraA = teamSales.length >= 5 ? 1 : 0;
                const roiC = roi >= 0.08 ? 1 : 0;
                const expC = maxExp <= 0.45 ? 1 : 0;
                const conds = (vCount === 4 && extraA ? 1 : 0) + roiC + expC;
                let bonus = conds === 3 ? 10 : conds === 2 ? 6 : conds === 1 ? 3 : 0;

                csv += `"${team.name}",${totalInvested.toFixed(1)},${postValue.toFixed(1)},${profitLoss.toFixed(1)},${(roi * 100).toFixed(1)},${vCount},${(maxExp * 100).toFixed(0)},${bStr.toFixed(1)},${bonus},${(bStr + bonus).toFixed(1)}\n`;
            });
        }

        downloadCSV('Bid-Crusade_Master_Sheet.csv', csv);
        showToast('Master sheet downloaded!', 'success');
    }

    // ===========================
    // TEAM PDF GENERATION
    // ===========================
    function exportTeamPDFs() {
        if (state.sales.length === 0) {
            showToast('No sales data to export', 'error');
            return;
        }
        if (!state.disasterApplied) {
            showToast('Apply disaster first to generate score PDFs', 'error');
            return;
        }

        const { jsPDF } = window.jspdf;

        state.teams.forEach((team, idx) => {
            const teamSales = getTeamAssets(idx);
            if (teamSales.length === 0) return;

            const doc = new jsPDF();
            const pageWidth = doc.internal.pageSize.getWidth();

            // Title
            doc.setFontSize(20);
            doc.setFont('helvetica', 'bold');
            doc.text('BID CRUSADES', pageWidth / 2, 20, { align: 'center' });
            doc.setFontSize(14);
            doc.text('Team Summary Report', pageWidth / 2, 28, { align: 'center' });

            // Team Name
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            doc.text(team.name, pageWidth / 2, 40, { align: 'center' });

            // Budget Info
            const totalSpent = teamSales.reduce((s, sale) => s + sale.price, 0);
            doc.setFontSize(11);
            doc.setFont('helvetica', 'normal');
            doc.text(`Initial Budget: 100 Cr`, 14, 52);
            doc.text(`Total Invested: ${totalSpent.toFixed(1)} Cr`, 14, 58);
            doc.text(`Leftover Budget: ${team.budget.toFixed(1)} Cr`, 14, 64);
            doc.text(`Assets Acquired: ${teamSales.length}`, 14, 70);
            doc.text(`Disaster Code: ${state.disasterCode}`, 14, 76);

            // Assets Table
            doc.setFontSize(13);
            doc.setFont('helvetica', 'bold');
            doc.text('Assets Acquired', 14, 88);

            const assetRows = teamSales.map(sale => {
                const asset = getAssetById(sale.assetId);
                const multiplier = getDisasterMultiplier(asset.category, state.disasterCode);
                const postVal = sale.price * multiplier;
                return [
                    asset.id,
                    asset.fullName,
                    asset.category,
                    asset.vertical,
                    `${sale.price} Cr`,
                    `${multiplier}x`,
                    `${postVal.toFixed(1)} Cr`
                ];
            });

            doc.autoTable({
                startY: 92,
                head: [['#', 'Asset Name', 'Cat', 'Vertical', 'Bought For', 'Multiplier', 'Post-Disaster']],
                body: assetRows,
                styles: { fontSize: 8, cellPadding: 2 },
                headStyles: { fillColor: [41, 50, 65], textColor: 255, fontStyle: 'bold' },
                alternateRowStyles: { fillColor: [240, 240, 240] },
                margin: { left: 14, right: 14 }
            });

            let yPos = doc.lastAutoTable.finalY + 15;

            // Score Breakdown
            // Calculate scores
            let postValue = 0;
            const categoryInv = { A: 0, B: 0, C: 0, D: 0 };
            const verticalPresence = { V1: 0, V2: 0, V3: 0, V4: 0 };

            teamSales.forEach(sale => {
                const asset = getAssetById(sale.assetId);
                const multiplier = getDisasterMultiplier(asset.category, state.disasterCode);
                postValue += sale.price * multiplier;
                categoryInv[asset.category] += sale.price;
                verticalPresence[asset.vertical] = 1;
            });

            const rawRoi = totalSpent > 0 ? (postValue - totalSpent) / totalSpent : 0;
            const rawMaxExposure = totalSpent > 0 ? Math.max(...Object.values(categoryInv)) / totalSpent : 0;
            const roi = Math.round(rawRoi * 100000) / 100000;
            const maxExposure = Math.round(rawMaxExposure * 100000) / 100000;
            const verticalCount = Object.values(verticalPresence).reduce((a, b) => a + b, 0);

            const verticalScore = (verticalCount / 4) * 15;
            const riskScore = maxExposure <= 0.45 ? 15 : Math.round(15 * Math.pow((1 - maxExposure) / 0.55, 2) * 10) / 10;
            const roiScore = Math.round(Math.max(0, Math.min(10, roi * 50)) * 10) / 10;

            const businessStrength = verticalScore + riskScore + roiScore;

            const extraAsset = teamSales.length >= 5 ? 1 : 0;
            const roiCondition = roi >= 0.08 ? 1 : 0;
            const exposureCondition = maxExposure <= 0.45 ? 1 : 0;
            const conditions = (verticalCount === 4 && extraAsset ? 1 : 0) + roiCondition + exposureCondition;
            let bonus = conditions === 3 ? 10 : conditions === 2 ? 6 : conditions === 1 ? 3 : 0;

            const orgScore = businessStrength + bonus;

            // Check if we need a new page
            if (yPos > 220) {
                doc.addPage();
                yPos = 20;
            }

            doc.setFontSize(13);
            doc.setFont('helvetica', 'bold');
            doc.text('Score Breakdown (Out of 50)', 14, yPos);

            // Portfolio summary
            const summaryRows = [
                ['Post-Disaster Portfolio Value', `${postValue.toFixed(1)} Cr`],
                ['Profit / Loss', `${(postValue - totalSpent).toFixed(1)} Cr`],
                ['ROI', `${(roi * 100).toFixed(1)}%`],
                ['Category Exposure A', `${(totalSpent > 0 ? categoryInv.A / totalSpent * 100 : 0).toFixed(1)}%`],
                ['Category Exposure B', `${(totalSpent > 0 ? categoryInv.B / totalSpent * 100 : 0).toFixed(1)}%`],
                ['Category Exposure C', `${(totalSpent > 0 ? categoryInv.C / totalSpent * 100 : 0).toFixed(1)}%`],
                ['Category Exposure D', `${(totalSpent > 0 ? categoryInv.D / totalSpent * 100 : 0).toFixed(1)}%`],
                ['Max Exposure', `${(maxExposure * 100).toFixed(1)}%`],
            ];

            doc.autoTable({
                startY: yPos + 4,
                head: [['Metric', 'Value']],
                body: summaryRows,
                styles: { fontSize: 9, cellPadding: 2 },
                headStyles: { fillColor: [41, 50, 65], textColor: 255, fontStyle: 'bold' },
                columnStyles: { 0: { fontStyle: 'bold' } },
                margin: { left: 14, right: 14 }
            });

            yPos = doc.lastAutoTable.finalY + 10;

            // Score table
            const scoreRows = [
                ['A. Vertical Coverage (15)', `${verticalCount}/4 verticals covered`, verticalScore.toFixed(1)],
                ['B. Risk Discipline (15)', `Max Exposure: ${(maxExposure * 100).toFixed(1)}%`, riskScore.toFixed(1)],
                ['C. ROI Performance (10)', `ROI: ${(roi * 100).toFixed(1)}%`, roiScore.toFixed(0)],
                ['Business Strength (40)', '', businessStrength.toFixed(1)],
                ['', '', ''],
                ['Bonus Condition 1: 4 Verticals + 5 Assets', verticalCount === 4 && extraAsset ? 'YES' : 'NO', ''],
                ['Bonus Condition 2: ROI >= 8%', roiCondition ? 'YES' : 'NO', ''],
                ['Bonus Condition 3: Exposure <= 45%', exposureCondition ? 'YES' : 'NO', ''],
                ['Bonus Score (10)', `${conditions}/3 conditions met`, bonus.toFixed(0)],
                ['', '', ''],
                ['ORGANIZER TOTAL (50)', '', orgScore.toFixed(1)],
            ];

            doc.autoTable({
                startY: yPos,
                head: [['Component', 'Detail', 'Score']],
                body: scoreRows,
                styles: { fontSize: 9, cellPadding: 2 },
                headStyles: { fillColor: [41, 50, 65], textColor: 255, fontStyle: 'bold' },
                columnStyles: { 0: { fontStyle: 'bold' } },
                margin: { left: 14, right: 14 },
                didParseCell: function (data) {
                    if (data.section === 'body') {
                        // Highlight total row
                        if (data.row.index === 3 || data.row.index === 10) {
                            data.cell.styles.fillColor = [230, 240, 255];
                            data.cell.styles.fontStyle = 'bold';
                        }
                        if (data.row.index === 10) {
                            data.cell.styles.fontSize = 11;
                        }
                    }
                }
            });

            // Footer
            const finalY = doc.lastAutoTable.finalY + 10;
            doc.setFontSize(8);
            doc.setFont('helvetica', 'italic');
            doc.text('Generated by Bid Crusades Scoring System', pageWidth / 2, finalY, { align: 'center' });

            doc.save(`${team.name.replace(/\s+/g, '_')}_Summary.pdf`);
        });

        showToast('Team PDFs downloaded!', 'success');
    }

    // ===========================
    // EVENT LISTENERS
    // ===========================
    function attachEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => switchView(btn.dataset.view));
        });

        // Auction sidebar filters
        document.querySelectorAll('.asset-filter-bar .filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.asset-filter-bar .filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderAuctionSidebar(btn.dataset.filter);
            });
        });

        // Bid controls
        document.getElementById('bid-decrease').addEventListener('click', () => {
            const input = document.getElementById('bid-amount-input');
            const minInc = getMinIncrement(state.currentBid);
            let val = parseInt(input.value) || minInc;
            val = Math.max(minInc, val - 1);
            input.value = val;
            updateBidDisplay();
        });

        document.getElementById('bid-increase').addEventListener('click', () => {
            const input = document.getElementById('bid-amount-input');
            let val = parseInt(input.value) || 0;
            val += 1;
            input.value = val;
            updateBidDisplay();
        });

        document.getElementById('bid-amount-input').addEventListener('input', updateBidDisplay);

        document.getElementById('btn-place-bid').addEventListener('click', placeBid);

        // Sell / unsold / cancel
        document.getElementById('btn-sell').addEventListener('click', sellAsset);
        document.getElementById('btn-unsold').addEventListener('click', markUnsold);
        document.getElementById('btn-cancel-auction').addEventListener('click', cancelAuction);
        document.getElementById('btn-sold-continue').addEventListener('click', closeSoldOverlay);

        const btnCancelTop = document.getElementById('btn-cancel-auction-top');
        if (btnCancelTop) btnCancelTop.addEventListener('click', cancelAuction);

        // Asset view filters
        document.getElementById('asset-vertical-filter').addEventListener('change', renderAssetsView);
        document.getElementById('asset-status-filter').addEventListener('change', renderAssetsView);

        // Global asset verticals toggle
        const verticalsToggleBtn = document.getElementById('btn-global-toggle-verticals');
        if (verticalsToggleBtn) {
            verticalsToggleBtn.addEventListener('click', () => {
                globalVerticalsVisible = !globalVerticalsVisible;
                renderAssetsView();
            });
        }

        // Global teams toggle
        const globalToggleBtn = document.getElementById('btn-global-toggle-assets');
        if (globalToggleBtn) {
            globalToggleBtn.addEventListener('click', () => {
                globalAssetsExpanded = !globalAssetsExpanded;
                renderTeamsView();
            });
        }

        // Global results portfolios toggle
        const portfoliosToggleBtn = document.getElementById('btn-global-toggle-portfolios');
        if (portfoliosToggleBtn) {
            portfoliosToggleBtn.addEventListener('click', () => {
                globalPortfoliosVisible = !globalPortfoliosVisible;
                portfoliosToggleBtn.title = globalPortfoliosVisible ? 'Hide Portfolios' : 'Show Portfolios';
                portfoliosToggleBtn.innerHTML = globalPortfoliosVisible ? '▼ Hide' : '▶ Show';

                const container = document.getElementById('post-disaster-results-body');
                if (container && state.disasterApplied) {
                    container.style.display = globalPortfoliosVisible ? 'block' : 'none';
                }
            });
        }

        // Spin the Wheel Logic
        const btnSpinWheel = document.getElementById('btn-spin-wheel');
        const wheel = document.getElementById('disaster-wheel');
        const wheelResult = document.getElementById('wheel-result-display');
        const wheelPointer = document.querySelector('.wheel-pointer');
        let currentWheelRotation = 0;

        if (btnSpinWheel && wheel) {
            btnSpinWheel.addEventListener('click', () => {
                if (btnSpinWheel.disabled) return;
                btnSpinWheel.disabled = true;
                wheelResult.style.opacity = '0';
                wheel.classList.add('blur-spin');

                // W=0, X=1, Y=2, Z=3
                // Angles to center the top pointer on each segment:
                // W (red) -> 0-90deg -> center 45deg -> backward 45 = 315deg
                // X (yellow) -> 90-180deg -> center 135deg -> backward 135 = 225deg
                // Y (blue) -> 180-270deg -> center 225deg -> backward 225 = 135deg
                // Z (green) -> 270-360deg -> center 315deg -> backward 315 = 45deg
                const angles = [315, 225, 135, 45];
                const codes = ['W', 'X', 'Y', 'Z'];

                const randomIndex = Math.floor(Math.random() * 4);
                const targetAngle = angles[randomIndex];
                const selectedCode = codes[randomIndex];

                // Calculate total rotation
                const extraSpins = 6 + Math.floor(Math.random() * 4); // 6 to 9 full spins
                // Add current rotation to keep it winding up progressively
                const baseRotation = Math.floor(currentWheelRotation / 360) * 360;
                const totalRotation = baseRotation + (extraSpins * 360) + targetAngle;

                currentWheelRotation = totalRotation;
                wheel.style.transform = `rotate(${totalRotation}deg)`;

                // Remove blur right before the wheel stops completely to snap into focus
                setTimeout(() => {
                    wheel.classList.remove('blur-spin');
                }, 7500);

                // Wait for animation to finish (9s in CSS)
                setTimeout(() => {
                    wheelResult.innerHTML = `DISASTER <span style="font-size:3.5rem; margin: 0 0.5rem;">${selectedCode}</span> SELECTED`;
                    wheelResult.style.opacity = '1';

                    // Pre-select this code for the Results tab
                    selectedDisasterCode = selectedCode;
                    updateDisasterUI();

                    btnSpinWheel.disabled = false;
                    btnSpinWheel.textContent = "SPIN AGAIN";
                }, 9000);
            });
        }

        // Disaster buttons
        document.querySelectorAll('.disaster-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                selectedDisasterCode = btn.dataset.code;
                updateDisasterUI();
            });
        });

        document.getElementById('btn-apply-disaster').addEventListener('click', applyDisaster);
        document.getElementById('btn-reset-disaster').addEventListener('click', resetDisaster);

        // Export
        document.getElementById('btn-export-master').addEventListener('click', exportMasterSheet);
        document.getElementById('btn-export-team-pdfs').addEventListener('click', exportTeamPDFs);

        // Factory Reset & Backup Restore
        const resetBtn = document.getElementById('btn-reset-all');
        const restoreBtn = document.getElementById('btn-restore-backup');
        const backupInfo = document.getElementById('backup-info-text');

        function checkBackup() {
            if (localStorage.getItem(STORAGE_KEY + '_backup')) {
                const time = localStorage.getItem(STORAGE_KEY + '_backup_time');
                if (restoreBtn) restoreBtn.style.display = 'inline-block';
                if (backupInfo) {
                    backupInfo.style.display = 'inline-block';
                    backupInfo.textContent = `Backup available from: ${time}`;
                }
            }
        }
        checkBackup();

        if (restoreBtn) {
            restoreBtn.addEventListener('click', () => {
                showCustomModal(
                    '↩️ Restore Backup',
                    'CRITICAL: Restore the last backup?<br>Current data will be OVERWRITTEN.',
                    false,
                    'Yes, Restore Now',
                    false,
                    () => {
                        const backupData = localStorage.getItem(STORAGE_KEY + '_backup');
                        if (backupData) {
                            localStorage.setItem(STORAGE_KEY, backupData);
                            window.location.reload();
                        }
                    }
                );
            });
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                showCustomModal(
                    '<span style="color:var(--accent-rose); text-shadow:var(--neon-rose);">⚠️ FACTORY RESET</span>',
                    'CRITICAL WARNING: Are you absolutely sure you want to reset ALL auction data? This cannot be undone.<br><br><span style="color:var(--text-muted); font-size:0.9rem;">Type "<b>RESET</b>" below to confirm factory reset:</span>',
                    true, // show input
                    'Permanently Reset Data',
                    true, // isDanger
                    (typed) => {
                        if (typed && typed.trim().toUpperCase() === 'RESET') {
                            // 1. Save internal backup
                            const currentData = localStorage.getItem(STORAGE_KEY);
                            if (currentData) {
                                localStorage.setItem(STORAGE_KEY + '_backup', currentData);
                                localStorage.setItem(STORAGE_KEY + '_backup_time', new Date().toLocaleString());

                                // 2. Auto-Download JSON backup
                                try {
                                    const blob = new Blob([currentData], { type: 'application/json' });
                                    const url = URL.createObjectURL(blob);
                                    const a = document.createElement('a');
                                    a.href = url;
                                    a.download = `bid_crusade_backup_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
                                    document.body.appendChild(a);
                                    a.click();
                                    document.body.removeChild(a);
                                    URL.revokeObjectURL(url);
                                } catch (e) { console.error('Auto download failed', e); }
                            }

                            // 3. Wipe and reload
                            localStorage.removeItem(STORAGE_KEY);
                            setTimeout(() => window.location.reload(), 500);
                        } else if (typed !== null && typed !== true) {
                            // If they typed something wrong
                            showToast('Incorrect confirmation text. Reset aborted.', 'alert');
                        }
                    }
                );
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            const activeTag = document.activeElement.tagName.toUpperCase();
            if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') return;

            if (e.key === '1') switchView('auction');
            if (e.key === '2') switchView('assets');
            if (e.key === '3') switchView('teams');
            if (e.key === '4') switchView('wheel');
            if (e.key === '5') switchView('results');
        });
    }

    // ===========================
    // INITIALIZATION
    // ===========================
    function init() {
        const loaded = loadState();
        if (!loaded) {
            initTeams();
        }

        // Restore disaster selection
        if (state.disasterCode) {
            selectedDisasterCode = state.disasterCode;
        }

        attachEventListeners();
        updateHeaderStats();
        renderAuctionSidebar();

        // If there was an active auction in progress, restore it
        if (state.auctionAssetId && !isAssetSold(state.auctionAssetId)) {
            startAuction(state.auctionAssetId);
        }
    }

    // Start the app
    document.addEventListener('DOMContentLoaded', init);
})();
