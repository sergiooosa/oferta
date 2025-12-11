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

    // Respuestas del chat (preparado para contexto futuro)
    const chatResponses = {
        // Respuestas sobre el servicio AutoKPI
        servicio: [
            "AutoKPI es una plataforma que te da control total de tu área comercial. Auditamos llamadas, actualizamos tu CRM automáticamente, medimos métricas en tiempo real y te damos reportes semanales.",
            "Sí, AutoKPI se integra con tu CRM de GHL (GoHighLevel) y actualiza automáticamente campos, etiquetas y etapas según lo que pasa en las llamadas.",
            "Los reportes se envían automáticamente todos los lunes por WhatsApp. Recibirás un reporte de Marketing y otro de Ventas con análisis completo de tu negocio.",
            "AutoKPI analiza todas las llamadas y videollamadas de tus asesores usando IA para identificar si siguen el proceso, qué tan bien manejan objeciones, y te da recomendaciones específicas.",
            "Sí, el Director Comercial IA tiene acceso a toda tu información: llamadas, transcripciones, datos de asesores, métricas. Puedes preguntarle cualquier cosa y te dará respuestas precisas con datos reales."
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
        
        // Detectar si es pregunta sobre el servicio
        if (message.includes('qué es') || message.includes('qué hace') || message.includes('cómo funciona') || 
            message.includes('servicio') || message.includes('autokpi') || message.includes('plataforma') ||
            message.includes('integra') || message.includes('reporte') || message.includes('análisis')) {
            return chatResponses.servicio[Math.floor(Math.random() * chatResponses.servicio.length)];
        }
        
        // Detectar preguntas sobre datos del negocio
        if (message.includes('llamada') || message.includes('lead') || message.includes('asesor') || 
            message.includes('métrica') || message.includes('costo') || message.includes('venta') ||
            message.includes('reunión') || message.includes('cuánto') || message.includes('cuántas')) {
            return chatResponses.datos[Math.floor(Math.random() * chatResponses.datos.length)];
        }
        
        // Respuesta por defecto
        return "Puedo ayudarte con información sobre tu negocio (llamadas, leads, asesores, métricas) o sobre el servicio AutoKPI. ¿Sobre qué te gustaría saber más?";
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
