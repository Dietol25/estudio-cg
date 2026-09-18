// ==========================================================================
// ESTUDIO CG — PREVIEW UX/UI SENIOR (preview.js)
// Lógica de intención, categorización de FAQ, dossiers modales y CRO
// ==========================================================================

const serviceDetails = {
  jubilacion: {
    title: "Jubilaciones y Moratorias",
    badge: "Área Previsional — ANSES / IPS",
    forWho: "Hombres de 65 años y mujeres de 60 que requieran cómputo de aportes, moratorias o cajas provinciales.",
    whatWeDo: [
      "Auditoría integral de aportes históricos y saneamiento en SICAM.",
      "Cálculo y adhesión al plan de moratoria más conveniente.",
      "Gestión de expediente hasta la liquidación del primer haber."
    ],
    docs: "DNI y Clave de Seguridad Social (o certificaciones si las tenés).",
    timing: "Diagnóstico en 24-48 hs. Resolución de 3 a 5 meses.",
    pricing: "Diagnóstico inicial bonificado. Honorarios al cobro.",
    waLink: "https://wa.me/5491125114119?text=Hola%20Estudio%20CG%2C%20quiero%20evaluar%20mi%20caso%20de%20Jubilaci%C3%B3n"
  },
  pension: {
    title: "Pensiones y Convivencia",
    badge: "Área Previsional — ANSES",
    forWho: "Cónyuges, convivientes acreditados e hijos menores o con discapacidad ante el fallecimiento del titular.",
    whatWeDo: [
      "Acreditación legal de convivencia y vínculo ante ANSES.",
      "Reclamación de haberes pendientes y subsidio de contención.",
      "Presentación formal expedita para evitar demoras burocráticas."
    ],
    docs: "Acta de defunción, matrimonio o pruebas de convivencia.",
    timing: "Respuesta en 24 hs. Resolución en 2 a 4 meses.",
    pricing: "Evaluación inicial sin costo. Honorarios transparentes.",
    waLink: "https://wa.me/5491125114119?text=Hola%20Estudio%20CG%2C%20necesito%20asesoramiento%20por%20una%20Pensi%C3%B3n"
  },
  aportes: {
    title: "Cómputo de Aportes y SICAM",
    badge: "Previsional / Fiscal",
    forWho: "Trabajadores de 50 a 64 años que buscan verificar su historial y planificar su retiro a tiempo.",
    whatWeDo: [
      "Revisión de padrones ANSES, cajas provinciales y autónomos.",
      "Saneamiento y liquidación de deuda previa en SICAM.",
      "Hoja de ruta para alcanzar los 30 años sin sorpresas."
    ],
    docs: "DNI y Clave de Seguridad Social o Fiscal Nivel 3.",
    timing: "Auditoría e informe técnico en 3 a 5 días.",
    pricing: "Arancel fijo y accesible por informe técnico.",
    waLink: "https://wa.me/5491125114119?text=Hola%20Estudio%20CG%2C%20quiero%20revisar%20mi%20historial%20de%20Aportes"
  },
  documentacion: {
    title: "Partidas y Legalizaciones",
    badge: "Gestoría Oficial — TAD / Cancillería",
    forWho: "Particulares que precisan actas registrales o documentos legalizados para trámites o ciudadanía.",
    whatWeDo: [
      "Búsqueda y expedición de actas en CABA, PBA e interior.",
      "Apostillado oficial de La Haya y legalizaciones en Cancillería.",
      "Envío digital con firma verificable o retiro presencial."
    ],
    docs: "Nombres y datos aproximados de fecha/jurisdicción.",
    timing: "De 5 a 15 días hábiles según jurisdicción.",
    pricing: "Presupuesto exacto con aranceles oficiales desglosados.",
    waLink: "https://wa.me/5491125114119?text=Hola%20Estudio%20CG%2C%20necesito%20gestionar%20Partidas%20o%20Documentaci%C3%B3n"
  },
  laboral: {
    title: "Sueldos y Gestión Laboral",
    badge: "Empresas & Comercios",
    forWho: "Comercios, pymes y empleadores que requieren tercerizar liquidaciones con respaldo profesional.",
    whatWeDo: [
      "Liquidación quincenal y mensual según convenios vigentes.",
      "Cargas sociales F.931 y Libro de Sueldos Digital (LSD).",
      "Altas, bajas y certificaciones de servicios (Art. 80)."
    ],
    docs: "Nómina de personal y novedades mensuales.",
    timing: "Liquidaciones entregadas 48 hs antes del vencimiento.",
    pricing: "Abono mensual fijo o por liquidación eventual.",
    waLink: "https://wa.me/5491125114119?text=Hola%20Estudio%20CG%2C%20quiero%20consultar%20por%20Liquidaci%C3%B3n%20de%20Sueldos"
  },
  fiscal: {
    title: "Monotributo y Regularización ARCA",
    badge: "Gestión Tributaria",
    forWho: "Monotributistas y profesionales independientes que necesitan regularizar o proteger su actividad.",
    whatWeDo: [
      "Alta de CUIT, inscripción y recategorizaciones periódicas.",
      "Planes de pago para levantar embargos o deudas acumuladas.",
      "Facturación electrónica e Ingresos Brutos (AGIP / ARBA)."
    ],
    docs: "CUIT y Clave Fiscal Nivel 3 activa.",
    timing: "Resolución o alta en 24 a 72 hs hábiles.",
    pricing: "Honorario cerrado por trámite o abono de gestión.",
    waLink: "https://wa.me/5491125114119?text=Hola%20Estudio%20CG%2C%20quiero%20consultar%20por%20Monotributo%20o%20ARCA"
  },
  nosaber: {
    title: "Diagnóstico y Orientación Inicial",
    badge: "Atención Personalizada",
    forWho: "Personas con un trámite trabado que desconocen el organismo o el paso formal a seguir.",
    whatWeDo: [
      "Analizamos tu consulta en lenguaje simple, sin vueltas.",
      "Identificamos el organismo exacto y la vía más rápida.",
      "Te detallamos los pasos y costos antes de contratar nada."
    ],
    docs: "Documento o constancia que tengas a mano.",
    timing: "Orientación inicial en menos de 24 hs hábiles.",
    pricing: "100% Gratuito y sin ningún compromiso.",
    waLink: "https://wa.me/5491125114119?text=Hola%20Estudio%20CG%2C%20tengo%20un%20tr%C3%A1mite%20pendiente%20y%20necesito%20orientaci%C3%B3n"
  }
};

function openServiceModal(key) {
  const data = serviceDetails[key] || serviceDetails.nosaber;
  const modal = document.getElementById('serviceModal');
  if (!modal) return;

  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalBadge').textContent = data.badge;
  document.getElementById('modalForWho').textContent = data.forWho;
  document.getElementById('modalDocs').textContent = data.docs;
  document.getElementById('modalTiming').textContent = data.timing;
  document.getElementById('modalPricing').textContent = data.pricing;
  
  const whatList = document.getElementById('modalWhatWeDo');
  whatList.innerHTML = '';
  data.whatWeDo.forEach(item => {
    const li = document.createElement('li');
    li.className = 'modal-checklist-item';
    li.innerHTML = `
      <div class="modal-bullet-icon">
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span>${item}</span>
    `;
    whatList.appendChild(li);
  });

  const waBtn = document.getElementById('modalWaBtn');
  if (waBtn) waBtn.href = data.waLink;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
  const modal = document.getElementById('serviceModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function selectFaqCategory(category) {
  // Toggle active tab buttons
  document.querySelectorAll('.faq-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });

  // Filter cards with smooth fade
  const cards = document.querySelectorAll('.faq-card');
  cards.forEach(card => {
    if (card.dataset.category === category) {
      card.style.display = 'block';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 20);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(10px)';
      card.classList.remove('open');
      setTimeout(() => {
        card.style.display = 'none';
      }, 250);
    }
  });
}

function toggleFaqCard(button) {
  const card = button.closest('.faq-card');
  if (!card) return;
  const isOpen = card.classList.contains('open');
  
  // Close other open cards
  document.querySelectorAll('.faq-card.open').forEach(c => {
    if (c !== card) c.classList.remove('open');
  });

  if (isOpen) {
    card.classList.remove('open');
  } else {
    card.classList.add('open');
  }
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeServiceModal();
});

// ==========================================================================
// CARRUSEL DE RESEÑAS EN MÓVIL
// ==========================================================================
let currentReviewIdx = 0;

function scrollToReview(index) {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;
  const cards = grid.querySelectorAll('.rev-card');
  if (!cards.length) return;

  if (index < 0) index = 0;
  if (index >= cards.length) index = cards.length - 1;
  currentReviewIdx = index;

  const card = cards[index];
  if (card) {
    grid.scrollTo({
      left: card.offsetLeft - grid.offsetLeft,
      behavior: 'smooth'
    });
  }

  const dots = document.querySelectorAll('.review-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentReviewIdx);
  });
}

function navigateReviews(direction) {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;
  const cards = grid.querySelectorAll('.rev-card');
  if (!cards.length) return;

  let targetIndex = currentReviewIdx + direction;
  if (targetIndex < 0) targetIndex = cards.length - 1;
  else if (targetIndex >= cards.length) targetIndex = 0;

  scrollToReview(targetIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  const reviewsGrid = document.getElementById('reviewsGrid');
  const dots = document.querySelectorAll('.review-dot');
  if (!reviewsGrid || !dots.length) return;

  reviewsGrid.addEventListener('scroll', () => {
    const scrollLeft = reviewsGrid.scrollLeft;
    const cardWidth = reviewsGrid.querySelector('.rev-card')?.offsetWidth || reviewsGrid.clientWidth || 300;
    const gap = 16;
    const activeIndex = Math.round(scrollLeft / (cardWidth + gap));
    currentReviewIdx = Math.max(0, Math.min(activeIndex, dots.length - 1));
    
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentReviewIdx);
    });
  }, { passive: true });
});


