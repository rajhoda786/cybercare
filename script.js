// CyberCare Theme Toggle

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});


// Emergency Help

const emergencyBtn = document.getElementById("emergencyBtn");

emergencyBtn.addEventListener("click", () => {
    alert(
        "🚨 CyberCare Emergency Help\n\n" +
        "1. Stay calm and do not share passwords or OTPs.\n" +
        "2. Disconnect a suspicious device from the internet if necessary.\n" +
        "3. Change compromised passwords from a trusted device.\n" +
        "4. Enable two-factor authentication.\n" +
        "5. Contact your bank immediately if money is involved.\n\n" +
        "For serious incidents, contact your local official cybercrime authority."
    );
});


// Service Help

const helpButtons = document.querySelectorAll(".help-btn");

helpButtons.forEach((button) => {

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
