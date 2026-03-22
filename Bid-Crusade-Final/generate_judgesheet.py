# ============================================
# BID CRUSADES — Official Judgesheet PDF Generator
# ============================================

from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, KeepTogether
)
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch, cm
from reportlab.lib.pagesizes import A4
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY

OUTPUT_FILE = "judgesheet.pdf"

def build_pdf():
    doc = SimpleDocTemplate(
        OUTPUT_FILE,
        pagesize=A4,
        topMargin=0.8*inch,
        bottomMargin=0.7*inch,
        leftMargin=0.9*inch,
        rightMargin=0.9*inch,
    )

    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'CustomTitle', parent=styles['Title'],
        fontSize=22, leading=26, spaceAfter=4,
        alignment=TA_CENTER, fontName='Helvetica-Bold',
        textColor=colors.HexColor('#1a1a2e')
    )
    subtitle_style = ParagraphStyle(
        'Subtitle', parent=styles['Normal'],
        fontSize=13, leading=16, spaceAfter=6,
        alignment=TA_CENTER, fontName='Helvetica',
        textColor=colors.HexColor('#555555')
    )
    h1_style = ParagraphStyle(
        'H1', parent=styles['Heading1'],
        fontSize=16, leading=20, spaceBefore=18, spaceAfter=8,
        fontName='Helvetica-Bold', textColor=colors.HexColor('#1a1a2e'),
        borderWidth=1, borderColor=colors.HexColor('#1a1a2e'),
        borderPadding=(0, 0, 4, 0)
    )
    h2_style = ParagraphStyle(
        'H2', parent=styles['Heading2'],
        fontSize=13, leading=16, spaceBefore=14, spaceAfter=6,
        fontName='Helvetica-Bold', textColor=colors.HexColor('#2c3e50')
    )
    h3_style = ParagraphStyle(
        'H3', parent=styles['Heading3'],
        fontSize=11, leading=14, spaceBefore=10, spaceAfter=4,
        fontName='Helvetica-Bold', textColor=colors.HexColor('#34495e')
    )
    body_style = ParagraphStyle(
        'Body', parent=styles['Normal'],
        fontSize=10, leading=14, spaceAfter=6,
        fontName='Helvetica', alignment=TA_JUSTIFY
    )
    bullet_style = ParagraphStyle(
        'Bullet', parent=body_style,
        leftIndent=20, bulletIndent=8, spaceAfter=3,
        bulletFontName='Helvetica', bulletFontSize=10
    )
    formula_style = ParagraphStyle(
        'Formula', parent=body_style,
        fontSize=10, leading=14, alignment=TA_CENTER,
        fontName='Helvetica-Bold', spaceBefore=6, spaceAfter=6,
        textColor=colors.HexColor('#2c3e50'),
        backColor=colors.HexColor('#f0f4f8'),
        borderWidth=0.5, borderColor=colors.HexColor('#d0d0d0'),
        borderPadding=6
    )
    note_style = ParagraphStyle(
        'Note', parent=body_style,
        fontSize=9, leading=12, fontName='Helvetica-Oblique',
        textColor=colors.HexColor('#666666'), leftIndent=12, spaceAfter=8
    )
    footer_style = ParagraphStyle(
        'Footer', parent=body_style,
        fontSize=8, alignment=TA_CENTER,
        textColor=colors.HexColor('#999999')
    )

    # Table style helper
    def make_table(data, col_widths=None, header=True):
        style_cmds = [
            ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
            ('FONTSIZE', (0, 0), (-1, -1), 9),
            ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
            ('TOPPADDING', (0, 0), (-1, -1), 6),
            ('LEFTPADDING', (0, 0), (-1, -1), 8),
            ('RIGHTPADDING', (0, 0), (-1, -1), 8),
            ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#cccccc')),
            ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ]
        if header:
            style_cmds += [
                ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1a1a2e')),
                ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
                ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
                ('FONTSIZE', (0, 0), (-1, 0), 10),
            ]
            for i in range(1, len(data)):
                if i % 2 == 0:
                    style_cmds.append(('BACKGROUND', (0, i), (-1, i), colors.HexColor('#f7f9fc')))

        t = Table(data, colWidths=col_widths)
        t.setStyle(TableStyle(style_cmds))
        return t

    elements = []

    # ===================== TITLE PAGE =====================
    elements.append(Spacer(1, 1.5*inch))
    elements.append(Paragraph("BID CRUSADES", title_style))
    elements.append(Spacer(1, 0.15*inch))
    elements.append(Paragraph("Official Evaluation &amp; Judging Framework", subtitle_style))
    elements.append(Spacer(1, 0.1*inch))
    elements.append(Paragraph("Headstart &middot; IIT Dharwad", ParagraphStyle(
        'Sub2', parent=subtitle_style, fontSize=11,
        textColor=colors.HexColor('#888888')
    )))
    elements.append(Spacer(1, 0.6*inch))

    # Overview box
    overview_data = [
        ['Component', 'Evaluated By', 'Marks'],
        ['Part A \u2013 Quantitative Business Evaluation', 'Organizers (Formula-Based)', '50'],
        ['Part B \u2013 Qualitative Strategic & Presentation', 'Judges', '50'],
    ]
    elements.append(make_table(overview_data, col_widths=[3.2*inch, 2.2*inch, 0.8*inch]))
    elements.append(Spacer(1, 0.15*inch))
    elements.append(Paragraph(
        "<b>Final Score = Organizer Score (50) + Judge Score (50) = 100 Marks</b>",
        ParagraphStyle('FinalFormula', parent=formula_style, fontSize=11)
    ))
    elements.append(Spacer(1, 0.4*inch))
    elements.append(Paragraph(
        "This document details every formula, threshold, and scoring mechanism used in the competition. "
        "Organizer scores are fully formula-driven and locked before judge presentations. "
        "No manual intervention is permitted for Part A.",
        body_style
    ))

    elements.append(PageBreak())

    # ===================== PART A =====================
    elements.append(Paragraph("1. Part A \u2013 Organizer Quantitative Evaluation (50 Marks)", h1_style))

    elements.append(Paragraph(
        "This component is fully formula-driven, computed immediately after disaster declaration, "
        "locked before judge presentations, and generated via the official scoring engine. "
        "No manual intervention is permitted.",
        body_style
    ))

    # Inputs
    elements.append(Paragraph("1.1 Inputs Used by the System", h2_style))
    for item in ["Team Name", "Asset ID List (from official asset sheet)",
                  "Remaining Budget (\u20b9 Cr)", "Disaster Code (W / X / Y / Z)"]:
        elements.append(Paragraph(f"\u2022 {item}", bullet_style))

    elements.append(Paragraph("1.2 Disaster Mechanism", h2_style))
    elements.append(Paragraph(
        "After the auction concludes, one macroeconomic disaster is randomly triggered via the "
        "Disaster Roulette wheel. Each disaster has equal probability (25%) and impacts asset "
        "categories as follows:",
        body_style
    ))

    disaster_data = [
        ['Disaster', 'Cat A', 'Cat B', 'Cat C', 'Cat D'],
        ['W', '+20% \u2191', '0%', '0%', '\u201320% \u2193'],
        ['X', '\u201320% \u2193', '+20% \u2191', '0%', '0%'],
        ['Y', '0%', '\u201320% \u2193', '+20% \u2191', '0%'],
        ['Z', '0%', '0%', '\u201320% \u2193', '+20% \u2191'],
    ]
    elements.append(make_table(disaster_data, col_widths=[1*inch, 1.1*inch, 1.1*inch, 1.1*inch, 1.1*inch]))
    elements.append(Spacer(1, 0.05*inch))
    elements.append(Paragraph(
        "Each disaster: 1 category appreciates (+20%), 2 remain neutral (0%), and 1 depreciates (\u201320%). "
        "Post-disaster portfolio value is recalculated using: <b>Post Value = \u2211 (Sale Price \u00d7 Multiplier)</b>",
        note_style
    ))
    elements.append(Paragraph(
        "Multipliers: Appreciating = 1.20, Neutral = 1.00, Depreciating = 0.80",
        note_style
    ))

    # ===================== BUSINESS STRENGTH =====================
    elements.append(Paragraph("1.3 Business Strength (40 Marks)", h2_style))

    # A. Vertical Coverage
    elements.append(Paragraph("A. Vertical Coverage Score (15 Marks)", h3_style))
    elements.append(Paragraph(
        "Teams are evaluated on coverage of four hidden structural verticals. "
        "Each asset belongs to exactly one vertical. The verticals are:",
        body_style
    ))
    for v in ["V1 \u2013 Core Value Creation", "V2 \u2013 Enablers &amp; Technology",
              "V3 \u2013 Market Access &amp; Distribution", "V4 \u2013 Stability &amp; Strategic Protection"]:
        elements.append(Paragraph(f"\u2022 {v}", bullet_style))

    elements.append(Paragraph(
        "Vertical Score = (Vertical Count / 4) \u00d7 15",
        formula_style
    ))
    vert_data = [
        ['Verticals Covered', 'Score'],
        ['1', '3.75'], ['2', '7.5'], ['3', '11.25'], ['4', '15.0'],
    ]
    elements.append(make_table(vert_data, col_widths=[2.5*inch, 2.5*inch]))

    # B. Risk Discipline
    elements.append(Paragraph("B. Risk Discipline Score (15 Marks)", h3_style))
    elements.append(Paragraph(
        "Measures portfolio diversification across visible asset categories (A, B, C, D). "
        "The maximum category exposure is calculated as:",
        body_style
    ))
    elements.append(Paragraph(
        "Max Exposure = Highest Category Investment / Total Investment",
        formula_style
    ))
    elements.append(Paragraph(
        "The 45% threshold is a benchmark. Teams at or below 45% receive full marks. "
        "Above 45%, the score decays aggressively using a <b>quadratic penalty</b> \u2014 "
        "the higher the concentration, the steeper the penalty:",
        body_style
    ))
    elements.append(Paragraph(
        "If Max Exposure \u2264 45%: Risk Score = 15 (full marks)<br/>"
        "If Max Exposure &gt; 45%: Risk Score = 15 \u00d7 ((1 \u2013 Max Exposure) / 0.55)\u00b2",
        formula_style
    ))
    risk_data = [
        ['Max Exposure', 'Risk Score', 'Penalty'],
        ['\u2264 45%', '15.0', 'None (full marks)'],
        ['50%', '12.4', 'Moderate'],
        ['55%', '10.0', 'Significant'],
        ['60%', '7.9', 'Heavy'],
        ['65%', '6.1', 'Heavy'],
        ['70%', '4.5', 'Severe'],
        ['75%', '3.1', 'Severe'],
        ['80%', '2.0', 'Critical'],
        ['90%', '0.5', 'Near-zero'],
        ['100%', '0.0', 'Maximum penalty'],
    ]
    elements.append(make_table(risk_data, col_widths=[1.6*inch, 1.6*inch, 2*inch]))
    elements.append(Paragraph(
        "Note: The quadratic decay means scores drop much faster than linear. "
        "A team at 60% exposure loses over half their risk marks. "
        "The strict binary threshold (\u226445%) is reserved for the Bonus condition.",
        note_style
    ))

    # C. ROI Performance
    elements.append(Paragraph("C. ROI Performance Score (10 Marks)", h3_style))
    elements.append(Paragraph(
        "ROI = (Post-Disaster Portfolio Value \u2013 Total Investment) / Total Investment",
        formula_style
    ))
    elements.append(Paragraph(
        "Unlike vertical and risk scores, ROI uses a <b>continuous linear scale</b> rather than fixed tiers. "
        "This rewards every percentage point of return proportionally and ensures that teams taking "
        "calculated concentration risks can earn higher ROI marks to partially offset risk discipline penalties:",
        body_style
    ))
    elements.append(Paragraph(
        "ROI Score = min(10, max(0, ROI \u00d7 50))<br/>"
        "i.e. ROI Score = (ROI / 20%) \u00d7 10, clamped to [0, 10]",
        formula_style
    ))
    roi_data = [
        ['ROI', 'Score', 'Typical Strategy'],
        ['+20%', '10.0', 'All-in on appreciating category (max risk)'],
        ['+15%', '7.5', 'Heavy concentration, lucky disaster'],
        ['+12%', '6.0', '~60% in appreciating category'],
        ['+9%', '4.5', 'Best case with \u226445% exposure (diversified)'],
        ['+5%', '2.5', 'Moderate diversification, favorable disaster'],
        ['0%', '0.0', 'Break even or balanced exposure'],
        ['Negative', '0.0', 'Net loss (depreciating category hit)'],
    ]
    elements.append(make_table(roi_data, col_widths=[1*inch, 1*inch, 3.5*inch]))

    elements.append(Spacer(1, 0.1*inch))
    elements.append(Paragraph(
        "Business Strength = Vertical Score + Risk Score + ROI Score &nbsp;&nbsp;&nbsp; (Maximum: 40 Marks)",
        formula_style
    ))

    # ===================== BONUS =====================
    elements.append(Paragraph("1.4 Bonus Score (Maximum 10 Marks)", h2_style))
    elements.append(Paragraph(
        "Three independent binary conditions are evaluated. These are intentionally <b>hard thresholds</b> \u2014 "
        "each condition is either met or not. Unlike the dynamic Risk Discipline score, "
        "bonus conditions reward only strict discipline:",
        body_style
    ))
    elements.append(Paragraph(
        "<b>Condition 1:</b> Portfolio contains assets across all 4 verticals AND at least one additional asset (minimum 5 assets total).",
        bullet_style
    ))
    elements.append(Paragraph(
        "<b>Condition 2:</b> ROI \u2265 8%.",
        bullet_style
    ))
    elements.append(Paragraph(
        "<b>Condition 3:</b> Maximum Category Exposure \u2264 45%.",
        bullet_style
    ))

    bonus_data = [
        ['Conditions Met', 'Bonus Marks'],
        ['0', '0'], ['1', '3'], ['2', '6'], ['3', '10'],
    ]
    elements.append(make_table(bonus_data, col_widths=[2.5*inch, 2.5*inch]))

    elements.append(Spacer(1, 0.15*inch))
    elements.append(Paragraph(
        "Organizer Score = Business Strength (40) + Bonus (10) &nbsp;&nbsp;&nbsp; (Maximum: 50 Marks)",
        formula_style
    ))

    elements.append(Paragraph("1.5 Implementation Note", h2_style))
    elements.append(Paragraph(
        "All Part A calculations are executed by the official scoring engine. The system:",
        body_style
    ))
    for item in [
        "Applies disaster multipliers to recalculate post-disaster portfolio values",
        "Computes category exposures and ROI",
        "Evaluates vertical presence across hidden verticals",
        "Calculates business strength using dynamic risk scoring",
        "Evaluates bonus conditions with strict binary thresholds",
        "Generates team summary PDFs with full score breakdowns",
        "Records organizer scores \u2014 scores are final and non-negotiable"
    ]:
        elements.append(Paragraph(f"\u2022 {item}", bullet_style))

    elements.append(PageBreak())

    # ===================== PART B =====================
    elements.append(Paragraph("2. Part B \u2013 Judge Evaluation (50 Marks)", h1_style))
    elements.append(Paragraph(
        "This component is evaluated by the judging panel during team presentations. "
        "Judges assess qualitative strategic reasoning and presentation quality.",
        body_style
    ))

    # Strategic Coherence
    elements.append(Paragraph("2.1 Strategic Coherence &amp; Market Logic (25 Marks)", h2_style))

    elements.append(Paragraph("A. Strategic Depth &amp; Structural Logic (15 Marks)", h3_style))
    elements.append(Paragraph("Judges evaluate:", body_style))
    for item in [
        "Internal coherence of asset selection",
        "Logical business structuring",
        "Scalability reasoning",
        "Alignment between portfolio and business thesis"
    ]:
        elements.append(Paragraph(f"\u2022 {item}", bullet_style))

    elements.append(Paragraph("B. Market Feasibility &amp; Positioning (10 Marks)", h3_style))
    elements.append(Paragraph("Judges evaluate:", body_style))
    for item in [
        "Sector viability",
        "Competitive positioning",
        "Revenue logic",
        "Market defensibility"
    ]:
        elements.append(Paragraph(f"\u2022 {item}", bullet_style))

    # Presentation
    elements.append(Paragraph("2.2 Presentation &amp; Communication (25 Marks)", h2_style))

    elements.append(Paragraph("A. Clarity &amp; Structure (10 Marks)", h3_style))
    for item in [
        "Structured argument flow",
        "Clear articulation of thesis",
        "Logical sequencing"
    ]:
        elements.append(Paragraph(f"\u2022 {item}", bullet_style))

    elements.append(Paragraph("B. Data Use &amp; Disaster Explanation (10 Marks)", h3_style))
    for item in [
        "Accurate explanation of disaster impact on portfolio",
        "Correct ROI interpretation",
        "Analytical depth in crisis handling"
    ]:
        elements.append(Paragraph(f"\u2022 {item}", bullet_style))

    elements.append(Paragraph("C. Q&amp;A Defense (5 Marks)", h3_style))
    for item in [
        "Composure under questioning",
        "Logical rebuttal",
        "Numerical awareness",
        "Strategic consistency"
    ]:
        elements.append(Paragraph(f"\u2022 {item}", bullet_style))

    elements.append(Spacer(1, 0.1*inch))
    elements.append(Paragraph(
        "Judge Total = Strategic Depth + Market Feasibility + Clarity + Data Use + Q&amp;A &nbsp;&nbsp;&nbsp; (Maximum: 50 Marks)",
        formula_style
    ))

    # ===================== JUDGE SCORING SHEET =====================
    elements.append(PageBreak())
    elements.append(Paragraph("3. Judge Scoring Sheet", h1_style))
    elements.append(Paragraph(
        "Use this sheet to record scores for each team. One sheet per team.",
        body_style
    ))

    elements.append(Spacer(1, 0.15*inch))

    # Team header
    team_header = [
        ['Team Name:', '', 'Judge Name:', ''],
    ]
    t = Table(team_header, colWidths=[1.2*inch, 2*inch, 1.2*inch, 2*inch])
    t.setStyle(TableStyle([
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 12),
        ('LINEBELOW', (1, 0), (1, 0), 1, colors.black),
        ('LINEBELOW', (3, 0), (3, 0), 1, colors.black),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 0.2*inch))

    score_sheet_data = [
        ['#', 'Criteria', 'Max Marks', 'Score'],
        ['', 'STRATEGIC COHERENCE & MARKET LOGIC', '25', ''],
        ['A', 'Strategic Depth & Structural Logic', '15', ''],
        ['B', 'Market Feasibility & Positioning', '10', ''],
        ['', '', '', ''],
        ['', 'PRESENTATION & COMMUNICATION', '25', ''],
        ['C', 'Clarity & Structure', '10', ''],
        ['D', 'Data Use & Disaster Explanation', '10', ''],
        ['E', 'Q&A Defense', '5', ''],
        ['', '', '', ''],
        ['', 'JUDGE TOTAL', '50', ''],
    ]

    t = Table(score_sheet_data, colWidths=[0.5*inch, 3.2*inch, 1*inch, 1.2*inch])
    style_cmds = [
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#cccccc')),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('ALIGN', (2, 0), (3, -1), 'CENTER'),
        # Header
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1a1a2e')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        # Section headers
        ('BACKGROUND', (0, 1), (-1, 1), colors.HexColor('#e8ecf1')),
        ('FONTNAME', (0, 1), (-1, 1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 1), (-1, 1), 9),
        ('BACKGROUND', (0, 5), (-1, 5), colors.HexColor('#e8ecf1')),
        ('FONTNAME', (0, 5), (-1, 5), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 5), (-1, 5), 9),
        # Spacer rows
        ('BACKGROUND', (0, 4), (-1, 4), colors.white),
        ('LINEABOVE', (0, 4), (-1, 4), 0, colors.white),
        ('LINEBELOW', (0, 4), (-1, 4), 0, colors.white),
        ('BACKGROUND', (0, 9), (-1, 9), colors.white),
        # Total row
        ('BACKGROUND', (0, 10), (-1, 10), colors.HexColor('#1a1a2e')),
        ('TEXTCOLOR', (0, 10), (-1, 10), colors.white),
        ('FONTNAME', (0, 10), (-1, 10), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 10), (-1, 10), 11),
    ]
    t.setStyle(TableStyle(style_cmds))
    elements.append(t)

    elements.append(Spacer(1, 0.3*inch))
    elements.append(Paragraph("Comments / Notes:", ParagraphStyle(
        'CommentsLabel', parent=body_style, fontName='Helvetica-Bold', spaceAfter=4
    )))
    # Blank lines for notes
    for _ in range(4):
        elements.append(Paragraph("_" * 85, ParagraphStyle(
            'Line', parent=body_style, textColor=colors.HexColor('#cccccc'),
            spaceBefore=12, spaceAfter=0
        )))

    # ===================== FINAL SCORE =====================
    elements.append(PageBreak())
    elements.append(Paragraph("4. Final Score Calculation", h1_style))
    elements.append(Paragraph(
        "Final Total = Organizer Total (50) + Judge Total (50) &nbsp;&nbsp;&nbsp; (Maximum: 100 Marks)",
        formula_style
    ))

    final_summary = [
        ['Component', 'Sub-component', 'Max Marks'],
        ['Part A: Organizer Score', 'A. Vertical Coverage', '15'],
        ['', 'B. Risk Discipline (Dynamic)', '15'],
        ['', 'C. ROI Performance', '10'],
        ['', 'Bonus (3 conditions)', '10'],
        ['', 'Subtotal', '50'],
        ['Part B: Judge Score', 'Strategic Depth & Logic', '15'],
        ['', 'Market Feasibility', '10'],
        ['', 'Clarity & Structure', '10'],
        ['', 'Data Use & Disaster Explanation', '10'],
        ['', 'Q&A Defense', '5'],
        ['', 'Subtotal', '50'],
        ['FINAL TOTAL', '', '100'],
    ]
    t = Table(final_summary, colWidths=[2*inch, 2.5*inch, 1*inch])
    style_cmds = [
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#cccccc')),
        ('ALIGN', (2, 0), (2, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1a1a2e')),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        # Part A header
        ('FONTNAME', (0, 1), (0, 1), 'Helvetica-Bold'),
        ('SPAN', (0, 1), (0, 4)),
        # Subtotal
        ('BACKGROUND', (0, 5), (-1, 5), colors.HexColor('#e8ecf1')),
        ('FONTNAME', (0, 5), (-1, 5), 'Helvetica-Bold'),
        # Part B header
        ('FONTNAME', (0, 6), (0, 6), 'Helvetica-Bold'),
        ('SPAN', (0, 6), (0, 10)),
        # Subtotal
        ('BACKGROUND', (0, 11), (-1, 11), colors.HexColor('#e8ecf1')),
        ('FONTNAME', (0, 11), (-1, 11), 'Helvetica-Bold'),
        # Final total
        ('BACKGROUND', (0, 12), (-1, 12), colors.HexColor('#1a1a2e')),
        ('TEXTCOLOR', (0, 12), (-1, 12), colors.white),
        ('FONTNAME', (0, 12), (-1, 12), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 12), (-1, 12), 12),
        ('SPAN', (0, 12), (1, 12)),
    ]
    t.setStyle(TableStyle(style_cmds))
    elements.append(t)

    # Integrity
    elements.append(Spacer(1, 0.3*inch))
    elements.append(Paragraph("5. Integrity Safeguards", h1_style))
    for item in [
        "Organizer scores are formula-driven and generated before presentations.",
        "Judges only input qualitative marks (Part B).",
        "All totals are automatically computed by the scoring engine.",
        "No manual score editing is permitted for Part A.",
        "Team summary PDFs are auto-generated with full score breakdowns.",
        "The dynamic risk scoring formula is transparent \u2014 teams can verify their own scores."
    ]:
        elements.append(Paragraph(f"\u2022 {item}", bullet_style))

    # Formula Reference
    elements.append(Spacer(1, 0.25*inch))
    elements.append(Paragraph("6. Quick Formula Reference", h1_style))

    ref_data = [
        ['Formula', 'Expression'],
        ['Total Investment', '100 \u2013 Remaining Budget'],
        ['Post-Disaster Value', '\u2211 (Sale Price \u00d7 Disaster Multiplier)'],
        ['ROI', '(Post-Disaster Value \u2013 Total Investment) / Total Investment'],
        ['Max Exposure', 'Highest Category Investment / Total Investment'],
        ['Vertical Score (15)', '(Verticals Covered / 4) \u00d7 15'],
        ['Risk Score (15)', '\u226445%: 15 | >45%: 15 \u00d7 ((1\u2013Exp)/0.55)\u00b2'],
        ['ROI Score (10)', 'min(10, max(0, ROI \u00d7 50)) \u2014 linear continuous'],
        ['Business Strength (40)', 'Vertical + Risk + ROI Score'],
        ['Bonus (10)', '0 cond:0 | 1:3 | 2:6 | 3:10'],
        ['Organizer Total (50)', 'Business Strength + Bonus'],
        ['Final Total (100)', 'Organizer Total + Judge Total'],
    ]
    elements.append(make_table(ref_data, col_widths=[2.2*inch, 4*inch]))

    elements.append(Spacer(1, 0.4*inch))
    elements.append(Paragraph(
        "Generated by Bid Crusades Scoring System \u2022 Headstart, IIT Dharwad",
        footer_style
    ))

    doc.build(elements)
    print(f"Generated: {OUTPUT_FILE}")


if __name__ == "__main__":
    build_pdf()
