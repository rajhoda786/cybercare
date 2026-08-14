document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       CYBERCARE
       COMPLETE DIGITAL SAFETY SYSTEM
       Version: 2026
    ========================================================= */


    /* =========================================================
       1. ELEMENTS
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
       2. MENU
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
       3. DARK / LIGHT MODE
    ========================================================= */

    let savedTheme =
        localStorage.getItem("cybercare-theme") || "light";


    function applyTheme() {

        if (savedTheme === "dark") {

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

        savedTheme =
            document.body.classList.contains("dark-mode")
                ? "light"
                : "dark";

        localStorage.setItem(
            "cybercare-theme",
            savedTheme
        );

        applyTheme();
    });


    /* =========================================================
       4. LANGUAGE
    ========================================================= */

    const translations = {

        EN: {

            logo: "CyberCare",

            heroTitle:
                "Protecting People. Securing Digital Lives.",

            heroText:
                "Practical cybersecurity guidance for hacked accounts, scams, fraud, harassment, blackmail, privacy problems and digital threats.",

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
                "হ্যাক হওয়া অ্যাকাউন্ট, প্রতারণা, ফিশিং, হয়রানি, ব্ল্যাকমেইল, গোপনীয়তা ও ডিজিটাল সমস্যায় ধাপে ধাপে নিরাপত্তা সহায়তা।",

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

        const t =
            translations[currentLanguage];

        if (!t) return;


        if (languageText) {
            languageText.textContent =
                currentLanguage;
        }


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
            servicesH2.textContent =
                t.servicesTitle;


        const servicesText =
            document.querySelector(
                ".services .section-text"
            );

        if (servicesText)
            servicesText.textContent =
                t.servicesText;


        const cards =
            document.querySelectorAll(
                ".service-card"
            );


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

                const btn =
                    card.querySelector(".help-btn");

                if (btn)
                    btn.textContent = t.getHelp;
            });
        }


        const learnH2 =
            document.querySelector(
                ".extra-section > h2"
            );

        if (learnH2)
            learnH2.textContent = t.learn;


        const toolsH2 =
            document.querySelector(
                ".tools > h2"
            );

        if (toolsH2)
            toolsH2.textContent = t.tools;


        const aboutH2 =
            document.querySelector(
                ".about-section > h2"
            );

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
       5. OFFICIAL LINKS
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
       6. COMPLETE HELP DATABASE
    ========================================================= */

    const helpData = {


        /* =====================================================
           ACCOUNT RECOVERY
        ===================================================== */

        "Account Recovery": {

            title:
                "🔐 Account Recovery",

            description:
                "Choose the account problem you are facing.",

            situations: [

                {
                    name:
                        "📘 Facebook Account Hacked",

                    title:
                        "Facebook Account Recovery",

                    official:
                        officialLinks.facebook,

                    steps: [

                        "Do not panic and do not pay anyone promising instant recovery.",

                        "Open Facebook's official hacked-account recovery page.",

                        "Follow the identity and security verification steps.",

                        "If you still have access, change your password immediately.",

                        "Check your email address and phone number.",

                        "Remove recovery information you do not recognise.",

                        "Review logged-in devices and sign out unknown devices.",

                        "Enable two-factor authentication.",

                        "Check posts, messages, profile information and payment settings for changes.",

                        "Secure the email account connected to Facebook."
                    ],

                    dont: [

                        "Never share your Facebook password.",

                        "Never share OTPs, login codes or recovery codes.",

                        "Do not pay unofficial recovery agents.",

                        "Do not use random recovery websites."
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

                        "Follow the recovery instructions.",

                        "Check the original email account for Instagram security messages.",

                        "Change your password if you still have access.",

                        "Review Login Activity.",

                        "Remove unknown devices.",

                        "Check email and phone information.",

                        "Enable two-factor authentication.",

                        "Review profile, posts and messages for unauthorised changes.",

                        "Secure your email account."
                    ],

                    dont: [

                        "Never send verification codes to another person.",

                        "Do not pay unofficial recovery agents.",

                        "Never give your password to anyone."
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

                        "Open the official WhatsApp application.",

                        "Register your phone number again.",

                        "Enter the verification code sent to your phone.",

                        "Open Settings → Linked Devices.",

                        "Log out every device you do not recognise.",

                        "Open Settings → Account → Two-step verification.",

                        "Enable two-step verification.",

                        "Check your profile and important conversations."
                    ],

                    dont: [

                        "Never share your WhatsApp verification code.",

                        "Never share your two-step verification PIN.",

                        "Do not trust anyone asking for your WhatsApp code."
                    ]
                },


                {
                    name:
                        "▶️ Google / YouTube Account",

                    title:
                        "Google Account Recovery",

                    official:
                        officialLinks.google,

                    steps: [

                        "Open Google's official account recovery page.",

                        "Complete Google's verification process.",

                        "Change the password after recovery.",

                        "Open Google Account → Security.",

                        "Review recent security activity.",

                        "Review your devices.",

                        "Remove unknown devices.",

                        "Check recovery email and phone.",

                        "Enable 2-Step Verification.",

                        "Review YouTube settings if the channel was affected."
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

                        "Use only the service's official recovery system.",

                        "Try your recovery email or phone number.",

                        "Complete identity verification.",

                        "Secure your email account if necessary.",

                        "Change the password after recovery.",

                        "Sign out unknown devices.",

                        "Enable 2FA."
                    ],

                    dont: [

                        "Do not use random recovery websites.",

                        "Never share recovery codes."
                    ]
                }
            ]
        },


        /* =====================================================
           SCAM & PHISHING
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

                        "Do not enter your password, OTP, PIN or bank details.",

                        "Take a screenshot.",

                        "Check who sent the message.",

                        "Block and report the sender when appropriate.",

                        "If you entered a password, change it immediately.",

                        "If financial information was entered, contact your bank/payment provider immediately."
                    ],

                    dont: [

                        "Do not forward the suspicious link.",

                        "Do not download files from the link."
                    ]
                },


                {
                    name:
                        "🔗 I Clicked a Suspicious Link",

                    title:
                        "Suspicious Link Clicked",

                    steps: [

                        "Close the website.",

                        "Do not enter any more information.",

                        "Change any password you entered using the official website/app.",

                        "Enable 2FA.",

                        "Do not open suspicious downloaded files.",

                        "Delete suspicious downloads.",

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

                        "Look for urgency, threats or unrealistic rewards.",

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
                    name:
                        "🔑 I Shared an OTP",

                    title:
                        "OTP Was Shared",

                    steps: [

                        "Identify which service the OTP belonged to.",

                        "Change that account's password immediately.",

                        "Sign out unknown devices.",

                        "Enable 2FA.",

                        "If banking/payment was involved, contact the bank/payment provider immediately.",

                        "Monitor the account for suspicious activity."
                    ],

                    dont: [

                        "Do not share another OTP.",

                        "Do not trust anyone requesting another verification code."
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

                        "Uninstall suspicious apps you do not need.",

                        "Update your operating system.",

                        "Run your device's built-in security scan if available."
                    ],

                    dont: [

                        "Do not install antivirus apps from random pop-ups.",

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

                        "Review Camera permissions.",

                        "Remove access from apps that do not need it.",

                        "Review Microphone permissions.",

                        "Remove unnecessary access.",

                        "Uninstall suspicious applications.",

                        "Update the operating system."
                    ],

                    dont: [

                        "Do not allow unknown apps to use your camera or microphone."
                    ]
                },


                {
                    name:
                        "📍 Location Tracking",

                    title:
                        "Location Privacy",

                    steps: [

                        "Open Settings → Location.",

                        "Review apps with location access.",

                        "Change unnecessary permissions to Deny or Ask every time.",

                        "Review location sharing in social apps.",

                        "Remove location access from apps you do not trust."
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

                        "Contact your bank/payment provider immediately using an official channel.",

                        "Tell them the transaction may be fraudulent.",

                        "Save the transaction/reference number.",

                        "Take screenshots of messages and payment records.",

                        "Secure the account used for payment.",

                        "Change compromised passwords.",

                        "Monitor your account.",

                        "If you are in India, report suspected cyber financial fraud through the official government cybercrime system as quickly as possible."
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

                        "Contact your bank through its official app, website or number.",

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

                        "Report suspected cyber financial fraud through the official Indian cybercrime system.",

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

                        "Check recovery email and phone.",

                        "Secure your email account if necessary."
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

                        "Disconnect from the internet if active compromise is suspected.",

                        "Check recently installed applications.",

                        "Remove suspicious applications.",

                        "Update the operating system.",

                        "Run a trusted security scan.",

                        "Change important passwords using a trusted device."
                    ],

                    dont: [

                        "Do not install security software from random pop-ups."
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

                        "If you entered a password, change it using the real official website/app.",

                        "Enable 2FA.",

                        "Review account login activity.",

                        "Save evidence if you need to report the incident."
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
                "Immediate actions for urgent digital safety incidents.",

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

                        "Save screenshots and security alerts.",

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

                        "Ask them to secure the account/transaction.",

                        "Save transaction details.",

                        "Secure your email account.",

                        "Change compromised passwords.",

                        "Report through the appropriate official channel.",

                        "In India, report suspected cyber financial fraud as quickly as possible."
                    ],

                    dont: [

                        "Do not send additional money.",

                        "Do not trust anyone promising guaranteed recovery."
                    ]
                }
            ]
        },


        /* =====================================================
           WOMEN SAFETY
        ===================================================== */

        "Women Safety": {

            title:
                "👩 Women & Digital Safety",

            description:
                "Guidance for online harassment, stalking, threats, blackmail and unwanted contact.",

            situations: [

                {
                    name:
                        "📵 Someone Keeps Calling Me",

                    title:
                        "Unwanted Calls / Harassment",

                    steps: [

                        "Do not feel pressured to answer or continue the conversation.",

                        "Block the number if appropriate.",

                        "Use your phone's spam/unknown caller controls.",

                        "Save call logs and screenshots if the behaviour continues.",

                        "Tell someone you trust if you feel unsafe.",

                        "If the caller is threatening you, preserve the evidence and consider reporting it to the appropriate authority.",

                        "Review your social-media privacy settings so your phone number is not publicly visible."
                    ],

                    dont: [

                        "Do not share your address, live location or private information.",

                        "Do not meet a threatening person alone.",

                        "Do not delete evidence if you may need to report the behaviour."
                    ]
                },


                {
                    name:
                        "💬 Bad / Abusive Messages",

                    title:
                        "Online Harassment",

                    steps: [

                        "Do not engage in a prolonged argument.",

                        "Take screenshots showing the username, date and message.",

                        "Block the account.",

                        "Report the message/account using the platform's official reporting system.",

                        "Review who can message, mention or tag you.",

                        "Tell a trusted person if the harassment is persistent.",

                        "If there are credible threats, preserve evidence and seek appropriate local help."
                    ],

                    dont: [

                        "Do not send personal information in response.",

                        "Do not share your OTP or password.",

                        "Do not retaliate with threats."
                    ]
                },


                {
                    name:
                        "🚨 Someone Is Threatening Me",

                    title:
                        "Threats / Stalking",

                    steps: [

                        "Prioritise your physical safety first.",

                        "Avoid meeting the person alone.",

                        "Save messages, profiles, call logs and other evidence.",

                        "Block the person when safe to do so.",

                        "Tell a trusted family member, friend or other support person.",

                        "If you believe you are in immediate physical danger, contact local emergency services or law enforcement.",

                        "Do not share your current location publicly."
                    ],

                    dont: [

                        "Do not meet the person privately to 'solve' the issue.",

                        "Do not delete important evidence.",

                        "Do not give the person more personal information."
                    ]
                },


                {
                    name:
                        "📍 Someone Is Tracking My Location",

                    title:
                        "Location / Stalking Concern",

                    steps: [

                        "Review location permissions on your phone.",

                        "Review live-location sharing in messaging apps.",

                        "Stop location sharing with people you do not trust.",

                        "Review logged-in devices on important accounts.",

                        "Change passwords if an account may be compromised.",

                        "Enable 2FA.",

                        "Check whether unknown apps have location access.",

                        "If you suspect physical stalking, prioritise personal safety and seek trusted/local assistance."
                    ],

                    dont: [

                        "Do not publicly post your real-time location.",

                        "Do not confront a suspected stalker alone."
                    ]
                }
            ]
        },


        /* =====================================================
           BLACKMAIL
        ===================================================== */

        "Blackmail": {

            title:
                "🚨 Blackmail & Extortion",

            description:
                "If someone is threatening you with private photos, videos, messages or information.",

            situations: [

                {
                    name:
                        "📸 Threatening to Share Private Photos",

                    title:
                        "Image-Based Blackmail",

                    steps: [

                        "Stop negotiating with the blackmailer if possible.",

                        "Do not send additional photos, money or personal information.",

                        "Save screenshots of threats, usernames, profile URLs and payment requests.",

                        "Do not delete the conversation before preserving evidence.",

                        "Block and report the account when appropriate.",

                        "Secure your social-media and email accounts.",

                        "Change passwords and enable 2FA.",

                        "Tell a trusted person so you are not dealing with the situation alone.",

                        "If money or threats are involved, report the incident through the appropriate official authority/channel.",

                        "If you are in India, you can use the official cybercrime reporting system."
                    ],

                    dont: [

                        "Do not pay simply because they threaten to publish something.",

                        "Do not send more private material.",

                        "Do not trust someone promising to 'hack the blackmailer' for money.",

                        "Do not meet the blackmailer."
                    ]
                },


                {
                    name:
                        "💰 They Are Demanding Money",

                    title:
                        "Extortion / Money Demand",

                    steps: [

                        "Do not send additional money impulsively.",

                        "Save the payment demand and transaction details.",

                        "Take screenshots.",

                        "Secure affected accounts.",

                        "Tell someone you trust.",

                        "Report the incident through the appropriate official channel.",

                        "If money has already been sent, contact the bank/payment provider immediately.",

                        "In India, report suspected cyber financial fraud quickly through the official cybercrime system."
                    ],

                    dont: [

                        "Do not believe guaranteed recovery promises.",

                        "Do not delete evidence.",

                        "Do not give the attacker your OTP or password."
                    ]
                }
            ]
        }
    };


    /* =========================================================
       7. ADD WOMEN SAFETY + BLACKMAIL TO MENU IF POSSIBLE
    ========================================================= */

    function addExtraSafetyCards() {

        const serviceGrid =
            document.querySelector(".service-grid");

        if (!serviceGrid) return;


        const existing =
            serviceGrid.querySelectorAll(".service-card");


        if (existing.length >= 6) {

            const womenCard =
                document.createElement("article");

            womenCard.className =
                "service-card";

            womenCard.innerHTML = `
                <div class="service-icon">
                    👩
                </div>

                <h3>
                    Women & Digital Safety
                </h3>

                <p>
                    Help with harassment, unwanted calls,
                    stalking, threats and online abuse.
                </p>

                <button
                    class="help-btn"
                    data-service="Women Safety"
                    type="button">
                    Get Help →
                </button>
            `;


            const blackmailCard =
                document.createElement("article");

            blackmailCard.className =
                "service-card emergency-card";

            blackmailCard.innerHTML = `
                <div class="service-icon">
                    🚨
                </div>

                <h3>
                    Blackmail & Extortion
                </h3>

                <p>
                    Guidance when someone threatens to share
                    private photos, videos or information.
                </p>

                <button
                    class="help-btn"
                    data-service="Blackmail"
                    type="button">
                    Get Help →
                </button>
            `;


            serviceGrid.appendChild(womenCard);

            serviceGrid.appendChild(blackmailCard);
        }
    }


    addExtraSafetyCards();


    /* =========================================================
       8. HELP MODAL
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


        const buttons =
            info.situations
                .map((item, index) => `
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
                        ${item.name}
                    </button>
                `)
                .join("");


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

                <h2>
                    ${info.title}
                </h2>

                <p style="color:#64748b;">
                    ${info.description}
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


        modal
            .querySelector("#closeCyberCare")
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
            .querySelectorAll(".cyber-situation")
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
       9. SHOW RESULT
    ========================================================= */

    function showResult(modal, situation) {

        const result =
            modal.querySelector(
                "#cybercareResult"
            );


        const steps =
            situation.steps
                .map((step, index) => `
                    <li style="margin-bottom:12px;">
                        <strong>
                            Step ${index + 1}:
                        </strong>
                        ${step}
                    </li>
                `)
                .join("");


        const dont =
            situation.dont
                .map(item => `
                    <li style="margin-bottom:10px;">
                        ${item}
                    </li>
                `)
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
                        color:#475569;
                    ">
                        Use the official service website only.
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
                    ⚡ ${situation.title}
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

                    <p style="color:#475569;">
                        Keep screenshots, usernames,
                        profile links, messages, emails,
                        call logs, transaction IDs,
                        receipts and security alerts.
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

                    <p style="color:#475569;">
                        CyberCare provides general safety
                        guidance. Verify important instructions
                        through the affected service's official
                        website, app or appropriate authority.
                    </p>

                </div>

            </div>
        `;


        result.scrollIntoView({
            behavior:"smooth",
            block:"nearest"
        });
    }


    /* =========================================================
       10. SERVICE BUTTONS
    ========================================================= */

    function attachHelpButtons() {

        document
            .querySelectorAll(".help-btn")
            .forEach(button => {

                if (
                    button.dataset.cybercareAttached
                ) return;


                button.dataset.cybercareAttached =
                    "true";


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
    }


    attachHelpButtons();


    emergencyBtn?.addEventListener(
        "click",
        () => openHelp("Emergency Help")
    );


    /* =========================================================
       11. MENU NAVIGATION
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


                    closeSideMenu();


                    if (
                        target === "emergency"
                    ) {

                        setTimeout(
                            () => openHelp(
                                "Emergency Help"
                            ),
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
                                    behavior:"smooth",
                                    block:"start"
                                });

                            },
                            200
                        );
                    }
                }
            );
        });


    /* =========================================================
       12. TOOL MODAL
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
                    ${title}
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


        return modal;
    }


    /* =========================================================
       13. SCAM CHECKER
    ========================================================= */

    function openScamChecker() {

        const modal =
            createToolModal(
                "🔎 Scam Checker",

                `
                    <p>
                        Paste a suspicious message.
                        This checker looks for common warning signs.
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
                            "pin",
                            "Mentions or may request a PIN."
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
                            "Requests that you click something."
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
                            "Mentions a prize/reward."
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
                            "Mentions an investment opportunity."
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
                            "police",
                            "Uses authority or threat language."
                        ],

                        [
                            "arrest",
                            "Uses arrest/legal threats."
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
                                            w =>
                                                `<li>${w}</li>`
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
                                the official website/app.

                            </div>
                        `;
                    }
                }
            );
    }


    /* =========================================================
       14. PASSWORD CHECKER
    ========================================================= */

    function openPasswordChecker() {

        const modal =
            createToolModal(
                "🔐 Password Safety Checker",

                `
                    <p>
                        This check runs locally in your browser.
                        The password is not sent anywhere by this tool.
                    </p>


                    <input
                        id="passwordInput"
                        type="password"
                        autocomplete="off"
                        placeholder="Enter a password to test"
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
                                ⚠️ Enter a password to test.
                            </div>
                        `;

                        return;
                    }


                    let score = 0;


                    if (password.length >= 12)
                        score++;

                    if (/[A-Z]/.test(password))
                        score++;

                    if (/[a-z]/.test(password))
                        score++;

                    if (/[0-9]/.test(password))
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
                                🔴 Weak password.
                                <br><br>
                                Use a longer,
                                unique passphrase.
                            </div>
                        `;

                    } else if (score <= 4) {

                        message = `
                            <div style="
                                padding:16px;
                                background:#fff7ed;
                                border-radius:12px;
                            ">
                                🟠 Moderate password.
                                <br><br>
                                Make it longer and unique.
                            </div>
                        `;

                    } else {

                        message = `
                            <div style="
                                padding:16px;
                                background:#ecfdf5;
                                border-radius:12px;
                            ">
                                🟢 Stronger password structure.
                                <br><br>
                                Never reuse it elsewhere.
                            </div>
                        `;
                    }


                    result.innerHTML =
                        message;
                }
            );
    }


    /* =========================================================
       15. PRIVACY CHECKLIST
    ========================================================= */

    function openPrivacyChecklist() {

        const items = [

            "I use unique passwords for important accounts.",

            "I have enabled two-factor authentication.",

            "My phone has a screen lock.",

            "I review installed applications.",

            "I review camera and microphone permissions.",

            "I review location permissions.",

            "I keep my phone updated.",

            "My recovery email and phone are secure.",

            "I never share OTPs or recovery codes.",

            "I review logged-in devices regularly.",

            "My social-media profiles do not expose unnecessary personal information.",

            "I know how to report/block unwanted accounts."
        ];


        const modal =
            createToolModal(
                "📱 Privacy & Security Checklist",

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
                        Calculate Safety Score
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


                    modal.querySelector(
                        "#privacyResult"
                    ).innerHTML = `

                        <div style="
                            padding:18px;
                            background:#eff6ff;
                            border-radius:12px;
                        ">

                            🛡️ Cyber Safety Score:

                            <strong>
                                ${percentage}%
                            </strong>

                            <br><br>

                            ${completed}
                            of
                            ${checks.length}
                            safety checks completed.

                        </div>
                    `;
                }
            );
    }


    /* =========================================================
       16. CYBER SAFETY SCORE
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

            "Do you know how to block/report abusive accounts?",

            "Do you avoid sharing live location publicly?"
        ];


        const modal =
            createToolModal(
                "🛡️ Cyber Safety Score",

                `
                    <p>
                        Answer the questions honestly.
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


                    if (percentage < 40) {

                        level =
                            "🔴 Needs Improvement";

                    } else if (
                        percentage < 75
                    ) {

                        level =
                            "🟠 Good, but can improve";

                    } else {

                        level =
                            "🟢 Strong Safety Habits";
                    }


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
       17. CONNECT TOOLS IN EXISTING HTML
    ========================================================= */

    const toolCards =
        document.querySelectorAll(
            ".tool-card"
        );


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
                    <h3>
                        🔐 Password Safety
                    </h3>

                    <p>
                        Use long, unique passwords.
                        Never reuse important passwords.
                    </p>


                    <h3 style="margin-top:18px;">
                        🔑 Two-Factor Authentication
                    </h3>

                    <p>
                        Enable 2FA for email, social media,
                        banking and important accounts.
                    </p>


                    <h3 style="margin-top:18px;">
                        🎣 Phishing
                    </h3>

                    <p>
                        Do not click unexpected links or
                        share OTPs, passwords or recovery codes.
                    </p>


                    <h3 style="margin-top:18px;">
                        📱 Phone Security
                    </h3>

                    <p>
                        Keep your device updated and review
                        application permissions.
                    </p>


                    <h3 style="margin-top:18px;">
                        💳 Financial Safety
                    </h3>

                    <p>
                        Never share your UPI PIN, banking
                        password or OTP.
                    </p>


                    <h3 style="margin-top:18px;">
                        👩 Women & Online Safety
                    </h3>

                    <p>
                        Block and report harassment, preserve
                        evidence and avoid sharing personal
                        information with unknown people.
                    </p>


                    <h3 style="margin-top:18px;">
                        🚨 Blackmail
                    </h3>

                    <p>
                        Do not send more money or private
                        material. Preserve evidence and seek
                        appropriate support/reporting channels.
                    </p>


                    <h3 style="margin-top:18px;">
                        🧠 Think Before You Trust
                    </h3>

                    <p>
                        Messages that create fear, urgency or
                        promise unbelievable rewards deserve
                        extra verification.
                    </p>
                `
            );
        }
    );


    /* =========================================================
       19. OFFICIAL LINKS AVAILABLE GLOBALLY
    ========================================================= */

    window.CyberCareOfficial =
        officialLinks;


    /* =========================================================
       20. ESCAPE KEY
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
       21. STARTUP
    ========================================================= */

    console.log(
        "🛡️ CyberCare complete safety system loaded."
    );

});
