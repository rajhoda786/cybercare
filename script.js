document.addEventListener("DOMContentLoaded", function () {

    const helpData = {

        "Hacked Account": {
            title: "🔐 Hacked Account",
            description: "Secure or recover an account that may have been compromised.",

            situations: [
                {
                    name: "🔓 I can still access my account",
                    title: "Secure your account",

                    steps: [
                        "Change your password immediately from the official website or app.",
                        "Sign out of unknown or suspicious devices.",
                        "Enable two-factor authentication (2FA).",
                        "Check your recovery email and phone number.",
                        "Review recent login and account activity.",
                        "Remove unknown connected apps or services."
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
                        "Use the service's official account recovery page.",
                        "Try your recovery email or phone number.",
                        "Complete the provider's identity verification process.",
                        "Secure your recovery email account.",
                        "After recovery, change your password and enable 2FA."
                    ],

                    dont: [
                        "Do not pay strangers promising guaranteed recovery.",
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
                        "Review all account settings after recovery."
                    ],

                    dont: [
                        "Do not trust strangers claiming to be support.",
                        "Never share verification codes."
                    ]
                },

                {
                    name: "💰 My account was used for fraud",
                    title: "Possible account misuse",

                    steps: [
                        "Secure the account immediately.",
                        "Change the password from a trusted device.",
                        "Sign out unknown sessions.",
                        "Enable 2FA.",
                        "Save screenshots and suspicious messages.",
                        "Contact the affected platform.",
                        "If money is involved, contact your bank or payment provider."
                    ],

                    dont: [
                        "Do not delete important evidence.",
                        "Do not send money to account-recovery scammers."
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
                        "Check the sender's email address or phone number carefully.",
                        "Look for urgency, threats, unusual spelling or unrealistic offers.",
                        "Verify the request through the organisation's official website or app.",
                        "Report or block the suspicious sender when appropriate."
                    ],

                    dont: [
                        "Never share passwords, OTPs or recovery codes.",
                        "Do not trust a message simply because it uses a company logo."
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
                        "If financial information was entered, contact your bank or payment provider."
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
                },

                {
                    name: "💳 I sent money",
                    title: "Possible payment scam",

                    steps: [
                        "Contact your bank or payment provider immediately.",
                        "Save the transaction ID and receipt.",
                        "Secure the account used for payment.",
                        "Save screenshots and relevant messages.",
                        "Report the incident through the appropriate official channel."
                    ],

                    dont: [
                        "Do not send more money.",
                        "Do not trust anyone promising guaranteed recovery."
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
                        "Check the app and where it was installed from.",
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
                        "Save relevant screenshots and messages."
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
                        "Contact the affected service through its official support."
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


    // ==========================================
    // FIND BUTTONS
    // ==========================================

    const helpButtons = document.querySelectorAll(".help-btn");

    const emergencyButton =
        document.getElementById("emergencyBtn");


    // ==========================================
    // OPEN HELP
    // ==========================================

    function openHelp(service) {

        const info = helpData[service];

        if (!info) {
            alert("CyberCare help service is unavailable.");
            return;
        }


        // Remove old modal

        const oldModal =
            document.getElementById("cybercare-modal");

        if (oldModal) {
            oldModal.remove();
        }


        // Create overlay

        const overlay =
            document.createElement("div");

        overlay.id =
            "cybercare-modal";

        overlay.className =
            "help-overlay";


        // Create modal

        const modal =
            document.createElement("div");

        modal.className =
            "help-modal";


        // Create situation buttons

        let situationsHTML = "";

        info.situations.forEach(
            function (item, index) {

                situationsHTML += `
                    <button
                        type="button"
                        class="situation-btn"
                        data-index="${index}">

                        ${item.name}

                    </button>
                `;
            }
        );


        // Modal HTML

        modal.innerHTML = `

            <button
                type="button"
                class="close-help"
                aria-label="Close">

                ✕

            </button>


            <div class="help-header">

                <span class="help-badge">
                    CYBERCARE HELP
                </span>

                <h2>
                    ${info.title}
                </h2>

                <p>
                    ${info.description}
                </p>

            </div>


            <div class="situation-section">

                <h3>
                    👇 What happened?
                </h3>

                <div class="situation-grid">

                    ${situationsHTML}

                </div>

            </div>


            <div
                class="help-result"
                id="cybercare-result">

                <div class="empty-help">

                    <div class="empty-icon">
                        🛡️
                    </div>

                    <p>
                        Select an option above
                        to get step-by-step help.
                    </p>

                </div>

            </div>

        `;


        overlay.appendChild(modal);

        document.body.appendChild(overlay);


        // ==========================================
        // CLOSE BUTTON
        // ==========================================

        const closeButton =
            modal.querySelector(".close-help");


        closeButton.addEventListener(
            "click",
            function () {

                overlay.remove();

            }
        );


        // ==========================================
        // CLICK OUTSIDE
        // ==========================================

        overlay.addEventListener(
            "click",
            function (event) {

                if (event.target === overlay) {
                    overlay.remove();
                }

            }
        );


        // ==========================================
        // SITUATION BUTTONS
        // ==========================================

        const situationButtons =
            modal.querySelectorAll(".situation-btn");


        situationButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        situationButtons.forEach(
                            function (btn) {

                                btn.classList.remove(
                                    "active"
                                );

                            }
                        );


                        button.classList.add("active");


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


    // ==========================================
    // SHOW RESULT
    // ==========================================

    function showResult(modal, situation) {

        const result =
            modal.querySelector("#cybercare-result");


        const stepsHTML =
            situation.steps.map(
                function (step) {

                    return `
                        <li>
                            ${step}
                        </li>
                    `;

                }
            ).join("");


        const dontHTML =
            situation.dont.map(
                function (item) {

                    return `
                        <li>
                            ${item}
                        </li>
                    `;

                }
            ).join("");


        result.innerHTML = `

            <div class="result-panel">

                <div class="result-title">

                    <span>
                        ⚡
                    </span>

                    <h3>
                        ${situation.title}
                    </h3>

                </div>


                <div class="help-section">

                    <h3>
                        ✅ What you should do
                    </h3>

                    <ol>
                        ${stepsHTML}
                    </ol>

                </div>


                <div class="help-section danger-section">

                    <h3>
                        ⚠️ What you should NOT do
                    </h3>

                    <ul>
                        ${dontHTML}
                    </ul>

                </div>


                <div class="help-section evidence-section">

                    <h3>
                        📸 Save useful evidence
                    </h3>

                    <p>
                        Keep screenshots, messages,
                        emails, receipts or transaction
                        details when appropriate.
                    </p>

                </div>


                <div class="help-footer">

                    🛡️ CyberCare provides general
                    cybersecurity safety guidance.

                </div>

            </div>

        `;


        // Scroll result into view

        result.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }


    // ==========================================
    // GET HELP BUTTONS
    // ==========================================

    helpButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const service =
                        button.dataset.service;

                    openHelp(service);

                }
            );

        }
    );


    // ==========================================
    // EMERGENCY HELP BUTTON
    // ==========================================

    if (emergencyButton) {

        emergencyButton.addEventListener(
            "click",
            function () {

                openHelp("Emergency Help");

            }
        );

    }

});
