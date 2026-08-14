document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       CYBERCARE
       COMPLETE SCRIPT
       ===================================================== */


    /* =====================================================
       1. MENU
       ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");
    const closeMenu = document.getElementById("closeMenu");
    const menuOverlay = document.getElementById("menuOverlay");

    function openMenu() {
        if (sideMenu) sideMenu.classList.add("active");
        if (menuOverlay) menuOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeSideMenu() {
        if (sideMenu) sideMenu.classList.remove("active");
        if (menuOverlay) menuOverlay.classList.remove("active");
        document.body.style.overflow = "";
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


    /* =====================================================
       2. THEME
       ===================================================== */

    const themeBtn = document.getElementById("themeBtn");

    const savedTheme =
        localStorage.getItem("cybercare-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");

        if (themeBtn) {
            themeBtn.textContent = "☀️";
        }
    }

    if (themeBtn) {

        themeBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {

                themeBtn.textContent = "☀️";

                localStorage.setItem(
                    "cybercare-theme",
                    "dark"
                );

            } else {

                themeBtn.textContent = "🌙";

                localStorage.setItem(
                    "cybercare-theme",
                    "light"
                );
            }

        });
    }


    /* =====================================================
       3. LANGUAGE SYSTEM
       ===================================================== */

    const languageBtn =
        document.getElementById("languageBtn");

    const languageText =
        document.getElementById("languageText");

    let currentLanguage =
        localStorage.getItem("cybercare-language") || "EN";


    const translations = {

        EN: {

            logo: "CyberCare",

            heroTitle:
                "Protecting People. Securing Digital Lives.",

            heroText:
                "Practical cybersecurity guidance for hacked accounts, scams, fraud, privacy problems and digital threats.",

            emergency:
                "🚨 I Need Help Now",

            servicesTitle:
                "How Can We Help You?",

            servicesText:
                "Choose a situation and get step-by-step guidance.",

            account:
                "Account Recovery",

            accountDesc:
                "Recover and secure hacked or compromised social media and online accounts.",

            scam:
                "Scam & Phishing",

            scamDesc:
                "Check suspicious messages, WhatsApp links, fake websites and OTP scams.",

            phone:
                "Phone Security",

            phoneDesc:
                "Check unknown apps, permissions, location, camera and microphone access.",

            fraud:
                "Online Fraud",

            fraudDesc:
                "Get guidance if money, UPI, bank or payment information is involved.",

            suspicious:
                "Suspicious Activity",

            suspiciousDesc:
                "Understand suspicious links, malware, fake login pages and unusual activity.",

            emergencyCard:
                "Emergency Help",

            emergencyCardDesc:
                "Immediate safety steps when your account, device or money may be at risk.",

            getHelp:
                "Get Help →",

            learnTitle:
                "🎓 Learn Cybersecurity",

            learnText:
                "Learn simple habits that can make your digital life safer.",

            learnButton:
                "Start Learning →",

            toolsTitle:
                "🛠️ CyberCare Tools",

            toolsText:
                "Simple tools to improve your digital safety.",

            scamChecker:
                "Scam Checker",

            passwordChecker:
                "Password Checker",

            privacyChecker:
                "Privacy Checklist",

            safetyScore:
                "Cyber Safety Score",

            aboutTitle:
                "🛡️ About CyberCare",

            aboutText:
                "CyberCare provides simple, practical cybersecurity guidance to help people respond to common digital safety problems.",

            aboutText2:
                "Stay alert. Protect your accounts. Never share passwords, OTPs or recovery codes.",

            footer:
                "Stay Safe. Stay Secure.",

            coming:
                "Open Tool"

        },


        BN: {

            logo: "সাইবারকেয়ার",

            heroTitle:
                "মানুষকে সুরক্ষিত রাখি। ডিজিটাল জীবন নিরাপদ রাখি।",

            heroText:
                "হ্যাক হওয়া অ্যাকাউন্ট, প্রতারণা, স্ক্যাম, গোপনীয়তা এবং বিভিন্ন ডিজিটাল সমস্যায় সহজ ও ধাপে ধাপে সাহায্য।",

            emergency:
                "🚨 এখনই সাহায্য চাই",

            servicesTitle:
                "আমরা কীভাবে সাহায্য করতে পারি?",

            servicesText:
                "আপনার সমস্যাটি নির্বাচন করুন এবং ধাপে ধাপে নির্দেশনা নিন।",

            account:
                "অ্যাকাউন্ট রিকভারি",

            accountDesc:
                "হ্যাক বা কমপ্রোমাইজ হওয়া সোশ্যাল মিডিয়া ও অনলাইন অ্যাকাউন্ট পুনরুদ্ধার এবং নিরাপদ করুন।",

            scam:
                "স্ক্যাম ও ফিশিং",

            scamDesc:
                "সন্দেহজনক মেসেজ, WhatsApp লিংক, ভুয়া ওয়েবসাইট এবং OTP স্ক্যাম সম্পর্কে সাহায্য নিন।",

            phone:
                "ফোন নিরাপত্তা",

            phoneDesc:
                "অপরিচিত অ্যাপ, permission, location, camera ও microphone access পরীক্ষা করুন।",

            fraud:
                "অনলাইন প্রতারণা",

            fraudDesc:
                "টাকা, UPI, ব্যাংক বা payment information জড়িত থাকলে কী করবেন তা জানুন।",

            suspicious:
                "সন্দেহজনক কার্যকলাপ",

            suspiciousDesc:
                "সন্দেহজনক লিংক, malware, fake login page এবং অস্বাভাবিক account activity সম্পর্কে জানুন।",

            emergencyCard:
                "জরুরি সাহায্য",

            emergencyCardDesc:
                "অ্যাকাউন্ট, ফোন বা টাকা ঝুঁকিতে থাকলে জরুরি নিরাপত্তা পদক্ষেপ নিন।",

            getHelp:
                "সাহায্য নিন →",

            learnTitle:
                "🎓 সাইবার নিরাপত্তা শিখুন",

            learnText:
                "সহজ কিছু অভ্যাস শিখুন যা আপনার ডিজিটাল জীবনকে আরও নিরাপদ করতে পারে।",

            learnButton:
                "শেখা শুরু করুন →",

            toolsTitle:
                "🛠️ CyberCare Tools",

            toolsText:
                "আপনার ডিজিটাল নিরাপত্তা বাড়ানোর জন্য সহজ কিছু টুল।",

            scamChecker:
                "স্ক্যাম চেকার",

            passwordChecker:
                "পাসওয়ার্ড চেকার",

            privacyChecker:
                "Privacy Checklist",

            safetyScore:
                "Cyber Safety Score",

            aboutTitle:
                "🛡️ CyberCare সম্পর্কে",

            aboutText:
                "CyberCare সাধারণ ডিজিটাল নিরাপত্তা সমস্যায় মানুষকে সহজ ও ব্যবহারিক নির্দেশনা দেয়।",

            aboutText2:
                "সতর্ক থাকুন। আপনার অ্যাকাউন্ট সুরক্ষিত রাখুন। কখনো Password, OTP বা Recovery Code কারও সঙ্গে শেয়ার করবেন না।",

            footer:
                "নিরাপদ থাকুন। সুরক্ষিত থাকুন।",

            coming:
                "টুল খুলুন"

        }

    };


    function updateLanguage() {

        const t = translations[currentLanguage];

        if (languageText) {
            languageText.textContent = currentLanguage;
        }

        const logoText =
            document.querySelector(".logo span");

        if (logoText) {
            logoText.textContent = t.logo;
        }

        const heroH2 =
            document.querySelector(".hero h2");

        if (heroH2) {
            heroH2.textContent = t.heroTitle;
        }

        const heroP =
            document.querySelector(".hero p");

        if (heroP) {
            heroP.textContent = t.heroText;
        }

        const emergencyBtn =
            document.getElementById("emergencyBtn");

        if (emergencyBtn) {
            emergencyBtn.textContent = t.emergency;
        }

        const serviceTitle =
            document.querySelector(".services > h2");

        if (serviceTitle) {
            serviceTitle.textContent = t.servicesTitle;
        }

        const serviceText =
            document.querySelector(".services .section-text");

        if (serviceText) {
            serviceText.textContent = t.servicesText;
        }


        const cards =
            document.querySelectorAll(".service-card");

        if (cards.length >= 6) {

            cards[0].querySelector("h3").textContent = t.account;
            cards[0].querySelector("p").textContent = t.accountDesc;

            cards[1].querySelector("h3").textContent = t.scam;
            cards[1].querySelector("p").textContent = t.scamDesc;

            cards[2].querySelector("h3").textContent = t.phone;
            cards[2].querySelector("p").textContent = t.phoneDesc;

            cards[3].querySelector("h3").textContent = t.fraud;
            cards[3].querySelector("p").textContent = t.fraudDesc;

            cards[4].querySelector("h3").textContent = t.suspicious;
            cards[4].querySelector("p").textContent = t.suspiciousDesc;

            cards[5].querySelector("h3").textContent = t.emergencyCard;
            cards[5].querySelector("p").textContent = t.emergencyCardDesc;

            document
                .querySelectorAll(".help-btn")
                .forEach(function (btn) {
                    btn.textContent = t.getHelp;
                });
        }


        const learnTitle =
            document.querySelector(".extra-section > h2");

        if (learnTitle) {
            learnTitle.textContent = t.learnTitle;
        }

        const learnText =
            document.querySelector(".extra-section .section-text");

        if (learnText) {
            learnText.textContent = t.learnText;
        }

        const learnBtn =
            document.getElementById("learnBtn");

        if (learnBtn) {
            learnBtn.textContent = t.learnButton;
        }


        const toolsTitle =
            document.querySelector(".tools > h2");

        if (toolsTitle) {
            toolsTitle.textContent = t.toolsTitle;
        }

        const toolsText =
            document.querySelector(".tools .section-text");

        if (toolsText) {
            toolsText.textContent = t.toolsText;
        }


        const toolCards =
            document.querySelectorAll(".tool-card");

        if (toolCards.length >= 4) {

            toolCards[0].querySelector("h3").textContent =
                t.scamChecker;

            toolCards[1].querySelector("h3").textContent =
                t.passwordChecker;

            toolCards[2].querySelector("h3").textContent =
                t.privacyChecker;

            toolCards[3].querySelector("h3").textContent =
                t.safetyScore;

            toolCards.forEach(function (card) {

                const btn =
                    card.querySelector(".tool-btn");

                if (btn) {
                    btn.textContent = t.coming;
                }

            });
        }


        const aboutTitle =
            document.querySelector(".about-section > h2");

        if (aboutTitle) {
            aboutTitle.textContent = t.aboutTitle;
        }

        const aboutParagraphs =
            document.querySelectorAll(".about-section p");

        if (aboutParagraphs.length >= 2) {

            aboutParagraphs[0].textContent =
                t.aboutText;

            aboutParagraphs[1].textContent =
                t.aboutText2;
        }


        const footerParagraph =
            document.querySelector("footer p");

        if (footerParagraph) {
            footerParagraph.textContent =
                t.footer;
        }
    }


    if (languageBtn) {

        languageBtn.addEventListener("click", function () {

            currentLanguage =
                currentLanguage === "EN"
                    ? "BN"
                    : "EN";

            localStorage.setItem(
                "cybercare-language",
                currentLanguage
            );

            updateLanguage();

        });
    }


    /* =====================================================
       4. HELP DATA
       ===================================================== */

    const helpData = {


        "Account Recovery": {

            title: "🔐 Account Recovery",

            description:
                "Select the account you need help recovering.",

            situations: [


                {
                    name: "📘 Facebook Account Hacked",

                    title:
                        "Facebook Account Recovery",

                    steps: [

                        "First, do not share your password, OTP or recovery code with anyone.",

                        "Open Facebook's official hacked-account recovery page.",

                        "Choose the option that says your account was hacked or compromised.",

                        "Enter the email address, phone number or name connected to your Facebook account.",

                        "Follow Facebook's identity and security verification steps.",

                        "If you still have access to the account, immediately change the password.",

                        "Open Facebook Settings → Accounts Center → Password and security.",

                        "Check Where you're logged in and remove devices you do not recognise.",

                        "Check your email address and phone number and remove any unknown recovery information.",

                        "Turn on two-factor authentication.",

                        "Check recent security activity for changes made by the attacker."

                    ],

                    links: [

                        {
                            text: "🔗 Open Facebook Hacked Account Recovery",
                            url: "https://www.facebook.com/hacked"
                        },

                        {
                            text: "🔗 Open Facebook Security Settings",
                            url: "https://www.facebook.com/settings"
                        }

                    ],

                    dont: [

                        "Do not pay anyone who promises guaranteed Facebook recovery.",

                        "Never give anyone your OTP, password or recovery code.",

                        "Do not use random websites claiming to be Facebook support."

                    ]

                },


                {
                    name: "📸 Instagram Account Hacked",

                    title:
                        "Instagram Account Recovery",

                    steps: [

                        "Do not share your Instagram password or security code with anyone.",

                        "Open Instagram's official hacked-account recovery page.",

                        "Select the option for a hacked or compromised account.",

                        "Enter your username, email or phone number.",

                        "Follow the identity verification instructions shown by Instagram.",

                        "Check your email for messages from Instagram about changes to your account.",

                        "If you can access the account, change your password immediately.",

                        "Open Instagram → Accounts Center → Password and security.",

                        "Check Login activity and remove unknown devices.",

                        "Enable two-factor authentication.",

                        "Check that your email address and phone number are still yours."

                    ],

                    links: [

                        {
                            text: "🔗 Open Instagram Hacked Account Recovery",
                            url: "https://www.instagram.com/hacked/"
                        },

                        {
                            text: "🔗 Instagram Help Center",
                            url: "https://help.instagram.com/"
                        }

                    ],

                    dont: [

                        "Do not trust people offering paid Instagram recovery.",

                        "Never send login codes to anyone.",

                        "Do not give remote access to your phone."

                    ]

                },


                {
                    name: "💬 WhatsApp Account Hacked",

                    title:
                        "WhatsApp Account Recovery",

                    steps: [

                        "Open the official WhatsApp application.",

                        "Enter your phone number again and request the official verification code.",

                        "Enter the verification code only inside the WhatsApp app.",

                        "After successfully registering your number, check Linked Devices.",

                        "Open WhatsApp → Settings → Linked Devices.",

                        "Log out every device you do not recognise.",

                        "Open Settings → Account → Two-step verification.",

                        "Create a strong two-step verification PIN.",

                        "Add a recovery email address if available.",

                        "Tell your contacts to ignore suspicious messages sent from your account during the compromise."

                    ],

                    links: [

                        {
                            text: "🔗 WhatsApp Help Center",
                            url: "https://faq.whatsapp.com/"
                        },

                        {
                            text: "🔗 WhatsApp Contact Support",
                            url: "https://www.whatsapp.com/contact/"
                        }

                    ],

                    dont: [

                        "Never share your WhatsApp verification code.",

                        "Never share your two-step verification PIN.",

                        "Do not scan unknown QR codes."

                    ]

                },


                {
                    name: "▶️ Google / YouTube Account Hacked",

                    title:
                        "Google Account Recovery",

                    steps: [

                        "Secure your Google account first because it may control your YouTube account and recovery email.",

                        "Open Google's official Account Recovery page.",

                        "Enter your Google email address or phone number.",

                        "Answer Google's recovery questions as accurately as possible.",

                        "Use a device and location you normally use for that account when possible.",

                        "After recovery, change your password.",

                        "Open Google Account → Security.",

                        "Review Recent security activity.",

                        "Review Your devices and remove devices you do not recognise.",

                        "Check recovery email and recovery phone.",

                        "Turn on 2-Step Verification.",

                        "Review third-party apps that have access to your Google account."

                    ],

                    links: [

                        {
                            text: "🔗 Google Account Recovery",
                            url: "https://accounts.google.com/signin/recovery"
                        },

                        {
                            text: "🔗 Google Security Checkup",
                            url: "https://myaccount.google.com/security-checkup"
                        }

                    ],

                    dont: [

                        "Do not give Google verification codes to anyone.",

                        "Do not pay unofficial recovery agents.",

                        "Do not install remote-control software for a stranger."

                    ]

                },


                {
                    name: "🔑 I Cannot Log In",

                    title:
                        "Cannot Access My Account",

                    steps: [

                        "Identify the official service you are trying to access.",

                        "Use only that service's official recovery page.",

                        "Try the recovery email or phone number connected to the account.",

                        "Complete identity verification if the service asks for it.",

                        "If you regain access, immediately change your password.",

                        "Review active sessions or logged-in devices.",

                        "Remove unknown devices.",

                        "Check recovery email and phone number.",

                        "Enable two-factor authentication.",

                        "Save your recovery codes somewhere safe."

                    ],

                    dont: [

                        "Do not use unofficial recovery websites.",

                        "Never send recovery codes to another person.",

                        "Do not pay someone simply because they claim to be a hacker."

                    ]

                }

            ]

        },


        /* =================================================
           SCAM
           ================================================= */

        "Scam & Phishing": {

            title:
                "🎣 Scam & Phishing",

            description:
                "Identify and respond safely to suspicious messages and links.",

            situations: [

                {
                    name:
                        "💬 Someone sent me a suspicious WhatsApp link",

                    title:
                        "Suspicious WhatsApp Link",

                    steps: [

                        "Do not open the link again.",

                        "Do not enter your password, OTP, UPI PIN, card number or banking details.",

                        "Check who sent the message.",

                        "Take a screenshot of the message and sender details.",

                        "If it is suspicious, block and report the sender.",

                        "If you already entered a password, change that password immediately.",

                        "If financial information was entered, contact your bank immediately.",

                        "Monitor your accounts for unusual activity."

                    ],

                    dont: [

                        "Do not forward the suspicious link to other people.",

                        "Do not download files from unknown links.",

                        "Do not call phone numbers shown on suspicious pages."

                    ]

                },


                {
                    name:
                        "🔗 I Clicked a Suspicious Link",

                    title:
                        "Suspicious Link Clicked",

                    steps: [

                        "Close the website immediately.",

                        "Do not enter any additional information.",

                        "If you entered a password, change it from the official website or app.",

                        "Enable two-factor authentication.",

                        "If you downloaded a file, do not open it.",

                        "Delete suspicious downloaded files.",

                        "Update your device and browser.",

                        "Run a trusted security scan.",

                        "If banking information was entered, contact your bank immediately."

                    ],

                    dont: [

                        "Do not return to the suspicious website.",

                        "Do not install software recommended by a suspicious pop-up.",

                        "Do not ignore a financial account warning."

                    ]

                },


                {
                    name:
                        "📩 I Received a Phishing Message",

                    title:
                        "Phishing Message",

                    steps: [

                        "Check the sender's email address or phone number carefully.",

                        "Look for urgency, threats or promises of rewards.",

                        "Do not click unexpected links.",

                        "Do not download unknown attachments.",

                        "Verify the request through the company's official website or app.",

                        "Report the message as spam or phishing.",

                        "Block the sender if appropriate."

                    ],

                    dont: [

                        "Never share OTPs.",

                        "Never share passwords.",

                        "Never share recovery codes."

                    ]

                },


                {
                    name:
                        "🔑 I Shared an OTP",

                    title:
                        "OTP Was Shared",

                    steps: [

                        "Identify which account or service the OTP belonged to.",

                        "Change the affected account password immediately.",

                        "Sign out unknown devices.",

                        "Enable two-factor authentication.",

                        "If it was related to banking or payments, contact your bank immediately.",

                        "Check recent transactions.",

                        "Save screenshots and transaction information.",

                        "Monitor the account for further suspicious activity."

                    ],

                    dont: [

                        "Do not share another OTP.",

                        "Do not trust anyone asking for another verification code."

                    ]

                }

            ]

        },


        /* =================================================
           PHONE
           ================================================= */

        "Phone Security": {

            title:
                "📱 Phone Security",

            description:
                "Check apps, permissions, privacy and device security.",

            situations: [

                {
                    name:
                        "📦 I Found an Unknown App",

                    title:
                        "Unknown Application",

                    steps: [

                        "Open your phone's Settings → Apps.",

                        "Find the application you do not recognise.",

                        "Check its permissions.",

                        "Check when it was installed.",

                        "If you do not need or recognise it, uninstall it.",

                        "Restart your phone.",

                        "Update your phone's operating system.",

                        "Run the device's built-in security scan if available."

                    ],

                    dont: [

                        "Do not install random antivirus apps from pop-ups.",

                        "Do not grant unnecessary permissions."

                    ]

                },


                {
                    name:
                        "🎤 Camera or Microphone Seems Suspicious",

                    title:
                        "Camera & Microphone Privacy",

                    steps: [

                        "Open Settings → Privacy or Permission Manager.",

                        "Open Camera permissions.",

                        "Review which applications have camera access.",

                        "Remove access from apps that do not need it.",

                        "Review Microphone permissions.",

                        "Remove unnecessary microphone access.",

                        "Check recently installed applications.",

                        "Update your operating system."

                    ],

                    dont: [

                        "Do not give unknown apps camera or microphone permission.",

                        "Do not install apps from suspicious websites."

                    ]

                },


                {
                    name:
                        "📍 I Am Worried About Location Tracking",

                    title:
                        "Location Privacy",

                    steps: [

                        "Open Settings → Location.",

                        "Review applications with location access.",

                        "Change unnecessary permissions to 'While using the app' or deny them.",

                        "Check location sharing in Google or Apple services.",

                        "Review family or account sharing settings.",

                        "Remove unfamiliar applications."

                    ],

                    dont: [

                        "Do not leave location sharing enabled for unknown services."

                    ]

                }

            ]

        },


        /* =================================================
           ONLINE FRAUD
           ================================================= */

        "Online Fraud": {

            title:
                "💳 Online Fraud",

            description:
                "Take immediate action when money or financial information may be at risk.",

            situations: [

                {
                    name:
                        "💸 I Lost Money",

                    title:
                        "Possible Financial Fraud",

                    steps: [

                        "Contact your bank or payment provider immediately.",

                        "Tell them that you suspect an unauthorised or fraudulent transaction.",

                        "Save the transaction ID.",

                        "Save screenshots, receipts and messages.",

                        "Secure the account used for payment.",

                        "Change compromised passwords.",

                        "Check for other unauthorised transactions.",

                        "Report the incident through the appropriate official channel.",

                        "Keep all evidence."

                    ],

                    links: [

                        {
                            text:
                                "🇮🇳 India Cyber Crime Reporting Portal",

                            url:
                                "https://cybercrime.gov.in/"
                        }

                    ],

                    dont: [

                        "Do not send additional money to the scammer.",

                        "Do not delete evidence.",

                        "Do not trust anyone promising to recover your money for a fee."

                    ]

                },


                {
                    name:
                        "🏦 My Banking Information Was Shared",

                    title:
                        "Banking Information Exposed",

                    steps: [

                        "Contact your bank immediately using the official bank app, website or number printed on your card.",

                        "Explain exactly what information was exposed.",

                        "Ask the bank what security measures are required.",

                        "Monitor transactions.",

                        "Change affected passwords.",

                        "Secure your email account.",

                        "If card information was exposed, ask the bank whether the card should be blocked or replaced."

                    ],

                    dont: [

                        "Never share another OTP or PIN.",

                        "Do not trust unsolicited callers claiming to be bank employees."

                    ]

                },


                {
                    name:
                        "📲 UPI Fraud",

                    title:
                        "UPI Fraud",

                    steps: [

                        "Contact your bank or payment provider immediately.",

                        "Save the transaction ID and UTR/reference number.",

                        "Report the fraudulent transaction through the official bank/payment app.",

                        "Use India's official cybercrime reporting portal when appropriate.",

                        "Secure your UPI-linked bank account.",

                        "Change compromised credentials.",

                        "Monitor your bank account."

                    ],

                    links: [

                        {
                            text:
                                "🇮🇳 Report Cyber Crime in India",

                            url:
                                "https://cybercrime.gov.in/"
                        }

                    ],

                    dont: [

                        "Never share your UPI PIN.",

                        "Never enter your UPI PIN just to receive money.",

                        "Never scan a QR code simply because someone says it is required to receive money."

                    ]

                }

            ]

        },


        /* =================================================
           SUSPICIOUS ACTIVITY
           ================================================= */

        "Suspicious Activity": {

            title:
                "🕵️ Suspicious Activity",

            description:
                "Investigate unusual logins, malware, links and account activity.",

            situations: [

                {
                    name:
                        "🚨 Someone Logged Into My Account",

                    title:
                        "Unknown Login",

                    steps: [

                        "Change your password immediately.",

                        "Sign out all unknown devices.",

                        "Enable two-factor authentication.",

                        "Check recent account activity.",

                        "Review recovery email and phone number.",

                        "Remove unfamiliar connected applications.",

                        "Check whether the attacker changed account settings."

                    ],

                    dont: [

                        "Do not share your password with anyone."

                    ]

                },


                {
                    name:
                        "🦠 I Think My Device Has Malware",

                    title:
                        "Possible Malware",

                    steps: [

                        "Disconnect the device from the internet if active compromise is suspected.",

                        "Check recently installed applications.",

                        "Remove suspicious applications.",

                        "Update your operating system.",

                        "Run a trusted security scan.",

                        "Do not enter sensitive information on the suspected device until it is secured.",

                        "Change important passwords from a trusted device."

                    ],

                    dont: [

                        "Do not install random antivirus software from pop-ups.",

                        "Do not give remote access to strangers."

                    ]

                },


                {
                    name:
                        "🎭 I Saw a Fake Login Page",

                    title:
                        "Fake Login Page",

                    steps: [

                        "Close the page.",

                        "Do not enter credentials.",

                        "Check the website address carefully.",

                        "If you entered a password, change it immediately using the official website.",

                        "Enable two-factor authentication.",

                        "Check recent account login activity.",

                        "Report the phishing page when possible."

                    ],

                    dont: [

                        "Do not use the fake page again.",

                        "Do not enter OTP or card information."

                    ]

                }

            ]

        },


        /* =================================================
           EMERGENCY
           ================================================= */

        "Emergency Help": {

            title:
                "🚨 Emergency Cyber Help",

            description:
                "Immediate steps for urgent cyber incidents.",

            situations: [

                {
                    name:
                        "🔐 My Account Is Actively Compromised",

                    title:
                        "Active Account Compromise",

                    steps: [

                        "Secure your primary email account first.",

                        "Change compromised passwords.",

                        "Sign out unknown devices.",

                        "Enable two-factor authentication.",

                        "Check recovery email and phone number.",

                        "Save screenshots and other evidence.",

                        "Contact the affected service through its official support channel.",

                        "Tell trusted contacts if the attacker is sending messages from your account."

                    ],

                    dont: [

                        "Do not communicate with the suspected attacker unnecessarily.",

                        "Never share OTPs or recovery codes.",

                        "Do not pay recovery scammers."

                    ]

                },


                {
                    name:
                        "💳 My Money Is at Risk",

                    title:
                        "Financial Emergency",

                    steps: [

                        "Contact your bank or payment provider immediately.",

                        "Use only official contact information.",

                        "Ask how to secure the account or stop further transactions.",

                        "Save transaction details.",

                        "Secure your email account.",

                        "Change compromised passwords.",

                        "Report the incident through the appropriate official channel.",

                        "Keep all evidence."

                    ],

                    links: [

                        {
                            text:
                                "🇮🇳 India Cyber Crime Reporting Portal",

                            url:
                                "https://cybercrime.gov.in/"
                        }

                    ],

                    dont: [

                        "Do not send additional money.",

                        "Do not delete evidence.",

                        "Do not trust recovery scammers."

                    ]

                }

            ]

        }

    };


    /* =====================================================
       5. OPEN HELP MODAL
       ===================================================== */

    function openHelp(service) {

        const info =
            helpData[service];

        if (!info) {
            alert(
                "This CyberCare service is currently unavailable."
            );
            return;
        }

        const oldModal =
            document.getElementById(
                "cybercare-modal"
            );

        if (oldModal) {
            oldModal.remove();
        }


        const overlay =
            document.createElement("div");

        overlay.id =
            "cybercare-modal";


        overlay.style.cssText = `
            position:fixed;
            inset:0;
            background:rgba(0,0,0,0.78);
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
            max-height:92vh;
            overflow-y:auto;
            background:#ffffff;
            color:#111827;
            border-radius:22px;
            padding:26px;
            position:relative;
            box-shadow:0 25px 70px rgba(0,0,0,0.45);
            font-family:Arial,sans-serif;
        `;


        let buttons = "";


        info.situations.forEach(
            function (item, index) {

                buttons += `

                    <button
                        type="button"
                        class="cyber-situation"
                        data-index="${index}"
                        style="
                            width:100%;
                            padding:16px;
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

                        ${item.name}

                    </button>

                `;
            }
        );


        modal.innerHTML = `

            <button
                type="button"
                id="closeCyberCare"
                style="
                    position:absolute;
                    top:12px;
                    right:15px;
                    width:40px;
                    height:40px;
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
                    letter-spacing:1px;
                    color:#2563eb;
                    margin-bottom:8px;
                ">
                    CYBERCARE HELP
                </div>


                <h2 style="
                    margin:0 0 10px 0;
                    line-height:1.3;
                ">
                    ${info.title}
                </h2>


                <p style="
                    margin-top:0;
                    color:#64748b;
                ">
                    ${info.description}
                </p>

            </div>


            <h3 style="
                margin-top:25px;
                margin-bottom:10px;
            ">
                👇 What happened?
            </h3>


            <div>
                ${buttons}
            </div>


            <div
                id="cybercareResult"
                style="margin-top:20px;"
            >

                <div style="
                    padding:20px;
                    background:#f8fafc;
                    border-radius:15px;
                    text-align:center;
                    color:#64748b;
                ">

                    🛡️ Select an option above to get
                    step-by-step help.

                </div>

            </div>

        `;


        overlay.appendChild(modal);

        document.body.appendChild(overlay);


        document
            .getElementById("closeCyberCare")
            .addEventListener(
                "click",
                function () {

                    overlay.remove();

                }
            );


        overlay.addEventListener(
            "click",
            function (event) {

                if (event.target === overlay) {
                    overlay.remove();
                }

            }
        );


        const situationButtons =
            modal.querySelectorAll(
                ".cyber-situation"
            );


        situationButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const index =
                            Number(
                                button.dataset.index
                            );

                        showResult(
                            modal,
                            info.situations[index]
                        );

                    }
                );

            }
        );

    }


    /* =====================================================
       6. SHOW RESULT
       ===================================================== */

    function showResult(
        modal,
        situation
    ) {

        const result =
            modal.querySelector(
                "#cybercareResult"
            );


        const steps =
            situation.steps
                .map(
                    function (step, index) {

                        return `

                            <li style="
                                margin-bottom:12px;
                                line-height:1.55;
                            ">

                                <strong>
                                    Step ${index + 1}:
                                </strong>

                                ${step}

                            </li>

                        `;

                    }
                )
                .join("");


        const dont =
            situation.dont
                .map(
                    function (item) {

                        return `

                            <li style="
                                margin-bottom:10px;
                            ">
                                ${item}
                            </li>

                        `;

                    }
                )
                .join("");


        let linksHTML = "";


        if (
            situation.links &&
            situation.links.length
        ) {

            linksHTML = `

                <div style="
                    margin-top:20px;
                    padding:18px;
                    background:#ecfdf5;
                    border:1px solid #bbf7d0;
                    border-radius:14px;
                ">

                    <h4 style="
                        margin:0 0 12px 0;
                    ">
                        🌐 Official Websites
                    </h4>


                    <p style="
                        font-size:13px;
                        color:#475569;
                        margin-bottom:12px;
                    ">

                        Use only official websites.
                        Avoid people or websites claiming
                        to provide unofficial recovery.

                    </p>


                    ${situation.links.map(
                        function (link) {

                            return `

                                <a
                                    href="${link.url}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style="
                                        display:block;
                                        margin:8px 0;
                                        padding:12px 14px;
                                        border-radius:10px;
                                        background:#ffffff;
                                        color:#166534;
                                        border:1px solid #bbf7d0;
                                        text-decoration:none;
                                        font-weight:700;
                                    "
                                >

                                    ${link.text}

                                </a>

                            `;

                        }
                    ).join("")}

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


                <h3 style="
                    margin-top:0;
                ">
                    ⚡ ${situation.title}
                </h3>


                <h4 style="
                    margin-top:22px;
                ">
                    ✅ What you should do
                </h4>


                <ol style="
                    padding-left:22px;
                ">

                    ${steps}

                </ol>


                ${linksHTML}


                <div style="
                    margin-top:20px;
                    padding:16px;
                    background:#fff1f2;
                    border:1px solid #fecdd3;
                    border-radius:12px;
                ">

                    <h4 style="
                        margin-top:0;
                    ">
                        ⚠️ What you should NOT do
                    </h4>


                    <ul style="
                        padding-left:22px;
                    ">

                        ${dont}

                    </ul>

                </div>


                <div style="
                    margin-top:20px;
                    padding:16px;
                    background:#eff6ff;
                    border:1px solid #bfdbfe;
                    border-radius:12px;
                ">

                    <h4 style="
                        margin-top:0;
                    ">
                        📸 Save useful evidence
                    </h4>


                    <p style="
                        margin-bottom:0;
                        color:#475569;
                    ">

                        Keep screenshots, messages,
                        emails, receipts, usernames,
                        transaction IDs and other relevant
                        evidence when appropriate.

                    </p>

                </div>


                <div style="
                    margin-top:20px;
                    padding:16px;
                    background:#fffbeb;
                    border:1px solid #fde68a;
                    border-radius:12px;
                ">

                    <h4 style="
                        margin-top:0;
                    ">
                        🛡️ Important
                    </h4>


                    <p style="
                        margin-bottom:0;
                        color:#475569;
                    ">

                        CyberCare provides general
                        cybersecurity guidance. For financial
                        loss or serious threats, contact the
                        relevant official service immediately.

                    </p>

                </div>

            </div>

        `;


        result.scrollIntoView({
            behavior:"smooth",
            block:"nearest"
        });

    }


    /* =====================================================
       7. SERVICE BUTTONS
       ===================================================== */

    const helpButtons =
        document.querySelectorAll(".help-btn");


    helpButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const service =
                        button.getAttribute(
                            "data-service"
                        );

                    openHelp(service);

                }
            );

        }
    );


    /* =====================================================
       8. EMERGENCY BUTTON
       ===================================================== */

    const emergencyButton =
        document.getElementById(
            "emergencyBtn"
        );


    if (emergencyButton) {

        emergencyButton.addEventListener(
            "click",
            function () {

                openHelp(
                    "Emergency Help"
                );

            }
        );

    }


    /* =====================================================
       9. MENU NAVIGATION
       ===================================================== */

    const menuItems =
        document.querySelectorAll(
            ".menu-item"
        );


    menuItems.forEach(
        function (item) {

            item.addEventListener(
                "click",
                function () {

                    const target =
                        item.getAttribute(
                            "data-menu"
                        );


                    closeSideMenu();


                    if (
                        target === "emergency"
                    ) {

                        setTimeout(
                            function () {

                                openHelp(
                                    "Emergency Help"
                                );

                            },
                            200
                        );

                        return;
                    }


                    const section =
                        document.getElementById(
                            target
                        );


                    if (section) {

                        setTimeout(
                            function () {

                                section.scrollIntoView({
                                    behavior:"smooth",
                                    block:"start"
                                });

                            },
                            200
                        );

                    }

                }
            );

        }
    );


    /* =====================================================
       10. LEARN SECTION
       ===================================================== */

    const learnBtn =
        document.getElementById(
            "learnBtn"
        );


    if (learnBtn) {

        learnBtn.addEventListener(
            "click",
            function () {

                openLearning();

            }
        );

    }


    function openLearning() {

        const overlay =
            document.createElement("div");

        overlay.style.cssText = `
            position:fixed;
            inset:0;
            background:rgba(0,0,0,0.75);
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
            max-width:700px;
            max-height:90vh;
            overflow-y:auto;
            background:#ffffff;
            color:#111827;
            border-radius:22px;
            padding:26px;
            position:relative;
        `;


        modal.innerHTML = `

            <button
                id="closeLearning"
                style="
                    position:absolute;
                    top:12px;
                    right:15px;
                    width:38px;
                    height:38px;
                    border:none;
                    border-radius:10px;
                    background:#f1f5f9;
                    font-size:20px;
                "
            >
                ✕
            </button>


            <h2>
                🎓 Cybersecurity Basics
            </h2>


            <p>
                Learn these basic rules to stay safer online.
            </p>


            <hr>


            <h3>🔐 1. Protect Your Passwords</h3>

            <p>
                Use long, unique passwords for important accounts.
                Never reuse the same password everywhere.
            </p>


            <h3>📲 2. Enable 2FA</h3>

            <p>
                Turn on two-factor authentication for email,
                social media, banking and other important accounts.
            </p>


            <h3>🚨 3. Never Share OTP</h3>

            <p>
                Banks, platforms and legitimate support should
                never need you to give your OTP to another person.
            </p>


            <h3>🔗 4. Check Links</h3>

            <p>
                Before entering information, check the website
                address carefully.
            </p>


            <h3>📱 5. Keep Your Phone Updated</h3>

            <p>
                Install operating system and security updates
                from official sources.
            </p>


            <h3>💳 6. Be Careful With Payments</h3>

            <p>
                Never send money simply because someone creates
                urgency or threatens you.
            </p>


            <h3>🧠 7. Verify Before You Trust</h3>

            <p>
                If a message claims to be from a bank, company,
                friend or government organisation, verify it using
                an official channel.
            </p>


            <h3>📸 8. Keep Evidence</h3>

            <p>
                Save screenshots, messages, emails and transaction
                details when something suspicious happens.
            </p>

        `;


        overlay.appendChild(modal);

        document.body.appendChild(overlay);


        modal
            .querySelector("#closeLearning")
            .addEventListener(
                "click",
                function () {

                    overlay.remove();

                }
            );

    }


    /* =====================================================
       11. CYBERCARE TOOLS
       ===================================================== */

    const toolButtons =
        document.querySelectorAll(
            ".tool-btn"
        );


    toolButtons.forEach(
        function (button, index) {

            button.style.cursor = "pointer";


            button.addEventListener(
                "click",
                function () {

                    if (index === 0) {
                        openScamChecker();
                    }

                    if (index === 1) {
                        openPasswordChecker();
                    }

                    if (index === 2) {
                        openPrivacyChecklist();
                    }

                    if (index === 3) {
                        openSafetyScore();
                    }

                }
            );

        }
    );


    /* =====================================================
       12. TOOL MODAL HELPER
       ===================================================== */

    function createToolModal(
        title,
        content
    ) {

        const overlay =
            document.createElement("div");

        overlay.style.cssText = `
            position:fixed;
            inset:0;
            background:rgba(0,0,0,0.78);
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
            background:#ffffff;
            color:#111827;
            border-radius:22px;
            padding:26px;
            position:relative;
        `;


        modal.innerHTML = `

            <button
                class="tool-close"
                style="
                    position:absolute;
                    top:12px;
                    right:15px;
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


            <h2>
                ${title}
            </h2>


            <div>
                ${content}
            </div>

        `;


        overlay.appendChild(modal);

        document.body.appendChild(overlay);


        modal
            .querySelector(".tool-close")
            .addEventListener(
                "click",
                function () {

                    overlay.remove();

                }
            );


        return {
            overlay:overlay,
            modal:modal
        };

    }


    /* =====================================================
       13. SCAM CHECKER
       ===================================================== */

    function openScamChecker() {

        const tool =
            createToolModal(

                "🔎 Scam Checker",

                `

                <p>
                    Paste a suspicious message below.
                    CyberCare will look for common warning signs.
                </p>


                <textarea
                    id="scamInput"
                    placeholder="Paste the suspicious message here..."
                    style="
                        width:100%;
                        min-height:150px;
                        padding:14px;
                        border:1px solid #cbd5e1;
                        border-radius:12px;
                        resize:vertical;
                        font-family:Arial;
                        box-sizing:border-box;
                    "
                ></textarea>


                <button
                    id="checkScam"
                    style="
                        margin-top:12px;
                        width:100%;
                        padding:13px;
                        border:none;
                        border-radius:11px;
                        background:#2563eb;
                        color:#ffffff;
                        font-weight:bold;
                        cursor:pointer;
                    "
                >
                    🔎 Check Message
                </button>


                <div
                    id="scamResult"
                    style="margin-top:18px;"
                ></div>

                `

            );


        tool.modal
            .querySelector("#checkScam")
            .addEventListener(
                "click",
                function () {

                    const text =
                        tool.modal
                            .querySelector(
                                "#scamInput"
                            )
                            .value
                            .toLowerCase();


                    if (!text.trim()) {

                        alert(
                            "Please paste a message first."
                        );

                        return;
                    }


                    const warningWords = [

                        "urgent",
                        "verify",
                        "verification",
                        "otp",
                        "password",
                        "click",
                        "winner",
                        "prize",
                        "blocked",
                        "suspended",
                        "bank",
                        "upi",
                        "refund",
                        "limited time",
                        "claim",
                        "login",
                        "account"

                    ];


                    let matches = 0;


                    warningWords.forEach(
                        function (word) {

                            if (
                                text.includes(word)
                            ) {
                                matches++;
                            }

                        }
                    );


                    let message = "";


                    if (matches >= 4) {

                        message = `

                            <div style="
                                padding:18px;
                                background:#fff1f2;
                                border-radius:14px;
                                border:1px solid #fecdd3;
                            ">

                                <h3>
                                    🚨 High Warning Signs
                                </h3>

                                <p>
                                    This message contains several
                                    common scam/phishing indicators.
                                    Do not click links or share OTP,
                                    password or financial information.
                                </p>

                            </div>

                        `;

                    } else if (matches >= 2) {

                        message = `

                            <div style="
                                padding:18px;
                                background:#fffbeb;
                                border-radius:14px;
                                border:1px solid #fde68a;
                            ">

                                <h3>
                                    ⚠️ Be Careful
                                </h3>

                                <p>
                                    Some warning signs were detected.
                                    Verify the request through an
                                    official website or app.
                                </p>

                            </div>

                        `;

                    } else {

                        message = `

                            <div style="
                                padding:18px;
                                background:#ecfdf5;
                                border-radius:14px;
                                border:1px solid #bbf7d0;
                            ">

                                <h3>
                                    🟢 No Common Warning Signs Detected
                                </h3>

                                <p>
                                    This does not guarantee that the
                                    message is safe. Always verify
                                    important requests independently.
                                </p>

                            </div>

                        `;

                    }


                    tool.modal
                        .querySelector(
                            "#scamResult"
                        )
                        .innerHTML = message;

                }
            );

    }


    /* =====================================================
       14. PASSWORD CHECKER
       ===================================================== */

    function openPasswordChecker() {

        const tool =
            createToolModal(

                "🔐 Password Checker",

                `

                <p>
                    For privacy, this tool does not send your
                    password anywhere. It only checks basic
                    characteristics in your browser.
                </p>


                <input
                    id="passwordInput"
                    type="password"
                    placeholder="Enter a password to check"
                    style="
                        width:100%;
                        padding:14px;
                        border:1px solid #cbd5e1;
                        border-radius:12px;
                        box-sizing:border-box;
                    "
                >


                <button
                    id="checkPassword"
                    style="
                        margin-top:12px;
                        width:100%;
                        padding:13px;
                        border:none;
                        border-radius:11px;
                        background:#2563eb;
                        color:white;
                        font-weight:bold;
                        cursor:pointer;
                    "
                >
                    🔐 Check Password
                </button>


                <div
                    id="passwordResult"
                    style="margin-top:18px;"
                ></div>

                `

            );


        tool.modal
            .querySelector("#checkPassword")
            .addEventListener(
                "click",
                function () {

                    const password =
                        tool.modal
                            .querySelector(
                                "#passwordInput"
                            )
                            .value;


                    let score = 0;


                    if (
                        password.length >= 12
                    ) score++;


                    if (
                        /[A-Z]/.test(password)
                    ) score++;


                    if (
                        /[a-z]/.test(password)
                    ) score++;


                    if (
                        /[0-9]/.test(password)
                    ) score++;


                    if (
                        /[^A-Za-z0-9]/.test(password)
                    ) score++;


                    let result = "";


                    if (password.length === 0) {

                        result =
                            "Please enter a password.";

                    } else if (score <= 2) {

                        result = `
                            <div style="
                                padding:16px;
                                background:#fff1f2;
                                border-radius:12px;
                            ">
                                🔴 Weak password.
                                Use a longer and unique password.
                            </div>
                        `;

                    } else if (score <= 4) {

                        result = `
                            <div style="
                                padding:16px;
                                background:#fffbeb;
                                border-radius:12px;
                            ">
                                🟡 Moderate password.
                                Consider making it longer and unique.
                            </div>
                        `;

                    } else {

                        result = `
                            <div style="
                                padding:16px;
                                background:#ecfdf5;
                                border-radius:12px;
                            ">
                                🟢 Strong characteristics detected.
                                Still avoid reusing this password.
                            </div>
                        `;

                    }


                    tool.modal
                        .querySelector(
                            "#passwordResult"
                        )
                        .innerHTML = result;

                }
            );

    }


    /* =====================================================
       15. PRIVACY CHECKLIST
       ===================================================== */

    function openPrivacyChecklist() {

        const items = [

            "My important accounts have 2FA enabled.",

            "I use unique passwords for important accounts.",

            "I review logged-in devices regularly.",

            "I review app permissions.",

            "My phone operating system is updated.",

            "I do not share OTPs or recovery codes.",

            "I check links before opening them.",

            "I have recovery email/phone information updated.",

            "I review privacy settings on social media.",

            "I keep important evidence when fraud occurs."

        ];


        const checkboxes =
            items.map(
                function (item, index) {

                    return `

                        <label style="
                            display:block;
                            padding:12px;
                            margin:7px 0;
                            background:#f8fafc;
                            border-radius:10px;
                            cursor:pointer;
                        ">

                            <input
                                type="checkbox"
                                class="privacy-check"
                                data-index="${index}"
                            >

                            ${item}

                        </label>

                    `;

                }
            ).join("");


        const tool =
            createToolModal(

                "📱 Privacy Checklist",

                `

                    <p>
                        Tick the items you already follow.
                    </p>


                    <div>
                        ${checkboxes}
                    </div>


                    <button
                        id="privacyScore"
                        style="
                            width:100%;
                            margin-top:15px;
                            padding:13px;
                            border:none;
                            border-radius:11px;
                            background:#2563eb;
                            color:white;
                            font-weight:bold;
                        "
                    >
                        🛡️ Check My Progress
                    </button>


                    <div
                        id="privacyResult"
                        style="margin-top:15px;"
                    ></div>

                `

            );


        tool.modal
            .querySelector("#privacyScore")
            .addEventListener(
                "click",
                function () {

                    const checked =
                        tool.modal
                            .querySelectorAll(
                                ".privacy-check:checked"
                            ).length;


                    const total =
                        items.length;


                    const percentage =
                        Math.round(
                            (checked / total) * 100
                        );


                    tool.modal
                        .querySelector(
                            "#privacyResult"
                        )
                        .innerHTML = `

                            <div style="
                                padding:18px;
                                background:#eff6ff;
                                border-radius:14px;
                                text-align:center;
                            ">

                                <h3>
                                    🛡️ ${percentage}%
                                </h3>

                                <p>
                                    You completed
                                    ${checked} of ${total}
                                    safety checks.
                                </p>

                            </div>

                        `;

                }
            );

    }


    /* =====================================================
       16. CYBER SAFETY SCORE
       ===================================================== */

    function openSafetyScore() {

        const questions = [

            "Do you use 2FA on important accounts?",

            "Do you use unique passwords?",

            "Do you keep your phone updated?",

            "Do you avoid sharing OTPs?",

            "Do you check links before clicking?",

            "Do you review account login activity?",

            "Do you review app permissions?",

            "Do you avoid unknown downloads?",

            "Do you keep evidence of suspicious activity?",

            "Do you verify financial requests independently?"

        ];


        const questionHTML =
            questions.map(
                function (question, index) {

                    return `

                        <label style="
                            display:block;
                            margin:10px 0;
                            padding:13px;
                            background:#f8fafc;
                            border-radius:10px;
                        ">

                            <input
                                type="checkbox"
                                class="score-check"
                            >

                            ${question}

                        </label>

                    `;

                }
            ).join("");


        const tool =
            createToolModal(

                "🛡️ Cyber Safety Score",

                `

                <p>
                    Select every security habit you currently follow.
                </p>


                ${questionHTML}


                <button
                    id="calculateScore"
                    style="
                        width:100%;
                        padding:13px;
                        margin-top:10px;
                        border:none;
                        border-radius:11px;
                        background:#2563eb;
                        color:#ffffff;
                        font-weight:bold;
                    "
                >
                    🛡️ Calculate Score
                </button>


                <div
                    id="scoreResult"
                    style="margin-top:18px;"
                ></div>

                `

            );


        tool.modal
            .querySelector("#calculateScore")
            .addEventListener(
                "click",
                function () {

                    const checked =
                        tool.modal
                            .querySelectorAll(
                                ".score-check:checked"
                            ).length;


                    const score =
                        Math.round(
                            (checked / questions.length) *
                            100
                        );


                    let level;


                    if (score >= 80) {

                        level =
                            "🟢 Excellent";

                    } else if (score >= 60) {

                        level =
                            "🟡 Good";

                    } else if (score >= 40) {

                        level =
                            "🟠 Needs Improvement";

                    } else {

                        level =
                            "🔴 High Risk Habits";

                    }


                    tool.modal
                        .querySelector(
                            "#scoreResult"
                        )
                        .innerHTML = `

                            <div style="
                                padding:20px;
                                text-align:center;
                                background:#eff6ff;
                                border-radius:15px;
                            ">

                                <h2>
                                    ${score}/100
                                </h2>

                                <h3>
                                    ${level}
                                </h3>

                                <p>
                                    This is an educational
                                    self-check, not a professional
                                    security assessment.
                                </p>

                            </div>

                        `;

                }
            );

    }


    /* =====================================================
       17. INITIAL LANGUAGE
       ===================================================== */

    updateLanguage();


    /* =====================================================
       18. STARTUP
       ===================================================== */

    console.log(
        "🛡️ CyberCare loaded successfully."
    );

});
