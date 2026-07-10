// Nav toggle
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('main-menu');

function openNav() {
  menu.classList.add('open');
  toggle.setAttribute('aria-expanded', 'true');
  toggle.classList.add('is-open');
}

function closeNav() {
  menu.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.classList.remove('is-open');
}

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.classList.contains('open') ? closeNav() : openNav();
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeNav();
  });
}

// WhatsApp contact form
const form = document.getElementById('whatsappForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const number = '573012096824';
    const name = document.getElementById('name').value.trim();
    const topic = document.getElementById('topic').value.trim();
    const message = document.getElementById('message').value.trim();
    const optin = document.getElementById('optin').checked;

    if (!optin) {
      alert('Debes aceptar recibir mensajes por WhatsApp para continuar.');
      return;
    }

    const text = `Hola, soy ${name}. Motivo: ${topic}. ${message}. Acepto recibir respuesta de JAS Automation por WhatsApp sobre esta solicitud.`;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
}
