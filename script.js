/* ============================================================
   CYBERCARE — COMPLETE SMART SCRIPT.JS
   Version: Clean Interface + 3-Dot More + A-Z Cyber Help
   ------------------------------------------------------------
   FEATURES
   • Clean mobile-first interface support
   • 3-dot More menu
   • A-Z Internet/Cyber Problem Library
   • Smart Search
   • English + বাংলা
   • Dark Mode
   • Account Recovery
   • Facebook / Instagram / WhatsApp / Google
   • Blackmail / Harassment / Stalking
   • Private Photo / Video misuse
   • Fake Profile / Impersonation
   • Scam / Phishing / OTP / UPI
   • Bank / Card / Payment Fraud
   • Shopping / Job / Loan / Investment scams
   • Phone / Malware / Spyware / Permissions
   • Privacy / Evidence / Reporting
   • Women Safety
   • Emergency Response
   • Scam Scanner
   • Password Checker
   • URL Checker
   • Privacy Checklist
   • Evidence Checklist
   • Cyber Safety Score
============================================================ */

"use strict";

/* ============================================================
   1. BASIC HELPERS
============================================================ */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    Array.from(parent.querySelectorAll(selector));

const escapeHTML = (value) =>
    String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

function normalizeText(value) {
    return String(value ?? "")
        .toLowerCase()
        .normalize("NFKC")
        .trim();
}

function scrollToSection(id) {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function save(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (_) {}
}

function load(key, fallback = null) {
    try {
        return localStorage.getItem(key) ?? fallback;
    } catch (_) {
        return fallback;
    }
}

/* ============================================================
   2. APP STATE
============================================================ */

const CyberCare = {
    language: load("cybercare-language", "en"),
    theme: load("cybercare-theme", "light"),
    menuOpen: false,
    currentGuide: null
};

/* ============================================================
   3. DYNAMIC CSS
   Keeps interface clean even if old CSS is limited.
============================================================ */

(function injectCyberCareCSS() {

    if ($("#cybercare-dynamic-style")) return;

    const style = document.createElement("style");

    style.id = "cybercare-dynamic-style";

    style.textContent = `
        body.menu-open {
            overflow: hidden;
        }

        .cc-more-wrapper {
            position: relative;
        }

        .cc-more-button {
            width: 44px;
            height: 44px;
            border: 0;
            border-radius: 50%;
            cursor: pointer;
            font-size: 25px;
            line-height: 1;
            background: transparent;
        }

        .cc-more-button:hover {
            background: rgba(100,116,139,.12);
        }

        .cc-more-panel {
            position: fixed;
            top: 70px;
            right: 14px;
            width: min(360px, calc(100vw - 28px));
            max-height: calc(100vh - 90px);
            overflow-y: auto;
            z-index: 9998;
            padding: 10px;
            border-radius: 18px;
            background: var(--cc-panel, #fff);
            color: var(--cc-text, #0f172a);
            box-shadow: 0 18px 50px rgba(0,0,0,.18);
            border: 1px solid rgba(148,163,184,.25);
            display: none;
        }

        .cc-more-panel.active {
            display: block;
        }

        .cc-more-header {
            padding: 12px 12px 8px;
            font-weight: 800;
            font-size: 17px;
        }

        .cc-more-section {
            margin: 7px 0;
        }

        .cc-more-section-title {
            padding: 8px 12px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: .5px;
            opacity: .65;
            font-weight: 800;
        }

        .cc-more-item {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            text-align: left;
            padding: 11px 12px;
            border: 0;
            background: transparent;
            color: inherit;
            border-radius: 11px;
            cursor: pointer;
            font-size: 14px;
        }

        .cc-more-item:hover {
            background: rgba(100,116,139,.10);
        }

        .cc-more-item small {
            display: block;
            opacity: .6;
            margin-top: 2px;
        }

        .cc-search-results {
            display: grid;
            gap: 10px;
            margin-top: 14px;
        }

        .cc-result-card {
            border: 1px solid rgba(148,163,184,.25);
            border-radius: 15px;
            padding: 14px;
            background: var(--cc-panel, #fff);
        }

        .cc-result-card h3 {
            margin: 0 0 6px;
            font-size: 16px;
        }

        .cc-result-card p {
            margin: 0 0 10px;
            line-height: 1.55;
            opacity: .8;
        }

        .cc-result-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 7px;
        }

        .cc-small-btn {
            border: 0;
            border-radius: 9px;
            padding: 8px 11px;
            cursor: pointer;
            font-weight: 700;
        }

        .cc-guide-overlay {
            position: fixed;
            inset: 0;
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 14px;
            background: rgba(2,6,23,.72);
        }

        .cc-guide-modal {
            width: min(720px, 100%);
            max-height: 92vh;
            overflow-y: auto;
            border-radius: 20px;
            background: var(--cc-panel, #fff);
            color: var(--cc-text, #0f172a);
            box-shadow: 0 30px 80px rgba(0,0,0,.30);
            position: relative;
            padding: 22px;
        }

        .cc-guide-close {
            position: sticky;
            float: right;
            top: 0;
            border: 0;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 18px;
            background: rgba(100,116,139,.12);
        }

        .cc-guide-modal h2 {
            margin: 0 45px 18px 0;
            font-size: 22px;
        }

        .cc-guide-content {
            line-height: 1.65;
        }

        .cc-guide-content h3 {
            margin: 20px 0 7px;
        }

        .cc-guide-content li {
            margin: 7px 0;
        }

        .cc-note {
            margin: 16px 0;
            padding: 13px;
            border-radius: 12px;
            background: rgba(245,158,11,.12);
            border-left: 4px solid #f59e0b;
        }

        .cc-danger {
            background: rgba(239,68,68,.10);
            border-left: 4px solid #ef4444;
        }

        .cc-safe {
            background: rgba(34,197,94,.10);
            border-left: 4px solid #22c55e;
        }

        .cc-guide-actions {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 20px;
        }

        .cc-guide-ok {
            border: 0;
            border-radius: 11px;
            padding: 11px 16px;
            cursor: pointer;
            font-weight: 800;
        }

        .cc-emergency-bar {
            position: fixed;
            bottom: 14px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9990;
            width: min(500px, calc(100vw - 28px));
        }

        .cc-emergency-bar button {
            width: 100%;
            border: 0;
            border-radius: 14px;
            padding: 13px;
            cursor: pointer;
            font-weight: 800;
        }

        body.dark-mode {
            --cc-panel: #0f172a;
            --cc-text: #e5e7eb;
        }

        body.dark-mode .cc-more-panel,
        body.dark-mode .cc-guide-modal {
            background: #0f172a;
            color: #e5e7eb;
        }

        @media (max-width: 600px) {

            .cc-more-panel {
                top: 60px;
            }

            .cc-guide-modal {
                padding: 17px;
                border-radius: 16px;
            }

            .cc-guide-modal h2 {
                font-size: 19px;
            }
        }
    `;

    document.head.appendChild(style);

})();

/* ============================================================
   4. CLEAN 3-DOT MORE MENU
============================================================ */

function createMoreMenu() {

    if ($("#ccMoreWrapper")) return;

    const wrapper = document.createElement("div");

    wrapper.id = "ccMoreWrapper";
    wrapper.className = "cc-more-wrapper";

    wrapper.innerHTML = `
        <button
            id="ccMoreButton"
            class="cc-more-button"
            type="button"
            aria-label="More"
            aria-expanded="false"
        >⋮</button>

        <div
            id="ccMorePanel"
            class="cc-more-panel"
            role="menu"
        >

            <div class="cc-more-header">
                ⋮ More CyberCare
            </div>

            <div class="cc-more-section">

                <div class="cc-more-section-title">
                    🛡️ Safety Guides
                </div>

                <button class="cc-more-item" data-more-guide="account">
                    🔐 Account Recovery
                </button>

                <button class="cc-more-item" data-more-guide="blackmail">
                    ⚠️ Blackmail / Threat
                </button>

                <button class="cc-more-item" data-more-guide="harassment">
                    📞 Harassment
                </button>

                <button class="cc-more-item" data-more-guide="stalking">
                    👁️ Online Stalking
                </button>

                <button class="cc-more-item" data-more-guide="private">
                    📸 Private Photo / Video
                </button>

                <button class="cc-more-item" data-more-guide="fakeprofile">
                    🎭 Fake Profile
                </button>

                <button class="cc-more-item" data-more-guide="scam">
                    🎣 Scam / Phishing
                </button>

                <button class="cc-more-item" data-more-guide="money">
                    💳 Financial Fraud
                </button>

                <button class="cc-more-item" data-more-guide="phone">
                    📱 Phone Security
                </button>

            </div>

            <div class="cc-more-section">

                <div class="cc-more-section-title">
                    👩 Women Safety
                </div>

                <button class="cc-more-item" data-more-guide="women">
                    🛡️ Women Safety Center
                </button>

            </div>

            <div class="cc-more-section">

                <div class="cc-more-section-title">
                    🧰 Tools
                </div>

                <button class="cc-more-item" data-more-tool="scam">
                    🎣 Scam Scanner
                </button>

                <button class="cc-more-item" data-more-tool="password">
                    🔐 Password Checker
                </button>

                <button class="cc-more-item" data-more-tool="url">
                    🔗 URL Checker
                </button>

                <button class="cc-more-item" data-more-tool="privacy">
                    🔒 Privacy Checklist
                </button>

                <button class="cc-more-item" data-more-tool="evidence">
                    🧾 Evidence Checklist
                </button>

                <button class="cc-more-item" data-more-tool="score">
                    🛡️ Cyber Safety Score
                </button>

            </div>

            <div class="cc-more-section">

                <div class="cc-more-section-title">
                    📚 Learn
                </div>

                <button class="cc-more-item" data-more-learn="password">
                    Password Safety
                </button>

                <button class="cc-more-item" data-more-learn="2fa">
                    Two-Factor Authentication
                </button>

                <button class="cc-more-item" data-more-learn="phishing">
                    Phishing Awareness
                </button>

                <button class="cc-more-item" data-more-learn="privacy">
                    Privacy Protection
                </button>

                <button class="cc-more-item" data-more-learn="financial">
                    Financial Safety
                </button>

            </div>

            <div class="cc-more-section">

                <div class="cc-more-section-title">
                    ⚙️ Settings
                </div>

                <button class="cc-more-item" data-more-action="language">
                    🌐 বাংলা / English
                </button>

                <button class="cc-more-item" data-more-action="theme">
                    🌙 Dark / Light Mode
                </button>

            </div>

        </div>
    `;

    const existingMenuBtn =
        $("#menuBtn");

    if (existingMenuBtn?.parentElement) {

        existingMenuBtn.parentElement.appendChild(wrapper);

    } else {

        document.body.prepend(wrapper);

    }

    const button = $("#ccMoreButton");
    const panel = $("#ccMorePanel");

    button?.addEventListener("click", (event) => {

        event.stopPropagation();

        const active =
            panel.classList.toggle("active");

        button.setAttribute(
            "aria-expanded",
            String(active)
        );

    });

    document.addEventListener("click", (event) => {

        if (
            panel &&
            !panel.contains(event.target) &&
            event.target !== button
        ) {
            panel.classList.remove("active");
            button?.setAttribute("aria-expanded", "false");
        }

    });

    $$(".cc-more-item").forEach(item => {

        item.addEventListener("click", () => {

            panel.classList.remove("active");

            button?.setAttribute(
                "aria-expanded",
                "false"
            );

            const guide =
                item.dataset.moreGuide;

            const tool =
                item.dataset.moreTool;

            const learn =
                item.dataset.moreLearn;

            const action =
                item.dataset.moreAction;

            if (guide) {

                if (guide === "women") {
                    openWomenSafety();
                } else {
                    openGuide(guide);
                }

                return;
            }

            if (tool) {

                routeTool(tool);
                return;
            }

            if (learn) {

                openLearningGuide(learn);
                return;
            }

            if (action === "language") {

                toggleLanguage();
                return;
            }

            if (action === "theme") {

                toggleTheme();
                return;
            }

        });

    });

}

document.addEventListener(
    "DOMContentLoaded",
    createMoreMenu
);

/* ============================================================
   5. SIDE MENU
============================================================ */

function setupSideMenu() {

    const menuBtn = $("#menuBtn");
    const closeMenu = $("#closeMenu");
    const sideMenu = $("#sideMenu");
    const menuOverlay = $("#menuOverlay");

    function openMenu() {

        if (!sideMenu || !menuOverlay) return;

        sideMenu.classList.add("active");
        menuOverlay.classList.add("active");
        document.body.classList.add("menu-open");

        CyberCare.menuOpen = true;
    }

    function closeSideMenu() {

        if (!sideMenu || !menuOverlay) return;

        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");

        CyberCare.menuOpen = false;
    }

    menuBtn?.addEventListener("click", openMenu);
    closeMenu?.addEventListener("click", closeSideMenu);
    menuOverlay?.addEventListener("click", closeSideMenu);

    $$(".menu-item").forEach(button => {

        button.addEventListener("click", () => {

            const section =
                button.dataset.menu;

            closeSideMenu();

            if (section) {

                setTimeout(
                    () => scrollToSection(section),
                    100
                );

            }

        });

    });

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeSideMenu();
        }

    });

}

setupSideMenu();

/* ============================================================
   6. DARK MODE
============================================================ */

function updateThemeIcon() {

    const themeBtn = $("#themeBtn");

    if (!themeBtn) return;

    themeBtn.textContent =
        document.body.classList.contains("dark-mode")
            ? "☀️"
            : "🌙";
}

function applyTheme() {

    if (CyberCare.theme === "dark") {

        document.body.classList.add("dark-mode");

    } else {

        document.body.classList.remove("dark-mode");

    }

    updateThemeIcon();
}

function toggleTheme() {

    CyberCare.theme =
        document.body.classList.contains("dark-mode")
            ? "light"
            : "dark";

    save(
        "cybercare-theme",
        CyberCare.theme
    );

    applyTheme();
}

$("#themeBtn")?.addEventListener(
    "click",
    toggleTheme
);

applyTheme();

/* ============================================================
   7. LANGUAGE SYSTEM
============================================================ */

const translations = {

    en: {

        language: "EN",

        heroTitle: "CyberCare",

        heroSubtitle:
            "Protecting People. Securing Digital Lives.",

        heroDescription:
            "Simple, practical and step-by-step guidance for digital problems, scams, harassment, blackmail, privacy, account recovery and online safety.",

        emergency:
            "🚨 I Need Help Now",

        findProblem:
            "🔎 Find My Problem",

        searchTitle:
            "🔎 What happened?",

        searchDescription:
            "Describe your problem and CyberCare will find the most relevant safety guide.",

        searchPlaceholder:
            "Example: someone is blackmailing me...",

        noResult:
            "No exact guide found.",

        openGuide:
            "Open Safety Guide →"

    },

    bn: {

        language: "বাংলা",

        heroTitle: "CyberCare",

        heroSubtitle:
            "মানুষকে সুরক্ষিত রাখি। ডিজিটাল জীবন নিরাপদ রাখি।",

        heroDescription:
            "ডিজিটাল সমস্যা, স্ক্যাম, হয়রানি, ব্ল্যাকমেইল, গোপনীয়তা, অ্যাকাউন্ট রিকভারি এবং অনলাইন নিরাপত্তার সহজ ধাপে ধাপে নির্দেশনা।",

        emergency:
            "🚨 এখনই সাহায্য চাই",

        findProblem:
            "🔎 আমার সমস্যাটি খুঁজুন",

        searchTitle:
            "🔎 কী ঘটেছে?",

        searchDescription:
            "আপনার সমস্যাটি লিখুন। CyberCare সবচেয়ে উপযুক্ত নিরাপত্তা নির্দেশনা খুঁজে দেবে।",

        searchPlaceholder:
            "উদাহরণ: কেউ আমাকে ব্ল্যাকমেইল করছে...",

        noResult:
            "এই সমস্যার সরাসরি গাইড পাওয়া যায়নি।",

        openGuide:
            "সেফটি গাইড খুলুন →"

    }

};

function toggleLanguage() {

    CyberCare.language =
        CyberCare.language === "en"
            ? "bn"
            : "en";

    save(
        "cybercare-language",
        CyberCare.language
    );

    applyLanguage();
}

function setText(selector, value) {

    const element = $(selector);

    if (element) {
        element.textContent = value;
    }

}

function applyLanguage() {

    const t =
        translations[CyberCare.language];

    if (!t) return;

    setText(
        "#languageText",
        t.language
    );

    setText(
        ".hero h1",
        t.heroTitle
    );

    setText(
        ".hero h2",
        t.heroSubtitle
    );

    setText(
        ".hero p",
        t.heroDescription
    );

    setText(
        "#emergencyBtn",
        t.emergency
    );

    setText(
        "#quickHelpBtn",
        t.findProblem
    );

    setText(
        ".search-section h2",
        t.searchTitle
    );

    setText(
        ".search-section > p",
        t.searchDescription
    );

    const input =
        $("#problemSearch");

    if (input) {
        input.placeholder =
            t.searchPlaceholder;
    }

    document.documentElement.lang =
        CyberCare.language === "bn"
            ? "bn"
            : "en";

}

$("#languageBtn")?.addEventListener(
    "click",
    toggleLanguage
);

applyLanguage();

/* ============================================================
   8. COMPLETE A-Z PROBLEM DATABASE
============================================================ */

const problemDatabase = [

/* A */

{
    id: "account",
    title: "Account Recovery / Hacked Account",
    bn: "অ্যাকাউন্ট হ্যাক / রিকভারি",
    category: "Accounts",
    icon: "🔐",
    keywords: [
        "account hacked",
        "hacked account",
        "account recovery",
        "login problem",
        "cannot login",
        "password changed",
        "অ্যাকাউন্ট হ্যাক",
        "একাউন্ট হ্যাক",
        "অ্যাকাউন্ট রিকভারি"
    ],
    description:
        "Recover a compromised account, secure your email, change passwords and remove unknown sessions.",
    guide: "account"
},

{
    id: "android",
    title: "Android Security",
    bn: "Android নিরাপত্তা",
    category: "Phone",
    icon: "📱",
    keywords: [
        "android",
        "android security",
        "android hacked",
        "android phone",
        "অ্যান্ড্রয়েড",
        "অ্যান্ড্রয়েড"
    ],
    description:
        "Check apps, permissions, updates, device-admin access and account sessions.",
    guide: "phone"
},

/* B */

{
    id: "blackmail",
    title: "Blackmail / Threat",
    bn: "ব্ল্যাকমেইল / হুমকি",
    category: "Women Safety",
    icon: "⚠️",
    keywords: [
        "blackmail",
        "blackmailing",
        "threat",
        "threatening",
        "money demand",
        "ব্ল্যাকমেইল",
        "ব্ল্যাকমেল",
        "হুমকি"
    ],
    description:
        "Do not pay or send more content. Preserve evidence and secure your accounts.",
    guide: "blackmail"
},

{
    id: "bank",
    title: "Bank Fraud",
    bn: "ব্যাংক প্রতারণা",
    category: "Money",
    icon: "🏦",
    keywords: [
        "bank fraud",
        "banking fraud",
        "bank scam",
        "bank account fraud",
        "ব্যাংক প্রতারণা"
    ],
    description:
        "Contact your bank immediately, secure the account and preserve transaction evidence.",
    guide: "money"
},

/* C */

{
    id: "card",
    title: "Credit / Debit Card Fraud",
    bn: "কার্ড প্রতারণা",
    category: "Money",
    icon: "💳",
    keywords: [
        "card fraud",
        "credit card fraud",
        "debit card fraud",
        "card stolen",
        "কার্ড প্রতারণা"
    ],
    description:
        "Block the card, contact your bank and report unauthorized transactions immediately.",
    guide: "money"
},

{
    id: "copyright",
    title: "Copyright / Content Misuse",
    bn: "কপিরাইট / কনটেন্ট অপব্যবহার",
    category: "Content",
    icon: "©️",
    keywords: [
        "copyright",
        "copyright violation",
        "content stolen",
        "video stolen",
        "photo stolen",
        "কপিরাইট",
        "ছবি চুরি",
        "ভিডিও চুরি"
    ],
    description:
        "Preserve evidence, identify the platform's copyright process and submit a legitimate report.",
    guide: "copyright"
},

/* D */

{
    id: "data",
    title: "Personal Data Leak",
    bn: "ব্যক্তিগত তথ্য ফাঁস",
    category: "Privacy",
    icon: "🗂️",
    keywords: [
        "data leak",
        "personal data",
        "data leaked",
        "information leaked",
        "তথ্য ফাঁস"
    ],
    description:
        "Identify exposed information, secure accounts and monitor for further misuse.",
    guide: "data"
},

/* E */

{
    id: "email",
    title: "Email / Gmail Hacked",
    bn: "Email / Gmail হ্যাক",
    category: "Accounts",
    icon: "📧",
    keywords: [
        "email hacked",
        "gmail hacked",
        "email recovery",
        "gmail recovery",
        "ইমেইল হ্যাক",
        "জিমেইল হ্যাক"
    ],
    description:
        "Recover your email first because it may control recovery of other accounts.",
    guide: "google"
},

/* F */

{
    id: "facebook",
    title: "Facebook Account Recovery",
    bn: "Facebook Account Recovery",
    category: "Accounts",
    icon: "📘",
    keywords: [
        "facebook",
        "facebook hacked",
        "facebook recovery",
        "fb",
        "fb hacked",
        "ফেসবুক",
        "ফেসবুক হ্যাক",
        "ফেসবুক একাউন্ট"
    ],
    description:
        "Recover Facebook access, secure your email and remove unknown sessions.",
    guide: "facebook"
},

{
    id: "fakeprofile",
    title: "Fake Profile / Impersonation",
    bn: "ফেক প্রোফাইল / ভুয়া পরিচয়",
    category: "Safety",
    icon: "🎭",
    keywords: [
        "fake profile",
        "fake account",
        "impersonation",
        "fake facebook",
        "fake instagram",
        "ভুয়া প্রোফাইল",
        "ফেক প্রোফাইল"
    ],
    description:
        "Save the fake profile URL and screenshots, then report impersonation.",
    guide: "fakeprofile"
},

/* G */

{
    id: "google",
    title: "Google Account Recovery",
    bn: "Google Account Recovery",
    category: "Accounts",
    icon: "🔵",
    keywords: [
        "google",
        "google account",
        "gmail",
        "gmail account",
        "google hacked",
        "গুগল",
        "জিমেইল"
    ],
    description:
        "Recover your Google account, review security activity and enable 2-step verification.",
    guide: "google"
},

{
    id: "gaming",
    title: "Gaming Account Hacked",
    bn: "Gaming Account হ্যাক",
    category: "Accounts",
    icon: "🎮",
    keywords: [
        "gaming account",
        "game account hacked",
        "steam hacked",
        "game hacked",
        "গেম একাউন্ট হ্যাক"
    ],
    description:
        "Secure the linked email, change the password and remove unknown sessions.",
    guide: "account"
},

/* H */

{
    id: "harassment",
    title: "Online Harassment",
    bn: "অনলাইন হয়রানি",
    category: "Women Safety",
    icon: "📞",
    keywords: [
        "harassment",
        "online harassment",
        "bad messages",
        "abuse",
        "bothering",
        "হয়রানি",
        "হয়রানি",
        "খারাপ মেসেজ"
    ],
    description:
        "Save evidence, restrict/block the person and report abusive behaviour.",
    guide: "harassment"
},

{
    id: "hacking",
    title: "Someone Is Trying to Hack Me",
    bn: "কেউ আমার অ্যাকাউন্ট হ্যাক করার চেষ্টা করছে",
    category: "Security",
    icon: "💻",
    keywords: [
        "trying to hack",
        "hacker",
        "hacking attempt",
        "login alert",
        "suspicious login",
        "হ্যাকার",
        "হ্যাক করার চেষ্টা"
    ],
    description:
        "Secure passwords, enable 2FA, review sessions and preserve suspicious alerts.",
    guide: "hacking"
},

/* I */

{
    id: "instagram",
    title: "Instagram Account Recovery",
    bn: "Instagram Account Recovery",
    category: "Accounts",
    icon: "📸",
    keywords: [
        "instagram",
        "insta",
        "instagram hacked",
        "instagram recovery",
        "ইনস্টাগ্রাম",
        "ইন্সটাগ্রাম"
    ],
    description:
        "Secure the linked email and use Instagram's official recovery options.",
    guide: "instagram"
},

{
    id: "investment",
    title: "Investment Scam",
    bn: "Investment Scam",
    category: "Money",
    icon: "📈",
    keywords: [
        "investment scam",
        "fake investment",
        "trading scam",
        "profit scam",
        "crypto scam",
        "ইনভেস্টমেন্ট স্ক্যাম"
    ],
    description:
        "Stop sending money, preserve transaction evidence and verify the service independently.",
    guide: "investment"
},

/* J */

{
    id: "job",
    title: "Fake Job / Recruitment Scam",
    bn: "ভুয়া চাকরি / Recruitment Scam",
    category: "Scams",
    icon: "💼",
    keywords: [
        "job scam",
        "fake job",
        "recruitment scam",
        "job fraud",
        "চাকরির স্ক্যাম",
        "ভুয়া চাকরি"
    ],
    description:
        "Do not pay suspicious recruitment fees or share sensitive banking information.",
    guide: "job"
},

/* K */

{
    id: "kyc",
    title: "Fake KYC / Account Verification Scam",
    bn: "ভুয়া KYC Scam",
    category: "Scams",
    icon: "🪪",
    keywords: [
        "kyc scam",
        "fake kyc",
        "kyc update",
        "account verification scam",
        "কেওয়াইসি"
    ],
    description:
        "Do not provide OTP, PIN or credentials through unsolicited KYC messages.",
    guide: "scam"
},

/* L */

{
    id: "loan",
    title: "Fake Loan App / Loan Scam",
    bn: "ভুয়া Loan App / Loan Scam",
    category: "Scams",
    icon: "💰",
    keywords: [
        "loan scam",
        "fake loan",
        "loan app",
        "loan fraud",
        "লোন স্ক্যাম",
        "লোন অ্যাপ"
    ],
    description:
        "Avoid suspicious apps, review permissions and never pay unofficial processing fees.",
    guide: "loan"
},

/* M */

{
    id: "malware",
    title: "Malware / Suspicious App",
    bn: "Malware / সন্দেহজনক App",
    category: "Phone",
    icon: "🦠",
    keywords: [
        "malware",
        "virus",
        "suspicious app",
        "unknown app",
        "অজানা অ্যাপ",
        "ভাইরাস",
        "ম্যালওয়্যার"
    ],
    description:
        "Review recently installed apps, permissions and security updates.",
    guide: "phone"
},

{
    id: "money",
    title: "UPI / Online Financial Fraud",
    bn: "UPI / Online Financial Fraud",
    category: "Money",
    icon: "💳",
    keywords: [
        "upi",
        "upi fraud",
        "money stolen",
        "payment fraud",
        "financial fraud",
        "money scam",
        "ইউপিআই",
        "টাকা কেটে নিয়েছে",
        "টাকা কেটে নিয়েছে"
    ],
    description:
        "Contact your bank/payment provider immediately and preserve transaction details.",
    guide: "money"
},

/* N */

{
    id: "number",
    title: "Phone Number Misuse",
    bn: "Phone Number অপব্যবহার",
    category: "Privacy",
    icon: "📞",
    keywords: [
        "phone number misuse",
        "number leaked",
        "unknown calls",
        "spam calls",
        "নম্বর ছড়িয়ে গেছে",
        "অজানা কল"
    ],
    description:
        "Block unwanted callers, review privacy settings and preserve repeated harassment evidence.",
    guide: "harassment"
},

/* O */

{
    id: "otp",
    title: "OTP Scam",
    bn: "OTP Scam",
    category: "Scams",
    icon: "🔢",
    keywords: [
        "otp",
        "otp scam",
        "verification code",
        "code scam",
        "ওটিপি",
        "ভেরিফিকেশন কোড"
    ],
    description:
        "Never share an OTP or verification code with a caller or stranger.",
    guide: "scam"
},

/* P */

{
    id: "password",
    title: "Password Problem / Password Stolen",
    bn: "Password সমস্যা / Password চুরি",
    category: "Security",
    icon: "🔑",
    keywords: [
        "password",
        "password stolen",
        "password hacked",
        "forgot password",
        "পাসওয়ার্ড",
        "পাসওয়ার্ড চুরি"
    ],
    description:
        "Change the password, use a unique passphrase and enable 2FA.",
    guide: "password"
},

{
    id: "phishing",
    title: "Phishing / Fake Link",
    bn: "Phishing / ভুয়া Link",
    category: "Scams",
    icon: "🎣",
    keywords: [
        "phishing",
        "fake link",
        "suspicious link",
        "login link",
        "ফিশিং",
        "ভুয়া লিংক"
    ],
    description:
        "Do not click suspicious links or enter credentials into unexpected pages.",
    guide: "scam"
},

{
    id: "photo",
    title: "Photo Misuse",
    bn: "ছবি অপব্যবহার",
    category: "Women Safety",
    icon: "📸",
    keywords: [
        "photo misuse",
        "photo stolen",
        "picture misuse",
        "ছবি অপব্যবহার",
        "ছবি চুরি"
    ],
    description:
        "Save evidence, report the content and secure your profile.",
    guide: "photo"
},

{
    id: "private",
    title: "Private Photo / Video Threat",
    bn: "Private Photo / Video Threat",
    category: "Women Safety",
    icon: "🔴",
    keywords: [
        "private photo",
        "private video",
        "intimate photo",
        "intimate video",
        "nude",
        "photo threat",
        "video threat",
        "প্রাইভেট ছবি",
        "প্রাইভেট ভিডিও"
    ],
    description:
        "Do not send more content or pay simply because someone threatens publication.",
    guide: "private"
},

/* Q */

{
    id: "qr",
    title: "QR Code Scam",
    bn: "QR Code Scam",
    category: "Money",
    icon: "▦",
    keywords: [
        "qr scam",
        "qr code scam",
        "scan qr",
        "qr fraud",
        "কিউআর স্ক্যাম"
    ],
    description:
        "Be careful: scanning a QR code can initiate a payment depending on the app and flow.",
    guide: "qr"
},

/* R */

{
    id: "refund",
    title: "Fake Refund / Cashback Scam",
    bn: "Fake Refund / Cashback Scam",
    category: "Money",
    icon: "↩️",
    keywords: [
        "refund scam",
        "cashback scam",
        "fake refund",
        "refund fraud",
        "রিফান্ড স্ক্যাম",
        "ক্যাশব্যাক"
    ],
    description:
        "Never share OTP/PIN or install remote-control software to receive a refund.",
    guide: "refund"
},

/* S */

{
    id: "scam",
    title: "Scam / Phishing",
    bn: "Scam / Phishing",
    category: "Scams",
    icon: "🎣",
    keywords: [
        "scam",
        "fraud",
        "phishing",
        "fake message",
        "suspicious message",
        "স্ক্যাম",
        "ফিশিং"
    ],
    description:
        "Stop, verify independently and never share OTP, PIN or passwords.",
    guide: "scam"
},

{
    id: "stalking",
    title: "Online Stalking",
    bn: "Online Stalking",
    category: "Women Safety",
    icon: "👁️",
    keywords: [
        "stalking",
        "online stalking",
        "tracking",
        "monitoring",
        "স্টকিং",
        "অনলাইনে অনুসরণ"
    ],
    description:
        "Document repeated unwanted contact and review location/privacy settings.",
    guide: "stalking"
},

{
    id: "spyware",
    title: "Spyware / Tracking Concern",
    bn: "Spyware / Tracking",
    category: "Phone",
    icon: "🕵️",
    keywords: [
        "spyware",
        "spy app",
        "tracking app",
        "phone spying",
        "স্পাইওয়্যার",
        "ফোনে নজরদারি"
    ],
    description:
        "Review installed apps, permissions, accessibility and device-admin settings.",
    guide: "phone"
},

/* T */

{
    id: "telegram",
    title: "Telegram Account Security",
    bn: "Telegram Account Security",
    category: "Accounts",
    icon: "✈️",
    keywords: [
        "telegram",
        "telegram hacked",
        "telegram account",
        "টেলিগ্রাম"
    ],
    description:
        "Review active sessions, enable two-step verification and protect your phone number.",
    guide: "account"
},

/* U */

{
    id: "upi",
    title: "UPI Security",
    bn: "UPI নিরাপত্তা",
    category: "Money",
    icon: "💰",
    keywords: [
        "upi pin",
        "upi security",
        "upi payment",
        "upi scam",
        "upi fraud",
        "ইউপিআই পিন"
    ],
    description:
        "Never share your UPI PIN and remember that receiving money does not require entering your PIN.",
    guide: "money"
},

/* V */

{
    id: "video",
    title: "Private Video / Video Misuse",
    bn: "Private Video / Video অপব্যবহার",
    category: "Women Safety",
    icon: "🎥",
    keywords: [
        "video misuse",
        "private video",
        "video leaked",
        "video threat",
        "ভিডিও ফাঁস",
        "ভিডিও অপব্যবহার"
    ],
    description:
        "Preserve evidence, report the content and do not send additional material.",
    guide: "private"
},

/* W */

{
    id: "whatsapp",
    title: "WhatsApp Account Security",
    bn: "WhatsApp Account Security",
    category: "Accounts",
    icon: "📱",
    keywords: [
        "whatsapp",
        "whatsapp hacked",
        "whatsapp account",
        "whatsapp code",
        "হোয়াটসঅ্যাপ",
        "হোয়াটসঅ্যাপ"
    ],
    description:
        "Check linked devices, enable two-step verification and never share verification codes.",
    guide: "whatsapp"
},

/* X */

{
    id: "x",
    title: "X / Twitter Account Security",
    bn: "X / Twitter Account Security",
    category: "Accounts",
    icon: "𝕏",
    keywords: [
        "twitter",
        "x account",
        "twitter hacked",
        "x hacked",
        "টুইটার"
    ],
    description:
        "Secure your email, change your password and review active sessions.",
    guide: "account"
},

/* Y */

{
    id: "youtube",
    title: "YouTube Account / Channel Problem",
    bn: "YouTube Account / Channel সমস্যা",
    category: "Accounts",
    icon: "▶️",
    keywords: [
        "youtube",
        "youtube hacked",
        "youtube channel hacked",
        "youtube recovery",
        "ইউটিউব"
    ],
    description:
        "Secure the linked Google account first and then review YouTube channel access.",
    guide: "google"
},

/* Z */

{
    id: "zoom",
    title: "Zoom / Video Meeting Security",
    bn: "Zoom / Video Meeting Security",
    category: "Privacy",
    icon: "🎥",
    keywords: [
        "zoom",
        "zoom security",
        "video meeting",
        "meeting hacked"
    ],
    description:
        "Use meeting passwords, waiting rooms and controlled participant access.",
    guide: "privacy"
},

/* EXTRA IMPORTANT PROBLEMS */

{
    id: "dating",
    title: "Dating / Romance Scam",
    bn: "Dating / Romance Scam",
    category: "Scams",
    icon: "❤️",
    keywords: [
        "dating scam",
        "romance scam",
        "love scam",
        "online relationship scam",
        "ডেটিং স্ক্যাম",
        "রোম্যান্স স্ক্যাম"
    ],
    description:
        "Do not send money or sensitive documents to someone whose identity you cannot independently verify.",
    guide: "dating"
},

{
    id: "shopping",
    title: "Online Shopping Scam",
    bn: "Online Shopping Scam",
    category: "Scams",
    icon: "🛒",
    keywords: [
        "shopping scam",
        "online shopping fraud",
        "fake shopping website",
        "product scam",
        "অনলাইন শপিং স্ক্যাম"
    ],
    description:
        "Verify the seller, avoid suspicious payment requests and preserve order/payment evidence.",
    guide: "shopping"
},

{
    id: "screen",
    title: "Screen Sharing / Remote Access Scam",
    bn: "Screen Sharing / Remote Access Scam",
    category: "Scams",
    icon: "🖥️",
    keywords: [
        "screen share",
        "screen sharing",
        "remote access",
        "anydesk",
        "teamviewer",
        "রিমোট অ্যাক্সেস",
        "স্ক্রিন শেয়ার"
    ],
    description:
        "Do not give strangers remote access to your phone or computer.",
    guide: "screen"
},

{
    id: "location",
    title: "Location Tracking / Location Privacy",
    bn: "Location Tracking / Privacy",
    category: "Privacy",
    icon: "📍",
    keywords: [
        "location tracking",
        "location sharing",
        "gps tracking",
        "লোকেশন ট্র্যাক",
        "লোকেশন শেয়ার"
    ],
    description:
        "Review location permissions and sharing settings on your phone and apps.",
    guide: "location"
}

];

/* ============================================================
   9. FULL GUIDE LIBRARY
============================================================ */

const guides = {

/* ---------------- ACCOUNT ---------------- */

account: {
    title: "🔐 Account Recovery & Hacked Account",
    html: `
        <h3>প্রথমে যা করবেন</h3>
        <ol>
            <li>অন্য কারও দেওয়া recovery service ব্যবহার করবেন না।</li>
            <li>আপনার email account নিরাপদ করুন।</li>
            <li>Official recovery process ব্যবহার করুন।</li>
            <li>নতুন unique password দিন।</li>
            <li>Unknown devices/sessions remove করুন।</li>
            <li>2FA চালু করুন।</li>
        </ol>

        <h3>যা করবেন না</h3>
        <ul>
            <li>OTP দেবেন না।</li>
            <li>Recovery code দেবেন না।</li>
            <li>Password কাউকে দেবেন না।</li>
            <li>অপরিচিত recovery agent-কে টাকা দেবেন না।</li>
        </ul>

        <div class="cc-note">
            Email compromise হলে প্রথমে email account secure করা গুরুত্বপূর্ণ,
            কারণ অনেক account recovery email-এর উপর নির্ভর করে।
        </div>
    `
},

facebook: {
    title: "📘 Facebook Account Recovery",
    html: `
        <ol>
            <li>আপনার Facebook-এর official recovery option ব্যবহার করুন।</li>
            <li>Password পরিবর্তন করুন।</li>
            <li>Unknown login/session remove করুন।</li>
            <li>Recovery email ও phone number পরীক্ষা করুন।</li>
            <li>2FA চালু করুন।</li>
            <li>অচেনা post/message হলে evidence সংরক্ষণ করুন।</li>
        </ol>

        <div class="cc-note">
            Facebook recovery করার নামে কেউ password বা OTP চাইলে দেবেন না।
        </div>
    `
},

instagram: {
    title: "📸 Instagram Account Recovery",
    html: `
        <ol>
            <li>Linked email account secure করুন।</li>
            <li>Instagram-এর official recovery process ব্যবহার করুন।</li>
            <li>Password পরিবর্তন করুন।</li>
            <li>Login activity পরীক্ষা করুন।</li>
            <li>Unknown device/session remove করুন।</li>
            <li>Two-factor authentication চালু করুন।</li>
        </ol>
    `
},

whatsapp: {
    title: "📱 WhatsApp Account Security",
    html: `
        <ol>
            <li>WhatsApp → Linked Devices খুলুন।</li>
            <li>অচেনা device থাকলে Log Out করুন।</li>
            <li>Two-step verification চালু করুন।</li>
            <li>Verification code কাউকে দেবেন না।</li>
            <li>কেউ আপনার নামে message করলে trusted contacts-কে জানান।</li>
            <li>Phone/email account-ও secure করুন।</li>
        </ol>

        <div class="cc-danger cc-note">
            Random caller/message-কে WhatsApp verification code কখনো দেবেন না।
        </div>
    `
},

google: {
    title: "🔵 Google / Gmail Recovery",
    html: `
        <ol>
            <li>Google-এর official account recovery process ব্যবহার করুন।</li>
            <li>Password পরিবর্তন করুন।</li>
            <li>Recent security activity পরীক্ষা করুন।</li>
            <li>Unknown devices remove করুন।</li>
            <li>Recovery email/phone পরীক্ষা করুন।</li>
            <li>2-Step Verification চালু করুন।</li>
        </ol>

        <div class="cc-danger cc-note">
            Google verification code কাউকে দেবেন না।
        </div>
    `
},

/* ---------------- BLACKMAIL ---------------- */

blackmail: {
    title: "⚠️ Blackmail / Threat",
    html: `
        <h3>1. টাকা দেবেন না</h3>
        <p>টাকা দিলেই blackmailer থামবে—এমন নিশ্চয়তা নেই।</p>

        <h3>2. নতুন ছবি/ভিডিও পাঠাবেন না</h3>
        <p>চাপের মধ্যে আরও private content পাঠাবেন না।</p>

        <h3>3. Evidence রাখুন</h3>
        <ul>
            <li>Screenshot</li>
            <li>Username</li>
            <li>Profile URL</li>
            <li>Phone number</li>
            <li>Date/time</li>
            <li>Payment demand</li>
        </ul>

        <h3>4. Account secure করুন</h3>
        <ol>
            <li>Password পরিবর্তন করুন।</li>
            <li>2FA চালু করুন।</li>
            <li>Unknown sessions remove করুন।</li>
        </ol>

        <h3>5. Report ও Block</h3>
        <p>Platform-এর reporting system ব্যবহার করুন।</p>

        <div class="cc-danger cc-note">
            যদি physical danger-এর আশঙ্কা থাকে, নিরাপদ জায়গায় যান এবং
            trusted person ও appropriate local authorities-এর সাহায্য নিন।
        </div>
    `
},

private: {
    title: "📸 Private Photo / Video Threat",
    html: `
        <ol>
            <li>আর কোনো private content পাঠাবেন না।</li>
            <li>শুধু হুমকির কারণে টাকা দেবেন না।</li>
            <li>Screenshot ও profile information রাখুন।</li>
            <li>Platform-এ report করুন।</li>
            <li>নিরাপদ হলে block করুন।</li>
            <li>Social media ও email secure করুন।</li>
        </ol>

        <div class="cc-note">
            নিজেকে দোষ দেবেন না। Evidence সংরক্ষণ করুন এবং trusted person-এর
            সাহায্য নিন।
        </div>
    `
},

harassment: {
    title: "📞 Online Harassment / Repeated Calls",
    html: `
        <ol>
            <li>অপ্রয়োজনীয় argument করবেন না।</li>
            <li>Messages ও call logs সংরক্ষণ করুন।</li>
            <li>Account/number block বা restrict করুন।</li>
            <li>Privacy settings review করুন।</li>
            <li>Platform-এ report করুন।</li>
            <li>Harassment চলতে থাকলে trusted person-কে জানান।</li>
        </ol>
    `
},

stalking: {
    title: "👁️ Online Stalking",
    html: `
        <h3>Privacy protect করুন</h3>
        <ul>
            <li>Location sharing বন্ধ/সীমিত করুন।</li>
            <li>Active sessions পরীক্ষা করুন।</li>
            <li>Unknown followers remove করুন।</li>
            <li>Person-কে restrict/block করুন।</li>
            <li>Message/tag settings review করুন।</li>
        </ul>

        <h3>Evidence রাখুন</h3>
        <p>
            Repeated contact-এর screenshot, username, URL ও date/time রাখুন।
        </p>

        <div class="cc-danger cc-note">
            Online stalking যদি physical safety concern হয়ে যায়,
            trusted person এবং appropriate local authorities-এর সাহায্য নিন।
        </div>
    `
},

fakeprofile: {
    title: "🎭 Fake Profile / Impersonation",
    html: `
        <ol>
            <li>Fake profile-এর screenshot নিন।</li>
            <li>Username ও profile URL save করুন।</li>
            <li>Impersonation হিসেবে report করুন।</li>
            <li>Trusted contacts-কে সতর্ক করুন।</li>
            <li>নিজের account-এর password ও 2FA secure করুন।</li>
        </ol>
    `
},

photo: {
    title: "📸 Photo Misuse",
    html: `
        <ol>
            <li>Misused content-এর screenshot নিন।</li>
            <li>Profile/page URL copy করুন।</li>
            <li>Platform-এ report করুন।</li>
            <li>Impersonation হলে সেই category ব্যবহার করুন।</li>
            <li>নিজের profile privacy review করুন।</li>
        </ol>
    `
},

/* ---------------- SCAMS ---------------- */

scam: {
    title: "🎣 Scam / Phishing",
    html: `
        <h3>STOP</h3>
        <p>Link click, file download বা suspicious conversation বন্ধ করুন।</p>

        <h3>NEVER SHARE</h3>
        <ul>
            <li>OTP</li>
            <li>Password</li>
            <li>UPI PIN</li>
            <li>Bank PIN</li>
            <li>Recovery code</li>
            <li>Screen-sharing access</li>
        </ul>

        <h3>যদি link-এ click করে ফেলেন</h3>
        <ol>
            <li>Page বন্ধ করুন।</li>
            <li>আর কোনো তথ্য দেবেন না।</li>
            <li>Affected password পরিবর্তন করুন।</li>
            <li>Account activity পরীক্ষা করুন।</li>
            <li>Money involved হলে bank/payment provider-এর সঙ্গে দ্রুত যোগাযোগ করুন।</li>
        </ol>
    `
},

money: {
    title: "💳 UPI / Bank / Financial Fraud",
    html: `
        <h3>এখনই করুন</h3>

        <ol>
            <li>Bank/payment provider-এর সঙ্গে দ্রুত যোগাযোগ করুন।</li>
            <li>Fraudulent transaction report করুন।</li>
            <li>প্রয়োজন হলে card/account block করুন।</li>
            <li>Compromised PIN/password পরিবর্তন করুন।</li>
            <li>Transaction ID ও screenshot সংরক্ষণ করুন।</li>
            <li>Official cybercrime reporting channel ব্যবহার করুন।</li>
        </ol>

        <div class="cc-danger cc-note">
            UPI PIN টাকা receive করার জন্য নয়; payment authorize করার জন্য।
            UPI PIN/OTP কাউকে দেবেন না।
        </div>
    `
},

otp: {
    title: "🔢 OTP Scam",
    html: `
        <ol>
            <li>OTP কাউকে বলবেন না।</li>
            <li>Caller-এর পরিচয় বিশ্বাস করে code দেবেন না।</li>
            <li>Message-এ দেওয়া number-এ call back না করে official source ব্যবহার করুন।</li>
            <li>OTP already shared হলে affected account secure করুন।</li>
            <li>Financial account হলে bank/payment provider-কে দ্রুত জানান।</li>
        </ol>
    `
},

qr: {
    title: "▦ QR Code Scam",
    html: `
        <ul>
            <li>অপরিচিত QR scan করার আগে উদ্দেশ্য বুঝুন।</li>
            <li>QR scan করলে payment authorization হচ্ছে কি না দেখুন।</li>
            <li>UPI PIN শুধু payment authorize করার সময় ব্যবহার করুন।</li>
            <li>Unknown person-এর QR দিয়ে টাকা পাঠাবেন না।</li>
            <li>Fraud হলে transaction details সংরক্ষণ করুন।</li>
        </ul>
    `
},

refund: {
    title: "↩️ Fake Refund / Cashback Scam",
    html: `
        <ol>
            <li>Refund পাওয়ার জন্য OTP/PIN দেওয়ার দরকার নেই।</li>
            <li>Remote access app install করবেন না।</li>
            <li>Unknown link-এ login করবেন না।</li>
            <li>Official company/app-এর মাধ্যমে refund status check করুন।</li>
            <li>Payment fraud হলে bank/payment provider-কে জানান।</li>
        </ol>
    `
},

job: {
    title: "💼 Fake Job Scam",
    html: `
        <ol>
            <li>Company-এর official website থেকে vacancy verify করুন।</li>
            <li>অপরিচিত ব্যক্তিকে advance fee দেবেন না।</li>
            <li>OTP/PIN/share-screen access দেবেন না।</li>
            <li>Offer letter ও sender identity verify করুন।</li>
            <li>Payment করলে transaction evidence রাখুন।</li>
        </ol>
    `
},

loan: {
    title: "💰 Fake Loan App",
    html: `
        <ol>
            <li>অপরিচিত loan app install করার আগে developer/source যাচাই করুন।</li>
            <li>অপ্রয়োজনীয় contacts/photos/SMS permissions দেবেন না।</li>
            <li>Unofficial processing fee-তে টাকা দেবেন না।</li>
            <li>Threatening recovery হলে messages সংরক্ষণ করুন।</li>
            <li>Bank/payment details compromise হলে account secure করুন।</li>
        </ol>
    `
},

investment: {
    title: "📈 Investment / Trading Scam",
    html: `
        <ol>
            <li>Guaranteed profit-এর দাবি সন্দেহ করুন।</li>
            <li>Company/platform-এর identity independently verify করুন।</li>
            <li>আর টাকা পাঠানো বন্ধ করুন।</li>
            <li>Transaction IDs সংরক্ষণ করুন।</li>
            <li>Bank/payment provider-কে জানান যদি payment fraud হয়।</li>
        </ol>
    `
},

dating: {
    title: "❤️ Dating / Romance Scam",
    html: `
        <ol>
            <li>Online পরিচিত কাউকে টাকা পাঠানোর আগে identity independently verify করুন।</li>
            <li>Private documents বা banking credentials পাঠাবেন না।</li>
            <li>Repeated emergency money requests সন্দেহ করুন।</li>
            <li>Profile/messages/screenshots সংরক্ষণ করুন।</li>
            <li>প্রয়োজন হলে block/report করুন।</li>
        </ol>
    `
},

shopping: {
    title: "🛒 Online Shopping Scam",
    html: `
        <ol>
            <li>Seller ও website independently verify করুন।</li>
            <li>অস্বাভাবিকভাবে কম দামকে warning sign হিসেবে দেখুন।</li>
            <li>Unknown payment link ব্যবহার করবেন না।</li>
            <li>Order confirmation ও payment evidence রাখুন।</li>
            <li>Fraud হলে payment provider-এর সঙ্গে যোগাযোগ করুন।</li>
        </ol>
    `
},

screen: {
    title: "🖥️ Screen Sharing / Remote Access Scam",
    html: `
        <div class="cc-danger cc-note">
            অপরিচিত কাউকে remote access দিলে সে আপনার screen বা device-এর
            গুরুত্বপূর্ণ তথ্য দেখতে বা ব্যবহার করতে পারে।
        </div>

        <ol>
            <li>AnyDesk/TeamViewer/remote-control app অপরিচিত ব্যক্তির কথায় install করবেন না।</li>
            <li>Already installed হলে remote session বন্ধ করুন।</li>
            <li>অপ্রয়োজনীয় remote-access permission remove করুন।</li>
            <li>Important passwords trusted device থেকে পরিবর্তন করুন।</li>
            <li>Bank/payment account activity পরীক্ষা করুন।</li>
        </ol>
    `
},

/* ---------------- PHONE ---------------- */

phone: {
    title: "📱 Phone / Malware / Spyware Security",
    html: `
        <ol>
            <li>Operating system update করুন।</li>
            <li>Recently installed apps review করুন।</li>
            <li>Unknown app remove করুন।</li>
            <li>App permissions পরীক্ষা করুন।</li>
            <li>Accessibility permission পরীক্ষা করুন।</li>
            <li>Device-admin apps পরীক্ষা করুন।</li>
            <li>Google/Apple account sessions পরীক্ষা করুন।</li>
            <li>প্রয়োজন হলে trusted device থেকে important passwords পরিবর্তন করুন।</li>
        </ol>

        <div class="cc-note">
            গুরুত্বপূর্ণ evidence দরকার হতে পারে মনে হলে suspicious app/evidence
            তাড়াহুড়ো করে delete করবেন না।
        </div>
    `
},

/* ---------------- PRIVACY ---------------- */

privacy: {
    title: "🔒 Privacy Protection",
    html: `
        <h3>প্রতিদিনের Privacy Checklist</h3>
        <ul>
            <li>Unique passwords ব্যবহার করুন।</li>
            <li>2FA চালু করুন।</li>
            <li>Location sharing review করুন।</li>
            <li>Camera/microphone permissions review করুন।</li>
            <li>Social profile visibility review করুন।</li>
            <li>Unknown followers remove করুন।</li>
            <li>Third-party app connections review করুন।</li>
            <li>Active sessions review করুন।</li>
        </ul>
    `
},

location: {
    title: "📍 Location Privacy",
    html: `
        <ol>
            <li>Phone Settings → Location permissions review করুন।</li>
            <li>যে app-এর location দরকার নেই তার permission বন্ধ করুন।</li>
            <li>Social-media live location/sharing বন্ধ করুন যদি প্রয়োজন না থাকে।</li>
            <li>Google/Apple location sharing review করুন।</li>
            <li>Trusted people ছাড়া real-time location share করবেন না।</li>
        </ol>
    `
},

data: {
    title: "🗂️ Personal Data Leak",
    html: `
        <ol>
            <li>কোন তথ্য leak হয়েছে তা identify করুন।</li>
            <li>Compromised account-এর password পরিবর্তন করুন।</li>
            <li>Same password অন্য কোথাও ব্যবহার করলে সেগুলোও পরিবর্তন করুন।</li>
            <li>2FA চালু করুন।</li>
            <li>Financial information exposed হলে bank-এর সঙ্গে যোগাযোগ করুন।</li>
            <li>Evidence সংরক্ষণ করুন।</li>
        </ol>
    `
},

copyright: {
    title: "©️ Copyright / Content Misuse",
    html: `
        <ol>
            <li>Original content-এর proof রাখুন।</li>
            <li>Infringing page/profile URL save করুন।</li>
            <li>Screenshot রাখুন।</li>
            <li>Platform-এর official copyright reporting process ব্যবহার করুন।</li>
            <li>False claims করবেন না; সত্য তথ্য দিয়ে report করুন।</li>
        </ol>
    `
},

/* ---------------- HACKING ---------------- */

hacking: {
    title: "💻 Hacking Attempt",
    html: `
        <ol>
            <li>Important account passwords পরিবর্তন করুন।</li>
            <li>প্রতিটি account-এ unique password ব্যবহার করুন।</li>
            <li>2FA চালু করুন।</li>
            <li>Recent login activity পরীক্ষা করুন।</li>
            <li>Unknown sessions remove করুন।</li>
            <li>Suspicious emails/messages-এর screenshot রাখুন।</li>
        </ol>
    `
},

/* ---------------- WOMEN SAFETY ---------------- */

women: {
    title: "👩 Women Safety Center",
    html: `
        <h3>যদি কেউ online-এ বিরক্ত করে</h3>
        <ol>
            <li>Unnecessary argument করবেন না।</li>
            <li>Evidence রাখুন।</li>
            <li>Block/restrict করুন।</li>
            <li>Platform-এ report করুন।</li>
        </ol>

        <h3>যদি Blackmail করে</h3>
        <ol>
            <li>টাকা দেবেন না।</li>
            <li>আর private content পাঠাবেন না।</li>
            <li>Screenshot/URL রাখুন।</li>
            <li>Trusted person-কে জানান।</li>
        </ol>

        <h3>যদি Private Photo/Video নিয়ে হুমকি দেয়</h3>
        <ol>
            <li>Evidence preserve করুন।</li>
            <li>Platform report করুন।</li>
            <li>Account secure করুন।</li>
            <li>নিজেকে দোষ দেবেন না।</li>
        </ol>

        <h3>যদি Stalking হয়</h3>
        <ol>
            <li>Location sharing review করুন।</li>
            <li>Unknown followers remove করুন।</li>
            <li>Repeated contact-এর evidence রাখুন।</li>
            <li>Physical danger হলে trusted person ও appropriate authorities-এর সাহায্য নিন।</li>
        </ol>
    `
},

/* ---------------- LEARNING ---------------- */

password: {
    title: "🔐 Password Safety",
    html: `
        <ol>
            <li>প্রতিটি গুরুত্বপূর্ণ account-এর জন্য unique password ব্যবহার করুন।</li>
            <li>Long passphrase ব্যবহার করুন।</li>
            <li>Password manager ব্যবহার করতে পারেন।</li>
            <li>Password কাউকে দেবেন না।</li>
            <li>2FA চালু করুন।</li>
        </ol>
    `
},

"2fa": {
    title: "🔑 Two-Factor Authentication",
    html: `
        <p>
            2FA password-এর পাশাপাশি অতিরিক্ত verification layer যোগ করে।
        </p>

        <ul>
            <li>যেখানে সম্ভব authenticator app/security key ব্যবহার করুন।</li>
            <li>Recovery codes নিরাপদে রাখুন।</li>
            <li>Verification code কাউকে দেবেন না।</li>
        </ul>
    `
},

phishing: {
    title: "🎣 Phishing Awareness",
    html: `
        <ul>
            <li>Sender carefully check করুন।</li>
            <li>Urgent threat দেখেই বিশ্বাস করবেন না।</li>
            <li>Link carefully verify করুন।</li>
            <li>Request independently verify করুন।</li>
            <li>OTP/password দেবেন না।</li>
        </ul>
    `
},

financial: {
    title: "💳 Financial Safety",
    html: `
        <ul>
            <li>UPI PIN কখনো share করবেন না।</li>
            <li>Bank OTP share করবেন না।</li>
            <li>Payment request verify করুন।</li>
            <li>Money receive করার জন্য UPI PIN লাগে না।</li>
            <li>Unauthorized transaction হলে দ্রুত report করুন।</li>
        </ul>
    `
},

/* ---------------- EMERGENCY ---------------- */

emergency: {
    title: "🚨 Emergency Cyber Response",
    html: `
        <h3>1. Damage Stop করুন</h3>
        <p>আর টাকা, OTP, password বা private content পাঠাবেন না।</p>

        <h3>2. Account Secure করুন</h3>
        <p>Password পরিবর্তন করুন এবং unknown sessions remove করুন।</p>

        <h3>3. Evidence রাখুন</h3>
        <p>
            Screenshot, URL, username, transaction ID ও timestamp সংরক্ষণ করুন।
        </p>

        <h3>4. Financial Fraud হলে</h3>
        <p>
            Bank/payment provider-এর সঙ্গে দ্রুত যোগাযোগ করুন এবং official
            cybercrime reporting channel ব্যবহার করুন।
        </p>

        <h3>5. Physical Danger হলে</h3>
        <p>
            নিরাপদ জায়গায় যান এবং trusted person ও appropriate local
            emergency services-এর সাহায্য নিন।
        </p>
    `
}

};

/* ============================================================
   10. SEARCH ENGINE
============================================================ */

function scoreProblem(item, query) {

    const q = normalizeText(query);

    if (!q) return 0;

    let score = 0;

    const title =
        normalizeText(item.title);

    const bn =
        normalizeText(item.bn);

    const category =
        normalizeText(item.category);

    if (title === q) score += 20;
    if (bn === q) score += 20;

    if (title.includes(q)) score += 10;
    if (bn.includes(q)) score += 10;
    if (category.includes(q)) score += 4;

    item.keywords.forEach(keyword => {

        const k =
            normalizeText(keyword);

        if (k === q) {
            score += 15;
        }

        if (q.includes(k)) {
            score += 8;
        }

        if (k.includes(q)) {
            score += 5;
        }

    });

    const words =
        q.split(/\s+/).filter(Boolean);

    words.forEach(word => {

        if (word.length < 2) return;

        if (title.includes(word)) score += 3;
        if (bn.includes(word)) score += 3;

        item.keywords.forEach(keyword => {

            if (
                normalizeText(keyword)
                    .includes(word)
            ) {
                score += 2;
            }

        });

    });

    return score;
}

function findProblems(query) {

    return problemDatabase
        .map(item => ({
            item,
            score: scoreProblem(item, query)
        }))
        .filter(result => result.score > 0)
        .sort((a, b) =>
            b.score - a.score
        )
        .slice(0, 8)
        .map(result => result.item);
}

/* ============================================================
   11. SEARCH RESULT RENDER
============================================================ */

function renderSearchResults(results) {

    const container =
        $("#searchResults");

    if (!container) return;

    if (!results.length) {

        const t =
            translations[CyberCare.language];

        container.innerHTML = `
            <div class="cc-result-card">
                <h3>🔎 ${escapeHTML(t.noResult)}</h3>

                <p>
                    Try:
                    Facebook hacked,
                    blackmail,
                    OTP,
                    UPI fraud,
                    fake profile,
                    Instagram,
                    WhatsApp,
                    phone hacked,
                    phishing
                </p>
            </div>
        `;

        return;
    }

    container.innerHTML =
        results.map(item => {

            const title =
                CyberCare.language === "bn"
                    ? item.bn
                    : item.title;

            const t =
                translations[CyberCare.language];

            return `
                <article class="cc-result-card">

                    <h3>
                        ${escapeHTML(item.icon)}
                        ${escapeHTML(title)}
                    </h3>

                    <p>
                        ${escapeHTML(item.description)}
                    </p>

                    <div class="cc-result-actions">

                        <button
                            class="cc-small-btn result-guide"
                            data-guide="${escapeHTML(item.guide)}"
                        >
                            ${escapeHTML(t.openGuide)}
                        </button>

                    </div>

                </article>
            `;

        }).join("");

    $$(".result-guide", container)
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    openGuide(
                        button.dataset.guide
                    );

                }
            );

        });

}

/* ============================================================
   12. SEARCH EVENT
============================================================ */

function setupSearch() {

    const input =
        $("#problemSearch");

    const clear =
        $("#clearSearch");

    if (!input) return;

    let timer = null;

    input.addEventListener(
        "input",
        () => {

            clearTimeout(timer);

            timer = setTimeout(
                () => {

                    const query =
                        input.value.trim();

                    if (!query) {

                        if ($("#searchResults")) {
                            $("#searchResults").innerHTML = "";
                        }

                        return;
                    }

                    renderSearchResults(
                        findProblems(query)
                    );

                },
                100
            );

        }
    );

    input.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                const results =
                    findProblems(
                        input.value
                    );

                renderSearchResults(results);

            }

        }
    );

    clear?.addEventListener(
        "click",
        () => {

            input.value = "";

            if ($("#searchResults")) {
                $("#searchResults").innerHTML = "";
            }

            input.focus();

        }
    );

}

setupSearch();

/* ============================================================
   13. GUIDE MODAL
============================================================ */

function closeGuide() {

    const overlay =
        $(".cc-guide-overlay");

    if (overlay) {
        overlay.remove();
    }

    document.body.style.overflow = "";

    CyberCare.currentGuide = null;
}

function showGuide(title, content) {

    closeGuide();

    const overlay =
        document.createElement("div");

    overlay.className =
        "cc-guide-overlay";

    overlay.innerHTML = `
        <div
            class="cc-guide-modal"
            role="dialog"
            aria-modal="true"
            aria-label="${escapeHTML(title)}"
        >

            <button
                class="cc-guide-close"
                type="button"
                aria-label="Close"
            >
                ✕
            </button>

            <h2>
                ${escapeHTML(title)}
            </h2>

            <div class="cc-guide-content">
                ${content}
            </div>

            <div class="cc-guide-actions">

                <button
                    class="cc-guide-ok"
                    type="button"
                >
                    Got it ✓
                </button>

                <button
                    class="cc-guide-ok cc-copy-guide"
                    type="button"
                >
                    📋 Copy Guide
                </button>

            </div>

        </div>
    `;

    document.body.appendChild(overlay);

    document.body.style.overflow = "hidden";

    overlay
        .querySelector(".cc-guide-close")
        ?.addEventListener(
            "click",
            closeGuide
        );

    overlay
        .querySelector(".cc-guide-ok")
        ?.addEventListener(
            "click",
            closeGuide
        );

    overlay
        .querySelector(".cc-copy-guide")
        ?.addEventListener(
            "click",
            async () => {

                const text =
                    overlay
                        .querySelector(".cc-guide-content")
                        ?.innerText || "";

                try {

                    await navigator.clipboard.writeText(
                        text
                    );

                    alert(
                        CyberCare.language === "bn"
                            ? "Guide copied."
                            : "Guide copied."
                    );

                } catch (_) {

                    alert(
                        "Copy is not available on this browser."
                    );

                }

            }
        );

    overlay.addEventListener(
        "click",
        event => {

            if (
                event.target === overlay
            ) {
                closeGuide();
            }

        }
    );

    CyberCare.currentGuide = title;
}

function openGuide(type) {

    const guide =
        guides[type];

    if (!guide) {

        showGuide(
            "🛡️ CyberCare Safety Guide",
            `
                <p>
                    Preserve evidence, secure your accounts,
                    avoid further interaction with suspicious people
                    and use official reporting channels.
                </p>
            `
        );

        return;
    }

    showGuide(
        guide.title,
        guide.html
    );
}

/* ============================================================
   14. WOMEN SAFETY
============================================================ */

function openWomenSafety() {
    openGuide("women");
}

$$(".women-btn").forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const type =
                button.dataset.women;

            if (type === "harassment") {
                openGuide("harassment");
            }

            else if (type === "photo") {
                openGuide("photo");
            }

            else if (type === "fakeprofile") {
                openGuide("fakeprofile");
            }

            else if (type === "blackmail") {
                openGuide("blackmail");
            }

            else if (type === "private") {
                openGuide("private");
            }

            else if (type === "stalking") {
                openGuide("stalking");
            }

            else {
                openWomenSafety();
            }

        }
    );

});

/* ============================================================
   15. SERVICE BUTTONS
============================================================ */

$$(".help-btn").forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const service =
                normalizeText(
                    button.dataset.service
                );

            if (
                service.includes("account")
            ) {
                openGuide("account");
            }

            else if (
                service.includes("scam")
            ) {
                openGuide("scam");
            }

            else if (
                service.includes("phone")
            ) {
                openGuide("phone");
            }

            else if (
                service.includes("fraud")
            ) {
                openGuide("money");
            }

            else if (
                service.includes("suspicious")
            ) {
                openGuide("phone");
            }

            else if (
                service.includes("emergency")
            ) {
                openEmergencyGuide();
            }

            else {
                openGuide("account");
            }

        }
    );

});

/* ============================================================
   16. EMERGENCY
============================================================ */

function openEmergencyGuide() {
    openGuide("emergency");
}

$("#emergencyBtn")?.addEventListener(
    "click",
    openEmergencyGuide
);

$$("[data-emergency]").forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const type =
                    button.dataset.emergency;

                if (
                    type === "account"
                ) {
                    openGuide("account");
                }

                else if (
                    type === "money"
                ) {
                    openGuide("money");
                }

                else if (
                    type === "blackmail"
                ) {
                    openGuide("blackmail");
                }

                else if (
                    type === "phone"
                ) {
                    openGuide("phone");
                }

                else {
                    openEmergencyGuide();
                }

            }
        );

    }
);

/* ============================================================
   17. QUICK HELP
============================================================ */

$("#quickHelpBtn")?.addEventListener(
    "click",
    () => {

        const input =
            $("#problemSearch");

        scrollToSection("services");

        setTimeout(
            () => input?.focus(),
            500
        );

    }
);

/* ============================================================
   18. LEARNING GUIDES
============================================================ */

const learningGuideMap = {

    password: "password",

    "2fa": "2fa",

    phishing: "phishing",

    privacy: "privacy",

    phone: "phone",

    financial: "financial"

};

function openLearningGuide(type) {

    const guide =
        guides[
            learningGuideMap[type] || type
        ];

    if (!guide) return;

    showGuide(
        guide.title,
        guide.html
    );
}

$$(".learn-card").forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                openLearningGuide(
                    button.dataset.learn
                );

            }
        );

    }
);

/* ============================================================
   19. SCAM SCANNER
============================================================ */

function runScamScanner() {

    showGuide(
        "🎣 Scam Message Scanner",
        `
            <p>
                Paste the suspicious message below.
                This scanner works locally in your browser.
            </p>

            <textarea
                id="scamInput"
                rows="7"
                style="
                    width:100%;
                    padding:14px;
                    margin-top:14px;
                    border:1px solid #cbd5e1;
                    border-radius:12px;
                    resize:vertical;
                "
                placeholder="Paste suspicious message..."
            ></textarea>

            <button
                id="runScamCheck"
                class="cc-guide-ok"
                style="margin-top:12px;"
            >
                🔎 Scan Message
            </button>

            <div
                id="scamResult"
                style="margin-top:15px;"
            ></div>
        `
    );

    $("#runScamCheck")
        ?.addEventListener(
            "click",
            scanMessage
        );

}

function scanMessage() {

    const input =
        $("#scamInput");

    const result =
        $("#scamResult");

    if (!input || !result) return;

    const text =
        normalizeText(input.value);

    if (!text) {

        result.innerHTML = `
            <div class="cc-note">
                Please paste a message first.
            </div>
        `;

        return;
    }

    const rules = [

        {
            words: [
                "otp",
                "verification code",
                "one time password",
                "ওটিপি"
            ],
            message:
                "OTP/verification-code request is a major warning sign."
        },

        {
            words: [
                "upi pin",
                "bank pin",
                "atm pin",
                "পিন"
            ],
            message:
                "Requests for a UPI/banking PIN are dangerous."
        },

        {
            words: [
                "urgent",
                "immediately",
                "act now",
                "within 10 minutes",
                "জরুরি",
                "এখনই"
            ],
            message:
                "Artificial urgency is commonly used in scams."
        },

        {
            words: [
                "click this link",
                "click here",
                "verify now",
                "login now",
                "লিংকে ক্লিক"
            ],
            message:
                "Unexpected links or login requests can indicate phishing."
        },

        {
            words: [
                "prize",
                "lottery",
                "winner",
                "reward",
                "লটারি",
                "পুরস্কার"
            ],
            message:
                "Unexpected prize/reward claims can be scam indicators."
        },

        {
            words: [
                "refund",
                "cashback",
                "রিফান্ড"
            ],
            message:
                "Fake refund/cashback requests are common fraud techniques."
        },

        {
            words: [
                "screen share",
                "anydesk",
                "teamviewer",
                "remote access"
            ],
            message:
                "Remote-control requests can expose your device."
        },

        {
            words: [
                "pay fee",
                "processing fee",
                "registration fee"
            ],
            message:
                "Unexpected fee requests can be a scam warning."
        }

    ];

    const warnings = [];

    rules.forEach(rule => {

        if (
            rule.words.some(
                word => text.includes(word)
            )
        ) {
            warnings.push(
                rule.message
            );
        }

    });

    if (!warnings.length) {

        result.innerHTML = `
            <div class="cc-safe cc-note">
                <strong>
                    🟢 No obvious warning pattern detected.
                </strong>

                <p>
                    This does NOT prove the message is safe.
                    Verify independently.
                </p>
            </div>
        `;

        return;
    }

    result.innerHTML = `
        <div class="cc-danger cc-note">

            <strong>
                🔴 Warning signs detected
            </strong>

            <ul>
                ${warnings.map(
                    warning =>
                        `<li>${escapeHTML(warning)}</li>`
                ).join("")}
            </ul>

            <p>
                Do not share OTPs, passwords, PINs or payment information.
            </p>

        </div>
    `;

}

/* ============================================================
   20. PASSWORD CHECKER
============================================================ */

function runPasswordChecker() {

    showGuide(
        "🔐 Password Strength Checker",
        `
            <p>
                The checker works locally. CyberCare does not send
                the password to a server.
            </p>

            <input
                id="passwordInput"
                type="password"
                autocomplete="off"
                placeholder="Enter password"
                style="
                    width:100%;
                    min-height:48px;
                    padding:12px;
                    margin-top:14px;
                    border:1px solid #cbd5e1;
                    border-radius:10px;
                "
            >

            <button
                id="checkPasswordBtn"
                class="cc-guide-ok"
                style="margin-top:12px;"
            >
                Check Strength
            </button>

            <div
                id="passwordResult"
                style="margin-top:15px;"
            ></div>
        `
    );

    $("#checkPasswordBtn")
        ?.addEventListener(
            "click",
            checkPasswordStrength
        );

}

function checkPasswordStrength() {

    const input =
        $("#passwordInput");

    const result =
        $("#passwordResult");

    if (!input || !result) return;

    const password =
        input.value;

    if (!password) {

        result.innerHTML = `
            <div class="cc-note">
                Enter a password to check.
            </div>
        `;

        return;
    }

    let score = 0;

    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    let level =
        "Weak";

    let advice =
        "Use a longer and unique passphrase.";

    if (score >= 5) {

        level =
            "Strong";

        advice =
            "Good structure. Keep it unique and enable 2FA.";

    }

    else if (score >= 3) {

        level =
            "Moderate";

        advice =
            "Make it longer and more unique.";

    }

    result.innerHTML = `
        <div class="cc-safe cc-note">

            <strong>
                Strength: ${escapeHTML(level)}
            </strong>

            <p>
                ${escapeHTML(advice)}
            </p>

        </div>
    `;

}

/* ============================================================
   21. URL CHECKER
============================================================ */

function runURLChecker() {

    showGuide(
        "🔗 URL Safety Checker",
        `
            <p>
                This is a local warning-sign checker.
                It cannot guarantee that a website is safe.
            </p>

            <input
                id="urlInput"
                type="url"
                placeholder="https://example.com"
                style="
                    width:100%;
                    min-height:48px;
                    padding:12px;
                    margin-top:14px;
                    border:1px solid #cbd5e1;
                    border-radius:10px;
                "
            >

            <button
                id="checkURLBtn"
                class="cc-guide-ok"
                style="margin-top:12px;"
            >
                Check URL
            </button>

            <div
                id="urlResult"
                style="margin-top:15px;"
            ></div>
        `
    );

    $("#checkURLBtn")
        ?.addEventListener(
            "click",
            checkURL
        );

}

function checkURL() {

    const input =
        $("#urlInput");

    const result =
        $("#urlResult");

    if (!input || !result) return;

    const value =
        input.value.trim();

    if (!value) {

        result.innerHTML = `
            <div class="cc-note">
                Enter a URL first.
            </div>
        `;

        return;
    }

    let url;

    try {

        url =
            new URL(value);

    } catch (_) {

        result.innerHTML = `
            <div class="cc-danger cc-note">
                ❌ Invalid URL format.
            </div>
        `;

        return;
    }

    const warnings = [];

    if (url.protocol !== "https:") {

        warnings.push(
            "The URL does not use HTTPS."
        );

    }

    if (
        url.hostname.split(".").length > 4
    ) {

        warnings.push(
            "The domain has an unusually deep subdomain structure."
        );

    }

    if (
        /xn--/i.test(url.hostname)
    ) {

        warnings.push(
            "The domain uses internationalized/punycode characters. Verify the domain carefully."
        );

    }

    if (warnings.length) {

        result.innerHTML = `
            <div class="cc-note">

                <strong>
                    ⚠️ Review carefully
                </strong>

                <ul>
                    ${warnings.map(
                        warning =>
                            `<li>${escapeHTML(warning)}</li>`
                    ).join("")}
                </ul>

                <p>
                    URL appearance alone cannot prove that a website is malicious.
                </p>

            </div>
        `;

    }

    else {

        result.innerHTML = `
            <div class="cc-safe cc-note">

                🟢 No basic warning pattern detected.

                <p>
                    This does not guarantee that the website is safe.
                </p>

            </div>
        `;

    }

}

/* ============================================================
   22. PRIVACY CHECKLIST
============================================================ */

function openPrivacyChecklist() {

    showGuide(
        "🔒 Privacy Checklist",
        `
            <div>

                <p>Check these regularly:</p>

                <ul>
                    <li>🔐 Unique passwords</li>
                    <li>🔑 2FA enabled</li>
                    <li>📍 Location sharing reviewed</li>
                    <li>📱 Unused apps removed</li>
                    <li>🎥 Camera permissions reviewed</li>
                    <li>🎙️ Microphone permissions reviewed</li>
                    <li>👥 Social-media privacy reviewed</li>
                    <li>💻 Unknown sessions removed</li>
                    <li>☁️ Third-party connections reviewed</li>
                </ul>

            </div>
        `
    );

}

/* ============================================================
   23. EVIDENCE CHECKLIST
============================================================ */

function openEvidenceChecklist() {

    showGuide(
        "🧾 Evidence Preservation Checklist",
        `
            <p>
                Evidence preserve করার চেষ্টা করুন, বিশেষ করে report/block
                করার আগে যখন তা নিরাপদ ও সম্ভব।
            </p>

            <ul>
                <li>📸 Screenshots</li>
                <li>👤 Username/profile name</li>
                <li>🔗 Profile/content URL</li>
                <li>📅 Date and time</li>
                <li>📞 Phone number</li>
                <li>💳 Transaction ID</li>
                <li>📧 Relevant emails</li>
                <li>📝 Short incident timeline</li>
            </ul>

            <div class="cc-note">
                Original evidence edit না করে নিরাপদে রাখুন।
            </div>
        `
    );

}

/* ============================================================
   24. CYBER SAFETY SCORE
============================================================ */

function runSafetyScore() {

    const questions = [

        "Unique passwords",
        "2FA enabled",
        "OTP/PIN never shared",
        "Phone/apps updated",
        "App permissions reviewed",
        "Suspicious links avoided",
        "Active sessions reviewed",
        "Important data backed up"

    ];

    showGuide(
        "🛡️ Cyber Safety Score",
        `
            <p>
                আপনি যে security habits অনুসরণ করেন সেগুলো select করুন।
            </p>

            <div style="margin-top:15px;">

                ${questions.map(
                    (question, index) => `
                        <label
                            style="
                                display:block;
                                padding:11px;
                                margin-bottom:8px;
                                border:1px solid #e2e8f0;
                                border-radius:10px;
                            "
                        >

                            <input
                                type="checkbox"
                                class="cc-score-question"
                                value="1"
                            >

                            ${escapeHTML(question)}

                        </label>
                    `
                ).join("")}

            </div>

            <button
                id="calculateScore"
                class="cc-guide-ok"
            >
                Calculate Score
            </button>

            <div
                id="scoreResult"
                style="margin-top:15px;"
            ></div>
        `
    );

    $("#calculateScore")
        ?.addEventListener(
            "click",
            calculateSafetyScore
        );

}

function calculateSafetyScore() {

    const total =
        $$(".cc-score-question").length;

    const checked =
        $$(".cc-score-question:checked").length;

    if (!total) return;

    const percentage =
        Math.round(
            (checked / total) * 100
        );

    let message;

    if (percentage >= 80) {

        message =
            "Excellent! Your basic security habits are strong.";

    }

    else if (percentage >= 50) {

        message =
            "Good start. Strengthen the habits you missed.";

    }

    else {

        message =
            "Start with unique passwords, 2FA and phishing awareness.";

    }

    const result =
        $("#scoreResult");

    if (!result) return;

    result.innerHTML = `
        <div class="cc-safe cc-note">

            <strong>
                Your Cyber Safety Score: ${percentage}%
            </strong>

            <p>
                ${escapeHTML(message)}
            </p>

        </div>
    `;

}

/* ============================================================
   25. TOOL ROUTER
============================================================ */

function routeTool(tool) {

    switch (tool) {

        case "scam":
            runScamScanner();
            break;

        case "password":
            runPasswordChecker();
            break;

        case "url":
            runURLChecker();
            break;

        case "privacy":
            openPrivacyChecklist();
            break;

        case "evidence":
            openEvidenceChecklist();
            break;

        case "score":
            runSafetyScore();
            break;

        default:
            showGuide(
                "🛡️ CyberCare Tool",
                `
                    <p>
                        This tool is currently being prepared.
                    </p>
                `
            );

    }

}

$$(".tool-btn").forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                routeTool(
                    button.dataset.tool
                );

            }
        );

    }
);

/* ============================================================
   26. AUTOMATIC TOOL FALLBACK BUTTONS
============================================================ */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-tool]"
            );

        if (
            button &&
            !button.classList.contains("tool-btn")
        ) {

            routeTool(
                button.dataset.tool
            );

        }

    }
);

/* ============================================================
   27. KEYBOARD SUPPORT
============================================================ */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeGuide();

            const panel =
                $("#ccMorePanel");

            if (panel) {
                panel.classList.remove(
                    "active"
                );
            }

        }

    }
);

/* ============================================================
   28. SMART PROBLEM AUTOCOMPLETE
============================================================ */

function createSearchSuggestions() {

    const input =
        $("#problemSearch");

    if (!input) return;

    let box =
        $("#ccSearchSuggestions");

    if (!box) {

        box =
            document.createElement("div");

        box.id =
            "ccSearchSuggestions";

        box.style.cssText = `
            position:relative;
            z-index:20;
        `;

        input.parentElement?.appendChild(
            box
        );

    }

    input.addEventListener(
        "input",
        () => {

            const query =
                input.value.trim();

            if (
                query.length < 2
            ) {

                box.innerHTML = "";
                return;

            }

            const results =
                findProblems(query)
                    .slice(0, 5);

            box.innerHTML =
                results.map(item => {

                    const title =
                        CyberCare.language === "bn"
                            ? item.bn
                            : item.title;

                    return `
                        <button
                            type="button"
                            class="cc-more-item cc-suggestion"
                            data-guide="${escapeHTML(item.guide)}"
                            style="
                                background:var(--cc-panel,#fff);
                                border:1px solid rgba(148,163,184,.2);
                                margin-top:4px;
                            "
                        >
                            ${escapeHTML(item.icon)}
                            ${escapeHTML(title)}
                        </button>
                    `;

                }).join("");

            $$(".cc-suggestion", box)
                .forEach(button => {

                    button.addEventListener(
                        "click",
                        () => {

                            box.innerHTML = "";

                            openGuide(
                                button.dataset.guide
                            );

                        }
                    );

                });

        }
    );

}

createSearchSuggestions();

/* ============================================================
   29. CLEAN MAIN PAGE
   Hide unnecessary detailed blocks when More menu exists.
   Does NOT delete existing content.
============================================================ */

function cleanMainInterface() {

    const candidates = [
        ".advanced-tools",
        ".all-tools",
        ".detailed-tools",
        ".tool-grid-extra"
    ];

    candidates.forEach(selector => {

        $$(selector).forEach(element => {

            element.dataset.cybercareHidden =
                "true";

            element.style.display =
                "none";

        });

    });

}

cleanMainInterface();

/* ============================================================
   30. QUICK CATEGORY HELP
============================================================ */

function openCategory(category) {

    const results =
        problemDatabase.filter(
            item =>
                normalizeText(
                    item.category
                ) ===
                normalizeText(category)
        );

    if (!results.length) return;

    const title =
        `🛡️ ${escapeHTML(category)}`;

    const html = `
        <p>
            Select a problem to open its complete safety guide.
        </p>

        <div>

            ${results.map(item => {

                const name =
                    CyberCare.language === "bn"
                        ? item.bn
                        : item.title;

                return `
                    <button
                        class="cc-more-item cc-category-guide"
                        data-guide="${escapeHTML(item.guide)}"
                        style="
                            border:1px solid rgba(148,163,184,.2);
                            margin:4px 0;
                        "
                    >
                        ${escapeHTML(item.icon)}
                        ${escapeHTML(name)}
                    </button>
                `;

            }).join("")}

        </div>
    `;

    showGuide(
        title,
        html
    );

    $$(".cc-category-guide")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const guide =
                        button.dataset.guide;

                    openGuide(guide);

                }
            );

        });

}

/* ============================================================
   31. GLOBAL CATEGORY BUTTON SUPPORT
============================================================ */

$$("[data-category]").forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                openCategory(
                    button.dataset.category
                );

            }
        );

    }
);

/* ============================================================
   32. GLOBAL GUIDE BUTTON SUPPORT
============================================================ */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                "[data-guide]"
            );

        if (
            !button ||
            button.classList.contains(
                "result-guide"
            )
        ) {
            return;
        }

        const guide =
            button.dataset.guide;

        if (
            guide &&
            guides[guide]
        ) {

            openGuide(guide);

        }

    }
);

/* ============================================================
   33. SEARCH ENTER -> FIRST RESULT
============================================================ */

$("#problemSearch")
    ?.addEventListener(
        "keydown",
        event => {

            if (
                event.key !== "Enter"
            ) {
                return;
            }

            const results =
                findProblems(
                    event.target.value
                );

            if (
                results.length
            ) {

                openGuide(
                    results[0].guide
                );

            }

        }
    );

/* ============================================================
   34. EMERGENCY FLOATING BUTTON
   Only create if an emergency button does not already exist.
============================================================ */

function createEmergencyFallback() {

    if (
        $("#emergencyBtn") ||
        $(".cc-emergency-bar")
    ) {
        return;
    }

    const bar =
        document.createElement("div");

    bar.className =
        "cc-emergency-bar";

    bar.innerHTML = `
        <button
            type="button"
            id="ccEmergencyFallback"
        >
            🚨 I Need Help Now
        </button>
    `;

    document.body.appendChild(bar);

    $("#ccEmergencyFallback")
        ?.addEventListener(
            "click",
            openEmergencyGuide
        );

}

document.addEventListener(
    "DOMContentLoaded",
    createEmergencyFallback
);

/* ============================================================
   35. INITIALIZATION
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        createMoreMenu();

        applyTheme();

        applyLanguage();

        console.log(
            "🛡️ CyberCare — Clean Interface + A-Z Safety System loaded."
        );

    }
);

/* ============================================================
   END OF CYBERCARE SCRIPT
============================================================ */
