/* ============================================================
   CYBERCARE — ADVANCED COMPLETE SCRIPT.JS
   ------------------------------------------------------------
   Features:
   • Smart problem search
   • Account recovery
   • Blackmail / sextortion protection
   • Harassment / stalking
   • Photo misuse
   • Fake profile
   • Scam / phishing
   • UPI / financial fraud
   • Phone security
   • Evidence checklist
   • Privacy checklist
   • Password checker
   • Scam risk analyzer
   • Cyber safety score
   • Women's digital safety
   • Emergency response
   • Bengali / English
   • Dark mode
   • LocalStorage
   • Copy guide
   • Share guide
   • Keyboard / ESC support
   • Mobile friendly
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* ========================================================
       BASIC HELPERS
    ======================================================== */

    const $ = (selector, parent = document) =>
        parent.querySelector(selector);

    const $$ = (selector, parent = document) =>
        [...parent.querySelectorAll(selector)];

    const safeText = value =>
        String(value ?? "").trim();

    const normalize = value =>
        safeText(value).toLowerCase();

    function escapeHTML(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function scrollToSection(id) {

        const section = document.getElementById(id);

        if (!section) return;

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }


    /* ========================================================
       ELEMENTS
    ======================================================== */

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


    /* ========================================================
       SIDE MENU
    ======================================================== */

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


    /* ========================================================
       MENU NAVIGATION
    ======================================================== */

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

                const emergency =
                    $(".emergency-section");

                emergency?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* ========================================================
       HERO BUTTONS
    ======================================================== */

    emergencyBtn?.addEventListener("click", () => {

        const section = $(".emergency-section");

        section?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });


    quickHelpBtn?.addEventListener("click", () => {

        scrollToSection("search");

        setTimeout(() => {
            problemSearch?.focus();
        }, 500);

    });


    /* ========================================================
       DARK MODE
    ======================================================== */

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


    /* ========================================================
       LANGUAGE SYSTEM
    ======================================================== */

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

        "Evidence Checklist":
            "প্রমাণ সংরক্ষণের তালিকা",

        "Privacy Checklist":
            "প্রাইভেসি চেকলিস্ট",

        "Password Safety":
            "পাসওয়ার্ড নিরাপত্তা",

        "Cyber Safety Score":
            "সাইবার নিরাপত্তা স্কোর"

    };


    function translatePage() {

        $$(
            "h1,h2,h3,h4,h5,p,button,strong,small,label,span"
        ).forEach(element => {

            if (
                element.closest("#cybercareModal") ||
                element.closest(".guide-overlay")
            ) return;

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


    /* ========================================================
       COMPLETE PROBLEM DATABASE
    ======================================================== */

    const problems = [

        {
            id: "account",
            keywords: [
                "facebook",
                "instagram",
                "whatsapp",
                "google",
                "youtube",
                "account",
                "hacked",
                "hack",
                "login",
                "password",
                "ফেসবুক",
                "ইনস্টাগ্রাম",
                "হোয়াটসঅ্যাপ",
                "গুগল",
                "অ্যাকাউন্ট",
                "হ্যাক",
                "পাসওয়ার্ড"
            ],
            title: "🔐 Account Recovery",
            short:
                "Your account may be compromised. Secure the email and account first.",
            content: `
                <h3>🚨 First priority</h3>

                <ol>
                    <li>Secure your email account first.</li>
                    <li>Change the compromised account password.</li>
                    <li>Use a strong, unique password.</li>
                    <li>Enable two-factor authentication.</li>
                    <li>Check active sessions and logged-in devices.</li>
                    <li>Remove devices you do not recognize.</li>
                    <li>Check recovery email and phone number.</li>
                    <li>Review recent security activity.</li>
                    <li>Remove suspicious third-party applications.</li>
                    <li>Use only the platform's official recovery system.</li>
                </ol>

                <div class="guide-warning">
                    Never share OTPs, recovery codes or passwords with anyone.
                </div>
            `
        },


        {
            id: "blackmail",
            keywords: [
                "blackmail",
                "sextortion",
                "threat",
                "private photo",
                "private video",
                "leak",
                "intimate",
                "ব্ল্যাকমেইল",
                "সেক্সটরশন",
                "হুমকি",
                "ব্যক্তিগত ছবি",
                "ব্যক্তিগত ভিডিও"
            ],
            title: "⚠️ Blackmail / Private Content Threat",
            short:
                "Do not pay or send more content. Preserve evidence and secure your accounts.",
            content: `
                <h3>🚨 Do not panic</h3>

                <p>
                    Blackmailers often create fear and urgency.
                    Do not let pressure force you to send money
                    or additional content.
                </p>

                <h3>1. Do NOT pay</h3>

                <p>
                    Payment does not guarantee that the threats will stop.
                </p>

                <h3>2. Do NOT send more content</h3>

                <ul>
                    <li>Do not send additional photos.</li>
                    <li>Do not send videos.</li>
                    <li>Do not send OTPs.</li>
                    <li>Do not send passwords.</li>
                    <li>Do not send identity documents.</li>
                </ul>

                <h3>3. Preserve evidence</h3>

                <ul>
                    <li>Screenshot messages.</li>
                    <li>Save usernames.</li>
                    <li>Save profile URLs.</li>
                    <li>Save phone numbers.</li>
                    <li>Save payment requests.</li>
                    <li>Record dates and times.</li>
                </ul>

                <h3>4. Secure your accounts</h3>

                <ol>
                    <li>Change important passwords.</li>
                    <li>Enable 2FA.</li>
                    <li>Review active sessions.</li>
                    <li>Remove unknown devices.</li>
                    <li>Check recovery information.</li>
                </ol>

                <h3>5. Report and block</h3>

                <p>
                    Preserve evidence first, then report and block
                    where appropriate.
                </p>

                <h3>6. Tell someone you trust</h3>

                <p>
                    You do not have to handle blackmail alone.
                </p>

                <h3>7. If money was already sent</h3>

                <p>
                    Contact your bank or payment provider immediately
                    and preserve transaction information.
                </p>

                <h3>❤️ Remember</h3>

                <p>
                    Being blackmailed is not your fault.
                </p>
            `
        },


        {
            id: "harassment",
            keywords: [
                "call",
                "calling",
                "phone call",
                "harassment",
                "abuse",
                "disturb",
                "message",
                "repeated call",
                "হয়রানি",
                "বারবার ফোন",
                "বিরক্ত",
                "কল"
            ],
            title: "📞 Repeated Calls / Harassment",
            short:
                "Preserve evidence, reduce contact and use blocking/reporting tools.",
            content: `
                <h3>📞 What to do</h3>

                <ol>
                    <li>Stay calm and avoid unnecessary engagement.</li>
                    <li>Save call logs.</li>
                    <li>Screenshot threatening messages.</li>
                    <li>Save usernames and profile URLs.</li>
                    <li>Block the number/account when appropriate.</li>
                    <li>Review privacy settings.</li>
                    <li>Restrict unknown callers/messages.</li>
                    <li>Tell someone you trust.</li>
                    <li>Report serious threats through appropriate official channels.</li>
                </ol>

                <div class="guide-warning">
                    If you feel physically unsafe, prioritize your immediate safety.
                </div>
            `
        },


        {
            id: "photo",
            keywords: [
                "photo",
                "picture",
                "image",
                "photo misuse",
                "picture misuse",
                "ছবি",
                "ছবির অপব্যবহার",
                "ফটো"
            ],
            title: "📸 Photo Misuse",
            short:
                "Preserve the post/profile evidence and report the misuse.",
            content: `
                <ol>
                    <li>Take screenshots.</li>
                    <li>Save the profile URL.</li>
                    <li>Save the post/content URL.</li>
                    <li>Record the username.</li>
                    <li>Report the content through the platform.</li>
                    <li>Secure your own account.</li>
                    <li>Review privacy settings.</li>
                    <li>Do not pay anyone promising guaranteed removal.</li>
                </ol>
            `
        },


        {
            id: "fakeprofile",
            keywords: [
                "fake profile",
                "fake account",
                "impersonation",
                "fake id",
                "ভুয়া প্রোফাইল",
                "ফেক প্রোফাইল",
                "ফেক অ্যাকাউন্ট"
            ],
            title: "🎭 Fake Profile / Impersonation",
            short:
                "Save the fake profile details and report impersonation.",
            content: `
                <ol>
                    <li>Screenshot the fake profile.</li>
                    <li>Save the complete profile URL.</li>
                    <li>Save username.</li>
                    <li>Save relevant posts/messages.</li>
                    <li>Report the profile for impersonation.</li>
                    <li>Warn important contacts if necessary.</li>
                    <li>Secure your genuine account.</li>
                </ol>
            `
        },


        {
            id: "financial",
            keywords: [
                "upi",
                "bank",
                "money",
                "fraud",
                "payment",
                "scam",
                "transaction",
                "debit",
                "credit",
                "টাকা",
                "প্রতারণা",
                "ইউপিআই",
                "ব্যাংক",
                "পেমেন্ট"
            ],
            title: "💳 Online & Financial Fraud",
            short:
                "Contact your bank/payment provider immediately if money is at risk.",
            content: `
                <h3>🚨 If money has been lost</h3>

                <ol>
                    <li>Contact your bank immediately.</li>
                    <li>Report the transaction as fraudulent.</li>
                    <li>Contact the payment provider if applicable.</li>
                    <li>Save transaction ID.</li>
                    <li>Save screenshots.</li>
                    <li>Save messages and phone numbers.</li>
                    <li>Secure your banking/payment account.</li>
                    <li>Use official cybercrime reporting channels.</li>
                </ol>

                <h3>🚫 Never share</h3>

                <ul>
                    <li>OTP</li>
                    <li>UPI PIN</li>
                    <li>Password</li>
                    <li>Banking PIN</li>
                    <li>Recovery codes</li>
                </ul>
            `
        },


        {
            id: "phishing",
            keywords: [
                "phishing",
                "link",
                "otp",
                "fake website",
                "fake sms",
                "suspicious link",
                "ফিশিং",
                "ওটিপি",
                "লিংক",
                "ভুয়া ওয়েবসাইট"
            ],
            title: "🎣 Scam & Phishing",
            short:
                "Do not click suspicious links or share OTPs and passwords.",
            content: `
                <ol>
                    <li>Do not click suspicious links.</li>
                    <li>Never share OTP.</li>
                    <li>Never share passwords.</li>
                    <li>Never share UPI PIN.</li>
                    <li>Check the sender carefully.</li>
                    <li>Verify requests independently.</li>
                    <li>Open official websites/apps directly.</li>
                    <li>Do not trust logos alone.</li>
                </ol>
            `
        },


        {
            id: "phone",
            keywords: [
                "phone",
                "mobile",
                "spyware",
                "unknown app",
                "malware",
                "virus",
                "accessibility",
                "device administrator",
                "স্পাইওয়্যার",
                "ভাইরাস",
                "ফোন",
                "মোবাইল"
            ],
            title: "📱 Phone Security",
            short:
                "Review apps, permissions and special access if you suspect your phone is compromised.",
            content: `
                <ol>
                    <li>Check installed applications.</li>
                    <li>Remove applications you do not recognize.</li>
                    <li>Review app permissions.</li>
                    <li>Check Accessibility access.</li>
                    <li>Check Device Administrator access.</li>
                    <li>Review notification access.</li>
                    <li>Review VPN/profile settings.</li>
                    <li>Update the operating system.</li>
                    <li>Update trusted security software.</li>
                    <li>Secure important accounts from a trusted device if necessary.</li>
                </ol>

                <div class="guide-warning">
                    Do not install unknown "hacking", "tracking" or "recovery"
                    applications recommended by strangers.
                </div>
            `
        },


        {
            id: "stalking",
            keywords: [
                "stalking",
                "online stalking",
                "track",
                "tracking",
                "location",
                "স্টকিং",
                "ট্র্যাক",
                "লোকেশন"
            ],
            title: "👁️ Online Stalking",
            short:
                "Reduce exposed personal information and review location/account access.",
            content: `
                <h3>🔎 Check what is publicly visible</h3>

                <ul>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>Location</li>
                    <li>Daily routine</li>
                    <li>Work/school information</li>
                    <li>Friends and family information</li>
                    <li>Photos showing your location</li>
                </ul>

                <h3>Then</h3>

                <ol>
                    <li>Review location sharing.</li>
                    <li>Change passwords if needed.</li>
                    <li>Enable 2FA.</li>
                    <li>Review active sessions.</li>
                    <li>Save evidence.</li>
                    <li>Block/report the account.</li>
                </ol>
            `
        },


        {
            id: "privacy",
            keywords: [
                "privacy",
                "private",
                "location",
                "permission",
                "permissions",
                "প্রাইভেসি",
                "গোপনীয়তা",
                "পারমিশন"
            ],
            title: "🔒 Privacy & Permission Safety",
            short:
                "Review what your apps and accounts can access.",
            content: `
                <ul>
                    <li>🔒 Account privacy</li>
                    <li>📍 Location sharing</li>
                    <li>📷 Camera permissions</li>
                    <li>🎙️ Microphone permissions</li>
                    <li>👥 Contact permissions</li>
                    <li>📱 Connected devices</li>
                    <li>🔑 Active sessions</li>
                    <li>🔗 Third-party applications</li>
                </ul>
            `
        },


        {
            id: "evidence",
            keywords: [
                "evidence",
                "proof",
                "screenshot",
                "প্রমাণ",
                "স্ক্রিনশট"
            ],
            title: "🧾 Evidence Checklist",
            short:
                "Preserve evidence before deleting or blocking when appropriate.",
            content: `
                <ul>
                    <li>📸 Screenshots</li>
                    <li>👤 Username</li>
                    <li>🔗 Profile URL</li>
                    <li>💬 Messages</li>
                    <li>☎️ Call logs</li>
                    <li>🕐 Date and time</li>
                    <li>💳 Transaction ID</li>
                    <li>📧 Emails</li>
                    <li>📱 Relevant phone numbers</li>
                </ul>

                <p>
                    Preserve original evidence whenever possible.
                </p>
            `
        }

    ];


    /* ========================================================
       SEARCH ENGINE
    ======================================================== */

    function findProblems(query) {

        const q = normalize(query);

        if (!q) return [];

        const words = q
            .split(/\s+/)
            .filter(Boolean);

        return problems
            .map(problem => {

                let score = 0;

                problem.keywords.forEach(keyword => {

                    const key =
                        normalize(keyword);

                    if (q.includes(key)) {
                        score += 10;
                    }

                    words.forEach(word => {

                        if (
                            word.length >= 3 &&
                            key.includes(word)
                        ) {
                            score += 2;
                        }

                    });

                });

                return {
                    problem,
                    score
                };

            })
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score)
            .map(item => item.problem);

    }


    function renderSearchResults(matches) {

        if (!searchResults) return;

        searchResults.innerHTML = "";

        if (!matches.length) {

            searchResults.innerHTML = `
                <div class="search-result">

                    <h3>🔎 No exact guide found</h3>

                    <p>
                        Try:
                        blackmail, hacked account,
                        harassment, fake profile,
                        UPI fraud, phishing,
                        photo misuse, stalking,
                        phone security.
                    </p>

                </div>
            `;

            return;
        }

        matches.slice(0, 6).forEach(problem => {

            const result =
                document.createElement("div");

            result.className =
                "search-result";

            result.innerHTML = `

                <h3>${problem.title}</h3>

                <p>${problem.short}</p>

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
                        problem.content
                    );

                });

            searchResults.appendChild(result);

        });

    }


    problemSearch?.addEventListener(
        "input",
        () => {

            const query =
                problemSearch.value;

            if (!normalize(query)) {

                if (searchResults)
                    searchResults.innerHTML = "";

                return;

            }

            renderSearchResults(
                findProblems(query)
            );

        }
    );


    /* ========================================================
       SERVICE GUIDES
    ======================================================== */

    const serviceGuides = {

        "Account Recovery": problems.find(
            p => p.id === "account"
        )?.content,

        "Scam & Phishing": problems.find(
            p => p.id === "phishing"
        )?.content,

        "Phone Security": problems.find(
            p => p.id === "phone"
        )?.content,

        "Online Fraud": problems.find(
            p => p.id === "financial"
        )?.content,

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
                <li>Review third-party applications.</li>
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
                `
                    <p>
                        Use the official service/provider
                        for further assistance.
                    </p>
                `
            );

        });

    });


    /* ========================================================
       WOMEN SAFETY
    ======================================================== */

    const womenGuides = {

        harassment: {
            title: "📞 Repeated Calls / Harassment",
            content: problems.find(
                p => p.id === "harassment"
            )?.content
        },

        photo: {
            title: "📸 Photo Misuse",
            content: problems.find(
                p => p.id === "photo"
            )?.content
        },

        fakeprofile: {
            title: "🎭 Fake Profile",
            content: problems.find(
                p => p.id === "fakeprofile"
            )?.content
        },

        blackmail: {
            title: "⚠️ Blackmail — Complete Safety Guide",
            content: problems.find(
                p => p.id === "blackmail"
            )?.content
        },

        private: {
            title: "🔒 Private Photo / Video Threat",
            content: `
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
            content: problems.find(
                p => p.id === "stalking"
            )?.content
        }

    };


    $$(".women-btn").forEach(button => {

        button.addEventListener("click", () => {

            const type =
                button.dataset.women;

            const guide =
                womenGuides[type];

            if (!guide) return;

            showGuide(
                guide.title,
                guide.content
            );

        });

    });


    /* ========================================================
       CYBERCARE TOOLS
    ======================================================== */

    $$(".tool-btn").forEach(button => {

        button.addEventListener("click", () => {

            openTool(
                button.dataset.tool
            );

        });

    });


    function openTool(tool) {

        const tools = {

            scam: `
                <h3>🔎 Scam Risk Analyzer</h3>

                <p>
                    Select the warning signs you noticed.
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
                        Requests remote access
                    </label>

                    <label>
                        <input type="checkbox">
                        Asks for secrecy
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


            password: `
                <h3>🔐 Password Safety Checker</h3>

                <p>
                    This checker runs locally in your browser.
                    The password is not sent by this tool.
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


            url: `
                <h3>🔗 URL Safety Guide</h3>

                <ol>
                    <li>Check the domain spelling carefully.</li>
                    <li>Watch for strange characters.</li>
                    <li>Be careful with shortened links.</li>
                    <li>Do not trust logos alone.</li>
                    <li>Never enter credentials into an unexpected page.</li>
                    <li>Prefer opening the official app/site directly.</li>
                    <li>Verify payment requests independently.</li>
                </ol>

                <div class="guide-warning">
                    HTTPS alone does not prove that a website is legitimate.
                </div>
            `,


            privacy: `
                <h3>🔒 Privacy Checklist</h3>

                <ul>
                    <li>🔒 Account privacy</li>
                    <li>📍 Location sharing</li>
                    <li>📷 Camera permissions</li>
                    <li>🎙️ Microphone permissions</li>
                    <li>👥 Contact permissions</li>
                    <li>📱 Connected devices</li>
                    <li>🔑 Active sessions</li>
                    <li>🔗 Third-party applications</li>
                    <li>📡 Bluetooth/device sharing</li>
                    <li>☁️ Cloud backup access</li>
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
                    <li>📱 Phone numbers</li>
                </ul>

                <p>
                    Preserve original evidence whenever possible.
                </p>
            `,


            score: `
                <h3>🛡️ Cyber Safety Score</h3>

                <p>
                    Check the habits you already follow.
                </p>

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
                        I keep recovery information updated
                    </label>

                    <label>
                        <input type="checkbox">
                        I avoid suspicious links
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
            `

        };

        if (!tools[tool]) return;

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


    /* ========================================================
       SCAM ANALYZER
    ======================================================== */

    function analyzeScam() {

        const checks =
            $$("#cybercareModal .tool-checks input");

        const count =
            checks.filter(check => check.checked).length;

        const result =
            $("#scamResult");

        if (!result) return;

        let html = "";

        if (count === 0) {

            html = `
                <div class="tool-result safe">
                    <h3>🟢 Low warning pattern</h3>
                    <p>
                        No warning signs were selected.
                        Still verify unexpected requests independently.
                    </p>
                </div>
            `;

        }

        else if (count <= 2) {

            html = `
                <div class="tool-result warning">
                    <h3>🟡 Caution</h3>
                    <p>
                        Some warning signs were detected.
                        Stop and verify independently before acting.
                    </p>
                </div>
            `;

        }

        else if (count <= 5) {

            html = `
                <div class="tool-result warning">
                    <h3>🟠 High Risk</h3>
                    <p>
                        Multiple scam indicators are present.
                        Do not pay or share sensitive information.
                    </p>
                </div>
            `;

        }

        else {

            html = `
                <div class="tool-result danger">
                    <h3>🔴 Very High Risk</h3>
                    <p>
                        Strong scam warning pattern detected.
                        Stop communication and verify through
                        an official channel.
                    </p>
                </div>
            `;

        }

        result.innerHTML = html;

    }


    /* ========================================================
       PASSWORD CHECKER
    ======================================================== */

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
                <div class="tool-result warning">
                    <p>
                        Enter a password to check.
                    </p>
                </div>
            `;

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


        const commonPasswords = [
            "password",
            "123456",
            "12345678",
            "qwerty",
            "password123",
            "admin",
            "letmein",
            "welcome"
        ];

        if (
            commonPasswords.includes(
                password.toLowerCase()
            )
        ) {
            score = 0;
        }


        let message;
        let className;

        if (score <= 2) {

            message =
                "🔴 Weak — use a longer and unique password.";

            className = "danger";

        }

        else if (score <= 4) {

            message =
                "🟡 Moderate — make it longer and more unique.";

            className = "warning";

        }

        else {

            message =
                "🟢 Strong structure — keep it unique and private.";

            className = "safe";

        }


        result.innerHTML = `
            <div class="tool-result ${className}">
                <h3>${message}</h3>
                <p>
                    Length: ${password.length} characters
                </p>
            </div>
        `;

    }


    /* ========================================================
       CYBER SAFETY SCORE
    ======================================================== */

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

        let level;
        let className;

        if (percentage >= 80) {

            level =
                "🟢 Excellent basic safety habits";

            className = "safe";

        }

        else if (percentage >= 50) {

            level =
                "🟡 Good start — improve a few areas";

            className = "warning";

        }

        else {

            level =
                "🔴 Needs improvement";

            className = "danger";

        }

        const result =
            $("#scoreResult");

        if (!result) return;

        result.innerHTML = `
            <div class="tool-result ${className}">

                <h3>${percentage}%</h3>

                <p>${level}</p>

                <p>
                    ${yes} of ${total}
                    safety habits selected.
                </p>

            </div>
        `;

    }


    /* ========================================================
       LEARNING SECTION
    ======================================================== */

    const learningContent = {

        password: `
            <h3>🔐 Password Safety</h3>

            <p>
                Use long, unique passwords for important accounts.
                Avoid reusing the same password everywhere.
            </p>

            <ul>
                <li>Use unique passwords.</li>
                <li>Prefer long passwords/passphrases.</li>
                <li>Use a trusted password manager if appropriate.</li>
                <li>Enable 2FA.</li>
            </ul>
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
                <li>Important cloud accounts</li>
            </ul>
        `,

        phishing: `
            <h3>🎣 Phishing</h3>

            <p>
                Phishing attempts to trick you into giving away
                sensitive information.
            </p>

            <ol>
                <li>Check the sender.</li>
                <li>Check the domain.</li>
                <li>Do not click unexpected links.</li>
                <li>Verify requests independently.</li>
            </ol>
        `,

        privacy: `
            <h3>🔒 Privacy</h3>

            <p>
                Review who can contact you, see your information
                and access your location.
            </p>

            <ul>
                <li>Review account visibility.</li>
                <li>Review location sharing.</li>
                <li>Review app permissions.</li>
                <li>Review connected devices.</li>
            </ul>
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

            <p>
                Verify unexpected payment requests independently.
            </p>
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


    /* ========================================================
       EMERGENCY RESPONSE
    ======================================================== */

    const emergencyGuides = {

        account: `
            <h3>🔐 Account Compromised</h3>

            <ol>
                <li>Secure your email.</li>
                <li>Change password.</li>
                <li>Enable 2FA.</li>
                <li>Review active sessions.</li>
                <li>Remove unknown devices.</li>
                <li>Check recovery information.</li>
                <li>Use official recovery.</li>
            </ol>
        `,

        money: `
            <h3>💳 Money at Risk</h3>

            <ol>
                <li>Contact your bank immediately.</li>
                <li>Report the transaction as fraudulent.</li>
                <li>Save transaction ID.</li>
                <li>Save screenshots.</li>
                <li>Secure payment accounts.</li>
                <li>Use official reporting channels.</li>
            </ol>
        `,

        blackmail: `
            <h3>⚠️ Blackmail / Threat</h3>

            <ol>
                <li>Do not pay.</li>
                <li>Do not send more content.</li>
                <li>Save evidence.</li>
                <li>Secure accounts.</li>
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
        `

    };


    $$("[data-emergency]").forEach(button => {

        button.addEventListener("click", () => {

            const type =
                button.dataset.emergency;

            showGuide(
                "🚨 Emergency Cyber Response",
                emergencyGuides[type] ||
                "<p>Prioritize your safety and use official help.</p>"
            );

        });

    });


    /* ========================================================
       INDIA HELP BUTTONS
    ======================================================== */

    $$("[data-india]").forEach(button => {

        button.addEventListener("click", () => {

            const type =
                button.dataset.india;

            if (type === "cybercrime") {

                showGuide(
                    "🇮🇳 India Cybercrime",
                    `
                        <h3>🚨 If you are facing cybercrime</h3>

                        <ol>
                            <li>Preserve screenshots and other evidence.</li>
                            <li>Record transaction IDs if money is involved.</li>
                            <li>Secure affected accounts.</li>
                            <li>Use India's official cybercrime reporting channels.</li>
                            <li>If money was transferred fraudulently, contact your bank/payment provider immediately.</li>
                        </ol>

                        <div class="guide-warning">
                            CyberCare provides guidance; it does not replace
                            official law-enforcement or financial support.
                        </div>
                    `
                );

            }

            else {

                showGuide(
                    "🇮🇳 India Safety Help",
                    `
                        <h3>Important</h3>

                        <p>
                            Use only verified official government,
                            police, bank or platform channels.
                        </p>

                        <p>
                            Never pay an unknown person claiming they
                            can "recover" your account or remove content.
                        </p>
                    `
                );

            }

        });

    });


    /* ========================================================
       GUIDE MODAL
    ======================================================== */

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
                    aria-label="${escapeHTML(title)}"
                >

                    <button
                        class="guide-close"
                        aria-label="Close"
                        type="button"
                    >
                        ✕
                    </button>

                    <h2>${escapeHTML(title)}</h2>

                    <div class="guide-content">
                        ${content || ""}
                    </div>

                    <div class="guide-actions">

                        <button
                            class="guide-copy"
                            type="button"
                        >
                            📋 Copy Guide
                        </button>

                        <button
                            class="guide-share"
                            type="button"
                        >
                            📤 Share
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


        $(".guide-copy", modal)
            ?.addEventListener(
                "click",
                () => {

                    const text =
                        `${title}\n\n` +
                        stripHTML(content);

                    copyText(
                        text,
                        $(".guide-copy", modal)
                    );

                }
            );


        $(".guide-share", modal)
            ?.addEventListener(
                "click",
                async () => {

                    const text =
                        `${title}\n\n` +
                        stripHTML(content);

                    if (
                        navigator.share
                    ) {

                        try {

                            await navigator.share({
                                title,
                                text
                            });

                        }

                        catch (error) {

                            if (
                                error?.name !==
                                "AbortError"
                            ) {
                                console.warn(
                                    "Share cancelled/failed:",
                                    error
                                );
                            }

                        }

                    }

                    else {

                        copyText(
                            text,
                            $(".guide-share", modal)
                        );

                    }

                }
            );


        setTimeout(() => {

            $(".guide-close", modal)?.focus();

        }, 50);

    }


    /* ========================================================
       STRIP HTML
    ======================================================== */

    function stripHTML(html) {

        const div =
            document.createElement("div");

        div.innerHTML =
            html || "";

        return div.textContent
            .replace(/\n\s*\n\s*\n/g, "\n\n")
            .trim();

    }


    /* ========================================================
       COPY SYSTEM
    ======================================================== */

    async function copyText(text, button) {

        try {

            await navigator.clipboard.writeText(
                text
            );

            if (button) {

                const original =
                    button.textContent;

                button.textContent =
                    "✅ Copied!";

                setTimeout(() => {

                    button.textContent =
                        original;

                }, 1800);

            }

        }

        catch (error) {

            const textarea =
                document.createElement("textarea");

            textarea.value =
                text;

            textarea.style.position =
                "fixed";

            textarea.style.opacity =
                "0";

            document.body.appendChild(
                textarea
            );

            textarea.select();

            try {
                document.execCommand("copy");
            }
            catch (e) {
                console.warn(
                    "Copy failed:",
                    e
                );
            }

            textarea.remove();

            if (button) {

                const original =
                    button.textContent;

                button.textContent =
                    "✅ Copied!";

                setTimeout(() => {

                    button.textContent =
                        original;

                }, 1800);

            }

        }

    }


    /* ========================================================
       KEYBOARD SUPPORT
    ======================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape")
                return;

            closeSideMenu();

            $("#cybercareModal")?.remove();

        }
    );


    /* ========================================================
       ENTER KEY SEARCH
    ======================================================== */

    problemSearch?.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" &&
                problemSearch.value.trim()
            ) {

                const matches =
                    findProblems(
                        problemSearch.value
                    );

                if (matches.length) {

                    showGuide(
                        matches[0].title,
                        matches[0].content
                    );

                }

            }

        }
    );


    /* ========================================================
       CLICK OUTSIDE MENU
    ======================================================== */

    document.addEventListener(
        "click",
        event => {

            if (
                !sideMenu ||
                !sideMenu.classList.contains("active")
            ) return;

            if (
                event.target === menuBtn ||
                sideMenu.contains(event.target) ||
                menuOverlay?.contains(event.target)
            ) return;

            closeSideMenu();

        }
    );


    /* ========================================================
       PREVENT DOUBLE TAP ISSUES
    ======================================================== */

    $$("button").forEach(button => {

        button.addEventListener(
            "touchstart",
            () => {},
            { passive: true }
        );

    });


    /* ========================================================
       LOCAL STORAGE SAFETY
    ======================================================== */

    try {

        if (
            !localStorage.getItem(
                "cybercare-first-visit"
            )
        ) {

            localStorage.setItem(
                "cybercare-first-visit",
                new Date().toISOString()
            );

        }

    }

    catch (error) {

        console.warn(
            "LocalStorage unavailable:",
            error
        );

    }


    /* ========================================================
       GLOBAL ERROR PROTECTION
    ======================================================== */

    window.addEventListener(
        "error",
        event => {

            console.warn(
                "CyberCare handled an error:",
                event.message
            );

        }
    );


    window.addEventListener(
        "unhandledrejection",
        event => {

            console.warn(
                "CyberCare handled promise error:",
                event.reason
            );

        }
    );


    /* ========================================================
       READY
    ======================================================== */

    console.log(
        "🛡️ CyberCare Advanced Security System Ready"
    );

});
