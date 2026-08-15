/* ============================================================
   CYBERCARE — COMPLETE SCRIPT.JS
   VERSION: CLEAN + SMART + WOMEN SAFETY + TOOLS
   ------------------------------------------------------------
   Main goals:
   1. Clean interface
   2. Detailed information stays inside More / Details
   3. Smart search
   4. English + বাংলা
   5. Account recovery
   6. Women digital safety
   7. Blackmail / private content
   8. Harassment / stalking
   9. Scam / phishing
   10. Financial fraud
   11. Phone security
   12. Emergency response
   13. Privacy + evidence tools
   14. Scam scanner
   15. Password checker
   16. URL checker
   17. Cyber safety score
============================================================ */

"use strict";

/* ============================================================
   GLOBAL HELPERS
============================================================ */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    Array.from(parent.querySelectorAll(selector));

function escapeHTML(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

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

function safeText(value) {
    return escapeHTML(String(value ?? ""));
}

function closeKeyboard() {
    const active = document.activeElement;

    if (
        active &&
        typeof active.blur === "function"
    ) {
        active.blur();
    }
}

/* ============================================================
   STORAGE
============================================================ */

const STORAGE_KEYS = {
    theme: "cybercare-theme",
    language: "cybercare-language"
};

/* ============================================================
   SIDE MENU
============================================================ */

const menuBtn = $("#menuBtn");
const closeMenuBtn = $("#closeMenu");
const sideMenu = $("#sideMenu");
const menuOverlay = $("#menuOverlay");

function openMenu() {
    if (!sideMenu) return;

    sideMenu.classList.add("active");

    if (menuOverlay) {
        menuOverlay.classList.add("active");
    }

    document.body.classList.add("menu-open");
}

function closeSideMenu() {
    if (sideMenu) {
        sideMenu.classList.remove("active");
    }

    if (menuOverlay) {
        menuOverlay.classList.remove("active");
    }

    document.body.classList.remove("menu-open");
}

menuBtn?.addEventListener("click", (event) => {
    event.stopPropagation();

    if (
        sideMenu &&
        sideMenu.classList.contains("active")
    ) {
        closeSideMenu();
    } else {
        openMenu();
    }
});

closeMenuBtn?.addEventListener(
    "click",
    closeSideMenu
);

menuOverlay?.addEventListener(
    "click",
    closeSideMenu
);

$$(".menu-item").forEach((item) => {

    item.addEventListener("click", () => {

        const target =
            item.dataset.menu ||
            item.dataset.target ||
            item.getAttribute("data-section");

        closeSideMenu();

        if (!target) return;

        setTimeout(() => {
            scrollToSection(
                target.replace("#", "")
            );
        }, 120);

    });

});

/* ============================================================
   DARK MODE
============================================================ */

const themeBtn = $("#themeBtn");

function updateThemeIcon() {

    if (!themeBtn) return;

    const isDark =
        document.body.classList.contains("dark-mode");

    themeBtn.textContent =
        isDark ? "☀️" : "🌙";

    themeBtn.setAttribute(
        "aria-label",
        isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
    );
}

function loadTheme() {

    const saved =
        localStorage.getItem(
            STORAGE_KEYS.theme
        );

    if (saved === "dark") {
        document.body.classList.add(
            "dark-mode"
        );
    }

    updateThemeIcon();
}

themeBtn?.addEventListener("click", () => {

    document.body.classList.toggle(
        "dark-mode"
    );

    const dark =
        document.body.classList.contains(
            "dark-mode"
        );

    localStorage.setItem(
        STORAGE_KEYS.theme,
        dark ? "dark" : "light"
    );

    updateThemeIcon();

});

loadTheme();

/* ============================================================
   LANGUAGE
============================================================ */

const languageBtn = $("#languageBtn");
const languageText = $("#languageText");

let currentLanguage =
    localStorage.getItem(
        STORAGE_KEYS.language
    ) || "en";

const translations = {

    en: {

        language: "EN",

        heroTitle: "CyberCare",

        heroSubtitle:
            "Protecting People. Securing Digital Lives.",

        heroDescription:
            "Simple, practical and step-by-step guidance for digital problems, scams, harassment, blackmail, account security and online threats.",

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

        noGuide:
            "No exact guide found",

        tryWords:
            "Try words like Facebook hacked, blackmail, OTP scam, UPI fraud or fake profile.",

        openGuide:
            "Open Safety Guide →",

        close:
            "Close",

        gotIt:
            "Got it ✓",

        more:
            "More",

        less:
            "Less",

        emergencyTitle:
            "🚨 Emergency Cyber Response",

        safeFirst:
            "Your safety comes first."

    },

    bn: {

        language: "বাংলা",

        heroTitle: "CyberCare",

        heroSubtitle:
            "মানুষকে সুরক্ষিত রাখি। ডিজিটাল জীবন নিরাপদ রাখি।",

        heroDescription:
            "হ্যাকিং, স্ক্যাম, হয়রানি, ব্ল্যাকমেইল, অ্যাকাউন্ট নিরাপত্তা এবং অন্যান্য ডিজিটাল সমস্যার সহজ ও ধাপে ধাপে নির্দেশনা।",

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

        noGuide:
            "সঠিক গাইড পাওয়া যায়নি",

        tryWords:
            "Facebook hacked, blackmail, OTP scam, UPI fraud বা fake profile-এর মতো শব্দ লিখে দেখুন।",

        openGuide:
            "সেফটি গাইড খুলুন →",

        close:
            "বন্ধ করুন",

        gotIt:
            "বুঝেছি ✓",

        more:
            "আরও",

        less:
            "কম",

        emergencyTitle:
            "🚨 জরুরি সাইবার প্রতিক্রিয়া",

        safeFirst:
            "আপনার নিরাপত্তাই প্রথম।"

    }

};

function t(key) {

    return (
        translations[currentLanguage]?.[key] ||
        translations.en[key] ||
        key
    );

}

function setText(selector, text) {

    const element = $(selector);

    if (element) {
        element.textContent = text;
    }

}

function applyLanguage() {

    const language =
        translations[currentLanguage];

    if (!language) return;

    if (languageText) {
        languageText.textContent =
            language.language;
    }

    setText(
        ".hero h1",
        language.heroTitle
    );

    setText(
        ".hero h2",
        language.heroSubtitle
    );

    setText(
        ".hero p",
        language.heroDescription
    );

    setText(
        "#emergencyBtn",
        language.emergency
    );

    setText(
        "#quickHelpBtn",
        language.findProblem
    );

    setText(
        ".search-section h2",
        language.searchTitle
    );

    setText(
        ".search-section > p",
        language.searchDescription
    );

    const searchInput =
        $("#problemSearch");

    if (searchInput) {

        searchInput.placeholder =
            language.searchPlaceholder;

    }

    document.documentElement.lang =
        currentLanguage === "bn"
            ? "bn"
            : "en";

    refreshVisibleLanguageElements();

}

function refreshVisibleLanguageElements() {

    $$(".more-toggle").forEach((button) => {

        const expanded =
            button.getAttribute(
                "aria-expanded"
            ) === "true";

        button.textContent =
            expanded
                ? t("less")
                : t("more");

    });

}

languageBtn?.addEventListener(
    "click",
    () => {

        currentLanguage =
            currentLanguage === "en"
                ? "bn"
                : "en";

        localStorage.setItem(
            STORAGE_KEYS.language,
            currentLanguage
        );

        applyLanguage();

        /*
         * Search results are regenerated so that
         * their labels follow the selected language.
         */
        const query =
            $("#problemSearch")?.value || "";

        if (query.trim()) {
            renderSearchResults(
                findProblems(query)
            );
        }

    }
);

applyLanguage();

/* ============================================================
   CLEAN "MORE / 3-DOT" SYSTEM
   ------------------------------------------------------------
   This keeps the main screen clean.
   Any element with:
       data-more
   or
       class="more-toggle"
   can reveal extra information.
============================================================ */

function toggleMore(button) {

    if (!button) return;

    const targetId =
        button.dataset.more ||
        button.getAttribute("aria-controls");

    if (!targetId) return;

    const target =
        document.getElementById(targetId);

    if (!target) return;

    const isOpen =
        target.classList.contains(
            "more-open"
        );

    if (isOpen) {

        target.classList.remove(
            "more-open"
        );

        target.hidden = true;

        button.setAttribute(
            "aria-expanded",
            "false"
        );

        button.textContent =
            t("more");

    } else {

        target.hidden = false;

        target.classList.add(
            "more-open"
        );

        button.setAttribute(
            "aria-expanded",
            "true"
        );

        button.textContent =
            t("less");

    }

}

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                ".more-toggle,[data-more]"
            );

        if (!button) return;

        event.preventDefault();

        toggleMore(button);

    }
);

/* ============================================================
   PROBLEM DATABASE
============================================================ */

const problemDatabase = [

    {
        id: "facebook",
        title: "Facebook Account Recovery",
        bnTitle: "ফেসবুক অ্যাকাউন্ট রিকভারি",
        keywords: [
            "facebook",
            "fb",
            "facebook account",
            "facebook hacked",
            "fb hacked",
            "account hacked",
            "facebook password",
            "ফেসবুক",
            "ফেসবুক হ্যাক",
            "ফেসবুক একাউন্ট",
            "ফেসবুক অ্যাকাউন্ট"
        ],
        description:
            "Recover your account, secure your email, remove unknown sessions and enable 2FA.",
        bnDescription:
            "অ্যাকাউন্ট ফিরে পান, ইমেইল সুরক্ষিত করুন, অচেনা ডিভাইস সরান এবং 2FA চালু করুন।",
        type: "facebook"
    },

    {
        id: "instagram",
        title: "Instagram Account Recovery",
        bnTitle: "ইনস্টাগ্রাম অ্যাকাউন্ট রিকভারি",
        keywords: [
            "instagram",
            "insta",
            "instagram hacked",
            "instagram account",
            "ইনস্টাগ্রাম",
            "ইন্সটাগ্রাম",
            "ইনস্টা"
        ],
        description:
            "Use official Instagram recovery options and secure the email connected to the account.",
        bnDescription:
            "অফিশিয়াল Instagram recovery ব্যবহার করুন এবং অ্যাকাউন্টের সঙ্গে যুক্ত ইমেইল সুরক্ষিত করুন।",
        type: "instagram"
    },

    {
        id: "whatsapp",
        title: "WhatsApp Account Security",
        bnTitle: "WhatsApp অ্যাকাউন্ট নিরাপত্তা",
        keywords: [
            "whatsapp",
            "whatsapp hacked",
            "whatsapp account",
            "whatsapp code",
            "whatsapp otp",
            "হোয়াটসঅ্যাপ",
            "হোয়াটসঅ্যাপ",
            "হোয়াটসঅ্যাপ হ্যাক"
        ],
        description:
            "Check linked devices, enable two-step verification and never share your verification code.",
        bnDescription:
            "Linked Devices পরীক্ষা করুন, two-step verification চালু করুন এবং verification code কাউকে দেবেন না।",
        type: "whatsapp"
    },

    {
        id: "google",
        title: "Google / Gmail Account Recovery",
        bnTitle: "Google / Gmail অ্যাকাউন্ট রিকভারি",
        keywords: [
            "google",
            "gmail",
            "gmail hacked",
            "google account",
            "google hacked",
            "গুগল",
            "জিমেইল",
            "জিমেইল হ্যাক"
        ],
        description:
            "Recover your Google account and review security activity, devices and recovery options.",
        bnDescription:
            "Google account recovery করুন এবং security activity, devices ও recovery options পরীক্ষা করুন।",
        type: "google"
    },

    {
        id: "blackmail",
        title: "Blackmail / Threat",
        bnTitle: "ব্ল্যাকমেইল / হুমকি",
        keywords: [
            "blackmail",
            "blackmailing",
            "threat",
            "threatening",
            "money demand",
            "extortion",
            "ব্ল্যাকমেইল",
            "ব্ল্যাকমেল",
            "হুমকি",
            "টাকা চেয়ে হুমকি"
        ],
        description:
            "Do not pay or send more content. Preserve evidence, secure accounts and report appropriately.",
        bnDescription:
            "টাকা বা আরও ব্যক্তিগত ছবি/ভিডিও পাঠাবেন না। প্রমাণ সংরক্ষণ করুন, অ্যাকাউন্ট সুরক্ষিত করুন এবং রিপোর্ট করুন।",
        type: "blackmail"
    },

    {
        id: "private",
        title: "Private Photo / Video Threat",
        bnTitle: "প্রাইভেট ছবি / ভিডিও নিয়ে হুমকি",
        keywords: [
            "private photo",
            "private video",
            "intimate photo",
            "intimate video",
            "nude",
            "nudes",
            "photo threat",
            "video threat",
            "প্রাইভেট ছবি",
            "প্রাইভেট ভিডিও",
            "ব্যক্তিগত ছবি",
            "ব্যক্তিগত ভিডিও",
            "ছবি ছড়িয়ে দেবে"
        ],
        description:
            "Do not send more material or pay under pressure. Save evidence and report the content.",
        bnDescription:
            "চাপের মুখে আরও ছবি/ভিডিও বা টাকা পাঠাবেন না। প্রমাণ সংরক্ষণ করুন এবং কনটেন্ট রিপোর্ট করুন।",
        type: "private"
    },

    {
        id: "harassment",
        title: "Repeated Calls / Online Harassment",
        bnTitle: "বারবার ফোন / অনলাইন হয়রানি",
        keywords: [
            "harassment",
            "online harassment",
            "bad message",
            "abuse",
            "bothering",
            "disturbing",
            "repeated calls",
            "unknown calls",
            "হয়রানি",
            "হয়রানি",
            "খারাপ মেসেজ",
            "বারবার ফোন",
            "বিরক্ত করছে"
        ],
        description:
            "Save evidence, restrict/block the person and report repeated abuse.",
        bnDescription:
            "প্রমাণ সংরক্ষণ করুন, ব্যক্তি/নম্বর block বা restrict করুন এবং হয়রানি রিপোর্ট করুন।",
        type: "harassment"
    },

    {
        id: "fakeprofile",
        title: "Fake Profile / Impersonation",
        bnTitle: "ফেক প্রোফাইল / পরিচয় নকল",
        keywords: [
            "fake profile",
            "fake account",
            "fake facebook",
            "fake instagram",
            "impersonation",
            "fake id",
            "ভুয়া প্রোফাইল",
            "ফেক প্রোফাইল",
            "ফেক আইডি",
            "পরিচয় নকল"
        ],
        description:
            "Save the profile URL and screenshots, report impersonation and secure your real account.",
        bnDescription:
            "প্রোফাইলের URL ও screenshot রাখুন, impersonation report করুন এবং নিজের অ্যাকাউন্ট সুরক্ষিত করুন।",
        type: "fakeprofile"
    },

    {
        id: "photo",
        title: "Photo Misuse",
        bnTitle: "ছবির অপব্যবহার",
        keywords: [
            "photo misuse",
            "photo stolen",
            "my photo",
            "picture misuse",
            "photo abuse",
            "ছবির অপব্যবহার",
            "ছবি চুরি",
            "আমার ছবি",
            "ছবি নিয়ে সমস্যা"
        ],
        description:
            "Preserve the original evidence, save the URL and report the content.",
        bnDescription:
            "মূল প্রমাণ সংরক্ষণ করুন, URL রাখুন এবং কনটেন্ট রিপোর্ট করুন।",
        type: "photo"
    },

    {
        id: "scam",
        title: "Scam / Phishing / OTP Fraud",
        bnTitle: "স্ক্যাম / ফিশিং / OTP প্রতারণা",
        keywords: [
            "scam",
            "phishing",
            "fake link",
            "otp",
            "verification code",
            "suspicious link",
            "login link",
            "স্ক্যাম",
            "ফিশিং",
            "ওটিপি",
            "ভুয়া লিংক",
            "ভেরিফিকেশন কোড"
        ],
        description:
            "Never share OTPs, passwords or PINs. Verify suspicious requests independently.",
        bnDescription:
            "OTP, password বা PIN কখনো দেবেন না। সন্দেহজনক অনুরোধ আলাদাভাবে যাচাই করুন।",
        type: "scam"
    },

    {
        id: "money",
        title: "UPI / Bank / Financial Fraud",
        bnTitle: "UPI / ব্যাংক / আর্থিক প্রতারণা",
        keywords: [
            "upi",
            "bank fraud",
            "money stolen",
            "payment fraud",
            "card fraud",
            "financial fraud",
            "money scam",
            "upi fraud",
            "টাকা কেটে নিয়েছে",
            "টাকা কেটে নিয়েছে",
            "ব্যাংক প্রতারণা",
            "ইউপিআই",
            "ইউপিআই প্রতারণা"
        ],
        description:
            "Contact your bank/payment provider immediately and preserve transaction information.",
        bnDescription:
            "অবিলম্বে ব্যাংক/payment provider-এর সঙ্গে যোগাযোগ করুন এবং transaction information সংরক্ষণ করুন।",
        type: "money"
    },

    {
        id: "phone",
        title: "Phone Security / Suspicious App",
        bnTitle: "ফোন নিরাপত্তা / সন্দেহজনক অ্যাপ",
        keywords: [
            "phone hacked",
            "phone security",
            "spyware",
            "unknown app",
            "suspicious app",
            "phone compromised",
            "screen sharing",
            "ফোন হ্যাক",
            "ফোন নিরাপত্তা",
            "স্পাইওয়্যার",
            "অজানা অ্যাপ",
            "সন্দেহজনক অ্যাপ"
        ],
        description:
            "Review installed apps, permissions, device-admin/accessibility access and account sessions.",
        bnDescription:
            "ইনস্টল করা অ্যাপ, permissions, device-admin/accessibility access এবং account sessions পরীক্ষা করুন।",
        type: "phone"
    },

    {
        id: "stalking",
        title: "Online Stalking / Tracking",
        bnTitle: "অনলাইন স্টকিং / ট্র্যাকিং",
        keywords: [
            "stalking",
            "online stalking",
            "tracking",
            "monitoring",
            "following me",
            "location tracking",
            "স্টকিং",
            "অনলাইনে অনুসরণ",
            "ট্র্যাক করছে",
            "লোকেশন ট্র্যাক"
        ],
        description:
            "Review location sharing, sessions and privacy settings. Preserve repeated unwanted contact.",
        bnDescription:
            "Location sharing, sessions ও privacy settings পরীক্ষা করুন এবং বারবার unwanted contact-এর প্রমাণ রাখুন।",
        type: "stalking"
    },

    {
        id: "account",
        title: "General Account Security",
        bnTitle: "সাধারণ অ্যাকাউন্ট নিরাপত্তা",
        keywords: [
            "account security",
            "account recovery",
            "password changed",
            "can't login",
            "cannot login",
            "login problem",
            "অ্যাকাউন্ট নিরাপত্তা",
            "অ্যাকাউন্ট রিকভারি",
            "লগইন করতে পারছি না",
            "পাসওয়ার্ড বদলে গেছে"
        ],
        description:
            "Secure the email first, recover the account through official channels and enable 2FA.",
        bnDescription:
            "প্রথমে ইমেইল সুরক্ষিত করুন, অফিসিয়াল recovery ব্যবহার করুন এবং 2FA চালু করুন।",
        type: "account"
    }

];

/* ============================================================
   SMART SEARCH ENGINE
============================================================ */

function scoreProblem(item, query) {

    const normalizedQuery =
        normalizeText(query);

    if (!normalizedQuery) return 0;

    const title =
        normalizeText(item.title);

    const bnTitle =
        normalizeText(item.bnTitle);

    let score = 0;

    if (
        title === normalizedQuery ||
        bnTitle === normalizedQuery
    ) {
        score += 20;
    }

    if (
        title.includes(normalizedQuery) ||
        bnTitle.includes(normalizedQuery)
    ) {
        score += 10;
    }

    item.keywords.forEach((keyword) => {

        const normalizedKeyword =
            normalizeText(keyword);

        if (
            normalizedKeyword ===
            normalizedQuery
        ) {
            score += 12;
        }

        if (
            normalizedQuery.includes(
                normalizedKeyword
            )
        ) {
            score += 8;
        }

        if (
            normalizedKeyword.includes(
                normalizedQuery
            )
        ) {
            score += 5;
        }

        const queryWords =
            normalizedQuery
                .split(/\s+/)
                .filter(Boolean);

        const keywordWords =
            normalizedKeyword
                .split(/\s+/)
                .filter(Boolean);

        queryWords.forEach((word) => {

            if (
                word.length > 2 &&
                keywordWords.includes(word)
            ) {
                score += 4;
            }

        });

    });

    return score;
}

function findProblems(query) {

    const normalized =
        normalizeText(query);

    if (!normalized) return [];

    return problemDatabase
        .map((item) => ({
            ...item,
            score: scoreProblem(
                item,
                normalized
            )
        }))
        .filter(
            item => item.score > 0
        )
        .sort(
            (a, b) =>
                b.score - a.score
        )
        .slice(0, 6);

}

/* ============================================================
   SEARCH UI
============================================================ */

const problemSearch =
    $("#problemSearch");

const searchResults =
    $("#searchResults");

const clearSearch =
    $("#clearSearch");

function getResultTitle(item) {

    return currentLanguage === "bn"
        ? item.bnTitle
        : item.title;

}

function getResultDescription(item) {

    return currentLanguage === "bn"
        ? item.bnDescription
        : item.description;

}

function renderSearchResults(results) {

    if (!searchResults) return;

    if (!results.length) {

        searchResults.innerHTML = `
            <div class="search-result">
                <h3>🔎 ${safeText(t("noGuide"))}</h3>
                <p>
                    ${safeText(t("tryWords"))}
                </p>
            </div>
        `;

        return;
    }

    searchResults.innerHTML =
        results.map((item) => `

            <div
                class="search-result"
                data-search-result="${safeText(item.type)}"
            >

                <h3>
                    ${safeText(
                        getResultTitle(item)
                    )}
                </h3>

                <p>
                    ${safeText(
                        getResultDescription(item)
                    )}
                </p>

                <button
                    type="button"
                    class="result-help"
                    data-result-type="${safeText(item.type)}"
                >
                    ${safeText(
                        t("openGuide")
                    )}
                </button>

            </div>

        `).join("");

}

problemSearch?.addEventListener(
    "input",
    () => {

        const value =
            problemSearch.value;

        if (!value.trim()) {

            if (searchResults) {
                searchResults.innerHTML = "";
            }

            return;
        }

        renderSearchResults(
            findProblems(value)
        );

    }
);

clearSearch?.addEventListener(
    "click",
    () => {

        if (problemSearch) {
            problemSearch.value = "";
            problemSearch.focus();
        }

        if (searchResults) {
            searchResults.innerHTML = "";
        }

    }
);

/* ============================================================
   GUIDE DATA
============================================================ */

const guides = {

    facebook: {

        title: {
            en: "🔵 Facebook Account Recovery",
            bn: "🔵 Facebook অ্যাকাউন্ট রিকভারি"
        },

        html: {

            en: `
                <h3>1. Secure your email first</h3>
                <p>
                    If your email account is also compromised,
                    secure the email account before recovering Facebook.
                </p>

                <h3>2. Use official Facebook recovery</h3>
                <p>
                    Use only Facebook's official account recovery tools.
                    Do not pay strangers who promise instant recovery.
                </p>

                <h3>3. Change your password</h3>
                <p>
                    Create a new password that you do not use on another website.
                </p>

                <h3>4. Check active sessions</h3>
                <p>
                    Review where your account is logged in and remove devices
                    you do not recognize.
                </p>

                <h3>5. Enable 2FA</h3>
                <p>
                    Enable two-factor authentication after recovering the account.
                </p>

                <div class="important-note">
                    Never give your password, OTP, login code or recovery code
                    to anyone claiming to be a Facebook recovery agent.
                </div>
            `,

            bn: `
                <h3>১. প্রথমে ইমেইল সুরক্ষিত করুন</h3>
                <p>
                    আপনার ইমেইলও যদি ঝুঁকিতে থাকে, আগে ইমেইল অ্যাকাউন্ট সুরক্ষিত করুন।
                </p>

                <h3>২. অফিসিয়াল Facebook recovery ব্যবহার করুন</h3>
                <p>
                    শুধু Facebook-এর অফিসিয়াল recovery system ব্যবহার করুন।
                    কেউ দ্রুত account ফেরত দেওয়ার কথা বলে টাকা চাইলে বিশ্বাস করবেন না।
                </p>

                <h3>৩. নতুন password দিন</h3>
                <p>
                    এমন password ব্যবহার করুন যা অন্য কোনো website-এ ব্যবহার করেননি।
                </p>

                <h3>৪. Active sessions পরীক্ষা করুন</h3>
                <p>
                    কোন কোন device-এ account login আছে দেখুন এবং অচেনা device সরিয়ে দিন।
                </p>

                <h3>৫. 2FA চালু করুন</h3>
                <p>
                    Account ফিরে পাওয়ার পর two-factor authentication চালু করুন।
                </p>

                <div class="important-note">
                    Password, OTP, login code বা recovery code কাউকে দেবেন না।
                </div>
            `

        }

    },

    instagram: {

        title: {
            en: "📸 Instagram Account Recovery",
            bn: "📸 Instagram অ্যাকাউন্ট রিকভারি"
        },

        html: {

            en: `
                <ol>
                    <li>Secure the email connected to Instagram.</li>
                    <li>Use Instagram's official recovery options.</li>
                    <li>Change your password after recovery.</li>
                    <li>Review login activity and remove unknown devices.</li>
                    <li>Enable two-factor authentication.</li>
                    <li>Check whether your email or phone number was changed.</li>
                </ol>

                <div class="important-note">
                    Never pay an unknown person promising guaranteed Instagram recovery.
                </div>
            `,

            bn: `
                <ol>
                    <li>Instagram-এর সঙ্গে যুক্ত email আগে সুরক্ষিত করুন।</li>
                    <li>Instagram-এর অফিসিয়াল recovery options ব্যবহার করুন।</li>
                    <li>Account ফিরে পাওয়ার পর password বদলান।</li>
                    <li>Login activity দেখে অচেনা device সরান।</li>
                    <li>Two-factor authentication চালু করুন।</li>
                    <li>Email বা phone number পরিবর্তন হয়েছে কি না পরীক্ষা করুন।</li>
                </ol>

                <div class="important-note">
                    Guaranteed recovery-এর কথা বলে অচেনা কাউকে টাকা দেবেন না।
                </div>
            `

        }

    },

    whatsapp: {

        title: {
            en: "📱 WhatsApp Account Security",
            bn: "📱 WhatsApp অ্যাকাউন্ট নিরাপত্তা"
        },

        html: {

            en: `
                <ol>
                    <li>Open WhatsApp and check Linked Devices.</li>
                    <li>Log out devices you do not recognize.</li>
                    <li>Enable Two-step verification.</li>
                    <li>Never share your WhatsApp verification code.</li>
                    <li>Set a strong device lock.</li>
                    <li>Tell trusted contacts if someone is impersonating you.</li>
                </ol>

                <div class="important-note">
                    A random caller or message should never receive your WhatsApp verification code.
                </div>
            `,

            bn: `
                <ol>
                    <li>WhatsApp খুলে Linked Devices পরীক্ষা করুন।</li>
                    <li>অচেনা device logout করুন।</li>
                    <li>Two-step verification চালু করুন।</li>
                    <li>WhatsApp verification code কাউকে দেবেন না।</li>
                    <li>ফোনে শক্তিশালী screen lock ব্যবহার করুন।</li>
                    <li>কেউ আপনার পরিচয় ব্যবহার করলে trusted contacts-কে জানান।</li>
                </ol>

                <div class="important-note">
                    Random caller বা message-কে WhatsApp verification code দেবেন না।
                </div>
            `

        }

    },

    google: {

        title: {
            en: "🔐 Google / Gmail Account Recovery",
            bn: "🔐 Google / Gmail অ্যাকাউন্ট রিকভারি"
        },

        html: {

            en: `
                <ol>
                    <li>Use Google's official account recovery process.</li>
                    <li>Change the password after recovery.</li>
                    <li>Review recent security activity.</li>
                    <li>Remove unknown devices.</li>
                    <li>Check recovery email and phone number.</li>
                    <li>Review connected third-party applications.</li>
                    <li>Enable two-step verification.</li>
                </ol>

                <div class="important-note">
                    Never share Google verification codes with another person.
                </div>
            `,

            bn: `
                <ol>
                    <li>Google-এর অফিসিয়াল account recovery process ব্যবহার করুন।</li>
                    <li>Account ফিরে পাওয়ার পর password পরিবর্তন করুন।</li>
                    <li>Recent security activity পরীক্ষা করুন।</li>
                    <li>অচেনা device সরিয়ে দিন।</li>
                    <li>Recovery email ও phone number পরীক্ষা করুন।</li>
                    <li>Connected third-party apps পরীক্ষা করুন।</li>
                    <li>Two-step verification চালু করুন।</li>
                </ol>

                <div class="important-note">
                    Google verification code কাউকে দেবেন না।
                </div>
            `

        }

    },

    account: {

        title: {
            en: "🔐 General Account Recovery",
            bn: "🔐 সাধারণ অ্যাকাউন্ট রিকভারি"
        },

        html: {

            en: `
                <h3>First: secure your email</h3>
                <p>
                    Your email is often the recovery key for other accounts.
                </p>

                <h3>Then recover the account</h3>
                <p>
                    Use the platform's official recovery system.
                </p>

                <h3>After recovery</h3>
                <ol>
                    <li>Change the password.</li>
                    <li>Sign out unknown devices.</li>
                    <li>Check recovery information.</li>
                    <li>Enable 2FA.</li>
                    <li>Review suspicious activity.</li>
                </ol>

                <div class="important-note">
                    Do not give login codes to anyone offering account recovery.
                </div>
            `,

            bn: `
                <h3>প্রথমে ইমেইল সুরক্ষিত করুন</h3>
                <p>
                    অনেক account-এর recovery key হিসেবে email কাজ করে।
                </p>

                <h3>তারপর account recovery করুন</h3>
                <p>
                    সংশ্লিষ্ট platform-এর অফিসিয়াল recovery system ব্যবহার করুন।
                </p>

                <h3>Account ফিরে পাওয়ার পর</h3>
                <ol>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>অচেনা device logout করুন।</li>
                    <li>Recovery information পরীক্ষা করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>সন্দেহজনক activity পরীক্ষা করুন।</li>
                </ol>

                <div class="important-note">
                    Account recovery-এর নামে কাউকে login code দেবেন না।
                </div>
            `

        }

    },

    blackmail: {

        title: {
            en: "⚠️ Blackmail / Threat",
            bn: "⚠️ ব্ল্যাকমেইল / হুমকি"
        },

        html: {

            en: `
                <h3>1. Do not pay immediately</h3>
                <p>
                    Payment does not guarantee that the blackmailer will stop.
                </p>

                <h3>2. Do not send more content</h3>
                <p>
                    Do not send additional photos, videos, passwords, OTPs or money.
                </p>

                <h3>3. Preserve evidence</h3>
                <ul>
                    <li>Take screenshots.</li>
                    <li>Save username/profile URL.</li>
                    <li>Keep dates and times.</li>
                    <li>Save payment information if relevant.</li>
                    <li>Keep the original evidence where possible.</li>
                </ul>

                <h3>4. Secure your accounts</h3>
                <ol>
                    <li>Change important passwords.</li>
                    <li>Enable 2FA.</li>
                    <li>Review logged-in devices.</li>
                    <li>Review privacy settings.</li>
                </ol>

                <h3>5. Report and block</h3>
                <p>
                    Report the account/content through the platform's reporting system.
                </p>

                <div class="important-note">
                    If there is an immediate physical safety threat,
                    move somewhere safe and seek help from a trusted person
                    and appropriate local emergency services.
                </div>
            `,

            bn: `
                <h3>১. সঙ্গে সঙ্গে টাকা দেবেন না</h3>
                <p>
                    টাকা দিলেই যে ব্ল্যাকমেইলার থেমে যাবে তার কোনো নিশ্চয়তা নেই।
                </p>

                <h3>২. আরও কোনো content পাঠাবেন না</h3>
                <p>
                    আরও ছবি, ভিডিও, password, OTP বা টাকা পাঠাবেন না।
                </p>

                <h3>৩. প্রমাণ সংরক্ষণ করুন</h3>
                <ul>
                    <li>Screenshot নিন।</li>
                    <li>Username/profile URL রাখুন।</li>
                    <li>Date ও time লিখে রাখুন।</li>
                    <li>টাকা চাওয়া হলে payment information রাখুন।</li>
                    <li>সম্ভব হলে original evidence অক্ষত রাখুন।</li>
                </ul>

                <h3>৪. নিজের account সুরক্ষিত করুন</h3>
                <ol>
                    <li>গুরুত্বপূর্ণ password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Logged-in devices পরীক্ষা করুন।</li>
                    <li>Privacy settings পরীক্ষা করুন।</li>
                </ol>

                <h3>৫. Report ও block করুন</h3>
                <p>
                    Platform-এর reporting system দিয়ে account/content report করুন।
                </p>

                <div class="important-note">
                    শারীরিক নিরাপত্তার তাৎক্ষণিক ঝুঁকি থাকলে নিরাপদ স্থানে যান
                    এবং trusted person ও উপযুক্ত local emergency service-এর সাহায্য নিন।
                </div>
            `

        }

    },

    private: {

        title: {
            en: "📸 Private Photo / Video Threat",
            bn: "📸 প্রাইভেট ছবি / ভিডিও নিয়ে হুমকি"
        },

        html: {

            en: `
                <ol>
                    <li>Do not send additional private material.</li>
                    <li>Do not pay simply because someone is threatening you.</li>
                    <li>Save screenshots of the threats.</li>
                    <li>Save usernames, URLs and timestamps.</li>
                    <li>Report the account/content.</li>
                    <li>Block the person when safe to do so.</li>
                    <li>Secure email and social-media accounts.</li>
                </ol>

                <div class="important-note">
                    Do not blame yourself. Preserve evidence and seek support
                    from a trusted person and appropriate authorities when necessary.
                </div>
            `,

            bn: `
                <ol>
                    <li>আর কোনো private ছবি বা ভিডিও পাঠাবেন না।</li>
                    <li>শুধু হুমকি দিচ্ছে বলে টাকা দেবেন না।</li>
                    <li>হুমকির screenshot রাখুন।</li>
                    <li>Username, URL ও timestamp সংরক্ষণ করুন।</li>
                    <li>Account/content report করুন।</li>
                    <li>নিরাপদ হলে ব্যক্তিকে block করুন।</li>
                    <li>Email ও social-media account সুরক্ষিত করুন।</li>
                </ol>

                <div class="important-note">
                    নিজেকে দোষ দেবেন না। প্রমাণ রাখুন এবং প্রয়োজনে trusted person
                    ও উপযুক্ত কর্তৃপক্ষের সাহায্য নিন।
                </div>
            `

        }

    },

    harassment: {

        title: {
            en: "📞 Repeated Calls / Online Harassment",
            bn: "📞 বারবার ফোন / অনলাইন হয়রানি"
        },

        html: {

            en: `
                <ol>
                    <li>Do not argue unnecessarily.</li>
                    <li>Save messages and call logs.</li>
                    <li>Take screenshots.</li>
                    <li>Block or restrict the person when appropriate.</li>
                    <li>Review who can message, call, tag or mention you.</li>
                    <li>Report abusive behaviour.</li>
                    <li>Tell a trusted person if the behaviour continues.</li>
                </ol>

                <div class="important-note">
                    Repeated unwanted contact can become more serious.
                    Keep a timeline of incidents.
                </div>
            `,

            bn: `
                <ol>
                    <li>অপ্রয়োজনীয় তর্কে যাবেন না।</li>
                    <li>Message ও call log সংরক্ষণ করুন।</li>
                    <li>Screenshot নিন।</li>
                    <li>প্রয়োজনে block বা restrict করুন।</li>
                    <li>কে আপনাকে message, call, tag বা mention করতে পারবে তা পরীক্ষা করুন।</li>
                    <li>Abusive behaviour report করুন।</li>
                    <li>হয়রানি চলতে থাকলে trusted person-কে জানান।</li>
                </ol>

                <div class="important-note">
                    বারবার unwanted contact গুরুতর হতে পারে।
                    ঘটনাগুলোর একটি timeline রাখুন।
                </div>
            `

        }

    },

    photo: {

        title: {
            en: "📸 Photo Misuse",
            bn: "📸 ছবির অপব্যবহার"
        },

        html: {

            en: `
                <ol>
                    <li>Take screenshots of the misuse.</li>
                    <li>Copy the profile/page URL.</li>
                    <li>Save the username.</li>
                    <li>Record the date and time.</li>
                    <li>Report the content.</li>
                    <li>Report impersonation if someone is pretending to be you.</li>
                    <li>Review your own privacy settings.</li>
                </ol>

                <div class="important-note">
                    Preserve evidence before deleting or blocking when possible.
                </div>
            `,

            bn: `
                <ol>
                    <li>ছবির অপব্যবহারের screenshot নিন।</li>
                    <li>Profile/page URL copy করুন।</li>
                    <li>Username সংরক্ষণ করুন।</li>
                    <li>Date ও time লিখে রাখুন।</li>
                    <li>Content report করুন।</li>
                    <li>আপনার পরিচয় নকল করলে impersonation report করুন।</li>
                    <li>নিজের privacy settings পরীক্ষা করুন।</li>
                </ol>

                <div class="important-note">
                    সম্ভব হলে block/delete করার আগে evidence সংরক্ষণ করুন।
                </div>
            `

        }

    },

    fakeprofile: {

        title: {
            en: "🎭 Fake Profile / Impersonation",
            bn: "🎭 ফেক প্রোফাইল / পরিচয় নকল"
        },

        html: {

            en: `
                <ol>
                    <li>Screenshot the fake profile.</li>
                    <li>Save the username.</li>
                    <li>Copy the profile URL.</li>
                    <li>Report it for impersonation.</li>
                    <li>Tell trusted contacts not to interact with it.</li>
                    <li>Secure your real account.</li>
                    <li>Enable 2FA.</li>
                </ol>

                <div class="important-note">
                    Do not send money or personal information to a fake profile.
                </div>
            `,

            bn: `
                <ol>
                    <li>ফেক প্রোফাইলের screenshot নিন।</li>
                    <li>Username সংরক্ষণ করুন।</li>
                    <li>Profile URL copy করুন।</li>
                    <li>Impersonation হিসেবে report করুন।</li>
                    <li>Trusted contacts-কে ওই profile-এর সঙ্গে interact না করতে বলুন।</li>
                    <li>নিজের real account সুরক্ষিত করুন।</li>
                    <li>2FA চালু করুন।</li>
                </ol>

                <div class="important-note">
                    Fake profile-কে টাকা বা ব্যক্তিগত তথ্য দেবেন না।
                </div>
            `

        }

    },

    scam: {

        title: {
            en: "🎣 Scam / Phishing / OTP Fraud",
            bn: "🎣 স্ক্যাম / ফিশিং / OTP প্রতারণা"
        },

        html: {

            en: `
                <h3>Stop</h3>
                <p>
                    Do not click the link, download the file or continue
                    the suspicious interaction.
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

                <h3>Verify independently</h3>
                <p>
                    Contact the company through an official website or
                    phone number you already trust.
                </p>

                <h3>If you already clicked</h3>
                <ol>
                    <li>Stop entering information.</li>
                    <li>Close the suspicious page.</li>
                    <li>Change affected passwords.</li>
                    <li>Review account activity.</li>
                    <li>Contact your bank immediately if money is involved.</li>
                </ol>

                <div class="important-note">
                    A message looking professional does not prove that it is genuine.
                </div>
            `,

            bn: `
                <h3>থামুন</h3>
                <p>
                    Suspicious link-এ click, file download বা conversation চালিয়ে যাবেন না।
                </p>

                <h3>কখনো দেবেন না</h3>
                <ul>
                    <li>OTP</li>
                    <li>Password</li>
                    <li>UPI PIN</li>
                    <li>Banking PIN</li>
                    <li>Recovery code</li>
                    <li>Screen-sharing access</li>
                </ul>

                <h3>নিজে যাচাই করুন</h3>
                <p>
                    কোম্পানির পরিচিত official website বা phone number ব্যবহার করে যাচাই করুন।
                </p>

                <h3>ইতিমধ্যে click করলে</h3>
                <ol>
                    <li>আর কোনো তথ্য দেবেন না।</li>
                    <li>Suspicious page বন্ধ করুন।</li>
                    <li>আক্রান্ত password পরিবর্তন করুন।</li>
                    <li>Account activity পরীক্ষা করুন।</li>
                    <li>টাকার ব্যাপার হলে সঙ্গে সঙ্গে bank-এর সঙ্গে যোগাযোগ করুন।</li>
                </ol>

                <div class="important-note">
                    Professional-looking message মানেই সেটি আসল নয়।
                </div>
            `

        }

    },

    money: {

        title: {
            en: "💳 UPI / Bank / Financial Fraud",
            bn: "💳 UPI / ব্যাংক / আর্থিক প্রতারণা"
        },

        html: {

            en: `
                <h3>Act immediately</h3>

                <ol>
                    <li>Contact your bank/payment provider immediately.</li>
                    <li>Report the unauthorized transaction.</li>
                    <li>Block compromised cards/accounts when necessary.</li>
                    <li>Change affected passwords/PINs.</li>
                    <li>Save transaction IDs.</li>
                    <li>Save screenshots and messages.</li>
                    <li>Use official cybercrime reporting channels.</li>
                </ol>

                <div class="important-note">
                    Never share your UPI PIN or OTP.
                    A UPI PIN is used to authorize a payment, not to receive money.
                </div>
            `,

            bn: `
                <h3>দ্রুত ব্যবস্থা নিন</h3>

                <ol>
                    <li>সঙ্গে সঙ্গে bank/payment provider-এর সঙ্গে যোগাযোগ করুন।</li>
                    <li>Unauthorized transaction report করুন।</li>
                    <li>প্রয়োজনে compromised card/account block করুন।</li>
                    <li>আক্রান্ত password/PIN পরিবর্তন করুন।</li>
                    <li>Transaction ID সংরক্ষণ করুন।</li>
                    <li>Screenshot ও message সংরক্ষণ করুন।</li>
                    <li>Official cybercrime reporting channel ব্যবহার করুন।</li>
                </ol>

                <div class="important-note">
                    UPI PIN বা OTP কাউকে দেবেন না।
                    টাকা receive করার জন্য UPI PIN লাগে না।
                </div>
            `

        }

    },

    phone: {

        title: {
            en: "📱 Phone Security / Suspicious App",
            bn: "📱 ফোন নিরাপত্তা / সন্দেহজনক অ্যাপ"
        },

        html: {

            en: `
                <ol>
                    <li>Update the operating system.</li>
                    <li>Review recently installed apps.</li>
                    <li>Remove apps you do not recognize.</li>
                    <li>Review camera, microphone, location and storage permissions.</li>
                    <li>Check Accessibility permissions.</li>
                    <li>Check Device Admin permissions.</li>
                    <li>Review Google/Apple account sessions.</li>
                    <li>Change important passwords from a trusted device if necessary.</li>
                </ol>

                <div class="important-note">
                    Do not destroy potentially useful evidence if the incident
                    may need investigation.
                </div>
            `,

            bn: `
                <ol>
                    <li>Operating system update করুন।</li>
                    <li>Recently installed apps পরীক্ষা করুন।</li>
                    <li>অচেনা app সরিয়ে দিন।</li>
                    <li>Camera, microphone, location ও storage permissions পরীক্ষা করুন।</li>
                    <li>Accessibility permissions পরীক্ষা করুন।</li>
                    <li>Device Admin permissions পরীক্ষা করুন।</li>
                    <li>Google/Apple account sessions পরীক্ষা করুন।</li>
                    <li>প্রয়োজনে trusted device থেকে গুরুত্বপূর্ণ password পরিবর্তন করুন।</li>
                </ol>

                <div class="important-note">
                    ঘটনা তদন্তের প্রয়োজন হলে গুরুত্বপূর্ণ evidence নষ্ট করবেন না।
                </div>
            `

        }

    },

    stalking: {

        title: {
            en: "👁️ Online Stalking / Tracking",
            bn: "👁️ অনলাইন স্টকিং / ট্র্যাকিং"
        },

        html: {

            en: `
                <h3>Protect your privacy</h3>

                <ul>
                    <li>Review location sharing.</li>
                    <li>Review active account sessions.</li>
                    <li>Remove unknown followers.</li>
                    <li>Restrict or block the person.</li>
                    <li>Review who can message you.</li>
                    <li>Review tags and mentions.</li>
                    <li>Review connected apps.</li>
                </ul>

                <h3>Preserve evidence</h3>

                <p>
                    Keep screenshots, usernames, URLs and dates of repeated
                    unwanted contact.
                </p>

                <div class="important-note">
                    If online stalking becomes a physical safety concern,
                    move somewhere safe and seek help.
                </div>
            `,

            bn: `
                <h3>Privacy সুরক্ষিত করুন</h3>

                <ul>
                    <li>Location sharing পরীক্ষা করুন।</li>
                    <li>Active account sessions পরীক্ষা করুন।</li>
                    <li>অচেনা follower সরিয়ে দিন।</li>
                    <li>ব্যক্তিকে restrict বা block করুন।</li>
                    <li>কে আপনাকে message করতে পারবে তা পরীক্ষা করুন।</li>
                    <li>Tags ও mentions settings পরীক্ষা করুন।</li>
                    <li>Connected apps পরীক্ষা করুন।</li>
                </ul>

                <h3>প্রমাণ সংরক্ষণ করুন</h3>

                <p>
                    বারবার unwanted contact-এর screenshot, username, URL এবং date সংরক্ষণ করুন।
                </p>

                <div class="important-note">
                    Online stalking শারীরিক নিরাপত্তার ঝুঁকিতে পরিণত হলে
                    নিরাপদ স্থানে যান এবং সাহায্য নিন।
                </div>
            `

        }

    }

};

/* ============================================================
   GENERIC GUIDE
============================================================ */

function getGuideTitle(guide) {

    if (!guide) {
        return currentLanguage === "bn"
            ? "🛡️ CyberCare Safety Guide"
            : "🛡️ CyberCare Safety Guide";
    }

    return (
        guide.title?.[currentLanguage] ||
        guide.title?.en ||
        "CyberCare Safety Guide"
    );

}

function getGuideHTML(guide) {

    if (!guide) {

        return currentLanguage === "bn"
            ? `
                <p>
                    প্রথমে প্রমাণ সংরক্ষণ করুন, account সুরক্ষিত করুন,
                    সন্দেহজনক ব্যক্তির সঙ্গে অতিরিক্ত যোগাযোগ বন্ধ করুন
                    এবং official reporting channel ব্যবহার করুন।
                </p>
            `
            : `
                <p>
                    Start by preserving evidence, securing your accounts,
                    avoiding unnecessary interaction and using official
                    reporting channels.
                </p>
            `;

    }

    return (
        guide.html?.[currentLanguage] ||
        guide.html?.en ||
        ""
    );

}

/* ============================================================
   GUIDE MODAL
============================================================ */

function closeGuide() {

    const overlay =
        $(".guide-overlay");

    if (overlay) {
        overlay.remove();
    }

    document.body.style.overflow = "";

}

function showGuide(title, content) {

    closeGuide();

    const overlay =
        document.createElement("div");

    overlay.className =
        "guide-overlay";

    overlay.innerHTML = `

        <div
            class="guide-modal"
            role="dialog"
            aria-modal="true"
            aria-label="${safeText(title)}"
        >

            <button
                type="button"
                class="guide-close"
                aria-label="${safeText(t("close"))}"
            >
                ✕
            </button>

            <h2>
                ${safeText(title)}
            </h2>

            <div class="guide-content">
                ${content}
            </div>

            <button
                type="button"
                class="guide-ok"
            >
                ${safeText(t("gotIt"))}
            </button>

        </div>
    `;

    document.body.appendChild(
        overlay
    );

    document.body.style.overflow =
        "hidden";

    overlay
        .querySelector(".guide-close")
        ?.addEventListener(
            "click",
            closeGuide
        );

    overlay
        .querySelector(".guide-ok")
        ?.addEventListener(
            "click",
            closeGuide
        );

    overlay.addEventListener(
        "click",
        (event) => {

            if (
                event.target === overlay
            ) {
                closeGuide();
            }

        }
    );

}

function openGuide(type) {

    const guide =
        guides[type];

    showGuide(
        getGuideTitle(guide),
        getGuideHTML(guide)
    );

}

/* ============================================================
   SEARCH RESULT CLICK
============================================================ */

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                ".result-help"
            );

        if (!button) return;

        const type =
            button.dataset.resultType;

        if (type) {
            openGuide(type);
        }

    }
);

/* ============================================================
   SERVICE BUTTON ROUTER
============================================================ */

function openServiceGuide(service) {

    const normalized =
        normalizeText(service);

    if (
        normalized.includes("facebook")
    ) {
        openGuide("facebook");
        return;
    }

    if (
        normalized.includes("instagram")
    ) {
        openGuide("instagram");
        return;
    }

    if (
        normalized.includes("whatsapp")
    ) {
        openGuide("whatsapp");
        return;
    }

    if (
        normalized.includes("google") ||
        normalized.includes("gmail")
    ) {
        openGuide("google");
        return;
    }

    if (
        normalized.includes("account")
    ) {
        openGuide("account");
        return;
    }

    if (
        normalized.includes("scam") ||
        normalized.includes("phishing")
    ) {
        openGuide("scam");
        return;
    }

    if (
        normalized.includes("fraud") ||
        normalized.includes("money")
    ) {
        openGuide("money");
        return;
    }

    if (
        normalized.includes("phone")
    ) {
        openGuide("phone");
        return;
    }

    if (
        normalized.includes("blackmail")
    ) {
        openGuide("blackmail");
        return;
    }

    if (
        normalized.includes("harassment")
    ) {
        openGuide("harassment");
        return;
    }

    if (
        normalized.includes("stalking")
    ) {
        openGuide("stalking");
        return;
    }

    openGuide("account");

}

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                ".help-btn"
            );

        if (!button) return;

        openServiceGuide(
            button.dataset.service ||
            button.textContent ||
            ""
        );

    }
);

/* ============================================================
   WOMEN SAFETY ROUTER
============================================================ */

function openWomenGuide(type) {

    const normalized =
        normalizeText(type);

    if (
        normalized.includes(
            "blackmail"
        )
    ) {
        openGuide("blackmail");
        return;
    }

    if (
        normalized.includes(
            "private"
        ) ||
        normalized.includes(
            "video"
        )
    ) {
        openGuide("private");
        return;
    }

    if (
        normalized.includes(
            "photo"
        )
    ) {
        openGuide("photo");
        return;
    }

    if (
        normalized.includes(
            "fake"
        ) ||
        normalized.includes(
            "profile"
        )
    ) {
        openGuide("fakeprofile");
        return;
    }

    if (
        normalized.includes(
            "stalk"
        ) ||
        normalized.includes(
            "track"
        )
    ) {
        openGuide("stalking");
        return;
    }

    if (
        normalized.includes(
            "harass"
        ) ||
        normalized.includes(
            "call"
        )
    ) {
        openGuide("harassment");
        return;
    }

    openGuide("harassment");

}

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                ".women-btn"
            );

        if (!button) return;

        openWomenGuide(
            button.dataset.women ||
            button.textContent ||
            ""
        );

    }
);

/* ============================================================
   EMERGENCY GUIDE
============================================================ */

function openEmergencyGuide() {

    const content =
        currentLanguage === "bn"

            ? `
                <h3>১. আগে নিরাপদ হন</h3>

                <p>
                    শারীরিক বিপদের আশঙ্কা থাকলে নিরাপদ জায়গায় যান
                    এবং trusted person-এর সঙ্গে যোগাযোগ করুন।
                </p>

                <h3>২. আরও কিছু পাঠাবেন না</h3>

                <p>
                    OTP, password, PIN, টাকা বা private content পাঠাবেন না।
                </p>

                <h3>৩. প্রমাণ রাখুন</h3>

                <p>
                    Screenshot, username, URL, phone number,
                    transaction ID এবং date/time সংরক্ষণ করুন।
                </p>

                <h3>৪. Account সুরক্ষিত করুন</h3>

                <p>
                    Password পরিবর্তন করুন, unknown sessions logout করুন
                    এবং 2FA চালু করুন।
                </p>

                <h3>৫. টাকা সংক্রান্ত fraud হলে</h3>

                <p>
                    অবিলম্বে bank/payment provider-এর সঙ্গে যোগাযোগ করুন।
                </p>

                <div class="important-note">
                    আপনার নিরাপত্তাই প্রথম। একা সবকিছু সামলাতে হবে না।
                </div>
            `

            : `
                <h3>1. Get safe first</h3>

                <p>
                    If there is a physical safety concern,
                    move somewhere safe and contact a trusted person.
                </p>

                <h3>2. Do not send more</h3>

                <p>
                    Do not send OTPs, passwords, PINs, money or private content.
                </p>

                <h3>3. Preserve evidence</h3>

                <p>
                    Save screenshots, usernames, URLs, phone numbers,
                    transaction IDs and dates/times.
                </p>

                <h3>4. Secure accounts</h3>

                <p>
                    Change passwords, sign out unknown sessions and enable 2FA.
                </p>

                <h3>5. Financial fraud</h3>

                <p>
                    Contact your bank/payment provider immediately.
                </p>

                <div class="important-note">
                    Your safety comes first. You do not have to handle everything alone.
                </div>
            `;

    showGuide(
        t("emergencyTitle"),
        content
    );

}

$("#emergencyBtn")?.addEventListener(
    "click",
    openEmergencyGuide
);

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                "[data-emergency]"
            );

        if (!button) return;

        const type =
            button.dataset.emergency;

        if (type === "account") {
            openGuide("account");
        }

        else if (
            type === "facebook"
        ) {
            openGuide("facebook");
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

/* ============================================================
   QUICK HELP
============================================================ */

$("#quickHelpBtn")?.addEventListener(
    "click",
    () => {

        const target =
            document.getElementById(
                "services"
            );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        setTimeout(() => {

            const input =
                $("#problemSearch");

            input?.focus();

        }, 500);

    }
);

/* ============================================================
   LEARNING GUIDES
============================================================ */

const learningGuides = {

    password: {

        title: {
            en: "🔐 Password Safety",
            bn: "🔐 Password নিরাপত্তা"
        },

        html: {

            en: `
                <ol>
                    <li>Use a unique password for every important account.</li>
                    <li>Prefer long passphrases.</li>
                    <li>Consider using a reputable password manager.</li>
                    <li>Never share passwords through messages or calls.</li>
                    <li>Enable 2FA.</li>
                </ol>
            `,

            bn: `
                <ol>
                    <li>প্রতিটি গুরুত্বপূর্ণ account-এ আলাদা password ব্যবহার করুন।</li>
                    <li>দীর্ঘ passphrase ব্যবহার করুন।</li>
                    <li>প্রয়োজনে reputable password manager ব্যবহার করুন।</li>
                    <li>Message বা phone call-এ password দেবেন না।</li>
                    <li>2FA চালু করুন।</li>
                </ol>
            `

        }

    },

    "2fa": {

        title: {
            en: "🔑 Two-Factor Authentication",
            bn: "🔑 Two-Factor Authentication"
        },

        html: {

            en: `
                <p>
                    2FA adds another verification step after your password.
                </p>

                <ul>
                    <li>Use an authenticator app or security key where appropriate.</li>
                    <li>Keep recovery codes safe.</li>
                    <li>Never share verification codes.</li>
                </ul>
            `,

            bn: `
                <p>
                    Password-এর পরে আরও একটি verification step যোগ করে 2FA।
                </p>

                <ul>
                    <li>প্রয়োজনে authenticator app বা security key ব্যবহার করুন।</li>
                    <li>Recovery codes নিরাপদে রাখুন।</li>
                    <li>Verification code কাউকে দেবেন না।</li>
                </ul>
            `

        }

    },

    phishing: {

        title: {
            en: "🎣 Phishing",
            bn: "🎣 Phishing"
        },

        html: {

            en: `
                <ul>
                    <li>Check the sender carefully.</li>
                    <li>Do not trust urgent threats automatically.</li>
                    <li>Inspect links before opening them.</li>
                    <li>Verify requests independently.</li>
                    <li>Never share OTPs or passwords.</li>
                </ul>
            `,

            bn: `
                <ul>
                    <li>Sender carefully পরীক্ষা করুন।</li>
                    <li>Urgent threat দেখলেই বিশ্বাস করবেন না।</li>
                    <li>Link খোলার আগে যাচাই করুন।</li>
                    <li>Request আলাদাভাবে verify করুন।</li>
                    <li>OTP বা password কখনো দেবেন না।</li>
                </ul>
            `

        }

    },

    privacy: {

        title: {
            en: "🔒 Privacy Protection",
            bn: "🔒 Privacy সুরক্ষা"
        },

        html: {

            en: `
                <ul>
                    <li>Review profile visibility.</li>
                    <li>Limit location sharing.</li>
                    <li>Review app permissions.</li>
                    <li>Remove unused third-party connections.</li>
                    <li>Use screen locks.</li>
                </ul>
            `,

            bn: `
                <ul>
                    <li>Profile visibility পরীক্ষা করুন।</li>
                    <li>Location sharing সীমিত করুন।</li>
                    <li>App permissions পরীক্ষা করুন।</li>
                    <li>Unused third-party connections সরান।</li>
                    <li>Screen lock ব্যবহার করুন।</li>
                </ul>
            `

        }

    },

    phone: {

        title: {
            en: "📱 Phone Security",
            bn: "📱 ফোন নিরাপত্তা"
        },

        html: {

            en: `
                <ul>
                    <li>Keep the operating system updated.</li>
                    <li>Install apps from trusted sources.</li>
                    <li>Review permissions regularly.</li>
                    <li>Use a secure screen lock.</li>
                    <li>Protect important accounts with 2FA.</li>
                </ul>
            `,

            bn: `
                <ul>
                    <li>Operating system updated রাখুন।</li>
                    <li>Trusted source থেকে app install করুন।</li>
                    <li>Permissions নিয়মিত পরীক্ষা করুন।</li>
                    <li>Secure screen lock ব্যবহার করুন।</li>
                    <li>গুরুত্বপূর্ণ account-এ 2FA চালু রাখুন।</li>
                </ul>
            `

        }

    },

    financial: {

        title: {
            en: "💳 Financial Safety",
            bn: "💳 আর্থিক নিরাপত্তা"
        },

        html: {

            en: `
                <ul>
                    <li>Never share UPI PINs.</li>
                    <li>Never share banking OTPs.</li>
                    <li>Verify payment requests carefully.</li>
                    <li>Receiving money does not require entering your UPI PIN.</li>
                    <li>Report unauthorized transactions immediately.</li>
                </ul>
            `,

            bn: `
                <ul>
                    <li>UPI PIN কখনো দেবেন না।</li>
                    <li>Banking OTP কখনো দেবেন না।</li>
                    <li>Payment request ভালোভাবে যাচাই করুন।</li>
                    <li>টাকা receive করার জন্য UPI PIN দিতে হয় না।</li>
                    <li>Unauthorized transaction সঙ্গে সঙ্গে report করুন।</li>
                </ul>
            `

        }

    }

};

document.addEventListener(
    "click",
    (event) => {

        const card =
            event.target.closest(
                ".learn-card"
            );

        if (!card) return;

        const type =
            card.dataset.learn;

        const guide =
            learningGuides[type];

        if (!guide) return;

        showGuide(
            guide.title[currentLanguage] ||
            guide.title.en,
            guide.html[currentLanguage] ||
            guide.html.en
        );

    }
);

/* ============================================================
   TOOL MODAL
============================================================ */

function openToolModal(
    title,
    content
) {
    showGuide(
        title,
        content
    );
}

/* ============================================================
   SCAM SCANNER
============================================================ */

function runScamScanner() {

    const title =
        currentLanguage === "bn"
            ? "🎣 Scam Message Scanner"
            : "🎣 Scam Message Scanner";

    const content =
        currentLanguage === "bn"

            ? `
                <p>
                    সন্দেহজনক message এখানে paste করুন।
                    এই scanner browser-এর ভিতরেই সাধারণ warning signs পরীক্ষা করবে।
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
                    placeholder="সন্দেহজনক message এখানে paste করুন..."
                ></textarea>

                <button
                    id="runScamCheck"
                    class="guide-ok"
                    style="margin-top:12px;"
                    type="button"
                >
                    🔎 Message Scan করুন
                </button>

                <div
                    id="scamResult"
                    style="margin-top:15px;"
                ></div>
            `

            : `
                <p>
                    Paste the suspicious message below.
                    This scanner checks common warning signs locally in your browser.
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
                    type="button"
                >
                    🔎 Scan Message
                </button>

                <div
                    id="scamResult"
                    style="margin-top:15px;"
                ></div>
            `;

    openToolModal(
        title,
        content
    );

    $("#runScamCheck")?.addEventListener(
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
        normalizeText(
            input.value
        );

    if (!text) {

        result.innerHTML = `
            <div class="important-note">
                ${
                    currentLanguage === "bn"
                        ? "আগে একটি message paste করুন।"
                        : "Please paste a message first."
                }
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
            en:
                "Requests for OTP or verification codes are a major warning sign.",
            bn:
                "OTP বা verification code চাওয়া একটি বড় warning sign।"
        },

        {
            words: [
                "upi pin",
                "bank pin",
                "banking pin",
                "ইউপিআই পিন"
            ],
            en:
                "Requests for a UPI or banking PIN are dangerous.",
            bn:
                "UPI বা banking PIN চাওয়া বিপজ্জনক।"
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
            en:
                "Urgency or threats are commonly used in scams.",
            bn:
                "অতিরিক্ত urgency বা হুমকি scam-এ সাধারণত ব্যবহার করা হয়।"
        },

        {
            words: [
                "click this link",
                "click here",
                "verify now",
                "login now",
                "লিংকে ক্লিক",
                "এখনই ভেরিফাই"
            ],
            en:
                "Unexpected links or login requests can indicate phishing.",
            bn:
                "অপ্রত্যাশিত link বা login request phishing-এর লক্ষণ হতে পারে।"
        },

        {
            words: [
                "prize",
                "lottery",
                "winner",
                "reward",
                "পুরস্কার",
                "লটারি"
            ],
            en:
                "Unexpected prizes or rewards can be scam indicators.",
            bn:
                "অপ্রত্যাশিত prize বা reward scam-এর লক্ষণ হতে পারে।"
        },

        {
            words: [
                "refund",
                "cashback",
                "রিফান্ড",
                "ক্যাশব্যাক"
            ],
            en:
                "Fake refund or cashback messages are common fraud techniques.",
            bn:
                "Fake refund বা cashback message সাধারণ fraud technique।"
        },

        {
            words: [
                "screen share",
                "anydesk",
                "teamviewer",
                "remote access",
                "স্ক্রিন শেয়ার"
            ],
            en:
                "Remote-control requests can allow criminals to access your device.",
            bn:
                "Remote-control request অপরাধীকে আপনার device access দিতে পারে।"
        }

    ];

    const warnings = [];

    rules.forEach((rule) => {

        const found =
            rule.words.some(
                word =>
                    text.includes(
                        normalizeText(word)
                    )
            );

        if (found) {

            warnings.push(
                currentLanguage === "bn"
                    ? rule.bn
                    : rule.en
            );

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

                <strong>
                    🟢 ${
                        currentLanguage === "bn"
                            ? "স্পষ্ট warning pattern পাওয়া যায়নি।"
                            : "No obvious warning pattern detected."
                    }
                </strong>

                <p style="margin-top:7px;">
                    ${
                        currentLanguage === "bn"
                            ? "এতে message নিরাপদ প্রমাণ হয় না। Sender আলাদাভাবে verify করুন।"
                            : "This does NOT prove the message is safe. Verify the sender independently."
                    }
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

            <strong>
                🔴 ${
                    currentLanguage === "bn"
                        ? "Warning signs পাওয়া গেছে"
                        : "Warning signs detected"
                }
            </strong>

            <ul
                style="
                    padding-left:20px;
                    margin-top:10px;
                "
            >
                ${warnings.map(
                    warning =>
                        `<li>${safeText(warning)}</li>`
                ).join("")}
            </ul>

            <p style="margin-top:10px;">
                ${
                    currentLanguage === "bn"
                        ? "OTP, password, PIN বা payment information দেবেন না।"
                        : "Do not share OTPs, passwords, PINs or payment information."
                }
            </p>

        </div>

    `;

}

/* ============================================================
   PASSWORD CHECKER
============================================================ */

function runPasswordChecker() {

    openToolModal(

        currentLanguage === "bn"
            ? "🔐 Password Strength Checker"
            : "🔐 Password Strength Checker",

        currentLanguage === "bn"

            ? `
                <p>
                    এই checker browser-এর ভিতরেই কাজ করে।
                    CyberCare আপনার password কোথাও পাঠায় না।
                </p>

                <input
                    id="passwordInput"
                    type="password"
                    autocomplete="off"
                    placeholder="Password লিখুন"
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
                    type="button"
                >
                    Strength Check করুন
                </button>

                <div
                    id="passwordResult"
                    style="margin-top:15px;"
                ></div>
            `

            : `
                <p>
                    This checker works locally.
                    Your password is not sent anywhere by CyberCare.
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
                    type="button"
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
            <div class="important-note">
                ${
                    currentLanguage === "bn"
                        ? "একটি password লিখুন।"
                        : "Enter a password to check."
                }
            </div>
        `;

        return;
    }

    let score = 0;

    if (password.length >= 8)
        score++;

    if (password.length >= 12)
        score++;

    if (password.length >= 16)
        score++;

    if (/[a-z]/.test(password))
        score++;

    if (/[A-Z]/.test(password))
        score++;

    if (/[0-9]/.test(password))
        score++;

    if (/[^A-Za-z0-9]/.test(password))
        score++;

    let level;
    let advice;

    if (score >= 6) {

        level =
            currentLanguage === "bn"
                ? "Strong"
                : "Strong";

        advice =
            currentLanguage === "bn"
                ? "ভালো। Password unique রাখুন এবং 2FA চালু করুন।"
                : "Good. Keep it unique and enable 2FA.";

    }

    else if (score >= 4) {

        level =
            currentLanguage === "bn"
                ? "Moderate"
                : "Moderate";

        advice =
            currentLanguage === "bn"
                ? "আরও দীর্ঘ ও unique password ব্যবহার করুন।"
                : "Make it longer and more unique.";

    }

    else {

        level =
            currentLanguage === "bn"
                ? "Weak"
                : "Weak";

        advice =
            currentLanguage === "bn"
                ? "একটি দীর্ঘ, unique passphrase ব্যবহার করুন।"
                : "Use a longer, unique passphrase.";

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

            <strong>
                ${
                    currentLanguage === "bn"
                        ? "Strength"
                        : "Strength"
                }:
                ${safeText(level)}
            </strong>

            <p style="margin-top:7px;">
                ${safeText(advice)}
            </p>

            <small>
                ${
                    currentLanguage === "bn"
                        ? "CyberCare এই password সংরক্ষণ করে না।"
                        : "CyberCare does not store this password."
                }
            </small>

        </div>
    `;

}

/* ============================================================
   URL CHECKER
============================================================ */

function runURLChecker() {

    openToolModal(

        currentLanguage === "bn"
            ? "🔗 URL Safety Checker"
            : "🔗 URL Safety Checker",

        currentLanguage === "bn"

            ? `
                <p>
                    এটি একটি basic local warning-sign checker।
                    এটি website safe বলে guarantee করতে পারে না।
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
                    type="button"
                >
                    URL Check করুন
                </button>

                <div
                    id="urlResult"
                    style="margin-top:15px;"
                ></div>
            `

            : `
                <p>
                    This is a basic local warning-sign checker.
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
                    class="guide-ok"
                    style="margin-top:12px;"
                    type="button"
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

    if (!input || !result)
        return;

    const value =
        input.value.trim();

    if (!value) {

        result.innerHTML = `
            <div class="important-note">
                ${
                    currentLanguage === "bn"
                        ? "আগে একটি URL দিন।"
                        : "Enter a URL first."
                }
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
                ❌ ${
                    currentLanguage === "bn"
                        ? "এটি valid URL মনে হচ্ছে না।"
                        : "This does not appear to be a valid URL."
                }
            </div>
        `;

        return;

    }

    const warnings = [];

    if (
        url.protocol !== "https:"
    ) {
        warnings.push(
            currentLanguage === "bn"
                ? "URL-টি HTTPS ব্যবহার করছে না।"
                : "The URL does not use HTTPS."
        );
    }

    if (
        url.hostname.includes("@")
    ) {
        warnings.push(
            currentLanguage === "bn"
                ? "Domain-এ অস্বাভাবিক @ character আছে।"
                : "The URL contains an unusual @ character."
        );
    }

    if (
        url.hostname
            .split(".")
            .length > 4
    ) {
        warnings.push(
            currentLanguage === "bn"
                ? "Domain-এ অস্বাভাবিকভাবে অনেক subdomain আছে।"
                : "The domain has an unusually deep subdomain structure."
        );
    }

    if (
        url.hostname.includes("-")
    ) {
        warnings.push(
            currentLanguage === "bn"
                ? "Domain-এ hyphen আছে। আসল domain carefully verify করুন।"
                : "The domain contains hyphens. Verify the exact domain carefully."
        );
    }

    if (
        url.hostname.length > 50
    ) {
        warnings.push(
            currentLanguage === "bn"
                ? "Domain name অস্বাভাবিকভাবে দীর্ঘ।"
                : "The domain name is unusually long."
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

                <strong>
                    ⚠️ ${
                        currentLanguage === "bn"
                            ? "সাবধানে যাচাই করুন"
                            : "Review carefully"
                    }
                </strong>

                <ul
                    style="
                        padding-left:20px;
                        margin-top:8px;
                    "
                >
                    ${warnings.map(
                        warning =>
                            `<li>${safeText(warning)}</li>`
                    ).join("")}
                </ul>

                <p style="margin-top:10px;">
                    ${
                        currentLanguage === "bn"
                            ? "শুধু domain-এর appearance দেখে website malicious কি না নিশ্চিত করা যায় না।"
                            : "Domain appearance alone cannot prove whether a site is malicious."
                    }
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

                🟢 ${
                    currentLanguage === "bn"
                        ? "Basic warning pattern পাওয়া যায়নি।"
                        : "No basic warning pattern detected."
                }

                <p style="margin-top:7px;">
                    ${
                        currentLanguage === "bn"
                            ? "এটি website safe বলে guarantee করে না।"
                            : "This does not guarantee that the website is safe."
                    }
                </p>

            </div>

        `;

    }

}

/* ============================================================
   PRIVACY CHECKLIST
============================================================ */

function openPrivacyChecklist() {

    const items = currentLanguage === "bn"

        ? [
            ["🔐 Password", "গুরুত্বপূর্ণ account-এ unique password ব্যবহার করুন।"],
            ["🔑 2FA", "গুরুত্বপূর্ণ account-এ two-factor authentication চালু করুন।"],
            ["📍 Location", "Location-sharing permissions পরীক্ষা করুন।"],
            ["📱 Apps", "অপ্রয়োজনীয় app সরিয়ে দিন।"],
            ["🎥 Camera / Mic", "কোন app camera ও microphone ব্যবহার করতে পারে পরীক্ষা করুন।"],
            ["👥 Social Media", "Follower, tag ও profile visibility পরীক্ষা করুন।"],
            ["💻 Sessions", "অচেনা logged-in device সরিয়ে দিন।"],
            ["☁️ Connected Apps", "Third-party connected applications পরীক্ষা করুন।"]
        ]

        : [
            ["🔐 Passwords", "Use unique passwords for important accounts."],
            ["🔑 2FA", "Enable two-factor authentication."],
            ["📍 Location", "Review location-sharing permissions."],
            ["📱 Apps", "Remove apps you no longer need."],
            ["🎥 Camera / Mic", "Review which apps can access them."],
            ["👥 Social Media", "Review followers, tags and profile visibility."],
            ["💻 Sessions", "Remove unknown logged-in devices."],
            ["☁️ Connected Apps", "Review third-party connected applications."]
        ];

    openToolModal(

        currentLanguage === "bn"
            ? "🔒 Privacy Checklist"
            : "🔒 Privacy Checklist",

        `
            <div class="scan-check-list">

                ${items.map(item => `

                    <div class="scan-check-item">

                        <strong>
                            ${safeText(item[0])}
                        </strong>

                        <br>

                        ${safeText(item[1])}

                    </div>

                `).join("")}

            </div>
        `

    );

}

/* ============================================================
   EVIDENCE CHECKLIST
============================================================ */

function openEvidenceChecklist() {

    const content =
        currentLanguage === "bn"

            ? `
                <p>
                    সম্ভব হলে block বা delete করার আগে evidence সংরক্ষণ করুন।
                </p>

                <ul>
                    <li>📸 Message screenshot</li>
                    <li>👤 Username / profile name</li>
                    <li>🔗 Profile/content URL</li>
                    <li>📅 Date and time</li>
                    <li>📞 Phone number</li>
                    <li>💳 Transaction ID</li>
                    <li>📧 Relevant emails</li>
                    <li>📝 ঘটনাগুলোর ছোট timeline</li>
                </ul>

                <div class="important-note">
                    Original evidence সম্ভব হলে edit করবেন না।
                </div>
            `

            : `
                <p>
                    Preserve evidence before blocking or deleting when possible.
                </p>

                <ul>
                    <li>📸 Message screenshots</li>
                    <li>👤 Username / profile name</li>
                    <li>🔗 Profile/content URL</li>
                    <li>📅 Date and time</li>
                    <li>📞 Phone number</li>
                    <li>💳 Transaction ID</li>
                    <li>📧 Relevant emails</li>
                    <li>📝 Short timeline of incidents</li>
                </ul>

                <div class="important-note">
                    Avoid editing original evidence where possible.
                </div>
            `;

    openToolModal(
        currentLanguage === "bn"
            ? "🧾 Evidence Preservation Checklist"
            : "🧾 Evidence Preservation Checklist",
        content
    );

}

/* ============================================================
   CYBER SAFETY SCORE
============================================================ */

function runSafetyScore() {

    const questions =
        currentLanguage === "bn"

            ? [
                "গুরুত্বপূর্ণ account-এ unique password ব্যবহার করেন?",
                "গুরুত্বপূর্ণ account-এ 2FA চালু আছে?",
                "OTP ও PIN কাউকে দেন না?",
                "Phone ও apps updated রাখেন?",
                "App permissions পরীক্ষা করেন?",
                "Suspicious link এড়িয়ে চলেন?",
                "Active account sessions পরীক্ষা করেন?",
                "Important data-এর backup রাখেন?"
            ]

            : [
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

        currentLanguage === "bn"
            ? "🛡️ Cyber Safety Score"
            : "🛡️ Cyber Safety Score",

        `

            <p>
                ${
                    currentLanguage === "bn"
                        ? "আপনি যেসব security habit অনুসরণ করেন সেগুলো select করুন।"
                        : "Select the security habits you already follow."
                }
            </p>

            <div
                style="margin-top:15px;"
            >

                ${questions.map(
                    (question, index) => `

                        <label
                            style="
                                display:block;
                                padding:12px;
                                margin-bottom:8px;
                                border:1px solid #e2e8f0;
                                border-radius:10px;
                                cursor:pointer;
                            "
                        >

                            <input
                                type="checkbox"
                                class="score-question"
                                value="1"
                            >

                            ${safeText(question)}

                        </label>

                    `
                ).join("")}

            </div>

            <button
                id="calculateScore"
                class="guide-ok"
                style="margin-top:10px;"
                type="button"
            >
                ${
                    currentLanguage === "bn"
                        ? "Score Calculate করুন"
                        : "Calculate Score"
                }
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

    const checked =
        $$(".score-question:checked")
            .length;

    const total =
        $$(".score-question")
            .length;

    if (!total) return;

    const percentage =
        Math.round(
            (checked / total) * 100
        );

    let message;

    if (
        percentage >= 80
    ) {

        message =
            currentLanguage === "bn"
                ? "চমৎকার! আপনার basic security habits ভালো।"
                : "Excellent! Your basic security habits are strong.";

    }

    else if (
        percentage >= 50
    ) {

        message =
            currentLanguage === "bn"
                ? "ভালো শুরু। যেগুলো miss করেছেন সেগুলো শক্তিশালী করুন।"
                : "Good start. Strengthen the habits you missed.";

    }

    else {

        message =
            currentLanguage === "bn"
                ? "Security আরও উন্নত করা দরকার। Password, 2FA এবং phishing awareness দিয়ে শুরু করুন।"
                : "Your security can be improved. Start with passwords, 2FA and phishing awareness.";

    }

    const result =
        $("#scoreResult");

    if (!result) return;

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
                ${
                    currentLanguage === "bn"
                        ? "আপনার Cyber Safety Score"
                        : "Your Cyber Safety Score"
                }:
                ${percentage}%
            </strong>

            <p style="margin-top:7px;">
                ${safeText(message)}
            </p>

        </div>

    `;

}

/* ============================================================
   TOOL BUTTON ROUTER
============================================================ */

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                ".tool-btn"
            );

        if (!button) return;

        const tool =
            normalizeText(
                button.dataset.tool
            );

        switch (tool) {

            case "scam":
            case "scam scanner":
                runScamScanner();
                break;

            case "password":
            case "password checker":
                runPasswordChecker();
                break;

            case "url":
            case "url checker":
                runURLChecker();
                break;

            case "privacy":
            case "privacy checklist":
                openPrivacyChecklist();
                break;

            case "evidence":
            case "evidence checklist":
                openEvidenceChecklist();
                break;

            case "score":
            case "safety score":
                runSafetyScore();
                break;

            default:

                showGuide(
                    currentLanguage === "bn"
                        ? "🛡️ CyberCare Tool"
                        : "🛡️ CyberCare Tool",

                    currentLanguage === "bn"
                        ? `
                            <p>
                                এই tool-এর বিস্তারিত information শীঘ্রই যুক্ত হবে।
                            </p>
                        `
                        : `
                            <p>
                                Detailed information for this tool is being prepared.
                            </p>
                        `
                );

        }

    }
);

/* ============================================================
   3-DOT / MORE MENU — DYNAMIC SUPPORT
   ------------------------------------------------------------
   Supports:
      .more-btn
      .three-dot-btn
      .more-menu-btn
      [data-more-menu]
============================================================ */

function closeAllMoreMenus(except = null) {

    $$(".cyber-more-menu").forEach(
        menu => {

            if (menu === except)
                return;

            menu.classList.remove(
                "active"
            );

            menu.hidden = true;

        }
    );

}

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                ".more-btn,.three-dot-btn,.more-menu-btn,[data-more-menu]"
            );

        if (!button) return;

        event.stopPropagation();

        let menu = null;

        const targetId =
            button.dataset.moreMenu ||
            button.getAttribute(
                "aria-controls"
            );

        if (targetId) {

            menu =
                document.getElementById(
                    targetId
                );

        }

        if (!menu) {

            menu =
                button.parentElement
                    ?.querySelector(
                        ".cyber-more-menu"
                    );

        }

        if (!menu) return;

        const open =
            menu.classList.contains(
                "active"
            );

        closeAllMoreMenus(
            open ? null : menu
        );

        if (!open) {

            menu.hidden = false;

            menu.classList.add(
                "active"
            );

        } else {

            menu.hidden = true;

            menu.classList.remove(
                "active"
            );

        }

    }
);

document.addEventListener(
    "click",
    () => {
        closeAllMoreMenus();
    }
);

/* ============================================================
   MORE MENU ACTIONS
============================================================ */

document.addEventListener(
    "click",
    (event) => {

        const action =
            event.target.closest(
                "[data-guide]"
            );

        if (!action) return;

        const guideType =
            action.dataset.guide;

        if (!guideType) return;

        openGuide(
            guideType
        );

        closeAllMoreMenus();

    }
);

/* ============================================================
   KEYBOARD SUPPORT
============================================================ */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeSideMenu();
            closeGuide();
            closeAllMoreMenus();

            closeKeyboard();

        }

    }
);

/* ============================================================
   OUTSIDE CLICK SAFETY
============================================================ */

document.addEventListener(
    "click",
    (event) => {

        const target =
            event.target;

        if (
            sideMenu &&
            sideMenu.classList.contains(
                "active"
            ) &&
            !sideMenu.contains(
                target
            ) &&
            target !== menuBtn
        ) {

            closeSideMenu();

        }

    }
);

/* ============================================================
   AUTO-ENHANCE MORE BUTTONS
   ------------------------------------------------------------
   If HTML has:
       <button class="more-toggle" data-more="xyz">...</button>
   the hidden section automatically gets the clean behavior.
============================================================ */

function initializeMoreSections() {

    $$(".more-toggle").forEach(
        (button) => {

            const targetId =
                button.dataset.more ||
                button.getAttribute(
                    "aria-controls"
                );

            if (!targetId)
                return;

            const target =
                document.getElementById(
                    targetId
                );

            if (!target)
                return;

            if (
                !target.classList.contains(
                    "more-open"
                )
            ) {

                target.hidden = true;

            }

            button.setAttribute(
                "aria-expanded",
                target.classList.contains(
                    "more-open"
                )
                    ? "true"
                    : "false"
            );

            button.textContent =
                target.classList.contains(
                    "more-open"
                )
                    ? t("less")
                    : t("more");

        }
    );

}

/* ============================================================
   SERVICE CARD CLEANUP
   ------------------------------------------------------------
   Main card stays short.
   Existing descriptions can be moved into:
      .service-details
      .card-details
      .more-details
   and revealed through a More button.
============================================================ */

function initializeCleanDetails() {

    const detailSelectors = [
        ".service-details",
        ".card-details",
        ".more-details",
        ".extra-details"
    ];

    detailSelectors.forEach(
        selector => {

            $$(selector).forEach(
                detail => {

                    if (
                        !detail.classList.contains(
                            "more-open"
                        )
                    ) {
                        detail.hidden = true;
                    }

                }
            );

        }
    );

}

/* ============================================================
   SEARCH ENTER KEY
============================================================ */

problemSearch?.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key !== "Enter"
        ) {
            return;
        }

        event.preventDefault();

        const results =
            findProblems(
                problemSearch.value
            );

        if (
            results.length
        ) {

            openGuide(
                results[0].type
            );

        }

    }
);

/* ============================================================
   SEARCH FOCUS
============================================================ */

document.addEventListener(
    "click",
    (event) => {

        const button =
            event.target.closest(
                "[data-search-focus]"
            );

        if (!button) return;

        event.preventDefault();

        scrollToSection(
            "services"
        );

        setTimeout(
            () => {
                $("#problemSearch")
                    ?.focus();
            },
            400
        );

    }
);

/* ============================================================
   BASIC ACCESSIBILITY
============================================================ */

function improveAccessibility() {

    if (menuBtn) {

        menuBtn.setAttribute(
            "aria-label",
            "Open menu"
        );

    }

    if (themeBtn) {

        themeBtn.setAttribute(
            "aria-label",
            "Toggle dark mode"
        );

    }

    if (languageBtn) {

        languageBtn.setAttribute(
            "aria-label",
            "Change language"
        );

    }

    $$(".guide-close").forEach(
        button => {

            button.setAttribute(
                "aria-label",
                t("close")
            );

        }
    );

}

/* ============================================================
   INITIALIZATION
============================================================ */

function initializeCyberCare() {

    loadTheme();

    applyLanguage();

    initializeMoreSections();

    initializeCleanDetails();

    improveAccessibility();

    console.log(
        "🛡️ CyberCare initialized successfully."
    );

}

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeCyberCare
    );

} else {

    initializeCyberCare();

}

/* ============================================================
   FINAL SAFETY
============================================================ */

window.CyberCare = {

    openGuide,
    closeGuide,
    openEmergencyGuide,
    runScamScanner,
    runPasswordChecker,
    runURLChecker,
    openPrivacyChecklist,
    openEvidenceChecklist,
    runSafetyScore,
    findProblems,
    scrollToSection

};

/* ============================================================
   END OF CYBERCARE SCRIPT.JS
============================================================ */
