// ===============================
// CyberCare - Main JavaScript
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // ELEMENTS
    // -------------------------------

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


    // ===============================
    // SIDE MENU
    // ===============================

    function openMenu() {
        sideMenu.classList.add("active");
        menuOverlay.classList.add("active");
        document.body.classList.add("menu-open");
    }

    function closeSideMenu() {
        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
        document.body.classList.remove("menu-open");
    }

    if (menuBtn) {
        menuBtn.addEventListener("click", openMenu);
    }

    if (closeMenu) {
        closeMenu.addEventListener("click", closeSideMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener("click", closeSideMenu);
    }


    // ===============================
    // SIDE MENU NAVIGATION
    // ===============================

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


    function scrollToSection(id) {

        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    }


    // ===============================
    // EMERGENCY BUTTON
    // ===============================

    if (emergencyBtn) {

        emergencyBtn.addEventListener("click", () => {

            document.querySelector(".emergency-section")
                ?.scrollIntoView({
                    behavior: "smooth"
                });

        });

    }


    // ===============================
    // QUICK HELP
    // ===============================

    if (quickHelpBtn) {

        quickHelpBtn.addEventListener("click", () => {

            if (problemSearch) {

                problemSearch.focus();

                document.querySelector(".search-section")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }

        });

    }


    // ===============================
    // DARK / LIGHT MODE
    // ===============================

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

    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            darkMode = !darkMode;

            localStorage.setItem(
                "cybercare-theme",
                darkMode ? "dark" : "light"
            );

            applyTheme();

        });

    }


    // ===============================
    // LANGUAGE BUTTON
    // ===============================

    let bengali = false;

    if (languageBtn) {

        languageBtn.addEventListener("click", () => {

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

    }


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


        document.querySelectorAll("h1,h2,h3,h4,p,button,strong,small")
            .forEach(element => {

                const text = element.textContent.trim();

                if (translations[text]) {
                    element.textContent =
                        translations[text];
                }

            });

    }


    // ===============================
    // PROBLEM SEARCH
    // ===============================

    const problems = [

        {
            keywords: ["facebook", "instagram", "whatsapp", "google", "hacked", "account"],
            title: "Account Recovery",
            text: "Secure your account, change password and use the official recovery process."
        },

        {
            keywords: ["blackmail", "threat", "private photo", "private video"],
            title: "Blackmail / Private Content Threat",
            text: "Do not pay or send more content. Save evidence, block the person and report through the platform and appropriate authorities."
        },

        {
            keywords: ["call", "calling", "harassment", "message", "disturb"],
            title: "Repeated Calls / Harassment",
            text: "Save call logs and messages, block the person and use platform/reporting tools."
        },

        {
            keywords: ["photo", "picture", "image"],
            title: "Photo Misuse",
            text: "Save evidence and report the content/profile to the platform."
        },

        {
            keywords: ["fake profile", "fake account"],
            title: "Fake Profile",
            text: "Collect the profile URL and screenshots, then report the account."
        },

        {
            keywords: ["upi", "bank", "money", "fraud", "payment", "scam"],
            title: "Online & Financial Fraud",
            text: "If money has been lost in India, contact your bank/payment provider immediately and use the official cybercrime reporting channel."
        },

        {
            keywords: ["phishing", "link", "otp", "fake website"],
            title: "Scam & Phishing",
            text: "Do not open suspicious links or share OTPs, passwords or payment credentials."
        },

        {
            keywords: ["phone", "spyware", "unknown app", "malware"],
            title: "Phone Security",
            text: "Check installed apps, permissions, updates and account security."
        }

    ];


    if (problemSearch) {

        problemSearch.addEventListener("input", () => {

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


            if (matches.length === 0) {

                searchResults.innerHTML = `
                    <div class="search-result">
                        <h3>No exact guide found</h3>
                        <p>
                            Try words like blackmail, hacked,
                            UPI fraud, fake profile, harassment
                            or phishing.
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

    }


    // ===============================
    // SERVICE BUTTONS
    // ===============================

    document.querySelectorAll(".help-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const service =
                    button.dataset.service;

                showServiceGuide(service);

            });

        });


    function showServiceGuide(service) {

        const guides = {

            "Account Recovery":
                "Secure your email first, change your password, enable 2FA and use the official recovery page of the affected platform.",

            "Scam & Phishing":
                "Do not click suspicious links or share OTPs, passwords or recovery codes. Save the message as evidence and report it.",

            "Phone Security":
                "Review unknown apps, permissions, accessibility access and device administrator settings. Update your phone and remove suspicious applications.",

            "Online Fraud":
                "Contact your bank/payment provider immediately. In India, financial cyber fraud can also be reported through the official cybercrime system.",

            "Suspicious Activity":
                "Review recent login activity, change passwords, enable 2FA and revoke unknown sessions.",

            "Emergency Help":
                "Secure the affected account/device first, preserve evidence and contact the appropriate official service."

        };


        showGuide(
            service,
            guides[service] ||
            "Follow the official recovery or reporting process and preserve evidence."
        );

    }


    // ===============================
    // WOMEN SAFETY BUTTONS
    // ===============================

    document.querySelectorAll(".women-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const type =
                    button.dataset.women;

                showWomenGuide(type);

            });

        });


    function showWomenGuide(type) {

        const guides = {

            harassment: {
                title: "Repeated Calls / Harassment",
                text: `
                    <ol>
                        <li>Do not engage in arguments.</li>
                        <li>Save screenshots, call logs and messages.</li>
                        <li>Block the person if appropriate.</li>
                        <li>Use the platform's report feature.</li>
                        <li>If there are threats or immediate danger, contact local authorities.</li>
                    </ol>
                `
            },

            photo: {
                title: "Photo Misuse",
                text: `
                    <ol>
                        <li>Take screenshots of the post/profile.</li>
                        <li>Save the profile URL.</li>
                        <li>Report the content to the platform.</li>
                        <li>Do not pay anyone promising guaranteed removal.</li>
                    </ol>
                `
            },

            fakeprofile: {
                title: "Fake Profile",
                text: `
                    <ol>
                        <li>Take screenshots.</li>
                        <li>Copy the profile URL.</li>
                        <li>Report the fake account.</li>
                        <li>Ask trusted people not to engage with the account.</li>
                    </ol>
                `
            },

            blackmail: {
                title: "Blackmail",
                text: `
                    <ol>
                        <li>Do not pay the blackmailer.</li>
                        <li>Do not send additional photos or information.</li>
                        <li>Save all evidence.</li>
                        <li>Block/report the account where appropriate.</li>
                        <li>Seek help from trusted people and appropriate authorities.</li>
                    </ol>
                `
            },

            private: {
                title: "Private Photo / Video Threat",
                text: `
                    <ol>
                        <li>Do not send more content.</li>
                        <li>Do not pay.</li>
                        <li>Save screenshots and URLs.</li>
                        <li>Report the account/content to the platform.</li>
                        <li>Seek official help if there is a threat or distribution.</li>
                    </ol>
                `
            },

            stalking: {
                title: "Online Stalking",
                text: `
                    <ol>
                        <li>Review privacy and location settings.</li>
                        <li>Change passwords and enable 2FA.</li>
                        <li>Save evidence of repeated contact.</li>
                        <li>Block/report the account when appropriate.</li>
                        <li>If you feel physically unsafe, seek immediate local help.</li>
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


    // ===============================
    // TOOLS
    // ===============================

    document.querySelectorAll(".tool-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const tool =
                    button.dataset.tool;

                openTool(tool);

            });

        });


    function openTool(tool) {

        const tools = {

            scam: {
                title: "🔎 Scam Checker",
                text: `
                    Check these warning signs:
                    <br><br>
                    ❌ Urgent pressure<br>
                    ❌ Requests for OTP/password<br>
                    ❌ Suspicious links<br>
                    ❌ Requests for advance payment<br>
                    ❌ Guaranteed profit/job/reward claims
                `
            },

            password: {
                title: "🔐 Password Checker",
                text: `
                    Use a long, unique password or passphrase.
                    Avoid names, birthdays and reused passwords.
                    Never share your password with anyone.
                `
            },

            url: {
                title: "🔗 URL Safety Guide",
                text: `
                    Before opening a link, check the domain carefully.
                    Watch for spelling mistakes, unusual domains,
                    shortened URLs and unexpected login requests.
                `
            },

            privacy: {
                title: "📱 Privacy Checklist",
                text: `
                    Review app permissions, location sharing,
                    account privacy, connected devices and
                    active login sessions.
                `
            },

            evidence: {
                title: "🧾 Evidence Checklist",
                text: `
                    Save screenshots, usernames, profile URLs,
                    timestamps, transaction IDs and relevant messages.
                    Do not edit the original evidence.
                `
            },

            score: {
                title: "🛡️ Cyber Safety Score",
                text: `
                    Ask yourself:
                    <br><br>
                    ✔ Do I use unique passwords?<br>
                    ✔ Is 2FA enabled?<br>
                    ✔ Do I install apps only from trusted sources?<br>
                    ✔ Do I avoid sharing OTPs?<br>
                    ✔ Do I regularly review account sessions?
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


    // ===============================
    // LEARN BUTTONS
    // ===============================

    document.querySelectorAll(".learn-card")
        .forEach(button => {

            button.addEventListener("click", () => {

                const topic =
                    button.dataset.learn;

                showLearning(topic);

            });

        });


    function showLearning(topic) {

        const content = {

            password: "Use long, unique passwords and never reuse the same password across important accounts.",

            "2fa": "Two-factor authentication adds another security layer beyond your password.",

            phishing: "Phishing uses fake messages or websites to trick you into giving sensitive information.",

            privacy: "Review who can see your personal information, location and posts.",

            phone: "Keep your phone updated and review apps and permissions regularly.",

            financial: "Never share OTPs, UPI PINs or banking credentials. Verify payment requests before approving them."

        };


        showGuide(
            "🎓 Learn Cybersecurity",
            content[topic] || "Learn safe digital habits."
        );

    }


    // ===============================
    // EMERGENCY RESPONSE
    // ===============================

    document.querySelectorAll("[data-emergency]")
        .forEach(button => {

            button.addEventListener("click", () => {

                const type =
                    button.dataset.emergency;

                emergencyGuide(type);

            });

        });


    function emergencyGuide(type) {

        const guides = {

            account: {
                title: "🔐 Account Compromised",
                text: `
                    Change the password immediately,
                    secure your email account,
                    enable 2FA and sign out unknown sessions.
                `
            },

            money: {
                title: "💳 Money at Risk",
                text: `
                    Contact your bank/payment provider immediately.
                    If you are in India and have suffered financial cyber fraud,
                    use the official cybercrime reporting channel.
                `
            },

            blackmail: {
                title: "⚠️ Blackmail / Threat",
                text: `
                    Do not pay or send additional content.
                    Preserve evidence and seek trusted/offical help.
                `
            },

            phone: {
                title: "📱 Phone Compromised",
                text: `
                    Disconnect suspicious access where safe,
                    review unknown apps and permissions,
                    update the device and secure important accounts.
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


    // ===============================
    // GUIDE MODAL
    // ===============================

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

                    <button class="guide-close">
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
            .addEventListener("click", () => {
                modal.remove();
            });


        modal.querySelector(".guide-ok")
            .addEventListener("click", () => {
                modal.remove();
            });


        modal.querySelector(".guide-overlay")
            .addEventListener("click", event => {

                if (
                    event.target.classList.contains(
                        "guide-overlay"
                    )
                ) {
                    modal.remove();
                }

            });

    }


    // ===============================
    // ESC KEY
    // ===============================

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
