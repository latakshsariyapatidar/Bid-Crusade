# 🏛️ Bid-Crusade — Live Auction Simulation

> A full-featured, real-time auction simulation platform built for **Headstart · IIT Dharwad**. Teams compete to build diversified business portfolios through strategic asset acquisition, facing a post-auction macroeconomic disaster that reshapes portfolio values.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)

---

## ✨ Features

### 🎯 Live Auction Engine
- **40 unique assets** across 4 visible categories (A–D) and 4 hidden verticals (V1–V4)
- Real-time bidding with dynamic minimum increments
- 8-team support with live budget tracking
- Asset sell, skip (mark unsold), and edit functionality
- Auto-advance to next available asset after each sale

### 🎡 Disaster Roulette Wheel
- Animated spin wheel with premium gradient design & motion blur
- Randomly selects one of four disaster codes (W, X, Y, Z) with equal probability
- Each disaster redistributes asset values via category-specific multipliers

### 📊 Scoring & Results
- **Automated Organizer Scoring** (50 marks) — fully formula-driven
  - Vertical Coverage Score (15 marks)
  - Risk Discipline Score with quadratic penalty (15 marks)
  - ROI Performance on continuous linear scale (10 marks)
  - Bonus system for meeting diversification thresholds (10 marks)
- Post-disaster portfolio table with complete team analytics
- Full sales log with premiums

### 📥 Data Export
- **Master Sheet CSV** — complete auction log + post-disaster team summaries
- **Team Summary PDFs** — client-side generated per-team reports with full score breakdowns (via jsPDF)

### 🎨 Premium UI/UX
- Dark theme with particle background effects
- Custom cursor, confetti on sales, smooth animations
- Responsive navigation with keyboard shortcuts (1–5)
- Custom dialog system (no native browser prompts)
- Toast notifications for all actions

---

## 🚀 Quick Start

### Option 1: Direct Open
Simply open `index.html` in any modern browser — no build step required.

### Option 2: Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Then visit
http://localhost:8000
```

### Option 3: VS Code Live Server
Install the **Live Server** extension and click "Go Live".

---

## 📁 Project Structure

```
Bid-Crusade/
├── index.html                  # Main application (single page)
├── styles.css                  # Complete stylesheet (2000+ lines)
├── app.js                      # Application logic & scoring engine
├── effects.js                  # Particle background, cursor, confetti
├── score.py                    # Standalone terminal scoring engine
├── generate_judgesheet.py      # Generates official judgesheet PDF
├── Asset List.pdf              # Official asset catalog
├── judgesheet.pdf              # Generated evaluation framework PDF
├── FORMULAS.md                 # Complete scoring formulas reference
├── FORMULAS.pdf                # PDF version of formulas document
└── README.md                   # This file
```

---

## 🎮 How to Use

### During the Auction
1. Navigate to the **Auction** tab
2. Select an asset from the left sidebar
3. Use the bid controls to set the price
4. Select the winning team from the grid
5. Click **SELL** to record the sale
6. Repeat for all 40 assets

### After the Auction
1. Go to the **Wheel** tab → Spin to determine the disaster code
2. Go to the **Results** tab → Select the matching disaster button → Click **Apply Disaster**
3. View complete post-disaster portfolio analysis
4. Download the **Master Sheet CSV** and **Team Summary PDFs**

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `1` | Auction tab |
| `2` | Assets tab |
| `3` | Teams tab |
| `4` | Wheel tab |
| `5` | Results tab |

---

## 📐 Scoring Overview

| Component | Sub-Component | Max Marks |
|-----------|---------------|-----------|
| **Part A: Organizer Score** | Vertical Coverage | 15 |
| | Risk Discipline (Dynamic) | 15 |
| | ROI Performance (Linear) | 10 |
| | Bonus (3 conditions) | 10 |
| | **Subtotal** | **50** |
| **Part B: Judge Score** | Strategic Depth & Logic | 15 |
| | Market Feasibility | 10 |
| | Clarity & Structure | 10 |
| | Data Use & Disaster Explanation | 10 |
| | Q&A Defense | 5 |
| | **Subtotal** | **50** |
| **Final Total** | | **100** |

> For complete formula details, see [FORMULAS.md](FORMULAS.md)

---

## 🐍 Python Utilities

### `score.py` — Terminal Scoring Engine
Standalone Python script for manual score calculation and verification.
```bash
pip install reportlab openpyxl
python score.py
```

### `generate_judgesheet.py` — Judgesheet PDF Generator
Generates the official evaluation framework document.
```bash
pip install reportlab
python generate_judgesheet.py
```

---

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: [Outfit](https://fonts.google.com/specimen/Outfit), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Google Fonts)
- **PDF Export**: [jsPDF](https://github.com/parallax/jsPDF) + [jsPDF-AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable) (CDN)
- **Python Tools**: ReportLab, openpyxl
- **Storage**: Browser localStorage for state persistence

---

## 📄 License

This project was built for the **Headstart** event at **IIT Dharwad**.

---

*Built with ❤️ for Headstart · IIT Dharwad*
