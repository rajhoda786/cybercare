// ============================================================
// CYBERCARE — ADVANCED COMPLETE SCRIPT.JS v2
// Search + Smart Guides + Women's Safety + Emergency
// Account Recovery + Blackmail + Harassment + Scam
// Financial Fraud + Phone Security + Privacy + Evidence
// Password Checker + Scam Analyzer + Safety Score
// Bengali / English + Dark Mode + Mobile UX
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
        safeText(value)
            .toLowerCase()
            .replace(/\s+/g, " ");

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
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function copyText(text) {
        if (!navigator.clipboard) {
            showGuide(
                "📋 Copy",
                `<p>${escapeHTML(text)}</p>`
            );
            return;
        }

        navigator.clipboard.writeText(text)
            .then(() => {
                showToast("Copied successfully.");
            })
            .catch(() => {
                showToast("Copy failed. Please copy manually.");
            });
    }

    function showToast(message) {

        $(".cybercare-toast")?.remove();

        const toast =
            document.createElement("div");

        toast.className =
            "cybercare-toast";

        toast.textContent =
            message;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add("show");
        }, 20);

        setTimeout(() => {
            toast.remove();
        }, 2600);
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

    menuBtn?.addEventListener(
        "click",
        openMenu
    );

    closeMenu?.addEventListener(
        "click",
        closeSideMenu
    );

    menuOverlay?.addEventListener(
        "click",
        closeSideMenu
    );

    // =========================================================
    // MENU NAVIGATION
    // =========================================================

    $$(".menu-item").forEach(item => {

        item.addEventListener("click", () => {

            const target =
                item.dataset.menu;

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

    emergencyBtn?.addEventListener(
        "click",
        () => {

            document
                .querySelector(".emergency-section")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

        }
    );

    quickHelpBtn?.addEventListener(
        "click",
        () => {

            document
                .querySelector(".search-section")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            setTimeout(() => {
                problemSearch?.focus();
            }, 500);

        }
    );

    // =========================================================
    // DARK MODE
    // =========================================================

    let darkMode =
        localStorage.getItem(
            "cybercare-theme"
        ) === "dark";

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

    themeBtn?.addEventListener(
        "click",
        () => {

            darkMode = !darkMode;

            localStorage.setItem(
                "cybercare-theme",
                darkMode
                    ? "dark"
                    : "light"
            );

            applyTheme();

        }
    );

    // =========================================================
    // LANGUAGE SYSTEM
    // =========================================================

    let bengali =
        localStorage.getItem(
            "cybercare-language"
        ) === "bn";

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
            "প্রাইভেসি চেকলিস্ট",

        "Learn More":
            "আরও জানুন",

        "View Full Safety Guide →":
            "সম্পূর্ণ নিরাপত্তা গাইড দেখুন →"

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
                bengali
                    ? "বাংলা"
                    : "EN";

        }

        localStorage.setItem(
            "cybercare-language",
            bengali
                ? "bn"
                : "en"
        );

    }

    languageBtn?.addEventListener(
        "click",
        () => {

            bengali = !bengali;

            translatePage();

        }
    );

    translatePage();

    // =========================================================
    // COMPLETE PROBLEM DATABASE
    // =========================================================

    const problems = [

        // -----------------------------------------------------
        // ACCOUNT RECOVERY
        // -----------------------------------------------------

        {
            id: "account-recovery",

            keywords: [
                "facebook hacked",
                "instagram hacked",
                "whatsapp hacked",
                "google hacked",
                "youtube hacked",
                "account hacked",
                "hacked",
                "hack",
                "login problem",
                "cannot login",
                "account recovery",
                "ফেসবুক হ্যাক",
                "ইনস্টাগ্রাম হ্যাক",
                "হোয়াটসঅ্যাপ হ্যাক",
                "অ্যাকাউন্ট হ্যাক",
                "হ্যাক",
                "লগইন"
            ],

            title: "🔐 Account Recovery",

            text: `
                <div class="guide-priority danger">
                    🚨 যদি মনে হয় আপনার account অন্য কেউ ব্যবহার করছে,
                    প্রথমে email এবং password নিরাপদ করুন।
                </div>

                <h3>1️⃣ এখনই যা করবেন</h3>

                <ol>
                    <li>একটি trusted device ব্যবহার করুন।</li>
                    <li>আপনার primary email account secure করুন।</li>
                    <li>Compromised password পরিবর্তন করুন।</li>
                    <li>সব active sessions / logged-in devices পরীক্ষা করুন।</li>
                    <li>অপরিচিত device logout/remove করুন।</li>
                    <li>Recovery email ও phone number পরীক্ষা করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>অপরিচিত third-party apps/access remove করুন।</li>
                </ol>

                <h3>🔍 Account পরিবর্তন হয়েছে কিনা দেখুন</h3>

                <ul>
                    <li>আপনার profile name বদলেছে?</li>
                    <li>Email বা phone number বদলেছে?</li>
                    <li>Unknown login alert এসেছে?</li>
                    <li>আপনার account থেকে message/post গেছে?</li>
                    <li>Password reset request আপনি করেননি?</li>
                    <li>অপরিচিত device দেখা যাচ্ছে?</li>
                </ul>

                <h3>🚫 কখনো করবেন না</h3>

                <ul>
                    <li>OTP কাউকে দেবেন না।</li>
                    <li>Recovery code শেয়ার করবেন না।</li>
                    <li>Password কাউকে দেবেন না।</li>
                    <li>Random "account recovery expert"-কে টাকা দেবেন না।</li>
                    <li>অপরিচিত recovery link-এ login করবেন না।</li>
                </ul>

                <h3>🧾 Evidence রাখুন</h3>

                <ul>
                    <li>Login alerts</li>
                    <li>Unknown device</li>
                    <li>Password reset emails</li>
                    <li>Suspicious messages</li>
                    <li>Profile changes</li>
                    <li>Date এবং time</li>
                </ul>
            `
        },

        // -----------------------------------------------------
        // BLACKMAIL
        // -----------------------------------------------------

        {
            id: "blackmail",

            keywords: [
                "blackmail",
                "sextortion",
                "private photo threat",
                "private video threat",
                "photo blackmail",
                "video blackmail",
                "leak",
                "threat",
                "ব্ল্যাকমেইল",
                "সেক্সটর্শন",
                "ছবি দিয়ে হুমকি",
                "ভিডিও দিয়ে হুমকি",
                "ছবি ছড়িয়ে দেওয়ার হুমকি",
                "হুমকি"
            ],

            title: "⚠️ Blackmail / Private Content Threat",

            text: `
                <div class="guide-priority danger">
                    🚨 Panic করবেন না। Blackmailer-এর চাপের মধ্যে
                    টাকা বা আরও content পাঠানো বন্ধ করুন।
                </div>

                <h3>1️⃣ টাকা দেবেন না</h3>

                <p>
                    টাকা দিলেই blackmailer থেমে যাবে—এমন কোনো নিশ্চয়তা নেই।
                    বরং নতুন দাবি আসতে পারে।
                </p>

                <h3>2️⃣ আর কোনো ছবি/ভিডিও পাঠাবেন না</h3>

                <ul>
                    <li>নতুন private photo পাঠাবেন না।</li>
                    <li>নতুন video পাঠাবেন না।</li>
                    <li>OTP পাঠাবেন না।</li>
                    <li>Password পাঠাবেন না।</li>
                    <li>Personal documents পাঠাবেন না।</li>
                    <li>Location শেয়ার করবেন না।</li>
                </ul>

                <h3>3️⃣ Evidence সংরক্ষণ করুন</h3>

                <ul>
                    <li>Threat messages</li>
                    <li>Chat screenshots</li>
                    <li>Username</li>
                    <li>Profile URL</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>Payment request</li>
                    <li>Transaction ID</li>
                    <li>Date এবং time</li>
                </ul>

                <h3>4️⃣ Account নিরাপদ করুন</h3>

                <ol>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Active sessions পরীক্ষা করুন।</li>
                    <li>Unknown devices remove করুন।</li>
                    <li>Recovery email/phone পরীক্ষা করুন।</li>
                    <li>Privacy settings শক্ত করুন।</li>
                </ol>

                <h3>5️⃣ তারপর Report + Block</h3>

                <p>
                    Evidence সংরক্ষণ করার পরে platform-এর
                    official reporting system ব্যবহার করুন।
                </p>

                <h3>6️⃣ Content প্রকাশ হয়ে গেলে</h3>

                <ol>
                    <li>Content-এর screenshot নিন।</li>
                    <li>URL সংরক্ষণ করুন।</li>
                    <li>Account/profile URL সংরক্ষণ করুন।</li>
                    <li>Platform-এর privacy/abuse reporting ব্যবহার করুন।</li>
                    <li>যারা content পেয়েছে তাদের trusted ভাবে জানাতে পারেন
                        যেন তারা content forward না করে।</li>
                </ol>

                <h3>7️⃣ টাকা পাঠিয়ে থাকলে</h3>

                <ol>
                    <li>Bank/payment provider-এর সঙ্গে দ্রুত যোগাযোগ করুন।</li>
                    <li>Transaction ID দিন।</li>
                    <li>Fraud হিসেবে report করুন।</li>
                    <li>আর কোনো payment করবেন না।</li>
                </ol>

                <h3>❤️ মনে রাখবেন</h3>

                <p>
                    Blackmail হওয়া আপনার দোষ নয়।
                    একা বিষয়টি সামলাতে হবে না।
                    একজন trusted person-কে জানান।
                </p>
            `
        },

        // -----------------------------------------------------
        // HARASSMENT
        // -----------------------------------------------------

        {
            id: "harassment",

            keywords: [
                "harassment",
                "repeated calls",
                "repeated phone",
                "abuse",
                "bad message",
                "bad messages",
                "disturb",
                "birokto",
                "হয়রানি",
                "বারবার ফোন",
                "বিরক্ত",
                "খারাপ মেসেজ",
                "অশ্লীল মেসেজ"
            ],

            title: "📞 Repeated Calls / Online Harassment",

            text: `
                <div class="guide-priority warning">
                    ⚠️ Threat বা immediate danger থাকলে শুধু block করে
                    থেমে যাবেন না—evidence সংরক্ষণ করুন।
                </div>

                <h3>1️⃣ Evidence তৈরি করুন</h3>

                <ul>
                    <li>Call logs screenshot করুন।</li>
                    <li>Messages screenshot করুন।</li>
                    <li>Username সংরক্ষণ করুন।</li>
                    <li>Profile URL সংরক্ষণ করুন।</li>
                    <li>Phone number সংরক্ষণ করুন।</li>
                    <li>Date/time লিখে রাখুন।</li>
                </ul>

                <h3>2️⃣ উত্তর দেওয়ার আগে ভাবুন</h3>

                <p>
                    Harasser-এর সঙ্গে দীর্ঘ argument বা threat exchange
                    করবেন না। প্রয়োজনে response বন্ধ করুন।
                </p>

                <h3>3️⃣ Block / Restrict</h3>

                <ul>
                    <li>Phone number block করুন।</li>
                    <li>Social account block/restrict করুন।</li>
                    <li>Message request সীমিত করুন।</li>
                    <li>Unknown calls filter করুন, যদি device-এ option থাকে।</li>
                </ul>

                <h3>4️⃣ Privacy শক্ত করুন</h3>

                <ul>
                    <li>Who can message you</li>
                    <li>Who can call you</li>
                    <li>Who can see your phone number</li>
                    <li>Who can see your location</li>
                    <li>Who can tag/mention you</li>
                </ul>

                <h3>🚨 Threat থাকলে</h3>

                <p>
                    Threat-এর evidence preserve করুন এবং appropriate
                    official reporting channel ব্যবহার করুন।
                    Immediate physical danger হলে নিজের নিরাপত্তাকে
                    প্রথম priority দিন।
                </p>
            `
        },

        // -----------------------------------------------------
        // PHOTO MISUSE
        // -----------------------------------------------------

        {
            id: "photo-misuse",

            keywords: [
                "photo misuse",
                "picture misuse",
                "image misuse",
                "photo stolen",
                "photo copied",
                "photo leak",
                "image leak",
                "ছবির অপব্যবহার",
                "ছবি চুরি",
                "ছবি ছড়ানো",
                "ছবি ফেক",
                "ছবি নিয়ে সমস্যা"
            ],

            title: "📸 Photo Misuse / Image Abuse",

            text: `
                <h3>1️⃣ প্রথমে Evidence রাখুন</h3>

                <ul>
                    <li>Screenshot</li>
                    <li>Profile URL</li>
                    <li>Post URL</li>
                    <li>Username</li>
                    <li>Date/time</li>
                </ul>

                <h3>2️⃣ Platform-এ Report করুন</h3>

                <ol>
                    <li>Impersonation হলে impersonation report ব্যবহার করুন।</li>
                    <li>Private content হলে privacy/abuse report ব্যবহার করুন।</li>
                    <li>Harassment হলে harassment report ব্যবহার করুন।</li>
                    <li>একই content একাধিক জায়গায় থাকলে প্রতিটি URL সংরক্ষণ করুন।</li>
                </ol>

                <h3>3️⃣ নিজের account secure করুন</h3>

                <ul>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Active sessions দেখুন।</li>
                    <li>Privacy settings review করুন।</li>
                </ul>

                <h3>🚫 সাবধান</h3>

                <p>
                    "আমি টাকা নিয়ে সব ছবি delete করে দেব"—
                    এমন unknown person বা service-কে বিশ্বাস করবেন না।
                </p>
            `
        },

        // -----------------------------------------------------
        // FAKE PROFILE
        // -----------------------------------------------------

        {
            id: "fake-profile",

            keywords: [
                "fake profile",
                "fake account",
                "impersonation",
                "pretending to be me",
                "fake instagram",
                "fake facebook",
                "ভুয়া প্রোফাইল",
                "ফেক প্রোফাইল",
                "নকল অ্যাকাউন্ট",
                "আমার নামে ফেক অ্যাকাউন্ট"
            ],

            title: "🎭 Fake Profile / Impersonation",

            text: `
                <h3>1️⃣ Fake profile-এর তথ্য রাখুন</h3>

                <ul>
                    <li>Profile screenshot</li>
                    <li>Profile URL</li>
                    <li>Username</li>
                    <li>Copied photos</li>
                    <li>Fake bio</li>
                    <li>Messages sent from fake account</li>
                </ul>

                <h3>2️⃣ Report করুন</h3>

                <p>
                    Platform-এর impersonation/fake account reporting
                    system ব্যবহার করুন।
                </p>

                <h3>3️⃣ পরিচিতদের সতর্ক করুন</h3>

                <p>
                    Fake account যদি আপনার নামে message করে,
                    trusted contacts-কে জানিয়ে দিন যেন তারা
                    টাকা বা personal information না দেয়।
                </p>

                <h3>4️⃣ নিজের account secure করুন</h3>

                <ol>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Unknown sessions remove করুন।</li>
                    <li>Privacy settings review করুন।</li>
                </ol>
            `
        },

        // -----------------------------------------------------
        // FINANCIAL FRAUD
        // -----------------------------------------------------

        {
            id: "financial-fraud",

            keywords: [
                "upi",
                "upi fraud",
                "bank fraud",
                "money fraud",
                "money stolen",
                "payment fraud",
                "financial fraud",
                "transaction fraud",
                "scam payment",
                "টাকা",
                "টাকা চুরি",
                "ইউপিআই",
                "ইউপিআই প্রতারণা",
                "ব্যাংক প্রতারণা",
                "আর্থিক প্রতারণা"
            ],

            title: "💳 Online & Financial Fraud",

            text: `
                <div class="guide-priority danger">
                    🚨 টাকা ইতিমধ্যে চলে গেলে দেরি না করে
                    bank/payment provider-এর সঙ্গে যোগাযোগ করুন।
                </div>

                <h3>যদি টাকা চলে যায়</h3>

                <ol>
                    <li>Bank/payment provider-কে অবিলম্বে জানান।</li>
                    <li>Transaction-টি fraudulent বলে report করুন।</li>
                    <li>Transaction ID সংরক্ষণ করুন।</li>
                    <li>Amount, date এবং time লিখে রাখুন।</li>
                    <li>Recipient details সংরক্ষণ করুন।</li>
                    <li>Payment screenshots রাখুন।</li>
                    <li>যে number/account থেকে যোগাযোগ করা হয়েছে তা রাখুন।</li>
                    <li>Official cybercrime reporting channel ব্যবহার করুন।</li>
                </ol>

                <h3>🚫 কখনো শেয়ার করবেন না</h3>

                <ul>
                    <li>OTP</li>
                    <li>UPI PIN</li>
                    <li>ATM PIN</li>
                    <li>CVV</li>
                    <li>Password</li>
                    <li>Recovery code</li>
                </ul>

                <h3>⚠️ গুরুত্বপূর্ণ</h3>

                <p>
                    টাকা receive করার জন্য সাধারণত আপনার UPI PIN
                    দেওয়ার প্রয়োজন হয় না। Unexpected request হলে
                    নিজে official app খুলে যাচাই করুন।
                </p>
            `
        },

        // -----------------------------------------------------
        // PHISHING
        // -----------------------------------------------------

        {
            id: "phishing",

            keywords: [
                "phishing",
                "fake link",
                "suspicious link",
                "fake website",
                "fake login",
                "otp scam",
                "fake sms",
                "fake email",
                "ফিশিং",
                "ফেক লিংক",
                "সন্দেহজনক লিংক",
                "ভুয়া ওয়েবসাইট",
                "ওটিপি স্ক্যাম"
            ],

            title: "🎣 Scam & Phishing",

            text: `
                <h3>🚩 Common Warning Signs</h3>

                <ul>
                    <li>অতিরিক্ত urgency</li>
                    <li>"এখনই না করলে account বন্ধ হবে"</li>
                    <li>OTP চাওয়া</li>
                    <li>Password চাওয়া</li>
                    <li>UPI PIN চাওয়া</li>
                    <li>অদ্ভুত URL</li>
                    <li>Prize/lottery দাবি</li>
                    <li>Fake customer support</li>
                    <li>অগ্রিম টাকা চাওয়া</li>
                </ul>

                <h3>যদি link-এ click করে ফেলেন</h3>

                <ol>
                    <li>সঙ্গে সঙ্গে page বন্ধ করুন।</li>
                    <li>যদি password দিয়ে থাকেন, trusted device থেকে password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Active sessions review করুন।</li>
                    <li>যদি payment information দিয়ে থাকেন, bank/payment provider-কে জানান।</li>
                    <li>যদি কোনো file/app install হয়ে থাকে, device security review করুন।</li>
                </ol>

                <h3>Golden Rule</h3>

                <p>
                    Message-এর link ব্যবহার না করে official app/site
                    নিজে খুলে login বা verification করুন।
                </p>
            `
        },

        // -----------------------------------------------------
        // PHONE SECURITY
        // -----------------------------------------------------

        {
            id: "phone-security",

            keywords: [
                "phone hacked",
                "phone security",
                "spyware",
                "spying",
                "unknown app",
                "malware",
                "virus",
                "phone compromised",
                "মোবাইল হ্যাক",
                "ফোন হ্যাক",
                "স্পাইওয়্যার",
                "অচেনা অ্যাপ",
                "ভাইরাস",
                "মোবাইল নিরাপত্তা"
            ],

            title: "📱 Phone Security",

            text: `
                <h3>🔍 এই জিনিসগুলো পরীক্ষা করুন</h3>

                <ol>
                    <li>Installed applications</li>
                    <li>App permissions</li>
                    <li>Accessibility access</li>
                    <li>Device Administrator access</li>
                    <li>Notification access</li>
                    <li>VPN configuration</li>
                    <li>Unknown profiles/configurations</li>
                    <li>Battery/data usage অস্বাভাবিক কিনা</li>
                </ol>

                <h3>যদি সন্দেহজনক app পান</h3>

                <ol>
                    <li>App-এর permissions review করুন।</li>
                    <li>প্রয়োজনে network access বন্ধ করুন।</li>
                    <li>সন্দেহজনক app remove করার আগে evidence দরকার কিনা ভাবুন।</li>
                    <li>Phone software update করুন।</li>
                    <li>Important accounts trusted device থেকে secure করুন।</li>
                </ol>

                <h3>🚫 Avoid</h3>

                <ul>
                    <li>Unknown APK</li>
                    <li>Cracked applications</li>
                    <li>Unknown remote-control apps</li>
                    <li>Fake antivirus apps</li>
                </ul>
            `
        },

        // -----------------------------------------------------
        // STALKING
        // -----------------------------------------------------

        {
            id: "stalking",

            keywords: [
                "stalking",
                "online stalking",
                "tracking",
                "track my phone",
                "location tracking",
                "location sharing",
                "স্টকিং",
                "অনলাইন স্টকিং",
                "ট্র্যাক",
                "লোকেশন ট্র্যাক",
                "লোকেশন শেয়ার"
            ],

            title: "👁️ Online Stalking / Tracking",

            text: `
                <div class="guide-priority warning">
                    ⚠️ যদি online stalking-এর সঙ্গে physical danger-ও থাকে,
                    digital steps-এর পাশাপাশি নিজের physical safety prioritize করুন।
                </div>

                <h3>1️⃣ Public information কমান</h3>

                <ul>
                    <li>Phone number</li>
                    <li>Home/location information</li>
                    <li>Daily routine</li>
                    <li>Work/school details</li>
                    <li>Travel plans</li>
                    <li>Family information</li>
                </ul>

                <h3>2️⃣ Location access পরীক্ষা করুন</h3>

                <ol>
                    <li>Social media location sharing review করুন।</li>
                    <li>Map/location-sharing services পরীক্ষা করুন।</li>
                    <li>Unknown account/device access remove করুন।</li>
                    <li>Apps-এর location permission review করুন।</li>
                </ol>

                <h3>3️⃣ Account secure করুন</h3>

                <ul>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Active sessions পরীক্ষা করুন।</li>
                    <li>Unknown devices remove করুন।</li>
                    <li>Recovery information পরীক্ষা করুন।</li>
                </ul>

                <h3>4️⃣ Evidence রাখুন</h3>

                <p>
                    Repeated messages, location-related threats,
                    suspicious accounts এবং dates/times সংরক্ষণ করুন।
                </p>
            `
        },

        // -----------------------------------------------------
        // PASSWORD / OTP
        // -----------------------------------------------------

        {
            id: "credentials",

            keywords: [
                "otp",
                "password",
                "pin",
                "credential",
                "recovery code",
                "2fa",
                "পাসওয়ার্ড",
                "পিন",
                "ওটিপি",
                "রিকভারি কোড"
            ],

            title: "🔑 OTP / Password / PIN Safety",

            text: `
                <div class="guide-priority danger">
                    🚫 OTP, PIN, password বা recovery code
                    কাউকে দেবেন না।
                </div>

                <h3>কখনো শেয়ার করবেন না</h3>

                <ul>
                    <li>OTP</li>
                    <li>UPI PIN</li>
                    <li>ATM PIN</li>
                    <li>Password</li>
                    <li>Recovery code</li>
                    <li>Authentication code</li>
                    <li>Backup codes</li>
                </ul>

                <h3>নিরাপদ অভ্যাস</h3>

                <ol>
                    <li>প্রতিটি গুরুত্বপূর্ণ account-এ unique password ব্যবহার করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Password manager ব্যবহার করতে পারেন।</li>
                    <li>Unexpected login request নিজে verify করুন।</li>
                </ol>
            `
        },

        // -----------------------------------------------------
        // PRIVACY
        // -----------------------------------------------------

        {
            id: "privacy",

            keywords: [
                "privacy",
                "private",
                "privacy settings",
                "location privacy",
                "account privacy",
                "প্রাইভেসি",
                "গোপনীয়তা",
                "প্রাইভেসি সেটিং"
            ],

            title: "🔒 Privacy Protection",

            text: `
                <h3>এই settingsগুলো review করুন</h3>

                <ul>
                    <li>Who can see your profile</li>
                    <li>Who can message you</li>
                    <li>Who can call you</li>
                    <li>Who can see your phone number</li>
                    <li>Who can see your email</li>
                    <li>Location sharing</li>
                    <li>Tag/mention permissions</li>
                    <li>Story/status visibility</li>
                    <li>Connected apps</li>
                    <li>Logged-in devices</li>
                </ul>

                <h3>Public information কম রাখুন</h3>

                <p>
                    Home address, daily routine, travel plan,
                    personal phone number এবং sensitive documents
                    public profile-এ রাখবেন না।
                </p>
            `
        },

        // -----------------------------------------------------
        // SUSPICIOUS ACTIVITY
        // -----------------------------------------------------

        {
            id: "suspicious",

            keywords: [
                "suspicious activity",
                "unknown login",
                "unknown device",
                "login alert",
                "password reset",
                "account activity",
                "সন্দেহজনক",
                "অপরিচিত লগইন",
                "অজানা ডিভাইস",
                "লগইন অ্যালার্ট"
            ],

            title: "🕵️ Suspicious Account Activity",

            text: `
                <h3>🚩 Warning Signs</h3>

                <ul>
                    <li>Unknown login alert</li>
                    <li>Unknown device</li>
                    <li>Password reset আপনি করেননি</li>
                    <li>Unknown message/post</li>
                    <li>Profile information পরিবর্তন</li>
                    <li>Recovery email/phone পরিবর্তন</li>
                    <li>Unexpected security alert</li>
                </ul>

                <h3>এখনই যা করবেন</h3>

                <ol>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Active sessions review করুন।</li>
                    <li>Unknown devices remove করুন।</li>
                    <li>Recovery information পরীক্ষা করুন।</li>
                    <li>Connected apps review করুন।</li>
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

        const normalizedQuery =
            normalize(query);

        if (!normalizedQuery) return;

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
                        fake profile, photo misuse,
                        UPI fraud, phishing,
                        phone security, stalking,
                        privacy, password.
                    </p>

                    <button
                        class="result-help"
                        data-general-help="true"
                    >
                        Open General Safety Guide →
                    </button>

                </div>

            `;

            $(".result-help", searchResults)
                ?.addEventListener(
                    "click",
                    () => {

                        showGuide(
                            "🛡️ General Cyber Safety",
                            generalSafetyGuide
                        );

                    }
                );

            return;
        }

        matches.forEach(problem => {

            const result =
                document.createElement("div");

            result.className =
                "search-result";

            result.innerHTML = `

                <h3>
                    ${problem.title}
                </h3>

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
                ?.addEventListener(
                    "click",
                    () => {

                        showGuide(
                            problem.title,
                            problem.text
                        );

                    }
                );

            searchResults.appendChild(
                result
            );

        });

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
    // GENERAL SAFETY
    // =========================================================

    const generalSafetyGuide = `

        <h3>🛡️ Immediate Cyber Safety</h3>

        <ol>
            <li>Stop communicating with the suspicious person/account.</li>
            <li>Do not send OTP, PIN, password or sensitive information.</li>
            <li>Do not send additional private content.</li>
            <li>Save screenshots and URLs.</li>
            <li>Secure your important accounts.</li>
            <li>Enable 2FA.</li>
            <li>Review active sessions.</li>
            <li>Review privacy settings.</li>
            <li>Report the account/content through the official platform.</li>
            <li>Tell someone you trust if the situation is serious.</li>
        </ol>

        <div class="guide-priority warning">
            যদি physical danger থাকে, digital investigation-এর চেয়ে
            নিজের immediate safety-কে আগে রাখুন।
        </div>

    `;

    // =========================================================
    // SERVICE GUIDES
    // =========================================================

    const serviceGuides = {

        "Account Recovery":
            problems.find(
                p => p.id === "account-recovery"
            )?.text,

        "Scam & Phishing":
            problems.find(
                p => p.id === "phishing"
            )?.text,

        "Phone Security":
            problems.find(
                p => p.id === "phone-security"
            )?.text,

        "Online Fraud":
            problems.find(
                p => p.id === "financial-fraud"
            )?.text,

        "Suspicious Activity":
            problems.find(
                p => p.id === "suspicious"
            )?.text,

        "Emergency Help": `

            <h3>🚨 Emergency Cyber Response</h3>

            <ol>
                <li>Stop sending money or sensitive information.</li>
                <li>Secure your important accounts.</li>
                <li>Preserve evidence.</li>
                <li>Report through official channels.</li>
                <li>Contact your bank/payment provider if money is involved.</li>
                <li>Tell someone you trust.</li>
            </ol>

            <div class="guide-priority danger">
                Immediate physical danger থাকলে নিজের physical safety
                প্রথম priority।
            </div>

        `

    };

    $$(".help-btn").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const service =
                    button.dataset.service;

                showGuide(
                    service,
                    serviceGuides[service] ||
                    generalSafetyGuide
                );

            }
        );

    });

    // =========================================================
    // WOMEN SAFETY GUIDES
    // =========================================================

    const womenGuides = {

        harassment:
            problems.find(
                p => p.id === "harassment"
            )?.text,

        photo:
            problems.find(
                p => p.id === "photo-misuse"
            )?.text,

        fakeprofile:
            problems.find(
                p => p.id === "fake-profile"
            )?.text,

        blackmail:
            problems.find(
                p => p.id === "blackmail"
            )?.text,

        private: `

            <h3>🔒 Private Photo / Video Threat</h3>

            <ol>
                <li>আর কোনো content পাঠাবেন না।</li>
                <li>চাপের মধ্যে টাকা দেবেন না।</li>
                <li>Threat এবং messages সংরক্ষণ করুন।</li>
                <li>Username ও profile URL সংরক্ষণ করুন।</li>
                <li>Password পরিবর্তন করুন।</li>
                <li>2FA চালু করুন।</li>
                <li>Active sessions review করুন।</li>
                <li>Content/account report করুন।</li>
                <li>Trusted person-কে জানান।</li>
            </ol>

            <p>
                Blackmail হওয়া আপনার দোষ নয়।
            </p>

        `,

        stalking:
            problems.find(
                p => p.id === "stalking"
            )?.text

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
                        getWomenTitle(type),
                        guide
                    );

                }

            }
        );

    });

    function getWomenTitle(type) {

        const titles = {

            harassment:
                "📞 Repeated Calls / Harassment",

            photo:
                "📸 Photo Misuse",

            fakeprofile:
                "🎭 Fake Profile",

            blackmail:
                "⚠️ Blackmail — Complete Safety Guide",

            private:
                "🔒 Private Photo / Video Threat",

            stalking:
                "👁️ Online Stalking"

        };

        return titles[type] ||
            "👩 Women's Digital Safety";

    }

    // =========================================================
    // ADVANCED SECURITY SCAN
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
        "Connected apps",
        "Location sharing",
        "Suspicious activity"

    ];

    function runSecurityScan() {

        if (!scanStatus) {

            showScanFallback();

            return;

        }

        scanStatus.classList.add(
            "active"
        );

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
                "Preparing security scan...";

        }

        const timer =
            setInterval(
                () => {

                    progress += 10;

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

                },
                350
            );

    }

    function showScanResult() {

        if (!scanResult) {

            showScanFallback();

            return;

        }

        scanResult.classList.add(
            "active",
            "safe"
        );

        scanResult.innerHTML = `

            <h3>🛡️ Security Scan Complete</h3>

            <p>
                CyberCare-এর local safety checklist scan সম্পন্ন হয়েছে।
            </p>

            <h4>Review these areas:</h4>

            <ul>
                <li>🔐 Account security</li>
                <li>🔑 Passwords + 2FA</li>
                <li>📱 Unknown devices</li>
                <li>🧩 App permissions</li>
                <li>🔗 Connected applications</li>
                <li>📍 Location sharing</li>
                <li>🕵️ Suspicious activity</li>
            </ul>

            <div class="scan-limit">
                ℹ️ এটি কোনো antivirus বা server-side hacking detector নয়।
                CyberCare আপনার account-এর private server data access করে
                scan করতে পারে না।
            </div>

        `;

    }

    function showScanFallback() {

        showGuide(
            "🛡️ CyberCare Security Scan",
            `
                <h3>Manual Security Scan</h3>

                <ol>
                    <li>Password unique কিনা দেখুন।</li>
                    <li>2FA চালু আছে কিনা দেখুন।</li>
                    <li>Active sessions পরীক্ষা করুন।</li>
                    <li>Unknown devices remove করুন।</li>
                    <li>App permissions review করুন।</li>
                    <li>Location sharing review করুন।</li>
                    <li>Connected apps review করুন।</li>
                    <li>Recent security alerts পরীক্ষা করুন।</li>
                </ol>

                <p>
                    এই scan একটি safety checklist।
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
                    <h3>নিজে এই ১০টি জিনিস পরীক্ষা করুন</h3>

                    <ol>
                        <li>Password unique কিনা?</li>
                        <li>2FA চালু আছে?</li>
                        <li>Unknown device আছে?</li>
                        <li>Unknown app আছে?</li>
                        <li>অপ্রয়োজনীয় permissions আছে?</li>
                        <li>Location sharing চালু আছে?</li>
                        <li>Unknown connected app আছে?</li>
                        <li>Recent suspicious login আছে?</li>
                        <li>Recovery email/phone সঠিক আছে?</li>
                        <li>Privacy settings ঠিক আছে?</li>
                    </ol>
                `
            );

        }
    );

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

            // -------------------------------------------------
            // SCAM CHECKER
            // -------------------------------------------------

            scam: `

                <h3>🔎 Scam Risk Analyzer</h3>

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
                        UPI PIN চাইছে
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
                        Account বন্ধ করার ভয় দেখাচ্ছে
                    </label>

                    <label>
                        <input type="checkbox">
                        Unknown person payment চাইছে
                    </label>

                    <label>
                        <input type="checkbox">
                        Secret রাখতে বলছে
                    </label>

                </div>

                <button
                    class="internal-tool-action"
                    id="scamAnalyze"
                    type="button"
                >
                    Analyze Risk
                </button>

                <div id="scamResult"></div>

            `,

            // -------------------------------------------------
            // PASSWORD
            // -------------------------------------------------

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
                    type="button"
                >
                    Check Password
                </button>

                <div id="passwordResult"></div>

            `,

            // -------------------------------------------------
            // URL
            // -------------------------------------------------

            url: `

                <h3>🔗 URL Safety Guide</h3>

                <ol>
                    <li>Domain spelling পরীক্ষা করুন।</li>
                    <li>অতিরিক্ত subdomain আছে কিনা দেখুন।</li>
                    <li>অদ্ভুত character আছে কিনা দেখুন।</li>
                    <li>Shortened URL হলে সতর্ক থাকুন।</li>
                    <li>Unexpected login page এড়িয়ে চলুন।</li>
                    <li>শুধু logo দেখে website বিশ্বাস করবেন না।</li>
                    <li>Official app/site নিজে খুলে login করুন।</li>
                </ol>

                <div class="scan-limit">
                    CyberCare কোনো website-কে server-side scan করে
                    safe/unsafe guarantee করে না।
                </div>

            `,

            // -------------------------------------------------
            // PRIVACY
            // -------------------------------------------------

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
                    <li>☎️ Who can call you</li>
                    <li>👤 Who can see your profile</li>
                    <li>🏷️ Tag/mention permissions</li>
                </ul>

            `,

            // -------------------------------------------------
            // EVIDENCE
            // -------------------------------------------------

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
                    <li>🧾 Payment receipts</li>
                    <li>🚩 Threat messages</li>
                </ul>

                <p>
                    Original evidence যতটা সম্ভব preserve করুন।
                    Screenshot edit করে original evidence replace করবেন না।
                </p>

            `,

            // -------------------------------------------------
            // SAFETY SCORE
            // -------------------------------------------------

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
                        I never share UPI PIN
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
                        I review privacy settings
                    </label>

                    <label>
                        <input type="checkbox">
                        I know how to preserve evidence
                    </label>

                    <label>
                        <input type="checkbox">
                        I know how to report suspicious content
                    </label>

                    <label>
                        <input type="checkbox">
                        I avoid unknown APK/apps
                    </label>

                </div>

                <button
                    class="internal-tool-action"
                    id="calculateScore"
                    type="button"
                >
                    Calculate Score
                </button>

                <div id="scoreResult"></div>

            `,

            // -------------------------------------------------
            // BLACKMAIL
            // -------------------------------------------------

            blackmail:
                problems.find(
                    p => p.id === "blackmail"
                )?.text,

            // -------------------------------------------------
            // HARASSMENT
            // -------------------------------------------------

            harassment:
                problems.find(
                    p => p.id === "harassment"
                )?.text,

            // -------------------------------------------------
            // RECOVERY
            // -------------------------------------------------

            recovery:
                problems.find(
                    p => p.id === "account-recovery"
                )?.text,

            // -------------------------------------------------
            // PHONE
            // -------------------------------------------------

            phone:
                problems.find(
                    p => p.id === "phone-security"
                )?.text,

            // -------------------------------------------------
            // FINANCIAL
            // -------------------------------------------------

            financial:
                problems.find(
                    p => p.id === "financial-fraud"
                )?.text,

            // -------------------------------------------------
            // STALKING
            // -------------------------------------------------

            stalking:
                problems.find(
                    p => p.id === "stalking"
                )?.text,

            // -------------------------------------------------
            // PHOTO
            // -------------------------------------------------

            photo:
                problems.find(
                    p => p.id === "photo-misuse"
                )?.text,

            // -------------------------------------------------
            // FAKE PROFILE
            // -------------------------------------------------

            fakeprofile:
                problems.find(
                    p => p.id === "fake-profile"
                )?.text

        };

        if (!tools[tool]) {

            showGuide(
                "🛠️ CyberCare Tool",
                generalSafetyGuide
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
                    🟢 No selected warning signs.
                    তবুও unexpected requests independently verify করুন।
                </div>

            `;

            return;

        }

        if (count <= 2) {

            result.innerHTML = `

                <div class="scan-limit">

                    🟡 <strong>Medium Caution</strong>

                    <p>
                        কিছু warning sign পাওয়া গেছে।
                        Sensitive information বা টাকা দেওয়ার আগে
                        independent verification করুন।
                    </p>

                </div>

            `;

            return;

        }

        if (count <= 5) {

            result.innerHTML = `

                <div class="scan-limit">

                    🟠 <strong>High Risk Pattern</strong>

                    <p>
                        Interaction pause করুন।
                        OTP/password/payment দেবেন না।
                        Official channel দিয়ে verify করুন।
                    </p>

                </div>

            `;

            return;

        }

        result.innerHTML = `

            <div class="scan-limit">

                🚨 <strong>Strong Scam Warning Pattern</strong>

                <p>
                    টাকা, OTP, PIN বা password দেবেন না।
                    Suspicious account/link থেকে দূরে থাকুন
                    এবং official channel দিয়ে verify/report করুন।
                </p>

            </div>

        `;

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

        if (password.length >= 12)
            score++;

        if (password.length >= 16)
            score++;

        if (/[A-Z]/.test(password))
            score++;

        if (/[a-z]/.test(password))
            score++;

        if (/[0-9]/.test(password))
            score++;

        if (/[^A-Za-z0-9]/.test(password))
            score++;

        let message;
        let tips = [];

        if (password.length < 12) {

            tips.push(
                "Use a longer password."
            );

        }

        if (!/[A-Z]/.test(password)) {

            tips.push(
                "Consider adding uppercase characters."
            );

        }

        if (!/[0-9]/.test(password)) {

            tips.push(
                "Consider adding numbers."
            );

        }

        if (!/[^A-Za-z0-9]/.test(password)) {

            tips.push(
                "Consider adding symbols."
            );

        }

        if (password.length < 8) {

            message =
                "🔴 Very Weak";

        } else if (score <= 2) {

            message =
                "🔴 Weak";

        } else if (score <= 4) {

            message =
                "🟡 Moderate";

        } else {

            message =
                "🟢 Strong Structure";

        }

        result.innerHTML = `

            <div class="scan-limit">

                <h4>${message}</h4>

                ${
                    tips.length
                        ? `
                            <ul>
                                ${tips
                                    .map(
                                        tip =>
                                            `<li>${escapeHTML(tip)}</li>`
                                    )
                                    .join("")}
                            </ul>
                        `
                        : `
                            <p>
                                Good structure. Keep it unique and private.
                            </p>
                        `
                }

                <p>
                    Password reuse করবেন না এবং গুরুত্বপূর্ণ
                    account-এ 2FA ব্যবহার করুন।
                </p>

            </div>

        `;

        setTimeout(() => {

            input.value = "";

        }, 700);

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

        if (percentage >= 85) {

            level =
                "🟢 Excellent";

            advice =
                "আপনার basic cyber safety habits খুব ভালো।";

        } else if (percentage >= 70) {

            level =
                "🟢 Good";

            advice =
                "আপনার security habits ভালো, তবে কিছু জায়গা আরও শক্ত করুন।";

        } else if (percentage >= 50) {

            level =
                "🟡 Needs Improvement";

            advice =
                "Password, 2FA, privacy এবং account security improve করুন।";

        } else if (percentage >= 30) {

            level =
                "🟠 High Improvement Needed";

            advice =
                "আজই গুরুত্বপূর্ণ account security এবং privacy ঠিক করুন।";

        } else {

            level =
                "🔴 Critical Improvement Needed";

            advice =
                "Password, 2FA, privacy এবং suspicious activity review দিয়ে শুরু করুন।";

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
                <li>Public বা shared device-এ password save করবেন না।</li>
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
                <li>Cloud accounts</li>
            </ul>

            <p>
                Backup/recovery codes নিরাপদে রাখুন এবং কারও সঙ্গে
                শেয়ার করবেন না।
            </p>

        `,

        phishing:
            problems.find(
                p => p.id === "phishing"
            )?.text,

        privacy:
            problems.find(
                p => p.id === "privacy"
            )?.text,

        phone:
            problems.find(
                p => p.id === "phone-security"
            )?.text,

        financial:
            problems.find(
                p => p.id === "financial-fraud"
            )?.text,

        blackmail:
            problems.find(
                p => p.id === "blackmail"
            )?.text,

        stalking:
            problems.find(
                p => p.id === "stalking"
            )?.text

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
                    generalSafetyGuide
                );

            }
        );

    });

    // =========================================================
    // EMERGENCY RESPONSE
    // =========================================================

    const emergencyGuides = {

        account:
            problems.find(
                p => p.id === "account-recovery"
            )?.text,

        money:
            problems.find(
                p => p.id === "financial-fraud"
            )?.text,

        blackmail:
            problems.find(
                p => p.id === "blackmail"
            )?.text,

        phone:
            problems.find(
                p => p.id === "phone-security"
            )?.text,

        harassment:
            problems.find(
                p => p.id === "harassment"
            )?.text,

        stalking:
            problems.find(
                p => p.id === "stalking"
            )?.text,

        fakeprofile:
            problems.find(
                p => p.id === "fake-profile"
            )?.text,

        photo:
            problems.find(
                p => p.id === "photo-misuse"
            )?.text

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
                        generalSafetyGuide
                    );

                }
            );

        });

    // =========================================================
    // INDIA HELP SECTION
    // =========================================================

    $$(".india-btn").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const type =
                    button.dataset.india ||
                    button.dataset.help;

                if (!type) return;

                if (
                    type === "cybercrime" ||
                    type === "financial" ||
                    type === "help"
                ) {

                    showGuide(
                        "🇮🇳 India Cyber Help",
                        `
                            <h3>India Cybercrime Support</h3>

                            <p>
                                Cybercrime, online fraud, blackmail,
                                account abuse বা financial fraud হলে
                                official government reporting channel
                                ব্যবহার করুন।
                            </p>

                            <h3>যে তথ্যগুলো প্রস্তুত রাখবেন</h3>

                            <ul>
                                <li>আপনার contact details</li>
                                <li>Incident-এর date/time</li>
                                <li>Screenshot</li>
                                <li>Profile/website URL</li>
                                <li>Phone number</li>
                                <li>Username</li>
                                <li>Transaction ID</li>
                                <li>Payment details</li>
                            </ul>

                            <h3>Financial Fraud হলে</h3>

                            <p>
                                Bank/payment provider-এর সঙ্গে যত দ্রুত সম্ভব
                                যোগাযোগ করুন এবং fraudulent transaction-এর
                                তথ্য দিন।
                            </p>

                            <div class="guide-priority warning">
                                CyberCare-এর এই section কোনো সরকারি
                                reporting service-এর replacement নয়।
                                সর্বদা official channel ব্যবহার করুন।
                            </div>
                        `
                    );

                }

            }
        );

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

                    <div class="guide-actions">

                        <button
                            class="guide-copy"
                            type="button"
                        >
                            📋 Copy Guide
                        </button>

                        <button
                            class="guide-ok"
                            type="button"
                        >
                            Got it
                        </button>

                    </div>

                </div>

            </div>

        `;

        document.body.appendChild(
            modal
        );

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

        $(".guide-copy", modal)
            ?.addEventListener(
                "click",
                () => {

                    const plainText =
                        modal
                            .querySelector(
                                ".guide-content"
                            )
                            ?.innerText || "";

                    copyText(
                        `${title}\n\n${plainText}`
                    );

                }
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

            $(".guide-close", modal)
                ?.focus();

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
    // INITIALIZATION
    // =========================================================

    console.log(
        "🛡️ CyberCare Advanced Security System v2 Loaded"
    );

});
