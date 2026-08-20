/* =========================================================================
   Ayoub Idel — Portfolio
   i18n (EN/FR) · nav · scroll reveals · role rotator · counters · GitHub feed
   ========================================================================= */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ i18n */
  const I18N = {
    en: {
      nav_story: 'Story', nav_experience: 'Experience', nav_skills: 'Skills',
      nav_projects: 'Projects', nav_blog: 'Blog', nav_contact: 'Contact',
      download_cv: 'Resume',

      hero_status: 'Open to Senior Engineer · DevOps · Generative AI roles',
      hero_name: 'Ayoub Idel',
      hero_prefix: 'I build',
      hero_lead: 'Senior software engineer with <strong>7+ years</strong> owning enterprise backend platforms end to end — from <strong>Golang microservices on Kubernetes</strong> and <strong>AWS cloud architecture</strong> to shipping <strong>Generative AI</strong> features into production.',
      hero_cta_work: 'See my work', hero_cta_talk: 'Get in touch',

      stat_years: 'Years shipping to production',
      stat_events: 'Events / second sustained',
      stat_countries: 'Countries explored',
      stat_learning: 'Things left to learn',

      eyebrow_story: '// the story',
      story_pull_1: 'I fell for engineering because it never lets you stop learning —',
      story_pull_2: 'and mastering new things is the part I love most.',
      story_tag_1: 'curiosity-driven', story_tag_2: 'end-to-end ownership',
      story_tag_3: 'systems thinking', story_tag_4: 'GenAI',
      story_p1: 'It started with a fascination for how large systems hold together under pressure. From the classes préparatoires in Le Havre to an engineering degree in Tours, I kept chasing the same question: <strong>how do you make software fast, resilient, and simple to operate at scale?</strong>',
      story_p2: "Seven years later I've built and operated backend platforms end to end — designing <strong>Golang microservices on Kubernetes</strong>, architecting <strong>serverless AWS systems</strong>, and re-architecting a real-time event pipeline to sustain <strong>50,000 events per second</strong>. I care about the whole path: architecture, code, delivery, and the on-call reality of production.",
      story_p3: 'Then Generative AI arrived, and my instinct to learn kicked in again. I now ship <strong>LLM-powered features in production</strong> — Claude integrations, <strong>MCP servers</strong>, and <strong>RAG systems</strong> — with the same engineering rigor: structured outputs, guardrails, evaluation, and cost tracking.',
      story_p4: "Outside the terminal you'll find me on a football pitch or a padel court, or somewhere new — I've explored <strong>37 countries</strong> across Europe, Africa and Asia. Same drive, different maps.",
      funfact_label: '// fun fact',
      funfact_quote: 'On one project, I shipped a milestone by deleting more code than I added.',
      funfact_sub: 'Turns out my sharpest tool that quarter was the Backspace key. Simpler stack, half the moving parts, quieter nights on-call — and the proudest diff of my career was gloriously, mostly red. Less code, more system.',

      eyebrow_experience: "// where I've built",
      experience_title: 'A track record of shipping',
      experience_sub: 'From gRPC migrations to real-time pipelines and production GenAI — end-to-end ownership, from architecture to on-call.',
      present: 'Present',
      xp_imagino_kind: 'CDP / CEP platform',
      xp_imagino_tag: 'Backend + AI for a real-time customer data platform',
      xp_imagino_1: 'Re-architected the real-time event pipeline from multi-tenant to <b>single-tenant, stateless Golang microservices</b> with per-client isolation, backpressure, idempotency and retry/dead-letter — raising sustained capacity to <b>50,000 events/second</b>.',
      xp_imagino_2: 'Integrated <b>Claude</b> and built <b>MCP servers</b> exposing CDP data to AI agents, with JSON-Schema structured outputs and guardrails for controlled access.',
      xp_imagino_3: 'Built a <b>RAG system</b> over internal docs — multi-query & HyDE query translation, routing, and an optimized indexing pipeline for better retrieval relevance.',
      xp_imagino_4: 'Rebuilt the real-time tagging/segmentation engine, improved CI/CD and Helm deployments, mentored developers and ran technical interviews.',
      xp_addict_kind: 'Performance marketing',
      xp_addict_role: 'Cloud Architect & Fullstack Developer',
      xp_addict_tag: 'Serverless-first AWS at scale, then the code beneath it',
      xp_addict_1: 'Built a real-time <b>ad-creative generation engine</b> in Golang: multi-source ingestion and a config-driven merge engine, orchestrated serverless (Step Functions, Lambda, DynamoDB, Glue) with heavy jobs on ECS.',
      xp_addict_2: 'Designed scalable, highly-available <b>serverless AWS architectures</b> with <b>Infrastructure as Code in Go (AWS CDK)</b> for reproducible, faster deployments.',
      xp_addict_3: 'Led the <b>Elasticsearch → OpenSearch migration</b>, improving performance while cutting cost; owned a cloud cost-review process that significantly reduced AWS spend.',
      xp_addict_4: 'Earlier as fullstack dev: backend in Golang, Python and Java (Spring Boot), and responsive front-ends in React and Angular on clean REST APIs.',
      xp_astek_role: 'Backend Developer',
      xp_astek_tag: 'Making internal services faster',
      xp_astek_1: 'Drove the migration of internal microservices from <b>REST to gRPC</b> to improve performance, scalability and reliability.',
      xp_astek_2: 'Implemented the gRPC communication layer in <b>Golang</b>.',

      eyebrow_skills: '// the toolkit',
      skills_title: "What I've learned to master",
      skills_sub: 'Depth where it counts, breadth to connect the dots — and a habit of picking up whatever the problem needs next.',
      skill_genai: 'Generative AI / LLM', skill_llmops: 'LLM Ops', skill_infra: 'Infrastructure',
      skill_backend: 'Backend', skill_cloud: 'Cloud & Data', skill_secops: 'Security & Observability',

      eyebrow_projects: "// things I've built",
      projects_title: 'Selected projects',
      projects_sub: "A few I'm proud of — plus a live feed of my public GitHub, so new work shows up here the moment I push it.",
      proj1_kind: 'Platform · Kubernetes',
      proj1_desc: 'A factory that programmatically generates production-grade Helm charts from typed config — teams ship consistent, secure deployments without hand-writing YAML. Security baked in by default; a deterministic rendering engine with a full end-to-end test suite.',
      proj2_kind: 'Agent · CI/CD', proj2_title: 'AI Documentation Agent',
      proj2_desc: 'An autonomous Python agent that runs post-merge in GitLab CI: reads code diffs, updates a separate docs repo, and opens a review-ready MR. Safe by design — JSON-Schema output with per-claim file:line citations and a least-privilege boundary.',
      proj3_kind: 'Agent · Security', proj3_title: 'Security Audit Agent',
      proj3_desc: 'Runs pluggable scanners over a repo, merges their findings into one ranked backlog, and routes every issue to the person who owns the code. Deterministic policy ranking; the model writes the "why it matters" with tool + file:line citations.',
      repos_title: 'Latest on GitHub', repos_all: 'All repositories',
      repos_loading: 'Fetching latest repositories…',
      repos_empty: 'Repositories are on GitHub — take a look.',

      eyebrow_writing: '// writing',
      blog_title: 'I write about the things I learn',
      blog_desc: 'Deep dives on Kubernetes operators, Go internals, Solana, and the architecture decisions behind real systems — notes to myself, shared openly.',
      blog_cta: 'Read the blog',

      eyebrow_contact: "// let's talk",
      contact_title_1: 'Building something', contact_title_2: 'that needs to scale?',
      contact_desc: "I'm always up for a good engineering conversation — backend platforms, cloud architecture, or getting Generative AI safely into production.",
      contact_linkedin: 'Connect on LinkedIn',
      footer_built: 'Built from scratch in Paris'
    },

    fr: {
      nav_story: 'Histoire', nav_experience: 'Expérience', nav_skills: 'Compétences',
      nav_projects: 'Projets', nav_blog: 'Blog', nav_contact: 'Contact',
      download_cv: 'CV',

      hero_status: 'Ouvert aux postes Senior Engineer · DevOps · IA générative',
      hero_name: 'Ayoub Idel',
      hero_prefix: 'Je construis',
      hero_lead: "Ingénieur logiciel senior, <strong>7+ ans</strong> à concevoir et opérer des plateformes backend d'entreprise de bout en bout — des <strong>microservices Golang sur Kubernetes</strong> à l'<strong>architecture cloud AWS</strong>, jusqu'à la mise en production de fonctionnalités d'<strong>IA générative</strong>.",
      hero_cta_work: 'Voir mon travail', hero_cta_talk: 'Me contacter',

      stat_years: 'Ans en production',
      stat_events: 'Événements / seconde soutenus',
      stat_countries: 'Pays explorés',
      stat_learning: 'Choses à apprendre',

      eyebrow_story: "// l'histoire",
      story_pull_1: "J'ai choisi l'ingénierie parce qu'elle ne cesse jamais de nous apprendre —",
      story_pull_2: "et maîtriser de nouvelles choses est ce que je préfère.",
      story_tag_1: 'curiosité', story_tag_2: 'ownership complet',
      story_tag_3: 'pensée systèmes', story_tag_4: 'IA générative',
      story_p1: "Tout a commencé par une fascination pour la manière dont les grands systèmes tiennent sous la pression. De la classe préparatoire au Havre au diplôme d'ingénieur à Tours, j'ai poursuivi la même question : <strong>comment rendre un logiciel rapide, résilient et simple à opérer à grande échelle ?</strong>",
      story_p2: "Sept ans plus tard, j'ai conçu et opéré des plateformes backend de bout en bout — des <strong>microservices Golang sur Kubernetes</strong>, des <strong>architectures serverless sur AWS</strong>, et la ré-architecture d'un pipeline d'événements temps réel pour soutenir <strong>50 000 événements par seconde</strong>. Je m'intéresse à toute la chaîne : architecture, code, livraison et la réalité de l'astreinte.",
      story_p3: "Puis l'IA générative est arrivée, et mon envie d'apprendre est repartie de plus belle. Je livre désormais des <strong>fonctionnalités LLM en production</strong> — intégrations Claude, <strong>serveurs MCP</strong> et <strong>systèmes RAG</strong> — avec la même rigueur : sorties structurées, garde-fous, évaluation et suivi des coûts.",
      story_p4: "Loin du terminal, on me trouve sur un terrain de foot ou de padel, ou quelque part de nouveau — j'ai exploré <strong>37 pays</strong> en Europe, Afrique et Asie. Même énergie, cartes différentes.",
      funfact_label: '// anecdote',
      funfact_quote: "Sur un projet, j'ai livré une étape clé en supprimant plus de code que je n'en ai ajouté.",
      funfact_sub: "Mon outil le plus affûté ce trimestre-là ? La touche Retour arrière. Stack plus simple, moitié moins de pièces mobiles, des astreintes bien plus tranquilles — et le diff dont je suis le plus fier était magnifiquement… tout rouge. Moins de code, plus de système.",

      eyebrow_experience: "// là où j'ai construit",
      experience_title: 'Un parcours qui livre',
      experience_sub: "Des migrations gRPC aux pipelines temps réel et à l'IA en production — un ownership complet, de l'architecture à l'astreinte.",
      present: "Aujourd'hui",
      xp_imagino_kind: 'Plateforme CDP / CEP',
      xp_imagino_tag: 'Backend + IA pour une plateforme de données client temps réel',
      xp_imagino_1: "Ré-architecture du pipeline d'événements temps réel, du multi-tenant vers des <b>microservices Golang stateless single-tenant</b> avec isolation par client, backpressure, idempotence et retry/dead-letter — capacité soutenue portée à <b>50 000 événements/seconde</b>.",
      xp_imagino_2: "Intégration de <b>Claude</b> et création de <b>serveurs MCP</b> exposant les données CDP aux agents IA, avec sorties structurées JSON-Schema et garde-fous pour un accès contrôlé.",
      xp_imagino_3: "Construction d'un <b>système RAG</b> sur la documentation interne — traduction de requêtes multi-query & HyDE, routage, et pipeline d'indexation optimisé pour une meilleure pertinence.",
      xp_imagino_4: "Refonte du moteur de tagging/segmentation temps réel, amélioration du CI/CD et des déploiements Helm, mentorat de développeurs et entretiens techniques.",
      xp_addict_kind: 'Marketing à la performance',
      xp_addict_role: 'Architecte Cloud & Développeur Fullstack',
      xp_addict_tag: "Serverless AWS à grande échelle, puis le code en dessous",
      xp_addict_1: "Construction d'un <b>moteur de génération de créatives publicitaires</b> temps réel en Golang : ingestion multi-sources et moteur de fusion piloté par configuration, orchestré en serverless (Step Functions, Lambda, DynamoDB, Glue) avec les gros traitements sur ECS.",
      xp_addict_2: "Conception d'<b>architectures AWS serverless</b> scalables et hautement disponibles, avec <b>Infrastructure as Code en Go (AWS CDK)</b> pour des déploiements reproductibles et plus rapides.",
      xp_addict_3: "Pilotage de la <b>migration Elasticsearch → OpenSearch</b>, améliorant les performances tout en réduisant les coûts ; responsable d'un processus de revue des coûts cloud ayant réduit significativement la facture AWS.",
      xp_addict_4: "Auparavant fullstack : backend en Golang, Python et Java (Spring Boot), et interfaces responsives en React et Angular sur des APIs REST propres.",
      xp_astek_role: 'Développeur Backend',
      xp_astek_tag: 'Rendre les services internes plus rapides',
      xp_astek_1: "Pilotage de la migration des microservices internes de <b>REST vers gRPC</b> pour améliorer performance, scalabilité et fiabilité.",
      xp_astek_2: "Implémentation de la couche de communication gRPC en <b>Golang</b>.",

      eyebrow_skills: '// la boîte à outils',
      skills_title: "Ce que j'ai appris à maîtriser",
      skills_sub: "De la profondeur là où ça compte, de la largeur pour relier les points — et l'habitude d'apprendre ce que le problème réclame ensuite.",
      skill_genai: 'IA générative / LLM', skill_llmops: 'LLM Ops', skill_infra: 'Infrastructure',
      skill_backend: 'Backend', skill_cloud: 'Cloud & Data', skill_secops: 'Sécurité & Observabilité',

      eyebrow_projects: "// ce que j'ai construit",
      projects_title: 'Projets sélectionnés',
      projects_sub: "Quelques-uns dont je suis fier — plus un flux en direct de mon GitHub public, pour que mes nouveaux projets apparaissent ici dès que je les pousse.",
      proj1_kind: 'Plateforme · Kubernetes',
      proj1_desc: "Une factory qui génère programmatiquement des charts Helm de qualité production à partir d'une config typée — les équipes déploient de façon cohérente et sécurisée sans écrire de YAML à la main. Sécurité par défaut ; moteur de rendu déterministe avec une suite de tests end-to-end complète.",
      proj2_kind: 'Agent · CI/CD', proj2_title: 'AI Documentation Agent',
      proj2_desc: "Un agent Python autonome exécuté après le merge dans GitLab CI : il lit les diffs, met à jour un dépôt de docs séparé et ouvre une MR prête à relire. Sûr par conception — sortie JSON-Schema avec citations file:line et périmètre à moindre privilège.",
      proj3_kind: 'Agent · Sécurité', proj3_title: 'Security Audit Agent',
      proj3_desc: "Exécute des scanners pluggables sur un dépôt, fusionne leurs résultats en un backlog unique et priorisé, et route chaque problème vers la personne qui possède le code. Priorisation déterministe ; le modèle rédige le « pourquoi ça compte » avec citations outil + file:line.",
      repos_title: 'Derniers projets GitHub', repos_all: 'Tous les dépôts',
      repos_loading: 'Chargement des derniers dépôts…',
      repos_empty: 'Les dépôts sont sur GitHub — jetez un œil.',

      eyebrow_writing: '// écriture',
      blog_title: "J'écris sur ce que j'apprends",
      blog_desc: "Des plongées sur les opérateurs Kubernetes, les internals de Go, Solana, et les décisions d'architecture derrière des systèmes réels — des notes à moi-même, partagées ouvertement.",
      blog_cta: 'Lire le blog',

      eyebrow_contact: '// discutons',
      contact_title_1: 'Un projet', contact_title_2: 'qui doit passer à l’échelle ?',
      contact_desc: "Toujours partant pour une bonne discussion d'ingénierie — plateformes backend, architecture cloud, ou mise en production sûre de l'IA générative.",
      contact_linkedin: 'Me contacter sur LinkedIn',
      footer_built: 'Conçu de zéro à Paris'
    }
  };

  const ROLES = {
    en: ['real-time backends', 'Kubernetes platforms', 'cloud architecture', 'GenAI features', 'things worth shipping'],
    fr: ['des backends temps réel', 'des plateformes Kubernetes', "de l'architecture cloud", "des fonctionnalités d'IA", 'des choses qui comptent']
  };

  let lang = 'en';

  function applyLang(next) {
    lang = I18N[next] ? next : 'en';
    document.documentElement.lang = lang;
    const dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const val = dict[el.getAttribute('data-i18n')];
      if (val != null) el.innerHTML = val;
    });
    document.querySelectorAll('[data-lang-key]').forEach(function (el) {
      el.setAttribute('data-lang-active', String(el.getAttribute('data-lang-key') === lang));
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
    resetRotator();
  }

  /* -------------------------------------------------------------- rotator */
  let rotTimer, rotState;
  function resetRotator() {
    const el = document.getElementById('roleRotator');
    if (!el) return;
    clearTimeout(rotTimer);
    const words = ROLES[lang];
    rotState = { i: 0, txt: '', del: false };
    el.textContent = '';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = words[0];
      return;
    }
    tick(el, words);
  }
  function tick(el, words) {
    const full = words[rotState.i % words.length];
    if (rotState.del) {
      rotState.txt = full.substring(0, rotState.txt.length - 1);
    } else {
      rotState.txt = full.substring(0, rotState.txt.length + 1);
    }
    el.textContent = rotState.txt;
    let delay = rotState.del ? 45 : 85;
    if (!rotState.del && rotState.txt === full) { delay = 1800; rotState.del = true; }
    else if (rotState.del && rotState.txt === '') { rotState.del = false; rotState.i++; delay = 350; }
    rotTimer = setTimeout(function () { tick(el, words); }, delay);
  }

  /* ------------------------------------------------------------------ nav */
  function initNav() {
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');

    const onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 20); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    if (toggle) toggle.addEventListener('click', function () { nav.classList.toggle('open'); });
    if (menu) menu.addEventListener('click', function (e) {
      if (e.target.closest('.nav-link')) nav.classList.remove('open');
    });

    // scroll-spy
    const links = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
    const map = links.map(function (l) {
      const id = l.getAttribute('href').slice(1);
      return { link: l, sec: document.getElementById(id) };
    }).filter(function (m) { return m.sec; });

    if ('IntersectionObserver' in window && map.length) {
      const spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            links.forEach(function (l) { l.classList.remove('active'); });
            const hit = map.find(function (m) { return m.sec === en.target; });
            if (hit) hit.link.classList.add('active');
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      map.forEach(function (m) { spy.observe(m.sec); });
    }
  }

  /* -------------------------------------------------------------- reveals */
  function initReveals() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    const io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); obs.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------------------------- counters */
  function initCounters() {
    const nums = document.querySelectorAll('[data-count]');
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        obs.unobserve(en.target);
        const target = parseInt(en.target.getAttribute('data-count'), 10) || 0;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { en.target.textContent = target; return; }
        const dur = 1300, start = performance.now();
        (function step(now) {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          en.target.textContent = Math.round(target * eased);
          if (p < 1) requestAnimationFrame(step);
        })(start);
      });
    }, { threshold: 0.6 });
    nums.forEach(function (n) { io.observe(n); });
  }

  /* ----------------------------------------------------------- GitHub feed */
  function initRepos() {
    const box = document.getElementById('repos');
    if (!box) return;
    const langColors = {
      Go: '#00ADD8', Rust: '#DEA584', Python: '#3572A5', TypeScript: '#3178C6',
      JavaScript: '#F1E05A', Java: '#B07219', HTML: '#E34C26', Shell: '#89E051',
      C: '#555555', 'C++': '#F34B7D', Solidity: '#AA6746', HCL: '#844FBA'
    };
    fetch('https://api.github.com/users/pskshksh/repos?sort=pushed&per_page=100')
      .then(function (r) { if (!r.ok) throw new Error('gh ' + r.status); return r.json(); })
      .then(function (data) {
        const repos = (data || [])
          .filter(function (r) { return !r.fork && !r.archived; })
          .sort(function (a, b) { return new Date(b.pushed_at) - new Date(a.pushed_at); })
          .slice(0, 3);
        if (!repos.length) {
          box.innerHTML = '<div class="repos-empty">' + I18N[lang].repos_empty + '</div>';
          return;
        }
        box.innerHTML = repos.map(function (r) {
          const desc = r.description ? escapeHtml(r.description) : '';
          const langDot = r.language
            ? '<span class="lang-dot"><i style="background:' + (langColors[r.language] || 'var(--teal)') + '"></i>' + escapeHtml(r.language) + '</span>'
            : '';
          const stars = r.stargazers_count
            ? '<span>★ ' + r.stargazers_count + '</span>' : '';
          return '' +
            '<a class="repo" href="' + r.html_url + '" target="_blank" rel="noopener">' +
              '<span class="repo-name">' +
                '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.5 2.5 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.5 2.5 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.25.25 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"/></svg>' +
                escapeHtml(r.name) +
              '</span>' +
              '<span class="repo-desc">' + desc + '</span>' +
              '<span class="repo-foot">' + langDot + stars + '</span>' +
            '</a>';
        }).join('');
      })
      .catch(function () {
        box.innerHTML = '<div class="repos-empty">' + I18N[lang].repos_empty +
          ' <a href="https://github.com/pskshksh?tab=repositories" target="_blank" rel="noopener" style="color:var(--teal)">github.com/pskshksh</a></div>';
      });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ------------------------------------------------------------------ init */
  document.addEventListener('DOMContentLoaded', function () {
    let saved = null;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    if (!saved) saved = (navigator.language || '').toLowerCase().startsWith('fr') ? 'fr' : 'en';
    applyLang(saved);

    const langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.addEventListener('click', function () { applyLang(lang === 'en' ? 'fr' : 'en'); });

    const yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();

    initNav();
    initReveals();
    initCounters();
    initRepos();
  });
})();
