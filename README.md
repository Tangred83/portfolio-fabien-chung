# Site portfolio · Fabien Chung

Site vitrine statique (HTML, CSS et JavaScript, sans dépendance ni compilation), en français et en anglais.

## Modifier le contenu

Tout le texte du site est dans `js/data.js`, en deux blocs : `fr` et `en`. Une modification doit être faite dans les deux langues.

- `projects` : les projets de la pile de cartes, dans l'ordre d'affichage.
- `approach`, `about`, `contact` : les sections sous la pile.
- `ui` : les libellés de l'interface (boutons, menus).

## Ajouter les images

Déposer les fichiers suivants (noms exacts). Tant qu'un fichier manque, un fond neutre s'affiche à sa place.

| Fichier | Emplacement | Format conseillé |
|---|---|---|
| `assets/cases/louis-vuitton.jpg` | Carte et fiche Louis Vuitton (packshot Neverfull MM) | packshot sur fond blanc, carré, 1200 × 1200 |
| `assets/cases/dior.jpg` | Carte et fiche Dior (packshot Lady Dior) | packshot sur fond blanc, carré, 1200 × 1200 |
| `assets/cases/loreal.jpg` | Carte et fiche L'Oréal (packshot Elnett Satin) | packshot sur fond blanc, carré, 1200 × 1200 |
| `assets/cases/zoulloo.jpg` | Carte et fiche zoulloo | paysage, 1600 × 1000 |
| `assets/cases/bi-data.jpg` | Carte et fiche BI & Big Data | paysage, 1600 × 1000 |
| `assets/approche.jpg` | Section Approche | portrait, 1200 × 1500 |
| `assets/fabien.jpg` | Section À propos | portrait, 1000 × 1250 |

Les photos sont recadrées automatiquement : garder le sujet au centre.

**Projets de marque (Louis Vuitton, Dior, L'Oréal)** : le visuel est un packshot officiel d'un produit iconique, affiché en entier sur fond ivoire (le fond blanc du packshot s'y fond), avec le logo de la marque (`assets/logos/`, versions du domaine public sur Wikimedia Commons) et une légende (`imageCaption` dans `js/data.js`, FR et EN). Si l'on change de produit, changer aussi la légende. Pas de photo de défilé ni de visuel porté (droits des mannequins et des photographes). Tant que le packshot manque, le logo seul s'affiche au centre.

**Autres projets** : photos libres de droits ou personnelles.

## Voir le site en local

Depuis ce dossier :

```bash
python -m http.server 3000
```

Puis ouvrir http://localhost:3000.

## Structure

```text
index.html        Structure de la page
css/style.css     Mise en page et styles
js/data.js        Tout le contenu, FR et EN
js/stack.js       Pile de cartes
js/grid.js        Vue grille
js/modal.js       Fiche projet en plein écran
js/app.js         Langue, sections, contact
assets/           Images
```

## Mise en ligne

- **GitHub Pages** : gratuit si le dépôt est public (payant pour un dépôt privé).
- **Netlify** ou **Vercel** : gratuits, et peuvent publier depuis un dépôt privé.
