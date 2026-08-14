document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CYBERCARE - COMPLETE SCRIPT
       Language + Theme + Menu + A-Z Help + Tools
    ===================================================== */

    /* =====================================================
       1. ELEMENTS
    ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");
    const closeMenu = document.getElementById("closeMenu");
    const menuOverlay = document.getElementById("menuOverlay");

    const themeBtn = document.getElementById("themeBtn");

    const languageBtn = document.getElementById("languageBtn");
    const languageText = document.getElementById("languageText");

    const emergencyBtn = document.getElementById("emergencyBtn");
    const learnBtn = document.getElementById("learnBtn");


    /* =====================================================
       2. MENU
    ===================================================== */

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

    menuBtn?.addEventListener("click", openMenu);
    closeMenu?.addEventListener("click", closeSideMenu);
    menuOverlay?.addEventListener("click", closeSideMenu);


    /* =====================================================
       3. DARK / LIGHT MODE
    ===================================================== */

    let savedTheme = localStorage.getItem("cybercare-theme") || "light";

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


    /* =====================================================
       4. TRANSLATION SYSTEM
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

            logo: "সাইবারকেয়ার",

            heroTitle:
                "মানুষকে সুরক্ষিত রাখা। ডিজিটাল জীবনকে নিরাপদ রাখা।",

            heroText:
                "হ্যাক হওয়া অ্যাকাউন্ট, প্রতারণা, ফিশিং, গোপনীয়তা এবং ডিজিটাল সমস্যায় সহজ ও ধাপে ধাপে নিরাপত্তা সহায়তা।",

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

        if (languageText) {
            languageText.textContent = currentLanguage;
        }

        const logo =
            document.querySelector(".logo span");

        if (logo) logo.textContent = t.logo;

        const heroH2 =
            document.querySelector(".hero h2");

        if (heroH2) heroH2.textContent = t.heroTitle;

        const heroP =
            document.querySelector(".hero p");

        if (heroP) heroP.textContent = t.heroText;

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
                const btn = card.querySelector(".help-btn");
                if (btn) btn.textContent = t.getHelp;
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


    /* =====================================================
       5. COMPLETE HELP DATABASE
    ===================================================== */

    const helpData = {

        "Account Recovery": {

            title: "🔐 Account Recovery",

            description:
                "Select the account problem you are facing.",

            situations: [

                {
                    name: "📘 Facebook Account Hacked",

                    title:
                        "Facebook Account Recovery",

                    official:
                        "https://www.facebook.com/hacked",

                    officialText:
                        "Facebook's official hacked-account recovery page",

                    steps: [

                        "First, do not panic and do not pay anyone who promises instant recovery.",

                        "Open Facebook's official hacked-account recovery page.",

                        "Select the option that best describes what happened.",

                        "Follow Facebook's identity/security verification steps.",

                        "If you can still access the account, immediately change the password.",

                        "Check your email address and phone number and remove anything you do not recognise.",

                        "Open Facebook's password/security settings and review logged-in devices.",

                        "Log out devices that you do not recognise.",

                        "Turn on two-factor authentication (2FA).",

                        "Check recent posts, messages, profile information and payment information for changes.",

                        "Secure the email account connected to Facebook as well."
                    ],

                    dont: [

                        "Never give anyone your Facebook password.",

                        "Never share OTPs, login codes or recovery codes.",

                        "Do not pay random people on Telegram, WhatsApp, Instagram or Facebook claiming they can recover your account.",

                        "Do not use unofficial Facebook recovery websites."
                    ]
                },


                {
                    name: "📸 Instagram Account Hacked",

                    title:
                        "Instagram Account Recovery",

                    official:
                        "https://www.instagram.com/hacked/",

                    officialText:
                        "Instagram's official hacked-account recovery page",

                    steps: [

                        "Open Instagram's official hacked-account recovery page.",

                        "Choose the option describing your problem.",

                        "Check the original email account for security messages from Instagram.",

                        "If you still have access, immediately change your Instagram password.",

                        "Check Login Activity and remove unknown devices.",

                        "Check your email address and phone number.",

                        "Enable two-factor authentication.",

                        "Review profile information, posts and messages for unauthorised changes.",

                        "Secure the email account connected to Instagram."
                    ],

                    dont: [

                        "Never send Instagram verification codes to another person.",

                        "Do not pay unofficial recovery agents.",

                        "Do not give your password to anyone."
                    ]
                },


                {
                    name: "💬 WhatsApp Account Hacked",

                    title:
                        "WhatsApp Account Recovery",

                    official:
                        "https://www.whatsapp.com/contact/",

                    officialText:
                        "WhatsApp official support",

                    steps: [

                        "Open WhatsApp on your phone.",

                        "Register your phone number again using the official WhatsApp app.",

                        "Enter the verification code sent to your phone.",

                        "After regaining access, open Settings → Linked Devices.",

                        "Log out every device you do not recognise.",

                        "Open Settings → Account → Two-step verification.",

                        "Enable two-step verification and create a private PIN.",

                        "Check your profile and important conversations for suspicious activity."
                    ],

                    dont: [

                        "Never share your WhatsApp verification code.",

                        "Never share your two-step verification PIN.",

                        "Do not trust people claiming they need your WhatsApp code."
                    ]
                },


                {
                    name: "▶️ Google / YouTube Account Hacked",

                    title:
                        "Google Account Recovery",

                    official:
                        "https://accounts.google.com/signin/recovery",

                    officialText:
                        "Google official account recovery",

                    steps: [

                        "Open Google's official account recovery page.",

                        "Enter your Google email address or phone number.",

                        "Complete Google's verification process.",

                        "After recovery, immediately change your password.",

                        "Open Google Account → Security.",

                        "Review Recent security activity.",

                        "Review Your devices and remove unknown devices.",

                        "Check recovery email and recovery phone.",

                        "Enable 2-Step Verification.",

                        "Review YouTube channel information if YouTube was affected."
                    ],

                    dont: [

                        "Never give recovery codes to another person.",

                        "Do not pay unofficial Google recovery services."
                    ]
                },


                {
                    name: "🔑 I Cannot Log In",

                    title:
                        "Cannot Access My Account",

                    steps: [

                        "Use only the official recovery page of the service.",

                        "Try your recovery email address or phone number.",

                        "Complete identity verification if the service requests it.",

                        "Secure your email account first if it may also be compromised.",

                        "After recovery, change the password.",

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

                        "Do not enter your password, OTP, PIN, card number or bank information.",

                        "Take a screenshot of the message.",

                        "Check who sent it.",

                        "If necessary, block and report the sender.",

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

                        "Do not enter any additional information.",

                        "If you entered a password, change it from the official website/app.",

                        "Enable 2FA.",

                        "If a file was downloaded, do not open it.",

                        "Delete suspicious downloaded files.",

                        "Update your device.",

                        "If financial information was entered, contact your bank immediately."
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

                        "Check the sender's email address or phone number carefully.",

                        "Look for urgency, threats or promises of rewards.",

                        "Do not click unexpected links.",

                        "Open the company's official app or type its official website manually.",

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

                        "Immediately identify which account/service the OTP belonged to.",

                        "Change that account password.",

                        "Sign out unknown devices.",

                        "Enable 2FA.",

                        "If the OTP was related to banking/payment, contact the bank/payment provider immediately.",

                        "Monitor the account and transactions for suspicious activity."
                    ],

                    dont: [

                        "Do not share another OTP.",

                        "Do not trust anyone asking for a second verification code."
                    ]
                }
            ]
        },


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

                        "Open your phone's app list.",

                        "Find the application you do not recognise.",

                        "Check when it was installed.",

                        "Review its permissions.",

                        "If you do not need it and it is suspicious, uninstall it.",

                        "Update your phone's operating system.",

                        "Run your phone's built-in security scan if available."
                    ],

                    dont: [

                        "Do not install random antivirus apps from pop-ups.",

                        "Do not give unknown apps unnecessary permissions."
                    ]
                },


                {
                    name:
                        "🎤 Camera / Microphone Seems Suspicious",

                    title:
                        "Camera & Microphone Security",

                    steps: [

                        "Open Settings → Privacy/Security.",

                        "Open Camera permissions.",

                        "Review which apps have camera access.",

                        "Remove access from apps that do not need it.",

                        "Repeat the same process for Microphone permissions.",

                        "Uninstall suspicious applications.",

                        "Update your operating system."
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

                        "Review location-sharing features inside Google, Apple and social apps.",

                        "Remove location access from apps you do not trust."
                    ],

                    dont: [

                        "Do not leave continuous location access enabled for unnecessary apps."
                    ]
                }
            ]
        },


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

                        "Contact your bank/payment provider immediately.",

                        "Tell them that the transaction may be fraudulent.",

                        "Save the transaction ID/reference number.",

                        "Take screenshots of messages and payment records.",

                        "Secure the account used for payment.",

                        "Change compromised passwords.",

                        "Monitor your bank/payment account.",

                        "If you are in India, report financial cyber fraud through the official government cybercrime channel as soon as possible."
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

                        "Contact your bank immediately using the official number/app/website.",

                        "Tell the bank what information was exposed.",

                        "Ask what account-security measures are required.",

                        "Monitor transactions.",

                        "Change affected passwords/PINs when advised by the bank.",

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

                        "Report the transaction through the official banking/payment app.",

                        "If you are in India, report suspected cyber financial fraud through the official government cybercrime reporting channel.",

                        "Secure your UPI-linked accounts.",

                        "Monitor your bank account."
                    ],

                    dont: [

                        "Never share your UPI PIN.",

                        "Receiving money does not require you to enter your UPI PIN.",

                        "Never approve an unknown payment request."
                    ]
                }
            ]
        },


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

                        "Update your operating system.",

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

                        "If you already entered a password, change it using the real official website/app.",

                        "Enable 2FA.",

                        "Review account login activity.",

                        "Save a screenshot if you need to report the incident."
                    ],

                    dont: [

                        "Do not use the fake login page again."
                    ]
                }
            ]
        },


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

                        "Use only the affected service's official support/recovery channel."
                    ],

                    dont: [

                        "Do not communicate with the suspected attacker.",

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

                        "Report the incident through the appropriate official channel.",

                        "In India, suspected cyber financial fraud should be reported through the official government cybercrime system as quickly as possible."
                    ],

                    dont: [

                        "Do not send additional money.",

                        "Do not trust anyone promising guaranteed money recovery."
                    ]
                }
            ]
        }
    };


    /* =====================================================
       6. OFFICIAL LINKS
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
       7. OPEN HELP MODAL
    ===================================================== */

    function openHelp(service) {

        const info = helpData[service];

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

        info.situations.forEach((item, index) => {

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
                    ${item.name}
                </button>
            `;
        });


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


            <div id="cybercareResult" style="margin-top:20px;">

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
            .addEventListener("click", () => {
                overlay.remove();
            });


        overlay.addEventListener("click", event => {

            if (event.target === overlay) {
                overlay.remove();
            }

        });


        modal
            .querySelectorAll(".cyber-situation")
            .forEach(button => {

                button.addEventListener("click", () => {

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
       8. SHOW STEP-BY-STEP RESULT
    ===================================================== */

    function showResult(modal, situation) {

        const result =
            modal.querySelector("#cybercareResult");

        const steps =
            situation.steps
                .map((step, index) => `
                    <li style="margin-bottom:12px;">
                        <strong>Step ${index + 1}:</strong>
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
                        margin:8px 0 14px;
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

                    <p style="
                        margin:8px 0 0;
                        color:#475569;
                    ">
                        Keep screenshots, emails, messages,
                        transaction IDs, receipts and relevant
                        account-security alerts.
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

            </div>
        `;


        result.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    }


    /* =====================================================
       9. SERVICE BUTTONS
    ===================================================== */

    document
        .querySelectorAll(".help-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const service =
                    button.getAttribute("data-service");

                openHelp(service);
            });
        });


    emergencyBtn?.addEventListener("click", () => {
        openHelp("Emergency Help");
    });


    /* =====================================================
       10. MENU NAVIGATION
    ===================================================== */

    document
        .querySelectorAll(".menu-item")
        .forEach(item => {

            item.addEventListener("click", () => {

                const target =
                    item.getAttribute("data-menu");

                closeSideMenu();

                if (target === "emergency") {

                    setTimeout(() => {
                        openHelp("Emergency Help");
                    }, 200);

                    return;
                }

                const section =
                    document.getElementById(target);

                if (section) {

                    setTimeout(() => {

                        section.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }, 200);
                }
            });
        });


    /* =====================================================
       11. CYBERCARE TOOLS
    ===================================================== */

    const toolCards =
        document.querySelectorAll(".tool-card");


    /* ---------- SCAM CHECKER ---------- */

    if (toolCards[0]) {

        const button =
            toolCards[0].querySelector(".tool-btn");

        button.textContent =
            "Open Tool";

        button.style.cursor =
            "pointer";

        button.addEventListener("click", openScamChecker);
    }


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

                    <div id="scamResult"
                         style="margin-top:18px;">
                    </div>
                `
            );


        modal.querySelector("#checkScam")
            .addEventListener("click", () => {

                const text =
                    modal.querySelector("#scamInput")
                        .value
                        .toLowerCase();

                const warnings = [];

                const patterns = [

                    ["otp", "Asks for an OTP/code."],
                    ["password", "Asks for a password."],
                    ["urgent", "Uses urgency."],
                    ["immediately", "Creates pressure to act immediately."],
                    ["click", "Contains a request to click something."],
                    ["verify", "May be asking for account verification."],
                    ["bank", "Mentions banking information."],
                    ["upi", "Mentions UPI/payment activity."],
                    ["prize", "Mentions a prize/reward."],
                    ["winner", "Claims you have won something."],
                    ["refund", "Mentions a refund."],
                    ["investment", "Mentions investment opportunities."],
                    ["crypto", "Mentions cryptocurrency/payment."],
                    ["free", "Uses a free/reward offer."]
                ];


                patterns.forEach(([word, warning]) => {

                    if (text.includes(word)) {
                        warnings.push(warning);
                    }

                });


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
                                    .map(w => `<li>${w}</li>`)
                                    .join("")}
                            </ul>

                            <strong>
                                Do not share OTPs, passwords,
                                PINs or recovery codes.
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

                            This does NOT prove that the
                            message is safe. Verify the sender
                            through the official website/app.

                        </div>
                    `;
                }
            });
    }


    /* ---------- PASSWORD CHECKER ---------- */

    if (toolCards[1]) {

        const button =
            toolCards[1].querySelector(".tool-btn");

        button.textContent =
            "Open Tool";

        button.style.cursor =
            "pointer";

        button.addEventListener(
            "click",
            openPasswordChecker
        );
    }


    function openPasswordChecker() {

        const modal =
            createToolModal(
                "🔐 Password Safety Checker",
                `
                    <p>
                        For privacy, this tool checks the password
                        only inside your browser. It does not send
                        your password anywhere.
                    </p>

                    <input
                        id="passwordInput"
                        type="password"
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


        modal.querySelector("#checkPassword")
            .addEventListener("click", () => {

                const password =
                    modal.querySelector("#passwordInput")
                        .value;

                const result =
                    modal.querySelector("#passwordResult");

                let score = 0;

                if (password.length >= 12)
                    score++;

                if (/[A-Z]/.test(password))
                    score++;

                if (/[a-z]/.test(password))
                    score++;

                if (/[0-9]/.test(password))
                    score++;

                if (/[^A-Za-z0-9]/.test(password))
                    score++;


                let message = "";

                if (score <= 2) {

                    message = `
                        <div style="
                            padding:16px;
                            background:#fff1f2;
                            border-radius:12px;
                        ">
                            🔴 Weak password.
                            <br><br>
                            Use a longer unique password or passphrase.
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
                            Never reuse it on another account.
                        </div>
                    `;
                }

                result.innerHTML = message;
            });
    }


    /* ---------- PRIVACY CHECKLIST ---------- */

    if (toolCards[2]) {

        const button =
            toolCards[2].querySelector(".tool-btn");

        button.textContent =
            "Open Checklist";

        button.style.cursor =
            "pointer";

        button.addEventListener(
            "click",
            openPrivacyChecklist
        );
    }


    function openPrivacyChecklist() {

        createToolModal(
            "📱 Privacy & Security Checklist",
            `
                <div id="privacyList">

                    ${[
                        "I use a unique password for important accounts.",
                        "I have enabled two-factor authentication.",
                        "My phone has a screen lock.",
                        "I review installed applications.",
                        "I review camera and microphone permissions.",
                        "I review location permissions.",
                        "I keep my phone updated.",
                        "I keep important accounts connected to a secure email/phone.",
                        "I do not share OTPs or recovery codes.",
                        "I review logged-in devices regularly."
                    ].map((item, index) => `
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
                            ${index + 1}. ${item}
                        </label>
                    `).join("")}

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


        const modal =
            document.getElementById(
                "cybercare-tool-modal"
            );

        modal.querySelector("#privacyScore")
            .addEventListener("click", () => {

                const checks =
                    modal.querySelectorAll(
                        ".privacyCheck"
                    );

                let completed = 0;

                checks.forEach(check => {

                    if (check.checked)
                        completed++;
                });


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

                        🛡️ Your Cyber Safety Score:
                        <strong>
                            ${percentage}%
                        </strong>

                        <br><br>

                        ${completed}
                        out of
                        ${checks.length}
                        safety checks completed.

                    </div>
                `;
            });
    }


    /* ---------- CYBER SAFETY SCORE ---------- */

    if (toolCards[3]) {

        const button =
            toolCards[3].querySelector(".tool-btn");

        button.textContent =
            "Start Test";

        button.style.cursor =
            "pointer";

        button.addEventListener(
            "click",
            openSafetyScore
        );
    }


    function openSafetyScore() {

        const modal =
            createToolModal(
                "🛡️ Cyber Safety Score",
                `
                    <p>
                        Answer these questions honestly.
                    </p>

                    <div id="scoreQuestions">

                        ${[
                            "Do you use 2FA on important accounts?",
                            "Do you use unique passwords?",
                            "Do you regularly check logged-in devices?",
                            "Do you avoid sharing OTPs?",
                            "Do you keep your phone updated?",
                            "Do you avoid unknown links?",
                            "Do you review app permissions?",
                            "Do you have a secure recovery email/phone?"
                        ].map((q, i) => `
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
                                ${i + 1}. ${q}
                            </label>
                        `).join("")}

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


        modal.querySelector("#calculateScore")
            .addEventListener("click", () => {

                const checks =
                    modal.querySelectorAll(
                        ".scoreCheck"
                    );

                let score = 0;

                checks.forEach(check => {

                    if (check.checked)
                        score++;
                });


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
            });
    }


    /* =====================================================
       12. TOOL MODAL CREATOR
    ===================================================== */

    function createToolModal(title, content) {

        document
            .getElementById("cybercare-tool-modal")
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


        modal.querySelector("#closeTool")
            .addEventListener("click", () => {
                overlay.remove();
            });


        overlay.addEventListener("click", event => {

            if (event.target === overlay) {
                overlay.remove();
            }

        });


        return modal;
    }


    /* =====================================================
       13. LEARNING SECTION
    ===================================================== */

    learnBtn?.addEventListener("click", () => {

        createToolModal(
            "🎓 Cybersecurity Basics",
            `
                <div>

                    <h3>🔐 Password Safety</h3>
                    <p>
                        Use long, unique passwords and never reuse
                        the same password everywhere.
                    </p>

                    <h3 style="margin-top:18px;">
                        🔑 Two-Factor Authentication
                    </h3>
                    <p>
                        Turn on 2FA for email, social media,
                        banking and other important accounts.
                    </p>

                    <h3 style="margin-top:18px;">
                        🎣 Phishing
                    </h3>
                    <p>
                        Do not click unexpected links or share
                        OTPs, passwords or recovery codes.
                    </p>

                    <h3 style="margin-top:18px;">
                        📱 Phone Security
                    </h3>
                    <p>
                        Keep your operating system and applications
                        updated and review permissions regularly.
                    </p>

                    <h3 style="margin-top:18px;">
                        💳 Financial Safety
                    </h3>
                    <p>
                        Never share your UPI PIN, banking password
                        or OTP with anyone.
                    </p>

                    <h3 style="margin-top:18px;">
                        🧠 Think Before You Trust
                    </h3>
                    <p>
                        If a message creates fear, urgency or promises
                        an unbelievable reward, stop and verify it
                        through the official website or app.
                    </p>

                </div>
            `
        );
    });


    /* =====================================================
       14. INDIA CYBER FRAUD QUICK ACCESS
    ===================================================== */

    window.CyberCareOfficial = officialLinks;


    /* =====================================================
       15. KEYBOARD ESCAPE
    ===================================================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            document
                .getElementById("cybercare-modal")
                ?.remove();

            document
                .getElementById("cybercare-tool-modal")
                ?.remove();

            closeSideMenu();
        }
    });


    /* =====================================================
       16. STARTUP
    ===================================================== */

    console.log(
        "🛡️ CyberCare loaded successfully."
    );

});
