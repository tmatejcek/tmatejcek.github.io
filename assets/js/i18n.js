

const TRANSLATIONS = {
    /* ── Navbar ── */
    'nav.about': { en: 'About', cz: 'O mně' },
    'nav.projects': { en: 'Projects', cz: 'Projekty' },
    'nav.skills': { en: 'Skills', cz: 'Dovednosti' },

    /* ── Index page ── */
    'hero.greeting': { en: 'Hey there 👋', cz: 'Ahoj 👋' },
    'hero.subtitle': {
        en: "Welcome to my personal website a place where I share everything I've done and a bit about who I am.",
        cz: 'Vítej na mém osobním webu — místě, kde sdílím vše, co jsem udělal, a trochu o sobě.'
    },
    'explore.title': { en: 'Explore', cz: 'Prozkoumej' },
    'explore.subtitle': { en: 'Dive into different parts of my world', cz: 'Ponoř se do různých částí mého světa' },
    'card.about': { en: 'About Me', cz: 'O mně' },
    'card.about.desc': { en: 'Where I come from, my interests, and certificates', cz: 'Odkud pocházím, mé zájmy a certifikáty' },
    'card.projects': { en: 'Projects', cz: 'Projekty' },
    'card.projects.desc': { en: "Things I've built and am working on", cz: 'Věci, které jsem vytvořil a na kterých pracuji' },
    'card.skills': { en: 'Skills', cz: 'Dovednosti' },
    'card.skills.desc': { en: 'Technologies and languages I know', cz: 'Technologie a jazyky, které ovládám' },
    'social.title': { en: 'Connect with me', cz: 'Spojte se se mnou' },
    'social.subtitle': { en: 'Find me on these platforms', cz: 'Najdete mě na těchto platformách' },
    'footer': { en: '© 2025 tmatejcek. Built with care.', cz: '© 2025 tmatejcek. Vytvořeno s péčí.' },

    /* ── About Me page ── */
    'breadcrumb.home': { en: 'Home', cz: 'Domů' },
    'breadcrumb.about': { en: 'About Me', cz: 'O mně' },
    'breadcrumb.projects': { en: 'Projects', cz: 'Projekty' },
    'breadcrumb.skills': { en: 'Skills', cz: 'Dovednosti' },
    'about.title': { en: 'About Me', cz: 'O mně' },
    'about.origin.title': { en: 'Where I come from', cz: 'Odkud pocházím' },
    'about.origin.text': {
        en: 'I come from <a href="https://praguecitytourism.cz/cs/">Prague</a> and have lived here since birth.',
        cz: 'Pocházím z <a href="https://praguecitytourism.cz/cs/">Prahy</a> a žiji tu od narození.'
    },
    'about.interests.title': { en: 'My interests', cz: 'Mé zájmy' },
    'about.interests.text': {
        en: 'My free time activities include playing <a href="https://en.wikipedia.org/wiki/Video_game">video games</a>, coding, biology and talking with people.',
        cz: 'Ve volném čase hraji <a href="https://en.wikipedia.org/wiki/Video_game">videohry</a>, programuji, zajímám se o biologii a povídám si s lidmi.'
    },
    'about.projects.title': { en: 'My projects', cz: 'Mé projekty' },
    'about.projects.text': {
        en: "I sadly don't have any apart from this site but I plan on making some and including them in the <a href=\"/other-sites/projects.html\">Projects</a> section.",
        cz: 'Bohužel zatím žádné nemám kromě tohoto webu, ale plánuji nějaké vytvořit a zahrnout je do sekce <a href="/other-sites/projects.html">Projekty</a>.'
    },
    'about.certs.title': { en: 'My certificates', cz: 'Mé certifikáty' },
    'about.certs.text': {
        en: 'I have passed the <a href="https://www.cambridgeenglish.org/">Cambridge</a> tests.',
        cz: 'Složil jsem zkoušky <a href="https://www.cambridgeenglish.org/">Cambridge</a>.'
    },
    'about.techdays.title': { en: 'Techdays', cz: 'Techdays' },
    'about.techdays.text': {
        en: 'I have attended the <a href="https://www.ssps.cz/techdays-a-hackdays/">Techdays</a> training course.',
        cz: 'Zúčastnil jsem se školení <a href="https://www.ssps.cz/techdays-a-hackdays/">Techdays</a>.'
    },

    /* ── Projects page ── */
    'projects.title': { en: 'Projects', cz: 'Projekty' },
    'projects.subtitle': { en: "Things I've built and am working on — more coming soon!", cz: 'Věci, které jsem vytvořil — další přibydou!' },
    'proj.website.title': { en: 'This Website', cz: 'Tento web' },
    'proj.website.desc': { en: 'My personal portfolio site, built from scratch with HTML, CSS, and JavaScript.', cz: 'Můj osobní web, vytvořený od nuly pomocí HTML, CSS a JavaScriptu.' },
    'proj.website.link': { en: 'Visit →', cz: 'Navštívit →' },
    'proj.calc.title': { en: 'Calculator', cz: 'Kalkulačka' },
    'proj.calc.desc': { en: 'A simple calculator built to practice core JavaScript logic.', cz: 'Jednoduchá kalkulačka pro procvičení základů JavaScriptu.' },
    'proj.snake.title': { en: 'Snake Game', cz: 'Hra Had' },
    'proj.snake.desc': { en: 'Classic snake game — a fun project to dive into game loops and canvas rendering.', cz: 'Klasická hra had — zábavný projekt pro herní smyčky a canvas.' },
    'proj.alarm.title': { en: 'Alarm Clock', cz: 'Budík' },
    'proj.alarm.desc': { en: 'A functional alarm clock app with timer and notification features.', cz: 'Funkční budík s časovačem a notifikacemi.' },

    /* ── Skills page ── */
    'skills.title': { en: 'Skills', cz: 'Dovednosti' },
    'skills.subtitle': { en: 'Technologies and languages I work with', cz: 'Technologie a jazyky, se kterými pracuji' },
    'skills.css.desc': {
        en: 'I know how to use <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a> in combination with <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>.',
        cz: 'Umím používat <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a> v kombinaci s <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>.'
    },
    'skills.html.desc': {
        en: 'I know how to use <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a> in combination with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>.',
        cz: 'Umím používat <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a> v kombinaci s <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>.'
    },
    'skills.python.desc': {
        en: 'I somewhat know how to use <a href="https://www.python.org/">Python</a>.',
        cz: 'Trochu umím používat <a href="https://www.python.org/">Python</a>.'
    },
    'skills.english.desc': {
        en: 'I have taken part in the <a href="https://www.cambridgeenglish.org/">Cambridge</a> tests — I got level A2 but I think I could get B2 or maybe C1.',
        cz: 'Zúčastnil jsem se zkoušek <a href="https://www.cambridgeenglish.org/">Cambridge</a> — získal jsem úroveň A2, ale myslím, že bych zvládl B2 nebo možná C1.'
    },
    'skills.gamedev.desc': {
        en: 'I have some basic knowledge of <a href="https://en.wikipedia.org/wiki/Video_game_development">video game development</a>.',
        cz: 'Mám základní znalosti o <a href="https://en.wikipedia.org/wiki/Video_game_development">vývoji videoher</a>.'
    },
};


function getLang() {
    return localStorage.getItem('site-lang') || 'en';
}

function setLang(lang) {
    localStorage.setItem('site-lang', lang);
    applyTranslations(lang);
    updateToggle(lang);
    document.documentElement.lang = lang === 'cz' ? 'cs' : 'en';
}

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const t = TRANSLATIONS[key];
        if (t) el.innerHTML = t[lang] || t['en'];
    });
}

function updateToggle(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const lang = getLang();
    applyTranslations(lang);
    updateToggle(lang);
    document.documentElement.lang = lang === 'cz' ? 'cs' : 'en';

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
});
