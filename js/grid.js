/**
 * Vue grille : tous les projets d'un coup d'oeil, en mise en page magazine.
 */

class GridViewEngine {
  constructor(projects, onOpenProject, ui) {
    this.projects = projects;
    this.ui = ui;
    this.onOpenProject = onOpenProject;
    this.container = document.getElementById('grid-cards-container');
  }

  init() {
    if (!this.container) return;
    this.render();
  }

  updateData(projects, ui) {
    this.projects = projects;
    this.ui = ui;
    this.render();
  }

  // Largeur de chaque projet sur 12 colonnes : lignes 7 + 5, puis 5 + 7,
  // et un dernier projet seul sur toute la largeur si le nombre est impair.
  spanFor(index, total) {
    if (index === total - 1 && total % 2 === 1) return 12;
    const pattern = [7, 5, 5, 7];
    return pattern[index % 4];
  }

  render() {
    this.container.innerHTML = '';
    const total = this.projects.length;

    this.projects.forEach((proj, idx) => {
      const span = this.spanFor(idx, total);
      const kpi = proj.metrics[0];
      const item = document.createElement('article');
      item.className = `editorial-grid-item span-${span}`;
      item.dataset.id = proj.id;
      item.tabIndex = 0;
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', `${this.ui.openCase} ${proj.brand}`);

      item.innerHTML = `
        <div class="grid-item-inner">
          <div class="grid-img-wrap media-slot${proj.logo ? ' media-product' : ''}" data-placeholder="${proj.backgroundWord}">
            <img src="${proj.image}" alt="" class="grid-img" loading="lazy" onerror="markEmptyMedia(this)" />
            ${productMediaExtras(proj)}
            <div class="grid-img-overlay"></div>
            <span class="grid-num">${proj.number}</span>
          </div>
          <div class="grid-meta">
            <div class="grid-header-line">
              <span class="grid-brand">${proj.brand}</span>
              <span class="grid-cat">${proj.period}</span>
            </div>
            <h3 class="grid-title">${proj.shortTitle}</h3>
            <p class="grid-excerpt">${proj.headline}</p>
            <div class="grid-footer">
              <div class="grid-metric-chip">
                <strong>${kpi.value}</strong>
                <span>${kpi.short || kpi.label}</span>
              </div>
              <span class="grid-explore-btn">
                <span>${this.ui.cardCta}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      `;

      const open = () => { if (this.onOpenProject) this.onOpenProject(proj); };
      item.addEventListener('click', open);
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      });

      this.container.appendChild(item);
    });
  }
}

window.GridViewEngine = GridViewEngine;
