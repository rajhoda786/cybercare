// ============================================
// CYBERCARE INTERACTIVE HELP SYSTEM
// ============================================


// ============================================
// THEME
// ============================================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        themeBtn.textContent =
            document.body.classList.contains("light-mode")
                ? "☀️"
                : "🌙";

    });
}


// ============================================
// CYBERCARE DATA
// ============================================

const serviceData = {

    "Hacked Account": {

        title: "🔐 Hacked Account",

        intro:
            "Choose what happened to your account and get step-by-step guidance.",

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
