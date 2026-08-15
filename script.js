document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       CYBERCARE - FINAL FIXED SCRIPT
       Compatible with the provided index.html
       ========================================================= */


    /* =========================================================
       1. BASIC ELEMENTS
       ========================================================= */

    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");
    const closeMenu = document.getElementById("closeMenu");
    const menuOverlay = document.getElementById("menuOverlay");

    const themeBtn = document.getElementById("themeBtn");

    const languageBtn = document.getElementById("languageBtn");
    const languageText = document.getElementById("languageText");

    const emergencyBtn = document.getElementById("emergencyBtn");
    const quickHelpBtn = document.getElementById("quickHelpBtn");

    const problemSearch = document.getElementById("problemSearch");
    const searchResults = document.getElementById("searchResults");


    /* =========================================================
       2. SAFE HTML ESCAPE
       ========================================================= */

    function escapeHTML(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    /* =========================================================
       3. SIDE MENU
       ========================================================= */

    function openMenu() {
        sideMenu?.classList.add("active");
        menuOverlay?.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeSideMenu() {
        sideMenu?.classList.remove("active");
        menuOverlay?.classList.remove("active");
        document.body.style.overflow = "";
    }

    menuBtn?.addEventListener("click", openMenu);
    closeMenu?.addEventListener("click", closeSideMenu);
    menuOverlay?.addEventListener("click", closeSideMenu);


    /* =========================================================
       4. DARK / LIGHT MODE
       ========================================================= */

    let savedTheme =
        localStorage.getItem("cybercare-theme") || "light";

    function applyTheme() {

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");

            if (themeBtn)
                themeBtn.textContent = "☀️";

        } else {
            document.body.classList.remove("dark-mode");

            if (themeBtn)
                themeBtn.textContent = "🌙";
        }
    }

    applyTheme();

    themeBtn?.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        savedTheme =
            document.body.classList.contains("dark-mode")
                ? "dark"
                : "light";

        localStorage.setItem(
            "cybercare-theme",
            savedTheme
        );

        applyTheme();
    });


    /* =========================================================
       5. LANGUAGE
       ========================================================= */

    const translations = {

        EN: {
            logo: "CyberCare",

            heroTitle:
                "Protecting People. Securing Digital Lives.",

            heroText:
                "Simple, practical and step-by-step guidance for hacking, scams, harassment, blackmail, privacy, financial fraud and digital threats.",

            emergency:
                "🚨 I Need Help Now",

            quickHelp:
                "🔎 Find My Problem",

            searchTitle:
                "🔎 What happened?",

            searchText:
                "Search for your problem and CyberCare will show the relevant safety guide.",

            searchPlaceholder:
                "Example: blackmail, Instagram hacked, UPI fraud...",

            services:
                "🛡️ How Can We Help You?",

            servicesText:
                "Choose a situation and get step-by-step guidance.",

            account:
                "Account Recovery",

            scam:
                "Scam & Phishing",

            phone:
                "Phone Security",

            fraud:
                "Online & Financial Fraud",

            suspicious:
                "Suspicious Activity",

            emergencyHelp:
                "Emergency Help",

            getHelp:
                "Get Help →",

            women:
                "Women's Digital Safety",

            tools:
                "🛠️ CyberCare Tools",

            learn:
                "🎓 Learn Cybersecurity",

            india:
                "India Cyber Help",

            about:
                "🛡️ About CyberCare"
        },

        BN: {
            logo:
                "সাইবারকেয়ার",

            heroTitle:
                "মানুষকে সুরক্ষিত রাখা। ডিজিটাল জীবনকে নিরাপদ রাখা।",

            heroText:
                "হ্যাকিং, স্ক্যাম, হয়রানি, ব্ল্যাকমেইল, গোপনীয়তা, আর্থিক প্রতারণা ও অন্যান্য ডিজিটাল সমস্যায় সহজ ধাপে ধাপে নিরাপত্তা সহায়তা।",

            emergency:
                "🚨 এখনই সাহায্য চাই",

            quickHelp:
                "🔎 আমার সমস্যা খুঁজুন",

            searchTitle:
                "🔎 কী হয়েছে?",

            searchText:
                "আপনার সমস্যাটি লিখুন এবং CyberCare প্রাসঙ্গিক নিরাপত্তা নির্দেশনা দেখাবে।",

            searchPlaceholder:
                "যেমন: ব্ল্যাকমেইল, Instagram hacked, UPI fraud...",

            services:
                "🛡️ আমরা কীভাবে সাহায্য করতে পারি?",

            servicesText:
                "আপনার সমস্যাটি নির্বাচন করুন এবং ধাপে ধাপে নির্দেশনা নিন।",

            account:
                "অ্যাকাউন্ট পুনরুদ্ধার",

            scam:
                "স্ক্যাম ও ফিশিং",

            phone:
                "ফোন নিরাপত্তা",

            fraud:
                "অনলাইন ও আর্থিক প্রতারণা",

            suspicious:
                "সন্দেহজনক কার্যকলাপ",

            emergencyHelp:
                "জরুরি সাহায্য",

            getHelp:
                "সাহায্য নিন →",

            women:
                "নারীদের ডিজিটাল নিরাপত্তা",

            tools:
                "🛠️ সাইবারকেয়ার টুলস",

            learn:
                "🎓 সাইবার নিরাপত্তা শিখুন",

            india:
                "ভারতের সাইবার সহায়তা",

            about:
                "🛡️ সাইবারকেয়ার সম্পর্কে"
        }
    };


    let currentLanguage =
        localStorage.getItem("cybercare-language") || "EN";


    function applyLanguage() {

        const t = translations[currentLanguage];

        if (!t) return;

        if (languageText)
            languageText.textContent = currentLanguage;

        const logo = document.getElementById("logoText");
        if (logo)
            logo.textContent = t.logo;

        const heroTitle =
            document.getElementById("heroTitle");

        if (heroTitle)
            heroTitle.textContent = t.heroTitle;

        const heroText =
            document.getElementById("heroText");

        if (heroText)
            heroText.textContent = t.heroText;

        if (emergencyBtn)
            emergencyBtn.textContent = t.emergency;

        if (quickHelpBtn)
            quickHelpBtn.textContent = t.quickHelp;


        const searchTitle =
            document.querySelector(".search-section h2");

        if (searchTitle)
            searchTitle.textContent = t.searchTitle;

        const searchText =
            document.querySelector(".search-section p");

        if (searchText)
            searchText.textContent = t.searchText;

        if (problemSearch)
            problemSearch.placeholder =
                t.searchPlaceholder;


        const servicesTitle =
            document.querySelector(".services > h2");

        if (servicesTitle)
            servicesTitle.textContent = t.services;


        const servicesText =
            document.querySelector(".services .section-text");

        if (servicesText)
            servicesText.textContent = t.servicesText;


        const cards =
            document.querySelectorAll(".service-card");

        if (cards.length >= 6) {

            cards[0].querySelector("h3").textContent =
                t.account;

            cards[1].querySelector("h3").textContent =
                t.scam;

            cards[2].querySelector("h3").textContent =
                t.phone;

            cards[3].querySelector("h3").textContent =
                t.fraud;

            cards[4].querySelector("h3").textContent =
                t.suspicious;

            cards[5].querySelector("h3").textContent =
                t.emergencyHelp;

            cards.forEach(card => {

                const button =
                    card.querySelector(".help-btn");

                if (button)
                    button.textContent = t.getHelp;
            });
        }


        const womenTitle =
            document.querySelector(".women-section > h2");

        if (womenTitle)
            womenTitle.textContent = t.women;


        const toolsTitle =
            document.querySelector(".tools > h2");

        if (toolsTitle)
            toolsTitle.textContent = t.tools;


        const learnTitle =
            document.querySelector(".learn-section > h2");

        if (learnTitle)
            learnTitle.textContent = t.learn;


        const indiaTitle =
            document.querySelector(".india-section > h2");

        if (indiaTitle)
            indiaTitle.textContent = t.india;


        const aboutTitle =
            document.querySelector(".about-section > h2");

        if (aboutTitle)
            aboutTitle.textContent = t.about;
    }


    applyLanguage();


    languageBtn?.addEventListener("click", () => {

        currentLanguage =
            currentLanguage === "EN"
                ? "BN"
                : "EN";

        localStorage.setItem(
            "cybercare-language",
            currentLanguage
        );

        applyLanguage();
    });


    /* =========================================================
       6. OFFICIAL LINKS
       ========================================================= */

    const officialLinks = {

        facebook:
            "https://www.facebook.com/hacked",

        instagram:
            "https://www.instagram.com/hacked/",

        google:
            "https://accounts.google.com/signin/recovery",

        whatsapp:
            "https://www.whatsapp.com/contact/",

        cybercrimeIndia:
            "https://www.cybercrime.gov.in/",

        cybercrimeHelpline:
            "1930"
    };


    /* =========================================================
       7. MAIN HELP DATABASE
       ========================================================= */

    const helpData = {

        "Account Recovery": {

            title: "🔐 Account Recovery",

            description:
                "Select the account problem you are facing.",

            situations: [

                {
                    name: "📘 Facebook Account Hacked",

                    title: "Facebook Account Recovery",

                    official: officialLinks.facebook,

                    steps: [
                        "Do not panic and do not pay anyone promising instant recovery.",
                        "Open Facebook's official hacked-account recovery page.",
                        "Follow Facebook's identity and security verification.",
                        "Change your password immediately after recovery.",
                        "Check the email address and phone number connected to the account.",
                        "Remove anything you do not recognise.",
                        "Review logged-in devices and log out unknown devices.",
                        "Turn on two-factor authentication.",
                        "Check recent posts, messages and profile changes.",
                        "Secure the email account connected to Facebook."
                    ],

                    dont: [
                        "Never share your password.",
                        "Never share OTPs or recovery codes.",
                        "Do not pay unofficial recovery agents.",
                        "Do not use random recovery websites."
                    ]
                },

                {
                    name: "📸 Instagram Account Hacked",

                    title: "Instagram Account Recovery",

                    official: officialLinks.instagram,

                    steps: [
                        "Open Instagram's official hacked-account recovery page.",
                        "Check your original email for security messages.",
                        "Change your password if you still have access.",
                        "Check Login Activity.",
                        "Remove unknown devices.",
                        "Check your email and phone number.",
                        "Enable two-factor authentication.",
                        "Review profile information and messages.",
                        "Secure your email account."
                    ],

                    dont: [
                        "Never send verification codes to another person.",
                        "Do not pay unofficial recovery agents.",
                        "Do not give your password to anyone."
                    ]
                },

                {
                    name: "💬 WhatsApp Account Hacked",

                    title: "WhatsApp Account Recovery",

                    official: officialLinks.whatsapp,

                    steps: [
                        "Open the official WhatsApp application.",
                        "Register your phone number again.",
                        "Enter the verification code sent to your phone.",
                        "Open Settings → Linked Devices.",
                        "Log out devices you do not recognise.",
                        "Enable WhatsApp two-step verification.",
                        "Check your profile and conversations for suspicious activity."
                    ],

                    dont: [
                        "Never share your WhatsApp verification code.",
                        "Never share your two-step verification PIN.",
                        "Do not trust anyone asking for your WhatsApp code."
                    ]
                },

                {
                    name: "▶️ Google / YouTube Account Hacked",

                    title: "Google Account Recovery",

                    official: officialLinks.google,

                    steps: [
                        "Open Google's official account recovery page.",
                        "Complete Google's verification process.",
                        "Change your password after recovery.",
                        "Review recent security activity.",
                        "Review your devices.",
                        "Remove unknown devices.",
                        "Check recovery email and phone.",
                        "Enable 2-Step Verification.",
                        "Review YouTube channel information if affected."
                    ],

                    dont: [
                        "Never give recovery codes to another person.",
                        "Do not pay unofficial recovery services."
                    ]
                },

                {
                    name: "🔑 I Cannot Log In",

                    title: "Cannot Access My Account",

                    steps: [
                        "Use only the official recovery page of the service.",
                        "Try your recovery email or phone number.",
                        "Complete identity verification.",
                        "Secure your email account if necessary.",
                        "Change your password after recovery.",
                        "Sign out unknown devices.",
                        "Enable two-factor authentication."
                    ],

                    dont: [
                        "Do not use random recovery websites.",
                        "Never share recovery codes."
                    ]
                }
            ]
        },


        "Scam & Phishing": {

            title: "🎣 Scam & Phishing",

            description:
                "Handle suspicious messages, links and fake websites.",

            situations: [

                {
                    name: "💬 Suspicious WhatsApp Link",

                    title: "Suspicious WhatsApp Link",

                    steps: [
                        "Do not click the link again.",
                        "Do not enter your password, OTP, PIN or banking information.",
                        "Take a screenshot of the message.",
                        "Check who sent it.",
                        "Block and report the sender if necessary.",
                        "If you entered a password, change it immediately.",
                        "If financial information was entered, contact your bank immediately."
                    ],

                    dont: [
                        "Do not forward the suspicious link.",
                        "Do not download files from it."
                    ]
                },

                {
                    name: "🔗 I Clicked a Suspicious Link",

                    title: "Suspicious Link Clicked",

                    steps: [
                        "Close the website.",
                        "Do not enter additional information.",
                        "If you entered a password, change it through the official website.",
                        "Enable 2FA.",
                        "If a file was downloaded, do not open it.",
                        "Delete suspicious downloaded files.",
                        "Update your device.",
                        "Contact your bank if financial information was entered."
                    ],

                    dont: [
                        "Do not return to the suspicious website.",
                        "Do not install software recommended by the page."
                    ]
                },

                {
                    name: "📩 Phishing Message",

                    title: "Phishing Message",

                    steps: [
                        "Check the sender carefully.",
                        "Look for urgency or threats.",
                        "Do not click unexpected links.",
                        "Open the company's official app or website manually.",
                        "Verify the request there.",
                        "Report and block the sender."
                    ],

                    dont: [
                        "Never share OTPs.",
                        "Never share passwords.",
                        "Never share recovery codes."
                    ]
                },

                {
                    name: "🔑 I Shared an OTP",

                    title: "OTP Was Shared",

                    steps: [
                        "Identify which account or service the OTP belonged to.",
                        "Change that account password.",
                        "Sign out unknown devices.",
                        "Enable 2FA.",
                        "If banking/payment was involved, contact the bank immediately.",
                        "Monitor the account and transactions."
                    ],

                    dont: [
                        "Do not share another OTP.",
                        "Do not trust anyone asking for another verification code."
                    ]
                }
            ]
        },


        "Phone Security": {

            title: "📱 Phone Security",

            description:
                "Check apps, permissions and privacy settings.",

            situations: [

                {
                    name: "📦 Unknown App",

                    title: "Unknown Application",

                    steps: [
                        "Open your phone's application list.",
                        "Find the application you do not recognise.",
                        "Check when it was installed.",
                        "Review its permissions.",
                        "Uninstall suspicious applications you do not need.",
                        "Update your operating system.",
                        "Run the phone's built-in security scan if available."
                    ],

                    dont: [
                        "Do not install antivirus applications from random pop-ups.",
                        "Do not give unknown apps unnecessary permissions."
                    ]
                },

                {
                    name: "🎤 Camera / Microphone",

                    title: "Camera & Microphone Security",

                    steps: [
                        "Open Settings → Privacy/Security.",
                        "Review Camera permissions.",
                        "Remove unnecessary access.",
                        "Review Microphone permissions.",
                        "Uninstall suspicious applications.",
                        "Update the operating system."
                    ],

                    dont: [
                        "Do not allow unknown apps to access your camera or microphone."
                    ]
                },

                {
                    name: "📍 Location Tracking",

                    title: "Location Privacy",

                    steps: [
                        "Open Settings → Location.",
                        "Review applications with location access.",
                        "Change unnecessary access to Deny or Ask every time.",
                        "Review location sharing in social applications.",
                        "Remove access from apps you do not trust."
                    ],

                    dont: [
                        "Do not leave continuous location access enabled unnecessarily."
                    ]
                }
            ]
        },


        "Online Fraud": {

            title: "💳 Online & Financial Fraud",

            description:
                "Take immediate action when money or financial information is at risk.",

            situations: [

                {
                    name: "💸 I Lost Money",

                    title: "Possible Financial Fraud",

                    steps: [
                        "Contact your bank or payment provider immediately.",
                        "Tell them the transaction may be fraudulent.",
                        "Save the transaction ID/reference number.",
                        "Take screenshots of messages and payment records.",
                        "Secure the account used for payment.",
                        "Change compromised passwords.",
                        "Monitor your account.",
                        "In India, report suspected financial cyber fraud through the official cybercrime system as quickly as possible."
                    ],

                    dont: [
                        "Do not send additional money.",
                        "Do not delete evidence.",
                        "Do not trust recovery scammers."
                    ]
                },

                {
                    name: "🏦 Banking Information Shared",

                    title: "Banking Information Exposed",

                    steps: [
                        "Contact your bank using its official app, website or number.",
                        "Tell the bank what information was exposed.",
                        "Follow the bank's security instructions.",
                        "Monitor transactions.",
                        "Change affected credentials when advised.",
                        "Secure your email account."
                    ],

                    dont: [
                        "Never share another OTP.",
                        "Never share your PIN.",
                        "Do not trust unsolicited callers."
                    ]
                },

                {
                    name: "📲 UPI Fraud",

                    title: "UPI Fraud",

                    steps: [
                        "Contact your bank/payment provider immediately.",
                        "Save the transaction ID.",
                        "Take screenshots.",
                        "Report the transaction through the official app.",
                        "Report suspected cyber financial fraud through the official Indian cybercrime channel.",
                        "Secure your UPI-linked accounts.",
                        "Monitor your bank account."
                    ],

                    dont: [
                        "Never share your UPI PIN.",
                        "Receiving money does not require entering your UPI PIN.",
                        "Never approve an unknown payment request."
                    ]
                }
            ]
        },


        "Suspicious Activity": {

            title: "🕵️ Suspicious Activity",

            description:
                "Investigate unusual logins, malware and fake login pages.",

            situations: [

                {
                    name: "🚨 Unknown Login",

                    title: "Someone Logged Into My Account",

                    steps: [
                        "Change your password immediately.",
                        "Sign out unknown devices.",
                        "Enable 2FA.",
                        "Check recent security activity.",
                        "Check recovery email and phone number.",
                        "Secure your email account."
                    ],

                    dont: [
                        "Do not share your password."
                    ]
                },

                {
                    name: "🦠 Possible Malware",

                    title: "Possible Malware",

                    steps: [
                        "If active compromise is suspected, disconnect the device from the internet.",
                        "Check recently installed applications.",
                        "Remove suspicious applications.",
                        "Update the operating system.",
                        "Run a trusted security scan.",
                        "Change important passwords using a trusted device."
                    ],

                    dont: [
                        "Do not install antivirus software from random pop-ups."
                    ]
                },

                {
                    name: "🎭 Fake Login Page",

                    title: "Fake Login Page",

                    steps: [
                        "Close the page immediately.",
                        "Do not enter credentials.",
                        "If you entered a password, change it through the real official website/app.",
                        "Enable 2FA.",
                        "Review login activity.",
                        "Save a screenshot if reporting is necessary."
                    ],

                    dont: [
                        "Do not use the fake login page again."
                    ]
                }
            ]
        },


        "Emergency Help": {

            title: "🚨 Emergency Cyber Help",

            description:
                "Immediate actions for urgent cyber incidents.",

            situations: [

                {
                    name: "🔐 Account Actively Compromised",

                    title: "Active Account Compromise",

                    steps: [
                        "Secure your email account first if it may be compromised.",
                        "Change the affected account password.",
                        "Sign out unknown devices.",
                        "Enable 2FA.",
                        "Check recovery information.",
                        "Save screenshots, emails and other evidence.",
                        "Use only the affected service's official recovery/support channel."
                    ],

                    dont: [
                        "Do not communicate unnecessarily with the suspected attacker.",
                        "Never share OTPs or recovery codes."
                    ]
                },

                {
                    name: "💳 Money Is at Risk",

                    title: "Financial Emergency",

                    steps: [
                        "Contact your bank/payment provider immediately.",
                        "Ask them to secure the account or transaction.",
                        "Save transaction details.",
                        "Secure your email account.",
                        "Change compromised passwords.",
                        "Report the incident through the appropriate official channel.",
                        "In India, report suspected cyber financial fraud as quickly as possible."
                    ],

                    dont: [
                        "Do not send additional money.",
                        "Do not trust anyone promising guaranteed money recovery."
                    ]
                }
            ]
        }
    };


    /* =========================================================
       8. WOMEN'S DIGITAL SAFETY
       ========================================================= */

    const womenHelp = {

        harassment: {

            title: "📞 Repeated Calls / Harassment",

            description:
                "Someone keeps calling, messaging or disturbing you.",

            steps: [
                "Do not panic or argue if it may increase the risk.",
                "Save screenshots of messages and call logs.",
                "Record the phone number, username, date and time.",
                "Do not share your address or live location.",
                "Block the number/account if you feel unsafe.",
                "Report the account or number through the relevant platform.",
                "Review your social-media privacy settings.",
                "Tell someone you trust.",
                "If there are serious threats to your physical safety, seek immediate real-world help."
            ],

            dont: [
                "Do not meet the person alone.",
                "Do not reveal your address.",
                "Do not share your live location.",
                "Do not delete evidence before saving it."
            ]
        },


        photo: {

            title: "📸 Photo Misuse",

            description:
                "Someone is using your photo without permission.",

            steps: [
                "Take screenshots of the profile, post or message.",
                "Save the profile URL and username.",
                "Record where and when your photo was used.",
                "Report the profile or content through the platform's official reporting system.",
                "Ask trusted friends not to interact with the fake account.",
                "Review your own account privacy settings.",
                "Remove unnecessary public personal information.",
                "Enable two-factor authentication.",
                "Tell someone you trust if the misuse continues.",
                "If the photo is being used for threats, blackmail or serious harassment, preserve all evidence and seek appropriate help."
            ],

            dont: [
                "Do not send the person more photos.",
                "Do not threaten them back.",
                "Do not pay someone promising guaranteed removal.",
                "Do not delete evidence before saving it."
            ]
        },


        fakeprofile: {

            title: "🎭 Fake Profile",

            description:
                "Someone created a fake Facebook or Instagram profile.",

            steps: [
                "Take screenshots of the fake profile.",
                "Copy the profile URL.",
                "Save the username and visible information.",
                "Report the profile as impersonation or fake account.",
                "Ask trusted contacts not to interact with it.",
                "Warn close contacts if the account is messaging them.",
                "Review your own privacy settings.",
                "Enable 2FA."
            ],

            dont: [
                "Do not give the fake account more information.",
                "Do not threaten the person behind it.",
                "Do not delete evidence."
            ]
        },


        blackmail: {

            title: "⚠️ Online Blackmail",

            description:
                "Someone is threatening you or demanding money.",

            steps: [
                "Stay calm and do not panic.",
                "Do not send money simply because someone threatens you.",
                "Do not send additional photos, videos or information.",
                "Take screenshots of the threats.",
                "Save usernames, phone numbers and profile URLs.",
                "Save payment requests and transaction information.",
                "Do not delete the conversation before preserving evidence.",
                "Block and report the account when it is safe to do so.",
                "Change passwords if the person may have account access.",
                "Enable 2FA.",
                "Tell someone you trust.",
                "If there are serious threats or suspected cybercrime in India, use the official cybercrime reporting channel."
            ],

            dont: [
                "Do not pay a blackmailer as a guarantee that they will stop.",
                "Do not send more material.",
                "Do not threaten the person back.",
                "Do not delete evidence."
            ]
        },


        private: {

            title: "🔒 Private Photo / Video Threat",

            description:
                "Someone threatens to publish private content.",

            steps: [
                "Do not send additional images or videos.",
                "Do not pay or negotiate alone.",
                "Preserve screenshots and account information.",
                "Save the profile URL and username.",
                "Report the account/content using the platform's reporting tools.",
                "Block the account after preserving evidence if appropriate.",
                "Secure your social-media and email accounts.",
                "Change passwords and enable 2FA.",
                "Tell someone you trust.",
                "If content has already been posted, report the specific content and account immediately.",
                "If there are serious threats, seek appropriate real-world help."
            ],

            dont: [
                "Do not send more content.",
                "Do not pay a stranger promising guaranteed removal.",
                "Do not share the material further."
            ]
        },


        stalking: {

            title: "👁️ Online Stalking",

            description:
                "Someone repeatedly follows, monitors or contacts you.",

            steps: [
                "Save evidence of repeated unwanted contact.",
                "Record usernames, phone numbers, profile URLs and dates.",
                "Review active sessions and logged-in devices.",
                "Change passwords if you suspect account access.",
                "Enable 2FA.",
                "Turn off unnecessary location sharing.",
                "Check whether your posts reveal your home, workplace or routine.",
                "Restrict or block the account.",
                "Tell a trusted person.",
                "If there is a credible threat to your physical safety, seek immediate real-world help."
            ],

            dont: [
                "Do not meet the person to sort it out.",
                "Do not reveal your routine or location.",
                "Do not give them additional personal information."
            ]
        }
    };


    /* =========================================================
       9. HELP MODAL
       ========================================================= */

    function closeExistingModals() {

        document
            .getElementById("cybercare-modal")
            ?.remove();

        document
            .getElementById("cybercare-tool-modal")
            ?.remove();
    }


    function openHelp(service) {

        const info = helpData[service];

        if (!info) return;

        closeExistingModals();

        const overlay =
            document.createElement("div");

        overlay.id = "cybercare-modal";

        overlay.style.cssText = `
            position:fixed;
            inset:0;
            background:rgba(0,0,0,.78);
            display:flex;
            align-items:center;
            justify-content:center;
            padding:15px;
            z-index:99999;
            overflow-y:auto;
        `;


        const modal =
            document.createElement("div");

        modal.style.cssText = `
            width:100%;
            max-width:760px;
            max-height:94vh;
            overflow-y:auto;
            background:#ffffff;
            color:#111827;
            border-radius:22px;
            padding:25px;
            position:relative;
            box-shadow:0 25px 70px rgba(0,0,0,.5);
            font-family:Arial,sans-serif;
        `;


        const buttons =
            info.situations.map(
                (item, index) => `
                    <button
                        class="cyber-situation"
                        data-index="${index}"
                        type="button"
                        style="
                            width:100%;
                            padding:15px;
                            margin:6px 0;
                            border:1px solid #dbe3ef;
                            border-radius:12px;
                            background:#f8fafc;
                            color:#111827;
                            font-size:15px;
                            text-align:left;
                            cursor:pointer;
                        "
                    >
                        ${escapeHTML(item.name)}
                    </button>
                `
            ).join("");


        modal.innerHTML = `

            <button
                class="closeCyberCare"
                type="button"
                aria-label="Close"
                style="
                    position:absolute;
                    top:12px;
                    right:14px;
                    width:38px;
                    height:38px;
                    border:none;
                    border-radius:10px;
                    background:#f1f5f9;
                    font-size:20px;
                    cursor:pointer;
                "
            >
                ✕
            </button>

            <div style="padding-right:45px;">

                <div style="
                    font-size:12px;
                    font-weight:bold;
                    color:#2563eb;
                    letter-spacing:1px;
                    margin-bottom:8px;
                ">
                    CYBERCARE HELP
                </div>

                <h2 style="margin:0 0 8px;">
                    ${escapeHTML(info.title)}
                </h2>

                <p style="color:#64748b;">
                    ${escapeHTML(info.description)}
                </p>

            </div>

            <h3 style="margin-top:25px;">
                👇 What happened?
            </h3>

            ${buttons}

            <div
                class="cybercareResult"
                style="margin-top:20px;"
            >
                <div style="
                    padding:20px;
                    background:#f8fafc;
                    border-radius:15px;
                    text-align:center;
                    color:#64748b;
                ">
                    🛡️ Select your problem above.
                </div>
            </div>
        `;


        overlay.appendChild(modal);
        document.body.appendChild(overlay);


        modal
            .querySelector(".closeCyberCare")
            ?.addEventListener(
                "click",
                () => overlay.remove()
            );


        overlay.addEventListener(
            "click",
            event => {
                if (event.target === overlay)
                    overlay.remove();
            }
        );


        modal
            .querySelectorAll(".cyber-situation")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(button.dataset.index);

                        showResult(
                            modal,
                            info.situations[index]
                        );
                    }
                );
            });
    }


    /* =========================================================
       10. WOMEN'S HELP MODAL
       ========================================================= */

    function openWomenHelp(type) {

        const info = womenHelp[type];

        if (!info) return;

        closeExistingModals();

        const overlay =
            document.createElement("div");

        overlay.id = "cybercare-modal";

        overlay.style.cssText = `
            position:fixed;
            inset:0;
            background:rgba(0,0,0,.78);
            display:flex;
            align-items:center;
            justify-content:center;
            padding:15px;
            z-index:99999;
            overflow-y:auto;
        `;


        const modal =
            document.createElement("div");

        modal.style.cssText = `
            width:100%;
            max-width:760px;
            max-height:94vh;
            overflow-y:auto;
            background:#ffffff;
            color:#111827;
            border-radius:22px;
            padding:25px;
            position:relative;
            box-shadow:0 25px 70px rgba(0,0,0,.5);
            font-family:Arial,sans-serif;
        `;


        const steps =
            info.steps.map(
                (step, index) => `
                    <li style="margin-bottom:12px;">
                        <strong>Step ${index + 1}:</strong>
                        ${escapeHTML(step)}
                    </li>
                `
            ).join("");


        const dont =
            info.dont.map(
                item => `
                    <li style="margin-bottom:10px;">
                        ${escapeHTML(item)}
                    </li>
                `
            ).join("");


        modal.innerHTML = `

            <button
                class="closeCyberCare"
                type="button"
                aria-label="Close"
                style="
                    position:absolute;
                    top:12px;
                    right:14px;
                    width:38px;
                    height:38px;
                    border:none;
                    border-radius:10px;
                    background:#f1f5f9;
                    font-size:20px;
                    cursor:pointer;
                "
            >
                ✕
            </button>

            <div style="padding-right:45px;">

                <div style="
                    font-size:12px;
                    font-weight:bold;
                    color:#db2777;
                    letter-spacing:1px;
                    margin-bottom:8px;
                ">
                    WOMEN'S DIGITAL SAFETY
                </div>

                <h2 style="margin:0 0 8px;">
                    ${escapeHTML(info.title)}
                </h2>

                <p style="color:#64748b;">
                    ${escapeHTML(info.description)}
                </p>

            </div>


            <div style="
                margin-top:22px;
                padding:20px;
                background:#f8fafc;
                border-radius:16px;
                border:1px solid #e5e7eb;
            ">

                <h3>
                    ✅ What Should I Do?
                </h3>

                <ol style="padding-left:22px;">
                    ${steps}
                </ol>

            </div>


            <div style="
                margin-top:18px;
                padding:18px;
                background:#fff1f2;
                border-radius:14px;
                border:1px solid #fecdd3;
            ">

                <h3>
                    ⚠️ What Should I NOT Do?
                </h3>

                <ul style="padding-left:22px;">
                    ${dont}
                </ul>

            </div>


            <div style="
                margin-top:18px;
                padding:18px;
                background:#eff6ff;
                border-radius:14px;
            ">

                <h3>📸 Save Evidence</h3>

                <p style="color:#475569;">
                    Save screenshots, usernames, profile URLs,
                    phone numbers, dates, times and relevant
                    messages before deleting or blocking anything.
                </p>

            </div>


            <div style="
                margin-top:18px;
                padding:18px;
                background:#f0fdf4;
                border-radius:14px;
            ">

                <h3>💚 You Don't Have to Handle This Alone</h3>

                <p style="color:#475569;">
                    Tell someone you trust if the harassment,
                    stalking, threats or blackmail continues.
                </p>

            </div>
        `;


        overlay.appendChild(modal);
        document.body.appendChild(overlay);


        modal
            .querySelector(".closeCyberCare")
            ?.addEventListener(
                "click",
                () => overlay.remove()
            );


        overlay.addEventListener(
            "click",
            event => {

                if (event.target === overlay)
                    overlay.remove();
            }
        );
    }


    /* =========================================================
       11. SHOW GENERAL HELP RESULT
       ========================================================= */

    function showResult(modal, situation) {

        const result =
            modal.querySelector(".cybercareResult");

        if (!result) return;


        const steps =
            situation.steps
                .map(
                    (step, index) => `
                        <li style="margin-bottom:12px;">
                            <strong>Step ${index + 1}:</strong>
                            ${escapeHTML(step)}
                        </li>
                    `
                )
                .join("");


        const dont =
            situation.dont
                .map(
                    item => `
                        <li style="margin-bottom:10px;">
                            ${escapeHTML(item)}
                        </li>
                    `
                )
                .join("");


        let officialButton = "";


        if (situation.official) {

            officialButton = `

                <div style="
                    margin-top:20px;
                    padding:18px;
                    background:#ecfdf5;
                    border:1px solid #bbf7d0;
                    border-radius:14px;
                ">

                    <h4>
                        🌐 Official Recovery / Support
                    </h4>

                    <p style="
                        margin:8px 0 14px;
                        color:#475569;
                    ">
                        Use the official service website only.
                    </p>

                    <a
                        href="${escapeHTML(situation.official)}"
                        target="_blank"
                        rel="noopener noreferrer"
                        style="
                            display:inline-block;
                            padding:11px 16px;
                            border-radius:10px;
                            background:#16a34a;
                            color:white;
                            text-decoration:none;
                            font-weight:bold;
                        "
                    >
                        Open Official Page →
                    </a>

                </div>
            `;
        }


        result.innerHTML = `

            <div style="
                background:#f8fafc;
                border-radius:16px;
                padding:20px;
                border:1px solid #e5e7eb;
            ">

                <h3>
                    ⚡ ${escapeHTML(situation.title)}
                </h3>

                <h4 style="margin-top:20px;">
                    ✅ What You Should Do
                </h4>

                <ol style="padding-left:22px;">
                    ${steps}
                </ol>


                <div style="
                    margin-top:20px;
                    padding:16px;
                    background:#fff1f2;
                    border-radius:12px;
                    border:1px solid #fecdd3;
                ">

                    <h4>
                        ⚠️ What You Should NOT Do
                    </h4>

                    <ul style="padding-left:22px;">
                        ${dont}
                    </ul>

                </div>

                ${officialButton}


                <div style="
                    margin-top:20px;
                    padding:16px;
                    background:#eff6ff;
                    border-radius:12px;
                ">

                    <h4>📸 Save Evidence</h4>

                    <p style="
                        margin:8px 0 0;
                        color:#475569;
                    ">
                        Keep screenshots, emails, messages,
                        usernames, profile URLs, phone numbers,
                        transaction IDs, receipts and security alerts.
                    </p>

                </div>

            </div>
        `;


        result.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }


    /* =========================================================
       12. SERVICE BUTTONS
       ========================================================= */

    document
        .querySelectorAll(".help-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const service =
                        button.dataset.service;

                    openHelp(service);
                }
            );
        });


    emergencyBtn?.addEventListener(
        "click",
        () => openHelp("Emergency Help")
    );


    /* =========================================================
       13. WOMEN'S SAFETY BUTTONS
       ========================================================= */

    document
        .querySelectorAll(".women-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const type =
                        button.dataset.women;

                    openWomenHelp(type);
                }
            );
        });


    /* =========================================================
       14. MENU NAVIGATION
       ========================================================= */

    document
        .querySelectorAll(".menu-item")
        .forEach(item => {

            item.addEventListener(
                "click",
                () => {

                    const target =
                        item.dataset.menu;

                    closeSideMenu();


                    /* WOMEN */

                    if (target === "women") {

                        setTimeout(() => {

                            document
                                .getElementById("women")
                                ?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                });

                        }, 200);

                        return;
                    }


                    /* SERVICES */

                    if (target === "services") {

                        setTimeout(() => {

                            document
                                .getElementById("services")
                                ?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                });

                        }, 200);

                        return;
                    }


                    /* TOOLS */

                    if (target === "tools") {

                        setTimeout(() => {

                            document
                                .getElementById("tools")
                                ?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                });

                        }, 200);

                        return;
                    }


                    /* LEARN */

                    if (target === "learn") {

                        setTimeout(() => {

                            document
                                .getElementById("learn")
                                ?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                });

                        }, 200);

                        return;
                    }


                    /* EMERGENCY */

                    if (target === "emergency") {

                        setTimeout(() => {

                            openHelp("Emergency Help");

                        }, 200);

                        return;
                    }


                    /* INDIA */

                    if (target === "india") {

                        setTimeout(() => {

                            document
                                .getElementById("india")
                                ?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                });

                        }, 200);

                        return;
                    }


                    /* ABOUT */

                    if (target === "about") {

                        setTimeout(() => {

                            document
                                .getElementById("about")
                                ?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                });

                        }, 200);

                    }

                }
            );
        });


    /* =========================================================
       15. TOOL MODAL
       ========================================================= */

    function createToolModal(title, content) {

        closeExistingModals();

        const overlay =
            document.createElement("div");

        overlay.id = "cybercare-tool-modal";

        overlay.style.cssText = `
            position:fixed;
            inset:0;
            background:rgba(0,0,0,.75);
            display:flex;
            align-items:center;
            justify-content:center;
            padding:15px;
            z-index:99999;
            overflow-y:auto;
        `;


        const modal =
            document.createElement("div");

        modal.style.cssText = `
            width:100%;
            max-width:650px;
            max-height:90vh;
            overflow-y:auto;
            background:#fff;
            color:#111827;
            border-radius:20px;
            padding:25px;
            position:relative;
            box-shadow:0 25px 70px rgba(0,0,0,.45);
            font-family:Arial,sans-serif;
        `;


        modal.innerHTML = `

            <button
                class="closeTool"
                type="button"
                aria-label="Close"
                style="
                    position:absolute;
                    top:12px;
                    right:14px;
                    width:38px;
                    height:38px;
                    border:none;
                    border-radius:10px;
                    background:#f1f5f9;
                    font-size:20px;
                    cursor:pointer;
                "
            >
                ✕
            </button>

            <div style="padding-right:45px;">
                <h2>${escapeHTML(title)}</h2>
            </div>

            <div style="margin-top:20px;">
                ${content}
            </div>
        `;


        overlay.appendChild(modal);
        document.body.appendChild(overlay);


        modal
            .querySelector(".closeTool")
            ?.addEventListener(
                "click",
                () => overlay.remove()
            );


        overlay.addEventListener(
            "click",
            event => {

                if (event.target === overlay)
                    overlay.remove();
            }
        );


        return modal;
    }


    /* =========================================================
       16. SCAM CHECKER
       ========================================================= */

    function openScamChecker() {

        const modal =
            createToolModal(
                "🔎 Scam Checker",

                `
                <p>
                    Paste a suspicious message below.
                    CyberCare will check common warning signs.
                </p>

                <textarea
                    id="scamInput"
                    placeholder="Paste suspicious message here..."
                    style="
                        width:100%;
                        min-height:140px;
                        padding:12px;
                        border:1px solid #cbd5e1;
                        border-radius:12px;
                        resize:vertical;
                        box-sizing:border-box;
                    "
                ></textarea>

                <button
                    id="checkScam"
                    type="button"
                    style="
                        margin-top:12px;
                        padding:12px 18px;
                        border:none;
                        border-radius:10px;
                        background:#2563eb;
                        color:white;
                        font-weight:bold;
                        cursor:pointer;
                    "
                >
                    Check Message
                </button>

                <div
                    id="scamResult"
                    style="margin-top:18px;"
                ></div>
                `
            );


        modal
            .querySelector("#checkScam")
            .addEventListener(
                "click",
                () => {

                    const text =
                        modal
                            .querySelector("#scamInput")
                            .value
                            .toLowerCase();

                    const warnings = [];


                    const patterns = [

                        ["otp", "Asks for an OTP or verification code."],

                        ["password", "Asks for a password."],

                        ["urgent", "Uses urgency or pressure."],

                        ["immediately", "Creates pressure to act immediately."],

                        ["click", "Contains a request to click something."],

                        ["verify", "May be asking for account verification."],

                        ["bank", "Mentions banking information."],

                        ["upi", "Mentions UPI/payment activity."],

                        ["prize", "Mentions a prize or reward."],

                        ["winner", "Claims you have won something."],

                        ["refund", "Mentions a refund."],

                        ["investment", "Mentions investment."],

                        ["crypto", "Mentions cryptocurrency/payment."],

                        ["free", "Uses a free/reward offer."],

                        ["limited time", "Uses limited-time pressure."],

                        ["account suspended", "Claims your account is suspended."],

                        ["confirm", "Asks you to confirm something."]
                    ];


                    patterns.forEach(
                        ([word, warning]) => {

                            if (text.includes(word))
                                warnings.push(warning);
                        }
                    );


                    const result =
                        modal.querySelector("#scamResult");


                    if (!text.trim()) {

                        result.innerHTML = `
                            <div style="
                                padding:15px;
                                background:#fff7ed;
                                border-radius:12px;
                            ">
                                ⚠️ Please paste a message first.
                            </div>
                        `;

                        return;
                    }


                    if (warnings.length) {

                        result.innerHTML = `
                            <div style="
                                padding:16px;
                                background:#fff1f2;
                                border-radius:12px;
                            ">

                                <h3>
                                    ⚠️ Warning Signs Found
                                </h3>

                                <ul>
                                    ${warnings
                                        .map(
                                            warning =>
                                                `<li>${escapeHTML(warning)}</li>`
                                        )
                                        .join("")}
                                </ul>

                                <strong>
                                    Never share OTPs,
                                    passwords, PINs or
                                    recovery codes.
                                </strong>

                            </div>
                        `;

                    } else {

                        result.innerHTML = `
                            <div style="
                                padding:16px;
                                background:#ecfdf5;
                                border-radius:12px;
                            ">

                                ✅ No common warning words
                                were detected.

                                <br><br>

                                This does NOT prove that
                                the message is safe.

                                Always verify through
                                the official website or app.

                            </div>
                        `;
                    }
                }
            );
    }


    /* =========================================================
       17. PASSWORD CHECKER
       ========================================================= */

    function openPasswordChecker() {

        const modal =
            createToolModal(
                "🔐 Password Safety Checker",

                `
                <p>
                    This checker runs locally in your browser.
                </p>

                <input
                    id="passwordInput"
                    type="password"
                    placeholder="Enter a password to test"
                    autocomplete="off"
                    style="
                        width:100%;
                        padding:13px;
                        border:1px solid #cbd5e1;
                        border-radius:10px;
                        box-sizing:border-box;
                    "
                >

                <button
                    id="checkPassword"
                    type="button"
                    style="
                        margin-top:12px;
                        padding:12px 18px;
                        border:none;
                        border-radius:10px;
                        background:#2563eb;
                        color:white;
                        font-weight:bold;
                        cursor:pointer;
                    "
                >
                    Check Password
                </button>

                <div
                    id="passwordResult"
                    style="margin-top:18px;"
                ></div>
                `
            );


        modal
            .querySelector("#checkPassword")
            .addEventListener(
                "click",
                () => {

                    const password =
                        modal
                            .querySelector("#passwordInput")
                            .value;

                    const result =
                        modal.querySelector("#passwordResult");


                    if (!password) {

                        result.innerHTML = `
                            <div style="
                                padding:15px;
                                background:#fff7ed;
                                border-radius:12px;
                            ">
                                ⚠️ Enter a password first.
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

                    if (
                        password.toLowerCase()
                            .includes("password")
                    )
                        score--;


                    if (score <= 2) {

                        result.innerHTML = `
                            <div style="
                                padding:16px;
                                background:#fff1f2;
                                border-radius:12px;
                            ">
                                🔴 <strong>Weak password</strong>
                                <br><br>
                                Use a longer, unique password
                                or passphrase.
                            </div>
                        `;

                    } else if (score <= 4) {

                        result.innerHTML = `
                            <div style="
                                padding:16px;
                                background:#fff7ed;
                                border-radius:12px;
                            ">
                                🟠 <strong>Moderate password</strong>
                                <br><br>
                                Make it longer and unique.
                            </div>
                        `;

                    } else {

                        result.innerHTML = `
                            <div style="
                                padding:16px;
                                background:#ecfdf5;
                                border-radius:12px;
                            ">
                                🟢 <strong>Stronger password structure</strong>
                                <br><br>
                                Never reuse this password elsewhere.
                            </div>
                        `;
                    }
                }
            );
    }


    /* =========================================================
       18. URL SAFETY GUIDE
       ========================================================= */

    function openURLSafetyGuide() {

        createToolModal(
            "🔗 URL Safety Guide",

            `
            <h3>Before Opening a Suspicious URL</h3>

            <ul style="line-height:1.8;">

                <li>
                    Check the spelling of the domain name.
                </li>

                <li>
                    Be careful with shortened URLs.
                </li>

                <li>
                    Do not trust a website simply because
                    it uses HTTPS.
                </li>

                <li>
                    Do not enter OTPs, passwords or banking
                    information into a page opened from an
                    unexpected message.
                </li>

                <li>
                    Open the official app or type the official
                    website address yourself when possible.
                </li>

                <li>
                    Be suspicious of urgent warnings,
                    prizes, refunds and account suspension claims.
                </li>

            </ul>

            <div style="
                margin-top:18px;
                padding:16px;
                background:#fff7ed;
                border-radius:12px;
            ">
                ⚠️ A URL checker cannot guarantee that a website
                is safe. When in doubt, use the official app or
                manually enter the official website address.
            </div>
            `
        );
    }


    /* =========================================================
       19. PRIVACY CHECKLIST
       ========================================================= */

    function openPrivacyChecklist() {

        const checklist = [

            "I use unique passwords for important accounts.",

            "I have enabled two-factor authentication.",

            "My phone has a screen lock.",

            "I review installed applications.",

            "I review camera and microphone permissions.",

            "I review location permissions.",

            "I keep my phone updated.",

            "My important accounts have secure recovery information.",

            "I never share OTPs or recovery codes.",

            "I review logged-in devices regularly.",

            "My social media accounts are not unnecessarily public.",

            "I avoid posting my live location.",

            "I know how to block and report unwanted contacts.",

            "I keep evidence when online harassment occurs.",

            "I do not reuse important passwords."
        ];


        const modal =
            createToolModal(
                "📱 Privacy & Security Checklist",

                `
                <div id="privacyList">

                    ${checklist
                        .map(
                            (item, index) => `
                                <label style="
                                    display:block;
                                    padding:12px;
                                    margin:7px 0;
                                    background:#f8fafc;
                                    border-radius:10px;
                                ">

                                    <input
                                        type="checkbox"
                                        class="privacyCheck"
                                    >

                                    ${index + 1}.
                                    ${escapeHTML(item)}

                                </label>
                            `
                        )
                        .join("")}

                </div>

                <button
                    id="privacyScore"
                    type="button"
                    style="
                        margin-top:15px;
                        padding:12px 18px;
                        border:none;
                        border-radius:10px;
                        background:#2563eb;
                        color:#fff;
                        font-weight:bold;
                        cursor:pointer;
                    "
                >
                    Calculate Safety Score
                </button>

                <div
                    id="privacyResult"
                    style="margin-top:18px;"
                ></div>
                `
            );


        modal
            .querySelector("#privacyScore")
            .addEventListener(
                "click",
                () => {

                    const checks =
                        modal.querySelectorAll(
                            ".privacyCheck"
                        );

                    let completed = 0;

                    checks.forEach(
                        check => {

                            if (check.checked)
                                completed++;
                        }
                    );


                    const percentage =
                        Math.round(
                            completed /
                            checks.length *
                            100
                        );


                    let message =
                        "Keep improving your security habits.";

                    if (percentage >= 80)
                        message =
                            "Excellent security habits.";

                    else if (percentage >= 60)
                        message =
                            "Good progress. A few areas need attention.";

                    else if (percentage >= 40)
                        message =
                            "Your security can be improved.";

                    else
                        message =
                            "Start with passwords, 2FA and privacy settings.";


                    modal.querySelector(
                        "#privacyResult"
                    ).innerHTML = `

                        <div style="
                            padding:18px;
                            background:#eff6ff;
                            border-radius:12px;
                        ">

                            🛡️ Your Cyber Safety Score:

                            <strong>
                                ${percentage}%
                            </strong>

                            <br><br>

                            ${completed}
                            out of
                            ${checks.length}
                            checks completed.

                            <br><br>

                            ${message}

                        </div>
                    `;
                }
            );
    }


    /* =========================================================
       20. EVIDENCE CHECKLIST
       ========================================================= */

    function openEvidenceChecklist() {

        createToolModal(
            "🧾 Evidence Checklist",

            `
            <p>
                Before blocking or deleting anything,
                save relevant evidence when it is safe to do so.
            </p>

            <ul style="line-height:1.9;">

                <li>📸 Screenshots of messages</li>

                <li>👤 Username / profile name</li>

                <li>🔗 Profile or post URL</li>

                <li>📞 Phone number</li>

                <li>📅 Date and time</li>

                <li>💬 Relevant conversation</li>

                <li>💳 Transaction ID / payment reference</li>

                <li>📧 Security emails</li>

                <li>🧾 Receipts or payment records</li>

            </ul>

            <div style="
                margin-top:18px;
                padding:16px;
                background:#fff7ed;
                border-radius:12px;
            ">
                ⚠️ Do not share private evidence publicly.
                Keep it securely and provide it only to the
                appropriate platform, bank or authority when necessary.
            </div>
            `
        );
    }


    /* =========================================================
       21. CYBER SAFETY SCORE
       ========================================================= */

    function openSafetyScore() {

        const questions = [

            "Do you use 2FA on important accounts?",

            "Do you use unique passwords?",

            "Do you regularly check logged-in devices?",

            "Do you avoid sharing OTPs?",

            "Do you keep your phone updated?",

            "Do you avoid unknown links?",

            "Do you review app permissions?",

            "Do you have secure recovery information?",

            "Do you avoid posting your live location?",

            "Do you know how to block/report suspicious accounts?",

            "Do you save evidence before deleting threatening messages?",

            "Do you avoid meeting unknown online contacts alone?"
        ];


        const modal =
            createToolModal(
                "🛡️ Cyber Safety Score",

                `
                <p>
                    Answer these questions honestly.
                </p>

                <div>

                    ${questions
                        .map(
                            (q, i) => `
                                <label style="
                                    display:block;
                                    margin:12px 0;
                                    padding:12px;
                                    background:#f8fafc;
                                    border-radius:10px;
                                ">

                                    <input
                                        type="checkbox"
                                        class="scoreCheck"
                                    >

                                    ${i + 1}.
                                    ${escapeHTML(q)}

                                </label>
                            `
                        )
                        .join("")}

                </div>

                <button
                    id="calculateScore"
                    type="button"
                    style="
                        padding:12px 18px;
                        border:none;
                        border-radius:10px;
                        background:#2563eb;
                        color:white;
                        font-weight:bold;
                        cursor:pointer;
                    "
                >
                    Calculate Score
                </button>

                <div
                    id="scoreResult"
                    style="margin-top:18px;"
                ></div>
                `
            );


        modal
            .querySelector("#calculateScore")
            .addEventListener(
                "click",
                () => {

                    const checks =
                        modal.querySelectorAll(
                            ".scoreCheck"
                        );

                    let score = 0;

                    checks.forEach(
                        check => {

                            if (check.checked)
                                score++;
                        }
                    );


                    const percentage =
                        Math.round(
                            score /
                            checks.length *
                            100
                        );


                    let level;

                    if (percentage < 40)
                        level = "🔴 Needs Improvement";

                    else if (percentage < 75)
                        level = "🟠 Good, but can improve";

                    else
                        level = "🟢 Strong Safety Habits";


                    modal.querySelector(
                        "#scoreResult"
                    ).innerHTML = `

                        <div style="
                            padding:18px;
                            background:#eff6ff;
                            border-radius:12px;
                        ">

                            <h3>
                                ${level}
                            </h3>

                            <p>
                                Score:
                                <strong>
                                    ${percentage}%
                                </strong>
                            </p>

                        </div>
                    `;
                }
            );
    }


    /* =========================================================
       22. TOOL BUTTONS
       ========================================================= */

    document
        .querySelectorAll(".tool-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const tool =
                        button.dataset.tool;


                    if (tool === "scam")
                        openScamChecker();

                    else if (tool === "password")
                        openPasswordChecker();

                    else if (tool === "url")
                        openURLSafetyGuide();

                    else if (tool === "privacy")
                        openPrivacyChecklist();

                    else if (tool === "evidence")
                        openEvidenceChecklist();

                    else if (tool === "score")
                        openSafetyScore();
                }
            );
        });


    /* =========================================================
       23. LEARNING
       ========================================================= */

    const learningData = {

        password: [
            "Use long and unique passwords.",
            "Never reuse an important password.",
            "Consider using a trusted password manager.",
            "Never share your password with anyone."
        ],

        "2fa": [
            "Enable two-factor authentication on important accounts.",
            "Never share verification codes.",
            "Keep recovery methods secure.",
            "Review active sessions regularly."
        ],

        phishing: [
            "Be careful with unexpected links.",
            "Check the sender carefully.",
            "Do not respond to pressure or threats.",
            "Verify through the official app or website."
        ],

        privacy: [
            "Limit unnecessary public information.",
            "Review social-media privacy settings.",
            "Avoid posting your live location.",
            "Review who can message, tag or mention you."
        ],

        phone: [
            "Keep your phone updated.",
            "Install apps only from trusted sources.",
            "Review app permissions.",
            "Use a strong screen lock."
        ],

        financial: [
            "Never share OTPs or UPI PINs.",
            "Never approve unknown payment requests.",
            "Contact your bank immediately after suspected fraud.",
            "Save transaction information and evidence."
        ]
    };


    document
        .querySelectorAll(".learn-card")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const type =
                        button.dataset.learn;

                    const data =
                        learningData[type];

                    if (!data) return;


                    createToolModal(
                        "🎓 " +
                        button.querySelector("strong")?.textContent,
                        `
                        <ul style="line-height:1.9;">
                            ${data
                                .map(
                                    item =>
                                        `<li>${escapeHTML(item)}</li>`
                                )
                                .join("")}
                        </ul>
                        `
                    );
                }
            );
        });


    /* =========================================================
       24. QUICK HELP SEARCH
       ========================================================= */

    const searchableItems = [

        {
            keywords: [
                "facebook",
                "instagram",
                "whatsapp",
                "google",
                "youtube",
                "hacked",
                "account",
                "login"
            ],
            title: "🔐 Account Recovery",
            action: () => openHelp("Account Recovery")
        },

        {
            keywords: [
                "scam",
                "phishing",
                "otp",
                "link",
                "fake message",
                "suspicious message"
            ],
            title: "🎣 Scam & Phishing",
            action: () => openHelp("Scam & Phishing")
        },

        {
            keywords: [
                "phone",
                "app",
                "spyware",
                "camera",
                "microphone",
                "location"
            ],
            title: "📱 Phone Security",
            action: () => openHelp("Phone Security")
        },

        {
            keywords: [
                "upi",
                "money",
                "bank",
                "fraud",
                "payment",
                "transaction"
            ],
            title: "💳 Online & Financial Fraud",
            action: () => openHelp("Online Fraud")
        },

        {
            keywords: [
                "login",
                "malware",
                "virus",
                "fake login",
                "unknown device"
            ],
            title: "🕵️ Suspicious Activity",
            action: () => openHelp("Suspicious Activity")
        },

        {
            keywords: [
                "blackmail",
                "threat",
                "harassment",
                "stalking",
                "photo",
                "fake profile",
                "calling"
            ],
            title: "👩 Women's Digital Safety",
            action: () =>
                document
                    .getElementById("women")
                    ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    })
        }
    ];


    function runSearch() {

        if (!searchResults) return;

        const query =
            problemSearch.value
                .trim()
                .toLowerCase();


        searchResults.innerHTML = "";


        if (!query)
            return;


        const matches =
            searchableItems.filter(item =>
                item.keywords.some(
                    keyword =>
                        keyword.includes(query) ||
                        query.includes(keyword)
                )
            );


        if (!matches.length) {

            searchResults.innerHTML = `

                <div style="
                    padding:15px;
                    margin-top:10px;
                    background:#fff7ed;
                    border-radius:12px;
                ">
                    ⚠️ No exact guide found.
                    Try words like:
                    hacked, scam, UPI, blackmail,
                    harassment or password.
                </div>
            `;

            return;
        }


        matches.forEach(item => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.textContent =
                item.title;

            button.style.cssText = `
                display:block;
                width:100%;
                margin:8px 0;
                padding:13px;
                border:1px solid #dbe3ef;
                border-radius:12px;
                background:#f8fafc;
                text-align:left;
                cursor:pointer;
                font-weight:bold;
            `;

            button.addEventListener(
                "click",
                item.action
            );

            searchResults.appendChild(button);
        });
    }


    problemSearch?.addEventListener(
        "input",
        runSearch
    );


    quickHelpBtn?.addEventListener(
        "click",
        () => {

            problemSearch?.focus();

            document
                .querySelector(".search-section")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
        }
    );


    /* =========================================================
       25. EMERGENCY RESPONSE BUTTONS
       ========================================================= */

    document
        .querySelectorAll("[data-emergency]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const type =
                        button.dataset.emergency;


                    if (type === "account") {

                        openHelp(
                            "Emergency Help"
                        );

                    } else if (type === "money") {

                        openHelp(
                            "Online Fraud"
                        );

                    } else if (type === "blackmail") {

                        openWomenHelp(
                            "blackmail"
                        );

                    } else if (type === "phone") {

                        openHelp(
                            "Phone Security"
                        );
                    }
                }
            );
        });


    /* =========================================================
       26. KEYBOARD ESCAPE
       ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                document
                    .getElementById("cybercare-modal")
                    ?.remove();

                document
                    .getElementById("cybercare-tool-modal")
                    ?.remove();

                closeSideMenu();
            }
        }
    );


    /* =========================================================
       27. GLOBAL ACCESS
       ========================================================= */

    window.CyberCareOfficial =
        officialLinks;

    window.CyberCareHelp = {

        open: openHelp,

        women: openWomenHelp,

        services:
            Object.keys(helpData),

        official:
            officialLinks
    };


    /* =========================================================
       28. STARTUP
       ========================================================= */

    console.log(
        "🛡️ CyberCare Final Fixed Version loaded successfully."
    );

    console.log(
        "Services:",
        Object.keys(helpData)
    );

    console.log(
        "Women's Safety:",
        Object.keys(womenHelp)
    );

});
