document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       CYBERCARE - MAIN JAVASCRIPT
       ========================================================= */


    /* =========================================================
       1. MENU
       ========================================================= */

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


    /* =========================================================
       2. MENU NAVIGATION
       ========================================================= */

    document.querySelectorAll(".menu-item").forEach(function (item) {

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


    /* =========================================================
       3. DARK / LIGHT MODE
       ========================================================= */

    const themeBtn = document.getElementById("themeBtn");

    const savedTheme =
        localStorage.getItem("cybercare-theme") || "light";

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


    /* =========================================================
       4. LANGUAGE SYSTEM
       ========================================================= */

    const languageBtn =
        document.getElementById("languageBtn");

    const languageText =
        document.getElementById("languageText");

    let currentLanguage =
        localStorage.getItem("cybercare-language") || "EN";


    const translations = {

        EN: {

            logo: "CyberCare",

            heroTitle: "CyberCare",

            heroSubtitle:
                "Protecting People. Securing Digital Lives.",

            heroDescription:
                "Practical cybersecurity guidance for hacked accounts, scams, fraud, privacy problems and digital threats.",

            emergencyButton:
                "🚨 I Need Help Now",

            servicesTitle:
                "How Can We Help You?",

            servicesDescription:
                "Choose a situation and get step-by-step guidance.",

            learnTitle:
                "🎓 Learn Cybersecurity",

            learnDescription:
                "Learn simple habits that can make your digital life safer.",

            learnButton:
                "Start Learning →",

            toolsTitle:
                "🛠️ CyberCare Tools",

            toolsDescription:
                "Simple tools to improve your digital safety.",

            aboutTitle:
                "🛡️ About CyberCare",

            aboutText1:
                "CyberCare provides simple, practical cybersecurity guidance to help people respond to common digital safety problems.",

            aboutText2:
                "Stay alert. Protect your accounts. Never share passwords, OTPs or recovery codes.",

            footerText:
                "Stay Safe. Stay Secure.",

            getHelp:
                "Get Help →",

            allServices:
                "🛡️ All Services",

            learnMenu:
                "🎓 Learn Cybersecurity",

            toolsMenu:
                "🛠️ CyberCare Tools",

            emergencyMenu:
                "🚨 Emergency Help",

            aboutMenu:
                "ℹ️ About CyberCare"

        },


        BN: {

            logo: "CyberCare",

            heroTitle: "CyberCare",

            heroSubtitle:
                "মানুষকে সুরক্ষিত রাখা। ডিজিটাল জীবনকে নিরাপদ রাখা।",

            heroDescription:
                "হ্যাক হওয়া অ্যাকাউন্ট, প্রতারণা, স্ক্যাম, গোপনীয়তা সমস্যা এবং বিভিন্ন ডিজিটাল বিপদের ক্ষেত্রে সহজ ও ব্যবহারিক সহায়তা।",

            emergencyButton:
                "🚨 এখনই সাহায্য চাই",

            servicesTitle:
                "আপনাকে কীভাবে সাহায্য করতে পারি?",

            servicesDescription:
                "আপনার সমস্যাটি নির্বাচন করুন এবং ধাপে ধাপে নির্দেশনা পান।",

            learnTitle:
                "🎓 সাইবার নিরাপত্তা শিখুন",

            learnDescription:
                "সহজ কিছু অভ্যাস শিখুন যা আপনার ডিজিটাল জীবনকে আরও নিরাপদ রাখতে সাহায্য করবে।",

            learnButton:
                "শেখা শুরু করুন →",

            toolsTitle:
                "🛠️ CyberCare Tools",

            toolsDescription:
                "আপনার ডিজিটাল নিরাপত্তা বাড়ানোর জন্য সহজ কিছু টুল।",

            aboutTitle:
                "🛡️ CyberCare সম্পর্কে",

            aboutText1:
                "CyberCare সাধারণ ডিজিটাল নিরাপত্তা সমস্যার ক্ষেত্রে সহজ ও ব্যবহারিক নির্দেশনা দেওয়ার জন্য তৈরি।",

            aboutText2:
                "সতর্ক থাকুন। আপনার অ্যাকাউন্ট সুরক্ষিত রাখুন। কখনো Password, OTP বা Recovery Code কারও সঙ্গে শেয়ার করবেন না।",

            footerText:
                "নিরাপদ থাকুন। সুরক্ষিত থাকুন।",

            getHelp:
                "সাহায্য নিন →",

            allServices:
                "🛡️ সব সার্ভিস",

            learnMenu:
                "🎓 সাইবার নিরাপত্তা শিখুন",

            toolsMenu:
                "🛠️ CyberCare Tools",

            emergencyMenu:
                "🚨 জরুরি সাহায্য",

            aboutMenu:
                "ℹ️ CyberCare সম্পর্কে"

        }

    };


    function applyLanguage(lang) {

        currentLanguage = lang;

        const t = translations[lang];

        if (languageText) {
            languageText.textContent = lang;
        }

        /* Logo */
        const logoSpan =
            document.querySelector(".logo span");

        if (logoSpan) {
            logoSpan.textContent = t.logo;
        }

        /* Hero */
        const heroH1 =
            document.querySelector(".hero h1");

        const heroH2 =
            document.querySelector(".hero h2");

        const heroP =
            document.querySelector(".hero p");

        if (heroH1) heroH1.textContent = t.heroTitle;
        if (heroH2) heroH2.textContent = t.heroSubtitle;
        if (heroP) heroP.textContent = t.heroDescription;

        /* Emergency */
        if (document.getElementById("emergencyBtn")) {
            document.getElementById("emergencyBtn").textContent =
                t.emergencyButton;
        }

        /* Services */
        const servicesTitle =
            document.querySelector(".services > h2");

        const servicesText =
            document.querySelector(".services .section-text");

        if (servicesTitle) {
            servicesTitle.textContent = t.servicesTitle;
        }

        if (servicesText) {
            servicesText.textContent = t.servicesDescription;
        }

        /* Learn */
        const learnTitle =
            document.querySelector(".extra-section > h2");

        const learnText =
            document.querySelector(".extra-section .section-text");

        const learnButton =
            document.getElementById("learnBtn");

        if (learnTitle) learnTitle.textContent = t.learnTitle;
        if (learnText) learnText.textContent = t.learnDescription;
        if (learnButton) learnButton.textContent = t.learnButton;

        /* Tools */
        const toolsTitle =
            document.querySelector(".tools > h2");

        const toolsText =
            document.querySelector(".tools .section-text");

        if (toolsTitle) toolsTitle.textContent = t.toolsTitle;
        if (toolsText) toolsText.textContent = t.toolsDescription;

        /* About */
        const aboutTitle =
            document.querySelector(".about-section > h2");

        const aboutParagraphs =
            document.querySelectorAll(".about-section p");

        if (aboutTitle) {
            aboutTitle.textContent = t.aboutTitle;
        }

        if (aboutParagraphs.length >= 2) {
            aboutParagraphs[0].textContent = t.aboutText1;
            aboutParagraphs[1].textContent = t.aboutText2;
        }

        /* Footer */
        const footerP =
            document.querySelector("footer > p");

        if (footerP) {
            footerP.textContent = t.footerText;
        }

        /* Menu */
        const menuItems =
            document.querySelectorAll(".menu-item");

        menuItems.forEach(function (item) {

            const menuType =
                item.getAttribute("data-menu");

            if (menuType === "services") {
                item.textContent = t.allServices;
            }

            if (menuType === "learn") {
                item.textContent = t.learnMenu;
            }

            if (menuType === "tools") {
                item.textContent = t.toolsMenu;
            }

            if (menuType === "emergency") {
                item.textContent = t.emergencyMenu;
            }

            if (menuType === "about") {
                item.textContent = t.aboutMenu;
            }

        });

        /* Get Help buttons */
        document.querySelectorAll(".help-btn").forEach(function (button) {
            button.textContent = t.getHelp;
        });

        localStorage.setItem(
            "cybercare-language",
            lang
        );
    }


    if (languageBtn) {

        languageBtn.addEventListener("click", function () {

            if (currentLanguage === "EN") {
                applyLanguage("BN");
            } else {
                applyLanguage("EN");
            }

        });

    }

    applyLanguage(currentLanguage);


    /* =========================================================
       5. HELP DATA
       ========================================================= */

    const helpData = {


        /* =====================================================
           ACCOUNT RECOVERY
           ===================================================== */

        "Account Recovery": {

            title: "🔐 Account Recovery",

            description:
                "Select the account problem you are facing.",

            situations: [

                {
                    name: "📘 Facebook account hacked",

                    title:
                        "Facebook Account Recovery",

                    official:
                        "https://www.facebook.com/hacked",

                    steps: [

                        "Do not share your password, OTP or recovery code with anyone.",

                        "Open Facebook's official hacked-account recovery page.",

                        "Select the option that matches your situation.",

                        "Enter the email address or phone number connected to your Facebook account.",

                        "Follow Facebook's identity/security verification instructions.",

                        "If you still have access to the account, immediately change your password.",

                        "Check your email address and phone number and remove anything unfamiliar.",

                        "Open Facebook's Password and Security settings and review where you are logged in.",

                        "Log out devices or sessions that you do not recognise.",

                        "Enable two-factor authentication after recovering the account."

                    ],

                    dont: [

                        "Do not pay strangers who claim they can recover your Facebook account.",

                        "Never send your Facebook OTP, password or recovery code to another person.",

                        "Do not use unofficial Facebook recovery websites."
                    ]

                },


                {
                    name: "📸 Instagram account hacked",

                    title:
                        "Instagram Account Recovery",

                    official:
                        "https://www.instagram.com/hacked/",

                    steps: [

                        "Check the email account connected to Instagram for security messages.",

                        "Open Instagram's official hacked-account recovery page.",

                        "Choose the option that describes your problem.",

                        "Follow the identity verification instructions shown by Instagram.",

                        "If you can still log in, change your password immediately.",

                        "Check Login Activity and remove unknown devices.",

                        "Check your email address and phone number.",

                        "Enable two-factor authentication.",

                        "Review connected apps and remove anything unfamiliar."

                    ],

                    dont: [

                        "Do not trust people offering paid Instagram recovery.",

                        "Never send verification codes to another person.",

                        "Do not give your password to a recovery agent."
                    ]

                },


                {
                    name: "💬 WhatsApp account hacked",

                    title:
                        "WhatsApp Account Recovery",

                    official:
                        "https://www.whatsapp.com/",

                    steps: [

                        "Open WhatsApp on your phone.",

                        "Enter your own phone number again.",

                        "Request the official WhatsApp verification code.",

                        "Enter the verification code received on your phone.",

                        "After logging back in, open WhatsApp Settings.",

                        "Go to Linked Devices.",

                        "Log out every device that you do not recognise.",

                        "Open Account > Two-step verification.",

                        "Enable two-step verification and create a PIN.",

                        "Never share your WhatsApp verification code with anyone."

                    ],

                    dont: [

                        "Never share the WhatsApp verification code.",

                        "Do not give your two-step verification PIN to anyone.",

                        "Do not trust people claiming to be WhatsApp support through random messages."
                    ]

                },


                {
                    name: "▶️ Google / YouTube account hacked",

                    title:
                        "Google / YouTube Account Recovery",

                    official:
                        "https://accounts.google.com/signin/recovery",

                    steps: [

                        "Secure your Google account first because YouTube uses your Google account.",

                        "Open Google's official Account Recovery page.",

                        "Enter your Google email address or phone number.",

                        "Follow the identity verification instructions.",

                        "Change your Google password after recovery.",

                        "Open Google Account > Security.",

                        "Review Recent security activity.",

                        "Review Your devices and remove unknown devices.",

                        "Check recovery phone number and recovery email.",

                        "Enable 2-Step Verification.",

                        "Review YouTube channel permissions if you suspect channel access."
                    ],

                    dont: [

                        "Do not pay unofficial recovery agents.",

                        "Never share Google verification codes.",

                        "Do not use recovery links sent by strangers."
                    ]

                },


                {
                    name: "🔑 I cannot log in",

                    title:
                        "Cannot Access My Account",

                    steps: [

                        "First identify the official service you are trying to access.",

                        "Use only that service's official recovery page or official app.",

                        "Try your recovery email address or phone number.",

                        "Complete the identity verification process if requested.",

                        "Secure your email account because it may be used for recovery.",

                        "After recovery, change your password.",

                        "Sign out unknown devices.",

                        "Enable two-factor authentication."

                    ],

                    dont: [

                        "Do not use unofficial recovery websites.",

                        "Never send recovery codes to another person.",

                        "Do not pay someone before verifying that they are official support."
                    ]

                }

            ]
        },


        /* =====================================================
           SCAM & PHISHING
           ===================================================== */

        "Scam & Phishing": {

            title: "🎣 Scam & Phishing",

            description:
                "Get help with suspicious messages, links and fake websites.",

            situations: [

                {
                    name:
                        "💬 Someone sent me a suspicious WhatsApp link",

                    title:
                        "Suspicious WhatsApp Link",

                    steps: [

                        "Do not open the link again.",

                        "Do not enter your password, OTP, UPI PIN, card number or banking information.",

                        "Check who sent the message.",

                        "Take a screenshot if you may need evidence.",

                        "Block or report the sender if appropriate.",

                        "If you entered any password, change it immediately.",

                        "If financial information was entered, contact your bank/payment provider immediately."

                    ],

                    dont: [

                        "Do not forward the suspicious link.",

                        "Do not download files from the suspicious website.",

                        "Do not install apps suggested by the message."
                    ]

                },


                {
                    name:
                        "🔗 I clicked a suspicious link",

                    title:
                        "Suspicious Link Clicked",

                    steps: [

                        "Close the suspicious website.",

                        "Do not enter any additional information.",

                        "If you entered a password, change that password immediately from the official website/app.",

                        "Enable two-factor authentication.",

                        "If a file was downloaded, do not open it.",

                        "Delete suspicious downloads if appropriate.",

                        "Run a trusted security scan.",

                        "Contact your bank immediately if financial information was entered."

                    ],

                    dont: [

                        "Do not return to the suspicious website.",

                        "Do not install software suggested by pop-ups.",

                        "Do not enter OTPs into suspicious pages."
                    ]

                },


                {
                    name:
                        "📩 I received a phishing message",

                    title:
                        "Phishing Message",

                    steps: [

                        "Check the sender's phone number or email address.",

                        "Look for urgency, threats or unrealistic offers.",

                        "Do not click unexpected links.",

                        "Do not open suspicious attachments.",

                        "Verify the request using the organisation's official website or app.",

                        "Block and report the sender.",

                        "Keep a screenshot if you need evidence."

                    ],

                    dont: [

                        "Never share OTPs.",

                        "Never share passwords.",

                        "Never share recovery codes."
                    ]

                },


                {
                    name:
                        "🔑 I shared an OTP",

                    title:
                        "OTP Was Shared",

                    steps: [

                        "Identify which account or service the OTP belonged to.",

                        "Immediately secure that account using its official app or website.",

                        "Change the account password.",

                        "Sign out unknown devices.",

                        "Enable two-factor authentication where available.",

                        "If the OTP was related to banking or a financial transaction, contact your bank immediately.",

                        "Monitor your account for unusual activity."

                    ],

                    dont: [

                        "Do not share another OTP.",

                        "Do not trust anyone asking for another code.",

                        "Do not delete important evidence."
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
                "Check suspicious apps, permissions and privacy settings.",

            situations: [

                {
                    name:
                        "📦 I found an unknown app",

                    title:
                        "Unknown Application",

                    steps: [

                        "Check the app name and where it was installed from.",

                        "Open your phone's App settings.",

                        "Review the application's permissions.",

                        "If you do not recognise the app, uninstall it.",

                        "Update your phone's operating system.",

                        "Run a trusted security scan.",

                        "Change important passwords if you believe the app may have accessed them."

                    ],

                    dont: [

                        "Do not install random antivirus apps from pop-up advertisements.",

                        "Do not give unknown apps unnecessary permissions."
                    ]

                },


                {
                    name:
                        "🎤 Camera or microphone seems suspicious",

                    title:
                        "Camera & Microphone Privacy",

                    steps: [

                        "Open your phone's Privacy or Permission settings.",

                        "Review which apps have camera access.",

                        "Review which apps have microphone access.",

                        "Remove unnecessary permissions.",

                        "Uninstall suspicious applications.",

                        "Update your phone's operating system.",

                        "Restart your device after removing suspicious software."

                    ],

                    dont: [

                        "Do not give unknown applications camera or microphone access.",

                        "Do not ignore repeated suspicious permission requests."
                    ]

                },


                {
                    name:
                        "📍 I am worried about location tracking",

                    title:
                        "Location Privacy",

                    steps: [

                        "Open Location settings on your phone.",

                        "Review which apps have location permission.",

                        "Change unnecessary permissions to Deny or Ask every time when appropriate.",

                        "Check location-sharing settings in Google, Apple or social apps.",

                        "Review unfamiliar applications.",

                        "Disable location sharing that you do not need."

                    ],

                    dont: [

                        "Do not leave location sharing enabled for unknown services.",

                        "Do not approve location permission without checking why it is needed."
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
                "Take immediate action when money or financial information may be at risk.",

            situations: [

                {
                    name:
                        "💸 I lost money",

                    title:
                        "Possible Financial Fraud",

                    steps: [

                        "Contact your bank or payment provider immediately.",

                        "Tell them that you suspect an unauthorised or fraudulent transaction.",

                        "Save the transaction ID.",

                        "Save screenshots, receipts and messages.",

                        "Secure the account used for payment.",

                        "Change compromised passwords.",

                        "Monitor your bank/payment account for additional transactions.",

                        "Report the incident through the appropriate official cybercrime or financial-fraud reporting channel in your country."

                    ],

                    dont: [

                        "Do not send additional money.",

                        "Do not delete transaction evidence.",

                        "Do not trust anyone promising guaranteed recovery of your money."
                    ]

                },


                {
                    name:
                        "🏦 My banking information was shared",

                    title:
                        "Banking Information Exposed",

                    steps: [

                        "Contact your bank immediately using the official number or official banking app.",

                        "Tell the bank exactly what information was exposed.",

                        "Ask what security measures should be taken.",

                        "Monitor your account and card transactions.",

                        "Change affected passwords.",

                        "Secure your email account.",

                        "Enable additional security features offered by your bank."

                    ],

                    dont: [

                        "Never share another OTP.",

                        "Never share your UPI PIN.",

                        "Do not trust unsolicited callers claiming to be bank employees."
                    ]

                },


                {
                    name:
                        "📲 UPI fraud",

                    title:
                        "UPI Fraud",

                    steps: [

                        "Contact your bank/payment provider immediately.",

                        "Save the transaction ID and exact amount.",

                        "Use the official banking or payment app to report the transaction.",

                        "If necessary, contact the relevant official fraud-reporting authority.",

                        "Secure your UPI-linked bank account.",

                        "Change compromised passwords.",

                        "Monitor your bank account carefully."

                    ],

                    dont: [

                        "Never share your UPI PIN.",

                        "Never share OTPs.",

                        "Remember: receiving money through UPI does not require entering your UPI PIN."
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
                "Investigate unusual logins, malware, links and account activity.",

            situations: [

                {
                    name:
                        "🚨 Someone logged into my account",

                    title:
                        "Unknown Login",

                    steps: [

                        "Change your password immediately.",

                        "Sign out unknown devices or sessions.",

                        "Enable two-factor authentication.",

                        "Check recent account activity.",

                        "Review recovery email and phone number.",

                        "Remove unfamiliar connected applications.",

                        "Secure your email account as well."

                    ],

                    dont: [

                        "Do not share your password.",

                        "Do not ignore repeated unknown login alerts."
                    ]

                },


                {
                    name:
                        "🦠 I think my device has malware",

                    title:
                        "Possible Malware",

                    steps: [

                        "Disconnect the device from the internet if you believe it is actively compromised.",

                        "Check recently installed applications.",

                        "Remove suspicious applications.",

                        "Update the operating system.",

                        "Run a trusted security scan.",

                        "Change important passwords from a trusted device.",

                        "Monitor important accounts for suspicious activity."

                    ],

                    dont: [

                        "Do not install random antivirus software from pop-ups.",

                        "Do not enter passwords into suspicious applications."
                    ]

                },


                {
                    name:
                        "🎭 I saw a fake login page",

                    title:
                        "Fake Login Page",

                    steps: [

                        "Close the page immediately.",

                        "Do not enter your credentials.",

                        "Check the website address carefully.",

                        "If you entered a password, change it immediately from the real official website.",

                        "Enable two-factor authentication.",

                        "Check account login activity.",

                        "Report the phishing website if the service provides a reporting option."

                    ],

                    dont: [

                        "Do not use the fake page again.",

                        "Do not enter OTPs into suspicious websites."
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
                "Immediate safety steps for urgent cyber incidents.",

            situations: [

                {
                    name:
                        "🔐 My account is actively compromised",

                    title:
                        "Active Account Compromise",

                    steps: [

                        "Secure your email account first if it may also be compromised.",

                        "Change compromised passwords using the official website/app.",

                        "Sign out unknown devices.",

                        "Enable two-factor authentication.",

                        "Check recovery email and phone number.",

                        "Save important evidence such as screenshots, emails and messages.",

                        "Contact the affected service through its official support/recovery process."

                    ],

                    dont: [

                        "Do not communicate with the suspected attacker unnecessarily.",

                        "Never share OTPs or recovery codes.",

                        "Do not pay an unknown person claiming they can recover the account."
                    ]

                },


                {
                    name:
                        "💳 My money is at risk",

                    title:
                        "Financial Emergency",

                    steps: [

                        "Contact your bank or payment provider immediately using an official channel.",

                        "Ask how to secure or restrict the affected account.",

                        "Save transaction details.",

                        "Secure your email account.",

                        "Change compromised passwords.",

                        "Report the incident through the appropriate official channel.",

                        "Continue monitoring your account for suspicious activity."

                    ],

                    dont: [

                        "Do not send additional money.",

                        "Do not share OTPs or PINs.",

                        "Do not trust recovery scammers."
                    ]

                }

            ]
        }

    };


    /* =========================================================
       6. OPEN HELP MODAL
       ========================================================= */

    function openHelp(service) {

        const info = helpData[service];

        if (!info) {
            alert(
                currentLanguage === "BN"
                    ? "এই CyberCare সার্ভিসটি বর্তমানে পাওয়া যাচ্ছে না।"
                    : "This CyberCare service is currently unavailable."
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
            max-height:92vh;
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


        const helpHeading =
            currentLanguage === "BN"
                ? "আপনার কী সমস্যা হয়েছে?"
                : "What happened?";


        const selectText =
            currentLanguage === "BN"
                ? "উপরের একটি সমস্যা নির্বাচন করুন এবং ধাপে ধাপে সাহায্য পান।"
                : "Select an option above to get step-by-step help.";


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

                <div style="
                    font-size:12px;
                    font-weight:bold;
                    letter-spacing:1px;
                    color:#2563eb;
                    margin-bottom:8px;
                ">
                    CYBERCARE HELP
                </div>

                <h2 style="margin:0 0 8px 0;">
                    ${info.title}
                </h2>

                <p style="
                    margin-top:0;
                    color:#64748b;
                ">
                    ${info.description}
                </p>

            </div>


            <h3 style="margin-top:25px;">
                👇 ${helpHeading}
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
                    🛡️ ${selectText}
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


        modal
            .querySelectorAll(".cyber-situation")
            .forEach(function (button) {

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


    /* =========================================================
       7. SHOW RESULT
       ========================================================= */

    function showResult(modal, situation) {

        const result =
            modal.querySelector("#cybercareResult");


        const steps =
            situation.steps
                .map(function (step, index) {

                    return `
                        <li style="margin-bottom:12px;">
                            <strong>${index + 1}.</strong>
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


        const isBN =
            currentLanguage === "BN";


        const shouldTitle =
            isBN
                ? "আপনার যা করা উচিত"
                : "What you should do";


        const dontTitle =
            isBN
                ? "যা কখনো করবেন না"
                : "What you should NOT do";


        const evidenceTitle =
            isBN
                ? "📸 প্রয়োজনীয় প্রমাণ সংরক্ষণ করুন"
                : "📸 Save useful evidence";


        const evidenceText =
            isBN
                ? "প্রয়োজনে Screenshot, message, email, receipt এবং transaction details সংরক্ষণ করুন।"
                : "Keep screenshots, messages, emails, receipts and transaction details when appropriate.";


        const officialTitle =
            isBN
                ? "🌐 Official Help"
                : "🌐 Official Help";


        let officialButton = "";


        if (situation.official) {

            officialButton = `

                <div style="
                    margin-top:20px;
                    padding:16px;
                    background:#ecfdf5;
                    border:1px solid #a7f3d0;
                    border-radius:12px;
                ">

                    <h4 style="margin-bottom:10px;">
                        ${officialTitle}
                    </h4>

                    <a
                        href="${situation.official}"
                        target="_blank"
                        rel="noopener noreferrer"
                        style="
                            display:inline-block;
                            padding:11px 16px;
                            border-radius:10px;
                            background:#059669;
                            color:white;
                            text-decoration:none;
                            font-weight:bold;
                        "
                    >
                        ${isBN ? "Official Website খুলুন ↗" : "Open Official Website ↗"}
                    </a>

                    <p style="
                        margin-top:10px;
                        margin-bottom:0;
                        font-size:12px;
                        color:#64748b;
                    ">
                        ${isBN
                            ? "শুধু official website ব্যবহার করুন। কাউকে password বা recovery code দেবেন না।"
                            : "Use only the official website. Never give your password or recovery code to anyone."
                        }
                    </p>

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
                    ✅ ${shouldTitle}
                </h4>


                <ol style="padding-left:22px;">
                    ${steps}
                </ol>


                <div style="
                    margin-top:20px;
                    padding:15px;
                    background:#fff1f2;
                    border-radius:12px;
                ">

                    <h4>
                        ⚠️ ${dontTitle}
                    </h4>

                    <ul style="padding-left:22px;">
                        ${dont}
                    </ul>

                </div>


                ${officialButton}


                <div style="
                    margin-top:20px;
                    padding:15px;
                    background:#eff6ff;
                    border-radius:12px;
                ">

                    <h4>
                        ${evidenceTitle}
                    </h4>

                    <p style="margin-bottom:0;">
                        ${evidenceText}
                    </p>

                </div>


                <p style="
                    margin-top:20px;
                    font-size:13px;
                    color:#64748b;
                ">
                    🛡️ ${
                        isBN
                            ? "CyberCare সাধারণ cybersecurity safety guidance প্রদান করে।"
                            : "CyberCare provides general cybersecurity safety guidance."
                    }
                </p>

            </div>
        `;


        result.scrollIntoView({
            behavior:"smooth",
            block:"nearest"
        });

    }


    /* =========================================================
       8. GET HELP BUTTONS
       ========================================================= */

    document
        .querySelectorAll(".help-btn")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const service =
                    button.getAttribute("data-service");

                openHelp(service);

            });

        });


    /* =========================================================
       9. EMERGENCY BUTTON
       ========================================================= */

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


    /* =========================================================
       10. LEARN BUTTON
       ========================================================= */

    const learnBtn =
        document.getElementById("learnBtn");

    if (learnBtn) {

        learnBtn.addEventListener(
            "click",
            function () {

                alert(
                    currentLanguage === "BN"
                        ? "Cybersecurity Learning section শীঘ্রই আরও বিস্তারিতভাবে যোগ করা হবে।"
                        : "The Cybersecurity Learning section will be expanded soon."
                );

            }
        );

    }


    /* =========================================================
       11. STARTUP
       ========================================================= */

    console.log(
        "🛡️ CyberCare loaded successfully."
    );

});
