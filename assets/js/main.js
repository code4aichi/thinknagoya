const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.global-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealTargets = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealTargets.forEach((target, index) => {
  target.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  revealObserver.observe(target);
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  header.style.boxShadow = window.scrollY > 24 ? '0 18px 46px rgba(0,0,0,.18)' : 'none';
}, { passive: true });


const memberToggle = document.querySelector('.member-accordion__toggle');
const memberList = document.querySelector('#member-list');

if (memberToggle && memberList) {
  memberToggle.addEventListener('click', () => {
    const isOpen = memberToggle.getAttribute('aria-expanded') === 'true';
    memberToggle.setAttribute('aria-expanded', String(!isOpen));
    memberList.hidden = isOpen;
    const label = memberToggle.querySelector('span');
    if (label) label.textContent = isOpen ? 'メンバー一覧を開く' : 'メンバー一覧を閉じる';
  });
}
