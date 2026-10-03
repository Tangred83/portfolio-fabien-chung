/**
 * Fiche projet en plein écran : une page éditoriale par projet,
 * courte et aérée (contexte, rôle, résultats, outils).
 */

class CaseStudyModal {
  constructor(projects, ui) {
    this.projects = projects;
    this.ui = ui;
    this.modalEl = document.getElementById('case-modal');
    this.modalBody = document.getElementById('case-modal-body');
    this.currentProject = null;
    this.lastFocus = null;
    this.bindGlobalEvents();
  }

  updateData(projects, ui) {
    this.projects = projects;
    this.ui = ui;
    if (this.currentProject) {
      const updated = this.projects.find(p => p.id === this.currentProject.id);
      if (updated) {
        this.currentProject = updated;
        this.render();
      }
    }
  }

  isOpen() {
    return this.modalEl.classList.contains('is-active');
  }

  open(project) {
    if (!this.isOpen()) this.lastFocus = document.activeElement;
    this.currentProject = project;
    this.render();
    document.body.classList.add('modal-open');
    this.modalEl.classList.add('is-active');
    this.modalEl.setAttribute('aria-hidden', 'false');
    this.modalEl.scrollTop = 0;
    document.getElementById('modal-close-btn')?.focus({ preventScroll: true });
  }

  close() {
    this.modalEl.classList.remove('is-active');
    this.modalEl.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (this.lastFocus && this.lastFocus.focus) this.lastFocus.focus({ preventScroll: true });
  }

  step(offset) {
    const idx = this.projects.findIndex(p => p.id === this.currentProject.id);
    const target = (idx + offset + this.projects.length) % this.projects.length;
    this.open(this.projects[target]);
  }

  render() {
    const p = this.currentProject;
    if (!p) return;
    const ui = this.ui;
    const total = String(this.projects.length).padStart(2, '0');
    const nextProject = this.projects[(this.projects.findIndex(x => x.id === p.id) + 1) % this.projects.length];
    const listItems = (items) => items.map(item => `<li>${item}</li>`).join('');

    this.modalBody.innerHTML = `
      <article class="case-doc">
        <div class="case-topbar">
          <button class="case-back-btn" id="modal-close-btn" type="button" aria-label="${ui.modalClose}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>${ui.modalBack}</span>
          </button>
          <div class="case-pagination">
            <button class="case-nav-arrow" id="modal-prev-btn" type="button" aria-label="${ui.modalPrev}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <span class="case-count">${p.number} / ${total}</span>
            <button class="case-nav-arrow" id="modal-next-btn" type="button" aria-label="${ui.modalNext}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>

        <header class="case-hero">
          <div class="case-hero-media media-slot" data-placeholder="${p.backgroundWord}">
            <img src="${p.image}" alt="" onerror="markEmptyMedia(this)" />
          </div>
          <div class="case-hero-text">
            <p class="case-kicker">
              <span class="case-brand">${p.brand}</span>
              <span class="case-period">${p.period}</span>
            </p>
            <h1 class="case-title" id="case-title">${p.shortTitle}</h1>
            <p class="case-role">${p.position}</p>
          </div>
        </header>

        <div class="case-body">
          <p class="case-lead">${p.headline}</p>

          <dl class="case-metrics">
            ${p.metrics.map(m => `
              <div class="case-metric">
                <dt>${m.value}</dt>
                <dd>${m.label}</dd>
              </div>
            `).join('')}
          </dl>

          <section class="case-block">
            <h2 class="case-label">${ui.modalContext}</h2>
            <p class="case-text">${p.context}</p>
          </section>

          <section class="case-block">
            <h2 class="case-label">${ui.modalRole}</h2>
            <ul class="case-list">${listItems(p.role)}</ul>
          </section>

          <section class="case-block">
            <h2 class="case-label">${ui.modalOutcomes}</h2>
            <ul class="case-list case-list-outcomes">${listItems(p.outcomes)}</ul>
          </section>

          <section class="case-block">
            <h2 class="case-label">${ui.modalTools}</h2>
            <ul class="chip-list">${p.tools.map(t => `<li>${t}</li>`).join('')}</ul>
          </section>
        </div>

        <footer class="case-cta">
          <div class="case-cta-text">
            <h3>${ui.modalCtaTitle}</h3>
            <p>${ui.modalCtaText}</p>
          </div>
          <div class="case-cta-actions">
            <button class="btn-primary" id="modal-contact-cta" type="button">
              <span>${ui.modalCtaContact}</span>
            </button>
            <button class="btn-secondary" id="modal-next-bottom-btn" type="button">
              <span>${ui.modalNextCase} · ${nextProject.brand}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </footer>
      </article>
    `;

    document.getElementById('modal-close-btn')?.addEventListener('click', () => this.close());
    document.getElementById('modal-prev-btn')?.addEventListener('click', () => this.step(-1));
    document.getElementById('modal-next-btn')?.addEventListener('click', () => this.step(1));
    document.getElementById('modal-next-bottom-btn')?.addEventListener('click', () => this.step(1));
    document.getElementById('modal-contact-cta')?.addEventListener('click', () => {
      this.close();
      document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  bindGlobalEvents() {
    window.addEventListener('keydown', (e) => {
      if (!this.isOpen()) return;
      if (e.key === 'Escape') this.close();
      else if (e.key === 'ArrowRight') this.step(1);
      else if (e.key === 'ArrowLeft') this.step(-1);
    });
  }
}

window.CaseStudyModal = CaseStudyModal;
