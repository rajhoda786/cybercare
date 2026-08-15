// ============================================================
// CYBERCARE — ADVANCED SCRIPT.JS
// Digital Safety • Women's Safety • Emergency • Tools
// Search • Bengali/English • Dark Mode • Share • Copy
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    // =========================================================
    // ELEMENTS
    // =========================================================

    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);

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
    // STORAGE
    // =========================================================

    const STORAGE = {
        theme: "cybercare-theme",
        language: "cybercare-language",
        history: "cybercare-history"
    };


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

            if (target === "services") scrollToSection("services");
            if (target === "women") scrollToSection("women");
            if (target === "tools") scrollToSection("tools");
            if (target === "learn") scrollToSection("learn");
            if (target === "india") scrollToSection("india");
            if (target === "about") scrollToSection("about");

            if (target === "emergency") {
                document.querySelector(".emergency-section")
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

        document.querySelector(".emergency-section")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    });


    quickHelpBtn?.addEventListener("click", () => {

        document.querySelector(".search-section")
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
        localStorage.getItem(STORAGE.theme) === "dark";

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
            STORAGE.theme,
            darkMode ? "dark" : "light"
        );

        applyTheme();

    });


    // =========================================================
    // LANGUAGE SYSTEM
    // =========================================================

    let bengali =
        localStorage.getItem(STORAGE.language) === "bn";

    if (bengali && languageText) {
        languageText.textContent = "বাংলা";
    }

    const translations = {

        "Protecting People. Securing Digital Lives.":
            "মানুষকে সুরক্ষিত রাখা। ডিজিটাল জীবনকে নিরাপদ রাখা।",

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
            "পরীক্ষা শুরু করুন"

    };


    function translateToBangla() {

        $$("h1,h2,h3,h4,p,button,strong,small").forEach(element => {

            const text = element.textContent.trim();

            if (translations[text]) {
                element.textContent = translations[text];
            }

        });

    }


    languageBtn?.addEventListener("click", () => {

        bengali = !bengali;

        localStorage.setItem(
            STORAGE.language,
            bengali ? "bn" : "en"
        );

        if (languageText) {
            languageText.textContent =
                bengali ? "বাংলা" : "EN";
        }

        if (bengali) {
            translateToBangla();
        } else {
            location.reload();
        }

    });


    // =========================================================
    // SEARCH DATABASE
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
                "account",
                "login",
                "password"
            ],

            title: "🔐 Account Recovery",

            text: `
                <p>Your account may be compromised.</p>

                <ol>
                    <li>Secure your email account first.</li>
                    <li>Change the password.</li>
                    <li>Enable 2FA.</li>
                    <li>Review active sessions.</li>
                    <li>Remove unknown devices.</li>
                    <li>Check recovery email and phone.</li>
                    <li>Use only the platform's official recovery process.</li>
                </ol>
            `
        },


        {
            keywords: [
                "blackmail",
                "threat",
                "private photo",
                "private video",
                "leak",
                "sextortion"
            ],

            title: "⚠️ Blackmail / Private Content Threat",

            text: `
                <ol>
                    <li>Do not pay.</li>
                    <li>Do not send additional content.</li>
                    <li>Save screenshots and evidence.</li>
                    <li>Secure your accounts.</li>
                    <li>Block/report when appropriate.</li>
                    <li>Tell someone you trust.</li>
                    <li>Use official reporting channels when necessary.</li>
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
                "spam call"
            ],

            title: "📞 Repeated Calls / Harassment",

            text: `
                <ol>
                    <li>Save call logs and messages.</li>
                    <li>Do not unnecessarily engage.</li>
                    <li>Block the person when appropriate.</li>
                    <li>Review privacy settings.</li>
                    <li>Report serious threats or abuse.</li>
                </ol>
            `
        },


        {
            keywords: [
                "photo",
                "picture",
                "image",
                "photo misuse"
            ],

            title: "📸 Photo Misuse",

            text: `
                <ol>
                    <li>Take screenshots.</li>
                    <li>Save the profile/post URL.</li>
                    <li>Report the content.</li>
                    <li>Preserve evidence.</li>
                    <li>Do not pay someone promising guaranteed removal.</li>
                </ol>
            `
        },


        {
            keywords: [
                "fake profile",
                "fake account",
                "impersonation"
            ],

            title: "🎭 Fake Profile",

            text: `
                <ol>
                    <li>Save the profile URL.</li>
                    <li>Take screenshots.</li>
                    <li>Report the account as impersonation.</li>
                    <li>Warn trusted contacts if necessary.</li>
                    <li>Secure your real account.</li>
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
                "financial fraud"
            ],

            title: "💳 Online & Financial Fraud",

            text: `
                <ol>
                    <li>Contact your bank/payment provider immediately.</li>
                    <li>Report the fraudulent transaction.</li>
                    <li>Save transaction IDs.</li>
                    <li>Save screenshots and messages.</li>
                    <li>Secure affected accounts.</li>
                    <li>Use official cybercrime reporting channels.</li>
                </ol>
            `
        },


        {
            keywords: [
                "phishing",
                "link",
                "otp",
                "fake website",
                "fake sms",
                "sms scam"
            ],

            title: "🎣 Scam & Phishing",

            text: `
                <ol>
                    <li>Do not open suspicious links.</li>
                    <li>Never share OTPs.</li>
                    <li>Never share passwords.</li>
                    <li>Never share UPI PINs.</li>
                    <li>Verify the sender independently.</li>
                </ol>
            `
        },


        {
            keywords: [
                "phone",
                "spyware",
                "unknown app",
                "malware",
                "virus"
            ],

            title: "📱 Phone Security",

            text: `
                <ol>
                    <li>Check unknown applications.</li>
                    <li>Review permissions.</li>
                    <li>Review accessibility access.</li>
                    <li>Update the phone.</li>
                    <li>Remove suspicious applications.</li>
                    <li>Secure important accounts.</li>
                </ol>
            `
        }

    ];


    // =========================================================
    // SEARCH
    // =========================================================

    problemSearch?.addEventListener("input", () => {

        const query =
            problemSearch.value
                .toLowerCase()
                .trim();

        if (!searchResults) return;

        searchResults.innerHTML = "";

        if (!query) return;

        const words = query.split(/\s+/);

        const matches = problems.filter(problem => {

            return problem.keywords.some(keyword => {

                const lowerKeyword =
                    keyword.toLowerCase();

                return words.some(word =>
                    lowerKeyword.includes(word) ||
                    word.includes(lowerKeyword)
                );

            });

        });


        if (!matches.length) {

            searchResults.innerHTML = `

                <div class="search-result">

                    <h3>🔎 No exact guide found</h3>

                    <p>
                        Try searching:
                        blackmail, hacked, UPI fraud,
                        fake profile, harassment,
                        phishing, photo misuse or
                        phone security.
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

                ${problem.text}

                <button class="result-help">
                    View Full Safety Guide →
                </button>

            `;

            result
                .querySelector(".result-help")
                ?.addEventListener("click", () => {

                    saveHistory(problem.title);

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
                <h3>1. Secure your email first</h3>
                <p>Change the email password and enable 2FA.</p>

                <h3>2. Change the compromised password</h3>
                <p>Use a new password that you do not use elsewhere.</p>

                <h3>3. Check active sessions</h3>
                <p>Remove devices or sessions you do not recognize.</p>

                <h3>4. Enable 2FA</h3>
                <p>Use the platform's official security settings.</p>

                <h3>5. Check recovery information</h3>
                <p>Review recovery email, phone and security settings.</p>

                <h3>6. Use official recovery</h3>
                <p>If locked out, use only the official recovery process.</p>

                <h3>🚫 Never</h3>
                <ul>
                    <li>Never share OTPs.</li>
                    <li>Never share recovery codes.</li>
                    <li>Never give your password to "support".</li>
                    <li>Never pay for guaranteed recovery.</li>
                </ul>
            `,


            "Scam & Phishing": `
                <h3>🛑 Stop first</h3>
                <p>Do not click another link or send information.</p>

                <h3>Never share</h3>

                <ul>
                    <li>OTP</li>
                    <li>Password</li>
                    <li>UPI PIN</li>
                    <li>Banking PIN</li>
                    <li>Recovery code</li>
                </ul>

                <h3>Verify independently</h3>
                <p>
                    Do not trust a message simply because it uses
                    a company logo or official-looking language.
                </p>

                <h3>If money was transferred</h3>
                <p>
                    Contact your bank/payment provider immediately
                    and preserve transaction details.
                </p>
            `,


            "Phone Security": `
                <h3>📱 Check installed apps</h3>
                <p>Look for apps you do not recognize.</p>

                <h3>🔐 Check permissions</h3>
                <p>
                    Review camera, microphone, SMS,
                    contacts, location and accessibility.
                </p>

                <h3>🔄 Update your device</h3>
                <p>Install official operating-system updates.</p>

                <h3>🛡️ Secure accounts</h3>
                <p>
                    If you suspect compromise, secure important
                    accounts from a trusted device.
                </p>
            `,


            "Online Fraud": `
                <h3>🚨 Act quickly</h3>

                <ol>
                    <li>Contact your bank/payment provider.</li>
                    <li>Report the fraudulent transaction.</li>
                    <li>Save transaction ID.</li>
                    <li>Save screenshots.</li>
                    <li>Secure payment accounts.</li>
                    <li>Use official cybercrime reporting channels.</li>
                </ol>

                <h3>Never</h3>
                <p>
                    Never give your OTP or UPI PIN to anyone
                    claiming they will reverse the transaction.
                </p>
            `,


            "Suspicious Activity": `
                <h3>Possible warning signs</h3>

                <ul>
                    <li>Unknown login alert</li>
                    <li>Unknown device</li>
                    <li>Unexpected password reset</li>
                    <li>Messages sent without permission</li>
                    <li>Unexpected profile changes</li>
                </ul>

                <h3>What to do</h3>

                <ol>
                    <li>Change password.</li>
                    <li>Enable 2FA.</li>
                    <li>Review sessions.</li>
                    <li>Remove unknown devices.</li>
                    <li>Check recovery information.</li>
                </ol>
            `,


            "Emergency Help": `
                <h3>🚨 Emergency Response</h3>

                <ol>
                    <li>Stop sending money or information.</li>
                    <li>Secure important accounts.</li>
                    <li>Preserve evidence.</li>
                    <li>Report through official channels.</li>
                    <li>Tell someone you trust.</li>
                </ol>

                <h3>⚠️ Physical danger</h3>

                <p>
                    If there is immediate physical danger,
                    prioritize personal safety and seek
                    appropriate local emergency assistance.
                </p>
            `

        };

        showGuide(
            `🛡️ ${service}`,
            guides[service] ||
            "<p>Follow the official safety and reporting process.</p>"
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

            harassment: `
                <h3>📞 Repeated Calls / Harassment</h3>

                <ol>
                    <li>Do not panic.</li>
                    <li>Save screenshots.</li>
                    <li>Save call logs.</li>
                    <li>Save messages.</li>
                    <li>Note dates and times.</li>
                    <li>Block the person when appropriate.</li>
                    <li>Review privacy settings.</li>
                    <li>Tell someone you trust.</li>
                </ol>

                <p>
                    If serious threats are involved, preserve evidence
                    and seek appropriate official help.
                </p>
            `,


            photo: `
                <h3>📸 Photo Misuse</h3>

                <ol>
                    <li>Screenshot the content.</li>
                    <li>Screenshot the profile.</li>
                    <li>Save the URL.</li>
                    <li>Report the content.</li>
                    <li>Secure your account.</li>
                    <li>Do not pay for guaranteed removal.</li>
                </ol>
            `,


            fakeprofile: `
                <h3>🎭 Fake Profile</h3>

                <ol>
                    <li>Save the profile URL.</li>
                    <li>Take screenshots.</li>
                    <li>Save usernames.</li>
                    <li>Report impersonation.</li>
                    <li>Warn trusted contacts if necessary.</li>
                    <li>Secure your real account.</li>
                </ol>
            `,


            blackmail: `
                <h3>⚠️ BLACKMAIL — A TO Z SAFETY GUIDE</h3>

                <div class="danger-box">
                    🚨 DO NOT PANIC
                </div>

                <h3>1. Do NOT pay</h3>

                <p>
                    Payment does not guarantee that the threats
                    will stop or that content will be deleted.
                </p>

                <h3>2. Do NOT send more content</h3>

                <p>
                    Never send additional photos, videos,
                    passwords, OTPs or personal information.
                </p>

                <h3>3. Preserve evidence</h3>

                <ul>
                    <li>📸 Screenshots</li>
                    <li>👤 Username</li>
                    <li>🔗 Profile URL</li>
                    <li>☎️ Phone number</li>
                    <li>💬 Messages</li>
                    <li>💳 Payment requests</li>
                    <li>🕐 Date and time</li>
                </ul>

                <h3>4. Secure your accounts</h3>

                <ol>
                    <li>Change passwords.</li>
                    <li>Enable 2FA.</li>
                    <li>Review active sessions.</li>
                    <li>Remove unknown devices.</li>
                    <li>Check recovery information.</li>
                </ol>

                <h3>5. Block & report</h3>

                <p>
                    After preserving important evidence,
                    block and report the account when appropriate.
                </p>

                <h3>6. Tell someone you trust</h3>

                <p>
                    You do not have to handle blackmail alone.
                </p>

                <h3>7. If money was already sent</h3>

                <p>
                    Contact your bank/payment provider immediately
                    and preserve transaction details.
                </p>

                <h3>8. If content is published</h3>

                <p>
                    Save the URL and screenshots and report the
                    content using the platform's official reporting tools.
                </p>

                <h3>❤️ Remember</h3>

                <p>
                    Being blackmailed is not your fault.
                    Preserve evidence, protect yourself and seek help.
                </p>
            `,


            private: `
                <h3>🔒 Private Photo / Video Threat</h3>

                <ol>
                    <li>Stop sending content.</li>
                    <li>Do not pay under pressure.</li>
                    <li>Preserve threats and messages.</li>
                    <li>Save usernames and URLs.</li>
                    <li>Secure your accounts.</li>
                    <li>Report the account/content.</li>
                    <li>Tell someone you trust.</li>
                </ol>
            `,


            stalking: `
                <h3>👁️ Online Stalking</h3>

                <h3>Check what is publicly visible</h3>

                <ul>
                    <li>Phone number</li>
                    <li>Email</li>
                    <li>Location</li>
                    <li>Daily routine</li>
                    <li>Work/school information</li>
                    <li>Family/friend information</li>
                </ul>

                <h3>Secure yourself</h3>

                <ol>
                    <li>Review location sharing.</li>
                    <li>Change passwords.</li>
                    <li>Enable 2FA.</li>
                    <li>Review active sessions.</li>
                    <li>Save evidence.</li>
                    <li>Block/report repeated abuse.</li>
                </ol>
            `

        };

        if (guides[type]) {

            saveHistory(
                `Women's Safety: ${type}`
            );

            showGuide(
                "👩 Women's Digital Safety",
                guides[type]
            );

        }

    }


    // =========================================================
    // CYBERCARE TOOLS
    // =========================================================

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
                <h3>🔎 Scam Risk Checker</h3>

                <p>
                    Check how many warning signs are present.
                </p>

                <div class="checker-list">

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
                        Guaranteed profit/reward
                    </label>

                    <label>
                        <input type="checkbox">
                        Fake authority/company claim
                    </label>

                </div>

                <button class="action-btn" id="calculateScam">
                    Check Risk
                </button>

                <div id="scamResult"></div>
            `,


            password: `
                <h3>🔐 Password Strength Checker</h3>

                <p>
                    This checker runs locally in your browser.
                    Do not enter a real password you currently use.
                </p>

                <input
                    id="passwordInput"
                    type="password"
                    placeholder="Enter a sample password"
                    autocomplete="off"
                >

                <div id="passwordStrength"></div>

                <button
                    class="action-btn"
                    id="checkPassword"
                >
                    Check Strength
                </button>
            `,


            url: `
                <h3>🔗 URL Safety Checker</h3>

                <p>
                    This tool performs a basic local pattern check.
                    It does not guarantee that a website is safe.
                </p>

                <input
                    id="urlInput"
                    type="url"
                    placeholder="https://example.com"
                >

                <button
                    class="action-btn"
                    id="checkUrl"
                >
                    Analyze URL
                </button>

                <div id="urlResult"></div>
            `,


            privacy: `
                <h3>🔒 Privacy Checklist</h3>

                <div class="checker-list">

                    <label>
                        <input type="checkbox">
                        2FA enabled
                    </label>

                    <label>
                        <input type="checkbox">
                        Location sharing reviewed
                    </label>

                    <label>
                        <input type="checkbox">
                        App permissions reviewed
                    </label>

                    <label>
                        <input type="checkbox">
                        Active sessions reviewed
                    </label>

                    <label>
                        <input type="checkbox">
                        Unknown devices removed
                    </label>

                    <label>
                        <input type="checkbox">
                        Privacy settings reviewed
                    </label>

                </div>

                <button
                    class="action-btn"
                    id="privacyScore"
                >
                    Calculate Score
                </button>

                <div id="privacyResult"></div>
            `,


            evidence: `
                <h3>🧾 Evidence Checklist</h3>

                <div class="checker-list">

                    <label>
                        <input type="checkbox">
                        Screenshots saved
                    </label>

                    <label>
                        <input type="checkbox">
                        Username saved
                    </label>

                    <label>
                        <input type="checkbox">
                        Profile URL saved
                    </label>

                    <label>
                        <input type="checkbox">
                        Messages saved
                    </label>

                    <label>
                        <input type="checkbox">
                        Call logs saved
                    </label>

                    <label>
                        <input type="checkbox">
                        Date/time noted
                    </label>

                    <label>
                        <input type="checkbox">
                        Transaction ID saved
                    </label>

                </div>

                <button
                    class="action-btn"
                    id="evidenceScore"
                >
                    Check Evidence
                </button>

                <div id="evidenceResult"></div>
            `,


            score: `
                <h3>🛡️ Cyber Safety Score</h3>

                <div class="checker-list">

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
                        I never share OTP
                    </label>

                    <label>
                        <input type="checkbox">
                        I review account sessions
                    </label>

                    <label>
                        <input type="checkbox">
                        I review app permissions
                    </label>

                    <label>
                        <input type="checkbox">
                        My phone is updated
                    </label>

                    <label>
                        <input type="checkbox">
                        I verify payment requests
                    </label>

                    <label>
                        <input type="checkbox">
                        I know how to report cybercrime
                    </label>

                </div>

                <button
                    class="action-btn"
                    id="safetyScore"
                >
                    Calculate Safety Score
                </button>

                <div id="safetyResult"></div>
            `

        };

        if (!tools[tool]) return;

        showGuide(
            "🛠️ CyberCare Tool",
            tools[tool]
        );

        initializeTool(tool);

    }


    // =========================================================
    // TOOL ENGINE
    // =========================================================

    function initializeTool(tool) {


        // -----------------------------------------------------
        // SCAM CHECKER
        // -----------------------------------------------------

        if (tool === "scam") {

            $("#calculateScam")
                ?.addEventListener("click", () => {

                    const checked =
                        $$(".checker-list input:checked").length;

                    const total =
                        $$(".checker-list input").length;

                    const result = $("#scamResult");

                    if (!result) return;

                    const percentage =
                        Math.round(
                            (checked / total) * 100
                        );

                    let message = "";

                    if (checked >= 4) {

                        message = `
                            <div class="danger-box">
                                🚨 HIGH RISK<br>
                                Multiple scam warning signs detected.
                                Stop and independently verify the request.
                            </div>
                        `;

                    } else if (checked >= 2) {

                        message = `
                            <div class="warning-box">
                                ⚠️ MEDIUM RISK<br>
                                Several warning signs are present.
                                Be very careful before taking action.
                            </div>
                        `;

                    } else {

                        message = `
                            <div class="safe-box">
                                🟢 LOW INDICATOR<br>
                                Few warning signs selected.
                                Still verify unexpected requests.
                            </div>
                        `;

                    }

                    result.innerHTML = `
                        <p><strong>
                            Warning indicators: ${percentage}%
                        </strong></p>

                        ${message}
                    `;

                });

        }


        // -----------------------------------------------------
        // PASSWORD CHECKER
        // -----------------------------------------------------

        if (tool === "password") {

            $("#checkPassword")
                ?.addEventListener("click", () => {

                    const password =
                        $("#passwordInput")?.value || "";

                    const result =
                        $("#passwordStrength");

                    if (!result) return;

                    if (!password) {

                        result.innerHTML =
                            `<p>Enter a sample password.</p>`;

                        return;
                    }

                    let score = 0;

                    if (password.length >= 12)
                        score++;

                    if (/[A-Z]/.test(password))
                        score++;

                    if (/[a-z]/.test(password))
                        score++;

                    if (/[0-9]/.test(password))
                        score++;

                    if (/[^A-Za-z0-9]/.test(password))
                        score++;

                    let strength;

                    if (score <= 2) {

                        strength = `
                            <div class="danger-box">
                                🔴 Weak
                            </div>
                        `;

                    } else if (score <= 4) {

                        strength = `
                            <div class="warning-box">
                                🟡 Moderate
                            </div>
                        `;

                    } else {

                        strength = `
                            <div class="safe-box">
                                🟢 Strong structure
                            </div>
                        `;

                    }

                    result.innerHTML = strength;

                });

        }


        // -----------------------------------------------------
        // URL CHECKER
        // -----------------------------------------------------

        if (tool === "url") {

            $("#checkUrl")
                ?.addEventListener("click", () => {

                    const input =
                        $("#urlInput")?.value.trim();

                    const result =
                        $("#urlResult");

                    if (!result) return;

                    if (!input) {

                        result.innerHTML =
                            "<p>Enter a URL to analyze.</p>";

                        return;
                    }

                    let parsed;

                    try {

                        parsed =
                            new URL(input);

                    } catch {

                        result.innerHTML = `
                            <div class="danger-box">
                                ❌ Invalid URL format.
                            </div>
                        `;

                        return;
                    }

                    const warnings = [];

                    if (parsed.protocol !== "https:") {
                        warnings.push(
                            "The URL is not using HTTPS."
                        );
                    }

                    if (parsed.hostname.includes("@")) {
                        warnings.push(
                            "The URL contains an unusual @ pattern."
                        );
                    }

                    if (parsed.hostname.length > 50) {
                        warnings.push(
                            "The domain is unusually long."
                        );
                    }

                    if (
                        /xn--/i.test(
                            parsed.hostname
                        )
                    ) {
                        warnings.push(
                            "The domain contains punycode."
                        );
                    }

                    if (
                        /bit\.ly|tinyurl|t\.co/i.test(
                            parsed.hostname
                        )
                    ) {
                        warnings.push(
                            "This appears to be a shortened URL."
                        );
                    }

                    if (warnings.length) {

                        result.innerHTML = `
                            <div class="warning-box">
                                ⚠️ Caution
                            </div>

                            <ul>
                                ${warnings
                                    .map(item =>
                                        `<li>${item}</li>`
                                    )
                                    .join("")}
                            </ul>

                            <p>
                                This is only a basic local check.
                                It cannot confirm whether a website
                                is malicious or trustworthy.
                            </p>
                        `;

                    } else {

                        result.innerHTML = `
                            <div class="safe-box">
                                🟢 No basic warning pattern detected.
                            </div>

                            <p>
                                Still verify the domain before entering
                                passwords, payment information or OTPs.
                            </p>
                        `;

                    }

                });

        }


        // -----------------------------------------------------
        // PRIVACY SCORE
        // -----------------------------------------------------

        if (tool === "privacy") {

            $("#privacyScore")
                ?.addEventListener("click", () => {

                    calculateChecklist(
                        "privacyResult",
                        "Privacy",
                        "Review the remaining privacy settings."
                    );

                });

        }


        // -----------------------------------------------------
        // EVIDENCE SCORE
        // -----------------------------------------------------

        if (tool === "evidence") {

            $("#evidenceScore")
                ?.addEventListener("click", () => {

                    calculateChecklist(
                        "evidenceResult",
                        "Evidence",
                        "Try to preserve the missing evidence."
                    );

                });

        }


        // -----------------------------------------------------
        // SAFETY SCORE
        // -----------------------------------------------------

        if (tool === "score") {

            $("#safetyScore")
                ?.addEventListener("click", () => {

                    calculateChecklist(
                        "safetyResult",
                        "Cyber Safety",
                        "Keep improving your digital safety habits."
                    );

                });

        }

    }


    function calculateChecklist(
        resultId,
        label,
        advice
    ) {

        const result =
            document.getElementById(resultId);

        if (!result) return;

        const all =
            $$(".checker-list input");

        const checked =
            $$(".checker-list input:checked");

        const total =
            all.length;

        const count =
            checked.length;

        const percentage =
            total
                ? Math.round((count / total) * 100)
                : 0;

        let box = "";

        if (percentage >= 80) {

            box = `
                <div class="safe-box">
                    🟢 Excellent ${label} level.
                </div>
            `;

        } else if (percentage >= 50) {

            box = `
                <div class="warning-box">
                    🟡 Moderate ${label} level.
                </div>
            `;

        } else {

            box = `
                <div class="danger-box">
                    🔴 Needs attention.
                </div>
            `;

        }

        result.innerHTML = `

            <p>
                <strong>
                    Score: ${percentage}%
                </strong>
            </p>

            ${box}

            <p>${advice}</p>
        `;

    }


    // =========================================================
    // LEARNING
    // =========================================================

    $$(".learn-card").forEach(button => {

        button.addEventListener("click", () => {

            showLearning(
                button.dataset.learn
            );

        });

    });


    function showLearning(topic) {

        const content = {

            password: `
                <h3>🔐 Password Safety</h3>

                <p>
                    Use long, unique passwords for important accounts.
                </p>

                <ul>
                    <li>Do not reuse important passwords.</li>
                    <li>Use a password manager if appropriate.</li>
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
                </ul>
            `,

            phishing: `
                <h3>🎣 Phishing</h3>

                <p>
                    Phishing attempts to trick you into giving
                    away sensitive information.
                </p>

                <p>
                    Verify unexpected requests independently.
                </p>
            `,

            privacy: `
                <h3>🔒 Privacy</h3>

                <p>
                    Review who can see your information,
                    contact you and access your location.
                </p>
            `,

            phone: `
                <h3>📱 Phone Security</h3>

                <ul>
                    <li>Keep the operating system updated.</li>
                    <li>Install apps from trusted sources.</li>
                    <li>Review permissions regularly.</li>
                </ul>
            `,

            financial: `
                <h3>💳 Financial Safety</h3>

                <p>
                    Never share OTPs, UPI PINs, passwords
                    or banking credentials.
                </p>

                <p>
                    Verify unexpected payment requests independently.
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
                    <li>Change the password.</li>
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
                    <li>Contact your bank/payment provider immediately.</li>
                    <li>Report the transaction as fraudulent.</li>
                    <li>Save transaction IDs.</li>
                    <li>Secure payment accounts.</li>
                    <li>Use official cybercrime reporting channels.</li>
                </ol>

                <div class="danger-box">
                    Never send additional money to a person
                    promising recovery.
                </div>
            `,

            blackmail: `
                <h3>⚠️ Blackmail / Threat</h3>

                <ol>
                    <li>Do not pay.</li>
                    <li>Do not send more content.</li>
                    <li>Preserve evidence.</li>
                    <li>Secure accounts.</li>
                    <li>Report the account/content.</li>
                    <li>Tell someone you trust.</li>
                    <li>Seek appropriate official help.</li>
                </ol>
            `,

            phone: `
                <h3>📱 Phone Compromised</h3>

                <ol>
                    <li>Stop using suspicious applications.</li>
                    <li>Review permissions.</li>
                    <li>Review accessibility access.</li>
                    <li>Update the device.</li>
                    <li>Secure important accounts from a trusted device.</li>
                    <li>Preserve evidence before resetting if necessary.</li>
                </ol>
            `

        };

        if (guides[type]) {

            showGuide(
                "🚨 Emergency Response",
                guides[type]
            );

        }

    }


    // =========================================================
    // GUIDE HISTORY
    // =========================================================

    function saveHistory(title) {

        let history = [];

        try {

            history =
                JSON.parse(
                    localStorage.getItem(
                        STORAGE.history
                    )
                ) || [];

        } catch {
            history = [];
        }

        history.unshift({
            title,
            time: new Date().toISOString()
        });

        history =
            history.slice(0, 10);

        localStorage.setItem(
            STORAGE.history,
            JSON.stringify(history)
        );

    }


    // =========================================================
    // MODAL
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

                    <div class="guide-actions">

                        <button
                            class="guide-copy"
                            type="button"
                        >
                            📋 Copy
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


        // -----------------------------------------------------
        // CLOSE
        // -----------------------------------------------------

        modal
            .querySelector(".guide-close")
            ?.addEventListener("click", () => {

                modal.remove();

            });


        modal
            .querySelector(".guide-ok")
            ?.addEventListener("click", () => {

                modal.remove();

            });


        modal
            .querySelector(".guide-overlay")
            ?.addEventListener("click", event => {

                if (
                    event.target.classList.contains(
                        "guide-overlay"
                    )
                ) {
                    modal.remove();
                }

            });


        // -----------------------------------------------------
        // COPY
        // -----------------------------------------------------

        modal
            .querySelector(".guide-copy")
            ?.addEventListener("click", async () => {

                const text =
                    modal
                        .querySelector(".guide-content")
                        ?.innerText || "";

                try {

                    await navigator.clipboard.writeText(
                        `${title}\n\n${text}`
                    );

                    showToast(
                        "Guide copied successfully."
                    );

                } catch {

                    showToast(
                        "Copy was not available."
                    );

                }

            });


        // -----------------------------------------------------
        // SHARE
        // -----------------------------------------------------

        modal
            .querySelector(".guide-share")
            ?.addEventListener("click", async () => {

                const text =
                    `${title}\n\n` +
                    (
                        modal
                            .querySelector(".guide-content")
                            ?.innerText || ""
                    );

                if (
                    navigator.share
                ) {

                    try {

                        await navigator.share({
                            title: "CyberCare",
                            text
                        });

                    } catch {
                        // User cancelled sharing.
                    }

                } else {

                    try {

                        await navigator.clipboard.writeText(text);

                        showToast(
                            "Sharing is unavailable. Guide copied."
                        );

                    } catch {

                        showToast(
                            "Sharing is unavailable."
                        );

                    }

                }

            });

    }


    // =========================================================
    // TOAST
    // =========================================================

    function showToast(message) {

        document.querySelector(
            ".cybercare-toast"
        )?.remove();

        const toast =
            document.createElement("div");

        toast.className =
            "cybercare-toast";

        toast.textContent =
            message;

        document.body.appendChild(toast);

        setTimeout(() => {

            toast.classList.add("show");

        }, 10);

        setTimeout(() => {

            toast.classList.remove("show");

            setTimeout(() => {
                toast.remove();
            }, 300);

        }, 2500);

    }


    // =========================================================
    // KEYBOARD
    // =========================================================

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeSideMenu();

            $("#cybercareModal")?.remove();

        }

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
    // READY
    // =========================================================

    console.log(
        "🛡️ CyberCare Advanced System Loaded Successfully"
    );

});
