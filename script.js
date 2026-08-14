document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // THEME BUTTON
    // ================================

    const themeBtn =
        document.getElementById("themeBtn");

    if (themeBtn) {

        themeBtn.addEventListener("click", function () {

            document.body.classList.toggle(
                "light-mode"
            );

            themeBtn.textContent =
                document.body.classList.contains(
                    "light-mode"
                )
                    ? "☀️"
                    : "🌙";

        });

    }


    // ================================
    // HELP DATA
    // ================================

    const data = {

        "Hacked Account": {

            title: "🔐 Hacked Account",

            situations: [

                {
                    name: "🔓 I can still access my account",

                    title: "Secure your account",

                    steps: [
                        "Change your password immediately.",
                        "Sign out unknown devices.",
                        "Enable two-factor authentication.",
                        "Check recovery email and phone number.",
                        "Review recent account activity."
                    ],

                    dont: [
                        "Never share your password or OTP.",
                        "Do not use suspicious recovery links."
                    ]
                },

                {
                    name: "🚫 I cannot log in",

                    title: "Recover your account",

                    steps: [
                        "Use the official account recovery page.",
                        "Try your recovery email or phone number.",
                        "Complete the provider's verification process.",
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
                        "Use the official recovery process.",
                        "Try to reverse the unauthorized change.",
                        "Secure your email account.",
                        "Review account settings after recovery."
                    ],

                    dont: [
                        "Do not trust random people claiming to be support.",
                        "Never share verification codes."
                    ]
                }

            ]
        },


        "Scam & Phishing": {

            title: "🎣 Scam & Phishing",

            situations: [

                {
                    name: "📩 I received a suspicious message",

                    title: "Suspicious message",

                    steps: [
                        "Do not click suspicious links.",
                        "Check the sender's address or number.",
                        "Look for urgency, threats or unrealistic offers.",
                        "Verify the request through the organisation's official website.",
                        "Report or block the sender if appropriate."
                    ],

                    dont: [
                        "Do not share passwords or OTPs.",
                        "Do not trust a message just because it has a company logo."
                    ]
                },

                {
                    name: "🔗 I clicked a suspicious link",

                    title: "You clicked a suspicious link",

                    steps: [
                        "Close the suspicious page.",
                        "Do not enter any further information.",
                        "If you entered a password, change it immediately.",
                        "Enable 2FA.",
                        "If financial information was entered, contact your bank."
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
                        "Sign out unknown sessions.",
                        "Enable 2FA.",
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
                        "Save the transaction ID.",
                        "Save screenshots and messages.",
                        "Secure the account used for payment.",
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

            situations: [

                {
                    name: "📦 I found an unknown app",

                    title: "Unknown application",

                    steps: [
                        "Check the app and its installation source.",
                        "Review its permissions.",
                        "Uninstall it if you do not recognize it.",
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
                        "Uninstall suspicious apps.",
                        "Update the operating system.",
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

            situations: [

                {
                    name: "📱 My device is behaving strangely",

                    title: "Unusual device behaviour",

                    steps: [
                        "Check recently installed applications.",
                        "Remove apps you do not recognize.",
                        "Update the operating system.",
                        "Run a trusted security scan.",
                        "Review browser extensions."
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

            situations: [

                {
                    name: "🚨 My account is actively compromised",

                    title: "Active compromise",

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
                        "Enable 2FA.",
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


    // ================================
    // OPEN HELP
    // ================================

    const buttons =
        document.querySelectorAll(".help-btn");


    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const service =
                button.getAttribute("data-service");

            openHelp(service);

        });

    });


    // ================================
    // EMERGENCY
    // ================================

    const emergency =
        document.getElementById("emergencyBtn");


    if (emergency) {

        emergency.addEventListener(
            "click",
            function () {

                openHelp("Emergency Help");

            }
        );

    }


    // ================================
    // OPEN HELP FUNCTION
    // ================================

    function openHelp(service) {

        const info = data[service];

        if (!info) {
            alert("CyberCare help service is unavailable.");
            return;
        }


        const old =
            document.getElementById(
                "cybercare-modal"
            );

        if (old) {
            old.remove();
        }


        const modal =
            document.createElement("div");

        modal.id =
            "cybercare-modal";

        modal.className =
            "help-overlay";


        let choices = "";


        info.situations.forEach(
            function (item, index) {

                choices += `
                    <button
                        class="situation-btn"
                        data-index="${index}">

                        ${item.name}

                    </button>
                `;

            }
        );


        modal.innerHTML = `

            <div class="help-modal">

                <button
                    class="close-help">

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
                        Choose your situation
                        and get step-by-step guidance.
                    </p>

                </div>


                <div class="situation-section">

                    <h3>
                        👇 What happened?
                    </h3>

                    <div class="situation-grid">

                        ${choices}

                    </div>

                </div>


                <div id="cybercare-result">

                    <div class="empty-help">

                        🛡️

                        <p>
                            Select an option above
                            to get help.
                        </p>

                    </div>

                </div>

            </div>

        `;


        document.body.appendChild(modal);


        // CLOSE

        modal
            .querySelector(".close-help")
            .addEventListener(
                "click",
                function () {

                    modal.remove();

                }
            );


        // OUTSIDE CLICK

        modal.addEventListener(
            "click",
            function (event) {

                if (event.target === modal) {
                    modal.remove();
                }

            }
        );


        // SITUATION BUTTONS

        modal
            .querySelectorAll(".situation-btn")
            .forEach(
                function (btn) {

                    btn.addEventListener(
                        "click",
                        function () {

                            modal
                                .querySelectorAll(
                                    ".situation-btn"
                                )
                                .forEach(
                                    function (b) {
                                        b.classList.remove(
                                            "active"
                                        );
                                    }
                                );


                            btn.classList.add(
                                "active"
                            );


                            const index =
                                Number(
                                    btn.getAttribute(
                                        "data-index"
                                    )
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


    // ================================
    // SHOW RESULT
    // ================================

    function showResult(
        modal,
        situation
    ) {

        const result =
            modal.querySelector(
                "#cybercare-result"
            );


        let steps = "";

        situation.steps.forEach(
            function (step) {

                steps += `
                    <li>
                        ${step}
                    </li>
                `;

            }
        );


        let dont = "";

        situation.dont.forEach(
            function (item) {

                dont += `
                    <li>
                        ${item}
                    </li>
                `;

            }
        );


        result.innerHTML = `

            <div class="result-panel">

                <div class="result-title">

                    <span>⚡</span>

                    <h3>
                        ${situation.title}
                    </h3>

                </div>


                <div class="help-section">

                    <h3>
                        ✅ What you should do
                    </h3>

                    <ol>
                        ${steps}
                    </ol>

                </div>


                <div class="help-section danger-section">

                    <h3>
                        ⚠️ What you should NOT do
                    </h3>

                    <ul>
                        ${dont}
                    </ul>

                </div>


                <div class="help-section evidence-section">

                    <h3>
                        📸 Save useful evidence
                    </h3>

                    <p>
                        Keep relevant screenshots,
                        messages, emails or transaction
                        details when appropriate.
                    </p>

                </div>


                <div class="help-footer">

                    🛡️ CyberCare provides general
                    cybersecurity safety guidance.

                </div>

            </div>

        `;

    }

});            "Choose what happened to your account and get step-by-step guidance.",

        situations: [

            {
                name: "🔓 I can still access my account",

                title: "You still have access",

                steps: [
                    "Change your password immediately from the official website or app.",
                    "Sign out of unfamiliar devices and active sessions.",
                    "Enable two-factor authentication (2FA).",
                    "Check your recovery email and phone number.",
                    "Review recent account activity.",
                    "Remove unknown connected apps or services."
                ],

                dont: [
                    "Never share your password or OTP.",
                    "Do not use suspicious recovery links."
                ]
            },

            {
                name: "🚫 I cannot log in",

                title: "You cannot access the account",

                steps: [
                    "Use the service's official account recovery page.",
                    "Try the recovery email or phone number connected to the account.",
                    "Follow the provider's identity verification process.",
                    "Secure your recovery email account.",
                    "After recovery, change the password and enable 2FA."
                ],

                dont: [
                    "Do not pay strangers promising guaranteed recovery.",
                    "Never give recovery codes to another person."
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
                    "After recovery, review all account settings."
                ],

                dont: [
                    "Do not trust strangers claiming to be account support.",
                    "Never share verification codes."
                ]
            },

            {
                name: "💰 My account was used for fraud",

                title: "Your account may be involved in fraud",

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


    // ========================================
    // SCAM & PHISHING
    // ========================================

    "Scam & Phishing": {

        title: "🎣 Scam & Phishing",

        intro:
            "Choose what happened and CyberCare will show you what to do next.",

        situations: [

            {
                name: "📩 I received a suspicious message",

                title: "Suspicious message",

                steps: [
                    "Do not click links or download attachments.",
                    "Check the sender's email address or phone number.",
                    "Look for unusual spelling, threats or unrealistic offers.",
                    "Verify the request through the organisation's official website or app.",
                    "Report or block the suspicious sender when
