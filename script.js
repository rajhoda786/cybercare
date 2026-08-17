/* ============================================================
   CYBERCARE — COMPLETE SCRIPT.JS
   A-Z DIGITAL HELP + SMART SAFETY + TROUBLESHOOTING
   ============================================================ */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       ELEMENTS
    ========================================================= */

    const menuBtn = document.getElementById("menuBtn");
    const closeMenu = document.getElementById("closeMenu");
    const sideMenu = document.getElementById("sideMenu");
    const menuOverlay = document.getElementById("menuOverlay");

    const emergencyBtn = document.getElementById("emergencyBtn");
    const quickHelpBtn = document.getElementById("quickHelpBtn");

    const themeBtn = document.getElementById("themeBtn");
    const languageBtn = document.getElementById("languageBtn");
    const languageText = document.getElementById("languageText");

    const problemSearch = document.getElementById("problemSearch");

    /* =========================================================
       BASIC HELPERS
    ========================================================= */

    function escapeHTML(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
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

    /* =========================================================
       SIDE MENU
    ========================================================= */

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

    document.querySelectorAll(".menu-item").forEach(item => {

        item.addEventListener("click", () => {

            const target = item.dataset.menu;

            closeSideMenu();

            const map = {
                services: "services",
                women: "women",
                tools: "tools",
                learn: "learn",
                india: "india",
                about: "about"
            };

            if (map[target]) {
                scrollToSection(map[target]);
            }

            if (target === "emergency") {
                document
                    .querySelector(".emergency-section")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });
            }

        });

    });

    /* =========================================================
       HERO BUTTONS
    ========================================================= */

    emergencyBtn?.addEventListener("click", () => {

        document
            .querySelector(".emergency-section")
            ?.scrollIntoView({
                behavior: "smooth"
            });

    });

    quickHelpBtn?.addEventListener("click", () => {

        const searchSection =
            document.querySelector(".search-section");

        searchSection?.scrollIntoView({
            behavior: "smooth"
        });

        setTimeout(() => {
            problemSearch?.focus();
        }, 500);

    });

    /* =========================================================
       DARK MODE
    ========================================================= */

    let darkMode =
        localStorage.getItem("cybercare-theme") === "dark";

    function applyTheme() {

        document.body.classList.toggle(
            "dark-mode",
            darkMode
        );

        if (themeBtn) {
            themeBtn.textContent =
                darkMode ? "☀️" : "🌙";
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

    /* =========================================================
       LANGUAGE
    ========================================================= */

    let bengali = false;

    const translations = {

        "Protecting People. Securing Digital Lives.":
            "মানুষকে সুরক্ষিত রাখা। ডিজিটাল জীবনকে নিরাপদ রাখা।",

        "What happened?":
            "কী ঘটেছে?",

        "How Can We Help You?":
            "আমরা কীভাবে সাহায্য করতে পারি?",

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

        "About CyberCare":
            "CyberCare সম্পর্কে",

        "Repeated Calls / Harassment":
            "বারবার ফোন / হয়রানি",

        "Photo Misuse":
            "ছবির অপব্যবহার",

        "Fake Profile":
            "ভুয়া প্রোফাইল",

        "Blackmail":
            "ব্ল্যাকমেইল",

        "Private Photo / Video Threat":
            "ব্যক্তিগত ছবি / ভিডিও নিয়ে হুমকি",

        "Online Stalking":
            "অনলাইন স্টকিং",

        "What Should I Do?":
            "আমি কী করব?",

        "Get Help →":
            "সাহায্য নিন →",

        "Open Tool":
            "টুল খুলুন",

        "Start Test":
            "পরীক্ষা শুরু করুন"
    };

    function translateToBangla() {

        document
            .querySelectorAll("h1,h2,h3,h4,p,button,strong,small")
            .forEach(element => {

                const original =
                    element.dataset.ccOriginal ||
                    element.textContent.trim();

                if (!element.dataset.ccOriginal) {
                    element.dataset.ccOriginal = original;
                }

                if (translations[original]) {
                    element.textContent =
                        translations[original];
                }

            });

    }

    languageBtn?.addEventListener("click", () => {

        bengali = !bengali;

        if (languageText) {
            languageText.textContent =
                bengali ? "বাংলা" : "EN";
        }

        if (bengali) {
            translateToBangla();
        } else {
            location.reload();
        }

    });

    /* =========================================================
       COMPLETE A-Z HELP DATABASE
    ========================================================= */

    const CYBERCARE_GUIDES = [

        /* ================= PHONE ================= */

        {
            id: "android-slow",
            category: "Phone",
            title: "📱 Android Phone Slow / Lagging",
            keywords:
                "android slow lag hang freeze hanging phone performance stuck",
            description:
                "ফোন ধীর, lag বা বারবার hang হলে কারণ খুঁজে ধাপে ধাপে সমাধান করুন।",
            steps: [
                "ফোনটি Restart করুন।",
                "Settings → Storage গিয়ে storage-এর অন্তত 10–15% খালি রাখুন।",
                "অপ্রয়োজনীয় apps uninstall করুন।",
                "Settings → Apps থেকে বেশি battery/storage ব্যবহার করা apps চিহ্নিত করুন।",
                "Play Store → Manage apps & device থেকে apps update করুন।",
                "Software/System Update পরীক্ষা করুন।",
                "অপ্রয়োজনীয় widgets এবং live wallpaper বন্ধ করুন।",
                "Chrome-এর অপ্রয়োজনীয় tabs বন্ধ করুন।",
                "Background-এ অতিরিক্ত apps চললে সেগুলো সীমিত করুন।",
                "ফোন অতিরিক্ত গরম হলে ব্যবহার বন্ধ করে কিছুক্ষণ ঠান্ডা হতে দিন।"
            ],
            ifNotFixed: [
                "Safe Mode-এ ফোন চালিয়ে পরীক্ষা করুন।",
                "Safe Mode-এ সমস্যা না থাকলে সম্প্রতি install করা app-এর কারণে সমস্যা হতে পারে।",
                "সমস্যা কোনো নির্দিষ্ট app-এর পর শুরু হলে সেটি update/reinstall করুন।",
                "শেষ উপায় হিসেবে backup নিয়ে Factory Reset বিবেচনা করুন।"
            ],
            warning:
                "Factory Reset-এর আগে photos, contacts, documents এবং WhatsApp backup নিশ্চিত করুন।"
        },

        {
            id: "phone-overheating",
            category: "Phone",
            title: "🔥 Phone Overheating",
            keywords:
                "phone hot heating overheating গরম temperature heat",
            description:
                "ফোন অস্বাভাবিক গরম হলে সম্ভাব্য কারণ আলাদা করে নিরাপদভাবে পরীক্ষা করুন।",
            steps: [
                "Charging অবস্থায় থাকলে charger খুলে দিন।",
                "Heavy games, camera, video editing ও navigation বন্ধ করুন।",
                "ফোনকে সরাসরি রোদ থেকে সরিয়ে নিন।",
                "Background apps পরীক্ষা করুন।",
                "Hotspot প্রয়োজন না হলে বন্ধ করুন।",
                "Bluetooth/GPS প্রয়োজন না হলে সাময়িক বন্ধ করুন।",
                "Settings → Battery থেকে battery usage পরীক্ষা করুন।",
                "কোন app বেশি battery ব্যবহার করছে দেখুন।",
                "Original বা ভালো মানের compatible charger ব্যবহার করুন।",
                "Phone case অতিরিক্ত heat আটকাচ্ছে কিনা পরীক্ষা করুন।"
            ],
            ifNotFixed: [
                "কোনো নির্দিষ্ট app চালু করলেই heat হলে app update/reinstall করুন।",
                "Battery ফুলে গেলে বা back panel উঠে এলে ফোন ব্যবহার/চার্জ করা বন্ধ করুন।",
                "Qualified service centre-এ device পরীক্ষা করান।"
            ],
            warning:
                "ফোনকে freezer বা বরফের মধ্যে রাখবেন না।"
        },

        {
            id: "battery-drain",
            category: "Phone",
            title: "🔋 Battery দ্রুত শেষ হয়ে যাচ্ছে",
            keywords:
                "battery drain fast battery low charge charging",
            description:
                "Battery দ্রুত শেষ হলে কোন app বা setting কারণ তা খুঁজে বের করুন।",
            steps: [
                "Settings → Battery → Battery Usage খুলুন।",
                "সবচেয়ে বেশি battery ব্যবহার করা apps দেখুন।",
                "অপ্রয়োজনীয় background activity সীমিত করুন।",
                "Screen brightness কমান বা Auto Brightness ব্যবহার করুন।",
                "Always-On Display প্রয়োজন না হলে বন্ধ করুন।",
                "Location/GPS প্রয়োজনমতো ব্যবহার করুন।",
                "Mobile Hotspot বন্ধ রাখুন যখন প্রয়োজন নেই।",
                "অপ্রয়োজনীয় notifications বন্ধ করুন।",
                "Apps ও system update করুন।"
            ],
            ifNotFixed: [
                "Battery health/status option থাকলে পরীক্ষা করুন।",
                "Battery পুরনো হলে replacement প্রয়োজন হতে পারে।"
            ]
        },

        {
            id: "storage-full",
            category: "Phone",
            title: "💾 Phone Storage Full",
            keywords:
                "storage full memory full space low insufficient storage",
            description:
                "Storage পূর্ণ হলে নিরাপদে কোন files/apps সরাবেন তা দেখুন।",
            steps: [
                "Settings → Storage খুলুন।",
                "কোন category সবচেয়ে বেশি জায়গা নিচ্ছে দেখুন।",
                "Downloads folder পরিষ্কার করুন।",
                "অপ্রয়োজনীয় videos/photos delete করুন।",
                "WhatsApp-এর large files পরীক্ষা করুন।",
                "Unused apps uninstall করুন।",
                "Backup নিশ্চিত হওয়ার পর প্রয়োজনীয় media-এর local copy সরান।",
                "Supported হলে cloud/external storage ব্যবহার করুন।"
            ],
            ifNotFixed: [
                "Large videos computer বা external storage-এ backup করুন।",
                "Storage expansion supported হলে সেটি বিবেচনা করুন।"
            ],
            warning:
                "Backup নিশ্চিত না হয়ে important photos বা documents delete করবেন না।"
        },

        {
            id: "phone-not-charging",
            category: "Phone",
            title: "🔌 Phone চার্জ হচ্ছে না",
            keywords:
                "phone not charging charger charging problem battery",
            description:
                "Charging সমস্যা হলে charger, cable, port এবং battery আলাদা করে পরীক্ষা করুন।",
            steps: [
                "অন্য compatible charging cable দিয়ে পরীক্ষা করুন।",
                "অন্য compatible charger/adaptor দিয়ে পরীক্ষা করুন।",
                "Wall socket পরিবর্তন করে দেখুন।",
                "Charging port-এ visible dust/debris আছে কিনা দেখুন।",
                "Phone restart করে আবার charge দিন।",
                "Phone অতিরিক্ত গরম কিনা দেখুন।",
                "Wireless charging support থাকলে সেটি দিয়ে পরীক্ষা করুন।"
            ],
            ifNotFixed: [
                "Charging port damaged হলে service centre-এ দেখান।",
                "Battery swollen হলে device ব্যবহার বা charge করা বন্ধ করুন।"
            ]
        },

        /* ================= INTERNET ================= */

        {
            id: "wifi-no-internet",
            category: "Internet",
            title: "📶 Wi-Fi Connected কিন্তু Internet নেই",
            keywords:
                "wifi connected no internet router internet not working",
            description:
                "Wi-Fi connected দেখালেও internet না চললে device এবং router আলাদা করে পরীক্ষা করুন।",
            steps: [
                "Wi-Fi বন্ধ করে আবার চালু করুন।",
                "Airplane Mode প্রায় 10 seconds ON করে OFF করুন।",
                "Wi-Fi network Forget করে আবার password দিয়ে connect করুন।",
                "অন্য device-এ একই Wi-Fi চলে কিনা পরীক্ষা করুন।",
                "Router/modem power off করে প্রায় 30 seconds অপেক্ষা করুন।",
                "Router চালু করে কয়েক মিনিট অপেক্ষা করুন।",
                "Mobile data দিয়ে একই website/app পরীক্ষা করুন।",
                "VPN চালু থাকলে সাময়িক বন্ধ করে পরীক্ষা করুন।",
                "Device-এর network settings পরীক্ষা করুন।"
            ],
            ifNotFixed: [
                "সব device-এ internet না থাকলে ISP/network-side সমস্যা হতে পারে।",
                "শুধু একটি device-এ সমস্যা হলে network settings reset বিবেচনা করুন।"
            ]
        },

        {
            id: "mobile-data",
            category: "Internet",
            title: "📡 Mobile Data কাজ করছে না",
            keywords:
                "mobile data internet sim 4g 5g network data not working",
            description:
                "Mobile data না চললে SIM, signal, settings ও operator issue আলাদা করুন।",
            steps: [
                "Mobile Data ON আছে কিনা দেখুন।",
                "Airplane Mode ON/OFF করুন।",
                "Signal strength পরীক্ষা করুন।",
                "Preferred network type পরীক্ষা করুন।",
                "Data limit/Data Saver চালু আছে কিনা দেখুন।",
                "SIM পুনরায় বসানো সম্ভব হলে করুন।",
                "অন্য location-এ network পরীক্ষা করুন।",
                "একই SIM অন্য ফোনে কাজ করে কিনা পরীক্ষা করুন।"
            ],
            ifNotFixed: [
                "অন্য ফোনেও SIM data না চললে operator-side issue হতে পারে।",
                "Network settings reset করার আগে Wi-Fi passwords প্রয়োজন হতে পারে।"
            ]
        },

        {
            id: "internet-slow",
            category: "Internet",
            title: "🐌 Internet খুব Slow",
            keywords:
                "slow internet wifi slow network speed buffering",
            description:
                "Slow internet-এর কারণ আলাদা করার জন্য diagnostic sequence।",
            steps: [
                "একাধিক website/app পরীক্ষা করুন।",
                "একটি trusted speed test দিয়ে speed পরীক্ষা করুন।",
                "Router-এর কাছাকাছি গিয়ে পরীক্ষা করুন।",
                "অতিরিক্ত network devices সাময়িক disconnect করুন।",
                "Background downloads বন্ধ করুন।",
                "VPN বন্ধ করে পরীক্ষা করুন।",
                "Router restart করুন।",
                "Wi-Fi signal দুর্বল হলে router-এর অবস্থান পরিবর্তন করুন।"
            ],
            ifNotFixed: [
                "শুধু একটি website slow হলে website-side issue হতে পারে।",
                "সব website slow হলে ISP/network issue investigate করুন।"
            ]
        },

        {
            id: "wifi-password",
            category: "Internet",
            title: "🔐 Wi-Fi Password ভুলে গেছি",
            keywords:
                "wifi password forgot router password network password",
            description:
                "নিজের Wi-Fi network-এর password নিরাপদে recover করার উপায়।",
            steps: [
                "Router-এর label-এ default Wi-Fi information আছে কিনা দেখুন।",
                "আগে connected Android/Windows device-এ saved network details পরীক্ষা করুন।",
                "Router admin page access থাকলে Wi-Fi settings পরীক্ষা করুন।",
                "Password পরিবর্তন করলে নতুন password নিরাপদে সংরক্ষণ করুন।"
            ],
            ifNotFixed: [
                "Router-এর official documentation অনুসরণ করুন।",
                "Factory Reset করার আগে ISP/router configuration প্রয়োজন কিনা নিশ্চিত করুন।"
            ]
        },

        /* ================= GOOGLE ================= */

        {
            id: "google-login",
            category: "Google",
            title: "🔐 Google/Gmail Login হচ্ছে না",
            keywords:
                "google gmail login sign in password account recovery",
            description:
                "Google/Gmail account-এ ঢুকতে না পারলে নিরাপদ recovery sequence।",
            steps: [
                "Email address সঠিক কিনা পরীক্ষা করুন।",
                "Password ধীরে আবার টাইপ করুন।",
                "Keyboard layout/Caps Lock পরীক্ষা করুন।",
                "Forgot Password ব্যবহার করুন।",
                "Google-এর official account recovery flow অনুসরণ করুন।",
                "আগে login করা trusted device থাকলে সেটি ব্যবহার করুন।",
                "Recovery phone/email access পরীক্ষা করুন।"
            ],
            ifNotFixed: [
                "বারবার ভুল password দিয়ে security challenge বাড়াবেন না।",
                "Account compromise সন্দেহ হলে password change-এর পর 2FA ও security activity পরীক্ষা করুন।"
            ],
            warning:
                "OTP, recovery code বা password কাউকে দেবেন না।"
        },

        {
            id: "google-assistant",
            category: "Google",
            title: "🎙️ Google Assistant কাজ করছে না",
            keywords:
                "google assistant hey google voice microphone assistant",
            description:
                "Google Assistant বা Hey Google কাজ না করলে microphone, settings এবং app পরীক্ষা করুন।",
            steps: [
                "Google app update করুন।",
                "Google app-এর Microphone permission Allow আছে কিনা দেখুন।",
                "Hey Google/Voice Match setting পরীক্ষা করুন।",
                "অন্য app-এ microphone কাজ করে কিনা পরীক্ষা করুন।",
                "Battery Saver বা background restriction পরীক্ষা করুন।",
                "Google app-এর cache clear করে আবার চেষ্টা করুন।",
                "Internet connection পরীক্ষা করুন।"
            ],
            ifNotFixed: [
                "Google app এবং Android System WebView update করুন।",
                "Voice Match আবার setup করুন।"
            ]
        },

        /* ================= WHATSAPP ================= */

        {
            id: "whatsapp-not-working",
            category: "WhatsApp",
            title: "💬 WhatsApp কাজ করছে না",
            keywords:
                "whatsapp not working message send receive call",
            description:
                "Message, call, notification বা loading সমস্যা হলে ধাপে ধাপে পরীক্ষা করুন।",
            steps: [
                "Internet connection পরীক্ষা করুন।",
                "Wi-Fi এবং mobile data দুটো দিয়েই পরীক্ষা করুন।",
                "WhatsApp update করুন।",
                "Phone restart করুন।",
                "Storage পর্যাপ্ত আছে কিনা দেখুন।",
                "WhatsApp notification permission পরীক্ষা করুন।",
                "Background data restriction আছে কিনা দেখুন।",
                "Date & Time automatic রাখুন।"
            ],
            ifNotFixed: [
                "WhatsApp cache clear করে পরীক্ষা করুন।",
                "Reinstall করার আগে WhatsApp backup নিশ্চিত করুন।"
            ],
            warning:
                "Backup নিশ্চিত না করে WhatsApp uninstall করবেন না।"
        },

        {
            id: "whatsapp-hacked",
            category: "WhatsApp",
            title: "🚨 WhatsApp Account অন্য কেউ ব্যবহার করছে",
            keywords:
                "whatsapp hacked stolen linked device unknown login",
            description:
                "WhatsApp compromise সন্দেহ হলে দ্রুত account containment করুন।",
            steps: [
                "WhatsApp → Linked Devices খুলুন।",
                "অপরিচিত device থাকলে Log Out করুন।",
                "Two-step verification চালু করুন।",
                "Verification code কাউকে দেবেন না।",
                "আপনার account থেকে অস্বাভাবিক message গেলে contacts-কে সতর্ক করুন।",
                "SIM/account access সন্দেহ হলে operator-এর official channel ব্যবহার করুন।"
            ],
            ifNotFixed: [
                "নিজের phone number দিয়ে official re-verification process অনুসরণ করুন।",
                "Phone compromise সন্দেহ হলে trusted device থেকে গুরুত্বপূর্ণ account secure করুন।"
            ]
        },

        /* ================= SOCIAL ================= */

        {
            id: "facebook-hacked",
            category: "Social Media",
            title: "🔴 Facebook Account Hacked",
            keywords:
                "facebook hacked account stolen recovery",
            description:
                "Facebook compromise হলে account control এবং recovery steps।",
            steps: [
                "Account access থাকলে সঙ্গে সঙ্গে password পরিবর্তন করুন।",
                "Unknown sessions/devices log out করুন।",
                "Two-factor authentication চালু করুন।",
                "Recovery email ও phone পরীক্ষা করুন।",
                "Unknown email/phone remove করুন।",
                "Suspicious posts/messages পরীক্ষা করুন।",
                "Friends-দের সতর্ক করুন।"
            ],
            ifNotFixed: [
                "Official Facebook account recovery flow ব্যবহার করুন।",
                "কোনো paid hacker বা fake recovery agent-কে OTP/password দেবেন না।"
            ]
        },

        {
            id: "instagram-hacked",
            category: "Social Media",
            title: "📸 Instagram Login / Hacked Account",
            keywords:
                "instagram login hacked password account recovery",
            description:
                "Instagram login ও security সমস্যার step-by-step recovery।",
            steps: [
                "Username/email/phone সঠিক কিনা পরীক্ষা করুন।",
                "Forgot Password ব্যবহার করুন।",
                "Email inbox-এ security notifications পরীক্ষা করুন।",
                "অপরিচিত login/security change খুঁজুন।",
                "Access থাকলে 2FA চালু করুন।",
                "Recovery email ও phone update করুন।"
            ],
            ifNotFixed: [
                "Official Instagram recovery flow ব্যবহার করুন।",
                "Verification code কাউকে দেবেন না।"
            ]
        },

        {
            id: "fake-profile",
            category: "Social Media",
            title: "👤 Fake Profile / Fake Account",
            keywords:
                "fake profile impersonation social media duplicate account",
            description:
                "আপনার নামে fake profile হলে evidence এবং reporting sequence।",
            steps: [
                "Profile-এর screenshots নিন।",
                "Profile URL সংরক্ষণ করুন।",
                "Username এবং visible contact information save করুন।",
                "Fake profile-এর posts/messages-এর evidence রাখুন।",
                "Platform-এর impersonation/report option ব্যবহার করুন।",
                "পরিচিত মানুষদের সতর্ক করুন।"
            ],
            ifNotFixed: [
                "Repeated impersonation হলে আরও evidence সংগ্রহ করুন।",
                "Threat, fraud বা financial harm থাকলে appropriate cybercrime reporting channel ব্যবহার করুন।"
            ]
        },

        /* ================= UPI ================= */

        {
            id: "upi-failed",
            category: "UPI & Banking",
            title: "💳 UPI Payment Failed",
            keywords:
                "upi failed payment failure transaction bank",
            description:
                "UPI payment fail হলে প্রথমে transaction status এবং debit status যাচাই করুন।",
            steps: [
                "Transaction status Pending/Failed/Successful কোনটি দেখুন।",
                "Bank statement/transaction history পরীক্ষা করুন।",
                "Status পরিষ্কার না হওয়া পর্যন্ত একই payment বারবার করবেন না।",
                "UPI app update করুন।",
                "Internet connection পরীক্ষা করুন।",
                "Transaction ID/UTR সংরক্ষণ করুন।"
            ],
            ifNotFixed: [
                "Bank বা UPI app-এর official support ব্যবহার করুন।",
                "Pending transaction-এর settlement status monitor করুন।"
            ],
            warning:
                "UPI PIN কখনও customer care, merchant বা অন্য কাউকে বলবেন না।"
        },

        {
            id: "upi-money-debited",
            category: "UPI & Banking",
            title: "💰 টাকা কেটে গেছে কিন্তু Receiver পায়নি",
            keywords:
                "money debited receiver not received upi pending",
            description:
                "Debit হয়েছে কিন্তু receiver না পেলে duplicate payment এড়ান।",
            steps: [
                "Transaction status পরীক্ষা করুন।",
                "UTR/reference number save করুন।",
                "Receiver-এর UPI ID/account details যাচাই করুন।",
                "একই টাকা আবার পাঠাবেন না।",
                "Bank/UPI app-এর official complaint option ব্যবহার করুন।",
                "Complaint/reference number সংরক্ষণ করুন।"
            ],
            warning:
                "Refund পাওয়ার নামে কেউ OTP বা UPI PIN চাইলে দেবেন না।"
        },

        {
            id: "unauthorized-payment",
            category: "UPI & Banking",
            title: "🚨 Unknown / Unauthorized Payment",
            keywords:
                "fraud payment unauthorized transaction bank upi money stolen",
            description:
                "অপরিচিত transaction দেখলে দ্রুত financial account secure করুন।",
            steps: [
                "Transaction-এর screenshot নিন।",
                "Amount, date, time ও transaction ID সংরক্ষণ করুন।",
                "Bank/payment provider-এর official fraud channel-এ দ্রুত যোগাযোগ করুন।",
                "Affected card/account/payment method secure করুন।",
                "Unknown mandates/autopay থাকলে review করুন।",
                "Important passwords পরিবর্তন করুন যদি account compromise সন্দেহ থাকে।"
            ],
            ifNotFixed: [
                "Official complaint/reference number সংগ্রহ করুন।",
                "প্রয়োজনে India-এর appropriate cybercrime reporting channel ব্যবহার করুন।"
            ],
            warning:
                "Bank support-এর নামে ফোন করা কাউকে OTP, PIN বা remote-access code দেবেন না।"
        },

        /* ================= SCAM ================= */

        {
            id: "phishing",
            category: "Cyber Security",
            title: "🎣 Phishing Link / সন্দেহজনক Link",
            keywords:
                "phishing link scam fake website otp email message",
            description:
                "সন্দেহজনক link এবং ভুল করে click করার পর কী করবেন।",
            steps: [
                "Link-এ আর click করবেন না।",
                "Password/OTP/PIN দেবেন না।",
                "Message/email-এর screenshot রাখুন।",
                "Sender address/number পরীক্ষা করুন।",
                "Official website/app নিজে খুলে তথ্য যাচাই করুন।",
                "Password দিয়ে ফেললে official site থেকে সঙ্গে সঙ্গে password পরিবর্তন করুন।",
                "2FA চালু করুন।",
                "Bank information দেওয়া হয়ে থাকলে official bank fraud support-এ যোগাযোগ করুন।"
            ],
            ifNotFixed: [
                "Suspicious download/file হয়েছে কিনা পরীক্ষা করুন।",
                "Important account-এর security activity পরীক্ষা করুন।"
            ],
            warning:
                "Urgency, fear, reward বা account-blocking threat phishing-এর common warning sign।"
        },

        {
            id: "otp-scam",
            category: "Cyber Security",
            title: "🔢 OTP Scam",
            keywords:
                "otp fraud verification code scam bank",
            description:
                "Unexpected OTP বা OTP চাওয়া হলে কী করবেন।",
            steps: [
                "OTP কাউকে বলবেন না।",
                "Call/SMS/WhatsApp-এ OTP চাওয়া হলে conversation বন্ধ করুন।",
                "OTP ভুল করে বলে দিলে সংশ্লিষ্ট account secure করুন।",
                "Banking OTP হলে bank-এর official fraud channel-এ যোগাযোগ করুন।",
                "Transaction history পরীক্ষা করুন।",
                "Unknown sessions/devices log out করুন।"
            ]
        },

        {
            id: "online-scam",
            category: "Cyber Security",
            title: "🚨 Online Scam / Fraud",
            keywords:
                "online scam fraud scammer fake job investment delivery courier police",
            description:
                "Online scam হলে evidence, payment এবং account security একসাথে handle করুন।",
            steps: [
                "Scammer-এর সঙ্গে unnecessary communication বন্ধ করুন।",
                "আর কোনো টাকা পাঠাবেন না।",
                "Screenshots, numbers, profile URLs এবং messages সংরক্ষণ করুন।",
                "Payment transaction ID/UTR সংরক্ষণ করুন।",
                "Affected account/password secure করুন।",
                "Bank/payment provider-কে দ্রুত জানান।",
                "Fake support number বা fake recovery service ব্যবহার করবেন না।"
            ],
            ifNotFixed: [
                "Platform report করুন।",
                "Financial loss বা serious fraud হলে appropriate cybercrime reporting channel ব্যবহার করুন।"
            ]
        },

        /* ================= BLACKMAIL / WOMEN SAFETY ================= */

        {
            id: "blackmail",
            category: "Safety",
            title: "🚨 Online Blackmail",
            keywords:
                "blackmail sextortion private photo video threat cyber",
            description:
                "Online blackmail হলে evidence preserve, account protection এবং reporting-এর ধাপ।",
            steps: [
                "Blackmailer-কে টাকা দেবেন না।",
                "আর কোনো private photo/video/information পাঠাবেন না।",
                "Conversation-এর screenshots সংরক্ষণ করুন।",
                "Username/profile URL/phone number save করুন।",
                "Payment বা money demand-এর evidence রাখুন।",
                "Evidence সংরক্ষণের পর account block/report করুন।",
                "Trusted person-কে জানান।"
            ],
            ifNotFixed: [
                "Threat চলতে থাকলে platform report এবং appropriate cybercrime reporting channel ব্যবহার করুন।",
                "Financial loss হলে transaction records সংরক্ষণ করুন।",
                "Immediate physical danger থাকলে local emergency/police support নিন।"
            ],
            warning:
                "Blackmailer-এর দাবি পূরণ করলে দাবি বন্ধ হবে—এর কোনো নিশ্চয়তা নেই।"
        },

        {
            id: "photo-misuse",
            category: "Women Safety",
            title: "📷 Photo Misuse / ছবি অপব্যবহার",
            keywords:
                "photo misuse private image leaked fake account image abuse",
            description:
                "ছবি অনুমতি ছাড়া ব্যবহার/ছড়ানো হলে evidence এবং reporting workflow।",
            steps: [
                "যেখানে ছবি ব্যবহার হয়েছে তার screenshots নিন।",
                "Profile/post URL সংরক্ষণ করুন।",
                "Account username এবং date/time note করুন।",
                "Evidence সংরক্ষণ করে platform report করুন।",
                "Privacy settings শক্ত করুন।",
                "Trusted person-কে জানান।",
                "Threat থাকলে evidence না মুছে report/escalation করুন।"
            ],
            ifNotFixed: [
                "Repeated abuse হলে additional evidence সংগ্রহ করুন।",
                "Threat বা blackmail থাকলে cybercrime reporting channel ব্যবহার করুন।"
            ]
        },

        {
            id: "online-stalking",
            category: "Women Safety",
            title: "📍 Online Stalking",
            keywords:
                "online stalking tracking location harassment monitoring",
            description:
                "কেউ online activity follow/monitor করছে মনে হলে privacy এবং account security পরীক্ষা করুন।",
            steps: [
                "Live location sharing পরীক্ষা করুন।",
                "Social media location sharing বন্ধ করুন যেখানে প্রয়োজন নেই।",
                "Account active sessions পরীক্ষা করুন।",
                "Unknown devices log out করুন।",
                "Location permissions review করুন।",
                "Unknown apps এবং accessibility access পরীক্ষা করুন।",
                "Password ও 2FA secure করুন।"
            ],
            ifNotFixed: [
                "Evidence সংরক্ষণ করুন।",
                "Trusted person-কে জানান।",
                "Physical stalking বা immediate danger থাকলে local support নিন।"
            ]
        },

        {
            id: "harassment",
            category: "Women Safety",
            title: "📞 Repeated Calls / Online Harassment",
            keywords:
                "harassment repeated calls abuse unwanted messages stalking",
            description:
                "বারবার unwanted calls/messages এলে evidence ও blocking/reporting steps।",
            steps: [
                "Calls/messages-এর screenshots এবং call logs রাখুন।",
                "Number/profile block করুন।",
                "Platform-এর report option ব্যবহার করুন।",
                "Privacy settings শক্ত করুন।",
                "Unknown callers filter/block করার option ব্যবহার করুন।",
                "Trusted person-কে জানান।"
            ],
            ifNotFixed: [
                "Harassment চলতে থাকলে evidence সহ appropriate authority/reporting channel ব্যবহার করুন।",
                "Immediate physical threat থাকলে local emergency/police support নিন।"
            ]
        },

        /* ================= PASSWORD / SECURITY ================= */

        {
            id: "strong-password",
            category: "Security",
            title: "🔑 Strong Password তৈরি",
            keywords:
                "password strong password security account password",
            description:
                "Password এমনভাবে তৈরি করুন যাতে reuse এবং guessing risk কমে।",
            steps: [
                "প্রতিটি গুরুত্বপূর্ণ account-এর জন্য আলাদা password ব্যবহার করুন।",
                "Long passphrase ব্যবহার করুন।",
                "নাম, জন্মতারিখ বা phone number ব্যবহার করবেন না।",
                "Password manager ব্যবহার করতে পারেন।",
                "2FA চালু করুন।",
                "পুরনো reused password পরিবর্তন করুন।",
                "Security alerts নিয়মিত পরীক্ষা করুন।"
            ]
        },

        {
            id: "two-factor",
            category: "Security",
            title: "🛡️ Two-Factor Authentication (2FA)",
            keywords:
                "2fa two factor authentication security verification",
            description:
                "2FA account takeover risk কমাতে কীভাবে ব্যবহার করবেন।",
            steps: [
                "Account-এর Security settings খুলুন।",
                "Two-factor authentication নির্বাচন করুন।",
                "Authenticator app বা supported method setup করুন।",
                "Backup/recovery codes নিরাপদে সংরক্ষণ করুন।",
                "Setup সম্পূর্ণ হয়েছে কিনা test করুন।",
                "পুরনো/অপরিচিত authentication methods remove করুন।"
            ],
            warning:
                "Backup codes public gallery বা অন্যের সঙ্গে share করবেন না।"
        },

        {
            id: "account-compromised",
            category: "Security",
            title: "🚨 Account Compromised মনে হচ্ছে",
            keywords:
                "account hacked compromised suspicious login security",
            description:
                "Unknown login বা suspicious activity দেখলে account containment করুন।",
            steps: [
                "Trusted device থেকে password পরিবর্তন করুন।",
                "Unknown sessions/devices log out করুন।",
                "2FA চালু করুন।",
                "Recovery email/phone পরীক্ষা করুন।",
                "Unknown connected apps revoke করুন।",
                "Recent security activity পরীক্ষা করুন।",
                "Important linked accounts-এর security check করুন।"
            ],
            ifNotFixed: [
                "Primary email account আগে secure করুন।",
                "Financial account জড়িত থাকলে bank-এর official support-এ যোগাযোগ করুন।"
            ]
        },

        /* ================= COMPUTER ================= */

        {
            id: "windows-slow",
            category: "Computer",
            title: "💻 Windows Computer Slow",
            keywords:
                "computer pc windows slow lag hang laptop performance",
            description:
                "Windows computer slow হলে basic থেকে advanced diagnosis।",
            steps: [
                "Computer Restart করুন।",
                "Task Manager খুলে CPU/Memory/Disk usage দেখুন।",
                "অপ্রয়োজনীয় startup apps disable করুন।",
                "Disk space খালি করুন।",
                "Windows Update করুন।",
                "অপ্রয়োজনীয় software uninstall করুন।",
                "Browser-এর অতিরিক্ত tabs/extensions কমান।",
                "Security scan চালান।"
            ],
            ifNotFixed: [
                "Hardware limitations পরীক্ষা করুন।",
                "HDD থাকলে supported system-এ SSD upgrade performance বাড়াতে পারে।",
                "RAM usage নিয়মিত full হলে RAM upgrade বিবেচনা করুন।"
            ]
        },

        {
            id: "printer",
            category: "Computer",
            title: "🖨️ Printer Print হচ্ছে না",
            keywords:
                "printer not printing offline print queue computer",
            description:
                "Printer offline, queue বা connection সমস্যা হলে ধাপে ধাপে পরীক্ষা করুন।",
            steps: [
                "Printer power ON আছে কিনা দেখুন।",
                "Paper ও ink/toner পরীক্ষা করুন।",
                "USB/Wi-Fi connection পরীক্ষা করুন।",
                "Printer Offline দেখাচ্ছে কিনা দেখুন।",
                "Print queue খুলে stuck jobs cancel করুন।",
                "Printer এবং computer restart করুন।",
                "Correct printer selected/default কিনা পরীক্ষা করুন।"
            ],
            ifNotFixed: [
                "Printer driver update/reinstall করুন।",
                "অন্য document থেকে test print করুন।"
            ]
        },

        {
            id: "computer-internet",
            category: "Computer",
            title: "🌐 Computer-এ Internet চলছে না",
            keywords:
                "computer internet not working ethernet wifi windows network",
            description:
                "Computer-এর network connection আলাদা করে diagnose করুন।",
            steps: [
                "Wi-Fi/Ethernet connection পরীক্ষা করুন।",
                "Network icon-এর error দেখুন।",
                "Router অন্য device-এ চলছে কিনা পরীক্ষা করুন।",
                "Computer restart করুন।",
                "VPN/proxy থাকলে পরীক্ষা করুন।",
                "Network adapter disable/enable করুন।",
                "Windows network troubleshooter ব্যবহার করুন।"
            ],
            ifNotFixed: [
                "Network settings reset বিবেচনা করুন।",
                "Driver update/reinstall প্রয়োজন হতে পারে।"
            ]
        },

        /* ================= DOCUMENT ================= */

        {
            id: "pdf-not-opening",
            category: "Documents",
            title: "📄 PDF Open হচ্ছে না",
            keywords:
                "pdf not opening file document corrupted pdf",
            description:
                "PDF file open না হলে file, reader এবং storage পরীক্ষা করুন।",
            steps: [
                "Fileটি আবার download করুন।",
                "File size অস্বাভাবিক ছোট কিনা দেখুন।",
                "অন্য PDF reader দিয়ে চেষ্টা করুন।",
                "Device restart করুন।",
                "File permission/access পরীক্ষা করুন।",
                "Fileটি অন্য device-এ খুলে দেখুন।"
            ],
            ifNotFixed: [
                "অন্য device-এও না খুললে file corrupted হওয়ার সম্ভাবনা আছে।",
                "Sender/source থেকে নতুন copy নিন।"
            ]
        },

        {
            id: "file-not-downloading",
            category: "Documents",
            title: "⬇️ File Download হচ্ছে না",
            keywords:
                "download failed file download browser pdf document",
            description:
                "File download failure হলে browser, storage এবং network পরীক্ষা করুন।",
            steps: [
                "Internet connection পরীক্ষা করুন।",
                "Device storage খালি আছে কিনা দেখুন।",
                "Download permission/browser settings পরীক্ষা করুন।",
                "অন্য browser দিয়ে চেষ্টা করুন।",
                "VPN/proxy সাময়িক বন্ধ করে পরীক্ষা করুন।",
                "Fileটি trusted source থেকে আবার download করুন।"
            ],
            ifNotFixed: [
                "Website-side download problem হতে পারে।",
                "অন্য network দিয়ে পরীক্ষা করুন।"
            ]
        },

        /* ================= PRIVACY ================= */

        {
            id: "privacy-check",
            category: "Privacy",
            title: "🔒 Phone Privacy Check",
            keywords:
                "privacy permission camera microphone location app permission",
            description:
                "Apps-এর camera, microphone, location এবং sensitive permissions review করুন।",
            steps: [
                "Settings → Privacy/Permission Manager খুলুন।",
                "Camera permission review করুন।",
                "Microphone permission review করুন।",
                "Location permission review করুন।",
                "Contacts/SMS permission review করুন।",
                "অপ্রয়োজনীয় permission revoke করুন।",
                "অচেনা apps uninstall করুন।",
                "System ও apps update রাখুন।"
            ]
        },

        {
            id: "unknown-app",
            category: "Privacy",
            title: "📱 Unknown App / অচেনা App",
            keywords:
                "unknown app suspicious application malware spyware app",
            description:
                "অচেনা app দেখলে আগে source ও powerful permissions পরীক্ষা করুন।",
            steps: [
                "App-এ নতুন permission দেবেন না।",
                "Settings → Apps থেকে app details খুলুন।",
                "Appটি কোথা থেকে install হয়েছে দেখুন।",
                "Camera, microphone, location, SMS ও accessibility access পরীক্ষা করুন।",
                "অপ্রয়োজনীয় হলে normal device settings থেকে uninstall করুন।",
                "Important account compromise সন্দেহ হলে trusted device থেকে password পরিবর্তন করুন।"
            ],
            ifNotFixed: [
                "App uninstall না হলে Device Administrator/Accessibility access আছে কিনা পরীক্ষা করুন।",
                "Safe Mode-এ device চালিয়ে suspicious app remove করার চেষ্টা করুন।",
                "Severe compromise সন্দেহ হলে professional device support নিন।"
            ]
        },

        /* ================= EMAIL ================= */

        {
            id: "email-not-receiving",
            category: "Email",
            title: "📧 Email আসছে না",
            keywords:
                "gmail email not receiving mail inbox message missing",
            description:
                "Email না এলে inbox, spam, storage এবং filters পরীক্ষা করুন।",
            steps: [
                "Internet connection পরীক্ষা করুন।",
                "Spam/Junk folder দেখুন।",
                "Email search ব্যবহার করুন।",
                "Inbox storage full কিনা দেখুন।",
                "Filters/rules পরীক্ষা করুন।",
                "Sender-এর email address সঠিক কিনা যাচাই করুন।",
                "Email app refresh/update করুন।"
            ],
            ifNotFixed: [
                "Web browser থেকে একই account খুলে পরীক্ষা করুন।",
                "Account security activity পরীক্ষা করুন যদি emails অন্য কোথাও যাচ্ছে বলে সন্দেহ হয়।"
            ]
        },

        /* ================= BROWSER ================= */

        {
            id: "browser-popups",
            category: "Browser",
            title: "🪟 Browser-এ বারবার Popup/Ads আসছে",
            keywords:
                "browser popup ads malware notification chrome android",
            description:
                "অস্বাভাবিক popup ও notification হলে browser permissions এবং suspicious apps পরীক্ষা করুন।",
            steps: [
                "Unknown popup-এ click করবেন না।",
                "Browser notification permissions review করুন।",
                "Suspicious website notification remove করুন।",
                "Unknown browser extensions remove করুন।",
                "Browser update করুন।",
                "Suspicious apps পরীক্ষা করুন।",
                "Browser cache/site data প্রয়োজন অনুযায়ী পরিষ্কার করুন।"
            ],
            ifNotFixed: [
                "Browser settings reset বিবেচনা করুন।",
                "Device security scan চালান।"
            ],
            warning:
                "‘Your phone has a virus — click now’ ধরনের popup-এ click করবেন না।"
        },

        /* ================= SIM ================= */

        {
            id: "sim-no-network",
            category: "Phone",
            title: "📶 SIM-এ Network নেই",
            keywords:
                "sim no service network signal sim card not working",
            description:
                "SIM suddenly no service হলে device এবং operator-side issue আলাদা করুন।",
            steps: [
                "Airplane Mode ON/OFF করুন।",
                "Phone restart করুন।",
                "SIM properly inserted কিনা দেখুন।",
                "অন্য location-এ signal পরীক্ষা করুন।",
                "Preferred network type পরীক্ষা করুন।",
                "SIM অন্য compatible phone-এ পরীক্ষা করুন।"
            ],
            ifNotFixed: [
                "অন্য ফোনেও SIM no service হলে operator-এর official support ব্যবহার করুন।",
                "হঠাৎ SIM বন্ধ হয়ে গেলে account/SIM replacement বিষয়টি operator-এর সঙ্গে যাচাই করুন।"
            ]
        },

        /* ================= CAMERA / MIC ================= */

        {
            id: "camera-not-working",
            category: "Phone",
            title: "📷 Camera কাজ করছে না",
            keywords:
                "camera not working android phone camera black screen",
            description:
                "Camera app না চললে permission, app এবং hardware আলাদা করে পরীক্ষা করুন।",
            steps: [
                "Camera app বন্ধ করে আবার খুলুন।",
                "Phone restart করুন।",
                "Camera permission পরীক্ষা করুন।",
                "Camera app-এর cache clear করুন।",
                "অন্য camera app-এ পরীক্ষা করুন।",
                "Storage খালি আছে কিনা দেখুন।",
                "System/app update করুন।"
            ],
            ifNotFixed: [
                "অন্য app-এও camera না চললে hardware issue হতে পারে।",
                "Qualified service centre-এ পরীক্ষা করান।"
            ]
        },

        {
            id: "microphone-not-working",
            category: "Phone",
            title: "🎙️ Microphone কাজ করছে না",
            keywords:
                "microphone mic not working voice recording call audio",
            description:
                "Microphone issue হলে permission, blockage এবং hardware পরীক্ষা করুন।",
            steps: [
                "Phone restart করুন।",
                "Microphone permission পরীক্ষা করুন।",
                "Voice Recorder দিয়ে test করুন।",
                "Phone case বা dust microphone opening block করছে কিনা দেখুন।",
                "Bluetooth headset disconnect করে পরীক্ষা করুন।",
                "অন্য calling/recording app দিয়ে পরীক্ষা করুন।"
            ],
            ifNotFixed: [
                "সব app-এ microphone না চললে hardware support প্রয়োজন হতে পারে।"
            ]
        },

        /* ================= SOCIAL PRIVACY ================= */

        {
            id: "location-sharing",
            category: "Privacy",
            title: "📍 আমার Location কেউ জানছে",
            keywords:
                "location tracking live location stalk tracking phone location",
            description:
                "Location sharing এবং account/device access যাচাই করার workflow।",
            steps: [
                "WhatsApp/other messaging apps-এর Live Location sharing পরীক্ষা করুন।",
                "Google/Apple account-এর device/session list পরীক্ষা করুন।",
                "Social media location sharing review করুন।",
                "Phone-এর Location permissions review করুন।",
                "Unknown apps এবং accessibility access পরীক্ষা করুন।",
                "Unknown account sessions log out করুন।",
                "Password এবং 2FA secure করুন।"
            ],
            ifNotFixed: [
                "Evidence সংরক্ষণ করুন।",
                "Physical stalking সন্দেহ হলে trusted person-কে জানান এবং স্থানীয় সহায়তা নিন।"
            ]
        }

    ];

    /* =========================================================
       SEARCH ENGINE
    ========================================================= */

    function cyberCareSearch(query) {

        const q =
            String(query || "")
                .trim()
                .toLowerCase();

        if (!q) return [];

        const words =
            q.split(/\s+/)
                .filter(word => word.length > 2);

        return CYBERCARE_GUIDES
            .map(guide => {

                const text = [
                    guide.title,
                    guide.category,
                    guide.description,
                    guide.keywords,
                    ...(guide.steps || []),
                    ...(guide.ifNotFixed || [])
                ]
                    .join(" ")
                    .toLowerCase();

                let score = 0;

                if (text.includes(q)) {
                    score += 100;
                }

                words.forEach(word => {

                    if (text.includes(word)) {
                        score += 10;
                    }

                });

                if (
                    guide.title
                        .toLowerCase()
                        .includes(q)
                ) {
                    score += 50;
                }

                return {
                    guide,
                    score
                };

            })
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score)
            .map(item => item.guide);
    }

    /* =========================================================
       GUIDE MODAL
    ========================================================= */

    function ensureGuideModal() {

        let modal =
            document.getElementById(
                "cyberCareGuideModal"
            );

        if (modal) return modal;

        modal =
            document.createElement("div");

        modal.id =
            "cyberCareGuideModal";

        modal.className =
            "cc-guide-overlay";

        modal.innerHTML = `

            <div
                class="cc-guide-modal"
                role="dialog"
                aria-modal="true"
            >

                <button
                    class="cc-guide-close"
                    id="ccGuideClose"
                    aria-label="Close"
                >
                    ✕
                </button>

                <div id="ccGuideContent"></div>

                <button
                    class="cc-guide-ok"
                    id="ccGuideDone"
                >
                    Done
                </button>

            </div>
        `;

        document.body.appendChild(modal);

        modal
            .querySelector("#ccGuideClose")
            ?.addEventListener(
                "click",
                closeCyberCareGuide
            );

        modal
            .querySelector("#ccGuideDone")
            ?.addEventListener(
                "click",
                closeCyberCareGuide
            );

        modal.addEventListener("click", event => {

            if (event.target === modal) {
                closeCyberCareGuide();
            }

        });

        return modal;
    }

    function showCyberCareGuideModal(
        title,
        content
    ) {

        const modal =
            ensureGuideModal();

        const contentBox =
            modal.querySelector(
                "#ccGuideContent"
            );

        if (!contentBox) return;

        contentBox.innerHTML =
            content;

        modal.classList.add("active");

        document.body.classList.add(
            "cc-modal-open"
        );

    }

    function closeCyberCareGuide() {

        const modal =
            document.getElementById(
                "cyberCareGuideModal"
            );

        modal?.classList.remove("active");

        document.body.classList.remove(
            "cc-modal-open"
        );

    }

    /* =========================================================
       OPEN GUIDE
    ========================================================= */

    function openCyberCareGuide(id) {

        const guide =
            CYBERCARE_GUIDES.find(
                item => item.id === id
            );

        if (!guide) return;

        let html = `

            <div class="cc-guide-inner">

                <div class="cc-guide-category">
                    ${escapeHTML(guide.category)}
                </div>

                <h2>
                    ${escapeHTML(guide.title)}
                </h2>

                <p class="cc-guide-description">
                    ${escapeHTML(guide.description)}
                </p>

                <div class="cc-help-label">
                    STEP-BY-STEP SOLUTION
                </div>

                <h3>
                    ✅ ধাপে ধাপে কী করবেন
                </h3>

                <ol>
        `;

        (guide.steps || []).forEach(
            step => {

                html += `
                    <li>
                        ${escapeHTML(step)}
                    </li>
                `;

            }
        );

        html += `
                </ol>
        `;

        if (
            guide.ifNotFixed &&
            guide.ifNotFixed.length
        ) {

            html += `

                <div class="cc-next-box">

                    <h3>
                        🔄 এতেও কাজ না হলে
                    </h3>

                    <ol>
            `;

            guide.ifNotFixed.forEach(
                step => {

                    html += `
                        <li>
                            ${escapeHTML(step)}
                        </li>
                    `;

                }
            );

            html += `
                    </ol>

                </div>
            `;

        }

        if (guide.warning) {

            html += `

                <div class="cc-warning-box">

                    <strong>
                        ⚠️ গুরুত্বপূর্ণ
                    </strong>

                    <div>
                        ${escapeHTML(
                            guide.warning
                        )}
                    </div>

                </div>
            `;

        }

        html += `
            </div>
        `;

        showCyberCareGuideModal(
            guide.title,
            html
        );

    }

    /* =========================================================
       CATEGORY
    ========================================================= */

    function getCyberCareCategories() {

        return [
            ...new Set(
                CYBERCARE_GUIDES.map(
                    guide => guide.category
                )
            )
        ];

    }

    function loadCyberCareCategory(
        category
    ) {

        const guides =
            CYBERCARE_GUIDES.filter(
                guide =>
                    guide.category === category
            );

        if (!guides.length) return;

        let html = `

            <div class="cc-category-page">

                <div class="cc-category-heading">

                    <span>
                        CYBERCARE HELP CENTER
                    </span>

                    <h2>
                        ${escapeHTML(category)}
                    </h2>

                    <p>
                        শুধু তথ্য নয় —
                        সমস্যার সমাধানের জন্য
                        step-by-step guidance।
                    </p>

                </div>

                <div class="cc-category-list">
        `;

        guides.forEach(guide => {

            html += `

                <button
                    class="cc-category-guide"
                    data-guide-id="${escapeHTML(
                        guide.id
                    )}"
                >

                    <strong>
                        ${escapeHTML(
                            guide.title
                        )}
                    </strong>

                    <span>
                        ${escapeHTML(
                            guide.description
                        )}
                    </span>

                    <b>
                        Step-by-step দেখুন →
                    </b>

                </button>
            `;

        });

        html += `
                </div>

            </div>
        `;

        showCyberCareGuideModal(
            category,
            html
        );

        setTimeout(() => {

            document
                .querySelectorAll(
                    ".cc-category-guide"
                )
                .forEach(button => {

                    button.addEventListener(
                        "click",
                        () => {

                            openCyberCareGuide(
                                button.dataset.guideId
                            );

                        }
                    );

                });

        }, 0);

    }

    /* =========================================================
       SMART SEARCH UI
    ========================================================= */

    function initCyberCareSmartSearch() {

        const input =
            document.getElementById(
                "problemSearch"
            );

        if (!input) return;

        let resultBox =
            document.getElementById(
                "cyberCareSearchResults"
            );

        if (!resultBox) {

            resultBox =
                document.createElement("div");

            resultBox.id =
                "cyberCareSearchResults";

            resultBox.className =
                "cybercare-search-results";

            input.parentElement
                ?.appendChild(resultBox);

        }

        input.addEventListener(
            "input",
            () => {

                const query =
                    input.value.trim();

                if (!query) {

                    resultBox.innerHTML = "";

                    return;
                }

                const results =
                    cyberCareSearch(query);

                if (!results.length) {

                    resultBox.innerHTML = `

                        <div class="cc-no-result">

                            <strong>
                                🔎 এই সমস্যাটি সরাসরি পাওয়া গেল না
                            </strong>

                            <p>
                                অন্যভাবে লিখে চেষ্টা করুন।
                                যেমন:
                                phone hot,
                                wifi not working,
                                UPI failed,
                                Gmail login,
                                WhatsApp hacked।
                            </p>

                        </div>
                    `;

                    return;
                }

                resultBox.innerHTML =
                    results
                        .slice(0, 12)
                        .map(guide => `

                            <button
                                class="cc-search-item"
                                data-guide-id="${escapeHTML(
                                    guide.id
                                )}"
                            >

                                <span
                                    class="cc-search-icon"
                                >
                                    ${escapeHTML(
                                        guide.title
                                            .substring(0, 2)
                                    )}
                                </span>

                                <span
                                    class="cc-search-text"
                                >

                                    <strong>
                                        ${escapeHTML(
                                            guide.title
                                        )}
                                    </strong>

                                    <small>
                                        ${escapeHTML(
                                            guide.category
                                        )}
                                        · Step-by-step help
                                    </small>

                                </span>

                                <span
                                    class="cc-search-arrow"
                                >
                                    ›
                                </span>

                            </button>

                        `)
                        .join("");

                resultBox
                    .querySelectorAll(
                        ".cc-search-item"
                    )
                    .forEach(button => {

                        button.addEventListener(
                            "click",
                            () => {

                                openCyberCareGuide(
                                    button.dataset.guideId
                                );

                            }
                        );

                    });

            }
        );

    }

    /* =========================================================
       MANUAL PHONE SAFETY CENTER
    ========================================================= */

    function showManualSafetyCenter() {

        showCyberCareGuideModal(

            "🛡️ Complete Phone Safety Check",

            `

            <div class="cc-guide-inner">

                <div class="cc-guide-category">
                    PHONE SAFETY
                </div>

                <h2>
                    🛡️ Complete Phone Safety Check
                </h2>

                <p class="cc-guide-description">
                    CyberCare আপনার ফোনের private data
                    গোপনে scan করার দাবি করে না।
                    বরং গুরুত্বপূর্ণ security checks
                    এক জায়গায় দিচ্ছে।
                </p>

                <h3>
                    1️⃣ Screen Lock
                </h3>

                <ol>

                    <li>
                        Settings খুলুন।
                    </li>

                    <li>
                        Strong PIN/password/fingerprint/face lock
                        চালু আছে কিনা দেখুন।
                    </li>

                    <li>
                        সহজ PIN বা pattern এড়িয়ে চলুন।
                    </li>

                </ol>

                <h3>
                    2️⃣ System Update
                </h3>

                <ol>

                    <li>
                        Settings → Software/System Update খুলুন।
                    </li>

                    <li>
                        Official security updates install করুন।
                    </li>

                </ol>

                <h3>
                    3️⃣ Installed Apps
                </h3>

                <ol>

                    <li>
                        সম্পূর্ণ app list খুলুন।
                    </li>

                    <li>
                        অচেনা apps খুঁজুন।
                    </li>

                    <li>
                        Appটি কোথা থেকে এসেছে পরীক্ষা করুন।
                    </li>

                    <li>
                        অপ্রয়োজনীয় app remove করুন।
                    </li>

                </ol>

                <h3>
                    4️⃣ Powerful Permissions
                </h3>

                <ul>

                    <li>Accessibility</li>
                    <li>Device Administrator</li>
                    <li>Notification Access</li>
                    <li>Install Unknown Apps</li>
                    <li>VPN</li>
                    <li>Camera</li>
                    <li>Microphone</li>
                    <li>Location</li>
                    <li>SMS</li>
                    <li>Contacts</li>

                </ul>

                <h3>
                    5️⃣ Google / Apple Account
                </h3>

                <ol>

                    <li>
                        Account Security page খুলুন।
                    </li>

                    <li>
                        Logged-in devices দেখুন।
                    </li>

                    <li>
                        Unknown devices remove করুন।
                    </li>

                    <li>
                        Recent security activity পরীক্ষা করুন।
                    </li>

                </ol>

                <h3>
                    6️⃣ WhatsApp
                </h3>

                <ol>

                    <li>
                        WhatsApp → Linked Devices খুলুন।
                    </li>

                    <li>
                        Unknown device Log Out করুন।
                    </li>

                    <li>
                        Two-step verification চালু করুন।
                    </li>

                </ol>

                <h3>
                    7️⃣ Banking / UPI
                </h3>

                <ol>

                    <li>
                        Recent transactions দেখুন।
                    </li>

                    <li>
                        UPI mandates/autopay review করুন।
                    </li>

                    <li>
                        UPI PIN/OTP কখনও share করবেন না।
                    </li>

                    <li>
                        Unauthorized transaction হলে bank/payment provider-এর
                        official fraud channel ব্যবহার করুন।
                    </li>

                </ol>

                <h3>
                    8️⃣ SIM Security
                </h3>

                <ol>

                    <li>
                        Unexpected network loss হচ্ছে কিনা দেখুন।
                    </li>

                    <li>
                        SIM suddenly বন্ধ হলে operator-এর official support ব্যবহার করুন।
                    </li>

                </ol>

                <h3>
                    9️⃣ Browser Security
                </h3>

                <ol>

                    <li>
                        Suspicious extensions remove করুন।
                    </li>

                    <li>
                        Notification permissions review করুন।
                    </li>

                    <li>
                        Site permissions review করুন।
                    </li>

                    <li>
                        Unknown APK/software install করবেন না।
                    </li>

                </ol>

                <h3>
                    🔟 যদি সত্যিই কিছু সন্দেহজনক পান
                </h3>

                <ol>

                    <li>
                        Screenshot/evidence preserve করুন।
                    </li>

                    <li>
                        Important account trusted device থেকে secure করুন।
                    </li>

                    <li>
                        Unknown sessions log out করুন।
                    </li>

                    <li>
                        2FA চালু করুন।
                    </li>

                    <li>
                        প্রয়োজন হলে professional support নিন।
                    </li>

                </ol>

            </div>

            `
        );

    }

    /* =========================================================
       SMART PHONE SCAN
    ========================================================= */

    function createPhoneScanUI() {

        if (
            document.getElementById(
                "cybercare-phone-scan"
            )
        ) {
            return;
        }

        const hero =
            document.querySelector(".hero");

        if (!hero) return;

        const section =
            document.createElement("section");

        section.id =
            "cybercare-phone-scan";

        section.className =
            "phone-scan-section";

        section.innerHTML = `

            <div class="section-badge">
                🛡️ SMART SAFETY CHECK
            </div>

            <h2>
                🔍 Scan My Phone
            </h2>

            <p class="section-text">
                Browser যতটুকু safely inspect করতে পারে
                তা পরীক্ষা করুন এবং বাকি security checks-এর
                জন্য guided manual help পান।
            </p>

            <div class="scan-warning">

                <strong>
                    গুরুত্বপূর্ণ:
                </strong>

                একটি normal website গোপনে আপনার private photos,
                videos, সব installed apps, UPI apps বা সব permissions
                পড়তে পারে না।

                CyberCare এমন capability থাকার ভান করবে না।

            </div>

            <div class="scan-actions">

                <button
                    id="startPhoneScan"
                    class="scan-primary-btn"
                >
                    🔍 Start Safety Scan
                </button>

                <button
                    id="manualSafetyCheck"
                    class="scan-secondary-btn"
                >
                    📋 Check Everything Manually
                </button>

            </div>

            <div
                id="phoneScanProgress"
                class="scan-progress"
                hidden
            >

                <div class="scan-progress-bar">
                    <span id="scanProgressFill"></span>
                </div>

                <p id="scanProgressText">
                    Preparing safety scan...
                </p>

            </div>

            <div
                id="phoneScanResults"
                class="scan-results"
            ></div>

        `;

        hero.insertAdjacentElement(
            "afterend",
            section
        );

        document
            .getElementById("startPhoneScan")
            ?.addEventListener(
                "click",
                runPhoneScan
            );

        document
            .getElementById("manualSafetyCheck")
            ?.addEventListener(
                "click",
                showManualSafetyCenter
            );

    }

    async function runPhoneScan() {

        const progress =
            document.getElementById(
                "phoneScanProgress"
            );

        const fill =
            document.getElementById(
                "scanProgressFill"
            );

        const text =
            document.getElementById(
                "scanProgressText"
            );

        const results =
            document.getElementById(
                "phoneScanResults"
            );

        if (!progress || !fill || !text || !results) {
            return;
        }

        progress.hidden = false;
        results.innerHTML = "";

        const checks = [

            [
                "Secure context",
                checkSecureContext
            ],

            [
                "Browser permissions",
                checkBrowserPermissions
            ],

            [
                "Connection",
                checkConnection
            ],

            [
                "Local storage",
                checkStorage
            ],

            [
                "Notifications",
                checkNotifications
            ],

            [
                "Device environment",
                checkDeviceEnvironment
            ]

        ];

        const findings = [];

        for (
            let i = 0;
            i < checks.length;
            i++
        ) {

            const [
                name,
                fn
            ] = checks[i];

            text.textContent =
                `Checking: ${name}...`;

            fill.style.width =
                `${Math.round(
                    (i / checks.length) * 100
                )}%`;

            try {

                findings.push(
                    await fn()
                );

            } catch {

                findings.push({

                    status: "manual",

                    title: name,

                    detail:
                        "Automatic check could not be completed.",

                    action:
                        "Use the manual safety guide."

                });

            }

            await sleep(220);

        }

        fill.style.width = "100%";

        text.textContent =
            "Scan complete.";

        renderScanResults(findings);

    }

    function checkSecureContext() {

        const secure =
            window.isSecureContext;

        return {

            status:
                secure ? "safe" : "high",

            title:
                secure
                    ? "Secure browser context"
                    : "Insecure browser context",

            detail:
                secure
                    ? "Browser reports a secure context."
                    : "Sensitive information should only be entered on trusted HTTPS pages.",

            action:
                secure
                    ? "No action needed."
                    : "Open the official HTTPS version."
        };

    }

    async function checkBrowserPermissions() {

        if (
            !navigator.permissions ||
            !navigator.permissions.query
        ) {

            return {

                status: "manual",

                title:
                    "Permission inspection limited",

                detail:
                    "This browser does not expose all permission states.",

                action:
                    "Review app permissions manually."
            };

        }

        const names = [
            "camera",
            "microphone",
            "geolocation",
            "notifications"
        ];

        const states = [];

        for (const name of names) {

            try {

                const result =
                    await navigator.permissions.query({
                        name
                    });

                states.push(
                    `${name}: ${result.state}`
                );

            } catch {

                states.push(
                    `${name}: unavailable`
                );

            }

        }

        return {

            status: "manual",

            title:
                "Browser permission snapshot",

            detail:
                states.join(" • "),

            action:
                "Revoke permissions you do not need."
        };

    }

    function checkConnection() {

        const connection =
            navigator.connection ||
            navigator.mozConnection ||
            navigator.webkitConnection;

        if (!connection) {

            return {

                status: "manual",

                title:
                    "Connection details unavailable",

                detail:
                    "Browser does not expose network quality information.",

                action:
                    "Use phone Wi-Fi/mobile-network settings."
            };

        }

        return {

            status: "safe",

            title:
                "Network information available",

            detail:
                `Connection: ${
                    connection.effectiveType ||
                    "unknown"
                }`,

            action:
                "Use trusted Wi-Fi when entering sensitive information."
        };

    }

    function checkStorage() {

        try {

            const key =
                "__cybercare_test__";

            localStorage.setItem(
                key,
                "1"
            );

            localStorage.removeItem(
                key
            );

            return {

                status: "safe",

                title:
                    "Browser storage working",

                detail:
                    "CyberCare local storage is available.",

                action:
                    "No action needed."
            };

        } catch {

            return {

                status: "manual",

                title:
                    "Browser storage restricted",

                detail:
                    "Browser privacy settings may be restricting storage.",

                action:
                    "Review browser privacy settings."
            };

        }

    }

    async function checkNotifications() {

        if (
            typeof Notification ===
            "undefined"
        ) {

            return {

                status: "manual",

                title:
                    "Notification state unavailable",

                detail:
                    "Browser does not expose notification permission.",

                action:
                    "Review notification settings manually."
            };

        }

        const permission =
            Notification.permission;

        return {

            status:
                permission === "denied"
                    ? "safe"
                    : "manual",

            title:
                "Browser notification permission",

            detail:
                `Current state: ${permission}`,

            action:
                "Only allow notifications from sites you trust."
        };

    }

    function checkDeviceEnvironment() {

        const ua =
            navigator.userAgent || "";

        let device =
            "Unknown device";

        if (/Android/i.test(ua)) {
            device = "Android";
        } else if (
            /iPhone|iPad|iPod/i.test(ua)
        ) {
            device = "Apple mobile device";
        } else if (/Windows/i.test(ua)) {
            device = "Windows";
        } else if (/Mac/i.test(ua)) {
            device = "Mac";
        } else if (/Linux/i.test(ua)) {
            device = "Linux";
        }

        return {

            status: "safe",

            title:
                "Device environment detected",

            detail:
                device,

            action:
                "Use the matching CyberCare guide."
        };

    }

    function statusIcon(status) {

        if (status === "safe") return "🟢";
        if (status === "high") return "🔴";
        if (status === "warning") return "🟠";

        return "🔵";
    }

    function renderScanResults(findings) {

        const results =
            document.getElementById(
                "phoneScanResults"
            );

        if (!results) return;

        results.innerHTML = `

            <h3>
                🔎 Safety Scan Results
            </h3>

            ${findings.map(
                finding => `

                    <article
                        class="scan-result-card ${
                            escapeHTML(
                                finding.status
                            )
                        }"
                    >

                        <div
                            class="scan-result-title"
                        >

                            <strong>
                                ${escapeHTML(
                                    finding.title
                                )}
                            </strong>

                            <span>
                                ${statusIcon(
                                    finding.status
                                )}
                            </span>

                        </div>

                        <p>
                            ${escapeHTML(
                                finding.detail
                            )}
                        </p>

                        <div
                            class="scan-result-action"
                        >

                            <strong>
                                Next:
                            </strong>

                            ${escapeHTML(
                                finding.action
                            )}

                        </div>

                    </article>

                `
            ).join("")}

            <button
                class="guide-primary-action"
                id="openManualSafetyFromScan"
            >
                📋 Open Complete Manual Safety Check
            </button>
        `;

        document
            .getElementById(
                "openManualSafetyFromScan"
            )
            ?.addEventListener(
                "click",
                showManualSafetyCenter
            );

    }

    /* =========================================================
       SYMPTOM DIAGNOSIS
    ========================================================= */

    function showSomethingWrongFlow() {

        showCyberCareGuideModal(

            "🚨 Something Feels Wrong?",

            `

            <div class="cc-guide-inner">

                <div class="cc-guide-category">
                    SMART DIAGNOSIS
                </div>

                <h2>
                    আপনার সমস্যার সবচেয়ে কাছের option বেছে নিন
                </h2>

                <p class="cc-guide-description">
                    CyberCare শুধু generic advice দেবে না—
                    symptom অনুযায়ী পরবর্তী check দেখাবে।
                </p>

                <div class="choice-grid">

                    <button
                        class="choice-btn"
                        data-problem="battery-drain"
                    >
                        🔋 Battery দ্রুত শেষ
                    </button>

                    <button
                        class="choice-btn"
                        data-problem="phone-overheating"
                    >
                        🌡️ Phone অস্বাভাবিক গরম
                    </button>

                    <button
                        class="choice-btn"
                        data-problem="unknown-app"
                    >
                        📱 Unknown App
                    </button>

                    <button
                        class="choice-btn"
                        data-problem="camera-not-working"
                    >
                        📷 Camera সমস্যা
                    </button>

                    <button
                        class="choice-btn"
                        data-problem="microphone-not-working"
                    >
                        🎙️ Microphone সমস্যা
                    </button>

                    <button
                        class="choice-btn"
                        data-problem="account-compromised"
                    >
                        🔐 Account সন্দেহজনক
                    </button>

                    <button
                        class="choice-btn"
                        data-problem="otp-scam"
                    >
                        🔑 Unexpected OTP
                    </button>

                    <button
                        class="choice-btn"
                        data-problem="unauthorized-payment"
                    >
                        💳 Unknown Payment
                    </button>

                    <button
                        class="choice-btn"
                        data-problem="location-sharing"
                    >
                        📍 Location কেউ জানছে
                    </button>

                    <button
                        class="choice-btn"
                        data-problem="blackmail"
                    >
                        🚨 Blackmail
                    </button>

                </div>

            </div>

            `
        );

        setTimeout(() => {

            document
                .querySelectorAll(
                    ".choice-btn"
                )
                .forEach(button => {

                    button.addEventListener(
                        "click",
                        () => {

                            openCyberCareGuide(
                                button.dataset.problem
                            );

                        }
                    );

                });

        }, 0);

    }

    /* =========================================================
       ACCOUNT SECURITY CENTER
    ========================================================= */

    function showAccountSecurityCenter() {

        showCyberCareGuideModal(

            "🔐 Account Security Center",

            `

            <div class="cc-guide-inner">

                <h2>
                    🔐 Secure Your Accounts
                </h2>

                <p>
                    সবচেয়ে গুরুত্বপূর্ণ account আগে secure করুন।
                </p>

                <h3>
                    Priority Order
                </h3>

                <ol>

                    <li>
                        Primary Email
                    </li>

                    <li>
                        Banking / Payment
                    </li>

                    <li>
                        Phone/SIM-related accounts
                    </li>

                    <li>
                        WhatsApp
                    </li>

                    <li>
                        Facebook / Instagram
                    </li>

                    <li>
                        Cloud Storage
                    </li>

                </ol>

                <h3>
                    প্রতিটি account-এ পরীক্ষা করুন
                </h3>

                <ol>

                    <li>
                        Password
                    </li>

                    <li>
                        2FA
                    </li>

                    <li>
                        Active Sessions
                    </li>

                    <li>
                        Unknown Devices
                    </li>

                    <li>
                        Recovery Email
                    </li>

                    <li>
                        Recovery Phone
                    </li>

                    <li>
                        Connected Apps
                    </li>

                    <li>
                        Recent Security Activity
                    </li>

                </ol>

            </div>

            `
        );

    }

    /* =========================================================
       EXPOSE USEFUL FUNCTIONS
       For HTML onclick buttons if your existing HTML uses them.
    ========================================================= */

    window.openCyberCareGuide =
        openCyberCareGuide;

    window.closeCyberCareGuide =
        closeCyberCareGuide;

    window.loadCyberCareCategory =
        loadCyberCareCategory;

    window.showSomethingWrongFlow =
        showSomethingWrongFlow;

    window.showManualSafetyCenter =
        showManualSafetyCenter;

    window.showAccountSecurityCenter =
        showAccountSecurityCenter;

    window.cyberCareSearch =
        cyberCareSearch;

    window.getCyberCareCategories =
        getCyberCareCategories;

    /* =========================================================
       INITIALIZE
    ========================================================= */

    createPhoneScanUI();

    initCyberCareSmartSearch();

    /* =========================================================
       KEYBOARD SUPPORT
    ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeCyberCareGuide();
                closeSideMenu();

            }

        }
    );

    /* =========================================================
       GLOBAL ERROR PROTECTION
    ========================================================= */

    window.addEventListener(
        "error",
        event => {

            console.warn(
                "CyberCare:",
                event.message
            );

        }
    );

    console.log(
        `CyberCare loaded successfully — ${
            CYBERCARE_GUIDES.length
        } help guides available.`
    );

});
