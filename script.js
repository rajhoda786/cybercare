document.addEventListener("DOMContentLoaded", () => {

"use strict";

/* =========================================================
   CYBERCARE - MASTER SCRIPT
   Account + Scam + Phone + Fraud + Women Safety +
   Blackmail + Privacy + Emergency + Tools + Learning
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

const themeBtn = document.getElementById("themeBtn");

const languageBtn = document.getElementById("languageBtn");
const languageText = document.getElementById("languageText");

const emergencyBtn = document.getElementById("emergencyBtn");
const quickHelpBtn = document.getElementById("quickHelpBtn");

const searchInput = document.getElementById("problemSearch");
const searchResults = document.getElementById("searchResults");


/* =========================================================
   MENU
========================================================= */

function openMenu() {
    sideMenu?.classList.add("active");
    menuOverlay?.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeSideMenu() {
    sideMenu?.classList.remove("active");
    menuOverlay?.classList.remove("active");
    document.body.style.overflow = "";
}

menuBtn?.addEventListener("click", openMenu);
closeMenu?.addEventListener("click", closeSideMenu);
menuOverlay?.addEventListener("click", closeSideMenu);


/* =========================================================
   THEME
========================================================= */

let theme =
    localStorage.getItem("cybercare-theme") || "light";

function applyTheme() {

    document.body.classList.toggle(
        "dark-mode",
        theme === "dark"
    );

    if (themeBtn) {
        themeBtn.textContent =
            theme === "dark" ? "☀️" : "🌙";
    }
}

applyTheme();

themeBtn?.addEventListener("click", () => {

    theme =
        theme === "dark" ? "light" : "dark";

    localStorage.setItem(
        "cybercare-theme",
        theme
    );

    applyTheme();
});


/* =========================================================
   LANGUAGE
========================================================= */

const translations = {

    EN: {
        logo: "CyberCare",
        heroTitle:
            "Protecting People. Securing Digital Lives.",
        heroText:
            "Simple, practical and step-by-step guidance for hacking, scams, harassment, blackmail, privacy, financial fraud and digital threats.",
        emergency:
            "🚨 I Need Help Now",
        quick:
            "🔎 Find My Problem"
    },

    BN: {
        logo: "সাইবারকেয়ার",
        heroTitle:
            "মানুষকে সুরক্ষিত রাখা। ডিজিটাল জীবনকে নিরাপদ রাখা।",
        heroText:
            "হ্যাকিং, স্ক্যাম, হয়রানি, ব্ল্যাকমেইল, গোপনীয়তা, আর্থিক প্রতারণা এবং ডিজিটাল সমস্যায় সহজ ধাপে ধাপে নিরাপত্তা নির্দেশনা।",
        emergency:
            "🚨 এখনই সাহায্য চাই",
        quick:
            "🔎 আমার সমস্যা খুঁজুন"
    }

};

let language =
    localStorage.getItem("cybercare-language") || "EN";

function applyLanguage() {

    const t = translations[language];

    document.getElementById("logoText").textContent =
        t.logo;

    document.getElementById("heroTitle").textContent =
        t.heroTitle;

    document.getElementById("heroText").textContent =
        t.heroText;

    emergencyBtn.textContent =
        t.emergency;

    quickHelpBtn.textContent =
        t.quick;

    languageText.textContent =
        language;
}

applyLanguage();

languageBtn?.addEventListener("click", () => {

    language =
        language === "EN" ? "BN" : "EN";

    localStorage.setItem(
        "cybercare-language",
        language
    );

    applyLanguage();
});


/* =========================================================
   HELP DATABASE
========================================================= */

const helpData = {


"Account Recovery": {

    title: "🔐 Account Recovery",

    description:
        "Choose the account problem you are facing.",

    situations: [

        {
            name: "📘 Facebook Account Hacked",

            title: "Facebook Account Recovery",

            official:
                "https://www.facebook.com/hacked",

            steps: [

                "Do not panic and do not pay anyone promising guaranteed recovery.",

                "Use Facebook's official hacked-account recovery page.",

                "If you can access the account, immediately change the password.",

                "Check the email address and phone number connected to the account.",

                "Remove unknown email addresses or phone numbers.",

                "Review logged-in devices and remove devices you do not recognise.",

                "Turn on two-factor authentication.",

                "Check recent posts, messages, profile information and security alerts.",

                "Secure the email account connected to Facebook."
            ],

            dont: [

                "Never share your Facebook password.",
                "Never share OTP or recovery codes.",
                "Do not pay unofficial recovery agents.",
                "Do not use random recovery websites."
            ]
        },


        {
            name: "📸 Instagram Account Hacked",

            title: "Instagram Account Recovery",

            official:
                "https://www.instagram.com/hacked/",

            steps: [

                "Use Instagram's official hacked-account recovery page.",

                "Check the original email account for Instagram security messages.",

                "Change the Instagram password if you still have access.",

                "Review Login Activity.",

                "Remove unknown devices.",

                "Check email and phone number.",

                "Enable two-factor authentication.",

                "Review profile information, posts and messages.",

                "Secure your email account."
            ],

            dont: [

                "Never share Instagram verification codes.",
                "Do not pay unofficial recovery agents.",
                "Do not give your password to anyone."
            ]
        },


        {
            name: "💬 WhatsApp Account Hacked",

            title: "WhatsApp Account Recovery",

            official:
                "https://www.whatsapp.com/contact/",

            steps: [

                "Use the official WhatsApp application.",

                "Register your phone number again.",

                "Enter the verification code sent to your phone.",

                "Open Settings → Linked Devices.",

                "Log out devices you do not recognise.",

                "Enable WhatsApp two-step verification.",

                "Check your profile and important conversations."
            ],

            dont: [

                "Never share your WhatsApp verification code.",
                "Never share your two-step PIN.",
                "Do not trust anyone asking for your WhatsApp code."
            ]
        },


        {
            name: "▶️ Google / YouTube Hacked",

            title: "Google Account Recovery",

            official:
                "https://accounts.google.com/signin/recovery",

            steps: [

                "Use Google's official account recovery page.",

                "Complete Google's verification process.",

                "Change your password after recovery.",

                "Review recent security activity.",

                "Review devices connected to your account.",

                "Remove unknown devices.",

                "Check recovery email and phone.",

                "Enable 2-Step Verification.",

                "Review YouTube channel activity if affected."
            ],

            dont: [
                "Never share recovery codes.",
                "Do not pay unofficial recovery services."
            ]
        },


        {
            name: "🔑 Cannot Log In",

            title: "Cannot Access My Account",

            steps: [

                "Use only the official recovery page of the service.",

                "Try your recovery email or phone.",

                "Complete identity verification if requested.",

                "Secure your email account.",

                "Change the password after recovery.",

                "Sign out unknown devices.",

                "Enable two-factor authentication."
            ],

            dont: [
                "Do not use random recovery websites.",
                "Never share recovery codes."
            ]
        }

    ]
},


/* =========================================================
   SCAM
========================================================= */

"Scam & Phishing": {

    title: "🎣 Scam & Phishing",

    description:
        "Handle suspicious messages, links and fake websites.",

    situations: [

        {
            name: "💬 Suspicious WhatsApp Link",

            title: "Suspicious WhatsApp Link",

            steps: [

                "Do not click the link again.",

                "Do not enter password, OTP, PIN or banking information.",

                "Take a screenshot.",

                "Check who sent the message.",

                "Block and report the sender if appropriate.",

                "If you entered a password, change it from the official app/site.",

                "If financial information was exposed, contact your bank/payment provider immediately."
            ],

            dont: [
                "Do not forward the suspicious link.",
                "Do not download unknown files."
            ]
        },


        {
            name: "🔗 I Clicked a Suspicious Link",

            title: "Suspicious Link Clicked",

            steps: [

                "Close the website.",

                "Do not enter additional information.",

                "If you entered credentials, change the password immediately.",

                "Enable 2FA.",

                "Do not open downloaded files.",

                "Delete suspicious downloads if safe to do so.",

                "Update your device.",

                "Contact your bank immediately if financial information was entered."
            ],

            dont: [
                "Do not return to the suspicious website.",
                "Do not install software recommended by it."
            ]
        },


        {
            name: "📩 Phishing Message",

            title: "Phishing Message",

            steps: [

                "Check the sender carefully.",

                "Look for urgency or threats.",

                "Look for unexpected links.",

                "Do not click unknown links.",

                "Open the company's official app or website yourself.",

                "Verify the request there.",

                "Report and block the sender."
            ],

            dont: [
                "Never share OTPs.",
                "Never share passwords.",
                "Never share recovery codes."
            ]
        },


        {
            name: "🔑 I Shared an OTP",

            title: "OTP Was Shared",

            steps: [

                "Identify which account or service the OTP belonged to.",

                "Change the affected password immediately.",

                "Sign out unknown devices.",

                "Enable 2FA.",

                "If banking/payment related, contact the bank immediately.",

                "Monitor transactions and account activity."
            ],

            dont: [
                "Do not share another OTP.",
                "Do not trust someone asking for a second code."
            ]
        }

    ]
},


/* =========================================================
   PHONE
========================================================= */

"Phone Security": {

    title: "📱 Phone Security",

    description:
        "Check apps, permissions and device security.",

    situations: [

        {
            name: "📦 Unknown App",

            title: "Unknown Application",

            steps: [

                "Open your phone's application list.",

                "Find the app you do not recognise.",

                "Check when it was installed.",

                "Review its permissions.",

                "Uninstall suspicious unnecessary apps.",

                "Update your operating system.",

                "Run the phone's built-in security scan if available."
            ],

            dont: [
                "Do not install antivirus apps from random pop-ups.",
                "Do not give unknown apps unnecessary permissions."
            ]
        },


        {
            name: "🎤 Camera / Microphone",

            title: "Camera & Microphone Security",

            steps: [

                "Open Settings → Privacy/Security.",

                "Review Camera permissions.",

                "Remove camera access from apps that do not need it.",

                "Review Microphone permissions.",

                "Remove unnecessary access.",

                "Uninstall suspicious apps.",

                "Update the operating system."
            ],

            dont: [
                "Do not allow unknown apps unnecessary camera or microphone access."
            ]
        },


        {
            name: "📍 Location Tracking",

            title: "Location Privacy",

            steps: [

                "Open Location settings.",

                "Review apps with location access.",

                "Change unnecessary permissions to deny or ask every time.",

                "Review location sharing inside social apps.",

                "Remove location access from untrusted apps."
            ],

            dont: [
                "Do not keep continuous location access enabled unnecessarily."
            ]
        },


        {
            name: "📞 Call Forwarding",

            title: "Unexpected Call Forwarding",

            steps: [

                "Check your phone's call forwarding settings.",

                "Disable forwarding you did not configure.",

                "Contact your mobile operator through its official channel if anything looks suspicious.",

                "Secure your account PIN/password with the carrier.",

                "Monitor SMS and calls for unusual activity."
            ],

            dont: [
                "Do not follow unknown caller instructions to install apps or share OTPs."
            ]
        },


        {
            name: "📱 Lost / Stolen Phone",

            title: "Lost or Stolen Phone",

            steps: [

                "Use your device's official Find My Device / Find My service.",

                "Lock the device remotely if possible.",

                "Contact your mobile operator.",

                "Secure important accounts from another trusted device.",

                "Change important passwords.",

                "Report the loss to the appropriate authority when necessary.",

                "Keep the device's IMEI and purchase information if available."
            ],

            dont: [
                "Do not meet unknown people claiming to have your phone alone.",
                "Do not share account recovery codes."
            ]
        }

    ]
},


/* =========================================================
   ONLINE FRAUD
========================================================= */

"Online Fraud": {

    title: "💳 Online & Financial Fraud",

    description:
        "Immediate safety steps when money or financial information is at risk.",

    situations: [

        {
            name: "💸 I Lost Money",

            title: "Possible Financial Cyber Fraud",

            steps: [

                "Contact your bank/payment provider immediately.",

                "Tell them the transaction may be fraudulent.",

                "Save the transaction ID/UTR/reference number.",

                "Take screenshots of messages and payment records.",

                "Secure the account used for payment.",

                "Change compromised passwords.",

                "Monitor transactions.",

                "In India, report financial cyber fraud through the official Cyber Crime Portal or 1930 as quickly as possible."
            ],

            dont: [
                "Do not send additional money.",
                "Do not delete evidence.",
                "Do not trust recovery scammers."
            ]
        },


        {
            name: "📲 UPI Fraud",

            title: "UPI Fraud",

            steps: [

                "Contact your bank/payment provider immediately.",

                "Save the transaction ID.",

                "Take screenshots.",

                "Report the transaction through the official app.",

                "In India, report suspected financial cyber fraud through 1930 / cybercrime.gov.in.",

                "Secure your UPI-linked account.",

                "Monitor your bank account."
            ],

            dont: [
                "Never share your UPI PIN.",
                "Receiving money does not require entering your UPI PIN.",
                "Never approve an unknown payment request."
            ]
        },


        {
            name: "🏦 Banking Information Shared",

            title: "Banking Information Exposed",

            steps: [

                "Contact your bank through its official channel.",

                "Tell the bank exactly what information was exposed.",

                "Ask what security measures are required.",

                "Monitor transactions.",

                "Change affected credentials/PINs when advised.",

                "Secure your email account."
            ],

            dont: [
                "Never share another OTP.",
                "Never share your banking PIN.",
                "Do not trust unsolicited callers."
            ]
        },


        {
            name: "💼 Fake Job Scam",

            title: "Fake Job / Work-from-Home Scam",

            steps: [

                "Stop communicating if the offer appears suspicious.",

                "Do not pay registration/training/security fees.",

                "Do not install unknown APKs or remote-control apps.",

                "Do not share banking credentials.",

                "Save the job advertisement and messages.",

                "Report financial loss immediately if money was sent."
            ],

            dont: [
                "Do not pay money to unlock supposed earnings.",
                "Do not trust unrealistic guaranteed income."
            ]
        },


        {
            name: "📈 Investment Scam",

            title: "Investment / Trading Scam",

            steps: [

                "Stop sending additional money.",

                "Do not trust pressure to deposit more to unlock withdrawals.",

                "Save screenshots, URLs, account details and transaction records.",

                "Contact your bank/payment provider.",

                "Report suspected fraud through the appropriate official channel.",

                "Verify investment professionals/platforms through the relevant regulator before investing."
            ],

            dont: [
                "Do not pay extra money to recover supposed investment profits.",
                "Do not install unknown trading APKs."
            ]
        }

    ]
},


/* =========================================================
   SUSPICIOUS
========================================================= */

"Suspicious Activity": {

    title: "🕵️ Suspicious Activity",

    description:
        "Investigate unusual account, device and login activity.",

    situations: [

        {
            name: "🚨 Unknown Login",

            title: "Someone Logged Into My Account",

            steps: [

                "Change your password immediately.",

                "Sign out unknown devices.",

                "Enable 2FA.",

                "Review recent security activity.",

                "Check recovery email and phone.",

                "Secure your email account."
            ],

            dont: [
                "Do not share your password."
            ]
        },


        {
            name: "🦠 Possible Malware",

            title: "Possible Malware",

            steps: [

                "Disconnect from the internet if active compromise is suspected.",

                "Check recently installed applications.",

                "Remove suspicious applications.",

                "Update your operating system.",

                "Run a trusted security scan.",

                "Change important passwords using a trusted device if necessary."
            ],

            dont: [
                "Do not install security software from random pop-ups."
            ]
        },


        {
            name: "🎭 Fake Login Page",

            title: "Fake Login Page",

            steps: [

                "Close the page.",

                "Do not enter credentials.",

                "If you entered a password, change it using the real official website/app.",

                "Enable 2FA.",

                "Review login activity.",

                "Save evidence if you need to report it."
            ],

            dont: [
                "Do not use the fake login page again."
            ]
        }

    ]
},


/* =========================================================
   EMERGENCY
========================================================= */

"Emergency Help": {

    title: "🚨 Emergency Cyber Help",

    description:
        "Immediate actions for urgent cyber incidents.",

    situations: [

        {
            name: "🔐 Account Actively Compromised",

            title: "Active Account Compromise",

            steps: [

                "Secure your email account first if it may be compromised.",

                "Change the affected account password.",

                "Sign out unknown devices.",

                "Enable 2FA.",

                "Check recovery information.",

                "Save screenshots and security alerts.",

                "Use only official support/recovery channels."
            ],

            dont: [
                "Do not share OTPs.",
                "Do not share recovery codes.",
                "Do not pay unofficial recovery agents."
            ]
        },


        {
            name: "💳 Money Is at Risk",

            title: "Financial Emergency",

            steps: [

                "Contact your bank/payment provider immediately.",

                "Ask them to secure the account/transaction.",

                "Save transaction details.",

                "Secure your email account.",

                "Change compromised passwords.",

                "Report the incident through the appropriate official channel.",

                "In India, call 1930 for financial cyber fraud and use cybercrime.gov.in."
            ],

            dont: [
                "Do not send additional money.",
                "Do not trust guaranteed recovery promises."
            ]
        }

    ]
}

};


/* =========================================================
   WOMEN SAFETY DATABASE
========================================================= */

const womenData = {

harassment: {

    title: "📞 Repeated Calls / Online Harassment",

    steps: [

        "Do not feel pressured to reply.",

        "Save screenshots, call logs, usernames and messages.",

        "If safe to do so, block or restrict the person.",

        "Use the platform's Report feature.",

        "Review privacy settings and limit who can contact you.",

        "Tell a trusted person if the harassment continues.",

        "If there are threats or immediate safety concerns, contact appropriate authorities.",

        "For cybercrime in India, use the official Cyber Crime Portal."
    ],

    dont: [

        "Do not delete evidence before saving it.",
        "Do not send money just to make the person stop.",
        "Do not share your live location.",
        "Do not meet the person alone."
    ]

},


photo: {

    title: "📸 Photo Misuse",

    steps: [

        "Take screenshots of the account/profile/post.",

        "Save the profile URL and username.",

        "Report the content through the platform.",

        "Report the fake profile if applicable.",

        "Ask trusted people not to engage with or share the content.",

        "Review your account privacy settings.",

        "If the misuse involves threats, sexual content or blackmail, preserve evidence and report through the appropriate official channel."
    ],

    dont: [

        "Do not send additional private photos.",
        "Do not pay someone claiming they can erase everything.",
        "Do not delete evidence."
    ]

},


fakeprofile: {

    title: "🎭 Fake Profile / Impersonation",

    steps: [

        "Open the fake profile without interacting unnecessarily.",

        "Screenshot the profile.",

        "Save the profile URL.",

        "Report the profile as impersonation/fake account.",

        "Tell close contacts if the fake account is contacting them.",

        "Secure your real account with a strong password and 2FA.",

        "Check whether your public information is being copied."
    ],

    dont: [

        "Do not send your ID to random people claiming to remove the account.",
        "Do not argue with the fake account."
    ]

},


blackmail: {

    title: "⚠️ Blackmail / Threat",

    steps: [

        "Stay calm and do not panic.",

        "Do not immediately pay the blackmailer.",

        "Do not send additional photos, videos or information.",

        "Save screenshots of threats, usernames, numbers and payment demands.",

        "Save URLs and dates/times.",

        "Block/report the account when appropriate after preserving evidence.",

        "Tell a trusted person who can support you.",

        "If you believe there is immediate physical danger, seek immediate local help.",

        "For cybercrime in India, use the official Cyber Crime Portal."
    ],

    dont: [

        "Do not send more money because they promise to stop.",
        "Do not meet the person.",
        "Do not delete evidence.",
        "Do not blame yourself."
    ]

},


private: {

    title: "🔒 Private Photo / Video Threat",

    steps: [

        "Do not send more content.",

        "Save evidence of the threat.",

        "Record usernames, URLs and messages.",

        "Do not negotiate under pressure.",

        "Report the account/content through the platform.",

        "Tell a trusted person.",

        "Use the appropriate official cybercrime reporting channel.",

        "If the person knows your physical location or threatens physical harm, prioritise your immediate safety."
    ],

    dont: [

        "Do not pay guaranteed removal services.",
        "Do not send additional private content.",
        "Do not meet the person alone."
    ]

},


stalking: {

    title: "👁️ Online Stalking",

    steps: [

        "Save evidence of repeated contact or monitoring.",

        "Review followers and connected accounts.",

        "Remove unknown followers.",

        "Change privacy settings.",

        "Disable unnecessary location sharing.",

        "Check active login sessions.",

        "Change your password if compromise is suspected.",

        "Enable 2FA.",

        "Tell someone you trust.",

        "If threats or physical safety concerns exist, contact appropriate authorities."
    ],

    dont: [

        "Do not share your live location.",
        "Do not meet a suspected stalker.",
        "Do not ignore direct threats."
    ]

}

};


/* =========================================================
   OPEN HELP MODAL
========================================================= */

function openHelp(service) {

    const info = helpData[service];

    if (!info) return;

    removeModals();

    const overlay =
        document.createElement("div");

    overlay.className = "modal-overlay";

    const modal =
        document.createElement("div");

    modal.className = "main-modal";

    let situationButtons = "";

    info.situations.forEach((item, index) => {

        situationButtons += `
            <button
                class="situation-btn"
                data-index="${index}"
            >
                ${item.name}
            </button>
        `;
    });

    modal.innerHTML = `

        <button class="modal-close">✕</button>

        <div class="modal-label">
            CYBERCARE HELP
        </div>

        <h2>${info.title}</h2>

        <p class="modal-description">
            ${info.description}
        </p>

        <h3>👇 What happened?</h3>

        <div class="situation-list">
            ${situationButtons}
        </div>

        <div id="modalResult" class="modal-result">

            <div class="empty-result">
                🛡️ Select your problem above.
            </div>

        </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    modal.querySelector(".modal-close")
        .addEventListener("click", () => overlay.remove());

    overlay.addEventListener("click", e => {

        if (e.target === overlay)
            overlay.remove();

    });

    modal.querySelectorAll(".situation-btn")
        .forEach(btn => {

            btn.addEventListener("click", () => {

                const index =
                    Number(btn.dataset.index);

                showSituation(
                    modal,
                    info.situations[index]
                );

            });

        });
}


/* =========================================================
   SHOW SITUATION
========================================================= */

function showSituation(modal, situation) {

    const result =
        modal.querySelector("#modalResult");

    const steps =
        situation.steps
            .map((x, i) =>
                `<li>
                    <strong>Step ${i + 1}:</strong>
                    ${x}
                </li>`
            )
            .join("");

    const dont =
        situation.dont
            .map(x => `<li>${x}</li>`)
            .join("");

    let official = "";

    if (situation.official) {

        official = `
            <div class="official-box">

                <h3>🌐 Official Page</h3>

                <p>
                    Use the official service only.
                </p>

                <a
                    href="${situation.official}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open Official Page →
                </a>

            </div>
        `;
    }

    result.innerHTML = `

        <div class="result-card">

            <h2>${situation.title}</h2>

            <h3>✅ What You Should Do</h3>

            <ol>
                ${steps}
            </ol>

            <div class="dont-box">

                <h3>⚠️ What You Should NOT Do</h3>

                <ul>
                    ${dont}
                </ul>

            </div>

            ${official}

            <div class="evidence-box">

                <h3>📸 Save Evidence</h3>

                <p>
                    Save screenshots, usernames, URLs,
                    emails, messages, transaction IDs,
                    receipts and relevant security alerts.
                </p>

            </div>

            <div class="important-box">

                <h3>🛡️ Important</h3>

                <p>
                    CyberCare provides general educational
                    safety guidance. Verify important
                    instructions through the affected
                    service's official website/app.
                </p>

            </div>

        </div>
    `;

    result.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}


/* =========================================================
   SERVICE BUTTONS
========================================================= */

document.querySelectorAll(".help-btn")
    .forEach(btn => {

        btn.addEventListener("click", () => {

            openHelp(
                btn.dataset.service
            );

        });

    });

emergencyBtn?.addEventListener("click", () => {
    openHelp("Emergency Help");
});


/* =========================================================
   WOMEN SAFETY
========================================================= */

document.querySelectorAll(".women-btn")
    .forEach(btn => {

        btn.addEventListener("click", () => {

            const key =
                btn.dataset.women;

            openWomenHelp(
                womenData[key]
            );

        });

    });


function openWomenHelp(data) {

    removeModals();

    const overlay =
        document.createElement("div");

    overlay.className = "modal-overlay";

    const modal =
        document.createElement("div");

    modal.className = "main-modal";

    const steps =
        data.steps
            .map((x, i) =>
                `<li>
                    <strong>Step ${i + 1}:</strong>
                    ${x}
                </li>`
            )
            .join("");

    const dont =
        data.dont
            .map(x => `<li>${x}</li>`)
            .join("");

    modal.innerHTML = `

        <button class="modal-close">✕</button>

        <div class="modal-label">
            WOMEN'S DIGITAL SAFETY
        </div>

        <h2>${data.title}</h2>

        <div class="result-card">

            <h3>✅ What You Should Do</h3>

            <ol>
                ${steps}
            </ol>

            <div class="dont-box">

                <h3>⚠️ What You Should NOT Do</h3>

                <ul>
                    ${dont}
                </ul>

            </div>

            <div class="evidence-box">

                <h3>📸 Save Evidence</h3>

                <p>
                    Screenshot the message/profile,
                    save username, URL, phone number,
                    date/time and any threat or demand.
                </p>

            </div>

            <div class="support-box">

                <h3>❤️ Remember</h3>

                <p>
                    If someone is harassing or blackmailing
                    you, it is not your fault. You do not
                    have to handle it alone. Consider telling
                    someone you trust.
                </p>

            </div>

            <div class="official-box">

                <h3>🇮🇳 India Cyber Crime Portal</h3>

                <p>
                    Use the official government reporting
                    channel when appropriate.
                </p>

                <a
                    href="https://www.cybercrime.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open Cyber Crime Portal →
                </a>

            </div>

        </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    modal.querySelector(".modal-close")
        .addEventListener("click", () => overlay.remove());

    overlay.addEventListener("click", e => {

        if (e.target === overlay)
            overlay.remove();

    });
}


/* =========================================================
   EMERGENCY SHORTCUTS
========================================================= */

const emergencyData = {

    account: "Account Recovery",

    money: "Online Fraud",

    blackmail: null,

    phone: "Phone Security"

};

document.querySelectorAll("[data-emergency]")
    .forEach(btn => {

        btn.addEventListener("click", () => {

            const type =
                btn.dataset.emergency;

            if (type === "blackmail") {

                openWomenHelp(
                    womenData.blackmail
                );

            } else {

                openHelp(
                    emergencyData[type]
                );

            }

        });

    });


/* =========================================================
   SEARCH
========================================================= */

const searchItems = [

    ["facebook hacked", "Account Recovery", 0],
    ["instagram hacked", "Account Recovery", 1],
    ["whatsapp hacked", "Account Recovery", 2],
    ["google hacked", "Account Recovery", 3],
    ["cannot login", "Account Recovery", 4],

    ["phishing", "Scam & Phishing", 2],
    ["suspicious link", "Scam & Phishing", 1],
    ["otp", "Scam & Phishing", 3],
    ["whatsapp link", "Scam & Phishing", 0],

    ["unknown app", "Phone Security", 0],
    ["spyware", "Phone Security", 0],
    ["camera", "Phone Security", 1],
    ["microphone", "Phone Security", 1],
    ["location", "Phone Security", 2],
    ["lost phone", "Phone Security", 4],

    ["money lost", "Online Fraud", 0],
    ["upi", "Online Fraud", 1],
    ["bank", "Online Fraud", 2],
    ["job scam", "Online Fraud", 3],
    ["investment", "Online Fraud", 4],

    ["unknown login", "Suspicious Activity", 0],
    ["malware", "Suspicious Activity", 1],
    ["fake login", "Suspicious Activity", 2],

    ["blackmail", "women", "blackmail"],
    ["harassment", "women", "harassment"],
    ["fake profile", "women", "fakeprofile"],
    ["photo misuse", "women", "photo"],
    ["private photo", "women", "private"],
    ["stalking", "women", "stalking"]
];

searchInput?.addEventListener("input", () => {

    const q =
        searchInput.value
            .trim()
            .toLowerCase();

    searchResults.innerHTML = "";

    if (!q) return;

    const matches =
        searchItems.filter(item =>
            item[0].includes(q)
        );

    if (!matches.length) {

        searchResults.innerHTML = `
            <div class="no-result">
                No exact guide found.
                Try words like:
                <strong>hacked, blackmail, UPI,
                OTP, scam, harassment</strong>.
            </div>
        `;

        return;
    }

    matches.forEach(item => {

        const btn =
            document.createElement("button");

        btn.className =
            "search-result-btn";

        btn.textContent =
            "🛡️ " + item[0];

        btn.addEventListener("click", () => {

            if (item[1] === "women") {

                openWomenHelp(
                    womenData[item[2]]
                );

            } else {

                openHelp(item[1]);

            }

        });

        searchResults.appendChild(btn);
    });

});


quickHelpBtn?.addEventListener("click", () => {

    document
        .querySelector(".search-section")
        ?.scrollIntoView({
            behavior: "smooth"
        });

    searchInput?.focus();

});


/* =========================================================
   TOOL MODAL
========================================================= */

function createToolModal(title, content) {

    removeModals();

    const overlay =
        document.createElement("div");

    overlay.className =
        "modal-overlay";

    const modal =
        document.createElement("div");

    modal.className =
        "main-modal";

    modal.innerHTML = `

        <button class="modal-close">✕</button>

        <div class="modal-label">
            CYBERCARE TOOL
        </div>

        <h2>${title}</h2>

        <div class="tool-modal-content">
            ${content}
        </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    modal.querySelector(".modal-close")
        .addEventListener(
            "click",
            () => overlay.remove()
        );

    overlay.addEventListener("click", e => {

        if (e.target === overlay)
            overlay.remove();

    });

    return modal;
}


/* =========================================================
   SCAM CHECKER
========================================================= */

function scamChecker() {

    const modal =
        createToolModal(
            "🔎 Scam Checker",
            `
                <p>
                    Paste a suspicious message below.
                    This checks common warning signs only.
                </p>

                <textarea
                    id="scamText"
                    placeholder="Paste message here..."
                ></textarea>

                <button class="primary-tool-btn" id="runScam">
                    Check Message
                </button>

                <div id="scamOutput"></div>
            `
        );

    modal.querySelector("#runScam")
        .addEventListener("click", () => {

            const text =
                modal.querySelector("#scamText")
                    .value
                    .toLowerCase();

            if (!text.trim()) {

                modal.querySelector("#scamOutput")
                    .innerHTML =
                    `<div class="warning-box">
                        ⚠️ Please paste a message first.
                    </div>`;

                return;
            }

            const patterns = [

                ["otp", "Requests an OTP or verification code."],
                ["password", "Requests a password."],
                ["pin", "Mentions a PIN."],
                ["urgent", "Uses urgency."],
                ["immediately", "Creates pressure."],
                ["click", "Asks you to click something."],
                ["verify", "Requests verification."],
                ["bank", "Mentions banking."],
                ["upi", "Mentions UPI."],
                ["prize", "Mentions a prize."],
                ["winner", "Claims you won."],
                ["refund", "Mentions a refund."],
                ["investment", "Mentions investment."],
                ["crypto", "Mentions cryptocurrency."],
                ["fee", "Requests a fee."],
                ["payment", "Requests payment."],
                ["account suspended", "Uses account-suspension pressure."]
            ];

            const warnings = [];

            patterns.forEach(([word, warning]) => {

                if (text.includes(word))
                    warnings.push(warning);

            });

            if (warnings.length) {

                modal.querySelector("#scamOutput")
                    .innerHTML = `

                    <div class="warning-box">

                        <h3>
                            ⚠️ Warning Signs Found
                        </h3>

                        <ul>
                            ${warnings
                                .map(x => `<li>${x}</li>`)
                                .join("")}
                        </ul>

                        <strong>
                            Do not share OTPs, passwords,
                            PINs or recovery codes.
                        </strong>

                    </div>
                `;

            } else {

                modal.querySelector("#scamOutput")
                    .innerHTML = `

                    <div class="safe-box">

                        🟢 No common warning words
                        were detected.

                        <br><br>

                        This does NOT prove that the
                        message is safe.

                    </div>
                `;
            }

        });
}


/* =========================================================
   PASSWORD CHECKER
========================================================= */

function passwordChecker() {

    const modal =
        createToolModal(
            "🔐 Password Safety Checker",
            `
                <p>
                    This basic checker runs locally in your browser.
                    Do not use a real password you currently use.
                </p>

                <input
                    id="passwordInput"
                    type="password"
                    placeholder="Enter a test password"
                >

                <button
                    class="primary-tool-btn"
                    id="runPassword"
                >
                    Check Password
                </button>

                <div id="passwordOutput"></div>
            `
        );

    modal.querySelector("#runPassword")
        .addEventListener("click", () => {

            const password =
                modal.querySelector("#passwordInput")
                    .value;

            let score = 0;

            if (password.length >= 12) score++;
            if (/[A-Z]/.test(password)) score++;
            if (/[a-z]/.test(password)) score++;
            if (/[0-9]/.test(password)) score++;
            if (/[^A-Za-z0-9]/.test(password)) score++;

            let result;

            if (score <= 2) {

                result = `
                    <div class="warning-box">
                        🔴 Weak structure.
                        <br><br>
                        Use a longer, unique passphrase.
                    </div>
                `;

            } else if (score <= 4) {

                result = `
                    <div class="medium-box">
                        🟠 Moderate structure.
                        <br><br>
                        Make it longer and unique.
                    </div>
                `;

            } else {

                result = `
                    <div class="safe-box">
                        🟢 Stronger structure.
                        <br><br>
                        Never reuse this password.
                    </div>
                `;
            }

            modal.querySelector("#passwordOutput")
                .innerHTML = result;

        });
}


/* =========================================================
   URL SAFETY
========================================================= */

function urlChecker() {

    const modal =
        createToolModal(
            "🔗 URL Safety Guide",
            `
                <p>
                    Paste a URL to perform basic local checks.
                    This is not a malware scanner or guarantee.
                </p>

                <input
                    id="urlInput"
                    type="url"
                    placeholder="https://example.com"
                >

                <button
                    class="primary-tool-btn"
                    id="runURL"
                >
                    Check URL
                </button>

                <div id="urlOutput"></div>
            `
        );

    modal.querySelector("#runURL")
        .addEventListener("click", () => {

            const value =
                modal.querySelector("#urlInput")
                    .value
                    .trim();

            if (!value) {

                modal.querySelector("#urlOutput")
                    .innerHTML =
                    `<div class="warning-box">
                        ⚠️ Enter a URL first.
                    </div>`;

                return;
            }

            let url;

            try {
                url = new URL(value);
            } catch {

                modal.querySelector("#urlOutput")
                    .innerHTML =
                    `<div class="warning-box">
                        ⚠️ This does not appear to be a valid URL.
                    </div>`;

                return;
            }

            const warnings = [];

            if (url.protocol !== "https:")
                warnings.push("The URL does not use HTTPS.");

            if (url.username || url.password)
                warnings.push("The URL contains username/password information.");

            if (url.hostname.includes("xn--"))
                warnings.push("The domain uses punycode; inspect it carefully.");

            if (url.hostname.split(".").length > 4)
                warnings.push("The domain has many subdomains.");

            modal.querySelector("#urlOutput")
                .innerHTML = `

                <div class="${warnings.length ? "warning-box" : "safe-box"}">

                    <h3>
                        ${warnings.length
                            ? "⚠️ Review Carefully"
                            : "🟢 Basic Checks Passed"}
                    </h3>

                    <p>
                        Domain:
                        <strong>${url.hostname}</strong>
                    </p>

                    ${
                        warnings.length
                        ? `<ul>
                            ${warnings.map(x => `<li>${x}</li>`).join("")}
                           </ul>`
                        : `<p>
                            No obvious issue was detected by
                            these basic checks. Still verify
                            the domain before logging in.
                           </p>`
                    }

                </div>
            `;

        });
}


/* =========================================================
   PRIVACY CHECKLIST
========================================================= */

function privacyChecklist() {

    const questions = [

        "I use unique passwords for important accounts.",
        "I use 2FA on important accounts.",
        "My phone has a secure screen lock.",
        "I review installed applications.",
        "I review camera and microphone permissions.",
        "I review location permissions.",
        "I keep my phone updated.",
        "I check logged-in devices.",
        "I do not share OTPs or recovery codes.",
        "I limit unnecessary personal information online.",
        "I review social-media privacy settings.",
        "I have a secure recovery email/phone."
    ];

    const modal =
        createToolModal(
            "📱 Privacy & Security Checklist",
            `
                <div id="privacyQuestions">

                    ${questions.map((q, i) => `
                        <label class="check-row">
                            <input
                                type="checkbox"
                                class="privacy-check"
                            >
                            ${i + 1}. ${q}
                        </label>
                    `).join("")}

                </div>

                <button
                    class="primary-tool-btn"
                    id="privacyScore"
                >
                    Calculate Score
                </button>

                <div id="privacyOutput"></div>
            `
        );

    modal.querySelector("#privacyScore")
        .addEventListener("click", () => {

            const checks =
                modal.querySelectorAll(".privacy-check");

            let done = 0;

            checks.forEach(x => {
                if (x.checked) done++;
            });

            const percent =
                Math.round(
                    done / checks.length * 100
                );

            modal.querySelector("#privacyOutput")
                .innerHTML = `

                <div class="info-box">

                    🛡️ Safety Checklist:
                    <strong>${percent}%</strong>

                    <br><br>

                    ${done} of ${checks.length}
                    completed.

                </div>
            `;
        });
}


/* =========================================================
   EVIDENCE CHECKLIST
========================================================= */

function evidenceChecklist() {

    const items = [

        "Screenshot of the message",
        "Username/profile name",
        "Profile URL",
        "Phone number/email if relevant",
        "Date and time",
        "Threat or blackmail message",
        "Payment request",
        "Transaction ID / UTR",
        "Bank/payment receipt",
        "Security alert/email",
        "Suspicious URL",
        "Relevant downloaded file information"
    ];

    const modal =
        createToolModal(
            "🧾 Evidence Checklist",
            `
                <p>
                    Save evidence before deleting or blocking
                    when doing so is safe.
                </p>

                ${items.map((x, i) => `
                    <label class="check-row">
                        <input type="checkbox">
                        ${i + 1}. ${x}
                    </label>
                `).join("")}

                <div class="info-box">
                    💡 Keep original files/messages where possible
                    and avoid editing screenshots that may be needed
                    as evidence.
                </div>
            `
        );
}


/* =========================================================
   CYBER SAFETY SCORE
========================================================= */

function safetyScore() {

    const questions = [

        "I use 2FA on important accounts.",
        "I use unique passwords.",
        "I check logged-in devices.",
        "I never share OTPs.",
        "I keep my phone updated.",
        "I avoid unknown links.",
        "I review app permissions.",
        "I have secure recovery information.",
        "I use screen lock.",
        "I review privacy settings."
    ];

    const modal =
        createToolModal(
            "🛡️ Cyber Safety Score",
            `
                ${questions.map((q, i) => `
                    <label class="check-row">
                        <input
                            type="checkbox"
                            class="score-check"
                        >
                        ${i + 1}. ${q}
                    </label>
                `).join("")}

                <button
                    class="primary-tool-btn"
                    id="calculateSafety"
                >
                    Calculate Score
                </button>

                <div id="safetyOutput"></div>
            `
        );

    modal.querySelector("#calculateSafety")
        .addEventListener("click", () => {

            const checks =
                modal.querySelectorAll(".score-check");

            let score = 0;

            checks.forEach(x => {
                if (x.checked) score++;
            });

            const percentage =
                Math.round(
                    score / checks.length * 100
                );

            let level;

            if (percentage < 40)
                level = "🔴 Needs Improvement";

            else if (percentage < 75)
                level = "🟠 Good, but can improve";

            else
                level = "🟢 Strong Safety Habits";

            modal.querySelector("#safetyOutput")
                .innerHTML = `

                <div class="info-box">

                    <h3>${level}</h3>

                    <p>
                        Score:
                        <strong>${percentage}%</strong>
                    </p>

                </div>
            `;
        });
}


/* =========================================================
   TOOL BUTTONS
========================================================= */

document.querySelectorAll(".tool-btn")
    .forEach(btn => {

        btn.addEventListener("click", () => {

            const tool =
                btn.dataset.tool;

            if (tool === "scam")
                scamChecker();

            if (tool === "password")
                passwordChecker();

            if (tool === "url")
                urlChecker();

            if (tool === "privacy")
                privacyChecklist();

            if (tool === "evidence")
                evidenceChecklist();

            if (tool === "score")
                safetyScore();

        });

    });


/* =========================================================
   LEARNING
========================================================= */

const lessons = {

    password: {
        title: "🔐 Password Safety",
        text: `
            Use long and unique passwords or passphrases.
            Avoid reusing passwords between important accounts.
            Consider using a reputable password manager.
        `
    },

    "2fa": {
        title: "🔑 Two-Factor Authentication",
        text: `
            2FA adds another verification step after your password.
            Enable it on email, social media, financial and other
            important accounts whenever available.
        `
    },

    phishing: {
        title: "🎣 Phishing",
        text: `
            Phishing messages often create urgency, fear or excitement.
            They may ask you to click a link, share an OTP or login
            immediately. Verify through the official app or website.
        `
    },

    privacy: {
        title: "🔒 Privacy",
        text: `
            Be careful with phone numbers, addresses, live locations,
            personal documents, private photographs and other sensitive
            information. Review social-media privacy settings regularly.
        `
    },

    phone: {
        title: "📱 Phone Security",
        text: `
            Keep your operating system updated. Review installed apps,
            permissions, accessibility access, location, camera and
            microphone permissions.
        `
    },

    financial: {
        title: "💳 Financial Safety",
        text: `
            Never share OTPs, UPI PINs, banking passwords or card
            security codes with callers or strangers. If money is
            lost in cyber fraud, contact your bank immediately and
            report quickly through the appropriate official channel.
        `
    }

};

document.querySelectorAll(".learn-card")
    .forEach(btn => {

        btn.addEventListener("click", () => {

            const data =
                lessons[btn.dataset.learn];

            createToolModal(
                data.title,
                `<div class="lesson-text">${data.text}</div>`
            );

        });

    });


/* =========================================================
   INDIA OFFICIAL LINKS
========================================================= */

window.CyberCareOfficial = {

    cyberCrime:
        "https://www.cybercrime.gov.in/",

    reportSuspect:
        "https://www.cybercrime.gov.in/Webform/cyber_suspect.aspx",

    suspectSearch:
        "https://www.cybercrime.gov.in/Webform/suspect_search_repository.aspx",

    financialFraudHelpline:
        "1930"

};


/* =========================================================
   REMOVE MODALS
========================================================= */

function removeModals() {

    document
        .querySelectorAll(".modal-overlay")
        .forEach(x => x.remove());

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        removeModals();
        closeSideMenu();

    }

});


/* =========================================================
   MENU NAVIGATION
========================================================= */

document.querySelectorAll(".menu-item")
    .forEach(item => {

        item.addEventListener("click", () => {

            const target =
                item.dataset.menu;

            closeSideMenu();

            if (target === "emergency") {

                setTimeout(() => {
                    openHelp("Emergency Help");
                }, 200);

                return;
            }

            const section =
                document.getElementById(target);

            section?.scrollIntoView({
                behavior: "smooth"
            });

        });

    });


/* =========================================================
   STARTUP
========================================================= */

console.log(
    "🛡️ CyberCare Master Version loaded successfully."
);

});
