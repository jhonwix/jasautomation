const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const form = document.querySelector('#whatsappForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const number = '573012096824';
    const name = document.querySelector('#name').value.trim();
    const topic = document.querySelector('#topic').value.trim();
    const message = document.querySelector('#message').value.trim();
    const optin = document.querySelector('#optin').checked;
    if (!optin) {
      alert('Debes aceptar el contacto por WhatsApp para continuar.');
      return;
    }
    const text = `Hola, soy ${name}. Motivo: ${topic}. Mensaje: ${message}. Acepto recibir respuesta por WhatsApp sobre esta solicitud.`;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
}
