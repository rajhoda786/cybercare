// ===============================
// CyberCare Interactive Help System
// ===============================


// 🌙 Theme Toggle

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    themeBtn.textContent =
        document.body.classList.contains("light-mode")
            ? "☀️"
            : "🌙";
});


// 🚨 Emergency Help

const emergencyBtn = document.getElementById("emergencyBtn");

emergencyBtn.addEventListener("click", () => {

    showHelpPanel(
        "🚨 Emergency Cyber Help",
        "If something serious has happened, follow these steps first.",
        [
            "🛑 Stop communicating with the suspected scammer.",
            "🔐 Secure affected accounts from a trusted device.",
            "🔑 Change compromised passwords.",
            "📱 Sign out unknown devices and sessions.",
            "💳 Contact your bank or payment provider immediately if money is involved.",
            "📸 Save screenshots, messages, transaction details and other evidence.",
            "🚨 Use the appropriate official reporting channel for serious incidents."
        ],
        [
            "Never share OTPs, PINs, passwords or recovery codes.",
            "Do not send additional money to someone claiming they can recover your account or money."
        ]
    );

});


// 🛡️ Service Information

const serviceData = {

    "Hacked Account": {
        title: "🔐 Hacked Account Recovery",
        intro: "If you think someone has accessed your account, secure it as quickly as possible.",
        steps: [
            "Secure your email account first if it may also be compromised.",
            "Change the affected account password using the official website or app.",
            "Sign out of unknown devices and active sessions.",
            "Enable two-factor authentication (2FA).",
            "Check your recovery email address and phone number.",
            "Review connected apps and remove anything you do not recognize.",
            "Check recent activity for suspicious changes."
        ],
        dont: [
            "Never share OTPs, passwords or recovery codes.",
            "Do not use recovery links sent by suspicious people.",
            "Do not pay strangers claiming they can recover your account."
        ]
    },


    "Scam & Phishing": {
        title: "🎣 Scam & Phishing Protection",
        intro: "Scammers often create urgency to make you act before thinking.",
        steps: [
            "Do not click suspicious links.",
            "Check the sender's address or phone number carefully.",
            "Look for unusual spelling, urgent threats or unrealistic offers.",
            "Verify the request through the organisation's official website or app.",
            "If you already clicked a suspicious link, change affected passwords from a trusted device.",
            "If financial information was shared, contact your bank or payment provider."
        ],
        dont: [
            "Never share OTPs, PINs or passwords.",
            "Do not trust caller ID alone.",
            "Do not install remote-access software because an unknown caller asks you to."
        ]
    },


    "Phone Privacy": {
        title: "📱 Phone Privacy Check",
        intro: "A few simple checks can significantly improve your phone's privacy.",
        steps: [
            "Review installed apps and remove anything you do not recognize.",
            "Check camera, microphone, location and contacts permissions.",
            "Keep your operating system and apps updated.",
            "Use a strong screen lock.",
            "Enable device-finding features.",
            "Avoid installing apps from unknown sources.",
            "Review which apps can run in the background."
        ],
        dont: [
            "Do not give unnecessary permissions to unknown apps.",
            "Do not install modified or cracked apps from untrusted websites."
        ]
    },


    "Account Security": {
        title: "🔒 Account Security",
        intro: "Strong account security reduces the chance of unauthorized access.",
        steps: [
            "Use a unique password for every important account.",
            "Use a password manager if possible.",
            "Enable two-factor authentication.",
            "Review active sessions and logged-in devices.",
            "Keep your recovery email and phone number updated.",
            "Remove unknown connected apps.",
            "Keep your software and browser updated."
        ],
        dont: [
            "Never reuse your main password everywhere.",
            "Never share passwords or authentication codes."
        ]
    },


    "Online Fraud": {
        title: "💳 Online Fraud Help",
        intro: "If money or financial information is involved, act quickly.",
        steps: [
            "Contact your bank or payment provider immediately.",
            "Ask about blocking or securing the affected account or card.",
            "Save transaction IDs, receipts and screenshots.",
            "Secure the account connected to the payment.",
            "Change compromised passwords.",
            "Report the incident through the appropriate official channel."
        ],
        dont: [
            "Do not send more money to the scammer.",
            "Do not delete evidence before saving it.",
            "Do not trust anyone promising guaranteed recovery of your money."
        ]
    },


    "Malware": {
        title: "🦠 Malware & Suspicious Apps",
        intro: "Unexpected pop-ups, unknown apps or unusual device behaviour can be warning signs.",
        steps: [
            "Disconnect the affected device from the internet if you suspect active compromise.",
            "Remove applications you do not recognize.",
            "Update the operating system and security software.",
            "Run a scan using a trusted security tool.",
            "Review browser extensions and remove suspicious ones.",
            "Change important passwords from a trusted device if needed."
        ],
        dont: [
            "Do not install another unknown 'cleaner' or security app recommended by a stranger.",
            "Do not enter passwords into suspicious pop-ups."
        ]
    },


    "Emergency Help": {
        title: "🚨 Emergency Help",
        intro: "Use this when a cyber incident may be actively harming you.",
        steps: [
            "Stop interacting with the suspected attacker.",
            "Secure your most important email account.",
            "Secure banking or payment accounts if financial information is involved.",
            "Change compromised passwords.",
            "Enable 2FA.",
            "Save evidence such as screenshots, emails and transaction details.",
            "Contact the relevant official organisation or service provider."
        ],
        dont: [
            "Never share OTPs, PINs or recovery codes.",
            "Do not send money to someone threatening or pressuring you."
        ]
    },


    "Learn Cybersecurity": {
        title: "🎓 Learn Cybersecurity",
        intro: "Start with the fundamentals and build good security habits.",
        steps: [
            "Learn how phishing and social engineering work.",
            "Learn how to create and manage strong unique passwords.",
            "Understand two-factor authentication.",
            "Learn how malware and suspicious apps can affect devices.",
            "Practice identifying suspicious links and messages.",
            "Learn how to protect your personal information online."
        ],
        dont: [
            "Do not test security tools or techniques against systems you do not own or have permission to test."
        ]
    }

};


// 📚 Open Service Help

const helpButtons = document.querySelectorAll(".help-btn");

helpButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const service = button.dataset.service;
        const data = serviceData[service];

        if (!data) return;

        showHelpPanel(
            data.title,
            data.intro,
            data.steps,
            data.dont
        );

    });

});


// 🧩 Help Panel

function showHelpPanel(title, intro, steps, dont) {

    const oldPanel = document.getElementById("cybercare-help-panel");

    if (oldPanel) {
        oldPanel.remove();
    }

    const overlay = document.createElement("div");

    overlay.id = "cybercare-help-panel";
    overlay.className = "help-overlay";

    overlay.innerHTML = `
        <div class="help-modal">

            <button class="close-help" aria-label="Close">
                ✕
            </button>

            <div class="help-header">
                <span class="help-badge">CYBERCARE HELP</span>
                <h2>${title}</h2>
                <p>${intro}</p>
            </div>

            <div class="help-section">
                <h3>✅ What you should do</h3>

                <ol>
                    ${steps.map(step => `<li>${step}</li>`).join("")}
                </ol>
            </div>

            <div class="help-section danger-section">
                <h3>⚠️ What you should NOT do</h3>

                <ul>
                    ${dont.map(item => `<li>${item}</li>`).join("")}
                </ul>
            </div>

            <div class="help-footer">
                <p>
                    🛡️ CyberCare provides general safety guidance.
                    For serious incidents, use the appropriate official service.
                </p>
            </div>

        </div>
    `;

    document.body.appendChild(overlay);

    const closeBtn = overlay.querySelector(".close-help");

    closeBtn.addEventListener("click", () => {
        overlay.remove();
    });

    overlay.addEventListener("click", (event) => {

        if (event.target === overlay) {
            overlay.remove();
        }

    });

        }helpButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const service = button.dataset.service;

        let message = "";

        if (service === "Hacked Account") {

            message =
                "🔐 Hacked Account Help\n\n" +
                "• Change your password immediately.\n" +
                "• Sign out of unknown devices.\n" +
                "• Enable two-factor authentication.\n" +
                "• Check your recovery email and phone number.\n" +
                "• Never share OTPs or recovery codes.";

        } else if (service === "Scam & Phishing") {

            message =
                "🎣 Scam & Phishing Guide\n\n" +
                "• Do not click suspicious links.\n" +
                "• Check the sender carefully.\n" +
                "• Never share OTPs, passwords or PINs.\n" +
                "• Be careful with urgent payment requests.\n" +
                "• Verify information through an official website.";

        } else if (service === "Phone Privacy") {

            message =
                "📱 Phone Privacy\n\n" +
                "• Review app permissions.\n" +
                "• Remove apps you do not recognize.\n" +
                "• Keep your phone updated.\n" +
                "• Use a strong screen lock.\n" +
                "• Avoid installing apps from unknown sources.";

        } else if (service === "Account Security") {

            message =
                "🔒 Account Security\n\n" +
                "• Use unique passwords.\n" +
                "• Enable two-factor authentication.\n" +
                "• Review logged-in devices.\n" +
                "• Keep recovery information updated.\n" +
                "• Never share passwords or OTPs.";

        } else if (service === "Online Fraud") {

            message =
                "💳 Online Fraud Help\n\n" +
                "• Contact your bank/payment provider immediately if money is involved.\n" +
                "• Save transaction details and evidence.\n" +
                "• Do not send additional money to scammers.\n" +
                "• Secure your accounts.\n" +
                "• Report the incident to the appropriate official authority.";

        } else if (service === "Malware") {

            message =
                "🦠 Malware & Suspicious Apps\n\n" +
                "• Disconnect the device if you suspect active compromise.\n" +
                "• Remove suspicious applications.\n" +
                "• Update your operating system.\n" +
                "• Run a trusted security scan.\n" +
                "• Change important passwords from a trusted device.";

        } else if (service === "Emergency Help") {

            message =
                "🚨 Emergency Help\n\n" +
                "If your account, device or money may be at immediate risk:\n\n" +
                "• Stop communicating with the suspected scammer.\n" +
                "• Do not share OTPs or passwords.\n" +
                "• Contact your bank if financial information is involved.\n" +
                "• Secure affected accounts.\n" +
                "• Preserve screenshots and other evidence.";

        } else if (service === "Learn Cybersecurity") {

            message =
                "🎓 Learn Cybersecurity\n\n" +
                "Start with these basics:\n\n" +
                "• Strong passwords\n" +
                "• Two-factor authentication\n" +
                "• Phishing awareness\n" +
                "• Safe browsing\n" +
                "• Software updates\n" +
                "• Privacy protection";

        }

        alert(message);

    });

});
