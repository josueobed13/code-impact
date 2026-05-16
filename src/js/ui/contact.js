// ==========================
// 🔥 CONTACT FORM -> WHATSAPP
// ==========================

(function () {

    function initContactForm() {

        const form =
            document.getElementById(
                'contactForm'
            );

        if (!form) return;

        form.addEventListener(
            'submit',
            (e) => {

                e.preventDefault();

                const nombre =
                    document.getElementById('nombre')?.value || '';

                const correo =
                    document.getElementById('correo')?.value || '';

                const empresa =
                    document.getElementById('empresa')?.value || '';

                const servicio =
                    document.getElementById('servicio')?.value || '';

                const mensaje =
                    document.getElementById('mensaje')?.value || '';

                const texto = `
Hola CodeImpact Perú

Estoy interesado en sus servicios.

• Nombre: ${nombre}
• Correo: ${correo}
• Empresa: ${empresa}
• Servicio: ${servicio}

• Proyecto:
${mensaje}
                `;

                const url =
                    `https://wa.me/51970503691?text=${encodeURIComponent(texto)}`;

                window.open(
                    url,
                    '_blank'
                );
            }
        );
    }

    // ==========================
    // INIT SOLO SI EXISTE FORM
    // ==========================

    const contactForm =
        document.querySelector(
            'form.contact-form#contactForm'
        );

    if (contactForm) {
        initContactForm();
    }

})();