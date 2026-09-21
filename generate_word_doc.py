import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def set_cell_background(cell, fill_hex):
    tcPr = cell._element.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._element.get_or_add_tcPr()
    tcMar = parse_xml(f'<w:tcMar {nsdecls("w")}><w:top w:w="{top}" w:type="dxa"/><w:bottom w:w="{bottom}" w:type="dxa"/><w:left w:w="{left}" w:type="dxa"/><w:right w:w="{right}" w:type="dxa"/></w:tcMar>')
    tcPr.append(tcMar)

def add_code_box(doc, text):
    table = doc.add_table(rows=1, cols=1)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    
    cell = table.cell(0, 0)
    cell.width = Inches(6.5)
    set_cell_background(cell, "141414")
    set_cell_margins(cell, top=140, bottom=140, left=200, right=200)
    
    # Borders
    tcPr = cell._element.get_or_add_tcPr()
    borders = parse_xml(f'<w:tcBorders {nsdecls("w")}><w:top w:val="none"/><w:left w:val="single" w:sz="24" w:space="0" w:color="C49A63"/><w:bottom w:val="none"/><w:right w:val="none"/></w:tcBorders>')
    tcPr.append(borders)
    
    p = cell.paragraphs[0]
    p.paragraph_format.space_before = Pt(4)
    p.paragraph_format.space_after = Pt(4)
    p.paragraph_format.line_spacing = 1.15
    run = p.add_run(text)
    run.font.name = "Consolas"
    run.font.size = Pt(9.5)
    run.font.color.rgb = RGBColor(0xDF, 0xBC, 0x8A) # Gold light
    
    doc.add_paragraph().paragraph_format.space_after = Pt(6)

def build_doc():
    doc = docx.Document()
    
    # Page setup
    for section in doc.sections:
        section.top_margin = Inches(0.8)
        section.bottom_margin = Inches(0.8)
        section.left_margin = Inches(0.8)
        section.right_margin = Inches(0.8)
        
    # Styles
    normal_style = doc.styles['Normal']
    normal_style.font.name = 'Calibri'
    normal_style.font.size = Pt(10.5)
    normal_style.font.color.rgb = RGBColor(0x2A, 0x2A, 0x2A)
    
    # Title Section
    title_p = doc.add_paragraph()
    title_p.paragraph_format.space_before = Pt(0)
    title_p.paragraph_format.space_after = Pt(2)
    eyebrow = title_p.add_run("ESTUDIO CG · DESIGN SYSTEM & BRANDING")
    eyebrow.font.name = 'Calibri'
    eyebrow.font.size = Pt(9)
    eyebrow.font.bold = True
    eyebrow.font.color.rgb = RGBColor(0xC4, 0x9A, 0x63)
    
    h1 = doc.add_paragraph()
    h1.paragraph_format.space_before = Pt(4)
    h1.paragraph_format.space_after = Pt(4)
    r_h1 = h1.add_run("Manual de Prompts Master para Piezas Gráficas")
    r_h1.font.name = 'Georgia'
    r_h1.font.size = Pt(22)
    r_h1.font.bold = True
    r_h1.font.color.rgb = RGBColor(0x11, 0x11, 0x11)
    
    sub_p = doc.add_paragraph()
    sub_p.paragraph_format.space_after = Pt(16)
    r_sub = sub_p.add_run("Guía oficial para generación de contenido visual con IA (Midjourney · Firefly · DALL·E · Canva AI)")
    r_sub.font.name = 'Calibri'
    r_sub.font.size = Pt(11)
    r_sub.font.italic = True
    r_sub.font.color.rgb = RGBColor(0x66, 0x66, 0x66)
    
    # Divider
    div_p = doc.add_paragraph()
    div_p.paragraph_format.space_after = Pt(14)
    r_div = div_p.add_run("━" * 58)
    r_div.font.color.rgb = RGBColor(0xC4, 0x9A, 0x63)
    
    # --- SECCIÓN 1 ---
    sec1 = doc.add_paragraph()
    sec1.paragraph_format.space_before = Pt(14)
    sec1.paragraph_format.space_after = Pt(6)
    r_s1 = sec1.add_run("1. Identidad Visual — Design System Oficial")
    r_s1.font.name = 'Georgia'
    r_s1.font.size = Pt(15)
    r_s1.font.bold = True
    r_s1.font.color.rgb = RGBColor(0xC4, 0x9A, 0x63)
    
    doc.add_paragraph("Para asegurar la consistencia de la marca en todas las redes y canales, cada pieza generada debe respetar estrictamente la siguiente paleta cromática, tipografías y atmósfera visual:")

    # Tabla de Colores
    table = doc.add_table(rows=1, cols=3)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    
    hdr_cells = table.rows[0].cells
    headers = ["Rol en el Sistema", "Nombre Comercial", "Código Hex / Color"]
    col_widths = [Inches(2.5), Inches(2.2), Inches(1.8)]
    
    for i, title in enumerate(headers):
        hdr_cells[i].width = col_widths[i]
        p = hdr_cells[i].paragraphs[0]
        r = p.add_run(title)
        r.font.bold = True
        r.font.size = Pt(9.5)
        r.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
        set_cell_background(hdr_cells[i], "181818")
        set_cell_margins(hdr_cells[i], top=80, bottom=80, left=120, right=120)

    colors_data = [
        ("Fondo Principal", "Nero Profundo", "#0D0D0D"),
        ("Fondo Sutil", "Carbón Suave", "#131313"),
        ("Superficie / Cards", "Grafito", "#181818"),
        ("Texto Principal", "Crema", "#F4EFE7"),
        ("Texto Claro / Títulos", "Crema Blanca", "#FAF8F4"),
        ("Dorado Principal (Marca)", "Gold CG", "#C49A63"),
        ("Dorado Luminoso", "Gold Light", "#DFBC8A"),
        ("Dorado Acento", "Gold Accent", "#B88A52"),
        ("Texto Secundario", "Taupe", "#C9B9A5"),
        ("Texto Muted", "Gris Cálido", "#BCB6AD"),
        ("Botón WhatsApp / CTA", "Verde WhatsApp", "#25C368"),
    ]
    
    for row_idx, (rol, nom, hex_code) in enumerate(colors_data):
        row_cells = table.add_row().cells
        bg_fill = "F9F9F9" if row_idx % 2 == 0 else "FFFFFF"
        for i, val in enumerate([rol, nom, hex_code]):
            row_cells[i].width = col_widths[i]
            set_cell_background(row_cells[i], bg_fill)
            set_cell_margins(row_cells[i], top=60, bottom=60, left=100, right=100)
            p = row_cells[i].paragraphs[0]
            p.paragraph_format.space_before = Pt(2)
            p.paragraph_format.space_after = Pt(2)
            r = p.add_run(val)
            r.font.size = Pt(9)
            if i == 2:
                r.font.name = 'Consolas'
                r.font.bold = True
                if "#C49A63" in val or "#DFBC8A" in val:
                    r.font.color.rgb = RGBColor(0xB8, 0x8A, 0x52)
                elif "#25C368" in val:
                    r.font.color.rgb = RGBColor(0x20, 0x99, 0x50)
                else:
                    r.font.color.rgb = RGBColor(0x33, 0x33, 0x33)

    p_gold_rule = doc.add_paragraph()
    p_gold_rule.paragraph_format.space_before = Pt(10)
    p_gold_rule.paragraph_format.space_after = Pt(8)
    r_gr1 = p_gold_rule.add_run("★ Regla de Oro: ")
    r_gr1.font.bold = True
    r_gr1.font.color.rgb = RGBColor(0xC4, 0x9A, 0x63)
    p_gold_rule.add_run("Negro profundo como base, dorado cálido como jerarquía y acento. Sin colores fríos (sin azul, violeta ni verde salvo el botón oficial de WhatsApp).")

    # Tipografía
    p_typo = doc.add_paragraph()
    p_typo.paragraph_format.space_before = Pt(6)
    p_typo.add_run("Tipografía Oficial:\n").font.bold = True
    p_typo.add_run("• Titulares y Grandes Headings: ").font.bold = True
    p_typo.add_run("Cormorant Garamond (Weight 500, serif editorial, sobrio y elegante).\n")
    p_typo.add_run("• Cuerpo, UI, Datos y Subtítulos: ").font.bold = True
    p_typo.add_run("Manrope (Weight 400 a 700, sans-serif moderna, geométrica y sumamente legible).\n")
    p_typo.add_run("• Eyebrows (Etiquetas superiores): ").font.bold = True
    p_typo.add_run("UPPERCASE, espaciado amplio (tracking 0.16em), color dorado (#C49A63).")

    # Atmósfera Visual
    p_atm = doc.add_paragraph()
    p_atm.paragraph_format.space_before = Pt(6)
    p_atm.add_run("Atmósfera Visual de Marca:\n").font.bold = True
    p_atm.add_run("• Estilo: Luxury editorial, minimalismo oscuro, estética de boutique legal y contable premium.\n")
    p_atm.add_run("• Iluminación: Luz suave difusa cenital, halo dorado sutil sobre fondo negro mate.\n")
    p_atm.add_run("• Sensación transmitida: Confianza, solidez técnica, resolución ágil y prestigio sin arrogancia.")

    # --- SECCIÓN 2 ---
    sec2 = doc.add_paragraph()
    sec2.paragraph_format.space_before = Pt(16)
    sec2.paragraph_format.space_after = Pt(6)
    r_s2 = sec2.add_run("2. Prompt Base Universal")
    r_s2.font.name = 'Georgia'
    r_s2.font.size = Pt(15)
    r_s2.font.bold = True
    r_s2.font.color.rgb = RGBColor(0xC4, 0x9A, 0x63)
    
    doc.add_paragraph("Este bloque debe colocarse al inicio o como núcleo de TODAS las solicitudes a generadores de imágenes (Midjourney, DALL-E, Firefly o Canva Magic):")

    add_code_box(doc, 
        "Dark luxury editorial design, deep black background (#0D0D0D), "
        "warm gold accents (#C49A63, #DFBC8A), cream white typography (#FAF8F4), "
        "Cormorant Garamond serif headline, Manrope sans-serif body text, "
        "soft diffused gold light from top, professional gestoria studio, "
        "Argentina, premium minimalist aesthetic, high contrast, "
        "clean layout, no clutter, no blue tones, no cold colors"
    )

    # --- SECCIÓN 3 ---
    sec3 = doc.add_paragraph()
    sec3.paragraph_format.space_before = Pt(16)
    sec3.paragraph_format.space_after = Pt(6)
    r_s3 = sec3.add_run("3. Prompts por Formato y Red Social")
    r_s3.font.name = 'Georgia'
    r_s3.font.size = Pt(15)
    r_s3.font.bold = True
    r_s3.font.color.rgb = RGBColor(0xC4, 0x9A, 0x63)

    formats = [
        ("A) Post Cuadrado — Instagram Feed (1080 × 1080 px)",
         "Ideal para anuncios, novedades de normativas y presencia corporativa.",
         "Instagram square post 1080x1080px, dark luxury editorial design, deep matte black background, centered composition, Cormorant Garamond serif headline in cream white (#FAF8F4), warm gold label (#C49A63) as eyebrow text in uppercase Manrope, minimal layout with generous white space, subtle warm gold ambient glow from top center, no people, no photography, flat graphic, professional accounting and legal gestoria studio Estudio CG Argentina branding, gold thin horizontal divider line, --ar 1:1",
         "Variante con fotografía profesional:",
         "Instagram square post 1080x1080px, dark editorial split layout, left half: deep black with gold serif headline and Manrope body in cream, right half: elegant desaturated professional photo with warm gold color grade, gold (#DFBC8A) thin border as separator, luxury minimal composition, --ar 1:1"),
        
        ("B) Story / Reel Cover — Vertical (1080 × 1920 px)",
         "Para historias destacadas, portadas de reels o videos explicativos.",
         "Instagram Story 1080x1920px vertical format, dark luxury editorial, deep black background (#0D0D0D), centered vertical layout, large Cormorant Garamond headline top third in cream white, gold eyebrow label uppercase center, call-to-action button at bottom in WhatsApp green (#25C368) pill shape with white text, soft radial gold warm gradient top center fading to pure black, generous padding sides, minimal graphic elements, --ar 9:16",
         None, None),
         
        ("C) Banner LinkedIn — Perfil y Página (1584 × 396 px)",
         "Cabecera profesional de LinkedIn y Twitter/X.",
         "LinkedIn banner 1584x396px horizontal, dark editorial luxury branding, deep black background, left aligned Cormorant Garamond large serif name in cream (#FAF8F4), gold thin line separator vertical, right: Manrope uppercase tagline in gold (#C49A63), subtle warm glow from left side, minimal layout, wide horizontal format, no photography, professional gestoria legal accounting studio Argentina, --ar 4:1",
         None, None),

        ("D) Post Landscape — Facebook / LinkedIn Feed (1200 × 628 px)",
         "Publicaciones de artículos, noticias y campañas B2B.",
         "Social media landscape post 1200x628px, dark luxury editorial layout, split composition: left 60% dark black with cream serif headline and gold accent elements, right 40% dark photo or dark abstract texture with warm gold overlay, professional gestoria brand, minimal clean design, --ar 1.91:1",
         None, None),

        ("E) Flyer / Infografía de Trámite o Servicio (1080 × 1350 px)",
         "Formato retrato para explicar requisitos, moratorias o beneficios previsionales.",
         "Instagram portrait infographic 1080x1350px, dark luxury editorial design, deep black background, Cormorant Garamond large serif headline top in cream white, gold eyebrow label uppercase small, 3-4 benefit icons row in warm gold line-art SVG style, Manrope body text in cream/taupe (#C9B9A5), bottom CTA pill button gold outline or WhatsApp green solid, subtle gold ambient glow top center fading, clean sections with thin gold divider lines, no clutter, --ar 4:5",
         None, None),

        ("F) Portada / Hero Visual para Web o Presentaciones (1260 × 700 px)",
         "Cabeceras de landing pages o diapositivas institucionales.",
         "Hero banner image 1260x700px, cinematic dark editorial, deep black scene, centered composition, large Cormorant Garamond serif headline in cream white with natural baseline leading, warm gold diffused radial light from top fading to pure black edges, thin gold horizontal accent line below headline, Manrope subtitle in muted cream below, minimal premium luxury professional branding aesthetic, wide landscape, --ar 16:9",
         None, None),

        ("G) Tarjeta de Servicio — UI Card (600 × 400 px)",
         "Tarjetas de presentación de áreas (Previsional, Laboral, Fiscal, Trámites, Legal).",
         "Service card UI graphic 600x400px, dark luxury card design, background #181818 surface dark graphite, rounded corners 18px, thin border rgba(244,239,231,0.12), gold line-art icon top-left in #C49A63, Cormorant Garamond medium title in cream white, Manrope small body text in muted #BCB6AD, subtle gold glow bottom, no photography, minimal flat design, premium editorial, --ar 3:2",
         None, None),

        ("H) Carrusel Educativo — Multi-slide (1080 × 1080 px)",
         "Ideal para guías paso a paso (ej: '¿Cómo jubilarse con moratoria?').",
         "Slide 1 (Portada):\nCarousel cover slide 1080x1080px, dark luxury editorial, bold Cormorant Garamond large serif headline centered in cream white, gold eyebrow uppercase label above, page number '01' bottom right in gold, deep black background, subtle warm gold ambient glow top center, clean generous spacing, --ar 1:1\n\n"
         "Slides Interiores (02, 03...):\nCarousel interior slide 1080x1080px, dark editorial layout, left: large gold number in Cormorant Garamond serif, right: Manrope medium body content in cream and muted taupe, thin gold top horizontal line accent, black background, consistent visual rhythm with cover slide, minimal padding, --ar 1:1\n\n"
         "Slide Final (Cierre / CTA):\nCarousel final CTA slide 1080x1080px, dark luxury editorial, centered layout, gold seal or badge icon top center, Cormorant Garamond headline 'Consultá tu caso' in cream, WhatsApp green (#25C368) pill CTA button with white Manrope text, bottom contact info in muted taupe small caps, warm gold ambient glow, --ar 1:1",
         None, None),

        ("I) Tarjeta Digital / Minibanner WhatsApp (800 × 450 px)",
         "Encabezados de WhatsApp Business, presupuestos o tarjetas de contacto.",
         "WhatsApp digital card 800x450px, dark luxury editorial, left: logo zone dark surface card with gold CG monogram, right: contact info layout in Manrope - name in cream, specialty in gold uppercase small, phone and address in taupe muted, WhatsApp green icon accent, thin gold divider, --ar 16:9",
         None, None)
    ]

    for title, desc, prompt, var_title, var_prompt in formats:
        p_f = doc.add_paragraph()
        p_f.paragraph_format.space_before = Pt(10)
        p_f.paragraph_format.space_after = Pt(2)
        r_title = p_f.add_run(title)
        r_title.font.bold = True
        r_title.font.size = Pt(11)
        r_title.font.color.rgb = RGBColor(0x18, 0x18, 0x18)
        
        if desc:
            p_desc = doc.add_paragraph()
            p_desc.paragraph_format.space_after = Pt(4)
            r_d = p_desc.add_run(desc)
            r_d.font.size = Pt(9.5)
            r_d.font.italic = True
            r_d.font.color.rgb = RGBColor(0x55, 0x55, 0x55)
            
        add_code_box(doc, prompt)
        
        if var_title and var_prompt:
            p_vt = doc.add_paragraph()
            p_vt.paragraph_format.space_before = Pt(4)
            p_vt.paragraph_format.space_after = Pt(2)
            r_vt = p_vt.add_run(var_title)
            r_vt.font.bold = True
            r_vt.font.size = Pt(10)
            r_vt.font.color.rgb = RGBColor(0xC4, 0x9A, 0x63)
            add_code_box(doc, var_prompt)

    # --- SECCIÓN 4 ---
    sec4 = doc.add_paragraph()
    sec4.paragraph_format.space_before = Pt(16)
    sec4.paragraph_format.space_after = Pt(6)
    r_s4 = sec4.add_run("4. Modificadores de Tono y Estilo")
    r_s4.font.name = 'Georgia'
    r_s4.font.size = Pt(15)
    r_s4.font.bold = True
    r_s4.font.color.rgb = RGBColor(0xC4, 0x9A, 0x63)

    doc.add_paragraph("Para matizar o calibrar el resultado, agregá uno o dos de los siguientes tokens al final de la descripción:")

    table_mod = doc.add_table(rows=1, cols=2)
    table_mod.alignment = WD_TABLE_ALIGNMENT.CENTER
    table_mod.autofit = False
    
    t_mod_hdr = table_mod.rows[0].cells
    t_mod_hdr[0].width = Inches(2.8)
    t_mod_hdr[1].width = Inches(3.7)
    for i, h in enumerate(["Objetivo / Intención", "Token en Inglés para el Prompt"]):
        p = t_mod_hdr[i].paragraphs[0]
        r = p.add_run(h)
        r.font.bold = True
        r.font.size = Pt(9.5)
        r.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
        set_cell_background(t_mod_hdr[i], "181818")
        set_cell_margins(t_mod_hdr[i], top=80, bottom=80, left=120, right=120)

    mods = [
        ("Más exclusivo y lujoso", "ultra premium, haute couture aesthetic"),
        ("Más cercano y empático", "warm welcoming professional, approachable luxury"),
        ("Estilo editorial / revista", "magazine editorial layout, Vogue Argentina style"),
        ("Minimalismo absoluto", "extreme minimalism, Swiss grid, generous negative space"),
        ("Autoridad corporativa formal", "corporate premium, boardroom aesthetic, formal authority"),
        ("Cálido y humanizado", "human-centered, empathetic design, soft warmth"),
        ("Textura táctil de papel", "subtle grain texture, analog warmth, fine paper feel")
    ]

    for idx, (obj, tok) in enumerate(mods):
        row = table_mod.add_row().cells
        row[0].width = Inches(2.8)
        row[1].width = Inches(3.7)
        bg = "F9F9F9" if idx % 2 == 0 else "FFFFFF"
        for i, val in enumerate([obj, tok]):
            set_cell_background(row[i], bg)
            set_cell_margins(row[i], top=60, bottom=60, left=100, right=100)
            p = row[i].paragraphs[0]
            p.paragraph_format.space_before = Pt(2)
            p.paragraph_format.space_after = Pt(2)
            r = p.add_run(val)
            r.font.size = Pt(9)
            if i == 1:
                r.font.name = 'Consolas'
                r.font.color.rgb = RGBColor(0x99, 0x66, 0x22)

    # --- SECCIÓN 5 ---
    sec5 = doc.add_paragraph()
    sec5.paragraph_format.space_before = Pt(16)
    sec5.paragraph_format.space_after = Pt(6)
    r_s5 = sec5.add_run("5. Términos Prohibidos vs. Permitidos")
    r_s5.font.name = 'Georgia'
    r_s5.font.size = Pt(15)
    r_s5.font.bold = True
    r_s5.font.color.rgb = RGBColor(0xC4, 0x9A, 0x63)

    doc.add_paragraph("Para evitar que la IA desvíe la identidad hacia estéticas baratas o genéricas, evitá las siguientes palabras:")

    table_forb = doc.add_table(rows=1, cols=2)
    table_forb.alignment = WD_TABLE_ALIGNMENT.CENTER
    table_forb.autofit = False
    
    t_forb_hdr = table_forb.rows[0].cells
    t_forb_hdr[0].width = Inches(3.2)
    t_forb_hdr[1].width = Inches(3.3)
    for i, h in enumerate(["❌ Prohibido (Desvía la marca)", "✅ Permitido (Alineado a Estudio CG)"]):
        p = t_forb_hdr[i].paragraphs[0]
        r = p.add_run(h)
        r.font.bold = True
        r.font.size = Pt(9.5)
        r.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
        set_cell_background(t_forb_hdr[i], "181818")
        set_cell_margins(t_forb_hdr[i], top=80, bottom=80, left=120, right=120)

    prohibitions = [
        ("bright, vivid, vibrant, neon", "muted warm tones, low saturation gold"),
        ("blue, purple, cyan, magenta", "deep black, champagne cream, antique gold"),
        ("playful, cartoonish, 3D render, fun", "editorial, refined, authoritative, prestigious"),
        ("stock photo style, smiling call center", "editorial portrait, candid, cinematic dark lighting"),
        ("white background, clean white", "deep black background (#0D0D0D), dark graphite"),
        ("flat colorful icons, 3d glossy icons", "gold line-art icons, minimal monochrome vector"),
        ("gradient rainbow, multi-color", "warm gold ambient glow, subtle radial fade")
    ]

    for idx, (f_item, a_item) in enumerate(prohibitions):
        row = table_forb.add_row().cells
        row[0].width = Inches(3.2)
        row[1].width = Inches(3.3)
        bg = "F9F9F9" if idx % 2 == 0 else "FFFFFF"
        for i, val in enumerate([f_item, a_item]):
            set_cell_background(row[i], bg)
            set_cell_margins(row[i], top=60, bottom=60, left=100, right=100)
            p = row[i].paragraphs[0]
            p.paragraph_format.space_before = Pt(2)
            p.paragraph_format.space_after = Pt(2)
            r = p.add_run(val)
            r.font.size = Pt(9)
            if i == 0:
                r.font.color.rgb = RGBColor(0xB0, 0x20, 0x20)
            else:
                r.font.color.rgb = RGBColor(0x1B, 0x6E, 0x33)

    # --- SECCIÓN 6 ---
    sec6 = doc.add_paragraph()
    sec6.paragraph_format.space_before = Pt(16)
    sec6.paragraph_format.space_after = Pt(6)
    r_s6 = sec6.add_run("6. Parámetros de Generación en Midjourney")
    r_s6.font.name = 'Georgia'
    r_s6.font.size = Pt(15)
    r_s6.font.bold = True
    r_s6.font.color.rgb = RGBColor(0xC4, 0x9A, 0x63)

    doc.add_paragraph("Usar siempre el comando maestro agregando el parámetro de formato deseado:")
    
    add_code_box(doc, 
        "/imagine prompt: dark luxury editorial professional branding, "
        "Estudio CG gestoria argentina, deep matte black background, "
        "warm gold typography and accents #C49A63 #DFBC8A, Cormorant Garamond "
        "serif headline in cream #FAF8F4, Manrope sans body, soft diffused "
        "gold radial ambient light from top, minimal negative space layout, "
        "no cold colors, premium authoritative calm aesthetic, "
        "--ar [FORMATO] --style raw --v 6.1"
    )

    p_ratios = doc.add_paragraph()
    p_ratios.paragraph_format.space_before = Pt(4)
    p_ratios.add_run("Tabla de aspectos (--ar):\n").font.bold = True
    p_ratios.add_run("• Feed Cuadrado: ").font.bold = True
    p_ratios.add_run("--ar 1:1\n")
    p_ratios.add_run("• Story / Reels / TikTok: ").font.bold = True
    p_ratios.add_run("--ar 9:16\n")
    p_ratios.add_run("• Feed Retrato / Infografías: ").font.bold = True
    p_ratios.add_run("--ar 4:5\n")
    p_ratios.add_run("• Post Horizontal Facebook/LinkedIn: ").font.bold = True
    p_ratios.add_run("--ar 1.91:1 o --ar 16:9\n")
    p_ratios.add_run("• Banner Header LinkedIn: ").font.bold = True
    p_ratios.add_run("--ar 4:1")

    # --- SECCIÓN 7 ---
    sec7 = doc.add_paragraph()
    sec7.paragraph_format.space_before = Pt(16)
    sec7.paragraph_format.space_after = Pt(6)
    r_s7 = sec7.add_run("7. Ficha Rápida para Diseñadores y Colaboradores")
    r_s7.font.name = 'Georgia'
    r_s7.font.size = Pt(15)
    r_s7.font.bold = True
    r_s7.font.color.rgb = RGBColor(0xC4, 0x9A, 0x63)

    # Box de Briefing
    brief_tbl = doc.add_table(rows=1, cols=1)
    brief_tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    brief_tbl.autofit = False
    b_cell = brief_tbl.cell(0, 0)
    b_cell.width = Inches(6.5)
    set_cell_background(b_cell, "F7F5F0") # light warm cream
    set_cell_margins(b_cell, top=140, bottom=140, left=180, right=180)
    
    b_tcPr = b_cell._element.get_or_add_tcPr()
    b_borders = parse_xml(f'<w:tcBorders {nsdecls("w")}><w:top w:val="none"/><w:left w:val="single" w:sz="24" w:space="0" w:color="C49A63"/><w:bottom w:val="none"/><w:right w:val="none"/></w:tcBorders>')
    b_tcPr.append(b_borders)

    bp = b_cell.paragraphs[0]
    bp.paragraph_format.space_before = Pt(2)
    bp.paragraph_format.space_after = Pt(2)
    bp.paragraph_format.line_spacing = 1.25
    
    run_b = bp.add_run(
        "• Marca: Estudio CG — Gestoría Previsional, Laboral y Fiscal (CABA, Argentina).\n"
        "• Titular / Conductor: Cristian Manuel Gonçalves (más de 20 años de trayectoria comprobada).\n"
        "• Público: Adultos 40-65 años para trámites previsionales y directores/dueños de PyMEs para administración y nóminas.\n"
        "• Percepción buscada: Seriedad, claridad, seguimiento personal y prestigio. No es un 'call center' ni una startup fría.\n"
        "• Qué EVITAR: Diseños sobrecargados, colores flúor, íconos de colores infantiles o fotografías genéricas de banco de imágenes sonriendo con auriculares.\n"
        "• Qué PRIORIZAR: Tipografía limpia, fondo negro/carbón, acentos en dorado mate y espacio de respiro suficiente."
    )
    run_b.font.size = Pt(9.5)
    run_b.font.color.rgb = RGBColor(0x22, 0x22, 0x22)

    # Footer
    doc.add_paragraph().paragraph_format.space_before = Pt(20)
    foot_p = doc.add_paragraph()
    foot_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    rf = foot_p.add_run("© 2026 Estudio CG · www.estudiocg.com · CABA, Argentina")
    rf.font.size = Pt(8.5)
    rf.font.color.rgb = RGBColor(0x88, 0x88, 0x88)

    output_path = r"c:\Users\dieto\OneDrive\Documentos\Estudio CG\MANUAL_PROMPTS_PIEZAS_GRAFICAS_ESTUDIO_CG.docx"
    doc.save(output_path)
    print(f"Document saved successfully to {output_path}")

if __name__ == "__main__":
    build_doc()
