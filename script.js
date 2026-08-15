/* =========================================================
   CYBERCARE — COMPLETE SCRIPT.JS
   Smart Search + Guides + Women Safety + Tools
   Emergency + Scan + Language + Dark Mode + Menu
========================================================= */

"use strict";

/* =========================================================
   LANGUAGE DATA
========================================================= */

const translations = {

    en: {
        searchPlaceholder:
            "Example: someone is blackmailing me...",
        searchTitle: "🔎 What happened?",
        searchText:
            "Describe your problem. CyberCare will find the most relevant safety guide.",
        needHelp: "🚨 I Need Help Now",
        findProblem: "🔎 Find My Problem"
    },

    bn: {
        searchPlaceholder:
            "উদাহরণ: কেউ আমাকে ব্ল্যাকমেইল করছে...",
        searchTitle: "🔎 কী হয়েছে?",
        searchText:
            "আপনার সমস্যাটি লিখুন। CyberCare আপনার জন্য সবচেয়ে উপযুক্ত নিরাপত্তা নির্দেশিকা খুঁজে দেবে।",
        needHelp: "🚨 এখনই সাহায্য চাই",
        findProblem: "🔎 আমার সমস্যা খুঁজুন"
    }

};


/* =========================================================
   STATE
========================================================= */

let currentLanguage =
    localStorage.getItem("cybercareLanguage") || "en";

let scanRunning = false;


/* =========================================================
   ELEMENT HELPERS
========================================================= */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);


/* =========================================================
   SIDE MENU
========================================================= */

const menuBtn = $("#menuBtn");
const closeMenu = $("#closeMenu");
const sideMenu = $("#sideMenu");
const menuOverlay = $("#menuOverlay");

function openMenu() {

    if (!sideMenu) return;

    sideMenu.classList.add("active");
    menuOverlay?.classList.add("active");
    document.body.classList.add("menu-open");
}

function closeSideMenu() {

    if (!sideMenu) return;

    sideMenu.classList.remove("active");
    menuOverlay?.classList.remove("active");
    document.body.classList.remove("menu-open");
}

menuBtn?.addEventListener("click", openMenu);

closeMenu?.addEventListener("click", closeSideMenu);

menuOverlay?.addEventListener("click", closeSideMenu);

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeSideMenu();
        closeGuideModal();
        closeScanModal();
    }

});


/* =========================================================
   SIDE MENU NAVIGATION
========================================================= */

$$(".menu-item").forEach((button) => {

    button.addEventListener("click", () => {

        const target = button.dataset.menu;

        closeSideMenu();

        const section = document.getElementById(target);

        if (section) {

            setTimeout(() => {

                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 100);

        }

    });

});


/* =========================================================
   DARK MODE
========================================================= */

const themeBtn = $("#themeBtn");

function applyTheme() {

    const dark =
        localStorage.getItem("cybercareTheme") === "dark";

    document.body.classList.toggle("dark-mode", dark);

    if (themeBtn) {
        themeBtn.textContent = dark ? "☀️" : "🌙";
        themeBtn.setAttribute(
            "aria-label",
            dark ? "Switch to light mode" : "Switch to dark mode"
        );
    }
}

themeBtn?.addEventListener("click", () => {

    const isDark =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "cybercareTheme",
        isDark ? "light" : "dark"
    );

    applyTheme();

});

applyTheme();


/* =========================================================
   LANGUAGE SWITCH
========================================================= */

const languageBtn = $("#languageBtn");
const languageText = $("#languageText");

function updateLanguage() {

    const data = translations[currentLanguage];

    if (!data) return;

    if ($("#problemSearch")) {
        $("#problemSearch").placeholder =
            data.searchPlaceholder;
    }

    const searchTitle = $(".search-section h2");

    if (searchTitle) {
        searchTitle.textContent = data.searchTitle;
    }

    const searchDescription =
        $(".search-section > p");

    if (searchDescription) {
        searchDescription.textContent =
            data.searchText;
    }

    if (languageText) {
        languageText.textContent =
            currentLanguage === "en" ? "EN" : "বাংলা";
    }

    const emergencyBtn = $("#emergencyBtn");

    if (emergencyBtn) {
        emergencyBtn.textContent = data.needHelp;
    }

    const quickHelpBtn = $("#quickHelpBtn");

    if (quickHelpBtn) {
        quickHelpBtn.textContent = data.findProblem;
    }
}

languageBtn?.addEventListener("click", () => {

    currentLanguage =
        currentLanguage === "en" ? "bn" : "en";

    localStorage.setItem(
        "cybercareLanguage",
        currentLanguage
    );

    updateLanguage();

});

updateLanguage();


/* =========================================================
   GUIDE MODAL
========================================================= */

function closeGuideModal() {

    const modal = $(".guide-overlay");

    if (modal) {
        modal.remove();
        document.body.style.overflow = "";
    }
}


function createGuideModal(title, content) {

    closeGuideModal();

    const overlay =
        document.createElement("div");

    overlay.className = "guide-overlay";

    overlay.innerHTML = `
        <div class="guide-modal" role="dialog" aria-modal="true">

            <button
                class="guide-close"
                type="button"
                aria-label="Close"
            >✕</button>

            <h2>${title}</h2>

            <div class="guide-content">
                ${content}
            </div>

            <button
                class="guide-ok"
                type="button"
            >
                ${currentLanguage === "bn"
                    ? "বুঝেছি"
                    : "I Understand"}
            </button>

        </div>
    `;

    document.body.appendChild(overlay);

    document.body.style.overflow = "hidden";

    overlay
        .querySelector(".guide-close")
        ?.addEventListener("click", closeGuideModal);

    overlay
        .querySelector(".guide-ok")
        ?.addEventListener("click", closeGuideModal);

    overlay.addEventListener("click", (event) => {

        if (event.target === overlay) {
            closeGuideModal();
        }

    });

}


/* =========================================================
   SAFETY GUIDE DATABASE
========================================================= */

const guides = {

    "Account Recovery": {

        title: "🔐 Account Recovery",

        content: `
            <h3>First: Secure Yourself</h3>

            <ol>
                <li>Do not share OTP, password or recovery codes with anyone.</li>
                <li>Use the official website or app of the service.</li>
                <li>Change the password immediately if you can still log in.</li>
                <li>Enable two-factor authentication.</li>
                <li>Check active sessions and remove unknown devices.</li>
                <li>Check recovery email and phone number.</li>
                <li>Remove unknown third-party apps.</li>
            </ol>

            <h3>If You Cannot Log In</h3>

            <ol>
                <li>Use the platform's official account-recovery page.</li>
                <li>Never pay someone claiming they can recover your account.</li>
                <li>Do not give remote access to your phone.</li>
            </ol>

            <div class="important-note">
                ⚠️ CyberCare will never ask for your password, OTP,
                recovery code or banking PIN.
            </div>
        `
    },


    "Scam & Phishing": {

        title: "🎣 Scam & Phishing",

        content: `
            <h3>Do This Immediately</h3>

            <ol>
                <li>Do not click suspicious links.</li>
                <li>Do not download unknown files or apps.</li>
                <li>Do not share OTP or verification codes.</li>
                <li>Do not call numbers provided in suspicious messages.</li>
                <li>Verify the sender using an official source.</li>
                <li>Take screenshots and preserve evidence.</li>
            </ol>

            <h3>If You Already Clicked</h3>

            <ol>
                <li>Close the suspicious page.</li>
                <li>Do not enter additional information.</li>
                <li>Change the affected password from a trusted device.</li>
                <li>Enable 2FA.</li>
                <li>Check account activity.</li>
            </ol>
        `
    },


    "Phone Security": {

        title: "📱 Phone Security",

        content: `
            <h3>Warning Signs</h3>

            <ul>
                <li>Unknown apps appearing on the phone.</li>
                <li>Unexpected permission requests.</li>
                <li>Battery or data usage suddenly increasing.</li>
                <li>Unknown accessibility services enabled.</li>
                <li>Unknown device administrator access.</li>
                <li>Accounts showing unfamiliar login activity.</li>
            </ul>

            <h3>What To Do</h3>

            <ol>
                <li>Remove apps you do not recognize.</li>
                <li>Review app permissions.</li>
                <li>Update Android and security patches.</li>
                <li>Change important passwords from a trusted device if necessary.</li>
                <li>Enable screen lock and 2FA.</li>
                <li>Back up important data.</li>
            </ol>
        `
    },


    "Online Fraud": {

        title: "💳 Online & Financial Fraud",

        content: `
            <h3>If Money Has Already Been Lost</h3>

            <ol>
                <li>Contact your bank or payment provider immediately.</li>
                <li>Block the affected card/account if required.</li>
                <li>Report the transaction through the official channel.</li>
                <li>Preserve transaction IDs and screenshots.</li>
                <li>In India, report financial cyber fraud through 1930 as soon as possible.</li>
                <li>Use the official cybercrime reporting portal.</li>
            </ol>

            <h3>Never Do This</h3>

            <ul>
                <li>Never share UPI PIN.</li>
                <li>Never share OTP.</li>
                <li>Never install remote-control apps because a caller asks you to.</li>
                <li>Never approve a payment request just to receive money.</li>
            </ul>
        `
    },


    "Suspicious Activity": {

        title: "🕵️ Suspicious Activity",

        content: `
            <h3>Check These First</h3>

            <ol>
                <li>Recent login activity.</li>
                <li>Unknown devices.</li>
                <li>Unknown connected apps.</li>
                <li>Password changes you did not make.</li>
                <li>Recovery email or phone number changes.</li>
                <li>Unexpected messages sent from your account.</li>
            </ol>

            <h3>Secure the Account</h3>

            <ol>
                <li>Change the password.</li>
                <li>Sign out unknown sessions.</li>
                <li>Enable 2FA.</li>
                <li>Remove unknown applications.</li>
                <li>Review recovery settings.</li>
            </ol>
        `
    },


    "Emergency Help": {

        title: "🚨 Emergency Cyber Response",

        content: `
            <h3>Do These Steps First</h3>

            <ol>
                <li>Stop communicating with the attacker/scammer.</li>
                <li>Do not send money or additional information.</li>
                <li>Preserve screenshots, messages, usernames and transaction details.</li>
                <li>Secure your email account first if it may be compromised.</li>
                <li>Change important passwords.</li>
                <li>Enable 2FA.</li>
                <li>Contact the relevant bank/platform immediately if money or an account is involved.</li>
            </ol>

            <div class="important-note">
                🇮🇳 In India, financial cyber fraud can be reported through
                1930 and the official cybercrime portal.
            </div>
        `
    }

};


/* =========================================================
   SERVICE BUTTONS
========================================================= */

$$(".help-btn").forEach((button) => {

    button.addEventListener("click", () => {

        const service = button.dataset.service;

        const guide = guides[service];

        if (guide) {

            createGuideModal(
                guide.title,
                guide.content
            );

        }

    });

});


/* =========================================================
   WOMEN'S SAFETY GUIDES
========================================================= */

const womenGuides = {

    harassment: {

        title: "📞 Repeated Calls / Harassment",

        content: `
            <ol>
                <li>Do not argue with the person.</li>
                <li>Block the number/account if appropriate.</li>
                <li>Save screenshots of messages and call records.</li>
                <li>Keep usernames, profile links and phone numbers.</li>
                <li>Report the account on the platform.</li>
                <li>If threats or immediate danger are involved, seek local emergency help.</li>
            </ol>

            <h3>Important</h3>

            <p>
                Do not delete evidence before preserving it.
            </p>
        `
    },


    photo: {

        title: "📸 Photo Misuse",

        content: `
            <ol>
                <li>Take screenshots showing the misuse.</li>
                <li>Save the profile URL and username.</li>
                <li>Report the post/profile to the platform.</li>
                <li>Ask trusted people not to engage with the account.</li>
                <li>Review your own privacy settings.</li>
                <li>If the misuse involves threats or intimate material, consider official cybercrime reporting.</li>
            </ol>
        `
    },


    fakeprofile: {

        title: "🎭 Fake Profile",

        content: `
            <ol>
                <li>Do not contact or threaten the person behind the profile.</li>
                <li>Capture screenshots of the profile.</li>
                <li>Save the profile URL and username.</li>
                <li>Report the profile as impersonation.</li>
                <li>Ask trusted contacts to report it too if appropriate.</li>
                <li>Make your own profile more private.</li>
            </ol>
        `
    },


    blackmail: {

        title: "⚠️ Blackmail",

        content: `
            <h3>Do NOT</h3>

            <ul>
                <li>❌ Do not pay the blackmailer.</li>
                <li>❌ Do not send additional photos or information.</li>
                <li>❌ Do not meet the person alone.</li>
                <li>❌ Do not delete the conversation.</li>
            </ul>

            <h3>Do This</h3>

            <ol>
                <li>Save all messages and evidence.</li>
                <li>Screenshot threats and payment demands.</li>
                <li>Record usernames, phone numbers and profile links.</li>
                <li>Block/report after preserving evidence when safe.</li>
                <li>Tell a trusted person.</li>
                <li>If there is an immediate physical threat, seek emergency assistance.</li>
                <li>Consider reporting the incident through the official cybercrime channel.</li>
            </ol>
        `
    },


    private: {

        title: "🔒 Private Photo / Video Threat",

        content: `
            <h3>First Rule</h3>

            <p>
                You are not required to pay or send more content
                just because someone is threatening you.
            </p>

            <ol>
                <li>Preserve evidence.</li>
                <li>Do not send more images/videos.</li>
                <li>Do not negotiate under pressure.</li>
                <li>Secure your social-media accounts.</li>
                <li>Change passwords if necessary.</li>
                <li>Enable 2FA.</li>
                <li>Report the account/content to the platform.</li>
                <li>Use official cybercrime reporting channels when appropriate.</li>
            </ol>
        `
    },


    stalking: {

        title: "👁️ Online Stalking",

        content: `
            <ol>
                <li>Review followers, friends and connected accounts.</li>
                <li>Remove unknown people.</li>
                <li>Make your account private where possible.</li>
                <li>Disable unnecessary location sharing.</li>
                <li>Check active sessions.</li>
                <li>Change your password if you suspect account access.</li>
                <li>Preserve evidence of repeated unwanted contact.</li>
            </ol>

            <h3>If It Becomes Physical</h3>

            <p>
                Prioritize your physical safety and contact a trusted person
                or appropriate local authorities.
            </p>
        `
    }

};


$$(".women-btn").forEach((button) => {

    button.addEventListener("click", () => {

        const type = button.dataset.women;

        const guide = womenGuides[type];

        if (guide) {

            createGuideModal(
                guide.title,
                guide.content
            );

        }

    });

});


/* =========================================================
   SMART SEARCH DATABASE
========================================================= */

const searchDatabase = [

    {
        keywords: [
            "blackmail",
            "threat",
            "money demand",
            "ব্ল্যাকমেইল",
            "হুমকি"
        ],
        title: "⚠️ Blackmail / Threat",
        description:
            "Someone is threatening you or demanding money/content.",
        guide: womenGuides.blackmail
    },

    {
        keywords: [
            "private photo",
            "private video",
            "intimate",
            "nude",
            "ছবি ছড়িয়ে",
            "ভিডিও ছড়িয়ে",
            "প্রাইভেট"
        ],
        title: "🔒 Private Content Threat",
        description:
            "Someone is threatening to publish private photos or videos.",
        guide: womenGuides.private
    },

    {
        keywords: [
            "harass",
            "harassment",
            "call",
            "calls",
            "message",
            "বিরক্ত",
            "ফোন",
            "মেসেজ"
        ],
        title: "📞 Harassment",
        description:
            "Someone keeps calling, messaging or disturbing you.",
        guide: womenGuides.harassment
    },

    {
        keywords: [
            "fake profile",
            "fake account",
            "impersonation",
            "নকল প্রোফাইল",
            "ফেক আইডি"
        ],
        title: "🎭 Fake Profile",
        description:
            "Someone created a fake profile pretending to be you.",
        guide: womenGuides.fakeprofile
    },

    {
        keywords: [
            "stalking",
            "following",
            "monitoring",
            "স্টকিং",
            "পিছু"
        ],
        title: "👁️ Online Stalking",
        description:
            "Someone is repeatedly monitoring or following you online.",
        guide: womenGuides.stalking
    },

    {
        keywords: [
            "facebook",
            "instagram",
            "whatsapp",
            "google",
            "youtube",
            "account hacked",
            "account recovery",
            "login",
            "password",
            "অ্যাকাউন্ট হ্যাক",
            "লগইন"
        ],
        title: "🔐 Account Recovery",
        description:
            "Secure and recover a potentially compromised account.",
        guide: guides["Account Recovery"]
    },

    {
        keywords: [
            "otp",
            "phishing",
            "fake link",
            "suspicious link",
            "scam message",
            "ফিশিং",
            "ওটিপি",
            "ভুয়া লিংক"
        ],
        title: "🎣 Scam & Phishing",
        description:
            "Check suspicious messages, links and OTP scams.",
        guide: guides["Scam & Phishing"]
    },

    {
        keywords: [
            "phone hacked",
            "spyware",
            "unknown app",
            "phone security",
            "mobile hacked",
            "ফোন হ্যাক",
            "স্পাইওয়্যার"
        ],
        title: "📱 Phone Security",
        description:
            "Check suspicious apps, permissions and device activity.",
        guide: guides["Phone Security"]
    },

    {
        keywords: [
            "upi",
            "bank",
            "card",
            "money stolen",
            "payment fraud",
            "financial fraud",
            "টাকা",
            "ব্যাংক",
            "ইউপিআই"
        ],
        title: "💳 Online & Financial Fraud",
        description:
            "Immediate steps for UPI, bank, card and payment fraud.",
        guide: guides["Online Fraud"]
    },

    {
        keywords: [
            "unknown login",
            "suspicious login",
            "unknown device",
            "someone logged",
            "অজানা লগইন",
            "সন্দেহজনক"
        ],
        title: "🕵️ Suspicious Activity",
        description:
            "Check unknown logins, devices and connected apps.",
        guide: guides["Suspicious Activity"]
    }

];


/* =========================================================
   SMART SEARCH
========================================================= */

const problemSearch = $("#problemSearch");
const searchResults = $("#searchResults");
const clearSearch = $("#clearSearch");
const searchSuggestions = $("#searchSuggestions");

function normalizeText(text) {

    return text
        .toLowerCase()
        .trim();

}


function findSearchResults(query) {

    const normalized =
        normalizeText(query);

    if (!normalized) return [];

    return searchDatabase
        .map((item) => {

            let score = 0;

            item.keywords.forEach((keyword) => {

                if (
                    normalized.includes(
                        keyword.toLowerCase()
                    )
                ) {
                    score += keyword.length > 4 ? 3 : 2;
                }

            });

            return {
                ...item,
                score
            };

        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);
}


function renderSearchResults(query) {

    if (!searchResults) return;

    searchResults.innerHTML = "";

    if (!query.trim()) return;

    const results =
        findSearchResults(query);

    if (!results.length) {

        searchResults.innerHTML = `
            <div class="search-result">

                <h3>🔎 No exact guide found</h3>

                <p>
                    Try words such as:
                    hacked, blackmail, OTP, scam,
                    fake profile, UPI, phone hacked,
                    harassment or private photo.
                </p>

            </div>
        `;

        return;
    }

    results.forEach((result) => {

        const card =
            document.createElement("div");

        card.className = "search-result";

        card.innerHTML = `
            <h3>${result.title}</h3>

            <p>${result.description}</p>

            <button
                class="result-help"
                type="button"
            >
                ${currentLanguage === "bn"
                    ? "ধাপে ধাপে সাহায্য দেখুন →"
                    : "Get Step-by-Step Help →"}
            </button>
        `;

        card
            .querySelector(".result-help")
            ?.addEventListener("click", () => {

                createGuideModal(
                    result.guide.title,
                    result.guide.content
                );

            });

        searchResults.appendChild(card);

    });

}


problemSearch?.addEventListener(
    "input",
    () => {

        renderSearchResults(
            problemSearch.value
        );

    }
);


clearSearch?.addEventListener("click", () => {

    if (!problemSearch) return;

    problemSearch.value = "";

    if (searchResults) {
        searchResults.innerHTML = "";
    }

    problemSearch.focus();

});


/* =========================================================
   SEARCH SUGGESTIONS
========================================================= */

const suggestions = [
    "Someone is blackmailing me",
    "My Facebook account is hacked",
    "I received a suspicious OTP message",
    "Someone created a fake Instagram profile",
    "Money was stolen through UPI",
    "Someone is threatening to publish my private photo",
    "I think my phone has spyware",
    "Someone keeps calling me"
];

function renderSuggestions() {

    if (!searchSuggestions) return;

    searchSuggestions.innerHTML = "";

    suggestions.forEach((text) => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.textContent = text;

        button.style.cssText = `
            margin:5px;
            padding:8px 11px;
            border:1px solid #dbeafe;
            border-radius:20px;
            background:#eff6ff;
            color:#1d4ed8;
            font-size:12px;
            font-weight:700;
        `;

        button.addEventListener("click", () => {

            if (!problemSearch) return;

            problemSearch.value = text;

            renderSearchResults(text);

        });

        searchSuggestions.appendChild(button);

    });

}

renderSuggestions();


/* =========================================================
   QUICK HELP BUTTON
========================================================= */

$("#quickHelpBtn")?.addEventListener("click", () => {

    $("#problemSearch")?.focus();

    $("#problemSearch")?.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


/* =========================================================
   EMERGENCY BUTTON
========================================================= */

$("#emergencyBtn")?.addEventListener("click", () => {

    const section =
        $(".emergency-section");

    section?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


/* =========================================================
   TOOL MODAL
========================================================= */

function openToolModal(title, content) {

    createGuideModal(
        title,
        content
    );

}


/* =========================================================
   SCAM SCANNER
========================================================= */

function scamScanner() {

    const message =
        prompt(
            "Paste the suspicious message here:"
        );

    if (!message) return;

    const text =
        message.toLowerCase();

    const warningWords = [
        "otp",
        "urgent",
        "verify",
        "click",
        "winner",
        "prize",
        "refund",
        "kyc",
        "blocked",
        "account suspended",
        "password",
        "upi",
        "pin",
        "investment",
        "loan",
        "crypto",
        "police",
        "arrest",
        "pay now",
        "gift card"
    ];

    let score = 0;

    warningWords.forEach((word) => {

        if (text.includes(word)) {
            score++;
        }

    });

    let level;

    if (score >= 4) {
        level = "danger";
    }
    else if (score >= 2) {
        level = "warning";
    }
    else {
        level = "safe";
    }

    const title =
        level === "danger"
            ? "🚨 High-Risk Warning Signs"
            : level === "warning"
                ? "⚠️ Suspicious Signs Found"
                : "🟢 No Common Scam Pattern Detected";

    const advice =
        level === "danger"
            ? "Do not click links, send money or share OTP/PIN. Verify through an official channel."
            : level === "warning"
                ? "Be careful. Independently verify the sender and avoid sharing sensitive information."
                : "No common warning pattern was detected, but this does not prove the message is safe.";

    openToolModal(
        title,
        `
            <p>${advice}</p>

            <h3>Detected warning indicators: ${score}</h3>

            <div class="important-note">
                ⚠️ This scanner is educational. It cannot guarantee
                that a message is safe or malicious.
            </div>
        `
    );

}


/* =========================================================
   PASSWORD CHECKER
========================================================= */

function passwordChecker() {

    const password =
        prompt(
            "Enter a password to check its strength.\n\n" +
            "Your password is checked locally by this page."
        );

    if (password === null) return;

    if (!password) {

        openToolModal(
            "🔐 Password Checker",
            `<p>Please enter a password to check.</p>`
        );

        return;
    }

    let score = 0;

    if (password.length >= 12) score++;
    if (password.length >= 16) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    let level;

    if (score >= 5) {
        level = "🟢 Strong";
    }
    else if (score >= 3) {
        level = "🟡 Moderate";
    }
    else {
        level = "🔴 Weak";
    }

    openToolModal(
        "🔐 Password Strength",
        `
            <h3>${level}</h3>

            <ul>
                <li>Use a long unique password or passphrase.</li>
                <li>Do not reuse passwords across important accounts.</li>
                <li>Consider using a reputable password manager.</li>
                <li>Enable two-factor authentication.</li>
            </ul>

            <div class="important-note">
                🔒 CyberCare does not send your password anywhere.
            </div>
        `
    );

}


/* =========================================================
   URL CHECKER
========================================================= */

function urlChecker() {

    const input =
        prompt(
            "Paste the URL you want to inspect:"
        );

    if (!input) return;

    let url;

    try {
        url = new URL(input);
    }
    catch {
        openToolModal(
            "🔗 URL Safety Checker",
            `
                <h3>❌ Invalid URL</h3>

                <p>
                    The text entered does not appear to be
                    a valid web address.
                </p>
            `
        );

        return;
    }

    const warnings = [];

    if (url.protocol !== "https:") {
        warnings.push(
            "The website does not use HTTPS."
        );
    }

    if (url.hostname.includes("xn--")) {
        warnings.push(
            "The domain uses punycode and deserves extra verification."
        );
    }

    if (
        url.hostname.split(".").length > 4
    ) {
        warnings.push(
            "The domain contains many subdomains."
        );
    }

    if (
        /@/.test(url.href)
    ) {
        warnings.push(
            "The URL contains an @ symbol, which can be misleading."
        );
    }

    if (
        url.hostname.length > 60
    ) {
        warnings.push(
            "The domain is unusually long."
        );
    }

    const result =
        warnings.length
            ? `
                <h3>⚠️ Warning Signs</h3>
                <ul>
                    ${warnings
                        .map((item) => `<li>${item}</li>`)
                        .join("")}
                </ul>
              `
            : `
                <h3>🟢 No obvious URL red flags detected</h3>

                <p>
                    This does NOT prove that the website is trustworthy.
                    Verify the domain independently before signing in
                    or entering payment information.
                </p>
              `;

    openToolModal(
        "🔗 URL Safety Checker",
        result
    );

}


/* =========================================================
   PRIVACY CHECKLIST
========================================================= */

function privacyChecklist() {

    openToolModal(
        "🔒 Privacy Checklist",
        `
            <h3>Review These Settings</h3>

            <ul>
                <li>☐ Use a strong screen lock.</li>
                <li>☐ Enable 2FA on important accounts.</li>
                <li>☐ Review app permissions.</li>
                <li>☐ Turn off unnecessary location sharing.</li>
                <li>☐ Review social-media privacy settings.</li>
                <li>☐ Remove unknown connected apps.</li>
                <li>☐ Keep your phone and apps updated.</li>
                <li>☐ Review active account sessions.</li>
                <li>☐ Avoid saving sensitive information in public posts.</li>
                <li>☐ Keep recovery email and phone number secure.</li>
            </ul>
        `
    );

}


/* =========================================================
   EVIDENCE CHECKLIST
========================================================= */

function evidenceChecklist() {

    openToolModal(
        "🧾 Evidence Checklist",
        `
            <h3>Preserve</h3>

            <ul>
                <li>📸 Screenshots</li>
                <li>💬 Messages</li>
                <li>📞 Call logs</li>
                <li>👤 Usernames</li>
                <li>🔗 Profile URLs</li>
                <li>🌐 Website URLs</li>
                <li>💳 Transaction IDs</li>
                <li>📅 Date and time</li>
                <li>📧 Relevant emails</li>
            </ul>

            <h3>Important</h3>

            <p>
                Keep original evidence where possible.
                Do not edit screenshots in a way that removes
                important context.
            </p>
        `
    );

}


/* =========================================================
   CYBER SAFETY SCORE
========================================================= */

function safetyScore() {

    const questions = [

        "Do you use 2FA on important accounts?",
        "Do you use unique passwords?",
        "Do you keep your phone updated?",
        "Do you avoid sharing OTP/PIN?",
        "Do you review app permissions?",
        "Do you check account login activity?",
        "Do you avoid suspicious links?",
        "Do you have a secure recovery email/number?"
    ];

    let score = 0;

    questions.forEach((question) => {

        const answer =
            confirm(question + "\n\nOK = Yes\nCancel = No");

        if (answer) score++;

    });

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );

    let message;

    if (percentage >= 80) {

        message =
            "🟢 Excellent! Your basic digital safety habits are strong.";

    }
    else if (percentage >= 50) {

        message =
            "🟡 Good start. A few important security habits need attention.";

    }
    else {

        message =
            "🔴 Your digital safety needs improvement. Start with passwords, 2FA and privacy settings.";

    }

    openToolModal(
        "🛡️ Cyber Safety Score",
        `
            <h3>Score: ${percentage}%</h3>

            <p>${message}</p>

            <div class="important-note">
                This score is educational and is not a professional
                security assessment.
            </div>
        `
    );

}


/* =========================================================
   TOOL BUTTONS
========================================================= */

$$(".tool-btn").forEach((button) => {

    button.addEventListener("click", () => {

        const tool =
            button.dataset.tool;

        switch (tool) {

            case "scam":
                scamScanner();
                break;

            case "password":
                passwordChecker();
                break;

            case "url":
                urlChecker();
                break;

            case "privacy":
                privacyChecklist();
                break;

            case "evidence":
                evidenceChecklist();
                break;

            case "score":
                safetyScore();
                break;

        }

    });

});


/* =========================================================
   LEARNING GUIDES
========================================================= */

const learningGuides = {

    password: {

        title: "🔐 Password Safety",

        content: `
            <ol>
                <li>Use long passwords or passphrases.</li>
                <li>Use different passwords for important accounts.</li>
                <li>Never share your password.</li>
                <li>Use a password manager if possible.</li>
                <li>Enable 2FA.</li>
            </ol>
        `
    },

    "2fa": {

        title: "🔑 Two-Factor Authentication",

        content: `
            <p>
                2FA adds another verification step after your password.
            </p>

            <ul>
                <li>Enable 2FA on email first.</li>
                <li>Then secure social-media and financial accounts.</li>
                <li>Prefer stronger authentication methods where available.</li>
                <li>Keep recovery methods secure.</li>
            </ul>
        `
    },

    phishing: {

        title: "🎣 Phishing",

        content: `
            <ul>
                <li>Check the sender carefully.</li>
                <li>Do not trust urgent threats automatically.</li>
                <li>Do not click unexpected links.</li>
                <li>Open the official app/site yourself.</li>
                <li>Never share OTP or PIN.</li>
            </ul>
        `
    },

    privacy: {

        title: "🔒 Privacy",

        content: `
            <ul>
                <li>Limit public personal information.</li>
                <li>Review social-media privacy.</li>
                <li>Review app permissions.</li>
                <li>Turn off unnecessary location access.</li>
                <li>Remove old connected applications.</li>
            </ul>
        `
    },

    phone: {

        title: "📱 Phone Security",

        content: `
            <ul>
                <li>Keep Android/iOS updated.</li>
                <li>Install apps from trusted sources.</li>
                <li>Review permissions.</li>
                <li>Use screen lock.</li>
                <li>Remove apps you do not recognize.</li>
            </ul>
        `
    },

    financial: {

        title: "💳 Financial Safety",

        content: `
            <ul>
                <li>Never share UPI PIN or OTP.</li>
                <li>Do not install remote-control apps for callers.</li>
                <li>Verify payment requests carefully.</li>
                <li>Never approve a collect request just to receive money.</li>
                <li>Contact your bank quickly if fraud occurs.</li>
            </ul>
        `
    }

};


$$(".learn-card").forEach((button) => {

    button.addEventListener("click", () => {

        const type =
            button.dataset.learn;

        const guide =
            learningGuides[type];

        if (guide) {

            createGuideModal(
                guide.title,
                guide.content
            );

        }

    });

});


/* =========================================================
   EMERGENCY RESPONSE GUIDES
========================================================= */

const emergencyGuides = {

    account: {

        title: "🔐 Account Compromised",

        content: `
            <ol>
                <li>Change the password immediately if you still have access.</li>
                <li>Sign out unknown devices.</li>
                <li>Enable 2FA.</li>
                <li>Check recovery email and phone.</li>
                <li>Remove unknown connected apps.</li>
                <li>Warn contacts if malicious messages were sent.</li>
            </ol>
        `
    },

    money: {

        title: "💳 Money at Risk",

        content: `
            <ol>
                <li>Contact your bank/payment provider immediately.</li>
                <li>Block cards or accounts if necessary.</li>
                <li>Preserve transaction details.</li>
                <li>Do not send more money.</li>
                <li>In India, report financial cyber fraud through 1930 as soon as possible.</li>
            </ol>
        `
    },

    blackmail: {

        title: "⚠️ Blackmail / Threat",

        content:
            womenGuides.blackmail.content
    },

    phone: {

        title: "📱 Phone Compromised",

        content: `
            <ol>
                <li>Disconnect from suspicious networks if necessary.</li>
                <li>Remove unknown apps.</li>
                <li>Review accessibility and device-admin permissions.</li>
                <li>Update the operating system.</li>
                <li>Change important passwords from a trusted device if necessary.</li>
                <li>Back up important data.</li>
                <li>Consider professional technical support or a factory reset if compromise is strongly suspected.</li>
            </ol>
        `
    }

};


$$("[data-emergency]").forEach((button) => {

    button.addEventListener("click", () => {

        const type =
            button.dataset.emergency;

        const guide =
            emergencyGuides[type];

        if (guide) {

            createGuideModal(
                guide.title,
                guide.content
            );

        }

    });

});


/* =========================================================
   SCAN MODAL
========================================================= */

function closeScanModal() {

    const modal =
        $(".scan-overlay");

    if (modal) {
        modal.remove();
        document.body.style.overflow = "";
    }

}


function createScanModal() {

    closeScanModal();

    const overlay =
        document.createElement("div");

    overlay.className =
        "guide-overlay scan-overlay";

    overlay.innerHTML = `

        <div class="scan-modal">

            <div class="scan-modal-header">

                <h2>🛡️ CyberCare Safety Scan</h2>

                <button
                    class="scan-close"
                    type="button"
                >
                    ✕
                </button>

            </div>

            <p>
                This scan checks common device/account
                safety indicators. It does not access
                private data or secretly inspect your device.
            </p>

            <div class="scan-check-list">

                <div class="scan-check-item">
                    <strong>🔐 Account Security</strong>
                    Review passwords and 2FA.
                </div>

                <div class="scan-check-item">
                    <strong>📱 App Security</strong>
                    Review unknown apps and permissions.
                </div>

                <div class="scan-check-item">
                    <strong>🔗 Link Safety</strong>
                    Avoid suspicious URLs.
                </div>

                <div class="scan-check-item">
                    <strong>💳 Financial Safety</strong>
                    Never share OTP/PIN.
                </div>

                <div class="scan-check-item">
                    <strong>👁️ Privacy</strong>
                    Review location and social privacy.
                </div>

                <div class="scan-check-item">
                    <strong>🚨 Emergency</strong>
                    Know where to report fraud.
                </div>

            </div>

            <button
                class="guide-ok"
                id="startSafetyScan"
                type="button"
            >
                Start Safety Scan
            </button>

            <div class="scan-disclaimer">
                ℹ️ CyberCare runs educational checks in your
                browser. A website cannot reliably detect
                all spyware, malware or account compromise
                without appropriate device-level access.
            </div>

        </div>
    `;

    document.body.appendChild(overlay);

    document.body.style.overflow = "hidden";

    overlay
        .querySelector(".scan-close")
        ?.addEventListener(
            "click",
            closeScanModal
        );

    overlay.addEventListener(
        "click",
        (event) => {

            if (event.target === overlay) {
                closeScanModal();
            }

        }
    );

    overlay
        .querySelector("#startSafetyScan")
        ?.addEventListener(
            "click",
            runSafetyScan
        );

}


/* =========================================================
   SAFETY SCAN
========================================================= */

async function runSafetyScan() {

    if (scanRunning) return;

    scanRunning = true;

    const modal =
        $(".scan-modal");

    if (!modal) return;

    modal.innerHTML = `

        <div class="scan-modal-header">

            <h2>🛡️ Running Safety Scan...</h2>

        </div>

        <div class="scan-status active">

            <strong id="scanStepTitle">
                Preparing scan...
            </strong>

            <div class="scan-progress">

                <div
                    class="scan-progress-bar"
                    id="scanProgressBar"
                ></div>

            </div>

            <div
                class="scan-step"
                id="scanStepText"
            >
                Starting...
            </div>

        </div>

        <div
            class="scan-result"
            id="scanResult"
        ></div>

    `;

    const steps = [

        "Checking browser security environment...",
        "Reviewing basic privacy indicators...",
        "Checking secure connection support...",
        "Checking storage availability...",
        "Preparing account safety recommendations...",
        "Finalizing safety report..."

    ];

    const stepText =
        $("#scanStepText");

    const progress =
        $("#scanProgressBar");

    const result =
        $("#scanResult");

    for (
        let i = 0;
        i < steps.length;
        i++
    ) {

        if (stepText) {
            stepText.textContent =
                steps[i];
        }

        if (progress) {

            progress.style.width =
                `${Math.round(
                    ((i + 1) / steps.length) * 100
                )}%`;

        }

        await new Promise(
            resolve =>
                setTimeout(resolve, 500)
        );

    }

    const secureContext =
        window.isSecureContext;

    const online =
        navigator.onLine;

    let risk = "safe";

    const findings = [];

    if (!secureContext) {

        findings.push(
            "This page is not running in a secure browser context."
        );

        risk = "warning";
    }

    if (!online) {

        findings.push(
            "Your device currently appears to be offline."
        );

        risk = "warning";
    }

    findings.push(
        "CyberCare cannot directly verify whether spyware is installed."
    );

    findings.push(
        "Review installed apps and sensitive permissions manually."
    );

    findings.push(
        "Enable 2FA on important accounts."
    );

    if (result) {

        result.className =
            `scan-result active ${risk}`;

        result.innerHTML = `

            <h3>
                ${
                    risk === "safe"
                        ? "🟢 Basic Safety Check Complete"
                        : "🟡 Review Recommended"
                }
            </h3>

            <ul>
                ${findings
                    .map(
                        item =>
                            `<li>${item}</li>`
                    )
                    .join("")}
            </ul>

            <div class="scan-limit">
                ⚠️ This is not a malware/spyware detector.
                If you strongly suspect compromise, follow
                the Phone Security guide and consider trusted
                professional technical assistance.
            </div>

            <button
                class="guide-ok"
                id="closeScanResult"
                type="button"
                style="margin-top:15px;"
            >
                Done
            </button>

        `;

        $("#closeScanResult")
            ?.addEventListener(
                "click",
                closeScanModal
            );

    }

    scanRunning = false;

}


/* =========================================================
   SCAN-FIRST / OPTIONAL SCAN UI
========================================================= */

function addScanCenterIfMissing() {

    if (
        document.querySelector(".scan-center")
    ) {
        return;
    }

    const hero =
        $(".hero");

    const search =
        $(".search-section");

    if (!hero || !search) return;

    const center =
        document.createElement("section");

    center.className =
        "scan-center";

    center.innerHTML = `

        <div class="scan-panel">

            <div class="scan-badge">
                🛡️ CYBERCARE SMART SAFETY
            </div>

            <h2>
                Something feels wrong?
            </h2>

            <p>
                Start with a quick safety check,
                then follow the correct recovery guide.
            </p>

            <div class="scan-actions">

                <button
                    class="scan-main-btn"
                    id="smartScanBtn"
                    type="button"
                >
                    🛡️ Start Safety Scan
                </button>

                <button
                    class="scan-manual-btn"
                    id="manualHelpBtn"
                    type="button"
                >
                    🔎 Find My Problem
                </button>

            </div>

            <div class="scan-note">
                🔒 CyberCare does not secretly access
                your phone, passwords, OTPs or private files.
            </div>

        </div>
    `;

    hero.insertAdjacentElement(
        "afterend",
        center
    );

    $("#smartScanBtn")
        ?.addEventListener(
            "click",
            createScanModal
        );

    $("#manualHelpBtn")
        ?.addEventListener(
            "click",
            () => {

                problemSearch?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                problemSearch?.focus();

            }
        );

}

addScanCenterIfMissing();


/* =========================================================
   INDIA OFFICIAL LINKS — SAFETY CHECK
========================================================= */

$$(".india-btn").forEach((link) => {

    link.addEventListener("click", () => {

        if (
            link.tagName.toLowerCase() === "a" &&
            link.href
        ) {

            console.log(
                "Opening official cyber safety resource:",
                link.href
            );

        }

    });

});


/* =========================================================
   ESCAPE HTML HELPER
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   GLOBAL CLICK FEEDBACK
========================================================= */

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest("button");

        if (!button) return;

        if (
            button.disabled ||
            button.classList.contains("guide-close") ||
            button.classList.contains("scan-close")
        ) {
            return;
        }

        button.style.transform =
            "scale(.98)";

        setTimeout(() => {

            button.style.transform = "";

        }, 100);

    }
);


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateLanguage();
        applyTheme();

        console.log(
            "🛡️ CyberCare initialized successfully."
        );

    }
);


/* =========================================================
   GLOBAL CYBERCARE API
   Useful if more features are added later.
========================================================= */

window.CyberCare = {

    openGuide(title, content) {
        createGuideModal(
            title,
            content
        );
    },

    openScan() {
        createScanModal();
    },

    search(query) {
        if (!problemSearch) return;

        problemSearch.value = query;

        renderSearchResults(query);
    },

    setLanguage(language) {

        if (
            language !== "en" &&
            language !== "bn"
        ) {
            return;
        }

        currentLanguage = language;

        localStorage.setItem(
            "cybercareLanguage",
            language
        );

        updateLanguage();
    }

};


/* =========================================================
   END OF CYBERCARE SCRIPT
========================================================= */
