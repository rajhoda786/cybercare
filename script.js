// ==========================================
// CyberCare - Main JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // ELEMENTS
    // ==========================================

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


    // ==========================================
    // SIDE MENU
    // ==========================================

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


    // ==========================================
    // SECTION NAVIGATION
    // ==========================================

    function scrollToSection(id) {

        const section = document.getElementById(id);

        if (!section) return;

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }


    // ==========================================
    // 3-DOT MENU
    // ==========================================

    document.querySelectorAll(".menu-item").forEach(item => {

        item.addEventListener("click", () => {

            const target = item.dataset.menu;

            closeSideMenu();

            switch (target) {

                case "services":
                    scrollToSection("services");
                    break;

                case "women":
                    scrollToSection("women");
                    break;

                case "tools":
                    scrollToSection("tools");
                    break;

                case "learn":
                    scrollToSection("learn");
                    break;

                case "emergency":
                    document
                        .querySelector(".emergency-section")
                        ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    break;

                case "india":
                    scrollToSection("india");
                    break;

                case "about":
                    scrollToSection("about");
                    break;

            }

        });

    });


    // ==========================================
    // HERO EMERGENCY BUTTON
    // ==========================================

    emergencyBtn?.addEventListener("click", () => {

        document
            .querySelector(".emergency-section")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    });


    // ==========================================
    // QUICK HELP
    // ==========================================

    quickHelpBtn?.addEventListener("click", () => {

        document
            .querySelector(".search-section")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        setTimeout(() => {
            problemSearch?.focus();
        }, 500);

    });


    // ==========================================
    // DARK / LIGHT MODE
    // ==========================================

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


    // ==========================================
    // LANGUAGE SYSTEM
    // ==========================================

    let bengali =
        localStorage.getItem("cybercare-language") === "bn";

    const translations = {

        "CyberCare":
            "CyberCare",

        "Protecting People. Securing Digital Lives.":
            "মানুষকে সুরক্ষিত রাখা। ডিজিটাল জীবনকে নিরাপদ রাখা।",

        "Simple, practical and step-by-step guidance for hacking, scams, harassment, blackmail, privacy, financial fraud and digital threats.":
            "হ্যাকিং, প্রতারণা, হয়রানি, ব্ল্যাকমেইল, গোপনীয়তা, আর্থিক প্রতারণা ও ডিজিটাল ঝুঁকি মোকাবিলায় সহজ ও ধাপে ধাপে নির্দেশনা।",

        "I Need Help Now":
            "এখনই সাহায্য দরকার",

        "Find My Problem":
            "আমার সমস্যাটি খুঁজুন",

        "What happened?":
            "কি ঘটেছে?",

        "Search for your problem and CyberCare will show the relevant safety guide.":
            "আপনার সমস্যাটি লিখুন এবং CyberCare আপনাকে প্রাসঙ্গিক নিরাপত্তা নির্দেশিকা দেখাবে।",

        "How Can We Help You?":
            "আমরা কীভাবে সাহায্য করতে পারি?",

        "Choose a situation and get step-by-step guidance.":
            "আপনার সমস্যাটি বেছে নিয়ে ধাপে ধাপে নির্দেশনা নিন।",

        "Account Recovery":
            "অ্যাকাউন্ট পুনরুদ্ধার",

        "Scam & Phishing":
            "প্রতারণা ও ফিশিং",

        "Phone Security":
            "ফোন নিরাপত্তা",

        "Online & Financial Fraud":
            "অনলাইন ও আর্থিক প্রতারণা",

        "Suspicious Activity":
            "সন্দেহজনক কার্যকলাপ",

        "Emergency Help":
            "জরুরি সহায়তা",

        "Get Help →":
            "সাহায্য নিন →",

        "Women's Digital Safety":
            "নারীদের ডিজিটাল নিরাপত্তা",

        "A dedicated guide for online harassment, stalking, blackmail, unwanted contact, fake profiles and intimate-image threats.":
            "অনলাইন হয়রানি, স্টকিং, ব্ল্যাকমেইল, অনাকাঙ্ক্ষিত যোগাযোগ, ভুয়া প্রোফাইল এবং ব্যক্তিগত ছবি/ভিডিও নিয়ে হুমকির জন্য বিশেষ নির্দেশিকা।",

        "Repeated Calls / Harassment":
            "বারবার ফোন / হয়রানি",

        "Someone keeps calling, messaging or disturbing you.":
            "কেউ বারবার ফোন, মেসেজ বা অন্যভাবে বিরক্ত করছে।",

        "Photo Misuse":
            "ছবির অপব্যবহার",

        "Someone is using your photo without permission.":
            "কেউ আপনার অনুমতি ছাড়া আপনার ছবি ব্যবহার করছে।",

        "Fake Profile":
            "ভুয়া প্রোফাইল",

        "Someone created a fake Facebook/Instagram profile.":
            "কেউ আপনার নামে ভুয়া Facebook/Instagram প্রোফাইল তৈরি করেছে।",

        "Blackmail":
            "ব্ল্যাকমেইল",

        "Someone is threatening you or demanding money.":
            "কেউ আপনাকে হুমকি দিচ্ছে বা টাকা দাবি করছে।",

        "Private Photo / Video Threat":
            "ব্যক্তিগত ছবি / ভিডিও নিয়ে হুমকি",

        "Someone threatens to publish private content.":
            "কেউ আপনার ব্যক্তিগত ছবি বা ভিডিও প্রকাশ করার হুমকি দিচ্ছে।",

        "Online Stalking":
            "অনলাইন স্টকিং",

        "Someone repeatedly follows, monitors or contacts you.":
            "কেউ বারবার আপনাকে অনুসরণ, নজরদারি বা যোগাযোগ করছে।",

        "What Should I Do?":
            "আমি কী করব?",

        "Never Share These":
            "এগুলো কখনো শেয়ার করবেন না",

        "CyberCare Tools":
            "CyberCare টুলস",

        "These tools work locally in your browser where possible.":
            "সম্ভব হলে এই টুলগুলো আপনার ব্রাউজারেই স্থানীয়ভাবে কাজ করে।",

        "Scam Checker":
            "স্ক্যাম চেকার",

        "Password Checker":
            "পাসওয়ার্ড চেকার",

        "URL Safety Guide":
            "URL নিরাপত্তা নির্দেশিকা",

        "Privacy Checklist":
            "প্রাইভেসি চেকলিস্ট",

        "Evidence Checklist":
            "প্রমাণ সংরক্ষণ চেকলিস্ট",

        "Cyber Safety Score":
            "সাইবার নিরাপত্তা স্কোর",

        "Open Tool":
            "টুল খুলুন",

        "Start Test":
            "পরীক্ষা শুরু করুন",

        "Learn Cybersecurity":
            "সাইবার নিরাপত্তা শিখুন",

        "Learn simple habits that protect your digital life.":
            "আপনার ডিজিটাল জীবন নিরাপদ রাখার সহজ অভ্যাসগুলো শিখুন।",

        "Password Safety":
            "পাসওয়ার্ড নিরাপত্তা",

        "Two-Factor Authentication":
            "টু-ফ্যাক্টর অথেন্টিকেশন",

        "Phishing":
            "ফিশিং",

        "Privacy":
            "গোপনীয়তা",

        "Financial Safety":
            "আর্থিক নিরাপত্তা",

        "India Cyber Help":
            "ভারতে সাইবার সহায়তা",

        "About CyberCare":
            "CyberCare সম্পর্কে",

        "Emergency Cyber Response":
            "জরুরি সাইবার প্রতিক্রিয়া",

        "If something is happening right now, start here.":
            "এই মুহূর্তে কোনো সমস্যা হলে এখান থেকে শুরু করুন।",

        "Account Compromised":
            "অ্যাকাউন্ট হ্যাক / আক্রান্ত",

        "Money at Risk":
            "টাকা ঝুঁকিতে",

        "Blackmail / Threat":
            "ব্ল্যাকমেইল / হুমকি",

        "Phone Compromised":
            "ফোন আক্রান্ত",

        "Stay Safe. Stay Secure.":
            "নিরাপদ থাকুন। সুরক্ষিত থাকুন।",

        "Got it":
            "বুঝেছি"

    };


    function translatePageToBangla() {

        document
            .querySelectorAll(
                "h1,h2,h3,h4,p,button,strong,small,div,span,a"
            )
            .forEach(element => {

                if (element.children.length > 0) return;

                const original =
                    element.textContent.trim();

                if (translations[original]) {
                    element.textContent =
                        translations[original];
                }

            });

    }


    function resetLanguage() {
        location.reload();
    }


    function applyLanguage() {

        if (languageText) {
            languageText.textContent =
                bengali ? "বাংলা" : "EN";
        }

        if (bengali) {
            translatePageToBangla();
        }

    }


    applyLanguage();

    languageBtn?.addEventListener("click", () => {

        bengali = !bengali;

        localStorage.setItem(
            "cybercare-language",
            bengali ? "bn" : "en"
        );

        if (bengali) {
            location.reload();
            setTimeout(applyLanguage, 100);
        } else {
            resetLanguage();
        }

    });


    // ==========================================
    // PROBLEM SEARCH
    // ==========================================

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

            title: "Account Recovery",

            text:
                "Secure your account, change your password, enable 2FA and use the official recovery process."
        },

        {
            keywords: [
                "blackmail",
                "threat",
                "private photo",
                "private video",
                "intimate",
                "leak"
            ],

            title: "Blackmail / Private Content Threat",

            text:
                "Do not pay or send more content. Save evidence, block the person and report through the platform and appropriate authorities."
        },

        {
            keywords: [
                "call",
                "calling",
                "harassment",
                "message",
                "messaging",
                "disturb",
                "bother"
            ],

            title: "Repeated Calls / Harassment",

            text:
                "Save call logs and messages, block the person and use platform/reporting tools."
        },

        {
            keywords: [
                "photo",
                "picture",
                "image"
            ],

            title: "Photo Misuse",

            text:
                "Save evidence and report the content/profile to the platform."
        },

        {
            keywords: [
                "fake profile",
                "fake account",
                "fake id"
            ],

            title: "Fake Profile",

            text:
                "Collect the profile URL and screenshots, then report the account."
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

            title: "Online & Financial Fraud",

            text:
                "If money has been lost in India, contact your bank/payment provider immediately and use the official cybercrime reporting channel."
        },

        {
            keywords: [
                "phishing",
                "link",
                "otp",
                "fake website",
                "login link"
            ],

            title: "Scam & Phishing",

            text:
                "Do not open suspicious links or share OTPs, passwords or payment credentials."
        },

        {
            keywords: [
                "phone",
                "spyware",
                "unknown app",
                "malware",
                "virus"
            ],

            title: "Phone Security",

            text:
                "Check installed apps, permissions, updates and account security."
        }

    ];


    function searchProblems(query) {

        const lowerQuery =
            query.toLowerCase().trim();

        return problems.filter(problem =>

            problem.keywords.some(keyword =>
                lowerQuery.includes(keyword)
            )

        );

    }


    function displaySearchResults(matches) {

        if (!searchResults) return;

        searchResults.innerHTML = "";

        if (matches.length === 0) {

            searchResults.innerHTML = `
                <div class="search-result">
                    <h3>No exact guide found</h3>
                    <p>
                        Try words like blackmail, hacked,
                        UPI fraud, fake profile,
                        harassment or phishing.
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

                <button class="result-help" type="button">
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

    }


    problemSearch?.addEventListener("input", () => {

        const query =
            problemSearch.value;

        if (!query.trim()) {

            searchResults.innerHTML = "";

            return;
        }

        const matches =
            searchProblems(query);

        displaySearchResults(matches);

    });


    // ==========================================
    // SERVICE BUTTONS
    // ==========================================

    document
        .querySelectorAll(".help-btn")
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
                <ol>
                    <li>Secure your email account first.</li>
                    <li>Change the affected account password.</li>
                    <li>Enable two-factor authentication.</li>
                    <li>Sign out unknown devices/sessions.</li>
                    <li>Use only the platform's official recovery process.</li>
                </ol>
            `,

            "Scam & Phishing": `
                <ol>
                    <li>Do not click suspicious links.</li>
                    <li>Never share OTP or password.</li>
                    <li>Do not enter banking details on unknown websites.</li>
                    <li>Save the suspicious message as evidence.</li>
                    <li>Report the message/account.</li>
                </ol>
            `,

            "Phone Security": `
                <ol>
                    <li>Check installed applications.</li>
                    <li>Review app permissions.</li>
                    <li>Check accessibility and device-admin access.</li>
                    <li>Update your phone.</li>
                    <li>Remove suspicious applications.</li>
                </ol>
            `,

            "Online Fraud": `
                <ol>
                    <li>Contact your bank/payment provider immediately.</li>
                    <li>Secure your banking/payment account.</li>
                    <li>Save transaction IDs and screenshots.</li>
                    <li>In India, report financial cyber fraud through the official cybercrime channel.</li>
                </ol>
            `,

            "Suspicious Activity": `
                <ol>
                    <li>Review recent login activity.</li>
                    <li>Change your password.</li>
                    <li>Enable 2FA.</li>
                    <li>Sign out unknown sessions.</li>
                    <li>Review connected apps.</li>
                </ol>
            `,

            "Emergency Help": `
                <ol>
                    <li>Secure the affected account/device first.</li>
                    <li>Preserve evidence.</li>
                    <li>Contact the relevant official service.</li>
                    <li>If money is at risk, contact your bank immediately.</li>
                </ol>
            `

        };


        showGuide(
            service,
            guides[service] ||
            "Follow the official recovery or reporting process and preserve evidence."
        );

    }


    // ==========================================
    // WOMEN'S DIGITAL SAFETY
    // ==========================================

    document
        .querySelectorAll(".women-btn")
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
                        <li>Do not engage in unnecessary arguments.</li>
                        <li>Save screenshots, call logs and messages.</li>
                        <li>Block the person if appropriate.</li>
                        <li>Use the platform's report feature.</li>
                        <li>If there are threats or immediate danger, seek local emergency help.</li>
                    </ol>
                `

            },


            photo: {

                title: "📸 Photo Misuse",

                text: `
                    <ol>
                        <li>Take screenshots of the post/profile.</li>
                        <li>Save the profile URL.</li>
                        <li>Report the content to the platform.</li>
                        <li>Do not pay anyone promising guaranteed removal.</li>
                        <li>Preserve evidence before blocking.</li>
                    </ol>
                `

            },


            fakeprofile: {

                title: "🎭 Fake Profile",

                text: `
                    <ol>
                        <li>Take screenshots of the fake profile.</li>
                        <li>Copy the profile URL.</li>
                        <li>Report the fake account.</li>
                        <li>Ask trusted people not to interact with it.</li>
                        <li>Keep evidence of impersonation.</li>
                    </ol>
                `

            },


            blackmail: {

                title: "⚠️ Blackmail",

                text: `
                    <ol>
                        <li>Do not pay the blackmailer.</li>
                        <li>Do not send additional photos or information.</li>
                        <li>Save all messages and evidence.</li>
                        <li>Block/report the account when appropriate.</li>
                        <li>Tell a trusted person.</li>
                        <li>Seek appropriate official help if threats continue.</li>
                    </ol>
                `

            },


            private: {

                title: "🔒 Private Photo / Video Threat",

                text: `
                    <ol>
                        <li>Do not send more content.</li>
                        <li>Do not pay.</li>
                        <li>Save screenshots, usernames and URLs.</li>
                        <li>Report the account/content to the platform.</li>
                        <li>If content is published, preserve the URLs and evidence.</li>
                        <li>Seek official help if there is a threat or distribution.</li>
                    </ol>
                `

            },


            stalking: {

                title: "👁️ Online Stalking",

                text: `
                    <ol>
                        <li>Review privacy and location settings.</li>
                        <li>Change passwords and enable 2FA.</li>
                        <li>Review active sessions and connected devices.</li>
                        <li>Save evidence of repeated contact.</li>
                        <li>Block/report the account when appropriate.</li>
                        <li>If you feel physically unsafe, seek immediate local help.</li>
                    </ol>
                `

            }

        };


        const guide = guides[type];

        if (!guide) return;

        showGuide(
            guide.title,
            guide.text
        );

    }


    // ==========================================
    // CYBERCARE TOOLS
    // ==========================================

    document
        .querySelectorAll(".tool-btn")
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
                    <p>Check these warning signs:</p>

                    <ul>
                        <li>❌ Urgent pressure</li>
                        <li>❌ Requests for OTP/password</li>
                        <li>❌ Suspicious links</li>
                        <li>❌ Requests for advance payment</li>
                        <li>❌ Guaranteed profit/job/reward claims</li>
                    </ul>
                `

            },


            password: {

                title: "🔐 Password Checker",

                text: `
                    <p>
                        Use a long, unique password or passphrase.
                    </p>

                    <ul>
                        <li>Use different passwords for important accounts.</li>
                        <li>Avoid names and birthdays.</li>
                        <li>Never reuse passwords.</li>
                        <li>Never share your password.</li>
                    </ul>
                `

            },


            url: {

                title: "🔗 URL Safety Guide",

                text: `
                    <ul>
                        <li>Check the domain carefully.</li>
                        <li>Look for spelling mistakes.</li>
                        <li>Be careful with shortened URLs.</li>
                        <li>Do not enter passwords on suspicious pages.</li>
                        <li>Check whether the website is the official service.</li>
                    </ul>
                `

            },


            privacy: {

                title: "📱 Privacy Checklist",

                text: `
                    <ul>
                        <li>Review app permissions.</li>
                        <li>Review location sharing.</li>
                        <li>Check account privacy settings.</li>
                        <li>Review connected devices.</li>
                        <li>Review active login sessions.</li>
                    </ul>
                `

            },


            evidence: {

                title: "🧾 Evidence Checklist",

                text: `
                    <ul>
                        <li>Save screenshots.</li>
                        <li>Save usernames.</li>
                        <li>Save profile URLs.</li>
                        <li>Record dates and times.</li>
                        <li>Save transaction IDs.</li>
                        <li>Keep original evidence unchanged.</li>
                    </ul>
                `

            },


            score: {

                title: "🛡️ Cyber Safety Score",

                text: `
                    <p>Ask yourself:</p>

                    <ul>
                        <li>✔ Do I use unique passwords?</li>
                        <li>✔ Is 2FA enabled?</li>
                        <li>✔ Do I avoid suspicious links?</li>
                        <li>✔ Do I never share OTPs?</li>
                        <li>✔ Do I review account sessions?</li>
                        <li>✔ Do I keep my phone updated?</li>
                    </ul>
                `

            }

        };


        const selected = tools[tool];

        if (!selected) return;

        showGuide(
            selected.title,
            selected.text
        );

    }


    // ==========================================
    // LEARN CYBERSECURITY
    // ==========================================

    document
        .querySelectorAll(".learn-card")
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
                <p>
                    Use long and unique passwords.
                    Never reuse the same password for important accounts.
                </p>
            `,

            "2fa": `
                <p>
                    Two-factor authentication adds another layer
                    of security beyond your password.
                </p>
            `,

            phishing: `
                <p>
                    Phishing uses fake messages or websites
                    to trick you into giving sensitive information.
                </p>
            `,

            privacy: `
                <p>
                    Review who can see your personal information,
                    location and posts.
                </p>
            `,

            phone: `
                <p>
                    Keep your phone updated and regularly review
                    installed apps and permissions.
                </p>
            `,

            financial: `
                <p>
                    Never share OTPs, UPI PINs or banking credentials.
                    Verify payment requests before approving them.
                </p>
            `

        };


        showGuide(
            "🎓 Learn Cybersecurity",
            content[topic] ||
            "<p>Learn safe digital habits.</p>"
        );

    }


    // ==========================================
    // EMERGENCY RESPONSE
    // ==========================================

    document
        .querySelectorAll("[data-emergency]")
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
                        <li>Change the password immediately.</li>
                        <li>Secure your email account.</li>
                        <li>Enable 2FA.</li>
                        <li>Sign out unknown sessions.</li>
                        <li>Check recovery email and phone number.</li>
                    </ol>
                `

            },


            money: {

                title: "💳 Money at Risk",

                text: `
                    <ol>
                        <li>Contact your bank/payment provider immediately.</li>
                        <li>Secure your banking/payment account.</li>
                        <li>Save transaction details.</li>
                        <li>In India, use the official cybercrime reporting channel for financial cyber fraud.</li>
                    </ol>
                `

            },


            blackmail: {

                title: "⚠️ Blackmail / Threat",

                text: `
                    <ol>
                        <li>Do not pay.</li>
                        <li>Do not send additional content.</li>
                        <li>Save screenshots and messages.</li>
                        <li>Block/report when appropriate.</li>
                        <li>Tell a trusted person.</li>
                        <li>Seek appropriate official help.</li>
                    </ol>
                `

            },


            phone: {

                title: "📱 Phone Compromised",

                text: `
                    <ol>
                        <li>Review unknown applications.</li>
                        <li>Review permissions.</li>
                        <li>Check accessibility/device-admin access.</li>
                        <li>Update the device.</li>
                        <li>Secure important accounts.</li>
                    </ol>
                `

            }

        };


        const guide = guides[type];

        if (!guide) return;

        showGuide(
            guide.title,
            guide.text
        );

    }


    // ==========================================
    // GUIDE MODAL
    // ==========================================

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


    // ==========================================
    // ESC KEY
    // ==========================================

    document.addEventListener("keydown", event => {

        if (event.key !== "Escape") return;

        closeSideMenu();

        const modal =
            document.getElementById(
                "cybercareModal"
            );

        if (modal) {
            modal.remove();
        }

    });


    // ==========================================
    // FINISH
    // ==========================================

    console.log(
        "🛡️ CyberCare loaded successfully."
    );

});
