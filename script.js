/* =========================================================
   CYBERCARE — COMPLETE SCRIPT.JS
   Smart Search + Guides + Women Safety + Tools
   Emergency + Dark Mode + Language + Side Menu
========================================================= */

"use strict";

/* =========================================================
   GLOBAL HELPERS
========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function scrollToSection(id) {
    const el = document.getElementById(id);

    if (el) {
        el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

/* =========================================================
   SIDE MENU
========================================================= */

const menuBtn = $("#menuBtn");
const closeMenu = $("#closeMenu");
const sideMenu = $("#sideMenu");
const menuOverlay = $("#menuOverlay");

function openMenu() {
    if (!sideMenu || !menuOverlay) return;

    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");
    document.body.classList.add("menu-open");
}

function closeSideMenu() {
    if (!sideMenu || !menuOverlay) return;

    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
}

menuBtn?.addEventListener("click", openMenu);
closeMenu?.addEventListener("click", closeSideMenu);
menuOverlay?.addEventListener("click", closeSideMenu);

$$(".menu-item").forEach((button) => {
    button.addEventListener("click", () => {
        const section = button.dataset.menu;

        closeSideMenu();

        if (section) {
            setTimeout(() => {
                scrollToSection(section);
            }, 100);
        }
    });
});

/* =========================================================
   DARK MODE
========================================================= */

const themeBtn = $("#themeBtn");

function updateThemeIcon() {
    if (!themeBtn) return;

    themeBtn.textContent =
        document.body.classList.contains("dark-mode")
            ? "☀️"
            : "🌙";
}

function loadTheme() {
    const savedTheme = localStorage.getItem("cybercare-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    updateThemeIcon();
}

themeBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "cybercare-theme",
        isDark ? "dark" : "light"
    );

    updateThemeIcon();
});

loadTheme();

/* =========================================================
   LANGUAGE SYSTEM
   EN / বাংলা
========================================================= */

const languageBtn = $("#languageBtn");
const languageText = $("#languageText");

let currentLanguage =
    localStorage.getItem("cybercare-language") || "en";

const translations = {

    en: {
        language: "EN",

        heroTitle: "CyberCare",
        heroSubtitle:
            "Protecting People. Securing Digital Lives.",

        heroDescription:
            "Simple, practical and step-by-step guidance for hacking, scams, harassment, blackmail, privacy, financial fraud and digital threats.",

        emergency: "🚨 I Need Help Now",
        findProblem: "🔎 Find My Problem",

        searchTitle: "🔎 What happened?",
        searchDescription:
            "Describe your problem. CyberCare will find the most relevant safety guide.",

        searchPlaceholder:
            "Example: someone is blackmailing me..."
    },

    bn: {
        language: "বাংলা",

        heroTitle: "CyberCare",
        heroSubtitle:
            "মানুষকে সুরক্ষিত রাখি। ডিজিটাল জীবন নিরাপদ রাখি।",

        heroDescription:
            "হ্যাকিং, স্ক্যাম, হয়রানি, ব্ল্যাকমেইল, গোপনীয়তা, আর্থিক প্রতারণা এবং অন্যান্য ডিজিটাল সমস্যার সহজ ও ধাপে ধাপে সমাধান।",

        emergency: "🚨 এখনই সাহায্য চাই",
        findProblem: "🔎 আমার সমস্যাটি খুঁজুন",

        searchTitle: "🔎 কী ঘটেছে?",
        searchDescription:
            "আপনার সমস্যাটি লিখুন। CyberCare সবচেয়ে উপযুক্ত নিরাপত্তা নির্দেশনা খুঁজে দেবে।",

        searchPlaceholder:
            "উদাহরণ: কেউ আমাকে ব্ল্যাকমেইল করছে..."
    }

};

function setText(selector, text) {
    const element = $(selector);

    if (element) {
        element.textContent = text;
    }
}

function applyLanguage() {

    const t = translations[currentLanguage];

    if (!t) return;

    if (languageText) {
        languageText.textContent = t.language;
    }

    setText(".hero h1", t.heroTitle);
    setText(".hero h2", t.heroSubtitle);
    setText(".hero p", t.heroDescription);

    setText("#emergencyBtn", t.emergency);
    setText("#quickHelpBtn", t.findProblem);

    setText(".search-section h2", t.searchTitle);
    setText(".search-section > p", t.searchDescription);

    const input = $("#problemSearch");

    if (input) {
        input.placeholder = t.searchPlaceholder;
    }

    document.documentElement.lang =
        currentLanguage === "bn" ? "bn" : "en";
}

languageBtn?.addEventListener("click", () => {

    currentLanguage =
        currentLanguage === "en"
            ? "bn"
            : "en";

    localStorage.setItem(
        "cybercare-language",
        currentLanguage
    );

    applyLanguage();
});

applyLanguage();

/* =========================================================
   SMART SEARCH DATABASE
========================================================= */

const problemDatabase = [

    {
        title: "Facebook Account Recovery",
        keywords: [
            "facebook",
            "fb",
            "facebook account",
            "account hacked",
            "fb hacked",
            "ফেসবুক",
            "ফেসবুক হ্যাক",
            "ফেসবুক একাউন্ট"
        ],
        description:
            "If you cannot access your Facebook account or someone changed your password, start account recovery immediately.",
        type: "account"
    },

    {
        title: "Instagram Account Recovery",
        keywords: [
            "instagram",
            "insta",
            "instagram hacked",
            "ইনস্টাগ্রাম",
            "ইন্সটাগ্রাম"
        ],
        description:
            "Secure your email first, then use Instagram's official account recovery options.",
        type: "account"
    },

    {
        title: "WhatsApp Account Security",
        keywords: [
            "whatsapp",
            "whatsapp hacked",
            "whatsapp account",
            "হোয়াটসঅ্যাপ",
            "হোয়াটসঅ্যাপ"
        ],
        description:
            "Check linked devices, enable two-step verification and never share your WhatsApp verification code.",
        type: "whatsapp"
    },

    {
        title: "Google Account Recovery",
        keywords: [
            "google",
            "gmail",
            "gmail hacked",
            "google account",
            "গুগল",
            "জিমেইল"
        ],
        description:
            "Use Google's official account recovery process and secure your recovery email and phone.",
        type: "google"
    },

    {
        title: "Blackmail / Threat",
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
            "Do not pay or send additional private content. Preserve evidence and secure your accounts.",
        type: "blackmail"
    },

    {
        title: "Private Photo / Video Threat",
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
            "Do not negotiate by sending more content. Save evidence, block/report the person and seek appropriate help.",
        type: "private"
    },

    {
        title: "Online Harassment",
        keywords: [
            "harassment",
            "abuse",
            "bad message",
            "disturbing",
            "bothering",
            "হয়রানি",
            "হয়রানি",
            "খারাপ মেসেজ"
        ],
        description:
            "Preserve messages, restrict/block the person and report the account through the relevant platform.",
        type: "harassment"
    },

    {
        title: "Fake Profile",
        keywords: [
            "fake profile",
            "fake account",
            "fake facebook",
            "fake instagram",
            "ভুয়া প্রোফাইল",
            "ফেক প্রোফাইল"
        ],
        description:
            "Collect the profile URL and screenshots, report impersonation and warn trusted contacts if necessary.",
        type: "fakeprofile"
    },

    {
        title: "Scam / Phishing",
        keywords: [
            "scam",
            "phishing",
            "fake link",
            "otp",
            "verification code",
            "suspicious link",
            "স্ক্যাম",
            "ফিশিং",
            "ওটিপি",
            "ভুয়া লিংক"
        ],
        description:
            "Do not click suspicious links or share OTPs. Verify the sender independently before taking action.",
        type: "scam"
    },

    {
        title: "UPI / Financial Fraud",
        keywords: [
            "upi",
            "bank fraud",
            "money stolen",
            "payment fraud",
            "card fraud",
            "financial fraud",
            "money scam",
            "ইউপিআই",
            "ব্যাংক",
            "টাকা কেটে নিয়েছে",
            "টাকা কেটে নিয়েছে"
        ],
        description:
            "If money was transferred fraudulently, contact your bank/payment provider immediately and report through official channels.",
        type: "money"
    },

    {
        title: "Phone Security",
        keywords: [
            "phone hacked",
            "spyware",
            "unknown app",
            "phone security",
            "phone compromised",
            "ফোন হ্যাক",
            "স্পাইওয়্যার",
            "অজানা অ্যাপ"
        ],
        description:
            "Review installed apps, permissions, system updates and account sessions. Remove suspicious software carefully.",
        type: "phone"
    },

    {
        title: "Online Stalking",
        keywords: [
            "stalking",
            "online stalking",
            "monitoring",
            "tracking",
            "স্টকিং",
            "অনলাইনে অনুসরণ"
        ],
        description:
            "Document repeated unwanted contact, review location sharing and privacy settings, and block/report the account.",
        type: "stalking"
    }

];

/* =========================================================
   SEARCH
========================================================= */

const problemSearch = $("#problemSearch");
const searchResults = $("#searchResults");
const clearSearch = $("#clearSearch");

function normalizeText(text) {

    return String(text)
        .toLowerCase()
        .trim();

}

function findProblems(query) {

    const normalized = normalizeText(query);

    if (!normalized) return [];

    return problemDatabase
        .map(item => {

            let score = 0;

            if (
                normalizeText(item.title)
                    .includes(normalized)
            ) {
                score += 5;
            }

            item.keywords.forEach(keyword => {

                const k = normalizeText(keyword);

                if (normalized.includes(k)) {
                    score += 3;
                }

                if (k.includes(normalized)) {
                    score += 2;
                }

            });

            return {
                ...item,
                score
            };

        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
}

function renderSearchResults(results) {

    if (!searchResults) return;

    if (!results.length) {

        searchResults.innerHTML = `
            <div class="search-result">
                <h3>🔎 No exact guide found</h3>
                <p>
                    Try words like:
                    <strong>Facebook hacked</strong>,
                    <strong>blackmail</strong>,
                    <strong>OTP scam</strong>,
                    <strong>UPI fraud</strong>,
                    <strong>fake profile</strong>.
                </p>
            </div>
        `;

        return;
    }

    searchResults.innerHTML = results.map((item, index) => `
        <div class="search-result">

            <h3>${escapeHTML(item.title)}</h3>

            <p>${escapeHTML(item.description)}</p>

            <button
                class="result-help"
                data-result-type="${escapeHTML(item.type)}"
            >
                Open Safety Guide →
            </button>

        </div>
    `).join("");

    $$(".result-help").forEach(button => {

        button.addEventListener("click", () => {

            const type = button.dataset.resultType;

            openGuide(type);

        });

    });

}

problemSearch?.addEventListener("input", () => {

    const query = problemSearch.value;

    if (!query.trim()) {

        if (searchResults) {
            searchResults.innerHTML = "";
        }

        return;
    }

    const results = findProblems(query);

    renderSearchResults(results);

});

clearSearch?.addEventListener("click", () => {

    if (problemSearch) {
        problemSearch.value = "";
        problemSearch.focus();
    }

    if (searchResults) {
        searchResults.innerHTML = "";
    }

});

/* =========================================================
   GUIDE CONTENT
========================================================= */

const guides = {

    account: {
        title: "🔐 Account Recovery",
        html: `
            <h3>1. Secure your email first</h3>
            <p>
                If your email is also compromised, recover and secure
                the email account before other accounts.
            </p>

            <h3>2. Use the official recovery page</h3>
            <p>
                Do not trust random people offering recovery services.
                Use only the platform's official recovery process.
            </p>

            <h3>3. Change your password</h3>
            <p>
                Create a new, unique password that you have not used
                elsewhere.
            </p>

            <h3>4. Sign out unknown devices</h3>
            <p>
                Review active sessions and remove devices you do not recognize.
            </p>

            <h3>5. Enable 2FA</h3>
            <p>
                Turn on two-factor authentication after recovering the account.
            </p>

            <div class="important-note">
                Never give your OTP, recovery code or password to anyone claiming
                they can recover your account.
            </div>
        `
    },

    whatsapp: {
        title: "📱 WhatsApp Security",
        html: `
            <ol>
                <li>Open WhatsApp and check <strong>Linked Devices</strong>.</li>
                <li>Log out devices you do not recognize.</li>
                <li>Enable <strong>Two-step verification</strong>.</li>
                <li>Never share your WhatsApp verification code.</li>
                <li>Tell close contacts if someone is impersonating you.</li>
            </ol>

            <div class="important-note">
                WhatsApp will never need your verification code through a random caller or message.
            </div>
        `
    },

    google: {
        title: "🔐 Google / Gmail Recovery",
        html: `
            <ol>
                <li>Use Google's official account recovery process.</li>
                <li>Change your password after recovery.</li>
                <li>Review recent security activity.</li>
                <li>Remove unknown devices and sessions.</li>
                <li>Check recovery email and phone number.</li>
                <li>Enable two-step verification.</li>
            </ol>

            <div class="important-note">
                Never share Google verification codes with anyone.
            </div>
        `
    },

    scam: {
        title: "🎣 Scam & Phishing",
        html: `
            <h3>Stop</h3>
            <p>
                Do not click the link, download the file or continue the conversation.
            </p>

            <h3>Verify</h3>
            <p>
                Contact the company using a phone number or website you already know.
                Do not use contact details provided by the suspicious message.
            </p>

            <h3>Never share</h3>
            <ul>
                <li>OTP</li>
                <li>Password</li>
                <li>UPI PIN</li>
                <li>Banking PIN</li>
                <li>Recovery codes</li>
                <li>Screen-sharing access</li>
            </ul>

            <h3>If you already clicked</h3>
            <ol>
                <li>Close the page.</li>
                <li>Do not enter further information.</li>
                <li>Change affected passwords.</li>
                <li>Check account activity.</li>
                <li>If money is involved, contact your bank immediately.</li>
            </ol>
        `
    },

    blackmail: {
        title: "⚠️ Blackmail / Threat",
        html: `
            <h3>1. Do not pay</h3>
            <p>
                Paying does not guarantee that the person will stop.
            </p>

            <h3>2. Do not send more content</h3>
            <p>
                Do not send additional photos, videos, OTPs, passwords or money.
            </p>

            <h3>3. Preserve evidence</h3>
            <ul>
                <li>Take screenshots.</li>
                <li>Save usernames and profile URLs.</li>
                <li>Keep dates and times.</li>
                <li>Preserve payment details if money was demanded.</li>
            </ul>

            <h3>4. Secure your accounts</h3>
            <p>
                Change passwords, enable 2FA and review logged-in devices.
            </p>

            <h3>5. Report and block</h3>
            <p>
                Report the account through the platform's reporting tools.
                Block the person when appropriate.
            </p>

            <div class="important-note">
                If you believe there is an immediate physical safety risk,
                contact local emergency services or a trusted person.
            </div>
        `
    },

    private: {
        title: "📸 Private Photo / Video Threat",
        html: `
            <ol>
                <li>Do not send additional private material.</li>
                <li>Do not pay simply because someone threatens publication.</li>
                <li>Save screenshots and profile information.</li>
                <li>Report the account/content to the platform.</li>
                <li>Block the person if safe to do so.</li>
                <li>Secure your social-media and email accounts.</li>
            </ol>

            <div class="important-note">
                Do not blame yourself. Preserve evidence and seek help from
                a trusted person and appropriate authorities if necessary.
            </div>
        `
    },

    harassment: {
        title: "📞 Repeated Calls / Online Harassment",
        html: `
            <ol>
                <li>Do not engage in unnecessary arguments.</li>
                <li>Save messages, call logs and screenshots.</li>
                <li>Block or restrict the account/number.</li>
                <li>Review privacy settings.</li>
                <li>Report abusive behaviour through the platform.</li>
                <li>Tell a trusted person if the harassment continues.</li>
            </ol>
        `
    },

    photo: {
        title: "📸 Photo Misuse",
        html: `
            <ol>
                <li>Save screenshots of the misuse.</li>
                <li>Copy the profile/page URL.</li>
                <li>Report the content to the platform.</li>
                <li>Report impersonation if someone is pretending to be you.</li>
                <li>Review your own profile privacy settings.</li>
                <li>Tell trusted contacts if necessary.</li>
            </ol>
        `
    },

    fakeprofile: {
        title: "🎭 Fake Profile",
        html: `
            <ol>
                <li>Take screenshots of the fake profile.</li>
                <li>Save its username and URL.</li>
                <li>Report it for impersonation.</li>
                <li>Ask trusted contacts not to interact with it.</li>
                <li>Secure your real account with a strong password and 2FA.</li>
            </ol>
        `
    },

    stalking: {
        title: "👁️ Online Stalking",
        html: `
            <h3>Protect your privacy</h3>
            <ul>
                <li>Review location sharing.</li>
                <li>Review active sessions.</li>
                <li>Remove unknown followers.</li>
                <li>Restrict or block the person.</li>
                <li>Review who can message or tag you.</li>
            </ul>

            <h3>Preserve evidence</h3>
            <p>
                Keep screenshots, usernames, URLs and dates of repeated unwanted contact.
            </p>

            <div class="important-note">
                If online stalking becomes a physical safety concern,
                seek help from someone you trust and appropriate local authorities.
            </div>
        `
    },

    money: {
        title: "💳 Online / Financial Fraud",
        html: `
            <h3>Act immediately</h3>

            <ol>
                <li>Contact your bank/payment provider immediately.</li>
                <li>Report the fraudulent transaction.</li>
                <li>Block compromised cards if necessary.</li>
                <li>Change affected passwords/PINs.</li>
                <li>Preserve transaction IDs and screenshots.</li>
                <li>Use official cybercrime reporting channels.</li>
            </ol>

            <div class="important-note">
                Never share your UPI PIN or OTP with anyone.
                A UPI PIN is used to authorize payments, not to receive money.
            </div>
        `
    },

    phone: {
        title: "📱 Phone Security",
        html: `
            <ol>
                <li>Update the phone's operating system.</li>
                <li>Review recently installed apps.</li>
                <li>Remove apps you do not recognize.</li>
                <li>Review app permissions.</li>
                <li>Check accessibility/device-admin permissions.</li>
                <li>Review Google/Apple account sessions.</li>
                <li>Change important passwords from a trusted device if necessary.</li>
            </ol>

            <div class="important-note">
                Do not immediately delete suspicious evidence if you may need it
                for investigation or reporting.
            </div>
        `
    }

};

/* =========================================================
   GUIDE MODAL
========================================================= */

function closeGuide() {

    const overlay = document.querySelector(".guide-overlay");

    if (overlay) {
        overlay.remove();
    }

    document.body.style.overflow = "";
}

function openGuide(type) {

    const guide = guides[type];

    if (!guide) {

        showGuide(
            "🛡️ CyberCare Safety Guide",
            `
                <p>
                    Start by preserving evidence, securing your accounts,
                    avoiding further interaction with suspicious people,
                    and using official reporting channels.
                </p>
            `
        );

        return;
    }

    showGuide(guide.title, guide.html);
}

function showGuide(title, content) {

    closeGuide();

    const overlay = document.createElement("div");

    overlay.className = "guide-overlay";

    overlay.innerHTML = `
        <div
            class="guide-modal"
            role="dialog"
            aria-modal="true"
            aria-label="${escapeHTML(title)}"
        >

            <button
                class="guide-close"
                type="button"
                aria-label="Close"
            >
                ✕
            </button>

            <h2>${escapeHTML(title)}</h2>

            <div class="guide-content">
                ${content}
            </div>

            <button
                class="guide-ok"
                type="button"
            >
                Got it ✓
            </button>

        </div>
    `;

    document.body.appendChild(overlay);

    document.body.style.overflow = "hidden";

    overlay
        .querySelector(".guide-close")
        ?.addEventListener("click", closeGuide);

    overlay
        .querySelector(".guide-ok")
        ?.addEventListener("click", closeGuide);

    overlay.addEventListener("click", (event) => {

        if (event.target === overlay) {
            closeGuide();
        }

    });
}

/* =========================================================
   SERVICE BUTTONS
========================================================= */

$$(".help-btn").forEach(button => {

    button.addEventListener("click", () => {

        const service = button.dataset.service || "";

        if (service === "Account Recovery") {
            openGuide("account");
        }

        else if (service === "Scam & Phishing") {
            openGuide("scam");
        }

        else if (service === "Phone Security") {
            openGuide("phone");
        }

        else if (service === "Online Fraud") {
            openGuide("money");
        }

        else if (service === "Suspicious Activity") {
            openGuide("phone");
        }

        else if (service === "Emergency Help") {
            openEmergencyGuide();
        }

    });

});

/* =========================================================
   WOMEN SAFETY BUTTONS
========================================================= */

$$(".women-btn").forEach(button => {

    button.addEventListener("click", () => {

        const type = button.dataset.women;

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

    });

});

/* =========================================================
   EMERGENCY BUTTONS
========================================================= */

function openEmergencyGuide() {

    showGuide(
        "🚨 Emergency Cyber Response",
        `
            <h3>1. Stop the damage</h3>
            <p>
                Do not send additional money, OTPs, passwords or private content.
            </p>

            <h3>2. Secure the account</h3>
            <p>
                Change the affected password and remove unknown sessions.
            </p>

            <h3>3. Preserve evidence</h3>
            <p>
                Save screenshots, URLs, transaction IDs, usernames and timestamps.
            </p>

            <h3>4. Financial fraud?</h3>
            <p>
                Contact your bank/payment provider immediately and use official
                cybercrime reporting channels.
            </p>

            <h3>5. Physical danger?</h3>
            <p>
                Move to a safe place and contact a trusted person and appropriate
                local emergency services.
            </p>
        `
    );

}

$("#emergencyBtn")?.addEventListener(
    "click",
    openEmergencyGuide
);

$$("[data-emergency]").forEach(button => {

    button.addEventListener("click", () => {

        const type = button.dataset.emergency;

        if (type === "account") {
            openGuide("account");
        }

        else if (type === "money") {
            openGuide("money");
        }

        else if (type === "blackmail") {
            openGuide("blackmail");
        }

        else if (type === "phone") {
            openGuide("phone");
        }

    });

});

/* =========================================================
   QUICK HELP
========================================================= */

$("#quickHelpBtn")?.addEventListener("click", () => {

    const input = $("#problemSearch");

    scrollToSection("services");

    setTimeout(() => {

        input?.focus();

    }, 500);

});

/* =========================================================
   LEARN CYBERSECURITY
========================================================= */

const learningGuides = {

    password: {
        title: "🔐 Password Safety",
        html: `
            <ol>
                <li>Use a unique password for every important account.</li>
                <li>Prefer long passphrases.</li>
                <li>Use a reputable password manager if possible.</li>
                <li>Never share passwords through chat or phone calls.</li>
                <li>Enable 2FA wherever available.</li>
            </ol>
        `
    },

    "2fa": {
        title: "🔑 Two-Factor Authentication",
        html: `
            <p>
                Two-factor authentication adds another verification step
                after your password.
            </p>

            <ul>
                <li>Prefer an authenticator app or security key when appropriate.</li>
                <li>Keep recovery codes somewhere secure.</li>
                <li>Never give verification codes to another person.</li>
            </ul>
        `
    },

    phishing: {
        title: "🎣 Phishing",
        html: `
            <ul>
                <li>Check the sender carefully.</li>
                <li>Do not trust urgent threats automatically.</li>
                <li>Inspect links before opening them.</li>
                <li>Verify requests independently.</li>
                <li>Never share OTPs or passwords.</li>
            </ul>
        `
    },

    privacy: {
        title: "🔒 Privacy",
        html: `
            <ul>
                <li>Review profile visibility.</li>
                <li>Limit location sharing.</li>
                <li>Review app permissions.</li>
                <li>Remove unused third-party connections.</li>
                <li>Use screen locks and device encryption.</li>
            </ul>
        `
    },

    phone: {
        title: "📱 Phone Security",
        html: `
            <ul>
                <li>Keep your operating system updated.</li>
                <li>Install apps from trusted sources.</li>
                <li>Review permissions regularly.</li>
                <li>Use a secure screen lock.</li>
                <li>Keep important accounts protected with 2FA.</li>
            </ul>
        `
    },

    financial: {
        title: "💳 Financial Safety",
        html: `
            <ul>
                <li>Never share UPI PINs.</li>
                <li>Never share banking OTPs.</li>
                <li>Verify payment requests carefully.</li>
                <li>Remember that receiving money does not require entering your UPI PIN.</li>
                <li>Report unauthorized transactions immediately.</li>
            </ul>
        `
    }

};

$$(".learn-card").forEach(button => {

    button.addEventListener("click", () => {

        const type = button.dataset.learn;

        const guide = learningGuides[type];

        if (guide) {
            showGuide(guide.title, guide.html);
        }

    });

});

/* =========================================================
   TOOL MODALS
========================================================= */

function openToolModal(title, content) {
    showGuide(title, content);
}

/* =========================================================
   SCAM SCANNER
========================================================= */

function runScamScanner() {

    openToolModal(
        "🎣 Scam Message Scanner",
        `
            <p>
                Paste the suspicious message below. The scanner checks
                common warning signs locally in your browser.
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
                placeholder="Paste the suspicious message here..."
            ></textarea>

            <button
                id="runScamCheck"
                class="guide-ok"
                style="margin-top:12px;"
            >
                🔎 Scan Message
            </button>

            <div id="scamResult" style="margin-top:15px;"></div>
        `
    );

    $("#runScamCheck")?.addEventListener(
        "click",
        scanMessage
    );

}

function scanMessage() {

    const input = $("#scamInput");
    const result = $("#scamResult");

    if (!input || !result) return;

    const text = normalizeText(input.value);

    if (!text) {

        result.innerHTML = `
            <div class="important-note">
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
                "one time password"
            ],
            message:
                "Requests for OTP or verification codes are a major warning sign."
        },

        {
            words: [
                "upi pin",
                "pin",
                "bank pin"
            ],
            message:
                "Requests for a UPI/banking PIN are dangerous."
        },

        {
            words: [
                "urgent",
                "immediately",
                "act now",
                "within 10 minutes"
            ],
            message:
                "Urgency or threats are commonly used in scams."
        },

        {
            words: [
                "click this link",
                "click here",
                "verify now",
                "login now"
            ],
            message:
                "Unexpected links or login requests can indicate phishing."
        },

        {
            words: [
                "prize",
                "lottery",
                "winner",
                "reward"
            ],
            message:
                "Unexpected prizes or rewards can be scam indicators."
        },

        {
            words: [
                "refund",
                "cashback"
            ],
            message:
                "Fake refund/cashback messages are common fraud techniques."
        },

        {
            words: [
                "screen share",
                "anydesk",
                "teamviewer",
                "remote access"
            ],
            message:
                "Remote-control requests can allow criminals to access your device."
        }

    ];

    const warnings = [];

    rules.forEach(rule => {

        if (
            rule.words.some(word =>
                text.includes(word)
            )
        ) {
            warnings.push(rule.message);
        }

    });

    if (!warnings.length) {

        result.innerHTML = `
            <div
                style="
                    padding:15px;
                    border-radius:12px;
                    background:#f0fdf4;
                    color:#166534;
                "
            >
                <strong>🟢 No obvious warning pattern detected.</strong>
                <p style="margin-top:7px;">
                    This does NOT prove the message is safe.
                    Verify the sender independently before taking action.
                </p>
            </div>
        `;

        return;
    }

    result.innerHTML = `
        <div
            style="
                padding:15px;
                border-radius:12px;
                background:#fef2f2;
                color:#991b1b;
            "
        >
            <strong>🔴 Warning signs detected</strong>

            <ul style="padding-left:20px;margin-top:10px;">
                ${warnings.map(w =>
                    `<li>${escapeHTML(w)}</li>`
                ).join("")}
            </ul>

            <p style="margin-top:10px;">
                Do not share OTPs, passwords, PINs or payment information.
            </p>
        </div>
    `;

}

/* =========================================================
   PASSWORD CHECKER
========================================================= */

function runPasswordChecker() {

    openToolModal(
        "🔐 Password Strength Checker",
        `
            <p>
                This checker works locally. Your password is not sent anywhere
                by CyberCare.
            </p>

            <input
                id="passwordInput"
                type="password"
                autocomplete="off"
                placeholder="Enter a password to check"
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
                class="guide-ok"
                style="margin-top:12px;"
            >
                Check Strength
            </button>

            <div id="passwordResult" style="margin-top:15px;"></div>
        `
    );

    $("#checkPasswordBtn")?.addEventListener(
        "click",
        checkPasswordStrength
    );

}

function checkPasswordStrength() {

    const input = $("#passwordInput");
    const result = $("#passwordResult");

    if (!input || !result) return;

    const password = input.value;

    if (!password) {

        result.innerHTML = `
            <div class="important-note">
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

    let level = "Weak";
    let advice =
        "Use a longer, unique passphrase.";

    if (score >= 5) {

        level = "Strong";
        advice =
            "Good structure. Keep it unique and enable 2FA.";

    } else if (score >= 3) {

        level = "Moderate";
        advice =
            "Make it longer and more unique.";

    }

    result.innerHTML = `
        <div
            style="
                padding:15px;
                border-radius:12px;
                background:#eff6ff;
                color:#1e3a8a;
            "
        >
            <strong>Strength: ${level}</strong>

            <p style="margin-top:7px;">
                ${escapeHTML(advice)}
            </p>

            <small>
                CyberCare does not know or store this password.
            </small>
        </div>
    `;

}

/* =========================================================
   URL CHECKER
========================================================= */

function runURLChecker() {

    openToolModal(
        "🔗 URL Safety Checker",
        `
            <p>
                This is a basic local warning-sign checker. It does not
                guarantee that a website is safe.
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
                class="guide-ok"
                style="margin-top:12px;"
            >
                Check URL
            </button>

            <div id="urlResult" style="margin-top:15px;"></div>
        `
    );

    $("#checkURLBtn")?.addEventListener(
        "click",
        checkURL
    );

}

function checkURL() {

    const input = $("#urlInput");
    const result = $("#urlResult");

    if (!input || !result) return;

    const value = input.value.trim();

    if (!value) {

        result.innerHTML = `
            <div class="important-note">
                Enter a URL first.
            </div>
        `;

        return;
    }

    let url;

    try {

        url = new URL(value);

    } catch {

        result.innerHTML = `
            <div
                style="
                    padding:15px;
                    border-radius:12px;
                    background:#fef2f2;
                    color:#991b1b;
                "
            >
                ❌ This does not appear to be a valid URL.
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
        url.hostname.includes("@")
    ) {
        warnings.push(
            "The URL contains an unusual @ character."
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
        url.hostname.includes("-")
    ) {
        warnings.push(
            "Hyphens in domains can sometimes be used in deceptive domains. Verify carefully."
        );
    }

    if (warnings.length) {

        result.innerHTML = `
            <div
                style="
                    padding:15px;
                    border-radius:12px;
                    background:#fff7ed;
                    color:#9a3412;
                "
            >
                <strong>⚠️ Review carefully</strong>

                <ul style="padding-left:20px;margin-top:8px;">
                    ${warnings.map(w =>
                        `<li>${escapeHTML(w)}</li>`
                    ).join("")}
                </ul>

                <p style="margin-top:10px;">
                    Domain appearance alone cannot prove whether a site is malicious.
                </p>
            </div>
        `;

    } else {

        result.innerHTML = `
            <div
                style="
                    padding:15px;
                    border-radius:12px;
                    background:#f0fdf4;
                    color:#166534;
                "
            >
                🟢 No basic warning pattern detected.
                <p style="margin-top:7px;">
                    This does not guarantee that the website is safe.
                </p>
            </div>
        `;

    }

}

/* =========================================================
   PRIVACY CHECKLIST
========================================================= */

function openPrivacyChecklist() {

    openToolModal(
        "🔒 Privacy Checklist",
        `
            <div class="scan-check-list">

                <div class="scan-check-item">
                    <strong>🔐 Passwords</strong>
                    Use unique passwords for important accounts.
                </div>

                <div class="scan-check-item">
                    <strong>🔑 2FA</strong>
                    Enable two-factor authentication.
                </div>

                <div class="scan-check-item">
                    <strong>📍 Location</strong>
                    Review location-sharing permissions.
                </div>

                <div class="scan-check-item">
                    <strong>📱 Apps</strong>
                    Remove apps you no longer need.
                </div>

                <div class="scan-check-item">
                    <strong>🎥 Camera / Mic</strong>
                    Review which apps can access them.
                </div>

                <div class="scan-check-item">
                    <strong>👥 Social Media</strong>
                    Review followers, tags and profile visibility.
                </div>

                <div class="scan-check-item">
                    <strong>💻 Sessions</strong>
                    Remove unknown logged-in devices.
                </div>

                <div class="scan-check-item">
                    <strong>☁️ Cloud</strong>
                    Review connected third-party applications.
                </div>

            </div>
        `
    );

}

/* =========================================================
   EVIDENCE CHECKLIST
========================================================= */

function openEvidenceChecklist() {

    openToolModal(
        "🧾 Evidence Preservation Checklist",
        `
            <p>
                Preserve evidence before blocking or deleting anything
                when possible.
            </p>

            <ul>
                <li>📸 Screenshots of messages</li>
                <li>👤 Username/profile name</li>
                <li>🔗 Profile/content URL</li>
                <li>📅 Date and time</li>
                <li>📞 Phone number if relevant</li>
                <li>💳 Transaction ID for financial fraud</li>
                <li>📧 Emails and headers when relevant</li>
                <li>📝 A short timeline of what happened</li>
            </ul>

            <div class="important-note">
                Keep original evidence safely and avoid editing the original
                screenshots/files if they may be needed later.
            </div>
        `
    );

}

/* =========================================================
   CYBER SAFETY SCORE
========================================================= */

function runSafetyScore() {

    const questions = [

        "Do you use unique passwords for important accounts?",
        "Is 2FA enabled on your important accounts?",
        "Do you avoid sharing OTPs and PINs?",
        "Do you keep your phone and apps updated?",
        "Do you review app permissions?",
        "Do you avoid suspicious links?",
        "Do you review active account sessions?",
        "Do you keep backups of important data?"

    ];

    openToolModal(
        "🛡️ Cyber Safety Score",
        `
            <p>
                Select the habits you already follow.
            </p>

            <div style="margin-top:15px;">
                ${questions.map((q, i) => `
                    <label
                        style="
                            display:block;
                            padding:12px;
                            margin-bottom:8px;
                            border:1px solid #e2e8f0;
                            border-radius:10px;
                        "
                    >
                        <input
                            type="checkbox"
                            class="score-question"
                            value="1"
                        >
                        ${escapeHTML(q)}
                    </label>
                `).join("")}
            </div>

            <button
                id="calculateScore"
                class="guide-ok"
                style="margin-top:10px;"
            >
                Calculate Score
            </button>

            <div
                id="scoreResult"
                style="margin-top:15px;"
            ></div>
        `
    );

    $("#calculateScore")?.addEventListener(
        "click",
        calculateSafetyScore
    );

}

function calculateSafetyScore() {

    const checked =
        $$(".score-question:checked").length;

    const total =
        $$(".score-question").length;

    const percentage =
        Math.round((checked / total) * 100);

    let message = "";

    if (percentage >= 80) {
        message =
            "Excellent! Your basic security habits are strong.";
    } else if (percentage >= 50) {
        message =
            "Good start. Strengthen the habits you missed.";
    } else {
        message =
            "Your security can be improved. Start with passwords, 2FA and phishing awareness.";
    }

    const result = $("#scoreResult");

    if (result) {

        result.innerHTML = `
            <div
                style="
                    padding:16px;
                    border-radius:12px;
                    background:#eff6ff;
                    color:#1e3a8a;
                    text-align:center;
                "
            >
                <strong>
                    Your Cyber Safety Score: ${percentage}%
                </strong>

                <p style="margin-top:7px;">
                    ${escapeHTML(message)}
                </p>
            </div>
        `;

    }

}

/* =========================================================
   TOOL BUTTON ROUTER
========================================================= */

$$(".tool-btn").forEach(button => {

    button.addEventListener("click", () => {

        const tool = button.dataset.tool;

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

    });

});

/* =========================================================
   KEYBOARD SUPPORT
========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeSideMenu();
        closeGuide();

    }

});

/* =========================================================
   OUTSIDE CLICK SAFETY
========================================================= */

document.addEventListener("click", (event) => {

    const target = event.target;

    if (
        sideMenu &&
        sideMenu.classList.contains("active") &&
        !sideMenu.contains(target) &&
        target !== menuBtn
    ) {
        closeSideMenu();
    }

});

/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log(
        "🛡️ CyberCare initialized successfully."
    );

});
