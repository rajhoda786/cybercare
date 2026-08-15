// ============================================================
// CyberCare - Complete Main JavaScript
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    // ============================================================
    // ELEMENTS
    // ============================================================

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


    // ============================================================
    // SIDE MENU
    // ============================================================

    function openMenu() {
        if (sideMenu) sideMenu.classList.add("active");
        if (menuOverlay) menuOverlay.classList.add("active");
        document.body.classList.add("menu-open");
    }

    function closeSideMenu() {
        if (sideMenu) sideMenu.classList.remove("active");
        if (menuOverlay) menuOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
    }

    menuBtn?.addEventListener("click", openMenu);
    closeMenu?.addEventListener("click", closeSideMenu);
    menuOverlay?.addEventListener("click", closeSideMenu);


    // ============================================================
    // SECTION NAVIGATION
    // ============================================================

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

            if (target === "emergency") {
                document.querySelector(".emergency-section")
                    ?.scrollIntoView({ behavior: "smooth" });
            }

            if (target === "india") {
                scrollToSection("india");
            }

            if (target === "about") {
                scrollToSection("about");
            }

        });

    });


    // ============================================================
    // HERO BUTTONS
    // ============================================================

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


    // ============================================================
    // DARK MODE
    // ============================================================

    let darkMode =
        localStorage.getItem("cybercare-theme") === "dark";

    function applyTheme() {

        document.body.classList.toggle("dark-mode", darkMode);

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


    // ============================================================
    // LANGUAGE
    // ============================================================

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
                "কি ঘটেছে?",

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


    // ============================================================
    // PROBLEM SEARCH
    // ============================================================

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
                "account"
            ],
            title: "🔐 Account Recovery",
            text:
                "Your account may be compromised. Secure your email, change passwords, enable 2FA and follow the official recovery process."
        },

        {
            keywords: [
                "blackmail",
                "threat",
                "private photo",
                "private video",
                "leak"
            ],
            title: "⚠️ Blackmail / Private Content Threat",
            text:
                "Do not pay or send additional content. Preserve evidence, secure your accounts, report the abuse and seek appropriate official help."
        },

        {
            keywords: [
                "call",
                "calling",
                "harassment",
                "message",
                "disturb",
                "phone"
            ],
            title: "📞 Repeated Calls / Harassment",
            text:
                "Save call logs and messages, review privacy settings, block/report the person and escalate threats when necessary."
        },

        {
            keywords: [
                "photo",
                "picture",
                "image"
            ],
            title: "📸 Photo Misuse",
            text:
                "Save screenshots and URLs, report the content and protect your accounts and privacy."
        },

        {
            keywords: [
                "fake profile",
                "fake account",
                "impersonation"
            ],
            title: "🎭 Fake Profile",
            text:
                "Collect evidence, save the profile URL, report the account and warn trusted contacts if necessary."
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
            text:
                "Contact your bank/payment provider immediately and use the official cybercrime reporting channel in India when appropriate."
        },

        {
            keywords: [
                "phishing",
                "link",
                "otp",
                "fake website",
                "kyc"
            ],
            title: "🎣 Scam & Phishing",
            text:
                "Do not open suspicious links or share OTPs, passwords, PINs or recovery codes."
        },

        {
            keywords: [
                "spyware",
                "unknown app",
                "malware",
                "phone hacked",
                "phone security"
            ],
            title: "📱 Phone Security",
            text:
                "Review unknown applications, permissions, accessibility access, device administrator settings and account sessions."
        },

        {
            keywords: [
                "login",
                "unknown login",
                "unknown device",
                "suspicious activity"
            ],
            title: "🕵️ Suspicious Activity",
            text:
                "Review login history, secure your password, enable 2FA and remove unknown devices and connected apps."
        }

    ];


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

        if (matches.length === 0) {

            searchResults.innerHTML = `
                <div class="search-result">
                    <h3>No exact guide found</h3>
                    <p>
                        Try words like blackmail, hacked,
                        UPI fraud, fake profile,
                        harassment, phishing,
                        spyware or suspicious login.
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
                    View Safety Guide →
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


    // ============================================================
    // SERVICE BUTTONS
    // ============================================================

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

                title: "🔐 Account Recovery — A to Z",

                text: `
                    <div class="guide-warning">
                        <strong>First:</strong>
                        If you think someone has accessed your account,
                        stay calm and secure the account before doing anything else.
                    </div>

                    <h3>1. Identify the problem</h3>
                    <p>
                        Check whether your password changed, unknown messages
                        were sent, unknown devices are logged in, recovery details
                        changed, or you simply lost access.
                    </p>

                    <h3>2. Secure your email first</h3>
                    <p>
                        Your email can be the recovery key for many accounts.
                        Change its password and enable 2FA if you suspect compromise.
                    </p>

                    <h3>3. Change the affected password</h3>
                    <p>
                        Use a new, unique password. Never reuse a compromised password
                        on another important account.
                    </p>

                    <h3>4. Sign out unknown devices</h3>
                    <p>
                        Review active sessions, login activity and connected devices.
                        Remove anything you do not recognize.
                    </p>

                    <h3>5. Check recovery information</h3>
                    <p>
                        Verify your recovery email and phone number.
                        Remove unknown recovery methods.
                    </p>

                    <h3>6. Enable 2FA</h3>
                    <p>
                        Use an authenticator app or another strong second factor
                        supported by the service.
                    </p>

                    <h3>7. Check connected applications</h3>
                    <p>
                        Remove third-party applications or services you do not recognize.
                    </p>

                    <h3>8. Use only official recovery pages</h3>
                    <p>
                        Never give your password, OTP or recovery code to someone
                        claiming they can recover your account for money.
                    </p>

                    <h3>9. Warn contacts if necessary</h3>
                    <p>
                        If your account sent suspicious messages, tell your contacts
                        not to open links or send money.
                    </p>

                    <h3>10. Preserve evidence</h3>
                    <p>
                        Save screenshots of suspicious logins, emails, messages
                        and account changes.
                    </p>
                `
            },


            "Scam & Phishing": {

                title: "🎣 Scam & Phishing — A to Z",

                text: `
                    <h3>1. Stop</h3>
                    <p>
                        Do not click the link, download the file or continue the conversation.
                    </p>

                    <h3>2. Do not share sensitive information</h3>
                    <ul>
                        <li>OTP</li>
                        <li>Password</li>
                        <li>UPI PIN</li>
                        <li>Banking PIN</li>
                        <li>Recovery code</li>
                        <li>Card security information</li>
                    </ul>

                    <h3>3. Check the sender</h3>
                    <p>
                        Look carefully at the email address, phone number,
                        username and website domain.
                    </p>

                    <h3>4. Watch for pressure</h3>
                    <p>
                        Urgent threats, guaranteed rewards, fake KYC warnings,
                        job offers and investment promises are common scam patterns.
                    </p>

                    <h3>5. Verify independently</h3>
                    <p>
                        Contact the organisation using an official website or
                        known phone number instead of the contact information
                        supplied by the suspicious message.
                    </p>

                    <h3>6. If you clicked a suspicious link</h3>
                    <p>
                        Do not enter credentials. If you already entered a password,
                        change it immediately from the legitimate service.
                    </p>

                    <h3>7. If money was sent</h3>
                    <p>
                        Contact your bank or payment provider immediately and
                        preserve the transaction details.
                    </p>

                    <h3>8. Report</h3>
                    <p>
                        Report the scam to the relevant platform/provider and,
                        where appropriate, the official cybercrime reporting channel.
                    </p>
                `
            },


            "Phone Security": {

                title: "📱 Phone Security — A to Z",

                text: `
                    <h3>1. Update your phone</h3>
                    <p>
                        Install security and system updates from the official device source.
                    </p>

                    <h3>2. Check installed applications</h3>
                    <p>
                        Look for apps you do not remember installing.
                        Remove suspicious applications when safe to do so.
                    </p>

                    <h3>3. Review permissions</h3>
                    <p>
                        Pay particular attention to camera, microphone,
                        contacts, location, SMS and accessibility permissions.
                    </p>

                    <h3>4. Check accessibility/device administrator access</h3>
                    <p>
                        Unknown applications with powerful device permissions
                        deserve immediate attention.
                    </p>

                    <h3>5. Review account sessions</h3>
                    <p>
                        Secure important accounts and remove unknown devices.
                    </p>

                    <h3>6. Change important passwords</h3>
                    <p>
                        If you believe the phone or credentials were compromised,
                        secure email, banking and social accounts.
                    </p>

                    <h3>7. Avoid unknown APKs and files</h3>
                    <p>
                        Install applications only from trusted official sources.
                    </p>

                    <h3>8. Protect your lock screen</h3>
                    <p>
                        Use a strong PIN/password and do not share it unnecessarily.
                    </p>

                    <h3>9. If compromise is suspected</h3>
                    <p>
                        Disconnect risky accounts where appropriate,
                        preserve important evidence and seek professional/official help.
                    </p>
                `
            },


            "Online Fraud": {

                title: "💳 Online & Financial Fraud — A to Z",

                text: `
                    <div class="guide-warning">
                        <strong>If money is moving right now:</strong>
                        contact your bank/payment provider immediately.
                    </div>

                    <h3>1. Stop further transactions</h3>
                    <p>
                        Do not send additional money to the person or account.
                    </p>

                    <h3>2. Contact your bank/payment provider</h3>
                    <p>
                        Use the official app, website or verified customer-support channel.
                    </p>

                    <h3>3. Preserve transaction information</h3>
                    <ul>
                        <li>Transaction ID</li>
                        <li>Amount</li>
                        <li>Date and time</li>
                        <li>Recipient details</li>
                        <li>Screenshots</li>
                        <li>Messages and phone numbers</li>
                    </ul>

                    <h3>4. Secure your accounts</h3>
                    <p>
                        Change compromised passwords and review account sessions.
                    </p>

                    <h3>5. Never share OTP or UPI PIN</h3>
                    <p>
                        Banks and legitimate services do not need your secret authentication
                        credentials to "receive" a payment.
                    </p>

                    <h3>6. Beware of recovery scams</h3>
                    <p>
                        After a fraud, scammers may contact you claiming they can recover
                        your money for a fee. Do not trust unofficial recovery promises.
                    </p>

                    <h3>7. India reporting</h3>
                    <p>
                        For cyber financial fraud in India, use the official cybercrime
                        reporting channels as soon as possible.
                    </p>
                `
            },


            "Suspicious Activity": {

                title: "🕵️ Suspicious Activity — A to Z",

                text: `
                    <h3>Possible warning signs</h3>
                    <ul>
                        <li>Unknown login notifications</li>
                        <li>Unknown devices</li>
                        <li>Password reset emails you did not request</li>
                        <li>Messages sent without your knowledge</li>
                        <li>Unknown connected applications</li>
                        <li>Unexpected security changes</li>
                    </ul>

                    <h3>1. Change your password</h3>
                    <p>
                        Use a unique password immediately if compromise is suspected.
                    </p>

                    <h3>2. Enable 2FA</h3>
                    <p>
                        Add an additional layer of account protection.
                    </p>

                    <h3>3. Remove unknown sessions</h3>
                    <p>
                        Sign out devices you do not recognize.
                    </p>

                    <h3>4. Review recovery settings</h3>
                    <p>
                        Check recovery email, phone number and security settings.
                    </p>

                    <h3>5. Check connected apps</h3>
                    <p>
                        Revoke access for suspicious third-party applications.
                    </p>

                    <h3>6. Preserve evidence</h3>
                    <p>
                        Save login alerts, emails and screenshots before deleting anything.
                    </p>
                `
            },


            "Emergency Help": {

                title: "🚨 Emergency Cyber Response",

                text: `
                    <div class="guide-warning">
                        <strong>Priority:</strong>
                        Protect your money, accounts, device and physical safety first.
                    </div>

                    <h3>🔐 Account compromised</h3>
                    <p>
                        Secure email, change passwords, enable 2FA and remove unknown sessions.
                    </p>

                    <h3>💳 Money at risk</h3>
                    <p>
                        Contact your bank/payment provider immediately and preserve transaction details.
                    </p>

                    <h3>⚠️ Blackmail</h3>
                    <p>
                        Do not pay or send additional content. Preserve evidence,
                        secure accounts, report the abuse and seek appropriate help.
                    </p>

                    <h3>📱 Phone compromised</h3>
                    <p>
                        Review suspicious applications and permissions, update the device
                        and secure important accounts.
                    </p>

                    <h3>🚨 Physical danger</h3>
                    <p>
                        If you believe you are in immediate physical danger,
                        move to a safer place and seek immediate local emergency assistance.
                    </p>
                `
            }

        };


        const guide = guides[service];

        showGuide(
            guide?.title || service,
            guide?.text ||
            "Follow the official recovery or reporting process and preserve evidence."
        );

    }


    // ============================================================
    // WOMEN'S DIGITAL SAFETY
    // ============================================================

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

            // ----------------------------------------------------
            // HARASSMENT
            // ----------------------------------------------------

            harassment: {

                title: "📞 Repeated Calls / Harassment — A to Z",

                text: `
                    <div class="guide-warning">
                        <strong>Do not panic.</strong>
                        You do not have to keep responding to someone who is repeatedly
                        disturbing or threatening you.
                    </div>

                    <h3>1. 🧾 Save evidence first</h3>
                    <ul>
                        <li>Call logs</li>
                        <li>Screenshots of messages</li>
                        <li>Phone numbers/usernames</li>
                        <li>Dates and times</li>
                        <li>Threatening voice messages</li>
                    </ul>

                    <h3>2. ❌ Do not argue or threaten back</h3>
                    <p>
                        Avoid escalating the situation. Keep communication minimal
                        if communication is unavoidable.
                    </p>

                    <h3>3. 🚫 Block the person</h3>
                    <p>
                        After preserving important evidence, block the number/account
                        where appropriate.
                    </p>

                    <h3>4. 📱 Report the account</h3>
                    <p>
                        Use the platform's official harassment/report feature.
                    </p>

                    <h3>5. 🔒 Review privacy settings</h3>
                    <ul>
                        <li>Who can message you</li>
                        <li>Who can call you</li>
                        <li>Who can see your posts</li>
                        <li>Who can see your phone number</li>
                        <li>Location sharing</li>
                    </ul>

                    <h3>6. 👥 Tell someone you trust</h3>
                    <p>
                        If the harassment continues, tell a trusted person and
                        avoid handling the situation completely alone.
                    </p>

                    <h3>7. 🚨 If threats become serious</h3>
                    <p>
                        Preserve the threat and seek appropriate official help.
                        If you feel physically unsafe, prioritize your immediate safety.
                    </p>
                `
            },


            // ----------------------------------------------------
            // PHOTO MISUSE
            // ----------------------------------------------------

            photo: {

                title: "📸 Photo Misuse — A to Z",

                text: `
                    <h3>1. 🧾 Document where your photo is being used</h3>
                    <p>
                        Save screenshots, profile names, usernames and exact URLs.
                    </p>

                    <h3>2. Do not spread the image further</h3>
                    <p>
                        Do not repeatedly forward the image while trying to collect evidence.
                    </p>

                    <h3>3. 📱 Report the content</h3>
                    <p>
                        Use the platform's official reporting tools for privacy abuse,
                        impersonation, harassment or other applicable violations.
                    </p>

                    <h3>4. 🎭 If a fake profile is involved</h3>
                    <p>
                        Save the fake profile URL and report it as impersonation/fake account.
                    </p>

                    <h3>5. 🔒 Protect your own account</h3>
                    <p>
                        Review profile visibility, followers, tags, mentions and
                        connected devices.
                    </p>

                    <h3>6. 🚫 Do not pay removal scammers</h3>
                    <p>
                        Be careful of people who promise guaranteed removal for money.
                    </p>

                    <h3>7. ⚠️ If threats are involved</h3>
                    <p>
                        Preserve all threats and seek appropriate official help.
                    </p>
                `
            },


            // ----------------------------------------------------
            // FAKE PROFILE
            // ----------------------------------------------------

            fakeprofile: {

                title: "🎭 Fake Profile / Impersonation — A to Z",

                text: `
                    <h3>1. 🧾 Collect evidence</h3>
                    <ul>
                        <li>Fake profile screenshot</li>
                        <li>Username</li>
                        <li>Profile URL</li>
                        <li>Fake posts/messages</li>
                        <li>Date and time</li>
                    </ul>

                    <h3>2. 🚨 Report impersonation</h3>
                    <p>
                        Use the platform's official fake account/impersonation report process.
                    </p>

                    <h3>3. 👥 Warn trusted contacts</h3>
                    <p>
                        If the fake account is contacting your friends or asking for money,
                        warn them not to respond or send money.
                    </p>

                    <h3>4. 🔐 Secure your real account</h3>
                    <ul>
                        <li>Change password if necessary</li>
                        <li>Enable 2FA</li>
                        <li>Review active sessions</li>
                        <li>Review privacy settings</li>
                    </ul>

                    <h3>5. ⚠️ If the fake account is threatening people</h3>
                    <p>
                        Preserve evidence and report the behaviour through the appropriate
                        official channels.
                    </p>

                    <h3>6. ❌ Do not engage in a public fight</h3>
                    <p>
                        Keep evidence and use reporting mechanisms rather than escalating
                        the conflict.
                    </p>
                `
            },


            // ----------------------------------------------------
            // BLACKMAIL
            // ----------------------------------------------------

            blackmail: {

                title: "⚠️ Blackmail — A to Z",

                text: `
                    <div class="guide-warning">
                        <strong>First: Don't panic.</strong><br>
                        Blackmail is designed to create fear and pressure.
                        Do not make decisions only because you are scared.
                    </div>

                    <h3>1. ❌ Do NOT pay</h3>
                    <p>
                        Do not send money, cryptocurrency, gift cards or other payments.
                        Paying does not guarantee that the blackmailer will stop.
                    </p>

                    <h3>2. ❌ Do NOT send more content</h3>
                    <p>
                        Do not send additional photos, videos, passwords, OTPs,
                        identity documents or personal information.
                    </p>

                    <h3>3. 🧾 Preserve evidence BEFORE blocking</h3>
                    <ul>
                        <li>Threatening messages</li>
                        <li>Screenshots</li>
                        <li>Username/profile name</li>
                        <li>Profile URL</li>
                        <li>Phone number/email if visible</li>
                        <li>Date and time</li>
                        <li>Payment details</li>
                        <li>Links to uploaded content</li>
                    </ul>

                    <h3>4. 🔐 Secure your accounts</h3>
                    <ol>
                        <li>Change important passwords.</li>
                        <li>Use unique passwords.</li>
                        <li>Enable 2FA.</li>
                        <li>Remove unknown devices.</li>
                        <li>Check recovery email and phone.</li>
                    </ol>

                    <h3>5. 🚫 Block and report</h3>
                    <p>
                        After preserving evidence, block/report the account where appropriate.
                    </p>

                    <h3>6. 🌐 If content is posted online</h3>
                    <ol>
                        <li>Save the exact URL.</li>
                        <li>Take screenshots.</li>
                        <li>Report the content to the platform.</li>
                        <li>Request removal through official tools.</li>
                    </ol>

                    <h3>7. 💳 If you already paid</h3>
                    <p>
                        Do not assume you must keep paying.
                        Contact your bank/payment provider immediately and preserve
                        transaction information.
                    </p>

                    <h3>8. 👥 Tell someone you trust</h3>
                    <p>
                        Tell a trusted family member, friend, teacher, colleague
                        or another person who can support you.
                    </p>

                    <h3>9. 🚨 Physical threats</h3>
                    <p>
                        If the person threatens physical harm, knows your location,
                        follows you or you feel immediately unsafe, prioritize your
                        physical safety and seek immediate local assistance.
                    </p>

                    <div class="guide-warning">
                        <strong>Remember:</strong>
                        Being blackmailed is not your fault.
                        Do not let fear force you into sending money or more content.
                    </div>
                `
            },


            // ----------------------------------------------------
            // PRIVATE PHOTO / VIDEO
            // ----------------------------------------------------

            private: {

                title: "🔒 Private Photo / Video Threat — A to Z",

                text: `
                    <div class="guide-warning">
                        <strong>Do not panic and do not negotiate under pressure.</strong>
                    </div>

                    <h3>1. ❌ Do not send more content</h3>
                    <p>
                        Sending more material usually does not solve the problem.
                    </p>

                    <h3>2. ❌ Do not pay automatically</h3>
                    <p>
                        Payment does not guarantee deletion.
                    </p>

                    <h3>3. 🧾 Preserve evidence</h3>
                    <ul>
                        <li>Threat messages</li>
                        <li>Account username</li>
                        <li>Profile URL</li>
                        <li>Post/content URL</li>
                        <li>Screenshots</li>
                        <li>Payment information</li>
                    </ul>

                    <h3>4. 🔐 Secure your accounts</h3>
                    <p>
                        Change passwords, enable 2FA and remove unknown sessions.
                    </p>

                    <h3>5. 📱 Report the account/content</h3>
                    <p>
                        Use the platform's official reporting mechanism.
                    </p>

                    <h3>6. 🌐 If content has already been published</h3>
                    <p>
                        Save the exact URL and report each relevant post/account
                        through the platform's official process.
                    </p>

                    <h3>7. 👥 Tell a trusted person</h3>
                    <p>
                        You should not have to manage the situation alone.
                    </p>

                    <h3>8. 🚨 If there is a serious threat</h3>
                    <p>
                        Preserve evidence and seek appropriate official help.
                        If you are in immediate physical danger, prioritize your safety.
                    </p>
                `
            },


            // ----------------------------------------------------
            // STALKING
            // ----------------------------------------------------

            stalking: {

                title: "👁️ Online Stalking — A to Z",

                text: `
                    <div class="guide-warning">
                        <strong>If you feel unsafe, take the situation seriously.</strong>
                    </div>

                    <h3>1. 🧾 Document repeated behaviour</h3>
                    <ul>
                        <li>Messages</li>
                        <li>Calls</li>
                        <li>Fake accounts</li>
                        <li>Repeated follows</li>
                        <li>Threats</li>
                        <li>Unknown login alerts</li>
                    </ul>

                    <h3>2. 📍 Check location sharing</h3>
                    <p>
                        Review live location, location-sharing apps,
                        social media location settings and shared accounts.
                    </p>

                    <h3>3. 🔐 Secure accounts</h3>
                    <ol>
                        <li>Change passwords.</li>
                        <li>Enable 2FA.</li>
                        <li>Review active sessions.</li>
                        <li>Remove unknown devices.</li>
                        <li>Review connected applications.</li>
                    </ol>

                    <h3>4. 👥 Review followers and privacy</h3>
                    <p>
                        Remove suspicious followers and restrict who can message,
                        tag or mention you.
                    </p>

                    <h3>5. 🚫 Block/report</h3>
                    <p>
                        Preserve important evidence first, then block/report where appropriate.
                    </p>

                    <h3>6. 📱 Check suspicious applications</h3>
                    <p>
                        Review apps with unusual access to location, microphone,
                        camera, SMS or accessibility features.
                    </p>

                    <h3>7. 👥 Tell someone you trust</h3>
                    <p>
                        Let someone know what is happening, especially if the behaviour
                        is becoming persistent.
                    </p>

                    <h3>8. 🚨 If stalking becomes physical</h3>
                    <p>
                        Do not meet the person alone. Move to a safer place and seek
                        immediate local assistance if you feel physically threatened.
                    </p>
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


    // ============================================================
    // CYBERCARE TOOLS
    // ============================================================

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

            scam: {

                title: "🔎 Scam Checker",

                text: `
                    <h3>Check these warning signs:</h3>

                    <ul>
                        <li>❌ Someone creates urgent pressure</li>
                        <li>❌ Requests OTP/password/PIN</li>
                        <li>❌ Suspicious link</li>
                        <li>❌ Unexpected payment request</li>
                        <li>❌ Guaranteed profit or reward</li>
                        <li>❌ Fake KYC/account suspension warning</li>
                        <li>❌ Unknown job or investment offer</li>
                        <li>❌ Request to install remote-access software</li>
                    </ul>

                    <div class="guide-warning">
                        If several warning signs appear together,
                        stop and independently verify the request.
                    </div>
                `
            },


            password: {

                title: "🔐 Password Checker",

                text: `
                    <h3>A safer password should:</h3>

                    <ul>
                        <li>Be long</li>
                        <li>Be unique to one account</li>
                        <li>Not contain obvious personal information</li>
                        <li>Not be reused across important services</li>
                        <li>Be protected by 2FA where available</li>
                    </ul>

                    <p>
                        Never enter your real password into an unknown
                        password-checking website.
                    </p>
                `
            },


            url: {

                title: "🔗 URL Safety Guide",

                text: `
                    <h3>Before opening a suspicious URL:</h3>

                    <ol>
                        <li>Check the domain spelling.</li>
                        <li>Look for unusual subdomains.</li>
                        <li>Be careful with shortened links.</li>
                        <li>Do not trust a familiar logo alone.</li>
                        <li>Do not enter passwords after following an unexpected link.</li>
                        <li>Open the official website yourself when possible.</li>
                    </ol>

                    <div class="guide-warning">
                        HTTPS alone does not prove that a website is legitimate.
                    </div>
                `
            },


            privacy: {

                title: "📱 Privacy Checklist",

                text: `
                    <h3>Review these regularly:</h3>

                    <ul>
                        <li>🔒 Account privacy</li>
                        <li>📍 Location sharing</li>
                        <li>📷 Camera permissions</li>
                        <li>🎙️ Microphone permissions</li>
                        <li>👥 Contacts permissions</li>
                        <li>📱 Active sessions</li>
                        <li>🔗 Connected applications</li>
                        <li>👤 Unknown followers</li>
                        <li>🔔 Login alerts</li>
                        <li>🔑 Two-factor authentication</li>
                    </ul>
                `
            },


            evidence: {

                title: "🧾 Evidence Checklist",

                text: `
                    <h3>Save when relevant:</h3>

                    <ul>
                        <li>📸 Screenshots</li>
                        <li>👤 Username</li>
                        <li>🔗 Profile URL</li>
                        <li>🔗 Content URL</li>
                        <li>📞 Phone number</li>
                        <li>📧 Email address</li>
                        <li>🕒 Date and time</li>
                        <li>💳 Transaction ID</li>
                        <li>💬 Messages</li>
                        <li>📨 Emails</li>
                    </ul>

                    <p>
                        Keep original evidence safely and avoid unnecessary editing.
                    </p>
                `
            },


            score: {

                title: "🛡️ Cyber Safety Check",

                text: `
                    <h3>Ask yourself:</h3>

                    <ul>
                        <li>✔ Do I use unique passwords?</li>
                        <li>✔ Is 2FA enabled on important accounts?</li>
                        <li>✔ Do I avoid sharing OTPs and PINs?</li>
                        <li>✔ Do I review active sessions?</li>
                        <li>✔ Do I install apps only from trusted sources?</li>
                        <li>✔ Do I check app permissions?</li>
                        <li>✔ Do I keep my phone updated?</li>
                        <li>✔ Do I know how to report cybercrime?</li>
                    </ul>

                    <div class="guide-warning">
                        The more "Yes" answers you have,
                        the stronger your basic digital safety habits are.
                    </div>
                `
            }

        };


        const selected = tools[tool];

        if (selected) {

            showGuide(
                selected.title,
                selected.text
            );

        }

    }


    // ============================================================
    // LEARN CYBERSECURITY
    // ============================================================

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
                    Never reuse a password after a compromise.
                </p>
                <p>
                    Consider a reputable password manager and enable 2FA.
                </p>
            `,

            "2fa": `
                <h3>🔑 Two-Factor Authentication</h3>
                <p>
                    2FA adds another security layer beyond your password.
                </p>
                <p>
                    If available, use a strong second factor supported
                    by the service.
                </p>
            `,

            phishing: `
                <h3>🎣 Phishing</h3>
                <p>
                    Phishing attempts to trick you into giving information
                    through fake messages, websites or calls.
                </p>
                <p>
                    Verify requests independently and never share OTPs
                    or passwords through unexpected messages.
                </p>
            `,

            privacy: `
                <h3>🔒 Privacy</h3>
                <p>
                    Review who can see your posts, contact you,
                    tag you and access your location.
                </p>
                <p>
                    Remove unnecessary access and review connected applications.
                </p>
            `,

            phone: `
                <h3>📱 Phone Security</h3>
                <p>
                    Keep your phone updated and install applications
                    only from trusted sources.
                </p>
                <p>
                    Review permissions regularly.
                </p>
            `,

            financial: `
                <h3>💳 Financial Safety</h3>
                <p>
                    Never share OTPs, UPI PINs or banking credentials.
                </p>
                <p>
                    Verify payment requests independently before approving them.
                </p>
            `

        };


        showGuide(
            "🎓 Learn Cybersecurity",
            content[topic] ||
            "Learn safe digital habits."
        );

    }


    // ============================================================
    // EMERGENCY RESPONSE
    // ============================================================

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

            account: {

                title: "🔐 Account Compromised",

                text: `
                    <ol>
                        <li>Secure your email account.</li>
                        <li>Change the affected password.</li>
                        <li>Enable 2FA.</li>
                        <li>Sign out unknown sessions.</li>
                        <li>Check recovery information.</li>
                        <li>Remove suspicious connected applications.</li>
                        <li>Preserve suspicious login evidence.</li>
                    </ol>
                `
            },

            money: {

                title: "💳 Money at Risk",

                text: `
                    <div class="guide-warning">
                        <strong>Act quickly.</strong>
                    </div>

                    <ol>
                        <li>Stop further payments.</li>
                        <li>Contact your bank/payment provider immediately.</li>
                        <li>Save transaction IDs and screenshots.</li>
                        <li>Secure your banking/payment account.</li>
                        <li>Do not share OTP or PIN.</li>
                        <li>Use the official cybercrime reporting channel when appropriate.</li>
                    </ol>
                `
            },

            blackmail: {

                title: "⚠️ Blackmail / Threat",

                text: `
                    <ol>
                        <li>Do not pay.</li>
                        <li>Do not send more content.</li>
                        <li>Preserve screenshots and URLs.</li>
                        <li>Secure important accounts.</li>
                        <li>Block/report after preserving evidence.</li>
                        <li>Tell someone you trust.</li>
                        <li>Seek appropriate official help if threats continue.</li>
                    </ol>
                `
            },

            phone: {

                title: "📱 Phone Compromised",

                text: `
                    <ol>
                        <li>Review unknown applications.</li>
                        <li>Check permissions.</li>
                        <li>Check accessibility/device administrator access.</li>
                        <li>Update the device.</li>
                        <li>Secure important accounts.</li>
                        <li>Remove suspicious access where safe.</li>
                        <li>Preserve evidence if you suspect malicious activity.</li>
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


    // ============================================================
    // GUIDE MODAL
    // ============================================================

    function showGuide(title, content) {

        document
            .getElementById("cybercareModal")
            ?.remove();

        const modal =
            document.createElement("div");

        modal.id = "cybercareModal";

        modal.innerHTML = `

            <div class="guide-overlay">

                <div class="guide-modal">

                    <button
                        class="guide-close"
                        type="button"
                        aria-label="Close"
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

    }


    // ============================================================
    // ESC KEY
    // ============================================================

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeSideMenu();

            document
                .getElementById("cybercareModal")
                ?.remove();

        }

    });

});
