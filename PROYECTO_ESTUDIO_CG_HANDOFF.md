# Estudio CG — Documento de Continuidad & Handoff del Proyecto

Este documento resume el estado completo, la arquitectura técnica, las decisiones de diseño y las instrucciones operativas para continuar el desarrollo del sitio web de **Estudio CG — Gestoría y Consultoría** en una nueva sesión de trabajo o chat.

---

## 1. Ficha del Proyecto & Posicionamiento
* **Enlace de Demostración Público Oficial & Permanente:**
  * URL en Vivo (GitHub Pages): **https://dietol25.github.io/estudio-cg/**
  * Repositorio GitHub: **https://github.com/Dietol25/estudio-cg**
  * Servidor global de alta velocidad (CDN global, SSL automático, nunca expira).
  * Para vincularlo en Vercel con 1 clic: iniciar sesión en [vercel.com](https://vercel.com), seleccionar **"Add New Project"**, importar el repositorio `Dietol25/estudio-cg` y hacer clic en **Deploy**.


* **Nombre de la firma:** Estudio CG — Gestoría y Consultoría
* **Fundador & Director:** Cristian Manuel Gonçalves
* **Ubicación:** José Ignacio Rucci 3351, CABA, Argentina (Atención presencial: Lun a Vie 10:00 a 17:00 hs)
* **Canales oficiales:**
  * WhatsApp: `+54 9 11 2511-4119`
  * Correo: `gintegralcg@gmail.com`
* **Especialidades:**
  1. Gestoría Previsional (Jubilaciones ANSES, IPS Provincia de Bs. As., moratorias, SICAM, pensiones).
  2. Gestión Laboral (Liquidación de haberes, F.931, Libro de Sueldos Digital, paritarias).
  3. Asesoramiento Fiscal (ARCA / AFIP, Monotributo, planes de pago, desbloqueo de CUIT).
  4. Trámites ante Organismos (TAD, RENAPER, PAMI, claves de seguridad social, partidas y apostillas).
  5. Trámites Legales & Gestoría General.
* **Lema oficial de la firma:**  
  *«Si se puede hacer, lo hacemos. Si no, también vemos.»*
* **Regla institucional crítica:**  
  Se retiró por completo del sitio la sección técnica satélite (domótica, cámaras y soporte PC). **NO reincorporar tecnología ni servicios secundarios** al sitio principal; la firma está 100% posicionada como un estudio profesional de gestoría previsional, laboral, fiscal y legal.

---

## 2. Estructura de Archivos & Modularización

El proyecto está desacoplado y optimizado en 3 archivos principales:

```
Estudio CG/
├── index.html              # Estructura semántica limpia (~1.350 líneas)
├── styles.css              # Sistema de diseño y responsive (~3.500 líneas)
├── main.js                 # Interactividad, asistente virtual, scroll y navegación
├── index.html.bak          # Copia de seguridad del monolito original
│
├── cristian-goncalves.jpg  # Retrato profesional del fundador (9:16)
├── hero-bg-clear.jpg       # Fondo 16:9 del Hero desktop (espacio claro a la izq., tensión a la der.)
├── hero-bg-mobile.jpg      # Fondo 9:16 vertical cinematográfico para Hero en móviles
├── hero-editorial.jpg      # Fotografía de sala de reuniones/oficina
└── logo-estudio-cg.png     # Logotipo oficial transparente
```

> **IMPORTANTE:** En futuras sesiones, mantener la modularidad. Cualquier ajuste de estilos debe hacerse en `styles.css` y cualquier comportamiento interactivo en `main.js`. No volver a incrustar miles de líneas de CSS/JS en `index.html`.

---

## 3. Design System & Guía Visual

* **Estética:** *Dark Luxury Minimalista* (inspirado en Apple, Numa y consultoras premium de alta gama).
* **Paleta de Colores:**
  * Fondo principal: `#0d0d0d` / `#111111`
  * Superficies y tarjetas: `#181818` / `rgba(24, 24, 24, 0.85)` con `backdrop-filter: blur(...)`
  * Acentos dorados: Oro `#C49A63` / Oro claro `#DFBC8A` / Oro satinado `#B88A52`
  * Acento WhatsApp / En línea: `#25C368`
  * Textos: Blanco marfil `#FAF8F4`, Crema `#F4EFE7`, Gris suave `#BCB6AD`
* **Tipografía (Google Fonts):**
  * **Titulares, citas y lemas:** `Cormorant Garamond` (serif elegante, itálicas refinadas).
  * **Cuerpo de texto, UI, chips y botones:** `Manrope` (sans-serif moderna y legible).
  * *No utilizar una 3ra tipografía.*
* **Botones & Controles:** Formato pastilla redondeada Apple Pill (`border-radius: 9999px` o `var(--radius-pill)`).

---

## 4. Componentes Clave Implementados y Resueltos

### A. Hero Inmersivo (Desktop & Mobile)
* **Desktop:** Fondo luminoso (`hero-bg-clear.jpg`), titular H1 directo (*"Tu jubilación, tus sueldos, tus trámites. Resueltos sin vueltas."*), lema entre comillas como subtítulo editorial (*«Si se puede hacer, lo hacemos. Si no, también vemos.»*), y **únicamente 2 botones equilibrados** (`[ Iniciar trámite → ]` y `[ Trámites frecuentes ↓ ]`).
* **Mobile:** Fotografía vertical a pantalla completa *Full-Bleed* (sin marcos redondeados ni márgenes laterales que corten la imagen).
* **Logotipo:** Escala aumentada (`54px` en desktop y `46px` en mobile) con cabecera de `82px` para presencia de marca sólida.

### B. Header & Menú de Navegación
* **Navbar Dinámico:** Comienza transparente sobre el hero claro; al scrollear > 60px se transforma suavemente en una barra de vidrio oscuro (`rgba(13, 13, 13, 0.92)` con `backdrop-filter: blur(18px)`).
* **Menú Hamburguesa en Mobile:** Despliega un telón **100% opaco (`#0d0d0d`)** a pantalla completa (`top: 70px; height: calc(100vh - 70px)`), bloqueando el scroll del fondo (`overflow: hidden`) y alternando el icono entre `☰` y `✕`. Los elementos flotantes se ocultan mientras está abierto para no estorbar.

### C. Estructura por Departamentos (Tabs / Servicios)
* **Desktop:** Selector vertical de 5 áreas a la izquierda y dossier de contenido a la derecha.
* **Mobile:** Barra de pastillas horizontales deslizables (`pills`) con `position: sticky; top: 64px;`:
  * Permite cambiar de área sin tener que subir y bajar.
  * Guía visual superior: `5 áreas disponibles · Deslizá para explorar →`.
  * Gradiente lateral derecho (`pills-fade-edge`) con flecha dorada indicando que hay más opciones, que se desvanece al llegar a la última pestaña.
  * `touch-action: pan-x pan-y;` para garantizar que el scroll vertical de la página no se trabe al tocar las pastillas.

### D. Asistente CG (Chatbot de Marca)
* Inspirado en la referencia oficial de Estudio CG:
  * **Launcher:** Círculo negro carbón con aro fino dorado, monograma `CG`, punto verde `En línea` y animación de ondas concéntricas de pulso.
  * **Globo de diálogo:** Aparece a los 3.5s a la izquierda con el texto *"¿Necesitás ayuda?"* y badge de notificación `1`.
  * **Ventana de Chat:** Cabecera con avatar, título, estado y botones de minimizar (`—`) y cerrar (`✕`).
  * **Flujo interactivo:** Saludo con avatar `CG`, pregunta guía (*"¿Qué necesitás gestionar?"*) y 5 tarjetas con icono y chevron:
    1. `👥 Jubilaciones y pensiones`
    2. `📄 Trámites migratorios`
    3. `📋 Documentación`
    4. `🏢 Trámites para empresas`
    5. `💬 Otro trámite` (Derivación personalizada con Cristian por WhatsApp).
  * **Pie:** Input redondeado con botón circular dorado y disclaimer legal orientativo.

### E. Identidad & Dirección (`#firma`)
* **Retrato oficial del fundador:** Foto de Cristian Manuel Gonçalves (`cristian-goncalves.jpg`) ocupando el 100% de la altura de la columna (`align-items: stretch`).
* **Biografía oficial:**
  > *«Mi experiencia combina la gestión previsional, la administración y el análisis de Recursos Humanos, con una mirada integral orientada a resolver cada trámite de manera clara, ordenada y responsable.»*
  > *«Acompaño a cada cliente durante todo el proceso, desde el análisis inicial hasta la presentación, seguimiento y resolución de su trámite. Mi objetivo es transformar procedimientos complejos en procesos más simples, comprensibles y transparentes.»*
* **Sello y enlace:** Punto verde de atención personal y botón directo para consultar con Cristian por WhatsApp.

### F. Sección Contacto (`#contacto`)
* **Canal principal WhatsApp:** Tarjeta destacada con halo verde esmeralda, badge de respuesta prioritaria y enlace directo.
* **Metadatos limpios fuera de cajas:**
  * Correo funcional: Enlace `mailto:gintegralcg@gmail.com`.
  * Sede Central: Información textual clara de horarios y dirección, sin enlazar mapas externos por motivos de privacidad/seguridad.
* **Alineación:** La columna izquierda estira y se distribuye verticalmente para coincidir con la altura del formulario de consulta.

### G. Botón Flotante "Volver Arriba"
* Botón circular en vidrio ahumado con flecha dorada.
* Oculto al inicio; aparece automáticamente al hacer scroll > 400px.
* Alineado ergonómicamente sobre el Asistente CG (`bottom: 86px; right: 20px` en mobile; `bottom: 96px; right: 24px` en desktop).

---

## 5. Instrucciones para la Siguiente Sesión

1. **Entorno de ejecución:**
   * Servidor local en Python:
     ```powershell
     python -m http.server 8080
     ```
   * Acceso local: `http://localhost:8080/`
2. **Cómo abordar nuevos cambios:**
   * **Cambios de textos o estructura HTML:** Editar directamente `index.html`.
   * **Cambios visuales, colores, espaciados o responsive:** Editar `styles.css`.
   * **Nuevas funciones o interactividad:** Editar `main.js`.
3. **Prompt de inicio sugerido para el próximo chat:**
   > *"Hola, estoy trabajando en el rediseño web de Estudio CG. El proyecto ya está modularizado en `index.html`, `styles.css` y `main.js`. Por favor lee el archivo `PROYECTO_ESTUDIO_CG_HANDOFF.md` para entender el estado actual, el sistema de diseño Dark Luxury y las decisiones tomadas antes de hacer cualquier cambio."*
