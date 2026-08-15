/* =========================================================
   CYBERCARE — COMPLETE SCRIPT.JS
   Smart Search + Guides + Women's Safety + Tools
   Emergency + Language + Dark Mode + Side Menu
========================================================= */

"use strict";

/* =========================================================
   LANGUAGE DATA
========================================================= */

const translations = {

    en: {
        language: "EN",

        searchTitle: "🔎 What happened?",
        searchText:
            "Describe your problem. CyberCare will find the most relevant safety guide.",

        searchPlaceholder:
            "Example: someone is blackmailing me...",

        servicesTitle: "🛡️ How Can We Help You?",
        servicesText:
            "Choose a situation and get step-by-step guidance.",

        womenTitle: "Women's Digital Safety",

        womenText:
            "Protection against harassment, stalking, blackmail, fake profiles and private-content threats.",

        toolsTitle: "🛠️ CyberCare Tools",

        learnTitle: "🎓 Learn Cybersecurity",

        emergencyTitle: "🚨 Emergency Cyber Response",

        emergencyText:
            "If something is happening right now, start here."
    },

    bn: {
        language: "বাংলা",

        searchTitle: "🔎 কী ঘটেছে?",
        searchText:
            "আপনার সমস্যাটি লিখুন। CyberCare আপনাকে সবচেয়ে প্রাসঙ্গিক নিরাপত্তা নির্দেশিকা খুঁজে দেবে।",

        searchPlaceholder:
            "উদাহরণ: কেউ আমাকে ব্ল্যাকমেল করছে...",

        servicesTitle: "🛡️ আমরা কীভাবে সাহায্য করতে পারি?",

        servicesText:
            "আপনার সমস্যাটি নির্বাচন করুন এবং ধাপে ধাপে নির্দেশনা পান।",

        womenTitle:
            "নারীদের ডিজিটাল নিরাপত্তা",

        womenText:
            "হয়রানি, স্টকিং, ব্ল্যাকমেল, ভুয়া প্রোফাইল এবং ব্যক্তিগত ছবি/ভিডিও সংক্রান্ত হুমকি থেকে সুরক্ষা।",

        toolsTitle:
            "🛠️ CyberCare নিরাপত্তা টুল",

        learnTitle:
            "🎓 সাইবার নিরাপত্তা শিখুন",

        emergencyTitle:
            "🚨 জরুরি সাইবার সহায়তা",

        emergencyText:
            "এই মুহূর্তে কোনো সমস্যা হলে এখান থেকে শুরু করুন।"
    }

};


/* =========================================================
   GUIDE DATABASE
========================================================= */

const guides = {

    "Account Recovery": {

        title: "🔐 Account Recovery",

        content: `
            <h3>আপনার অ্যাকাউন্ট হারিয়ে গেলে কী করবেন</h3>

            <ol>
                <li>প্রথমে অফিসিয়াল অ্যাপ বা ওয়েবসাইট থেকেই recovery শুরু করুন।</li>

                <li>আপনার পুরোনো password মনে থাকলে সেটি ব্যবহার করুন।</li>

                <li>Recovery email বা phone number ব্যবহার করুন।</li>

                <li>OTP বা verification code কাউকে দেবেন না।</li>

                <li>অজানা recovery email/phone দেখতে পেলে account security settings পরীক্ষা করুন।</li>

                <li>অন্য কোনো device-এ account logged in থাকলে সেটি ব্যবহার করে password পরিবর্তন করুন।</li>

                <li>Two-Factor Authentication বা 2FA চালু করুন।</li>

                <li>অজানা devices এবং sessions থেকে logout করুন।</li>
            </ol>

            <h3>⚠️ গুরুত্বপূর্ণ</h3>

            <p>
                Google, Facebook, Instagram, WhatsApp বা অন্য কোনো
                legitimate service কখনো আপনার OTP, password বা UPI PIN
                চেয়ে ফোন করবে না।
            </p>
        `
    },


    "Scam & Phishing": {

        title: "🎣 Scam & Phishing",

        content: `
            <h3>প্রথমে যা করবেন</h3>

            <ol>
                <li>সন্দেহজনক link-এ click করবেন না।</li>

                <li>OTP, password বা PIN দেবেন না।</li>

                <li>Unknown caller-এর নির্দেশে কোনো app install করবেন না।</li>

                <li>Screen sharing চালু করবেন না।</li>

                <li>Banking information কাউকে দেবেন না।</li>

                <li>Message বা email-এর screenshot রেখে দিন।</li>

                <li>যদি টাকা পাঠিয়ে ফেলেন, দ্রুত আপনার bank/payment provider-এর সঙ্গে যোগাযোগ করুন।</li>
            </ol>

            <h3>Phishing চিনবেন কীভাবে?</h3>

            <ul>
                <li>অস্বাভাবিক spelling বা grammar</li>
                <li>অতিরিক্ত জরুরি হওয়ার চাপ</li>
                <li>অজানা link</li>
                <li>OTP বা password চাওয়া</li>
                <li>অস্বাভাবিক reward বা prize</li>
                <li>Account বন্ধ হয়ে যাবে বলে ভয় দেখানো</li>
            </ul>
        `
    },


    "Phone Security": {

        title: "📱 Phone Security",

        content: `
            <h3>ফোনে সন্দেহজনক activity দেখলে</h3>

            <ol>
                <li>অজানা app-এর তালিকা পরীক্ষা করুন।</li>

                <li>Settings → Apps থেকে সন্দেহজনক app uninstall করুন।</li>

                <li>App permissions পরীক্ষা করুন।</li>

                <li>Accessibility permission অজানা app-কে দেওয়া আছে কিনা দেখুন।</li>

                <li>Device administrator apps পরীক্ষা করুন।</li>

                <li>Android/iOS এবং apps update করুন।</li>

                <li>Screen lock শক্তিশালী করুন।</li>

                <li>Google/Apple account-এর password পরিবর্তন করুন যদি compromise-এর সন্দেহ থাকে।</li>
            </ol>

            <h3>⚠️ সতর্কতা</h3>

            <p>
                শুধু battery drain বা phone গরম হওয়া দেখে spyware নিশ্চিত করা যায় না।
                একাধিক warning sign থাকলে আরও পরীক্ষা করুন।
            </p>
        `
    },


    "Online Fraud": {

        title: "💳 Online & Financial Fraud",

        content: `
            <h3>টাকা সংক্রান্ত fraud হলে এখনই</h3>

            <ol>
                <li>আর কোনো টাকা পাঠাবেন না।</li>

                <li>Bank/payment app-এর official support-এ যোগাযোগ করুন।</li>

                <li>Transaction ID, UTR এবং screenshots সংরক্ষণ করুন।</li>

                <li>Card compromise হলে card block করুন।</li>

                <li>Bank account compromise হলে bank-কে জানান।</li>

                <li>UPI PIN পরিবর্তন করুন যদি PIN compromise হয়ে থাকে।</li>

                <li>ভারতে financial cyber fraud হলে দ্রুত <strong>1930</strong>-এ যোগাযোগ করুন।</li>

                <li>Official cybercrime portal ব্যবহার করে report করুন।</li>
            </ol>

            <h3>কখনো করবেন না</h3>

            <ul>
                <li>OTP share করবেন না</li>
                <li>UPI PIN share করবেন না</li>
                <li>Screen sharing করবেন না</li>
                <li>Unknown APK install করবেন না</li>
            </ul>
        `
    },


    "Suspicious Activity": {

        title: "🕵️ Suspicious Activity",

        content: `
            <h3>Unknown login বা suspicious activity হলে</h3>

            <ol>
                <li>Account-এর security/activity page খুলুন।</li>

                <li>অজানা device/session logout করুন।</li>

                <li>Password পরিবর্তন করুন।</li>

                <li>2FA চালু করুন।</li>

                <li>Recovery email এবং phone number পরীক্ষা করুন।</li>

                <li>Third-party apps এবং connected services পরীক্ষা করুন।</li>

                <li>সন্দেহজনক email বা message-এর screenshot রাখুন।</li>
            </ol>
        `
    },


    "Emergency Help": {

        title: "🚨 Emergency Help",

        content: `
            <h3>প্রথম ১০ মিনিটে যা করবেন</h3>

            <ol>
                <li>আতঙ্কিত হয়ে কোনো payment করবেন না।</li>

                <li>OTP/password/PIN কাউকে দেবেন না।</li>

                <li>Evidence delete করবেন না।</li>

                <li>Compromised account-এর password পরিবর্তন করুন।</li>

                <li>Unknown sessions logout করুন।</li>

                <li>Financial fraud হলে bank/payment provider-কে জানান।</li>

                <li>ভারতে financial cyber fraud হলে 1930-এ যোগাযোগ করুন।</li>

                <li>প্রয়োজনে cybercrime.gov.in ব্যবহার করুন।</li>
            </ol>
        `
    }

};


/* =========================================================
   WOMEN SAFETY GUIDES
========================================================= */

const womenGuides = {

    harassment: {

        title: "📞 Repeated Calls / Harassment",

        content: `
            <h3>কেউ বারবার call/message করলে</h3>

            <ol>
                <li>প্রয়োজনে reply বন্ধ করুন।</li>

                <li>Number/account block করুন।</li>

                <li>Messages, call logs এবং screenshots সংরক্ষণ করুন।</li>

                <li>Social media privacy settings শক্ত করুন।</li>

                <li>Unknown account-এর message request সীমিত করুন।</li>

                <li>হুমকি থাকলে evidence delete করবেন না।</li>

                <li>পরিস্থিতি গুরুতর হলে trusted person এবং appropriate authorities-এর সাহায্য নিন।</li>
            </ol>
        `
    },


    photo: {

        title: "📸 Photo Misuse",

        content: `
            <h3>আপনার ছবি অনুমতি ছাড়া ব্যবহার করলে</h3>

            <ol>
                <li>Post/profile-এর screenshot নিন।</li>

                <li>Profile URL এবং username সংরক্ষণ করুন।</li>

                <li>Platform-এর report system ব্যবহার করুন।</li>

                <li>Fake account হলে impersonation report করুন।</li>

                <li>প্রমাণ সংরক্ষণ করার আগে content delete করার চেষ্টা করবেন না।</li>

                <li>Threat বা harassment থাকলে সব message সংরক্ষণ করুন।</li>
            </ol>
        `
    },


    fakeprofile: {

        title: "🎭 Fake Profile",

        content: `
            <h3>ভুয়া Facebook/Instagram profile হলে</h3>

            <ol>
                <li>Fake profile-এর screenshot নিন।</li>

                <li>Profile URL copy করুন।</li>

                <li>Platform-এর impersonation/report option ব্যবহার করুন।</li>

                <li>আপনার পরিচিতদের জানান যাতে তারা account-টি বিশ্বাস না করে।</li>

                <li>নিজের account-এর privacy settings পরীক্ষা করুন।</li>
            </ol>
        `
    },


    blackmail: {

        title: "⚠️ Blackmail",

        content: `
            <h3>কেউ blackmail করলে</h3>

            <ol>
                <li><strong>টাকা দেবেন না।</strong></li>

                <li>আর কোনো ছবি, ভিডিও বা personal information পাঠাবেন না।</li>

                <li>সব message এবং threat-এর screenshot রাখুন।</li>

                <li>Username, phone number, profile URL সংরক্ষণ করুন।</li>

                <li>Evidence delete করবেন না।</li>

                <li>Blackmailer-এর সঙ্গে দীর্ঘ argument করবেন না।</li>

                <li>Account block/report করার আগে evidence সংরক্ষণ করুন।</li>

                <li>বিশ্বস্ত একজন মানুষকে জানান।</li>

                <li>গুরুতর threat হলে appropriate authorities-এর সাহায্য নিন।</li>
            </ol>

            <h3>⚠️ মনে রাখবেন</h3>

            <p>
                টাকা দিলে blackmail বন্ধ হবে—এমন কোনো নিশ্চয়তা নেই।
                অনেক ক্ষেত্রে আরও টাকা দাবি করা হতে পারে।
            </p>
        `
    },


    private: {

        title: "🔒 Private Photo / Video Threat",

        content: `
            <h3>Private content প্রকাশের হুমকি দিলে</h3>

            <ol>
                <li>Blackmailer-কে টাকা দেবেন না।</li>

                <li>নতুন কোনো ছবি বা ভিডিও পাঠাবেন না।</li>

                <li>সব threat এবং conversation সংরক্ষণ করুন।</li>

                <li>Profile/account information সংরক্ষণ করুন।</li>

                <li>Platform-এ report করুন।</li>

                <li>Account security বাড়ান এবং password পরিবর্তন করুন যদি প্রয়োজন হয়।</li>

                <li>2FA চালু করুন।</li>

                <li>Trusted person-এর সাহায্য নিন।</li>
            </ol>

            <h3>যদি content ইতিমধ্যে online থাকে</h3>

            <p>
                Post/profile-এর URL এবং screenshot সংরক্ষণ করে platform-এর
                reporting/removal process ব্যবহার করুন।
            </p>
        `
    },


    stalking: {

        title: "👁️ Online Stalking",

        content: `
            <h3>Online stalking হলে</h3>

            <ol>
                <li>অস্বাভাবিক account activity-এর screenshot রাখুন।</li>

                <li>Location sharing বন্ধ করুন।</li>

                <li>Social media privacy settings শক্ত করুন।</li>

                <li>Unknown followers/remove connections পরীক্ষা করুন।</li>

                <li>অজানা login sessions logout করুন।</li>

                <li>Password পরিবর্তন করুন এবং 2FA চালু করুন।</li>

                <li>Threat থাকলে evidence সংরক্ষণ করুন।</li>

                <li>প্রয়োজনে trusted person এবং authorities-এর সাহায্য নিন।</li>
            </ol>
        `
    }

};


/* =========================================================
   LEARNING CONTENT
========================================================= */

const learningGuides = {

    password: {

        title: "🔐 Password Safety",

        content: `
            <h3>ভালো password-এর বৈশিষ্ট্য</h3>

            <ul>
                <li>প্রতিটি গুরুত্বপূর্ণ account-এর জন্য আলাদা password ব্যবহার করুন।</li>
                <li>দীর্ঘ passphrase ব্যবহার করুন।</li>
                <li>সহজে অনুমান করা যায় এমন তথ্য ব্যবহার করবেন না।</li>
                <li>Password manager ব্যবহার করতে পারেন।</li>
                <li>কাউকে password দেবেন না।</li>
            </ul>
        `
    },


    "2fa": {

        title: "🔑 Two-Factor Authentication",

        content: `
            <h3>2FA কেন গুরুত্বপূর্ণ?</h3>

            <p>
                Password চুরি হলেও দ্বিতীয় verification layer account-কে
                অতিরিক্ত সুরক্ষা দিতে পারে।
            </p>

            <ol>
                <li>Account security settings খুলুন।</li>
                <li>Two-Factor Authentication চালু করুন।</li>
                <li>Authenticator app বা supported security method ব্যবহার করুন।</li>
                <li>Recovery codes নিরাপদ জায়গায় রাখুন।</li>
            </ol>
        `
    },


    phishing: {

        title: "🎣 Phishing",

        content: `
            <h3>Phishing কী?</h3>

            <p>
                Phishing হলো এমন প্রতারণা যেখানে attacker
                legitimate company বা ব্যক্তির পরিচয় ব্যবহার করে
                আপনার information নেওয়ার চেষ্টা করে।
            </p>

            <h3>সতর্কতার লক্ষণ</h3>

            <ul>
                <li>Urgent message</li>
                <li>Suspicious URL</li>
                <li>OTP request</li>
                <li>Prize বা reward</li>
                <li>Account বন্ধ করার ভয় দেখানো</li>
            </ul>
        `
    },


    privacy: {

        title: "🔒 Privacy",

        content: `
            <h3>Privacy বাড়ানোর সহজ উপায়</h3>

            <ol>
                <li>Social media privacy settings পরীক্ষা করুন।</li>
                <li>Location permission সীমিত করুন।</li>
                <li>অপ্রয়োজনীয় app permissions বন্ধ করুন।</li>
                <li>Public profile information কমান।</li>
                <li>Unknown followers এবং connected apps পরীক্ষা করুন।</li>
            </ol>
        `
    },


    phone: {

        title: "📱 Phone Security",

        content: `
            <h3>ফোন নিরাপদ রাখুন</h3>

            <ul>
                <li>শুধু trusted source থেকে app install করুন।</li>
                <li>Operating system update রাখুন।</li>
                <li>Unknown APK এড়িয়ে চলুন।</li>
                <li>App permissions নিয়মিত পরীক্ষা করুন।</li>
                <li>Strong screen lock ব্যবহার করুন।</li>
            </ul>
        `
    },


    financial: {

        title: "💳 Financial Safety",

        content: `
            <h3>Financial fraud এড়াতে</h3>

            <ul>
                <li>UPI PIN কাউকে দেবেন না।</li>
                <li>OTP কাউকে দেবেন না।</li>
                <li>Unknown QR code ব্যবহার করার আগে সতর্ক থাকুন।</li>
                <li>Unknown screen-sharing app install করবেন না।</li>
                <li>Payment করার আগে receiver যাচাই করুন।</li>
            </ul>
        `
    }

};


/* =========================================================
   TOOL CONTENT
========================================================= */

const toolGuides = {

    privacy: {

        title: "📱 Privacy Checklist",

        content: `
            <h3>Privacy Checklist</h3>

            <ul>
                <li>☐ Social media profile visibility পরীক্ষা করুন</li>
                <li>☐ Location permission পরীক্ষা করুন</li>
                <li>☐ Camera permission পরীক্ষা করুন</li>
                <li>☐ Microphone permission পরীক্ষা করুন</li>
                <li>☐ Contacts permission পরীক্ষা করুন</li>
                <li>☐ Unknown apps remove করুন</li>
                <li>☐ Connected accounts পরীক্ষা করুন</li>
                <li>☐ 2FA চালু করুন</li>
            </ul>
        `
    },


    evidence: {

        title: "🧾 Evidence Checklist",

        content: `
            <h3>Evidence কী কী রাখবেন?</h3>

            <ul>
                <li>📸 Screenshots</li>
                <li>🔗 Profile/website URL</li>
                <li>👤 Username</li>
                <li>📞 Phone number</li>
                <li>🕐 Date এবং time</li>
                <li>💳 Transaction ID / UTR</li>
                <li>📧 Email headers/details যেখানে প্রয়োজন</li>
                <li>💬 Messages এবং threats</li>
            </ul>

            <p>
                Original evidence edit বা crop করার আগে একটি original copy
                নিরাপদে রাখুন।
            </p>
        `
    }

};


/* =========================================================
   MODAL SYSTEM
========================================================= */

function openModal(title, content) {

    closeModal();

    const overlay = document.createElement("div");

    overlay.className = "guide-overlay";

    overlay.id = "guideOverlay";

    overlay.innerHTML = `
        <div class="guide-modal" role="dialog" aria-modal="true">

            <button
                class="guide-close"
                id="guideClose"
                aria-label="Close"
            >
                ✕
            </button>

            <h2>${title}</h2>

            <div class="guide-content">
                ${content}
            </div>

            <button class="guide-ok" id="guideOk">
                ✓ বুঝেছি
            </button>

        </div>
    `;

    document.body.appendChild(overlay);

    document.body.style.overflow = "hidden";

    document.getElementById("guideClose")
        ?.addEventListener("click", closeModal);

    document.getElementById("guideOk")
        ?.addEventListener("click", closeModal);

    overlay.addEventListener("click", function(e) {

        if (e.target === overlay) {
            closeModal();
        }

    });

}


function closeModal() {

    const modal = document.getElementById("guideOverlay");

    if (modal) {
        modal.remove();
    }

    document.body.style.overflow = "";
}


/* =========================================================
   SERVICE BUTTONS
========================================================= */

document.querySelectorAll(".help-btn").forEach(button => {

    button.addEventListener("click", function() {

        const service = this.dataset.service;

        const guide = guides[service];

        if (guide) {

            openModal(
                guide.title,
                guide.content
            );

        }

    });

});


/* =========================================================
   WOMEN SAFETY BUTTONS
========================================================= */

document.querySelectorAll(".women-btn").forEach(button => {

    button.addEventListener("click", function() {

        const type = this.dataset.women;

        const guide = womenGuides[type];

        if (guide) {

            openModal(
                guide.title,
                guide.content
            );

        }

    });

});


/* =========================================================
   LEARNING BUTTONS
========================================================= */

document.querySelectorAll(".learn-card").forEach(button => {

    button.addEventListener("click", function() {

        const type = this.dataset.learn;

        const guide = learningGuides[type];

        if (guide) {

            openModal(
                guide.title,
                guide.content
            );

        }

    });

});


/* =========================================================
   TOOLS
========================================================= */

document.querySelectorAll(".tool-btn").forEach(button => {

    button.addEventListener("click", function() {

        const type = this.dataset.tool;

        if (type === "password") {

            openPasswordChecker();

            return;
        }

        if (type === "url") {

            openURLChecker();

            return;
        }

        if (type === "scam") {

            openScamScanner();

            return;
        }

        if (toolGuides[type]) {

            openModal(
                toolGuides[type].title,
                toolGuides[type].content
            );

            return;
        }

        if (type === "score") {

            openSafetyScore();

        }

    });

});


/* =========================================================
   PASSWORD CHECKER
========================================================= */

function openPasswordChecker() {

    openModal(

        "🔐 Password Strength Checker",

        `
            <p>
                কোনো real password এখানে ব্যবহার না করাই ভালো।
                একটি example password দিয়ে পরীক্ষা করুন।
            </p>

            <input
                id="passwordToolInput"
                type="password"
                placeholder="Enter example password"
                style="
                    width:100%;
                    padding:14px;
                    margin:15px 0 10px;
                    border:1px solid #cbd5e1;
                    border-radius:10px;
                "
            >

            <div
                id="passwordStrength"
                style="
                    padding:12px;
                    border-radius:10px;
                    background:#f1f5f9;
                "
            >
                Result will appear here.
            </div>
        `

    );

    const input = document.getElementById("passwordToolInput");

    const result = document.getElementById("passwordStrength");

    if (!input || !result) return;

    input.addEventListener("input", function() {

        const password = this.value;

        let score = 0;

        if (password.length >= 8) score++;

        if (password.length >= 12) score++;

        if (/[A-Z]/.test(password)) score++;

        if (/[a-z]/.test(password)) score++;

        if (/[0-9]/.test(password)) score++;

        if (/[^A-Za-z0-9]/.test(password)) score++;

        if (!password) {

            result.textContent =
                "Enter an example password.";

            return;
        }

        if (score <= 2) {

            result.textContent =
                "🔴 Weak — make it longer and more unique.";

        } else if (score <= 4) {

            result.textContent =
                "🟠 Medium — improve length and uniqueness.";

        } else {

            result.textContent =
                "🟢 Strong — still use a unique password for each account.";

        }

    });

}


/* =========================================================
   URL CHECKER
========================================================= */

function openURLChecker() {

    openModal(

        "🔗 URL Safety Checker",

        `
            <p>
                এটি শুধুমাত্র common warning signs পরীক্ষা করে।
                এটি কোনো website-কে 100% safe বা malicious নিশ্চিত করতে পারে না।
            </p>

            <input
                id="urlToolInput"
                type="url"
                placeholder="https://example.com"
                style="
                    width:100%;
                    padding:14px;
                    margin:15px 0 10px;
                    border:1px solid #cbd5e1;
                    border-radius:10px;
                "
            >

            <div
                id="urlToolResult"
                style="
                    padding:12px;
                    border-radius:10px;
                    background:#f1f5f9;
                "
            >
                Enter a URL to check.
            </div>
        `
    );

    const input = document.getElementById("urlToolInput");

    const result = document.getElementById("urlToolResult");

    if (!input || !result) return;

    input.addEventListener("input", function() {

        const value = this.value.trim();

        if (!value) {

            result.textContent =
                "Enter a URL to check.";

            return;
        }

        let warnings = [];

        try {

            const url = new URL(value);

            if (url.protocol !== "https:") {

                warnings.push(
                    "Connection is not using HTTPS."
                );

            }

            if (url.hostname.includes("@")) {

                warnings.push(
                    "Suspicious @ symbol detected."
                );

            }

            if (
                url.hostname.split(".").length > 4
            ) {

                warnings.push(
                    "Unusually complex hostname."
                );

            }

            if (
                /login|verify|secure|account|update/i
                .test(url.hostname)
            ) {

                warnings.push(
                    "Hostname contains words commonly used in phishing."
                );

            }

            if (warnings.length) {

                result.innerHTML =
                    "⚠️ Warning signs:<ul>" +
                    warnings.map(x => `<li>${x}</li>`).join("") +
                    "</ul>";

            } else {

                result.textContent =
                    "🟢 No obvious warning sign detected. Still verify the domain before entering information.";

            }

        } catch {

            result.textContent =
                "❌ Invalid URL format.";

        }

    });

}


/* =========================================================
   SCAM SCANNER
========================================================= */

function openScamScanner() {

    openModal(

        "🎣 Scam Message Scanner",

        `
            <p>
                সন্দেহজনক message এখানে paste করুন।
                কোনো password, OTP, PIN বা private information paste করবেন না।
            </p>

            <textarea
                id="scamInput"
                rows="7"
                placeholder="Paste suspicious message here..."
                style="
                    width:100%;
                    padding:14px;
                    margin:15px 0 10px;
                    border:1px solid #cbd5e1;
                    border-radius:10px;
                    resize:vertical;
                "
            ></textarea>

            <button
                id="scanMessageBtn"
                style="
                    width:100%;
                    padding:13px;
                    border:0;
                    border-radius:10px;
                    background:#2563eb;
                    color:white;
                    font-weight:800;
                "
            >
                🔎 Scan Message
            </button>

            <div
                id="scamResult"
                style="
                    margin-top:15px;
                    padding:14px;
                    border-radius:10px;
                    background:#f1f5f9;
                "
            >
                Result will appear here.
            </div>
        `
    );

    document
        .getElementById("scanMessageBtn")
        ?.addEventListener("click", scanScamMessage);

}


function scanScamMessage() {

    const input =
        document.getElementById("scamInput");

    const result =
        document.getElementById("scamResult");

    if (!input || !result) return;

    const text =
        input.value.toLowerCase();

    if (!text.trim()) {

        result.textContent =
            "Please enter a message.";

        return;
    }

    const checks = [

        {
            words: [
                "otp",
                "verification code",
                "login code"
            ],
            label:
                "🔑 OTP / verification code request"
        },

        {
            words: [
                "upi pin",
                "pin",
                "cvv",
                "card number"
            ],
            label:
                "💳 Banking information request"
        },

        {
            words: [
                "click",
                "click here",
                "verify now",
                "login now"
            ],
            label:
                "🔗 Suspicious link/action request"
        },

        {
            words: [
                "winner",
                "lottery",
                "prize",
                "reward"
            ],
            label:
                "🎁 Prize/reward claim"
        },

        {
            words: [
                "urgent",
                "immediately",
                "account blocked",
                "account will be closed"
            ],
            label:
                "🚨 Urgency or fear tactic"
        },

        {
            words: [
                "remote",
                "screen sharing",
                "anydesk",
                "teamviewer"
            ],
            label:
                "📱 Remote access request"
        },

        {
            words: [
                "investment",
                "double your money",
                "guaranteed profit"
            ],
            label:
                "💰 Suspicious investment promise"
        }

    ];

    const findings = [];

    checks.forEach(check => {

        if (
            check.words.some(word =>
                text.includes(word)
            )
        ) {

            findings.push(check.label);

        }

    });


    if (findings.length >= 3) {

        result.innerHTML = `
            <strong>🔴 High-risk warning signs detected</strong>

            <ul style="margin-top:10px;padding-left:20px;">
                ${findings.map(x => `<li>${x}</li>`).join("")}
            </ul>

            <p style="margin-top:12px;">
                Do not click links, send money, or share OTP/PIN/password.
            </p>
        `;

    } else if (findings.length >= 1) {

        result.innerHTML = `
            <strong>🟠 Warning signs detected</strong>

            <ul style="margin-top:10px;padding-left:20px;">
                ${findings.map(x => `<li>${x}</li>`).join("")}
            </ul>

            <p style="margin-top:12px;">
                Verify the sender independently before taking action.
            </p>
        `;

    } else {

        result.innerHTML = `
            <strong>🟢 No common scam pattern detected.</strong>

            <p style="margin-top:10px;">
                This does not guarantee the message is safe.
                Always verify links, sender identity and requests for money or credentials.
            </p>
        `;

    }

}


/* =========================================================
   CYBER SAFETY SCORE
========================================================= */

function openSafetyScore() {

    openModal(

        "🛡️ Cyber Safety Score",

        `
            <p>নিজের basic security habits পরীক্ষা করুন:</p>

            <div style="margin-top:15px;">

                <label>
                    <input type="checkbox" class="score-check">
                    আমি প্রতিটি account-এ আলাদা password ব্যবহার করি।
                </label>

                <br><br>

                <label>
                    <input type="checkbox" class="score-check">
                    গুরুত্বপূর্ণ account-এ 2FA চালু আছে।
                </label>

                <br><br>

                <label>
                    <input type="checkbox" class="score-check">
                    আমি OTP/PIN কাউকে দিই না।
                </label>

                <br><br>

                <label>
                    <input type="checkbox" class="score-check">
                    Unknown link-এ click করার আগে যাচাই করি।
                </label>

                <br><br>

                <label>
                    <input type="checkbox" class="score-check">
                    ফোন এবং apps update রাখি।
                </label>

                <br><br>

                <label>
                    <input type="checkbox" class="score-check">
                    Social media privacy settings পরীক্ষা করি।
                </label>

            </div>

            <button
                id="calculateScore"
                style="
                    width:100%;
                    margin-top:20px;
                    padding:13px;
                    border:0;
                    border-radius:10px;
                    background:#2563eb;
                    color:white;
                    font-weight:800;
                "
            >
                Calculate Score
            </button>

            <div
                id="scoreResult"
                style="
                    margin-top:15px;
                    padding:14px;
                    border-radius:10px;
                    background:#f1f5f9;
                "
            ></div>
        `
    );

    document
        .getElementById("calculateScore")
        ?.addEventListener("click", function() {

            const checks =
                document.querySelectorAll(".score-check");

            let score = 0;

            checks.forEach(check => {

                if (check.checked) {
                    score++;
                }

            });

            const percentage =
                Math.round((score / checks.length) * 100);

            const result =
                document.getElementById("scoreResult");

            if (!result) return;

            if (percentage >= 80) {

                result.innerHTML =
                    `🟢 <strong>${percentage}%</strong><br>
                    Great! Your basic security habits are strong.`;

            } else if (percentage >= 50) {

                result.innerHTML =
                    `🟠 <strong>${percentage}%</strong><br>
                    Good start. Improve the unchecked areas.`;

            } else {

                result.innerHTML =
                    `🔴 <strong>${percentage}%</strong><br>
                    Your digital security needs improvement.`;

            }

        });

}


/* =========================================================
   SMART SEARCH DATABASE
========================================================= */

const searchTopics = [

    {
        keywords: [
            "blackmail",
            "ব্ল্যাকমেল",
            "threat",
            "হুমকি"
        ],
        title: "⚠️ Blackmail / Threat",
        description:
            "Someone is threatening or blackmailing you.",
        guide:
            womenGuides.blackmail
    },

    {
        keywords: [
            "photo",
            "ছবি",
            "picture",
            "photo misuse"
        ],
        title: "📸 Photo Misuse",
        description:
            "Someone is using your photo without permission.",
        guide:
            womenGuides.photo
    },

    {
        keywords: [
            "fake profile",
            "fake account",
            "ভুয়া প্রোফাইল",
            "fake id"
        ],
        title: "🎭 Fake Profile",
        description:
            "Someone created a fake social-media profile.",
        guide:
            womenGuides.fakeprofile
    },

    {
        keywords: [
            "stalking",
            "স্টকিং",
            "follow",
            "monitor"
        ],
        title: "👁️ Online Stalking",
        description:
            "Someone repeatedly follows or monitors you.",
        guide:
            womenGuides.stalking
    },

    {
        keywords: [
            "call",
            "calls",
            "message",
            "harass",
            "হয়রানি",
            "বিরক্ত"
        ],
        title: "📞 Harassment",
        description:
            "Someone keeps calling or messaging you.",
        guide:
            womenGuides.harassment
    },

    {
        keywords: [
            "account hacked",
            "account hack",
            "হ্যাক",
            "login",
            "password"
        ],
        title: "🔐 Account Recovery",
        description:
            "Your account may be compromised or inaccessible.",
        guide:
            guides["Account Recovery"]
    },

    {
        keywords: [
            "scam",
            "scam message",
            "phishing",
            "fake link",
            "otp",
            "ফিশিং",
            "প্রতারণা"
        ],
        title: "🎣 Scam & Phishing",
        description:
            "Suspicious message, link or OTP request.",
        guide:
            guides["Scam & Phishing"]
    },

    {
        keywords: [
            "money",
            "money stolen",
            "upi",
            "bank",
            "fraud",
            "payment",
            "টাকা",
            "ব্যাংক"
        ],
        title: "💳 Online & Financial Fraud",
        description:
            "Money, UPI, bank or payment fraud.",
        guide:
            guides["Online Fraud"]
    },

    {
        keywords: [
            "phone hacked",
            "spyware",
            "unknown app",
            "phone",
            "মোবাইল",
            "ফোন"
        ],
        title: "📱 Phone Security",
        description:
            "Suspicious app, spyware concern or phone compromise.",
        guide:
            guides["Phone Security"]
    },

    {
        keywords: [
            "unknown login",
            "suspicious login",
            "unknown device",
            "অজানা লগইন"
        ],
        title: "🕵️ Suspicious Activity",
        description:
            "Unknown login or suspicious account activity.",
        guide:
            guides["Suspicious Activity"]
    }

];


/* =========================================================
   SMART SEARCH
========================================================= */

const searchInput =
    document.getElementById("problemSearch");

const searchResults =
    document.getElementById("searchResults");

const clearSearch =
    document.getElementById("clearSearch");

const searchSuggestions =
    document.getElementById("searchSuggestions");


function performSearch(query) {

    if (!searchResults) return;

    query =
        query.trim().toLowerCase();

    searchResults.innerHTML = "";

    if (!query) {

        if (searchSuggestions) {
            searchSuggestions.innerHTML = "";
        }

        return;
    }

    const results =
        searchTopics.filter(topic =>

            topic.keywords.some(keyword =>
                query.includes(keyword.toLowerCase()) ||
                keyword.toLowerCase().includes(query)
            )

        );


    if (!results.length) {

        searchResults.innerHTML = `
            <div class="search-result">

                <h3>🔎 No exact guide found</h3>

                <p>
                    Try words like:
                    blackmail, hacked, OTP, scam,
                    fake profile, harassment, UPI,
                    phone hacked, photo misuse.
                </p>

            </div>
        `;

        return;
    }


    results.forEach(topic => {

        const box =
            document.createElement("div");

        box.className =
            "search-result";

        box.innerHTML = `

            <h3>${topic.title}</h3>

            <p>${topic.description}</p>

            <button class="result-help">
                Get Step-by-Step Help →
            </button>

        `;

        box.querySelector(".result-help")
            .addEventListener("click", () => {

                openModal(
                    topic.guide.title,
                    topic.guide.content
                );

            });

        searchResults.appendChild(box);

    });

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function() {

            performSearch(this.value);

        }
    );

}


if (clearSearch) {

    clearSearch.addEventListener(
        "click",
        function() {

            if (searchInput) {

                searchInput.value = "";

                searchInput.focus();

            }

            if (searchResults) {

                searchResults.innerHTML = "";

            }

        }
    );

}


/* =========================================================
   QUICK HELP
========================================================= */

const quickHelpBtn =
    document.getElementById("quickHelpBtn");

if (quickHelpBtn) {

    quickHelpBtn.addEventListener(
        "click",
        function() {

            const search =
                document.getElementById("problemSearch");

            if (search) {

                search.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                setTimeout(() => {
                    search.focus();
                }, 400);

            }

        }
    );

}


/* =========================================================
   EMERGENCY BUTTON
========================================================= */

const emergencyBtn =
    document.getElementById("emergencyBtn");

if (emergencyBtn) {

    emergencyBtn.addEventListener(
        "click",
        function() {

            const section =
                document.querySelector(
                    ".emergency-section"
                );

            if (section) {

                section.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


/* =========================================================
   EMERGENCY GRID
========================================================= */

document
    .querySelectorAll("[data-emergency]")
    .forEach(button => {

        button.addEventListener(
            "click",
            function() {

                const type =
                    this.dataset.emergency;

                if (type === "account") {

                    openModal(
                        "🔐 Account Compromised",
                        `
                            <ol>
                                <li>Password পরিবর্তন করুন।</li>
                                <li>Unknown sessions logout করুন।</li>
                                <li>Recovery email/phone পরীক্ষা করুন।</li>
                                <li>2FA চালু করুন।</li>
                            </ol>
                        `
                    );

                }


                if (type === "money") {

                    openModal(
                        "💳 Money at Risk",
                        `
                            <ol>
                                <li>আর কোনো payment করবেন না।</li>
                                <li>Bank/payment provider-এর official support-এ যোগাযোগ করুন।</li>
                                <li>Transaction details সংরক্ষণ করুন।</li>
                                <li>ভারতে financial cyber fraud হলে 1930-এ দ্রুত যোগাযোগ করুন।</li>
                            </ol>
                        `
                    );

                }


                if (type === "blackmail") {

                    openModal(
                        womenGuides.blackmail.title,
                        womenGuides.blackmail.content
                    );

                }


                if (type === "phone") {

                    openModal(
                        "📱 Phone Compromised",
                        `
                            <ol>
                                <li>Unknown app পরীক্ষা করুন।</li>
                                <li>Suspicious app remove করুন।</li>
                                <li>Important account password পরিবর্তন করুন।</li>
                                <li>2FA চালু করুন।</li>
                                <li>প্রয়োজনে trusted security professional-এর সাহায্য নিন।</li>
                            </ol>
                        `
                    );

                }

            }
        );

    });


/* =========================================================
   SIDE MENU
========================================================= */

const menuBtn =
    document.getElementById("menuBtn");

const closeMenuBtn =
    document.getElementById("closeMenu");

const sideMenu =
    document.getElementById("sideMenu");

const menuOverlay =
    document.getElementById("menuOverlay");


function openMenu() {

    if (!sideMenu || !menuOverlay) return;

    sideMenu.classList.add("active");

    menuOverlay.classList.add("active");

    document.body.classList.add("menu-open");

}


function closeMenu() {

    if (!sideMenu || !menuOverlay) return;

    sideMenu.classList.remove("active");

    menuOverlay.classList.remove("active");

    document.body.classList.remove("menu-open");

}


menuBtn?.addEventListener(
    "click",
    openMenu
);

closeMenuBtn?.addEventListener(
    "click",
    closeMenu
);

menuOverlay?.addEventListener(
    "click",
    closeMenu
);


/* =========================================================
   SIDE MENU NAVIGATION
========================================================= */

document
    .querySelectorAll(".menu-item")
    .forEach(button => {

        button.addEventListener(
            "click",
            function() {

                const target =
                    this.dataset.menu;

                closeMenu();

                if (target === "services") {

                    document
                        .getElementById("services")
                        ?.scrollIntoView({
                            behavior: "smooth"
                        });

                    return;
                }


                if (target === "women") {

                    document
                        .getElementById("women")
                        ?.scrollIntoView({
                            behavior: "smooth"
                        });

                    return;
                }


                if (target === "tools") {

                    document
                        .getElementById("tools")
                        ?.scrollIntoView({
                            behavior: "smooth"
                        });

                    return;
                }


                if (target === "learn") {

                    document
                        .getElementById("learn")
                        ?.scrollIntoView({
                            behavior: "smooth"
                        });

                    return;
                }


                if (target === "emergency") {

                    document
                        .querySelector(".emergency-section")
                        ?.scrollIntoView({
                            behavior: "smooth"
                        });

                    return;
                }


                if (target === "india") {

                    document
                        .getElementById("india")
                        ?.scrollIntoView({
                            behavior: "smooth"
                        });

                    return;
                }


                if (target === "about") {

                    document
                        .getElementById("about")
                        ?.scrollIntoView({
                            behavior: "smooth"
                        });

                }

            }
        );

    });


/* =========================================================
   DARK MODE
========================================================= */

const themeBtn =
    document.getElementById("themeBtn");


function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

        if (themeBtn) {
            themeBtn.textContent = "☀️";
        }

    } else {

        document.body.classList.remove(
            "dark-mode"
        );

        if (themeBtn) {
            themeBtn.textContent = "🌙";
        }

    }

}


const savedTheme =
    localStorage.getItem("cybercare-theme");

if (savedTheme) {

    applyTheme(savedTheme);

} else {

    applyTheme("light");

}


themeBtn?.addEventListener(
    "click",
    function() {

        const dark =
            document.body.classList.contains(
                "dark-mode"
            );

        const newTheme =
            dark ? "light" : "dark";

        applyTheme(newTheme);

        localStorage.setItem(
            "cybercare-theme",
            newTheme
        );

    }
);


/* =========================================================
   LANGUAGE SWITCH
========================================================= */

const languageBtn =
    document.getElementById("languageBtn");

const languageText =
    document.getElementById("languageText");


function setLanguage(language) {

    const data =
        translations[language];

    if (!data) return;

    if (languageText) {

        languageText.textContent =
            language === "bn"
                ? "বাংলা"
                : "EN";

    }

    const searchTitle =
        document.querySelector(
            ".search-section h2"
        );

    const searchParagraph =
        document.querySelector(
            ".search-section > p"
        );

    if (searchTitle) {
        searchTitle.textContent =
            data.searchTitle;
    }

    if (searchParagraph) {
        searchParagraph.textContent =
            data.searchText;
    }

    if (searchInput) {
        searchInput.placeholder =
            data.searchPlaceholder;
    }


    const servicesTitle =
        document.querySelector(
            ".services h2"
        );

    const servicesText =
        document.querySelector(
            ".services .section-text"
        );

    if (servicesTitle) {
        servicesTitle.textContent =
            data.servicesTitle;
    }

    if (servicesText) {
        servicesText.textContent =
            data.servicesText;
    }


    const womenTitle =
        document.querySelector(
            ".women-section h2"
        );

    const womenText =
        document.querySelector(
            ".women-section .section-text"
        );

    if (womenTitle) {
        womenTitle.textContent =
            data.womenTitle;
    }

    if (womenText) {
        womenText.textContent =
            data.womenText;
    }


    const toolsTitle =
        document.querySelector(
            ".tools h2"
        );

    if (toolsTitle) {
        toolsTitle.textContent =
            data.toolsTitle;
    }


    const learnTitle =
        document.querySelector(
            ".learn-section h2"
        );

    if (learnTitle) {
        learnTitle.textContent =
            data.learnTitle;
    }


    const emergencyTitle =
        document.querySelector(
            ".emergency-section h2"
        );

    const emergencyText =
        document.querySelector(
            ".emergency-section > p"
        );

    if (emergencyTitle) {
        emergencyTitle.textContent =
            data.emergencyTitle;
    }

    if (emergencyText) {
        emergencyText.textContent =
            data.emergencyText;
    }


    localStorage.setItem(
        "cybercare-language",
        language
    );

}


const savedLanguage =
    localStorage.getItem(
        "cybercare-language"
    ) || "en";

setLanguage(savedLanguage);


languageBtn?.addEventListener(
    "click",
    function() {

        const current =
            localStorage.getItem(
                "cybercare-language"
            ) || "en";

        setLanguage(
            current === "en"
                ? "bn"
                : "en"
        );

    }
);


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeModal();

            closeMenu();

        }

    }
);


/* =========================================================
   PREVENT EMPTY SEARCH SUBMIT BEHAVIOR
========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                performSearch(
                    this.value
                );

            }

        }
    );

}


/* =========================================================
   BASIC SECURITY HELPERS
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%c🛡️ CyberCare loaded successfully.",
    "font-size:16px;font-weight:bold;color:#2563eb;"
);

console.log(
    "CyberCare provides educational digital-safety guidance."
);


/* =========================================================
   END
========================================================= */
