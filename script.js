document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // CYBERCARE HELP DATA
    // ==============================

    const helpData = {

        "Hacked Account": {
            title: "🔐 Hacked Account",
            description: "Secure or recover an account that may have been compromised.",

            situations: [
                {
                    name: "🔓 I can still access my account",
                    title: "Secure your account",

                    steps: [
                        "Change your password immediately.",
                        "Sign out of unknown or suspicious devices.",
                        "Enable two-factor authentication (2FA).",
                        "Check your recovery email and phone number.",
                        "Review recent login activity.",
                        "Remove unknown connected apps."
                    ],

                    dont: [
                        "Never share your password, OTP or recovery codes.",
                        "Do not use recovery links sent by strangers."
                    ]
                },

                {
                    name: "🚫 I cannot log in",
                    title: "Recover your account",

                    steps: [
                        "Use the official account recovery page.",
                        "Try your recovery email or phone number.",
                        "Complete the provider's identity verification.",
                        "Secure your recovery email account.",
                        "After recovery, change your password and enable 2FA."
                    ],

                    dont: [
                        "Do not pay strangers promising account recovery.",
                        "Never share recovery codes."
                    ]
                },

                {
                    name: "📧 My email or phone was changed",
                    title: "Recovery information was changed",

                    steps: [
                        "Check your original email for security alerts.",
                        "Use the official account recovery process.",
                        "Look for an option to reverse an unauthorized change.",
                        "Secure your email account.",
                        "Review account settings after recovery."
                    ],

                    dont: [
                        "Do not trust strangers claiming to be support.",
                        "Never share verification codes."
                    ]
                }
            ]
        },


        "Scam & Phishing": {
            title: "🎣 Scam & Phishing",
            description: "Identify suspicious messages, links and payment requests.",

            situations: [
                {
                    name: "📩 I received a suspicious message",
                    title: "Suspicious message",

                    steps: [
                        "Do not click links or download attachments.",
                        "Check the sender carefully.",
                        "Look for urgency, threats or unrealistic offers.",
                        "Verify the request through the official website or app.",
                        "Report or block the sender when appropriate."
                    ],

                    dont: [
                        "Never share passwords, OTPs or recovery codes.",
                        "Do not trust a message only because it uses a company logo."
                    ]
                },

                {
                    name: "🔗 I clicked a suspicious link",
                    title: "You clicked a suspicious link",

                    steps: [
                        "Close the suspicious page.",
                        "Do not enter any more information.",
                        "If you entered a password, change it immediately.",
                        "Enable two-factor authentication.",
                        "Contact your bank if financial information was entered."
                    ],

                    dont: [
                        "Do not return to the suspicious website.",
                        "Do not download anything it recommends."
                    ]
                },

                {
                    name: "🔑 I shared an OTP or password",
                    title: "Sensitive information was shared",

                    steps: [
                        "Change the affected password immediately.",
                        "Sign out of unknown sessions.",
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


        "Phone Privacy": {
            title: "📱 Phone Privacy",
            description: "Protect your device, apps, camera, microphone and location.",

            situations: [
                {
                    name: "📦 I found an unknown app",
                    title: "Unknown application",

                    steps: [
                        "Check where the app was installed from.",
                        "Review the app's permissions.",
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
                    title: "Camera & microphone privacy",

                    steps: [
                        "Review camera and microphone permissions.",
                        "Remove unnecessary permissions.",
                        "Uninstall suspicious applications.",
                        "Update your operating system.",
                        "Restart your device."
                    ],

                    dont: [
                        "Do not give unknown apps unnecessary permissions."
                    ]
                },

                {
                    name: "📍 I am worried about location tracking",
                    title: "Location privacy",

                    steps: [
                        "Review location permissions.",
                        "Disable unnecessary location access.",
                        "Check account location-sharing settings.",
                        "Review unfamiliar apps and services."
                    ],

                    dont: [
                        "Do not leave location sharing enabled for unknown services."
                    ]
                }
            ]
        },


        "Account Security": {
            title: "🔒 Account Security",
            description: "Improve passwords, 2FA and account protection.",

            situations: [
                {
                    name: "🔑 My password is weak or reused",
                    title: "Password security",

                    steps: [
                        "Create a unique password.",
                        "Do not reuse it on other accounts.",
                        "Use a reputable password manager if useful.",
                        "Change passwords that may have been exposed."
                    ],

                    dont: [
                        "Never share your password.",
                        "Avoid obvious personal information."
                    ]
                },

                {
                    name: "🛡️ I don't have 2FA",
                    title: "Enable 2FA",

                    steps: [
                        "Open the official account security settings.",
                        "Enable two-factor authentication.",
                        "Prefer an authenticator app or passkey when available.",
                        "Store recovery codes securely."
                    ],

                    dont: [
                        "Never send recovery codes to anyone."
                    ]
                }
            ]
        },


        "Online Fraud": {
            title: "💳 Online Fraud",
            description: "Get guidance if money or financial information may be at risk.",

            situations: [
                {
                    name: "💸 I lost money",
                    title: "Possible financial fraud",

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
                    name: "🏦 My banking information was shared",
                    title: "Financial information exposed",

                    steps: [
                        "Contact your bank immediately.",
                        "Ask what security measures should be taken.",
                        "Monitor your transactions.",
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


        "Malware": {
            title: "🦠 Malware",
            description: "Steps for suspicious apps, files and unusual device behaviour.",

            situations: [
                {
                    name: "📱 My device is behaving strangely",
                    title: "Unusual device behaviour",

                    steps: [
                        "Check recently installed applications.",
                        "Remove apps you do not recognise.",
                        "Update the operating system.",
                        "Run a trusted security scan.",
                        "Review suspicious browser extensions."
                    ],

                    dont: [
                        "Do not install random security software from pop-ups."
                    ]
                },

                {
                    name: "⬇️ I installed a suspicious app",
                    title: "Suspicious application",

                    steps: [
                        "Disconnect from the internet if active compromise is suspected.",
                        "Uninstall the suspicious application if possible.",
                        "Run a trusted security scan.",
                        "Update your device.",
                        "Change important passwords from a trusted device."
                    ],

                    dont: [
                        "Do not enter passwords into suspicious applications."
                    ]
                }
            ]
        },


        "Emergency Help": {
            title: "🚨 Emergency Cyber Help",
            description: "Immediate steps for serious cybersecurity incidents.",

            situations: [
                {
                    name: "🚨 My account is actively compromised",
                    title: "Active compromise",

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
                    name: "💳 My money is at risk",
                    title: "Financial emergency",

                    steps: [
                        "Contact your bank or payment provider immediately.",
                        "Ask how to secure your account.",
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
        },


        "Learn Cybersecurity": {
            title: "🎓 Learn Cybersecurity",
            description: "Learn simple habits that can improve your online safety.",

            situations: [
                {
                    name: "🎣 Learn about phishing",
                    title: "Phishing basics",

                    steps: [
                        "Check sender addresses carefully.",
                        "Avoid unexpected links and attachments.",
                        "Verify requests through official channels.",
                        "Never share authentication codes."
                    ],

                    dont: [
                        "Do not test suspicious links using real accounts."
                    ]
                },

                {
                    name: "🔐 Learn account protection",
                    title: "Account security basics",

                    steps: [
                        "Use unique passwords.",
                        "Enable two-factor authentication.",
                        "Review active sessions.",
                        "Keep recovery information updated.",
                        "Keep devices and applications updated."
                    ],

                    dont: [
                        "Do not reuse passwords across important accounts."
                    ]
                }
            ]
        }

    };


    // ==============================
    // OPEN HELP MODAL
    // ==============================

    function openHelp(service) {

        const info = helpData[service];

        if (!info) {
            alert("CyberCare help service is unavailable.");
            return;
        }


        // Remove existing modal

        const existing =
            document.getElementById("cybercare-modal");

        if (existing) {
            existing.remove();
        }


        // Create overlay

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


        // Create modal

        const modal =
            document.createElement("div");

        modal.style.cssText = `
            width: 100%;
            max-width: 700px;
            max-height: 90vh;
            overflow-y: auto;
            background: #ffffff;
            color: #111111;
            border-radius: 20px;
            padding: 25px;
            position: relative;
            box-sizing: border-box;
            box-shadow: 0 20px 60px rgba(0,0,0,0.4);
            font-family: Arial, sans-serif;
        `;


        // Situation buttons

        let buttons = "";

        info.situations.forEach(function (item, index) {

            buttons += `
                <button
                    type="button"
                    class="cyber-situation"
                    data-index="${index}"
                    style="
                        width:100%;
                        padding:14px;
                        margin:7px 0;
                        border:1px solid #ddd;
                        border-radius:12px;
                        background:#f5f7fa;
                        color:#111;
                        font-size:15px;
                        text-align:left;
                        cursor:pointer;
                    "
                >
                    ${item.name}
                </button>
            `;

        });


        // Modal content

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
                    margin-bottom:8px;
                ">
                    CYBERCARE HELP
                </div>

                <h2 style="margin:0 0 8px 0;">
                    ${info.title}
                </h2>

                <p style="margin-top:0;color:#555;">
                    ${info.description}
                </p>

            </div>

            <h3>
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
                    background:#f5f7fa;
                    border-radius:15px;
                    text-align:center;
                    color:#666;
                ">
                    🛡️ Select an option above to get step-by-step help.
                </div>
            </div>
        `;


        overlay.appendChild(modal);

        document.body.appendChild(overlay);


        // Close button

        document
            .getElementById("closeCyberCare")
            .addEventListener("click", function () {
                overlay.remove();
            });


        // Click outside

        overlay.addEventListener("click", function (event) {

            if (event.target === overlay) {
                overlay.remove();
            }

        });


        // Situation buttons

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


    // ==============================
    // SHOW RESULT
    // ==============================

    function showResult(modal, situation) {

        const result =
            modal.querySelector("#cybercareResult");


        const steps =
            situation.steps
                .map(function (step) {
                    return `<li style="margin-bottom:10px;">${step}</li>`;
                })
                .join("");


        const dont =
            situation.dont
                .map(function (item) {
                    return `<li style="margin-bottom:10px;">${item}</li>`;
                })
                .join("");


        result.innerHTML = `

            <div style="
                background:#f8fafc;
                border-radius:15px;
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
                        Keep screenshots, messages,
                        emails, receipts or transaction
                        details when appropriate.
                    </p>

                </div>


                <p style="
                    margin-top:20px;
                    font-size:13px;
                    color:#666;
                ">
                    🛡️ CyberCare provides general
                    cybersecurity safety guidance.
                </p>

            </div>
        `;


        result.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }


    // ==============================
    // GET HELP BUTTONS
    // ==============================

    const helpButtons =
        document.querySelectorAll(".help-btn");


    helpButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const service =
                button.getAttribute("data-service");

            openHelp(service);

        });

    });


    // ==============================
    // EMERGENCY BUTTON
    // ==============================

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


    // ==============================
    // DARK MODE
    // ==============================

    const themeButton =
        document.getElementById("themeBtn");


    if (themeButton) {

        themeButton.addEventListener(
            "click",
            function () {

                document.body.classList.toggle("dark-mode");

                if (
                    document.body.classList.contains("dark-mode")
                ) {

                    themeButton.textContent = "☀️";

                } else {

                    themeButton.textContent = "🌙";

                }

            }
        );

    }


    // ==============================
    // TEST
    // ==============================

    console.log("CyberCare JavaScript loaded successfully.");

});
