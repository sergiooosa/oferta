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
                <div class="message-avatar">🤖</div>
                <div class="message-content">
                    <p>${text}</p>
                </div>
            `;
        }
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // 1. ¿Qué hace exactamente nuestro negocio?
        if (message.includes('qué hace') || message.includes('qué es') || message.includes('qué hacen') || 
            message.includes('qué ofrecen') || message.includes('servicio') || message.includes('autokpi') ||
            message.includes('plataforma') || message.includes('qué hacen ustedes')) {
            return chatResponses.queHacemos[Math.floor(Math.random() * chatResponses.queHacemos.length)];
        }
        
        // 2. Resultado final
        if (message.includes('resultado') || message.includes('qué obtengo') || message.includes('qué recibo') ||
            message.includes('beneficio') || message.includes('qué logro') || message.includes('parámetros')) {
            return chatResponses.resultado[Math.floor(Math.random() * chatResponses.resultado.length)];
        }
        
        // 3. Tipo de clientes
        if (message.includes('cliente') || message.includes('trabajan con') || message.includes('quiénes') ||
            message.includes('requisito') || message.includes('necesito') || message.includes('requiero') ||
            message.includes('inversión mínima') || message.includes('500 usd') || message.includes('equipo comercial')) {
            return chatResponses.clientes[Math.floor(Math.random() * chatResponses.clientes.length)];
        }
        
        // 4. ¿Qué entregamos?
        if (message.includes('entreg') || message.includes('incluye') || message.includes('qué viene') ||
            message.includes('qué incluye') || message.includes('qué contiene')) {
            return chatResponses.entregamos[Math.floor(Math.random() * chatResponses.entregamos.length)];
        }
        
        // 5. ¿Qué NO hacemos?
        if (message.includes('no hacen') || message.includes('no ofrecen') || message.includes('no trabajan') ||
            message.includes('no incluye') || message.includes('límite') || message.includes('alcance') ||
            message.includes('marketing tradicional') || message.includes('community') || message.includes('redes sociales')) {
            return chatResponses.noHacemos[Math.floor(Math.random() * chatResponses.noHacemos.length)];
        }
        
        // Operación - Integración
        if (message.includes('conecta') || message.includes('integra') || message.includes('ghl') ||
            message.includes('go high level') || message.includes('crm')) {
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
        
        // Operación - Revisar llamadas
        if (message.includes('revisar') || message.includes('ver llamadas') || message.includes('cuántas veces llamó')) {
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
        if (message.includes('tiempo') || message.includes('cuándo') || message.includes('cuánto tarda') ||
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
        
        // Requisitos - Inversión ads
        if (message.includes('inversión') || message.includes('cuánto debo invertir') || message.includes('500 usd')) {
            return chatResponses.requisitos.inversionAds;
        }
        
        // Requisitos - Equipo comercial
        if (message.includes('equipo comercial') || message.includes('necesito equipo') || message.includes('vendedores')) {
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
            return chatResponses.promesa[Math.floor(Math.random() * chatResponses.promesa.length)];
        }
        
        // Transformación
        if (message.includes('transformación') || message.includes('cambio') || message.includes('antes y después')) {
            return chatResponses.transformacion[Math.floor(Math.random() * chatResponses.transformacion.length)];
        }
        
        // Detectar preguntas sobre datos del negocio
        if (message.includes('llamada') || message.includes('lead') || message.includes('asesor') || 
            message.includes('métrica') || message.includes('costo') || message.includes('venta') ||
            message.includes('reunión') || message.includes('cuánto') || message.includes('cuántas')) {
            return chatResponses.datos[Math.floor(Math.random() * chatResponses.datos.length)];
        }
        
        // Respuesta por defecto
        return "Puedo ayudarte con información sobre tu negocio (llamadas, leads, asesores, métricas) o sobre el servicio AutoKPI. ¿Sobre qué te gustaría saber más? Puedes preguntarme sobre qué hacemos, qué entregamos, requisitos, resultados, o cualquier duda sobre el servicio.";
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
