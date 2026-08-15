// ============================================================
// CYBERCARE ADVANCED SCRIPT
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    // =========================================================
    // BASIC ELEMENTS
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

            if (target === "services")
                scrollToSection("services");

            if (target === "women")
                scrollToSection("women");

            if (target === "tools")
                scrollToSection("tools");

            if (target === "learn")
                scrollToSection("learn");

            if (target === "india")
                scrollToSection("india");

            if (target === "about")
                scrollToSection("about");

            if (target === "emergency")
                document.querySelector(".emergency-section")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

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

    if (bengali && languageText) {
        languageText.textContent = "বাংলা";
    }

    languageBtn?.addEventListener("click", () => {

        bengali = !bengali;

        localStorage.setItem(
            "cybercare-language",
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


    function translateToBangla() {

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

        document.querySelectorAll(
            "h1,h2,h3,h4,p,button,strong,small"
        ).forEach(element => {

            const text =
                element.textContent.trim();

            if (translations[text]) {
                element.textContent =
                    translations[text];
            }

        });

    }


    // =========================================================
    // PROBLEM DATABASE
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
                "login"
            ],

            title: "🔐 Account Recovery",

            text: `
                Secure your email first, change passwords,
                enable 2FA, review active sessions and use
                the platform's official recovery process.
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
                Do not pay and do not send additional content.
                Preserve evidence, secure your accounts and
                report the situation through appropriate channels.
            `
        },

        {
            keywords: [
                "call",
                "calling",
                "harassment",
                "message",
                "disturb",
                "abuse"
            ],

            title: "📞 Repeated Calls / Harassment",

            text: `
                Preserve call logs and messages, avoid unnecessary
                engagement, block when appropriate and report
                serious threats through suitable channels.
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
                Save screenshots and URLs, report the content
                through the platform and preserve evidence.
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
                Save the profile URL and screenshots and report
                the account as fake or impersonation.
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
                "transaction"
            ],

            title: "💳 Online & Financial Fraud",

            text: `
                Contact your bank/payment provider immediately,
                preserve transaction information and report through
                official cybercrime channels.
            `
        },

        {
            keywords: [
                "phishing",
                "link",
                "otp",
                "fake website",
                "fake sms"
            ],

            title: "🎣 Scam & Phishing",

            text: `
                Do not open suspicious links or share OTPs,
                passwords, PINs or recovery codes.
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
                Review unknown apps and permissions, update
                the device and secure important accounts.
            `
        }

    ];


    // =========================================================
    // SMART SEARCH
    // =========================================================

    problemSearch?.addEventListener("input", () => {

        const query =
            problemSearch.value
                .toLowerCase()
                .trim();

        if (!searchResults) return;

        searchResults.innerHTML = "";

        if (!query) return;

        const matches =
            problems.filter(problem =>
                problem.keywords.some(keyword =>
                    query.includes(keyword)
                )
            );

        if (!matches.length) {

            searchResults.innerHTML = `

                <div class="search-result">

                    <h3>🔎 No exact guide found</h3>

                    <p>
                        Try:
                        blackmail,
                        hacked,
                        UPI fraud,
                        fake profile,
                        harassment,
                        phishing,
                        photo misuse
                        or phone security.
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

                <p>${problem.text}</p>

                <button class="result-help">
                    View Full Safety Guide →
                </button>

            `;

            result
                .querySelector(".result-help")
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
                <h3>1. Secure your email</h3>
                <p>
                    Change the email password and enable 2FA.
                </p>

                <h3>2. Change the compromised password</h3>
                <p>
                    Use a new and unique password.
                </p>

                <h3>3. Review active sessions</h3>
                <p>
                    Remove unknown devices and sessions.
                </p>

                <h3>4. Enable 2FA</h3>
                <p>
                    Use the platform's official security settings.
                </p>

                <h3>5. Check recovery information</h3>
                <p>
                    Check recovery email and phone number.
                </p>

                <h3>🚫 Never share</h3>
                <ul>
                    <li>OTP</li>
                    <li>Password</li>
                    <li>Recovery codes</li>
                    <li>UPI PIN</li>
                </ul>
            `,

            "Scam & Phishing": `
                <h3>🚨 Stop</h3>
                <p>
                    Do not click suspicious links or continue
                    the conversation until verified.
                </p>

                <h3>Never share</h3>
                <ul>
                    <li>OTP</li>
                    <li>Password</li>
                    <li>UPI PIN</li>
                    <li>Bank PIN</li>
                    <li>Recovery code</li>
                </ul>

                <h3>Verify independently</h3>
                <p>
                    Open the official app or website yourself
                    instead of following an unexpected link.
                </p>
            `,

            "Phone Security": `
                <h3>Check installed apps</h3>
                <p>
                    Look for apps you do not recognize.
                </p>

                <h3>Check permissions</h3>
                <ul>
                    <li>Camera</li>
                    <li>Microphone</li>
                    <li>Location</li>
                    <li>SMS</li>
                    <li>Contacts</li>
                    <li>Accessibility</li>
                </ul>

                <h3>Update your device</h3>
                <p>
                    Install official system and security updates.
                </p>
            `,

            "Online Fraud": `
                <h3>🚨 Act immediately</h3>

                <ol>
                    <li>Contact your bank/payment provider.</li>
                    <li>Tell them it is a fraudulent transaction.</li>
                    <li>Save transaction IDs.</li>
                    <li>Secure your payment accounts.</li>
                    <li>Use official cybercrime reporting channels.</li>
                </ol>

                <h3>Never</h3>
                <p>
                    Never share OTP or UPI PIN with someone
                    claiming they can reverse a transaction.
                </p>
            `,

            "Suspicious Activity": `
                <h3>Warning signs</h3>

                <ul>
                    <li>Unknown login</li>
                    <li>Unknown device</li>
                    <li>Password reset you did not request</li>
                    <li>Unexpected messages</li>
                    <li>Unexpected account changes</li>
                </ul>

                <h3>Action</h3>

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

                <p>
                    If there is immediate physical danger,
                    prioritize personal safety.
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

            harassment: `
                <h3>📞 Repeated Calls / Harassment</h3>

                <ol>
                    <li>Do not panic.</li>
                    <li>Save screenshots.</li>
                    <li>Save call logs.</li>
                    <li>Save messages.</li>
                    <li>Block the person when appropriate.</li>
                    <li>Review privacy settings.</li>
                    <li>Tell someone you trust.</li>
                </ol>

                <h3>⚠️ If threats are involved</h3>

                <p>
                    Preserve evidence and seek appropriate
                    official assistance.
                </p>
            `,

            photo: `
                <h3>📸 Photo Misuse</h3>

                <ol>
                    <li>Screenshot the content.</li>
                    <li>Save the profile URL.</li>
                    <li>Save username.</li>
                    <li>Report the content.</li>
                    <li>Secure your account.</li>
                </ol>

                <p>
                    Do not pay someone promising guaranteed removal.
                </p>
            `,

            fakeprofile: `
                <h3>🎭 Fake Profile</h3>

                <ol>
                    <li>Save profile screenshots.</li>
                    <li>Copy the profile URL.</li>
                    <li>Report impersonation.</li>
                    <li>Warn important contacts if necessary.</li>
                    <li>Secure your real account.</li>
                </ol>
            `,

            blackmail: `
                <h3>⚠️ Blackmail — A to Z</h3>

                <h3>1. Do NOT pay</h3>
                <p>
                    Payment does not guarantee that the threats stop.
                </p>

                <h3>2. Do NOT send more content</h3>
                <p>
                    Do not send additional photos, videos,
                    passwords or personal information.
                </p>

                <h3>3. Preserve evidence</h3>

                <ul>
                    <li>Messages</li>
                    <li>Screenshots</li>
                    <li>Usernames</li>
                    <li>Profile URLs</li>
                    <li>Phone numbers</li>
                    <li>Payment requests</li>
                    <li>Timestamps</li>
                </ul>

                <h3>4. Secure accounts</h3>

                <ol>
                    <li>Change passwords.</li>
                    <li>Enable 2FA.</li>
                    <li>Review active sessions.</li>
                    <li>Remove unknown devices.</li>
                    <li>Check recovery information.</li>
                </ol>

                <h3>5. Block and report</h3>

                <p>
                    Preserve important evidence first,
                    then block/report where appropriate.
                </p>

                <h3>6. Tell someone you trust</h3>

                <p>
                    You do not have to deal with blackmail alone.
                </p>

                <h3>7. If money was sent</h3>

                <p>
                    Contact your bank/payment provider immediately
                    and preserve transaction information.
                </p>

                <h3>❤️ Remember</h3>

                <p>
                    Being blackmailed is not your fault.
                </p>
            `,

            private: `
                <h3>🔒 Private Photo / Video Threat</h3>

                <ol>
                    <li>Stop sending additional content.</li>
                    <li>Do not pay under pressure.</li>
                    <li>Save all evidence.</li>
                    <li>Secure accounts.</li>
                    <li>Report the account/content.</li>
                    <li>Tell someone you trust.</li>
                </ol>
            `,

            stalking: `
                <h3>👁️ Online Stalking</h3>

                <h3>Review public information</h3>

                <ul>
                    <li>Phone number</li>
                    <li>Location</li>
                    <li>Daily routine</li>
                    <li>Work/school information</li>
                    <li>Friends and family information</li>
                </ul>

                <h3>Secure yourself</h3>

                <ol>
                    <li>Review location sharing.</li>
                    <li>Change passwords.</li>
                    <li>Enable 2FA.</li>
                    <li>Review active sessions.</li>
                    <li>Block/report repeated abuse.</li>
                    <li>Preserve evidence.</li>
                </ol>
            `

        };

        showGuide(
            "👩 Women's Digital Safety",
            guides[type] ||
            "<p>Follow the appropriate digital safety steps.</p>"
        );

    }


    // =========================================================
    // ADVANCED TOOLS
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

        if (tool === "scam") {
            openScamScanner();
            return;
        }

        if (tool === "password") {
            openPasswordChecker();
            return;
        }

        if (tool === "url") {
            openURLChecker();
            return;
        }

        if (tool === "privacy") {
            openPrivacyChecker();
            return;
        }

        if (tool === "evidence") {
            openEvidenceChecklist();
            return;
        }

        if (tool === "score") {
            openSafetyScore();
            return;
        }

    }


    // =========================================================
    // SCAM SCANNER
    // =========================================================

    function openScamScanner() {

        showGuide(
            "🔎 Scam Scanner",
            `

            <p>
                Paste a suspicious message below.
                CyberCare will check common warning signs locally.
            </p>

            <textarea
                id="scamInput"
                placeholder="Paste suspicious SMS, WhatsApp message, email or text..."
                style="
                    width:100%;
                    min-height:140px;
                    padding:12px;
                    border-radius:10px;
                    border:1px solid #ccc;
                    resize:vertical;
                "
            ></textarea>

            <button
                id="runScamScan"
                class="guide-ok"
                style="margin-top:12px;"
            >
                🔎 Scan Now
            </button>

            <div
                id="scamScanResult"
                style="margin-top:15px;"
            ></div>

            `
        );

        setTimeout(() => {

            const scanBtn =
                document.getElementById("runScamScan");

            scanBtn?.addEventListener(
                "click",
                runScamScan
            );

        }, 50);

    }


    function runScamScan() {

        const input =
            document.getElementById("scamInput");

        const result =
            document.getElementById("scamScanResult");

        if (!input || !result) return;

        const text =
            input.value
                .toLowerCase()
                .trim();

        if (!text) {

            result.innerHTML = `
                <div class="search-result">
                    ⚠️ Please paste a message first.
                </div>
            `;

            return;
        }

        const indicators = [

            {
                words: [
                    "otp",
                    "one time password",
                    "verification code"
                ],
                message:
                    "Requests an OTP or verification code."
            },

            {
                words: [
                    "upi pin",
                    "upi pin",
                    "pin"
                ],
                message:
                    "Requests a PIN or sensitive payment information."
            },

            {
                words: [
                    "urgent",
                    "immediately",
                    "act now",
                    "within 10 minutes"
                ],
                message:
                    "Uses urgency or pressure."
            },

            {
                words: [
                    "click here",
                    "click the link",
                    "open this link"
                ],
                message:
                    "Encourages you to click a link."
            },

            {
                words: [
                    "prize",
                    "lottery",
                    "winner",
                    "reward"
                ],
                message:
                    "Mentions a prize, lottery or unexpected reward."
            },

            {
                words: [
                    "refund",
                    "cashback"
                ],
                message:
                    "Uses refund/cashback claims."
            },

            {
                words: [
                    "investment",
                    "guaranteed profit",
                    "double your money"
                ],
                message:
                    "Promises investment profit or guaranteed returns."
            },

            {
                words: [
                    "police",
                    "court",
                    "arrest",
                    "legal action"
                ],
                message:
                    "Uses authority, legal or arrest threats."
            },

            {
                words: [
                    "password",
                    "login",
                    "username"
                ],
                message:
                    "Requests account credentials."
            },

            {
                words: [
                    "send money",
                    "transfer money",
                    "pay now",
                    "payment"
                ],
                message:
                    "Requests a payment or money transfer."
            }

        ];

        const found = [];

        indicators.forEach(indicator => {

            if (
                indicator.words.some(word =>
                    text.includes(word)
                )
            ) {
                found.push(indicator.message);
            }

        });

        let level = "LOW";

        if (found.length >= 4) {
            level = "HIGH";
        } else if (found.length >= 2) {
            level = "MEDIUM";
        }

        let icon = "🟢";

        if (level === "MEDIUM")
            icon = "🟠";

        if (level === "HIGH")
            icon = "🔴";

        result.innerHTML = `

            <div class="search-result">

                <h3>
                    ${icon} Risk Level: ${level}
                </h3>

                <p>
                    Detected warning signs:
                    <strong>${found.length}</strong>
                </p>

                ${
                    found.length
                    ? `
                        <ul>
                            ${found.map(item =>
                                `<li>⚠️ ${item}</li>`
                            ).join("")}
                        </ul>
                    `
                    : `
                        <p>
                            No common warning sign was detected.
                            This does NOT prove the message is safe.
                        </p>
                    `
                }

                <hr>

                <strong>🛡️ Safety advice</strong>

                <p>
                    Do not share OTPs, passwords, UPI PINs or
                    recovery codes. Verify unexpected requests
                    independently.
                </p>

            </div>

        `;

    }


    // =========================================================
    // PASSWORD CHECKER
    // =========================================================

    function openPasswordChecker() {

        showGuide(
            "🔐 Password Strength Checker",
            `

            <p>
                Your password is checked locally in your browser.
                It is not uploaded anywhere by this tool.
            </p>

            <input
                id="passwordInput"
                type="password"
                placeholder="Enter a password to check"
                style="
                    width:100%;
                    padding:12px;
                    border-radius:10px;
                    border:1px solid #ccc;
                "
            >

            <button
                id="checkPassword"
                class="guide-ok"
                style="margin-top:12px;"
            >
                Check Password
            </button>

            <div
                id="passwordResult"
                style="margin-top:15px;"
            ></div>

            `
        );

        setTimeout(() => {

            document.getElementById(
                "checkPassword"
            )?.addEventListener(
                "click",
                checkPassword
            );

        }, 50);

    }


    function checkPassword() {

        const input =
            document.getElementById(
                "passwordInput"
            );

        const result =
            document.getElementById(
                "passwordResult"
            );

        if (!input || !result) return;

        const password =
            input.value;

        if (!password) {

            result.innerHTML =
                "⚠️ Enter a password first.";

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

        let strength = "Weak";

        if (score >= 5)
            strength = "Strong";
        else if (score >= 3)
            strength = "Medium";

        result.innerHTML = `

            <div class="search-result">

                <h3>🔐 Strength: ${strength}</h3>

                <p>
                    Length: ${password.length} characters
                </p>

                <ul>

                    <li>
                        ${password.length >= 12 ? "✅" : "❌"}
                        At least 12 characters
                    </li>

                    <li>
                        ${/[A-Z]/.test(password) ? "✅" : "❌"}
                        Uppercase letter
                    </li>

                    <li>
                        ${/[a-z]/.test(password) ? "✅" : "❌"}
                        Lowercase letter
                    </li>

                    <li>
                        ${/[0-9]/.test(password) ? "✅" : "❌"}
                        Number
                    </li>

                    <li>
                        ${/[^A-Za-z0-9]/.test(password) ? "✅" : "❌"}
                        Special character
                    </li>

                </ul>

                <p>
                    Never reuse an important password and
                    enable 2FA where possible.
                </p>

            </div>

        `;

    }


    // =========================================================
    // URL CHECKER
    // =========================================================

    function openURLChecker() {

        showGuide(
            "🔗 URL Safety Checker",
            `

            <p>
                Paste a URL to check common suspicious patterns.
            </p>

            <input
                id="urlInput"
                type="url"
                placeholder="https://example.com"
                style="
                    width:100%;
                    padding:12px;
                    border-radius:10px;
                    border:1px solid #ccc;
                "
            >

            <button
                id="checkURL"
                class="guide-ok"
                style="margin-top:12px;"
            >
                🔎 Scan URL
            </button>

            <div
                id="urlResult"
                style="margin-top:15px;"
            ></div>

            `
        );

        setTimeout(() => {

            document.getElementById(
                "checkURL"
            )?.addEventListener(
                "click",
                checkURL
            );

        }, 50);

    }


    function checkURL() {

        const input =
            document.getElementById("urlInput");

        const result =
            document.getElementById("urlResult");

        if (!input || !result) return;

        const value =
            input.value.trim();

        if (!value) {

            result.innerHTML =
                "⚠️ Enter a URL first.";

            return;
        }

        let url;

        try {

            url = new URL(value);

        } catch {

            result.innerHTML = `
                <div class="search-result">
                    🔴 This does not appear to be a valid URL.
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
            url.hostname.includes("@") ||
            value.includes("%40")
        ) {
            warnings.push(
                "The URL contains an unusual @ pattern."
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
            value.length > 150
        ) {
            warnings.push(
                "The URL is unusually long."
            );
        }

        if (
            /login|verify|secure|account|password/i
                .test(value)
        ) {
            warnings.push(
                "The URL contains security/login-related words."
            );
        }

        result.innerHTML = `

            <div class="search-result">

                <h3>
                    ${
                        warnings.length
                        ? "⚠️ Review Carefully"
                        : "🟢 No obvious warning pattern detected"
                    }
                </h3>

                <p>
                    Domain:
                    <strong>${url.hostname}</strong>
                </p>

                ${
                    warnings.length
                    ? `
                        <ul>
                            ${warnings.map(w =>
                                `<li>⚠️ ${w}</li>`
                            ).join("")}
                        </ul>
                    `
                    : `
                        <p>
                            No obvious suspicious pattern was detected.
                            This does NOT guarantee that the website is safe.
                        </p>
                    `
                }

            </div>

        `;

    }


    // =========================================================
    // PRIVACY CHECKER
    // =========================================================

    function openPrivacyChecker() {

        showGuide(
            "📱 Privacy Checklist",
            `

            <p>
                Check each item that you have secured.
            </p>

            <div id="privacyChecklist">

                ${[
                    "2FA enabled",
                    "Unique passwords",
                    "Location sharing reviewed",
                    "Unknown devices removed",
                    "App permissions reviewed",
                    "Social media privacy reviewed",
                    "Recovery email secured",
                    "Recovery phone secured",
                    "Phone software updated"
                ].map((item, index) => `

                    <label style="
                        display:block;
                        margin:10px 0;
                    ">

                        <input
                            type="checkbox"
                            class="privacy-item"
                            data-index="${index}"
                        >

                        ${item}

                    </label>

                `).join("")}

            </div>

            <button
                id="privacyScore"
                class="guide-ok"
            >
                Calculate Privacy Score
            </button>

            <div
                id="privacyResult"
                style="margin-top:15px;"
            ></div>

            `
        );

        setTimeout(() => {

            document.getElementById(
                "privacyScore"
            )?.addEventListener(
                "click",
                calculatePrivacyScore
            );

        }, 50);

    }


    function calculatePrivacyScore() {

        const items =
            document.querySelectorAll(
                ".privacy-item"
            );

        let checked = 0;

        items.forEach(item => {

            if (item.checked)
                checked++;

        });

        const total =
            items.length;

        const percentage =
            Math.round(
                (checked / total) * 100
            );

        const result =
            document.getElementById(
                "privacyResult"
            );

        if (result) {

            result.innerHTML = `

                <div class="search-result">

                    <h3>
                        🛡️ Privacy Score: ${percentage}%
                    </h3>

                    <p>
                        ${checked} of ${total}
                        security checks completed.
                    </p>

                </div>

            `;

        }

    }


    // =========================================================
    // EVIDENCE CHECKLIST
    // =========================================================

    function openEvidenceChecklist() {

        showGuide(
            "🧾 Evidence Checklist",
            `

            <p>
                Select the evidence you have already preserved.
            </p>

            ${[
                "Screenshots",
                "Messages",
                "Username",
                "Profile URL",
                "Phone number",
                "Call logs",
                "Emails",
                "Date and time",
                "Transaction ID",
                "Payment details"
            ].map(item => `

                <label style="
                    display:block;
                    margin:10px 0;
                ">

                    <input
                        type="checkbox"
                        class="evidence-item"
                    >

                    ${item}

                </label>

            `).join("")}

            <button
                id="evidenceDone"
                class="guide-ok"
            >
                Check Evidence
            </button>

            <div
                id="evidenceResult"
                style="margin-top:15px;"
            ></div>

            `
        );

        setTimeout(() => {

            document.getElementById(
                "evidenceDone"
            )?.addEventListener(
                "click",
                () => {

                    const items =
                        document.querySelectorAll(
                            ".evidence-item"
                        );

                    let count = 0;

                    items.forEach(item => {
                        if (item.checked)
                            count++;
                    });

                    const result =
                        document.getElementById(
                            "evidenceResult"
                        );

                    if (result) {

                        result.innerHTML = `

                            <div class="search-result">

                                <h3>
                                    🧾 ${count}/${items.length}
                                    items saved
                                </h3>

                                <p>
                                    Preserve original evidence
                                    whenever possible.
                                </p>

                            </div>

                        `;

                    }

                }
            );

        }, 50);

    }


    // =========================================================
    // CYBER SAFETY SCORE
    // =========================================================

    function openSafetyScore() {

        const questions = [

            "I use unique passwords.",
            "I have enabled 2FA.",
            "I never share OTPs.",
            "I review account sessions.",
            "I review app permissions.",
            "I keep my phone updated.",
            "I verify suspicious payment requests.",
            "I know where to report cybercrime.",
            "I review social media privacy.",
            "I avoid suspicious links."

        ];

        showGuide(
            "🛡️ Cyber Safety Score",
            `

            <p>
                Answer the questions honestly.
            </p>

            <div id="safetyQuestions">

                ${questions.map((q, i) => `

                    <label style="
                        display:block;
                        margin:12px 0;
                    ">

                        <input
                            type="checkbox"
                            class="safety-item"
                        >

                        ${i + 1}. ${q}

                    </label>

                `).join("")}

            </div>

            <button
                id="calculateSafety"
                class="guide-ok"
            >
                Calculate Score
            </button>

            <div
                id="safetyResult"
                style="margin-top:15px;"
            ></div>

            `
        );

        setTimeout(() => {

            document.getElementById(
                "calculateSafety"
            )?.addEventListener(
                "click",
                calculateSafety
            );

        }, 50);

    }


    function calculateSafety() {

        const items =
            document.querySelectorAll(
                ".safety-item"
            );

        let score = 0;

        items.forEach(item => {

            if (item.checked)
                score++;

        });

        const percentage =
            Math.round(
                (score / items.length) * 100
            );

        let status =
            "Needs Improvement";

        if (percentage >= 80)
            status = "Excellent";

        else if (percentage >= 60)
            status = "Good";

        const result =
            document.getElementById(
                "safetyResult"
            );

        if (result) {

            result.innerHTML = `

                <div class="search-result">

                    <h3>
                        🛡️ ${percentage}% — ${status}
                    </h3>

                    <p>
                        You completed ${score}
                        out of ${items.length}
                        safety checks.
                    </p>

                    <p>
                        Keep improving your digital
                        security habits.
                    </p>

                </div>

            `;

        }

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
                    Use long and unique passwords.
                    Never reuse important passwords.
                </p>

                <p>
                    Enable 2FA wherever possible.
                </p>
            `,

            "2fa": `
                <h3>🔑 Two-Factor Authentication</h3>

                <p>
                    2FA adds another security layer
                    beyond your password.
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
                    Phishing tries to trick you into
                    revealing sensitive information.
                </p>

                <p>
                    Verify unexpected requests independently.
                </p>
            `,

            privacy: `
                <h3>🔒 Privacy</h3>

                <p>
                    Review who can see your posts,
                    contact you and access your location.
                </p>
            `,

            phone: `
                <h3>📱 Phone Security</h3>

                <p>
                    Keep your phone updated and
                    review application permissions.
                </p>
            `,

            financial: `
                <h3>💳 Financial Safety</h3>

                <p>
                    Never share OTPs, UPI PINs,
                    passwords or banking credentials.
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
                    <li>Review active sessions.</li>
                    <li>Remove unknown devices.</li>
                    <li>Check recovery information.</li>
                    <li>Use official recovery.</li>
                </ol>
            `,

            money: `
                <h3>💳 Money at Risk</h3>

                <ol>
                    <li>Contact your bank/payment provider.</li>
                    <li>Report the fraudulent transaction.</li>
                    <li>Save transaction IDs.</li>
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
                    <li>Report the account/content.</li>
                    <li>Tell someone you trust.</li>
                </ol>

                <p>
                    If there is immediate physical danger,
                    prioritize your safety.
                </p>
            `,

            phone: `
                <h3>📱 Phone Compromised</h3>

                <ol>
                    <li>Review suspicious apps.</li>
                    <li>Review permissions.</li>
                    <li>Review accessibility access.</li>
                    <li>Update the phone.</li>
                    <li>Secure important accounts from a trusted device.</li>
                    <li>Preserve important evidence.</li>
                </ol>
            `

        };

        showGuide(
            "🚨 Emergency Response",
            guides[type] ||
            "<p>Take immediate steps to protect yourself.</p>"
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
                        type="button"
                    >
                        ✕
                    </button>

                    <h2>${title}</h2>

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

        modal.querySelector(
            ".guide-close"
        )?.addEventListener(
            "click",
            () => modal.remove()
        );

        modal.querySelector(
            ".guide-ok"
        )?.addEventListener(
            "click",
            () => modal.remove()
        );

        modal.querySelector(
            ".guide-overlay"
        )?.addEventListener(
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

    }


    // =========================================================
    // ESCAPE KEY
    // =========================================================

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeSideMenu();

                document.getElementById(
                    "cybercareModal"
                )?.remove();

            }

        }
    );


    // =========================================================
    // GLOBAL ERROR SAFETY
    // =========================================================

    window.addEventListener(
        "error",
        event => {

            console.warn(
                "CyberCare:",
                event.message
            );

        }
    );


    // =========================================================
    // STARTUP
    // =========================================================

    console.log(
        "🛡️ CyberCare Advanced System Loaded"
    );

});
