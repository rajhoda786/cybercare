document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       CYBERCARE
       Main JavaScript
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
       2. MENU NAVIGATION
    ===================================================== */

    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(function (item) {

        item.addEventListener("click", function () {

            const target = item.getAttribute("data-menu");

            closeSideMenu();

            if (target === "emergency") {
                setTimeout(function () {
                    openHelp("Emergency Help");
                }, 200);
                return;
            }

            const section = document.getElementById(target);

            if (section) {

                setTimeout(function () {

                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }, 200);
            }

        });

    });


    /* =====================================================
       3. DARK / LIGHT MODE
    ===================================================== */

    const themeBtn = document.getElementById("themeBtn");

    const savedTheme =
        localStorage.getItem("cybercare-theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (themeBtn) {
            themeBtn.textContent = "☀️";
        }

    } else {

        if (themeBtn) {
            themeBtn.textContent = "🌙";
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
       4. LANGUAGE SYSTEM
    ===================================================== */

    const languageBtn =
        document.getElementById("languageBtn");

    const languageText =
        document.getElementById("languageText");

    let currentLanguage =
        localStorage.getItem("cybercare-language") || "EN";


    /* =====================================================
       TRANSLATION DATA
    ===================================================== */

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

            accountRecovery:
                "Account Recovery",

            accountRecoveryText:
                "Recover and secure hacked or compromised social media and online accounts.",

            scam:
                "Scam & Phishing",

            scamText:
                "Check suspicious messages, WhatsApp links, fake websites and OTP scams.",

            phone:
                "Phone Security",

            phoneText:
                "Check unknown apps, permissions, location, camera and microphone access.",

            fraud:
                "Online Fraud",

            fraudText:
                "Get guidance if money, UPI, bank or payment information is involved.",

            suspicious:
                "Suspicious Activity",

            suspiciousText:
                "Understand suspicious links, malware, fake login pages and unusual activity.",

            emergencyHelp:
                "Emergency Help",

            emergencyText:
                "Immediate safety steps when your account, device or money may be at risk.",

            getHelp:
                "Get Help →",

            learn:
                "🎓 Learn Cybersecurity",

            learnText:
                "Learn simple habits that can make your digital life safer.",

            startLearning:
                "Start Learning →",

            tools:
                "🛠️ CyberCare Tools",

            toolsText:
                "Simple tools to improve your digital safety.",

            scamChecker:
                "Scam Checker",

            scamCheckerText:
                "Check suspicious messages for common warning signs.",

            passwordChecker:
                "Password Checker",

            passwordCheckerText:
                "Learn how to create stronger and safer passwords.",

            privacy:
                "Privacy Checklist",

            privacyText:
                "Review important privacy and security settings.",

            safetyScore:
                "Cyber Safety Score",

            safetyScoreText:
                "Check your overall cybersecurity habits.",

            coming:
                "Coming Soon",

            about:
                "🛡️ About CyberCare",

            aboutText:
                "CyberCare provides simple, practical cybersecurity guidance to help people respond to common digital safety problems.",

            aboutText2:
                "Stay alert. Protect your accounts. Never share passwords, OTPs or recovery codes.",

            footer:
                "Stay Safe. Stay Secure."

        },


        BN: {

            logo: "সাইবারকেয়ার",

            heroTitle:
                "মানুষকে সুরক্ষিত রাখি। ডিজিটাল জীবন নিরাপদ রাখি।",

            heroText:
                "হ্যাক হওয়া অ্যাকাউন্ট, প্রতারণা, স্ক্যাম, গোপনীয়তা সমস্যা এবং বিভিন্ন ডিজিটাল ঝুঁকিতে সহজ ও বাস্তবসম্মত নিরাপত্তা নির্দেশনা।",

            emergency:
                "🚨 আমার এখনই সাহায্য দরকার",

            servicesTitle:
                "আমরা কীভাবে সাহায্য করতে পারি?",

            servicesText:
                "আপনার সমস্যাটি নির্বাচন করুন এবং ধাপে ধাপে সমাধানের নির্দেশনা পান।",

            accountRecovery:
                "অ্যাকাউন্ট পুনরুদ্ধার",

            accountRecoveryText:
                "হ্যাক বা দখল হয়ে যাওয়া সোশ্যাল মিডিয়া ও অনলাইন অ্যাকাউন্ট পুনরুদ্ধার এবং নিরাপদ করুন।",

            scam:
                "স্ক্যাম ও ফিশিং",

            scamText:
                "সন্দেহজনক মেসেজ, WhatsApp লিংক, ভুয়া ওয়েবসাইট এবং OTP স্ক্যাম সম্পর্কে সাহায্য পান।",

            phone:
                "ফোন নিরাপত্তা",

            phoneText:
                "অপরিচিত অ্যাপ, পারমিশন, লোকেশন, ক্যামেরা এবং মাইক্রোফোন অ্যাক্সেস পরীক্ষা করুন।",

            fraud:
                "অনলাইন প্রতারণা",

            fraudText:
                "টাকা, UPI, ব্যাংক বা পেমেন্ট সংক্রান্ত তথ্য ঝুঁকিতে পড়লে কী করবেন তা জানুন।",

            suspicious:
                "সন্দেহজনক কার্যকলাপ",

            suspiciousText:
                "সন্দেহজনক লিংক, ম্যালওয়্যার, ভুয়া লগইন পেজ এবং অস্বাভাবিক অ্যাক্টিভিটি সম্পর্কে জানুন।",

            emergencyHelp:
                "জরুরি সাহায্য",

            emergencyText:
                "অ্যাকাউন্ট, ফোন বা টাকা ঝুঁকিতে থাকলে দ্রুত নিরাপত্তামূলক পদক্ষেপ নিন।",

            getHelp:
                "সাহায্য নিন →",

            learn:
                "🎓 সাইবার নিরাপত্তা শিখুন",

            learnText:
                "আপনার ডিজিটাল জীবনকে আরও নিরাপদ করার সহজ অভ্যাসগুলো শিখুন।",

            startLearning:
                "শেখা শুরু করুন →",

            tools:
                "🛠️ CyberCare Tools",

            toolsText:
                "আপনার ডিজিটাল নিরাপত্তা বাড়ানোর জন্য সহজ টুল।",

            scamChecker:
                "স্ক্যাম চেকার",

            scamCheckerText:
                "সন্দেহজনক মেসেজে সাধারণ সতর্কতার লক্ষণগুলো খুঁজে দেখুন।",

            passwordChecker:
                "পাসওয়ার্ড চেকার",

            passwordCheckerText:
                "কীভাবে আরও শক্তিশালী ও নিরাপদ পাসওয়ার্ড তৈরি করবেন তা জানুন।",

            privacy:
                "প্রাইভেসি চেকলিস্ট",

            privacyText:
                "গুরুত্বপূর্ণ প্রাইভেসি ও সিকিউরিটি সেটিংস পরীক্ষা করুন।",

            safetyScore:
                "Cyber Safety Score",

            safetyScoreText:
                "আপনার সামগ্রিক সাইবার নিরাপত্তার অভ্যাস পরীক্ষা করুন।",

            coming:
                "শীঘ্রই আসছে",

            about:
                "🛡️ CyberCare সম্পর্কে",

            aboutText:
                "CyberCare সাধারণ ডিজিটাল নিরাপত্তা সমস্যায় মানুষকে সহজ ও বাস্তবসম্মত সাইবার নিরাপত্তা নির্দেশনা দেয়।",

            aboutText2:
                "সতর্ক থাকুন। আপনার অ্যাকাউন্ট সুরক্ষিত রাখুন। কখনো Password, OTP বা Recovery Code কারও সঙ্গে শেয়ার করবেন না।",

            footer:
                "নিরাপদ থাকুন। সুরক্ষিত থাকুন।"

        }

    };


    /* =====================================================
       APPLY LANGUAGE
    ===================================================== */

    function applyLanguage(lang) {

        const t = translations[lang];

        if (!t) return;


        /* Logo */

        const logoText =
            document.querySelector(".logo span");

        if (logoText) {
            logoText.textContent = t.logo;
        }


        /* Hero */

        const heroH2 =
            document.querySelector(".hero h2");

        const heroP =
            document.querySelector(".hero p");

        if (heroH2) {
            heroH2.textContent = t.heroTitle;
        }

        if (heroP) {
            heroP.textContent = t.heroText;
        }


        /* Emergency */

        if (document.getElementById("emergencyBtn")) {
            document.getElementById("emergencyBtn").textContent =
                t.emergency;
        }


        /* Services */

        const servicesH2 =
            document.querySelector(".services > h2");

        const servicesP =
            document.querySelector(".services .section-text");

        if (servicesH2) {
            servicesH2.textContent = t.servicesTitle;
        }

        if (servicesP) {
            servicesP.textContent = t.servicesText;
        }


        /* Service Cards */

        const cards =
            document.querySelectorAll(".service-card");

        if (cards.length >= 6) {

            cards[0].querySelector("h3").textContent =
                t.accountRecovery;

            cards[0].querySelector("p").textContent =
                t.accountRecoveryText;

            cards[1].querySelector("h3").textContent =
                t.scam;

            cards[1].querySelector("p").textContent =
                t.scamText;

            cards[2].querySelector("h3").textContent =
                t.phone;

            cards[2].querySelector("p").textContent =
                t.phoneText;

            cards[3].querySelector("h3").textContent =
                t.fraud;

            cards[3].querySelector("p").textContent =
                t.fraudText;

            cards[4].querySelector("h3").textContent =
                t.suspicious;

            cards[4].querySelector("p").textContent =
                t.suspiciousText;

            cards[5].querySelector("h3").textContent =
                t.emergencyHelp;

            cards[5].querySelector("p").textContent =
                t.emergencyText;


            cards.forEach(function (card) {

                const btn =
                    card.querySelector(".help-btn");

                if (btn) {
                    btn.textContent = t.getHelp;
                }

            });

        }


        /* Learn */

        const learnH2 =
            document.querySelector(".extra-section > h2");

        const learnP =
            document.querySelector(".extra-section .section-text");

        const learnButton =
            document.getElementById("learnBtn");

        if (learnH2) {
            learnH2.textContent = t.learn;
        }

        if (learnP) {
            learnP.textContent = t.learnText;
        }

        if (learnButton) {
            learnButton.textContent = t.startLearning;
        }


        /* Tools */

        const toolsH2 =
            document.querySelector(".tools > h2");

        const toolsP =
            document.querySelector(".tools .section-text");

        if (toolsH2) {
            toolsH2.textContent = t.tools;
        }

        if (toolsP) {
            toolsP.textContent = t.toolsText;
        }


        const toolCards =
            document.querySelectorAll(".tool-card");

        if (toolCards.length >= 4) {

            toolCards[0].querySelector("h3").textContent =
                t.scamChecker;

            toolCards[0].querySelector("p").textContent =
                t.scamCheckerText;

            toolCards[1].querySelector("h3").textContent =
                t.passwordChecker;

            toolCards[1].querySelector("p").textContent =
                t.passwordCheckerText;

            toolCards[2].querySelector("h3").textContent =
                t.privacy;

            toolCards[2].querySelector("p").textContent =
                t.privacyText;

            toolCards[3].querySelector("h3").textContent =
                t.safetyScore;

            toolCards[3].querySelector("p").textContent =
                t.safetyScoreText;


            toolCards.forEach(function (card) {

                const button =
                    card.querySelector(".tool-btn");

                if (button) {
                    button.textContent = t.coming;
                }

            });

        }


        /* About */

        const aboutH2 =
            document.querySelector(".about-section > h2");

        const aboutParagraphs =
            document.querySelectorAll(".about-section p");

        if (aboutH2) {
            aboutH2.textContent = t.about;
        }

        if (aboutParagraphs.length >= 2) {

            aboutParagraphs[0].textContent =
                t.aboutText;

            aboutParagraphs[1].textContent =
                t.aboutText2;

        }


        /* Footer */

        const footerText =
            document.querySelector("footer p:not(.copyright)");

        if (footerText) {
            footerText.textContent = t.footer;
        }


        /* Language button */

        if (languageText) {
            languageText.textContent = lang;
        }


        document.documentElement.lang =
            lang === "BN" ? "bn" : "en";


        localStorage.setItem(
            "cybercare-language",
            lang
        );

    }


    /* Apply saved language */

    applyLanguage(currentLanguage);


    /* Language button */

    if (languageBtn) {

        languageBtn.addEventListener("click", function () {

            if (currentLanguage === "EN") {

                currentLanguage = "BN";

            } else {

                currentLanguage = "EN";

            }

            applyLanguage(currentLanguage);

        });

    }


    /* =====================================================
       5. HELP DATA
    ===================================================== */

    const helpData = {

        "Account Recovery": {

            title: "🔐 Account Recovery",

            description:
                "Choose the account problem you are facing.",

            situations: [

                {
                    name: "📘 Facebook account hacked",

                    title: "Facebook Account Recovery",

                    steps: [

                        "First secure the email account connected to Facebook if you suspect it is also compromised.",

                        "Go to Facebook's official account recovery page and choose the option that matches your problem.",

                        "Enter your Facebook email address, phone number or username when requested.",

                        "Follow Facebook's identity and recovery instructions.",

                        "If you still have access to the account, immediately change your password.",

                        "Check the email address and phone number connected to the account.",

                        "Open Facebook's security/login activity and sign out devices you do not recognise.",

                        "Enable two-factor authentication after recovering the account."

                    ],

                    dont: [

                        "Do not give your password, OTP or recovery code to anyone.",

                        "Do not pay random people who claim they can recover your Facebook account.",

                        "Do not use unofficial Facebook recovery websites."

                    ],

                    links: [

                        {
                            label: "Official Facebook Account Recovery",
                            url: "https://www.facebook.com/hacked"
                        },

                        {
                            label: "Facebook Help Center",
                            url: "https://www.facebook.com/help/"
                        }

                    ]

                },


                {
                    name: "📸 Instagram account hacked",

                    title: "Instagram Account Recovery",

                    steps: [

                        "Check your email for a security message from Instagram.",

                        "Use Instagram's official recovery process.",

                        "If you can still access the account, change the password immediately.",

                        "Review login activity and remove devices you do not recognise.",

                        "Check whether your email address or phone number was changed.",

                        "Enable two-factor authentication."

                    ],

                    dont: [

                        "Do not trust random Instagram recovery agents.",

                        "Never send login codes or recovery codes to another person."

                    ],

                    links: [

                        {
                            label: "Official Instagram Help",
                            url: "https://help.instagram.com/"
                        }

                    ]

                },


                {
                    name: "💬 WhatsApp account hacked",

                    title: "WhatsApp Account Recovery",

                    steps: [

                        "Open the official WhatsApp application.",

                        "Register your phone number again.",

                        "Enter the verification code sent to your phone.",

                        "Check WhatsApp > Settings > Linked Devices.",

                        "Log out devices you do not recognise.",

                        "Enable WhatsApp two-step verification."

                    ],

                    dont: [

                        "Never share your WhatsApp verification code.",

                        "Do not give your two-step verification PIN to anyone."

                    ],

                    links: [

                        {
                            label: "Official WhatsApp Help Center",
                            url: "https://faq.whatsapp.com/"
                        }

                    ]

                },


                {
                    name: "▶️ YouTube / Google account hacked",

                    title: "Google / YouTube Account Recovery",

                    steps: [

                        "Secure your Google account first because YouTube is connected to it.",

                        "Use Google's official account recovery process.",

                        "Change your password after recovery.",

                        "Review recent security activity.",

                        "Remove unknown devices.",

                        "Enable two-step verification."

                    ],

                    dont: [

                        "Do not pay unofficial recovery agents.",

                        "Never share recovery codes."

                    ],

                    links: [

                        {
                            label: "Official Google Account Recovery",
                            url: "https://accounts.google.com/signin/recovery"
                        },

                        {
                            label: "Google Security Checkup",
                            url: "https://myaccount.google.com/security-checkup"
                        }

                    ]

                },


                {
                    name: "🔑 I cannot log in",

                    title: "Cannot Access Account",

                    steps: [

                        "Use only the official recovery page of the service.",

                        "Try your recovery email or phone number.",

                        "Complete identity verification if requested.",

                        "Secure your recovery email account.",

                        "Change your password after recovery.",

                        "Enable two-factor authentication."

                    ],

                    dont: [

                        "Do not use unofficial recovery websites.",

                        "Never share recovery codes."

                    ]

                }

            ]

        },


        /* =================================================
           SCAM
        ================================================= */

        "Scam & Phishing": {

            title: "🎣 Scam & Phishing",

            description:
                "Check suspicious messages, links and fake websites.",

            situations: [

                {
                    name: "💬 Someone sent me a suspicious WhatsApp link",

                    title: "Suspicious WhatsApp Link",

                    steps: [

                        "Do not open the suspicious link again.",

                        "Do not enter your password, OTP, PIN or card details.",

                        "Check who sent the message.",

                        "Take a screenshot of the message if evidence may be needed.",

                        "Block or report the sender when appropriate.",

                        "If you entered information, secure the affected account immediately."

                    ],

                    dont: [

                        "Do not forward the suspicious link to other people.",

                        "Do not download files from the suspicious website."

                    ]

                },


                {
                    name: "🔗 I clicked a suspicious link",

                    title: "Suspicious Link Clicked",

                    steps: [

                        "Close the suspicious website.",

                        "Do not enter any additional information.",

                        "If you entered a password, change that password immediately from the official website or app.",

                        "Enable two-factor authentication.",

                        "If a file was downloaded, do not open it.",

                        "Run a trusted security scan.",

                        "Contact your bank if financial information was entered."

                    ],

                    dont: [

                        "Do not return to the suspicious website.",

                        "Do not install software suggested by the suspicious page."

                    ]

                },


                {
                    name: "📩 I received a phishing message",

                    title: "Phishing Message",

                    steps: [

                        "Check the sender address or phone number carefully.",

                        "Look for urgency, threats or promises of rewards.",

                        "Do not click unexpected links.",

                        "Verify the request using the organisation's official website or app.",

                        "Report and block the sender."

                    ],

                    dont: [

                        "Never share OTPs.",

                        "Never share passwords or recovery codes."

                    ]

                },


                {
                    name: "🔑 I shared an OTP",

                    title: "OTP Was Shared",

                    steps: [

                        "Immediately identify which account the OTP was for.",

                        "Change that account's password.",

                        "Sign out unknown devices.",

                        "Enable two-factor authentication.",

                        "Contact your bank immediately if the OTP was related to banking or a payment.",

                        "Monitor the account for suspicious activity."

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

            title: "📱 Phone Security",

            description:
                "Check suspicious apps, permissions and privacy settings.",

            situations: [

                {
                    name: "📦 I found an unknown app",

                    title: "Unknown Application",

                    steps: [

                        "Check where the application came from.",

                        "Review the permissions it has.",

                        "If you do not recognise it, uninstall it.",

                        "Update your phone's operating system.",

                        "Run a trusted security scan."

                    ],

                    dont: [

                        "Do not install random security apps from pop-ups."

                    ]

                },


                {
                    name: "🎤 Camera or microphone seems suspicious",

                    title: "Camera & Microphone",

                    steps: [

                        "Review camera permissions in your phone settings.",

                        "Review microphone permissions.",

                        "Remove unnecessary permissions.",

                        "Uninstall suspicious applications.",

                        "Update your operating system."

                    ],

                    dont: [

                        "Do not give unknown apps unnecessary permissions."

                    ]

                },


                {
                    name: "📍 I am worried about location tracking",

                    title: "Location Privacy",

                    steps: [

                        "Review location permissions.",

                        "Disable unnecessary location access.",

                        "Check location-sharing settings.",

                        "Review unfamiliar apps and services."

                    ],

                    dont: [

                        "Do not leave location sharing enabled for unknown services."

                    ]

                }

            ]

        },


        /* =================================================
           FRAUD
        ================================================= */

        "Online Fraud": {

            title: "💳 Online Fraud",

            description:
                "Take action when money or financial information may be at risk.",

            situations: [

                {
                    name: "💸 I lost money",

                    title: "Possible Financial Fraud",

                    steps: [

                        "Contact your bank or payment provider immediately.",

                        "Save the transaction ID.",

                        "Save screenshots, receipts and messages.",

                        "Secure the account used for payment.",

                        "Change compromised passwords.",

                        "Monitor your transactions."

                    ],

                    dont: [

                        "Do not send additional money.",

                        "Do not delete evidence."

                    ]

                },


                {
                    name: "🏦 My banking information was shared",

                    title: "Banking Information Exposed",

                    steps: [

                        "Contact your bank immediately.",

                        "Ask what security measures should be taken.",

                        "Monitor your bank transactions.",

                        "Change affected credentials.",

                        "Secure your email account."

                    ],

                    dont: [

                        "Never share another OTP or PIN.",

                        "Do not trust unsolicited callers."

                    ]

                },


                {
                    name: "📲 UPI fraud",

                    title: "UPI Fraud",

                    steps: [

                        "Contact your bank or payment provider immediately.",

                        "Save the transaction details.",

                        "Report the fraudulent transaction through the appropriate official channel.",

                        "Secure your UPI-linked accounts.",

                        "Monitor your bank account."

                    ],

                    dont: [

                        "Never share your UPI PIN.",

                        "Receiving money does not require entering your UPI PIN."

                    ]

                }

            ]

        },


        /* =================================================
           SUSPICIOUS ACTIVITY
        ================================================= */

        "Suspicious Activity": {

            title: "🕵️ Suspicious Activity",

            description:
                "Investigate unusual links, logins, malware and account activity.",

            situations: [

                {
                    name: "🚨 Someone logged into my account",

                    title: "Unknown Login",

                    steps: [

                        "Change your password immediately.",

                        "Sign out unknown devices.",

                        "Enable two-factor authentication.",

                        "Check recent account activity.",

                        "Review recovery information."

                    ],

                    dont: [

                        "Do not share your password with anyone."

                    ]

                },


                {
                    name: "🦠 I think my device has malware",

                    title: "Possible Malware",

                    steps: [

                        "Disconnect from the internet if active compromise is suspected.",

                        "Check recently installed applications.",

                        "Remove suspicious applications.",

                        "Update your operating system.",

                        "Run a trusted security scan.",

                        "Change important passwords from a trusted device."

                    ],

                    dont: [

                        "Do not install random antivirus software from pop-ups."

                    ]

                },


                {
                    name: "🎭 I saw a fake login page",

                    title: "Fake Login Page",

                    steps: [

                        "Close the page.",

                        "Do not enter credentials.",

                        "If you entered a password, change it immediately using the official website.",

                        "Enable 2FA.",

                        "Check account login activity."

                    ],

                    dont: [

                        "Do not use the fake page again."

                    ]

                }

            ]

        },


        /* =================================================
           EMERGENCY
        ================================================= */

        "Emergency Help": {

            title: "🚨 Emergency Cyber Help",

            description:
                "Immediate safety steps for urgent cyber incidents.",

            situations: [

                {
                    name: "🔐 My account is actively compromised",

                    title: "Active Account Compromise",

                    steps: [

                        "Secure your primary email account first.",

                        "Change compromised passwords.",

                        "Sign out unknown devices.",

                        "Enable two-factor authentication.",

                        "Save important evidence.",

                        "Contact the affected service through its official support channel."

                    ],

                    dont: [

                        "Do not communicate with the suspected attacker.",

                        "Never share OTPs or recovery codes."

                    ]

                },


                {
                    name: "💳 My money is at risk",

                    title: "Financial Emergency",

                    steps: [

                        "Contact your bank or payment provider immediately.",

                        "Ask how to secure the account.",

                        "Save transaction details.",

                        "Secure your email account.",

                        "Report the incident through the appropriate official channel."

                    ],

                    dont: [

                        "Do not send additional money.",

                        "Do not trust recovery scammers."

                    ]

                }

            ]

        }

    };


    /* =====================================================
       6. OPEN HELP MODAL
    ===================================================== */

    function openHelp(service) {

        const info = helpData[service];

        if (!info) {

            alert(
                "This CyberCare service is currently unavailable."
            );

            return;
        }


        const oldModal =
            document.getElementById("cybercare-modal");

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
            background:rgba(0,0,0,0.75);
            display:flex;
            align-items:center;
            justify-content:center;
            padding:20px;
            z-index:99999;
            overflow-y:auto;
        `;


        const modal =
            document.createElement("div");


        modal.style.cssText = `
            width:100%;
            max-width:760px;
            max-height:90vh;
            overflow-y:auto;
            background:#ffffff;
            color:#111827;
            border-radius:22px;
            padding:26px;
            position:relative;
            box-sizing:border-box;
            box-shadow:0 25px 70px rgba(0,0,0,0.45);
            font-family:Arial, sans-serif;
        `;


        let buttons = "";


        info.situations.forEach(function (item, index) {

            buttons += `

                <button
                    type="button"
                    class="cyber-situation"
                    data-index="${index}"

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

                    ${item.name}

                </button>

            `;

        });


        modal.innerHTML = `

            <button
                type="button"
                id="closeCyberCare"

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


            <div style="padding-right:45px;">

                <div
                    style="
                        font-size:12px;
                        font-weight:bold;
                        letter-spacing:1px;
                        color:#2563eb;
                        margin-bottom:8px;
                    "
                >
                    CYBERCARE HELP
                </div>


                <h2 style="margin:0 0 8px 0;">
                    ${info.title}
                </h2>


                <p
                    style="
                        margin-top:0;
                        color:#64748b;
                    "
                >
                    ${info.description}
                </p>

            </div>


            <h3 style="margin-top:25px;">
                👇 What happened?
            </h3>


            <div>
                ${buttons}
            </div>


            <div
                id="cybercareResult"
                style="margin-top:20px;"
            >

                <div
                    style="
                        padding:20px;
                        background:#f8fafc;
                        border-radius:15px;
                        text-align:center;
                        color:#64748b;
                    "
                >

                    🛡️ Select an option above to get step-by-step help.

                </div>

            </div>

        `;


        overlay.appendChild(modal);

        document.body.appendChild(overlay);


        document
            .getElementById("closeCyberCare")
            .addEventListener("click", function () {

                overlay.remove();

            });


        overlay.addEventListener("click", function (event) {

            if (event.target === overlay) {

                overlay.remove();

            }

        });


        const situationButtons =
            modal.querySelectorAll(".cyber-situation");


        situationButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                const index =
                    Number(button.dataset.index);

                showResult(
                    modal,
                    info.situations[index]
                );

            });

        });

    }


    /* =====================================================
       7. SHOW HELP RESULT
    ===================================================== */

    function showResult(modal, situation) {

        const result =
            modal.querySelector("#cybercareResult");


        const steps =
            situation.steps
                .map(function (step, index) {

                    return `

                        <li style="margin-bottom:12px;">

                            <strong>
                                Step ${index + 1}:
                            </strong>

                            ${step}

                        </li>

                    `;

                })
                .join("");


        const dont =
            situation.dont
                .map(function (item) {

                    return `

                        <li style="margin-bottom:10px;">
                            ${item}
                        </li>

                    `;

                })
                .join("");


        let linksHTML = "";


        if (situation.links) {

            linksHTML = `

                <div
                    style="
                        margin-top:20px;
                        padding:18px;
                        background:#ecfdf5;
                        border-radius:14px;
                        border:1px solid #bbf7d0;
                    "
                >

                    <h4>
                        🌐 Official Websites
                    </h4>

                    <p
                        style="
                            color:#475569;
                            font-size:13px;
                        "
                    >
                        Always use the official website. Avoid people or websites claiming to recover your account for money.
                    </p>

                    <div>

            `;


            situation.links.forEach(function (link) {

                linksHTML += `

                    <a
                        href="${link.url}"
                        target="_blank"
                        rel="noopener noreferrer"

                        style="
                            display:block;
                            margin:8px 0;
                            padding:11px 14px;
                            border-radius:10px;
                            background:#ffffff;
                            border:1px solid #d1fae5;
                            color:#047857;
                            text-decoration:none;
                            font-weight:700;
                        "
                    >

                        🔗 ${link.label}

                    </a>

                `;

            });


            linksHTML += `

                    </div>

                </div>

            `;

        }


        result.innerHTML = `

            <div
                style="
                    background:#f8fafc;
                    border-radius:16px;
                    padding:20px;
                    border:1px solid #e5e7eb;
                "
            >

                <h3>
                    ⚡ ${situation.title}
                </h3>


                <h4 style="margin-top:20px;">
                    ✅ What you should do
                </h4>


                <ol style="padding-left:22px;">

                    ${steps}

                </ol>


                <div
                    style="
                        margin-top:20px;
                        padding:15px;
                        background:#fff1f2;
                        border-radius:12px;
                        border:1px solid #fecdd3;
                    "
                >

                    <h4>
                        ⚠️ What you should NOT do
                    </h4>


                    <ul style="padding-left:22px;">

                        ${dont}

                    </ul>

                </div>


                ${linksHTML}


                <div
                    style="
                        margin-top:20px;
                        padding:15px;
                        background:#eff6ff;
                        border-radius:12px;
                        border:1px solid #bfdbfe;
                    "
                >

                    <h4>
                        📸 Save useful evidence
                    </h4>


                    <p
                        style="
                            margin-bottom:0;
                            color:#475569;
                        "
                    >

                        Keep screenshots, messages, emails,
                        receipts, usernames and transaction details
                        when appropriate.

                    </p>

                </div>


                <p
                    style="
                        margin-top:20px;
                        font-size:13px;
                        color:#64748b;
                    "
                >

                    🛡️ CyberCare provides general cybersecurity
                    safety guidance. Use official service channels
                    for account recovery and urgent financial incidents.

                </p>

            </div>

        `;


        result.scrollIntoView({

            behavior:"smooth",

            block:"nearest"

        });

    }


    /* =====================================================
       8. GET HELP BUTTONS
    ===================================================== */

    const helpButtons =
        document.querySelectorAll(".help-btn");


    helpButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const service =
                button.getAttribute("data-service");

            openHelp(service);

        });

    });


    /* =====================================================
       9. EMERGENCY BUTTON
    ===================================================== */

    const emergencyButton =
        document.getElementById("emergencyBtn");


    if (emergencyButton) {

        emergencyButton.addEventListener(
            "click",
            function () {

                openHelp("Emergency Help");

            }
        );

    }


    /* =====================================================
       10. LEARN BUTTON
    ===================================================== */

    const learnBtn =
        document.getElementById("learnBtn");


    if (learnBtn) {

        learnBtn.addEventListener(
            "click",
            function () {

                alert(
                    currentLanguage === "BN"
                        ? "Cybersecurity Learning section খুব শীঘ্রই যোগ করা হবে।"
                        : "Cybersecurity Learning section is coming soon."
                );

            }
        );

    }


    /* =====================================================
       11. TOOL BUTTONS
    ===================================================== */

    const toolButtons =
        document.querySelectorAll(".tool-btn");


    toolButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            alert(
                currentLanguage === "BN"
                    ? "এই CyberCare Tool-টি খুব শীঘ্রই চালু করা হবে।"
                    : "This CyberCare Tool is coming soon."
            );

        });

    });


    /* =====================================================
       12. ESCAPE KEY CLOSE MODAL
    ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            const modal =
                document.getElementById("cybercare-modal");

            if (modal) {
                modal.remove();
            }

            closeSideMenu();

        }

    });


    /* =====================================================
       13. STARTUP
    ===================================================== */

    console.log(
        "🛡️ CyberCare loaded successfully."
    );

    console.log(
        "🌐 Language:",
        currentLanguage
    );

});
