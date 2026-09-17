// ==========================================================================
// ESTUDIO CG — PREVIEW UX/UI SENIOR (preview.js)
// Lógica de intención, categorización de FAQ, dossiers modales y CRO
// ==========================================================================

const serviceDetails = {
  jubilacion: {
    title: "Jubilaciones y Moratorias (ANSES e IPS)",
    badge: "Área Previsional",
    forWho: "Hombres de 65 años y mujeres de 60 que requieran cómputo de años, compra de aportes por moratoria o regímenes diferenciales (IPS Provincia de Bs. As., docentes, salud).",
    whatWeDo: [
      "Análisis previo y cómputo de aportes en sistema histórico y SICAM.",
      "Aplicación a planes de moratoria previsional vigentes.",
      "Armado de carpeta y presentación sin que tengas que perder días haciendo filas.",
      "Seguimiento hasta el cobro del primer haber jubilatorio."
    ],
    docs: "DNI original, constancias de trabajo/certificaciones de servicios y Clave de la Seguridad Social.",
    timing: "Estudio CG diagnostica en 24-48 hs. El trámite administrativo ante ANSES suele demorar entre 3 y 5 meses.",
    pricing: "Diagnóstico inicial 100% bonificado. Honorarios pactados con facilidades de pago o al cobro de haberes.",
    waLink: "https://wa.me/5491125114119?text=Hola%20Estudio%20CG%2C%20quiero%20evaluar%20mi%20caso%20de%20Jubilaci%C3%B3n"
  },
  pension: {
    title: "Pensiones Directas, Derivadas y Convivencia",
    badge: "Área Previsional",
    forWho: "Cónyuges, convivientes acreditados e hijos menores o incapacitados de trabajadores en actividad o jubilados fallecidos.",
    whatWeDo: [
      "Acreditación de vínculo y convivencia ante ANSES.",
      "Liquidación de haberes devengados y subsidios de contención familiar.",
      "Presentación formal expedita ante el organismo competente."
    ],
    docs: "Acta de defunción legalizada, acta de matrimonio o pruebas de convivencia (mismo domicilio, servicios compartidos) y DNI.",
    timing: "Respuesta de Estudio CG en 24 hs. Resolución del organismo entre 2 y 4 meses.",
    pricing: "Evaluación preliminar sin cargo. Honorarios fijos estipulados previamente.",
    waLink: "https://wa.me/5491125114119?text=Hola%20Estudio%20CG%2C%20necesito%20asesoramiento%20por%20una%20Pensi%C3%B3n"
  },
  aportes: {
    title: "Cómputo de Aportes, SICAM e Historia Laboral",
    badge: "Previsional / Fiscal",
    forWho: "Personas de 50 a 65 años que necesitan saber con certeza cuántos años reales tienen registrados y cuántos les faltan comprar antes de la edad de retiro.",
    whatWeDo: [
      "Búsqueda en padrones de ANSES, cajas provinciales y regímenes de autónomos.",
      "Liquidación y saneamiento de deuda en SICAM.",
      "Planificación estratégica para llegar a los 30 años de aportes en fecha."
    ],
    docs: "DNI y Clave de Seguridad Social / Clave Fiscal ARCA Nivel 3.",
    timing: "Informe técnico completo entregado en 3 a 5 días hábiles.",
    pricing: "Arancel fijo accesible para auditoría y entrega de informe.",
    waLink: "https://wa.me/5491125114119?text=Hola%20Estudio%20CG%2C%20quiero%20revisar%20mi%20historial%20de%20Aportes"
  },
  documentacion: {
    title: "Documentación, Partidas y Legalizaciones",
    badge: "Organismos Públicos",
    forWho: "Personas que necesitan actas de nacimiento, matrimonio, defunción, trámites ante RENAPER, TAD o legalizaciones con Apostilla de La Haya para gestiones locales o en el exterior.",
    whatWeDo: [
      "Búsqueda y pedido de actas en CABA, Provincia de Bs. As. e interior del país.",
      "Legalizaciones en ministerios y apostillado oficial de Cancillería.",
      "Envío digital en formato PDF con firma electrónica o soporte papel."
    ],
    docs: "Datos de la persona a buscar (nombres, fechas aproximadas, tomo/folio si se conoce).",
    timing: "Partidas estándar de 5 a 15 días hábiles según jurisdicción.",
    pricing: "Presupuesto exacto por trámite con gastos y aranceles oficiales desglosados.",
    waLink: "https://wa.me/5491125114119?text=Hola%20Estudio%20CG%2C%20necesito%20gestionar%20Partidas%20o%20Documentaci%C3%B3n"
  },
  laboral: {
    title: "Liquidación de Sueldos y Gestión Laboral Integral",
    badge: "Empresas & Comercios",
    forWho: "Comercios, pymes, estudios profesionales y empleadores que precisan externalizar la administración de personal y nóminas con cumplimiento normativo estricto.",
    whatWeDo: [
      "Liquidación mensual y quincenal de sueldos según convenios colectivos vigentes.",
      "Libro de Sueldos Digital (LSD) y cargas sociales F.931 ante ARCA.",
      "Altas y bajas en Mi Simplificación y certificaciones de servicios (Art. 80 LCT)."
    ],
    docs: "Legajos de empleados, altas previas y novedades del mes (horas extras, licencias).",
    timing: "Liquidaciones cerradas y entregadas 48 hs antes del vencimiento oficial.",
    pricing: "Abono mensual fijo por cantidad de legajos o liquidaciones eventuales.",
    waLink: "https://wa.me/5491125114119?text=Hola%20Estudio%20CG%2C%20quiero%20consultar%20por%20Liquidaci%C3%B3n%20de%20Sueldos"
  },
  fiscal: {
    title: "Monotributo, ARCA y Asesoramiento Fiscal",
    badge: "Área Tributaria",
    forWho: "Monotributistas, profesionales independientes y autónomos que buscan mantener sus cuentas al día, desbloquear CUIT o regularizar deuda atrasada.",
    whatWeDo: [
      "Inscripción de CUIT, altas y recategorización semestral obligatoria.",
      "Planes de facilidades de pago para refinanciación de pasivos impositivos.",
      "Puntos de venta de facturación electrónica e Ingresos Brutos (AGIP/ARBA)."
    ],
    docs: "CUIT y Clave Fiscal Nivel 3 activa.",
    timing: "Gestiones de alta o desbloqueo en 24 a 72 horas hábiles.",
    pricing: "Honorario cerrado por trámite o abono de gestión mensual.",
    waLink: "https://wa.me/5491125114119?text=Hola%20Estudio%20CG%2C%20quiero%20consultar%20por%20Monotributo%20o%20ARCA"
  },
  nosaber: {
    title: "Diagnóstico y Orientación Inicial Sin Cargo",
    badge: "Atención Personalizada",
    forWho: "Personas que tienen una situación previsional, laboral o burocrática trabada y no saben qué organismo corresponde ni cuál es el nombre formal del trámite.",
    whatWeDo: [
      "Escuchamos tu caso en lenguaje cotidiano, sin tecnicismos.",
      "Identificamos el organismo competente (ANSES, ARCA, IPS, RENAPER o Juzgado).",
      "Te indicamos el camino más rápido, la documentación a reunir y el costo exacto antes de hacer nada."
    ],
    docs: "Cualquier papel o dato que tengas a mano (DNI, recibos viejos, cartas o notas).",
    timing: "Respuesta y orientación en menos de 24 horas hábiles.",
    pricing: "100% Gratuito y sin ningún compromiso de contratación.",
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
    li.innerHTML = '<span class="bullet-check">✓</span> ' + item;
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

