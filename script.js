// ============================================================
// CYBERCARE v2.0
// Advanced Digital Safety Assistant
// Search + Guides + Women's Safety + Emergency
// Tools + Language + Theme + Safety Score + Evidence Checklist
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    // =========================================================
    // ELEMENTS
    // =========================================================

    const $ = id => document.getElementById(id);

    const menuBtn = $("menuBtn");
    const closeMenu = $("closeMenu");
    const sideMenu = $("sideMenu");
    const menuOverlay = $("menuOverlay");

    const emergencyBtn = $("emergencyBtn");
    const quickHelpBtn = $("quickHelpBtn");

    const themeBtn = $("themeBtn");
    const languageBtn = $("languageBtn");
    const languageText = $("languageText");

    const problemSearch = $("problemSearch");
    const searchResults = $("searchResults");


    // =========================================================
    // STATE
    // =========================================================

    let bengali =
        localStorage.getItem("cybercare-language") === "bn";

    let darkMode =
        localStorage.getItem("cybercare-theme") === "dark";


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
    // NAVIGATION
    // =========================================================

    function scrollToSection(id) {

        const section = $(id);

        if (!section) return;

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
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
    // THEME
    // =========================================================

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
    // LANGUAGE SYSTEM
    // =========================================================

    const translations = {

        "Protecting People. Securing Digital Lives.":
            "মানুষকে সুরক্ষিত রাখা। ডিজিটাল জীবনকে নিরাপদ রাখা।",

        "Simple, practical and step-by-step guidance for hacking, scams, harassment, blackmail, privacy, financial fraud and digital threats.":
            "হ্যাকিং, স্ক্যাম, হয়রানি, ব্ল্যাকমেইল, গোপনীয়তা, আর্থিক প্রতারণা ও ডিজিটাল হুমকি মোকাবিলায় সহজ ও ধাপে ধাপে নির্দেশনা।",

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

        "Got it":
            "বুঝেছি",

        "View Full Safety Guide →":
            "সম্পূর্ণ নিরাপত্তা নির্দেশিকা দেখুন →"

    };


    function translatePageToBangla() {

        document.querySelectorAll(
            "h1,h2,h3,h4,p,button,strong,small"
        ).forEach(element => {

            const text = element.textContent.trim();

            if (translations[text]) {
                element.textContent =
                    translations[text];
            }

        });

        if (languageText)
            languageText.textContent = "বাংলা";
    }


    function resetLanguage() {

        localStorage.setItem(
            "cybercare-language",
            "en"
        );

        location.reload();
    }


    if (bengali)
        translatePageToBangla();

    languageBtn?.addEventListener("click", () => {

        if (!bengali) {

            bengali = true;

            localStorage.setItem(
                "cybercare-language",
                "bn"
            );

            translatePageToBangla();

        } else {

            resetLanguage();

        }

    });


    // =========================================================
    // ADVANCED SEARCH DATABASE
    // =========================================================

    const problems = [

        {
            keywords: [
                "facebook",
                "fb",
                "instagram",
                "insta",
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
                <p>
                    Your account may be compromised.
                    Secure your email first, change your password,
                    enable 2FA, review active sessions and remove
                    unknown devices.
                </p>

                <button class="guide-action"
                    data-guide="account">
                    Open Full Guide
                </button>
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
                "nude",
                "intimate"
            ],

            title: "⚠️ Blackmail / Private Content Threat",

            text: `
                <p>
                    Do not pay, do not send additional content and
                    preserve evidence. Secure your accounts and use
                    appropriate official reporting channels.
                </p>

                <button class="guide-action"
                    data-guide="blackmail">
                    Open Full Guide
                </button>
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
                "annoy",
                "phone"
            ],

            title: "📞 Harassment / Unwanted Contact",

            text: `
                <p>
                    Save messages and call logs, avoid unnecessary
                    engagement, block the person when appropriate
                    and report serious threats.
                </p>

                <button class="guide-action"
                    data-guide="harassment">
                    Open Full Guide
                </button>
            `
        },


        {
            keywords: [
                "photo",
                "picture",
                "image",
                "photo misuse",
                "stolen photo"
            ],

            title: "📸 Photo Misuse",

            text: `
                <p>
                    Save screenshots and URLs, report the content
                    through the platform and preserve evidence.
                </p>

                <button class="guide-action"
                    data-guide="photo">
                    Open Full Guide
                </button>
            `
        },


        {
            keywords: [
                "fake profile",
                "fake account",
                "impersonation",
                "pretending"
            ],

            title: "🎭 Fake Profile / Impersonation",

            text: `
                <p>
                    Save the profile URL and screenshots and report
                    the account using the platform's impersonation
                    reporting system.
                </p>

                <button class="guide-action"
                    data-guide="fakeprofile">
                    Open Full Guide
                </button>
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
                "debit",
                "credit"
            ],

            title: "💳 Online & Financial Fraud",

            text: `
                <p>
                    Contact your bank/payment provider immediately,
                    preserve transaction details and use official
                    cybercrime reporting channels.
                </p>

                <button class="guide-action"
                    data-guide="fraud">
                    Open Full Guide
                </button>
            `
        },


        {
            keywords: [
                "phishing",
                "link",
                "otp",
                "fake website",
                "fake sms",
                "sms scam",
                "email scam"
            ],

            title: "🎣 Scam & Phishing",

            text: `
                <p>
                    Do not open suspicious links or share OTPs,
                    passwords, PINs or recovery codes.
                </p>

                <button class="guide-action"
                    data-guide="phishing">
                    Open Full Guide
                </button>
            `
        },


        {
            keywords: [
                "spyware",
                "unknown app",
                "malware",
                "virus",
                "hacked phone",
                "phone hacked"
            ],

            title: "📱 Phone Security",

            text: `
                <p>
                    Review unknown apps and permissions, update
                    the device and secure important accounts.
                </p>

                <button class="guide-action"
                    data-guide="phone">
                    Open Full Guide
                </button>
            `
        },


        {
            keywords: [
                "stalking",
                "follow",
                "monitor",
                "tracking",
                "location"
            ],

            title: "👁️ Online Stalking",

            text: `
                <p>
                    Review location sharing, privacy settings,
                    account sessions and preserve evidence.
                </p>

                <button class="guide-action"
                    data-guide="stalking">
                    Open Full Guide
                </button>
            `
        }

    ];


    // =========================================================
    // SEARCH ENGINE
    // =========================================================

    problemSearch?.addEventListener("input", () => {

        const query =
            problemSearch.value
                .toLowerCase()
                .trim();

        if (!searchResults) return;

        searchResults.innerHTML = "";

        if (!query) return;

        const words =
            query.split(/\s+/);

        const matches =
            problems
                .map(problem => {

                    let score = 0;

                    problem.keywords.forEach(keyword => {

                        if (query.includes(keyword))
                            score += 3;

                        words.forEach(word => {

                            if (
                                word.length > 2 &&
                                keyword.includes(word)
                            ) {
                                score += 1;
                            }

                        });

                    });

                    return {
                        ...problem,
                        score
                    };

                })
                .filter(problem => problem.score > 0)
                .sort((a, b) => b.score - a.score);


        if (!matches.length) {

            searchResults.innerHTML = `
                <div class="search-result">

                    <h3>🔎 No exact guide found</h3>

                    <p>
                        Try searching for:
                        blackmail, hacked, UPI fraud,
                        fake profile, harassment,
                        phishing, photo misuse,
                        stalking or phone hacked.
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

            `;

            searchResults.appendChild(result);

        });


        document
            .querySelectorAll(".guide-action")
            .forEach(button => {

                button.addEventListener("click", () => {

                    openAdvancedGuide(
                        button.dataset.guide
                    );

                });

            });

    });


    // =========================================================
    // SERVICE BUTTONS
    // =========================================================

    document.querySelectorAll(".help-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const service =
                    button.dataset.service;

                const map = {

                    "Account Recovery": "account",

                    "Scam & Phishing": "phishing",

                    "Phone Security": "phone",

                    "Online Fraud": "fraud",

                    "Suspicious Activity": "suspicious",

                    "Emergency Help": "emergency"

                };

                openAdvancedGuide(
                    map[service] || "emergency"
                );

            });

        });


    // =========================================================
    // WOMEN SAFETY
    // =========================================================

    document.querySelectorAll(".women-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                openAdvancedGuide(
                    button.dataset.women
                );

            });

        });


    // =========================================================
    // ADVANCED GUIDES
    // =========================================================

    const guides = {

        // -----------------------------------------------------
        // ACCOUNT
        // -----------------------------------------------------

        account: {

            title: "🔐 Account Recovery — Complete Guide",

            content: `

                <div class="guide-alert">
                    🚨 If you are currently locked out, use only
                    the official recovery page/app of the service.
                </div>

                <h3>1. Secure your email</h3>

                <p>
                    Your email is often the key to recovering other
                    accounts. Change its password and enable 2FA.
                </p>

                <h3>2. Change your password</h3>

                <p>
                    Create a long, unique password that you have
                    never used elsewhere.
                </p>

                <h3>3. Remove unknown sessions</h3>

                <p>
                    Check logged-in devices and sign out devices
                    you do not recognize.
                </p>

                <h3>4. Check recovery information</h3>

                <ul>
                    <li>Recovery email</li>
                    <li>Recovery phone</li>
                    <li>Security settings</li>
                    <li>Connected devices</li>
                    <li>Third-party applications</li>
                </ul>

                <h3>5. Enable 2FA</h3>

                <p>
                    Use the platform's official security settings.
                </p>

                <h3>6. Check suspicious activity</h3>

                <ul>
                    <li>Unknown messages</li>
                    <li>Unknown posts</li>
                    <li>Password reset requests</li>
                    <li>Profile changes</li>
                    <li>Unknown logins</li>
                </ul>

                <h3>7. If you cannot log in</h3>

                <p>
                    Use the platform's official account recovery
                    process. Never pay an unknown person claiming
                    they can recover the account.
                </p>

                <div class="guide-danger">
                    🚫 Never share OTP, password or recovery codes.
                </div>

            `
        },


        // -----------------------------------------------------
        // PHISHING
        // -----------------------------------------------------

        phishing: {

            title: "🎣 Scam & Phishing — Complete Guide",

            content: `

                <h3>🚨 Stop first</h3>

                <p>
                    Do not click another link and do not provide
                    additional information until the request is verified.
                </p>

                <h3>Never share</h3>

                <ul>
                    <li>❌ OTP</li>
                    <li>❌ Password</li>
                    <li>❌ UPI PIN</li>
                    <li>❌ Banking PIN</li>
                    <li>❌ Recovery code</li>
                    <li>❌ Card security information</li>
                </ul>

                <h3>Check the sender</h3>

                <p>
                    A logo, profile photo or official-looking message
                    does not prove that the sender is genuine.
                </p>

                <h3>Check the URL</h3>

                <p>
                    Carefully check the domain spelling before entering
                    login information.
                </p>

                <h3>If you already entered your password</h3>

                <ol>
                    <li>Open the official website/app manually.</li>
                    <li>Change the password.</li>
                    <li>Sign out unknown sessions.</li>
                    <li>Enable 2FA.</li>
                </ol>

                <h3>If money was lost</h3>

                <p>
                    Contact your bank/payment provider immediately
                    and preserve transaction information.
                </p>

            `
        },


        // -----------------------------------------------------
        // PHONE
        // -----------------------------------------------------

        phone: {

            title: "📱 Phone Security — Complete Guide",

            content: `

                <h3>1. Check unknown apps</h3>

                <p>
                    Look for applications you do not remember installing.
                </p>

                <h3>2. Review permissions</h3>

                <ul>
                    <li>Camera</li>
                    <li>Microphone</li>
                    <li>Location</li>
                    <li>Contacts</li>
                    <li>SMS</li>
                    <li>Accessibility</li>
                </ul>

                <h3>3. Update the device</h3>

                <p>
                    Install operating-system and security updates.
                </p>

                <h3>4. Secure accounts</h3>

                <p>
                    If you suspect compromise, secure important
                    accounts from a trusted device where possible.
                </p>

                <h3>5. Do not immediately destroy evidence</h3>

                <p>
                    If you suspect serious compromise, preserve
                    relevant evidence before resetting the phone.
                </p>

            `
        },


        // -----------------------------------------------------
        // FRAUD
        // -----------------------------------------------------

        fraud: {

            title: "💳 Financial Fraud — Emergency Guide",

            content: `

                <div class="guide-alert">
                    🚨 If money has just been transferred fraudulently,
                    contact your bank/payment provider immediately.
                </div>

                <h3>Do this immediately</h3>

                <ol>
                    <li>Contact your bank/payment provider.</li>
                    <li>Report the transaction as fraudulent.</li>
                    <li>Preserve the transaction ID.</li>
                    <li>Save screenshots.</li>
                    <li>Secure the affected account.</li>
                    <li>Use official cybercrime reporting channels.</li>
                </ol>

                <h3>Save these details</h3>

                <ul>
                    <li>Transaction ID</li>
                    <li>Amount</li>
                    <li>Date and time</li>
                    <li>Recipient information</li>
                    <li>Phone number</li>
                    <li>Messages</li>
                    <li>Screenshots</li>
                </ul>

                <div class="guide-danger">
                    🚫 Never send additional money to someone
                    promising guaranteed recovery.
                </div>

            `
        },


        // -----------------------------------------------------
        // BLACKMAIL
        // -----------------------------------------------------

        blackmail: {

            title: "⚠️ Blackmail — Complete A to Z Guide",

            content: `

                <div class="guide-alert">
                    ❤️ First: Do not panic. Blackmailers often
                    use fear and urgency to pressure you.
                </div>

                <h3>1. Do NOT pay</h3>

                <p>
                    Payment does not guarantee that the threats will stop.
                </p>

                <h3>2. Do NOT send more content</h3>

                <p>
                    Do not send additional photos, videos, documents,
                    passwords or personal information.
                </p>

                <h3>3. Preserve evidence</h3>

                <ul>
                    <li>📸 Screenshots</li>
                    <li>👤 Username</li>
                    <li>🔗 Profile URL</li>
                    <li>📞 Phone number</li>
                    <li>💬 Messages</li>
                    <li>💰 Payment demand</li>
                    <li>🕐 Date and time</li>
                </ul>

                <h3>4. Secure your accounts</h3>

                <ol>
                    <li>Change passwords.</li>
                    <li>Enable 2FA.</li>
                    <li>Review active sessions.</li>
                    <li>Remove unknown devices.</li>
                    <li>Review recovery information.</li>
                </ol>

                <h3>5. Block and report</h3>

                <p>
                    Preserve important evidence first, then block
                    and report when appropriate.
                </p>

                <h3>6. Tell someone you trust</h3>

                <p>
                    You do not have to handle blackmail alone.
                </p>

                <h3>7. If money was sent</h3>

                <p>
                    Contact your bank/payment provider immediately
                    and preserve transaction information.
                </p>

                <h3>8. If private content is published</h3>

                <p>
                    Save the URL and screenshots and report the
                    content through the platform's official process.
                </p>

                <h3>9. Physical threat</h3>

                <p>
                    If someone threatens physical harm or knows
                    your location, prioritize your physical safety
                    and seek appropriate local official assistance.
                </p>

                <div class="guide-danger">
                    🚫 Beware of anyone promising "guaranteed recovery"
                    for money.
                </div>

                <div class="guide-safe">
                    ❤️ Remember: Being blackmailed is not your fault.
                </div>

            `
        },


        // -----------------------------------------------------
        // HARASSMENT
        // -----------------------------------------------------

        harassment: {

            title: "📞 Harassment / Unwanted Contact",

            content: `

                <h3>1. Preserve evidence</h3>

                <ul>
                    <li>Call logs</li>
                    <li>Messages</li>
                    <li>Screenshots</li>
                    <li>Usernames</li>
                    <li>Profile URLs</li>
                    <li>Dates and times</li>
                </ul>

                <h3>2. Avoid unnecessary engagement</h3>

                <p>
                    You do not have to keep responding to unwanted
                    messages or calls.
                </p>

                <h3>3. Block</h3>

                <p>
                    Use phone and platform blocking tools when appropriate.
                </p>

                <h3>4. Review privacy</h3>

                <ul>
                    <li>Who can call you</li>
                    <li>Who can message you</li>
                    <li>Who can see your number</li>
                    <li>Location sharing</li>
                    <li>Profile visibility</li>
                </ul>

                <h3>5. Serious threats</h3>

                <p>
                    Preserve evidence and seek appropriate official help.
                </p>

            `
        },


        // -----------------------------------------------------
        // PHOTO
        // -----------------------------------------------------

        photo: {

            title: "📸 Photo Misuse — Complete Guide",

            content: `

                <h3>Save evidence first</h3>

                <ul>
                    <li>Screenshot the content.</li>
                    <li>Screenshot the profile.</li>
                    <li>Copy the URL.</li>
                    <li>Save username.</li>
                    <li>Note date and time.</li>
                </ul>

                <h3>Report the content</h3>

                <p>
                    Use the platform's official reporting system
                    for privacy violations, harassment or unauthorized
                    content where applicable.
                </p>

                <h3>Protect your account</h3>

                <ol>
                    <li>Change password if necessary.</li>
                    <li>Enable 2FA.</li>
                    <li>Review active sessions.</li>
                    <li>Review privacy settings.</li>
                </ol>

                <div class="guide-danger">
                    🚫 Do not pay someone promising guaranteed removal.
                </div>

            `
        },


        // -----------------------------------------------------
        // FAKE PROFILE
        // -----------------------------------------------------

        fakeprofile: {

            title: "🎭 Fake Profile / Impersonation",

            content: `

                <h3>1. Save the profile</h3>

                <ul>
                    <li>Profile screenshot</li>
                    <li>Profile URL</li>
                    <li>Username</li>
                    <li>Fake posts</li>
                    <li>Messages</li>
                </ul>

                <h3>2. Report impersonation</h3>

                <p>
                    Use the platform's official impersonation/fake
                    account reporting option.
                </p>

                <h3>3. Warn important contacts</h3>

                <p>
                    If the fake account is contacting your friends
                    or family, warn them not to trust it.
                </p>

                <h3>4. Secure your real account</h3>

                <ul>
                    <li>Unique password</li>
                    <li>2FA</li>
                    <li>Active session review</li>
                    <li>Privacy review</li>
                </ul>

            `
        },


        // -----------------------------------------------------
        // STALKING
        // -----------------------------------------------------

        stalking: {

            title: "👁️ Online Stalking — Complete Guide",

            content: `

                <h3>Review publicly visible information</h3>

                <ul>
                    <li>Phone number</li>
                    <li>Email</li>
                    <li>Location</li>
                    <li>Daily routine</li>
                    <li>Work/school information</li>
                    <li>Friends/family information</li>
                </ul>

                <h3>Check location sharing</h3>

                <p>
                    Review live location and location-sharing
                    settings on social and messaging apps.
                </p>

                <h3>Secure accounts</h3>

                <ol>
                    <li>Change passwords.</li>
                    <li>Enable 2FA.</li>
                    <li>Review active sessions.</li>
                    <li>Remove unknown devices.</li>
                </ol>

                <h3>Preserve evidence</h3>

                <p>
                    Save repeated messages, calls, comments,
                    profile URLs and other relevant information.
                </p>

                <h3>Physical safety</h3>

                <p>
                    If online stalking becomes connected to physical
                    stalking or threats, prioritize personal safety.
                </p>

            `
        },


        // -----------------------------------------------------
        // SUSPICIOUS ACTIVITY
        // -----------------------------------------------------

        suspicious: {

            title: "🕵️ Suspicious Activity",

            content: `

                <h3>Warning signs</h3>

                <ul>
                    <li>Unknown login alerts</li>
                    <li>Unknown devices</li>
                    <li>Unexpected password reset</li>
                    <li>Messages you did not send</li>
                    <li>Unexpected account changes</li>
                </ul>

                <h3>What to do</h3>

                <ol>
                    <li>Change password.</li>
                    <li>Enable 2FA.</li>
                    <li>Review sessions.</li>
                    <li>Remove unknown devices.</li>
                    <li>Check recovery information.</li>
                    <li>Review connected applications.</li>
                </ol>

            `
        },


        // -----------------------------------------------------
        // EMERGENCY
        // -----------------------------------------------------

        emergency: {

            title: "🚨 Emergency Cyber Response",

            content: `

                <div class="guide-alert">
                    🚨 Stop the damage first.
                </div>

                <ol>

                    <li>
                        Stop sending money or information.
                    </li>

                    <li>
                        Secure your email and important accounts.
                    </li>

                    <li>
                        Preserve screenshots, URLs, messages
                        and transaction details.
                    </li>

                    <li>
                        Report through the relevant official
                        platform/government channel.
                    </li>

                    <li>
                        Tell someone you trust.
                    </li>

                </ol>

                <h3>Physical danger</h3>

                <p>
                    If there is immediate physical danger,
                    prioritize your physical safety and seek
                    appropriate local emergency assistance.
                </p>

            `
        }

    };


    // =========================================================
    // WOMEN SAFETY ALIASES
    // =========================================================

    const womenGuideMap = {

        harassment: "harassment",
        photo: "photo",
        fakeprofile: "fakeprofile",
        blackmail: "blackmail",
        private: "blackmail",
        stalking: "stalking"

    };


    // =========================================================
    // GUIDE MODAL
    // =========================================================

    function openAdvancedGuide(type) {

        const guideType =
            womenGuideMap[type] || type;

        const guide =
            guides[guideType];

        if (!guide) {

            showGuide(
                "🛡️ CyberCare",
                `
                    <p>
                        Follow the official recovery/reporting
                        process and preserve evidence.
                    </p>
                `
            );

            return;
        }

        showGuide(
            guide.title,
            guide.content
        );

    }


    function showGuide(title, content) {

        document
            .getElementById("cybercareModal")
            ?.remove();

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
            .querySelector(".guide-copy")
            ?.addEventListener("click", async () => {

                const text =
                    modal.querySelector(
                        ".guide-content"
                    )?.innerText || "";

                try {

                    await navigator.clipboard.writeText(
                        title + "\n\n" + text
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

        if (tool === "scam") {
            openScamChecker();
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
            openPrivacyChecklist();
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
    // SCAM CHECKER
    // =========================================================

    function openScamChecker() {

        showInteractiveModal(
            "🔎 Scam Checker",

            `

            <p>
                Paste the suspicious message below.
                CyberCare will check common warning signs locally.
            </p>

            <textarea
                id="scamInput"
                class="cyber-input"
                rows="6"
                placeholder="Paste suspicious message here..."
            ></textarea>

            <button
                id="runScamCheck"
                class="tool-primary"
            >
                🔎 Check Message
            </button>

            <div id="scamResult"></div>

            `
        );


        $("runScamCheck")
            ?.addEventListener("click", () => {

                const text =
                    $("scamInput")
                        ?.value
                        .toLowerCase() || "";

                const warnings = [];

                const checks = [

                    {
                        words: [
                            "otp",
                            "one time password"
                        ],
                        message:
                            "Requests an OTP."
                    },

                    {
                        words: [
                            "upi pin",
                            "pin"
                        ],
                        message:
                            "Requests a PIN."
                    },

                    {
                        words: [
                            "urgent",
                            "immediately",
                            "last chance"
                        ],
                        message:
                            "Uses urgency or pressure."
                    },

                    {
                        words: [
                            "prize",
                            "winner",
                            "lottery",
                            "reward"
                        ],
                        message:
                            "Mentions a prize/reward."
                    },

                    {
                        words: [
                            "click this link",
                            "verify now",
                            "login now"
                        ],
                        message:
                            "Pushes you toward a link/login."
                    },

                    {
                        words: [
                            "pay",
                            "payment",
                            "send money",
                            "transfer"
                        ],
                        message:
                            "Requests money/payment."
                    },

                    {
                        words: [
                            "guaranteed profit",
                            "double your money"
                        ],
                        message:
                            "Promises guaranteed financial returns."
                    }

                ];


                checks.forEach(check => {

                    if (
                        check.words.some(
                            word => text.includes(word)
                        )
                    ) {
                        warnings.push(
                            check.message
                        );
                    }

                });


                const result =
                    $("scamResult");

                if (!result) return;


                if (!text.trim()) {

                    result.innerHTML = `
                        <div class="guide-danger">
                            Please paste a message first.
                        </div>
                    `;

                    return;
                }


                if (!warnings.length) {

                    result.innerHTML = `
                        <div class="guide-safe">
                            ✅ No common warning sign was detected.
                            This does NOT prove the message is safe.
                            Verify independently before acting.
                        </div>
                    `;

                    return;
                }


                result.innerHTML = `

                    <div class="guide-danger">

                        <h3>⚠️ Warning Signs Found</h3>

                        <ul>
                            ${warnings
                                .map(w => `<li>${w}</li>`)
                                .join("")}
                        </ul>

                        <p>
                            Do not share OTP, password, PIN or
                            recovery codes.
                        </p>

                    </div>
                `;

            });

    }


    // =========================================================
    // PASSWORD CHECKER
    // =========================================================

    function openPasswordChecker() {

        showInteractiveModal(
            "🔐 Password Safety Checker",

            `

            <p>
                Your password is checked locally in this browser.
                It is not sent anywhere by this tool.
            </p>

            <input
                id="passwordInput"
                class="cyber-input"
                type="password"
                placeholder="Enter a password to check"
                autocomplete="off"
            >

            <button
                id="togglePassword"
                class="tool-secondary"
                type="button"
            >
                👁️ Show / Hide
            </button>

            <div id="passwordResult"></div>

            `
        );


        const input =
            $("passwordInput");

        input?.addEventListener(
            "input",
            checkPassword
        );


        $("togglePassword")
            ?.addEventListener("click", () => {

                if (!input) return;

                input.type =
                    input.type === "password"
                        ? "text"
                        : "password";

            });


        function checkPassword() {

            const password =
                input?.value || "";

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


            let label;

            if (score <= 2)
                label = "🔴 Weak";

            else if (score <= 4)
                label = "🟠 Moderate";

            else
                label = "🟢 Strong";


            $("passwordResult").innerHTML = `

                <div class="guide-result">

                    <h3>${label}</h3>

                    <p>
                        Password length:
                        ${password.length}
                    </p>

                    <p>
                        This is only a basic local
                        strength check.
                    </p>

                </div>

            `;

        }

    }


    // =========================================================
    // URL CHECKER
    // =========================================================

    function openURLChecker() {

        showInteractiveModal(
            "🔗 URL Safety Checker",

            `

            <p>
                This tool performs basic local checks.
                It does not guarantee that a URL is safe.
            </p>

            <input
                id="urlInput"
                class="cyber-input"
                type="url"
                placeholder="https://example.com"
            >

            <button
                id="checkURL"
                class="tool-primary"
            >
                🔎 Check URL
            </button>

            <div id="urlResult"></div>

            `
        );


        $("checkURL")
            ?.addEventListener("click", () => {

                const value =
                    $("urlInput")
                        ?.value
                        .trim();

                const result =
                    $("urlResult");

                if (!result) return;


                if (!value) {

                    result.innerHTML = `
                        <div class="guide-danger">
                            Enter a URL first.
                        </div>
                    `;

                    return;
                }


                let url;

                try {

                    url =
                        new URL(value);

                } catch {

                    result.innerHTML = `
                        <div class="guide-danger">
                            ⚠️ This does not appear to be a valid URL.
                        </div>
                    `;

                    return;
                }


                const warnings = [];


                if (url.protocol !== "https:")
                    warnings.push(
                        "The URL does not use HTTPS."
                    );


                if (url.hostname.includes("xn--"))
                    warnings.push(
                        "The domain contains punycode."
                    );


                if (url.hostname.split(".").length > 4)
                    warnings.push(
                        "The domain contains many subdomains."
                    );


                if (
                    url.hostname.includes("@")
                )
                    warnings.push(
                        "The URL contains an unusual @ character."
                    );


                if (!warnings.length) {

                    result.innerHTML = `
                        <div class="guide-safe">
                            ✅ No basic warning sign was detected.
                            Still verify the domain independently.
                        </div>
                    `;

                } else {

                    result.innerHTML = `

                        <div class="guide-danger">

                            <h3>⚠️ Review Carefully</h3>

                            <ul>
                                ${warnings
                                    .map(w => `<li>${w}</li>`)
                                    .join("")}
                            </ul>

                        </div>
                    `;

                }

            });

    }


    // =========================================================
    // PRIVACY CHECKLIST
    // =========================================================

    function openPrivacyChecklist() {

        showChecklistModal(
            "📱 Privacy Checklist",

            [
                "Review account privacy settings",
                "Review location sharing",
                "Review camera permissions",
                "Review microphone permissions",
                "Review contact permissions",
                "Review unknown apps",
                "Review logged-in devices",
                "Review third-party applications",
                "Enable 2FA",
                "Use unique passwords"
            ]
        );

    }


    // =========================================================
    // EVIDENCE CHECKLIST
    // =========================================================

    function openEvidenceChecklist() {

        showChecklistModal(
            "🧾 Evidence Checklist",

            [
                "Take screenshots",
                "Save usernames",
                "Save profile URLs",
                "Save messages",
                "Save call logs",
                "Record date and time",
                "Save transaction ID",
                "Save relevant emails",
                "Preserve original files where possible",
                "Do not delete important evidence too early"
            ]
        );

    }


    // =========================================================
    // CYBER SAFETY SCORE
    // =========================================================

    function openSafetyScore() {

        showInteractiveModal(
            "🛡️ Cyber Safety Score",

            `

            <p>
                Answer these questions honestly.
            </p>

            <form id="scoreForm">

                ${[
                    "Do you use unique passwords?",
                    "Is 2FA enabled on important accounts?",
                    "Do you avoid sharing OTPs?",
                    "Do you review active sessions?",
                    "Do you review app permissions?",
                    "Do you keep your phone updated?",
                    "Do you verify payment requests?",
                    "Do you know how to report cybercrime?"
                ]
                .map((question, index) => `

                    <label class="score-question">

                        <input
                            type="checkbox"
                            name="q${index}"
                        >

                        ${question}

                    </label>

                `)
                .join("")}

                <button
                    class="tool-primary"
                    type="submit"
                >
                    🛡️ Calculate Score
                </button>

            </form>

            <div id="scoreResult"></div>

            `
        );


        $("scoreForm")
            ?.addEventListener("submit", event => {

                event.preventDefault();

                const checked =
                    document.querySelectorAll(
                        "#scoreForm input:checked"
                    ).length;

                const total = 8;

                const percentage =
                    Math.round(
                        (checked / total) * 100
                    );


                let message;

                if (percentage < 40) {

                    message =
                        "🔴 Your basic digital safety needs improvement.";

                } else if (percentage < 75) {

                    message =
                        "🟠 Good start, but there are areas to improve.";

                } else {

                    message =
                        "🟢 Great! Your basic safety habits look strong.";

                }


                $("scoreResult").innerHTML = `

                    <div class="guide-result">

                        <h3>
                            ${percentage}% Safety Score
                        </h3>

                        <p>${message}</p>

                    </div>

                `;

            });

    }


    // =========================================================
    // CHECKLIST MODAL
    // =========================================================

    function showChecklistModal(title, items) {

        showInteractiveModal(
            title,

            `

            <div id="checklistBox">

                ${items.map((item, index) => `

                    <label class="check-item">

                        <input
                            type="checkbox"
                            data-index="${index}"
                        >

                        <span>
                            ${item}
                        </span>

                    </label>

                `).join("")}

            </div>

            <button
                id="saveChecklist"
                class="tool-primary"
            >
                💾 Save Progress
            </button>

            `
        );


        const storageKey =
            "cybercare-checklist-" +
            title;


        const saved =
            JSON.parse(
                localStorage.getItem(storageKey) || "[]"
            );


        document
            .querySelectorAll(
                "#checklistBox input"
            )
            .forEach(input => {

                const index =
                    Number(
                        input.dataset.index
                    );

                input.checked =
                    saved.includes(index);


                input.addEventListener(
                    "change",
                    save
                );

            });


        function save() {

            const checked =
                Array.from(
                    document.querySelectorAll(
                        "#checklistBox input:checked"
                    )
                )
                .map(
                    input =>
                        Number(input.dataset.index)
                );


            localStorage.setItem(
                storageKey,
                JSON.stringify(checked)
            );

        }


        $("saveChecklist")
            ?.addEventListener("click", () => {

                save();

                showToast(
                    "Checklist progress saved."
                );

            });

    }


    // =========================================================
    // INTERACTIVE MODAL
    // =========================================================

    function showInteractiveModal(title, content) {

        document
            .getElementById("cybercareModal")
            ?.remove();

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
                        Close
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


    // =========================================================
    // EMERGENCY BUTTONS
    // =========================================================

    document
        .querySelectorAll("[data-emergency]")
        .forEach(button => {

            button.addEventListener("click", () => {

                const type =
                    button.dataset.emergency;

                openAdvancedGuide(
                    type === "money"
                        ? "fraud"
                        : type === "blackmail"
                            ? "blackmail"
                            : type === "account"
                                ? "account"
                                : type === "phone"
                                    ? "phone"
                                    : "emergency"
                );

            });

        });


    // =========================================================
    // TOAST
    // =========================================================

    function showToast(message) {

        document
            .querySelector(".cybercare-toast")
            ?.remove();

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
    // KEYBOARD ACCESS
    // =========================================================

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeSideMenu();

                document
                    .getElementById(
                        "cybercareModal"
                    )
                    ?.remove();

            }

        }
    );


    // =========================================================
    // ONLINE / OFFLINE STATUS
    // =========================================================

    function updateConnectionStatus() {

        if (!navigator.onLine) {

            showToast(
                "⚠️ You are offline. Local CyberCare tools still work."
            );

        }

    }

    window.addEventListener(
        "offline",
        updateConnectionStatus
    );


    // =========================================================
    // INITIALIZATION
    // =========================================================

    console.log(
        "🛡️ CyberCare Advanced Safety System Loaded"
    );

});
