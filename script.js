// ============================================================
// CYBERCARE - COMPLETE MAIN JAVASCRIPT
// Detailed Safety Guides + Search + Tools + Women Safety
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
                "login"
            ],
            title: "🔐 Account Recovery",
            text: `
                Your account may be compromised. Secure your email,
                change passwords, enable 2FA, review active sessions,
                remove unknown devices and use the platform's official
                recovery process.
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
                Do not pay, do not send additional content and do not
                negotiate with the blackmailer. Preserve evidence,
                secure your accounts, block/report when appropriate and
                seek trusted and official help.
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
                engagement, block the person when appropriate and
                report serious threats or abuse through appropriate
                official channels.
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
                Save screenshots and URLs, report the content to the
                platform and preserve evidence. Do not pay anyone
                promising guaranteed removal.
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
                Save the profile URL and screenshots, report the account
                as impersonation/fake and warn trusted contacts if necessary.
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
                Contact your bank or payment provider immediately,
                preserve transaction details and use official cybercrime
                reporting channels in India where applicable.
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
                Do not open suspicious links or share OTPs, passwords,
                PINs or recovery codes. Verify the sender independently
                before taking any action.
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
                Review unknown apps and permissions, update the device,
                remove suspicious applications and secure important
                accounts.
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
                        Try: blackmail, hacked, UPI fraud,
                        fake profile, harassment, phishing,
                        photo misuse or phone security.
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
                    View Full Safety Guide →
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

            "Account Recovery": {

                title: "🔐 Account Recovery — Full Guide",

                text: `
                    <h3>1. Secure your email first</h3>
                    <p>
                        If your email is connected to the account,
                        secure the email account first. Change its
                        password and enable two-factor authentication.
                    </p>

                    <h3>2. Change the compromised password</h3>
                    <p>
                        Use a new, unique password that you have never
                        used on another website.
                    </p>

                    <h3>3. Check active sessions</h3>
                    <p>
                        Review logged-in devices and remove devices
                        or sessions that you do not recognize.
                    </p>

                    <h3>4. Enable 2FA</h3>
                    <p>
                        Turn on two-factor authentication using the
                        platform's official security settings.
                    </p>

                    <h3>5. Check recovery information</h3>
                    <p>
                        Check recovery email, phone number and other
                        security information for unauthorized changes.
                    </p>

                    <h3>6. Check suspicious activity</h3>
                    <p>
                        Look for messages, posts, emails or profile
                        changes that you did not make.
                    </p>

                    <h3>7. Use official recovery</h3>
                    <p>
                        If you cannot log in, use only the official
                        recovery process of the affected service.
                    </p>

                    <h3>🚫 Never do this</h3>
                    <ul>
                        <li>Never share OTPs.</li>
                        <li>Never share recovery codes.</li>
                        <li>Never give your password to someone claiming to be support.</li>
                        <li>Never pay an unknown person promising guaranteed recovery.</li>
                    </ul>
                `
            },


            "Scam & Phishing": {

                title: "🎣 Scam & Phishing — Full Guide",

                text: `
                    <h3>1. Stop</h3>
                    <p>
                        Do not click another link or continue the
                        conversation until you verify the situation.
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
                        Do not trust a message only because it contains
                        a company logo, name or official-looking language.
                    </p>

                    <h3>4. Check the website</h3>
                    <p>
                        Carefully verify the domain before entering
                        login information.
                    </p>

                    <h3>5. If you clicked a suspicious link</h3>
                    <p>
                        Do not enter further information. If you already
                        entered a password, change it immediately from
                        the official website/app.
                    </p>

                    <h3>6. If money was transferred</h3>
                    <p>
                        Contact your bank/payment provider immediately
                        and preserve the transaction details.
                    </p>

                    <h3>🚫 Remember</h3>
                    <p>
                        Genuine support should not require you to reveal
                        an OTP, password or UPI PIN.
                    </p>
                `
            },


            "Phone Security": {

                title: "📱 Phone Security — Full Guide",

                text: `
                    <h3>1. Check installed apps</h3>
                    <p>
                        Look for applications you do not remember installing.
                    </p>

                    <h3>2. Review permissions</h3>
                    <p>
                        Check camera, microphone, contacts, SMS,
                        location and accessibility permissions.
                    </p>

                    <h3>3. Check device administrator/accessibility</h3>
                    <p>
                        Review powerful permissions and remove access
                        from applications you do not trust.
                    </p>

                    <h3>4. Update your device</h3>
                    <p>
                        Install operating system and security updates
                        from the official device settings.
                    </p>

                    <h3>5. Secure your accounts</h3>
                    <p>
                        Change important passwords from a trusted device
                        if you believe the phone is compromised.
                    </p>

                    <h3>6. Remove suspicious applications</h3>
                    <p>
                        Uninstall applications you do not recognize,
                        especially those requesting unnecessary access.
                    </p>

                    <h3>7. Consider professional help</h3>
                    <p>
                        If you suspect serious compromise, preserve
                        important evidence before resetting the device
                        and seek appropriate professional help.
                    </p>
                `
            },


            "Online Fraud": {

                title: "💳 Online & Financial Fraud — Full Guide",

                text: `
                    <h3>🚨 If money has already been lost</h3>

                    <ol>
                        <li>Contact your bank/payment provider immediately.</li>
                        <li>Tell them the transaction is fraudulent.</li>
                        <li>Preserve transaction IDs and screenshots.</li>
                        <li>Secure your banking/payment accounts.</li>
                        <li>Use the official cybercrime reporting channel.</li>
                    </ol>

                    <h3>Do not delay</h3>
                    <p>
                        The sooner you report a financial cyber fraud,
                        the sooner the relevant institutions can assess
                        what action may be possible.
                    </p>

                    <h3>Save these details</h3>
                    <ul>
                        <li>Transaction ID</li>
                        <li>Date and time</li>
                        <li>Amount</li>
                        <li>Recipient information</li>
                        <li>Phone number</li>
                        <li>Messages and screenshots</li>
                    </ul>

                    <h3>🚫 Never</h3>
                    <p>
                        Never share your UPI PIN or OTP with someone
                        claiming they need it to reverse a transaction.
                    </p>
                `
            },


            "Suspicious Activity": {

                title: "🕵️ Suspicious Activity — Full Guide",

                text: `
                    <h3>Possible warning signs</h3>

                    <ul>
                        <li>Unknown login alerts</li>
                        <li>Unknown devices</li>
                        <li>Password reset emails you did not request</li>
                        <li>Messages sent without your permission</li>
                        <li>Unexpected account changes</li>
                    </ul>

                    <h3>What to do</h3>

                    <ol>
                        <li>Change your password.</li>
                        <li>Enable 2FA.</li>
                        <li>Review active sessions.</li>
                        <li>Remove unknown devices.</li>
                        <li>Check recovery email and phone.</li>
                        <li>Review connected applications.</li>
                    </ol>

                    <h3>Preserve evidence</h3>
                    <p>
                        Keep screenshots of security alerts and
                        suspicious activity before deleting anything.
                    </p>
                `
            },


            "Emergency Help": {

                title: "🚨 Emergency Cyber Response",

                text: `
                    <h3>Step 1 — Stop the damage</h3>
                    <p>
                        Stop replying, sending money or sharing
                        additional information.
                    </p>

                    <h3>Step 2 — Secure important accounts</h3>
                    <p>
                        Secure your email and other critical accounts,
                        preferably from a trusted device.
                    </p>

                    <h3>Step 3 — Preserve evidence</h3>
                    <p>
                        Save screenshots, URLs, usernames, messages,
                        transaction details and timestamps.
                    </p>

                    <h3>Step 4 — Report</h3>
                    <p>
                        Use the relevant platform's official reporting
                        tools and appropriate government/law-enforcement
                        channels when necessary.
                    </p>

                    <h3>Step 5 — Tell someone you trust</h3>
                    <p>
                        You do not have to handle harassment, threats
                        or blackmail alone.
                    </p>

                    <h3>⚠️ Immediate physical danger</h3>
                    <p>
                        If the situation involves immediate physical
                        danger, prioritize your personal safety and
                        contact appropriate local emergency assistance.
                    </p>
                `
            }

        };

        const guide = guides[service];

        showGuide(
            guide?.title || service,
            guide?.text ||
            "Follow the official recovery and reporting process and preserve evidence."
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

            // -------------------------------------------------
            // HARASSMENT
            // -------------------------------------------------

            harassment: {

                title: "📞 Repeated Calls / Harassment — Full Guide",

                text: `
                    <h3>1. Do not panic</h3>
                    <p>
                        You do not have to answer every call or message.
                        Your safety comes first.
                    </p>

                    <h3>2. Preserve evidence</h3>
                    <ul>
                        <li>Take screenshots.</li>
                        <li>Save call logs.</li>
                        <li>Save messages.</li>
                        <li>Record usernames/profile links where relevant.</li>
                        <li>Note dates and times of repeated incidents.</li>
                    </ul>

                    <h3>3. Do not escalate the situation</h3>
                    <p>
                        Avoid threats or arguments. Keep communication
                        minimal if communication is unavoidable.
                    </p>

                    <h3>4. Block the person</h3>
                    <p>
                        Use phone and platform blocking tools when appropriate.
                    </p>

                    <h3>5. Improve privacy</h3>
                    <ul>
                        <li>Review who can message you.</li>
                        <li>Review who can see your phone number.</li>
                        <li>Restrict unwanted accounts.</li>
                        <li>Review location sharing.</li>
                    </ul>

                    <h3>6. Tell someone you trust</h3>
                    <p>
                        Share what is happening with a trusted friend,
                        family member or another trusted person.
                    </p>

                    <h3>7. If threats become serious</h3>
                    <p>
                        Preserve the evidence and seek appropriate
                        official help.
                    </p>
                `
            },


            // -------------------------------------------------
            // PHOTO MISUSE
            // -------------------------------------------------

            photo: {

                title: "📸 Photo Misuse — Full Guide",

                text: `
                    <h3>1. Capture evidence first</h3>
                    <ul>
                        <li>Screenshot the post.</li>
                        <li>Screenshot the profile.</li>
                        <li>Copy the profile/post URL.</li>
                        <li>Note the date and time.</li>
                    </ul>

                    <h3>2. Do not negotiate with the person</h3>
                    <p>
                        Do not send money or additional photos simply
                        because someone promises to delete the content.
                    </p>

                    <h3>3. Report the content</h3>
                    <p>
                        Use the platform's official reporting system
                        for privacy violation, harassment or
                        unauthorized content where applicable.
                    </p>

                    <h3>4. Protect your account</h3>
                    <ul>
                        <li>Change password if necessary.</li>
                        <li>Enable 2FA.</li>
                        <li>Review logged-in devices.</li>
                        <li>Review privacy settings.</li>
                    </ul>

                    <h3>5. If the image is being used for threats</h3>
                    <p>
                        Treat it as a harassment/blackmail situation.
                        Preserve all evidence and seek appropriate
                        official help.
                    </p>
                `
            },


            // -------------------------------------------------
            // FAKE PROFILE
            // -------------------------------------------------

            fakeprofile: {

                title: "🎭 Fake Profile / Impersonation — Full Guide",

                text: `
                    <h3>1. Do not engage unnecessarily</h3>
                    <p>
                        Avoid arguing with the fake account.
                    </p>

                    <h3>2. Save evidence</h3>
                    <ul>
                        <li>Profile screenshot</li>
                        <li>Profile URL</li>
                        <li>Username</li>
                        <li>Fake posts/messages</li>
                        <li>Any communication with others</li>
                    </ul>

                    <h3>3. Report the account</h3>
                    <p>
                        Use the platform's impersonation/fake account
                        reporting option where available.
                    </p>

                    <h3>4. Warn trusted contacts</h3>
                    <p>
                        If the fake account is contacting people as you,
                        inform important contacts so they do not trust
                        the account.
                    </p>

                    <h3>5. Secure your real account</h3>
                    <ul>
                        <li>Use a strong unique password.</li>
                        <li>Enable 2FA.</li>
                        <li>Review active sessions.</li>
                        <li>Review privacy settings.</li>
                    </ul>
                `
            },


            // -------------------------------------------------
            // BLACKMAIL
            // -------------------------------------------------

            blackmail: {

                title: "⚠️ Blackmail — Complete A to Z Safety Guide",

                text: `
                    <h3>🚨 First: Do not panic</h3>

                    <p>
                        Blackmailers often use fear and urgency to make
                        someone act quickly. Stop and think before responding.
                    </p>

                    <h3>1. Do NOT pay</h3>

                    <p>
                        Do not send money simply because the person
                        threatens to expose something. Payment does not
                        guarantee that the threat will stop.
                    </p>

                    <h3>2. Do NOT send more content</h3>

                    <p>
                        Do not send additional photos, videos, passwords,
                        OTPs, documents or personal information.
                    </p>

                    <h3>3. Preserve everything</h3>

                    <ul>
                        <li>Take screenshots of messages.</li>
                        <li>Save usernames.</li>
                        <li>Save profile URLs.</li>
                        <li>Save phone numbers.</li>
                        <li>Save payment requests.</li>
                        <li>Save emails and timestamps.</li>
                        <li>Keep transaction information if money was sent.</li>
                    </ul>

                    <h3>4. Do not delete evidence too early</h3>

                    <p>
                        If possible, preserve important evidence before
                        blocking or deleting conversations.
                    </p>

                    <h3>5. Secure your accounts</h3>

                    <ol>
                        <li>Change important passwords.</li>
                        <li>Enable 2FA.</li>
                        <li>Check active sessions.</li>
                        <li>Remove unknown devices.</li>
                        <li>Review recovery email and phone.</li>
                        <li>Review privacy settings.</li>
                    </ol>

                    <h3>6. Block and report</h3>

                    <p>
                        After preserving evidence, block and report the
                        account where appropriate.
                    </p>

                    <h3>7. Tell someone you trust</h3>

                    <p>
                        Tell a trusted friend, family member or another
                        person who can support you. You do not have to
                        handle blackmail alone.
                    </p>

                    <h3>8. If money has already been sent</h3>

                    <p>
                        Contact your bank or payment provider immediately.
                        Preserve transaction IDs, screenshots and payment
                        details and use official cybercrime reporting
                        channels where applicable.
                    </p>

                    <h3>9. If private content is threatened</h3>

                    <p>
                        Do not send more content or pay simply to prevent
                        publication. Preserve the threat and report the
                        account/content through the relevant platform.
                    </p>

                    <h3>10. If content is actually published</h3>

                    <p>
                        Save the URL and screenshots and report the content
                        through the platform's official privacy/abuse
                        reporting process.
                    </p>

                    <h3>11. If the blackmailer knows your address or
                    threatens physical harm</h3>

                    <p>
                        Take the physical threat seriously. Prioritize
                        immediate personal safety and seek appropriate
                        local official assistance.
                    </p>

                    <h3>🚫 Never trust "guaranteed recovery" people</h3>

                    <p>
                        Be careful of people who demand money and promise
                        guaranteed removal, hacking or recovery.
                        CyberCare itself does not recover accounts or money.
                    </p>

                    <h3>❤️ Remember</h3>

                    <p>
                        Being blackmailed is not your fault. Preserve
                        evidence, secure yourself and seek help.
                    </p>
                `
            },


            // -------------------------------------------------
            // PRIVATE CONTENT
            // -------------------------------------------------

            private: {

                title: "🔒 Private Photo / Video Threat — Full Guide",

                text: `
                    <h3>1. Stop sending content</h3>
                    <p>
                        Do not send anything else to the person.
                    </p>

                    <h3>2. Do not pay under pressure</h3>
                    <p>
                        Payment does not guarantee deletion or an end
                        to the threats.
                    </p>

                    <h3>3. Preserve evidence</h3>

                    <ul>
                        <li>Messages</li>
                        <li>Threats</li>
                        <li>Usernames</li>
                        <li>Profile URLs</li>
                        <li>Payment demands</li>
                        <li>Timestamps</li>
                    </ul>

                    <h3>4. Secure your accounts</h3>
                    <p>
                        Change passwords, enable 2FA and review active
                        sessions and connected devices.
                    </p>

                    <h3>5. Report</h3>
                    <p>
                        Report the account/content using the platform's
                        official reporting system.
                    </p>

                    <h3>6. Seek support</h3>
                    <p>
                        Tell a trusted person and seek appropriate official
                        help if threats continue or content is distributed.
                    </p>
                `
            },


            // -------------------------------------------------
            // STALKING
            // -------------------------------------------------

            stalking: {

                title: "👁️ Online Stalking — Full Guide",

                text: `
                    <h3>1. Review what is publicly visible</h3>

                    <ul>
                        <li>Phone number</li>
                        <li>Email address</li>
                        <li>Location</li>
                        <li>Daily routine</li>
                        <li>Workplace/school information</li>
                        <li>Friends and family information</li>
                    </ul>

                    <h3>2. Check location sharing</h3>

                    <p>
                        Review live location and location-sharing settings
                        on social platforms and messaging apps.
                    </p>

                    <h3>3. Secure your accounts</h3>

                    <ol>
                        <li>Change passwords.</li>
                        <li>Enable 2FA.</li>
                        <li>Review active sessions.</li>
                        <li>Remove unknown devices.</li>
                    </ol>

                    <h3>4. Preserve evidence</h3>

                    <p>
                        Save repeated messages, comments, calls,
                        profile URLs and other relevant information.
                    </p>

                    <h3>5. Block and report</h3>

                    <p>
                        Block the account and report repeated abuse
                        where appropriate.
                    </p>

                    <h3>6. Physical safety</h3>

                    <p>
                        If online stalking appears connected to physical
                        stalking or threats, prioritize personal safety
                        and seek appropriate local official help.
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


    // =========================================================
    // CYBERCARE TOOLS
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

            scam: {

                title: "🔎 Scam Checker",

                text: `
                    <h3>Check these warning signs</h3>

                    <ul>
                        <li>🚨 Urgent pressure</li>
                        <li>🔐 Requests for OTP/password</li>
                        <li>🔗 Suspicious links</li>
                        <li>💰 Advance payment demand</li>
                        <li>🎁 Guaranteed reward/prize</li>
                        <li>💼 Fake job offer</li>
                        <li>📈 Guaranteed profit</li>
                        <li>☎️ Caller pretending to be authority</li>
                    </ul>

                    <h3>Safety rule</h3>

                    <p>
                        Stop and independently verify the request before
                        making a payment or sharing information.
                    </p>
                `
            },


            password: {

                title: "🔐 Password Safety",

                text: `
                    <h3>Good password habits</h3>

                    <ul>
                        <li>Use a long password/passphrase.</li>
                        <li>Use a unique password for important accounts.</li>
                        <li>Never reuse your banking password.</li>
                        <li>Do not use obvious personal information.</li>
                        <li>Enable 2FA wherever possible.</li>
                    </ul>

                    <h3>🚫 Never share</h3>

                    <p>
                        Never share your password, OTP or recovery codes
                        with another person.
                    </p>
                `
            },


            url: {

                title: "🔗 URL Safety Guide",

                text: `
                    <h3>Before opening a suspicious URL</h3>

                    <ol>
                        <li>Check the domain spelling.</li>
                        <li>Look for unusual characters.</li>
                        <li>Be careful with shortened links.</li>
                        <li>Do not trust a link only because it looks official.</li>
                        <li>Do not enter passwords after following unexpected links.</li>
                    </ol>

                    <h3>Best practice</h3>

                    <p>
                        When possible, open the official app or manually
                        enter the known official website instead of using
                        an unexpected link.
                    </p>
                `
            },


            privacy: {

                title: "📱 Privacy Checklist",

                text: `
                    <h3>Review these regularly</h3>

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

                    <h3>Simple rule</h3>

                    <p>
                        If an app does not need a permission for its
                        legitimate function, consider denying it.
                    </p>
                `
            },


            evidence: {

                title: "🧾 Evidence Checklist",

                text: `
                    <h3>Save where relevant</h3>

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

                    <h3>Important</h3>

                    <p>
                        Keep original evidence where possible and avoid
                        editing screenshots before preserving the original.
                    </p>
                `
            },


            score: {

                title: "🛡️ Cyber Safety Check",

                text: `
                    <h3>Ask yourself:</h3>

                    <ul>
                        <li>✔ Do I use unique passwords?</li>
                        <li>✔ Is 2FA enabled?</li>
                        <li>✔ Do I avoid sharing OTPs?</li>
                        <li>✔ Do I review account sessions?</li>
                        <li>✔ Do I review app permissions?</li>
                        <li>✔ Do I keep my phone updated?</li>
                        <li>✔ Do I verify suspicious payment requests?</li>
                        <li>✔ Do I know how to report cybercrime?</li>
                    </ul>

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
                selected.text
            );

        }

    }


    // =========================================================
    // LEARN CYBERSECURITY
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
                    Use long and unique passwords for important accounts.
                    Never reuse passwords across critical services.
                </p>

                <h3>Remember</h3>
                <p>
                    A password should remain private. Combine it with
                    2FA for stronger account protection.
                </p>
            `,

            "2fa": `
                <h3>🔑 Two-Factor Authentication</h3>

                <p>
                    2FA adds another security layer beyond your password.
                </p>

                <ul>
                    <li>Enable it on email.</li>
                    <li>Enable it on social accounts.</li>
                    <li>Enable it on financial services where available.</li>
                </ul>
            `,

            phishing: `
                <h3>🎣 Phishing</h3>

                <p>
                    Phishing attempts to trick you into giving away
                    sensitive information through fake messages,
                    websites or accounts.
                </p>

                <p>
                    Verify unexpected requests independently and never
                    share OTPs or passwords through unsolicited messages.
                </p>
            `,

            privacy: `
                <h3>🔒 Privacy</h3>

                <p>
                    Review who can see your posts, contact you,
                    find your profile and access your location.
                </p>

                <p>
                    Share only information that is necessary.
                </p>
            `,

            phone: `
                <h3>📱 Phone Security</h3>

                <p>
                    Keep your operating system updated, install apps
                    from trusted sources and regularly review permissions.
                </p>
            `,

            financial: `
                <h3>💳 Financial Safety</h3>

                <p>
                    Never share OTPs, UPI PINs, passwords or banking
                    credentials.
                </p>

                <p>
                    Always independently verify unexpected payment
                    requests.
                </p>
            `

        };

        showGuide(
            "🎓 Learn Cybersecurity",
            content[topic] ||
            "<p>Learn safe digital habits to protect yourself online.</p>"
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

            account: {

                title: "🔐 Account Compromised — Emergency",

                text: `
                    <ol>
                        <li>Secure your email account.</li>
                        <li>Change the compromised password.</li>
                        <li>Enable 2FA.</li>
                        <li>Review active sessions.</li>
                        <li>Remove unknown devices.</li>
                        <li>Check recovery email and phone.</li>
                        <li>Use official account recovery if locked out.</li>
                    </ol>

                    <p>
                        Never give recovery codes or OTPs to someone
                        claiming to be support.
                    </p>
                `
            },


            money: {

                title: "💳 Money at Risk — Emergency",

                text: `
                    <h3>Act immediately</h3>

                    <ol>
                        <li>Contact your bank/payment provider.</li>
                        <li>Tell them the transaction is fraudulent.</li>
                        <li>Preserve transaction IDs.</li>
                        <li>Secure affected payment accounts.</li>
                        <li>Use official cybercrime reporting channels.</li>
                    </ol>

                    <p>
                        Do not send additional money to anyone promising
                        to recover the lost amount.
                    </p>
                `
            },


            blackmail: {

                title: "⚠️ Blackmail / Threat — Emergency",

                text: `
                    <ol>
                        <li>Do not pay.</li>
                        <li>Do not send additional content.</li>
                        <li>Save evidence.</li>
                        <li>Secure your accounts.</li>
                        <li>Report the account/content.</li>
                        <li>Tell a trusted person.</li>
                        <li>Seek appropriate official help.</li>
                    </ol>

                    <p>
                        If there is an immediate physical threat,
                        prioritize your physical safety.
                    </p>
                `
            },


            phone: {

                title: "📱 Phone Compromised — Emergency",

                text: `
                    <ol>
                        <li>Stop using suspicious applications.</li>
                        <li>Review permissions.</li>
                        <li>Review accessibility/device administrator access.</li>
                        <li>Update the device.</li>
                        <li>Secure important accounts from a trusted device.</li>
                        <li>Preserve important evidence before a reset if necessary.</li>
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
    // GUIDE MODAL
    // =========================================================

    function showGuide(title, content) {

        document.getElementById(
            "cybercareModal"
        )?.remove();

        const modal =
            document.createElement("div");

        modal.id = "cybercareModal";

        modal.innerHTML = `

            <div class="guide-overlay">

                <div class="guide-modal">

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

});
