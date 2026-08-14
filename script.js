document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       HELP DATA
    ========================= */

    const helpData = {

        "Account Recovery": {
            title: "🔐 Account Recovery",
            description: "Choose the account problem you are facing.",

            situations: [
                {
                    name: "📘 Facebook account hacked",
                    title: "Facebook Recovery",
                    steps: [
                        "Go to Facebook's official account recovery page.",
                        "Change your password immediately if you can still log in.",
                        "Check your email and phone number in account settings.",
                        "Log out unknown devices and sessions.",
                        "Enable two-factor authentication."
                    ],
                    dont: [
                        "Never give anyone your Facebook password or OTP.",
                        "Do not pay strangers claiming they can recover your account."
                    ]
                },

                {
                    name: "📸 Instagram account hacked",
                    title: "Instagram Recovery",
                    steps: [
                        "Use Instagram's official hacked-account recovery process.",
                        "Check your email for security alerts.",
                        "Change your password if you still have access.",
                        "Remove unknown devices and connected apps.",
                        "Enable two-factor authentication."
                    ],
                    dont: [
                        "Never share login codes with anyone.",
                        "Avoid unofficial account recovery services."
                    ]
                },

                {
                    name: "💬 WhatsApp account hacked",
                    title: "WhatsApp Recovery",
                    steps: [
                        "Register your phone number again in the official WhatsApp app.",
                        "Enter the verification code sent to your phone.",
                        "Check Linked Devices and remove anything unfamiliar.",
                        "Enable two-step verification.",
                        "Warn your contacts if suspicious messages were sent."
                    ],
                    dont: [
                        "Never share your WhatsApp verification code.",
                        "Do not trust anyone claiming to be WhatsApp support through random messages."
                    ]
                },

                {
                    name: "▶️ YouTube / Google account hacked",
                    title: "Google & YouTube Recovery",
                    steps: [
                        "Use Google's official account recovery process.",
                        "Change your Google password.",
                        "Review recent security activity.",
                        "Remove unknown devices.",
                        "Check recovery email and phone number.",
                        "Enable two-step verification."
                    ],
                    dont: [
                        "Never share Google verification codes.",
                        "Do not trust unofficial recovery websites."
                    ]
                },

                {
                    name: "🔑 I cannot log in",
                    title: "Cannot Access Account",
                    steps: [
                        "Use the platform's official recovery page.",
                        "Try your recovery email or phone number.",
                        "Complete identity verification if requested.",
                        "Secure your email account first.",
                        "After recovery, change the password and enable 2FA."
                    ],
                    dont: [
                        "Never pay an unknown person for account recovery.",
                        "Never share recovery codes."
                    ]
                }
            ]
        },


        "Scam & Phishing": {
            title: "🎣 Scam & Phishing",
            description: "Check suspicious messages, links, websites and requests.",

            situations: [
                {
                    name: "💬 Someone sent me a suspicious link",
                    title: "Suspicious Link",
                    steps: [
                        "Do not open the link again.",
                        "Check the sender carefully.",
                        "Do not enter passwords, OTPs or card details.",
                        "Open the official website manually instead.",
                        "Block or report the sender when appropriate."
                    ],
                    dont: [
                        "Do not forward the suspicious link to others.",
                        "Never enter sensitive information into an unknown page."
                    ]
                },

                {
                    name: "📱 Someone sent a WhatsApp link",
                    title: "WhatsApp Link Safety",
                    steps: [
                        "Do not click the link if you do not trust the sender.",
                        "Check whether the website address is genuine.",
                        "Never enter OTP, UPI PIN or passwords.",
                        "If you clicked it, close the page immediately.",
                        "If information was entered, secure the affected account."
                    ],
                    dont: [
                        "Never share WhatsApp verification codes.",
                        "Never enter UPI PIN into a website."
                    ]
                },

                {
                    name: "🎣 I received a phishing message",
                    title: "Phishing Message",
                    steps: [
                        "Check the sender address or phone number.",
                        "Look for urgency, threats or unrealistic rewards.",
                        "Verify the request through the official app or website.",
                        "Do not download unexpected attachments.",
                        "Report the message if possible."
                    ],
                    dont: [
                        "Do not trust a message only because it has a company logo.",
                        "Do not reply with personal information."
                    ]
                },

                {
                    name: "🔑 I shared an OTP or password",
                    title: "Sensitive Information Shared",
                    steps: [
                        "Change the affected password immediately.",
                        "Sign out unknown sessions.",
                        "Enable two-factor authentication.",
                        "Contact your bank if financial information was involved.",
                        "Monitor the account for suspicious activity."
                    ],
                    dont: [
                        "Never share another OTP.",
                        "Do not trust anyone asking for another verification code."
                    ]
                }
            ]
        },


        "Phone Security": {
            title: "📱 Phone Security",
            description: "Protect your phone, apps, permissions and privacy.",

            situations: [
                {
                    name: "📦 Unknown app appeared",
                    title: "Unknown Application",
                    steps: [
                        "Check the app name and installation source.",
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
                    name: "🎤 Camera or microphone is suspicious",
                    title: "Camera & Microphone",
                    steps: [
                        "Review camera and microphone permissions.",
                        "Remove unnecessary permissions.",
                        "Uninstall suspicious applications.",
                        "Update your operating system.",
                        "Restart the device."
                    ],
                    dont: [
                        "Do not give unknown apps unnecessary permissions."
                    ]
                },

                {
                    name: "📍 Worried about location tracking",
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
            description: "Get immediate guidance when money or financial information is involved.",

            situations: [
                {
                    name: "💸 I lost money online",
                    title: "Possible Financial Fraud",
                    steps: [
                        "Contact your bank or payment provider immediately.",
                        "Save the transaction ID and receipt.",
                        "Secure the account used for payment.",
                        "Change compromised passwords.",
                        "Save screenshots and messages."
                    ],
                    dont: [
                        "Do not send more money.",
                        "Do not delete transaction evidence."
                    ]
                },

                {
                    name: "📲 UPI fraud happened",
                    title: "UPI Fraud",
                    steps: [
                        "Contact your bank immediately.",
                        "Report the transaction through your payment provider.",
                        "Save the transaction ID.",
                        "Secure your banking and email accounts.",
                        "Monitor your account for further activity."
                    ],
                    dont: [
                        "Never share your UPI PIN.",
                        "Remember that receiving money does not require entering your UPI PIN."
                    ]
                },

                {
                    name: "🏦 Banking information was shared",
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
                }
            ]
        },


        "Suspicious Activity": {
            title: "🕵️ Suspicious Activity",
            description: "Investigate unusual links, login pages, apps or device behaviour.",

            situations: [
                {
                    name: "🔗 I clicked a suspicious link",
                    title: "Suspicious Link Clicked",
                    steps: [
                        "Close the website.",
                        "Do not download anything.",
                        "Do not enter more information.",
                        "If you entered a password, change it immediately.",
                        "Run a trusted security scan if appropriate."
                    ],
                    dont: [
                        "Do not revisit the suspicious website.",
                        "Do not install software recommended by the page."
                    ]
                },

                {
                    name: "🦠 I think my phone has malware",
                    title: "Possible Malware",
                    steps: [
                        "Check recently installed apps.",
                        "Remove applications you do not recognise.",
                        "Update the operating system.",
                        "Run a trusted security scan.",
                        "Change important passwords from a trusted device."
                    ],
                    dont: [
                        "Do not install random antivirus apps from pop-ups."
                    ]
                },

                {
                    name: "🔑 Fake login page",
                    title: "Fake Login Page",
                    steps: [
                        "Close the page immediately.",
                        "Do not enter credentials.",
                        "Check the real website address manually.",
                        "If you entered a password, change it immediately.",
                        "Enable two-factor authentication."
                    ],
                    dont: [
                        "Do not reuse the password elsewhere.",
                        "Do not trust links received from unknown people."
                    ]
                }
            ]
        },


        "Emergency Help": {
            title: "🚨 Emergency Cyber Help",
            description: "Immediate steps for serious cyber incidents.",

            situations: [
                {
                    name: "🚨 Account is actively compromised",
                    title: "Active Account Compromise",
                    steps: [
                        "Secure your email account first.",
                        "Change compromised passwords.",
                        "Sign out unknown devices.",
                        "Enable two-factor authentication.",
                        "Save important evidence.",
                        "Contact the affected service through official support."
                    ],
                    dont: [
                        "Do not communicate with the suspected attacker.",
                        "Never share OTPs or recovery codes."
                    ]
                },

                {
                    name: "💳 Money is at risk",
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
       OPEN HELP MODAL
    ========================= */

    function openHelp(service) {

        const info = helpData[service];

        if (!info) {
            alert("This CyberCare service is not available yet.");
            return;
        }

        const oldModal = document.getElementById("cybercare-modal");

        if (oldModal) {
            oldModal.remove();
        }

        const overlay = document.createElement("div");

        overlay.id = "cybercare-modal";

        overlay.style.cssText = `
            position:fixed;
            inset:0;
            background:rgba(0,0,0,0.72);
            display:flex;
            align-items:center;
            justify-content:center;
            padding:20px;
            z-index:99999;
            overflow-y:auto;
        `;


        const modal = document.createElement("div");

        modal.style.cssText = `
            width:100%;
            max-width:680px;
            max-height:90vh;
            overflow-y:auto;
            background:white;
            color:#111827;
            border-radius:22px;
            padding:26px;
            position:relative;
            box-shadow:0 25px 70px rgba(0,0,0,0.4);
            font-family:Arial,sans-serif;
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
                        border-radius:13px;
                        background:#f5f8fc;
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
                    border:none;
                    background:transparent;
                    font-size:25px;
                    cursor:pointer;
                "
            >
                ✕
            </button>

            <div style="padding-right:35px;">

                <div style="
                    font-size:12px;
                    font-weight:bold;
                    letter-spacing:1px;
                    color:#2563eb;
                    margin-bottom:7px;
                ">
                    CYBERCARE HELP
                </div>

                <h2 style="margin:0 0 8px;">
                    ${info.title}
                </h2>

                <p style="color:#667085;margin-top:0;">
                    ${info.description}
                </p>

            </div>

            <h3>
                👇 What happened?
            </h3>

            <div>
                ${buttons}
            </div>

            <div id="cybercareResult" style="margin-top:20px;">

                <div style="
                    padding:20px;
                    background:#f5f7fa;
                    border-radius:15px;
                    text-align:center;
                    color:#667085;
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


    /* =========================
       SHOW RESULT
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

                <h4>
                    ✅ What you should do
                </h4>

                <ol>
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

                    <ul>
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

                    <p>
                        Keep screenshots, messages, emails,
                        receipts or transaction details when appropriate.
                    </p>

                </div>

                <p style="
                    margin-top:20px;
                    font-size:13px;
                    color:#667085;
                ">
                    🛡️ CyberCare provides general cybersecurity
                    safety guidance.
                </p>

            </div>
        `;


        result.scrollIntoView({
            behavior:"smooth",
            block:"nearest"
        });

    }


    /* =========================
       GET HELP BUTTONS
    ========================= */

    document
        .querySelectorAll(".help-btn")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const service =
                    button.getAttribute("data-service");

                openHelp(service);

            });

        });


    /* =========================
       EMERGENCY BUTTON
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
       DARK / LIGHT MODE
    ========================= */

    const themeButton =
        document.getElementById("themeBtn");

    if (themeButton) {

        themeButton.addEventListener(
            "click",
            function () {

                document.body.classList.toggle("dark-mode");

                const dark =
                    document.body.classList.contains("dark-mode");

                themeButton.textContent =
                    dark ? "☀️" : "🌙";

                localStorage.setItem(
                    "cybercare-theme",
                    dark ? "dark" : "light"
                );

            }
        );


        const savedTheme =
            localStorage.getItem("cybercare-theme");

        if (savedTheme === "dark") {

            document.body.classList.add("dark-mode");

            themeButton.textContent = "☀️";

        }

    }


    /* =========================
       3 DOT MENU
    ========================= */

    const menuButton =
        document.getElementById("menuBtn");

    const sideMenu =
        document.getElementById("sideMenu");

    const menuOverlay =
        document.getElementById("menuOverlay");

    const closeMenu =
        document.getElementById("closeMenu");


    function openMenu() {

        if (sideMenu) {
            sideMenu.classList.add("active");
        }

        if (menuOverlay) {
            menuOverlay.classList.add("active");
        }

    }


    function closeSideMenu() {

        if (sideMenu) {
            sideMenu.classList.remove("active");
        }

        if (menuOverlay) {
            menuOverlay.classList.remove("active");
        }

    }


    if (menuButton) {
        menuButton.addEventListener("click", openMenu);
    }

    if (closeMenu) {
        closeMenu.addEventListener("click", closeSideMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener("click", closeSideMenu);
    }


    /* =========================
       MENU NAVIGATION
    ========================= */

    document
        .querySelectorAll(".menu-item")
        .forEach(function (item) {

            item.addEventListener("click", function () {

                const target =
                    item.getAttribute("data-menu");

                closeSideMenu();

                if (target === "emergency") {

                    openHelp("Emergency Help");

                    return;
                }

                const section =
                    document.getElementById(target);

                if (section) {

                    setTimeout(function () {

                        section.scrollIntoView({
                            behavior:"smooth"
                        });

                    }, 200);

                }

            });

        });


    /* =========================
       LANGUAGE BUTTON
       ========================= */

    const languageButton =
        document.getElementById("languageBtn");

    const languageText =
        document.getElementById("languageText");


    if (languageButton) {

        languageButton.addEventListener(
            "click",
            function () {

                const current =
                    languageText.textContent;

                if (current === "EN") {

                    languageText.textContent = "বাংলা";

                    alert(
                        "বাংলা ভাষা শীঘ্রই যুক্ত করা হবে।"
                    );

                } else {

                    languageText.textContent = "EN";

                }

            }
        );

    }


    /* =========================
       LEARN BUTTON
    ========================= */

    const learnButton =
        document.getElementById("learnBtn");

    if (learnButton) {

        learnButton.addEventListener(
            "click",
            function () {

                alert(
                    "Cybersecurity learning section is coming soon."
                );

            }
        );

    }


    console.log(
        "🛡️ CyberCare loaded successfully."
    );

});
