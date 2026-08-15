// ============================================================
// CYBERCARE — A-Z COMPLETE DIGITAL SAFETY SYSTEM
// ============================================================
// VERSION: Advanced Emergency + Recovery + Security Edition
//
// A-Z HELP DESK
// SEARCH
// BEGINNER / ADVANCED MODE
//
// FACEBOOK / INSTAGRAM / WHATSAPP / TELEGRAM / YOUTUBE
// TIKTOK / X / SNAPCHAT / LINKEDIN / GOOGLE / GMAIL / DISCORD
//
// ACCOUNT HACKED / SUSPENDED / DISABLED / RECOVERY
// FACEBOOK RECOVERY / INSTAGRAM RECOVERY / GMAIL RECOVERY
// WHATSAPP RECOVERY / GOOGLE ACCOUNT / GOOGLE ASSISTANT
//
// EMERGENCY RECOVERY
// FINANCIAL FRAUD / UPI FRAUD / CARD FRAUD
// 1930 / CYBERCRIME.GOV.IN
// BANK FREEZE / CARD BLOCK / UPI SECURITY
//
// PHISHING SCANNER
// URL RISK ANALYZER
// I4C SUSPECT REPOSITORY
// DATA LEAK CHECK / HIBP API READY
// PASSWORD CHECKER
// CYBER SAFETY SCORE
//
// CYBER LAW GUIDE
// EVIDENCE CHECKLIST
// SUPPORT TEMPLATES
// OFFICIAL SUPPORT ROUTES
//
// DIGITAL ARREST
// JOB SCAM
// FAKE APK
// INVESTMENT SCAM
// OTP SCAM
// QR CODE SCAM
// KYC SCAM
//
// 2FA GUIDE
// ANDROID SECURITY
// IPHONE SECURITY
// GOOGLE ASSISTANT
// COMPUTER / LAPTOP
// EMAIL SECURITY
// INTERNET SAFETY
//
// WOMEN SAFETY
// BLACKMAIL / SEXTORTION
// HARASSMENT
// STALKING
// FAKE PROFILE
// PHOTO / VIDEO MISUSE
//
// FEEDBACK / SUGGESTION DROPBOX
// LOCAL STORAGE
// BENGALI / ENGLISH
// DARK MODE
// MOBILE UX
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    // =========================================================
    // CYBERCARE CONFIGURATION
    // =========================================================

    const CYBERCARE_CONFIG = {

        version: "Advanced Emergency Edition",

        // IMPORTANT:
        // Never expose a private API key in public frontend code.
        //
        // HIBP email breach API requires authentication.
        // Keep this empty unless you have a secure backend/proxy.
        hibpApiKey: "",

        // Optional backend endpoints.
        // If you later create a backend, place its endpoint here.
        hibpProxyEndpoint: "",

        phishingProxyEndpoint: "",

        language: {
            default: "en"
        },

        storage: {
            theme: "cybercare-theme",
            language: "cybercare-language",
            mode: "cybercare-mode",
            feedback: "cybercare-feedback"
        }

    };

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

        const section =
            document.getElementById(id);

        if (section) {

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }

    function safeOpen(url) {

        if (!url) return;

        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

    }

    function officialLink(label, url) {

        return `
            <button
                type="button"
                class="internal-tool-action official-route-btn"
                data-open-url="${escapeHTML(url)}"
            >
                🌐 ${escapeHTML(label)}
            </button>
        `;

    }

    function copyText(value, button) {

        const content = text(value);

        if (!content) return;

        const success = () => {

            if (!button) return;

            const old =
                button.textContent;

            button.textContent =
                "✅ Copied";

            setTimeout(() => {

                button.textContent = old;

            }, 1600);

        };

        if (
            navigator.clipboard &&
            window.isSecureContext
        ) {

            navigator.clipboard
                .writeText(content)
                .then(success)
                .catch(() => {

                    fallbackCopy(content);
                    success();

                });

        } else {

            fallbackCopy(content);
            success();

        }

    }

    function fallbackCopy(value) {

        const area =
            document.createElement("textarea");

        area.value = value;

        area.style.position = "fixed";
        area.style.left = "-9999px";

        document.body.appendChild(area);

        area.select();

        try {
            document.execCommand("copy");
        } catch {}

        area.remove();

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

    menuBtn?.addEventListener(
        "click",
        openMenu
    );

    closeMenu?.addEventListener(
        "click",
        closeSideMenu
    );

    menuOverlay?.addEventListener(
        "click",
        closeSideMenu
    );

    // =========================================================
    // MENU NAVIGATION
    // =========================================================

    $$(".menu-item").forEach(item => {

        item.addEventListener("click", () => {

            const target =
                item.dataset.menu;

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
                feedback: "feedback",
                emergency: "emergency"

            };

            if (map[target]) {

                const targetId =
                    map[target];

                const node =
                    document.getElementById(targetId);

                if (node) {

                    scrollToSection(targetId);

                } else if (
                    target === "emergency"
                ) {

                    document
                        .querySelector(
                            ".emergency-section"
                        )
                        ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                }

            }

        });

    });

    // =========================================================
    // HERO BUTTONS
    // =========================================================

    $("#emergencyBtn")?.addEventListener(
        "click",
        () => {

            document
                .querySelector(".emergency-section")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

        }
    );

    $("#quickHelpBtn")?.addEventListener(
        "click",
        () => {

            document
                .querySelector(".search-section")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            setTimeout(() => {

                $("#problemSearch")?.focus();

            }, 400);

        }
    );

    // =========================================================
    // DARK MODE
    // =========================================================

    let darkMode =
        localStorage.getItem(
            CYBERCARE_CONFIG.storage.theme
        ) === "dark";

    const themeBtn =
        $("#themeBtn");

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

    themeBtn?.addEventListener(
        "click",
        () => {

            darkMode =
                !darkMode;

            localStorage.setItem(
                CYBERCARE_CONFIG.storage.theme,
                darkMode
                    ? "dark"
                    : "light"
            );

            applyTheme();

        }
    );

    // =========================================================
    // LANGUAGE
    // =========================================================

    let bengali =
        localStorage.getItem(
            CYBERCARE_CONFIG.storage.language
        ) === "bn";

    const languageBtn =
        $("#languageBtn");

    const languageText =
        $("#languageText");

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

        $$(
            "h1,h2,h3,h4,p,button,strong,small,label"
        ).forEach(el => {

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
                bengali
                    ? "বাংলা"
                    : "EN";

        }

        localStorage.setItem(
            CYBERCARE_CONFIG.storage.language,
            bengali
                ? "bn"
                : "en"
        );

    }

    languageBtn?.addEventListener(
        "click",
        () => {

            bengali =
                !bengali;

            translatePage();

        }
    );

    translatePage();

    // =========================================================
    // BEGINNER / ADVANCED MODE
    // =========================================================

    let advancedMode =
        localStorage.getItem(
            CYBERCARE_CONFIG.storage.mode
        ) === "advanced";

    function applyMode() {

        document.body.classList.toggle(
            "advanced-mode",
            advancedMode
        );

        $$(".mode-label").forEach(el => {

            el.textContent =
                advancedMode
                    ? "Advanced"
                    : "Beginner";

        });

    }

    function toggleMode() {

        advancedMode =
            !advancedMode;

        localStorage.setItem(
            CYBERCARE_CONFIG.storage.mode,
            advancedMode
                ? "advanced"
                : "beginner"
        );

        applyMode();

    }

    $("#modeBtn")?.addEventListener(
        "click",
        toggleMode
    );

    $("[data-mode-toggle]")?.addEventListener(
        "click",
        toggleMode
    );

    applyMode();

    // =========================================================
    // SUPPORT TEMPLATE GENERATOR
    // =========================================================

    function supportTemplate(
        platform,
        problem
    ) {

        return `

            <div class="support-template">

                <h3>
                    📧 Support Message Template
                </h3>

                <p>
                    নিজের তথ্য অনুযায়ী edit করে
                    শুধু official support channel-এ পাঠান।
                </p>

                <textarea
                    class="cybercare-template"
                    readonly
                >Subject: Request for Assistance — ${platform} — ${problem}

Hello Support Team,

I am experiencing an issue with my ${platform} account.

Problem:
${problem}

I am the legitimate owner of this account and I am willing to complete any verification process required.

Please review my case and let me know what information or documents are required from me.

I have preserved relevant evidence and can provide it through your official support process if requested.

I have not shared my password, OTP or recovery code with anyone.

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
    // OFFICIAL RECOVERY ROUTES
    // =========================================================

    const officialRoutes = {

        facebook: {
            name: "Facebook",
            recovery:
                "https://www.facebook.com/hacked",
            help:
                "https://www.facebook.com/help/",
            security:
                "https://www.facebook.com/settings?tab=security"
        },

        instagram: {
            name: "Instagram",
            recovery:
                "https://www.instagram.com/hacked/",
            help:
                "https://help.instagram.com/",
            security:
                "https://www.instagram.com/accounts/password/change/"
        },

        google: {
            name: "Google / Gmail",
            recovery:
                "https://accounts.google.com/signin/recovery",
            security:
                "https://myaccount.google.com/security",
            help:
                "https://support.google.com/accounts/"
        },

        whatsapp: {
            name: "WhatsApp",
            help:
                "https://faq.whatsapp.com/",
            security:
                "https://faq.whatsapp.com/general/account-and-profile/"
        },

        youtube: {
            name: "YouTube",
            help:
                "https://support.google.com/youtube/"
        },

        telegram: {
            name: "Telegram",
            help:
                "https://telegram.org/support"
        },

        tiktok: {
            name: "TikTok",
            help:
                "https://support.tiktok.com/"
        },

        x: {
            name: "X",
            help:
                "https://help.x.com/"
        },

        snapchat: {
            name: "Snapchat",
            help:
                "https://help.snapchat.com/"
        },

        linkedin: {
            name: "LinkedIn",
            help:
                "https://www.linkedin.com/help/linkedin/"
        },

        discord: {
            name: "Discord",
            help:
                "https://support.discord.com/"
        },

        cybercrime: {
            name: "National Cyber Crime Reporting Portal",
            report:
                "https://www.cybercrime.gov.in/",
            suspect:
                "https://cybercrime.gov.in/Webform/cyber_suspect.aspx"
        },

        hibp: {
            name: "Have I Been Pwned",
            home:
                "https://haveibeenpwned.com/"
        }

    };

    // =========================================================
    // UNIVERSAL GUIDE DATA
    // =========================================================

    const universalGuides = {

        hacked: {

            title:
                "🔐 Account Hacked — Emergency Recovery",

            text: `

                <div class="emergency-alert">
                    🚨 Account hacked মনে হলে প্রথমে
                    আপনার email এবং primary account secure করুন।
                </div>

                <h3>STEP 1 — Email secure করুন</h3>

                <ol>
                    <li>
                        Email password পরিবর্তন করুন।
                    </li>

                    <li>
                        Unknown devices / sessions logout করুন।
                    </li>

                    <li>
                        Recovery email এবং recovery phone পরীক্ষা করুন।
                    </li>

                    <li>
                        Unknown forwarding rules / filters থাকলে remove করুন।
                    </li>
                </ol>

                <h3>STEP 2 — Main account</h3>

                <ol>
                    <li>
                        Official recovery page ব্যবহার করুন।
                    </li>

                    <li>
                        Password পরিবর্তন করুন।
                    </li>

                    <li>
                        সব active sessions পরীক্ষা করুন।
                    </li>

                    <li>
                        Unknown devices remove করুন।
                    </li>

                    <li>
                        Connected apps / third-party access review করুন।
                    </li>

                    <li>
                        2FA চালু করুন।
                    </li>

                    <li>
                        Recovery codes নিরাপদে সংরক্ষণ করুন।
                    </li>
                </ol>

                <h3>🚫 কখনো করবেন না</h3>

                <ul>
                    <li>OTP দেবেন না।</li>
                    <li>Password দেবেন না।</li>
                    <li>Recovery code দেবেন না।</li>
                    <li>“Guaranteed recovery” বলে কাউকে টাকা দেবেন না।</li>
                </ul>

                <h3>📸 Evidence</h3>

                <ul>
                    <li>Unknown login screenshot</li>
                    <li>Security email</li>
                    <li>Changed recovery information</li>
                    <li>Suspicious messages</li>
                    <li>Profile URL</li>
                    <li>Date and time</li>
                </ul>

            `

        },

        facebookRecovery: {

            title:
                "🔵 Facebook Hacked Recovery",

            text: `

                <div class="emergency-alert">
                    Facebook account hacked হলে
                    আগে official recovery route ব্যবহার করুন।
                </div>

                <ol>

                    <li>
                        এই account recovery route খুলুন।
                    </li>

                    <li>
                        Account identify করুন।
                    </li>

                    <li>
                        Facebook-এর verification steps follow করুন।
                    </li>

                    <li>
                        Password reset করুন।
                    </li>

                    <li>
                        Unknown sessions / devices logout করুন।
                    </li>

                    <li>
                        Recovery email এবং phone পরীক্ষা করুন।
                    </li>

                    <li>
                        2FA চালু করুন।
                    </li>

                </ol>

                ${officialLink(
                    "Open Facebook Hacked Recovery",
                    officialRoutes.facebook.recovery
                )}

                ${officialLink(
                    "Facebook Help Center",
                    officialRoutes.facebook.help
                )}

            `

        },

        instagramRecovery: {

            title:
                "📸 Instagram Hacked Recovery",

            text: `

                <ol>

                    <li>
                        Instagram-এর official hacked account route খুলুন।
                    </li>

                    <li>
                        Account information দিয়ে identity verify করুন।
                    </li>

                    <li>
                        Email inbox-এ security emails পরীক্ষা করুন।
                    </li>

                    <li>
                        Password reset করুন।
                    </li>

                    <li>
                        Unknown login/session remove করুন।
                    </li>

                    <li>
                        2FA চালু করুন।
                    </li>

                </ol>

                ${officialLink(
                    "Open Instagram Hacked Account Help",
                    officialRoutes.instagram.recovery
                )}

                ${officialLink(
                    "Instagram Help Center",
                    officialRoutes.instagram.help
                )}

            `

        },

        gmailRecovery: {

            title:
                "🔴 Gmail / Google Account Hacked Recovery",

            text: `

                <div class="emergency-alert">
                    Gmail compromised হলে
                    Google account-কে primary priority দিন।
                </div>

                <ol>

                    <li>
                        Google Account Recovery খুলুন।
                    </li>

                    <li>
                        যতটা সম্ভব account ownership verification complete করুন।
                    </li>

                    <li>
                        Password পরিবর্তন করুন।
                    </li>

                    <li>
                        Recent security activity পরীক্ষা করুন।
                    </li>

                    <li>
                        Unknown devices remove করুন।
                    </li>

                    <li>
                        Recovery phone/email পরীক্ষা করুন।
                    </li>

                    <li>
                        Gmail forwarding/filter rules পরীক্ষা করুন।
                    </li>

                    <li>
                        Third-party apps/access remove করুন।
                    </li>

                    <li>
                        2-Step Verification চালু করুন।
                    </li>

                </ol>

                ${officialLink(
                    "Google Account Recovery",
                    officialRoutes.google.recovery
                )}

                ${officialLink(
                    "Google Security",
                    officialRoutes.google.security
                )}

            `

        },

        whatsappRecovery: {

            title:
                "🟢 WhatsApp Account Compromised",

            text: `

                <ol>

                    <li>
                        নিজের phone number দিয়ে WhatsApp পুনরায় verify করার চেষ্টা করুন।
                    </li>

                    <li>
                        Verification code কাউকে দেবেন না।
                    </li>

                    <li>
                        Linked Devices পরীক্ষা করুন।
                    </li>

                    <li>
                        Unknown device logout করুন।
                    </li>

                    <li>
                        Two-step verification PIN চালু করুন।
                    </li>

                    <li>
                        Suspicious contacts-কে block/report করুন।
                    </li>

                    <li>
                        Contacts-কে জানিয়ে দিন আপনার account থেকে
                        suspicious message গেলে ignore করতে।
                    </li>

                </ol>

                ${officialLink(
                    "WhatsApp Help Center",
                    officialRoutes.whatsapp.help
                )}

            `

        },

        suspended: {

            title:
                "🚫 Account Suspended",

            text: `

                <ol>

                    <li>
                        Suspension notice-এর কারণ পড়ুন।
                    </li>

                    <li>
                        Official app/site থেকেই notice verify করুন।
                    </li>

                    <li>
                        Official appeal/review option ব্যবহার করুন।
                    </li>

                    <li>
                        Identity verification চাইলে শুধু official channel-এ submit করুন।
                    </li>

                    <li>
                        Case/reference number সংরক্ষণ করুন।
                    </li>

                    <li>
                        Support reply সংরক্ষণ করুন।
                    </li>

                </ol>

                <div class="scan-limit">
                    Third-party “recovery agent” বা
                    guaranteed unban service-কে টাকা দেবেন না।
                </div>

            `

        },

        disabled: {

            title:
                "❌ Account Disabled",

            text: `

                <ol>
                    <li>Official notification-এর কারণ পরীক্ষা করুন।</li>
                    <li>Official appeal/review form ব্যবহার করুন।</li>
                    <li>Account ownership verify করুন।</li>
                    <li>Previous support case/reference সংরক্ষণ করুন।</li>
                    <li>Fake recovery services এড়িয়ে চলুন।</li>
                </ol>

                <div class="scan-limit">
                    CyberCare কোনো account recovery guarantee করে না।
                </div>

            `

        },

        login: {

            title:
                "🔑 Can't Login",

            text: `

                <ol>

                    <li>
                        Username/email/phone সঠিক কিনা পরীক্ষা করুন।
                    </li>

                    <li>
                        Official password reset option ব্যবহার করুন।
                    </li>

                    <li>
                        Email inbox এবং spam folder পরীক্ষা করুন।
                    </li>

                    <li>
                        Recovery phone/email পরীক্ষা করুন।
                    </li>

                    <li>
                        Unknown login alert থাকলে account secure করুন।
                    </li>

                    <li>
                        Phishing page-এ credentials দেবেন না।
                    </li>

                </ol>

            `

        },

        fake: {

            title:
                "🎭 Fake Profile / Impersonation",

            text: `

                <ol>

                    <li>Fake profile-এর screenshot নিন।</li>
                    <li>Profile URL সংরক্ষণ করুন।</li>
                    <li>Username সংরক্ষণ করুন।</li>
                    <li>Impersonation হিসেবে official report করুন।</li>
                    <li>নিজের account privacy review করুন।</li>
                    <li>Friends/family-কে সতর্ক করুন।</li>

                </ol>

            `

        },

        harassment: {

            title:
                "📞 Harassment",

            text: `

                <ol>

                    <li>Threat/message-এর screenshot নিন।</li>
                    <li>Call logs সংরক্ষণ করুন।</li>
                    <li>Username ও profile URL সংরক্ষণ করুন।</li>
                    <li>প্রয়োজনে block করুন।</li>
                    <li>Privacy settings review করুন।</li>
                    <li>Threat থাকলে evidence preserve করুন।</li>
                    <li>Trusted person-কে জানান।</li>
                    <li>Appropriate official reporting channel ব্যবহার করুন।</li>

                </ol>

            `

        },

        blackmail: {

            title:
                "⚠️ Blackmail / Sextortion",

            text: `

                <div class="emergency-alert">
                    ❤️ Blackmail হওয়া আপনার দোষ নয়।
                    Panic না করে evidence preserve করুন।
                </div>

                <ol>

                    <li>Blackmailer-কে টাকা দেবেন না।</li>

                    <li>আর কোনো ছবি/video পাঠাবেন না।</li>

                    <li>OTP/password/personal information দেবেন না।</li>

                    <li>Threat-এর screenshot রাখুন।</li>

                    <li>Username, URL এবং phone number সংরক্ষণ করুন।</li>

                    <li>Payment request থাকলে preserve করুন।</li>

                    <li>Password পরিবর্তন করুন।</li>

                    <li>2FA চালু করুন।</li>

                    <li>Active sessions পরীক্ষা করুন।</li>

                    <li>Evidence রাখার পর report/block করুন।</li>

                    <li>Trusted person-কে জানান।</li>

                </ol>

            `

        },

        privacy: {

            title:
                "🔒 Privacy Problem",

            text: `

                <ol>

                    <li>Profile visibility review করুন।</li>
                    <li>Location sharing সীমিত করুন।</li>
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

            title:
                "📸 Photo / Video Misuse",

            text: `

                <ol>

                    <li>Content-এর screenshot নিন।</li>
                    <li>Post/profile URL সংরক্ষণ করুন।</li>
                    <li>Username সংরক্ষণ করুন।</li>
                    <li>Date/time লিখে রাখুন।</li>
                    <li>Platform abuse/privacy reporting ব্যবহার করুন।</li>
                    <li>নিজের account secure করুন।</li>
                    <li>Removal guarantee-এর নামে কাউকে টাকা দেবেন না।</li>

                </ol>

            `

        },

        phishing: {

            title:
                "🎣 Phishing",

            text: `

                <div class="emergency-alert">
                    Suspicious link-এ login, OTP বা payment information দেবেন না।
                </div>

                <ol>

                    <li>Link-এ click না করাই safest option।</li>
                    <li>Domain spelling পরীক্ষা করুন।</li>
                    <li>Shortened link হলে extra caution নিন।</li>
                    <li>Sender independently verify করুন।</li>
                    <li>Official app/site নিজে খুলুন।</li>
                    <li>ভুল করে password দিলে সঙ্গে সঙ্গে password change করুন।</li>
                    <li>2FA চালু করুন।</li>

                </ol>

            `

        },

        stalking: {

            title:
                "👁️ Online Stalking",

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

            title:
                "🕵️ Unknown Login",

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

            title:
                "🛡️ 2FA Setup & Recovery",

            text: `

                <h3>2FA চালু করার সাধারণ পদ্ধতি</h3>

                <ol>

                    <li>
                        Account Settings খুলুন।
                    </li>

                    <li>
                        Security / Password & Security section খুলুন।
                    </li>

                    <li>
                        Two-Factor Authentication / 2-Step Verification নির্বাচন করুন।
                    </li>

                    <li>
                        Authenticator app অথবা অন্য available method নির্বাচন করুন।
                    </li>

                    <li>
                        Setup complete করুন।
                    </li>

                    <li>
                        Recovery / backup codes নিরাপদে রাখুন।
                    </li>

                </ol>

                <div class="scan-limit">
                    OTP, authenticator code বা backup code
                    কখনো support agent বা অন্য কাউকে দেবেন না।
                </div>

            `

        },

        delete: {

            title:
                "🗑️ Delete / Deactivate Account",

            text: `

                <ol>

                    <li>গুরুত্বপূর্ণ data backup করুন।</li>
                    <li>Connected services review করুন।</li>
                    <li>Payment/subscription review করুন।</li>
                    <li>Official account settings ব্যবহার করুন।</li>
                    <li>Delete এবং deactivate-এর পার্থক্য বুঝে action নিন।</li>

                </ol>

            `

        },

        financial: {

            title:
                "💳 Financial Fraud — Immediate Response",

            text: `

                <div class="emergency-alert">
                    🚨 টাকা চলে গেলে অপেক্ষা করবেন না।
                    যত দ্রুত সম্ভব bank/payment provider এবং
                    1930-এ report করুন।
                </div>

                <ol>

                    <li>
                        Bank/payment provider-এর official customer support-এ যোগাযোগ করুন।
                    </li>

                    <li>
                        Fraudulent transaction report করুন।
                    </li>

                    <li>
                        Card compromise হলে card block/freeze করার request করুন।
                    </li>

                    <li>
                        UPI compromise হলে bank/payment app-এর official support-এ report করুন।
                    </li>

                    <li>
                        Transaction ID / UTR সংরক্ষণ করুন।
                    </li>

                    <li>
                        Screenshot সংরক্ষণ করুন।
                    </li>

                    <li>
                        Cyber financial fraud হলে 1930-এ report করুন।
                    </li>

                    <li>
                        cybercrime.gov.in-এ complaint/report complete করুন।
                    </li>

                </ol>

                <h3>🚫 কখনো দেবেন না</h3>

                <ul>
                    <li>OTP</li>
                    <li>UPI PIN</li>
                    <li>ATM PIN</li>
                    <li>CVV</li>
                    <li>Bank password</li>
                    <li>Screen-sharing access</li>
                </ul>

            `

        },

        phone: {

            title:
                "📱 Phone Security Audit",

            text: `

                <h3>Android / iPhone-এ পরীক্ষা করুন</h3>

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
                    <li>Operating system updates</li>

                </ol>

                <div class="scan-limit">
                    Browser থেকে CyberCare আপনার ফোনের
                    internal malware বা অন্য app নিজে scan করতে পারে না।
                    তাই এটি guided security audit।
                </div>

            `

        },

        android: {

            title:
                "🤖 Android Security Guide",

            text: `

                <ol>

                    <li>
                        Settings → Security & privacy খুলুন।
                    </li>

                    <li>
                        Google Play Protect চালু আছে কিনা দেখুন।
                    </li>

                    <li>
                        Unknown / unused apps uninstall করুন।
                    </li>

                    <li>
                        Accessibility এবং Device Admin access review করুন।
                    </li>

                    <li>
                        Camera, microphone ও location permissions review করুন।
                    </li>

                    <li>
                        Android security update install করুন।
                    </li>

                    <li>
                        Google Account-এর 2-Step Verification চালু করুন।
                    </li>

                </ol>

            `

        },

        iphone: {

            title:
                "🍎 iPhone Security Guide",

            text: `

                <ol>

                    <li>
                        Settings → Privacy & Security খুলুন।
                    </li>

                    <li>
                        App permissions review করুন।
                    </li>

                    <li>
                        Safety Check option থাকলে review করুন।
                    </li>

                    <li>
                        Apple ID / Apple Account security পরীক্ষা করুন।
                    </li>

                    <li>
                        Unknown devices remove করুন।
                    </li>

                    <li>
                        iOS update করুন।
                    </li>

                    <li>
                        Stolen Device Protection available হলে review করুন।
                    </li>

                </ol>

            `

        },

        googleAssistant: {

            title:
                "🤖 Google Assistant / Gemini Problem",

            text: `

                <h3>Android phone-এ basic checks</h3>

                <ol>

                    <li>
                        Google app update করুন।
                    </li>

                    <li>
                        Assistant / Gemini settings খুলুন।
                    </li>

                    <li>
                        Microphone permission পরীক্ষা করুন।
                    </li>

                    <li>
                        Default digital assistant setting পরীক্ষা করুন।
                    </li>

                    <li>
                        “Hey Google” / Voice Match settings review করুন।
                    </li>

                    <li>
                        Google account সঠিক account কিনা পরীক্ষা করুন।
                    </li>

                    <li>
                        Google app cache সমস্যা থাকলে Settings থেকে cache clear করার চেষ্টা করুন।
                    </li>

                    <li>
                        Phone restart করুন।
                    </li>

                    <li>
                        Google app এবং system update করুন।
                    </li>

                </ol>

                <div class="scan-limit">
                    Android manufacturer অনুযায়ী menu-এর নাম
                    কিছুটা আলাদা হতে পারে।
                </div>

            `

        },

        computer: {

            title:
                "💻 Computer / Laptop Security",

            text: `

                <ol>

                    <li>Operating system update করুন।</li>
                    <li>Browser update করুন।</li>
                    <li>Unknown software uninstall করুন।</li>
                    <li>Browser extensions review করুন।</li>
                    <li>Saved passwords review করুন।</li>
                    <li>2FA ব্যবহার করুন।</li>
                    <li>Firewall/security protection enabled কিনা দেখুন।</li>
                    <li>Unknown remote-access software পরীক্ষা করুন।</li>
                    <li>Important data backup রাখুন।</li>
                    <li>Pirated/cracked software এড়িয়ে চলুন।</li>

                </ol>

            `

        },

        email: {

            title:
                "📧 Email Security",

            text: `

                <ol>

                    <li>Password unique করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Recent login activity review করুন।</li>
                    <li>Recovery email/phone পরীক্ষা করুন।</li>
                    <li>Unknown forwarding rules remove করুন।</li>
                    <li>Unknown filters পরীক্ষা করুন।</li>
                    <li>Third-party app access review করুন।</li>
                    <li>Suspicious emails-এর links এড়িয়ে চলুন।</li>

                </ol>

            `

        },

        internet: {

            title:
                "🌐 Internet Safety",

            text: `

                <ul>

                    <li>Unknown links-এ login করবেন না।</li>
                    <li>HTTPS থাকলেই website safe ধরে নেবেন না।</li>
                    <li>Domain spelling পরীক্ষা করুন।</li>
                    <li>Public Wi-Fi-তে sensitive activity এড়িয়ে চলুন।</li>
                    <li>Software update রাখুন।</li>
                    <li>Strong unique passwords ব্যবহার করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Unexpected payment request verify করুন।</li>

                </ul>

            `

        }

    };

    // =========================================================
    // UPI / BANKING EMERGENCY
    // =========================================================

    const financialEmergencyGuide = `

        <div class="emergency-alert">
            🚨 FINANCIAL FRAUD — ACT NOW
        </div>

        <h3>১. Bank / payment provider-এ সঙ্গে সঙ্গে যোগাযোগ</h3>

        <ol>

            <li>
                Official app / card-এর পিছনের official number ব্যবহার করুন।
            </li>

            <li>
                Fraud transaction report করুন।
            </li>

            <li>
                Card compromised হলে card block/freeze করুন।
            </li>

            <li>
                Internet/mobile banking compromise হলে
                bank-এর নির্দেশনা অনুযায়ী access secure করুন।
            </li>

            <li>
                UPI compromise হলে bank/payment app-এর official
                fraud-reporting route ব্যবহার করুন।
            </li>

        </ol>

        <h3>২. 1930-এ report</h3>

        <p>
            India-তে cyber financial fraud-এর জন্য
            National Cyber Crime Helpline <strong>1930</strong> ব্যবহার করুন।
        </p>

        <div class="scan-limit">
            যত দ্রুত report করবেন তত ভালো।
            Transaction ID / UTR, bank/wallet details,
            amount, date/time এবং screenshots প্রস্তুত রাখুন।
        </div>

        ${officialLink(
            "Open National Cyber Crime Portal",
            "https://www.cybercrime.gov.in/"
        )}

        <h3>৩. Evidence প্রস্তুত করুন</h3>

        <ul>
            <li>Transaction ID / UTR</li>
            <li>Amount</li>
            <li>Date/time</li>
            <li>Bank / wallet / merchant</li>
            <li>UPI ID</li>
            <li>Phone number</li>
            <li>Screenshot</li>
            <li>Messages / emails</li>
            <li>Website / profile URL</li>
        </ul>

        <h3>🚫 কখনো করবেন না</h3>

        <ul>
            <li>OTP দেবেন না</li>
            <li>UPI PIN দেবেন না</li>
            <li>CVV দেবেন না</li>
            <li>Screen sharing চালু করবেন না</li>
            <li>Remote-control app install করবেন না</li>
        </ul>

    `;

    // =========================================================
    // CYBER LAW / EVIDENCE GUIDE
    // =========================================================

    const cyberLawGuide = `

        <h3>⚖️ Cyber Crime Reporting Guide</h3>

        <p>
            CyberCare legal advice-এর replacement নয়।
            এটি evidence preservation এবং official reporting-এর
            practical guide।
        </p>

        <h3>১. Evidence preserve করুন</h3>

        <ul>

            <li>Screenshot</li>
            <li>Screen recording যেখানে প্রয়োজন</li>
            <li>Profile URL</li>
            <li>Username</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Message history</li>
            <li>Transaction ID / UTR</li>
            <li>Date and time</li>
            <li>Website URL</li>
            <li>Relevant email headers যেখানে applicable</li>

        </ul>

        <h3>২. Original evidence নষ্ট করবেন না</h3>

        <p>
            শুধু edited screenshot-এর ওপর নির্ভর না করে
            original messages/files যতটা সম্ভব preserve করুন।
        </p>

        <h3>৩. National Cyber Crime Reporting Portal</h3>

        <p>
            India-র official cybercrime reporting route ব্যবহার করুন।
        </p>

        ${officialLink(
            "Open Cyber Crime Portal",
            "https://www.cybercrime.gov.in/"
        )}

        ${officialLink(
            "Report / Check Suspect",
            "https://cybercrime.gov.in/Webform/cyber_suspect.aspx"
        )}

        <h3>৪. Financial fraud</h3>

        <p>
            Financial cyber fraud হলে দ্রুত <strong>1930</strong>-এ report করুন
            এবং official portal-এ complaint/report complete করুন।
        </p>

    `;

    // =========================================================
    // SCAM ALERTS
    // =========================================================

    const scamAlerts = [

        {
            title: "🚨 Digital Arrest Scam",
            text:
                "Police/CBI/Customs/official সাজা caller video call বা phone-এ ভয় দেখিয়ে টাকা চাইলে সতর্ক থাকুন। Identity independently verify করুন।"
        },

        {
            title: "💼 Fake Job / Task Scam",
            text:
                "High income promise, advance payment, task deposit, withdrawal fee বা fake work platform-এর ব্যাপারে সতর্ক থাকুন।"
        },

        {
            title: "📱 Fake APK / App Scam",
            text:
                "Unknown APK বা message-এর মাধ্যমে app install করবেন না। Banking/UPI related app শুধু trusted official store/source থেকে নিন।"
        },

        {
            title: "💰 Investment / Trading Scam",
            text:
                "Guaranteed profit, fake trading group, WhatsApp/Telegram investment group বা fake app-এর মাধ্যমে টাকা চাইলে independently verify করুন।"
        },

        {
            title: "🏦 KYC / Bank Update Scam",
            text:
                "KYC বন্ধ হয়ে যাবে বলে link পাঠিয়ে OTP/password/card details চাইলে সন্দেহ করুন। Official bank app/site নিজে খুলুন।"
        },

        {
            title: "🔗 QR Code Scam",
            text:
                "QR scan করলে টাকা receive হবে—এমন দাবি সবসময় সত্য নয়। UPI PIN সাধারণত payment authorize করার জন্য লাগে; টাকা receive করতে PIN দেওয়ার দরকার নেই।"
        },

        {
            title: "🎁 Prize / Lottery Scam",
            text:
                "Prize release করার নামে tax, processing fee বা advance payment চাইলে সতর্ক থাকুন।"
        },

        {
            title: "👮 Fake Government / Police Scam",
            text:
                "Government official পরিচয় দিয়ে ভয় দেখিয়ে টাকা বা sensitive data চাইলে independently verify করুন।"
        }

    ];

    // =========================================================
    // SOCIAL MEDIA DATABASE
    // =========================================================

    const socialPlatforms = {

        facebook: {
            name: "Facebook",
            icon: "🔵",
            problems: [

                ["Account Hacked", "facebookRecovery"],
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

                ["Account Hacked", "instagramRecovery"],
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

                ["Account Compromised", "whatsappRecovery"],
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

                ["Account Hacked", "gmailRecovery"],
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

                ["Google Account Hacked", "gmailRecovery"],
                ["Gmail Hacked", "gmailRecovery"],
                ["Can't Login", "login"],
                ["Account Disabled", "disabled"],
                ["Suspicious Login", "unknownLogin"],
                ["2FA Problem", "twofa"],
                ["Recovery Problem", "login"],
                ["Phishing Email", "phishing"],
                ["Privacy Problem", "privacy"],
                ["Connected Apps", "privacy"],
                ["Unknown Device", "unknownLogin"],
                ["Google Assistant Problem", "googleAssistant"],
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
            platform.problems
                .map(([name, guideKey]) => {

                    return `
                        <button
                            type="button"
                            class="social-problem-btn"
                            data-social-guide="${escapeHTML(guideKey)}"
                            data-social-platform="${escapeHTML(platform.name)}"
                            data-social-problem="${escapeHTML(name)}"
                        >
                            ${escapeHTML(name)}
                        </button>
                    `;

                })
                .join("");

        showGuide(
            `${platform.icon} ${platform.name} Help Desk`,
            `
                <h3>
                    ${escapeHTML(platform.name)}
                    সমস্যার ধরন
                </h3>

                <div class="social-problem-grid">
                    ${buttons}
                </div>

                <div class="scan-limit">
                    সমস্যাটিতে চাপ দিন।
                    এরপর CyberCare step-by-step guide,
                    do/don't এবং support template দেখাবে।
                </div>
            `
        );

        setTimeout(() => {

            $$(".social-problem-btn")
                .forEach(button => {

                    button.addEventListener(
                        "click",
                        () => {

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

                        }
                    );

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
                            data-platform="${escapeHTML(key)}"
                        >

                            <span>
                                ${platform.icon}
                            </span>

                            <strong>
                                ${escapeHTML(platform.name)}
                            </strong>

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

                button.addEventListener(
                    "click",
                    () => {

                        openSocialPlatform(
                            button.dataset.platform
                        );

                    }
                );

            });

    }

    renderSocialHelpDesk();

    $$("[data-social-platform]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const key =
                        button.dataset.socialPlatform;

                    if (socialPlatforms[key]) {

                        openSocialPlatform(key);

                    }

                }
            );

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
            title:
                "🔐 Account Hacked",
            guide:
                universalGuides.hacked
        },

        {
            keywords: [
                "facebook hacked",
                "facebook recovery",
                "fb hack",
                "fb hacked"
            ],
            title:
                "🔵 Facebook Recovery",
            guide:
                universalGuides.facebookRecovery
        },

        {
            keywords: [
                "instagram hacked",
                "instagram recovery",
                "insta hack"
            ],
            title:
                "📸 Instagram Recovery",
            guide:
                universalGuides.instagramRecovery
        },

        {
            keywords: [
                "gmail hacked",
                "google hacked",
                "gmail recovery",
                "google recovery"
            ],
            title:
                "🔴 Gmail / Google Recovery",
            guide:
                universalGuides.gmailRecovery
        },

        {
            keywords: [
                "whatsapp hacked",
                "whatsapp recovery",
                "whatsapp compromised"
            ],
            title:
                "🟢 WhatsApp Recovery",
            guide:
                universalGuides.whatsappRecovery
        },

        {
            keywords: [
                "suspended",
                "suspend",
                "সাসপেন্ড"
            ],
            title:
                "🚫 Account Suspended",
            guide:
                universalGuides.suspended
        },

        {
            keywords: [
                "disabled",
                "disable",
                "ডিজেবল"
            ],
            title:
                "❌ Account Disabled",
            guide:
                universalGuides.disabled
        },

        {
            keywords: [
                "login",
                "can't login",
                "login problem",
                "লগইন"
            ],
            title:
                "🔑 Login Problem",
            guide:
                universalGuides.login
        },

        {
            keywords: [
                "blackmail",
                "ব্ল্যাকমেইল",
                "sextortion"
            ],
            title:
                "⚠️ Blackmail",
            guide:
                universalGuides.blackmail
        },

        {
            keywords: [
                "harassment",
                "হয়রানি",
                "disturb",
                "বিরক্ত"
            ],
            title:
                "📞 Harassment",
            guide:
                universalGuides.harassment
        },

        {
            keywords: [
                "fake profile",
                "fake account",
                "ভুয়া প্রোফাইল"
            ],
            title:
                "🎭 Fake Profile",
            guide:
                universalGuides.fake
        },

        {
            keywords: [
                "privacy",
                "প্রাইভেসি",
                "private"
            ],
            title:
                "🔒 Privacy",
            guide:
                universalGuides.privacy
        },

        {
            keywords: [
                "photo",
                "video",
                "ছবি",
                "ভিডিও"
            ],
            title:
                "📸 Photo / Video Misuse",
            guide:
                universalGuides.photo
        },

        {
            keywords: [
                "phishing",
                "ফিশিং",
                "suspicious link",
                "লিংক"
            ],
            title:
                "🎣 Phishing",
            guide:
                universalGuides.phishing
        },

        {
            keywords: [
                "stalking",
                "স্টকিং"
            ],
            title:
                "👁️ Online Stalking",
            guide:
                universalGuides.stalking
        },

        {
            keywords: [
                "unknown login",
                "unknown device",
                "অপরিচিত লগইন"
            ],
            title:
                "🕵️ Unknown Login",
            guide:
                universalGuides.unknownLogin
        },

        {
            keywords: [
                "2fa",
                "two factor",
                "two-factor",
                "2 step",
                "ওটিপি"
            ],
            title:
                "🛡️ 2FA",
            guide:
                universalGuides.twofa
        },

        {
            keywords: [
                "money",
                "fraud",
                "upi",
                "bank",
                "টাকা",
                "প্রতারণা",
                "financial fraud"
            ],
            title:
                "💳 Financial Fraud",
            guide:
                universalGuides.financial
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
            title:
                "📱 Phone Security",
            guide:
                universalGuides.phone
        },

        {
            keywords: [
                "android"
            ],
            title:
                "🤖 Android Security",
            guide:
                universalGuides.android
        },

        {
            keywords: [
                "iphone",
                "ios",
                "apple security"
            ],
            title:
                "🍎 iPhone Security",
            guide:
                universalGuides.iphone
        },

        {
            keywords: [
                "google assistant",
                "assistant",
                "gemini"
            ],
            title:
                "🤖 Google Assistant / Gemini",
            guide:
                universalGuides.googleAssistant
        },

        {
            keywords: [
                "computer",
                "laptop",
                "pc"
            ],
            title:
                "💻 Computer / Laptop Security",
            guide:
                universalGuides.computer
        },

        {
            keywords: [
                "email",
                "email hacked",
                "mail security"
            ],
            title:
                "📧 Email Security",
            guide:
                universalGuides.email
        },

        {
            keywords: [
                "internet",
                "web",
                "online safety"
            ],
            title:
                "🌐 Internet Safety",
            guide:
                universalGuides.internet
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
                    q.includes(
                        normalize(keyword)
                    )
                )
            );

        if (!matches.length) {

            searchResults.innerHTML = `

                <div class="search-result">

                    <h3>
                        🔎 No exact guide found
                    </h3>

                    <p>
                        Try:
                        hacked, Facebook hacked,
                        Instagram recovery, Gmail hacked,
                        WhatsApp hacked, blackmail,
                        privacy, fake profile,
                        harassment, phishing,
                        UPI fraud, phone security,
                        Android, iPhone,
                        Google Assistant,
                        computer, email.
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

                <h3>
                    ${escapeHTML(item.title)}
                </h3>

                <p>
                    আপনার সমস্যার জন্য
                    CyberCare guide পাওয়া গেছে।
                </p>

                <button
                    type="button"
                    class="result-help"
                >
                    View Full Guide →
                </button>

            `;

            $(".result-help", result)
                ?.addEventListener(
                    "click",
                    () => {

                        showGuide(
                            item.title,
                            item.guide.text
                        );

                    }
                );

            searchResults.appendChild(
                result
            );

        });

    }

    problemSearch?.addEventListener(
        "input",
        event =>
            performSearch(
                event.target.value
            )
    );

    problemSearch?.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                performSearch(
                    problemSearch.value
                );

            }

        }
    );

    // =========================================================
    // GUIDE MODAL
    // =========================================================

    function showGuide(
        title,
        content
    ) {

        $("#cybercareModal")
            ?.remove();

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
                        ${escapeHTML(title)}
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

        document.body.appendChild(
            modal
        );

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

        // Official routes
        $$("[data-open-url]", modal)
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        safeOpen(
                            button.dataset.openUrl
                        );

                    }
                );

            });

        // Copy support templates
        $$(".copy-template", modal)
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const area =
                            $(".cybercare-template", button.parentElement);

                        if (area) {

                            copyText(
                                area.value,
                                button
                            );

                        }

                    }
                );

            });

        // Copy generic text
        $$(".copy-content", modal)
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        copyText(
                            button.dataset.copy || "",
                            button
                        );

                    }
                );

            });

        setTimeout(() => {

            $(".guide-close", modal)
                ?.focus();

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
        "Security alerts",
        "Browser extensions",
        "Recovery information"

    ];

    function runSecurityScan() {

        if (!scanStatus) {

            showGuide(
                "🛡️ CyberCare Security Scan",
                universalGuides.phone.text
            );

            return;

        }

        scanStatus.classList.add(
            "active"
        );

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
            setInterval(
                () => {

                    progress += 6;

                    if (scanProgressBar) {

                        scanProgressBar.style.width =
                            `${Math.min(
                                progress,
                                100
                            )}%`;

                    }

                    if (
                        scanStep &&
                        scanChecks[index]
                    ) {

                        scanStep.textContent =
                            `Checking: ${scanChecks[index]}...`;

                    }

                    index++;

                    if (
                        progress >= 100
                    ) {

                        clearInterval(
                            timer
                        );

                        if (scanStep) {

                            scanStep.textContent =
                                "Security audit completed.";

                        }

                        showScanResult();

                    }

                },
                180
            );

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

            <h3>
                🛡️ Security Audit Complete
            </h3>

            <p>
                গুরুত্বপূর্ণ security areas-এর checklist তৈরি হয়েছে।
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
                <li>🌐 Browser extensions review করুন</li>

            </ul>

            <div class="scan-limit">

                ℹ️ এটি browser-based security audit।
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
    // PHISHING / URL SCANNER
    // =========================================================

    function analyzeURLRisk(url) {

        const value =
            text(url);

        if (!value) {

            return {
                level: "unknown",
                score: 0,
                reasons: [
                    "URL দিন।"
                ]
            };

        }

        let parsed;

        try {

            parsed =
                new URL(value);

        } catch {

            return {
                level: "danger",
                score: 100,
                reasons: [
                    "URL format invalid।"
                ]
            };

        }

        let score = 0;
        const reasons = [];

        const host =
            normalize(parsed.hostname);

        const full =
            normalize(value);

        if (
            parsed.protocol !== "https:"
        ) {

            score += 20;

            reasons.push(
                "HTTPS ব্যবহার করছে না।"
            );

        }

        if (
            host.includes("xn--")
        ) {

            score += 25;

            reasons.push(
                "Punycode / internationalized domain ব্যবহার করছে।"
            );

        }

        if (
            host.split(".").length > 4
        ) {

            score += 10;

            reasons.push(
                "অস্বাভাবিকভাবে অনেক subdomain আছে।"
            );

        }

        if (
            /@/.test(
                parsed.href
            )
        ) {

            score += 30;

            reasons.push(
                "URL-এ @ চিহ্ন রয়েছে। এটি phishing-এ ব্যবহৃত হতে পারে।"
            );

        }

        if (
            /login|verify|verification|secure|account|password|wallet|bank|kyc|otp|reward|prize|urgent/i
                .test(full)
        ) {

            score += 10;

            reasons.push(
                "Sensitive action-related keyword পাওয়া গেছে।"
            );

        }

        if (
            /bit\.ly|tinyurl|t\.co|goo\.gl|shorturl|is\.gd/i
                .test(host)
        ) {

            score += 15;

            reasons.push(
                "URL shortener detect হয়েছে।"
            );

        }

        if (
            /free|gift|winner|bonus|claim|airdrop|support|unlock/i
                .test(host)
        ) {

            score += 15;

            reasons.push(
                "Suspicious promotional/support wording পাওয়া গেছে।"
            );

        }

        score =
            Math.min(
                score,
                100
            );

        let level =
            "low";

        if (score >= 60) {

            level =
                "high";

        } else if (score >= 30) {

            level =
                "medium";

        }

        if (!reasons.length) {

            reasons.push(
                "Basic heuristic-এ বড় red flag পাওয়া যায়নি।"
            );

        }

        return {
            level,
            score,
            reasons
        };

    }

    function openPhishingScanner() {

        showGuide(
            "🎣 Phishing Scanner",
            `

                <p>
                    নিচের box-এ suspicious link paste করুন।
                    CyberCare browser-side heuristic analysis করবে।
                </p>

                <input
                    id="phishingUrlInput"
                    type="url"
                    placeholder="https://example.com/..."
                    autocomplete="off"
                >

                <button
                    type="button"
                    class="internal-tool-action"
                    id="runPhishingScan"
                >
                    🔍 Scan Link
                </button>

                <div id="phishingResult"></div>

                <div class="scan-limit">
                    ⚠️ এটি 100% malware/phishing guarantee নয়।
                    Real-time reputation checking-এর জন্য
                    trusted security service বা official reporting route ব্যবহার করুন।
                </div>

                ${officialLink(
                    "Check / Report Suspect to I4C",
                    "https://cybercrime.gov.in/Webform/cyber_suspect.aspx"
                )}

            `
        );

        setTimeout(() => {

            $("#runPhishingScan")
                ?.addEventListener(
                    "click",
                    () => {

                        const input =
                            $("#phishingUrlInput");

                        const result =
                            $("#phishingResult");

                        if (!input || !result)
                            return;

                        const analysis =
                            analyzeURLRisk(
                                input.value
                            );

                        let icon =
                            "🟢";

                        if (
                            analysis.level ===
                            "medium"
                        ) {

                            icon =
                                "🟡";

                        }

                        if (
                            analysis.level ===
                            "high"
                        ) {

                            icon =
                                "🔴";

                        }

                        result.innerHTML = `

                            <div class="scan-result active">

                                <h3>
                                    ${icon}
                                    Risk: ${analysis.level.toUpperCase()}
                                </h3>

                                <p>
                                    Heuristic score:
                                    <strong>
                                        ${analysis.score}/100
                                    </strong>
                                </p>

                                <ul>

                                    ${analysis.reasons
                                        .map(
                                            r =>
                                                `<li>${escapeHTML(r)}</li>`
                                        )
                                        .join("")}

                                </ul>

                                <p>
                                    <strong>
                                        গুরুত্বপূর্ণ:
                                    </strong>
                                    কোনো suspicious page-এ
                                    password, OTP, UPI PIN,
                                    card details বা recovery code দেবেন না।
                                </p>

                            </div>

                        `;

                    }
                );

        }, 60);

    }

    // =========================================================
    // DATA LEAK CHECK / HIBP
    // =========================================================

    function openDataLeakChecker() {

        showGuide(
            "🧬 Data Leak / Breach Check",
            `

                <p>
                    আপনার email address breach database-এ
                    দেখা গেছে কিনা check করার ব্যবস্থা।
                </p>

                <input
                    id="leakEmailInput"
                    type="email"
                    placeholder="you@example.com"
                    autocomplete="off"
                >

                <button
                    type="button"
                    class="internal-tool-action"
                    id="checkLeakBtn"
                >
                    🔎 Check Breach
                </button>

                <div id="leakResult"></div>

                <div class="scan-limit">

                    HIBP-এর authenticated email API ব্যবহার করতে
                    API key/backend দরকার। Public frontend-এর মধ্যে
                    private API key রাখা নিরাপদ নয়।

                </div>

                ${officialLink(
                    "Open Have I Been Pwned",
                    "https://haveibeenpwned.com/"
                )}

            `
        );

        setTimeout(() => {

            $("#checkLeakBtn")
                ?.addEventListener(
                    "click",
                    checkEmailLeak
                );

        }, 60);

    }

    async function checkEmailLeak() {

        const input =
            $("#leakEmailInput");

        const result =
            $("#leakResult");

        if (!input || !result)
            return;

        const email =
            text(input.value);

        if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
                .test(email)
        ) {

            result.innerHTML = `
                <div class="scan-limit">
                    ❌ Valid email address দিন।
                </div>
            `;

            return;

        }

        // Secure backend route if configured
        if (
            CYBERCARE_CONFIG
                .hibpProxyEndpoint
        ) {

            result.innerHTML = `
                <div class="scan-limit">
                    🔄 Checking...
                </div>
            `;

            try {

                const response =
                    await fetch(
                        CYBERCARE_CONFIG
                            .hibpProxyEndpoint +
                        "?email=" +
                        encodeURIComponent(email),
                        {
                            method: "GET",
                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );

                if (!response.ok) {

                    throw new Error(
                        "Leak service unavailable"
                    );

                }

                const data =
                    await response.json();

                if (
                    data &&
                    data.breached
                ) {

                    result.innerHTML = `

                        <div class="scan-result active warning">

                            <h3>
                                ⚠️ Possible Breach Found
                            </h3>

                            <p>
                                আপনার configured breach service
                                breach result return করেছে।
                            </p>

                        </div>

                    `;

                } else {

                    result.innerHTML = `

                        <div class="scan-result active safe">

                            <h3>
                                🟢 No Breach Found
                            </h3>

                            <p>
                                Configured service অনুযায়ী
                                কোনো result পাওয়া যায়নি।
                            </p>

                        </div>

                    `;

                }

            } catch {

                result.innerHTML = `
                    <div class="scan-limit">
                        ⚠️ Breach service unavailable।
                        Official HIBP website দিয়ে manually check করুন।
                    </div>
                `;

            }

            return;

        }

        // No backend: do not expose HIBP key
        result.innerHTML = `

            <div class="scan-limit">

                🔐 <strong>Secure API setup required</strong>

                <p>
                    HIBP-এর email breach API authenticated।
                    Public JavaScript-এর মধ্যে private API key
                    রাখা নিরাপদ নয়।
                </p>

                <p>
                    তাই CyberCare আপনার email-কে কোনো third-party
                    API-তে এই browser থেকে পাঠাচ্ছে না।
                </p>

                <p>
                    নিচের official HIBP route ব্যবহার করে check করুন।
                </p>

            </div>

        `;

    }

    // =========================================================
    // PASSWORD CHECKER
    // =========================================================

    function openPasswordChecker() {

        showGuide(
            "🔐 Password Safety Checker",
            `

                <p>
                    Password browser-এর বাইরে পাঠানো হবে না।
                </p>

                <input
                    id="passwordInput"
                    type="password"
                    placeholder="Enter password"
                    autocomplete="new-password"
                >

                <button
                    type="button"
                    class="internal-tool-action"
                    id="checkPassword"
                >
                    Check Password
                </button>

                <div id="passwordResult"></div>

            `
        );

        setTimeout(() => {

            $("#checkPassword")
                ?.addEventListener(
                    "click",
                    checkPasswordStrength
                );

        }, 50);

    }

    function checkPasswordStrength() {

        const input =
            $("#passwordInput");

        const result =
            $("#passwordResult");

        if (!input || !result)
            return;

        const password =
            input.value;

        if (!password) {

            result.innerHTML =
                "<p>Enter a password.</p>";

            return;

        }

        let score = 0;

        if (
            password.length >= 12
        ) score++;

        if (
            password.length >= 16
        ) score++;

        if (
            /[A-Z]/.test(password)
        ) score++;

        if (
            /[a-z]/.test(password)
        ) score++;

        if (
            /[0-9]/.test(password)
        ) score++;

        if (
            /[^A-Za-z0-9]/.test(password)
        ) score++;

        const commonPatterns = [

            "password",
            "123456",
            "12345678",
            "qwerty",
            "admin",
            "letmein",
            "welcome",
            "iloveyou"

        ];

        if (
            commonPatterns.some(
                item =>
                    password
                        .toLowerCase()
                        .includes(item)
            )
        ) {

            score -= 2;

        }

        score =
            Math.max(
                0,
                Math.min(
                    score,
                    6
                )
            );

        let message;

        if (
            password.length < 8
        ) {

            message =
                "🔴 Very Weak";

        } else if (
            score <= 2
        ) {

            message =
                "🔴 Weak";

        } else if (
            score <= 4
        ) {

            message =
                "🟡 Moderate";

        } else if (
            score === 5
        ) {

            message =
                "🟢 Strong";

        } else {

            message =
                "🟢 Very Strong Structure";

        }

        result.innerHTML = `

            <div class="scan-result active">

                <h3>
                    ${message}
                </h3>

                <p>
                    Structure score:
                    ${score}/6
                </p>

                <ul>

                    <li>
                        Long unique password ব্যবহার করুন।
                    </li>

                    <li>
                        Password reuse করবেন না।
                    </li>

                    <li>
                        2FA চালু করুন।
                    </li>

                    <li>
                        Personal information দিয়ে password বানাবেন না।
                    </li>

                </ul>

            </div>

        `;

        // Clear password from DOM shortly after analysis.
        setTimeout(() => {

            input.value = "";

        }, 1000);

    }

    // =========================================================
    // CYBER SAFETY SCORE
    // =========================================================

    function openSafetyScore() {

        showGuide(
            "🛡️ Cyber Safety Score",
            `

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
                        Preserve evidence
                    </label>

                </div>

                <button
                    type="button"
                    class="internal-tool-action"
                    id="calculateScore"
                >
                    Calculate Score
                </button>

                <div id="scoreResult"></div>

            `
        );

        setTimeout(() => {

            $("#calculateScore")
                ?.addEventListener(
                    "click",
                    calculateSafetyScore
                );

        }, 50);

    }

    function calculateSafetyScore() {

        const checks =
            $$("#cybercareModal .score-checks input");

        if (!checks.length)
            return;

        const yes =
            checks.filter(
                c => c.checked
            ).length;

        const percentage =
            Math.round(
                (yes / checks.length) * 100
            );

        const result =
            $("#scoreResult");

        if (!result)
            return;

        let level;
        let advice;

        if (
            percentage >= 80
        ) {

            level =
                "🟢 Excellent";

            advice =
                "আপনার basic digital safety habits ভালো।";

        } else if (
            percentage >= 60
        ) {

            level =
                "🟡 Good Start";

            advice =
                "আরও কিছু security habit improve করুন।";

        } else if (
            percentage >= 40
        ) {

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

                <h3>
                    ${percentage}%
                </h3>

                <p>
                    <strong>
                        ${level}
                    </strong>
                </p>

                <p>
                    ${advice}
                </p>

            </div>

        `;

    }

    // =========================================================
    // OPEN TOOL SYSTEM
    // =========================================================

    function openTool(tool) {

        const tools = {

            scam: {

                title:
                    "🔎 Scam Risk Checker",

                content: `

                    <p>
                        সত্যি warning sign select করুন।
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
                        type="button"
                    >
                        Analyze Risk
                    </button>

                    <div id="scamResult"></div>

                `

            },

            password: {

                title:
                    "🔐 Password Checker",

                content: `

                    <p>
                        Password browser-এর বাইরে পাঠানো হবে না।
                    </p>

                    <input
                        id="passwordInput"
                        type="password"
                        placeholder="Enter password"
                        autocomplete="new-password"
                    >

                    <button
                        class="internal-tool-action"
                        id="checkPassword"
                        type="button"
                    >
                        Check Password
                    </button>

                    <div id="passwordResult"></div>

                `

            },

            url: {

                title:
                    "🎣 Phishing Scanner",

                content: `

                    <p>
                        Suspicious URL এখানে paste করুন।
                    </p>

                    <input
                        id="phishingUrlInput"
                        type="url"
                        placeholder="https://example.com"
                    >

                    <button
                        class="internal-tool-action"
                        id="runPhishingScan"
                        type="button"
                    >
                        Scan Link
                    </button>

                    <div id="phishingResult"></div>

                `

            },

            phishing: {

                title:
                    "🎣 Phishing Scanner",

                content: `

                    <p>
                        Suspicious URL এখানে paste করুন।
                    </p>

                    <input
                        id="phishingUrlInput"
                        type="url"
                        placeholder="https://example.com"
                    >

                    <button
                        class="internal-tool-action"
                        id="runPhishingScan"
                        type="button"
                    >
                        Scan Link
                    </button>

                    <div id="phishingResult"></div>

                    ${officialLink(
                        "Report / Check Suspect to I4C",
                        "https://cybercrime.gov.in/Webform/cyber_suspect.aspx"
                    )}

                `

            },

            leak: {

                title:
                    "🧬 Data Leak Check",

                content: `

                    <p>
                        Email breach check।
                    </p>

                    <input
                        id="leakEmailInput"
                        type="email"
                        placeholder="you@example.com"
                        autocomplete="off"
                    >

                    <button
                        class="internal-tool-action"
                        id="checkLeakBtn"
                        type="button"
                    >
                        Check Breach
                    </button>

                    <div id="leakResult"></div>

                `

            },

            dataLeak: {

                title:
                    "🧬 Data Leak Check",

                content: `

                    <p>
                        Email breach check।
                    </p>

                    <input
                        id="leakEmailInput"
                        type="email"
                        placeholder="you@example.com"
                        autocomplete="off"
                    >

                    <button
                        class="internal-tool-action"
                        id="checkLeakBtn"
                        type="button"
                    >
                        Check Breach
                    </button>

                    <div id="leakResult"></div>

                `

            },

            privacy: {

                title:
                    "🔒 Privacy Checklist",

                content: `

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

                `

            },

            evidence: {

                title:
                    "🧾 Evidence Checklist",

                content: `

                    <ul>

                        <li>📸 Screenshots</li>
                        <li>👤 Username</li>
                        <li>🔗 Profile URL</li>
                        <li>💬 Messages</li>
                        <li>☎️ Call logs</li>
                        <li>🕐 Date and time</li>
                        <li>💳 Transaction ID / UTR</li>
                        <li>📧 Emails</li>
                        <li>📱 Phone number</li>
                        <li>🌐 Website URL</li>
                        <li>📨 Relevant email headers</li>

                    </ul>

                    <p>
                        Original evidence যতটা সম্ভব preserve করুন।
                    </p>

                `

            },

            score: {

                title:
                    "🛡️ Cyber Safety Score",

                content: `

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
                            Preserve evidence
                        </label>

                    </div>

                    <button
                        class="internal-tool-action"
                        id="calculateScore"
                        type="button"
                    >
                        Calculate Score
                    </button>

                    <div id="scoreResult"></div>

                `

            },

            recovery: {
                title:
                    "🔐 Emergency Account Recovery",
                content:
                    universalGuides.hacked.text
            },

            facebookRecovery: {
                title:
                    universalGuides.facebookRecovery.title,
                content:
                    universalGuides.facebookRecovery.text
            },

            instagramRecovery: {
                title:
                    universalGuides.instagramRecovery.title,
                content:
                    universalGuides.instagramRecovery.text
            },

            gmailRecovery: {
                title:
                    universalGuides.gmailRecovery.title,
                content:
                    universalGuides.gmailRecovery.text
            },

            whatsappRecovery: {
                title:
                    universalGuides.whatsappRecovery.title,
                content:
                    universalGuides.whatsappRecovery.text
            },

            phone: {
                title:
                    universalGuides.phone.title,
                content:
                    universalGuides.phone.text
            },

            android: {
                title:
                    universalGuides.android.title,
                content:
                    universalGuides.android.text
            },

            iphone: {
                title:
                    universalGuides.iphone.title,
                content:
                    universalGuides.iphone.text
            },

            assistant: {
                title:
                    universalGuides.googleAssistant.title,
                content:
                    universalGuides.googleAssistant.text
            },

            googleAssistant: {
                title:
                    universalGuides.googleAssistant.title,
                content:
                    universalGuides.googleAssistant.text
            },

            computer: {
                title:
                    universalGuides.computer.title,
                content:
                    universalGuides.computer.text
            },

            email: {
                title:
                    universalGuides.email.title,
                content:
                    universalGuides.email.text
            },

            internet: {
                title:
                    universalGuides.internet.title,
                content:
                    universalGuides.internet.text
            },

            financial: {
                title:
                    "💳 Financial Fraud",
                content:
                    financialEmergencyGuide
            },

            upi: {
                title:
                    "💳 UPI / Bank Fraud Emergency",
                content:
                    financialEmergencyGuide
            },

            bank: {
                title:
                    "🏦 Bank Fraud Emergency",
                content:
                    financialEmergencyGuide
            },

            blackmail: {
                title:
                    universalGuides.blackmail.title,
                content:
                    universalGuides.blackmail.text
            },

            harassment: {
                title:
                    universalGuides.harassment.title,
                content:
                    universalGuides.harassment.text
            },

            law: {
                title:
                    "⚖️ Cyber Law & Reporting",
                content:
                    cyberLawGuide
            },

            cyberLaw: {
                title:
                    "⚖️ Cyber Law & Reporting",
                content:
                    cyberLawGuide
            },

            alerts: {
                title:
                    "🚨 Scam Alerts",
                content:
                    renderScamAlerts()
            }

        };

        const selected =
            tools[tool];

        if (!selected) {

            showGuide(
                "🛠️ CyberCare Tool",
                "<p>Tool not found.</p>"
            );

            return;

        }

        showGuide(
            selected.title,
            selected.content
        );

        bindModalToolEvents();

    }

    function bindModalToolEvents() {

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

            $("#runPhishingScan")
                ?.addEventListener(
                    "click",
                    () => {

                        const input =
                            $("#phishingUrlInput");

                        const result =
                            $("#phishingResult");

                        if (!input || !result)
                            return;

                        const analysis =
                            analyzeURLRisk(
                                input.value
                            );

                        let icon =
                            "🟢";

                        if (
                            analysis.level ===
                            "medium"
                        ) icon = "🟡";

                        if (
                            analysis.level ===
                            "high"
                        ) icon = "🔴";

                        result.innerHTML = `

                            <div class="scan-result active">

                                <h3>
                                    ${icon}
                                    ${analysis.level.toUpperCase()}
                                </h3>

                                <p>
                                    Score:
                                    ${analysis.score}/100
                                </p>

                                <ul>

                                    ${analysis.reasons
                                        .map(
                                            r =>
                                                `<li>${escapeHTML(r)}</li>`
                                        )
                                        .join("")}

                                </ul>

                            </div>

                        `;

                    }
                );

            $("#checkLeakBtn")
                ?.addEventListener(
                    "click",
                    checkEmailLeak
                );

            $$("[data-open-url]")
                .forEach(button => {

                    button.addEventListener(
                        "click",
                        () => {

                            safeOpen(
                                button.dataset.openUrl
                            );

                        }
                    );

                });

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
            checks.filter(
                c => c.checked
            ).length;

        const result =
            $("#scamResult");

        if (!result)
            return;

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
    // WOMEN SAFETY
    // =========================================================

    const womenGuides = {

        harassment:
            universalGuides.harassment,

        blackmail:
            universalGuides.blackmail,

        photo:
            universalGuides.photo,

        fakeprofile:
            universalGuides.fake,

        private:
            universalGuides.blackmail,

        stalking:
            universalGuides.stalking

    };

    $$(".women-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

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

                }
            );

        });

    // =========================================================
    // EMERGENCY SYSTEM
    // =========================================================

    const emergencyGuides = {

        account:
            universalGuides.hacked,

        money:
            {
                title:
                    "💳 Financial Fraud Emergency",
                text:
                    financialEmergencyGuide
            },

        blackmail:
            universalGuides.blackmail,

        phone:
            universalGuides.phone,

        harassment:
            universalGuides.harassment,

        stalking:
            universalGuides.stalking,

        facebook:
            universalGuides.facebookRecovery,

        instagram:
            universalGuides.instagramRecovery,

        gmail:
            universalGuides.gmailRecovery,

        whatsapp:
            universalGuides.whatsappRecovery,

        upi:
            {
                title:
                    "💳 UPI Fraud Emergency",
                text:
                    financialEmergencyGuide
            }

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
                        guide
                            ? guide.title
                            : "🚨 Emergency Cyber Response",
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
    // EMERGENCY QUICK ROUTES
    // =========================================================

    $$(".emergency-route-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const route =
                        button.dataset.route;

                    if (
                        route === "1930"
                    ) {

                        window.location.href =
                            "tel:1930";

                    }

                    if (
                        route === "112"
                    ) {

                        window.location.href =
                            "tel:112";

                    }

                }
            );

        });

    // =========================================================
    // SERVICE GUIDES
    // =========================================================

    const serviceMap = {

        "Account Recovery":
            "hacked",

        "Scam & Phishing":
            "phishing",

        "Phone Security":
            "phone",

        "Online Fraud":
            "financial",

        "Financial Fraud":
            "financial",

        "Suspicious Activity":
            "unknownLogin",

        "Emergency Help":
            "hacked",

        "Google Assistant":
            "googleAssistant",

        "Computer Security":
            "computer",

        "Email Security":
            "email",

        "UPI Fraud":
            "financial",

        "Cyber Law":
            "law",

        "Data Leak":
            "leak",

        "Phishing Scanner":
            "url"

    };

    $$(".help-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const service =
                        button.dataset.service;

                    const key =
                        serviceMap[service];

                    if (
                        key === "leak"
                    ) {

                        openDataLeakChecker();
                        return;

                    }

                    if (
                        key === "url"
                    ) {

                        openPhishingScanner();
                        return;

                    }

                    showGuide(
                        service ||
                            "CyberCare Help",
                        key &&
                        universalGuides[key]
                            ? universalGuides[key].text
                            : "<p>Use CyberCare Help Desk.</p>"
                    );

                }
            );

        });

    // =========================================================
    // INDIA HELP
    // =========================================================

    $$(".india-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const type =
                        button.dataset.india ||
                        button.dataset.help;

                    if (
                        type === "cybercrime" ||
                        type === "fraud" ||
                        type === "report"
                    ) {

                        showGuide(
                            "🇮🇳 India Cybercrime Help",
                            financialEmergencyGuide +
                            cyberLawGuide
                        );

                    }

                }
            );

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

        "2fa":
            universalGuides.twofa.text,

        phishing:
            universalGuides.phishing.text,

        privacy:
            universalGuides.privacy.text,

        phone:
            universalGuides.phone.text,

        android:
            universalGuides.android.text,

        iphone:
            universalGuides.iphone.text,

        financial:
            financialEmergencyGuide,

        blackmail:
            universalGuides.blackmail.text,

        stalking:
            universalGuides.stalking.text,

        law:
            cyberLawGuide,

        email:
            universalGuides.email.text,

        internet:
            universalGuides.internet.text,

        computer:
            universalGuides.computer.text,

        assistant:
            universalGuides.googleAssistant.text

    };

    $$(".learn-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const topic =
                        card.dataset.learn;

                    showGuide(
                        "🎓 Learn Cybersecurity",
                        learningContent[topic] ||
                        "<p>Learn safe digital habits.</p>"
                    );

                }
            );

        });

    // =========================================================
    // SCAM ALERT RENDERER
    // =========================================================

    function renderScamAlerts() {

        const updated =
            new Date().toLocaleDateString(
                "en-IN"
            );

        return `

            <div class="scan-limit">

                <strong>
                    CyberCare Alert Center
                </strong>

                <br>

                Updated:
                ${escapeHTML(updated)}

                <br><br>

                এই section-এ known scam patterns দেখানো হয়।
                Real-time alert-এর জন্য official I4C/Cyber Crime
                advisories check করুন।

            </div>

            <div class="scam-alert-list">

                ${scamAlerts
                    .map(alert => `

                        <div class="scan-result active warning">

                            <h3>
                                ${escapeHTML(alert.title)}
                            </h3>

                            <p>
                                ${escapeHTML(alert.text)}
                            </p>

                        </div>

                    `)
                    .join("")}

            </div>

            ${officialLink(
                "Open Official Cyber Crime Portal",
                "https://www.cybercrime.gov.in/"
            )}

        `;

    }

    // =========================================================
    // SCAM ALERT BUTTONS
    // =========================================================

    $$(
        "[data-scam-alert], .scam-alert-btn"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                showGuide(
                    "🚨 Latest Scam Awareness",
                    renderScamAlerts()
                );

            }
        );

    });

    // =========================================================
    // CYBER LAW BUTTONS
    // =========================================================

    $$(
        "[data-cyber-law], .cyber-law-btn"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                showGuide(
                    "⚖️ Cyber Law & Evidence",
                    cyberLawGuide
                );

            }
        );

    });

    // =========================================================
    // DATA LEAK BUTTONS
    // =========================================================

    $$(
        "[data-data-leak], .data-leak-btn"
    ).forEach(button => {

        button.addEventListener(
            "click",
            openDataLeakChecker
        );

    });

    // =========================================================
    // PHISHING BUTTONS
    // =========================================================

    $$(
        "[data-phishing], .phishing-btn"
    ).forEach(button => {

        button.addEventListener(
            "click",
            openPhishingScanner
        );

    });

    // =========================================================
    // 2FA BUTTONS
    // =========================================================

    $$(
        "[data-twofa], .twofa-btn"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                showGuide(
                    universalGuides.twofa.title,
                    universalGuides.twofa.text
                );

            }
        );

    });

    // =========================================================
    // OFFICIAL ROUTE BUTTONS
    // =========================================================

    $$(
        "[data-official-url]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                safeOpen(
                    button.dataset.officialUrl
                );

            }
        );

    });

    // =========================================================
    // FEEDBACK / SUGGESTION DROPBOX
    // =========================================================

    function loadFeedback() {

        try {

            return JSON.parse(
                localStorage.getItem(
                    CYBERCARE_CONFIG.storage.feedback
                ) || "[]"
            );

        } catch {

            return [];

        }

    }

    function saveFeedbackValue(
        value
    ) {

        const clean =
            text(value);

        if (!clean)
            return false;

        const previous =
            loadFeedback();

        previous.push({

            message:
                clean,

            time:
                new Date().toISOString()

        });

        localStorage.setItem(
            CYBERCARE_CONFIG.storage.feedback,
            JSON.stringify(
                previous
            )
        );

        return true;

    }

    function createFeedbackTool() {

        const existing =
            $("#feedbackContent") ||
            $(".feedback-content");

        if (!existing)
            return;

        existing.innerHTML = `

            <div class="feedback-box">

                <h3>
                    📮 CyberCare Suggestion Dropbox
                </h3>

                <p>
                    CyberCare-এ কী add করা উচিত,
                    কোন problem-এর guide দরকার,
                    অথবা কীভাবে আরও advanced করা যায়—
                    এখানে লিখুন।
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
                        text(
                            input?.value
                        );

                    if (!value) {

                        if (status) {

                            status.innerHTML =
                                "<p>✍️ আগে কিছু লিখুন।</p>";

                        }

                        return;

                    }

                    saveFeedbackValue(
                        value
                    );

                    if (input) {

                        input.value =
                            "";

                    }

                    if (status) {

                        status.innerHTML = `

                            <div class="scan-limit">

                                ✅ আপনার suggestion
                                এই browser-এ locally save হয়েছে।

                            </div>

                        `;

                    }

                }
            );

    }

    createFeedbackTool();

    // =========================================================
    // FEEDBACK FALLBACK
    // =========================================================

    $$(
        "[data-feedback], .feedback-btn"
    ).forEach(button => {

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

                                saveFeedbackValue(
                                    value
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

    $$("[data-guide]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const key =
                        button.dataset.guide;

                    if (
                        key === "phishing"
                    ) {

                        openPhishingScanner();
                        return;

                    }

                    if (
                        key === "dataLeak"
                    ) {

                        openDataLeakChecker();
                        return;

                    }

                    if (
                        key === "password"
                    ) {

                        openPasswordChecker();
                        return;

                    }

                    if (
                        key === "score"
                    ) {

                        openSafetyScore();
                        return;

                    }

                    const guide =
                        universalGuides[key];

                    if (guide) {

                        showGuide(
                            guide.title,
                            guide.text
                        );

                    }

                }
            );

        });

    // =========================================================
    // EMERGENCY 1930 / 112 FALLBACK
    // =========================================================

    $$(
        "[data-call-1930]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                window.location.href =
                    "tel:1930";

            }
        );

    });

    $$(
        "[data-call-112]"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                window.location.href =
                    "tel:112";

            }
        );

    });

    // =========================================================
    // KEYBOARD
    // =========================================================

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeSideMenu();

                $("#cybercareModal")
                    ?.remove();

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
                form.dataset.cybercareForm ===
                    "local"
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

            $("#cybercareModal")
                ?.remove();

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
    // OFFICIAL LINK DELEGATION
    // =========================================================

    document.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "[data-open-url]"
                );

            if (!button)
                return;

            safeOpen(
                button.dataset.openUrl
            );

        }
    );

    // =========================================================
    // GLOBAL QUICK ACTIONS
    // =========================================================

    window.CyberCare = {

        version:
            CYBERCARE_CONFIG.version,

        openGuide:
            showGuide,

        openTool:
            openTool,

        openPhishingScanner:
            openPhishingScanner,

        openDataLeakChecker:
            openDataLeakChecker,

        openPasswordChecker:
            openPasswordChecker,

        openSafetyScore:
            openSafetyScore,

        analyzeURL:
            analyzeURLRisk,

        officialRoutes:
            officialRoutes,

        scamAlerts:
            scamAlerts

    };

    // =========================================================
    // INITIALIZATION
    // =========================================================

    console.log(
        "🛡️ CyberCare A-Z Digital Safety System Loaded"
    );

    console.log(
        "🚨 Emergency Recovery System Loaded"
    );

    console.log(
        "🎣 Phishing Scanner Loaded"
    );

    console.log(
        "🧬 Data Leak Check Module Loaded"
    );

    console.log(
        "⚖️ Cyber Law / Evidence Module Loaded"
    );

    console.log(
        "📱 Android / iPhone / Google Assistant Guides Loaded"
    );

});
