document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       1. MENU
    ========================= */

    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");
    const closeMenu = document.getElementById("closeMenu");
    const menuOverlay = document.getElementById("menuOverlay");

    function openMenu() {
        sideMenu.classList.add("active");
        menuOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeSideMenu() {
        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
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


    /* =========================
       2. MENU NAVIGATION
    ========================= */

    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(function (item) {

        item.addEventListener("click", function () {

            const target = item.getAttribute("data-menu");

            closeSideMenu();

            if (target === "emergency") {
                openHelp("Emergency Help");
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


    /* =========================
       3. DARK / LIGHT MODE
    ========================= */

    const themeBtn = document.getElementById("themeBtn");

    const savedTheme = localStorage.getItem("cybercare-theme");

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


    /* =========================
       4. LANGUAGE
    ========================= */

    const languageBtn = document.getElementById("languageBtn");
    const languageText = document.getElementById("languageText");

    let currentLanguage =
        localStorage.getItem("cybercare-language") || "EN";

    if (languageText) {
        languageText.textContent = currentLanguage;
    }

    if (languageBtn) {

        languageBtn.addEventListener("click", function () {

            if (currentLanguage === "EN") {

                currentLanguage = "BN";

                if (languageText) {
                    languageText.textContent = "BN";
                }

                alert(
                    "বাংলা ভাষা সাপোর্ট শীঘ্রই সম্পূর্ণভাবে যোগ করা হবে।"
                );

            } else {

                currentLanguage = "EN";

                if (languageText) {
                    languageText.textContent = "EN";
                }

            }

            localStorage.setItem(
                "cybercare-language",
                currentLanguage
            );

        });

    }


    /* =========================
       5. HELP DATA
    ========================= */

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
                        "Do not share your password or recovery code with anyone.",
                        "Use Facebook's official account recovery process.",
                        "Change your password if you still have access.",
                        "Check your email and phone number.",
                        "Sign out unknown devices.",
                        "Enable two-factor authentication."
                    ],

                    dont: [
                        "Do not pay strangers claiming they can recover your account.",
                        "Never share OTP or recovery codes."
                    ]
                },

                {
                    name: "📸 Instagram account hacked",
                    title: "Instagram Account Recovery",

                    steps: [
                        "Check your email for a security alert.",
                        "Use Instagram's official recovery process.",
                        "Change your password if you still have access.",
                        "Check login activity.",
                        "Remove unknown devices.",
                        "Enable two-factor authentication."
                    ],

                    dont: [
                        "Do not trust random Instagram recovery services.",
                        "Never send verification codes to anyone."
                    ]
                },

                {
                    name: "💬 WhatsApp account hacked",
                    title: "WhatsApp Account Recovery",

                    steps: [
                        "Register your phone number again in WhatsApp.",
                        "Enter the official verification code.",
                        "Check Linked Devices.",
                        "Log out devices you do not recognise.",
                        "Enable two-step verification."
                    ],

                    dont: [
                        "Never share your WhatsApp verification code.",
                        "Do not trust people asking for your OTP."
                    ]
                },

                {
                    name: "▶️ YouTube / Google account hacked",
                    title: "Google / YouTube Account Recovery",

                    steps: [
                        "Secure your Google account first.",
                        "Use Google's official account recovery process.",
                        "Change your password.",
                        "Review recent security activity.",
                        "Remove unknown devices.",
                        "Enable two-step verification."
                    ],

                    dont: [
                        "Do not pay unofficial recovery agents.",
                        "Never share recovery codes."
                    ]
                },

                {
                    name: "🔑 I cannot log in",
                    title: "Cannot Access Account",

                    steps: [
                        "Use the official recovery page of the service.",
                        "Try your recovery email or phone number.",
                        "Complete identity verification if requested.",
                        "Secure your recovery email.",
                        "Change your password after recovery.",
                        "Enable 2FA."
                    ],

                    dont: [
                        "Do not use unofficial recovery websites.",
                        "Never share recovery codes."
                    ]
                }

            ]
        },


        "Scam & Phishing": {

            title: "🎣 Scam & Phishing",

            description:
                "Check suspicious messages, links and fake websites.",

            situations: [

                {
                    name: "💬 Someone sent me a suspicious WhatsApp link",
                    title: "Suspicious WhatsApp Link",

                    steps: [
                        "Do not open the link again.",
                        "Do not enter your password, OTP or card details.",
                        "Check who sent the message.",
                        "Take a screenshot of the message.",
                        "Block or report the sender if necessary.",
                        "If you entered information, secure the affected account immediately."
                    ],

                    dont: [
                        "Do not forward the suspicious link to others.",
                        "Do not download files from the link."
                    ]
                },

                {
                    name: "🔗 I clicked a suspicious link",
                    title: "Suspicious Link Clicked",

                    steps: [
                        "Close the website.",
                        "Do not enter additional information.",
                        "If you entered a password, change it immediately.",
                        "Enable 2FA.",
                        "Run a trusted security scan if a file was downloaded.",
                        "Contact your bank if financial information was entered."
                    ],

                    dont: [
                        "Do not return to the suspicious website.",
                        "Do not install software suggested by the page."
                    ]
                },

                {
                    name: "📩 I received a phishing message",
                    title: "Phishing Message",

                    steps: [
                        "Check the sender address or number.",
                        "Look for urgency or threats.",
                        "Do not click unexpected links.",
                        "Verify the request using the official website or app.",
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
                        "Change the affected account password immediately.",
                        "Sign out unknown devices.",
                        "Enable 2FA.",
                        "Contact your bank if the OTP was financial.",
                        "Monitor the account for suspicious activity."
                    ],

                    dont: [
                        "Do not share another OTP.",
                        "Do not trust anyone asking for another code."
                    ]
                }

            ]
        },


        "Phone Security": {

            title: "📱 Phone Security",

            description:
                "Check suspicious apps, permissions and privacy settings.",

            situations: [

                {
                    name: "📦 I found an unknown app",
                    title: "Unknown Application",

                    steps: [
                        "Check where the app came from.",
                        "Review its permissions.",
                        "Uninstall it if you do not recognise it.",
                        "Update your phone.",
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
                        "Review camera permissions.",
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
                        "Save screenshots and receipts.",
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
                        "Monitor transactions.",
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
                        "Remember that receiving money does not require entering your UPI PIN."
                    ]
                }

            ]
        },


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
                        "Enable 2FA.",
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
                        "Check recently installed apps.",
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
                        "If you entered a password, change it immediately.",
                        "Enable 2FA.",
                        "Check account login activity."
                    ],

                    dont: [
                        "Do not use the fake page again."
                    ]
                }

            ]
        },


        "Emergency Help": {

            title: "🚨 Emergency Cyber Help",

            description:
                "Immediate safety steps for urgent cyber incidents.",

            situations: [

                {
                    name: "🔐 My account is actively compromised",
                    title: "Active Account Compromise",

                    steps: [
                        "Secure your email account first.",
                        "Change compromised passwords.",
                        "Sign out unknown devices.",
                        "Enable 2FA.",
                        "Save important evidence.",
                        "Contact the affected service through its official support."
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


    /* =========================
       6. OPEN HELP
    ========================= */

    function openHelp(service) {

        const info = helpData[service];

        if (!info) {
            alert("This CyberCare service is currently unavailable.");
            return;
        }

        const oldModal =
            document.getElementById("cybercare-modal");

        if (oldModal) {
            oldModal.remove();
        }

        const overlay =
            document.createElement("div");

        overlay.id = "cybercare-modal";

        overlay.style.cssText = `
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.75);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            z-index: 99999;
            overflow-y: auto;
        `;

        const modal =
            document.createElement("div");

        modal.style.cssText = `
            width: 100%;
            max-width: 720px;
            max-height: 90vh;
            overflow-y: auto;
            background: #ffffff;
            color: #111827;
            border-radius: 22px;
            padding: 26px;
            position: relative;
            box-sizing: border-box;
            box-shadow: 0 25px 70px rgba(0,0,0,0.45);
            font-family: Arial, sans-serif;
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


    /* =========================
       7. SHOW RESULT
    ========================= */

    function showResult(modal, situation) {

        const result =
            modal.querySelector("#cybercareResult");

        const steps =
            situation.steps
                .map(function (step) {
                    return `
                        <li style="margin-bottom:10px;">
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
                    padding:15px;
                    background:#fff1f2;
                    border-radius:12px;
                ">

                    <h4>
                        ⚠️ What you should NOT do
                    </h4>

                    <ul style="padding-left:22px;">
                        ${dont}
                    </ul>

                </div>

                <div style="
                    margin-top:20px;
                    padding:15px;
                    background:#eff6ff;
                    border-radius:12px;
                ">

                    <h4>
                        📸 Save useful evidence
                    </h4>

                    <p style="margin-bottom:0;">
                        Keep screenshots, messages, emails,
                        receipts and transaction details when appropriate.
                    </p>

                </div>

                <p style="
                    margin-top:20px;
                    font-size:13px;
                    color:#64748b;
                ">
                    🛡️ CyberCare provides general cybersecurity
                    safety guidance.
                </p>

            </div>
        `;

        result.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }


    /* =========================
       8. GET HELP BUTTONS
    ========================= */

    const helpButtons =
        document.querySelectorAll(".help-btn");

    helpButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const service =
                button.getAttribute("data-service");

            openHelp(service);

        });

    });


    /* =========================
       9. EMERGENCY BUTTON
    ========================= */

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


    /* =========================
       10. LEARN BUTTON
    ========================= */

    const learnBtn =
        document.getElementById("learnBtn");

    if (learnBtn) {

        learnBtn.addEventListener(
            "click",
            function () {

                alert(
                    "Cybersecurity learning section is coming soon."
                );

            }
        );

    }


    /* =========================
       11. STARTUP TEST
    ========================= */

    console.log(
        "🛡️ CyberCare loaded successfully."
    );

});
