// Listener de Scroll para Navbar Transparente / Sticky Vidrio
function updateHeaderScroll() {
  const header = document.querySelector('header');
  if (header) {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}
window.addEventListener('scroll', updateHeaderScroll, { passive: true });
window.addEventListener('DOMContentLoaded', updateHeaderScroll);

// Modo de contacto seleccionado (WhatsApp o Email)
let currentContactMode = 'wa';

function setContactMode(mode, el) {
  currentContactMode = mode;
  document.querySelectorAll('.mode-pill').forEach(pill => pill.classList.remove('active'));
  if (el) el.classList.add('active');
  
  const submitBtn = document.getElementById('smartSubmitBtn');
  const btnText = document.getElementById('submitBtnText');
  
  if (mode === 'wa') {
    submitBtn.classList.remove('btn-secondary');
    submitBtn.classList.add('btn-primary');
    btnText.textContent = 'Enviar consulta por WhatsApp';
  } else {
    submitBtn.classList.remove('btn-primary');
    submitBtn.classList.add('btn-secondary');
    btnText.textContent = 'Enviar consulta por correo formal';
  }
}

function submitSmartForm() {
  const nombre = document.getElementById('nombre') ? document.getElementById('nombre').value.trim() : '';
  const tel = document.getElementById('tel') ? document.getElementById('tel').value.trim() : '';
  const mailEl = document.getElementById('mail');
  const mail = mailEl ? mailEl.value.trim() : '';
  const tema = document.getElementById('tema') ? document.getElementById('tema').value : 'Consulta general';
  const msgEl = document.getElementById('msg');
  const msg = msgEl ? msgEl.value.trim() : '';

  if (!nombre || !tel) {
    alert('Por favor, completá tu nombre y teléfono de contacto.');
    return;
  }

  let textoWA = `Hola Estudio CG!%0A*Consulta desde la web*%0A*Nombre:* ${encodeURIComponent(nombre)}%0A*Teléfono:* ${encodeURIComponent(tel)}%0A*Trámite:* ${encodeURIComponent(tema)}`;
  if (mail) textoWA += `%0A*Email:* ${encodeURIComponent(mail)}`;
  if (msg) textoWA += `%0A*Detalle:* ${encodeURIComponent(msg)}`;

  window.open(`https://wa.me/5491125114119?text=${textoWA}`, '_blank');

  // Feedback en pantalla
  const fb = document.getElementById('formFeedback');
  if (fb) {
    fb.classList.add('active');
    setTimeout(() => {
      const form = document.getElementById('contactForm');
      if (form) form.reset();
    }, 1500);
  }
}


// ==============================================================================
// ASISTENTE CG — SIMULACIÓN DE CHATBOT DE MARCA
// ==============================================================================
function toggleChatbot() {
  const widget = document.getElementById('cgChatbot');
  const bubble = document.getElementById('launcherBubble');
  const notifBadge = document.getElementById('launcherNotifBadge');
  
  if (widget) {
    const isActive = widget.classList.toggle('active');
    if (isActive) {
      if (bubble) bubble.classList.remove('visible');
      if (notifBadge) notifBadge.classList.remove('visible');
      setTimeout(() => {
        const input = document.getElementById('chatInput');
        if (input) input.focus();
      }, 300);
    }
  }
}

// Cierre al hacer click fuera o presionar Escape
document.addEventListener('click', (e) => {
  const widget = document.getElementById('cgChatbot');
  if (widget && widget.classList.contains('active')) {
    if (!widget.contains(e.target)) {
      toggleChatbot();
    }
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const widget = document.getElementById('cgChatbot');
    if (widget && widget.classList.contains('active')) {
      toggleChatbot();
    }
  }
});

// Respuestas de conocimiento técnico para la simulación del asistente
// Respuestas técnicas para los 5 departamentos de la referencia oficial
const knowledgeBase = {
  jubilaciones: {
    text: "En Estudio CG gestionamos jubilaciones ordinarias, regímenes especiales, pensiones y moratorias ante ANSES e IPS. Realizamos el cómputo de aportes y revisamos tu historial sin costo previo.",
    actionText: "Consultar trámite previsional por WhatsApp →",
    actionLink: "https://wa.me/5491125114119?text=Hola%20Estudio%20CG%2C%20estoy%20en%20el%20asistente%20y%20quiero%20consultar%20por%20Jubilaciones%20y%20Pensiones"
  },
  migratorios: {
    text: "Acompañamos radicaciones temporarias y permanentes (Mercosur y No Mercosur), gestión de DNI extranjero, certificados de domicilio y recursos administrativos ante la Dirección Nacional de Migraciones.",
    actionText: "Gestionar trámite migratorio →",
    actionLink: "https://wa.me/5491125114119?text=Hola%20Estudio%20CG%2C%20quiero%20consultar%20por%20un%20Tr%C3%A1mite%20Migratorio"
  },
  documentacion: {
    text: "Gestionamos partidas de nacimiento, matrimonio o defunción con legalización/apostilla de La Haya, blanqueo de Clave de la Seguridad Social, certificados de servicios y trámites ante TAD y RENAPER.",
    actionText: "Solicitar gestión de documentación →",
    actionLink: "https://wa.me/5491125114119?text=Hola%20Estudio%20CG%2C%20necesito%20gestionar%20Documentaci%C3%B3n%20y%20Certificados"
  },
  empresas: {
    text: "Brindamos soporte integral a comercios y empresas: liquidación de sueldos y jornales, Libro de Sueldos Digital (LSD), cargas sociales F.931 y regularización fiscal ante ARCA (Monotributo y convenios).",
    actionText: "Consultar servicios corporativos →",
    actionLink: "https://wa.me/5491125114119?text=Hola%20Estudio%20CG%2C%20quiero%20consultar%20por%20Sueldos%20y%20Tr%C3%A1mites%20para%20Empresas"
  },
  otro: {
    text: "¡Perfecto! Te derivamos de forma directa y prioritaria con Cristian Manuel Gonçalves o un gestor matriculado de nuestro equipo para evaluar tu caso puntual sin costo inicial.",
    actionText: "Hablar directamente con Cristian →",
    actionLink: "https://wa.me/5491125114119?text=Hola%20Cristian%2C%20vengo%20del%20asistente%20web%20y%20deseo%20hacerte%20una%20consulta%20personalizada"
  }
};

function handleOption(optionKey) {
  const labels = {
    jubilaciones: 'Jubilaciones y pensiones',
    migratorios: 'Trámites migratorios',
    documentacion: 'Documentación',
    empresas: 'Trámites para empresas',
    otro: 'Otro trámite'
  };

  const userText = labels[optionKey] || optionKey;
  addChatMessage(userText, 'user');
  
  const optionsContainer = document.getElementById('chatOptions');
  if (optionsContainer) optionsContainer.style.display = 'none';

  setTimeout(() => {
    const item = knowledgeBase[optionKey] || knowledgeBase.otro;
    addBotReply(item.text, item.actionText, item.actionLink);
  }, 450);
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const userText = input.value.trim();
  if (!userText) return;

  addChatMessage(userText, 'user');
  input.value = '';

  const optionsContainer = document.getElementById('chatOptions');
  if (optionsContainer) optionsContainer.style.display = 'none';

  setTimeout(() => {
    const lower = userText.toLowerCase();
    let key = 'otro';

    if (lower.includes('jubil') || lower.includes('anses') || lower.includes('ips') || lower.includes('morator') || lower.includes('aporte') || lower.includes('pensio') || lower.includes('retiro')) {
      key = 'jubilaciones';
    } else if (lower.includes('migra') || lower.includes('radic') || lower.includes('extranjer') || lower.includes('residen') || lower.includes('mercosur')) {
      key = 'migratorios';
    } else if (lower.includes('partid') || lower.includes('legaliz') || lower.includes('apostill') || lower.includes('renaper') || lower.includes('tad') || lower.includes('clave') || lower.includes('partida')) {
      key = 'documentacion';
    } else if (lower.includes('sueldo') || lower.includes('empresa') || lower.includes('recibo') || lower.includes('f931') || lower.includes('mono') || lower.includes('arca') || lower.includes('afip') || lower.includes('laboral')) {
      key = 'empresas';
    }

    const item = knowledgeBase[key];
    addBotReply(item.text, item.actionText, item.actionLink);
  }, 500);
}

function addChatMessage(text, sender) {
  const container = document.getElementById('chatMessages');
  const msgEl = document.createElement('div');
  msgEl.className = `chat-msg ${sender}-msg`;
  msgEl.innerHTML = `<p>${text}</p><span class="chat-timestamp">Ahora</span>`;
  container.appendChild(msgEl);
  container.scrollTop = container.scrollHeight;
}

function addBotReply(text, btnLabel, btnUrl) {
  const container = document.getElementById('chatMessages');
  const msgEl = document.createElement('div');
  msgEl.className = 'chat-msg bot-msg';
  
  let actionHtml = '';
  if (btnLabel && btnUrl) {
    actionHtml = `<br><a href="${btnUrl}" target="_blank" rel="noopener" class="chat-cta-btn">${btnLabel}</a>`;
  }
  
  msgEl.innerHTML = `<p>${text}</p>${actionHtml}<span class="chat-timestamp">Ahora</span>`;
  container.appendChild(msgEl);
  container.scrollTop = container.scrollHeight;
}

// ==============================================================================

// Interacción de Departamentos / Servicios
function switchDept(idx) {
  // Tabs
  const allBtns = document.querySelectorAll('.serv-tab-btn');
  allBtns.forEach((btn, i) => {
    if (i === idx) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Dossiers
  document.querySelectorAll('.dept-dossier').forEach((dossier, i) => {
    if (i === idx) {
      dossier.classList.add('active');
    } else {
      dossier.classList.remove('active');
    }
  });

  // En móvil: centrar la pastilla SOLO dentro de su contenedor (SIN mover window horizontalmente)
  if (window.innerWidth <= 768) {
    const nav = document.querySelector('.serv-tabs-nav');
    const activeBtn = allBtns[idx];
    if (nav && activeBtn) {
      const scrollTarget = activeBtn.offsetLeft - (nav.clientWidth / 2) + (activeBtn.clientWidth / 2);
      nav.scrollTo({ left: scrollTarget, behavior: 'smooth' });
      if (window.updatePillsFade) setTimeout(window.updatePillsFade, 300);
    }
    
    // Si el usuario estaba scrolleado muy abajo en el dossier anterior, realinear suavemente el inicio
    const tabsLayout = document.querySelector('.serv-tabs-layout');
    if (tabsLayout) {
      const rect = tabsLayout.getBoundingClientRect();
      if (rect.top < 50) {
        window.scrollTo({
          top: window.scrollY + rect.top - 65,
          behavior: 'smooth'
        });
      }
    }
  }
}

// Toggle menú móvil con bloqueo de scroll y animación limpia
function toggleMobileNav() {
  const menu = document.getElementById('nav-menu');
  const hamb = document.querySelector('.hamb');
  if (!menu) return;
  const isOpen = menu.classList.toggle('open');
  if (isOpen) {
    document.body.classList.add('mobile-menu-active');
    document.body.style.overflow = 'hidden';
    if (hamb) hamb.textContent = '✕';
  } else {
    document.body.classList.remove('mobile-menu-active');
    document.body.style.overflow = '';
    if (hamb) hamb.textContent = '☰';
  }
}

function closeNav() {
  const menu = document.getElementById('nav-menu');
  const hamb = document.querySelector('.hamb');
  if (menu) menu.classList.remove('open');
  document.body.classList.remove('mobile-menu-active');
  document.body.style.overflow = '';
}

function toggleServicesDropdown(event) {
  if (window.innerWidth <= 900) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const dropdown = event ? event.target.closest('.nav-dropdown') : document.querySelector('.nav-dropdown');
    if (dropdown) dropdown.classList.toggle('active');
  }
}

function armarMensaje() {
  const n = document.getElementById('nombre') ? document.getElementById('nombre').value.trim() : '';
  const t = document.getElementById('tel') ? document.getElementById('tel').value.trim() : '';
  const m = document.getElementById('mail') ? document.getElementById('mail').value.trim() : '';
  const tema = document.getElementById('tema') ? document.getElementById('tema').value : 'Consulta general';
  const msg = document.getElementById('msg') ? document.getElementById('msg').value.trim() : '';
  
  let txt = 'Hola Estudio CG, deseo realizar una consulta profesional:\n';
  txt += '\n• Área: ' + tema;
  if (n) txt += '\n• Nombre: ' + n;
  if (t) txt += '\n• Teléfono: ' + t;
  if (m) txt += '\n• Email: ' + m;
  if (msg) txt += '\n• Detalle: ' + msg;
  return txt;
}

function enviarWA() {
  const n = document.getElementById('nombre') ? document.getElementById('nombre').value.trim() : '';
  const t = document.getElementById('tel') ? document.getElementById('tel').value.trim() : '';
  
  if (!n || !t) {
    alert('Por favor, completá tu nombre y teléfono.');
    return;
  }
  window.open('https://wa.me/5491125114119?text=' + encodeURIComponent(armarMensaje()), '_blank');
}

function enviarFormWeb() {
  const feedback = document.getElementById('formFeedback');
  if (feedback) {
    feedback.classList.add('active');
    feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  
  setTimeout(() => {
    const f = document.getElementById('contactForm');
    if (f) f.reset();
  }, 2000);
}

// Catálogo modal de trámites por área
(function() {
  const AREAS = [
    {
      titulo: "Área Previsional",
      tramites: [
        ["Jubilaciones ANSES", "Régimen nacional ordinario, relación de dependencia y extranjeros con radicación legal."],
        ["Jubilación de Empleadas Domésticas", "Gestión bajo el régimen especial de casas particulares."],
        ["Jubilación IPS PBA", "Para empleados públicos de la administración provincial y municipal bonaerense."],
        ["Pensiones Directas y Derivadas", "Gestión ante fallecimiento de un familiar titular ante ANSES o IPS."],
        ["Pensión Universal Adulto Mayor (PUAM)", "Para personas mayores de 65 años sin aportes suficientes."],
        ["Pensiones No Contributivas (PNC)", "Por invalidez, madres de 7 hijos o vejez en situación de vulnerabilidad."],
        ["Planificación Previsional", "Cómputo anticipado de aportes y estrategia de moratorias para optimizar el haber."]
      ]
    },
    {
      titulo: "Gestión Laboral",
      tramites: [
        ["Liquidación de Sueldos", "Cálculo y confección de recibos conforme a los convenios colectivos aplicables."],
        ["Cargas Sociales (F.931)", "Determinación de aportes patronales y contribuciones ante la seguridad social."],
        ["Asesoramiento a Empleadores", "Altas, bajas, suspensiones y cumplimiento de normativas de trabajo."],
        ["Confección de CVs y Perfil LinkedIn", "Optimización del perfil laboral y currículum profesional orientado a resultados."]
      ]
    },
    {
      titulo: "Asesoramiento Fiscal",
      tramites: [
        ["Monotributo Integral", "Altas, bajas, recategorizaciones periódicas y regularización tributaria."],
        ["Bienes Personales", "Declaraciones juradas anuales y determinación patrimonial."],
        ["Devolución de Percepciones", "Gestión de recupero por compras en moneda extranjera y retenciones."],
        ["Regularización SICAM", "Liquidación de deuda autónoma/monotributista para computar aportes jubilatorios."],
        ["Planes de Facilidades ARCA", "Consolidación de deudas fiscales y previsionales en cuotas."]
      ]
    },
    {
      titulo: "Organismos & Claves",
      tramites: [
        ["Clave de Seguridad Social ANSES", "Generación, desbloqueo y recuperación operativa."],
        ["Clave Fiscal ARCA", "Gestión y blanqueo de accesos de nivel de seguridad requerido."],
        ["Trámites PAMI", "Empadronamiento, coberturas especiales y órdenes prestacionales."],
        ["Trámites a Distancia (TAD)", "Gestión de expedientes electrónicos ante carteras nacionales y CABA."],
        ["Partidas y Legalizaciones", "Partidas de nacimiento, matrimonio y defunción en todo el país."],
        ["Infracciones de Tránsito", "Descargos técnicos y regularización ante la Dirección de Tránsito."]
      ]
    },
    {
      titulo: "Área Legal",
      tramites: [
        ["Procesos Sucesorios", "Apertura, declaratoria de herederos e inscripción de bienes sucesorios."],
        ["Contratos y Acuerdos", "Redacción de contratos de locación comercial/residencial y convenios privados."],
        ["Cartas Documento e Intimaciones", "Redacción con rigor jurídico y remisión formal."],
        ["Informes de Dominio", "Verificación registral de gravámenes en bienes inmuebles y automotores."]
      ]
    }
  ];

  const modal = document.getElementById('modalArea');
  const mTitulo = document.getElementById('mTitulo');
  const mLista = document.getElementById('mLista');
  const mWaBtn = document.getElementById('mWaBtn');

  function openAreaModal(idx) {
    const data = AREAS[idx];
    if (!data) return;
    mTitulo.textContent = data.titulo;
    mLista.innerHTML = data.tramites.map(t => {
      const waUrl = 'https://wa.me/5491125114119?text=' + encodeURIComponent('Hola Estudio CG, deseo consultar sobre: ' + t[0]);
      return `
        <div class="modal-item">
          <h4>${t[0]}</h4>
          <p>${t[1]}</p>
          <a href="${waUrl}" target="_blank" rel="noopener">Consultar trámite →</a>
        </div>
      `;
    }).join('');

    mWaBtn.href = 'https://wa.me/5491125114119?text=' + encodeURIComponent('Hola Estudio CG, deseo coordinar una consulta sobre: ' + data.titulo);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.serv-card[data-area]').forEach(card => {
    card.addEventListener('click', () => openAreaModal(parseInt(card.getAttribute('data-area'))));
  });

  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
})();

// Listener para botón Volver Arriba
window.addEventListener('scroll', () => {
  const topBtn = document.getElementById('scrollTopBtn');
  if (topBtn) {
    if (window.scrollY > 400) {
      topBtn.classList.add('visible');
    } else {
      topBtn.classList.remove('visible');
    }
  }
});

// Listener para desvanecer o mostrar los indicadores de borde izquierdo y derecho en la barra de pastillas
document.addEventListener('DOMContentLoaded', () => {
  const servNav = document.querySelector('.serv-tabs-nav');
  const fadeLeft = document.getElementById('pillsFadeLeft');
  const fadeRight = document.getElementById('pillsFadeRight');
  
  if (servNav) {
    function updatePillsFade() {
      const maxScroll = servNav.scrollWidth - servNav.clientWidth - 8;
      const currentScroll = servNav.scrollLeft;
      
      // Flecha izquierda: aparece si se desplazó más de 6px a la derecha
      if (fadeLeft) {
        const canScrollLeft = currentScroll > 6;
        fadeLeft.style.opacity = canScrollLeft ? '1' : '0';
        fadeLeft.style.pointerEvents = canScrollLeft ? 'auto' : 'none';
      }
      
      // Flecha derecha: visible si aún queda contenido por recorrer a la derecha
      if (fadeRight) {
        const canScrollRight = currentScroll < maxScroll;
        fadeRight.style.opacity = canScrollRight ? '1' : '0';
        fadeRight.style.pointerEvents = canScrollRight ? 'auto' : 'none';
      }
    }

    // Navegación asistida al pulsar las flechas
    if (fadeLeft) {
      fadeLeft.addEventListener('click', (e) => {
        e.preventDefault();
        servNav.scrollBy({ left: -160, behavior: 'smooth' });
        setTimeout(updatePillsFade, 250);
      });
    }
    if (fadeRight) {
      fadeRight.addEventListener('click', (e) => {
        e.preventDefault();
        servNav.scrollBy({ left: 160, behavior: 'smooth' });
        setTimeout(updatePillsFade, 250);
      });
    }

    servNav.addEventListener('scroll', updatePillsFade, { passive: true });
    window.addEventListener('resize', updatePillsFade, { passive: true });
    window.updatePillsFade = updatePillsFade;
    updatePillsFade();
  }
});

// Control de Globo de Diálogo del Asistente (Auto-dismiss y dismiss al scrollear)
document.addEventListener('DOMContentLoaded', () => {
  const bubble = document.getElementById('launcherBubble');
  const notifBadge = document.getElementById('launcherNotifBadge');
  
  // Saludo inicial sutil solo en desktop (en móviles se mantiene el botón limpio)
  if (window.innerWidth > 768) {
    setTimeout(() => {
      const widget = document.getElementById('cgChatbot');
      if (widget && !widget.classList.contains('active') && bubble) {
        bubble.classList.add('visible');
        if (notifBadge) notifBadge.classList.add('visible');
        
        // Auto-desvanecer tras 4.5 segundos para que NUNCA quede pegado
        setTimeout(() => {
          bubble.classList.remove('visible');
        }, 4500);
      }
    }, 3000);

    // Al hacer scroll, desvanecer inmediatamente el globo para no estorbar la lectura
    window.addEventListener('scroll', () => {
      if (bubble && bubble.classList.contains('visible')) {
        bubble.classList.remove('visible');
      }
    }, { passive: true });
  }
});
