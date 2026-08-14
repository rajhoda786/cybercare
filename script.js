// ============================================
// CYBERCARE — INTERACTIVE HELP SYSTEM
// ============================================


// 🌙 Theme Button

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    themeBtn.textContent =
        document.body.classList.contains("light-mode")
            ? "☀️"
            : "🌙";

});


// ============================================
// SERVICE DATA
// ============================================

const serviceData = {

    "Hacked Account": {

        title: "🔐 Hacked Account",

        intro:
            "Tell CyberCare what happened so we can show you the most relevant safety steps.",

        situations: [

            {
                name: "🔓 I can still access my account",

                title: "You still have access",

                steps: [
                    "Change your password immediately using the official website or app.",
                    "Sign out of unfamiliar devices and active sessions.",
                    "Enable two-factor authentication (2FA).",
                    "Check your recovery email address and phone number.",
                    "Review recent account activity.",
                    "Remove unknown connected apps or services."
                ],

                dont: [
                    "Never share your password or OTP.",
                    "Do not use suspicious recovery links sent by strangers."
                ]
            },

            {
                name: "🚫 I cannot log in",

                title: "You cannot access the account",

                steps: [
                    "Use the service's official account recovery page.",
                    "Try the recovery email or phone number associated with the account.",
                    "Follow the provider's identity verification process.",
                    "Secure your recovery email account first if necessary.",
                    "After recovery, change the password and enable 2FA."
                ],

                dont: [
                    "Do not pay strangers promising guaranteed account recovery.",
                    "Never give recovery codes to another person."
                ]
            },

            {
                name: "📧 My email or phone was changed",

                title: "Recovery information was changed",

                steps: [
                    "Check your original email account for security alerts.",
                    "Use the official account recovery process.",
                    "Look for an option to reverse an unauthorized change.",
                    "Secure your email account immediately.",
                    "After recovery, review all account settings."
                ],

                dont: [
                    "Do not trust people contacting you claiming to be account support.",
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
                    "Do not delete important evidence before saving it.",
                    "Do not send money to someone claiming they can recover the account."
                ]
            }

        ]
    },


    // ========================================
    // SCAM
    // ========================================

    "Scam & Phishing": {

        title: "🎣 Scam & Phishing",

        intro:
            "Scammers often create urgency or fear. Choose what happened to you.",

        situations: [

            {
                name: "📩 I received a suspicious message",

                title: "Suspicious message",

                steps: [
                    "Do not click links or download attachments.",
                    "Check the sender's address or phone number carefully.",
                    "Look for unusual spelling, threats or unrealistic offers.",
                    "Verify the request through the organisation's official website.",
                    "Report or block the suspicious sender if appropriate."
                ],

                dont: [
                    "Do not reply with passwords, OTPs or personal information.",
                    "Do not trust a message simply because it uses a company logo."
                ]
            },

            {
                name: "🔗 I clicked a suspicious link",

                title: "You clicked a suspicious link",

                steps: [
                    "Do not enter any more information on the website.",
                    "Close the suspicious page.",
                    "If you entered a password, change it immediately from the official website.",
                    "Enable 2FA on the affected account.",
                    "If financial information was entered, contact your bank or payment provider.",
                    "Run a security check if a file or application was downloaded."
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
                    "Contact your bank or service provider if financial information was involved.",
                    "Monitor the account for suspicious activity."
                ],

                dont: [
                    "Never share another OTP or verification code.",
                    "Do not trust anyone who asks for another code to 'secure' your account."
                ]
            },

            {
                name: "💳 I sent money",

                title: "Money was sent to a suspected scammer",

                steps: [
                    "Contact your bank or payment provider immediately.",
                    "Ask what options are available to secure the payment/account.",
                    "Save the transaction ID and payment details.",
                    "Save messages, phone numbers and screenshots.",
                    "Secure any account that may have been compromised.",
                    "Report the incident through the appropriate official channel."
                ],

                dont: [
                    "Do not send additional money.",
                    "Do not trust anyone promising guaranteed recovery."
                ]
            }

        ]
    },


    // ========================================
    // PHONE PRIVACY
    // ========================================

    "Phone Privacy": {

        title: "📱 Phone Privacy",

        intro:
            "Choose the situation that best matches your phone problem.",

        situations: [

            {
                name: "📦 I found an unknown app",

                title: "Unknown application",

                steps: [
                    "Check the app's name and installation source.",
                    "Review its permissions.",
                    "If you do not recognize or need it, uninstall it.",
                    "Update your phone.",
                    "Run a security scan using a trusted security tool."
                ],

                dont: [
                    "Do not install another unknown 'cleaner' app recommended by a stranger."
                ]
            },

            {
                name: "🎤 Camera or microphone seems suspicious",

                title: "Camera or microphone privacy",

                steps: [
                    "Review which apps have camera and microphone permissions.",
                    "Remove permissions that are unnecessary.",
                    "Uninstall suspicious applications.",
                    "Update the operating system.",
                    "Restart the device after removing suspicious software."
                ],

                dont: [
                    "Do not give camera or microphone access to unknown apps."
                ]
            },

            {
                name: "📍 I am worried about location tracking",

                title: "Location privacy",

                steps: [
                    "Review which apps can access your location.",
                    "Disable unnecessary location permissions.",
                    "Check account location-sharing settings.",
                    "Review unfamiliar apps and connected services.",
                    "Use the most restrictive permission that still lets an app work."
                ],

                dont: [
                    "Do not leave location sharing enabled for services you do not recognize."
                ]
            }

        ]
    },


    // ========================================
    // ACCOUNT SECURITY
    // ========================================

    "Account Security": {

        title: "🔒 Account Security",

        intro:
            "Improve your account protection with these practical steps.",

        situations: [

            {
                name: "🔑 My password is weak or reused",

                title: "Password security",

                steps: [
                    "Create a unique password for the account.",
                    "Avoid using the same password on multiple services.",
                    "Consider using a reputable password manager.",
                    "Change passwords that may have been exposed."
                ],

                dont: [
                    "Never share your password with anyone.",
                    "Do not use obvious personal information in passwords."
                ]
            },

            {
                name: "🛡️ I don't have 2FA",

                title: "Enable two-factor authentication",

                steps: [
                    "Open the account's official security settings.",
                    "Enable two-factor authentication.",
                    "Prefer an authenticator app or passkey when supported.",
                    "Store recovery codes somewhere secure."
                ],

                dont: [
                    "Never send recovery codes to another person."
                ]
            },

            {
                name: "💻 I see an unknown device",

                title: "Unknown login",

                steps: [
                    "Review the device or session details.",
                    "Sign out the unfamiliar session.",
                    "Change your password if the login was unauthorized.",
                    "Enable 2FA.",
                    "Review recent security activity."
                ],

                dont: [
                    "Do not ignore repeated unfamiliar login alerts."
                ]
            }

        ]
    },


    // ========================================
    // ONLINE FRAUD
    // ========================================

    "Online Fraud": {

        title: "💳 Online Fraud",

        intro:
            "If money or financial information is involved, acting quickly matters.",

        situations: [

            {
                name: "💸 I lost money",

                title: "Money may have been lost",

                steps: [
                    "Contact your bank or payment provider immediately.",
                    "Tell them the transaction may be fraudulent.",
                    "Save the transaction ID and receipt.",
                    "Secure the account used for payment.",
                    "Change compromised passwords.",
                    "Keep screenshots and communication as evidence.",
                    "Use the appropriate official reporting channel."
                ],

                dont: [
                    "Do not send more money to recover the first payment.",
                    "Do not delete transaction evidence."
                ]
            },

            {
                name: "🏦 My banking information was shared",

                title: "Financial information exposed",

                steps: [
                    "Contact your bank immediately.",
                    "Ask what security measures should be taken.",
                    "Monitor transactions.",
                    "Change affected account credentials if necessary.",
                    "Secure your email and phone account."
                ],

                dont: [
                    "Never share another OTP or PIN.",
                    "Do not trust unsolicited callers claiming to be bank staff."
                ]
            }

        ]
    },


    // ========================================
    // MALWARE
    // ========================================

    "Malware": {

        title: "🦠 Malware & Suspicious Apps",

        intro:
            "Choose the symptom that best describes your device.",

        situations: [

            {
                name: "📱 My device is behaving strangely",

                title: "Unusual device behaviour",

                steps: [
                    "Check recently installed applications.",
                    "Remove applications you do not recognize.",
                    "Update the operating system.",
                    "Run a scan using trusted security software.",
                    "Review browser extensions.",
                    "Change important passwords from a trusted device if compromise is suspected."
                ],

                dont: [
                    "Do not install random security software from pop-up advertisements."
                ]
            },

            {
                name: "⬇️ I installed a suspicious app",

                title: "Suspicious application",

                steps: [
                    "Disconnect the device from the internet if active compromise is suspected.",
                    "Uninstall the suspicious application if possible.",
                    "Run a trusted security scan.",
                    "Update the device.",
                    "Change important passwords from a trusted device."
                ],

                dont: [
                    "Do not enter passwords into suspicious applications.",
                    "Do not continue using a suspicious app just because it appears harmless."
                ]
            }

        ]
    },


    // ========================================
    // EMERGENCY
    // ========================================

    "Emergency Help": {

        title: "🚨 Emergency Cyber Help",

        intro:
            "If you are dealing with an active cyber incident, start here.",

        situations: [

            {
                name: "🚨 My account is actively compromised",

                title: "Active account compromise",

                steps: [
                    "Secure your email account first.",
                    "Change compromised passwords.",
                    "Sign out unknown devices.",
                    "Enable 2FA.",
                    "Save evidence.",
                    "Contact the affected service through its official support channel."
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
                    "Ask them how to secure the account or payment method.",
                    "Save transaction details.",
                    "Secure the email account connected to financial services.",
                    "Report the incident through the appropriate official channel."
                ],

                dont: [
                    "Do not send additional money.",
                    "Do not trust recovery scammers."
                ]
            }

        ]
    },


    // ========================================
    // LEARNING
    // ========================================

    "Learn Cybersecurity": {

        title: "🎓 Learn Cybersecurity",

        intro:
            "Build strong cybersecurity habits one topic at a time.",

        situations: [

            {
                name: "🎣 Learn about phishing",

                title: "Phishing basics",

                steps: [
                    "Learn how scammers imitate trusted organisations.",
                    "Check sender addresses carefully.",
                    "Avoid unexpected links and attachments.",
                    "Verify requests through official channels.",
                    "Never share authentication codes."
                ],

                dont: [
                    "Do not test suspicious links on real accounts."
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
                    "Keep your devices and applications updated."
                ],

                dont: [
                    "Do not reuse passwords across important accounts."
                ]
            }

        ]
    }

};


// ============================================
// OPEN SERVICE
// ============================================

const helpButtons = document.querySelectorAll(".help-btn");

helpButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const service = button.dataset.service;

        const data = serviceData[service];

        if (!data) return;

        showSituationPanel(data);

    });

});


// ============================================
// SITUATION PANEL
// ============================================

function showSituationPanel(data) {

    const oldPanel =
        document.getElementById("cybercare-help-panel");

    if (oldPanel) {
        oldPanel.remove();
    }


    const overlay =
        document.createElement("div");

    overlay.id =
        "cybercare-help-panel";

    overlay.className =
        "help-overlay";


    const buttons =
        data.situations
            .map((item, index) => {

                return `
                    <button
                        class="situation-btn"
                        data-index="${index}">

                        ${item.name}

                    </button>
                `;

            })
            .join("");


    overlay.innerHTML = `

        <div class="help-modal">

            <button
                class="close-help"
                aria-label="Close">

                ✕

            </button>


            <div class="help-header">

                <span class="help-badge">
                    CYBERCARE HELP
                </span>

                <h2>
                    ${data.title}
                </h2>

                <p>
                    ${data.intro}
                </p>

            </div>


            <div class="situation-section">

                <h3>
                    👇 What happened?
                </h3>

                <div class="situation-grid">

                    ${buttons}

                </div>

            </div>


            <div id="help-result">

                <div class="empty-help">

                    🛡️

                    <p>
                        Select the situation above
                        to get step-by-step guidance.
                    </p>

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(overlay);


    // Close button

    overlay
        .querySelector(".close-help")
        .addEventListener("click", () => {

            overlay.remove();

        });


    // Click outside

    overlay.addEventListener("click", (event) => {

        if (event.target === overlay) {

            overlay.remove();

        }

    });


    // Situation buttons

    overlay
        .querySelectorAll(".situation-btn")
        .forEach((button) => {

            button.addEventListener("click", () => {

                const index =
                    Number(button.dataset.index);

                const situation =
                    data.situations[index];

                showSituationResult(
                    overlay,
                    situation
                );

            });

        });

}


// ============================================
// SHOW SITUATION RESULT
// ============================================

function showSituationResult(
    overlay,
    situation
) {

    const result =
        overlay.querySelector("#help-result");


    const steps =
        situation.steps
            .map(step => `<li>${step}</li>`)
            .join("");


    const dont =
        situation.dont
            .map(item => `<li>${item}</li>`)
            .join("");


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
                    ⚡ Do this first
                </h3>

                <p>
                    Start with the first step below
                    and work through the list carefully.
                </p>

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
                    messages, emails, transaction details
                    or security alerts when appropriate.
                </p>

            </div>


            <div class="help-footer">

                🛡️ CyberCare provides general
                cybersecurity safety guidance.

                For serious incidents, contact the
                appropriate official service.

            </div>

        </div>

    `;


    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}
