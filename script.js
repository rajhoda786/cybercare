// ============================================================
// CYBERCARE — ADVANCED ALL-IN-ONE SCRIPT.JS
// Search + Account Recovery + Blackmail + Harassment
// Women Safety + Scam + Phishing + Financial Fraud
// Phone Security + Privacy + Evidence + Safety Score
// Bengali + English + Dark Mode + Emergency + Tools
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    // =========================================================
    // BASIC ELEMENTS
    // =========================================================

    const $ = (selector, parent = document) =>
        parent.querySelector(selector);

    const $$ = (selector, parent = document) =>
        [...parent.querySelectorAll(selector)];

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
    // SAFE TEXT HELPER
    // =========================================================

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


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
    // SECTION NAVIGATION
    // =========================================================

    function scrollToSection(id) {

        const section = document.getElementById(id);

        if (!section) return;

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    $$(".menu-item").forEach(item => {

        item.addEventListener("click", () => {

            const target = item.dataset.menu;

            closeSideMenu();

            if (target === "services")
                scrollToSection("services");

            else if (target === "women")
                scrollToSection("women");

            else if (target === "tools")
                scrollToSection("tools");

            else if (target === "learn")
                scrollToSection("learn");

            else if (target === "india")
                scrollToSection("india");

            else if (target === "about")
                scrollToSection("about");

            else if (target === "emergency") {

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
                behavior: "smooth"
            });

    });


    quickHelpBtn?.addEventListener("click", () => {

        document
            .querySelector(".search-section")
            ?.scrollIntoView({
                behavior: "smooth"
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

        "Got it":
            "বুঝেছি",

        "Analyze Risk":
            "ঝুঁকি বিশ্লেষণ করুন",

        "Check Password":
            "পাসওয়ার্ড পরীক্ষা করুন",

        "Calculate Score":
            "স্কোর হিসাব করুন",

        "View Full Safety Guide →":
            "সম্পূর্ণ নিরাপত্তা নির্দেশিকা দেখুন →"

    };


    function translatePage() {

        $$(
            "h1,h2,h3,h4,p,button,strong,small"
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

            }

            else if (!bengali) {

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
    // ADVANCED PROBLEM DATABASE
    // =========================================================

    const problems = [

        // -----------------------------------------------------
        // ACCOUNT RECOVERY
        // -----------------------------------------------------

        {
            keywords: [
                "facebook",
                "facebook hacked",
                "instagram",
                "instagram hacked",
                "whatsapp",
                "whatsapp hacked",
                "google",
                "gmail",
                "youtube",
                "account",
                "account hacked",
                "hacked",
                "hack",
                "login",
                "password",
                "ফেসবুক",
                "ইনস্টাগ্রাম",
                "হোয়াটসঅ্যাপ",
                "গুগল",
                "জিমেইল",
                "হ্যাক",
                "হ্যাক হয়েছে",
                "অ্যাকাউন্ট"
            ],

            title: "🔐 Account Recovery",

            text: `
                <p><strong>যদি আপনার account hacked বা compromised হয়ে থাকে:</strong></p>

                <ol>
                    <li>প্রথমে আপনার email account secure করুন।</li>
                    <li>Compromised account-এর password পরিবর্তন করুন।</li>
                    <li>Two-Factor Authentication (2FA) চালু করুন।</li>
                    <li>Active sessions / logged-in devices পরীক্ষা করুন।</li>
                    <li>অপরিচিত device সরিয়ে দিন।</li>
                    <li>Recovery email এবং phone number পরীক্ষা করুন।</li>
                    <li>অপরিচিত password/recovery changes পরীক্ষা করুন।</li>
                    <li>শুধুমাত্র official recovery system ব্যবহার করুন।</li>
                </ol>

                <div class="scan-limit">
                    ⚠️ কোনো ব্যক্তি বা website-কে OTP, password বা recovery code দেবেন না।
                </div>
            `
        },


        // -----------------------------------------------------
        // BLACKMAIL
        // -----------------------------------------------------

        {
            keywords: [
                "blackmail",
                "black mail",
                "sextortion",
                "threat",
                "private photo",
                "private video",
                "leak",
                "nude",
                "intimate",
                "ব্ল্যাকমেইল",
                "হুমকি",
                "ব্যক্তিগত ছবি",
                "ব্যক্তিগত ভিডিও",
                "ছবি ছড়িয়ে",
                "ভিডিও ছড়িয়ে"
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
                    <li>Payment request এবং transaction details সংরক্ষণ করুন।</li>
                    <li>Account security বাড়ান এবং 2FA চালু করুন।</li>
                    <li>Evidence সংরক্ষণ করার পর report/block করুন।</li>
                    <li>বিশ্বস্ত কাউকে জানান।</li>
                </ol>

                <p>
                    ❤️ Blackmail হওয়া আপনার দোষ নয়।
                </p>
            `
        },


        // -----------------------------------------------------
        // HARASSMENT
        // -----------------------------------------------------

        {
            keywords: [
                "call",
                "calling",
                "phone call",
                "repeated call",
                "harassment",
                "abuse",
                "disturb",
                "message",
                "spam call",
                "হয়রানি",
                "বারবার ফোন",
                "ফোন করে",
                "বিরক্ত",
                "অশালীন মেসেজ"
            ],

            title: "📞 Repeated Calls / Harassment",

            text: `
                <ol>
                    <li>Call logs-এর screenshot রাখুন।</li>
                    <li>Messages-এর screenshot রাখুন।</li>
                    <li>প্রয়োজনীয় evidence সংরক্ষণ করুন।</li>
                    <li>অপ্রয়োজনীয়ভাবে argument করবেন না।</li>
                    <li>প্রয়োজনে number/account block করুন।</li>
                    <li>Social media privacy settings পরীক্ষা করুন।</li>
                    <li>Threat থাকলে evidence আলাদা করে সংরক্ষণ করুন।</li>
                    <li>বিশ্বস্ত ব্যক্তি বা appropriate official authority-কে জানান।</li>
                </ol>
            `
        },


        // -----------------------------------------------------
        // PHOTO MISUSE
        // -----------------------------------------------------

        {
            keywords: [
                "photo",
                "picture",
                "image",
                "photo misuse",
                "stolen photo",
                "morphed photo",
                "edited photo",
                "ছবি",
                "ছবির অপব্যবহার",
                "ছবি চুরি",
                "মরফ",
                "এডিট ছবি"
            ],

            title: "📸 Photo Misuse",

            text: `
                <ol>
                    <li>Content-এর screenshot নিন।</li>
                    <li>Profile URL save করুন।</li>
                    <li>Post URL save করুন।</li>
                    <li>Username এবং date/time সংরক্ষণ করুন।</li>
                    <li>Platform-এর report system ব্যবহার করুন।</li>
                    <li>নিজের account privacy শক্ত করুন।</li>
                    <li>Guaranteed removal-এর নামে কাউকে টাকা দেবেন না।</li>
                </ol>
            `
        },


        // -----------------------------------------------------
        // FAKE PROFILE
        // -----------------------------------------------------

        {
            keywords: [
                "fake profile",
                "fake account",
                "impersonation",
                "fake instagram",
                "fake facebook",
                "ভুয়া প্রোফাইল",
                "ফেক প্রোফাইল",
                "ফেক অ্যাকাউন্ট",
                "ভুয়া অ্যাকাউন্ট"
            ],

            title: "🎭 Fake Profile / Impersonation",

            text: `
                <ol>
                    <li>Fake profile-এর screenshot নিন।</li>
                    <li>Profile URL save করুন।</li>
                    <li>Username save করুন।</li>
                    <li>Fake account report করুন।</li>
                    <li>প্রয়োজন হলে trusted contacts-কে সতর্ক করুন।</li>
                    <li>নিজের account security পরীক্ষা করুন।</li>
                    <li>Recovery information পরিবর্তিত হয়েছে কিনা দেখুন।</li>
                </ol>
            `
        },


        // -----------------------------------------------------
        // FINANCIAL FRAUD
        // -----------------------------------------------------

        {
            keywords: [
                "upi",
                "upi fraud",
                "bank",
                "bank fraud",
                "money",
                "money lost",
                "payment",
                "payment fraud",
                "transaction",
                "fraud",
                "scam",
                "financial",
                "টাকা",
                "ব্যাংক",
                "প্রতারণা",
                "ইউপিআই",
                "টাকা গেছে"
            ],

            title: "💳 Online & Financial Fraud",

            text: `
                <h3>🚨 টাকা চলে গেলে দ্রুত কাজ করুন</h3>

                <ol>
                    <li>আপনার bank/payment provider-এর official channel-এ দ্রুত যোগাযোগ করুন।</li>
                    <li>Transaction-টি fraudulent বলে জানান।</li>
                    <li>Transaction ID সংরক্ষণ করুন।</li>
                    <li>Screenshot এবং message সংরক্ষণ করুন।</li>
                    <li>Payment account secure করুন।</li>
                    <li>Password/PIN পরিবর্তন করার প্রয়োজন হলে official app/site ব্যবহার করুন।</li>
                    <li>Official cybercrime reporting channel ব্যবহার করুন।</li>
                </ol>

                <div class="scan-limit">
                    🚫 OTP, UPI PIN, CVV বা banking password কাউকে দেবেন না।
                </div>
            `
        },


        // -----------------------------------------------------
        // PHISHING
        // -----------------------------------------------------

        {
            keywords: [
                "phishing",
                "phish",
                "suspicious link",
                "fake link",
                "link",
                "otp",
                "fake website",
                "fake sms",
                "fake email",
                "ফিশিং",
                "সন্দেহজনক লিংক",
                "ওটিপি",
                "ভুয়া website"
            ],

            title: "🎣 Scam & Phishing",

            text: `
                <ol>
                    <li>সন্দেহজনক link-এ click করবেন না।</li>
                    <li>OTP share করবেন না।</li>
                    <li>Password share করবেন না।</li>
                    <li>UPI PIN share করবেন না।</li>
                    <li>Sender-এর পরিচয় আলাদা source থেকে verify করুন।</li>
                    <li>Official app/site নিজে খুলে verify করুন।</li>
                    <li>Urgent pressure থাকলে আরও সতর্ক হন।</li>
                </ol>
            `
        },


        // -----------------------------------------------------
        // PHONE SECURITY
        // -----------------------------------------------------

        {
            keywords: [
                "phone",
                "phone hacked",
                "mobile hacked",
                "spyware",
                "spy app",
                "unknown app",
                "malware",
                "virus",
                "accessibility",
                "device administrator",
                "স্পাইওয়্যার",
                "স্পাই অ্যাপ",
                "ভাইরাস",
                "ফোন হ্যাক",
                "মোবাইল হ্যাক"
            ],

            title: "📱 Phone Security",

            text: `
                <ol>
                    <li>Unknown applications পরীক্ষা করুন।</li>
                    <li>App permissions পরীক্ষা করুন।</li>
                    <li>Accessibility access পরীক্ষা করুন।</li>
                    <li>Device Administrator access পরীক্ষা করুন।</li>
                    <li>Unknown VPN/profile পরীক্ষা করুন।</li>
                    <li>Phone এবং apps update করুন।</li>
                    <li>সন্দেহজনক application সরান।</li>
                    <li>Important accounts trusted device থেকে secure করুন।</li>
                </ol>
            `
        },


        // -----------------------------------------------------
        // STALKING
        // -----------------------------------------------------

        {
            keywords: [
                "stalking",
                "online stalking",
                "track me",
                "tracking",
                "location tracking",
                "স্টকিং",
                "অনলাইন স্টকিং",
                "লোকেশন ট্র্যাক"
            ],

            title: "👁️ Online Stalking",

            text: `
                <h3>যা public আছে তা পরীক্ষা করুন</h3>

                <ul>
                    <li>Phone number</li>
                    <li>Email</li>
                    <li>Location</li>
                    <li>Daily routine</li>
                    <li>Work/school information</li>
                    <li>Family/friends information</li>
                </ul>

                <h3>তারপর</h3>

                <ol>
                    <li>Location sharing বন্ধ/পরীক্ষা করুন।</li>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Active sessions পরীক্ষা করুন।</li>
                    <li>Evidence রাখুন।</li>
                    <li>প্রয়োজনে block/report করুন।</li>
                </ol>
            `
        },


        // -----------------------------------------------------
        // SUSPICIOUS LOGIN
        // -----------------------------------------------------

        {
            keywords: [
                "unknown login",
                "login alert",
                "unknown device",
                "someone logged in",
                "suspicious activity",
                "অপরিচিত লগইন",
                "অপরিচিত ডিভাইস",
                "সন্দেহজনক কার্যকলাপ"
            ],

            title: "🕵️ Suspicious Account Activity",

            text: `
                <ol>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Active sessions দেখুন।</li>
                    <li>Unknown devices remove করুন।</li>
                    <li>Recovery email/phone পরীক্ষা করুন।</li>
                    <li>Security alerts পরীক্ষা করুন।</li>
                    <li>Official account security page ব্যবহার করুন।</li>
                </ol>
            `
        }

    ];


    // =========================================================
    // SEARCH NORMALIZER
    // =========================================================

    function normalizeText(text) {

        return String(text)
            .toLowerCase()
            .normalize("NFKC")
            .trim();

    }


    // =========================================================
    // SEARCH SYSTEM
    // =========================================================

    problemSearch?.addEventListener("input", () => {

        const query =
            normalizeText(problemSearch.value);

        if (!searchResults) return;

        searchResults.innerHTML = "";

        if (!query) return;


        const words =
            query
                .split(/\s+/)
                .filter(Boolean);


        const matches =
            problems
                .map(problem => {

                    let score = 0;

                    problem.keywords.forEach(keyword => {

                        const key =
                            normalizeText(keyword);

                        if (query.includes(key))
                            score += 5;

                        words.forEach(word => {

                            if (
                                word.length >= 2 &&
                                key.includes(word)
                            ) {
                                score += 1;
                            }

                        });

                    });

                    return {
                        problem,
                        score
                    };

                })
                .filter(item => item.score > 0)
                .sort((a, b) =>
                    b.score - a.score
                )
                .slice(0, 5);


        if (!matches.length) {

            searchResults.innerHTML = `

                <div class="search-result">

                    <h3>🔎 No exact guide found</h3>

                    <p>
                        Try:
                        hacked, blackmail, photo misuse,
                        fake profile, harassment,
                        stalking, phishing, OTP,
                        UPI fraud, phone security.
                    </p>

                </div>

            `;

            return;
        }


        matches.forEach(({ problem }) => {

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

    });


    // =========================================================
    // SERVICE BUTTONS
    // =========================================================

    $$(".help-btn").forEach(button => {

        button.addEventListener("click", () => {

            showServiceGuide(
                button.dataset.service
            );

        });

    });


    function showServiceGuide(service) {

        const guides = {

            "Account Recovery": `
                <h3>🔐 Account Recovery</h3>

                <ol>
                    <li>Secure your email account first.</li>
                    <li>Change the compromised password.</li>
                    <li>Enable 2FA.</li>
                    <li>Review active sessions.</li>
                    <li>Remove unknown devices.</li>
                    <li>Check recovery email and phone.</li>
                    <li>Check security alerts.</li>
                    <li>Use only the official recovery process.</li>
                </ol>

                <h3>🚫 Never</h3>

                <ul>
                    <li>Never share OTP.</li>
                    <li>Never share recovery codes.</li>
                    <li>Never share your password.</li>
                    <li>Never pay for guaranteed recovery.</li>
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
                    <li>Verify independently.</li>
                    <li>Contact your bank if money was lost.</li>
                </ol>
            `,


            "Phone Security": `
                <h3>📱 Phone Security</h3>

                <ol>
                    <li>Check installed applications.</li>
                    <li>Review permissions.</li>
                    <li>Check Accessibility access.</li>
                    <li>Check Device Administrator access.</li>
                    <li>Check VPN/profile settings.</li>
                    <li>Update the device.</li>
                    <li>Remove suspicious applications.</li>
                    <li>Secure accounts from a trusted device.</li>
                </ol>
            `,


            "Online Fraud": `
                <h3>💳 Online & Financial Fraud</h3>

                <h3>🚨 If money has been lost</h3>

                <ol>
                    <li>Contact your bank immediately through its official channel.</li>
                    <li>Report the transaction as fraudulent.</li>
                    <li>Save transaction ID.</li>
                    <li>Save screenshots.</li>
                    <li>Secure your payment account.</li>
                    <li>Use official cybercrime reporting channels.</li>
                </ol>

                <h3>Never share</h3>

                <ul>
                    <li>OTP</li>
                    <li>UPI PIN</li>
                    <li>Password</li>
                    <li>CVV</li>
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
                <h3>🚨 Emergency Response</h3>

                <ol>
                    <li>Stop sending money or sensitive information.</li>
                    <li>Secure important accounts.</li>
                    <li>Preserve evidence.</li>
                    <li>Report through official channels.</li>
                    <li>Tell someone you trust.</li>
                </ol>

                <p>
                    If there is immediate physical danger,
                    prioritize your personal safety.
                </p>
            `

        };


        showGuide(
            service,
            guides[service] ||
            "<p>Use the official service/provider for help.</p>"
        );

    }


    // =========================================================
    // WOMEN SAFETY
    // =========================================================

    $$(".women-btn").forEach(button => {

        button.addEventListener("click", () => {

            showWomenGuide(
                button.dataset.women
            );

        });

    });


    function showWomenGuide(type) {

        const guides = {

            harassment: {

                title: "📞 Repeated Calls / Harassment",

                text: `
                    <ol>
                        <li>Do not panic.</li>
                        <li>Save screenshots.</li>
                        <li>Save call logs.</li>
                        <li>Save messages.</li>
                        <li>Save usernames and URLs.</li>
                        <li>Block when appropriate.</li>
                        <li>Review privacy settings.</li>
                        <li>Tell someone you trust.</li>
                        <li>Report serious threats through appropriate official channels.</li>
                    </ol>
                `
            },


            photo: {

                title: "📸 Photo Misuse",

                text: `
                    <ol>
                        <li>Screenshot the content.</li>
                        <li>Save profile URL.</li>
                        <li>Save post URL.</li>
                        <li>Save username.</li>
                        <li>Report the content.</li>
                        <li>Secure your account.</li>
                        <li>Do not pay for guaranteed removal.</li>
                    </ol>
                `
            },


            fakeprofile: {

                title: "🎭 Fake Profile",

                text: `
                    <ol>
                        <li>Save profile screenshot.</li>
                        <li>Save profile URL.</li>
                        <li>Save username.</li>
                        <li>Report impersonation.</li>
                        <li>Warn trusted contacts if necessary.</li>
                        <li>Secure your real account.</li>
                    </ol>
                `
            },


            blackmail: {

                title: "⚠️ Blackmail — Complete Safety Guide",

                text: `
                    <h3>🚨 1. Do not panic</h3>

                    <p>
                        Blackmailers often use fear and urgency.
                        Do not allow pressure to force you into
                        paying or sending more information.
                    </p>

                    <h3>2. Do NOT pay</h3>

                    <p>
                        Payment does not guarantee that the threats
                        will stop.
                    </p>

                    <h3>3. Do NOT send more content</h3>

                    <p>
                        Do not send additional photos, videos,
                        OTPs, passwords or personal information.
                    </p>

                    <h3>4. Save evidence</h3>

                    <ul>
                        <li>Messages</li>
                        <li>Screenshots</li>
                        <li>Username</li>
                        <li>Profile URL</li>
                        <li>Phone number</li>
                        <li>Payment requests</li>
                        <li>Dates and times</li>
                    </ul>

                    <h3>5. Secure accounts</h3>

                    <ol>
                        <li>Change important passwords.</li>
                        <li>Enable 2FA.</li>
                        <li>Review active sessions.</li>
                        <li>Remove unknown devices.</li>
                        <li>Review recovery information.</li>
                    </ol>

                    <h3>6. Report and block</h3>

                    <p>
                        Preserve evidence first, then report and
                        block where appropriate.
                    </p>

                    <h3>7. Tell someone you trust</h3>

                    <p>
                        You do not have to deal with blackmail alone.
                    </p>

                    <h3>8. If money was sent</h3>

                    <p>
                        Contact your bank/payment provider immediately
                        through its official channel.
                    </p>

                    <h3>9. If private content is published</h3>

                    <p>
                        Save the URL and screenshots and report the
                        content through the platform's official
                        privacy/abuse reporting system.
                    </p>

                    <h3>❤️ Remember</h3>

                    <p>
                        Being blackmailed is not your fault.
                    </p>
                `
            },


            private: {

                title: "🔒 Private Photo / Video Threat",

                text: `
                    <ol>
                        <li>Stop sending content.</li>
                        <li>Do not pay under pressure.</li>
                        <li>Save threats and messages.</li>
                        <li>Save usernames and URLs.</li>
                        <li>Secure accounts.</li>
                        <li>Report the account/content.</li>
                        <li>Tell someone you trust.</li>
                    </ol>
                `
            },


            stalking: {

                title: "👁️ Online Stalking",

                text: `
                    <h3>Review what is publicly visible</h3>

                    <ul>
                        <li>Phone number</li>
                        <li>Email</li>
                        <li>Location</li>
                        <li>Daily routine</li>
                        <li>Work/school information</li>
                        <li>Friends and family information</li>
                    </ul>

                    <h3>Then:</h3>

                    <ol>
                        <li>Review location sharing.</li>
                        <li>Change passwords.</li>
                        <li>Enable 2FA.</li>
                        <li>Review active sessions.</li>
                        <li>Save evidence.</li>
                        <li>Block/report the account.</li>
                    </ol>
                `
            }

        };


        const guide = guides[type];

        if (guide) {

            showGuide(
                guide.title,
                guide.text
            );

        }

    }


    // =========================================================
    // SECURITY TOOLS
    // =========================================================

    $$(".tool-btn, .security-tool-btn").forEach(button => {

        button.addEventListener("click", () => {

            openTool(
                button.dataset.tool
            );

        });

    });


    function openTool(tool) {

        const tools = {

            // -------------------------------------------------
            // SCAM CHECKER
            // -------------------------------------------------

            scam: `
                <h3>🔎 Scam Risk Checker</h3>

                <p>
                    যে warning signs আছে সেগুলো select করুন।
                </p>

                <div class="tool-checks">

                    <label>
                        <input type="checkbox">
                        Urgent pressure
                    </label>

                    <label>
                        <input type="checkbox">
                        Requests OTP/password
                    </label>

                    <label>
                        <input type="checkbox">
                        Suspicious link
                    </label>

                    <label>
                        <input type="checkbox">
                        Advance payment
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
                        Wants secrecy
                    </label>

                    <label>
                        <input type="checkbox">
                        Requests remote access
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


            // -------------------------------------------------
            // PASSWORD CHECKER
            // -------------------------------------------------

            password: `
                <h3>🔐 Password Safety Checker</h3>

                <p>
                    This basic checker runs locally.
                    Your password is not sent anywhere by CyberCare.
                </p>

                <input
                    id="passwordInput"
                    type="password"
                    placeholder="Enter password"
                    autocomplete="off"
                    style="
                        width:100%;
                        padding:13px;
                        margin:12px 0;
                        border:1px solid #cbd5e1;
                        border-radius:10px;
                    "
                >

                <button
                    class="internal-tool-action"
                    id="checkPassword"
                >
                    Check Password
                </button>

                <div id="passwordResult"></div>
            `,


            // -------------------------------------------------
            // URL SAFETY
            // -------------------------------------------------

            url: `
                <h3>🔗 URL Safety Guide</h3>

                <ol>
                    <li>Check the exact domain spelling.</li>
                    <li>Watch for strange characters.</li>
                    <li>Be careful with shortened links.</li>
                    <li>Do not trust logos alone.</li>
                    <li>Never enter credentials into an unexpected page.</li>
                    <li>Prefer opening the official app/site directly.</li>
                    <li>Do not install files from suspicious links.</li>
                </ol>

                <div class="scan-limit">
                    🔒 CyberCare does not claim that a URL is safe merely because it looks professional.
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
                    <li>📧 Recovery email</li>
                    <li>📞 Recovery phone number</li>
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
                    <li>📞 Phone number</li>
                    <li>🧾 Payment request</li>
                </ul>

                <p>
                    Preserve original evidence whenever possible.
                    Do not edit the original files.
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
                        I avoid suspicious links
                    </label>

                    <label>
                        <input type="checkbox">
                        I keep recovery information secure
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


            // -------------------------------------------------
            // BLACKMAIL RESPONSE
            // -------------------------------------------------

            blackmail: `
                <h3>⚠️ Blackmail Quick Response</h3>

                <ol>
                    <li>Do not pay.</li>
                    <li>Do not send more content.</li>
                    <li>Save evidence.</li>
                    <li>Save URLs and usernames.</li>
                    <li>Secure accounts.</li>
                    <li>Enable 2FA.</li>
                    <li>Report the account/content.</li>
                    <li>Tell someone you trust.</li>
                </ol>
            `,


            // -------------------------------------------------
            // ACCOUNT SECURITY
            // -------------------------------------------------

            account: `
                <h3>🔐 Account Security Checklist</h3>

                <ol>
                    <li>Change reused passwords.</li>
                    <li>Enable 2FA.</li>
                    <li>Review logged-in devices.</li>
                    <li>Remove unknown devices.</li>
                    <li>Check recovery email.</li>
                    <li>Check recovery phone.</li>
                    <li>Review third-party access.</li>
                    <li>Check security alerts.</li>
                </ol>
            `

        };


        if (!tools[tool]) {

            showGuide(
                "🛠️ CyberCare Tool",
                "<p>এই tool-এর guide বর্তমানে available নয়।</p>"
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

        let count = 0;

        checks.forEach(check => {

            if (check.checked)
                count++;

        });


        const result =
            $("#scamResult");

        if (!result) return;


        if (count === 0) {

            result.innerHTML = `
                <div class="scan-limit">
                    🟢 No warning signs selected.
                    Still verify unexpected requests independently.
                </div>
            `;

        }

        else if (count <= 2) {

            result.innerHTML = `
                <div class="scan-limit">
                    🟡 Some warning signs detected.
                    Stop and verify independently before taking action.
                </div>
            `;

        }

        else if (count <= 4) {

            result.innerHTML = `
                <div class="scan-limit">
                    🟠 Multiple warning signs detected.
                    Do not send money or sensitive information.
                </div>
            `;

        }

        else {

            result.innerHTML = `
                <div class="scan-limit">
                    🚨 High-risk warning pattern.
                    Stop interacting, do not pay, do not share sensitive information,
                    and verify through an official channel.
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

        if (!input || !result)
            return;


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


        if (password.length < 8) {

            message =
                "🔴 Very weak — use a much longer password.";

        }

        else if (score <= 2) {

            message =
                "🔴 Weak — use a longer and more unique password.";

        }

        else if (score <= 4) {

            message =
                "🟡 Moderate — make it longer and unique.";

        }

        else {

            message =
                "🟢 Strong structure — keep it private and unique.";

        }


        result.innerHTML = `
            <div class="scan-limit">
                ${message}
            </div>
        `;


        // Clear password field after checking
        // so it is not accidentally left visible.
        setTimeout(() => {

            if (
                document.getElementById("passwordInput") === input
            ) {
                input.value = "";
            }

        }, 1500);

    }


    // =========================================================
    // SAFETY SCORE
    // =========================================================

    function calculateSafetyScore() {

        const checks =
            $$("#cybercareModal .score-checks input");

        const total =
            checks.length;

        let yes = 0;


        checks.forEach(check => {

            if (check.checked)
                yes++;

        });


        if (!total)
            return;


        const percentage =
            Math.round(
                (yes / total) * 100
            );


        const result =
            $("#scoreResult");

        if (!result)
            return;


        let level;


        if (percentage >= 80) {

            level =
                "🟢 Excellent basic safety habits";

        }

        else if (percentage >= 60) {

            level =
                "🟡 Good start — improve a few areas";

        }

        else if (percentage >= 40) {

            level =
                "🟠 Needs improvement";

        }

        else {

            level =
                "🔴 Important security habits are missing";

        }


        result.innerHTML = `
            <div class="scan-limit">

                <h3>${percentage}%</h3>

                <p>${level}</p>

            </div>
        `;

    }


    // =========================================================
    // LEARNING
    // =========================================================

    $$(".learn-card").forEach(card => {

        card.addEventListener("click", () => {

            showLearning(
                card.dataset.learn
            );

        });

    });


    function showLearning(topic) {

        const content = {

            password: `
                <h3>🔐 Password Safety</h3>

                <p>
                    Use long, unique passwords for important accounts.
                    Avoid reusing passwords.
                </p>

                <p>
                    Use 2FA wherever available.
                </p>
            `,


            "2fa": `
                <h3>🔑 Two-Factor Authentication</h3>

                <p>
                    2FA adds another security layer beyond your password.
                </p>

                <ul>
                    <li>Email</li>
                    <li>Social media</li>
                    <li>Financial services</li>
                </ul>
            `,


            phishing: `
                <h3>🎣 Phishing</h3>

                <p>
                    Phishing attempts to trick you into giving away
                    sensitive information.
                </p>

                <p>
                    Always verify unexpected requests independently.
                </p>
            `,


            privacy: `
                <h3>🔒 Privacy</h3>

                <p>
                    Review who can contact you, see your information
                    and access your location.
                </p>
            `,


            phone: `
                <h3>📱 Phone Security</h3>

                <p>
                    Keep your device updated, use trusted applications
                    and review permissions regularly.
                </p>
            `,


            financial: `
                <h3>💳 Financial Safety</h3>

                <p>
                    Never share OTPs, UPI PINs, passwords or banking
                    credentials.
                </p>
            `

        };


        showGuide(
            "🎓 Learn Cybersecurity",
            content[topic] ||
            "<p>Learn safe digital habits.</p>"
        );

    }


    // =========================================================
    // EMERGENCY RESPONSE
    // =========================================================

    $$("[data-emergency]").forEach(button => {

        button.addEventListener("click", () => {

            emergencyGuide(
                button.dataset.emergency
            );

        });

    });


    function emergencyGuide(type) {

        const guides = {

            account: `
                <h3>🔐 Account Compromised</h3>

                <ol>
                    <li>Secure your email.</li>
                    <li>Change password.</li>
                    <li>Enable 2FA.</li>
                    <li>Review sessions.</li>
                    <li>Remove unknown devices.</li>
                    <li>Check recovery information.</li>
                    <li>Review security alerts.</li>
                    <li>Use official recovery.</li>
                </ol>
            `,


            money: `
                <h3>💳 Money at Risk</h3>

                <ol>
                    <li>Contact your bank immediately through its official channel.</li>
                    <li>Report the transaction as fraudulent.</li>
                    <li>Save transaction ID.</li>
                    <li>Save screenshots.</li>
                    <li>Secure payment accounts.</li>
                    <li>Use official cybercrime reporting.</li>
                </ol>
            `,


            blackmail: `
                <h3>⚠️ Blackmail / Threat</h3>

                <ol>
                    <li>Do not pay.</li>
                    <li>Do not send more content.</li>
                    <li>Save evidence.</li>
                    <li>Secure accounts.</li>
                    <li>Enable 2FA.</li>
                    <li>Report and block.</li>
                    <li>Tell someone you trust.</li>
                </ol>
            `,


            phone: `
                <h3>📱 Phone Compromised</h3>

                <ol>
                    <li>Stop using suspicious applications.</li>
                    <li>Review permissions.</li>
                    <li>Check Accessibility access.</li>
                    <li>Check Device Administrator access.</li>
                    <li>Update the device.</li>
                    <li>Secure accounts from a trusted device.</li>
                </ol>
            `,


            harassment: `
                <h3>📞 Harassment Emergency</h3>

                <ol>
                    <li>Save call logs.</li>
                    <li>Save messages.</li>
                    <li>Save screenshots.</li>
                    <li>Do not unnecessarily engage.</li>
                    <li>Block when appropriate.</li>
                    <li>Tell someone you trust.</li>
                    <li>Preserve serious threats as evidence.</li>
                </ol>
            `

        };


        showGuide(
            "🚨 Emergency Cyber Response",
            guides[type] ||
            "<p>Prioritize your safety and use appropriate official help.</p>"
        );

    }


    // =========================================================
    // ADVANCED SCAN SYSTEM
    // =========================================================

    function createScanModal() {

        document.getElementById(
            "cybercareScanModal"
        )?.remove();


        const wrapper =
            document.createElement("div");


        wrapper.id =
            "cybercareScanModal";


        wrapper.className =
            "guide-overlay";


        wrapper.innerHTML = `

            <div
                class="scan-modal"
                role="dialog"
                aria-modal="true"
            >

                <div class="scan-modal-header">

                    <h2>🛡️ CyberCare Security Scan</h2>

                    <button
                        class="scan-close"
                        aria-label="Close"
                    >
                        ✕
                    </button>

                </div>


                <p>
                    This is a local safety checklist.
                    It does not perform a real antivirus scan
                    or access your private accounts.
                </p>


                <div class="scan-check-list">

                    <div class="scan-check-item">
                        <strong>🔐 Account Security</strong>
                        Check passwords, 2FA and active sessions.
                    </div>

                    <div class="scan-check-item">
                        <strong>📱 Device Security</strong>
                        Check unknown apps and permissions.
                    </div>

                    <div class="scan-check-item">
                        <strong>🎣 Phishing</strong>
                        Check suspicious links and messages.
                    </div>

                    <div class="scan-check-item">
                        <strong>💳 Financial Safety</strong>
                        Check unexpected payment requests.
                    </div>

                    <div class="scan-check-item">
                        <strong>👁️ Privacy</strong>
                        Check location and public information.
                    </div>

                    <div class="scan-check-item">
                        <strong>🚨 Threats</strong>
                        Check harassment, blackmail or stalking.
                    </div>

                </div>


                <button
                    class="guide-ok"
                    id="runCyberScan"
                >
                    Start Safety Scan
                </button>


                <div
                    id="cyberScanProgress"
                    style="display:none;margin-top:18px;"
                >

                    <strong id="cyberScanStep">
                        Preparing scan...
                    </strong>

                    <div class="scan-progress">

                        <div
                            class="scan-progress-bar"
                            id="cyberScanBar"
                        ></div>

                    </div>

                </div>


                <div
                    id="cyberScanResult"
                    style="display:none;margin-top:18px;"
                ></div>


                <div class="scan-disclaimer">

                    ⚠️ CyberCare cannot inspect your phone,
                    accounts, files or messages automatically
                    from a normal webpage. This scan is a
                    guided security checklist.

                </div>

            </div>

        `;


        document.body.appendChild(wrapper);


        $(".scan-close", wrapper)
            ?.addEventListener(
                "click",
                () => wrapper.remove()
            );


        $(".guide-overlay", wrapper)
            ?.addEventListener("click", event => {

                if (
                    event.target === wrapper
                ) {
                    wrapper.remove();
                }

            });


        $("#runCyberScan", wrapper)
            ?.addEventListener(
                "click",
                runCyberScan
            );

    }


    function runCyberScan() {

        const button =
            $("#runCyberScan");

        const progress =
            $("#cyberScanProgress");

        const bar =
            $("#cyberScanBar");

        const step =
            $("#cyberScanStep");

        const result =
            $("#cyberScanResult");


        if (
            !button ||
            !progress ||
            !bar ||
            !step ||
            !result
        ) return;


        button.disabled = true;

        button.textContent =
            "Scanning...";

        progress.style.display =
            "block";

        result.style.display =
            "none";


        const steps = [

            "Checking account security checklist...",
            "Checking device security checklist...",
            "Checking phishing risks...",
            "Checking financial safety...",
            "Checking privacy exposure...",
            "Checking threat indicators..."

        ];


        let current =
            0;


        const interval =
            setInterval(() => {

                const percentage =
                    Math.round(
                        ((current + 1) /
                            steps.length) * 100
                    );


                bar.style.width =
                    percentage + "%";


                step.textContent =
                    steps[current];


                current++;


                if (
                    current >= steps.length
                ) {

                    clearInterval(interval);


                    setTimeout(() => {

                        button.disabled =
                            false;

                        button.textContent =
                            "Scan Again";


                        result.style.display =
                            "block";


                        result.innerHTML = `

                            <div class="scan-result safe">

                                <h3>
                                    🛡️ Guided Scan Complete
                                </h3>

                                <p>
                                    No automatic device/account
                                    inspection was performed.
                                </p>

                                <p>
                                    CyberCare recommends checking:
                                </p>

                                <ol>
                                    <li>Unknown logged-in devices</li>
                                    <li>2FA status</li>
                                    <li>Unknown applications</li>
                                    <li>App permissions</li>
                                    <li>Location sharing</li>
                                    <li>Suspicious messages/links</li>
                                    <li>Unexpected financial activity</li>
                                </ol>

                            </div>

                        `;

                    }, 500);

                }

            }, 650);

    }


    // =========================================================
    // SCAN BUTTON SUPPORT
    // =========================================================

    $$(
        "#scanBtn, #startScan, .scan-main-btn"
    ).forEach(button => {

        button.addEventListener(
            "click",
            createScanModal
        );

    });


    // =========================================================
    // MANUAL SCAN SUPPORT
    // =========================================================

    $$(
        "#manualScanBtn, .scan-manual-btn"
    ).forEach(button => {

        button.addEventListener("click", () => {

            showGuide(
                "🛡️ Manual Security Check",
                `
                    <h3>🔐 Account</h3>

                    <ul>
                        <li>Change reused passwords.</li>
                        <li>Enable 2FA.</li>
                        <li>Review active sessions.</li>
                    </ul>

                    <h3>📱 Phone</h3>

                    <ul>
                        <li>Check unknown apps.</li>
                        <li>Review permissions.</li>
                        <li>Check Accessibility access.</li>
                    </ul>

                    <h3>🎣 Messages</h3>

                    <ul>
                        <li>Do not click suspicious links.</li>
                        <li>Never share OTP.</li>
                        <li>Verify unexpected requests.</li>
                    </ul>

                    <h3>💳 Money</h3>

                    <ul>
                        <li>Check recent transactions.</li>
                        <li>Verify payment requests.</li>
                        <li>Contact your bank if fraud occurred.</li>
                    </ul>
                `
            );

        });

    });


    // =========================================================
    // GUIDE MODAL
    // =========================================================

    function showGuide(title, content) {

        document.getElementById(
            "cybercareModal"
        )?.remove();


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
                    aria-label="${escapeHTML(title)}"
                >

                    <button
                        class="guide-close"
                        aria-label="Close"
                    >
                        ✕
                    </button>


                    <h2>${title}</h2>


                    <div class="guide-content">
                        ${content}
                    </div>


                    <button class="guide-ok">
                        Got it
                    </button>

                </div>

            </div>

        `;


        document.body.appendChild(modal);


        $(".guide-close", modal)
            ?.addEventListener("click", () => {

                modal.remove();

            });


        $(".guide-ok", modal)
            ?.addEventListener("click", () => {

                modal.remove();

            });


        $(".guide-overlay", modal)
            ?.addEventListener("click", event => {

                if (
                    event.target.classList.contains(
                        "guide-overlay"
                    )
                ) {

                    modal.remove();

                }

            });

    }


    // =========================================================
    // ESC KEY
    // =========================================================

    document.addEventListener("keydown", event => {

        if (event.key !== "Escape")
            return;


        closeSideMenu();


        document.getElementById(
            "cybercareModal"
        )?.remove();


        document.getElementById(
            "cybercareScanModal"
        )?.remove();

    });


    // =========================================================
    // BACK BUTTON / POPSTATE SUPPORT
    // =========================================================

    window.addEventListener("popstate", () => {

        document.getElementById(
            "cybercareModal"
        )?.remove();

        document.getElementById(
            "cybercareScanModal"
        )?.remove();

        closeSideMenu();

    });


    // =========================================================
    // PREVENT ACCIDENTAL FORM SUBMISSION
    // =========================================================

    document.addEventListener("submit", event => {

        const form =
            event.target;

        if (
            form &&
            form.dataset.cybercareNoSubmit === "true"
        ) {

            event.preventDefault();

        }

    });


    // =========================================================
    // ONLINE / OFFLINE STATUS
    // =========================================================

    function updateConnectionStatus() {

        const indicator =
            document.getElementById(
                "connectionStatus"
            );

        if (!indicator)
            return;


        if (navigator.onLine) {

            indicator.textContent =
                "🟢 Online";

            indicator.classList.remove(
                "offline"
            );

        }

        else {

            indicator.textContent =
                "🔴 Offline";

            indicator.classList.add(
                "offline"
            );

        }

    }


    window.addEventListener(
        "online",
        updateConnectionStatus
    );

    window.addEventListener(
        "offline",
        updateConnectionStatus
    );

    updateConnectionStatus();


    // =========================================================
    // LONG PRESS PROTECTION FOR SECURITY BUTTONS
    // =========================================================

    $$(
        ".emergency-btn, .scan-main-btn"
    ).forEach(button => {

        button.setAttribute(
            "aria-label",
            button.textContent.trim()
        );

    });


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
        "CyberCare Advanced Security System Loaded."
    );

});
