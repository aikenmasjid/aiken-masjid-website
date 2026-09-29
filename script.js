const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}));

const header = document.querySelector('.site-header');
const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 70);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const gallery = document.querySelector('.gallery-grid');
const galleryToggle = document.querySelector('#gallery-toggle');

galleryToggle?.addEventListener('click', () => {
  const expanded = gallery.classList.toggle('expanded');
  galleryToggle.setAttribute('aria-expanded', String(expanded));
  galleryToggle.textContent = expanded ? 'Show fewer photos' : 'View the full gallery';
});

const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox?.querySelector('img');

document.querySelectorAll('.gallery-item').forEach((item) => {
  item.addEventListener('click', () => {
    const sourceImage = item.querySelector('img');
    lightboxImage.src = item.dataset.full;
    lightboxImage.alt = sourceImage.alt;
    lightbox.showModal();
  });
});

lightbox?.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});

document.querySelector('#suggestion-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get('name') || '').trim();
  const idea = String(form.get('idea') || '').trim();
  const message = `Assalamu alaikum. ${name ? `My name is ${name}. ` : ''}I would like to suggest this for Aiken Masjid: ${idea}`;
  window.open(`https://wa.me/18032201706?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

document.querySelector('#year').textContent = new Date().getFullYear();
