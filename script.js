document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       CYBERCARE - FINAL COMPLETE SCRIPT
       =========================================================
       Includes:
       • English / বাংলা
       • Dark / Light mode
       • Side menu
       • Account Recovery
       • Facebook / Instagram / WhatsApp / Google
       • Scam & Phishing
       • OTP / suspicious links
       • Phone Security
       • Online / UPI Fraud
       • Suspicious Activity
       • Emergency Help
       • Women’s Digital Safety
       • Harassment / stalking / blackmail guidance
       • Fake account / abusive messages
       • Evidence preservation
       • Scam Checker
       • Password Checker
       • Privacy Checklist
       • Cyber Safety Score
       • Cybersecurity Learning
       • India Cybercrime quick access
       • Responsive modals
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
    const learnBtn = document.getElementById("learnBtn");


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
       5. LANGUAGE SYSTEM
       ========================================================= */

    const translations = {

        EN: {

            logo: "CyberCare",

            heroTitle:
                "Protecting People. Securing Digital Lives.",

            heroText:
                "Practical cybersecurity guidance for hacked accounts, scams, fraud, privacy problems, harassment and digital threats.",

            emergency:
                "🚨 I Need Help Now",

            servicesTitle:
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

            getHelp:
                "Get Help →",

            learn:
                "🎓 Learn Cybersecurity",

            tools:
                "🛠️ CyberCare Tools",

            about:
                "🛡️ About CyberCare"
        },


        BN: {

            logo:
                "সাইবারকেয়ার",

            heroTitle:
                "মানুষকে সুরক্ষিত রাখা। ডিজিটাল জীবনকে নিরাপদ রাখা।",

            heroText:
                "হ্যাক হওয়া অ্যাকাউন্ট, প্রতারণা, ফিশিং, গোপনীয়তা, হয়রানি ও ডিজিটাল সমস্যায় সহজ ধাপে ধাপে নিরাপত্তা সহায়তা।",

            emergency:
                "🚨 এখনই সাহায্য চাই",

            servicesTitle:
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

            getHelp:
                "সাহায্য নিন →",

            learn:
                "🎓 সাইবার নিরাপত্তা শিখুন",

            tools:
                "🛠️ সাইবারকেয়ার টুলস",

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


        const logo =
            document.querySelector(".logo span");

        if (logo)
            logo.textContent = t.logo;


        const heroH2 =
            document.querySelector(".hero h2");

        if (heroH2)
            heroH2.textContent = t.heroTitle;


        const heroP =
            document.querySelector(".hero p");

        if (heroP)
            heroP.textContent = t.heroText;


        if (emergencyBtn)
            emergencyBtn.textContent = t.emergency;


        const servicesH2 =
            document.querySelector(".services > h2");

        if (servicesH2)
            servicesH2.textContent = t.servicesTitle;


        const servicesText =
            document.querySelector(".services .section-text");

        if (servicesText)
            servicesText.textContent = t.servicesText;


        const cards =
            document.querySelectorAll(".service-card");


        if (cards.length >= 6) {

            cards[0].querySelector("h3").textContent = t.account;
            cards[1].querySelector("h3").textContent = t.scam;
            cards[2].querySelector("h3").textContent = t.phone;
            cards[3].querySelector("h3").textContent = t.fraud;
            cards[4].querySelector("h3").textContent = t.suspicious;
            cards[5].querySelector("h3").textContent = t.emergencyHelp;


            cards.forEach(card => {

                const btn =
                    card.querySelector(".help-btn");

                if (btn)
                    btn.textContent = t.getHelp;
            });
        }


        const learnH2 =
            document.querySelector(".extra-section > h2");

        if (learnH2)
            learnH2.textContent = t.learn;


        const toolsH2 =
            document.querySelector(".tools > h2");

        if (toolsH2)
            toolsH2.textContent = t.tools;


        const aboutH2 =
            document.querySelector(".about-section > h2");

        if (aboutH2)
            aboutH2.textContent = t.about;
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
       7. HELP DATABASE
       ========================================================= */

    const helpData = {


        /* =====================================================
           ACCOUNT RECOVERY
           ===================================================== */

        "Account Recovery": {

            title:
                "🔐 Account Recovery",

            description:
                "Select the account problem you are facing.",

            situations: [

                {
                    name:
                        "📘 Facebook Account Hacked",

                    title:
                        "Facebook Account Recovery",

                    official:
                        officialLinks.facebook,

                    steps: [

                        "Do not panic and do not pay anyone who promises instant recovery.",

                        "Open Facebook's official hacked-account recovery page.",

                        "Choose the option that best describes what happened.",

                        "Complete Facebook's identity and security verification.",

                        "If you still have access, change the password immediately.",

                        "Check the email address and phone number connected to the account.",

                        "Remove anything you do not recognise.",

                        "Review logged-in devices and log out unknown devices.",

                        "Turn on two-factor authentication.",

                        "Check recent posts, messages and profile changes.",

                        "Secure the email account connected to Facebook."
                    ],

                    dont: [

                        "Never share your Facebook password.",

                        "Never share OTPs, login codes or recovery codes.",

                        "Do not pay random people claiming they can recover your account.",

                        "Do not use unofficial recovery websites."
                    ]
                },


                {
                    name:
                        "📸 Instagram Account Hacked",

                    title:
                        "Instagram Account Recovery",

                    official:
                        officialLinks.instagram,

                    steps: [

                        "Open Instagram's official hacked-account recovery page.",

                        "Choose the option describing your problem.",

                        "Check your original email for security messages.",

                        "If you still have access, change your password immediately.",

                        "Check Login Activity.",

                        "Remove unknown devices.",

                        "Check your email and phone number.",

                        "Enable two-factor authentication.",

                        "Review profile information, posts and messages.",

                        "Secure your email account."
                    ],

                    dont: [

                        "Never send verification codes to another person.",

                        "Do not pay unofficial recovery agents.",

                        "Do not give your password to anyone."
                    ]
                },


                {
                    name:
                        "💬 WhatsApp Account Hacked",

                    title:
                        "WhatsApp Account Recovery",

                    official:
                        officialLinks.whatsapp,

                    steps: [

                        "Use the official WhatsApp application.",

                        "Register your phone number again.",

                        "Enter the verification code sent to your phone.",

                        "Open Settings → Linked Devices.",

                        "Log out devices you do not recognise.",

                        "Open Settings → Account → Two-step verification.",

                        "Enable two-step verification.",

                        "Check your profile and conversations for suspicious activity."
                    ],

                    dont: [

                        "Never share your WhatsApp verification code.",

                        "Never share your two-step verification PIN.",

                        "Do not trust anyone asking for your WhatsApp code."
                    ]
                },


                {
                    name:
                        "▶️ Google / YouTube Account Hacked",

                    title:
                        "Google Account Recovery",

                    official:
                        officialLinks.google,

                    steps: [

                        "Open Google's official account recovery page.",

                        "Enter your Google email address or phone number.",

                        "Complete Google's verification process.",

                        "Change your password immediately after recovery.",

                        "Open Google Account → Security.",

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
                    name:
                        "🔑 I Cannot Log In",

                    title:
                        "Cannot Access My Account",

                    steps: [

                        "Use only the official recovery page of the service.",

                        "Try your recovery email or phone number.",

                        "Complete identity verification.",

                        "Secure your email account first if necessary.",

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


        /* =====================================================
           SCAM
           ===================================================== */

        "Scam & Phishing": {

            title:
                "🎣 Scam & Phishing",

            description:
                "Handle suspicious messages, links and fake websites.",

            situations: [

                {
                    name:
                        "💬 Suspicious WhatsApp Link",

                    title:
                        "Suspicious WhatsApp Link",

                    steps: [

                        "Do not click the link again.",

                        "Do not enter your password, OTP, PIN or banking information.",

                        "Take a screenshot of the message.",

                        "Check who sent it.",

                        "Block and report the sender if necessary.",

                        "If you entered a password, change it immediately.",

                        "If financial information was entered, contact your bank/payment provider immediately."
                    ],

                    dont: [

                        "Do not forward the suspicious link.",

                        "Do not download files from it."
                    ]
                },


                {
                    name:
                        "🔗 I Clicked a Suspicious Link",

                    title:
                        "Suspicious Link Clicked",

                    steps: [

                        "Close the website.",

                        "Do not enter additional information.",

                        "If you entered a password, change it from the official website.",

                        "Enable 2FA.",

                        "If a file was downloaded, do not open it.",

                        "Delete suspicious downloaded files.",

                        "Update your device.",

                        "Contact your bank immediately if financial information was entered."
                    ],

                    dont: [

                        "Do not return to the suspicious website.",

                        "Do not install software recommended by the page."
                    ]
                },


                {
                    name:
                        "📩 Phishing Message",

                    title:
                        "Phishing Message",

                    steps: [

                        "Check the sender carefully.",

                        "Look for urgency or threats.",

                        "Do not click unexpected links.",

                        "Open the company's official app or manually type its official website.",

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
                    name:
                        "🔑 I Shared an OTP",

                    title:
                        "OTP Was Shared",

                    steps: [

                        "Identify which account or service the OTP belonged to.",

                        "Change that account password.",

                        "Sign out unknown devices.",

                        "Enable 2FA.",

                        "If it involved banking/payment, contact the bank immediately.",

                        "Monitor the account and transactions."
                    ],

                    dont: [

                        "Do not share another OTP.",

                        "Do not trust anyone asking for another verification code."
                    ]
                }
            ]
        },


        /* =====================================================
           PHONE SECURITY
           ===================================================== */

        "Phone Security": {

            title:
                "📱 Phone Security",

            description:
                "Check apps, permissions and privacy settings.",

            situations: [

                {
                    name:
                        "📦 Unknown App",

                    title:
                        "Unknown Application",

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
                    name:
                        "🎤 Camera / Microphone",

                    title:
                        "Camera & Microphone Security",

                    steps: [

                        "Open Settings → Privacy/Security.",

                        "Open Camera permissions.",

                        "Review apps with camera access.",

                        "Remove unnecessary access.",

                        "Repeat for Microphone permissions.",

                        "Uninstall suspicious applications.",

                        "Update the operating system."
                    ],

                    dont: [

                        "Do not allow unknown apps to access your camera or microphone."
                    ]
                },


                {
                    name:
                        "📍 Location Tracking",

                    title:
                        "Location Privacy",

                    steps: [

                        "Open Settings → Location.",

                        "Review applications with location access.",

                        "Change unnecessary access to Deny or Ask every time.",

                        "Review location sharing in Google, Apple and social applications.",

                        "Remove access from apps you do not trust."
                    ],

                    dont: [

                        "Do not leave continuous location access enabled unnecessarily."
                    ]
                }
            ]
        },


        /* =====================================================
           ONLINE FRAUD
           ===================================================== */

        "Online Fraud": {

            title:
                "💳 Online Fraud",

            description:
                "Take immediate action when money or financial information is at risk.",

            situations: [

                {
                    name:
                        "💸 I Lost Money",

                    title:
                        "Possible Financial Fraud",

                    steps: [

                        "Contact your bank or payment provider immediately.",

                        "Tell them the transaction may be fraudulent.",

                        "Save the transaction ID/reference number.",

                        "Take screenshots of messages and payment records.",

                        "Secure the account used for payment.",

                        "Change compromised passwords.",

                        "Monitor your bank/payment account.",

                        "In India, report suspected financial cyber fraud through the official cybercrime system as quickly as possible."
                    ],

                    dont: [

                        "Do not send additional money.",

                        "Do not delete evidence.",

                        "Do not trust recovery scammers."
                    ]
                },


                {
                    name:
                        "🏦 Banking Information Shared",

                    title:
                        "Banking Information Exposed",

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
                    name:
                        "📲 UPI Fraud",

                    title:
                        "UPI Fraud",

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


        /* =====================================================
           SUSPICIOUS ACTIVITY
           ===================================================== */

        "Suspicious Activity": {

            title:
                "🕵️ Suspicious Activity",

            description:
                "Investigate unusual logins, malware and fake login pages.",

            situations: [

                {
                    name:
                        "🚨 Unknown Login",

                    title:
                        "Someone Logged Into My Account",

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
                    name:
                        "🦠 Possible Malware",

                    title:
                        "Possible Malware",

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
                    name:
                        "🎭 Fake Login Page",

                    title:
                        "Fake Login Page",

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


        /* =====================================================
           EMERGENCY
           ===================================================== */

        "Emergency Help": {

            title:
                "🚨 Emergency Cyber Help",

            description:
                "Immediate actions for urgent cyber incidents.",

            situations: [

                {
                    name:
                        "🔐 Account Actively Compromised",

                    title:
                        "Active Account Compromise",

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
                    name:
                        "💳 Money Is at Risk",

                    title:
                        "Financial Emergency",

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
        },


        /* =====================================================
           WOMEN'S DIGITAL SAFETY
           ===================================================== */

        "Women's Digital Safety": {

            title:
                "👩‍🦰 Women's Digital Safety",

            description:
                "If someone is harassing, stalking, threatening, blackmailing or repeatedly disturbing you online, start with the safest steps below.",

            situations: [


                {
                    name:
                        "📩 Repeated Bad / Abusive Messages",

                    title:
                        "Online Harassment",

                    steps: [

                        "Do not argue with the person if doing so may increase the risk.",

                        "Do not delete the messages before saving evidence.",

                        "Take screenshots showing the username/number, date and time.",

                        "Save the profile URL or account information when possible.",

                        "Block the person after preserving evidence if you feel unsafe.",

                        "Use the platform's Report function for harassment, threats or abusive behaviour.",

                        "Review privacy settings and limit who can message, tag or mention you.",

                        "Tell someone you trust if the harassment is continuing.",

                        "If there are threats of physical harm, contact appropriate local authorities or emergency services.",

                        "If the incident involves cybercrime in India, use the official cybercrime reporting channel."
                    ],

                    dont: [

                        "Do not send your personal address or live location.",

                        "Do not meet the person alone.",

                        "Do not send OTPs or passwords.",

                        "Do not delete evidence before saving it."
                    ]
                },


                {
                    name:
                        "👀 Someone Is Stalking Me Online",

                    title:
                        "Online Stalking",

                    steps: [

                        "Save evidence of repeated unwanted contact.",

                        "Record usernames, phone numbers, profile URLs and dates.",

                        "Review active sessions and logged-in devices on important accounts.",

                        "Change passwords if you suspect account access.",

                        "Enable 2FA.",

                        "Turn off unnecessary location sharing.",

                        "Check whether social media posts reveal your home, workplace, routine or live location.",

                        "Restrict or block the account.",

                        "Tell a trusted person about the situation.",

                        "If there is a credible threat to your physical safety, seek immediate real-world help."
                    ],

                    dont: [

                        "Do not meet the person to 'sort it out'.",

                        "Do not reveal your routine or location.",

                        "Do not give them additional personal information."
                    ]
                },


                {
                    name:
                        "⚠️ Someone Is Blackmailing Me",

                    title:
                        "Online Blackmail",

                    steps: [

                        "Stay calm and do not panic.",

                        "Do not send money simply because the person threatens you.",

                        "Do not send additional photos, videos or personal information.",

                        "Save screenshots of the threats and the account details.",

                        "Save payment requests, phone numbers and profile URLs.",

                        "Do not delete the conversation before preserving evidence.",

                        "Block and report the account when it is safe to do so.",

                        "Change passwords if the person may have access to an account.",

                        "Enable 2FA.",

                        "Tell a trusted person rather than dealing with the situation completely alone.",

                        "For serious threats or suspected cybercrime in India, use the official cybercrime reporting channel."
                    ],

                    dont: [

                        "Do not pay a blackmailer as a guarantee that they will stop.",

                        "Do not send more material.",

                        "Do not threaten the person back.",

                        "Do not delete evidence."
                    ]
                },


                {
                    name:
                        "🖼️ Private Photo / Video Threat",

                    title:
                        "Threat Involving Private Images",

                    steps: [

                        "Do not send additional images or videos.",

                        "Do not pay or negotiate alone.",

                        "Preserve screenshots and account information.",

                        "Record the profile URL, username and relevant messages.",

                        "Report the account/content using the platform's reporting tools.",

                        "Block the account after preserving evidence if appropriate.",

                        "Secure your social media and email accounts.",

                        "Change passwords and enable 2FA.",

                        "Tell someone you trust.",

                        "If content has already been posted, report the specific content and account immediately.",

                        "If there are threats or serious harm, report the incident through the appropriate official channel."
                    ],

                    dont: [

                        "Do not send more content.",

                        "Do not pay a stranger promising guaranteed removal.",

                        "Do not share the material further."
                    ]
                },


                {
                    name:
                        "🎭 Fake Instagram / Facebook Account",

                    title:
                        "Fake Account Using My Name or Photos",

                    steps: [

                        "Take screenshots of the fake profile.",

                        "Copy or save the profile URL.",

                        "Record the username and visible information.",

                        "Report the profile as impersonation/fake account.",

                        "Ask trusted friends not to interact with the fake account.",

                        "Review your own account privacy settings.",

                        "Remove unnecessary public personal information.",

                        "Enable 2FA.",

                        "Warn close contacts if the fake account is contacting them."
                    ],

                    dont: [

                        "Do not give the fake account more information.",

                        "Do not threaten the person behind it.",

                        "Do not delete evidence before saving it."
                    ]
                },


                {
                    name:
                        "📞 Unknown Person Keeps Calling",

                    title:
                        "Repeated Unwanted Calls",

                    steps: [

                        "Do not share personal information.",

                        "Use your phone's block feature.",

                        "Save call logs and screenshots if the calls are threatening or abusive.",

                        "Use spam/unknown caller protection where available.",

                        "Report repeated harassment through the relevant platform or telecom process.",

                        "Review who can see your phone number on social media.",

                        "If the caller makes serious threats, preserve evidence and seek appropriate help."
                    ],

                    dont: [

                        "Do not reveal your address.",

                        "Do not share your live location.",

                        "Do not meet the caller."
                    ]
                },


                {
                    name:
                        "🔐 Someone Knows My Password",

                    title:
                        "Account Privacy May Be Compromised",

                    steps: [

                        "Change the password immediately.",

                        "Use a new password that is not used anywhere else.",

                        "Sign out other devices/sessions.",

                        "Enable 2FA.",

                        "Check recovery email and phone number.",

                        "Review recent login/security activity.",

                        "Check email forwarding rules if the email account may be compromised.",

                        "Secure your primary email account."
                    ],

                    dont: [

                        "Do not reuse the compromised password.",

                        "Do not share the new password with anyone."
                    ]
                }
            ]
        }
    };


    /* =========================================================
       8. ADD WOMEN'S SAFETY TO MENU
       ========================================================= */

    function addWomenSafetyMenuItem() {

        if (!sideMenu) return;

        if (
            sideMenu.querySelector(
                '[data-menu="women-safety"]'
            )
        ) {
            return;
        }


        const item =
            document.createElement("button");

        item.className = "menu-item";

        item.setAttribute(
            "data-menu",
            "women-safety"
        );

        item.type = "button";

        item.textContent =
            "👩‍🦰 Women's Digital Safety";


        sideMenu.appendChild(item);


        item.addEventListener("click", () => {

            closeSideMenu();

            setTimeout(() => {

                openHelp(
                    "Women's Digital Safety"
                );

            }, 200);
        });
    }


    addWomenSafetyMenuItem();


    /* =========================================================
       9. HELP MODAL
       ========================================================= */

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
            max-width:760px;
            max-height:94vh;
            overflow-y:auto;
            background:#fff;
            color:#111827;
            border-radius:22px;
            padding:25px;
            position:relative;
            box-shadow:0 25px 70px rgba(0,0,0,.5);
            font-family:Arial,sans-serif;
        `;


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
                        ${escapeHTML(item.name)}
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
                    🛡️ Select your problem above.
                </div>

            </div>
        `;


        overlay.appendChild(modal);

        document.body.appendChild(overlay);


        document
            .getElementById("closeCyberCare")
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


    /* =========================================================
       10. SHOW HELP RESULT
       ========================================================= */

    function showResult(
        modal,
        situation
    ) {

        const result =
            modal.querySelector(
                "#cybercareResult"
            );


        if (!result) return;


        const steps =
            situation.steps
                .map(
                    (step, index) => `

                        <li style="margin-bottom:12px;">

                            <strong>
                                Step ${index + 1}:
                            </strong>

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
                        href="${escapeHTML(
                            situation.official
                        )}"
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
                    ⚡ ${escapeHTML(
                        situation.title
                    )}
                </h3>


                <h4 style="margin-top:20px;">
                    ✅ What you should do
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
                        ⚠️ What you should NOT do
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
                        📸 Save Evidence
                    </h4>

                    <p style="
                        margin:8px 0 0;
                        color:#475569;
                    ">
                        Keep screenshots, emails, messages,
                        usernames, profile URLs, phone numbers,
                        transaction IDs, receipts and relevant
                        security alerts.
                    </p>

                </div>


                <div style="
                    margin-top:20px;
                    padding:16px;
                    background:#fefce8;
                    border-radius:12px;
                ">

                    <h4>
                        🛡️ Important
                    </h4>

                    <p style="
                        margin:8px 0 0;
                        color:#475569;
                    ">
                        CyberCare provides general safety guidance.
                        Always verify important instructions through
                        the affected service's official website or app.
                    </p>

                </div>


                <div style="
                    margin-top:20px;
                    padding:16px;
                    background:#f0fdf4;
                    border-radius:12px;
                ">

                    <h4>
                        💚 You Don't Have to Handle Everything Alone
                    </h4>

                    <p style="
                        margin:8px 0 0;
                        color:#475569;
                    ">
                        If someone is threatening, harassing or
                        blackmailing you, consider telling a trusted
                        person and preserving evidence before taking
                        further action.
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
       11. SERVICE BUTTONS
       ========================================================= */

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
        () => openHelp("Emergency Help")
    );


    /* =========================================================
       12. MENU NAVIGATION
       ========================================================= */

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


                    if (
                        target ===
                        "women-safety"
                    ) {

                        closeSideMenu();

                        setTimeout(
                            () => {

                                openHelp(
                                    "Women's Digital Safety"
                                );

                            },
                            200
                        );

                        return;
                    }


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
                                    behavior: "smooth",
                                    block: "start"
                                });

                            },
                            200
                        );
                    }
                }
            );
        });


    /* =========================================================
       13. TOOL MODAL CREATOR
       ========================================================= */

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
            document.createElement("div");


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


            <div style="padding-right:45px;">

                <h2>
                    ${escapeHTML(title)}
                </h2>

            </div>


            <div style="margin-top:20px;">
                ${content}
            </div>
        `;


        overlay.appendChild(modal);

        document.body.appendChild(overlay);


        modal
            .querySelector("#closeTool")
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
       14. SCAM CHECKER
       ========================================================= */

    const toolCards =
        document.querySelectorAll(
            ".tool-card"
        );


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
                        font-family:Arial;
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
                            .querySelector(
                                "#scamInput"
                            )
                            .value
                            .toLowerCase();


                    const warnings = [];


                    const patterns = [

                        [
                            "otp",
                            "Asks for an OTP or verification code."
                        ],

                        [
                            "password",
                            "Asks for a password."
                        ],

                        [
                            "urgent",
                            "Uses urgency."
                        ],

                        [
                            "immediately",
                            "Creates pressure to act immediately."
                        ],

                        [
                            "click",
                            "Contains a request to click something."
                        ],

                        [
                            "verify",
                            "May be asking for account verification."
                        ],

                        [
                            "bank",
                            "Mentions banking information."
                        ],

                        [
                            "upi",
                            "Mentions UPI/payment activity."
                        ],

                        [
                            "prize",
                            "Mentions a prize or reward."
                        ],

                        [
                            "winner",
                            "Claims you have won something."
                        ],

                        [
                            "refund",
                            "Mentions a refund."
                        ],

                        [
                            "investment",
                            "Mentions investment opportunities."
                        ],

                        [
                            "crypto",
                            "Mentions cryptocurrency/payment."
                        ],

                        [
                            "free",
                            "Uses a free/reward offer."
                        ],

                        [
                            "limited time",
                            "Uses a limited-time pressure tactic."
                        ],

                        [
                            "account suspended",
                            "Claims your account is suspended."
                        ],

                        [
                            "confirm",
                            "Asks you to confirm something."
                        ]
                    ];


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
                                                `<li>${escapeHTML(
                                                    warning
                                                )}</li>`
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

                                Verify the sender through
                                the official website or app.

                            </div>
                        `;
                    }
                }
            );
    }


    if (toolCards[0]) {

        const button =
            toolCards[0].querySelector(
                ".tool-btn"
            );

        if (button) {

            button.textContent =
                "Open Tool";

            button.style.cursor =
                "pointer";

            button.addEventListener(
                "click",
                openScamChecker
            );
        }
    }


    /* =========================================================
       15. PASSWORD CHECKER
       ========================================================= */

    function openPasswordChecker() {

        const modal =
            createToolModal(
                "🔐 Password Safety Checker",

                `

                <p>
                    This checker runs locally in your browser.
                    Your password is not sent anywhere by this tool.
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
                    ) {
                        score--;
                    }


                    if (score <= 2) {

                        result.innerHTML = `

                            <div style="
                                padding:16px;
                                background:#fff1f2;
                                border-radius:12px;
                            ">

                                🔴 <strong>
                                Weak password
                                </strong>

                                <br><br>

                                Use a longer, unique
                                password or passphrase.

                            </div>
                        `;

                    } else if (score <= 4) {

                        result.innerHTML = `

                            <div style="
                                padding:16px;
                                background:#fff7ed;
                                border-radius:12px;
                            ">

                                🟠 <strong>
                                Moderate password
                                </strong>

                                <br><br>

                                Make it longer,
                                unique and harder to guess.

                            </div>
                        `;

                    } else {

                        result.innerHTML = `

                            <div style="
                                padding:16px;
                                background:#ecfdf5;
                                border-radius:12px;
                            ">

                                🟢 <strong>
                                Stronger password structure
                                </strong>

                                <br><br>

                                Never reuse this password
                                on another account.

                            </div>
                        `;
                    }
                }
            );
    }


    if (toolCards[1]) {

        const button =
            toolCards[1].querySelector(
                ".tool-btn"
            );

        if (button) {

            button.textContent =
                "Open Tool";

            button.style.cursor =
                "pointer";

            button.addEventListener(
                "click",
                openPasswordChecker
            );
        }
    }


    /* =========================================================
       16. PRIVACY CHECKLIST
       ========================================================= */

    function openPrivacyChecklist() {

        const checklist = [

            "I use a unique password for important accounts.",

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


        const modal =
            document.getElementById(
                "cybercare-tool-modal"
            );


        modal
            ?.querySelector(
                "#privacyScore"
            )
            ?.addEventListener(
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


    if (toolCards[2]) {

        const button =
            toolCards[2].querySelector(
                ".tool-btn"
            );

        if (button) {

            button.textContent =
                "Open Checklist";

            button.style.cursor =
                "pointer";

            button.addEventListener(
                "click",
                openPrivacyChecklist
            );
        }
    }


    /* =========================================================
       17. CYBER SAFETY SCORE
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

            "Do you have a secure recovery email/phone?",

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

                        level =
                            "🔴 Needs Improvement";

                    else if (percentage < 75)

                        level =
                            "🟠 Good, but can improve";

                    else

                        level =
                            "🟢 Strong Safety Habits";


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


    if (toolCards[3]) {

        const button =
            toolCards[3].querySelector(
                ".tool-btn"
            );

        if (button) {

            button.textContent =
                "Start Test";

            button.style.cursor =
                "pointer";

            button.addEventListener(
                "click",
                openSafetyScore
            );
        }
    }


    /* =========================================================
       18. LEARNING SECTION
       ========================================================= */

    learnBtn?.addEventListener(
        "click",
        () => {

            createToolModal(
                "🎓 Cybersecurity Basics",

                `

                <div>

                    <h3>
                        🔐 Password Safety
                    </h3>

                    <p>
                        Use long, unique passwords and
                        never reuse important passwords.
                    </p>


                    <h3 style="margin-top:18px;">
                        🔑 Two-Factor Authentication
                    </h3>

                    <p>
                        Turn on 2FA for email,
                        social media, banking and
                        other important accounts.
                    </p>


                    <h3 style="margin-top:18px;">
                        🎣 Phishing
                    </h3>

                    <p>
                        Do not click unexpected links
                        or share OTPs, passwords or
                        recovery codes.
                    </p>


                    <h3 style="margin-top:18px;">
                        📱 Phone Security
                    </h3>

                    <p>
                        Keep your operating system
                        and applications updated.
                        Review permissions regularly.
                    </p>


                    <h3 style="margin-top:18px;">
                        💳 Financial Safety
                    </h3>

                    <p>
                        Never share your UPI PIN,
                        banking password or OTP.
                    </p>


                    <h3 style="margin-top:18px;">
                        👩‍🦰 Digital Harassment
                    </h3>

                    <p>
                        Save evidence, protect your
                        accounts, block/report abusive
                        accounts and tell someone you trust.
                    </p>


                    <h3 style="margin-top:18px;">
                        📸 Evidence
                    </h3>

                    <p>
                        Screenshots, usernames, profile
                        URLs, dates, phone numbers and
                        transaction IDs can be important.
                    </p>


                    <h3 style="margin-top:18px;">
                        🧠 Think Before You Trust
                    </h3>

                    <p>
                        If a message creates fear,
                        urgency or promises an unbelievable
                        reward, stop and verify it through
                        the official website or app.
                    </p>

                </div>

                `
            );
        }
    );


    /* =========================================================
       19. INDIA CYBER FRAUD QUICK ACCESS
       ========================================================= */

    window.CyberCareOfficial =
        officialLinks;


    /* =========================================================
       20. GLOBAL QUICK HELP OBJECT
       ========================================================= */

    window.CyberCareHelp = {

        open: openHelp,

        services:
            Object.keys(helpData),

        official:
            officialLinks
    };


    /* =========================================================
       21. KEYBOARD ESCAPE
       ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

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


    /* =========================================================
       22. MOBILE TOUCH SAFETY
       ========================================================= */

    document.addEventListener(
        "touchstart",
        () => {},
        { passive: true }
    );


    /* =========================================================
       23. STARTUP
       ========================================================= */

    console.log(
        "🛡️ CyberCare Final Version loaded successfully."
    );

    console.log(
        "Available Help Services:",
        Object.keys(helpData)
    );

});
