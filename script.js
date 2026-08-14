document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CYBERCARE
       COMPLETE DIGITAL SAFETY SYSTEM
    ===================================================== */


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");
    const closeMenu = document.getElementById("closeMenu");
    const menuOverlay = document.getElementById("menuOverlay");

    const themeBtn = document.getElementById("themeBtn");

    const languageBtn =
        document.getElementById("languageBtn");

    const languageText =
        document.getElementById("languageText");

    const emergencyBtn =
        document.getElementById("emergencyBtn");

    const learnBtn =
        document.getElementById("learnBtn");


    /* =====================================================
       MENU
    ===================================================== */

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

    closeMenu?.addEventListener(
        "click",
        closeSideMenu
    );

    menuOverlay?.addEventListener(
        "click",
        closeSideMenu
    );


    /* =====================================================
       THEME
    ===================================================== */

    let currentTheme =
        localStorage.getItem("cybercare-theme")
        || "light";


    function applyTheme() {

        if (currentTheme === "dark") {

            document.body.classList.add(
                "dark-mode"
            );

            if (themeBtn)
                themeBtn.textContent = "☀️";

        } else {

            document.body.classList.remove(
                "dark-mode"
            );

            if (themeBtn)
                themeBtn.textContent = "🌙";
        }
    }


    applyTheme();


    themeBtn?.addEventListener("click", () => {

        currentTheme =
            document.body.classList.contains(
                "dark-mode"
            )
                ? "light"
                : "dark";

        localStorage.setItem(
            "cybercare-theme",
            currentTheme
        );

        applyTheme();
    });


    /* =====================================================
       LANGUAGE
    ===================================================== */

    let currentLanguage =
        localStorage.getItem(
            "cybercare-language"
        ) || "EN";


    const translations = {

        EN: {

            language: "EN",

            heroTitle:
                "Protecting People. Securing Digital Lives.",

            heroText:
                "Practical cybersecurity guidance for hacked accounts, scams, fraud, harassment, privacy problems and digital threats.",

            emergency:
                "🚨 I Need Help Now",

            services:
                "How Can We Help You?",

            servicesText:
                "Choose a situation and get step-by-step guidance.",

            account:
                "Account Recovery",

            scam:
                "Scam & Phishing",

            phone:
                "Phone Security",

            fraud:
                "Online Fraud",

            suspicious:
                "Suspicious Activity",

            emergencyHelp:
                "Emergency Help",

            girls:
                "👩 Girls Digital Safety",

            learn:
                "🎓 Learn Cybersecurity",

            tools:
                "🛠️ CyberCare Tools",

            about:
                "🛡️ About CyberCare",

            getHelp:
                "Get Help →"

        },


        BN: {

            language: "BN",

            heroTitle:
                "মানুষকে সুরক্ষিত রাখা। ডিজিটাল জীবনকে নিরাপদ রাখা।",

            heroText:
                "হ্যাক হওয়া অ্যাকাউন্ট, স্ক্যাম, প্রতারণা, harassment, privacy সমস্যা এবং digital threat-এর ক্ষেত্রে সহজ ও ধাপে ধাপে নিরাপত্তা নির্দেশনা।",

            emergency:
                "🚨 এখনই সাহায্য চাই",

            services:
                "আমরা কীভাবে সাহায্য করতে পারি?",

            servicesText:
                "আপনার সমস্যাটি নির্বাচন করুন এবং ধাপে ধাপে নির্দেশনা নিন।",

            account:
                "অ্যাকাউন্ট পুনরুদ্ধার",

            scam:
                "স্ক্যাম ও ফিশিং",

            phone:
                "ফোন নিরাপত্তা",

            fraud:
                "অনলাইন প্রতারণা",

            suspicious:
                "সন্দেহজনক কার্যকলাপ",

            emergencyHelp:
                "জরুরি সাহায্য",

            girls:
                "👩 মেয়েদের ডিজিটাল নিরাপত্তা",

            learn:
                "🎓 সাইবার নিরাপত্তা শিখুন",

            tools:
                "🛠️ সাইবারকেয়ার টুলস",

            about:
                "🛡️ সাইবারকেয়ার সম্পর্কে",

            getHelp:
                "সাহায্য নিন →"

        }

    };


    function applyLanguage() {

        const t =
            translations[currentLanguage];

        if (!t) return;


        if (languageText)
            languageText.textContent =
                t.language;


        const heroTitle =
            document.querySelector(".hero h2");

        if (heroTitle)
            heroTitle.textContent =
                t.heroTitle;


        const heroText =
            document.querySelector(".hero p");

        if (heroText)
            heroText.textContent =
                t.heroText;


        if (emergencyBtn)
            emergencyBtn.textContent =
                t.emergency;


        const servicesTitle =
            document.querySelector(
                ".services > h2"
            );

        if (servicesTitle)
            servicesTitle.textContent =
                t.services;


        const servicesText =
            document.querySelector(
                ".services .section-text"
            );

        if (servicesText)
            servicesText.textContent =
                t.servicesText;


        const cards =
            document.querySelectorAll(
                ".services .service-card"
            );


        const titles = [

            t.account,
            t.scam,
            t.phone,
            t.fraud,
            t.suspicious,
            t.emergencyHelp

        ];


        cards.forEach((card, index) => {

            const title =
                card.querySelector("h3");

            const button =
                card.querySelector(".help-btn");

            if (title && titles[index])
                title.textContent =
                    titles[index];

            if (button)
                button.textContent =
                    t.getHelp;
        });


        const girlsTitle =
            document.querySelector(
                "#girlsSafety > h2"
            );

        if (girlsTitle)
            girlsTitle.textContent =
                t.girls;


        const learnTitle =
            document.querySelector(
                "#learn > h2"
            );

        if (learnTitle)
            learnTitle.textContent =
                t.learn;


        const toolsTitle =
            document.querySelector(
                "#tools > h2"
            );

        if (toolsTitle)
            toolsTitle.textContent =
                t.tools;


        const aboutTitle =
            document.querySelector(
                "#about > h2"
            );

        if (aboutTitle)
            aboutTitle.textContent =
                t.about;


        document.documentElement.lang =
            currentLanguage === "BN"
                ? "bn"
                : "en";
    }


    applyLanguage();


    languageBtn?.addEventListener(
        "click",
        () => {

            currentLanguage =
                currentLanguage === "EN"
                    ? "BN"
                    : "EN";

            localStorage.setItem(
                "cybercare-language",
                currentLanguage
            );

            applyLanguage();

        }
    );


    /* =====================================================
       HELP DATABASE
    ===================================================== */

    const helpData = {


        /* =================================================
           ACCOUNT RECOVERY
        ================================================= */

        "Account Recovery": {

            title: {
                EN: "🔐 Account Recovery",
                BN: "🔐 অ্যাকাউন্ট পুনরুদ্ধার"
            },

            description: {
                EN:
                    "Choose the account problem you are facing.",
                BN:
                    "আপনার কোন ধরনের অ্যাকাউন্ট সমস্যা হয়েছে সেটি নির্বাচন করুন।"
            },

            situations: [

                {

                    name: {
                        EN: "📘 Facebook Account Hacked",
                        BN: "📘 Facebook অ্যাকাউন্ট হ্যাক"
                    },

                    title: {
                        EN: "Facebook Account Recovery",
                        BN: "Facebook অ্যাকাউন্ট পুনরুদ্ধার"
                    },

                    official:
                        "https://www.facebook.com/hacked",

                    steps: {

                        EN: [

                            "Do not panic and do not pay anyone who promises instant recovery.",

                            "Open Facebook's official hacked-account recovery page.",

                            "Follow the security and identity verification process.",

                            "If you can still access the account, immediately change the password.",

                            "Check your email address and phone number.",

                            "Remove unknown recovery information.",

                            "Review logged-in devices and log out unknown devices.",

                            "Check recent posts, messages and profile changes.",

                            "Enable two-factor authentication.",

                            "Secure the email account connected to Facebook."

                        ],

                        BN: [

                            "ভয় পাবেন না এবং instant recovery-এর কথা বলে কাউকে টাকা দেবেন না।",

                            "Facebook-এর official hacked-account recovery page ব্যবহার করুন।",

                            "Security এবং identity verification-এর ধাপগুলো সম্পূর্ণ করুন।",

                            "অ্যাকাউন্টে ঢুকতে পারলে সঙ্গে সঙ্গে password পরিবর্তন করুন।",

                            "Email address এবং phone number পরীক্ষা করুন।",

                            "অপরিচিত recovery information সরিয়ে দিন।",

                            "Logged-in devices পরীক্ষা করে অপরিচিত device logout করুন।",

                            "Recent post, message এবং profile changes পরীক্ষা করুন।",

                            "Two-factor authentication চালু করুন।",

                            "Facebook-এর সাথে যুক্ত email account-টিও নিরাপদ করুন।"

                        ]

                    },

                    dont: {

                        EN: [

                            "Never share your password.",
                            "Never share OTP or recovery codes.",
                            "Do not pay unofficial recovery agents.",
                            "Do not use random recovery websites."

                        ],

                        BN: [

                            "কখনো password share করবেন না।",
                            "OTP বা recovery code কাউকে দেবেন না।",
                            "অপরিচিত recovery agent-কে টাকা দেবেন না।",
                            "Random recovery website ব্যবহার করবেন না।"

                        ]

                    }

                },


                {

                    name: {
                        EN: "📸 Instagram Account Hacked",
                        BN: "📸 Instagram অ্যাকাউন্ট হ্যাক"
                    },

                    title: {
                        EN: "Instagram Account Recovery",
                        BN: "Instagram অ্যাকাউন্ট পুনরুদ্ধার"
                    },

                    official:
                        "https://www.instagram.com/hacked/",

                    steps: {

                        EN: [

                            "Use Instagram's official hacked-account recovery page.",

                            "Check the original email account for security notifications.",

                            "Change the Instagram password if you still have access.",

                            "Review Login Activity.",

                            "Remove unknown devices.",

                            "Check email and phone number.",

                            "Enable two-factor authentication.",

                            "Review profile, posts and messages for unauthorised changes.",

                            "Secure the connected email account."

                        ],

                        BN: [

                            "Instagram-এর official hacked-account recovery page ব্যবহার করুন।",

                            "Original email account-এ security notification এসেছে কি না দেখুন।",

                            "অ্যাকাউন্টে access থাকলে Instagram password পরিবর্তন করুন।",

                            "Login Activity পরীক্ষা করুন।",

                            "অপরিচিত device remove/logout করুন।",

                            "Email এবং phone number পরীক্ষা করুন।",

                            "Two-factor authentication চালু করুন।",

                            "Profile, post এবং message-এ unauthorized change হয়েছে কি না দেখুন।",

                            "Connected email account নিরাপদ করুন।"

                        ]

                    },

                    dont: {

                        EN: [

                            "Never send Instagram verification codes to anyone.",
                            "Do not pay unofficial recovery agents.",
                            "Never give your password to another person."

                        ],

                        BN: [

                            "Instagram verification code কাউকে পাঠাবেন না।",
                            "অপরিচিত recovery agent-কে টাকা দেবেন না।",
                            "অন্য কাউকে password দেবেন না।"

                        ]

                    }

                },


                {

                    name: {
                        EN: "💬 WhatsApp Account Hacked",
                        BN: "💬 WhatsApp অ্যাকাউন্ট হ্যাক"
                    },

                    title: {
                        EN: "WhatsApp Account Recovery",
                        BN: "WhatsApp অ্যাকাউন্ট পুনরুদ্ধার"
                    },

                    official:
                        "https://www.whatsapp.com/contact/",

                    steps: {

                        EN: [

                            "Use the official WhatsApp application.",

                            "Register your phone number again.",

                            "Enter the verification code sent to your phone.",

                            "Open Settings → Linked Devices.",

                            "Log out devices you do not recognise.",

                            "Enable WhatsApp two-step verification.",

                            "Check your profile and important conversations.",

                            "Warn close contacts if suspicious messages were sent from your account."

                        ],

                        BN: [

                            "শুধু official WhatsApp application ব্যবহার করুন।",

                            "নিজের phone number দিয়ে WhatsApp আবার register করুন।",

                            "Phone-এ আসা verification code নিজে ব্যবহার করুন।",

                            "Settings → Linked Devices খুলুন।",

                            "অপরিচিত device logout করুন।",

                            "WhatsApp two-step verification চালু করুন।",

                            "Profile এবং গুরুত্বপূর্ণ conversation পরীক্ষা করুন।",

                            "আপনার account থেকে সন্দেহজনক message গেলে কাছের মানুষকে সতর্ক করুন।"

                        ]

                    },

                    dont: {

                        EN: [
                            "Never share WhatsApp verification codes.",
                            "Never share your two-step verification PIN."
                        ],

                        BN: [
                            "WhatsApp verification code কাউকে দেবেন না।",
                            "Two-step verification PIN কাউকে দেবেন না।"
                        ]

                    }

                },


                {

                    name: {
                        EN: "▶️ Google / YouTube Account",
                        BN: "▶️ Google / YouTube অ্যাকাউন্ট"
                    },

                    title: {
                        EN: "Google Account Recovery",
                        BN: "Google অ্যাকাউন্ট পুনরুদ্ধার"
                    },

                    official:
                        "https://accounts.google.com/signin/recovery",

                    steps: {

                        EN: [

                            "Use Google's official account recovery page.",

                            "Complete Google's verification process.",

                            "Change the password after recovery.",

                            "Review Recent security activity.",

                            "Review Your devices.",

                            "Remove unknown devices.",

                            "Check recovery email and phone.",

                            "Enable 2-Step Verification.",

                            "Review YouTube channel information if affected."

                        ],

                        BN: [

                            "Google-এর official account recovery page ব্যবহার করুন।",

                            "Google-এর verification process সম্পূর্ণ করুন।",

                            "Recovery-এর পর password পরিবর্তন করুন।",

                            "Recent security activity পরীক্ষা করুন।",

                            "Your devices পরীক্ষা করুন।",

                            "অপরিচিত device remove করুন।",

                            "Recovery email এবং phone পরীক্ষা করুন।",

                            "2-Step Verification চালু করুন।",

                            "YouTube channel affected হলে channel information পরীক্ষা করুন।"

                        ]

                    },

                    dont: {

                        EN: [
                            "Never share recovery codes.",
                            "Do not pay unofficial recovery services."
                        ],

                        BN: [
                            "Recovery code কাউকে দেবেন না।",
                            "অপরিচিত recovery service-কে টাকা দেবেন না।"
                        ]

                    }

                }

            ]

        },


        /* =================================================
           SCAM & PHISHING
        ================================================= */

        "Scam & Phishing": {

            title: {
                EN: "🎣 Scam & Phishing",
                BN: "🎣 স্ক্যাম ও ফিশিং"
            },

            description: {
                EN:
                    "Handle suspicious messages, links and fake websites.",
                BN:
                    "সন্দেহজনক message, link এবং fake website থেকে নিজেকে নিরাপদ রাখুন।"
            },

            situations: [

                {

                    name: {
                        EN: "💬 Suspicious WhatsApp Link",
                        BN: "💬 সন্দেহজনক WhatsApp Link"
                    },

                    title: {
                        EN: "Suspicious WhatsApp Link",
                        BN: "সন্দেহজনক WhatsApp Link"
                    },

                    steps: {

                        EN: [

                            "Do not click the link again.",

                            "Do not enter your password, OTP, PIN, card number or bank information.",

                            "Take a screenshot of the message.",

                            "Check who sent it.",

                            "Block and report the sender if necessary.",

                            "If you entered a password, change it immediately from the official website/app.",

                            "If financial information was entered, contact your bank/payment provider immediately.",

                            "Save the message, link and other evidence."

                        ],

                        BN: [

                            "Link-টিতে আবার click করবেন না।",

                            "Password, OTP, PIN, card number বা bank information দেবেন না।",

                            "Message-এর screenshot নিন।",

                            "কে message পাঠিয়েছে তা পরীক্ষা করুন।",

                            "প্রয়োজনে sender-কে block এবং report করুন।",

                            "Password দিয়ে থাকলে official website/app থেকে সঙ্গে সঙ্গে password পরিবর্তন করুন।",

                            "Financial information দিয়ে থাকলে সঙ্গে সঙ্গে bank/payment provider-এর সাথে যোগাযোগ করুন।",

                            "Message, link এবং অন্যান্য evidence সংরক্ষণ করুন।"

                        ]

                    },

                    dont: {

                        EN: [

                            "Do not forward the suspicious link.",
                            "Do not download files from the link.",
                            "Do not enter OTP or banking information."

                        ],

                        BN: [

                            "সন্দেহজনক link forward করবেন না।",
                            "Link থেকে file download করবেন না।",
                            "OTP বা banking information দেবেন না।"

                        ]

                    }

                },


                {

                    name: {
                        EN: "🔗 I Clicked a Suspicious Link",
                        BN: "🔗 আমি সন্দেহজনক Link-এ Click করেছি"
                    },

                    title: {
                        EN: "Suspicious Link Clicked",
                        BN: "সন্দেহজনক Link-এ Click করার পর"
                    },

                    steps: {

                        EN: [

                            "Close the suspicious website.",

                            "Do not enter any additional information.",

                            "If you entered a password, change it from the real official website.",

                            "Enable 2FA.",

                            "If a file was downloaded, do not open it.",

                            "Delete suspicious downloads if appropriate.",

                            "Update the device and browser.",

                            "If financial information was entered, contact the bank/payment provider immediately.",

                            "Monitor the affected account for unusual activity."

                        ],

                        BN: [

                            "সন্দেহজনক website বন্ধ করুন।",

                            "আর কোনো information সেখানে দেবেন না।",

                            "Password দিয়ে থাকলে আসল official website থেকে password পরিবর্তন করুন।",

                            "2FA চালু করুন।",

                            "কোনো file download হলে সেটি open করবেন না।",

                            "সন্দেহজনক download প্রয়োজন অনুযায়ী delete করুন।",

                            "Device এবং browser update করুন।",

                            "Financial information দিলে সঙ্গে সঙ্গে bank/payment provider-এর সাথে যোগাযোগ করুন।",

                            "Affected account-এ unusual activity হচ্ছে কি না নজর রাখুন।"

                        ]

                    },

                    dont: {

                        EN: [
                            "Do not return to the suspicious website.",
                            "Do not install software recommended by the page."
                        ],

                        BN: [
                            "সন্দেহজনক website-এ আবার যাবেন না।",
                            "Website যে software install করতে বলছে তা করবেন না।"
                        ]

                    }

                },


                {

                    name: {
                        EN: "📩 Phishing Message",
                        BN: "📩 Phishing Message"
                    },

                    title: {
                        EN: "Phishing Message",
                        BN: "ফিশিং Message"
                    },

                    steps: {

                        EN: [

                            "Check the sender carefully.",

                            "Look for urgency, threats or unrealistic rewards.",

                            "Do not click unexpected links.",

                            "Open the official app or manually type the official website.",

                            "Verify the request there.",

                            "Report and block the sender.",

                            "Save evidence if needed."

                        ],

                        BN: [

                            "Sender-এর identity ভালোভাবে পরীক্ষা করুন।",

                            "Urgency, threat বা অবাস্তব reward-এর কথা আছে কি না দেখুন।",

                            "অপ্রত্যাশিত link-এ click করবেন না।",

                            "Official app খুলুন অথবা official website নিজে type করুন।",

                            "সেখানে request-টি সত্যি কি না verify করুন।",

                            "Sender-কে report এবং block করুন।",

                            "প্রয়োজনে evidence সংরক্ষণ করুন।"

                        ]

                    },

                    dont: {

                        EN: [
                            "Never share OTPs.",
                            "Never share passwords.",
                            "Never share recovery codes."
                        ],

                        BN: [
                            "OTP কখনো share করবেন না।",
                            "Password কখনো share করবেন না।",
                            "Recovery code কখনো share করবেন না।"
                        ]

                    }

                },


                {

                    name: {
                        EN: "🔑 I Shared an OTP",
                        BN: "🔑 আমি OTP Share করেছি"
                    },

                    title: {
                        EN: "OTP Was Shared",
                        BN: "OTP Share হয়ে গেছে"
                    },

                    steps: {

                        EN: [

                            "Identify which account/service the OTP belonged to.",

                            "Immediately change the password of that account.",

                            "Sign out unknown devices.",

                            "Enable 2FA.",

                            "If it involved banking/payment, contact the bank immediately.",

                            "Monitor transactions and account activity.",

                            "Save evidence of the scam."

                        ],

                        BN: [

                            "OTP কোন account/service-এর ছিল তা শনাক্ত করুন।",

                            "সঙ্গে সঙ্গে সেই account-এর password পরিবর্তন করুন।",

                            "অপরিচিত device logout করুন।",

                            "2FA চালু করুন।",

                            "Bank/payment-এর OTP হলে সঙ্গে সঙ্গে bank-এর সাথে যোগাযোগ করুন।",

                            "Transaction এবং account activity নজরে রাখুন।",

                            "Scam-এর evidence সংরক্ষণ করুন।"

                        ]

                    },

                    dont: {

                        EN: [
                            "Do not share another OTP.",
                            "Do not trust someone asking for a second code."
                        ],

                        BN: [
                            "আর কোনো OTP share করবেন না।",
                            "দ্বিতীয় code চাওয়া ব্যক্তিকে বিশ্বাস করবেন না।"
                        ]

                    }

                }

            ]

        },


        /* =================================================
           PHONE SECURITY
        ================================================= */

        "Phone Security": {

            title: {
                EN: "📱 Phone Security",
                BN: "📱 ফোন নিরাপত্তা"
            },

            description: {
                EN:
                    "Check apps, permissions and privacy settings.",
                BN:
                    "App, permission এবং privacy settings পরীক্ষা করুন।"
            },

            situations: [

                {

                    name: {
                        EN: "📦 Unknown App",
                        BN: "📦 অপরিচিত App"
                    },

                    title: {
                        EN: "Unknown Application",
                        BN: "অপরিচিত Application"
                    },

                    steps: {

                        EN: [

                            "Open the phone's application list.",

                            "Find the application you do not recognise.",

                            "Check when it was installed.",

                            "Review its permissions.",

                            "Uninstall suspicious apps you do not need.",

                            "Update the operating system.",

                            "Run the device's built-in security scan if available."

                        ],

                        BN: [

                            "Phone-এর application list খুলুন।",

                            "অপরিচিত application খুঁজুন।",

                            "কখন install হয়েছে তা পরীক্ষা করুন।",

                            "Permission পরীক্ষা করুন।",

                            "প্রয়োজন নেই এবং সন্দেহজনক হলে uninstall করুন।",

                            "Operating system update করুন।",

                            "Phone-এ built-in security scan থাকলে চালান।"

                        ]

                    },

                    dont: {

                        EN: [
                            "Do not install antivirus apps from random pop-ups.",
                            "Do not give unnecessary permissions."
                        ],

                        BN: [
                            "Random pop-up থেকে antivirus app install করবেন না।",
                            "অপ্রয়োজনীয় permission দেবেন না।"
                        ]

                    }

                },


                {

                    name: {
                        EN: "🎤 Camera / Microphone",
                        BN: "🎤 Camera / Microphone"
                    },

                    title: {
                        EN: "Camera & Microphone Security",
                        BN: "Camera ও Microphone নিরাপত্তা"
                    },

                    steps: {

                        EN: [

                            "Open Settings → Privacy/Security.",

                            "Review Camera permissions.",

                            "Remove access from apps that do not need it.",

                            "Review Microphone permissions.",

                            "Remove unnecessary access.",

                            "Uninstall suspicious applications.",

                            "Keep the phone updated."

                        ],

                        BN: [

                            "Settings → Privacy/Security খুলুন।",

                            "Camera permission পরীক্ষা করুন।",

                            "যে app-এর camera দরকার নেই তার access বন্ধ করুন।",

                            "Microphone permission পরীক্ষা করুন।",

                            "অপ্রয়োজনীয় access বন্ধ করুন।",

                            "সন্দেহজনক application uninstall করুন।",

                            "Phone update রাখুন।"

                        ]

                    },

                    dont: {

                        EN: [
                            "Do not allow unknown apps unnecessary camera or microphone access."
                        ],

                        BN: [
                            "অপরিচিত app-কে অপ্রয়োজনীয় camera বা microphone access দেবেন না।"
                        ]

                    }

                },


                {

                    name: {
                        EN: "📍 Location Tracking",
                        BN: "📍 Location Tracking"
                    },

                    title: {
                        EN: "Location Privacy",
                        BN: "Location Privacy"
                    },

                    steps: {

                        EN: [

                            "Open Settings → Location.",

                            "Review apps with location access.",

                            "Change unnecessary access to Deny or Ask every time.",

                            "Review location sharing in social media apps.",

                            "Turn off unnecessary live location sharing.",

                            "Review Google/Apple account location settings."

                        ],

                        BN: [

                            "Settings → Location খুলুন।",

                            "কোন কোন app location access পাচ্ছে দেখুন।",

                            "অপ্রয়োজনীয় access বন্ধ করুন বা Ask every time দিন।",

                            "Social media app-এর location sharing পরীক্ষা করুন।",

                            "অপ্রয়োজনীয় live location sharing বন্ধ করুন।",

                            "Google/Apple account-এর location settings পরীক্ষা করুন।"

                        ]

                    },

                    dont: {

                        EN: [
                            "Do not keep continuous location access enabled for unnecessary apps."
                        ],

                        BN: [
                            "অপ্রয়োজনীয় app-এর জন্য সবসময় location access চালু রাখবেন না।"
                        ]

                    }

                }

            ]

        },


        /* =================================================
           ONLINE FRAUD
        ================================================= */

        "Online Fraud": {

            title: {
                EN: "💳 Online Fraud",
                BN: "💳 অনলাইন প্রতারণা"
            },

            description: {
                EN:
                    "Immediate guidance when money or financial information is at risk.",
                BN:
                    "টাকা বা financial information ঝুঁকিতে থাকলে দ্রুত কী করবেন।"
            },

            situations: [

                {

                    name: {
                        EN: "💸 I Lost Money",
                        BN: "💸 আমার টাকা চলে গেছে"
                    },

                    title: {
                        EN: "Possible Financial Fraud",
                        BN: "সম্ভাব্য Financial Fraud"
                    },

                    steps: {

                        EN: [

                            "Contact your bank/payment provider immediately using official channels.",

                            "Tell them the transaction may be fraudulent.",

                            "Save the transaction/reference ID.",

                            "Take screenshots of messages and payment records.",

                            "Secure the account used for payment.",

                            "Change compromised passwords.",

                            "Monitor your account.",

                            "In India, report suspected cyber financial fraud through the official government cybercrime system as quickly as possible."

                        ],

                        BN: [

                            "Official channel ব্যবহার করে সঙ্গে সঙ্গে bank/payment provider-এর সাথে যোগাযোগ করুন।",

                            "Transaction fraudulent হতে পারে বলে জানান।",

                            "Transaction/reference ID সংরক্ষণ করুন।",

                            "Message এবং payment record-এর screenshot নিন।",

                            "Payment-এর সাথে যুক্ত account নিরাপদ করুন।",

                            "Compromised password পরিবর্তন করুন।",

                            "Account monitor করুন।",

                            "ভারতে হলে দ্রুত official government cybercrime reporting system-এ অভিযোগ জানান।"

                        ]

                    },

                    dont: {

                        EN: [
                            "Do not send additional money.",
                            "Do not delete evidence.",
                            "Do not trust recovery scammers."
                        ],

                        BN: [
                            "আর টাকা পাঠাবেন না।",
                            "Evidence delete করবেন না।",
                            "Recovery-এর নামে আসা দ্বিতীয় scammer-কে বিশ্বাস করবেন না।"
                        ]

                    }

                },


                {

                    name: {
                        EN: "📲 UPI Fraud",
                        BN: "📲 UPI Fraud"
                    },

                    title: {
                        EN: "UPI Fraud",
                        BN: "UPI প্রতারণা"
                    },

                    steps: {

                        EN: [

                            "Contact your bank/payment provider immediately.",

                            "Save the transaction ID.",

                            "Take screenshots.",

                            "Report the transaction through the official payment app.",

                            "Report suspected cyber financial fraud through the official government cybercrime reporting system in India.",

                            "Secure your UPI-linked accounts.",

                            "Monitor your bank account."

                        ],

                        BN: [

                            "সঙ্গে সঙ্গে bank/payment provider-এর সাথে যোগাযোগ করুন।",

                            "Transaction ID সংরক্ষণ করুন।",

                            "Screenshot নিন।",

                            "Official payment app-এর মাধ্যমে transaction report করুন।",

                            "ভারতে official government cybercrime reporting system-এ report করুন।",

                            "UPI-linked account নিরাপদ করুন।",

                            "Bank account monitor করুন।"

                        ]

                    },

                    dont: {

                        EN: [
                            "Never share your UPI PIN.",
                            "Never approve an unknown payment request.",
                            "Receiving money does not require entering your UPI PIN."
                        ],

                        BN: [
                            "UPI PIN কখনো share করবেন না।",
                            "অপরিচিত payment request approve করবেন না।",
                            "টাকা receive করার জন্য UPI PIN দিতে হয় না।"
                        ]

                    }

                }

            ]

        },


        /* =================================================
           SUSPICIOUS ACTIVITY
        ================================================= */

        "Suspicious Activity": {

            title: {
                EN: "🕵️ Suspicious Activity",
                BN: "🕵️ সন্দেহজনক কার্যকলাপ"
            },

            description: {
                EN:
                    "Investigate unusual logins, malware and fake login pages.",
                BN:
                    "Unknown login, malware এবং fake login page সম্পর্কে নির্দেশনা।"
            },

            situations: [

                {

                    name: {
                        EN: "🚨 Unknown Login",
                        BN: "🚨 Unknown Login"
                    },

                    title: {
                        EN: "Someone Logged Into My Account",
                        BN: "কেউ আমার Account-এ Login করেছে"
                    },

                    steps: {

                        EN: [

                            "Change the password immediately.",

                            "Sign out unknown devices.",

                            "Enable 2FA.",

                            "Review recent security activity.",

                            "Check recovery email and phone.",

                            "Secure the connected email account."

                        ],

                        BN: [

                            "সঙ্গে সঙ্গে password পরিবর্তন করুন।",

                            "অপরিচিত device logout করুন।",

                            "2FA চালু করুন।",

                            "Recent security activity পরীক্ষা করুন।",

                            "Recovery email এবং phone পরীক্ষা করুন।",

                            "Connected email account নিরাপদ করুন।"

                        ]

                    },

                    dont: {

                        EN: [
                            "Do not share your password."
                        ],

                        BN: [
                            "Password কাউকে দেবেন না।"
                        ]

                    }

                },


                {

                    name: {
                        EN: "🦠 Possible Malware",
                        BN: "🦠 সম্ভাব্য Malware"
                    },

                    title: {
                        EN: "Possible Malware",
                        BN: "সম্ভাব্য Malware"
                    },

                    steps: {

                        EN: [

                            "Disconnect from the internet if active compromise is suspected.",

                            "Check recently installed apps.",

                            "Remove suspicious apps.",

                            "Update the operating system.",

                            "Run a trusted security scan.",

                            "Change important passwords using a trusted device."

                        ],

                        BN: [

                            "Active compromise সন্দেহ হলে internet connection সাময়িকভাবে বন্ধ করুন।",

                            "Recently installed app পরীক্ষা করুন।",

                            "সন্দেহজনক app remove করুন।",

                            "Operating system update করুন।",

                            "Trusted security scan চালান।",

                            "Trusted device ব্যবহার করে গুরুত্বপূর্ণ password পরিবর্তন করুন।"

                        ]

                    },

                    dont: {

                        EN: [
                            "Do not install security software from random pop-ups."
                        ],

                        BN: [
                            "Random pop-up থেকে security software install করবেন না।"
                        ]

                    }

                }

            ]

        },


        /* =================================================
           GIRLS HARASSMENT
        ================================================= */

        "Girls Harassment": {

            title: {
                EN: "👩 Digital Harassment Safety",
                BN: "👩 মেয়েদের Digital Harassment Safety"
            },

            description: {
                EN:
                    "Guidance for unwanted calls, messages, DMs, threats and online harassment.",
                BN:
                    "Unwanted call, message, DM, threat এবং online harassment হলে কী করবেন।"
            },

            situations: [

                {

                    name: {
                        EN: "📞 Repeated / Harassing Calls",
                        BN: "📞 বারবার বা Harassing Call"
                    },

                    title: {
                        EN: "Harassing Calls",
                        BN: "Harassing Call হলে"
                    },

                    steps: {

                        EN: [

                            "Do not argue with or threaten the caller.",

                            "Save call logs and screenshots.",

                            "Block the number if it is safe to do so.",

                            "Use the phone's spam/blocking features.",

                            "If the caller threatens you, preserve the exact words/messages.",

                            "Tell a trusted person about the situation.",

                            "If you feel physically unsafe, move to a safe place and seek local emergency or law-enforcement assistance.",

                            "Report repeated harassment through the relevant platform or official authority."

                        ],

                        BN: [

                            "Caller-এর সাথে ঝগড়া বা পাল্টা threat দেবেন না।",

                            "Call log এবং screenshot সংরক্ষণ করুন।",

                            "নিরাপদ হলে number block করুন।",

                            "Phone-এর spam/blocking feature ব্যবহার করুন।",

                            "Threat দিলে exact message/call evidence সংরক্ষণ করুন।",

                            "বিশ্বস্ত একজন মানুষকে বিষয়টি জানান।",

                            "Physical safety নিয়ে ভয় থাকলে নিরাপদ জায়গায় যান এবং প্রয়োজন অনুযায়ী স্থানীয় emergency বা law-enforcement সহায়তা নিন।",

                            "বারবার harassment হলে platform বা উপযুক্ত official authority-তে report করুন।"

                        ]

                    },

                    dont: {

                        EN: [
                            "Do not send personal information.",
                            "Do not meet the person alone.",
                            "Do not delete evidence."
                        ],

                        BN: [
                            "Personal information দেবেন না।",
                            "অপরিচিত ব্যক্তির সাথে একা দেখা করতে যাবেন না।",
                            "Evidence delete করবেন না।"
                        ]

                    }

                },


                {

                    name: {
                        EN: "💬 WhatsApp / Instagram Harassment",
                        BN: "💬 WhatsApp / Instagram Harassment"
                    },

                    title: {
                        EN: "Online Message Harassment",
                        BN: "Online Message Harassment"
                    },

                    steps: {

                        EN: [

                            "Do not respond emotionally.",

                            "Screenshot the messages/profile.",

                            "Save the username, profile URL and timestamps when possible.",

                            "Block the account.",

                            "Report the account/message using the platform's reporting tools.",

                            "Review privacy settings.",

                            "Restrict who can message, mention or tag you.",

                            "Tell a trusted person if the harassment continues.",

                            "If there are threats, preserve all evidence and consider reporting to the appropriate authority."

                        ],

                        BN: [

                            "Emotionally reply করবেন না।",

                            "Message এবং profile-এর screenshot নিন।",

                            "সম্ভব হলে username, profile link এবং time সংরক্ষণ করুন।",

                            "Account block করুন।",

                            "Platform-এর report option ব্যবহার করুন।",

                            "Privacy settings পরীক্ষা করুন।",

                            "কে message, mention বা tag করতে পারবে তা সীমিত করুন।",

                            "Harassment চলতে থাকলে trusted person-কে জানান।",

                            "Threat থাকলে সব evidence রেখে উপযুক্ত authority-তে report করার কথা বিবেচনা করুন।"

                        ]

                    },

                    dont: {

                        EN: [
                            "Do not send more photos.",
                            "Do not share your address or live location.",
                            "Do not meet the harasser alone."
                        ],

                        BN: [
                            "আর কোনো private photo পাঠাবেন না।",
                            "Address বা live location share করবেন না।",
                            "Harasser-এর সাথে একা দেখা করতে যাবেন না।"
                        ]

                    }

                }

            ]

        },


        /* =================================================
           PRIVATE IMAGE ABUSE
        ================================================= */

        "Private Image Abuse": {

            title: {
                EN: "📸 Private Image / Video Abuse",
                BN: "📸 Private ছবি / ভিডিও Misuse"
            },

            description: {
                EN:
                    "What to do if someone threatens to share or has shared private images/videos.",
                BN:
                    "কেউ private ছবি/ভিডিও ছড়িয়ে দেওয়ার হুমকি দিলে বা ছড়িয়ে দিলে কী করবেন।"
            },

            situations: [

                {

                    name: {
                        EN: "📸 Threat to Share Private Images",
                        BN: "📸 Private ছবি ছড়িয়ে দেওয়ার Threat"
                    },

                    title: {
                        EN: "Private Image Threat",
                        BN: "Private Image Threat"
                    },

                    steps: {

                        EN: [

                            "Do not pay the person just because they demand money.",

                            "Do not send additional photos or videos.",

                            "Do not negotiate by sharing more personal information.",

                            "Take screenshots of the threats, username, profile and messages.",

                            "Preserve the original messages and timestamps.",

                            "Block and report the account when you have preserved the evidence.",

                            "Review account privacy settings.",

                            "Tell a trusted person and do not handle the situation completely alone.",

                            "If there is a credible threat of physical harm, seek immediate local help.",

                            "For serious abuse or illegal image sharing, report through the appropriate official platform and legal/cybercrime channel."

                        ],

                        BN: [

                            "শুধু টাকা চাইছে বলে টাকা দিয়ে দেবেন না।",

                            "আর কোনো ছবি বা ভিডিও পাঠাবেন না।",

                            "আরও personal information দিয়ে negotiation করবেন না।",

                            "Threat, username, profile এবং message-এর screenshot নিন।",

                            "Original message এবং timestamp সংরক্ষণ করুন।",

                            "Evidence নেওয়ার পর account block এবং report করুন।",

                            "Account privacy settings শক্ত করুন।",

                            "Trusted একজন মানুষকে জানান এবং একা সবকিছু handle করার চেষ্টা করবেন না।",

                            "Physical harm-এর বাস্তব threat থাকলে দ্রুত নিরাপদ জায়গায় যান এবং স্থানীয় সহায়তা নিন।",

                            "গুরুতর abuse বা illegal image sharing হলে platform এবং উপযুক্ত official cybercrime/legal channel-এ report করুন।"

                        ]

                    },

                    dont: {

                        EN: [

                            "Do not pay repeatedly.",
                            "Do not send more images.",
                            "Do not delete the evidence.",
                            "Do not meet the person alone."
                        ],

                        BN: [

                            "বারবার টাকা দেবেন না।",
                            "আর কোনো ছবি পাঠাবেন না।",
                            "Evidence delete করবেন না।",
                            "ব্যক্তিটির সাথে একা দেখা করতে যাবেন না।"
                        ]

                    }

                }

            ]

        },


        /* =================================================
           BLACKMAIL
        ================================================= */

        "Blackmail": {

            title: {
                EN: "💔 Online Blackmail Safety",
                BN: "💔 Online Blackmail Safety"
            },

            description: {
                EN:
                    "Safe steps when someone uses photos, videos, chats or personal information to threaten you.",
                BN:
                    "ছবি, ভিডিও, chat বা personal information দিয়ে blackmail করলে নিরাপদ পদক্ষেপ।"
            },

            situations: [

                {

                    name: {
                        EN: "🚨 Someone Is Blackmailing Me",
                        BN: "🚨 কেউ আমাকে Blackmail করছে"
                    },

                    title: {
                        EN: "Blackmail Response",
                        BN: "Blackmail হলে কী করবেন"
                    },

                    steps: {

                        EN: [

                            "Stop sending additional information, photos or money.",

                            "Do not delete the conversation.",

                            "Take screenshots of threats and demands.",

                            "Save usernames, phone numbers, profile links and transaction details.",

                            "Block the person after preserving evidence if appropriate.",

                            "Report the account/platform.",

                            "Tell a trusted family member, friend or responsible adult.",

                            "If the blackmailer threatens physical harm, prioritize your physical safety.",

                            "If money was transferred, contact the bank/payment provider immediately.",

                            "Report serious cybercrime through the appropriate official reporting channel."

                        ],

                        BN: [

                            "আর কোনো information, ছবি বা টাকা পাঠাবেন না।",

                            "Conversation delete করবেন না।",

                            "Threat এবং demand-এর screenshot নিন।",

                            "Username, phone number, profile link এবং transaction details সংরক্ষণ করুন।",

                            "Evidence সংরক্ষণের পর প্রয়োজন অনুযায়ী block করুন।",

                            "Account/platform report করুন।",

                            "Trusted family member, friend বা responsible adult-কে জানান।",

                            "Physical harm-এর threat থাকলে নিজের physical safety-কে প্রথম priority দিন।",

                            "টাকা পাঠিয়ে থাকলে সঙ্গে সঙ্গে bank/payment provider-এর সাথে যোগাযোগ করুন।",

                            "গুরুতর cybercrime হলে উপযুক্ত official reporting channel-এ report করুন।"

                        ]

                    },

                    dont: {

                        EN: [

                            "Do not pay repeatedly.",
                            "Do not send more private content.",
                            "Do not threaten the blackmailer back.",
                            "Do not meet them alone."
                        ],

                        BN: [

                            "বারবার টাকা দেবেন না।",
                            "আর কোনো private content পাঠাবেন না।",
                            "Blackmailer-কে পাল্টা threat দেবেন না।",
                            "তার সাথে একা দেখা করতে যাবেন না।"
                        ]

                    }

                }

            ]

        },


        /* =================================================
           FAKE ACCOUNT
        ================================================= */

        "Fake Account": {

            title: {
                EN: "👤 Fake Account / Impersonation",
                BN: "👤 Fake Account / পরিচয় নকল"
            },

            description: {
                EN:
                    "What to do when someone creates an account pretending to be you.",
                BN:
                    "কেউ আপনার পরিচয় ব্যবহার করে fake account তৈরি করলে কী করবেন।"
            },

            situations: [

                {

                    name: {
                        EN: "👤 Someone Created a Fake Account",
                        BN: "👤 কেউ আমার নামে Fake Account করেছে"
                    },

                    title: {
                        EN: "Fake Account Response",
                        BN: "Fake Account-এর বিরুদ্ধে পদক্ষেপ"
                    },

                    steps: {

                        EN: [

                            "Take screenshots of the fake profile.",

                            "Save the profile URL and username.",

                            "Ask trusted friends not to engage with the fake account.",

                            "Report the account as impersonation/fake identity.",

                            "Warn important contacts if necessary.",

                            "Review your own account privacy settings.",

                            "Change passwords if you suspect account compromise.",

                            "Enable 2FA.",

                            "Keep evidence of repeated impersonation."

                        ],

                        BN: [

                            "Fake profile-এর screenshot নিন।",

                            "Profile URL এবং username সংরক্ষণ করুন।",

                            "Trusted friends-কে fake account-এর সাথে engage না করতে বলুন।",

                            "Impersonation/fake identity হিসেবে account report করুন।",

                            "প্রয়োজনে গুরুত্বপূর্ণ contacts-কে সতর্ক করুন।",

                            "নিজের account privacy settings পরীক্ষা করুন।",

                            "Account compromise সন্দেহ হলে password পরিবর্তন করুন।",

                            "2FA চালু করুন।",

                            "Repeated impersonation হলে evidence সংরক্ষণ করুন।"

                        ]

                    },

                    dont: {

                        EN: [
                            "Do not give the fake account more personal information.",
                            "Do not engage in arguments."
                        ],

                        BN: [
                            "Fake account-কে আরও personal information দেবেন না।",
                            "অপ্রয়োজনীয় argument করবেন না।"
                        ]

                    }

                }

            ]

        },


        /* =================================================
           STALKING
        ================================================= */

        "Stalking": {

            title: {
                EN: "👁️ Stalking & Tracking Safety",
                BN: "👁️ Stalking ও Tracking Safety"
            },

            description: {
                EN:
                    "Digital safety steps when someone repeatedly follows, tracks or monitors you online.",
                BN:
                    "কেউ বারবার online follow, track বা monitor করছে বলে মনে হলে করণীয়।"
            },

            situations: [

                {

                    name: {
                        EN: "👁️ I Think Someone Is Tracking Me",
                        BN: "👁️ মনে হচ্ছে কেউ আমাকে Track করছে"
                    },

                    title: {
                        EN: "Possible Digital Stalking",
                        BN: "সম্ভাব্য Digital Stalking"
                    },

                    steps: {

                        EN: [

                            "Do not confront the person alone if you fear escalation.",

                            "Review location-sharing settings.",

                            "Check Google/Apple account sessions and unknown devices.",

                            "Review social media logged-in devices.",

                            "Check unknown apps and permissions.",

                            "Change important passwords from a trusted device.",

                            "Enable 2FA.",

                            "Review Bluetooth/location-sharing features.",

                            "Save evidence of repeated contact or threats.",

                            "Tell a trusted person.",

                            "If there is a physical safety concern, move to a safe place and seek appropriate local help."

                        ],

                        BN: [

                            "পরিস্থিতি খারাপ হওয়ার ভয় থাকলে একা গিয়ে ব্যক্তিটির মুখোমুখি হবেন না।",

                            "Location sharing settings পরীক্ষা করুন।",

                            "Google/Apple account-এর sessions এবং unknown device পরীক্ষা করুন।",

                            "Social media logged-in devices পরীক্ষা করুন।",

                            "Unknown app এবং permission পরীক্ষা করুন।",

                            "Trusted device ব্যবহার করে গুরুত্বপূর্ণ password পরিবর্তন করুন।",

                            "2FA চালু করুন।",

                            "Bluetooth/location-sharing feature পরীক্ষা করুন।",

                            "Repeated contact বা threat-এর evidence রাখুন।",

                            "Trusted একজন মানুষকে জানান।",

                            "Physical safety নিয়ে ভয় থাকলে নিরাপদ জায়গায় যান এবং উপযুক্ত স্থানীয় সহায়তা নিন।"

                        ]

                    },

                    dont: {

                        EN: [
                            "Do not share live location publicly.",
                            "Do not meet a suspected stalker alone.",
                            "Do not delete evidence."
                        ],

                        BN: [
                            "Publicly live location share করবেন না।",
                            "Suspected stalker-এর সাথে একা দেখা করবেন না।",
                            "Evidence delete করবেন না।"
                        ]

                    }

                }

            ]

        },


        /* =================================================
           GIRLS PRIVACY
        ================================================= */

        "Girls Privacy": {

            title: {
                EN: "🔒 Girls Privacy Protection",
                BN: "🔒 মেয়েদের Privacy Protection"
            },

            description: {
                EN:
                    "Important privacy settings for social media, photos, location and personal information.",
                BN:
                    "Social media, photo, location এবং personal information নিরাপদ রাখার গুরুত্বপূর্ণ নিয়ম।"
            },

            situations: [

                {

                    name: {
                        EN: "🔒 Social Media Privacy",
                        BN: "🔒 Social Media Privacy"
                    },

                    title: {
                        EN: "Protect Your Social Media",
                        BN: "Social Media নিরাপদ রাখুন"
                    },

                    steps: {

                        EN: [

                            "Use a strong unique password.",

                            "Enable 2FA.",

                            "Review logged-in devices.",

                            "Set profile visibility appropriately.",

                            "Limit who can message, mention and tag you.",

                            "Review followers/friends periodically.",

                            "Avoid posting your exact home address.",

                            "Avoid posting live location in real time.",

                            "Review old public posts and photos.",

                            "Secure the email account connected to social media."

                        ],

                        BN: [

                            "Strong এবং unique password ব্যবহার করুন।",

                            "2FA চালু করুন।",

                            "Logged-in devices পরীক্ষা করুন।",

                            "Profile visibility প্রয়োজন অনুযায়ী সীমিত করুন।",

                            "কে message, mention এবং tag করতে পারবে তা সীমিত করুন।",

                            "Followers/friends নিয়মিত পরীক্ষা করুন।",

                            "Exact home address post করবেন না।",

                            "Real-time live location post করবেন না।",

                            "পুরনো public post এবং photo পরীক্ষা করুন।",

                            "Social media-এর সাথে যুক্ত email account নিরাপদ করুন।"

                        ]

                    },

                    dont: {

                        EN: [
                            "Do not accept every unknown follow request.",
                            "Do not share private information publicly."
                        ],

                        BN: [
                            "অপরিচিত প্রত্যেক follow request accept করবেন না।",
                            "Private information public করবেন না।"
                        ]

                    }

                }

            ]

        },


        /* =================================================
           GIRLS EMERGENCY
        ================================================= */

        "Girls Emergency": {

            title: {
                EN: "🚨 Girls Digital Safety Emergency",
                BN: "🚨 মেয়েদের Digital Safety Emergency"
            },

            description: {

                EN:
                    "Immediate steps when online abuse may also create a real-world safety risk.",

                BN:
                    "Online abuse-এর সাথে real-world safety risk থাকলে প্রথমে কী করবেন।"

            },

            situations: [

                {

                    name: {

                        EN:
                            "🚨 I Feel Physically Unsafe",

                        BN:
                            "🚨 আমি Physical Safety নিয়ে ভয় পাচ্ছি"

                    },

                    title: {

                        EN:
                            "Immediate Personal Safety",

                        BN:
                            "তাৎক্ষণিক Personal Safety"

                    },

                    steps: {

                        EN: [

                            "Move to a safe and populated place if possible.",

                            "Tell a trusted person immediately.",

                            "Do not meet the person threatening you alone.",

                            "Preserve messages, calls, profiles and other evidence.",

                            "Do not reveal your current location.",

                            "Secure important accounts and devices.",

                            "If there is an immediate physical danger, contact appropriate local emergency or law-enforcement assistance.",

                            "After immediate safety is secured, report the digital abuse through the appropriate platform and official channel."

                        ],

                        BN: [

                            "সম্ভব হলে নিরাপদ এবং মানুষের উপস্থিতি আছে এমন জায়গায় যান।",

                            "সঙ্গে সঙ্গে trusted একজন মানুষকে জানান।",

                            "যে ব্যক্তি threat দিচ্ছে তার সাথে একা দেখা করবেন না।",

                            "Message, call, profile এবং অন্যান্য evidence সংরক্ষণ করুন।",

                            "আপনার বর্তমান location প্রকাশ করবেন না।",

                            "গুরুত্বপূর্ণ account এবং device নিরাপদ করুন।",

                            "Immediate physical danger থাকলে উপযুক্ত স্থানীয় emergency বা law-enforcement assistance নিন।",

                            "Immediate safety নিশ্চিত হওয়ার পর platform এবং উপযুক্ত official channel-এ digital abuse report করুন।"

                        ]

                    },

                    dont: {

                        EN: [

                            "Do not meet the person alone.",
                            "Do not publish your location.",
                            "Do not delete evidence."
                        ],

                        BN: [

                            "ব্যক্তিটির সাথে একা দেখা করবেন না।",
                            "নিজের location public করবেন না।",
                            "Evidence delete করবেন না।"
                        ]

                    }

                }

            ]

        },


        /* =================================================
           EMERGENCY
        ================================================= */

        "Emergency Help": {

            title: {

                EN:
                    "🚨 Emergency Cyber Help",

                BN:
                    "🚨 জরুরি Cyber Help"

            },

            description: {

                EN:
                    "Immediate actions for urgent cyber incidents.",

                BN:
                    "জরুরি cyber incident হলে প্রথমে যে পদক্ষেপগুলো নেবেন।"

            },

            situations: [

                {

                    name: {

                        EN:
                            "🔐 Account Actively Compromised",

                        BN:
                            "🔐 Account এখনো Compromised"

                    },

                    title: {

                        EN:
                            "Active Account Compromise",

                        BN:
                            "Active Account Compromise"

                    },

                    steps: {

                        EN: [

                            "Secure your email account first if it may be compromised.",

                            "Change the affected account password.",

                            "Sign out unknown devices.",

                            "Enable 2FA.",

                            "Check recovery information.",

                            "Save screenshots, emails and other evidence.",

                            "Use only the affected service's official support/recovery channel."

                        ],

                        BN: [

                            "Email account compromised হতে পারে মনে হলে প্রথমে সেটি নিরাপদ করুন।",

                            "Affected account-এর password পরিবর্তন করুন।",

                            "Unknown device logout করুন।",

                            "2FA চালু করুন।",

                            "Recovery information পরীক্ষা করুন।",

                            "Screenshot, email এবং অন্যান্য evidence রাখুন।",

                            "শুধু affected service-এর official support/recovery channel ব্যবহার করুন।"

                        ]

                    },

                    dont: {

                        EN: [

                            "Do not communicate with the suspected attacker.",
                            "Never share OTPs or recovery codes."
                        ],

                        BN: [

                            "Suspected attacker-এর সাথে unnecessary যোগাযোগ করবেন না।",
                            "OTP বা recovery code কখনো দেবেন না।"

                        ]

                    }

                },


                {

                    name: {

                        EN:
                            "💳 Money Is at Risk",

                        BN:
                            "💳 টাকা ঝুঁকিতে"

                    },

                    title: {

                        EN:
                            "Financial Emergency",

                        BN:
                            "Financial Emergency"

                    },

                    steps: {

                        EN: [

                            "Contact your bank/payment provider immediately.",

                            "Ask them to secure the account or transaction.",

                            "Save transaction details.",

                            "Secure your email account.",

                            "Change compromised passwords.",

                            "Report through the appropriate official channel.",

                            "In India, use the official cybercrime reporting system for suspected cyber financial fraud."

                        ],

                        BN: [

                            "সঙ্গে সঙ্গে bank/payment provider-এর সাথে যোগাযোগ করুন।",

                            "Account বা transaction secure করতে বলুন।",

                            "Transaction details সংরক্ষণ করুন।",

                            "Email account নিরাপদ করুন।",

                            "Compromised password পরিবর্তন করুন।",

                            "উপযুক্ত official channel-এ report করুন।",

                            "ভারতে cyber financial fraud সন্দেহ হলে official cybercrime reporting system ব্যবহার করুন।"

                        ]

                    },

                    dont: {

                        EN: [

                            "Do not send additional money.",
                            "Do not trust anyone promising guaranteed recovery."
                        ],

                        BN: [

                            "আর টাকা পাঠাবেন না।",
                            "Guaranteed recovery-এর প্রতিশ্রুতি দেওয়া কাউকে বিশ্বাস করবেন না।"

                        ]

                    }

                }

            ]

        }

    };


    /* =====================================================
       OFFICIAL LINKS
    ===================================================== */

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


    /* =====================================================
       OPEN HELP
    ===================================================== */

    function openHelp(service) {

        const info =
            helpData[service];

        if (!info) return;


        document
            .getElementById("cybercare-modal")
            ?.remove();


        const overlay =
            document.createElement("div");

        overlay.id =
            "cybercare-modal";


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
            max-width:780px;
            max-height:94vh;
            overflow-y:auto;
            background:#ffffff;
            color:#111827;
            border-radius:22px;
            padding:25px;
            position:relative;
            box-shadow:0 25px 70px rgba(0,0,0,.5);
            font-family:Arial,sans-serif;
            box-sizing:border-box;
        `;


        const title =
            info.title[currentLanguage];


        const description =
            info.description[currentLanguage];


        let buttons = "";


        info.situations.forEach(
            (item, index) => {

                buttons += `

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
                        ${item.name[currentLanguage]}
                    </button>

                `;
            }
        );


        modal.innerHTML = `

            <button
                id="closeCyberCare"
                type="button"
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
                    ${title}
                </h2>

                <p style="color:#64748b;">
                    ${description}
                </p>

            </div>


            <h3 style="margin-top:25px;">
                👇
                ${
                    currentLanguage === "BN"
                        ? "কী ঘটেছে?"
                        : "What happened?"
                }
            </h3>


            ${buttons}


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

                    🛡️
                    ${
                        currentLanguage === "BN"
                            ? "উপরের সমস্যাটি নির্বাচন করুন।"
                            : "Select your problem above."
                    }

                </div>

            </div>
        `;


        overlay.appendChild(modal);

        document.body.appendChild(overlay);


        modal
            .querySelector(
                "#closeCyberCare"
            )
            .addEventListener(
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
            .querySelectorAll(
                ".cyber-situation"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

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

            });

    }


    /* =====================================================
       SHOW RESULT
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
            situation.steps[
                currentLanguage
            ]
            .map(
                (step, index) => `

                    <li style="
                        margin-bottom:12px;
                    ">

                        <strong>
                            ${
                                currentLanguage === "BN"
                                    ? `ধাপ ${index + 1}:`
                                    : `Step ${index + 1}:`
                            }
                        </strong>

                        ${step}

                    </li>

                `
            )
            .join("");


        const dont =
            situation.dont[
                currentLanguage
            ]
            .map(
                item => `

                    <li style="
                        margin-bottom:10px;
                    ">
                        ${item}
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
                        🌐
                        ${
                            currentLanguage === "BN"
                                ? "Official Recovery / Support"
                                : "Official Recovery / Support"
                        }
                    </h4>

                    <p style="
                        margin:8px 0 14px;
                        color:#475569;
                    ">

                        ${
                            currentLanguage === "BN"
                                ? "শুধুমাত্র official service website ব্যবহার করুন।"
                                : "Use the official service website only."
                        }

                    </p>

                    <a
                        href="${situation.official}"
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
                        ${
                            currentLanguage === "BN"
                                ? "Official Page খুলুন →"
                                : "Open Official Page →"
                        }
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
                    ⚡
                    ${situation.title[currentLanguage]}
                </h3>


                <h4 style="margin-top:20px;">
                    ✅
                    ${
                        currentLanguage === "BN"
                            ? "আপনার যা করা উচিত"
                            : "What you should do"
                    }
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
                        ⚠️
                        ${
                            currentLanguage === "BN"
                                ? "যা কখনো করবেন না"
                                : "What you should NOT do"
                        }
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

                    <h4>
                        📸
                        ${
                            currentLanguage === "BN"
                                ? "Evidence সংরক্ষণ করুন"
                                : "Save Evidence"
                        }
                    </h4>

                    <p style="
                        margin:8px 0 0;
                        color:#475569;
                    ">

                        ${
                            currentLanguage === "BN"

                            ?

                            "Screenshot, email, message, username, profile link, call log, transaction ID, receipt এবং relevant security alert সংরক্ষণ করুন।"

                            :

                            "Keep screenshots, emails, messages, usernames, profile links, call logs, transaction IDs, receipts and relevant security alerts."
                        }

                    </p>

                </div>


                <div style="
                    margin-top:20px;
                    padding:16px;
                    background:#fefce8;
                    border-radius:12px;
                ">

                    <h4>
                        🛡️
                        ${
                            currentLanguage === "BN"
                                ? "গুরুত্বপূর্ণ"
                                : "Important"
                        }
                    </h4>

                    <p style="
                        margin:8px 0 0;
                        color:#475569;
                    ">

                        ${
                            currentLanguage === "BN"

                            ?

                            "CyberCare সাধারণ safety guidance দেয়। গুরুত্বপূর্ণ account, financial বা legal বিষয়ে সংশ্লিষ্ট official service/authority-এর নির্দেশনা যাচাই করুন।"

                            :

                            "CyberCare provides general safety guidance. For important account, financial or legal matters, verify instructions through the relevant official service or authority."
                        }

                    </p>

                </div>

            </div>

        `;


        result.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }


    /* =====================================================
       SERVICE BUTTONS
    ===================================================== */

    document
        .querySelectorAll(".help-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const service =
                        button.getAttribute(
                            "data-service"
                        );

                    openHelp(service);

                }
            );

        });


    emergencyBtn?.addEventListener(
        "click",
        () => {

            openHelp(
                "Emergency Help"
            );

        }
    );


    /* =====================================================
       MENU NAVIGATION
    ===================================================== */

    document
        .querySelectorAll(".menu-item")
        .forEach(item => {

            item.addEventListener(
                "click",
                () => {

                    const target =
                        item.getAttribute(
                            "data-menu"
                        );

                    closeSideMenu();


                    if (
                        target ===
                        "emergency"
                    ) {

                        setTimeout(
                            () => {

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
                            () => {

                                section.scrollIntoView({
                                    behavior:
                                        "smooth",
                                    block:
                                        "start"
                                });

                            },
                            200
                        );

                    }

                }
            );

        });


    /* =====================================================
       TOOL MODAL
    ===================================================== */

    function createToolModal(
        title,
        content
    ) {

        document
            .getElementById(
                "cybercare-tool-modal"
            )
            ?.remove();


        const overlay =
            document.createElement(
                "div"
            );


        overlay.id =
            "cybercare-tool-modal";


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
            document.createElement(
                "div"
            );


        modal.style.cssText = `
            width:100%;
            max-width:680px;
            max-height:90vh;
            overflow-y:auto;
            background:#fff;
            color:#111827;
            border-radius:20px;
            padding:25px;
            position:relative;
            box-shadow:0 25px 70px rgba(0,0,0,.45);
            font-family:Arial,sans-serif;
            box-sizing:border-box;
        `;


        modal.innerHTML = `

            <button
                id="closeTool"
                type="button"
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


            <div style="
                padding-right:45px;
            ">

                <h2>
                    ${title}
                </h2>

            </div>


            <div style="
                margin-top:20px;
            ">

                ${content}

            </div>

        `;


        overlay.appendChild(modal);

        document.body.appendChild(
            overlay
        );


        modal
            .querySelector(
                "#closeTool"
            )
            .addEventListener(
                "click",
                () => overlay.remove()
            );


        overlay.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    overlay
                ) {

                    overlay.remove();

                }

            }
        );


        return modal;

    }


    /* =====================================================
       SCAM CHECKER
    ===================================================== */

    function openScamChecker() {

        const isBN =
            currentLanguage === "BN";


        const modal =
            createToolModal(

                isBN
                    ? "🔎 Scam Checker"
                    : "🔎 Scam Checker",

                `

                <p>
                    ${
                        isBN
                            ? "সন্দেহজনক message এখানে paste করুন। Toolটি common warning sign খুঁজবে।"
                            : "Paste a suspicious message below. CyberCare will check common warning signs."
                    }
                </p>


                <textarea
                    id="scamInput"
                    placeholder="${
                        isBN
                            ? "সন্দেহজনক message এখানে paste করুন..."
                            : "Paste suspicious message here..."
                    }"
                    style="
                        width:100%;
                        min-height:150px;
                        padding:12px;
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
                        padding:12px 18px;
                        border:none;
                        border-radius:10px;
                        background:#2563eb;
                        color:white;
                        font-weight:bold;
                        cursor:pointer;
                    "
                >
                    ${
                        isBN
                            ? "Message Check করুন"
                            : "Check Message"
                    }
                </button>


                <div
                    id="scamResult"
                    style="margin-top:18px;"
                ></div>

                `
            );


        modal
            .querySelector(
                "#checkScam"
            )
            .addEventListener(
                "click",
                () => {

                    const text =
                        modal
                            .querySelector(
                                "#scamInput"
                            )
                            .value
                            .toLowerCase();


                    if (!text.trim()) {

                        modal
                            .querySelector(
                                "#scamResult"
                            )
                            .innerHTML = `

                            <div style="
                                padding:15px;
                                background:#fff7ed;
                                border-radius:12px;
                            ">

                                ⚠️
                                ${
                                    isBN
                                        ? "আগে একটি message paste করুন।"
                                        : "Please paste a message first."
                                }

                            </div>

                        `;

                        return;
                    }


                    const patterns = [

                        ["otp",
                            isBN
                                ? "OTP চাওয়া হচ্ছে।"
                                : "Asks for an OTP/code."
                        ],

                        ["password",
                            isBN
                                ? "Password চাওয়া হচ্ছে।"
                                : "Asks for a password."
                        ],

                        ["urgent",
                            isBN
                                ? "Urgency তৈরি করছে।"
                                : "Uses urgency."
                        ],

                        ["immediately",
                            isBN
                                ? "তাড়াহুড়ো করতে চাপ দিচ্ছে।"
                                : "Creates pressure to act immediately."
                        ],

                        ["click",
                            isBN
                                ? "Click করার নির্দেশ আছে।"
                                : "Contains a request to click."
                        ],

                        ["verify",
                            isBN
                                ? "Verification-এর কথা বলা হচ্ছে।"
                                : "May be asking for verification."
                        ],

                        ["bank",
                            isBN
                                ? "Banking information-এর কথা আছে।"
                                : "Mentions banking information."
                        ],

                        ["upi",
                            isBN
                                ? "UPI/payment-এর কথা আছে।"
                                : "Mentions UPI/payment."
                        ],

                        ["prize",
                            isBN
                                ? "Prize/reward-এর কথা আছে।"
                                : "Mentions a prize/reward."
                        ],

                        ["winner",
                            isBN
                                ? "Winner হওয়ার দাবি করছে।"
                                : "Claims you have won."
                        ],

                        ["refund",
                            isBN
                                ? "Refund-এর কথা আছে।"
                                : "Mentions a refund."
                        ],

                        ["investment",
                            isBN
                                ? "Investment-এর প্রস্তাব আছে।"
                                : "Mentions investment."
                        ],

                        ["free",
                            isBN
                                ? "Free offer-এর কথা আছে।"
                                : "Uses a free/reward offer."
                        ]

                    ];


                    const warnings = [];


                    patterns.forEach(
                        ([word, warning]) => {

                            if (
                                text.includes(word)
                            ) {

                                warnings.push(
                                    warning
                                );

                            }

                        }
                    );


                    const result =
                        modal.querySelector(
                            "#scamResult"
                        );


                    if (warnings.length) {

                        result.innerHTML = `

                            <div style="
                                padding:16px;
                                background:#fff1f2;
                                border-radius:12px;
                            ">

                                <h3>
                                    ⚠️
                                    ${
                                        isBN
                                            ? "Warning Signs পাওয়া গেছে"
                                            : "Warning Signs Found"
                                    }
                                </h3>

                                <ul>
                                    ${warnings
                                        .map(
                                            w =>
                                                `<li>${w}</li>`
                                        )
                                        .join("")}
                                </ul>

                                <strong>
                                    ${
                                        isBN
                                            ? "OTP, password, PIN বা recovery code কাউকে দেবেন না।"
                                            : "Do not share OTPs, passwords, PINs or recovery codes."
                                    }
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

                                ✅
                                ${
                                    isBN
                                        ? "Common warning word পাওয়া যায়নি।"
                                        : "No common warning words were detected."
                                }

                                <br><br>

                                ${
                                    isBN
                                        ? "এটি message-টি safe প্রমাণ করে না। Official app/website থেকে verify করুন।"
                                        : "This does NOT prove the message is safe. Verify through the official app or website."
                                }

                            </div>

                        `;

                    }

                }
            );

    }


    /* =====================================================
       PASSWORD CHECKER
    ===================================================== */

    function openPasswordChecker() {

        const isBN =
            currentLanguage === "BN";


        const modal =
            createToolModal(

                "🔐 Password Safety Checker",

                `

                <p>
                    ${
                        isBN
                            ? "Passwordটি browser-এর মধ্যেই check হবে। এটি কোথাও পাঠানো হবে না।"
                            : "The password is checked locally in your browser and is not sent anywhere."
                    }
                </p>


                <input
                    id="passwordInput"
                    type="password"
                    placeholder="${
                        isBN
                            ? "Password লিখুন"
                            : "Enter a password to test"
                    }"
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
                    ${
                        isBN
                            ? "Password Check করুন"
                            : "Check Password"
                    }
                </button>


                <div
                    id="passwordResult"
                    style="margin-top:18px;"
                ></div>


                <div style="
                    margin-top:20px;
                    padding:15px;
                    background:#fff7ed;
                    border-radius:12px;
                ">

                    <strong>
                        ⚠️
                        ${
                            isBN
                                ? "Sample password কখনো ব্যবহার করবেন না।"
                                : "Never use publicly displayed sample passwords."
                        }
                    </strong>

                </div>

                `
            );


        modal
            .querySelector(
                "#checkPassword"
            )
            .addEventListener(
                "click",
                () => {

                    const password =
                        modal
                            .querySelector(
                                "#passwordInput"
                            )
                            .value;


                    const result =
                        modal.querySelector(
                            "#passwordResult"
                        );


                    let score = 0;


                    if (
                        password.length >= 12
                    )
                        score++;


                    if (
                        /[A-Z]/.test(
                            password
                        )
                    )
                        score++;


                    if (
                        /[a-z]/.test(
                            password
                        )
                    )
                        score++;


                    if (
                        /[0-9]/.test(
                            password
                        )
                    )
                        score++;


                    if (
                        /[^A-Za-z0-9]/.test(
                            password
                        )
                    )
                        score++;


                    let message;


                    if (score <= 2) {

                        message = `

                            <div style="
                                padding:16px;
                                background:#fff1f2;
                                border-radius:12px;
                            ">

                                🔴
                                ${
                                    isBN
                                        ? "দুর্বল Password"
                                        : "Weak Password"
                                }

                                <br><br>

                                ${
                                    isBN
                                        ? "Password আরও দীর্ঘ, unique এবং complex করুন।"
                                        : "Use a longer, unique and stronger password."
                                }

                            </div>

                        `;

                    } else if (
                        score <= 4
                    ) {

                        message = `

                            <div style="
                                padding:16px;
                                background:#fff7ed;
                                border-radius:12px;
                            ">

                                🟠
                                ${
                                    isBN
                                        ? "মাঝারি Password"
                                        : "Moderate Password"
                                }

                                <br><br>

                                ${
                                    isBN
                                        ? "আরও দীর্ঘ এবং unique করুন।"
                                        : "Make it longer and unique."
                                }

                            </div>

                        `;

                    } else {

                        message = `

                            <div style="
                                padding:16px;
                                background:#ecfdf5;
                                border-radius:12px;
                            ">

                                🟢
                                ${
                                    isBN
                                        ? "ভালো Password Structure"
                                        : "Stronger Password Structure"
                                }

                                <br><br>

                                ${
                                    isBN
                                        ? "তবুও এটি অন্য account-এ reuse করবেন না।"
                                        : "Still never reuse it on another account."
                                }

                            </div>

                        `;

                    }


                    result.innerHTML =
                        message;

                }
            );

    }


    /* =====================================================
       PRIVACY CHECKLIST
    ===================================================== */

    function openPrivacyChecklist() {

        const isBN =
            currentLanguage === "BN";


        const items = isBN

            ? [

                "আমি গুরুত্বপূর্ণ account-এ unique password ব্যবহার করি।",

                "আমি 2FA চালু করেছি।",

                "আমার phone-এ screen lock আছে।",

                "আমি installed apps নিয়মিত পরীক্ষা করি।",

                "আমি camera ও microphone permissions পরীক্ষা করি।",

                "আমি location permissions পরীক্ষা করি।",

                "আমি phone updated রাখি।",

                "আমার recovery email/phone নিরাপদ।",

                "আমি OTP বা recovery code share করি না।",

                "আমি logged-in devices পরীক্ষা করি।",

                "আমি social media privacy settings পরীক্ষা করি।",

                "আমি publicভাবে live location share করি না।"

            ]

            : [

                "I use unique passwords for important accounts.",

                "I have enabled 2FA.",

                "My phone has a screen lock.",

                "I review installed applications.",

                "I review camera and microphone permissions.",

                "I review location permissions.",

                "I keep my phone updated.",

                "My recovery email/phone is secure.",

                "I do not share OTPs or recovery codes.",

                "I review logged-in devices.",

                "I review social media privacy settings.",

                "I do not publicly share my live location."

            ];


        const modal =
            createToolModal(

                isBN
                    ? "📱 Privacy & Security Checklist"
                    : "📱 Privacy & Security Checklist",

                `

                <div id="privacyList">

                    ${items
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
                                ${item}

                            </label>

                        `
                        )
                        .join("")}

                </div>


                <button
                    id="privacyScore"
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
                    ${
                        isBN
                            ? "Safety Score দেখুন"
                            : "Calculate Safety Score"
                    }
                </button>


                <div
                    id="privacyResult"
                    style="margin-top:18px;"
                ></div>

                `
            );


        modal
            .querySelector(
                "#privacyScore"
            )
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

                            if (
                                check.checked
                            )
                                completed++;

                        }
                    );


                    const percentage =
                        Math.round(
                            completed /
                            checks.length *
                            100
                        );


                    modal.querySelector(
                        "#privacyResult"
                    ).innerHTML = `

                        <div style="
                            padding:18px;
                            background:#eff6ff;
                            border-radius:12px;
                        ">

                            🛡️
                            ${
                                isBN
                                    ? "আপনার Cyber Safety Score:"
                                    : "Your Cyber Safety Score:"
                            }

                            <strong>
                                ${percentage}%
                            </strong>

                            <br><br>

                            ${completed}
                            /
                            ${checks.length}

                            ${
                                isBN
                                    ? "টি safety check সম্পন্ন।"
                                    : "safety checks completed."
                            }

                        </div>

                    `;

                }
            );

    }


    /* =====================================================
       CYBER SAFETY SCORE
    ===================================================== */

    function openSafetyScore() {

        const isBN =
            currentLanguage === "BN";


        const questions = isBN

            ? [

                "আপনি কি গুরুত্বপূর্ণ account-এ 2FA ব্যবহার করেন?",

                "আপনি কি unique password ব্যবহার করেন?",

                "আপনি কি logged-in devices পরীক্ষা করেন?",

                "আপনি কি OTP share করেন না?",

                "আপনি কি phone updated রাখেন?",

                "আপনি কি unknown link এড়িয়ে চলেন?",

                "আপনি কি app permissions পরীক্ষা করেন?",

                "আপনার কি secure recovery email/phone আছে?",

                "আপনি কি social media privacy settings পরীক্ষা করেন?",

                "আপনি কি suspicious message verify না করে action নেন না?"

            ]

            : [

                "Do you use 2FA on important accounts?",

                "Do you use unique passwords?",

                "Do you regularly check logged-in devices?",

                "Do you avoid sharing OTPs?",

                "Do you keep your phone updated?",

                "Do you avoid unknown links?",

                "Do you review app permissions?",

                "Do you have a secure recovery email/phone?",

                "Do you review social media privacy settings?",

                "Do you verify suspicious messages before acting?"

            ];


        const modal =
            createToolModal(

                "🛡️ Cyber Safety Score",

                `

                <p>
                    ${
                        isBN
                            ? "আপনার বর্তমান security habits অনুযায়ী উত্তর দিন।"
                            : "Answer according to your current security habits."
                    }
                </p>


                <div id="scoreQuestions">

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
                                ${q}

                            </label>

                        `
                        )
                        .join("")}

                </div>


                <button
                    id="calculateScore"
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
                    ${
                        isBN
                            ? "Score Calculate করুন"
                            : "Calculate Score"
                    }
                </button>


                <div
                    id="scoreResult"
                    style="margin-top:18px;"
                ></div>

                `
            );


        modal
            .querySelector(
                "#calculateScore"
            )
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

                            if (
                                check.checked
                            )
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


                    if (
                        percentage < 40
                    ) {

                        level =
                            isBN
                                ? "🔴 আরও নিরাপত্তা দরকার"
                                : "🔴 Needs Improvement";

                    } else if (
                        percentage < 75
                    ) {

                        level =
                            isBN
                                ? "🟠 ভালো, তবে আরও উন্নতি করা যায়"
                                : "🟠 Good, but can improve";

                    } else {

                        level =
                            isBN
                                ? "🟢 ভালো Security Habits"
                                : "🟢 Strong Safety Habits";

                    }


                    modal
                        .querySelector(
                            "#scoreResult"
                        )
                        .innerHTML = `

                        <div style="
                            padding:18px;
                            background:#eff6ff;
                            border-radius:12px;
                        ">

                            <h3>
                                ${level}
                            </h3>

                            <p>
                                ${
                                    isBN
                                        ? "Score:"
                                        : "Score:"
                                }

                                <strong>
                                    ${percentage}%
                                </strong>
                            </p>

                        </div>

                    `;

                }
            );

    }


    /* =====================================================
       TOOL BUTTONS
    ===================================================== */

    document
        .querySelectorAll(
            ".tool-btn"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const tool =
                        button.dataset.tool;


                    if (
                        tool === "scam"
                    )
                        openScamChecker();


                    if (
                        tool === "password"
                    )
                        openPasswordChecker();


                    if (
                        tool === "privacy"
                    )
                        openPrivacyChecklist();


                    if (
                        tool === "score"
                    )
                        openSafetyScore();

                }
            );

        });


    /* =====================================================
       LEARNING
    ===================================================== */

    learnBtn?.addEventListener(
        "click",
        () => {

            const isBN =
                currentLanguage === "BN";


            createToolModal(

                isBN
                    ? "🎓 Cybersecurity Basics"
                    : "🎓 Cybersecurity Basics",

                `

                <h3>
                    🔐
                    ${
                        isBN
                            ? "Password Safety"
                            : "Password Safety"
                    }
                </h3>

                <p>
                    ${
                        isBN
                            ? "দীর্ঘ, unique password ব্যবহার করুন এবং একই password একাধিক account-এ ব্যবহার করবেন না।"
                            : "Use long, unique passwords and never reuse the same password across important accounts."
                    }
                </p>


                <h3>
                    🔑
                    ${
                        isBN
                            ? "Two-Factor Authentication"
                            : "Two-Factor Authentication"
                    }
                </h3>

                <p>
                    ${
                        isBN
                            ? "Email, social media এবং গুরুত্বপূর্ণ account-এ 2FA চালু করুন।"
                            : "Enable 2FA on email, social media and important accounts."
                    }
                </p>


                <h3>
                    🎣
                    ${
                        isBN
                            ? "Phishing"
                            : "Phishing"
                    }
                </h3>

                <p>
                    ${
                        isBN
                            ? "Unexpected link, OTP request বা urgent message দেখলে আগে verify করুন।"
                            : "Verify unexpected links, OTP requests and urgent messages before taking action."
                    }
                </p>


                <h3>
                    📱
                    ${
                        isBN
                            ? "Phone Security"
                            : "Phone Security"
                    }
                </h3>

                <p>
                    ${
                        isBN
                            ? "Phone এবং app updated রাখুন এবং permission নিয়মিত পরীক্ষা করুন।"
                            : "Keep your phone and apps updated and review permissions regularly."
                    }
                </p>


                <h3>
                    👩
                    ${
                        isBN
                            ? "Girls Digital Safety"
                            : "Girls Digital Safety"
                    }
                </h3>

                <p>
                    ${
                        isBN
                            ? "Harassment, stalking, blackmail বা private image misuse হলে evidence সংরক্ষণ করুন, block/report করুন এবং trusted person-এর সাহায্য নিন।"
                            : "For harassment, stalking, blackmail or private-image abuse, preserve evidence, block/report and seek support from a trusted person."
                    }
                </p>


                <h3>
                    💳
                    ${
                        isBN
                            ? "Financial Safety"
                            : "Financial Safety"
                    }
                </h3>

                <p>
                    ${
                        isBN
                            ? "UPI PIN, OTP, banking password বা card information কাউকে দেবেন না।"
                            : "Never share UPI PINs, OTPs, banking passwords or sensitive card information."
                    }
                </p>


                <h3>
                    🧠
                    ${
                        isBN
                            ? "Think Before You Trust"
                            : "Think Before You Trust"
                    }
                </h3>

                <p>
                    ${
                        isBN
                            ? "যে message ভয়, urgency বা অবাস্তব reward তৈরি করে—সেটি আগে official source থেকে verify করুন।"
                            : "Messages that create fear, urgency or unrealistic rewards should be verified through official sources."
                    }
                </p>

                `
            );

        }
    );


    /* =====================================================
       OFFICIAL LINKS
    ===================================================== */

    window.CyberCareOfficial =
        officialLinks;


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                document
                    .getElementById(
                        "cybercare-modal"
                    )
                    ?.remove();


                document
                    .getElementById(
                        "cybercare-tool-modal"
                    )
                    ?.remove();


                closeSideMenu();

            }

        }
    );


    /* =====================================================
       STARTUP
    ===================================================== */

    console.log(
        "🛡️ CyberCare complete safety system loaded."
    );

});
