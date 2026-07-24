// ============================================
// BID A BIZ GRAND FINALE — Visual Effects Engine
// Clean corporate UI effects (ripples, card fades, smooth transitions)
// No particle loops, glitch text, or slot machine animations
// ============================================

(function () {
    'use strict';

    // ── ASSET CARD STAGGER ANIMATION ──
    window.staggerCards = function (selector = '.sequence-card, .admin-card, .corporate-table tbody tr') {
        const cards = document.querySelectorAll(selector);
        cards.forEach((card, i) => {
            card.style.animationDelay = `${i * 0.03}s`;
        });
    };

    // ── RIPPLE EFFECT on button click ──
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('button, .login-card, .nav-btn');
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

    // ── PAGE LOAD ENTRANCE ──
    document.addEventListener('DOMContentLoaded', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.4s ease';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 50);
    });

})();
