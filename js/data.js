/**
 * Contenu du site, en français et en anglais.
 * Tout le texte affiché vient de ce fichier : pour modifier une phrase,
 * c’est ici, dans les deux langues.
 *
 * Images : chaque projet pointe vers un fichier de assets/cases/.
 * Tant que le fichier n’existe pas, un fond neutre s’affiche à la place.
 */

const PORTFOLIO_DATA = {
  fr: {
    meta: {
      title: "Fabien Chung · Consultant PIM & DAM, luxe et beauté",
      description: "Fabien Chung, consultant PIM et DAM : plus de 8 ans sur la donnée produit des maisons de luxe et de beauté (Louis Vuitton, Christian Dior Couture, L’Oréal)."
    },
    ui: {
      home: "Accueil",
      langLabel: "Langue",
      navApproach: "Approche",
      navAbout: "À propos",
      navContact: "Me contacter",
      viewCard: "Cartes",
      viewGrid: "Grille",
      gridBack: "Retour aux cartes",
      prevAria: "Projet précédent",
      nextAria: "Projet suivant",
      scrollCue: "Découvrir mon approche",
      cardCta: "Lire le projet",
      openCase: "Ouvrir le projet",
      modalBack: "Retour",
      modalClose: "Fermer le projet",
      modalPrev: "Projet précédent",
      modalNext: "Projet suivant",
      modalContext: "Le contexte",
      modalRole: "Mon rôle",
      modalOutcomes: "Ce que ça a changé",
      modalTools: "Outils",
      modalCtaTitle: "Un projet similaire ?",
      modalCtaText: "Parlons de vos enjeux de donnée produit, de PIM ou de DAM.",
      modalCtaContact: "Me contacter",
      modalNextCase: "Projet suivant"
    },
    profile: {
      name: "Fabien Chung",
      title: "Consultant PIM & DAM · Luxe et beauté",
      email: "chung.fabien@gmail.com",
      linkedin: "https://www.linkedin.com/in/fabien-chung-data-enthusiast/"
    },
    projects: [
      {
        id: "louis-vuitton",
        number: "01",
        brand: "Louis Vuitton",
        period: "Depuis 2025",
        position: "Product Owner PIM, côté métier",
        category: "PIM · Retail",
        backgroundWord: "Vuitton",
        image: "assets/cases/louis-vuitton.jpg",
        shortTitle: "Concevoir le PIM avec le métier",
        headline: "Donner aux équipes en boutique une donnée produit juste, pour un catalogue qui va de la joaillerie au prêt-à-porter.",
        metrics: [
          { value: "9 mois", label: "de cadrage, soutenu par la direction", short: "de cadrage" },
          { value: "~40", label: "entretiens et ateliers métier" },
          { value: "Sept. 2026", label: "mise en production" }
        ],
        context: "Louis Vuitton construit un PIM (Akeneo) commun au digital et aux boutiques. La difficulté tient à la diversité de l’offre : un diamant, un sac en cuir exotique, une montre et une veste n’obéissent pas aux mêmes règles, et chacun doit pourtant être décrit de façon fiable.",
        role: [
          "Porter la voix du Retail dans la conception : ce dont les équipes en boutique ont vraiment besoin, et pourquoi.",
          "Cadrer le modèle de données avec les métiers, l’IT et l’éditeur, à partir des systèmes existants (SAP, PLM).",
          "Traduire des produits très techniques en règles simples : pierres (carat, pureté, couleur), cuirs exotiques, tailles et coupes, montres.",
          "Organiser les décisions : rôles de chacun, préparation des comités de pilotage et du go / no-go."
        ],
        outcomes: [
          "Un modèle de données nettement simplifié, plus lisible pour les équipes qui l’alimentent.",
          "Des responsabilités claires entre marketing, industriel, DAM et retail.",
          "Une mise en production en septembre 2026, avec un suivi de la qualité des fiches produit."
        ],
        tools: ["Akeneo", "SAP", "PLM", "DAM", "Power BI"]
      },
      {
        id: "dior",
        number: "02",
        brand: "Christian Dior Couture",
        period: "2020 - 2022",
        position: "Product Owner PIM & Salesforce, IT globale",
        category: "PIM · Gouvernance",
        backgroundWord: "Dior",
        image: "assets/cases/dior.jpg",
        shortTitle: "Reprendre la main sur la donnée",
        headline: "Remettre d’aplomb un PIM devenu trop permissif, et outiller les commandes spéciales des clients les plus exigeants.",
        metrics: [
          { value: "4", label: "applications déployées dans le monde", short: "applications déployées" },
          { value: "6", label: "consultants pilotés" },
          { value: "15+", label: "événements coordonnés" }
        ],
        context: "Au sein de l’IT globale de Dior, deux chantiers. D’un côté, un PIM dont les règles s’étaient assouplies au fil du temps, au point que la donnée ne reflétait plus la réalité. De l’autre, les commandes spéciales (après-défilé, haute couture, sur-mesure), qui mobilisent l’IT, le merchandising et les opérations.",
        role: [
          "Rationaliser la gouvernance et le modèle du PIM pour que la donnée redevienne fiable.",
          "Redéfinir le flux qui alimente le PIM, ce qui a rendu possible sa migration en SaaS.",
          "Cartographier de bout en bout le parcours des commandes spéciales, entre IT, merchandising et opérations.",
          "Piloter, en tant que Product Owner, les applications Salesforce de précommande et de commande."
        ],
        outcomes: [
          "Une donnée produit de nouveau maîtrisée, et un PIM prêt pour le SaaS.",
          "4 applications de commande déployées à l’international.",
          "Les assets 3D intégrés au modèle pour le sur-mesure (couture, cuirs exotiques)."
        ],
        tools: ["Akeneo", "Salesforce", "ETL", "3D"]
      },
      {
        id: "loreal",
        number: "03",
        brand: "L’Oréal",
        period: "2018 - 2020",
        position: "Chef de projet PIM",
        category: "PIM · Multi-marques",
        backgroundWord: "L’Oréal",
        image: "assets/cases/loreal.jpg",
        shortTitle: "Déployer un PIM sur 50 marques",
        headline: "Déployer le PIM pour la France au sein d’un programme mondial, et alimenter une trentaine de distributeurs.",
        metrics: [
          { value: "50", label: "marques déployées, sur 4 divisions", short: "marques déployées" },
          { value: "~30", label: "distributeurs alimentés" },
          { value: "30", label: "utilisateurs formés" }
        ],
        context: "L’Oréal déployait un PIM à l’échelle mondiale. En France, il fallait l’adapter à 50 marques réparties sur 4 divisions, puis diffuser les fiches produit vers les distributeurs, chacun avec ses propres exigences.",
        role: [
          "Recueillir les besoins des marques, mesurer les écarts avec la solution mondiale et arbitrer.",
          "Piloter le paramétrage, puis la diffusion vers une trentaine de distributeurs (GDSN, portails, fichiers).",
          "Encadrer 3 consultants et animer les comités de pilotage."
        ],
        outcomes: [
          "50 marques et 4 divisions déployées.",
          "Des fiches produit diffusées aux distributeurs depuis une source unique.",
          "30 utilisateurs formés."
        ],
        tools: ["PIM", "GDSN", "Portails distributeurs"]
      },
      {
        id: "zoulloo",
        number: "04",
        brand: "zoulloo",
        period: "2022 - 2024",
        position: "Co-fondateur",
        category: "Entrepreneuriat",
        backgroundWord: "zoulloo",
        image: "assets/cases/zoulloo.jpg",
        shortTitle: "Créer une marketplace de talents data",
        headline: "Co-fonder une plateforme qui met en relation les entreprises et des freelances experts de la data et de la connaissance client.",
        metrics: [
          { value: "1 M€", label: "de volume d’affaires" },
          { value: "600 k€", label: "levés" },
          { value: "1 000+", label: "freelances évalués" }
        ],
        context: "Avec zoulloo, j’ai vécu l’autre côté du décor : construire un produit, le vendre et le faire adopter. Une expérience qui nourrit aujourd’hui ma façon d’accompagner les projets.",
        role: [
          "Construire l’offre et la plateforme, de l’idée à la mise en ligne.",
          "Piloter les intégrations clés : HubSpot pour la relation client, Algolia pour la recherche.",
          "Évaluer plus de 1 000 freelances et constituer une équipe de 6 personnes."
        ],
        outcomes: [
          "1 M€ de volume d’affaires et 600 k€ levés.",
          "Des clients comme LVMH et Danone.",
          "Une équipe de 6 personnes."
        ],
        tools: ["HubSpot", "Algolia"]
      },
      {
        id: "bi-data",
        number: "05",
        brand: "BI & Big Data",
        period: "2013 - 2016",
        position: "Développeur BI & Big Data",
        category: "Data · Décisionnel",
        backgroundWord: "Data",
        image: "assets/cases/bi-data.jpg",
        shortTitle: "Les fondations techniques",
        headline: "Trois ans à construire des outils décisionnels pour la distribution et l’agro-industrie.",
        metrics: [
          { value: "3 ans", label: "de développement BI et data", short: "de BI et data" },
          { value: "5", label: "grands comptes, du retail à l’agro" }
        ],
        context: "Avant le PIM, j’ai été développeur BI et Big Data pour Decathlon, Darty, RueDuCommerce, InVivo et Soufflet.",
        role: [
          "Concevoir des modèles de données et des tableaux de bord.",
          "Traduire les questions des métiers en indicateurs utiles."
        ],
        outcomes: [
          "Une double lecture que je garde aujourd’hui : je parle le langage des métiers, et je comprends ce qui se passe sous le capot."
        ],
        tools: ["Qlik", "SQL"]
      }
    ],
    approach: {
      badge: "Approche",
      title: "Entre les métiers et l’IT, je fais le lien.",
      lead: "Un PIM (le référentiel des informations produit) ou un DAM (celui des visuels) ne réussit pas grâce à l’outil, mais grâce aux décisions prises avant de le construire. Mon rôle : prendre de la hauteur, poser les bonnes questions et faire avancer ensemble marketing, opérations, IT et éditeurs.",
      principles: [
        {
          num: "01",
          title: "Cadrer avant de construire",
          text: "Je prends le temps de comprendre les métiers, leurs produits et leurs contraintes. Un cadrage solide coûte moins cher qu’une reconstruction."
        },
        {
          num: "02",
          title: "Parler le langage de chacun",
          text: "Je traduis les besoins métier pour l’IT, et les contraintes techniques en choix clairs pour le métier."
        },
        {
          num: "03",
          title: "Décider, puis faire adopter",
          text: "Rôles, comités, formation : un projet réussi est un projet que les équipes utilisent."
        }
      ]
    },
    about: {
      badge: "À propos",
      title: "Fabien Chung",
      paragraphs: [
        "Consultant PIM et DAM, j’accompagne depuis plus de 8 ans les maisons de luxe et de beauté sur leur donnée produit : Louis Vuitton, Christian Dior Couture, L’Oréal.",
        "Mon parcours a commencé dans la technique, avec la BI et la data, puis s’est poursuivi côté métier. Je comprends ce que vivent les équipes en boutique ou au marketing, et ce que cela implique pour l’IT.",
        "J’ai aussi co-fondé zoulloo, une marketplace de freelances data. Je sais ce que représente un produit à construire, à vendre et à faire adopter."
      ],
      stats: [
        { value: "8+", label: "ans sur la donnée produit" },
        { value: "3", label: "maisons de luxe et de beauté" },
        { value: "50", label: "marques déployées" },
        { value: "FR · EN", label: "français natif, anglais professionnel" }
      ],
      toolsTitle: "Outils pratiqués",
      tools: ["Akeneo", "Salesforce", "HubSpot", "Algolia", "Power BI", "Qlik", "GDSN", "SAP", "PLM"]
    },
    contact: {
      badge: "Contact",
      title: "Parlons de votre projet.",
      desc: "Ouvert aux missions freelance comme aux postes à long terme. Basé à Marseille, régulièrement à Paris.",
      emailBtn: "M’écrire",
      linkedinBtn: "LinkedIn",
      copyBtn: "Copier l’adresse",
      toast: "Adresse e-mail copiée"
    },
    footer: {
      place: "Marseille · Paris"
    }
  },

  en: {
    meta: {
      title: "Fabien Chung · PIM & DAM Consultant, luxury and beauty",
      description: "Fabien Chung, PIM and DAM consultant: more than 8 years on product data for luxury and beauty houses (Louis Vuitton, Christian Dior Couture, L’Oréal)."
    },
    ui: {
      home: "Home",
      langLabel: "Language",
      navApproach: "Approach",
      navAbout: "About",
      navContact: "Get in touch",
      viewCard: "Cards",
      viewGrid: "Grid",
      gridBack: "Back to cards",
      prevAria: "Previous project",
      nextAria: "Next project",
      scrollCue: "See my approach",
      cardCta: "Read the case",
      openCase: "Open the case",
      modalBack: "Back",
      modalClose: "Close the case",
      modalPrev: "Previous case",
      modalNext: "Next case",
      modalContext: "The context",
      modalRole: "My role",
      modalOutcomes: "What changed",
      modalTools: "Tools",
      modalCtaTitle: "A similar project?",
      modalCtaText: "Let’s talk about your product data, PIM or DAM challenges.",
      modalCtaContact: "Get in touch",
      modalNextCase: "Next case"
    },
    profile: {
      name: "Fabien Chung",
      title: "PIM & DAM Consultant · Luxury and beauty",
      email: "chung.fabien@gmail.com",
      linkedin: "https://www.linkedin.com/in/fabien-chung-data-enthusiast/"
    },
    projects: [
      {
        id: "louis-vuitton",
        number: "01",
        brand: "Louis Vuitton",
        period: "Since 2025",
        position: "PIM Product Owner, business side",
        category: "PIM · Retail",
        backgroundWord: "Vuitton",
        image: "assets/cases/louis-vuitton.jpg",
        shortTitle: "Designing the PIM with the business",
        headline: "Giving store teams accurate product data, for a catalog that ranges from fine jewelry to ready-to-wear.",
        metrics: [
          { value: "9 months", label: "of scoping, backed by management", short: "of scoping" },
          { value: "~40", label: "business interviews and workshops" },
          { value: "Sept. 2026", label: "go-live" }
        ],
        context: "Louis Vuitton is building a PIM (Akeneo) shared by digital and retail. The challenge is the sheer diversity of the offer: a diamond, an exotic leather bag, a watch and a jacket follow different rules, yet each must be described reliably.",
        role: [
          "Bring the Retail voice into the design: what store teams really need, and why.",
          "Scope the data model with the business, IT and the vendor, starting from existing systems (SAP, PLM).",
          "Turn highly technical products into simple rules: stones (carat, clarity, color), exotic leathers, sizes and fits, watches.",
          "Structure decision-making: who owns what, steering committee preparation, go / no-go."
        ],
        outcomes: [
          "A much simpler data model, easier to read for the teams who maintain it.",
          "Clear ownership across marketing, industrial, DAM and retail.",
          "Go-live in September 2026, with ongoing monitoring of product data quality."
        ],
        tools: ["Akeneo", "SAP", "PLM", "DAM", "Power BI"]
      },
      {
        id: "dior",
        number: "02",
        brand: "Christian Dior Couture",
        period: "2020 - 2022",
        position: "PIM & Salesforce Product Owner, Global IT",
        category: "PIM · Governance",
        backgroundWord: "Dior",
        image: "assets/cases/dior.jpg",
        shortTitle: "Taking back control of the data",
        headline: "Fixing a PIM that had become too permissive, and equipping special orders for the most demanding clients.",
        metrics: [
          { value: "4", label: "applications deployed worldwide", short: "applications deployed" },
          { value: "6", label: "consultants led" },
          { value: "15+", label: "events coordinated" }
        ],
        context: "Within Dior’s Global IT, two workstreams. On one side, a PIM whose rules had loosened over time, to the point where the data no longer matched reality. On the other, special orders (after-show, haute couture, made-to-order), which involve IT, merchandising and operations.",
        role: [
          "Rationalize the PIM governance and model so the data could be trusted again.",
          "Redefine the flow feeding the PIM, which made its move to SaaS possible.",
          "Map the special-order journey end to end, across IT, merchandising and operations.",
          "Lead, as Product Owner, the Salesforce pre-order and order applications."
        ],
        outcomes: [
          "Product data back under control, and a PIM ready for SaaS.",
          "4 order applications deployed internationally.",
          "3D assets added to the model for made-to-order (couture, exotic leathers)."
        ],
        tools: ["Akeneo", "Salesforce", "ETL", "3D"]
      },
      {
        id: "loreal",
        number: "03",
        brand: "L’Oréal",
        period: "2018 - 2020",
        position: "PIM Project Manager",
        category: "PIM · Multi-brand",
        backgroundWord: "L’Oréal",
        image: "assets/cases/loreal.jpg",
        shortTitle: "Rolling out a PIM across 50 brands",
        headline: "Deploying the PIM for France within a global program, and feeding some thirty retailers.",
        metrics: [
          { value: "50", label: "brands deployed, across 4 divisions", short: "brands deployed" },
          { value: "~30", label: "retailers fed" },
          { value: "30", label: "users trained" }
        ],
        context: "L’Oréal was rolling out a PIM worldwide. In France, it had to be adapted to 50 brands across 4 divisions, then used to send product content to retailers, each with its own requirements.",
        role: [
          "Gather the brands’ needs, measure the gaps with the global solution, and make the calls.",
          "Lead the configuration, then the syndication to some thirty retailers (GDSN, portals, files).",
          "Manage 3 consultants and run the steering committees."
        ],
        outcomes: [
          "50 brands and 4 divisions deployed.",
          "Product content sent to retailers from a single source.",
          "30 users trained."
        ],
        tools: ["PIM", "GDSN", "Retailer portals"]
      },
      {
        id: "zoulloo",
        number: "04",
        brand: "zoulloo",
        period: "2022 - 2024",
        position: "Co-founder",
        category: "Entrepreneurship",
        backgroundWord: "zoulloo",
        image: "assets/cases/zoulloo.jpg",
        shortTitle: "Building a marketplace for data talent",
        headline: "Co-founding a platform that connects companies with freelance experts in data and customer insight.",
        metrics: [
          { value: "€1M", label: "business volume" },
          { value: "€600k", label: "raised" },
          { value: "1,000+", label: "freelancers assessed" }
        ],
        context: "With zoulloo, I saw the other side: building a product, selling it and getting it adopted. That experience shapes how I support projects today.",
        role: [
          "Build the offer and the platform, from idea to launch.",
          "Lead the key integrations: HubSpot for customer relationships, Algolia for search.",
          "Assess more than 1,000 freelancers and build a team of 6."
        ],
        outcomes: [
          "€1M in business volume and €600k raised.",
          "Clients such as LVMH and Danone.",
          "A team of 6."
        ],
        tools: ["HubSpot", "Algolia"]
      },
      {
        id: "bi-data",
        number: "05",
        brand: "BI & Big Data",
        period: "2013 - 2016",
        position: "BI & Big Data Developer",
        category: "Data · Analytics",
        backgroundWord: "Data",
        image: "assets/cases/bi-data.jpg",
        shortTitle: "The technical foundations",
        headline: "Three years building decision-support tools for retail and agribusiness.",
        metrics: [
          { value: "3 years", label: "of BI and data development", short: "of BI and data" },
          { value: "5", label: "major accounts, from retail to agribusiness" }
        ],
        context: "Before PIM, I was a BI and Big Data developer for Decathlon, Darty, RueDuCommerce, InVivo and Soufflet.",
        role: [
          "Design data models and dashboards.",
          "Turn business questions into useful indicators."
        ],
        outcomes: [
          "A dual perspective I still rely on: I speak the business language, and I understand what happens under the hood."
        ],
        tools: ["Qlik", "SQL"]
      }
    ],
    approach: {
      badge: "Approach",
      title: "Between the business and IT, I build the bridge.",
      lead: "A PIM (the system of record for product information) or a DAM (the same for visuals) doesn’t succeed because of the tool, but because of the decisions made before building it. My role: step back, ask the right questions, and move marketing, operations, IT and vendors forward together.",
      principles: [
        {
          num: "01",
          title: "Scope before you build",
          text: "I take the time to understand the business, its products and its constraints. Solid scoping costs less than a rebuild."
        },
        {
          num: "02",
          title: "Speak everyone’s language",
          text: "I translate business needs for IT, and technical constraints into clear choices for the business."
        },
        {
          num: "03",
          title: "Decide, then drive adoption",
          text: "Roles, committees, training: a successful project is one the teams actually use."
        }
      ]
    },
    about: {
      badge: "About",
      title: "Fabien Chung",
      paragraphs: [
        "As a PIM and DAM consultant, I have spent more than 8 years helping luxury and beauty houses with their product data: Louis Vuitton, Christian Dior Couture, L’Oréal.",
        "My career started on the technical side, in BI and data, then moved to the business side. I understand what store and marketing teams go through, and what it means for IT.",
        "I also co-founded zoulloo, a marketplace for data freelancers. I know what it takes to build a product, sell it and get it adopted."
      ],
      stats: [
        { value: "8+", label: "years in product data" },
        { value: "3", label: "luxury and beauty houses" },
        { value: "50", label: "brands deployed" },
        { value: "FR · EN", label: "native French, professional English" }
      ],
      toolsTitle: "Tools I use",
      tools: ["Akeneo", "Salesforce", "HubSpot", "Algolia", "Power BI", "Qlik", "GDSN", "SAP", "PLM"]
    },
    contact: {
      badge: "Contact",
      title: "Let’s talk about your project.",
      desc: "Open to freelance missions and long-term roles. Based in Marseille, regularly in Paris.",
      emailBtn: "Email me",
      linkedinBtn: "LinkedIn",
      copyBtn: "Copy address",
      toast: "Email address copied"
    },
    footer: {
      place: "Marseille · Paris"
    }
  }
};
