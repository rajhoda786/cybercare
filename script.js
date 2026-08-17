/* =========================================================
   CYBERCARE — PREMIUM RESPONSIVE SCRIPT
   Search + Mobile Menu + Dark Mode + Quick Help
   Existing HTML + CSS compatible
========================================================= */

"use strict";

/* =========================================================
   SHORT SELECTOR
========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);


/* =========================================================
   CYBERCARE PROBLEM DATABASE
========================================================= */

const problems = {

    facebook: {
        title: "Facebook সমস্যা",
        text:
            "Facebook লগইন বা হ্যাক সমস্যা হলে প্রথমে password পরিবর্তন করুন, " +
            "অপরিচিত login session logout করুন এবং Two-Factor Authentication (2FA) চালু করুন।"
    },

    instagram: {
        title: "Instagram সমস্যা",
        text:
            "Instagram account সমস্যা হলে password পরিবর্তন করুন, Login Activity পরীক্ষা করুন, " +
            "অপরিচিত device logout করুন এবং 2FA চালু করুন।"
    },

    whatsapp: {
        title: "WhatsApp সমস্যা",
        text:
            "WhatsApp সমস্যা হলে internet connection, phone number, SMS/OTP এবং Linked Devices পরীক্ষা করুন। " +
            "অপরিচিত device থাকলে সঙ্গে সঙ্গে logout করুন।"
    },

    otp: {
        title: "OTP আসছে না",
        text:
            "OTP না এলে network signal, SMS inbox, blocked numbers এবং SIM status পরীক্ষা করুন। " +
            "বারবার OTP request না করে কিছুক্ষণ অপেক্ষা করে আবার চেষ্টা করুন।"
    },

    phone: {
        title: "ফোন গরম হচ্ছে",
        text:
            "ফোন গরম হলে background apps বন্ধ করুন, Battery usage পরীক্ষা করুন, " +
            "চার্জার ও cable পরীক্ষা করুন এবং software update আছে কিনা দেখুন।"
    },

    battery: {
        title: "Battery দ্রুত শেষ হচ্ছে",
        text:
            "Battery দ্রুত শেষ হলে Battery Usage থেকে কোন app বেশি battery ব্যবহার করছে দেখুন। " +
            "অপ্রয়োজনীয় background activity, location, Bluetooth এবং high brightness কমিয়ে পরীক্ষা করুন।"
    },

    upi: {
        title: "UPI সমস্যা",
        text:
            "UPI transaction সমস্যা হলে transaction status, bank balance, UPI PIN, " +
            "internet connection এবং bank/app-এর support status পরীক্ষা করুন।"
    },

    bank: {
        title: "Banking সমস্যা",
        text:
            "Banking সমস্যা হলে প্রথমে transaction status ও account balance পরীক্ষা করুন। " +
            "OTP বা PIN কারও সঙ্গে share করবেন না। সন্দেহ হলে bank-এর official support ব্যবহার করুন।"
    },

    hack: {
        title: "Account Hack সন্দেহ",
        text:
            "Account hack সন্দেহ হলে সঙ্গে সঙ্গে password পরিবর্তন করুন, সব অপরিচিত sessions logout করুন, " +
            "2FA চালু করুন এবং recovery email/phone number পরীক্ষা করুন।"
    },

    gmail: {
        title: "Gmail সমস্যা",
        text:
            "Gmail account সমস্যা হলে password পরিবর্তন করুন, Security Activity ও Your Devices পরীক্ষা করুন " +
            "এবং 2-Step Verification চালু করুন।"
    },

    google: {
        title: "Google Account সমস্যা",
        text:
            "Google account সমস্যা হলে Security Checkup করুন, অপরিচিত devices remove করুন, " +
            "recovery phone/email পরীক্ষা করুন এবং 2-Step Verification চালু করুন।"
    },

    youtube: {
        title: "YouTube সমস্যা",
        text:
            "YouTube সমস্যা হলে account login, internet connection, app update এবং Google Account security পরীক্ষা করুন।"
    },

    internet: {
        title: "Internet সমস্যা",
        text:
            "Internet কাজ না করলে Wi-Fi/mobile data বন্ধ করে আবার চালু করুন, Airplane Mode toggle করুন, " +
            "router restart করুন এবং অন্য website/app দিয়ে connection পরীক্ষা করুন।"
    },

    wifi: {
        title: "Wi-Fi সমস্যা",
        text:
            "Wi-Fi সমস্যা হলে router restart করুন, Wi-Fi forget করে আবার connect করুন এবং অন্য device-এ connection পরীক্ষা করুন।"
    },

    password: {
        title: "Password সমস্যা",
        text:
            "Password ভুলে গেলে official account recovery ব্যবহার করুন। একই password একাধিক account-এ ব্যবহার না করে unique password ব্যবহার করুন।"
    },

    scam: {
        title: "Scam সন্দেহ",
        text:
            "সন্দেহজনক link, OTP, PIN বা payment request এলে কোনো তথ্য দেবেন না। Message-এর link ব্যবহার না করে official website/app নিজে খুলে যাচাই করুন।"
    },

    phishing: {
        title: "Phishing সন্দেহ",
        text:
            "Phishing message হলে link-এ click করবেন না এবং password/OTP/card details দেবেন না। Sender ও website address ভালোভাবে যাচাই করুন।"
    },

    payment: {
        title: "Payment সমস্যা",
        text:
            "Payment সমস্যায় transaction status প্রথমে পরীক্ষা করুন। টাকা কেটে গেলে সঙ্গে সঙ্গে আবার payment না করে bank/app-এর official status দেখুন।"
    },

    sim: {
        title: "SIM সমস্যা",
        text:
            "SIM সমস্যা হলে network signal, SIM placement, Airplane Mode এবং অন্য phone-এ SIM পরীক্ষা করুন। দীর্ঘসময় network না থাকলে operator-এর official support ব্যবহার করুন।"
    },

    app: {
        title: "App কাজ করছে না",
        text:
            "App কাজ না করলে internet connection, app update, storage এবং permissions পরীক্ষা করুন। প্রয়োজন হলে app restart করুন।"
    },

    storage: {
        title: "Storage সমস্যা",
        text:
            "Phone storage পূর্ণ হলে বড় video/file ও অপ্রয়োজনীয় apps পরিষ্কার করুন। গুরুত্বপূর্ণ data backup করার পর delete করুন।"
    },

    bluetooth: {
        title: "Bluetooth সমস্যা",
        text:
            "Bluetooth কাজ না করলে Bluetooth off/on করুন, device unpair করে আবার pair করুন এবং দুই device কাছাকাছি রাখুন।"
    },

    camera: {
        title: "Camera সমস্যা",
        text:
            "Camera কাজ না করলে app বন্ধ করে আবার খুলুন, permission পরীক্ষা করুন এবং storage space আছে কিনা দেখুন।"
    },

    microphone: {
        title: "Microphone সমস্যা",
        text:
            "Microphone কাজ না করলে app permission পরীক্ষা করুন, অন্য app-এ microphone test করুন এবং phone restart করুন।"
    },

    location: {
        title: "Location সমস্যা",
        text:
            "Location কাজ না করলে Location Service চালু আছে কিনা দেখুন এবং সংশ্লিষ্ট app-এর location permission পরীক্ষা করুন।"
    },

    notification: {
        title: "Notification আসছে না",
        text:
            "Notification না এলে app notification permission, Do Not Disturb, battery optimization এবং background activity পরীক্ষা করুন।"
    }
};


/* =========================================================
   SEARCH KEYWORDS
========================================================= */

const keywordMap = [

    ["facebook", "ফেসবুক", "fb"],
    ["instagram", "ইনস্টাগ্রাম"],
    ["whatsapp", "হোয়াটসঅ্যাপ", "হোয়াটসঅ্যাপ"],
    ["otp", "ওটিপি", "one time password"],
    ["গরম", "overheat", "overheating", "heat"],
    ["battery", "ব্যাটারি", "চার্জ দ্রুত শেষ"],
    ["upi", "ইউপিআই"],
    ["bank", "ব্যাংক", "banking"],
    ["hack", "হ্যাক", "hacked"],
    ["gmail", "জিমেইল"],
    ["google", "গুগল"],
    ["youtube", "ইউটিউব"],
    ["internet", "ইন্টারনেট", "net"],
    ["wifi", "wi-fi", "ওয়াইফাই", "ওয়াইফাই"],
    ["password", "পাসওয়ার্ড", "পাসওয়ার্ড"],
    ["scam", "স্ক্যাম", "প্রতারণা"],
    ["phishing", "ফিশিং"],
    ["payment", "পেমেন্ট"],
    ["sim", "সিম"],
    ["app", "অ্যাপ"],
    ["storage", "স্টোরেজ", "memory"],
    ["bluetooth", "ব্লুটুথ"],
    ["camera", "ক্যামেরা"],
    ["microphone", "মাইক্রোফোন", "mic"],
    ["location", "লোকেশন", "gps"],
    ["notification", "নোটিফিকেশন"]
];


/* =========================================================
   FIND PROBLEM
========================================================= */

function findProblem(query) {

    const q = String(query || "")
        .toLowerCase()
        .trim();

    if (!q) {
        return {
            title: "সমস্যা লিখুন",
            text: "আপনার সমস্যাটি লিখে Search করুন।"
        };
    }

    for (const item of keywordMap) {

        const key = item[0];

        for (let i = 0; i < item.length; i++) {

            const word = item[i].toLowerCase();

            if (q.includes(word)) {

                if (problems[key]) {
                    return problems[key];
                }

            }

        }

    }

    return {
        title: "সমস্যাটি আরও নির্দিষ্ট করুন",
        text:
            "যেমন: “OTP আসছে না”, “Facebook hacked”, “ফোন গরম হচ্ছে”, " +
            "“UPI payment failed”, “Wi-Fi কাজ করছে না” — এভাবে লিখলে CyberCare আরও নির্দিষ্ট সাহায্য দেখাতে পারবে।"
    };
}


/* =========================================================
   SEARCH RESULT
========================================================= */

function showSearchResult(query) {

    const resultBox = $("#searchResult");

    if (!resultBox) return;

    const result = findProblem(query);

    resultBox.innerHTML =
        "<strong>💡 " +
        escapeHTML(result.title) +
        "</strong><br>" +
        escapeHTML(result.text);

    resultBox.style.display = "block";

    resultBox.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}


/* =========================================================
   SAFE HTML ESCAPE
========================================================= */

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = String(text || "");

    return div.innerHTML;
}


/* =========================================================
   SEARCH FORM
========================================================= */

const searchForm = $("#searchForm");

if (searchForm) {

    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const input = $("#problemInput");

        if (!input) return;

        const query = input.value.trim();

        showSearchResult(query);

    });

}


/* =========================================================
   POPULAR SEARCH BUTTONS
========================================================= */

$$(".popular button").forEach(button => {

    button.addEventListener("click", function () {

        const input = $("#problemInput");

        if (!input) return;

        input.value = this.textContent.trim();

        if (searchForm) {

            searchForm.dispatchEvent(
                new Event("submit", {
                    bubbles: true,
                    cancelable: true
                })
            );

        }

    });

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = $("#menuBtn");
const mobileMenu = $("#mobileMenu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", function (event) {

        event.stopPropagation();

        mobileMenu.classList.toggle("show");

        const isOpen = mobileMenu.classList.contains("show");

        menuBtn.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });


    /* Close when clicking outside */

    document.addEventListener("click", function (event) {

        if (
            mobileMenu.classList.contains("show") &&
            !mobileMenu.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            mobileMenu.classList.remove("show");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    /* Close after clicking a menu link */

    mobileMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("show");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================================
   DARK MODE
========================================================= */

const themeBtn = $("#themeBtn");

function updateThemeIcon() {

    if (!themeBtn) return;

    const dark = document.body.classList.contains("dark");

    themeBtn.textContent = dark ? "☀" : "☾";

    themeBtn.setAttribute(
        "aria-label",
        dark ? "Light Mode" : "Dark Mode"
    );

}


/* Load saved theme */

try {

    const savedTheme = localStorage.getItem("cybercare-theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

    }

} catch (error) {

    console.warn("Theme storage unavailable.");

}


updateThemeIcon();


if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        const isDark =
            document.body.classList.contains("dark");

        try {

            localStorage.setItem(
                "cybercare-theme",
                isDark ? "dark" : "light"
            );

        } catch (error) {

            console.warn("Theme could not be saved.");

        }

        updateThemeIcon();

    });

}


/* =========================================================
   QUICK ACTIONS
========================================================= */

$$("[data-action]").forEach(button => {

    button.addEventListener("click", function () {

        const action = this.dataset.action;

        handleAction(action);

    });

});


function handleAction(action) {

    switch (action) {

        case "report":

            window.open(
                "https://cybercrime.gov.in/",
                "_blank",
                "noopener,noreferrer"
            );

            break;


        case "scan":

            showMessage(
                "🛡️ Phone Safety Scan",
                "Browser-এর security limitation-এর কারণে website সরাসরি পুরো phone scan করতে পারে না। তবে permission-based security checks, browser checks এবং safety checklist যোগ করা যাবে।"
            );

            break;


        case "scam":

            showMessage(
                "🚨 Scam Check",
                "সন্দেহজনক message, link বা offer যাচাই করার জন্য Scam Analysis module পরবর্তী ধাপে যুক্ত করা যাবে।"
            );

            break;


        case "password":

            showMessage(
                "🔐 Password Checker",
                "Password এখানে সরাসরি লিখবেন না। CyberCare-এর secure password-strength checker আলাদাভাবে তৈরি করা হবে।"
            );

            break;


        case "privacy":

            showMessage(
                "🔒 Privacy Check",
                "আপনার account permissions, privacy settings এবং security options ধাপে ধাপে পরীক্ষা করার guide এখানে যুক্ত করা হবে।"
            );

            break;


        case "help":

            scrollToSection(".categories");

            break;


        default:

            showMessage(
                "🛡️ CyberCare Help Center",
                "এই sectionটি CyberCare-এর A–Z Guide এবং Smart Diagnosis system-এর সঙ্গে যুক্ত হবে।"
            );

    }

}


/* =========================================================
   MESSAGE / MODAL FALLBACK
========================================================= */

function showMessage(title, message) {

    let modal = $("#cybercareModal");

    if (!modal) {

        modal = document.createElement("div");

        modal.id = "cybercareModal";

        modal.innerHTML = `
            <div class="cc-modal-overlay">
                <div class="cc-modal">
                    <button class="cc-modal-close" type="button">×</button>
                    <div class="cc-modal-icon">🛡️</div>
                    <h3 class="cc-modal-title"></h3>
                    <p class="cc-modal-text"></p>
                    <button class="cc-modal-ok" type="button">OK</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);


        /* Modal styles */

        const style = document.createElement("style");

        style.textContent = `
            #cybercareModal{
                position:fixed;
                inset:0;
                z-index:99999;
            }

            .cc-modal-overlay{
                width:100%;
                height:100%;
                display:flex;
                align-items:center;
                justify-content:center;
                padding:20px;
                background:rgba(3,20,40,.55);
                backdrop-filter:blur(4px);
            }

            .cc-modal{
                position:relative;
                width:100%;
                max-width:430px;
                padding:25px;
                background:#fff;
                color:#15233a;
                border-radius:16px;
                box-shadow:0 20px 60px rgba(0,0,0,.25);
                text-align:center;
            }

            .cc-modal-icon{
                font-size:38px;
                margin-bottom:8px;
            }

            .cc-modal-title{
                font-size:19px;
                line-height:1.5;
                margin-bottom:8px;
            }

            .cc-modal-text{
                color:#64748b;
                font-size:12px;
                line-height:1.8;
            }

            .cc-modal-close{
                position:absolute;
                top:8px;
                right:10px;
                width:32px;
                height:32px;
                border:0;
                background:transparent;
                font-size:25px;
                color:#64748b;
            }

            .cc-modal-ok{
                margin-top:15px;
                border:0;
                border-radius:8px;
                padding:9px 24px;
                background:#075dcc;
                color:#fff;
                font-weight:700;
                cursor:pointer;
            }

            body.dark .cc-modal{
                background:#132238;
                color:#eef5ff;
            }

            body.dark .cc-modal-text{
                color:#aebed0;
            }

            @media(max-width:480px){

                .cc-modal{
                    padding:22px 18px;
                }

                .cc-modal-title{
                    font-size:17px;
                }

                .cc-modal-text{
                    font-size:11px;
                }

            }
        `;

        document.head.appendChild(style);


        /* Close buttons */

        modal
            .querySelector(".cc-modal-close")
            .addEventListener("click", closeModal);

        modal
            .querySelector(".cc-modal-ok")
            .addEventListener("click", closeModal);

        modal
            .querySelector(".cc-modal-overlay")
            .addEventListener("click", function (event) {

                if (event.target === this) {
                    closeModal();
                }

            });

    }


    modal.querySelector(".cc-modal-title").textContent = title;

    modal.querySelector(".cc-modal-text").textContent = message;

    modal.style.display = "block";

}


function closeModal() {

    const modal = $("#cybercareModal");

    if (modal) {

        modal.style.display = "none";

    }

}


/* =========================================================
   SCROLL HELPER
========================================================= */

function scrollToSection(selector) {

    const element = $(selector);

    if (!element) return;

    element.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   CATEGORY / SERVICE / TOOL BUTTON SUPPORT
========================================================= */

$$(
    ".category-card button, .service-card button, .tool-grid button"
).forEach(button => {

    button.addEventListener("click", function () {

        const text =
            this.textContent.trim();

        const parent =
            this.closest(
                ".category-card, .service-card, article"
            );

        const title =
            parent?.querySelector("h3, b")?.textContent?.trim()
            || "CyberCare Help";

        showMessage(
            "🛡️ " + title,
            text
                ? `"${text}" sectionটি CyberCare-এর বিস্তারিত step-by-step guide-এর সঙ্গে যুক্ত হবে।`
                : "এই section-এর বিস্তারিত guide পরবর্তী module-এ যুক্ত হবে।"
        );

    });

});


/* =========================================================
   KEYBOARD SHORTCUT
   "/" = Focus Search
========================================================= */

document.addEventListener("keydown", function (event) {

    if (
        event.key === "/" &&
        !["INPUT", "TEXTAREA", "SELECT"].includes(
            document.activeElement.tagName
        )
    ) {

        event.preventDefault();

        const input = $("#problemInput");

        if (input) {

            input.focus();

        }

    }

    if (event.key === "Escape") {

        closeModal();

        if (mobileMenu) {

            mobileMenu.classList.remove("show");

        }

    }

});


/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

$$('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetID =
            this.getAttribute("href");

        if (
            !targetID ||
            targetID === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetID);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    updateThemeIcon();

    console.log(
        "🛡️ CyberCare initialized successfully."
    );

});
