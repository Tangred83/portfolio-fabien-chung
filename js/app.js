/**
 * Chef d'orchestre du site : langue (FR / EN), bascule cartes / grille,
 * rendu des sections Approche, À propos et Contact, copie de l'e-mail.
 */

(function () {
  const LANG_KEY = 'fc_lang';

  function readStoredLang() {
    try {
      const stored = localStorage.getItem(LANG_KEY);
      if (stored === 'fr' || stored === 'en') return stored;
    } catch (e) { /* stockage indisponible : on suit le navigateur */ }
    return (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en';
  }

  function storeLang(lang) {
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* sans effet */ }
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value !== undefined) el.textContent = value;
  }

  document.addEventListener('DOMContentLoaded', () => {
    let currentLang = readStoredLang();
    let data = PORTFOLIO_DATA[currentLang];

    const modal = new CaseStudyModal(data.projects, data.ui);
    const stack = new CardStackEngine(data.projects, (project) => modal.open(project), data.ui);
    const grid = new GridViewEngine(data.projects, (project) => modal.open(project), data.ui);
    stack.init();
    grid.init();

    /* ── Bascule cartes / grille ─────────────────────────── */
    const viewStack = document.getElementById('view-stack');
    const viewGrid = document.getElementById('view-grid');
    const btnCard = document.getElementById('toggle-view-card');
    const btnGrid = document.getElementById('toggle-view-grid');

    function switchView(viewName) {
      const toGrid = viewName === 'grid';
      viewStack.classList.toggle('active-view', !toGrid);
      viewGrid.classList.toggle('active-view', toGrid);
      btnCard.classList.toggle('active', !toGrid);
      btnGrid.classList.toggle('active', toGrid);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    btnCard?.addEventListener('click', () => switchView('card'));
    btnGrid?.addEventListener('click', () => switchView('grid'));
    document.getElementById('grid-back-btn')?.addEventListener('click', () => switchView('card'));

    /* ── Langue ──────────────────────────────────────────── */
    function applyLanguage(lang) {
      currentLang = lang;
      data = PORTFOLIO_DATA[lang];
      storeLang(lang);

      document.documentElement.lang = lang;
      document.title = data.meta.title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', data.meta.description);

      document.querySelectorAll('.lang-switch-btn').forEach(btn => {
        const isActive = btn.dataset.lang === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
      });
      document.querySelector('.lang-switch-capsule')?.classList.toggle('en-active', lang === 'en');

      // Textes fixes de la page, repérés par data-i18n / data-i18n-aria
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const value = data.ui[el.dataset.i18n];
        if (value !== undefined) el.textContent = value;
      });
      document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const value = data.ui[el.dataset.i18nAria];
        if (value !== undefined) el.setAttribute('aria-label', value);
      });

      setText('brand-sub', data.profile.title);

      stack.updateData(data.projects, data.ui);
      grid.updateData(data.projects, data.ui);
      modal.updateData(data.projects, data.ui);

      renderApproach();
      renderAbout();
      renderContact();
    }

    document.querySelectorAll('.lang-switch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.dataset.lang !== currentLang) applyLanguage(btn.dataset.lang);
      });
    });

    /* ── Sections ────────────────────────────────────────── */
    function renderApproach() {
      const a = data.approach;
      setText('approach-badge', a.badge);
      setText('approach-title', a.title);
      setText('approach-lead', a.lead);
      const list = document.getElementById('approach-principles');
      if (list) {
        list.innerHTML = a.principles.map(p => `
          <li class="principle">
            <span class="principle-num">${p.num}</span>
            <div>
              <h3 class="principle-title">${p.title}</h3>
              <p class="principle-text">${p.text}</p>
            </div>
          </li>
        `).join('');
      }
    }

    function renderAbout() {
      const a = data.about;
      setText('about-badge', a.badge);
      setText('about-title', a.title);
      setText('about-tools-title', a.toolsTitle);

      const paragraphs = document.getElementById('about-paragraphs');
      if (paragraphs) paragraphs.innerHTML = a.paragraphs.map(t => `<p>${t}</p>`).join('');

      const stats = document.getElementById('about-stats');
      if (stats) {
        stats.innerHTML = a.stats.map(s => `
          <div class="stat">
            <dt>${s.value}</dt>
            <dd>${s.label}</dd>
          </div>
        `).join('');
      }

      const tools = document.getElementById('about-tools');
      if (tools) tools.innerHTML = a.tools.map(t => `<li>${t}</li>`).join('');
    }

    function renderContact() {
      const c = data.contact;
      setText('contact-badge', c.badge);
      setText('contact-title', c.title);
      setText('contact-desc', c.desc);
      setText('contact-email-label', c.emailBtn);
      setText('contact-linkedin-label', c.linkedinBtn);
      setText('copy-email-label', c.copyBtn);
      setText('footer-place', data.footer.place);
    }

    /* ── Liens, e-mail et pied de page ───────────────────── */
    const email = data.profile.email;
    document.querySelectorAll('.js-email-link').forEach(a => { a.href = `mailto:${email}`; });
    document.querySelectorAll('.js-email-text').forEach(el => { el.textContent = email; });
    document.querySelectorAll('.js-linkedin').forEach(a => { a.href = data.profile.linkedin; });
    setText('footer-year', String(new Date().getFullYear()));

    const toast = document.getElementById('copy-toast');
    function showToast(message) {
      if (!toast) return;
      toast.textContent = message;
      toast.classList.add('visible');
      clearTimeout(showToast.timer);
      showToast.timer = setTimeout(() => toast.classList.remove('visible'), 2500);
    }

    function copyFallback(text) {
      const area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      area.remove();
      return ok;
    }

    document.getElementById('copy-email-btn')?.addEventListener('click', () => {
      const done = () => showToast(data.contact.toast);
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(done).catch(() => { if (copyFallback(email)) done(); });
      } else if (copyFallback(email)) {
        done();
      }
    });

    // Liens internes : défilement doux, et retour à la pile si on était sur la grille
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        const target = targetId && targetId.length > 1 ? document.querySelector(targetId) : null;
        if (!target) return;
        e.preventDefault();
        if (targetId === '#view-stack' && !viewStack.classList.contains('active-view')) {
          switchView('card');
          return;
        }
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    applyLanguage(currentLang);
  });
})();
