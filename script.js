document.addEventListener("DOMContentLoaded", function () {

    const helpData = {
        "Hacked Account": {
            title: "🔐 Hacked Account",
            situations: [
                {
                    name: "🔓 I can still access my account",
                    title: "Secure your account",
                    steps: [
                        "Change your password immediately.",
                        "Sign out of unknown devices.",
                        "Enable two-factor authentication (2FA).",
                        "Check your recovery email and phone.",
                        "Review recent account activity."
                    ],
                    dont: [
                        "Never share your password, OTP or recovery codes."
                    ]
                },
                {
                    name: "🚫 I cannot log in",
                    title: "Recover your account",
                    steps: [
                        "Use the official account recovery page.",
                        "Try your recovery email or phone.",
                        "Complete identity verification.",
                        "Secure your recovery email.",
                        "Change your password after recovery."
                    ],
                    dont: [
                        "Do not pay strangers promising account recovery."
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
                        "Do not click links.",
                        "Check the sender carefully.",
                        "Look for urgency or threats.",
                        "Verify the request through the official website.",
                        "Report the suspicious sender."
                    ],
                    dont: [
                        "Never share passwords, OTPs or recovery codes."
                    ]
                },
                {
                    name: "🔗 I clicked a suspicious link",
                    title: "Suspicious link clicked",
                    steps: [
                        "Close the website.",
                        "Do not enter any more information.",
                        "Change your password if you entered it.",
                        "Enable 2FA.",
                        "Contact your bank if financial information was entered."
                    ],
                    dont: [
                        "Do not visit the suspicious website again."
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
                    title: "Camera & microphone privacy",
                    steps: [
                        "Review camera permissions.",
                        "Review microphone permissions.",
                        "Remove unnecessary permissions.",
                        "Uninstall suspicious apps.",
                        "Update your operating system."
                    ],
                    dont: [
                        "Do not give unknown apps unnecessary permissions."
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
                        "Do not reuse passwords.",
                        "Use a trusted password manager.",
                        "Change passwords that may be exposed."
                    ],
                    dont: [
                        "Never share your password."
                    ]
                },
                {
                    name: "🛡️ I don't have 2FA",
                    title: "Enable 2FA",
                    steps: [
                        "Open official security settings.",
                        "Enable two-factor authentication.",
                        "Use an authenticator app when available.",
                        "Store recovery codes safely."
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
                        "Contact your bank immediately.",
                        "Save the transaction ID.",
                        "Save the receipt.",
                        "Secure the account used for payment.",
                        "Save screenshots and messages."
                    ],
                    dont: [
                        "Do not send more money."
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
                        "Check recently installed apps.",
                        "Remove unknown apps.",
                        "Update the operating system.",
                        "Run a trusted security scan.",
                        "Review suspicious browser extensions."
                    ],
                    dont: [
                        "Do not install security software from pop-ups."
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
                        "Contact the affected service."
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
                        "Contact your bank immediately.",
                        "Secure your payment account.",
                        "Save transaction details.",
                        "Secure your email account.",
                        "Report the incident."
                    ],
                    dont: [
                        "Do not send additional money."
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
                        "Check sender addresses.",
                        "Avoid unexpected links.",
                        "Verify requests through official channels.",
                        "Never share authentication codes."
                    ],
                    dont: [
                        "Do not test suspicious links with real accounts."
                    ]
                }
            ]
        }
    };


    function openHelp(service) {

        const data = helpData[service];

        if (!data) {
            alert("Help service not found.");
            return;
        }

        const old = document.getElementById("cybercare-modal");

        if (old) {
            old.remove();
        }

        const overlay = document.createElement("div");

        overlay.id = "cybercare-modal";
        overlay.className = "help-overlay";

        const modal = document.createElement("div");

        modal.className = "help-modal";

        let buttons = "";

        data.situations.forEach(function (item, index) {

            buttons += `
                <button
                    class="situation-btn"
                    data-index="${index}"
                    type="button">
                    ${item.name}
                </button>
            `;

        });

        modal.innerHTML = `
            <button
                class="close-help"
                type="button">
                ✕
            </button>

            <div class="help-header">
                <span class="help-badge">
                    CYBERCARE HELP
                </span>

                <h2>${data.title}</h2>

                <p>
                    Choose what happened to get
                    step-by-step guidance.
                </p>
            </div>

            <div class="situation-section">

                <h3>👇 What happened?</h3>

                <div class="situation-grid">
                    ${buttons}
                </div>

            </div>

            <div id="cybercare-result" class="help-result">

                <div class="empty-help">
                    🛡️
                    <p>
                        Select an option above.
                    </p>
                </div>

            </div>
        `;

        overlay.appendChild(modal);

        document.body.appendChild(overlay);


        modal
            .querySelector(".close-help")
            .addEventListener("click", function () {
                overlay.remove();
            });


        overlay.addEventListener("click", function (event) {

            if (event.target === overlay) {
                overlay.remove();
            }

        });


        modal
            .querySelectorAll(".situation-btn")
            .forEach(function (button) {

                button.addEventListener("click", function () {

                    modal
                        .querySelectorAll(".situation-btn")
                        .forEach(function (btn) {
                            btn.classList.remove("active");
                        });

                    button.classList.add("active");

                    const index =
                        Number(button.dataset.index);

                    showResult(
                        modal,
                        data.situations[index]
                    );

                });

            });

    }


    function showResult(modal, item) {

        const result =
            modal.querySelector("#cybercare-result");

        const steps = item.steps
            .map(function (step) {
                return `<li>${step}</li>`;
            })
            .join("");

        const dont = item.dont
            .map(function (text) {
                return `<li>${text}</li>`;
            })
            .join("");

        result.innerHTML = `

            <div class="result-panel">

                <div class="result-title">
                    <span>⚡</span>
                    <h3>${item.title}</h3>
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

                <div class="help-section">

                    <h3>
                        📸 Save useful evidence
                    </h3>

                    <p>
                        Save screenshots, messages,
                        emails and transaction details
                        when appropriate.
                    </p>

                </div>

            </div>
        `;
    }


    document
        .querySelectorAll(".help-btn")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                openHelp(
                    button.dataset.service
                );

            });

        });


    const emergency =
        document.getElementById("emergencyBtn");

    if (emergency) {

        emergency.addEventListener("click", function () {

            openHelp("Emergency Help");

        });

    }


    const theme =
        document.getElementById("themeBtn");

    if (theme) {

        theme.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            theme.textContent =
                document.body.classList.contains("dark-mode")
                ? "☀️"
                : "🌙";

        });

    }

});
