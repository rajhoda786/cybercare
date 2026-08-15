// ============================================================
// CYBERCARE — FULLY LOADED ADVANCED SCRIPT.JS
// ============================================================
// Search + A-Z Cyber Help
// Advanced Security Scan
// Phone Security Audit
// Social Media Help Desk
// Facebook + Instagram + WhatsApp + Telegram + YouTube
// Google + Snapchat + TikTok + X + LinkedIn
// Account Recovery
// Blackmail + Sextortion + Harassment + Stalking
// Scam + Phishing + Financial Fraud + UPI
// Privacy + Evidence + Password Safety
// Cyber Safety Score
// Emergency Response
// India Cyber Help
// Feedback / Suggestion Dropbox
// Bengali / English
// Dark Mode
// Mobile UX
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    // =========================================================
    // HELPERS
    // =========================================================

    const $ = (selector, parent = document) =>
        parent.querySelector(selector);

    const $$ = (selector, parent = document) =>
        [...parent.querySelectorAll(selector)];

    const safeText = value =>
        String(value ?? "").trim();

    const normalize = value =>
        safeText(value).toLowerCase();

    function scrollToSection(id) {

        const section = document.getElementById(id);

        if (section) {

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }

    function escapeHTML(value) {

        return safeText(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }

    // =========================================================
    // ELEMENTS
    // =========================================================

    const menuBtn = $("#menuBtn");
    const closeMenu = $("#closeMenu");
    const sideMenu = $("#sideMenu");
    const menuOverlay = $("#menuOverlay");

    const emergencyBtn = $("#emergencyBtn");
    const quickHelpBtn = $("#quickHelpBtn");

    const themeBtn = $("#themeBtn");
    const languageBtn = $("#languageBtn");
    const languageText = $("#languageText");

    const problemSearch = $("#problemSearch");
    const searchResults = $("#searchResults");

    // =========================================================
    // SIDE MENU
    // =========================================================

    function openMenu() {

        sideMenu?.classList.add("active");
        menuOverlay?.classList.add("active");
        document.body.classList.add("menu-open");

    }

    function closeSideMenu() {

        sideMenu?.classList.remove("active");
        menuOverlay?.classList.remove("active");
        document.body.classList.remove("menu-open");

    }

    menuBtn?.addEventListener("click", openMenu);
    closeMenu?.addEventListener("click", closeSideMenu);
    menuOverlay?.addEventListener("click", closeSideMenu);

    // =========================================================
    // MENU NAVIGATION
    // =========================================================

    $$(".menu-item").forEach(item => {

        item.addEventListener("click", () => {

            const target = item.dataset.menu;

            closeSideMenu();

            const map = {

                services: "services",
                women: "women",
                tools: "tools",
                learn: "learn",
                india: "india",
                social: "social",
                scan: "scan",
                feedback: "feedback",
                about: "about"

            };

            if (map[target]) {

                scrollToSection(map[target]);

            }

            if (target === "emergency") {

                document
                    .querySelector(".emergency-section")
                    ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

            }

        });

    });

    // =========================================================
    // HERO BUTTONS
    // =========================================================

    emergencyBtn?.addEventListener("click", () => {

        document
            .querySelector(".emergency-section")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    });

    quickHelpBtn?.addEventListener("click", () => {

        document
            .querySelector(".search-section")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        setTimeout(() => {

            problemSearch?.focus();

        }, 500);

    });

    // =========================================================
    // DARK MODE
    // =========================================================

    let darkMode =
        localStorage.getItem("cybercare-theme") === "dark";

    function applyTheme() {

        document.body.classList.toggle(
            "dark-mode",
            darkMode
        );

        if (themeBtn) {

            themeBtn.textContent =
                darkMode ? "☀️" : "🌙";

            themeBtn.setAttribute(
                "aria-label",
                darkMode
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

        }

    }

    applyTheme();

    themeBtn?.addEventListener("click", () => {

        darkMode = !darkMode;

        localStorage.setItem(
            "cybercare-theme",
            darkMode ? "dark" : "light"
        );

        applyTheme();

    });

    // =========================================================
    // LANGUAGE SYSTEM
    // =========================================================

    let bengali =
        localStorage.getItem("cybercare-language") === "bn";

    const translations = {

        "Protecting People. Securing Digital Lives.":
            "মানুষকে সুরক্ষিত রাখা। ডিজিটাল জীবনকে নিরাপদ রাখা।",

        "Simple, practical and step-by-step guidance for hacking, scams, harassment, blackmail, privacy, financial fraud and digital threats.":
            "হ্যাকিং, স্ক্যাম, হয়রানি, ব্ল্যাকমেইল, প্রাইভেসি, আর্থিক প্রতারণা ও ডিজিটাল হুমকির জন্য সহজ ও ধাপে ধাপে নিরাপত্তা নির্দেশিকা।",

        "What happened?":
            "কী ঘটেছে?",

        "How Can We Help You?":
            "আমরা কীভাবে সাহায্য করতে পারি?",

        "Women's Digital Safety":
            "নারীদের ডিজিটাল নিরাপত্তা",

        "CyberCare Tools":
            "CyberCare টুলস",

        "Learn Cybersecurity":
            "সাইবার নিরাপত্তা শিখুন",

        "Emergency Help":
            "জরুরি সহায়তা",

        "India Cyber Help":
            "ভারতে সাইবার সহায়তা",

        "About CyberCare":
            "CyberCare সম্পর্কে",

        "Social Media Help Desk":
            "সোশ্যাল মিডিয়া হেল্প ডেস্ক",

        "Phone Security":
            "ফোন নিরাপত্তা",

        "Advanced Security Scan":
            "অ্যাডভান্সড সিকিউরিটি স্ক্যান",

        "Account Recovery":
            "অ্যাকাউন্ট রিকভারি",

        "Blackmail":
            "ব্ল্যাকমেইল",

        "Harassment":
            "হয়রানি",

        "Photo Misuse":
            "ছবির অপব্যবহার",

        "Fake Profile":
            "ভুয়া প্রোফাইল",

        "Online Stalking":
            "অনলাইন স্টকিং",

        "Scam & Phishing":
            "স্ক্যাম ও ফিশিং",

        "Financial Fraud":
            "আর্থিক প্রতারণা",

        "Privacy Checklist":
            "প্রাইভেসি চেকলিস্ট",

        "Evidence Checklist":
            "প্রমাণ সংরক্ষণের তালিকা",

        "Cyber Safety Score":
            "সাইবার নিরাপত্তা স্কোর",

        "I Need Help Now":
            "আমার এখনই সাহায্য দরকার",

        "Find My Problem":
            "আমার সমস্যাটি খুঁজুন",

        "Get Help →":
            "সাহায্য নিন →",

        "Open Tool":
            "টুল খুলুন",

        "Start Test":
            "পরীক্ষা শুরু করুন",

        "Send Feedback":
            "মতামত পাঠান"

    };

    function translatePage() {

        $$(
            "h1,h2,h3,h4,p,button,strong,small,label"
        ).forEach(element => {

            if (!element.dataset.originalText) {

                element.dataset.originalText =
                    element.textContent.trim();

            }

            const original =
                element.dataset.originalText;

            if (
                bengali &&
                translations[original]
            ) {

                element.textContent =
                    translations[original];

            } else if (!bengali) {

                element.textContent =
                    original;

            }

        });

        if (languageText) {

            languageText.textContent =
                bengali ? "বাংলা" : "EN";

        }

        localStorage.setItem(
            "cybercare-language",
            bengali ? "bn" : "en"
        );

    }

    languageBtn?.addEventListener("click", () => {

        bengali = !bengali;

        translatePage();

    });

    translatePage();

    // =========================================================
    // COMPLETE CYBER HELP DATABASE
    // =========================================================

    const problems = [

        {
            keywords: [
                "facebook",
                "instagram",
                "whatsapp",
                "telegram",
                "youtube",
                "google",
                "snapchat",
                "tiktok",
                "twitter",
                "x account",
                "linkedin",
                "social media"
            ],

            title: "📱 Social Media Help Desk",

            text: `
                <h3>Social Media সমস্যার জন্য</h3>

                <ul>
                    <li>Account hacked</li>
                    <li>Password forgotten</li>
                    <li>Fake profile</li>
                    <li>Impersonation</li>
                    <li>Harassment</li>
                    <li>Blackmail</li>
                    <li>Private photo/video threat</li>
                    <li>Account recovery</li>
                    <li>Suspicious login</li>
                    <li>Privacy problem</li>
                </ul>

                <button
                    class="internal-guide-action"
                    data-guide-action="social"
                >
                    Open Social Media Help Desk
                </button>
            `
        },

        {
            keywords: [
                "facebook",
                "facebook hacked",
                "facebook account",
                "ফেসবুক",
                "ফেসবুক হ্যাক"
            ],

            title: "🔵 Facebook Help",

            text: `
                <h3>Facebook Account সমস্যায়</h3>

                <ol>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>Where you're logged in পরীক্ষা করুন।</li>
                    <li>Unknown devices logout করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Recovery email/phone পরীক্ষা করুন।</li>
                    <li>অপরিচিত post/message থাকলে account secure করুন।</li>
                    <li>Fake profile হলে impersonation report করুন।</li>
                    <li>শুধু official Facebook recovery ব্যবহার করুন।</li>
                </ol>

                <p>
                    OTP, password বা recovery code কাউকে দেবেন না।
                </p>
            `
        },

        {
            keywords: [
                "instagram",
                "instagram hacked",
                "instagram account",
                "ইনস্টাগ্রাম"
            ],

            title: "📸 Instagram Help",

            text: `
                <h3>Instagram সমস্যার সমাধান</h3>

                <ol>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>Login activity পরীক্ষা করুন।</li>
                    <li>Unknown device logout করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Email/phone recovery তথ্য পরীক্ষা করুন।</li>
                    <li>Fake profile report করুন।</li>
                    <li>Harassment বা threat-এর screenshot রাখুন।</li>
                    <li>Private content threat হলে আর content পাঠাবেন না।</li>
                </ol>
            `
        },

        {
            keywords: [
                "whatsapp",
                "whatsapp hacked",
                "whatsapp account",
                "হোয়াটসঅ্যাপ"
            ],

            title: "🟢 WhatsApp Help",

            text: `
                <h3>WhatsApp Account Security</h3>

                <ol>
                    <li>Linked Devices পরীক্ষা করুন।</li>
                    <li>অপরিচিত device logout করুন।</li>
                    <li>Two-step verification চালু করুন।</li>
                    <li>Registration code কাউকে দেবেন না।</li>
                    <li>Privacy settings review করুন।</li>
                    <li>অপরিচিত ব্যক্তি block/report করুন।</li>
                    <li>Threat থাকলে screenshot সংরক্ষণ করুন।</li>
                </ol>
            `
        },

        {
            keywords: [
                "telegram",
                "telegram hacked",
                "telegram account"
            ],

            title: "✈️ Telegram Help",

            text: `
                <h3>Telegram Security</h3>

                <ol>
                    <li>Active Sessions পরীক্ষা করুন।</li>
                    <li>Unknown sessions terminate করুন।</li>
                    <li>Two-Step Verification চালু করুন।</li>
                    <li>Phone number privacy review করুন।</li>
                    <li>Suspicious user block/report করুন।</li>
                </ol>
            `
        },

        {
            keywords: [
                "youtube",
                "youtube hacked",
                "youtube channel"
            ],

            title: "▶️ YouTube Help",

            text: `
                <h3>YouTube Channel Security</h3>

                <ol>
                    <li>Google Account secure করুন।</li>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>2-Step Verification চালু করুন।</li>
                    <li>Unknown devices remove করুন।</li>
                    <li>Channel permissions পরীক্ষা করুন।</li>
                    <li>Unknown manager/access remove করুন।</li>
                </ol>
            `
        },

        {
            keywords: [
                "google",
                "gmail",
                "google account",
                "gmail hacked"
            ],

            title: "🔴 Google / Gmail Help",

            text: `
                <h3>Google Account Recovery</h3>

                <ol>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>Security Checkup করুন।</li>
                    <li>Recent security activity পরীক্ষা করুন।</li>
                    <li>Your devices পরীক্ষা করুন।</li>
                    <li>Unknown device remove করুন।</li>
                    <li>Recovery email/phone পরীক্ষা করুন।</li>
                    <li>2-Step Verification চালু করুন।</li>
                </ol>
            `
        },

        {
            keywords: [
                "snapchat",
                "snapchat hacked",
                "snap"
            ],

            title: "👻 Snapchat Help",

            text: `
                <h3>Snapchat Security</h3>

                <ol>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>Login verification চালু করুন।</li>
                    <li>Unknown sessions/device পরীক্ষা করুন।</li>
                    <li>Privacy settings review করুন।</li>
                    <li>Harassment হলে evidence রাখুন।</li>
                </ol>
            `
        },

        {
            keywords: [
                "tiktok",
                "tiktok hacked",
                "tik tok"
            ],

            title: "🎵 TikTok Help",

            text: `
                <h3>TikTok Account Security</h3>

                <ol>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>Manage devices পরীক্ষা করুন।</li>
                    <li>2-step verification চালু করুন।</li>
                    <li>Unknown devices remove করুন।</li>
                    <li>Fake account report করুন।</li>
                    <li>Harassment হলে evidence রাখুন।</li>
                </ol>
            `
        },

        {
            keywords: [
                "twitter",
                "x",
                "x account",
                "twitter hacked"
            ],

            title: "⚫ X / Twitter Help",

            text: `
                <h3>X Account Security</h3>

                <ol>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>Connected apps পরীক্ষা করুন।</li>
                    <li>Active sessions পরীক্ষা করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Unknown access revoke করুন।</li>
                    <li>Fake account বা harassment report করুন।</li>
                </ol>
            `
        },

        {
            keywords: [
                "linkedin",
                "linkedin hacked",
                "linkedin account"
            ],

            title: "💼 LinkedIn Help",

            text: `
                <h3>LinkedIn Security</h3>

                <ol>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>Where you're signed in পরীক্ষা করুন।</li>
                    <li>Unknown sessions logout করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Fake profile report করুন।</li>
                    <li>Suspicious messages-এর screenshot রাখুন।</li>
                </ol>
            `
        },

        {
            keywords: [
                "hacked",
                "hack",
                "account hacked",
                "login problem",
                "হ্যাক",
                "অ্যাকাউন্ট হ্যাক"
            ],

            title: "🔐 Account Recovery",

            text: `
                <h3>যা করবেন</h3>

                <ol>
                    <li>প্রথমে email account নিরাপদ করুন।</li>
                    <li>Compromised password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Active sessions পরীক্ষা করুন।</li>
                    <li>অপরিচিত device remove করুন।</li>
                    <li>Recovery email ও phone পরীক্ষা করুন।</li>
                    <li>Recent security activity পরীক্ষা করুন।</li>
                    <li>শুধু official recovery system ব্যবহার করুন।</li>
                </ol>

                <h3>কখনো করবেন না</h3>

                <ul>
                    <li>OTP দেবেন না।</li>
                    <li>Password দেবেন না।</li>
                    <li>Recovery code শেয়ার করবেন না।</li>
                    <li>Guaranteed recovery-এর জন্য টাকা দেবেন না।</li>
                </ul>
            `
        },

        {
            keywords: [
                "blackmail",
                "threat",
                "private photo",
                "private video",
                "sextortion",
                "leak",
                "ব্ল্যাকমেইল",
                "হুমকি"
            ],

            title: "⚠️ Blackmail / Private Content Threat",

            text: `
                <h3>🚨 প্রথমে শান্ত থাকুন</h3>

                <ol>
                    <li>Blackmailer-কে টাকা দেবেন না।</li>
                    <li>আর কোনো ছবি বা ভিডিও পাঠাবেন না।</li>
                    <li>OTP/password দেবেন না।</li>
                    <li>সব threat-এর screenshot রাখুন।</li>
                    <li>Username ও profile URL সংরক্ষণ করুন।</li>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Evidence সংরক্ষণ করার পর report/block করুন।</li>
                    <li>বিশ্বস্ত একজন মানুষকে জানান।</li>
                </ol>

                <p>
                    Blackmail হওয়া আপনার দোষ নয়।
                </p>
            `
        },

        {
            keywords: [
                "harassment",
                "call",
                "calling",
                "message",
                "disturb",
                "abuse",
                "বিরক্ত",
                "হয়রানি"
            ],

            title: "📞 Harassment / Repeated Calls",

            text: `
                <ol>
                    <li>Call logs সংরক্ষণ করুন।</li>
                    <li>Messages-এর screenshot নিন।</li>
                    <li>অপ্রয়োজনীয়ভাবে reply করবেন না।</li>
                    <li>প্রয়োজনে number/account block করুন।</li>
                    <li>Privacy settings review করুন।</li>
                    <li>Threat থাকলে evidence সংরক্ষণ করুন।</li>
                    <li>Trusted person-কে জানান।</li>
                </ol>
            `
        },

        {
            keywords: [
                "photo",
                "picture",
                "image",
                "photo misuse",
                "ছবি",
                "ছবির অপব্যবহার"
            ],

            title: "📸 Photo Misuse",

            text: `
                <ol>
                    <li>Content-এর screenshot নিন।</li>
                    <li>Profile URL সংরক্ষণ করুন।</li>
                    <li>Post URL সংরক্ষণ করুন।</li>
                    <li>Username সংরক্ষণ করুন।</li>
                    <li>Platform-এর reporting system ব্যবহার করুন।</li>
                    <li>নিজের account secure করুন।</li>
                    <li>Guaranteed removal-এর নামে টাকা দেবেন না।</li>
                </ol>
            `
        },

        {
            keywords: [
                "fake profile",
                "fake account",
                "impersonation",
                "ভুয়া প্রোফাইল",
                "ফেক অ্যাকাউন্ট"
            ],

            title: "🎭 Fake Profile / Impersonation",

            text: `
                <ol>
                    <li>Fake profile-এর screenshot নিন।</li>
                    <li>Profile URL সংরক্ষণ করুন।</li>
                    <li>Username সংরক্ষণ করুন।</li>
                    <li>Impersonation হিসেবে report করুন।</li>
                    <li>প্রয়োজনে পরিচিতদের সতর্ক করুন।</li>
                    <li>নিজের account secure করুন।</li>
                </ol>
            `
        },

        {
            keywords: [
                "upi",
                "bank",
                "money",
                "fraud",
                "payment",
                "scam",
                "transaction",
                "টাকা",
                "প্রতারণা",
                "ইউপিআই"
            ],

            title: "💳 Online & Financial Fraud",

            text: `
                <h3>🚨 যদি টাকা চলে যায়</h3>

                <ol>
                    <li>অবিলম্বে bank/payment provider-এর সঙ্গে যোগাযোগ করুন।</li>
                    <li>Transaction fraudulent বলে জানান।</li>
                    <li>Transaction ID সংরক্ষণ করুন।</li>
                    <li>Screenshot সংরক্ষণ করুন।</li>
                    <li>Payment account secure করুন।</li>
                    <li>Official cybercrime reporting ব্যবহার করুন।</li>
                </ol>

                <h3>কখনো শেয়ার করবেন না</h3>

                <ul>
                    <li>OTP</li>
                    <li>UPI PIN</li>
                    <li>Password</li>
                    <li>Banking PIN</li>
                </ul>
            `
        },

        {
            keywords: [
                "phishing",
                "link",
                "otp",
                "fake website",
                "fake sms",
                "ফিশিং",
                "ওটিপি",
                "লিংক"
            ],

            title: "🎣 Scam & Phishing",

            text: `
                <ol>
                    <li>সন্দেহজনক link-এ click করবেন না।</li>
                    <li>OTP কাউকে দেবেন না।</li>
                    <li>Password দেবেন না।</li>
                    <li>UPI PIN দেবেন না।</li>
                    <li>Sender অন্য মাধ্যমে verify করুন।</li>
                    <li>Official app/site নিজে খুলে যাচাই করুন।</li>
                </ol>
            `
        },

        {
            keywords: [
                "spyware",
                "virus",
                "malware",
                "unknown app",
                "phone hacked",
                "mobile hacked",
                "স্পাইওয়্যার",
                "ভাইরাস",
                "মোবাইল হ্যাক"
            ],

            title: "📱 Phone Security",

            text: `
                <h3>ফোনে এগুলো পরীক্ষা করুন</h3>

                <ol>
                    <li>Unknown applications</li>
                    <li>App permissions</li>
                    <li>Accessibility access</li>
                    <li>Device Administrator access</li>
                    <li>VPN/profile configuration</li>
                    <li>Notification access</li>
                    <li>Install unknown apps permission</li>
                    <li>Location sharing</li>
                    <li>Bluetooth/connected devices</li>
                    <li>Battery/data অস্বাভাবিক ব্যবহার</li>
                </ol>

                <p>
                    সন্দেহজনক কিছু পেলে আগে evidence সংরক্ষণ করুন,
                    তারপর trusted security steps নিন।
                </p>
            `
        },

        {
            keywords: [
                "stalking",
                "online stalking",
                "track",
                "location",
                "স্টকিং",
                "লোকেশন"
            ],

            title: "👁️ Online Stalking",

            text: `
                <h3>Public information পরীক্ষা করুন</h3>

                <ul>
                    <li>Phone number</li>
                    <li>Email</li>
                    <li>Location</li>
                    <li>Daily routine</li>
                    <li>Work / school information</li>
                    <li>Friends / family information</li>
                </ul>

                <h3>তারপর</h3>

                <ol>
                    <li>Location sharing সীমিত করুন।</li>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Active sessions পরীক্ষা করুন।</li>
                    <li>Evidence সংরক্ষণ করুন।</li>
                    <li>Account block/report করুন।</li>
                </ol>
            `
        }

    ];

    // =========================================================
    // SEARCH ENGINE
    // =========================================================

    function performSearch(query) {

        if (!searchResults) return;

        searchResults.innerHTML = "";

        query = safeText(query);

        if (!query) return;

        const normalizedQuery =
            normalize(query);

        const matches =
            problems.filter(problem =>

                problem.keywords.some(keyword =>
                    normalizedQuery.includes(
                        normalize(keyword)
                    )
                )

            );

        if (!matches.length) {

            searchResults.innerHTML = `

                <div class="search-result">

                    <h3>🔎 No exact guide found</h3>

                    <p>
                        Try:
                        hacked, blackmail, harassment,
                        Facebook, Instagram, WhatsApp,
                        UPI fraud, phishing, fake profile,
                        stalking, phone security.
                    </p>

                </div>

            `;

            return;

        }

        matches.forEach(problem => {

            const result =
                document.createElement("div");

            result.className =
                "search-result";

            result.innerHTML = `

                <h3>${problem.title}</h3>

                <div>
                    ${problem.text}
                </div>

                <button
                    class="result-help"
                    type="button"
                >
                    View Full Safety Guide →
                </button>

            `;

            $(".result-help", result)
                ?.addEventListener("click", () => {

                    showGuide(
                        problem.title,
                        problem.text
                    );

                });

            searchResults.appendChild(result);

        });

        bindDynamicGuideButtons();

    }

    problemSearch?.addEventListener(
        "input",
        event => {

            performSearch(
                event.target.value
            );

        }
    );

    problemSearch?.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" &&
                problemSearch.value.trim()
            ) {

                performSearch(
                    problemSearch.value
                );

            }

        }
    );

    // =========================================================
    // SOCIAL MEDIA HELP DESK
    // =========================================================

    const socialMediaGuides = {

        facebook: {

            title: "🔵 Facebook Help Desk",

            text: `

                <h3>Facebook সমস্যার ধরন</h3>

                <button class="social-problem"
                    data-social-problem="hacked">
                    🔐 Account Hacked
                </button>

                <button class="social-problem"
                    data-social-problem="fake">
                    🎭 Fake Profile
                </button>

                <button class="social-problem"
                    data-social-problem="harassment">
                    📞 Harassment
                </button>

                <button class="social-problem"
                    data-social-problem="privacy">
                    🔒 Privacy Problem
                </button>

                <button class="social-problem"
                    data-social-problem="blackmail">
                    ⚠️ Blackmail
                </button>

                <div class="social-problem-result"></div>

            `
        },

        instagram: {

            title: "📸 Instagram Help Desk",

            text: `

                <h3>Instagram সমস্যার ধরন</h3>

                <button class="social-problem"
                    data-social-problem="hacked">
                    🔐 Account Hacked
                </button>

                <button class="social-problem"
                    data-social-problem="fake">
                    🎭 Fake Account
                </button>

                <button class="social-problem"
                    data-social-problem="harassment">
                    📞 Harassment
                </button>

                <button class="social-problem"
                    data-social-problem="photo">
                    📸 Photo Misuse
                </button>

                <button class="social-problem"
                    data-social-problem="blackmail">
                    ⚠️ Blackmail
                </button>

                <div class="social-problem-result"></div>

            `
        },

        whatsapp: {

            title: "🟢 WhatsApp Help Desk",

            text: `

                <h3>WhatsApp সমস্যার ধরন</h3>

                <button class="social-problem"
                    data-social-problem="hacked">
                    🔐 Account Compromised
                </button>

                <button class="social-problem"
                    data-social-problem="linked">
                    🔗 Unknown Linked Device
                </button>

                <button class="social-problem"
                    data-social-problem="harassment">
                    📞 Harassment
                </button>

                <button class="social-problem"
                    data-social-problem="privacy">
                    🔒 Privacy
                </button>

                <div class="social-problem-result"></div>

            `
        },

        telegram: {

            title: "✈️ Telegram Help Desk",

            text: `

                <h3>Telegram Security</h3>

                <button class="social-problem"
                    data-social-problem="hacked">
                    🔐 Account Problem
                </button>

                <button class="social-problem"
                    data-social-problem="linked">
                    🔗 Unknown Session
                </button>

                <button class="social-problem"
                    data-social-problem="privacy">
                    🔒 Privacy
                </button>

                <button class="social-problem"
                    data-social-problem="harassment">
                    📞 Harassment
                </button>

                <div class="social-problem-result"></div>

            `
        },

        youtube: {

            title: "▶️ YouTube Help Desk",

            text: `

                <h3>YouTube সমস্যার ধরন</h3>

                <button class="social-problem"
                    data-social-problem="hacked">
                    🔐 Channel Hacked
                </button>

                <button class="social-problem"
                    data-social-problem="privacy">
                    🔒 Privacy
                </button>

                <button class="social-problem"
                    data-social-problem="fake">
                    🎭 Fake Channel
                </button>

                <div class="social-problem-result"></div>

            `
        },

        google: {

            title: "🔴 Google / Gmail Help Desk",

            text: `

                <h3>Google সমস্যার ধরন</h3>

                <button class="social-problem"
                    data-social-problem="hacked">
                    🔐 Account Hacked
                </button>

                <button class="social-problem"
                    data-social-problem="privacy">
                    🔒 Privacy
                </button>

                <button class="social-problem"
                    data-social-problem="phishing">
                    🎣 Phishing
                </button>

                <div class="social-problem-result"></div>

            `
        },

        snapchat: {

            title: "👻 Snapchat Help Desk",

            text: `

                <h3>Snapchat Security</h3>

                <button class="social-problem"
                    data-social-problem="hacked">
                    🔐 Account Hacked
                </button>

                <button class="social-problem"
                    data-social-problem="harassment">
                    📞 Harassment
                </button>

                <button class="social-problem"
                    data-social-problem="privacy">
                    🔒 Privacy
                </button>

                <div class="social-problem-result"></div>

            `
        },

        tiktok: {

            title: "🎵 TikTok Help Desk",

            text: `

                <h3>TikTok Security</h3>

                <button class="social-problem"
                    data-social-problem="hacked">
                    🔐 Account Hacked
                </button>

                <button class="social-problem"
                    data-social-problem="fake">
                    🎭 Fake Account
                </button>

                <button class="social-problem"
                    data-social-problem="harassment">
                    📞 Harassment
                </button>

                <div class="social-problem-result"></div>

            `
        },

        twitter: {

            title: "⚫ X / Twitter Help Desk",

            text: `

                <h3>X সমস্যার ধরন</h3>

                <button class="social-problem"
                    data-social-problem="hacked">
                    🔐 Account Hacked
                </button>

                <button class="social-problem"
                    data-social-problem="fake">
                    🎭 Fake Account
                </button>

                <button class="social-problem"
                    data-social-problem="harassment">
                    📞 Harassment
                </button>

                <div class="social-problem-result"></div>

            `
        },

        linkedin: {

            title: "💼 LinkedIn Help Desk",

            text: `

                <h3>LinkedIn সমস্যার ধরন</h3>

                <button class="social-problem"
                    data-social-problem="hacked">
                    🔐 Account Hacked
                </button>

                <button class="social-problem"
                    data-social-problem="fake">
                    🎭 Fake Profile
                </button>

                <button class="social-problem"
                    data-social-problem="harassment">
                    📞 Harassment
                </button>

                <div class="social-problem-result"></div>

            `
        }

    };

    const socialProblemGuides = {

        hacked: `

            <h3>🔐 Account Hacked</h3>

            <ol>
                <li>Official recovery page ব্যবহার করুন।</li>
                <li>Password পরিবর্তন করুন।</li>
                <li>2FA চালু করুন।</li>
                <li>Active sessions পরীক্ষা করুন।</li>
                <li>Unknown devices logout করুন।</li>
                <li>Recovery email/phone পরীক্ষা করুন।</li>
                <li>Third-party app access review করুন।</li>
            </ol>

            <p>
                কোনো "hacker recovery expert"-কে OTP/password দেবেন না।
            </p>

        `,

        fake: `

            <h3>🎭 Fake Profile / Impersonation</h3>

            <ol>
                <li>Fake profile-এর screenshot নিন।</li>
                <li>Profile URL সংরক্ষণ করুন।</li>
                <li>Username সংরক্ষণ করুন।</li>
                <li>Platform-এর impersonation report ব্যবহার করুন।</li>
                <li>প্রয়োজনে trusted contacts-কে সতর্ক করুন।</li>
            </ol>

        `,

        harassment: `

            <h3>📞 Harassment</h3>

            <ol>
                <li>Reply না করে evidence রাখুন।</li>
                <li>Screenshot নিন।</li>
                <li>Profile URL সংরক্ষণ করুন।</li>
                <li>Block করুন।</li>
                <li>Report করুন।</li>
                <li>Threat থাকলে trusted person-কে জানান।</li>
            </ol>

        `,

        blackmail: `

            <h3>⚠️ Blackmail</h3>

            <ol>
                <li>টাকা দেবেন না।</li>
                <li>আর কোনো content পাঠাবেন না।</li>
                <li>Threat-এর screenshot রাখুন।</li>
                <li>Username/URL সংরক্ষণ করুন।</li>
                <li>Password পরিবর্তন করুন।</li>
                <li>2FA চালু করুন।</li>
                <li>Evidence সংরক্ষণের পর report/block করুন।</li>
            </ol>

            <p>
                Blackmail হওয়া আপনার দোষ নয়।
            </p>

        `,

        photo: `

            <h3>📸 Photo Misuse</h3>

            <ol>
                <li>Content-এর screenshot নিন।</li>
                <li>URL সংরক্ষণ করুন।</li>
                <li>Account/profile details সংরক্ষণ করুন।</li>
                <li>Platform privacy/abuse report ব্যবহার করুন।</li>
                <li>নিজের account secure করুন।</li>
            </ol>

        `,

        privacy: `

            <h3>🔒 Privacy Problem</h3>

            <ol>
                <li>Profile visibility review করুন।</li>
                <li>Location sharing বন্ধ/সীমিত করুন।</li>
                <li>Phone/email visibility review করুন।</li>
                <li>Who can message you পরীক্ষা করুন।</li>
                <li>Connected apps review করুন।</li>
                <li>Active sessions পরীক্ষা করুন।</li>
            </ol>

        `,

        linked: `

            <h3>🔗 Unknown Linked Device / Session</h3>

            <ol>
                <li>Linked devices/sessions খুলুন।</li>
                <li>Unknown device identify করুন।</li>
                <li>Unknown session logout/terminate করুন।</li>
                <li>Password পরিবর্তন করুন।</li>
                <li>2FA চালু করুন।</li>
            </ol>

        `,

        phishing: `

            <h3>🎣 Phishing</h3>

            <ol>
                <li>Link-এ click করবেন না।</li>
                <li>OTP/password দেবেন না।</li>
                <li>Sender verify করুন।</li>
                <li>Official app নিজে খুলুন।</li>
                <li>Suspicious message report করুন।</li>
            </ol>

        `

    };

    function openSocialDesk(platform) {

        const guide =
            socialMediaGuides[platform];

        if (!guide) return;

        showGuide(
            guide.title,
            guide.text
        );

    }

    function bindSocialProblemButtons(modal) {

        $$(".social-problem", modal)
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const type =
                            button.dataset.socialProblem;

                        const result =
                            $(".social-problem-result", modal);

                        if (
                            result &&
                            socialProblemGuides[type]
                        ) {

                            result.innerHTML =
                                socialProblemGuides[type];

                            result.scrollIntoView({
                                behavior: "smooth",
                                block: "nearest"
                            });

                        }

                    }
                );

            });

    }

    // Existing social media buttons
    $$(".social-media-btn, .social-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const platform =
                        normalize(
                            button.dataset.social ||
                            button.dataset.platform
                        );

                    openSocialDesk(platform);

                }
            );

        });

    // =========================================================
    // ADVANCED PHONE SECURITY SCAN
    // =========================================================

    const scanButton =
        $("#scanButton") ||
        $(".scan-main-btn");

    const manualScanButton =
        $("#manualScanButton") ||
        $(".scan-manual-btn");

    const scanStatus =
        $("#scanStatus") ||
        $(".scan-status");

    const scanProgressBar =
        $("#scanProgressBar") ||
        $(".scan-progress-bar");

    const scanStep =
        $("#scanStep") ||
        $(".scan-step");

    const scanResult =
        $("#scanResult") ||
        $(".scan-result");

    const scanChecks = [

        "Installed applications",
        "App permissions",
        "Accessibility access",
        "Device Administrator access",
        "Notification access",
        "Unknown app installation access",
        "VPN / profiles",
        "Location sharing",
        "Connected devices",
        "Account sessions",
        "Security updates",
        "Privacy settings"

    ];

    function runSecurityScan() {

        if (!scanStatus) {

            showAdvancedPhoneScan();

            return;

        }

        scanStatus.classList.add("active");

        if (scanResult) {

            scanResult.classList.remove(
                "active",
                "safe",
                "warning",
                "danger"
            );

        }

        let progress = 0;
        let index = 0;

        if (scanProgressBar) {

            scanProgressBar.style.width =
                "0%";

        }

        if (scanStep) {

            scanStep.textContent =
                "Preparing advanced security audit...";

        }

        const timer =
            setInterval(() => {

                progress += 8;

                if (scanProgressBar) {

                    scanProgressBar.style.width =
                        `${Math.min(progress, 100)}%`;

                }

                if (
                    scanStep &&
                    scanChecks[index]
                ) {

                    scanStep.textContent =
                        `Checking: ${scanChecks[index]}...`;

                }

                index++;

                if (progress >= 100) {

                    clearInterval(timer);

                    if (scanStep) {

                        scanStep.textContent =
                            "Security audit completed.";

                    }

                    showAdvancedPhoneScanResult();

                }

            }, 300);

    }

    function showAdvancedPhoneScan() {

        showGuide(
            "📱 Advanced Phone Security Scan",
            phoneScanGuide()
        );

    }

    function phoneScanGuide() {

        return `

            <h3>🛡️ Phone Security Audit</h3>

            <p>
                CyberCare browser-এর ভিতর থেকে আপনার ফোনের
                private system data পড়তে পারে না।
                তাই নিচের গুরুত্বপূর্ণ security points নিজে
                পরীক্ষা করুন।
            </p>

            <div class="phone-audit-list">

                <h4>1️⃣ Installed Apps</h4>

                <ul>
                    <li>Settings → Apps খুলুন।</li>
                    <li>অপরিচিত application খুঁজুন।</li>
                    <li>নিজে install না করা app হলে তদন্ত করুন।</li>
                </ul>

                <h4>2️⃣ Permissions</h4>

                <ul>
                    <li>Camera</li>
                    <li>Microphone</li>
                    <li>Location</li>
                    <li>Contacts</li>
                    <li>SMS</li>
                    <li>Files / Photos</li>
                </ul>

                <h4>3️⃣ Accessibility</h4>

                <p>
                    Accessibility access-এ অচেনা app থাকলে
                    কেন access দেওয়া হয়েছে তা পরীক্ষা করুন।
                </p>

                <h4>4️⃣ Device Administrator</h4>

                <p>
                    অচেনা application administrator access পেয়েছে
                    কিনা পরীক্ষা করুন।
                </p>

                <h4>5️⃣ Notification Access</h4>

                <p>
                    অপ্রয়োজনীয় application notification access পেলে
                    তা review করুন।
                </p>

                <h4>6️⃣ Install Unknown Apps</h4>

                <p>
                    অপ্রয়োজনীয় source থেকে application install করার
                    permission বন্ধ রাখুন।
                </p>

                <h4>7️⃣ VPN / Profiles</h4>

                <p>
                    আপনি নিজে সেট না করলে unknown VPN/profile পরীক্ষা করুন।
                </p>

                <h4>8️⃣ Location</h4>

                <p>
                    কোন app সবসময় location access করছে পরীক্ষা করুন।
                </p>

                <h4>9️⃣ Connected Devices</h4>

                <p>
                    Bluetooth এবং account-linked devices review করুন।
                </p>

                <h4>🔟 Security Updates</h4>

                <p>
                    Phone এবং apps updated রাখুন।
                </p>

                <div class="scan-limit">

                    ℹ️ CyberCare কোনো antivirus বা spyware detector নয়।
                    Browser security restrictions-এর কারণে website
                    নিজে থেকে আপনার phone settings change করতে পারে না।

                </div>

            </div>

        `;

    }

    function showAdvancedPhoneScanResult() {

        if (!scanResult) {

            showAdvancedPhoneScan();

            return;

        }

        scanResult.classList.add("active");

        scanResult.innerHTML = `

            <h3>🛡️ Security Audit Complete</h3>

            <p>
                CyberCare আপনার জন্য গুরুত্বপূর্ণ security areas
                identify করেছে।
            </p>

            <ul>
                <li>Unknown apps পরীক্ষা করুন</li>
                <li>Camera/Microphone permissions review করুন</li>
                <li>Location permissions review করুন</li>
                <li>Accessibility access পরীক্ষা করুন</li>
                <li>Device Administrator পরীক্ষা করুন</li>
                <li>Notification access পরীক্ষা করুন</li>
                <li>Unknown VPN/profile পরীক্ষা করুন</li>
                <li>Connected devices পরীক্ষা করুন</li>
                <li>Account sessions review করুন</li>
                <li>Software updates করুন</li>
            </ul>

            <button
                class="internal-tool-action"
                id="openPhoneChecklist"
            >
                Open Full Phone Checklist
            </button>

            <div class="scan-limit">

                ⚠️ Website browser থেকে phone-এর internal
                malware/spyware status নিশ্চিত করা সম্ভব নয়।
                এটি একটি safety audit, antivirus scan নয়।

            </div>

        `;

        $("#openPhoneChecklist")
            ?.addEventListener(
                "click",
                showAdvancedPhoneScan
            );

    }

    scanButton?.addEventListener(
        "click",
        runSecurityScan
    );

    manualScanButton?.addEventListener(
        "click",
        showAdvancedPhoneScan
    );

    // =========================================================
    // SERVICE GUIDES
    // =========================================================

    const serviceGuides = {

        "Account Recovery": `

            <h3>🔐 Complete Account Recovery</h3>

            <ol>
                <li>Email account secure করুন।</li>
                <li>Compromised password পরিবর্তন করুন।</li>
                <li>2FA চালু করুন।</li>
                <li>Active sessions review করুন।</li>
                <li>Unknown devices remove করুন।</li>
                <li>Recovery email/phone check করুন।</li>
                <li>Security alerts পরীক্ষা করুন।</li>
                <li>Official recovery system ব্যবহার করুন।</li>
            </ol>

            <h3>🚫 কখনো নয়</h3>

            <ul>
                <li>OTP দেবেন না।</li>
                <li>Password দেবেন না।</li>
                <li>Recovery code দেবেন না।</li>
                <li>Guaranteed recovery-এর জন্য টাকা দেবেন না।</li>
            </ul>

        `,

        "Scam & Phishing": `

            <h3>🎣 Scam & Phishing</h3>

            <ol>
                <li>Interaction বন্ধ করুন।</li>
                <li>Suspicious link খুলবেন না।</li>
                <li>OTP দেবেন না।</li>
                <li>Password দেবেন না।</li>
                <li>UPI PIN দেবেন না।</li>
                <li>Sender independently verify করুন।</li>
                <li>Official website/app নিজে খুলুন।</li>
            </ol>

        `,

        "Phone Security":
            phoneScanGuide(),

        "Online Fraud": `

            <h3>💳 Financial Fraud</h3>

            <ol>
                <li>Bank/payment provider-কে দ্রুত জানান।</li>
                <li>Fraudulent transaction report করুন।</li>
                <li>Transaction ID রাখুন।</li>
                <li>Screenshot রাখুন।</li>
                <li>Payment account secure করুন।</li>
                <li>Official reporting channel ব্যবহার করুন।</li>
            </ol>

        `,

        "Suspicious Activity": `

            <h3>🕵️ Suspicious Activity</h3>

            <ul>
                <li>Unknown login</li>
                <li>Unknown device</li>
                <li>Password reset alert</li>
                <li>Unknown messages</li>
                <li>Unexpected account changes</li>
            </ul>

            <h3>যা করবেন</h3>

            <ol>
                <li>Password পরিবর্তন করুন।</li>
                <li>2FA চালু করুন।</li>
                <li>Sessions review করুন।</li>
                <li>Unknown devices remove করুন।</li>
                <li>Recovery information check করুন।</li>
            </ol>

        `

    };

    $$(".help-btn").forEach(button => {

        button.addEventListener("click", () => {

            const service =
                button.dataset.service;

            showGuide(
                service,
                serviceGuides[service] ||
                "<p>Official service/provider-এর help ব্যবহার করুন.</p>"
            );

        });

    });

    // =========================================================
    // SECURITY TOOLS
    // =========================================================

    $$(".tool-btn, .security-tool-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const tool =
                        button.dataset.tool;

                    if (tool) {

                        openTool(tool);

                    }

                }
            );

        });

    function openTool(tool) {

        const tools = {

            scam: `

                <h3>🔎 Scam Checker</h3>

                <p>
                    যে warning signs প্রযোজ্য select করুন।
                </p>

                <div class="tool-checks">

                    ${[
                        "Urgent pressure",
                        "OTP/password চাইছে",
                        "Suspicious link",
                        "Advance payment",
                        "Guaranteed prize/profit",
                        "Fake authority/support",
                        "Unusual payment request",
                        "Account বন্ধ হয়ে যাবে বলে চাপ"
                    ].map(item => `

                        <label>
                            <input type="checkbox">
                            ${item}
                        </label>

                    `).join("")}

                </div>

                <button
                    class="internal-tool-action"
                    id="scamAnalyze"
                >
                    Analyze Risk
                </button>

                <div id="scamResult"></div>

            `,

            password: `

                <h3>🔐 Password Safety Checker</h3>

                <p>
                    Password browser-এর বাইরে পাঠানো হয় না।
                </p>

                <input
                    id="passwordInput"
                    type="password"
                    placeholder="Enter password"
                    autocomplete="off"
                >

                <button
                    class="internal-tool-action"
                    id="checkPassword"
                >
                    Check Password
                </button>

                <div id="passwordResult"></div>

            `,

            url: `

                <h3>🔗 Suspicious URL Guide</h3>

                <ol>
                    <li>Domain spelling পরীক্ষা করুন।</li>
                    <li>অদ্ভুত character দেখুন।</li>
                    <li>Shortened link-এ সতর্ক থাকুন।</li>
                    <li>Logo দেখে website বিশ্বাস করবেন না।</li>
                    <li>Unexpected login page-এ credentials দেবেন না।</li>
                    <li>Official app/site নিজে খুলুন।</li>
                </ol>

                <div class="scan-limit">
                    CyberCare website-কে server-side scan করে
                    safe/unsafe guarantee করে না।
                </div>

            `,

            privacy: `

                <h3>📱 Privacy Checklist</h3>

                <ul>
                    <li>🔒 Account privacy</li>
                    <li>📍 Location sharing</li>
                    <li>📷 Camera permissions</li>
                    <li>🎙️ Microphone permissions</li>
                    <li>👥 Contact permissions</li>
                    <li>📱 Connected devices</li>
                    <li>🔑 Active sessions</li>
                    <li>🔗 Third-party applications</li>
                    <li>📨 Who can message you</li>
                    <li>👤 Who can see your profile</li>
                </ul>

            `,

            evidence: `

                <h3>🧾 Evidence Checklist</h3>

                <ul>
                    <li>📸 Screenshots</li>
                    <li>👤 Username</li>
                    <li>🔗 Profile URL</li>
                    <li>💬 Messages</li>
                    <li>☎️ Call logs</li>
                    <li>🕐 Date and time</li>
                    <li>💳 Transaction ID</li>
                    <li>📧 Emails</li>
                    <li>📱 Phone number</li>
                    <li>🌐 Website URL</li>
                </ul>

                <p>
                    Original evidence preserve করুন।
                </p>

            `,

            score: `

                <h3>🛡️ Cyber Safety Score</h3>

                <div class="score-checks">

                    <label>
                        <input type="checkbox">
                        Unique passwords
                    </label>

                    <label>
                        <input type="checkbox">
                        2FA enabled
                    </label>

                    <label>
                        <input type="checkbox">
                        Never share OTP
                    </label>

                    <label>
                        <input type="checkbox">
                        Review active sessions
                    </label>

                    <label>
                        <input type="checkbox">
                        Review app permissions
                    </label>

                    <label>
                        <input type="checkbox">
                        Phone updated
                    </label>

                    <label>
                        <input type="checkbox">
                        Verify payment requests
                    </label>

                    <label>
                        <input type="checkbox">
                        Know reporting channels
                    </label>

                    <label>
                        <input type="checkbox">
                        Review privacy settings
                    </label>

                    <label>
                        <input type="checkbox">
                        Preserve evidence
                    </label>

                </div>

                <button
                    class="internal-tool-action"
                    id="calculateScore"
                >
                    Calculate Score
                </button>

                <div id="scoreResult"></div>

            `,

            phone: phoneScanGuide(),

            recovery:
                serviceGuides["Account Recovery"],

            financial:
                serviceGuides["Online Fraud"],

            blackmail:
                socialProblemGuides.blackmail,

            harassment:
                socialProblemGuides.harassment

        };

        if (!tools[tool]) {

            showGuide(
                "🛠️ CyberCare Tool",
                "<p>Use the available CyberCare safety tools.</p>"
            );

            return;

        }

        showGuide(
            "🛠️ CyberCare Tool",
            tools[tool]
        );

        setTimeout(() => {

            $("#scamAnalyze")
                ?.addEventListener(
                    "click",
                    analyzeScam
                );

            $("#checkPassword")
                ?.addEventListener(
                    "click",
                    checkPasswordStrength
                );

            $("#calculateScore")
                ?.addEventListener(
                    "click",
                    calculateSafetyScore
                );

        }, 50);

    }

    // =========================================================
    // SCAM ANALYZER
    // =========================================================

    function analyzeScam() {

        const checks =
            $$("#cybercareModal .tool-checks input");

        const count =
            checks.filter(
                check => check.checked
            ).length;

        const result =
            $("#scamResult");

        if (!result) return;

        if (count === 0) {

            result.innerHTML = `

                <div class="scan-limit">
                    ✅ কোনো warning sign select করা হয়নি।
                    তবুও unexpected request independently verify করুন।
                </div>

            `;

        } else if (count <= 2) {

            result.innerHTML = `

                <div class="scan-limit">
                    ⚠️ কিছু warning sign পাওয়া গেছে।
                </div>

            `;

        } else if (count <= 4) {

            result.innerHTML = `

                <div class="scan-limit">
                    🟠 High caution।
                    Interaction বন্ধ করে official channel দিয়ে verify করুন।
                </div>

            `;

        } else {

            result.innerHTML = `

                <div class="scan-limit">
                    🚨 Strong scam warning pattern।
                    টাকা/OTP/password দেবেন না।
                </div>

            `;

        }

    }

    // =========================================================
    // PASSWORD CHECKER
    // =========================================================

    function checkPasswordStrength() {

        const input =
            $("#passwordInput");

        const result =
            $("#passwordResult");

        if (!input || !result) return;

        const password =
            input.value;

        if (!password) {

            result.innerHTML =
                "<p>Enter a password to check.</p>";

            return;

        }

        let score = 0;

        if (password.length >= 12) score++;
        if (password.length >= 16) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        let message;

        if (password.length < 8) {

            message =
                "🔴 Very weak";

        } else if (score <= 2) {

            message =
                "🔴 Weak";

        } else if (score <= 4) {

            message =
                "🟡 Moderate";

        } else {

            message =
                "🟢 Strong structure";

        }

        result.innerHTML = `

            <div class="scan-limit">

                <strong>${message}</strong>

                <p>
                    Password unique রাখুন এবং 2FA ব্যবহার করুন।
                </p>

            </div>

        `;

        setTimeout(() => {

            input.value = "";

        }, 500);

    }

    // =========================================================
    // SAFETY SCORE
    // =========================================================

    function calculateSafetyScore() {

        const checks =
            $$("#cybercareModal .score-checks input");

        const total =
            checks.length;

        if (!total) return;

        const yes =
            checks.filter(
                check => check.checked
            ).length;

        const percentage =
            Math.round(
                (yes / total) * 100
            );

        const result =
            $("#scoreResult");

        if (!result) return;

        let level;
        let advice;

        if (percentage >= 80) {

            level =
                "🟢 Excellent";

            advice =
                "আপনার basic security habits ভালো।";

        } else if (percentage >= 60) {

            level =
                "🟡 Good Start";

            advice =
                "আরও কয়েকটি security habit improve করুন।";

        } else if (percentage >= 40) {

            level =
                "🟠 Needs Improvement";

            advice =
                "Password, 2FA এবং privacy আগে ঠিক করুন।";

        } else {

            level =
                "🔴 High Improvement Needed";

            advice =
                "আজই গুরুত্বপূর্ণ account secure করা শুরু করুন।";

        }

        result.innerHTML = `

            <div class="scan-result active">

                <h3>${percentage}%</h3>

                <p>
                    <strong>${level}</strong>
                </p>

                <p>
                    ${advice}
                </p>

            </div>

        `;

    }

    // =========================================================
    // WOMEN SAFETY
    // =========================================================

    const womenGuides = {

        harassment: {

            title: "📞 Harassment",

            text: socialProblemGuides.harassment

        },

        photo: {

            title: "📸 Photo Misuse",

            text: socialProblemGuides.photo

        },

        fakeprofile: {

            title: "🎭 Fake Profile",

            text: socialProblemGuides.fake

        },

        blackmail: {

            title: "⚠️ Complete Blackmail Guide",

            text: `

                <h3>প্রথমে Panic করবেন না</h3>

                <p>
                    Blackmailer ভয় এবং urgency ব্যবহার করতে পারে।
                </p>

                ${socialProblemGuides.blackmail}

                <h3>❤️ মনে রাখবেন</h3>

                <p>
                    Blackmail হওয়া আপনার দোষ নয়।
                </p>

            `

        },

        private: {

            title: "🔒 Private Photo / Video Threat",

            text: socialProblemGuides.blackmail

        },

        stalking: {

            title: "👁️ Online Stalking",

            text: `

                <h3>Public information পরীক্ষা করুন</h3>

                <ul>
                    <li>Phone number</li>
                    <li>Email</li>
                    <li>Location</li>
                    <li>Daily routine</li>
                    <li>Work / school</li>
                    <li>Friends / family</li>
                </ul>

                <h3>Security steps</h3>

                <ol>
                    <li>Location sharing review করুন।</li>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Sessions review করুন।</li>
                    <li>Evidence রাখুন।</li>
                    <li>Block/report করুন।</li>
                </ol>

            `

        }

    };

    $$(".women-btn").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const type =
                    button.dataset.women;

                const guide =
                    womenGuides[type];

                if (guide) {

                    showGuide(
                        guide.title,
                        guide.text
                    );

                }

            }
        );

    });

    // =========================================================
    // LEARNING CONTENT
    // =========================================================

    const learningContent = {

        password: `

            <h3>🔐 Password Safety</h3>

            <ul>
                <li>Long password ব্যবহার করুন।</li>
                <li>প্রতিটি account-এ unique password ব্যবহার করুন।</li>
                <li>Password reuse করবেন না।</li>
                <li>2FA ব্যবহার করুন।</li>
            </ul>

        `,

        "2fa": `

            <h3>🔑 Two-Factor Authentication</h3>

            <p>
                2FA password-এর বাইরে অতিরিক্ত security layer।
            </p>

            <ul>
                <li>Email</li>
                <li>Social media</li>
                <li>Financial accounts</li>
                <li>Cloud accounts</li>
            </ul>

        `,

        phishing: socialProblemGuides.phishing,

        privacy: `

            <h3>🔒 Privacy</h3>

            <ul>
                <li>Profile visibility review করুন।</li>
                <li>Location sharing সীমিত করুন।</li>
                <li>Phone/email visibility review করুন।</li>
                <li>Connected apps review করুন।</li>
            </ul>

        `,

        phone: phoneScanGuide(),

        financial: serviceGuides["Online Fraud"]

    };

    $$(".learn-card").forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const topic =
                    card.dataset.learn;

                showGuide(
                    "🎓 Learn Cybersecurity",
                    learningContent[topic] ||
                    "<p>Safe digital habits শিখুন।</p>"
                );

            }
        );

    });

    // =========================================================
    // EMERGENCY RESPONSE
    // =========================================================

    const emergencyGuides = {

        account:
            serviceGuides["Account Recovery"],

        money:
            serviceGuides["Online Fraud"],

        blackmail:
            womenGuides.blackmail.text,

        phone:
            phoneScanGuide(),

        harassment:
            womenGuides.harassment.text,

        stalking:
            womenGuides.stalking.text

    };

    $$("[data-emergency]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const type =
                        button.dataset.emergency;

                    showGuide(
                        "🚨 Emergency Cyber Response",
                        emergencyGuides[type] ||
                        `
                            <p>
                                নিজের নিরাপত্তাকে priority দিন।
                            </p>
                        `
                    );

                }
            );

        });

    // =========================================================
    // INDIA CYBER HELP
    // =========================================================

    $$(".india-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const type =
                        button.dataset.india ||
                        button.dataset.help;

                    if (!type) return;

                    if (
                        type === "cybercrime"
                    ) {

                        showGuide(
                            "🇮🇳 India Cyber Help",
                            `

                                <h3>Cybercrime Response</h3>

                                <p>
                                    Online financial fraud, account abuse,
                                    blackmail বা অন্য cybercrime হলে
                                    official government reporting channel
                                    ব্যবহার করুন।
                                </p>

                                <p>
                                    Financial fraud হলে bank/payment provider-এর
                                    সঙ্গেও দ্রুত যোগাযোগ করুন।
                                </p>

                                <ul>
                                    <li>Screenshots</li>
                                    <li>URLs</li>
                                    <li>Usernames</li>
                                    <li>Phone numbers</li>
                                    <li>Transaction IDs</li>
                                    <li>Date/time</li>
                                </ul>

                            `
                        );

                    }

                }
            );

        });

    // =========================================================
    // FEEDBACK / SUGGESTION DROPBOX
    // =========================================================

    function openFeedbackBox() {

        showGuide(
            "📮 CyberCare Feedback Dropbox",
            `

                <h3>আপনার মতামত আমাদের জানান</h3>

                <p>
                    CyberCare-এ কী missing আছে,
                    কোন feature চান বা কোন সমস্যা পেয়েছেন—
                    এখানে লিখতে পারেন।
                </p>

                <textarea
                    id="cybercareFeedback"
                    rows="7"
                    placeholder="আপনার মতামত / সমস্যা / নতুন feature-এর idea লিখুন..."
                ></textarea>

                <input
                    id="feedbackContact"
                    type="text"
                    placeholder="Optional: email/contact"
                    autocomplete="off"
                >

                <button
                    class="internal-tool-action"
                    id="saveFeedback"
                    type="button"
                >
                    Save Feedback
                </button>

                <div id="feedbackStatus"></div>

                <div class="scan-limit">

                    ℹ️ এই version-এ feedback browser-এর
                    local storage-এ save হবে।
                    এটি server/database-এ automatically পাঠায় না।

                </div>

            `
        );

        setTimeout(() => {

            $("#saveFeedback")
                ?.addEventListener(
                    "click",
                    saveFeedback
                );

        }, 50);

    }

    function saveFeedback() {

        const message =
            safeText(
                $("#cybercareFeedback")?.value
            );

        const contact =
            safeText(
                $("#feedbackContact")?.value
            );

        const status =
            $("#feedbackStatus");

        if (!message) {

            if (status) {

                status.innerHTML =
                    "<p>⚠️ আগে আপনার মতামত লিখুন।</p>";

            }

            return;

        }

        const feedbacks =
            JSON.parse(
                localStorage.getItem(
                    "cybercare-feedbacks"
                ) || "[]"
            );

        feedbacks.push({

            message,
            contact,
            date:
                new Date().toISOString()

        });

        localStorage.setItem(
            "cybercare-feedbacks",
            JSON.stringify(feedbacks)
        );

        if (status) {

            status.innerHTML = `

                <div class="scan-limit">

                    ✅ আপনার feedback এই browser-এ
                    locally save হয়েছে।

                </div>

            `;

        }

        const textarea =
            $("#cybercareFeedback");

        if (textarea) {

            textarea.value = "";

        }

    }

    $$(".feedback-btn, .suggestion-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                openFeedbackBox
            );

        });

    // =========================================================
    // A-Z CYBER HELP
    // =========================================================

    const azHelp = {

        account: `
            <h3>🔐 Account Problems</h3>
            <p>Password, hacked account, suspicious login,
            recovery এবং 2FA নিয়ে সাহায্য নিন।</p>
        `,

        blackmail:
            womenGuides.blackmail.text,

        scam:
            serviceGuides["Scam & Phishing"],

        harassment:
            womenGuides.harassment.text,

        privacy:
            learningContent.privacy,

        phone:
            phoneScanGuide(),

        financial:
            serviceGuides["Online Fraud"],

        social: `
            <h3>📱 Social Media</h3>
            <p>Facebook, Instagram, WhatsApp, Telegram,
            YouTube, Google, Snapchat, TikTok, X এবং LinkedIn-এর
            security guides ব্যবহার করুন।</p>
        `,

        phishing:
            socialProblemGuides.phishing,

        evidence: `
            <h3>🧾 Evidence</h3>
            <p>Screenshots, URLs, usernames, messages,
            transaction IDs এবং date/time preserve করুন।</p>
        `

    };

    $$(".az-help-btn, [data-az-help]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const type =
                        button.dataset.azHelp ||
                        button.dataset.help;

                    showGuide(
                        "🌐 CyberCare A-Z Help",
                        azHelp[type] ||
                        `
                            <p>
                                এই topic-এর guide শীঘ্রই আরও
                                বিস্তারিত করা যাবে।
                            </p>
                        `
                    );

                }
            );

        });

    // =========================================================
    // DYNAMIC BUTTON BINDER
    // =========================================================

    function bindDynamicGuideButtons() {

        $$(".internal-guide-action")
            .forEach(button => {

                if (
                    button.dataset.bound === "true"
                ) return;

                button.dataset.bound = "true";

                button.addEventListener(
                    "click",
                    () => {

                        const action =
                            button.dataset.guideAction;

                        if (
                            action === "social"
                        ) {

                            showSocialMediaList();

                        }

                    }
                );

            });

    }

    function showSocialMediaList() {

        const platforms =
            Object.keys(
                socialMediaGuides
            );

        showGuide(
            "📱 Social Media Help Desk",
            `

                <p>
                    যে platform-এ সমস্যা হয়েছে সেটি নির্বাচন করুন:
                </p>

                <div class="social-platform-list">

                    ${platforms.map(platform => `

                        <button
                            class="social-platform-select"
                            data-platform-select="${platform}"
                            type="button"
                        >
                            ${socialMediaGuides[platform].title}
                        </button>

                    `).join("")}

                </div>

            `
        );

        setTimeout(() => {

            $$(".social-platform-select")
                .forEach(button => {

                    button.addEventListener(
                        "click",
                        () => {

                            openSocialDesk(
                                button.dataset.platformSelect
                            );

                        }
                    );

                });

        }, 50);

    }

    // =========================================================
    // GUIDE MODAL
    // =========================================================

    function showGuide(title, content) {

        $("#cybercareModal")?.remove();

        const modal =
            document.createElement("div");

        modal.id =
            "cybercareModal";

        modal.innerHTML = `

            <div class="guide-overlay">

                <div
                    class="guide-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="cybercareGuideTitle"
                >

                    <button
                        class="guide-close"
                        aria-label="Close"
                        type="button"
                    >
                        ✕
                    </button>

                    <h2 id="cybercareGuideTitle">
                        ${title}
                    </h2>

                    <div class="guide-content">
                        ${content}
                    </div>

                    <button
                        class="guide-ok"
                        type="button"
                    >
                        Got it
                    </button>

                </div>

            </div>

        `;

        document.body.appendChild(modal);

        $(".guide-close", modal)
            ?.addEventListener(
                "click",
                () => modal.remove()
            );

        $(".guide-ok", modal)
            ?.addEventListener(
                "click",
                () => modal.remove()
            );

        $(".guide-overlay", modal)
            ?.addEventListener(
                "click",
                event => {

                    if (
                        event.target.classList.contains(
                            "guide-overlay"
                        )
                    ) {

                        modal.remove();

                    }

                }
            );

        setTimeout(() => {

            $(".guide-close", modal)?.focus();

        }, 50);

        bindSocialProblemButtons(modal);
        bindDynamicGuideButtons();

    }

    // =========================================================
    // ESCAPE KEY
    // =========================================================

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeSideMenu();

                $("#cybercareModal")?.remove();

            }

        }
    );

    // =========================================================
    // MOBILE UX
    // =========================================================

    window.addEventListener(
        "popstate",
        () => {

            closeSideMenu();

            $("#cybercareModal")?.remove();

        }
    );

    // =========================================================
    // FORM PROTECTION
    // =========================================================

    document.addEventListener(
        "submit",
        event => {

            const form =
                event.target;

            if (
                form &&
                form.dataset.cybercareForm === "local"
            ) {

                event.preventDefault();

            }

        }
    );

    // =========================================================
    // GLOBAL ERROR PROTECTION
    // =========================================================

    window.addEventListener(
        "error",
        event => {

            console.warn(
                "CyberCare handled an error:",
                event.message
            );

        }
    );

    // =========================================================
    // INITIALIZE DYNAMIC FEATURES
    // =========================================================

    bindDynamicGuideButtons();

    // =========================================================
    // INITIALIZATION COMPLETE
    // =========================================================

    console.log(
        "🛡️ CyberCare Fully Loaded — Advanced Security System Ready"
    );

});
