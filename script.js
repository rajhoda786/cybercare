// ======================================================
// CYBERCARE — COMPLETE SAFETY GUIDE JAVASCRIPT
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    // ==================================================
    // ELEMENTS
    // ==================================================

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


    // ==================================================
    // SIDE MENU
    // ==================================================

    function openMenu() {
        if (!sideMenu || !menuOverlay) return;

        sideMenu.classList.add("active");
        menuOverlay.classList.add("active");
        document.body.classList.add("menu-open");
    }

    function closeSideMenu() {
        if (!sideMenu || !menuOverlay) return;

        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
    }

    menuBtn?.addEventListener("click", openMenu);
    closeMenu?.addEventListener("click", closeSideMenu);
    menuOverlay?.addEventListener("click", closeSideMenu);


    // ==================================================
    // SECTION NAVIGATION
    // ==================================================

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

            if (target === "services") {
                scrollToSection("services");
            }

            if (target === "women") {
                scrollToSection("women");
            }

            if (target === "tools") {
                scrollToSection("tools");
            }

            if (target === "learn") {
                scrollToSection("learn");
            }

            if (target === "india") {
                scrollToSection("india");
            }

            if (target === "about") {
                scrollToSection("about");
            }

            if (target === "emergency") {
                document.querySelector(".emergency-section")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });
            }

        });

    });


    // ==================================================
    // EMERGENCY BUTTON
    // ==================================================

    emergencyBtn?.addEventListener("click", () => {

        document.querySelector(".emergency-section")
            ?.scrollIntoView({
                behavior: "smooth"
            });

    });


    // ==================================================
    // QUICK HELP
    // ==================================================

    quickHelpBtn?.addEventListener("click", () => {

        document.querySelector(".search-section")
            ?.scrollIntoView({
                behavior: "smooth"
            });

        setTimeout(() => {
            problemSearch?.focus();
        }, 500);

    });


    // ==================================================
    // DARK MODE
    // ==================================================

    let darkMode =
        localStorage.getItem("cybercare-theme") === "dark";

    function applyTheme() {

        if (darkMode) {
            document.body.classList.add("dark-mode");

            if (themeBtn) {
                themeBtn.textContent = "☀️";
            }

        } else {

            document.body.classList.remove("dark-mode");

            if (themeBtn) {
                themeBtn.textContent = "🌙";
            }
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


    // ==================================================
    // LANGUAGE
    // ==================================================

    let bengali = false;

    languageBtn?.addEventListener("click", () => {

        bengali = !bengali;

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

            const text = element.textContent.trim();

            if (translations[text]) {
                element.textContent =
                    translations[text];
            }

        });

    }


    // ==================================================
    // COMPLETE PROBLEM DATABASE
    // ==================================================

    const problems = [

        // ACCOUNT
        {
            keywords: [
                "facebook hacked",
                "instagram hacked",
                "whatsapp hacked",
                "google hacked",
                "youtube hacked",
                "account hacked",
                "hacked",
                "account recovery",
                "account stolen",
                "login problem"
            ],
            title: "🔐 Account Recovery",
            text: `
                If your account may be compromised, secure your
                email first, change passwords, enable 2FA,
                review active sessions and use only the official
                recovery process.
            `
        },


        // BLACKMAIL
        {
            keywords: [
                "blackmail",
                "blackmailing",
                "threat",
                "threatening",
                "money demand",
                "blackmailer"
            ],
            title: "⚠️ Blackmail / Threat",
            text: `
                Do not pay, do not send additional content and
                preserve all evidence. Secure your accounts,
                block/report when appropriate and seek trusted
                and official help.
            `
        },


        // PRIVATE CONTENT
        {
            keywords: [
                "private photo",
                "private video",
                "intimate photo",
                "intimate video",
                "nude photo",
                "nude video",
                "personal video",
                "photo threat",
                "video threat"
            ],
            title: "🔒 Private Photo / Video Threat",
            text: `
                Do not negotiate with the person or send more
                material. Preserve evidence, report the account
                and content, secure your accounts and seek
                appropriate official help.
            `
        },


        // HARASSMENT
        {
            keywords: [
                "harassment",
                "calling",
                "call",
                "repeated call",
                "unknown caller",
                "disturbing",
                "messages",
                "abusive messages"
            ],
            title: "📞 Repeated Calls / Harassment",
            text: `
                Preserve call logs and messages, block the
                person where appropriate, review privacy settings
                and report threatening or abusive behaviour.
            `
        },


        // PHOTO MISUSE
        {
            keywords: [
                "photo misuse",
                "photo stolen",
                "picture stolen",
                "image stolen",
                "photo used",
                "picture used",
                "edited photo",
                "morphed photo"
            ],
            title: "📸 Photo Misuse",
            text: `
                Save screenshots, profile URLs and timestamps.
                Report the content/account and avoid engaging
                with people spreading the material.
            `
        },


        // FAKE PROFILE
        {
            keywords: [
                "fake profile",
                "fake account",
                "impersonation",
                "someone pretending",
                "fake instagram",
                "fake facebook"
            ],
            title: "🎭 Fake Profile",
            text: `
                Record the profile URL and screenshots, report
                impersonation through the platform and inform
                trusted contacts if necessary.
            `
        },


        // STALKING
        {
            keywords: [
                "stalking",
                "stalker",
                "following me",
                "monitoring me",
                "tracking me",
                "online stalking"
            ],
            title: "👁️ Online Stalking",
            text: `
                Review location sharing, privacy settings,
                active sessions and unknown devices. Change
                passwords, enable 2FA and preserve evidence.
            `
        },


        // FINANCIAL FRAUD
        {
            keywords: [
                "upi",
                "bank fraud",
                "banking fraud",
                "payment fraud",
                "money stolen",
                "money fraud",
                "card fraud",
                "investment scam",
                "job scam",
                "refund scam",
                "financial fraud",
                "online fraud"
            ],
            title: "💳 Online & Financial Fraud",
            text: `
                Contact your bank or payment provider immediately.
                Preserve transaction details and use the official
                cybercrime reporting channel in India when
                appropriate.
            `
        },


        // PHISHING
        {
            keywords: [
                "phishing",
                "fake link",
                "suspicious link",
                "fake website",
                "otp",
                "login link",
                "fake login"
            ],
            title: "🎣 Scam & Phishing",
            text: `
                Do not open suspicious links or share OTPs,
                passwords or recovery codes. Verify the sender
                through an independent official channel.
            `
        },


        // PHONE
        {
            keywords: [
                "phone hacked",
                "phone security",
                "spyware",
                "malware",
                "unknown app",
                "phone compromised",
                "phone hacked",
                "screen sharing"
            ],
            title: "📱 Phone Security",
            text: `
                Review installed apps, permissions, accessibility
                services, device administrator access and system
                updates. Secure important accounts.
            `
        }

    ];


    // ==================================================
    // SEARCH
    // ==================================================

    problemSearch?.addEventListener("input", () => {

        const query =
            problemSearch.value
                .toLowerCase()
                .trim();

        if (!searchResults) return;

        searchResults.innerHTML = "";

        if (!query) return;

        const matches = problems.filter(problem =>
            problem.keywords.some(keyword =>
                query.includes(keyword) ||
                keyword.includes(query)
            )
        );

        if (!matches.length) {

            searchResults.innerHTML = `
                <div class="search-result">

                    <h3>🔎 No exact guide found</h3>

                    <p>
                        Try words like:
                        blackmail, hacked, UPI fraud,
                        harassment, fake profile,
                        phishing, photo misuse or stalking.
                    </p>

                </div>
            `;

            return;
        }

        matches.forEach(problem => {

            const result =
                document.createElement("div");

            result.className = "search-result";

            result.innerHTML = `
                <h3>${problem.title}</h3>

                <p>${problem.text}</p>

                <button class="result-help">
                    View Complete Safety Guide →
                </button>
            `;

            result.querySelector(".result-help")
                .addEventListener("click", () => {

                    showGuide(
                        problem.title,
                        problem.text
                    );

                });

            searchResults.appendChild(result);

        });

    });


    // ==================================================
    // SERVICE BUTTONS
    // ==================================================

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

            "Account Recovery": {
                title: "🔐 Account Recovery",
                content: `
                    <h3>🚨 Do this first</h3>
                    <ol>
                        <li>Secure the email account connected to the account.</li>
                        <li>Change the password immediately if you can still log in.</li>
                        <li>Use a unique password that you do not use elsewhere.</li>
                        <li>Enable two-factor authentication.</li>
                        <li>Review active sessions and remove unknown devices.</li>
                    </ol>

                    <h3>📱 If you cannot log in</h3>
                    <ol>
                        <li>Use only the platform's official recovery page or app.</li>
                        <li>Do not trust people offering paid guaranteed recovery.</li>
                        <li>Check whether your recovery email or phone number was changed.</li>
                        <li>Secure other accounts that used the same password.</li>
                    </ol>

                    <h3>🧾 Save evidence</h3>
                    <ul>
                        <li>Suspicious login alerts</li>
                        <li>Security emails</li>
                        <li>Unknown device information</li>
                        <li>Changed recovery details</li>
                    </ul>

                    <h3>❌ Never do this</h3>
                    <ul>
                        <li>Never share OTPs.</li>
                        <li>Never share recovery codes.</li>
                        <li>Never give your password to a stranger.</li>
                    </ul>
                `
            },


            "Scam & Phishing": {
                title: "🎣 Scam & Phishing",
                content: `
                    <h3>🚨 Warning signs</h3>
                    <ul>
                        <li>Urgent pressure to act immediately.</li>
                        <li>Requests for OTP or password.</li>
                        <li>Unexpected payment request.</li>
                        <li>Fake prize, job or investment promise.</li>
                        <li>Suspicious website address.</li>
                    </ul>

                    <h3>🛡️ What to do</h3>
                    <ol>
                        <li>Stop communicating with the sender.</li>
                        <li>Do not open suspicious links.</li>
                        <li>Verify through the organisation's official website or app.</li>
                        <li>If credentials were entered, change the password immediately.</li>
                        <li>Enable 2FA.</li>
                    </ol>

                    <h3>💳 If money was sent</h3>
                    <p>
                        Contact your bank or payment provider immediately
                        and preserve transaction information.
                    </p>

                    <h3>❌ Never share</h3>
                    <ul>
                        <li>OTP</li>
                        <li>UPI PIN</li>
                        <li>Password</li>
                        <li>Recovery code</li>
                        <li>Banking credentials</li>
                    </ul>
                `
            },


            "Phone Security": {
                title: "📱 Phone Security",
                content: `
                    <h3>🔎 Check your phone</h3>
                    <ol>
                        <li>Review recently installed applications.</li>
                        <li>Remove apps you do not recognise.</li>
                        <li>Review microphone, camera and location permissions.</li>
                        <li>Check Accessibility access.</li>
                        <li>Check Device Administrator access.</li>
                        <li>Install system and security updates.</li>
                    </ol>

                    <h3>🔐 Secure accounts</h3>
                    <ol>
                        <li>Change important passwords from a trusted device if possible.</li>
                        <li>Enable 2FA.</li>
                        <li>Review active sessions.</li>
                        <li>Remove unknown devices.</li>
                    </ol>

                    <h3>⚠️ If you strongly suspect compromise</h3>
                    <p>
                        Avoid entering sensitive credentials on the
                        potentially compromised device until you have
                        secured it or obtained appropriate technical help.
                    </p>
                `
            },


            "Online Fraud": {
                title: "💳 Online & Financial Fraud",
                content: `
                    <h3>🚨 Act immediately</h3>
                    <ol>
                        <li>Contact your bank/payment provider immediately.</li>
                        <li>Ask about blocking or securing the affected payment method.</li>
                        <li>Preserve transaction IDs and confirmation messages.</li>
                        <li>Do not send additional money to a person claiming they can recover your money.</li>
                        <li>Use the official cybercrime reporting channel when appropriate.</li>
                    </ol>

                    <h3>🧾 Keep</h3>
                    <ul>
                        <li>Transaction ID</li>
                        <li>Amount</li>
                        <li>Date and time</li>
                        <li>Phone number/account details shown</li>
                        <li>Screenshots and messages</li>
                    </ul>

                    <h3>❌ Never</h3>
                    <ul>
                        <li>Share OTP.</li>
                        <li>Share UPI PIN.</li>
                        <li>Install unknown remote-access apps.</li>
                        <li>Pay a recovery scammer.</li>
                    </ul>
                `
            },


            "Suspicious Activity": {
                title: "🕵️ Suspicious Activity",
                content: `
                    <h3>🔎 Check immediately</h3>
                    <ol>
                        <li>Review recent login activity.</li>
                        <li>Check active sessions.</li>
                        <li>Remove unknown devices.</li>
                        <li>Change the password.</li>
                        <li>Enable 2FA.</li>
                        <li>Check connected third-party applications.</li>
                    </ol>

                    <h3>📧 Check your email</h3>
                    <p>
                        Look for password-reset messages, new-login
                        alerts and security notifications you did not initiate.
                    </p>

                    <h3>🧾 Preserve evidence</h3>
                    <p>
                        Save screenshots, dates, times, device names
                        and security notifications.
                    </p>
                `
            },


            "Emergency Help": {
                title: "🚨 Emergency Cyber Response",
                content: `
                    <h3>1️⃣ Stop the damage</h3>
                    <ul>
                        <li>Stop sending money.</li>
                        <li>Stop sending private information.</li>
                        <li>Stop communicating with suspicious people.</li>
                    </ul>

                    <h3>2️⃣ Secure yourself</h3>
                    <ul>
                        <li>Secure email.</li>
                        <li>Change important passwords.</li>
                        <li>Enable 2FA.</li>
                        <li>Remove unknown sessions.</li>
                    </ul>

                    <h3>3️⃣ Preserve evidence</h3>
                    <ul>
                        <li>Screenshots</li>
                        <li>Messages</li>
                        <li>URLs</li>
                        <li>Transaction details</li>
                        <li>Call logs</li>
                    </ul>

                    <h3>4️⃣ Report</h3>
                    <p>
                        Use the relevant platform's reporting system
                        and appropriate official authorities.
                    </p>
                `
            }

        };

        const guide = guides[service];

        if (guide) {
            showGuide(
                guide.title,
                guide.content
            );
        }

    }


    // ==================================================
    // WOMEN SAFETY
    // ==================================================

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
                content: `
                    <h3>🚨 First steps</h3>
                    <ol>
                        <li>Do not argue or threaten the person back.</li>
                        <li>Do not reveal your location.</li>
                        <li>Save call logs and messages.</li>
                        <li>Block the number/account when appropriate.</li>
                        <li>Use the platform's report feature.</li>
                    </ol>

                    <h3>🧾 Evidence</h3>
                    <ul>
                        <li>Caller number</li>
                        <li>Date and time</li>
                        <li>Call history</li>
                        <li>Messages</li>
                        <li>Profile URL</li>
                        <li>Screenshots</li>
                    </ul>

                    <h3>🔐 Protect yourself</h3>
                    <ul>
                        <li>Review social-media privacy.</li>
                        <li>Limit who can message or call you.</li>
                        <li>Hide unnecessary personal information.</li>
                        <li>Review location sharing.</li>
                    </ul>

                    <h3>⚠️ If threats become serious</h3>
                    <p>
                        Tell someone you trust and seek appropriate
                        local official help, especially if you feel
                        physically unsafe.
                    </p>
                `
            },


            photo: {
                title: "📸 Photo Misuse",
                content: `
                    <h3>🚨 Do this first</h3>
                    <ol>
                        <li>Do not panic or engage with the person.</li>
                        <li>Take screenshots of the content.</li>
                        <li>Save the profile/page URL.</li>
                        <li>Record the date and time.</li>
                        <li>Report the content to the platform.</li>
                    </ol>

                    <h3>🧾 Preserve evidence</h3>
                    <ul>
                        <li>Original image if available</li>
                        <li>Screenshot</li>
                        <li>Username</li>
                        <li>Profile URL</li>
                        <li>Post URL</li>
                        <li>Messages</li>
                    </ul>

                    <h3>❌ Do not</h3>
                    <ul>
                        <li>Do not pay someone promising guaranteed removal.</li>
                        <li>Do not send additional personal information.</li>
                        <li>Do not publicly share the harmful content unnecessarily.</li>
                    </ul>
                `
            },


            fakeprofile: {
                title: "🎭 Fake Profile / Impersonation",
                content: `
                    <h3>🔎 Collect information</h3>
                    <ol>
                        <li>Screenshot the profile.</li>
                        <li>Copy the profile URL.</li>
                        <li>Save username and profile name.</li>
                        <li>Record suspicious posts/messages.</li>
                    </ol>

                    <h3>📢 Report</h3>
                    <p>
                        Use the platform's impersonation/fake-account
                        reporting option.
                    </p>

                    <h3>👥 Protect contacts</h3>
                    <p>
                        If the fake account is contacting people as you,
                        warn trusted contacts not to send money or
                        personal information.
                    </p>

                    <h3>❌ Never</h3>
                    <p>
                        Do not give the impersonator passwords,
                        OTPs or personal documents.
                    </p>
                `
            },


            blackmail: {
                title: "⚠️ Blackmail — Complete Safety Guide",
                content: `
                    <h3>🚨 STEP 1 — STOP</h3>
                    <ol>
                        <li>Do not pay the blackmailer.</li>
                        <li>Do not send additional photos or videos.</li>
                        <li>Do not send OTPs, passwords or personal documents.</li>
                        <li>Do not negotiate under pressure.</li>
                    </ol>

                    <h3>🧾 STEP 2 — SAVE EVERYTHING</h3>
                    <ul>
                        <li>Take screenshots of conversations.</li>
                        <li>Save usernames and profile URLs.</li>
                        <li>Save phone numbers.</li>
                        <li>Save payment demands.</li>
                        <li>Save threats and timestamps.</li>
                        <li>Keep relevant original messages where possible.</li>
                    </ul>

                    <h3>🔐 STEP 3 — SECURE YOUR ACCOUNTS</h3>
                    <ol>
                        <li>Change important passwords.</li>
                        <li>Enable 2FA.</li>
                        <li>Review active login sessions.</li>
                        <li>Remove unknown devices.</li>
                        <li>Review privacy and location settings.</li>
                    </ol>

                    <h3>🚫 STEP 4 — BLOCK & REPORT</h3>
                    <p>
                        After preserving evidence, block/report the
                        account when appropriate. Do not repeatedly
                        engage with the blackmailer.
                    </p>

                    <h3>👥 STEP 5 — TELL SOMEONE YOU TRUST</h3>
                    <p>
                        Blackmail is designed to create fear and isolation.
                        Consider telling a trusted person who can support
                        you while you document and report the situation.
                    </p>

                    <h3>🇮🇳 STEP 6 — OFFICIAL HELP</h3>
                    <p>
                        If you are in India, use the official cybercrime
                        reporting channels when appropriate. If there is
                        an immediate physical safety risk, seek immediate
                        local emergency assistance.
                    </p>

                    <h3>❌ IMPORTANT</h3>
                    <p>
                        Paying does not guarantee that the material will
                        be deleted. Sending more content can increase the
                        risk. Preserve evidence before deleting or blocking
                        where possible.
                    </p>
                `
            },


            private: {
                title: "🔒 Private Photo / Video Threat",
                content: `
                    <h3>🚨 If someone threatens to publish private content</h3>

                    <ol>
                        <li>Do not pay.</li>
                        <li>Do not send additional content.</li>
                        <li>Do not share passwords or OTPs.</li>
                        <li>Preserve screenshots and URLs.</li>
                        <li>Record the username and account details.</li>
                    </ol>

                    <h3>🔐 Secure your accounts</h3>
                    <ul>
                        <li>Change passwords.</li>
                        <li>Enable 2FA.</li>
                        <li>Review active sessions.</li>
                        <li>Check cloud/photo-sharing accounts.</li>
                        <li>Review privacy settings.</li>
                    </ul>

                    <h3>📢 Report</h3>
                    <p>
                        Report the account and harmful content through
                        the platform's official reporting system.
                    </p>

                    <h3>👥 Get support</h3>
                    <p>
                        Tell a trusted person. If there are threats,
                        extortion or distribution, seek appropriate
                        official help.
                    </p>
                `
            },


            stalking: {
                title: "👁️ Online Stalking",
                content: `
                    <h3>🔎 Check for unwanted access</h3>
                    <ol>
                        <li>Review account login activity.</li>
                        <li>Check active sessions.</li>
                        <li>Remove unknown devices.</li>
                        <li>Review location sharing.</li>
                        <li>Review connected apps.</li>
                    </ol>

                    <h3>🔐 Secure accounts</h3>
                    <ol>
                        <li>Change passwords.</li>
                        <li>Use unique passwords.</li>
                        <li>Enable 2FA.</li>
                        <li>Review recovery email and phone number.</li>
                    </ol>

                    <h3>🧾 Keep evidence</h3>
                    <p>
                        Save repeated messages, usernames, dates,
                        profile URLs, screenshots and suspicious activity.
                    </p>

                    <h3>⚠️ Physical safety</h3>
                    <p>
                        If online stalking appears connected to physical
                        stalking or threats, prioritise your physical
                        safety and seek appropriate local help.
                    </p>
                `
            }

        };

        const guide = guides[type];

        if (guide) {
            showGuide(
                guide.title,
                guide.content
            );
        }

    }


    // ==================================================
    // TOOLS
    // ==================================================

    document.querySelectorAll(".tool-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                openTool(button.dataset.tool);

            });

        });


    function openTool(tool) {

        const tools = {

            scam: {
                title: "🔎 Scam Checker",
                content: `
                    <h3>Check the message</h3>

                    <ul>
                        <li>Is someone creating urgency?</li>
                        <li>Are they asking for OTP/password?</li>
                        <li>Are they requesting money?</li>
                        <li>Is the link unexpected?</li>
                        <li>Are they promising guaranteed profit?</li>
                        <li>Are they threatening account closure?</li>
                    </ul>

                    <h3>Result</h3>

                    <p>
                        The more warning signs you find, the more
                        carefully you should verify the message
                        through an independent official channel.
                    </p>
                `
            },


            password: {
                title: "🔐 Password Checker",
                content: `
                    <h3>Good password habits</h3>

                    <ul>
                        <li>Use a long password or passphrase.</li>
                        <li>Use a different password for important accounts.</li>
                        <li>Use a password manager if appropriate.</li>
                        <li>Enable 2FA.</li>
                    </ul>

                    <h3>❌ Avoid</h3>

                    <ul>
                        <li>Name</li>
                        <li>Date of birth</li>
                        <li>Phone number</li>
                        <li>Simple sequences</li>
                        <li>Reusing passwords</li>
                    </ul>

                    <p>
                        Never enter your real password into an
                        unknown website just to "check" its strength.
                    </p>
                `
            },


            url: {
                title: "🔗 URL Safety Guide",
                content: `
                    <h3>Before opening a link</h3>

                    <ol>
                        <li>Check the domain spelling carefully.</li>
                        <li>Be cautious with shortened URLs.</li>
                        <li>Look for unexpected login requests.</li>
                        <li>Do not trust a link only because the message looks professional.</li>
                        <li>Open the organisation's official website separately when possible.</li>
                    </ol>

                    <h3>⚠️ Remember</h3>

                    <p>
                        HTTPS alone does not prove that a website is
                        legitimate. Check the actual domain.
                    </p>
                `
            },


            privacy: {
                title: "📱 Privacy Checklist",
                content: `
                    <h3>Review regularly</h3>

                    <ul>
                        <li>Account privacy</li>
                        <li>Location sharing</li>
                        <li>Camera permissions</li>
                        <li>Microphone permissions</li>
                        <li>Contact permissions</li>
                        <li>Connected devices</li>
                        <li>Active sessions</li>
                        <li>Third-party applications</li>
                    </ul>

                    <h3>Best practice</h3>

                    <p>
                        Give apps only the permissions they genuinely
                        need and remove access you no longer require.
                    </p>
                `
            },


            evidence: {
                title: "🧾 Evidence Checklist",
                content: `
                    <h3>Save</h3>

                    <ul>
                        <li>Screenshots</li>
                        <li>Profile URLs</li>
                        <li>Post URLs</li>
                        <li>Usernames</li>
                        <li>Phone numbers</li>
                        <li>Messages</li>
                        <li>Call logs</li>
                        <li>Date and time</li>
                        <li>Transaction IDs</li>
                        <li>Payment confirmations</li>
                    </ul>

                    <h3>Important</h3>

                    <p>
                        Keep original evidence where possible.
                        Avoid editing screenshots or messages before
                        preserving the original information.
                    </p>
                `
            },


            score: {
                title: "🛡️ Cyber Safety Score",
                content: `
                    <h3>Ask yourself:</h3>

                    <ol>
                        <li>Do I use unique passwords?</li>
                        <li>Is 2FA enabled?</li>
                        <li>Do I avoid sharing OTPs?</li>
                        <li>Do I review active sessions?</li>
                        <li>Do I review app permissions?</li>
                        <li>Do I install apps from trusted sources?</li>
                        <li>Do I verify payment requests?</li>
                        <li>Do I keep my phone updated?</li>
                    </ol>

                    <p>
                        The more "yes" answers you have, the stronger
                        your basic digital safety habits are.
                    </p>
                `
            }

        };

        const selected = tools[tool];

        if (selected) {
            showGuide(
                selected.title,
                selected.content
            );
        }

    }


    // ==================================================
    // LEARNING
    // ==================================================

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
                    Avoid reusing passwords across different services.
                </p>

                <h3>Best practice</h3>

                <ul>
                    <li>Use unique passwords.</li>
                    <li>Use a password manager if appropriate.</li>
                    <li>Enable 2FA.</li>
                    <li>Never share passwords.</li>
                </ul>
            `,

            "2fa": `
                <h3>🔑 Two-Factor Authentication</h3>

                <p>
                    2FA adds another security layer beyond your password.
                </p>

                <ul>
                    <li>Enable it on email.</li>
                    <li>Enable it on social accounts.</li>
                    <li>Protect recovery codes.</li>
                    <li>Never share verification codes.</li>
                </ul>
            `,

            phishing: `
                <h3>🎣 Phishing</h3>

                <p>
                    Phishing attempts to trick you into revealing
                    sensitive information or opening harmful links.
                </p>

                <ul>
                    <li>Check the sender.</li>
                    <li>Check the actual domain.</li>
                    <li>Do not share OTPs.</li>
                    <li>Verify independently.</li>
                </ul>
            `,

            privacy: `
                <h3>🔒 Privacy</h3>

                <ul>
                    <li>Limit public personal information.</li>
                    <li>Review location sharing.</li>
                    <li>Review followers and contacts.</li>
                    <li>Check app permissions.</li>
                    <li>Review connected accounts.</li>
                </ul>
            `,

            phone: `
                <h3>📱 Phone Security</h3>

                <ul>
                    <li>Keep the operating system updated.</li>
                    <li>Install apps from trusted sources.</li>
                    <li>Review permissions.</li>
                    <li>Use a strong screen lock.</li>
                    <li>Remove unknown apps.</li>
                </ul>
            `,

            financial: `
                <h3>💳 Financial Safety</h3>

                <ul>
                    <li>Never share OTPs.</li>
                    <li>Never share UPI PIN.</li>
                    <li>Verify payment requests.</li>
                    <li>Do not install unknown remote-access apps.</li>
                    <li>Contact your bank immediately if fraud occurs.</li>
                </ul>
            `

        };

        showGuide(
            "🎓 Learn Cybersecurity",
            content[topic] ||
            "<p>Learn safe digital habits and protect your accounts.</p>"
        );

    }


    // ==================================================
    // EMERGENCY RESPONSE
    // ==================================================

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
                    <li>Secure your email account first.</li>
                    <li>Change the affected account password.</li>
                    <li>Enable 2FA.</li>
                    <li>Sign out unknown sessions.</li>
                    <li>Check recovery email/phone.</li>
                    <li>Preserve security alerts and evidence.</li>
                    <li>Use the platform's official recovery process.</li>
                </ol>

                <h3>❌ Never</h3>
                <p>
                    Never share OTPs, passwords or recovery codes
                    with anyone claiming to be support.
                </p>
            `,

            money: `
                <h3>💳 Money at Risk</h3>

                <ol>
                    <li>Stop further payments.</li>
                    <li>Contact your bank/payment provider immediately.</li>
                    <li>Preserve transaction details.</li>
                    <li>Save screenshots and messages.</li>
                    <li>Use the official cybercrime reporting channel when appropriate.</li>
                </ol>

                <h3>❌ Avoid recovery scams</h3>

                <p>
                    Do not pay strangers who promise guaranteed
                    recovery of your money.
                </p>
            `,

            blackmail: `
                <h3>⚠️ Blackmail / Threat</h3>

                <ol>
                    <li>Do not pay.</li>
                    <li>Do not send additional content.</li>
                    <li>Save evidence.</li>
                    <li>Secure your accounts.</li>
                    <li>Block/report when appropriate.</li>
                    <li>Tell a trusted person.</li>
                    <li>Seek appropriate official help if threats continue.</li>
                </ol>

                <p>
                    If there is an immediate physical safety risk,
                    prioritise getting to a safe place and obtaining
                    immediate local help.
                </p>
            `,

            phone: `
                <h3>📱 Phone Compromised</h3>

                <ol>
                    <li>Stop entering sensitive credentials if the device is strongly suspected to be compromised.</li>
                    <li>Review unknown apps.</li>
                    <li>Review permissions.</li>
                    <li>Check Accessibility and Device Administrator access.</li>
                    <li>Update the device.</li>
                    <li>Secure important accounts from a trusted device if possible.</li>
                    <li>Seek appropriate technical help if the problem continues.</li>
                </ol>
            `

        };

        const content = guides[type];

        if (content) {

            showGuide(
                "🚨 Emergency Cyber Response",
                content
            );

        }

    }


    // ==================================================
    // GUIDE MODAL
    // ==================================================

    function showGuide(title, content) {

        const oldModal =
            document.getElementById("cybercareModal");

        if (oldModal) {
            oldModal.remove();
        }

        const modal =
            document.createElement("div");

        modal.id = "cybercareModal";

        modal.innerHTML = `

            <div class="guide-overlay">

                <div class="guide-modal">

                    <button
                        class="guide-close"
                        aria-label="Close guide"
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


    // ==================================================
    // ESCAPE KEY
    // ==================================================

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeSideMenu();

            const modal =
                document.getElementById(
                    "cybercareModal"
                );

            if (modal) {
                modal.remove();
            }

        }

    });

});
