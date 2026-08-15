// ============================================================
// CYBERCARE — ADVANCED COMPLETE SCRIPT.JS
// Scan + Search + Guides + Women Safety + Emergency
// Account Recovery + Blackmail + Harassment + Scam
// Financial Fraud + Phone Security + Privacy
// Bengali / English + Dark Mode + Safety Score
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

    function normalize(value) {
        return safeText(value).toLowerCase();
    }

    function scrollToSection(id) {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
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

        "Repeated Calls / Harassment":
            "বারবার ফোন / হয়রানি",

        "Photo Misuse":
            "ছবির অপব্যবহার",

        "Fake Profile":
            "ভুয়া প্রোফাইল",

        "Blackmail":
            "ব্ল্যাকমেইল",

        "Private Photo / Video Threat":
            "ব্যক্তিগত ছবি / ভিডিও নিয়ে হুমকি",

        "Online Stalking":
            "অনলাইন স্টকিং",

        "What Should I Do?":
            "আমি কী করব?",

        "Get Help →":
            "সাহায্য নিন →",

        "Open Tool":
            "টুল খুলুন",

        "Start Test":
            "পরীক্ষা শুরু করুন",

        "I Need Help Now":
            "আমার এখনই সাহায্য দরকার",

        "Find My Problem":
            "আমার সমস্যাটি খুঁজুন",

        "Never Share These":
            "এগুলো কখনো শেয়ার করবেন না",

        "Account Recovery":
            "অ্যাকাউন্ট রিকভারি",

        "Scam & Phishing":
            "স্ক্যাম ও ফিশিং",

        "Phone Security":
            "ফোন নিরাপত্তা",

        "Online & Financial Fraud":
            "অনলাইন ও আর্থিক প্রতারণা",

        "Suspicious Activity":
            "সন্দেহজনক কার্যকলাপ",

        "Cyber Safety Score":
            "সাইবার নিরাপত্তা স্কোর",

        "Evidence Checklist":
            "প্রমাণ সংরক্ষণের তালিকা",

        "Privacy Checklist":
            "প্রাইভেসি চেকলিস্ট"

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

            if (bengali && translations[original]) {

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

        /*
         * Search result / modal content is dynamically created.
         * Existing dynamic content is intentionally not destroyed.
         */
    });

    translatePage();

    // =========================================================
    // COMPLETE SEARCH DATABASE
    // =========================================================

    const problems = [

        {
            keywords: [
                "facebook",
                "instagram",
                "whatsapp",
                "google",
                "youtube",
                "hacked",
                "hack",
                "account hacked",
                "login",
                "ফেসবুক",
                "ইনস্টাগ্রাম",
                "হ্যাক",
                "অ্যাকাউন্ট"
            ],

            title: "🔐 Account Recovery",

            text: `
                <h3>যা করবেন</h3>

                <ol>
                    <li>প্রথমে আপনার email account নিরাপদ করুন।</li>
                    <li>Compromised password পরিবর্তন করুন।</li>
                    <li>Two-Factor Authentication (2FA) চালু করুন।</li>
                    <li>Active sessions / logged-in devices দেখুন।</li>
                    <li>অপরিচিত device remove করুন।</li>
                    <li>Recovery email ও phone number পরীক্ষা করুন।</li>
                    <li>সন্দেহজনক account activity পরীক্ষা করুন।</li>
                    <li>শুধু official recovery system ব্যবহার করুন।</li>
                </ol>

                <h3>কখনো করবেন না</h3>

                <ul>
                    <li>OTP কাউকে দেবেন না।</li>
                    <li>Password কাউকে দেবেন না।</li>
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
                "leak",
                "sextortion",
                "ব্ল্যাকমেইল",
                "হুমকি",
                "ব্যক্তিগত ছবি",
                "ব্যক্তিগত ভিডিও"
            ],

            title: "⚠️ Blackmail / Private Content Threat",

            text: `
                <h3>🚨 প্রথমে শান্ত থাকুন</h3>

                <ol>
                    <li>Blackmailer-কে টাকা দেবেন না।</li>
                    <li>আর কোনো ছবি বা ভিডিও পাঠাবেন না।</li>
                    <li>OTP, password বা personal information দেবেন না।</li>
                    <li>সব message ও threat-এর screenshot রাখুন।</li>
                    <li>Username, phone number ও profile URL সংরক্ষণ করুন।</li>
                    <li>আপনার account password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Evidence সংরক্ষণ করার পর report/block করুন।</li>
                    <li>বিশ্বস্ত একজন মানুষকে জানান।</li>
                </ol>
            `
        },

        {
            keywords: [
                "call",
                "calling",
                "harassment",
                "message",
                "disturb",
                "abuse",
                "phone call",
                "হয়রানি",
                "বারবার ফোন",
                "বিরক্ত"
            ],

            title: "📞 Repeated Calls / Harassment",

            text: `
                <ol>
                    <li>Call logs সংরক্ষণ করুন।</li>
                    <li>Message-এর screenshot নিন।</li>
                    <li>অপ্রয়োজনীয়ভাবে উত্তর দেবেন না।</li>
                    <li>প্রয়োজনে number/account block করুন।</li>
                    <li>Privacy settings review করুন।</li>
                    <li>Threat থাকলে evidence সংরক্ষণ করুন।</li>
                    <li>প্রয়োজনে official reporting channel ব্যবহার করুন।</li>
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
                "ছবির অপব্যবহার",
                "ছবি ছড়ানো"
            ],

            title: "📸 Photo Misuse",

            text: `
                <ol>
                    <li>Content-এর screenshot নিন।</li>
                    <li>Profile URL সংরক্ষণ করুন।</li>
                    <li>Post URL সংরক্ষণ করুন।</li>
                    <li>Username সংরক্ষণ করুন।</li>
                    <li>Platform-এ report করুন।</li>
                    <li>নিজের account secure করুন।</li>
                    <li>Guaranteed removal-এর নামে কাউকে টাকা দেবেন না।</li>
                </ol>
            `
        },

        {
            keywords: [
                "fake profile",
                "fake account",
                "impersonation",
                "ভুয়া প্রোফাইল",
                "ফেক অ্যাকাউন্ট",
                "নকল অ্যাকাউন্ট"
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
                "ইউপিআই",
                "ব্যাংক"
            ],

            title: "💳 Online & Financial Fraud",

            text: `
                <h3>🚨 যদি টাকা চলে যায়</h3>

                <ol>
                    <li>অবিলম্বে bank/payment provider-এর সঙ্গে যোগাযোগ করুন।</li>
                    <li>Transaction-টি fraudulent বলে জানান।</li>
                    <li>Transaction ID সংরক্ষণ করুন।</li>
                    <li>Screenshot সংরক্ষণ করুন।</li>
                    <li>Payment account secure করুন।</li>
                    <li>প্রয়োজন হলে official cybercrime reporting ব্যবহার করুন।</li>
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
                    <li>Sender-কে অন্য মাধ্যমে verify করুন।</li>
                    <li>Official app/site নিজে খুলে যাচাই করুন।</li>
                </ol>
            `
        },

        {
            keywords: [
                "phone",
                "spyware",
                "unknown app",
                "malware",
                "virus",
                "স্পাইওয়্যার",
                "ভাইরাস",
                "মোবাইল"
            ],

            title: "📱 Phone Security",

            text: `
                <ol>
                    <li>Unknown applications পরীক্ষা করুন।</li>
                    <li>App permissions review করুন।</li>
                    <li>Accessibility permission পরীক্ষা করুন।</li>
                    <li>Device Administrator access পরীক্ষা করুন।</li>
                    <li>Phone software update করুন।</li>
                    <li>সন্দেহজনক application remove করুন।</li>
                    <li>Trusted device থেকে গুরুত্বপূর্ণ account secure করুন।</li>
                </ol>
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
                <h3>যা publicly visible আছে তা পরীক্ষা করুন</h3>

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
                    <li>Location sharing বন্ধ বা সীমিত করুন।</li>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Active sessions পরীক্ষা করুন।</li>
                    <li>Evidence সংরক্ষণ করুন।</li>
                    <li>Account block/report করুন।</li>
                </ol>
            `
        },

        {
            keywords: [
                "otp",
                "password",
                "pin",
                "credential",
                "পাসওয়ার্ড",
                "পিন"
            ],

            title: "🔑 OTP / Password Safety",

            text: `
                <ul>
                    <li>OTP কখনো কাউকে দেবেন না।</li>
                    <li>UPI PIN কাউকে দেবেন না।</li>
                    <li>Password কাউকে দেবেন না।</li>
                    <li>Recovery code কাউকে দেবেন না।</li>
                    <li>Unexpected login request হলে নিজে official app খুলে verify করুন।</li>
                </ul>
            `
        }

    ];

    // =========================================================
    // SEARCH ENGINE
    // =========================================================

    function performSearch(query) {

        if (!searchResults) return;

        searchResults.innerHTML = "";

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
                        Try searching:
                        blackmail, hacked, UPI fraud,
                        fake profile, harassment,
                        phishing, photo misuse,
                        phone security, stalking.
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

                <button class="result-help">
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

    }

    problemSearch?.addEventListener(
        "input",
        event => {
            performSearch(event.target.value);
        }
    );

    // =========================================================
    // SERVICE GUIDES
    // =========================================================

    const serviceGuides = {

        "Account Recovery": `
            <h3>🔐 Account Recovery</h3>

            <ol>
                <li>Secure your email account first.</li>
                <li>Change your compromised password.</li>
                <li>Enable 2FA.</li>
                <li>Review active sessions.</li>
                <li>Remove unknown devices.</li>
                <li>Check recovery email and phone.</li>
                <li>Review suspicious activity.</li>
                <li>Use only the official recovery system.</li>
            </ol>

            <h3>🚫 Never</h3>

            <ul>
                <li>Never share OTP.</li>
                <li>Never share recovery codes.</li>
                <li>Never share passwords.</li>
                <li>Never pay someone promising guaranteed recovery.</li>
            </ul>
        `,

        "Scam & Phishing": `
            <h3>🎣 Scam & Phishing</h3>

            <ol>
                <li>Stop interacting with the suspicious sender.</li>
                <li>Do not click suspicious links.</li>
                <li>Do not share OTP.</li>
                <li>Do not share passwords.</li>
                <li>Do not share UPI PIN.</li>
                <li>Verify the sender independently.</li>
                <li>If money was lost, contact your bank/payment provider immediately.</li>
            </ol>
        `,

        "Phone Security": `
            <h3>📱 Phone Security</h3>

            <ol>
                <li>Check installed applications.</li>
                <li>Review permissions.</li>
                <li>Check Accessibility access.</li>
                <li>Check Device Administrator access.</li>
                <li>Update the device.</li>
                <li>Remove suspicious applications.</li>
                <li>Secure important accounts from a trusted device.</li>
            </ol>
        `,

        "Online Fraud": `
            <h3>💳 Online & Financial Fraud</h3>

            <h3>🚨 If money has been lost</h3>

            <ol>
                <li>Contact your bank immediately.</li>
                <li>Report the transaction as fraudulent.</li>
                <li>Save the transaction ID.</li>
                <li>Save screenshots.</li>
                <li>Secure payment accounts.</li>
                <li>Use official cybercrime reporting channels.</li>
            </ol>

            <h3>Never share</h3>

            <ul>
                <li>OTP</li>
                <li>UPI PIN</li>
                <li>Password</li>
                <li>Banking PIN</li>
            </ul>
        `,

        "Suspicious Activity": `
            <h3>🕵️ Suspicious Activity</h3>

            <ul>
                <li>Unknown login alert</li>
                <li>Unknown device</li>
                <li>Password reset you did not request</li>
                <li>Messages sent without permission</li>
                <li>Unexpected account changes</li>
            </ul>

            <h3>What to do</h3>

            <ol>
                <li>Change password.</li>
                <li>Enable 2FA.</li>
                <li>Review active sessions.</li>
                <li>Remove unknown devices.</li>
                <li>Check recovery information.</li>
            </ol>
        `,

        "Emergency Help": `
            <h3>🚨 Emergency Cyber Response</h3>

            <ol>
                <li>Stop sending money or sensitive information.</li>
                <li>Secure important accounts.</li>
                <li>Preserve evidence.</li>
                <li>Report through official channels.</li>
                <li>Tell someone you trust.</li>
            </ol>

            <p>
                If there is immediate physical danger,
                prioritize your personal safety first.
            </p>
        `

    };

    $$(".help-btn").forEach(button => {

        button.addEventListener("click", () => {

            const service =
                button.dataset.service;

            showGuide(
                service,
                serviceGuides[service] ||
                "<p>Use the official service/provider for help.</p>"
            );

        });

    });

    // =========================================================
    // WOMEN SAFETY GUIDES
    // =========================================================

    const womenGuides = {

        harassment: {

            title: "📞 Repeated Calls / Harassment",

            text: `
                <h3>প্রথমে যা করবেন</h3>

                <ol>
                    <li>ভয় পেয়ে কোনো সিদ্ধান্ত নেবেন না।</li>
                    <li>Call logs সংরক্ষণ করুন।</li>
                    <li>Messages-এর screenshot নিন।</li>
                    <li>Username ও profile URL সংরক্ষণ করুন।</li>
                    <li>প্রয়োজনে block করুন।</li>
                    <li>Privacy settings review করুন।</li>
                    <li>Threat থাকলে evidence সংরক্ষণ করুন।</li>
                    <li>বিশ্বস্ত মানুষকে জানান।</li>
                    <li>প্রয়োজনে appropriate official reporting channel ব্যবহার করুন।</li>
                </ol>
            `
        },

        photo: {

            title: "📸 Photo Misuse",

            text: `
                <ol>
                    <li>Content-এর screenshot নিন।</li>
                    <li>Profile URL সংরক্ষণ করুন।</li>
                    <li>Post URL সংরক্ষণ করুন।</li>
                    <li>Username সংরক্ষণ করুন।</li>
                    <li>Platform-এর reporting system ব্যবহার করুন।</li>
                    <li>নিজের account secure করুন।</li>
                    <li>Guaranteed removal-এর জন্য কাউকে টাকা দেবেন না।</li>
                </ol>
            `
        },

        fakeprofile: {

            title: "🎭 Fake Profile",

            text: `
                <ol>
                    <li>Fake profile-এর screenshot নিন।</li>
                    <li>Profile URL সংরক্ষণ করুন।</li>
                    <li>Username সংরক্ষণ করুন।</li>
                    <li>Impersonation হিসেবে report করুন।</li>
                    <li>প্রয়োজনে trusted contacts-কে জানান।</li>
                    <li>নিজের account secure করুন।</li>
                </ol>
            `
        },

        blackmail: {

            title: "⚠️ Blackmail — Complete Safety Guide",

            text: `
                <h3>🚨 প্রথমে: Panic করবেন না</h3>

                <p>
                    Blackmailer সাধারণত ভয় এবং urgency ব্যবহার করে।
                    চাপের মধ্যে টাকা বা আরও content পাঠাবেন না।
                </p>

                <h3>1. টাকা দেবেন না</h3>

                <p>
                    টাকা দিলেই threat বন্ধ হবে—এমন কোনো নিশ্চয়তা নেই।
                </p>

                <h3>2. আর কোনো content পাঠাবেন না</h3>

                <p>
                    নতুন ছবি, ভিডিও, OTP, password বা personal
                    information পাঠাবেন না।
                </p>

                <h3>3. Evidence সংরক্ষণ করুন</h3>

                <ul>
                    <li>Messages</li>
                    <li>Screenshots</li>
                    <li>Username</li>
                    <li>Profile URL</li>
                    <li>Phone number</li>
                    <li>Payment requests</li>
                    <li>Date এবং time</li>
                </ul>

                <h3>4. Account secure করুন</h3>

                <ol>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Active sessions দেখুন।</li>
                    <li>Unknown devices remove করুন।</li>
                    <li>Recovery information পরীক্ষা করুন।</li>
                </ol>

                <h3>5. Report এবং Block</h3>

                <p>
                    Evidence সংরক্ষণ করার পর platform-এর
                    official reporting system ব্যবহার করুন।
                </p>

                <h3>6. একা থাকবেন না</h3>

                <p>
                    Trusted person-এর সঙ্গে বিষয়টি share করুন।
                </p>

                <h3>7. টাকা পাঠিয়ে থাকলে</h3>

                <p>
                    Bank/payment provider-এর সঙ্গে দ্রুত যোগাযোগ
                    করুন এবং transaction information সংরক্ষণ করুন।
                </p>

                <h3>8. Private content প্রকাশ হলে</h3>

                <p>
                    Screenshot এবং URL সংরক্ষণ করে platform-এর
                    official privacy/abuse reporting system ব্যবহার করুন।
                </p>

                <h3>❤️ মনে রাখবেন</h3>

                <p>
                    Blackmail হওয়া আপনার দোষ নয়।
                </p>
            `
        },

        private: {

            title: "🔒 Private Photo / Video Threat",

            text: `
                <ol>
                    <li>আর কোনো content পাঠাবেন না।</li>
                    <li>চাপের মধ্যে টাকা দেবেন না।</li>
                    <li>Threat এবং messages সংরক্ষণ করুন।</li>
                    <li>Username এবং URL সংরক্ষণ করুন।</li>
                    <li>Account secure করুন।</li>
                    <li>Content/account report করুন।</li>
                    <li>Trusted person-কে জানান।</li>
                </ol>
            `
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
                    <li>Work / school information</li>
                    <li>Friends / family information</li>
                </ul>

                <h3>তারপর</h3>

                <ol>
                    <li>Location sharing review করুন।</li>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Active sessions পরীক্ষা করুন।</li>
                    <li>Evidence সংরক্ষণ করুন।</li>
                    <li>Account block/report করুন।</li>
                </ol>
            `
        }

    };

    $$(".women-btn").forEach(button => {

        button.addEventListener("click", () => {

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

        });

    });

    // =========================================================
    // ADVANCED SCAN SYSTEM
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
        "Account security",
        "Password safety",
        "Two-factor authentication",
        "Active sessions",
        "Unknown devices",
        "App permissions",
        "Privacy settings",
        "Suspicious activity"
    ];

    function runSecurityScan() {

        if (!scanStatus) {
            showScanFallback();
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
            scanProgressBar.style.width = "0%";
        }

        if (scanStep) {
            scanStep.textContent =
                "Preparing security scan...";
        }

        const timer =
            setInterval(() => {

                progress += 12;

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
                            "Scan completed.";
                    }

                    showScanResult();

                }

            }, 350);

    }

    function showScanResult() {

        if (!scanResult) {
            showScanFallback();
            return;
        }

        scanResult.classList.add("active");
        scanResult.classList.add("safe");

        scanResult.innerHTML = `

            <h3>🛡️ Scan Complete</h3>

            <p>
                CyberCare-এর local safety scan সম্পন্ন হয়েছে।
            </p>

            <ul>
                <li>Account security review করুন</li>
                <li>2FA চালু আছে কিনা পরীক্ষা করুন</li>
                <li>Unknown devices remove করুন</li>
                <li>App permissions review করুন</li>
                <li>Suspicious login/activity পরীক্ষা করুন</li>
                <li>Important passwords unique রাখুন</li>
            </ul>

            <div class="scan-limit">
                ℹ️ এই scan আপনার device বা account-এর
                server-side security নিজে থেকে verify করতে পারে না।
                এটি একটি safety checklist, antivirus বা hacking detector নয়।
            </div>

        `;

    }

    function showScanFallback() {

        showGuide(
            "🛡️ CyberCare Security Scan",
            `
                <h3>Scan Checklist</h3>

                <ol>
                    <li>Important account passwords review করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Active sessions পরীক্ষা করুন।</li>
                    <li>Unknown devices remove করুন।</li>
                    <li>App permissions review করুন।</li>
                    <li>Location sharing review করুন।</li>
                    <li>Suspicious applications পরীক্ষা করুন।</li>
                    <li>Recent security alerts পরীক্ষা করুন।</li>
                </ol>

                <p>
                    এই scan local safety checklist হিসেবে কাজ করে;
                    এটি কোনো account server-এ প্রবেশ করে পরীক্ষা করে না।
                </p>
            `
        );

    }

    scanButton?.addEventListener(
        "click",
        runSecurityScan
    );

    manualScanButton?.addEventListener(
        "click",
        () => {

            showGuide(
                "🔍 Manual Security Check",
                `
                    <h3>নিজে এই ৮টি জিনিস পরীক্ষা করুন</h3>

                    <ol>
                        <li>Password unique কিনা?</li>
                        <li>2FA চালু আছে?</li>
                        <li>Unknown device আছে?</li>
                        <li>Unknown app আছে?</li>
                        <li>অপ্রয়োজনীয় permissions আছে?</li>
                        <li>Location sharing চালু আছে?</li>
                        <li>Recent suspicious login আছে?</li>
                        <li>Recovery email/phone সঠিক আছে?</li>
                    </ol>
                `
            );

        }
    );

    // =========================================================
    // SECURITY TOOLS
    // =========================================================

    $$(".tool-btn, .security-tool-btn").forEach(button => {

        button.addEventListener("click", () => {

            const tool =
                button.dataset.tool;

            if (tool) {
                openTool(tool);
            }

        });

    });

    function openTool(tool) {

        const tools = {

            scam: `
                <h3>🔎 Scam Checker</h3>

                <p>
                    যে warning signs প্রযোজ্য সেগুলো select করুন।
                </p>

                <div class="tool-checks">

                    <label>
                        <input type="checkbox">
                        Urgent pressure
                    </label>

                    <label>
                        <input type="checkbox">
                        OTP / password চাইছে
                    </label>

                    <label>
                        <input type="checkbox">
                        Suspicious link
                    </label>

                    <label>
                        <input type="checkbox">
                        Advance payment চাইছে
                    </label>

                    <label>
                        <input type="checkbox">
                        Guaranteed prize/profit
                    </label>

                    <label>
                        <input type="checkbox">
                        Fake authority/support
                    </label>

                    <label>
                        <input type="checkbox">
                        অস্বাভাবিক payment request
                    </label>

                    <label>
                        <input type="checkbox">
                        Account বন্ধ হয়ে যাবে বলে চাপ
                    </label>

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
                    এই checker local browser-এ কাজ করে।
                    Password কোথাও পাঠানো হয় না।
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
                <h3>🔗 URL Safety Guide</h3>

                <ol>
                    <li>Domain spelling পরীক্ষা করুন।</li>
                    <li>অদ্ভুত character আছে কিনা দেখুন।</li>
                    <li>Shortened link-এর ক্ষেত্রে সতর্ক থাকুন।</li>
                    <li>শুধু logo দেখে বিশ্বাস করবেন না।</li>
                    <li>Unexpected page-এ credentials দেবেন না।</li>
                    <li>Official app/site নিজে খুলে login করুন।</li>
                </ol>

                <div class="scan-limit">
                    CyberCare কোনো website-কে server-side scan করে
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
                    Original evidence যতটা সম্ভব preserve করুন।
                </p>
            `,

            score: `
                <h3>🛡️ Cyber Safety Score</h3>

                <div class="score-checks">

                    <label>
                        <input type="checkbox">
                        I use unique passwords
                    </label>

                    <label>
                        <input type="checkbox">
                        I use 2FA
                    </label>

                    <label>
                        <input type="checkbox">
                        I never share OTP
                    </label>

                    <label>
                        <input type="checkbox">
                        I review active sessions
                    </label>

                    <label>
                        <input type="checkbox">
                        I review app permissions
                    </label>

                    <label>
                        <input type="checkbox">
                        I keep my phone updated
                    </label>

                    <label>
                        <input type="checkbox">
                        I verify payment requests
                    </label>

                    <label>
                        <input type="checkbox">
                        I know how to report cybercrime
                    </label>

                    <label>
                        <input type="checkbox">
                        I review privacy settings
                    </label>

                    <label>
                        <input type="checkbox">
                        I know how to preserve evidence
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

            blackmail: womenGuides.blackmail.text,

            harassment: womenGuides.harassment.text,

            recovery: serviceGuides["Account Recovery"],

            phone: serviceGuides["Phone Security"],

            financial: serviceGuides["Online Fraud"]

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
            checks.filter(check => check.checked).length;

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
                    Sensitive information বা টাকা দেওয়ার আগে verify করুন।
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
                    টাকা/OTP/password দেবেন না এবং official channel দিয়ে verify করুন।
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
                "🔴 Very weak — use a much longer unique password.";

        } else if (score <= 2) {

            message =
                "🔴 Weak — make it longer and more unique.";

        } else if (score <= 4) {

            message =
                "🟡 Moderate — improve length and uniqueness.";

        } else {

            message =
                "🟢 Strong structure — keep it private and unique.";

        }

        result.innerHTML = `
            <div class="scan-limit">
                <strong>${message}</strong>
                <p>
                    Password reuse করবেন না এবং গুরুত্বপূর্ণ account-এ 2FA ব্যবহার করুন।
                </p>
            </div>
        `;

        // Clear the field after analysis for privacy.
        setTimeout(() => {
            input.value = "";
        }, 500);

    }

    // =========================================================
    // CYBER SAFETY SCORE
    // =========================================================

    function calculateSafetyScore() {

        const checks =
            $$("#cybercareModal .score-checks input");

        const total =
            checks.length;

        if (!total) return;

        const yes =
            checks.filter(check => check.checked).length;

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
                "🟢 Excellent basic safety habits";

            advice =
                "আপনার basic security habits ভালো। নিয়মিত review চালিয়ে যান।";

        } else if (percentage >= 60) {

            level =
                "🟡 Good start";

            advice =
                "আরও কয়েকটি security habit improve করলে নিরাপত্তা আরও ভালো হবে।";

        } else if (percentage >= 40) {

            level =
                "🟠 Needs improvement";

            advice =
                "Password, 2FA, privacy এবং account security আগে ঠিক করুন।";

        } else {

            level =
                "🔴 High improvement needed";

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
    // LEARNING SECTION
    // =========================================================

    const learningContent = {

        password: `
            <h3>🔐 Password Safety</h3>

            <p>
                গুরুত্বপূর্ণ account-এর জন্য long এবং unique password ব্যবহার করুন।
            </p>

            <ul>
                <li>Password reuse করবেন না।</li>
                <li>2FA ব্যবহার করুন।</li>
                <li>Password কাউকে দেবেন না।</li>
                <li>Recovery codes নিরাপদে রাখুন।</li>
            </ul>
        `,

        "2fa": `
            <h3>🔑 Two-Factor Authentication</h3>

            <p>
                2FA password-এর পাশাপাশি অতিরিক্ত security layer তৈরি করে।
            </p>

            <ul>
                <li>Email</li>
                <li>Social media</li>
                <li>Financial services</li>
                <li>Important cloud accounts</li>
            </ul>
        `,

        phishing: `
            <h3>🎣 Phishing</h3>

            <p>
                Phishing হলো এমন একটি প্রতারণা যেখানে আপনাকে
                sensitive information দেওয়ানোর চেষ্টা করা হয়।
            </p>

            <ul>
                <li>Unexpected link-এ click করবেন না।</li>
                <li>OTP দেবেন না।</li>
                <li>Sender independently verify করুন।</li>
                <li>Official website নিজে খুলুন।</li>
            </ul>
        `,

        privacy: `
            <h3>🔒 Privacy</h3>

            <p>
                কে আপনার information, location এবং profile দেখতে পারে
                তা নিয়মিত review করুন।
            </p>
        `,

        phone: `
            <h3>📱 Phone Security</h3>

            <ul>
                <li>Phone updated রাখুন।</li>
                <li>Unknown apps remove করুন।</li>
                <li>Permissions review করুন।</li>
                <li>Accessibility access পরীক্ষা করুন।</li>
                <li>Device Administrator access পরীক্ষা করুন।</li>
            </ul>
        `,

        financial: `
            <h3>💳 Financial Safety</h3>

            <ul>
                <li>OTP কখনো শেয়ার করবেন না।</li>
                <li>UPI PIN কখনো শেয়ার করবেন না।</li>
                <li>Unexpected payment request verify করুন।</li>
                <li>Fraud হলে bank/payment provider-এর সঙ্গে দ্রুত যোগাযোগ করুন।</li>
            </ul>
        `

    };

    $$(".learn-card").forEach(card => {

        card.addEventListener("click", () => {

            const topic =
                card.dataset.learn;

            showGuide(
                "🎓 Learn Cybersecurity",
                learningContent[topic] ||
                "<p>Learn safe digital habits.</p>"
            );

        });

    });

    // =========================================================
    // EMERGENCY RESPONSE
    // =========================================================

    const emergencyGuides = {

        account: `
            <h3>🔐 Account Compromised</h3>

            <ol>
                <li>Email account secure করুন।</li>
                <li>Password পরিবর্তন করুন।</li>
                <li>2FA চালু করুন।</li>
                <li>Active sessions review করুন।</li>
                <li>Unknown devices remove করুন।</li>
                <li>Recovery information check করুন।</li>
                <li>Official recovery system ব্যবহার করুন।</li>
            </ol>
        `,

        money: `
            <h3>💳 Money at Risk</h3>

            <ol>
                <li>Bank/payment provider-এর সঙ্গে অবিলম্বে যোগাযোগ করুন।</li>
                <li>Fraudulent transaction report করুন।</li>
                <li>Transaction ID সংরক্ষণ করুন।</li>
                <li>Screenshot রাখুন।</li>
                <li>Payment account secure করুন।</li>
                <li>Official cybercrime reporting ব্যবহার করুন।</li>
            </ol>
        `,

        blackmail: `
            <h3>⚠️ Blackmail / Threat</h3>

            <ol>
                <li>টাকা দেবেন না।</li>
                <li>আর content পাঠাবেন না।</li>
                <li>Evidence সংরক্ষণ করুন।</li>
                <li>Account secure করুন।</li>
                <li>Report এবং block করুন।</li>
                <li>Trusted person-কে জানান।</li>
                <li>প্রয়োজনে appropriate official help নিন।</li>
            </ol>
        `,

        phone: `
            <h3>📱 Phone Compromised</h3>

            <ol>
                <li>সন্দেহজনক application ব্যবহার বন্ধ করুন।</li>
                <li>Permissions review করুন।</li>
                <li>Accessibility access পরীক্ষা করুন।</li>
                <li>Device Administrator access পরীক্ষা করুন।</li>
                <li>Device update করুন।</li>
                <li>Trusted device থেকে গুরুত্বপূর্ণ accounts secure করুন।</li>
            </ol>
        `,

        harassment: womenGuides.harassment.text,

        stalking: womenGuides.stalking.text

    };

    $$("[data-emergency]").forEach(button => {

        button.addEventListener("click", () => {

            const type =
                button.dataset.emergency;

            showGuide(
                "🚨 Emergency Cyber Response",
                emergencyGuides[type] ||
                `
                    <p>
                        নিজের নিরাপত্তাকে priority দিন এবং
                        official help ব্যবহার করুন।
                    </p>
                `
            );

        });

    });

    // =========================================================
    // INDIA HELP SECTION
    // =========================================================

    $$(".india-btn").forEach(button => {

        button.addEventListener("click", () => {

            const type =
                button.dataset.india ||
                button.dataset.help;

            if (!type) return;

            if (type === "cybercrime") {

                showGuide(
                    "🇮🇳 India Cybercrime Help",
                    `
                        <h3>Cybercrime Reporting</h3>

                        <p>
                            Online financial fraud, account abuse,
                            blackmail বা অন্য cybercrime হলে
                            official government reporting channel ব্যবহার করুন।
                        </p>

                        <p>
                            জরুরি financial fraud-এর ক্ষেত্রে
                            bank/payment provider-এর সঙ্গেও দ্রুত যোগাযোগ করুন।
                        </p>

                        <p>
                            আপনার evidence যেমন screenshots,
                            URLs, usernames, transaction IDs সংরক্ষণ করুন।
                        </p>
                    `
                );

            }

        });

    });

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

        // Focus close button for accessibility.
        setTimeout(() => {
            $(".guide-close", modal)?.focus();
        }, 50);

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
    // ENTER KEY FOR SEARCH
    // =========================================================

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
    // BACK BUTTON / MOBILE UX
    // =========================================================

    window.addEventListener(
        "popstate",
        () => {

            closeSideMenu();

            $("#cybercareModal")?.remove();

        }
    );

    // =========================================================
    // PREVENT ACCIDENTAL FORM SUBMISSION
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
    // INITIALIZATION COMPLETE
    // =========================================================

    console.log(
        "🛡️ CyberCare Advanced Security System Loaded"
    );

});
