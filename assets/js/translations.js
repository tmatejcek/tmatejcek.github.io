

const TRANSLATIONS = {
    /* ── Navbar ── */
    'nav.about': { en: 'About', cz: 'O mně' },
    'nav.projects': { en: 'Projects', cz: 'Projekty' },
    'nav.skills': { en: 'Skills', cz: 'Technické dovednosti' },

    /* ── Index page ── */
    'hero.greeting': { en: "Hiya there! I'm <strong>Studik</strong>", cz: 'Ahojky! Jsem <strong>Studik</strong>' },
    'hero.title': { en: 'Developer. Designer. Builder.', cz: 'Vývojář. Návrhář. Tvůrce.' },
    'hero.subtitle': {
        en: 'Welcome to my site where you will find everything about me and what I do.',
        cz: 'Vítej na mém webu, kde najdeš vše o mně a o tom, co dělám.'
    },
    'explore.title': { en: 'Explore', cz: 'Prozkoumej' },
    'explore.subtitle': { en: 'Explore different sections of my site', cz: 'Prozkoumej různé části mého webu' },
    'card.about': { en: 'About Me', cz: 'O mně' },
    'card.about.desc': { en: 'My interests, technical capabilities and why they interest me and my projects', cz: 'Mé zájmy, technické dovednosti a proč mě zajímají a moje projekty' },
    'card.projects': { en: 'Projects', cz: 'Projekty' },
    'card.projects.desc': { en: "Things I've built and am working on", cz: 'Věci, které jsem vytvořil a na kterých pracuji' },
    'card.skills': { en: 'Skills', cz: 'Dovednosti' },
    'card.skills.desc': { en: 'Technical capabilities', cz: 'Technické dovednosti' },
    'social.title': { en: 'Connect with me', cz: 'Spojte se se mnou' },
    'social.subtitle': { en: 'Find me on these platforms', cz: 'Najdete mě na těchto platformách' },
    'footer': { en: '© 2025 tmatejcek. Built with care.', cz: '© 2025 tmatejcek. Vytvořeno s péčí.' },

    /* ── About Me page ── */
    'breadcrumb.home': { en: 'Home', cz: 'Domů' },
    'breadcrumb.about': { en: 'About Me', cz: 'O mně' },
    'breadcrumb.projects': { en: 'Projects', cz: 'Projekty' },
    'breadcrumb.skills': { en: 'Skills', cz: 'Dovednosti' },
    'about.title': { en: 'About Me', cz: 'O mně' },
    'about.subtitle': { en: 'Learn more about my background and interests', cz: 'Zjisti více o mém původu a zájmech' },
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
    'about.story.title': { en: 'About Me', cz: 'O mně' },
    'about.story.1': {
        en: 'My name is Tomas Matejcek and I study Computer Science at <a href="https://ssps.cz">Smíchovská střední průmyslová škola</a>. I am mainly interested in cybersecurity, programming, and understanding how technology works. I am a curious and open-minded person who enjoys solving problems and learning new things, especially when they are challenging or require me to understand how something works.',
        cz: 'Jmenuji se Tomas Matejcek a studuji informatiku na <a href="https://ssps.cz">Smíchovské střední průmyslové škole</a>. Zajímám se hlavně o kyberbezpečnost, programování a pochopení toho, jak technologie fungují. Jsem zvědavý a otevřený člověk, který rád řeší problémy a učí se nové věci, zejména když jsou náročné nebo vyžadují pochopení toho, jak fungují.'
    },
    'about.story.2': {
        en: 'I originally focused more on programming, but over time I became more interested in cybersecurity. I enjoy the combination of problem-solving, technical knowledge, and curiosity that cybersecurity requires. I am still developing my skills, but I enjoy learning independently and exploring new topics whenever something catches my interest.',
        cz: 'Původně jsem se více zaměřoval na programování, ale postupem času mě začala více zajímat kyberbezpečnost. Baví mě kombinace řešení problémů, technických znalostí a zvědavosti, kterou kyberbezpečnost vyžaduje. Své dovednosti stále rozvíjím, ale rád se učím samostatně a objevuji nová témata, kdykoli mě něco zaujme.'
    },
    'about.skills.title': { en: 'Skills & Interests', cz: 'Dovednosti a zájmy' },
    'about.skills.1': {
        en: 'I have experience with <a href="https://www.wireshark.org/">Wireshark</a>, <a href="https://nmap.org/">Nmap</a>, Linux command-line tools, and basic network and system administration. I am currently learning <a href="https://www.python.org/">Python</a> and C#, as well as developing my understanding of cybersecurity through <a href="https://www.cisco.com/">Cisco</a> exercises and <a href="https://www.hackthebox.com/">Hack The Box</a>.',
        cz: 'Mám zkušenosti s nástroji <a href="https://www.wireshark.org/">Wireshark</a>, <a href="https://nmap.org/">Nmap</a>, nástroji linuxového příkazového řádku a základní správou sítí a systémů. Momentálně se učím <a href="https://www.python.org/">Python</a> a C# a zároveň si rozvíjím znalosti kyberbezpečnosti pomocí cvičení <a href="https://www.cisco.com/">Cisco</a> a labů na <a href="https://www.hackthebox.com/">Hack The Box</a>.'
    },
    'about.skills.2': {
        en: 'I have also studied Windows administration, including shared directories, Windows Defender, storage, processes, NTFS permissions, and shared access. My current goal is to continue building my cybersecurity knowledge, gain practical experience, and eventually find a career where I can keep learning while working on interesting technical problems.',
        cz: 'Studoval jsem také správu Windows včetně sdílených adresářů, Windows Defenderu, úložiště, procesů, oprávnění NTFS a sdíleného přístupu. Mým současným cílem je dál rozvíjet své znalosti kyberbezpečnosti, získat praktické zkušenosti a nakonec najít kariéru, ve které se budu moci dál učit a pracovat na zajímavých technických problémech.'
    },

    /* ── Projects page ── */
    'projects.title': { en: 'Projects', cz: 'Projekty' },
    'projects.subtitle': { en: "Things I've built and am working on", cz: 'Projekty, které jsem vytvořil a na kterých pracuji' },
    'proj.website.title': { en: 'Portfolio website', cz: 'Portfolio web' },
    'proj.website.desc': { en: 'My personal portfolio site, built from scratch with HTML, CSS, JavaScript and the use of AI.', cz: 'Můj osobní web, vytvořený od nuly pomocí HTML, CSS, JavaScriptu a použití AI.' },
    'proj.website.link': { en: 'Visit →', cz: 'Navštívit →' },
    /* ── Skills page ── */
    'skills.title': { en: 'Skills', cz: 'Dovednosti' },
    'skills.subtitle': { en: 'Technologies and systems I work with', cz: 'Technologie a systémy, se kterými pracuji' },
    'skills.cybersecurity.title': { en: 'Cybersecurity', cz: 'Kyberbezpečnost' },
    'skills.security.badge': { en: 'Security', cz: 'Bezpečnost' },
    'skills.cybersecurity.desc': {
        en: 'I am building a foundation in cybersecurity through school, self-study and <a href="https://www.hackthebox.com/">Hack The Box</a> labs.',
        cz: 'Buduji si základy kyberbezpečnosti ve škole, samostudiem a pomocí labů na <a href="https://www.hackthebox.com/">Hack The Box</a>.'
    },
    'skills.programming.title': { en: 'Programming', cz: 'Programování' },
    'skills.programming.badge': { en: 'Languages', cz: 'Jazyky' },
    'skills.programming.desc': {
        en: 'I am learning <a href="https://www.python.org/">Python</a> and C#, and use programming to solve practical problems.',
        cz: 'Učím se <a href="https://www.python.org/">Python</a> a C# a programování používám k řešení praktických problémů.'
    },
    'skills.networking.title': { en: 'Networking', cz: 'Počítačové sítě' },
    'skills.networking.badge': { en: 'Networking', cz: 'Sítě' },
    'skills.networking.desc': {
        en: 'I practise networking with <a href="https://www.wireshark.org/">Wireshark</a>, <a href="https://nmap.org/">Nmap</a> and <a href="https://www.cisco.com/">Cisco</a> exercises.',
        cz: 'Procvičuji počítačové sítě pomocí nástrojů <a href="https://www.wireshark.org/">Wireshark</a>, <a href="https://nmap.org/">Nmap</a> a cvičení <a href="https://www.cisco.com/">Cisco</a>.'
    },
    'skills.systems.badge': { en: 'Systems', cz: 'Systémy' },
    'skills.linux.title': { en: 'Linux CLI', cz: 'Linuxové CLI' },
    'skills.linux.desc': {
        en: 'I have experience working with the Linux command line and use it while learning system administration.',
        cz: 'Mám zkušenosti s linuxovým příkazovým řádkem a používám ho při učení správy systémů.'
    },
    'skills.windows.title': { en: 'Windows Administration', cz: 'Správa Windows' },
    'skills.windows.desc': {
        en: 'I understand the basics of Windows administration and security, including managing systems, processes and permissions.',
        cz: 'Rozumím základům správy a zabezpečení Windows včetně správy systémů, procesů a oprávnění.'
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
    document.querySelectorAll('[data-translations]').forEach(el => {
        const key = el.getAttribute('data-translations');
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
