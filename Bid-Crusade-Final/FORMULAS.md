# Bid-Crusade — Formulas & Scoring Reference

This document explains every formula and calculation used in the **Results** section of the website and the **exported CSV/PDF files**.

---

## 1. Pre-Disaster Metrics (Sales Log Table)

These are shown in the Results tab under the auction log before any disaster is applied.

| Column | Formula | Example |
|--------|---------|---------|
| **Base Price** | Fixed per asset (from the asset database) | ₹21 Cr |
| **Sold Price** | The final bid amount when the asset was sold to a team | ₹28 Cr |
| **Premium (%)** | `((Sold Price - Base Price) / Base Price) × 100` | `((28 - 21) / 21) × 100 = +33%` |

---

## 2. Disaster Multiplier Table

When a disaster code (W, X, Y, or Z) is applied, each asset's **sold price** is multiplied based on its **category** (A, B, C, or D).

| Disaster | Category A | Category B | Category C | Category D |
|----------|-----------|-----------|-----------|-----------|
| **W** | ×1.20 (+20%) | ×1.00 (0%) | ×1.00 (0%) | ×0.80 (−20%) |
| **X** | ×0.80 (−20%) | ×1.20 (+20%) | ×1.00 (0%) | ×1.00 (0%) |
| **Y** | ×1.00 (0%) | ×0.80 (−20%) | ×1.20 (+20%) | ×1.00 (0%) |
| **Z** | ×1.00 (0%) | ×1.00 (0%) | ×0.80 (−20%) | ×1.20 (+20%) |

**Post-Disaster Value of a single asset:**
```
Post-Disaster Value = Sold Price × Disaster Multiplier(Category)
```

---

## 3. Post-Disaster Team Metrics

### 3.1 Total Invested
```
Total Invested = Sum of all Sold Prices for the team's assets
```

### 3.2 Post-Disaster Value (Total)
```
Post-Disaster Value = Σ (Sold Price × Multiplier) for each asset
```

### 3.3 ROI (Return on Investment)
```
ROI = (Post-Disaster Value − Total Invested) / Total Invested
```
Displayed as a percentage. Positive = profit, negative = loss.

### 3.4 Category Investment
```
Category Investment[X] = Sum of Sold Prices for all assets in category X
```

### 3.5 Max Exposure
```
Max Exposure = Max(Category Investment[A], [B], [C], [D]) / Total Invested
```
Displayed as a percentage. Lower is better (more diversified).

### 3.6 Vertical Presence
```
Vertical Count = Number of distinct verticals (V1–V4) where the team owns ≥1 asset
```

---

## 4. Organizer Scoring (out of 50)

The Organizer Score = **Business Strength** + **Bonus**.

### 4.1 Business Strength (out of 40)

```
Business Strength = Vertical Score + Risk Score + ROI Score
```

#### Vertical Score (out of 15)
```
Vertical Score = (Vertical Count / 4) × 15
```
| Verticals Covered | Score |
|---|---|
| 4/4 | 15.0 |
| 3/4 | 11.25 |
| 2/4 | 7.5 |
| 1/4 | 3.75 |

#### Risk Score (out of 15) — Dynamic Quadratic Penalty
```
If Max Exposure ≤ 45%  →  Risk Score = 15 (full marks)
If Max Exposure > 45%  →  Risk Score = 15 × ((1 − Max Exposure) / 0.55)²
```
| Max Exposure | Risk Score | Penalty |
|---|---|---|
| ≤ 45% | 15.0 | None |
| 50% | 12.4 | Moderate |
| 55% | 10.0 | Significant |
| 60% | 7.9 | Heavy |
| 70% | 4.5 | Severe |
| 80% | 2.0 | Critical |
| 100% | 0.0 | Maximum |

#### ROI Score (out of 10) — Continuous Linear Scale
```
ROI Score = min(10, max(0, ROI × 50))
```
i.e., `ROI Score = (ROI / 20%) × 10`, clamped to [0, 10]

| ROI | Score |
|-----|-------|
| +20% or more | 10.0 |
| +15% | 7.5 |
| +12% | 6.0 |
| +9% | 4.5 |
| +5% | 2.5 |
| 0% or negative | 0.0 |

### 4.2 Bonus (out of 10)

Three independent conditions:

| # | Condition | Requirement |
|---|-----------|-------------|
| 1 | **Diversification** | Vertical Count = 4 **AND** team owns ≥ 5 assets |
| 2 | **ROI Threshold** | ROI ≥ 8% |
| 3 | **Risk Management** | Max Exposure ≤ 45% |

| Conditions Met | Bonus |
|----------------|-------|
| 3 of 3 | 10 |
| 2 of 3 | 6 |
| 1 of 3 | 3 |
| 0 of 3 | 0 |

### 4.3 Final Organizer Score
```
Organizer Score = Business Strength + Bonus
Maximum possible: 50 (40 + 10)
```

---

## 5. Export Contents

### 5.1 Master Sheet CSV (`Bid-Crusade_Master_Sheet.csv`)
1. Auction Log (pre-disaster)
2. Team Summary (pre-disaster)
3. Per-asset post-disaster breakdown with multipliers
4. Team Summary (post-disaster) with all scores

### 5.2 Team Summary PDFs (client-side jsPDF)
One PDF per team containing:
1. Team info & budget summary
2. Assets table with multipliers & post-disaster values
3. Full score breakdown with all metrics

---

## 6. Vertical Names (Hidden from Participants)

| Code | Full Name |
|------|-----------|
| V1 | Core Value Creation |
| V2 | Enablers & Technology |
| V3 | Market Access & Distribution |
| V4 | Stability & Strategic |

---

## 7. Key Constants

| Parameter | Value |
|-----------|-------|
| Initial Budget per Team | ₹100 Cr |
| Number of Teams | 8 |
| Total Assets | 40 |
| Categories | A, B, C, D (visible) |
| Verticals | V1, V2, V3, V4 (hidden) |

---

## 8. Bid Increment Rules

| Current Price Range | Minimum Increment |
|--------------------|-------------------|
| < ₹15 Cr | ₹1 Cr |
| ₹15 – ₹25 Cr | ₹2 Cr |
| > ₹25 Cr | ₹4 Cr |
