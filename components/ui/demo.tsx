import {FAQ} from '@/components/ui/faq-tabs'

const FAQDemo = () => {
  const categories = {
    "previsional": "Gestión Previsional",
    "laboral": "Gestión Laboral", 
    "fiscal": "Asesoramiento Fiscal",
    "general": "General & Honorarios"
  };

  const faqData = {
    "previsional": [
      {
        question: "¿Qué documentación necesito para tramitar mi jubilación?",
        answer: "Para realizar el cómputo de aportes inicial necesitás: DNI frente y dorso, certificaciones de servicios o recibos históricos y tu Clave de la Seguridad Social. Si no la tenés, te ayudamos a generarla."
      },
      {
        question: "¿Cuánto tiempo demora en resolverse una jubilación o pensión?",
        answer: "Los plazos promedio son de 3 a 5 meses en ANSES estándar, 4 a 8 meses con moratoria previsional (compra de años), y 2 a 5 meses ante IPS Provincia de Buenos Aires."
      },
      {
        question: "¿Se pueden comprar los años de aportes faltantes?",
        answer: "Sí. Evaluamos tu historial en padrones oficiales y aplicamos a las moratorias previsionales vigentes o regularización por SICAM, calculando cuotas y montos con exactitud."
      }
    ],
    "laboral": [
      {
        question: "¿Qué incluye el servicio de liquidación de sueldos?",
        answer: "Confección mensual según escalas paritarias vigentes, Libro de Sueldos Digital (LSD), emisión de cargas sociales F.931 ante ARCA y altas/bajas tempranas en Mi Simplificación."
      },
      {
        question: "¿Cómo se implementa la modalidad de trabajo para empresas?",
        answer: "Trabajamos mediante un abono mensual fijo dimensionado a la cantidad de empleados o bien por liquidaciones puntuales según demanda."
      }
    ],
    "fiscal": [
      {
        question: "¿Cómo regularizo mi deuda de monotributo o autónomos?",
        answer: "Analizamos tu estado de cuenta en ARCA, gestionamos moratorias o planes de facilidades de pago en cuotas y procedemos al levantamiento de embargos o bloqueos de CUIT."
      },
      {
        question: "¿Hacen trámites de Ingresos Brutos y facturación electrónica?",
        answer: "Sí. Inscripción y mantenimiento en regímenes simplificados o Convenio Multilateral (AGIP / ARBA) y parametrización de comprobantes fiscales electrónicos."
      }
    ],
    "general": [
      {
        question: "¿Cómo se cobra la consulta y cuáles son las etapas?",
        answer: "El diagnóstico y análisis inicial de viabilidad es 100% bonificado ($0). Para el trámite pactamos un honorario cerrado con facilidades de pago o al cobro de haberes sin sorpresas."
      },
      {
        question: "¿Atienden gestiones a distancia desde el interior del país?",
        answer: "Sí. Gestionamos trámites en todo el territorio argentino de manera remota mediante TAD (Trámites a Distancia), IPS provincial y plataformas digitales oficiales."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <FAQ 
        title="Preguntas Frecuentes"
        subtitle="Claridad, plazos y documentación"
        categories={categories}
        faqData={faqData}
      />
    </div>
  );
};

export default FAQDemo;
