// ============================================================
// CYBERCARE - ADVANCED SCRIPT.JS
// Search + Safety Guides + Women Safety + Tools + Scanner
// English / বাংলা + Dark Mode + Emergency Response
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

    // =========================================================
    // ELEMENTS
    // =========================================================

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
    const searchResults = document.getElementById("searchResults");


    // =========================================================
    // SIDE MENU
    // =========================================================

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
    // NAVIGATION
    // =========================================================

    function scrollToSection(id) {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }

    document.querySelectorAll(".menu-item").forEach(item => {

        item.addEventListener("click", () => {

            const target = item.dataset.menu;

            closeSideMenu();

            if (target === "services") scrollToSection("services");
            if (target === "women") scrollToSection("women");
            if (target === "tools") scrollToSection("tools");
            if (target === "learn") scrollToSection("learn");
            if (target === "india") scrollToSection("india");
            if (target === "about") scrollToSection("about");

            if (target === "emergency") {
                document.querySelector(".emergency-section")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });
            }

        });

    });


    // =========================================================
    // HERO BUTTONS
    // =========================================================

    emergencyBtn?.addEventListener("click", () => {
        document.querySelector(".emergency-section")
            ?.scrollIntoView({
                behavior: "smooth"
            });
    });

    quickHelpBtn?.addEventListener("click", () => {

        document.querySelector(".search-section")
            ?.scrollIntoView({
                behavior: "smooth"
            });

        setTimeout(() => {
            problemSearch?.focus();
        }, 500);

    });


    // =========================================================
    // DARK MODE
    // =========================================================

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


    // =========================================================
    // LANGUAGE
    // =========================================================

    let bengali = false;

    languageBtn?.addEventListener("click", () => {

        bengali = !bengali;

        if (languageText) {
            languageText.textContent =
                bengali ? "EN" : "বাংলা";
        }

        if (bengali) {
            translateToBangla();
        } else {
            location.reload();
        }

    });


    function translateToBangla() {

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
                "পরীক্ষা শুরু করুন",

            "I Need Help Now":
                "এখনই সাহায্য দরকার",

            "Find My Problem":
                "আমার সমস্যাটি খুঁজুন",

            "Got it":
                "বুঝেছি"

        };

        document.querySelectorAll(
            "h1,h2,h3,h4,p,button,strong,small"
        ).forEach(element => {

            const original =
                element.dataset.originalText ||
                element.textContent.trim();

            element.dataset.originalText = original;

            if (translations[original]) {
                element.textContent =
                    translations[original];
            }

        });

    }


    // =========================================================
    // SEARCH DATABASE
    // =========================================================

    const problems = [

        {
            keywords: [
                "facebook",
                "instagram",
                "whatsapp",
                "google",
                "youtube",
                "hacked",
                "hack",
                "account",
                "login",
                "password"
            ],
            title: "🔐 Account Recovery",
            text: `
                <p>আপনার account compromise হয়ে থাকতে পারে।</p>
                <ol>
                    <li>Email account আগে secure করুন।</li>
                    <li>Password পরিবর্তন করুন।</li>
                    <li>2FA চালু করুন।</li>
                    <li>Unknown device logout করুন।</li>
                    <li>Recovery email ও phone check করুন।</li>
                    <li>Official recovery process ব্যবহার করুন।</li>
                </ol>
            `
        },

        {
            keywords: [
                "blackmail",
                "threat",
                "private photo",
                "private video",
                "leak",
                "sextortion"
            ],
            title: "⚠️ Blackmail / Private Content Threat",
            text: `
                <ol>
                    <li>Blackmailer-কে টাকা দেবেন না।</li>
                    <li>আর কোনো ছবি বা ভিডিও পাঠাবেন না।</li>
                    <li>সব evidence সংরক্ষণ করুন।</li>
                    <li>Password ও account security ঠিক করুন।</li>
                    <li>প্রয়োজন হলে block/report করুন।</li>
                    <li>বিশ্বস্ত কারও সাহায্য নিন।</li>
                </ol>
            `
        },

        {
            keywords: [
                "call",
                "calling",
                "harassment",
                "message",
                "disturb",
                "abuse"
            ],
            title: "📞 Repeated Calls / Harassment",
            text: `
                <ol>
                    <li>Call log ও messages-এর screenshot রাখুন।</li>
                    <li>অপ্রয়োজনীয় reply করবেন না।</li>
                    <li>প্রয়োজনে block করুন।</li>
                    <li>Serious threat হলে official help নিন।</li>
                </ol>
            `
        },

        {
            keywords: [
                "photo",
                "picture",
                "image",
                "photo misuse"
            ],
            title: "📸 Photo Misuse",
            text: `
                <ol>
                    <li>Screenshot নিন।</li>
                    <li>Profile/post URL save করুন।</li>
                    <li>Platform-এ report করুন।</li>
                    <li>Threat থাকলে evidence সংরক্ষণ করুন।</li>
                </ol>
            `
        },

        {
            keywords: [
                "fake profile",
                "fake account",
                "impersonation"
            ],
            title: "🎭 Fake Profile",
            text: `
                <ol>
                    <li>Fake profile-এর screenshot নিন।</li>
                    <li>Profile URL save করুন।</li>
                    <li>Impersonation হিসেবে report করুন।</li>
                    <li>প্রয়োজন হলে পরিচিতদের সতর্ক করুন।</li>
                </ol>
            `
        },

        {
            keywords: [
                "upi",
                "bank",
                "money",
                "fraud",
                "payment",
                "scam",
                "transaction"
            ],
            title: "💳 Online & Financial Fraud",
            text: `
                <ol>
                    <li>Bank/payment provider-কে দ্রুত জানান।</li>
                    <li>Transaction ID সংরক্ষণ করুন।</li>
                    <li>Screenshot রাখুন।</li>
                    <li>Payment account secure করুন।</li>
                    <li>ভারতে official cybercrime reporting ব্যবহার করুন।</li>
                </ol>
            `
        },

        {
            keywords: [
                "phishing",
                "link",
                "otp",
                "fake website",
                "fake sms"
            ],
            title: "🎣 Scam & Phishing",
            text: `
                <ol>
                    <li>Suspicious link খুলবেন না।</li>
                    <li>OTP/password/PIN দেবেন না।</li>
                    <li>Sender independently verify করুন।</li>
                    <li>Fake website হলে information দেবেন না।</li>
                </ol>
            `
        },

        {
            keywords: [
                "phone",
                "spyware",
                "unknown app",
                "malware",
                "virus"
            ],
            title: "📱 Phone Security",
            text: `
                <ol>
                    <li>Unknown app check করুন।</li>
                    <li>Permissions review করুন।</li>
                    <li>Device update করুন।</li>
                    <li>Suspicious app remove করুন।</li>
                    <li>Important accounts secure করুন।</li>
                </ol>
            `
        }

    ];


    // =========================================================
    // SEARCH
    // =========================================================

    problemSearch?.addEventListener("input", () => {

        const query =
            problemSearch.value
                .toLowerCase()
                .trim();

        if (!searchResults) return;

        searchResults.innerHTML = "";

        if (!query) return;

        const matches = problems.filter(problem =>
            problem.keywords.some(keyword =>
                query.includes(keyword)
            )
        );

        if (!matches.length) {

            searchResults.innerHTML = `
                <div class="search-result">
                    <h3>🔎 No exact guide found</h3>
                    <p>
                        Try: blackmail, hacked, UPI fraud,
                        fake profile, harassment, phishing,
                        photo misuse or phone security.
                    </p>
                </div>
            `;

            return;
        }

        matches.forEach(problem => {

            const result =
                document.createElement("div");

            result.className = "search-result";

            result.innerHTML = `
                <h3>${problem.title}</h3>
                ${problem.text}

                <button class="result-help">
                    View Full Safety Guide →
                </button>
            `;

            result.querySelector(".result-help")
                ?.addEventListener("click", () => {

                    showGuide(
                        problem.title,
                        problem.text
                    );

                });

            searchResults.appendChild(result);

        });

    });


    // =========================================================
    // SERVICE BUTTONS
    // =========================================================

    document.querySelectorAll(".help-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                showServiceGuide(
                    button.dataset.service
                );

            });

        });


    function showServiceGuide(service) {

        const guides = {

            "Account Recovery": {
                title: "🔐 Account Recovery — Full Guide",
                text: `
                    <h3>1. Secure your email</h3>
                    <p>আপনার email account আগে secure করুন।</p>

                    <h3>2. Change password</h3>
                    <p>একটি নতুন unique password ব্যবহার করুন।</p>

                    <h3>3. Check active sessions</h3>
                    <p>Unknown device/session logout করুন।</p>

                    <h3>4. Enable 2FA</h3>
                    <p>Two-factor authentication চালু করুন।</p>

                    <h3>5. Check recovery information</h3>
                    <p>Recovery email ও phone number check করুন।</p>

                    <h3>6. Official recovery</h3>
                    <p>শুধু platform-এর official recovery process ব্যবহার করুন।</p>

                    <h3>🚫 Never</h3>
                    <ul>
                        <li>OTP share করবেন না।</li>
                        <li>Recovery code share করবেন না।</li>
                        <li>Password কাউকে দেবেন না।</li>
                        <li>Guaranteed recovery-এর জন্য অচেনা কাউকে টাকা দেবেন না।</li>
                    </ul>
                `
            },

            "Scam & Phishing": {
                title: "🎣 Scam & Phishing — Full Guide",
                text: `
                    <h3>STOP</h3>
                    <p>সন্দেহজনক link/message দেখে তাড়াহুড়ো করে কিছু করবেন না।</p>

                    <h3>Never share</h3>
                    <ul>
                        <li>OTP</li>
                        <li>Password</li>
                        <li>UPI PIN</li>
                        <li>Bank PIN</li>
                        <li>Recovery code</li>
                    </ul>

                    <h3>Verify</h3>
                    <p>Sender-এর দেওয়া link ব্যবহার না করে official app/website নিজে খুলে verify করুন।</p>

                    <h3>If money was lost</h3>
                    <p>Bank/payment provider-এর সঙ্গে দ্রুত যোগাযোগ করুন এবং transaction evidence রাখুন।</p>
                `
            },

            "Phone Security": {
                title: "📱 Phone Security — Full Guide",
                text: `
                    <h3>Check installed apps</h3>
                    <p>Unknown application আছে কি না দেখুন।</p>

                    <h3>Review permissions</h3>
                    <p>Camera, microphone, SMS, contacts, location এবং accessibility permissions check করুন।</p>

                    <h3>Update</h3>
                    <p>Official system/security updates install করুন।</p>

                    <h3>Suspicious app</h3>
                    <p>যে app চিনতে পারছেন না বা অপ্রয়োজনীয় access চায় সেটি review করুন।</p>
                `
            },

            "Online Fraud": {
                title: "💳 Online & Financial Fraud — Full Guide",
                text: `
                    <h3>🚨 Money already lost?</h3>
                    <ol>
                        <li>Bank/payment provider-কে immediately জানান।</li>
                        <li>Fraudulent transaction সম্পর্কে জানান।</li>
                        <li>Transaction ID save করুন।</li>
                        <li>Screenshot রাখুন।</li>
                        <li>Official cybercrime reporting channel ব্যবহার করুন।</li>
                    </ol>

                    <h3>Never</h3>
                    <p>কেউ টাকা ফেরত দেওয়ার নামে আগে টাকা চাইলে বিশ্বাস করবেন না।</p>
                `
            },

            "Suspicious Activity": {
                title: "🕵️ Suspicious Activity — Full Guide",
                text: `
                    <h3>Warning signs</h3>
                    <ul>
                        <li>Unknown login</li>
                        <li>Unknown device</li>
                        <li>Unexpected password reset</li>
                        <li>Unknown messages/posts</li>
                        <li>Unexpected account changes</li>
                    </ul>

                    <h3>What to do</h3>
                    <ol>
                        <li>Password change করুন।</li>
                        <li>2FA চালু করুন।</li>
                        <li>Active sessions check করুন।</li>
                        <li>Unknown device remove করুন।</li>
                        <li>Recovery information check করুন।</li>
                    </ol>
                `
            },

            "Emergency Help": {
                title: "🚨 Emergency Cyber Response",
                text: `
                    <h3>1. Stop the damage</h3>
                    <p>Reply, payment বা additional information sharing বন্ধ করুন।</p>

                    <h3>2. Secure accounts</h3>
                    <p>Email এবং গুরুত্বপূর্ণ accounts secure করুন।</p>

                    <h3>3. Preserve evidence</h3>
                    <p>Screenshot, URL, username, message এবং transaction details রাখুন।</p>

                    <h3>4. Report</h3>
                    <p>Platform-এর official reporting system এবং প্রয়োজন হলে official authority ব্যবহার করুন।</p>

                    <h3>5. Trusted person</h3>
                    <p>বিশ্বস্ত কারও সঙ্গে বিষয়টি share করুন।</p>
                `
            }

        };

        const guide = guides[service];

        showGuide(
            guide?.title || service,
            guide?.text ||
            "<p>Official recovery এবং reporting process অনুসরণ করুন।</p>"
        );
    }


    // =========================================================
    // WOMEN SAFETY
    // =========================================================

    document.querySelectorAll(".women-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                showWomenGuide(
                    button.dataset.women
                );

            });

        });


    function showWomenGuide(type) {

        const guides = {

            harassment: {
                title: "📞 Repeated Calls / Harassment",
                text: `
                    <ol>
                        <li>Call/message-এর screenshot রাখুন।</li>
                        <li>Call logs save করুন।</li>
                        <li>প্রয়োজন ছাড়া reply করবেন না।</li>
                        <li>Block করুন।</li>
                        <li>Privacy settings review করুন।</li>
                        <li>বিশ্বস্ত মানুষকে জানান।</li>
                        <li>Threat হলে official help নিন।</li>
                    </ol>
                `
            },

            photo: {
                title: "📸 Photo Misuse",
                text: `
                    <ol>
                        <li>Post/profile-এর screenshot নিন।</li>
                        <li>URL save করুন।</li>
                        <li>Username save করুন।</li>
                        <li>Platform-এ report করুন।</li>
                        <li>Threat থাকলে evidence preserve করুন।</li>
                    </ol>
                `
            },

            fakeprofile: {
                title: "🎭 Fake Profile",
                text: `
                    <ol>
                        <li>Fake profile-এর screenshot নিন।</li>
                        <li>Profile URL save করুন।</li>
                        <li>Impersonation হিসেবে report করুন।</li>
                        <li>প্রয়োজনে পরিচিতদের সতর্ক করুন।</li>
                        <li>নিজের account secure করুন।</li>
                    </ol>
                `
            },

            blackmail: {
                title: "⚠️ Blackmail — Complete Safety Guide",
                text: `
                    <h3>🚨 প্রথমে শান্ত থাকুন</h3>
                    <p>ভয় দেখিয়ে দ্রুত সিদ্ধান্ত নিতে বাধ্য করাই blackmailer-এর অন্যতম কৌশল।</p>

                    <h3>1. টাকা দেবেন না</h3>
                    <p>Payment করলেই threat বন্ধ হবে—এমন guarantee নেই।</p>

                    <h3>2. আর কোনো content পাঠাবেন না</h3>
                    <p>Photo, video, OTP, password বা personal information পাঠাবেন না।</p>

                    <h3>3. Evidence save করুন</h3>
                    <ul>
                        <li>Messages</li>
                        <li>Username</li>
                        <li>Profile URL</li>
                        <li>Phone number</li>
                        <li>Payment request</li>
                        <li>Date/time</li>
                    </ul>

                    <h3>4. Account secure করুন</h3>
                    <ol>
                        <li>Password change করুন।</li>
                        <li>2FA চালু করুন।</li>
                        <li>Active sessions check করুন।</li>
                        <li>Unknown device remove করুন।</li>
                    </ol>

                    <h3>5. Block & Report</h3>
                    <p>Evidence সংরক্ষণের পর platform-এর official report/block tools ব্যবহার করুন।</p>

                    <h3>6. Trusted person-কে জানান</h3>
                    <p>একাই handle করার চেষ্টা করবেন না।</p>

                    <h3>7. Money already sent?</h3>
                    <p>Bank/payment provider-এর সঙ্গে দ্রুত যোগাযোগ করুন এবং transaction evidence রাখুন।</p>

                    <h3>❤️ মনে রাখুন</h3>
                    <p>Blackmail-এর শিকার হওয়া আপনার দোষ নয়।</p>
                `
            },

            private: {
                title: "🔒 Private Photo / Video Threat",
                text: `
                    <ol>
                        <li>আর কোনো content পাঠাবেন না।</li>
                        <li>চাপের মধ্যে payment করবেন না।</li>
                        <li>Threat-এর screenshot রাখুন।</li>
                        <li>Username ও URL save করুন।</li>
                        <li>Account security বাড়ান।</li>
                        <li>Platform-এ report করুন।</li>
                        <li>বিশ্বস্ত মানুষকে জানান।</li>
                    </ol>
                `
            },

            stalking: {
                title: "👁️ Online Stalking",
                text: `
                    <h3>Check what is public</h3>
                    <ul>
                        <li>Phone number</li>
                        <li>Location</li>
                        <li>Daily routine</li>
                        <li>Workplace/school information</li>
                        <li>Family information</li>
                    </ul>

                    <h3>Secure</h3>
                    <ol>
                        <li>Password change করুন।</li>
                        <li>2FA চালু করুন।</li>
                        <li>Location sharing review করুন।</li>
                        <li>Unknown sessions remove করুন।</li>
                        <li>Repeated harassment-এর evidence রাখুন।</li>
                    </ol>
                `
            }

        };

        const guide = guides[type];

        if (guide) {
            showGuide(
                guide.title,
                guide.text
            );
        }
    }


    // =========================================================
    // ADVANCED SCAM SCANNER
    // =========================================================

    function openScamScanner() {

        const scannerHTML = `

            <div class="scanner-box">

                <h3>🔎 CyberCare Scam Scanner</h3>

                <p>
                    Suspicious message, SMS, email বা DM এখানে paste করুন।
                    এটি কোনো server-এ পাঠানো হবে না।
                </p>

                <textarea
                    id="scamInput"
                    rows="7"
                    placeholder="Paste suspicious message here..."
                ></textarea>

                <button id="runScamScan" class="guide-ok">
                    🔍 Scan Now
                </button>

                <div id="scanResult"></div>

            </div>
        `;

        showGuide(
            "🔎 Scam Scanner",
            scannerHTML
        );

        setTimeout(() => {

            const scanButton =
                document.getElementById("runScamScan");

            scanButton?.addEventListener(
                "click",
                runScamScan
            );

        }, 50);
    }


    function runScamScan() {

        const input =
            document.getElementById("scamInput");

        const result =
            document.getElementById("scanResult");

        if (!input || !result) return;

        const text =
            input.value.toLowerCase().trim();

        if (!text) {

            result.innerHTML = `
                <div class="scan-warning">
                    ⚠️ আগে message paste করুন।
                </div>
            `;

            return;
        }

        const checks = [

            {
                words: [
                    "otp",
                    "one time password",
                    "verification code"
                ],
                title: "OTP Request",
                message:
                    "কেউ OTP চাইছে। এটি বড় warning sign।"
            },

            {
                words: [
                    "upi pin",
                    "upi-pin",
                    "pin"
                ],
                title: "PIN Request",
                message:
                    "UPI PIN/PIN চাওয়া হলে সতর্ক থাকুন।"
            },

            {
                words: [
                    "urgent",
                    "immediately",
                    "now",
                    "hurry",
                    "তাড়াতাড়ি",
                    "জরুরি"
                ],
                title: "Urgency Pressure",
                message:
                    "তাড়াহুড়ো করিয়ে সিদ্ধান্ত নিতে বাধ্য করার চেষ্টা হতে পারে।"
            },

            {
                words: [
                    "click here",
                    "click the link",
                    "verify now",
                    "login here"
                ],
                title: "Suspicious Link Request",
                message:
                    "Unexpected link ব্যবহার করার আগে independently verify করুন।"
            },

            {
                words: [
                    "prize",
                    "lottery",
                    "winner",
                    "reward",
                    "পুরস্কার",
                    "লটারি"
                ],
                title: "Prize / Lottery Signal",
                message:
                    "অপ্রত্যাশিত prize/lottery claim scam হতে পারে।"
            },

            {
                words: [
                    "refund",
                    "cashback",
                    "রিফান্ড",
                    "ক্যাশব্যাক"
                ],
                title: "Refund / Cashback Signal",
                message:
                    "Refund/cashback-এর নামে payment বা sensitive information চাইলে সতর্ক থাকুন।"
            },

            {
                words: [
                    "investment",
                    "guaranteed profit",
                    "double your money",
                    "guaranteed return"
                ],
                title: "Investment Warning",
                message:
                    "Guaranteed profit বা দ্রুত টাকা বাড়ানোর দাবি বড় warning sign।"
            },

            {
                words: [
                    "police",
                    "cyber police",
                    "income tax",
                    "customs",
                    "arrest",
                    "warrant"
                ],
                title: "Authority Impersonation",
                message:
                    "কর্তৃপক্ষের নাম ব্যবহার করে ভয় দেখানো scam হতে পারে।"
            },

            {
                words: [
                    "password",
                    "recovery code",
                    "security code"
                ],
                title: "Credential Request",
                message:
                    "Password বা recovery/security code কখনো share করবেন না।"
            },

            {
                words: [
                    "send money",
                    "transfer money",
                    "pay now",
                    "payment required"
                ],
                title: "Payment Pressure",
                message:
                    "তাড়াহুড়ো করে payment করতে বললে আগে independently verify করুন।"
            }

        ];

        const found = [];

        checks.forEach(check => {

            const matched =
                check.words.some(word =>
                    text.includes(word)
                );

            if (matched) {
                found.push(check);
            }

        });

        let risk = "LOW";
        let riskClass = "scan-safe";

        if (found.length >= 5) {
            risk = "HIGH";
            riskClass = "scan-danger";
        } else if (found.length >= 2) {
            risk = "MEDIUM";
            riskClass = "scan-warning";
        }

        let findingsHTML = "";

        if (found.length) {

            findingsHTML = `
                <h4>⚠️ Warning signs found</h4>
                <ul>
                    ${found.map(item => `
                        <li>
                            <strong>${item.title}</strong><br>
                            ${item.message}
                        </li>
                    `).join("")}
                </ul>
            `;

        } else {

            findingsHTML = `
                <p>
                    No obvious warning pattern was detected.
                    This does NOT prove the message is safe.
                </p>
            `;

        }

        result.innerHTML = `

            <div class="${riskClass}">

                <h3>
                    Risk Level: ${risk}
                </h3>

                <p>
                    Detected warning signs:
                    <strong>${found.length}</strong>
                </p>

                ${findingsHTML}

                <hr>

                <strong>🛡️ Safety rule:</strong>

                <p>
                    সন্দেহ থাকলে link খুলবেন না, OTP/PIN/password দেবেন না
                    এবং independently verify করুন।
                </p>

            </div>

        `;

    }


    // =========================================================
    // TOOLS
    // =========================================================

    document.querySelectorAll(".tool-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const tool =
                    button.dataset.tool;

                if (tool === "scam") {
                    openScamScanner();
                    return;
                }

                openTool(tool);

            });

        });


    function openTool(tool) {

        const tools = {

            password: {
                title: "🔐 Password Safety",
                text: `
                    <h3>Strong password habits</h3>
                    <ul>
                        <li>Long password/passphrase ব্যবহার করুন।</li>
                        <li>Important accounts-এ unique password ব্যবহার করুন।</li>
                        <li>Password reuse করবেন না।</li>
                        <li>Personal information ব্যবহার এড়িয়ে চলুন।</li>
                        <li>2FA চালু করুন।</li>
                    </ul>
                `
            },

            url: {
                title: "🔗 URL Safety Guide",
                text: `
                    <ol>
                        <li>Domain spelling check করুন।</li>
                        <li>Unusual characters খেয়াল করুন।</li>
                        <li>Shortened link হলে extra সতর্ক থাকুন।</li>
                        <li>Unexpected login link ব্যবহার করবেন না।</li>
                        <li>প্রয়োজনে official app নিজে খুলুন।</li>
                    </ol>
                `
            },

            privacy: {
                title: "📱 Privacy Checklist",
                text: `
                    <ul>
                        <li>Account privacy</li>
                        <li>Location sharing</li>
                        <li>Camera permission</li>
                        <li>Microphone permission</li>
                        <li>Contacts permission</li>
                        <li>Connected devices</li>
                        <li>Active sessions</li>
                        <li>Third-party apps</li>
                    </ul>
                `
            },

            evidence: {
                title: "🧾 Evidence Checklist",
                text: `
                    <ul>
                        <li>📸 Screenshots</li>
                        <li>👤 Username</li>
                        <li>🔗 Profile URL</li>
                        <li>💬 Messages</li>
                        <li>☎️ Call logs</li>
                        <li>🕐 Date/time</li>
                        <li>💳 Transaction ID</li>
                        <li>📧 Emails</li>
                    </ul>
                `
            },

            score: {
                title: "🛡️ Cyber Safety Check",
                text: `
                    <ul>
                        <li>✔ Unique passwords?</li>
                        <li>✔ 2FA enabled?</li>
                        <li>✔ OTP কখনো share করেন না?</li>
                        <li>✔ Active sessions check করেন?</li>
                        <li>✔ App permissions review করেন?</li>
                        <li>✔ Phone updated রাখেন?</li>
                        <li>✔ Payment request verify করেন?</li>
                        <li>✔ Reporting channel জানেন?</li>
                    </ul>
                `
            }

        };

        const selected = tools[tool];

        if (selected) {
            showGuide(
                selected.title,
                selected.text
            );
        }

    }


    // =========================================================
    // LEARNING
    // =========================================================

    document.querySelectorAll(".learn-card")
        .forEach(button => {

            button.addEventListener("click", () => {

                const topic =
                    button.dataset.learn;

                const content = {

                    password: `
                        <h3>🔐 Password Safety</h3>
                        <p>Long, unique password ব্যবহার করুন এবং 2FA চালু রাখুন।</p>
                    `,

                    "2fa": `
                        <h3>🔑 Two-Factor Authentication</h3>
                        <p>Password চুরি হলেও 2FA অতিরিক্ত security layer দেয়।</p>
                    `,

                    phishing: `
                        <h3>🎣 Phishing</h3>
                        <p>Fake message, website বা account দিয়ে sensitive information নেওয়ার চেষ্টা হলো phishing।</p>
                    `,

                    privacy: `
                        <h3>🔒 Privacy</h3>
                        <p>আপনার personal information, location এবং contact visibility নিয়মিত review করুন।</p>
                    `,

                    phone: `
                        <h3>📱 Phone Security</h3>
                        <p>Phone update রাখুন, trusted source থেকে app install করুন এবং permissions review করুন।</p>
                    `,

                    financial: `
                        <h3>💳 Financial Safety</h3>
                        <p>OTP, UPI PIN, password বা banking credentials কখনো share করবেন না।</p>
                    `

                };

                showGuide(
                    "🎓 Learn Cybersecurity",
                    content[topic] ||
                    "<p>Stay safe online.</p>"
                );

            });

        });


    // =========================================================
    // EMERGENCY
    // =========================================================

    document.querySelectorAll("[data-emergency]")
        .forEach(button => {

            button.addEventListener("click", () => {

                const type =
                    button.dataset.emergency;

                const guides = {

                    account: `
                        <ol>
                            <li>Email secure করুন।</li>
                            <li>Password change করুন।</li>
                            <li>2FA চালু করুন।</li>
                            <li>Active sessions check করুন।</li>
                            <li>Unknown device remove করুন।</li>
                            <li>Official recovery ব্যবহার করুন।</li>
                        </ol>
                    `,

                    money: `
                        <ol>
                            <li>Bank/payment provider-কে immediately জানান।</li>
                            <li>Fraud transaction report করুন।</li>
                            <li>Transaction ID save করুন।</li>
                            <li>Payment account secure করুন।</li>
                            <li>Official cybercrime reporting ব্যবহার করুন।</li>
                        </ol>
                    `,

                    blackmail: `
                        <ol>
                            <li>টাকা দেবেন না।</li>
                            <li>আর কোনো content পাঠাবেন না।</li>
                            <li>Evidence save করুন।</li>
                            <li>Account secure করুন।</li>
                            <li>Block/report করুন।</li>
                            <li>Trusted person-কে জানান।</li>
                        </ol>
                    `,

                    phone: `
                        <ol>
                            <li>Suspicious app বন্ধ করুন।</li>
                            <li>Permissions review করুন।</li>
                            <li>Accessibility/device administrator access check করুন।</li>
                            <li>Device update করুন।</li>
                            <li>Trusted device থেকে important accounts secure করুন।</li>
                        </ol>
                    `

                };

                showGuide(
                    "🚨 Emergency Cyber Response",
                    guides[type] ||
                    "<p>Stop, secure, preserve evidence and report.</p>"
                );

            });

        });


    // =========================================================
    // MODAL
    // =========================================================

    function showGuide(title, content) {

        document.getElementById(
            "cybercareModal"
        )?.remove();

        const modal =
            document.createElement("div");

        modal.id = "cybercareModal";

        modal.innerHTML = `

            <div class="guide-overlay">

                <div class="guide-modal">

                    <button
                        class="guide-close"
                        aria-label="Close"
                    >
                        ✕
                    </button>

                    <h2>${title}</h2>

                    <div class="guide-content">
                        ${content}
                    </div>

                    <button class="guide-ok">
                        Got it
                    </button>

                </div>

            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector(".guide-close")
            ?.addEventListener("click", () => {
                modal.remove();
            });

        modal.querySelector(".guide-ok")
            ?.addEventListener("click", () => {
                modal.remove();
            });

        modal.querySelector(".guide-overlay")
            ?.addEventListener("click", event => {

                if (
                    event.target.classList.contains(
                        "guide-overlay"
                    )
                ) {
                    modal.remove();
                }

            });

    }


    // =========================================================
    // ESC KEY
    // =========================================================

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeSideMenu();

            document.getElementById(
                "cybercareModal"
            )?.remove();

        }

    });

});
