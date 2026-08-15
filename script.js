// ============================================================
// CYBERCARE - ADVANCED SCRIPT.JS
// Search + Guides + Women Safety + Tools + Bengali + Dark Mode
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    // =========================================================
    // ELEMENTS
    // =========================================================

    const menuBtn = document.getElementById("menuBtn");
    const closeMenu = document.getElementById("closeMenu");
    const sideMenu = document.getElementById("sideMenu");
    const menuOverlay = document.getElementById("menuOverlay");

    const emergencyBtn = document.getElementById("emergencyBtn");
    const quickHelpBtn = document.getElementById("quickHelpBtn");

    const themeBtn = document.getElementById("themeBtn");
    const languageBtn = document.getElementById("languageBtn");
    const languageText = document.getElementById("languageText");

    const problemSearch = document.getElementById("problemSearch");
    const searchResults = document.getElementById("searchResults");


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

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }

    document.querySelectorAll(".menu-item").forEach(item => {

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
                        behavior: "smooth"
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
                behavior: "smooth"
            });

    });


    quickHelpBtn?.addEventListener("click", () => {

        document.querySelector(".search-section")
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
    // LANGUAGE
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
            "সন্দেহজনক কার্যকলাপ"

    };


    function translatePage() {

        document.querySelectorAll(
            "h1,h2,h3,h4,p,button,strong,small"
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

    });

    translatePage();


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
                "ফেসবুক",
                "ইনস্টাগ্রাম",
                "হ্যাক",
                "অ্যাকাউন্ট"
            ],

            title: "🔐 Account Recovery",

            text: `
                <ol>
                    <li>Secure your email account first.</li>
                    <li>Change the compromised password.</li>
                    <li>Enable 2FA.</li>
                    <li>Check active sessions.</li>
                    <li>Remove unknown devices.</li>
                    <li>Check recovery email and phone.</li>
                    <li>Use only the official recovery system.</li>
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
                "sextortion",
                "ব্ল্যাকমেইল",
                "হুমকি",
                "ছবি",
                "ভিডিও"
            ],

            title: "⚠️ Blackmail / Private Content Threat",

            text: `
                <h3>Immediately do this:</h3>

                <ol>
                    <li>Do NOT pay.</li>
                    <li>Do NOT send more content.</li>
                    <li>Save screenshots and evidence.</li>
                    <li>Save usernames and URLs.</li>
                    <li>Secure your accounts.</li>
                    <li>Report the account/content.</li>
                    <li>Tell someone you trust.</li>
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
                "বারবার ফোন"
            ],

            title: "📞 Repeated Calls / Harassment",

            text: `
                <ol>
                    <li>Save call logs.</li>
                    <li>Take screenshots.</li>
                    <li>Do not engage unnecessarily.</li>
                    <li>Block the number/account.</li>
                    <li>Review privacy settings.</li>
                    <li>Report serious threats.</li>
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
                    <li>Screenshot the content.</li>
                    <li>Save profile and post URLs.</li>
                    <li>Report the content.</li>
                    <li>Secure your account.</li>
                    <li>Do not pay someone promising guaranteed removal.</li>
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

            title: "🎭 Fake Profile",

            text: `
                <ol>
                    <li>Save the profile URL.</li>
                    <li>Take screenshots.</li>
                    <li>Report impersonation.</li>
                    <li>Warn important contacts if necessary.</li>
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
                "টাকা",
                "প্রতারণা",
                "ইউপিআই"
            ],

            title: "💳 Online & Financial Fraud",

            text: `
                <ol>
                    <li>Contact your bank/payment provider immediately.</li>
                    <li>Tell them the transaction is fraudulent.</li>
                    <li>Save transaction ID.</li>
                    <li>Save screenshots.</li>
                    <li>Secure your payment account.</li>
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
                "ফিশিং",
                "ওটিপি"
            ],

            title: "🎣 Scam & Phishing",

            text: `
                <ol>
                    <li>Do not click suspicious links.</li>
                    <li>Never share OTP.</li>
                    <li>Never share password.</li>
                    <li>Never share UPI PIN.</li>
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
                "virus",
                "স্পাইওয়্যার",
                "ভাইরাস"
            ],

            title: "📱 Phone Security",

            text: `
                <ol>
                    <li>Check unknown apps.</li>
                    <li>Review permissions.</li>
                    <li>Check accessibility permissions.</li>
                    <li>Update your phone.</li>
                    <li>Remove suspicious apps.</li>
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

        searchResults.innerHTML = "";

        if (!query) return;

        const matches = problems.filter(problem =>
            problem.keywords.some(keyword =>
                query.includes(keyword)
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

                <div>
                    ${problem.text}
                </div>

                <button class="result-help">
                    View Full Safety Guide →
                </button>

            `;

            result.querySelector(".result-help")
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

    document.querySelectorAll(".help-btn")
        .forEach(button => {

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
                    <li>Secure your email first.</li>
                    <li>Change your password.</li>
                    <li>Enable 2FA.</li>
                    <li>Review active sessions.</li>
                    <li>Remove unknown devices.</li>
                    <li>Check recovery email and phone.</li>
                    <li>Check suspicious activity.</li>
                    <li>Use the official recovery process.</li>
                </ol>

                <h3>🚫 Never</h3>

                <ul>
                    <li>Never share OTP.</li>
                    <li>Never share recovery codes.</li>
                    <li>Never share your password.</li>
                    <li>Never pay for "guaranteed recovery".</li>
                </ul>
            `,


            "Scam & Phishing": `
                <h3>🎣 Scam & Phishing</h3>

                <ol>
                    <li>Stop interacting.</li>
                    <li>Do not click suspicious links.</li>
                    <li>Do not share OTP.</li>
                    <li>Do not share passwords.</li>
                    <li>Do not share UPI PIN.</li>
                    <li>Verify the sender independently.</li>
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
                    <li>Update the device.</li>
                    <li>Remove suspicious applications.</li>
                    <li>Secure accounts from a trusted device.</li>
                </ol>
            `,


            "Online Fraud": `
                <h3>💳 Online & Financial Fraud</h3>

                <h3>🚨 If money has been lost</h3>

                <ol>
                    <li>Contact your bank immediately.</li>
                    <li>Contact your payment provider.</li>
                    <li>Report the fraudulent transaction.</li>
                    <li>Save transaction ID.</li>
                    <li>Save screenshots.</li>
                    <li>Secure your payment account.</li>
                    <li>Use official cybercrime reporting.</li>
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
                <h3>🚨 Emergency Response</h3>

                <ol>
                    <li>Stop sending money or information.</li>
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

    document.querySelectorAll(".women-btn")
        .forEach(button => {

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
                        <li>Block the person when appropriate.</li>
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
                    <h3>🚨 First: Do not panic</h3>

                    <p>
                        Blackmailers often use fear and urgency.
                        Do not let pressure force you into paying
                        or sending more information.
                    </p>

                    <h3>1. Do NOT pay</h3>

                    <p>
                        Payment does not guarantee that the threats
                        will stop.
                    </p>

                    <h3>2. Do NOT send more content</h3>

                    <p>
                        Do not send additional photos, videos,
                        OTPs, passwords or personal information.
                    </p>

                    <h3>3. Save evidence</h3>

                    <ul>
                        <li>Messages</li>
                        <li>Screenshots</li>
                        <li>Username</li>
                        <li>Profile URL</li>
                        <li>Phone number</li>
                        <li>Payment requests</li>
                        <li>Dates and times</li>
                    </ul>

                    <h3>4. Secure accounts</h3>

                    <ol>
                        <li>Change important passwords.</li>
                        <li>Enable 2FA.</li>
                        <li>Review active sessions.</li>
                        <li>Remove unknown devices.</li>
                        <li>Review recovery information.</li>
                    </ol>

                    <h3>5. Report and block</h3>

                    <p>
                        Preserve evidence first, then report and block
                        where appropriate.
                    </p>

                    <h3>6. Tell someone you trust</h3>

                    <p>
                        You do not have to deal with blackmail alone.
                    </p>

                    <h3>7. If money was sent</h3>

                    <p>
                        Contact your bank/payment provider immediately
                        and preserve all transaction information.
                    </p>

                    <h3>8. If private content is published</h3>

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
    // TOOLS
    // =========================================================

    document.querySelectorAll(".tool-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                openTool(
                    button.dataset.tool
                );

            });

        });


    function openTool(tool) {

        const tools = {

            scam: `
                <h3>🔎 Scam Checker</h3>

                <p>Check how many warning signs are present:</p>

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

                </div>

                <button class="internal-tool-action" id="scamAnalyze">
                    Analyze Risk
                </button>

                <div id="scamResult"></div>
            `,


            password: `
                <h3>🔐 Password Safety Checker</h3>

                <p>
                    This checker runs locally. Your password is not sent
                    anywhere by this tool.
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
                    <li>Check domain spelling.</li>
                    <li>Watch for strange characters.</li>
                    <li>Be careful with shortened links.</li>
                    <li>Do not trust logos alone.</li>
                    <li>Never enter credentials into an unexpected page.</li>
                    <li>Prefer opening the official app/site directly.</li>
                </ol>
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
                </ul>

                <p>
                    Preserve original evidence whenever possible.
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

                </div>

                <button
                    class="internal-tool-action"
                    id="calculateScore"
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

            const scamAnalyze =
                document.getElementById("scamAnalyze");

            scamAnalyze?.addEventListener(
                "click",
                analyzeScam
            );


            const checkPassword =
                document.getElementById("checkPassword");

            checkPassword?.addEventListener(
                "click",
                checkPasswordStrength
            );


            const calculateScore =
                document.getElementById("calculateScore");

            calculateScore?.addEventListener(
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
            document.querySelectorAll(
                "#cybercareModal .tool-checks input"
            );

        let count = 0;

        checks.forEach(check => {

            if (check.checked) count++;

        });

        const result =
            document.getElementById("scamResult");

        if (!result) return;

        if (count === 0) {

            result.innerHTML = `
                <p>✅ No warning signs selected. Still verify unexpected requests independently.</p>
            `;

        } else if (count <= 2) {

            result.innerHTML = `
                <p>⚠️ Some warning signs detected. Be careful and verify independently.</p>
            `;

        } else {

            result.innerHTML = `
                <p>🚨 High-risk warning pattern. Stop, do not pay or share sensitive information, and verify through an official channel.</p>
            `;

        }

    }


    // =========================================================
    // PASSWORD CHECKER
    // =========================================================

    function checkPasswordStrength() {

        const input =
            document.getElementById("passwordInput");

        const result =
            document.getElementById("passwordResult");

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
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        let message;

        if (score <= 2) {

            message =
                "🔴 Weak — use a longer and more unique password.";

        } else if (score <= 4) {

            message =
                "🟡 Moderate — make it longer and unique.";

        } else {

            message =
                "🟢 Strong structure — still keep it private and unique.";

        }

        result.innerHTML = `
            <p>${message}</p>
        `;

    }


    // =========================================================
    // SAFETY SCORE
    // =========================================================

    function calculateSafetyScore() {

        const checks =
            document.querySelectorAll(
                "#cybercareModal .score-checks input"
            );

        let total = checks.length;
        let yes = 0;

        checks.forEach(check => {

            if (check.checked) yes++;

        });

        const percentage =
            Math.round((yes / total) * 100);

        const result =
            document.getElementById("scoreResult");

        if (!result) return;

        let level;

        if (percentage >= 80) {

            level =
                "🟢 Excellent basic safety habits";

        } else if (percentage >= 50) {

            level =
                "🟡 Good start — improve a few areas";

        } else {

            level =
                "🔴 Needs improvement";

        }

        result.innerHTML = `
            <h3>${percentage}%</h3>
            <p>${level}</p>
        `;

    }


    // =========================================================
    // LEARNING
    // =========================================================

    document.querySelectorAll(".learn-card")
        .forEach(button => {

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

    document.querySelectorAll("[data-emergency]")
        .forEach(button => {

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
                    <li>Use official recovery.</li>
                </ol>
            `,

            money: `
                <h3>💳 Money at Risk</h3>

                <ol>
                    <li>Contact your bank immediately.</li>
                    <li>Report the transaction as fraudulent.</li>
                    <li>Save transaction ID.</li>
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
                    <li>Report and block.</li>
                    <li>Tell someone you trust.</li>
                    <li>Seek appropriate official help.</li>
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

        showGuide(
            "🚨 Emergency Cyber Response",
            guides[type] ||
            "<p>Prioritize your safety and use official help.</p>"
        );

    }


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

        modal.querySelector(".guide-close")
            ?.addEventListener("click", () => {
                modal.remove();
            });

        modal.querySelector(".guide-ok")
            ?.addEventListener("click", () => {
                modal.remove();
            });

        modal.querySelector(".guide-overlay")
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

        if (event.key === "Escape") {

            closeSideMenu();

            document.getElementById(
                "cybercareModal"
            )?.remove();

        }

    });


    // =========================================================
    // GLOBAL ERROR PROTECTION
    // =========================================================

    window.addEventListener("error", event => {

        console.warn(
            "CyberCare handled an error:",
            event.message
        );

    });

});
