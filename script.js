// Intersection Observer para animaciones de aparición
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, parseInt(delay));
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos con animación
document.addEventListener('DOMContentLoaded', () => {
    // Animación del hero
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 100);
    }

    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroSubtitle.style.transition = 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s';
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 300);
    }

    // Observar las feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.dataset.delay = index * 150;
        observer.observe(item);
    });

    // Animación del mapa
    const mapNodes = document.querySelectorAll('.map-node');
    mapNodes.forEach((node, index) => {
        node.style.opacity = '0';
        node.style.transform = 'scale(0.8)';
        setTimeout(() => {
            node.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
            node.style.opacity = '1';
            node.style.transform = 'scale(1)';
        }, 500 + index * 100);
    });

    // Animación de los leads
    const leadItems = document.querySelectorAll('.lead-item');
    leadItems.forEach((lead, index) => {
        lead.style.opacity = '0';
        lead.style.transform = 'translateY(10px)';
        setTimeout(() => {
            lead.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
            lead.style.opacity = '1';
            lead.style.transform = 'translateY(0)';
        }, 1000 + index * 50);
    });

    // Animación de las solution cards
    const solutionCards = document.querySelectorAll('.solution-card');
    solutionCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 800 + index * 150);
    });

    // Animación del CRM abandonado
    const crmVisualization = document.querySelector('.crm-visualization');
    if (crmVisualization) {
        crmVisualization.style.opacity = '0';
        setTimeout(() => {
            crmVisualization.style.transition = 'opacity 0.8s ease';
            crmVisualization.style.opacity = '1';
        }, 500);

        // Animar los leads apilados
        const leadCards = document.querySelectorAll('.lead-card.stacked');
        leadCards.forEach((lead, index) => {
            lead.style.opacity = '0';
            lead.style.transform = 'translateY(20px)';
            setTimeout(() => {
                lead.style.transition = `opacity 0.3s ease ${index * 0.05}s, transform 0.3s ease ${index * 0.05}s`;
                lead.style.opacity = '1';
            }, 1000 + index * 50);
        });

        // Animar efectos de abandono
        const dustParticles = document.querySelectorAll('.dust-particle');
        dustParticles.forEach((particle, index) => {
            particle.style.opacity = '0';
            setTimeout(() => {
                particle.style.transition = 'opacity 1s ease';
                particle.style.opacity = '0.3';
            }, 1500 + index * 200);
        });

        const trashItem = document.querySelector('.trash-item');
        if (trashItem) {
            trashItem.style.opacity = '0';
            setTimeout(() => {
                trashItem.style.transition = 'opacity 1s ease';
                trashItem.style.opacity = '0.4';
            }, 2000);
        }

        const trashItem2 = document.querySelector('.trash-item-2');
        if (trashItem2) {
            trashItem2.style.opacity = '0';
            setTimeout(() => {
                trashItem2.style.transition = 'opacity 1s ease';
                trashItem2.style.opacity = '0.35';
            }, 2200);
        }

        const trashItem3 = document.querySelector('.trash-item-3');
        if (trashItem3) {
            trashItem3.style.opacity = '0';
            setTimeout(() => {
                trashItem3.style.transition = 'opacity 1s ease';
                trashItem3.style.opacity = '0.3';
            }, 2400);
        }

        const brokenItem = document.querySelector('.broken-item');
        if (brokenItem) {
            brokenItem.style.opacity = '0';
            setTimeout(() => {
                brokenItem.style.transition = 'opacity 1s ease';
                brokenItem.style.opacity = '0.4';
            }, 2600);
        }

        const cobweb = document.querySelector('.cobweb');
        if (cobweb) {
            cobweb.style.opacity = '0';
            setTimeout(() => {
                cobweb.style.transition = 'opacity 1s ease';
                cobweb.style.opacity = '0.3';
            }, 2800);
        }

        const dustBunny = document.querySelector('.dust-bunny');
        if (dustBunny) {
            dustBunny.style.opacity = '0';
            setTimeout(() => {
                dustBunny.style.transition = 'opacity 1s ease';
                dustBunny.style.opacity = '0.35';
            }, 3000);
        }

        const oldPaper = document.querySelector('.old-paper');
        if (oldPaper) {
            oldPaper.style.opacity = '0';
            setTimeout(() => {
                oldPaper.style.transition = 'opacity 1s ease';
                oldPaper.style.opacity = '0.3';
            }, 3200);
        }

        const spiderWeb = document.querySelector('.spider-web');
        if (spiderWeb) {
            spiderWeb.style.opacity = '0';
            setTimeout(() => {
                spiderWeb.style.transition = 'opacity 1s ease';
                spiderWeb.style.opacity = '0.3';
            }, 2500);
        }
    }

    // Animación de las tarjetas de métricas
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px) scale(0.95)';
        setTimeout(() => {
            card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, 500 + index * 100);
    });

    // Animación del footer de métricas
    const metricsFooter = document.querySelector('.metrics-footer');
    if (metricsFooter) {
        metricsFooter.style.opacity = '0';
        setTimeout(() => {
            metricsFooter.style.transition = 'opacity 0.8s ease 0.5s';
            metricsFooter.style.opacity = '1';
        }, 1500);
    }

    // Animación de los reportes
    const reportPreviews = document.querySelectorAll('.report-preview');
    reportPreviews.forEach((report, index) => {
        report.style.opacity = '0';
        report.style.transform = 'translateY(30px) scale(0.95)';
        setTimeout(() => {
            report.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
            report.style.opacity = '1';
            report.style.transform = 'translateY(0) scale(1)';
        }, 500 + index * 200);
    });

    // Animación del footer de reportes
    const reportsFooter = document.querySelector('.reports-footer');
    if (reportsFooter) {
        reportsFooter.style.opacity = '0';
        setTimeout(() => {
            reportsFooter.style.transition = 'opacity 0.8s ease 0.5s';
            reportsFooter.style.opacity = '1';
        }, 1500);
    }

    // Funcionalidad del Modal de Reportes
    const reportModal = document.getElementById('reportModal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.modal-close');
    const viewReportBtns = document.querySelectorAll('.view-report-btn');
    const marketingReport = document.getElementById('marketingReport');
    const ventasReport = document.getElementById('ventasReport');

    function openModal(reportType) {
        if (reportType === 'marketing') {
            marketingReport.style.display = 'block';
            ventasReport.style.display = 'none';
        } else if (reportType === 'ventas') {
            marketingReport.style.display = 'none';
            ventasReport.style.display = 'block';
        }
        reportModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        reportModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    viewReportBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const reportType = btn.getAttribute('data-report');
            openModal(reportType);
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && reportModal.classList.contains('active')) {
            closeModal();
        }
    });

    // Funcionalidad de Tabs de Canales
    const channelTabs = document.querySelectorAll('.channel-tab');
    const channelContents = document.querySelectorAll('.channel-content');

    channelTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetChannel = tab.getAttribute('data-channel');
            
            // Remover active de todos los tabs
            channelTabs.forEach(t => t.classList.remove('active'));
            // Agregar active al tab clickeado
            tab.classList.add('active');
            
            // Ocultar todos los contenidos
            channelContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Mostrar el contenido correspondiente
            const targetContent = document.getElementById(`${targetChannel}-content`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Funcionalidad del Chat
    const chatInput = document.getElementById('chatInput');
    const chatSendBtn = document.getElementById('chatSendBtn');
    const chatMessages = document.getElementById('chatMessages');

    // Respuestas del chat con contexto completo del servicio
    const chatResponses = {
        // 1. ¿Qué hace exactamente nuestro negocio?
        queHacemos: [
            "Somos una consultora especializada en instalar ecosistemas completos de datos y ventas para negocios que venden servicios de ticket medio/alto. Conectamos Ads (Meta/TikTok), Leads, Llamadas telefónicas, Videoconferencias, Pipelines de CRM (GoHighLevel o sistemas propios), Automatizaciones con IA y Dashboards y reportes inteligentes. Todo en un solo sistema centralizado.",
            "Nuestro objetivo es darte claridad de qué está pasando en tu área comercial, control de tus vendedores y procesos, y datos reales para saber por qué venden o no venden.",
            "Conectamos todo tu ecosistema comercial: desde los ads hasta el CRM, pasando por cada llamada y videollamada, para que tengas visibilidad total de tu proceso de ventas."
        ],
        
        // 2. Resultado final para el cliente
        resultado: [
            "El resultado es que sabrás exactamente qué hace cada vendedor con cada lead. Verás en tiempo real: cuántas llamadas realizaron, cuántas veces contactaron a un lead, cuánto duró cada llamada, si siguieron el guion de ventas, si preguntaron presupuesto, urgencia, objeciones, etc.",
            "Tendrás todas las videollamadas y llamadas analizadas por IA con más de 40 parámetros comerciales. Sabrás por qué no están cerrando ventas (datos, no suposiciones) y podrás aumentar ventas sin aumentar el presupuesto en ads, sino corrigiendo el proceso comercial.",
            "Nuestra IA analiza cada llamada con más de 40 parámetros comerciales. Nuestro sistema te muestra qué hacen tus vendedores, sin que tengas que preguntar."
        ],
        
        // 3. Tipo de clientes
        clientes: [
            "Ayudamos únicamente a negocios que tienen flujo constante de leads, ya invierten mínimo 500 USD al mes en ads, tienen equipo comercial (asesores, closers, SDRs) y venden servicios como inmobiliarias, agencias de viaje, coaching de alto ticket, consultoras, SaaS con ventas consultivas.",
            "No trabajamos con emprendedores sin leads, negocios sin inversión en publicidad, personas que buscan marketing barato o community managers, negocios sin equipo comercial, o quienes no tienen capacidad de implementar procesos.",
            "Trabajamos solo con negocios que ya tienen flujo de leads. No hacemos marketing; optimizamos lo que ya tienes."
        ],
        
        // 4. ¿Qué entregamos exactamente?
        entregamos: [
            "Entregamos un ecosistema de datos integrado que conecta ads → leads → llamadas → videollamadas → CRM. Un panel central donde se ve todo, seguimiento automático de cada lead, auditoría automática de llamadas con grabación, transcripción y análisis por IA con más de 40 parámetros comerciales.",
            "También entregamos auditoría automática de reuniones (Zoom/Meet) con transcripción y análisis por IA, actualización automática del CRM (cambiamos etapas según lo que pasó en la llamada, marcamos leads como calificados automáticamente, actualizamos campos de presupuesto, urgencia, decisión, objeciones).",
            "Incluimos auditoría automática de Ads (identifica campañas que traen compradores vs curiosos, recomienda dónde invertir, señala anuncios que traen leads basura) y reportería inteligente con dashboards en tiempo real, alertas automáticas, resúmenes semanales y chat para 'hablar con los datos'.",
            "Actualizamos tu CRM automáticamente según lo que pasó en la llamada. Te decimos exactamente por qué tu equipo no está cerrando."
        ],
        
        // 5. ¿Qué NO hacemos?
        noHacemos: [
            "No somos una agencia de marketing tradicional. No hacemos contenido ni community management, no manejamos redes sociales, no montamos campañas de ads (a menos que se negocie aparte), no generamos leads desde cero.",
            "No trabajamos si facturan menos de 5k USD, no trabajamos con personas sin equipo comercial, no hacemos implementaciones técnicas sin estrategia comercial. El objetivo es darte control total de tu proceso comercial.",
            "No hacemos marketing; optimizamos lo que ya tienes. No trabajamos con negocios sin flujo de leads o sin inversión en publicidad."
        ],
        
        // 6. Preguntas frecuentes - Operación
        operacion: {
            integracion: "Sí, nos conectamos con tu CRM (GoHighLevel o sistemas propios). La conexión se hace mediante APIs y webhooks. No es obligatorio tener GoHighLevel, trabajamos con diferentes sistemas de CRM.",
            plataformas: "Integramos con Meta Ads, TikTok Ads, GoHighLevel, sistemas de CRM propios, Zoom, Google Meet, y sistemas de telefonía. Todo se conecta en un solo panel centralizado.",
            iaEscucha: "Sí, nuestra IA analiza todas las llamadas y videollamadas automáticamente. Puedes ver las transcripciones completas y el análisis detallado con más de 40 parámetros comerciales.",
            transcripciones: "Sí, todas las llamadas y videollamadas se transcriben automáticamente y puedes acceder a ellas en cualquier momento desde el dashboard.",
            crmNoActualiza: "Si tu equipo no actualiza el CRM, nuestro sistema lo hace automáticamente. Actualizamos etapas, campos, etiquetas según lo que pasa en las llamadas, sin necesidad de intervención manual.",
            revisarLlamadas: "Sí, puedes ver exactamente cuántas veces un vendedor llamó a un lead, cuándo, cuánto duró cada llamada, y si el lead contestó o no."
        },
        
        // Preguntas frecuentes - Alcances
        alcances: {
            montarCampañas: "No montamos campañas de ads a menos que se negocie aparte. Nos enfocamos en optimizar lo que ya tienes y darte control de tu proceso comercial.",
            traerLeads: "No generamos leads desde cero. Trabajamos con negocios que ya tienen flujo constante de leads y los ayudamos a optimizar su proceso para cerrar más ventas.",
            atenderConversaciones: "No atendemos conversaciones directamente. Nuestro sistema analiza y audita las conversaciones de tu equipo para darte insights y control."
        },
        
        // Preguntas frecuentes - Resultados
        resultados: {
            tiempoResultados: "Los resultados se empiezan a ver desde la primera semana con los reportes automáticos. El análisis completo del proceso comercial toma aproximadamente 2-4 semanas para tener datos suficientes.",
            duplicarVentas: "El objetivo es aumentar ventas sin aumentar el presupuesto en ads, corrigiendo el proceso comercial. Los resultados dependen de la implementación y seguimiento de las recomendaciones.",
            vendedoresNoSiguen: "Nuestro sistema identifica automáticamente si tus vendedores siguen el proceso. Te damos datos específicos de qué están haciendo mal y recomendaciones para corregirlo."
        },
        
        // Preguntas frecuentes - Requisitos
        requisitos: {
            ghl: "No es obligatorio tener GoHighLevel. Trabajamos con diferentes sistemas de CRM, incluyendo sistemas propios mediante APIs.",
            inversionAds: "Requerimos que ya inviertas mínimo 500 USD al mes en ads. Trabajamos con negocios que ya tienen flujo de leads.",
            equipoComercial: "Sí, es necesario tener equipo comercial (asesores, closers, SDRs). No trabajamos con negocios sin equipo comercial."
        },
        
        // Preguntas frecuentes - Soporte
        soporte: {
            como: "Tenemos soporte continuo durante la implementación y después. El equipo te ayuda a entender la herramienta y a interpretar los datos.",
            onboarding: "Sí, tenemos un proceso de onboarding donde te explicamos cómo funciona el sistema, cómo interpretar los datos y cómo usar el Director Comercial IA.",
            equipoNoEntiende: "Ofrecemos capacitación y soporte para que tu equipo entienda la herramienta. También puedes usar el Director Comercial IA para hacer preguntas sobre los datos."
        },
        
        // Promesa central
        promesa: [
            "Damos control total del área comercial usando datos y automatización. Descubrimos por qué no vendes y te ayudamos a corregirlo.",
            "El objetivo es darte control total de tu proceso comercial. Te decimos exactamente por qué tu equipo no está cerrando."
        ],
        
        // Transformación
        transformacion: [
            "Tu negocio pasa de vendedores improvisando, no saber qué pasó con cada lead, llamadas no registradas, decisiones basadas en suposiciones, pérdida de ventas por falta de control... A datos claros, equipo comercial supervisado automáticamente, llamadas y videollamadas auditadas, CRM actualizado sin intervención humana, y más cierres con el mismo presupuesto.",
            "Transformamos tu negocio de decisiones basadas en suposiciones a decisiones basadas en datos reales. De vendedores sin control a supervisión automática completa."
        ],
        
        // Respuestas sobre datos del negocio (ejemplos)
        datos: [
            "Puedo ayudarte con información sobre llamadas, leads, asesores, métricas y más. ¿Qué te gustaría saber específicamente?",
            "Basado en los datos de esta semana, tienes 362 llamadas realizadas, 128 leads calificados y 95 reuniones agendadas.",
            "El costo por lead actual es de $125, el costo por reunión es de $95, y el costo por venta es de $1,250.",
            "Tu mejor vendedor esta semana es Carlos Ramírez con una conversión del 10% y 11 reuniones realizadas."
        ],
        
        // Respuestas variadas sobre anuncios
        anuncios: [
            "El anuncio ganador esta semana es el 'Video Testimonios' con 52 leads generados y un CPL de $1.19. Este anuncio tiene mejor retención porque conecta emocionalmente con el público objetivo mostrando casos de éxito reales.",
            "El mejor rendimiento lo tiene el 'Anuncio de Simulador de Crédito' con 44 leads y CPL de $1.36. Funciona bien porque genera alta curiosidad y atrae a personas con intención real de inversión.",
            "El anuncio 'Terreno en Preventa' está generando leads de alta calidad. Tiene un CPL de $1.45 y una tasa de conversión a reunión del 28%, superior al promedio.",
            "El anuncio 'Video Tour 360' tiene bajo rendimiento con CPL de $2.09. Aunque es visualmente atractivo, no comunica claramente el beneficio y genera más curiosidad que intención real.",
            "El anuncio 'Imagen Estática del Proyecto' tiene el peor CPL ($2.58) y cero leads calificados. Recomiendo pausarlo porque no está generando interés real en el público objetivo."
        ],
        
        // Respuestas específicas sobre qué anuncio apagar
        anuncioApagar: [
            "Deberías apagar el anuncio 'Imagen Estática del Proyecto'. Tiene un CPL de $2.58 (muy por encima del promedio de $1.41), alto gasto en publicidad y un ROAS bajo. Además, no ha generado ningún lead calificado esta semana.",
            "El anuncio 'Video Tour 360' es el que menos te rinde. Con un CPL de $2.09 y muy pocas conversaciones, está consumiendo presupuesto sin generar resultados. Su ROAS es el más bajo de todos tus anuncios activos.",
            "Te recomiendo pausar el anuncio 'Imagen Estática'. Tiene alto costo por adquisición ($2.58), bajo ROAS y cero reuniones agendadas. Estás perdiendo dinero en este anuncio.",
            "El anuncio que deberías apagar es el 'Tour 360'. Genera muchas vistas pero casi ninguna conversión real. Su tasa de cierre es prácticamente cero y el costo por lead es 48% más alto que el promedio."
        ],
        
        // Respuestas sobre anuncios que no rinden
        anuncioNoRinde: [
            "El anuncio 'Imagen Estática del Proyecto' tiene el peor ROAS total esta semana. Con un gasto de $45 y solo 2 leads generados, tiene un ROAS de 0.8, muy por debajo del objetivo de 3.0.",
            "El peor rendimiento lo tiene el 'Video Tour 360' con un ROAS de 1.2. Aunque genera leads, el costo por adquisición es demasiado alto y la tasa de conversión a venta es muy baja.",
            "El anuncio que menos te rinde es 'Imagen Estática'. Tiene un ROAS de 0.9, lo que significa que por cada dólar invertido, solo recuperas $0.90. Estás perdiendo dinero con este anuncio.",
            "El 'Tour 360' tiene el peor ROAS con 1.1. Genera leads pero de muy baja calidad, lo que hace que el costo por venta sea extremadamente alto comparado con otros anuncios."
        ],
        
        // Respuestas sobre anuncios que traen personas que no asisten
        anuncioNoAsisten: [
            "El anuncio 'Video Tour 360' es el peor en asistencia. Genera 8 agendas pero solo 2 shows (25% de asistencia). Los leads que vienen de este anuncio no tienen suficiente compromiso.",
            "El anuncio 'Imagen Estática' tiene la peor tasa de no-show. De 5 agendas generadas, solo 1 asistió (20% de asistencia). Este anuncio atrae curiosos, no compradores reales.",
            "El anuncio que más personas que no asisten trae es el 'Tour 360'. Tiene una tasa de no-show del 75%, lo que indica que los leads no están realmente interesados en comprar.",
            "El 'Anuncio de Imagen Estática' genera muchas agendas pero casi nadie asiste. Solo el 20% de las personas agendadas realmente se presentan a la reunión, lo que desperdicia tiempo del equipo."
        ],
        
        // Respuestas sobre anuncios que traen leads que no compran
        anuncioNoCompran: [
            "El anuncio 'Video Tour 360' trae leads que no compran. Genera 8 agendas pero solo 1 cierre (12.5% de tasa de cierre). Los leads tienen curiosidad pero no intención real de compra.",
            "El anuncio 'Imagen Estática' tiene el peor desempeño en cierres. De 5 agendas, cero cierres. Este anuncio atrae a personas que solo quieren información, no compradores.",
            "El anuncio que más leads que no compran trae es el 'Tour 360'. Alto volumen de agendas pero muy bajo porcentaje de cierre (15%), lo que indica que los leads no están calificados.",
            "El 'Anuncio de Imagen Estática' genera leads de baja calidad. Aunque algunos agendan reunión, ninguno cierra. Esto sugiere que el anuncio no está atrayendo al público objetivo correcto."
        ],
        
        // Respuestas sobre mejor tasa de cierre
        mejorTasaCierre: [
            "El anuncio con la mejor tasa de cierre es 'Video Testimonios' con un 42% de conversión de agenda a cierre. De 17 reuniones agendadas, 7 cerraron. Este anuncio atrae compradores reales.",
            "El 'Anuncio de Simulador de Crédito' tiene la mejor tasa de cierre con 38%. De 10 reuniones, 4 cerraron. Los leads que vienen de este anuncio están más calificados y listos para comprar.",
            "El mejor anuncio en tasa de cierre es 'Video Testimonios' con 40%. Los testimonios generan confianza y atraen a personas que ya están decididas a invertir.",
            "El 'Anuncio de Terreno en Preventa' tiene una excelente tasa de cierre del 35%. Los leads que vienen de este anuncio tienen alta intención de compra y cierran más rápido."
        ],
        
        // Respuestas variadas sobre vendedores/closers
        vendedores: [
            "Tu mejor vendedor esta semana es Carlos Ramírez con 382 llamadas realizadas, 183 contestadas (48% de contacto) y 12 reuniones agendadas. Su fortaleza es que hace discovery profundo y conecta bien con las objeciones del cliente.",
            "María González tiene el mejor desempeño en conversión a reunión con un 10.5%. Hace 8-10 intentos por lead en las primeras 24 horas, lo que le permite contactar al 65% de sus leads asignados.",
            "Juan Pérez es el más rápido en speed-to-lead con promedio de 8 minutos. Esto le da ventaja porque contacta a los leads cuando aún están calientes y recuerdan el anuncio.",
            "Ana Martínez tiene la mejor tasa de asistencia a reuniones (78%). Su secreto es hacer un discovery completo antes de agendar, asegurándose de que el lead tenga presupuesto e interés real.",
            "Luis Fernández necesita mejorar. Solo hace 1.5 intentos por lead en promedio y su tasa de contacto es del 29%. Si aumentara a 6 intentos, podría duplicar sus reuniones.",
            "Sofía López tiene buen rapport pero falla en el cierre. El 60% de sus llamadas terminan sin definir un siguiente paso claro. Necesita trabajar en microcierres y urgencia."
        ],
        
        // Respuestas sobre peor tasa de cierre de closers
        peorTasaCierre: [
            "El closer con peor tasa de cierre es Sofía López con solo 12% de conversión. De 15 agendas asignadas, solo cerró 2. Necesita mejorar su técnica de cierre y manejo de objeciones.",
            "Luis Fernández tiene la peor tasa de cierre con 10%. De 20 agendas, solo cerró 2. El problema es que no profundiza en el discovery y no conecta con las necesidades reales del cliente.",
            "El peor desempeño en cierres lo tiene Ana Martínez con 11%. Aunque tiene buena tasa de asistencia, falla al momento de cerrar. Necesita trabajar en crear urgencia y definir próximos pasos claros.",
            "Sofía López tiene la peor tasa de cierre esta semana (12%). Sus reuniones terminan sin compromiso y no logra convertir las oportunidades. Necesita mejorar su técnica de cierre."
        ],
        
        // Respuestas sobre mejor tasa de cierre de closers
        mejorTasaCierreCloser: [
            "El closer con mejor tasa de cierre es Carlos Ramírez con 45%. De 12 reuniones, cerró 5. Su fortaleza es que hace discovery profundo y sabe manejar objeciones efectivamente.",
            "María González tiene la mejor tasa de cierre con 42%. De 10 reuniones, cerró 4. Su secreto es calificar bien antes de agendar y crear urgencia al final de la reunión.",
            "El mejor desempeño en cierres lo tiene Juan Pérez con 40%. Cierra 4 de cada 10 reuniones porque conecta bien con las emociones del cliente y presenta soluciones personalizadas.",
            "Carlos Ramírez es el mejor closer con 45% de tasa de cierre. Su técnica incluye discovery completo, presentación personalizada y cierres con urgencia, lo que le da excelentes resultados."
        ],
        
        // Respuestas sobre quién facturó más
        facturoMas: [
            "El closer que más facturó esta semana es Carlos Ramírez con $12,500 en cash collected. Cerró 5 ventas con un ticket promedio de $2,500.",
            "María González facturó más esta semana con $11,200. Cerró 4 ventas, siendo la más productiva del equipo en términos de ingresos.",
            "El mayor facturador es Juan Pérez con $10,800. Aunque cerró menos reuniones, sus ventas tienen un ticket promedio más alto.",
            "Carlos Ramírez facturó $12,500 esta semana, siendo el líder del equipo. Sus cierres son consistentes y tiene buena relación con los clientes."
        ],
        
        // Respuestas sobre quién desaprovechó más agendas
        desaprovechoAgendas: [
            "Luis Fernández desaprovechó más agendas esta semana. Le asignaron 20 reuniones pero solo cerró 2, desperdiciando 18 oportunidades. Necesita mejorar urgentemente su técnica de cierre.",
            "Sofía López es la que más desaprovechó. De 15 agendas asignadas, solo cerró 2, perdiendo 13 oportunidades. Su tasa de conversión es muy baja comparada con el resto del equipo.",
            "El que más desaprovechó es Ana Martínez. Aunque tiene buena asistencia, de 18 reuniones solo cerró 2, desperdiciando 16 oportunidades valiosas.",
            "Luis Fernández desperdició 18 de 20 agendas asignadas. Con solo 2 cierres, tiene la peor eficiencia del equipo. Necesita capacitación urgente en técnicas de cierre."
        ],
        
        // Respuestas sobre tasa de no-show más alta
        noShowAlto: [
            "El closer con la tasa de no-show más alta es Sofía López con 40%. De 15 agendas asignadas, 6 no asistieron. Esto indica que no está calificando bien a los leads antes de agendar.",
            "Luis Fernández tiene la peor tasa de no-show con 45%. De 20 agendas, 9 no asistieron. El problema es que agenda sin hacer discovery completo y sin crear compromiso.",
            "La tasa de no-show más alta la tiene Ana Martínez con 38%. De 18 agendas, 7 no asistieron. Necesita mejorar su proceso de calificación y crear más urgencia al agendar.",
            "Sofía López tiene 40% de no-shows. Esto sugiere que los leads que agenda no están realmente comprometidos. Debería hacer mejor discovery y confirmar el interés antes de agendar."
        ],
        
        // Respuestas variadas sobre llamadas
        llamadas: [
            "Esta semana se realizaron 312 llamadas a 198 leads diferentes. El 42% contestó al menos una vez. El problema es que el promedio de intentos es solo 1.8, cuando debería ser mínimo 5-6 para maximizar el contacto.",
            "El speed-to-lead promedio es de 2 horas 41 minutos, muy por encima del ideal de menos de 15 minutos. Solo el 18% de las llamadas se hacen en los primeros 15 minutos, cuando el lead aún está caliente.",
            "De las 84 llamadas contestadas, solo 27 terminaron en reunión agendada (32% de conversión). El problema principal es que muchos asesores no hacen discovery profundo antes de proponer la reunión.",
            "El 63% de los leads que contestaron no recordaban el anuncio o estaban confundidos. Esto obliga a los asesores a gastar tiempo explicando desde cero en lugar de avanzar en el proceso comercial.",
            "Solo el 42% de los asesores pregunta por presupuesto, motivo de compra y plazo antes de agendar reunión. Esto explica por qué muchas reuniones se caen o no asisten - no están bien calificadas.",
            "La tasa de contacto mejoró esta semana al 42%, pero aún está por debajo del potencial. Si aumentáramos los intentos a 6 por lead en las primeras 24 horas, podríamos llegar al 70% de contacto."
        ],
        
        // Respuestas variadas sobre métricas generales
        metricas: [
            "Esta semana tienes 138 leads generados con una inversión de $195 USD. El CPL promedio es de $1.41, que está dentro del rango óptimo. El problema no es la cantidad de leads, sino cómo se están gestionando.",
            "El costo por venta actual es de $1,250. Desglosado: $1.41 por lead, $18 por llamada, $95 por reunión. Si mejoráramos la conversión de reunión a venta del 56% al 70%, podríamos reducir el costo por venta a $1,000.",
            "Tienes 27 reuniones agendadas pero solo 15 asistieron (56% de asistencia). De esas 15, solo 9 están calificadas como oportunidades reales. El resto son curiosos o sin presupuesto claro.",
            "El speed-to-lead promedio de 2h 41min está afectando seriamente la conversión. Si lo redujéramos a menos de 15 minutos, podríamos aumentar las reuniones agendadas en un 40-50%.",
            "La inversión semanal de $195 generó 138 leads. Si volviéramos al presupuesto óptimo de $1,050-1,200 mensuales, podríamos generar 160-180 leads por semana y mantener un CPL estable."
        ]
    };

    function addMessage(text, isUser = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        
        if (isUser) {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>${text}</p>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-avatar aura-avatar">✨</div>
                <div class="message-content">
                    <p>${text}</p>
                </div>
            `;
        }
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Almacenar historial de respuestas para evitar repetir exactamente lo mismo
    let responseHistory = [];
    const MAX_HISTORY = 10;
    
    function getRandomResponse(responses, excludeIndex = -1) {
        if (responses.length === 0) return "";
        if (responses.length === 1) return responses[0];
        
        let attempts = 0;
        let index;
        do {
            index = Math.floor(Math.random() * responses.length);
            attempts++;
        } while (index === excludeIndex && attempts < 10);
        
        return responses[index];
    }
    
    function getBotResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Detectar preguntas específicas sobre qué anuncio apagar
        if ((message.includes('anuncio') && (message.includes('apagar') || message.includes('pausar') || message.includes('quitar'))) ||
            (message.includes('qué anuncio') && (message.includes('no rinde') || message.includes('mal') || message.includes('peor')))) {
            const response = getRandomResponse(chatResponses.anuncioApagar);
            responseHistory.push(response);
            if (responseHistory.length > MAX_HISTORY) responseHistory.shift();
            return response;
        }
        
        // Detectar preguntas sobre anuncios que no rinden
        if (message.includes('anuncio') && (message.includes('no rinde') || message.includes('no funciona') || 
            message.includes('peor rendimiento') || message.includes('peor roas'))) {
            const response = getRandomResponse(chatResponses.anuncioNoRinde);
            responseHistory.push(response);
            if (responseHistory.length > MAX_HISTORY) responseHistory.shift();
            return response;
        }
        
        // Detectar preguntas sobre anuncios que traen personas que no asisten
        if (message.includes('anuncio') && (message.includes('no asisten') || message.includes('no-show') || 
            message.includes('no se presentan') || message.includes('no vienen'))) {
            const response = getRandomResponse(chatResponses.anuncioNoAsisten);
            responseHistory.push(response);
            if (responseHistory.length > MAX_HISTORY) responseHistory.shift();
            return response;
        }
        
        // Detectar preguntas sobre anuncios que traen leads que no compran
        if (message.includes('anuncio') && (message.includes('no compran') || message.includes('no cierran') || 
            message.includes('no venden') || message.includes('no compra'))) {
            const response = getRandomResponse(chatResponses.anuncioNoCompran);
            responseHistory.push(response);
            if (responseHistory.length > MAX_HISTORY) responseHistory.shift();
            return response;
        }
        
        // Detectar preguntas sobre mejor tasa de cierre de anuncios
        if (message.includes('anuncio') && (message.includes('mejor tasa') || message.includes('mejor cierre') || 
            message.includes('mejor conversión'))) {
            const response = getRandomResponse(chatResponses.mejorTasaCierre);
            responseHistory.push(response);
            if (responseHistory.length > MAX_HISTORY) responseHistory.shift();
            return response;
        }
        
        // Detectar preguntas sobre peor tasa de cierre de closers
        if ((message.includes('closer') || message.includes('vendedor')) && 
            (message.includes('peor tasa') || message.includes('peor cierre') || message.includes('peor conversión'))) {
            const response = getRandomResponse(chatResponses.peorTasaCierre);
            responseHistory.push(response);
            if (responseHistory.length > MAX_HISTORY) responseHistory.shift();
            return response;
        }
        
        // Detectar preguntas sobre mejor tasa de cierre de closers
        if ((message.includes('closer') || message.includes('vendedor')) && 
            (message.includes('mejor tasa') || message.includes('mejor cierre') || message.includes('mejor conversión'))) {
            const response = getRandomResponse(chatResponses.mejorTasaCierreCloser);
            responseHistory.push(response);
            if (responseHistory.length > MAX_HISTORY) responseHistory.shift();
            return response;
        }
        
        // Detectar preguntas sobre quién facturó más
        if ((message.includes('quién') || message.includes('closer') || message.includes('vendedor')) && 
            (message.includes('facturó') || message.includes('factura') || message.includes('vendió más') || 
            message.includes('más dinero') || message.includes('más ingresos'))) {
            const response = getRandomResponse(chatResponses.facturoMas);
            responseHistory.push(response);
            if (responseHistory.length > MAX_HISTORY) responseHistory.shift();
            return response;
        }
        
        // Detectar preguntas sobre quién desaprovechó más agendas
        if ((message.includes('quién') || message.includes('closer') || message.includes('vendedor')) && 
            (message.includes('desaprovechó') || message.includes('desperdició') || message.includes('perdió') || 
            message.includes('no aprovechó'))) {
            const response = getRandomResponse(chatResponses.desaprovechoAgendas);
            responseHistory.push(response);
            if (responseHistory.length > MAX_HISTORY) responseHistory.shift();
            return response;
        }
        
        // Detectar preguntas sobre tasa de no-show más alta
        if ((message.includes('closer') || message.includes('vendedor')) && 
            (message.includes('no-show') || message.includes('no asisten') || message.includes('no se presentan') || 
            message.includes('tasa de no-show'))) {
            const response = getRandomResponse(chatResponses.noShowAlto);
            responseHistory.push(response);
            if (responseHistory.length > MAX_HISTORY) responseHistory.shift();
            return response;
        }
        
        // Detectar preguntas generales sobre anuncios (prioridad media)
        if (message.includes('anuncio') || message.includes('ad') || message.includes('campaña') || 
            message.includes('publicidad') || message.includes('ads') || message.includes('anuncios ganador') ||
            message.includes('anuncios perdedor') || message.includes('mejor anuncio') || message.includes('peor anuncio') ||
            message.includes('cpl') || message.includes('costo por lead')) {
            const response = getRandomResponse(chatResponses.anuncios);
            responseHistory.push(response);
            if (responseHistory.length > MAX_HISTORY) responseHistory.shift();
            return response;
        }
        
        // Detectar preguntas generales sobre vendedores/closers (prioridad media)
        if (message.includes('vendedor') || message.includes('closer') || message.includes('asesor') ||
            message.includes('mejor vendedor') || message.includes('peor vendedor') || message.includes('quién vende más') ||
            message.includes('desempeño') || (message.includes('equipo') && message.includes('comercial')) ||
            (message.includes('quién') && (message.includes('llama') || message.includes('vende') || message.includes('cierra')))) {
            const response = getRandomResponse(chatResponses.vendedores);
            responseHistory.push(response);
            if (responseHistory.length > MAX_HISTORY) responseHistory.shift();
            return response;
        }
        
        // Detectar preguntas sobre llamadas (prioridad alta)
        if (message.includes('llamada') || message.includes('llamadas') || message.includes('llamó') ||
            message.includes('contacto') || message.includes('speed to lead') || message.includes('intentos') ||
            message.includes('cuántas veces') || message.includes('contestó') || message.includes('contestaron')) {
            const response = getRandomResponse(chatResponses.llamadas);
            responseHistory.push(response);
            if (responseHistory.length > MAX_HISTORY) responseHistory.shift();
            return response;
        }
        
        // Detectar preguntas sobre métricas generales
        if (message.includes('métrica') || message.includes('métricas') || message.includes('dato') ||
            message.includes('estadística') || message.includes('número') || message.includes('cifra') ||
            message.includes('costo por venta') || message.includes('costo por reunión') || message.includes('conversión')) {
            const response = getRandomResponse(chatResponses.metricas);
            responseHistory.push(response);
            if (responseHistory.length > MAX_HISTORY) responseHistory.shift();
            return response;
        }
        
        // 1. ¿Qué hace exactamente nuestro negocio?
        if (message.includes('qué hace') || message.includes('qué es') || message.includes('qué hacen') || 
            message.includes('qué ofrecen') || message.includes('servicio') || message.includes('autokpi') ||
            message.includes('plataforma') || message.includes('qué hacen ustedes')) {
            return getRandomResponse(chatResponses.queHacemos);
        }
        
        // 2. Resultado final
        if (message.includes('resultado') || message.includes('qué obtengo') || message.includes('qué recibo') ||
            message.includes('beneficio') || message.includes('qué logro') || message.includes('parámetros')) {
            return getRandomResponse(chatResponses.resultado);
        }
        
        // 3. Tipo de clientes
        if (message.includes('cliente') || message.includes('trabajan con') || message.includes('quiénes') ||
            message.includes('requisito') || message.includes('necesito') || message.includes('requiero') ||
            message.includes('inversión mínima') || message.includes('500 usd')) {
            return getRandomResponse(chatResponses.clientes);
        }
        
        // 4. ¿Qué entregamos?
        if (message.includes('entreg') || message.includes('incluye') || message.includes('qué viene') ||
            message.includes('qué incluye') || message.includes('qué contiene')) {
            return getRandomResponse(chatResponses.entregamos);
        }
        
        // 5. ¿Qué NO hacemos?
        if (message.includes('no hacen') || message.includes('no ofrecen') || message.includes('no trabajan') ||
            message.includes('no incluye') || message.includes('límite') || message.includes('alcance') ||
            message.includes('marketing tradicional') || message.includes('community') || message.includes('redes sociales')) {
            return getRandomResponse(chatResponses.noHacemos);
        }
        
        // Operación - Integración
        if (message.includes('conecta') || message.includes('integra') || message.includes('ghl') ||
            message.includes('go high level') || (message.includes('crm') && !message.includes('anuncio'))) {
            return chatResponses.operacion.integracion;
        }
        
        // Operación - Plataformas
        if (message.includes('plataforma') || message.includes('sistema') || message.includes('compatible')) {
            return chatResponses.operacion.plataformas;
        }
        
        // Operación - IA escucha
        if (message.includes('ia escucha') || message.includes('escucha llamadas') || message.includes('analiza llamadas')) {
            return chatResponses.operacion.iaEscucha;
        }
        
        // Operación - Transcripciones
        if (message.includes('transcripción') || message.includes('transcripciones') || message.includes('grabación')) {
            return chatResponses.operacion.transcripciones;
        }
        
        // Operación - CRM no actualiza
        if (message.includes('crm no actualiza') || message.includes('no actualizan') || message.includes('actualización automática')) {
            return chatResponses.operacion.crmNoActualiza;
        }
        
        // Operación - Revisar llamadas (solo si no es pregunta específica sobre datos)
        if ((message.includes('revisar') || message.includes('ver llamadas')) && 
            !message.includes('cuántas') && !message.includes('cuántos')) {
            return chatResponses.operacion.revisarLlamadas;
        }
        
        // Alcances - Montar campañas
        if (message.includes('montan') || message.includes('hacen campañas') || message.includes('crean ads')) {
            return chatResponses.alcances.montarCampañas;
        }
        
        // Alcances - Traer leads
        if (message.includes('traen leads') || message.includes('generan leads') || message.includes('conseguir leads')) {
            return chatResponses.alcances.traerLeads;
        }
        
        // Alcances - Atender conversaciones
        if (message.includes('atienden') || message.includes('responden') || message.includes('atender conversaciones')) {
            return chatResponses.alcances.atenderConversaciones;
        }
        
        // Resultados - Tiempo
        if ((message.includes('tiempo') || message.includes('cuándo') || message.includes('cuánto tarda')) &&
            message.includes('resultados')) {
            return chatResponses.resultados.tiempoResultados;
        }
        
        // Resultados - Duplicar ventas
        if (message.includes('duplicar') || message.includes('aumentar ventas') || message.includes('más ventas')) {
            return chatResponses.resultados.duplicarVentas;
        }
        
        // Resultados - Vendedores no siguen
        if (message.includes('vendedor no sigue') || message.includes('no cumplen') || message.includes('no siguen proceso')) {
            return chatResponses.resultados.vendedoresNoSiguen;
        }
        
        // Requisitos - GHL
        if (message.includes('ghl obligatorio') || message.includes('go high level obligatorio') || message.includes('necesito ghl')) {
            return chatResponses.requisitos.ghl;
        }
        
        // Requisitos - Inversión ads (solo si es pregunta sobre requisitos, no métricas)
        if ((message.includes('inversión') || message.includes('cuánto debo invertir')) && 
            (message.includes('requisito') || message.includes('necesito') || message.includes('mínimo'))) {
            return chatResponses.requisitos.inversionAds;
        }
        
        // Requisitos - Equipo comercial (solo si es pregunta sobre requisitos)
        if ((message.includes('equipo comercial') || message.includes('necesito equipo')) &&
            (message.includes('requisito') || message.includes('necesito') || message.includes('requiero'))) {
            return chatResponses.requisitos.equipoComercial;
        }
        
        // Soporte
        if (message.includes('soporte') || message.includes('ayuda') || message.includes('onboarding') ||
            message.includes('capacitación') || message.includes('no entiende')) {
            if (message.includes('onboarding')) return chatResponses.soporte.onboarding;
            if (message.includes('no entiende') || message.includes('capacitación')) return chatResponses.soporte.equipoNoEntiende;
            return chatResponses.soporte.como;
        }
        
        // Promesa central
        if (message.includes('promesa') || message.includes('objetivo') || message.includes('propuesta')) {
            return getRandomResponse(chatResponses.promesa);
        }
        
        // Transformación
        if (message.includes('transformación') || message.includes('cambio') || message.includes('antes y después')) {
            return getRandomResponse(chatResponses.transformacion);
        }
        
        // Preguntas genéricas sobre leads o reuniones (sin ser específicas)
        if ((message.includes('lead') || message.includes('reunión')) && 
            !message.includes('cuántas') && !message.includes('cuántos') && 
            !message.includes('anuncio') && !message.includes('vendedor')) {
            return getRandomResponse(chatResponses.datos);
        }
        
        // Respuesta por defecto
        return "Puedo ayudarte con información sobre tu negocio (llamadas, leads, asesores, métricas, anuncios) o sobre el servicio AutoKPI. ¿Sobre qué te gustaría saber más? Puedes preguntarme sobre qué hacemos, qué entregamos, requisitos, resultados, o cualquier duda sobre el servicio.";
    }

    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        // Agregar mensaje del usuario
        addMessage(message, true);
        chatInput.value = '';
        
        // Simular delay y respuesta del bot
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, false);
        }, 800);
    }

    if (chatInput && chatSendBtn) {
        chatSendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Animación del Roadmap
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
                timelineObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });

    // Alinear el nodo central con el asesor del medio
    function alignCentralNode() {
        const centralNode = document.querySelector('.map-node.central');
        const asesores = document.querySelectorAll('.map-node.asesor');
        const mapNodesRow = document.querySelector('.map-nodes-row');
        const mapContainer = document.querySelector('.map-container');
        
        if (centralNode && asesores.length >= 2 && mapNodesRow && mapContainer) {
            // El asesor del medio es el segundo (índice 1)
            const asesorMedio = asesores[1];
            
            // Esperar a que los elementos estén completamente renderizados
            requestAnimationFrame(() => {
                const containerRect = mapContainer.getBoundingClientRect();
                const rowRect = mapNodesRow.getBoundingClientRect();
                const asesorRect = asesorMedio.getBoundingClientRect();
                
                // Calcular el centro del asesor
                const asesorCenterX = asesorRect.left + (asesorRect.width / 2);
                
                // La posición relativa al contenedor (el contenedor tiene padding)
                // El left del nodo se mide desde el borde izquierdo del contenedor (incluyendo padding)
                const relativeX = asesorCenterX - containerRect.left;
                
                // Posicionar el nodo central
                centralNode.style.left = relativeX + 'px';
                centralNode.style.transform = 'translateX(-50%)';
            });
        }
    }

    // Ejecutar múltiples veces para asegurar la alineación
    const alignMultipleTimes = () => {
        alignCentralNode();
        setTimeout(alignCentralNode, 50);
        setTimeout(alignCentralNode, 200);
        setTimeout(alignCentralNode, 500);
        setTimeout(alignCentralNode, 1000);
    };
    
    alignMultipleTimes();
    
    // Ejecutar al redimensionar
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(alignMultipleTimes, 100);
    });
    
    // Ejecutar cuando todo cargue
    window.addEventListener('load', alignMultipleTimes);
    
    // Usar MutationObserver para detectar cambios en el DOM
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        const domObserver = new MutationObserver(() => {
            alignCentralNode();
        });
        
        domObserver.observe(mapContainer, { 
            childList: true, 
            subtree: true, 
            attributes: true,
            attributeFilter: ['style', 'class']
        });
    }
});

// Efecto parallax sutil mejorado
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const problemSection = document.querySelector('.problem-section');
            const solutionSection = document.querySelector('.solution-section');
            
            if (problemSection) {
                const rect = problemSection.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isVisible) {
                    const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
                    const yPos = scrollProgress * 10;
                    problemSection.style.transform = `translateY(${yPos}px)`;
                }
            }
            
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });
