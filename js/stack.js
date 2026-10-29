/**
 * Pile de cartes 3D : rotation des cartes, glisser / balayer,
 * inclinaison au survol et mot en filigrane derrière la pile.
 */

class CardStackEngine {
  constructor(projects, onOpenProject, ui) {
    this.projects = projects;
    this.ui = ui;
    this.currentIndex = 0;
    this.onOpenProject = onOpenProject;
    this.container = document.getElementById('card-stack-container');
    this.cards = [];
    this.isDragging = false;
    this.hasDragged = false;
    this.startX = 0;
    this.currentTranslateX = 0;
    this.isTransitioning = false;

    // Angles de la pile, pour un effet de cartes posées à la main
    this.deckRotations = [
      { rotate: 0, scale: 1 },
      { rotate: 3.2, scale: 0.97 },
      { rotate: -3.8, scale: 0.94 },
      { rotate: 2.1, scale: 0.91 },
      { rotate: -2.4, scale: 0.88 }
    ];
  }

  init() {
    if (!this.container) return;
    this.render();
    this.bindEvents();
  }

  updateData(projects, ui) {
    this.projects = projects;
    this.ui = ui;
    this.render();
  }

  render() {
    this.container.innerHTML = '';
    this.cards = [];

    this.projects.forEach((proj, index) => {
      const card = document.createElement('div');
      card.className = 'stack-card';
      card.dataset.index = index;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '-1');
      card.setAttribute('aria-label', `${this.ui.openCase} ${proj.brand}`);

      const kpi = proj.metrics[0];
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-image-wrap media-slot${proj.logo ? ' media-product' : ''}" data-placeholder="${proj.backgroundWord}">
            <img src="${proj.image}" alt="" class="card-img" draggable="false" onerror="markEmptyMedia(this)" />
            ${productMediaExtras(proj)}
            <div class="card-overlay"></div>
            <div class="card-glass-badge">
              <span class="badge-num">${proj.number}</span>
              <span class="badge-sep">·</span>
              <span class="badge-cat">${proj.category}</span>
            </div>
          </div>
          <div class="card-content">
            <div>
              <span class="card-brand">${proj.brand}<span class="card-period">${proj.period}</span></span>
              <h3 class="card-title">${proj.shortTitle}</h3>
            </div>
            <div class="card-kpi-preview">
              <span class="kpi-main">${kpi.value}</span>
              <span class="kpi-label">${kpi.short || kpi.label}</span>
            </div>
            <div class="card-cta">
              <span>${this.ui.cardCta}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </div>
      `;

      this.container.appendChild(card);
      this.cards.push(card);
    });

    this.layoutDeck();
  }

  layoutDeck() {
    const total = this.projects.length;

    this.cards.forEach((card, index) => {
      const rel = (index - this.currentIndex + total) % total;
      card.classList.remove('active', 'inactive', 'behind');

      if (rel === 0) {
        card.classList.add('active');
        card.setAttribute('tabindex', '0');
        card.style.zIndex = '30';
        card.style.transform = 'translate3d(0, 0, 0) rotate(0deg) scale(1)';
        card.style.opacity = '1';
        card.style.pointerEvents = 'auto';
        card.style.visibility = 'visible';
      } else if (rel < this.deckRotations.length) {
        const config = this.deckRotations[rel];
        card.classList.add('behind');
        card.setAttribute('tabindex', '-1');
        card.style.zIndex = `${25 - rel * 3}`;
        card.style.transform = `translate3d(0, 0, ${-rel * 25}px) rotate(${config.rotate}deg) scale(${config.scale})`;
        card.style.opacity = `${Math.max(0.65, 1 - rel * 0.1)}`;
        card.style.pointerEvents = 'none';
        card.style.visibility = 'visible';
      } else {
        card.classList.add('inactive');
        card.setAttribute('tabindex', '-1');
        card.style.zIndex = '5';
        card.style.transform = 'translate3d(0, 0, -150px) rotate(0deg) scale(0.75)';
        card.style.opacity = '0';
        card.style.pointerEvents = 'none';
        card.style.visibility = 'hidden';
      }
    });

    this.updateBackgroundWord();
    this.updateControls();
  }

  next() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    const frontCard = this.cards[this.currentIndex];
    if (frontCard) {
      frontCard.style.transition = 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.45s ease';
      frontCard.style.transform = 'translate3d(-120%, 30px, 0) rotate(-14deg) scale(0.92)';
      frontCard.style.opacity = '0';
    }

    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
      this.cards.forEach(c => { c.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease'; });
      this.layoutDeck();
      setTimeout(() => { this.isTransitioning = false; }, 350);
    }, 240);
  }

  prev() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    const newFront = this.cards[this.currentIndex];

    if (newFront) {
      newFront.style.transition = 'none';
      newFront.style.transform = 'translate3d(-110%, 20px, 0) rotate(-12deg) scale(0.95)';
      newFront.style.opacity = '0';
      newFront.style.zIndex = '35';
      newFront.style.visibility = 'visible';

      requestAnimationFrame(() => {
        newFront.style.transition = 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease';
        this.layoutDeck();
        setTimeout(() => { this.isTransitioning = false; }, 400);
      });
    } else {
      this.layoutDeck();
      this.isTransitioning = false;
    }
  }

  updateControls() {
    const currentNumEl = document.getElementById('indicator-current');
    const totalNumEl = document.getElementById('indicator-total');
    if (currentNumEl && this.projects[this.currentIndex]) {
      currentNumEl.textContent = this.projects[this.currentIndex].number;
    }
    if (totalNumEl) {
      totalNumEl.textContent = String(this.projects.length).padStart(2, '0');
    }
  }

  updateBackgroundWord() {
    const bgWordEl = document.getElementById('hero-bg-word');
    const proj = this.projects[this.currentIndex];
    if (!bgWordEl || !proj) return;
    if (bgWordEl.textContent === proj.backgroundWord) return;

    bgWordEl.style.opacity = '0';
    bgWordEl.style.transform = 'translateY(15px) scale(0.98)';
    clearTimeout(this.wordTimer);
    this.wordTimer = setTimeout(() => {
      bgWordEl.textContent = proj.backgroundWord;
      bgWordEl.style.opacity = '';
      bgWordEl.style.transform = 'translateY(0) scale(1)';
    }, 220);
  }

  openActive() {
    const proj = this.projects[this.currentIndex];
    if (proj && this.onOpenProject) this.onOpenProject(proj);
  }

  bindEvents() {
    document.getElementById('btn-stack-next')?.addEventListener('click', () => this.next());
    document.getElementById('btn-stack-prev')?.addEventListener('click', () => this.prev());

    // Flèches du clavier, quand la pile est affichée et qu'aucune fiche n'est ouverte
    window.addEventListener('keydown', (e) => {
      if (document.body.classList.contains('modal-open')) return;
      if (!document.getElementById('view-stack')?.classList.contains('active-view')) return;
      if (e.target.closest && e.target.closest('input, textarea')) return;

      if (e.key === 'ArrowRight') this.next();
      else if (e.key === 'ArrowLeft') this.prev();
      else if ((e.key === 'Enter' || e.key === ' ') && e.target.classList?.contains('stack-card')) {
        e.preventDefault();
        this.openActive();
      }
    });

    // Clic sur la carte du dessus : ouverture de la fiche
    this.container.addEventListener('click', (e) => {
      if (this.hasDragged) return;
      if (e.target.closest('.stack-card.active')) this.openActive();
    });

    // Légère inclinaison 3D au survol
    this.container.addEventListener('mousemove', (e) => {
      const activeCard = this.container.querySelector('.stack-card.active');
      if (!activeCard || this.isDragging || this.isTransitioning) return;

      const rect = activeCard.getBoundingClientRect();
      const rotateY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 5;
      const rotateX = -((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 5;
      activeCard.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translate3d(0, -4px, 15px)`;
    });

    this.container.addEventListener('mouseleave', () => {
      const activeCard = this.container.querySelector('.stack-card.active');
      if (activeCard && !this.isDragging) {
        activeCard.style.transform = 'translate3d(0, 0, 0) rotate(0deg) scale(1)';
      }
    });

    // Glisser à la souris ou au doigt
    this.container.addEventListener('mousedown', (e) => this.onDragStart(e.clientX));
    window.addEventListener('mousemove', (e) => { if (this.isDragging) this.onDragMove(e.clientX); });
    window.addEventListener('mouseup', () => { if (this.isDragging) this.onDragEnd(); });

    this.container.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) this.onDragStart(e.touches[0].clientX);
    }, { passive: true });
    window.addEventListener('touchmove', (e) => {
      if (this.isDragging && e.touches.length > 0) this.onDragMove(e.touches[0].clientX);
    }, { passive: true });
    window.addEventListener('touchend', () => { if (this.isDragging) this.onDragEnd(); });
  }

  onDragStart(x) {
    if (this.isTransitioning) return;
    this.isDragging = true;
    this.hasDragged = false;
    this.startX = x;
    this.currentTranslateX = 0;
    const activeCard = this.container.querySelector('.stack-card.active');
    if (activeCard) activeCard.style.transition = 'none';
  }

  onDragMove(x) {
    if (!this.isDragging) return;
    this.currentTranslateX = x - this.startX;
    if (Math.abs(this.currentTranslateX) > 6) this.hasDragged = true;
    const activeCard = this.container.querySelector('.stack-card.active');
    if (activeCard) {
      const rot = (this.currentTranslateX / 25).toFixed(2);
      activeCard.style.transform = `translate3d(${this.currentTranslateX}px, 0, 0) rotate(${rot}deg)`;
    }
  }

  onDragEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    const activeCard = this.container.querySelector('.stack-card.active');
    if (!activeCard) return;

    activeCard.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    if (this.currentTranslateX < -70) this.next();
    else if (this.currentTranslateX > 70) this.prev();
    else activeCard.style.transform = 'translate3d(0, 0, 0) rotate(0deg) scale(1)';

    this.currentTranslateX = 0;
    // Le clic qui suit un glisser ne doit pas ouvrir la fiche
    setTimeout(() => { this.hasDragged = false; }, 0);
  }
}

window.CardStackEngine = CardStackEngine;
