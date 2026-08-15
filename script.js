// ============================================================
// CYBERCARE — A-Z COMPLETE DIGITAL SAFETY SYSTEM
// ============================================================
// Search + A-Z Help Desk
// Social Media Help Desk
// Facebook / Instagram / WhatsApp / Telegram / YouTube
// TikTok / X / Snapchat / LinkedIn / Google / Gmail / Discord
//
// Account Hacked / Suspended / Disabled / Recovery
// Support Contact + Email Templates
// Fake Profile / Impersonation / Harassment / Blackmail
// Photo / Video Misuse / Stalking / Privacy
// Phishing / Scam / Financial Fraud / UPI
// Phone Security Audit / Permissions / Accessibility
// Camera / Microphone / Location / Device Admin
// Evidence Checklist
// Cyber Safety Score
// Scam Checker
// Password Checker
// Women's Safety
// Emergency Help
// India Cyber Help
// Feedback / Suggestion Dropbox
// Bengali / English
// Dark Mode
// Mobile UX
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    // =========================================================
    // HELPERS
    // =========================================================

    const $ = (selector, parent = document) =>
        parent.querySelector(selector);

    const $$ = (selector, parent = document) =>
        [...parent.querySelectorAll(selector)];

    const text = value =>
        String(value ?? "").trim();

    const normalize = value =>
        text(value).toLowerCase();

    function escapeHTML(value) {
        return text(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function scrollToSection(id) {

        const section = document.getElementById(id);

        if (section) {

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }

    // =========================================================
    // MENU
    // =========================================================

    const menuBtn = $("#menuBtn");
    const closeMenu = $("#closeMenu");
    const sideMenu = $("#sideMenu");
    const menuOverlay = $("#menuOverlay");

    function openMenu() {

        sideMenu?.classList.add("active");
        menuOverlay?.classList.add("active");
        document.body.classList.add("menu-open");

    }

    function closeSideMenu() {

        sideMenu?.classList.remove("active");
        menuOverlay?.classList.remove("active");
        document.body.classList.remove("menu-open");

    }

    menuBtn?.addEventListener("click", openMenu);
    closeMenu?.addEventListener("click", closeSideMenu);
    menuOverlay?.addEventListener("click", closeSideMenu);

    // =========================================================
    // MENU NAVIGATION
    // =========================================================

    $$(".menu-item").forEach(item => {

        item.addEventListener("click", () => {

            const target = item.dataset.menu;

            closeSideMenu();

            const map = {
                services: "services",
                women: "women",
                tools: "tools",
                learn: "learn",
                india: "india",
                about: "about",
                social: "socialHelpDesk",
                scan: "scan",
                feedback: "feedback"
            };

            if (map[target]) {

                scrollToSection(map[target]);

                return;

            }

            if (target === "emergency") {

                document
                    .querySelector(".emergency-section")
                    ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

            }

        });

    });

    // =========================================================
    // HERO BUTTONS
    // =========================================================

    $("#emergencyBtn")?.addEventListener("click", () => {

        document
            .querySelector(".emergency-section")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

    });

    $("#quickHelpBtn")?.addEventListener("click", () => {

        document
            .querySelector(".search-section")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        setTimeout(() => {
            $("#problemSearch")?.focus();
        }, 400);

    });

    // =========================================================
    // DARK MODE
    // =========================================================

    let darkMode =
        localStorage.getItem("cybercare-theme") === "dark";

    const themeBtn = $("#themeBtn");

    function applyTheme() {

        document.body.classList.toggle(
            "dark-mode",
            darkMode
        );

        if (themeBtn) {

            themeBtn.textContent =
                darkMode ? "☀️" : "🌙";

            themeBtn.setAttribute(
                "aria-label",
                darkMode
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

        }

    }

    applyTheme();

    themeBtn?.addEventListener("click", () => {

        darkMode = !darkMode;

        localStorage.setItem(
            "cybercare-theme",
            darkMode ? "dark" : "light"
        );

        applyTheme();

    });

    // =========================================================
    // LANGUAGE
    // =========================================================

    let bengali =
        localStorage.getItem("cybercare-language") === "bn";

    const languageBtn = $("#languageBtn");
    const languageText = $("#languageText");

    const translations = {

        "Protecting People. Securing Digital Lives.":
            "মানুষকে সুরক্ষিত রাখা। ডিজিটাল জীবনকে নিরাপদ রাখা।",

        "How Can We Help You?":
            "আমরা কীভাবে সাহায্য করতে পারি?",

        "What happened?":
            "কী ঘটেছে?",

        "Women's Digital Safety":
            "নারীদের ডিজিটাল নিরাপত্তা",

        "CyberCare Tools":
            "CyberCare টুলস",

        "Learn Cybersecurity":
            "সাইবার নিরাপত্তা শিখুন",

        "Emergency Help":
            "জরুরি সহায়তা",

        "India Cyber Help":
            "ভারতে সাইবার সহায়তা",

        "Social Media Help Desk":
            "সোশ্যাল মিডিয়া হেল্প ডেস্ক",

        "Account Recovery":
            "অ্যাকাউন্ট রিকভারি",

        "Blackmail":
            "ব্ল্যাকমেইল",

        "Harassment":
            "হয়রানি",

        "Privacy Problem":
            "প্রাইভেসি সমস্যা",

        "Fake Profile":
            "ভুয়া প্রোফাইল",

        "Photo Misuse":
            "ছবির অপব্যবহার",

        "Online Stalking":
            "অনলাইন স্টকিং",

        "Account Suspended":
            "অ্যাকাউন্ট সাসপেন্ড",

        "Account Disabled":
            "অ্যাকাউন্ট ডিজেবল",

        "Scam & Phishing":
            "স্ক্যাম ও ফিশিং",

        "Phone Security":
            "ফোন নিরাপত্তা",

        "Financial Fraud":
            "আর্থিক প্রতারণা",

        "Evidence Checklist":
            "প্রমাণ সংরক্ষণের তালিকা",

        "Privacy Checklist":
            "প্রাইভেসি চেকলিস্ট",

        "Cyber Safety Score":
            "সাইবার নিরাপত্তা স্কোর",

        "Find My Problem":
            "আমার সমস্যাটি খুঁজুন",

        "Open Tool":
            "টুল খুলুন",

        "Get Help":
            "সাহায্য নিন",

        "View Full Guide":
            "সম্পূর্ণ গাইড দেখুন",

        "I Need Help Now":
            "আমার এখনই সাহায্য দরকার"

    };

    function translatePage() {

        $$("h1,h2,h3,h4,p,button,strong,small,label").forEach(el => {

            if (!el.dataset.originalText) {

                el.dataset.originalText =
                    el.textContent.trim();

            }

            const original =
                el.dataset.originalText;

            if (
                bengali &&
                translations[original]
            ) {

                el.textContent =
                    translations[original];

            } else {

                el.textContent =
                    original;

            }

        });

        if (languageText) {

            languageText.textContent =
                bengali ? "বাংলা" : "EN";

        }

        localStorage.setItem(
            "cybercare-language",
            bengali ? "bn" : "en"
        );

    }

    languageBtn?.addEventListener("click", () => {

        bengali = !bengali;

        translatePage();

    });

    translatePage();

    // =========================================================
    // SUPPORT TEMPLATE GENERATOR
    // =========================================================

    function supportTemplate(platform, problem) {

        return `
            <div class="support-template">

                <h3>📧 Support Message Template</h3>

                <p>
                    নিচের template-টি নিজের তথ্য অনুযায়ী
                    edit করে official support channel-এ পাঠান।
                </p>

                <textarea
                    class="cybercare-template"
                    readonly
                >Subject: Request for Assistance — ${platform} — ${problem}

Hello Support Team,

I am experiencing an issue with my ${platform} account.

Problem:
${problem}

I believe this issue may have happened by mistake / I need assistance resolving it.

I am the legitimate owner of this account and I am willing to complete any verification process required.

Please review my case and let me know what information or documents are required from me.

I have preserved relevant evidence and can provide it through your official support process if requested.

Thank you for your assistance.

Regards,
[Your Name]
[Username / Account ID if appropriate]
[Contact Email]</textarea>

                <button
                    type="button"
                    class="copy-template"
                >
                    📋 Copy Message
                </button>

            </div>
        `;

    }

    // =========================================================
    // UNIVERSAL GUIDE DATA
    // =========================================================

    const universalGuides = {

        hacked: {

            title: "🔐 Account Hacked",

            text: `
                <h3>🚨 প্রথমে</h3>

                <ol>
                    <li>নিজের email account secure করুন।</li>
                    <li>Official recovery system ব্যবহার করুন।</li>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>সব active sessions পরীক্ষা করুন।</li>
                    <li>Unknown devices remove করুন।</li>
                    <li>Recovery email ও phone পরীক্ষা করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>সন্দেহজনক connected apps remove করুন।</li>
                    <li>Friends/followers-কে suspicious messages সম্পর্কে সতর্ক করুন।</li>
                </ol>

                <h3>🚫 করবেন না</h3>

                <ul>
                    <li>OTP দেবেন না।</li>
                    <li>Password দেবেন না।</li>
                    <li>Recovery code দেবেন না।</li>
                    <li>“Guaranteed recovery” বলে কাউকে টাকা দেবেন না।</li>
                </ul>
            `

        },

        suspended: {

            title: "🚫 Account Suspended",

            text: `
                <h3>Account suspended হলে</h3>

                <ol>
                    <li>প্রথমে suspension notice-এর কারণ পড়ুন।</li>
                    <li>Official app/site থেকেই notice verify করুন।</li>
                    <li>কোনো third-party “recovery agent”-কে টাকা দেবেন না।</li>
                    <li>Official appeal/review option থাকলে সেটি ব্যবহার করুন।</li>
                    <li>Identity verification চাইলে শুধু official channel-এ submit করুন।</li>
                    <li>একই সমস্যার জন্য বারবার spam appeal পাঠাবেন না।</li>
                    <li>Case/reference number থাকলে সংরক্ষণ করুন।</li>
                    <li>Support-এর reply সংরক্ষণ করুন।</li>
                </ol>

                <h3>📧 Support-এ লিখতে হলে</h3>

                <p>
                    সংক্ষিপ্ত, সত্য এবং পরিষ্কার তথ্য দিন।
                    ভুল তথ্য বা fake documents দেবেন না।
                </p>
            `

        },

        disabled: {

            title: "❌ Account Disabled",

            text: `
                <ol>
                    <li>Official notification-এর কারণ পরীক্ষা করুন।</li>
                    <li>Official appeal/review form ব্যবহার করুন।</li>
                    <li>Account ownership verify করার জন্য প্রস্তুত থাকুন।</li>
                    <li>যদি ভুল সিদ্ধান্ত মনে হয়, review request করুন।</li>
                    <li>Previous support case/reference সংরক্ষণ করুন।</li>
                    <li>Recovery scam থেকে সাবধান থাকুন।</li>
                </ol>

                <div class="scan-limit">
                    Platform অনুযায়ী appeal process আলাদা হতে পারে।
                    CyberCare কোনো suspension removal guarantee করে না।
                </div>
            `

        },

        login: {

            title: "🔑 Can't Login",

            text: `
                <ol>
                    <li>Username/email/phone সঠিক কিনা পরীক্ষা করুন।</li>
                    <li>Password reset option ব্যবহার করুন।</li>
                    <li>Email inbox এবং spam folder পরীক্ষা করুন।</li>
                    <li>Recovery phone/email পরীক্ষা করুন।</li>
                    <li>Unknown login alert থাকলে account secure করুন।</li>
                    <li>Phishing website-এ password দেবেন না।</li>
                    <li>Official app/site ব্যবহার করুন।</li>
                </ol>
            `

        },

        fake: {

            title: "🎭 Fake Profile / Impersonation",

            text: `
                <ol>
                    <li>Fake profile-এর screenshot নিন।</li>
                    <li>Profile URL সংরক্ষণ করুন।</li>
                    <li>Username সংরক্ষণ করুন।</li>
                    <li>Impersonation হিসেবে official report করুন।</li>
                    <li>প্রয়োজনে trusted contacts-কে জানান।</li>
                    <li>নিজের account-এর privacy settings review করুন।</li>
                </ol>
            `

        },

        harassment: {

            title: "📞 Harassment",

            text: `
                <ol>
                    <li>Threat/message-এর screenshot নিন।</li>
                    <li>Call logs সংরক্ষণ করুন।</li>
                    <li>Username ও profile URL সংরক্ষণ করুন।</li>
                    <li>প্রয়োজন হলে account block করুন।</li>
                    <li>Privacy settings review করুন।</li>
                    <li>Threat থাকলে evidence preserve করুন।</li>
                    <li>Trusted person-কে জানান।</li>
                    <li>প্রয়োজন হলে appropriate official reporting channel ব্যবহার করুন।</li>
                </ol>
            `

        },

        blackmail: {

            title: "⚠️ Blackmail / Sextortion",

            text: `
                <h3>🚨 Panic করবেন না</h3>

                <ol>
                    <li>Blackmailer-কে টাকা দেবেন না।</li>
                    <li>আর কোনো ছবি/video পাঠাবেন না।</li>
                    <li>OTP/password/personal information দেবেন না।</li>
                    <li>Threat-এর screenshot রাখুন।</li>
                    <li>Username, URL এবং phone number সংরক্ষণ করুন।</li>
                    <li>Payment request থাকলে সেটিও preserve করুন।</li>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Active sessions পরীক্ষা করুন।</li>
                    <li>Evidence রাখার পর report/block করুন।</li>
                    <li>Trusted person-কে জানান।</li>
                </ol>

                <h3>❤️ মনে রাখবেন</h3>

                <p>
                    Blackmail হওয়া আপনার দোষ নয়।
                </p>
            `

        },

        privacy: {

            title: "🔒 Privacy Problem",

            text: `
                <ol>
                    <li>Profile visibility review করুন।</li>
                    <li>Location sharing বন্ধ/সীমিত করুন।</li>
                    <li>Phone/email visibility review করুন।</li>
                    <li>Who can message you পরীক্ষা করুন।</li>
                    <li>Connected apps review করুন।</li>
                    <li>Active sessions পরীক্ষা করুন।</li>
                    <li>Third-party access remove করুন।</li>
                    <li>2FA চালু করুন।</li>
                </ol>
            `

        },

        photo: {

            title: "📸 Photo / Video Misuse",

            text: `
                <ol>
                    <li>Content-এর screenshot নিন।</li>
                    <li>Post/profile URL সংরক্ষণ করুন।</li>
                    <li>Username সংরক্ষণ করুন।</li>
                    <li>Date/time লিখে রাখুন।</li>
                    <li>Platform-এর privacy/abuse reporting option ব্যবহার করুন।</li>
                    <li>নিজের account secure করুন।</li>
                    <li>Guaranteed removal-এর নামে কাউকে টাকা দেবেন না।</li>
                </ol>
            `

        },

        phishing: {

            title: "🎣 Phishing",

            text: `
                <ol>
                    <li>Suspicious link-এ click করবেন না।</li>
                    <li>OTP দেবেন না।</li>
                    <li>Password দেবেন না।</li>
                    <li>UPI PIN দেবেন না।</li>
                    <li>Sender-কে independently verify করুন।</li>
                    <li>Official app/site নিজে খুলুন।</li>
                    <li>ভুল করে password দিলে সঙ্গে সঙ্গে password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                </ol>
            `

        },

        stalking: {

            title: "👁️ Online Stalking",

            text: `
                <h3>যা review করবেন</h3>

                <ul>
                    <li>Location</li>
                    <li>Phone number</li>
                    <li>Email</li>
                    <li>Daily routine</li>
                    <li>Work/school information</li>
                    <li>Friends/family information</li>
                    <li>Public posts</li>
                </ul>

                <ol>
                    <li>Location sharing সীমিত করুন।</li>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Active sessions পরীক্ষা করুন।</li>
                    <li>Evidence সংরক্ষণ করুন।</li>
                    <li>প্রয়োজনে block/report করুন।</li>
                </ol>
            `

        },

        unknownLogin: {

            title: "🕵️ Unknown Login",

            text: `
                <ol>
                    <li>Login alert-এর date/time পরীক্ষা করুন।</li>
                    <li>Device/location review করুন।</li>
                    <li>Unknown session logout করুন।</li>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Recovery email/phone পরীক্ষা করুন।</li>
                    <li>Connected apps review করুন।</li>
                </ol>
            `

        },

        twofa: {

            title: "🛡️ 2FA Problem",

            text: `
                <ol>
                    <li>Official account recovery option ব্যবহার করুন।</li>
                    <li>Backup/recovery codes থাকলে সেগুলো ব্যবহার করুন।</li>
                    <li>Authenticator app access পরীক্ষা করুন।</li>
                    <li>Recovery email/phone পরীক্ষা করুন।</li>
                    <li>কাউকে OTP বা recovery code দেবেন না।</li>
                </ol>
            `

        },

        delete: {

            title: "🗑️ Delete / Deactivate Account",

            text: `
                <ol>
                    <li>প্রথমে গুরুত্বপূর্ণ data backup করুন।</li>
                    <li>Connected services review করুন।</li>
                    <li>Payment/subscription থাকলে review করুন।</li>
                    <li>Official account settings ব্যবহার করুন।</li>
                    <li>Delete এবং deactivate-এর পার্থক্য বুঝে action নিন।</li>
                </ol>
            `

        },

        financial: {

            title: "💳 Financial Fraud",

            text: `
                <h3>টাকা চলে গেলে দ্রুত action নিন</h3>

                <ol>
                    <li>Bank/payment provider-এর সঙ্গে দ্রুত যোগাযোগ করুন।</li>
                    <li>Fraudulent transaction report করুন।</li>
                    <li>Transaction ID সংরক্ষণ করুন।</li>
                    <li>Screenshot রাখুন।</li>
                    <li>Payment account secure করুন।</li>
                    <li>Card/account compromise হলে provider-এর নির্দেশনা অনুসরণ করুন।</li>
                    <li>Official cybercrime reporting channel ব্যবহার করুন।</li>
                </ol>

                <h3>🚫 কখনো দেবেন না</h3>

                <ul>
                    <li>OTP</li>
                    <li>UPI PIN</li>
                    <li>Banking PIN</li>
                    <li>Password</li>
                </ul>
            `

        },

        phone: {

            title: "📱 Phone Security Audit",

            text: `
                <h3>নিজে এই জিনিসগুলো পরীক্ষা করুন</h3>

                <ol>
                    <li>Unknown applications</li>
                    <li>App permissions</li>
                    <li>Accessibility access</li>
                    <li>Device Administrator access</li>
                    <li>Notification access</li>
                    <li>Camera permission</li>
                    <li>Microphone permission</li>
                    <li>Location permission</li>
                    <li>VPN/profile configuration</li>
                    <li>Unknown device management</li>
                    <li>Phone software updates</li>
                </ol>

                <div class="scan-limit">
                    CyberCare browser থেকে আপনার ফোনের সব internal
                    security নিজে scan করতে পারে না। তাই এই audit
                    আপনাকে বাস্তব Settings checks-এর মাধ্যমে guide করে।
                </div>
            `

        }

    };

    // =========================================================
    // SOCIAL MEDIA DATABASE
    // =========================================================

    const socialPlatforms = {

        facebook: {
            name: "Facebook",
            icon: "🔵",
            problems: [

                ["Account Hacked", "hacked"],
                ["Account Suspended", "suspended"],
                ["Account Disabled", "disabled"],
                ["Can't Login", "login"],
                ["Password Recovery", "login"],
                ["Fake Profile", "fake"],
                ["Impersonation", "fake"],
                ["Harassment", "harassment"],
                ["Blackmail", "blackmail"],
                ["Photo / Video Misuse", "photo"],
                ["Privacy Problem", "privacy"],
                ["Online Stalking", "stalking"],
                ["Unknown Login", "unknownLogin"],
                ["2FA Problem", "twofa"],
                ["Messenger Problem", "harassment"],
                ["Phishing", "phishing"],
                ["Marketplace Scam", "financial"],
                ["Account Delete / Deactivate", "delete"],
                ["Report Someone", "harassment"],
                ["Security Settings", "privacy"]

            ]
        },

        instagram: {
            name: "Instagram",
            icon: "📸",
            problems: [

                ["Account Hacked", "hacked"],
                ["Account Suspended", "suspended"],
                ["Account Disabled", "disabled"],
                ["Can't Login", "login"],
                ["Password Recovery", "login"],
                ["Fake Profile", "fake"],
                ["Impersonation", "fake"],
                ["Harassment", "harassment"],
                ["Blackmail", "blackmail"],
                ["Photo / Video Misuse", "photo"],
                ["Privacy Problem", "privacy"],
                ["Stalking", "stalking"],
                ["Unknown Login", "unknownLogin"],
                ["2FA Problem", "twofa"],
                ["DM Problem", "harassment"],
                ["Phishing", "phishing"],
                ["Account Delete", "delete"]

            ]
        },

        whatsapp: {
            name: "WhatsApp",
            icon: "🟢",
            problems: [

                ["Account Hacked", "hacked"],
                ["Can't Login", "login"],
                ["Account Suspended", "suspended"],
                ["Unknown Linked Device", "unknownLogin"],
                ["OTP Problem", "twofa"],
                ["Harassment", "harassment"],
                ["Blackmail", "blackmail"],
                ["Privacy Problem", "privacy"],
                ["Spam Messages", "harassment"],
                ["Fake Account", "fake"],
                ["Photo / Video Misuse", "photo"],
                ["Phishing", "phishing"],
                ["Account Delete", "delete"]

            ]
        },

        telegram: {
            name: "Telegram",
            icon: "✈️",
            problems: [

                ["Account Hacked", "hacked"],
                ["Can't Login", "login"],
                ["Suspended / Restricted", "suspended"],
                ["Unknown Session", "unknownLogin"],
                ["2FA Problem", "twofa"],
                ["Harassment", "harassment"],
                ["Blackmail", "blackmail"],
                ["Fake Profile", "fake"],
                ["Privacy Problem", "privacy"],
                ["Scam / Phishing", "phishing"],
                ["Photo / Video Misuse", "photo"],
                ["Delete Account", "delete"]

            ]
        },

        youtube: {
            name: "YouTube",
            icon: "▶️",
            problems: [

                ["Account Hacked", "hacked"],
                ["Channel Hacked", "hacked"],
                ["Channel Suspended", "suspended"],
                ["Channel Disabled", "disabled"],
                ["Can't Login", "login"],
                ["Copyright / Content Problem", "photo"],
                ["Harassment", "harassment"],
                ["Impersonation", "fake"],
                ["Privacy Problem", "privacy"],
                ["Scam / Fake Channel", "fake"],
                ["Phishing", "phishing"],
                ["Delete Channel", "delete"]

            ]
        },

        tiktok: {
            name: "TikTok",
            icon: "🎵",
            problems: [

                ["Account Hacked", "hacked"],
                ["Account Suspended", "suspended"],
                ["Account Disabled", "disabled"],
                ["Can't Login", "login"],
                ["Fake Profile", "fake"],
                ["Harassment", "harassment"],
                ["Blackmail", "blackmail"],
                ["Photo / Video Misuse", "photo"],
                ["Privacy Problem", "privacy"],
                ["Unknown Login", "unknownLogin"],
                ["2FA Problem", "twofa"],
                ["Phishing", "phishing"],
                ["Delete Account", "delete"]

            ]
        },

        twitter: {
            name: "X / Twitter",
            icon: "𝕏",
            problems: [

                ["Account Hacked", "hacked"],
                ["Account Suspended", "suspended"],
                ["Account Locked", "disabled"],
                ["Can't Login", "login"],
                ["Fake Account", "fake"],
                ["Impersonation", "fake"],
                ["Harassment", "harassment"],
                ["Blackmail", "blackmail"],
                ["Privacy Problem", "privacy"],
                ["Unknown Login", "unknownLogin"],
                ["Phishing", "phishing"],
                ["Delete Account", "delete"]

            ]
        },

        snapchat: {
            name: "Snapchat",
            icon: "👻",
            problems: [

                ["Account Hacked", "hacked"],
                ["Account Locked", "suspended"],
                ["Can't Login", "login"],
                ["Fake Account", "fake"],
                ["Harassment", "harassment"],
                ["Blackmail", "blackmail"],
                ["Photo / Video Misuse", "photo"],
                ["Privacy Problem", "privacy"],
                ["Unknown Login", "unknownLogin"],
                ["2FA Problem", "twofa"],
                ["Delete Account", "delete"]

            ]
        },

        linkedin: {
            name: "LinkedIn",
            icon: "💼",
            problems: [

                ["Account Hacked", "hacked"],
                ["Account Restricted", "suspended"],
                ["Can't Login", "login"],
                ["Fake Profile", "fake"],
                ["Impersonation", "fake"],
                ["Harassment", "harassment"],
                ["Privacy Problem", "privacy"],
                ["Unknown Login", "unknownLogin"],
                ["Phishing", "phishing"],
                ["Scam / Fake Job", "financial"],
                ["Delete Account", "delete"]

            ]
        },

        google: {
            name: "Google / Gmail",
            icon: "🔴",
            problems: [

                ["Google Account Hacked", "hacked"],
                ["Gmail Hacked", "hacked"],
                ["Can't Login", "login"],
                ["Account Disabled", "disabled"],
                ["Suspicious Login", "unknownLogin"],
                ["2FA Problem", "twofa"],
                ["Recovery Problem", "login"],
                ["Phishing Email", "phishing"],
                ["Privacy Problem", "privacy"],
                ["Connected Apps", "privacy"],
                ["Unknown Device", "unknownLogin"],
                ["Delete Account", "delete"]

            ]
        },

        discord: {
            name: "Discord",
            icon: "🎮",
            problems: [

                ["Account Hacked", "hacked"],
                ["Account Disabled", "disabled"],
                ["Can't Login", "login"],
                ["Fake Account", "fake"],
                ["Harassment", "harassment"],
                ["Blackmail", "blackmail"],
                ["Privacy Problem", "privacy"],
                ["Unknown Login", "unknownLogin"],
                ["Phishing", "phishing"],
                ["Scam", "financial"],
                ["2FA Problem", "twofa"],
                ["Delete Account", "delete"]

            ]
        }

    };

    // =========================================================
    // SOCIAL MEDIA HELP DESK
    // =========================================================

    function openSocialPlatform(platformKey) {

        const platform =
            socialPlatforms[platformKey];

        if (!platform) return;

        const buttons =
            platform.problems.map(([name, guideKey]) => {

                return `
                    <button
                        type="button"
                        class="social-problem-btn"
                        data-social-guide="${guideKey}"
                        data-social-platform="${escapeHTML(platform.name)}"
                        data-social-problem="${escapeHTML(name)}"
                    >
                        ${name}
                    </button>
                `;

            }).join("");

        showGuide(
            `${platform.icon} ${platform.name} Help Desk`,
            `
                <h3>${platform.name} সমস্যার ধরন</h3>

                <div class="social-problem-grid">
                    ${buttons}
                </div>

                <div class="scan-limit">
                    যে সমস্যাটি হয়েছে সেটিতে চাপ দিন।
                    এরপর CyberCare ধাপে ধাপে কী করবেন,
                    কী করবেন না এবং support-এর সঙ্গে কীভাবে
                    যোগাযোগ করবেন তা দেখাবে।
                </div>
            `
        );

        setTimeout(() => {

            $$(".social-problem-btn").forEach(button => {

                button.addEventListener("click", () => {

                    const guideKey =
                        button.dataset.socialGuide;

                    const problem =
                        button.dataset.socialProblem;

                    const guide =
                        universalGuides[guideKey];

                    if (!guide) return;

                    showGuide(
                        `${platform.icon} ${platform.name} — ${problem}`,
                        guide.text +
                        supportTemplate(
                            platform.name,
                            problem
                        )
                    );

                });

            });

            $$(".copy-template").forEach(btn => {

                btn.addEventListener("click", async () => {

                    const area =
                        $(".cybercare-template", btn.parentElement);

                    if (!area) return;

                    try {

                        await navigator.clipboard.writeText(
                            area.value
                        );

                        btn.textContent =
                            "✅ Copied";

                        setTimeout(() => {
                            btn.textContent =
                                "📋 Copy Message";
                        }, 1500);

                    } catch {

                        area.select();
                        document.execCommand("copy");

                        btn.textContent =
                            "✅ Copied";

                    }

                });

            });

        }, 50);

    }

    function renderSocialHelpDesk() {

        const container =
            $("#socialHelpDeskContent") ||
            $(".social-help-content");

        if (!container) return;

        container.innerHTML = `

            <div class="social-platform-grid">

                ${Object.entries(socialPlatforms)
                    .map(([key, platform]) => `
                        <button
                            type="button"
                            class="social-platform-btn"
                            data-platform="${key}"
                        >
                            <span>${platform.icon}</span>
                            <strong>${platform.name}</strong>
                            <small>
                                ${platform.problems.length}
                                help topics
                            </small>
                        </button>
                    `)
                    .join("")}

            </div>

        `;

        $$(".social-platform-btn", container)
            .forEach(button => {

                button.addEventListener("click", () => {

                    openSocialPlatform(
                        button.dataset.platform
                    );

                });

            });

    }

    renderSocialHelpDesk();

    // Existing HTML social buttons
    $$("[data-social-platform]").forEach(button => {

        button.addEventListener("click", () => {

            const key =
                button.dataset.socialPlatform;

            if (socialPlatforms[key]) {

                openSocialPlatform(key);

            }

        });

    });

    // =========================================================
    // A-Z HELP DATABASE
    // =========================================================

    const azGuides = [

        {
            keywords: [
                "hacked",
                "hack",
                "হ্যাক",
                "অ্যাকাউন্ট হ্যাক"
            ],
            title: "🔐 Account Hacked",
            guide: universalGuides.hacked
        },

        {
            keywords: [
                "suspended",
                "suspend",
                "সাসপেন্ড"
            ],
            title: "🚫 Account Suspended",
            guide: universalGuides.suspended
        },

        {
            keywords: [
                "disabled",
                "disable",
                "ডিজেবল"
            ],
            title: "❌ Account Disabled",
            guide: universalGuides.disabled
        },

        {
            keywords: [
                "login",
                "can't login",
                "login problem",
                "লগইন"
            ],
            title: "🔑 Login Problem",
            guide: universalGuides.login
        },

        {
            keywords: [
                "blackmail",
                "ব্ল্যাকমেইল",
                "sextortion"
            ],
            title: "⚠️ Blackmail",
            guide: universalGuides.blackmail
        },

        {
            keywords: [
                "harassment",
                "হয়রানি",
                "disturb",
                "বিরক্ত"
            ],
            title: "📞 Harassment",
            guide: universalGuides.harassment
        },

        {
            keywords: [
                "fake profile",
                "fake account",
                "ভুয়া প্রোফাইল"
            ],
            title: "🎭 Fake Profile",
            guide: universalGuides.fake
        },

        {
            keywords: [
                "privacy",
                "প্রাইভেসি",
                "private"
            ],
            title: "🔒 Privacy",
            guide: universalGuides.privacy
        },

        {
            keywords: [
                "photo",
                "video",
                "ছবি",
                "ভিডিও"
            ],
            title: "📸 Photo / Video Misuse",
            guide: universalGuides.photo
        },

        {
            keywords: [
                "phishing",
                "ফিশিং",
                "suspicious link",
                "লিংক"
            ],
            title: "🎣 Phishing",
            guide: universalGuides.phishing
        },

        {
            keywords: [
                "stalking",
                "স্টকিং"
            ],
            title: "👁️ Online Stalking",
            guide: universalGuides.stalking
        },

        {
            keywords: [
                "unknown login",
                "unknown device",
                "অপরিচিত লগইন"
            ],
            title: "🕵️ Unknown Login",
            guide: universalGuides.unknownLogin
        },

        {
            keywords: [
                "2fa",
                "two factor",
                "two-factor",
                "ওটিপি"
            ],
            title: "🛡️ 2FA",
            guide: universalGuides.twofa
        },

        {
            keywords: [
                "money",
                "fraud",
                "upi",
                "bank",
                "টাকা",
                "প্রতারণা"
            ],
            title: "💳 Financial Fraud",
            guide: universalGuides.financial
        },

        {
            keywords: [
                "phone",
                "mobile",
                "spyware",
                "malware",
                "virus",
                "মোবাইল"
            ],
            title: "📱 Phone Security",
            guide: universalGuides.phone
        }

    ];

    // =========================================================
    // SEARCH
    // =========================================================

    const problemSearch =
        $("#problemSearch");

    const searchResults =
        $("#searchResults");

    function performSearch(query) {

        if (!searchResults) return;

        searchResults.innerHTML = "";

        const q =
            normalize(query);

        if (!q) return;

        const matches =
            azGuides.filter(item =>
                item.keywords.some(keyword =>
                    q.includes(normalize(keyword))
                )
            );

        if (!matches.length) {

            searchResults.innerHTML = `

                <div class="search-result">

                    <h3>🔎 No exact guide found</h3>

                    <p>
                        Try:
                        hacked, suspended, blackmail,
                        privacy, fake profile, harassment,
                        phishing, UPI fraud, phone security,
                        stalking, login.
                    </p>

                </div>

            `;

            return;

        }

        matches.forEach(item => {

            const result =
                document.createElement("div");

            result.className =
                "search-result";

            result.innerHTML = `

                <h3>${item.title}</h3>

                <p>
                    আপনার সমস্যার জন্য CyberCare guide পাওয়া গেছে।
                </p>

                <button
                    type="button"
                    class="result-help"
                >
                    View Full Guide →
                </button>

            `;

            $(".result-help", result)
                ?.addEventListener("click", () => {

                    showGuide(
                        item.title,
                        item.guide.text
                    );

                });

            searchResults.appendChild(result);

        });

    }

    problemSearch?.addEventListener(
        "input",
        event => performSearch(event.target.value)
    );

    problemSearch?.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                performSearch(
                    problemSearch.value
                );

            }

        }
    );

    // =========================================================
    // GUIDE MODAL
    // =========================================================

    function showGuide(title, content) {

        $("#cybercareModal")?.remove();

        const modal =
            document.createElement("div");

        modal.id =
            "cybercareModal";

        modal.innerHTML = `

            <div class="guide-overlay">

                <div
                    class="guide-modal"
                    role="dialog"
                    aria-modal="true"
                >

                    <button
                        class="guide-close"
                        type="button"
                        aria-label="Close"
                    >
                        ✕
                    </button>

                    <h2>
                        ${title}
                    </h2>

                    <div class="guide-content">
                        ${content}
                    </div>

                    <button
                        class="guide-ok"
                        type="button"
                    >
                        Got it
                    </button>

                </div>

            </div>

        `;

        document.body.appendChild(modal);

        $(".guide-close", modal)
            ?.addEventListener(
                "click",
                () => modal.remove()
            );

        $(".guide-ok", modal)
            ?.addEventListener(
                "click",
                () => modal.remove()
            );

        $(".guide-overlay", modal)
            ?.addEventListener(
                "click",
                event => {

                    if (
                        event.target.classList.contains(
                            "guide-overlay"
                        )
                    ) {
                        modal.remove();
                    }

                }
            );

        // Copy support templates
        setTimeout(() => {

            $$(".copy-template", modal)
                .forEach(btn => {

                    btn.addEventListener(
                        "click",
                        async () => {

                            const area =
                                $(".cybercare-template", btn.parentElement);

                            if (!area) return;

                            try {

                                await navigator.clipboard.writeText(
                                    area.value
                                );

                            } catch {

                                area.select();
                                document.execCommand("copy");

                            }

                            btn.textContent =
                                "✅ Copied";

                            setTimeout(() => {

                                btn.textContent =
                                    "📋 Copy Message";

                            }, 1500);

                        }
                    );

                });

        }, 50);

        setTimeout(() => {
            $(".guide-close", modal)?.focus();
        }, 50);

    }

    // =========================================================
    // SCAN SYSTEM
    // =========================================================

    const scanButton =
        $("#scanButton") ||
        $(".scan-main-btn");

    const manualScanButton =
        $("#manualScanButton") ||
        $(".scan-manual-btn");

    const scanStatus =
        $("#scanStatus") ||
        $(".scan-status");

    const scanProgressBar =
        $("#scanProgressBar") ||
        $(".scan-progress-bar");

    const scanStep =
        $("#scanStep") ||
        $(".scan-step");

    const scanResult =
        $("#scanResult") ||
        $(".scan-result");

    const scanChecks = [

        "Account security",
        "Password safety",
        "2FA",
        "Active sessions",
        "Unknown devices",
        "App permissions",
        "Accessibility access",
        "Device Administrator access",
        "Camera permissions",
        "Microphone permissions",
        "Location permissions",
        "Notification access",
        "Connected applications",
        "Privacy settings",
        "Security alerts"

    ];

    function runSecurityScan() {

        if (!scanStatus) {

            showGuide(
                "🛡️ CyberCare Security Scan",
                universalGuides.phone.text
            );

            return;

        }

        scanStatus.classList.add("active");

        if (scanResult) {

            scanResult.classList.remove(
                "active",
                "safe",
                "warning",
                "danger"
            );

        }

        let progress = 0;
        let index = 0;

        if (scanProgressBar) {

            scanProgressBar.style.width =
                "0%";

        }

        const timer =
            setInterval(() => {

                progress += 7;

                if (scanProgressBar) {

                    scanProgressBar.style.width =
                        `${Math.min(progress, 100)}%`;

                }

                if (
                    scanStep &&
                    scanChecks[index]
                ) {

                    scanStep.textContent =
                        `Checking: ${scanChecks[index]}...`;

                }

                index++;

                if (progress >= 100) {

                    clearInterval(timer);

                    if (scanStep) {

                        scanStep.textContent =
                            "Security audit completed.";

                    }

                    showScanResult();

                }

            }, 180);

    }

    function showScanResult() {

        if (!scanResult) {

            showGuide(
                "🛡️ Security Audit Complete",
                universalGuides.phone.text
            );

            return;

        }

        scanResult.classList.add(
            "active",
            "safe"
        );

        scanResult.innerHTML = `

            <h3>🛡️ Security Audit Complete</h3>

            <p>
                CyberCare আপনার জন্য গুরুত্বপূর্ণ
                security areas-এর checklist তৈরি করেছে।
            </p>

            <ul>

                <li>🔐 Passwords review করুন</li>
                <li>🛡️ 2FA চালু করুন</li>
                <li>👤 Unknown sessions remove করুন</li>
                <li>📱 Unknown apps পরীক্ষা করুন</li>
                <li>🔑 App permissions review করুন</li>
                <li>📍 Location permissions review করুন</li>
                <li>🎙️ Microphone permissions review করুন</li>
                <li>📷 Camera permissions review করুন</li>
                <li>♿ Accessibility access পরীক্ষা করুন</li>
                <li>🛠️ Device Administrator access পরীক্ষা করুন</li>
                <li>🔗 Connected apps review করুন</li>

            </ul>

            <div class="scan-limit">

                ℹ️ এটি একটি browser-based security audit।
                CyberCare আপনার ফোনের internal malware,
                অন্য app বা remote server নিজে থেকে scan করতে পারে না।

            </div>

        `;

    }

    scanButton?.addEventListener(
        "click",
        runSecurityScan
    );

    manualScanButton?.addEventListener(
        "click",
        () => {

            showGuide(
                "🔍 Manual Phone Security Check",
                universalGuides.phone.text
            );

        }
    );

    // =========================================================
    // SECURITY TOOLS
    // =========================================================

    function openTool(tool) {

        const tools = {

            scam: `

                <h3>🔎 Scam Risk Checker</h3>

                <p>
                    যেসব warning sign সত্যি সেগুলো select করুন।
                </p>

                <div class="tool-checks">

                    <label>
                        <input type="checkbox">
                        Urgent pressure
                    </label>

                    <label>
                        <input type="checkbox">
                        OTP / password চাইছে
                    </label>

                    <label>
                        <input type="checkbox">
                        Suspicious link
                    </label>

                    <label>
                        <input type="checkbox">
                        Advance payment চাইছে
                    </label>

                    <label>
                        <input type="checkbox">
                        Guaranteed profit/prize
                    </label>

                    <label>
                        <input type="checkbox">
                        Fake authority/support
                    </label>

                    <label>
                        <input type="checkbox">
                        Unexpected payment request
                    </label>

                    <label>
                        <input type="checkbox">
                        Account বন্ধ হয়ে যাবে বলে চাপ
                    </label>

                </div>

                <button
                    class="internal-tool-action"
                    id="scamAnalyze"
                >
                    Analyze Risk
                </button>

                <div id="scamResult"></div>

            `,

            password: `

                <h3>🔐 Password Safety Checker</h3>

                <p>
                    Password browser-এর বাইরে পাঠানো হয় না।
                </p>

                <input
                    id="passwordInput"
                    type="password"
                    placeholder="Enter password"
                    autocomplete="off"
                >

                <button
                    class="internal-tool-action"
                    id="checkPassword"
                >
                    Check Password
                </button>

                <div id="passwordResult"></div>

            `,

            url: `

                <h3>🔗 URL Safety Guide</h3>

                <ol>
                    <li>Domain spelling পরীক্ষা করুন।</li>
                    <li>অদ্ভুত character আছে কিনা দেখুন।</li>
                    <li>Shortened links-এ সতর্ক থাকুন।</li>
                    <li>Logo দেখেই website বিশ্বাস করবেন না।</li>
                    <li>Unexpected page-এ credentials দেবেন না।</li>
                    <li>Official app/site নিজে খুলে login করুন।</li>
                </ol>

            `,

            privacy: `

                <h3>🔒 Privacy Checklist</h3>

                <ul>
                    <li>Profile visibility</li>
                    <li>Location sharing</li>
                    <li>Camera permissions</li>
                    <li>Microphone permissions</li>
                    <li>Contact permissions</li>
                    <li>Connected devices</li>
                    <li>Active sessions</li>
                    <li>Third-party applications</li>
                    <li>Who can message you</li>
                    <li>Who can see your profile</li>
                </ul>

            `,

            evidence: `

                <h3>🧾 Evidence Checklist</h3>

                <ul>
                    <li>📸 Screenshots</li>
                    <li>👤 Username</li>
                    <li>🔗 Profile URL</li>
                    <li>💬 Messages</li>
                    <li>☎️ Call logs</li>
                    <li>🕐 Date and time</li>
                    <li>💳 Transaction ID</li>
                    <li>📧 Emails</li>
                    <li>📱 Phone number</li>
                    <li>🌐 Website URL</li>
                </ul>

                <p>
                    Original evidence যতটা সম্ভব preserve করুন।
                </p>

            `,

            score: `

                <h3>🛡️ Cyber Safety Score</h3>

                <div class="score-checks">

                    <label>
                        <input type="checkbox">
                        Unique passwords
                    </label>

                    <label>
                        <input type="checkbox">
                        2FA enabled
                    </label>

                    <label>
                        <input type="checkbox">
                        Never share OTP
                    </label>

                    <label>
                        <input type="checkbox">
                        Review active sessions
                    </label>

                    <label>
                        <input type="checkbox">
                        Review app permissions
                    </label>

                    <label>
                        <input type="checkbox">
                        Phone updated
                    </label>

                    <label>
                        <input type="checkbox">
                        Verify payment requests
                    </label>

                    <label>
                        <input type="checkbox">
                        Know reporting process
                    </label>

                    <label>
                        <input type="checkbox">
                        Review privacy settings
                    </label>

                    <label>
                        <input type="checkbox">
                        Know evidence preservation
                    </label>

                </div>

                <button
                    class="internal-tool-action"
                    id="calculateScore"
                >
                    Calculate Score
                </button>

                <div id="scoreResult"></div>

            `,

            recovery: universalGuides.hacked.text,

            phone: universalGuides.phone.text,

            financial: universalGuides.financial.text,

            blackmail: universalGuides.blackmail.text,

            harassment: universalGuides.harassment.text

        };

        if (!tools[tool]) {

            showGuide(
                "🛠️ CyberCare Tool",
                "<p>Tool not found.</p>"
            );

            return;

        }

        showGuide(
            "🛠️ CyberCare Tool",
            tools[tool]
        );

        setTimeout(() => {

            $("#scamAnalyze")
                ?.addEventListener(
                    "click",
                    analyzeScam
                );

            $("#checkPassword")
                ?.addEventListener(
                    "click",
                    checkPasswordStrength
                );

            $("#calculateScore")
                ?.addEventListener(
                    "click",
                    calculateSafetyScore
                );

        }, 50);

    }

    $$(".tool-btn, .security-tool-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const tool =
                        button.dataset.tool;

                    if (tool) {
                        openTool(tool);
                    }

                }
            );

        });

    // =========================================================
    // SCAM ANALYZER
    // =========================================================

    function analyzeScam() {

        const checks =
            $$("#cybercareModal .tool-checks input");

        const count =
            checks.filter(c => c.checked).length;

        const result =
            $("#scamResult");

        if (!result) return;

        if (count === 0) {

            result.innerHTML = `
                <div class="scan-limit">
                    🟢 কোনো warning sign select করা হয়নি।
                    তবুও unexpected requests independently verify করুন।
                </div>
            `;

        } else if (count <= 2) {

            result.innerHTML = `
                <div class="scan-limit">
                    🟡 Caution।
                    Sensitive information বা টাকা দেওয়ার আগে verify করুন।
                </div>
            `;

        } else if (count <= 4) {

            result.innerHTML = `
                <div class="scan-limit">
                    🟠 High caution।
                    Interaction বন্ধ করে official channel দিয়ে verify করুন।
                </div>
            `;

        } else {

            result.innerHTML = `
                <div class="scan-limit">
                    🔴 Strong scam warning pattern।
                    টাকা/OTP/password দেবেন না।
                </div>
            `;

        }

    }

    // =========================================================
    // PASSWORD CHECKER
    // =========================================================

    function checkPasswordStrength() {

        const input =
            $("#passwordInput");

        const result =
            $("#passwordResult");

        if (!input || !result) return;

        const password =
            input.value;

        if (!password) {

            result.innerHTML =
                "<p>Enter a password.</p>";

            return;

        }

        let score = 0;

        if (password.length >= 12) score++;
        if (password.length >= 16) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        let message;

        if (password.length < 8) {

            message =
                "🔴 Very weak";

        } else if (score <= 2) {

            message =
                "🔴 Weak";

        } else if (score <= 4) {

            message =
                "🟡 Moderate";

        } else {

            message =
                "🟢 Strong structure";

        }

        result.innerHTML = `

            <div class="scan-limit">

                <strong>
                    ${message}
                </strong>

                <p>
                    Password unique রাখুন এবং
                    গুরুত্বপূর্ণ account-এ 2FA ব্যবহার করুন।
                </p>

            </div>

        `;

        setTimeout(() => {

            input.value = "";

        }, 500);

    }

    // =========================================================
    // SAFETY SCORE
    // =========================================================

    function calculateSafetyScore() {

        const checks =
            $$("#cybercareModal .score-checks input");

        if (!checks.length) return;

        const yes =
            checks.filter(c => c.checked).length;

        const percentage =
            Math.round(
                (yes / checks.length) * 100
            );

        const result =
            $("#scoreResult");

        if (!result) return;

        let level;
        let advice;

        if (percentage >= 80) {

            level =
                "🟢 Excellent";

            advice =
                "আপনার basic digital safety habits ভালো।";

        } else if (percentage >= 60) {

            level =
                "🟡 Good Start";

            advice =
                "আরও কিছু security habit improve করুন।";

        } else if (percentage >= 40) {

            level =
                "🟠 Needs Improvement";

            advice =
                "Password, 2FA এবং privacy আগে ঠিক করুন।";

        } else {

            level =
                "🔴 High Risk Habits";

            advice =
                "গুরুত্বপূর্ণ account আজই secure করুন।";

        }

        result.innerHTML = `

            <div class="scan-result active">

                <h3>${percentage}%</h3>

                <p>
                    <strong>${level}</strong>
                </p>

                <p>${advice}</p>

            </div>

        `;

    }

    // =========================================================
    // WOMEN SAFETY
    // =========================================================

    const womenGuides = {

        harassment: universalGuides.harassment,

        blackmail: universalGuides.blackmail,

        photo: universalGuides.photo,

        fakeprofile: universalGuides.fake,

        private: universalGuides.blackmail,

        stalking: universalGuides.stalking

    };

    $$(".women-btn").forEach(button => {

        button.addEventListener("click", () => {

            const type =
                button.dataset.women;

            const guide =
                womenGuides[type];

            if (guide) {

                showGuide(
                    guide.title,
                    guide.text
                );

            }

        });

    });

    // =========================================================
    // EMERGENCY
    // =========================================================

    const emergencyGuides = {

        account: universalGuides.hacked,

        money: universalGuides.financial,

        blackmail: universalGuides.blackmail,

        phone: universalGuides.phone,

        harassment: universalGuides.harassment,

        stalking: universalGuides.stalking

    };

    $$("[data-emergency]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const type =
                        button.dataset.emergency;

                    const guide =
                        emergencyGuides[type];

                    showGuide(
                        "🚨 Emergency Cyber Response",
                        guide
                            ? guide.text
                            : `
                                <p>
                                    নিজের নিরাপত্তাকে priority দিন।
                                    Evidence preserve করুন এবং
                                    appropriate official help নিন।
                                </p>
                            `
                    );

                }
            );

        });

    // =========================================================
    // SERVICE GUIDES
    // =========================================================

    const serviceMap = {

        "Account Recovery": "hacked",
        "Scam & Phishing": "phishing",
        "Phone Security": "phone",
        "Online Fraud": "financial",
        "Financial Fraud": "financial",
        "Suspicious Activity": "unknownLogin",
        "Emergency Help": "hacked"

    };

    $$(".help-btn").forEach(button => {

        button.addEventListener("click", () => {

            const service =
                button.dataset.service;

            const key =
                serviceMap[service];

            showGuide(
                service || "CyberCare Help",
                key
                    ? universalGuides[key].text
                    : "<p>Use CyberCare Help Desk.</p>"
            );

        });

    });

    // =========================================================
    // INDIA HELP
    // =========================================================

    $$(".india-btn").forEach(button => {

        button.addEventListener("click", () => {

            const type =
                button.dataset.india ||
                button.dataset.help;

            if (
                type === "cybercrime" ||
                type === "fraud"
            ) {

                showGuide(
                    "🇮🇳 India Cybercrime Help",
                    `
                        <h3>Cybercrime হলে</h3>

                        <ol>
                            <li>Evidence preserve করুন।</li>
                            <li>Transaction ID সংরক্ষণ করুন।</li>
                            <li>Screenshots এবং URLs রাখুন।</li>
                            <li>Bank/payment provider-এর সঙ্গে দ্রুত যোগাযোগ করুন যদি টাকা জড়িত থাকে।</li>
                            <li>ভারতের official cybercrime reporting channel ব্যবহার করুন।</li>
                            <li>জরুরি physical danger হলে আগে নিজের নিরাপত্তা নিশ্চিত করুন।</li>
                        </ol>

                        <div class="scan-limit">
                            Official government channel ব্যবহার করুন।
                            CyberCare কোনো private recovery agent-এর সঙ্গে
                            আপনাকে connect করে না।
                        </div>
                    `
                );

            }

        });

    });

    // =========================================================
    // LEARNING SECTION
    // =========================================================

    const learningContent = {

        password: `
            <h3>🔐 Password Safety</h3>

            <ul>
                <li>Long unique passwords ব্যবহার করুন।</li>
                <li>Password reuse করবেন না।</li>
                <li>2FA চালু করুন।</li>
                <li>Recovery codes নিরাপদে রাখুন।</li>
            </ul>
        `,

        "2fa": `
            <h3>🛡️ Two-Factor Authentication</h3>

            <p>
                Password-এর পাশাপাশি অতিরিক্ত security layer তৈরি করে।
            </p>
        `,

        phishing: universalGuides.phishing.text,

        privacy: universalGuides.privacy.text,

        phone: universalGuides.phone.text,

        financial: universalGuides.financial.text,

        blackmail: universalGuides.blackmail.text,

        stalking: universalGuides.stalking.text

    };

    $$(".learn-card").forEach(card => {

        card.addEventListener("click", () => {

            const topic =
                card.dataset.learn;

            showGuide(
                "🎓 Learn Cybersecurity",
                learningContent[topic] ||
                "<p>Learn safe digital habits.</p>"
            );

        });

    });

    // =========================================================
    // FEEDBACK / SUGGESTION DROPBOX
    // =========================================================

    function createFeedbackTool() {

        const existing =
            $("#feedbackContent") ||
            $(".feedback-content");

        if (!existing) return;

        existing.innerHTML = `

            <div class="feedback-box">

                <h3>📮 CyberCare Suggestion Dropbox</h3>

                <p>
                    CyberCare-এ কী add করা উচিত,
                    কোন problem-এর guide দরকার,
                    অথবা কীভাবে আরও advanced করা যায়—
                    এখানে লিখতে পারেন।
                </p>

                <textarea
                    id="cybercareFeedback"
                    rows="6"
                    placeholder="আপনার মতামত / সমস্যার ধরন / নতুন feature-এর idea লিখুন..."
                ></textarea>

                <button
                    type="button"
                    id="saveFeedback"
                    class="internal-tool-action"
                >
                    💾 Save Suggestion
                </button>

                <div id="feedbackStatus"></div>

            </div>

        `;

        $("#saveFeedback")
            ?.addEventListener(
                "click",
                () => {

                    const input =
                        $("#cybercareFeedback");

                    const status =
                        $("#feedbackStatus");

                    const value =
                        text(input?.value);

                    if (!value) {

                        if (status) {

                            status.innerHTML =
                                "<p>✍️ আগে কিছু লিখুন।</p>";

                        }

                        return;

                    }

                    const previous =
                        JSON.parse(
                            localStorage.getItem(
                                "cybercare-feedback"
                            ) || "[]"
                        );

                    previous.push({

                        message: value,

                        time:
                            new Date().toISOString()

                    });

                    localStorage.setItem(
                        "cybercare-feedback",
                        JSON.stringify(previous)
                    );

                    if (input) {
                        input.value = "";
                    }

                    if (status) {

                        status.innerHTML = `
                            <div class="scan-limit">
                                ✅ আপনার suggestion এই browser-এ
                                localভাবে save হয়েছে।
                            </div>
                        `;

                    }

                }
            );

    }

    createFeedbackTool();

    // =========================================================
    // FEEDBACK BUTTON FALLBACK
    // =========================================================

    $$("[data-feedback], .feedback-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    showGuide(
                        "📮 CyberCare Suggestion Dropbox",
                        `
                            <textarea
                                id="modalFeedback"
                                rows="7"
                                placeholder="আপনার মতামত লিখুন..."
                            ></textarea>

                            <button
                                id="saveModalFeedback"
                                class="internal-tool-action"
                                type="button"
                            >
                                Save Suggestion
                            </button>

                            <div id="modalFeedbackStatus"></div>
                        `
                    );

                    setTimeout(() => {

                        $("#saveModalFeedback")
                            ?.addEventListener(
                                "click",
                                () => {

                                    const value =
                                        text(
                                            $("#modalFeedback")
                                                ?.value
                                        );

                                    const status =
                                        $("#modalFeedbackStatus");

                                    if (!value) {

                                        if (status) {

                                            status.innerHTML =
                                                "<p>আগে কিছু লিখুন।</p>";

                                        }

                                        return;

                                    }

                                    const previous =
                                        JSON.parse(
                                            localStorage.getItem(
                                                "cybercare-feedback"
                                            ) || "[]"
                                        );

                                    previous.push({

                                        message: value,

                                        time:
                                            new Date().toISOString()

                                    });

                                    localStorage.setItem(
                                        "cybercare-feedback",
                                        JSON.stringify(previous)
                                    );

                                    if (status) {

                                        status.innerHTML =
                                            `
                                                <div class="scan-limit">
                                                    ✅ Suggestion saved locally.
                                                </div>
                                            `;

                                    }

                                }
                            );

                    }, 50);

                }
            );

        });

    // =========================================================
    // UNIVERSAL DATA-GUIDE BUTTON
    // =========================================================

    $$("[data-guide]").forEach(button => {

        button.addEventListener("click", () => {

            const key =
                button.dataset.guide;

            const guide =
                universalGuides[key];

            if (guide) {

                showGuide(
                    guide.title,
                    guide.text
                );

            }

        });

    });

    // =========================================================
    // KEYBOARD
    // =========================================================

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeSideMenu();

                $("#cybercareModal")?.remove();

            }

        }
    );

    // =========================================================
    // FORM PROTECTION
    // =========================================================

    document.addEventListener(
        "submit",
        event => {

            const form =
                event.target;

            if (
                form &&
                form.dataset.cybercareForm === "local"
            ) {

                event.preventDefault();

            }

        }
    );

    // =========================================================
    // POPSTATE
    // =========================================================

    window.addEventListener(
        "popstate",
        () => {

            closeSideMenu();

            $("#cybercareModal")?.remove();

        }
    );

    // =========================================================
    // GLOBAL ERROR PROTECTION
    // =========================================================

    window.addEventListener(
        "error",
        event => {

            console.warn(
                "CyberCare handled an error:",
                event.message
            );

        }
    );

    // =========================================================
    // INITIALIZATION
    // =========================================================

    console.log(
        "🛡️ CyberCare A-Z Digital Safety System Loaded"
    );

});
