document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       1. LANGUAGE
    ========================== */

    const languageBtn = document.getElementById("languageBtn");
    const languageText = document.getElementById("languageText");

    let currentLanguage =
        localStorage.getItem("cybercare-language") || "EN";


    const translations = {

        EN: {
            logo: "CyberCare",

            heroTitle: "CyberCare",
            heroSubtitle: "Protecting People. Securing Digital Lives.",
            heroText:
                "Practical cybersecurity guidance for hacked accounts, scams, fraud, privacy problems and digital threats.",
            emergency: "🚨 I Need Help Now",

            servicesTitle: "How Can We Help You?",
            servicesText:
                "Choose a situation and get step-by-step guidance.",

            accountTitle: "Account Recovery",
            accountText:
                "Recover and secure hacked or compromised social media and online accounts.",

            scamTitle: "Scam & Phishing",
            scamText:
                "Check suspicious messages, WhatsApp links, fake websites and OTP scams.",

            phoneTitle: "Phone Security",
            phoneText:
                "Check unknown apps, permissions, location, camera and microphone access.",

            fraudTitle: "Online Fraud",
            fraudText:
                "Get guidance if money, UPI, bank or payment information is involved.",

            suspiciousTitle: "Suspicious Activity",
            suspiciousText:
                "Understand suspicious links, malware, fake login pages and unusual activity.",

            emergencyTitle: "Emergency Help",
            emergencyText:
                "Immediate safety steps when your account, device or money may be at risk.",

            getHelp: "Get Help →",

            learnTitle: "🎓 Learn Cybersecurity",
            learnText:
                "Learn simple habits that can make your digital life safer.",
            learnButton: "Start Learning →",

            toolsTitle: "🛠️ CyberCare Tools",
            toolsText:
                "Simple tools to improve your digital safety.",

            scamChecker: "Scam Checker",
            scamCheckerText:
                "Check a suspicious message for common scam and phishing warning signs.",

            passwordChecker: "Password Checker",
            passwordCheckerText:
                "Check password strength locally and learn how to make your password safer.",

            privacyChecker: "Privacy Checklist",
            privacyCheckerText:
                "Review important privacy and security settings.",

            safetyScore: "Cyber Safety Score",
            safetyScoreText:
                "Check your overall cybersecurity habits.",

            checkMessage: "Check Message",
            checkPassword: "Check Password",
            startChecklist: "Start Checklist",
            checkScore: "Check My Score",

            aboutTitle: "🛡️ About CyberCare",
            aboutText1:
                "CyberCare provides simple, practical cybersecurity guidance to help people respond to common digital safety problems.",
            aboutText2:
                "Stay alert. Protect your accounts. Never share passwords, OTPs or recovery codes.",

            footerText: "Stay Safe. Stay Secure."
        },


        BN: {
            logo: "সাইবারকেয়ার",

            heroTitle: "সাইবারকেয়ার",
            heroSubtitle:
                "মানুষকে সুরক্ষিত রাখা। ডিজিটাল জীবনকে নিরাপদ রাখা।",

            heroText:
                "হ্যাক হওয়া অ্যাকাউন্ট, স্ক্যাম, প্রতারণা, প্রাইভেসি সমস্যা এবং বিভিন্ন ডিজিটাল হুমকির ক্ষেত্রে সহজ ও ব্যবহারিক সাইবার নিরাপত্তা সহায়তা।",

            emergency: "🚨 আমার এখনই সাহায্য দরকার",

            servicesTitle:
                "আমরা কীভাবে সাহায্য করতে পারি?",

            servicesText:
                "আপনার সমস্যাটি নির্বাচন করুন এবং ধাপে ধাপে নির্দেশনা পান।",

            accountTitle: "অ্যাকাউন্ট পুনরুদ্ধার",

            accountText:
                "হ্যাক বা ঝুঁকিতে পড়া সোশ্যাল মিডিয়া ও অনলাইন অ্যাকাউন্ট পুনরুদ্ধার এবং নিরাপদ করুন।",

            scamTitle: "স্ক্যাম ও ফিশিং",

            scamText:
                "সন্দেহজনক মেসেজ, WhatsApp লিংক, ভুয়া ওয়েবসাইট এবং OTP স্ক্যাম সম্পর্কে সাহায্য নিন।",

            phoneTitle: "ফোন নিরাপত্তা",

            phoneText:
                "অজানা অ্যাপ, permission, location, camera এবং microphone access পরীক্ষা করুন।",

            fraudTitle: "অনলাইন প্রতারণা",

            fraudText:
                "টাকা, UPI, ব্যাংক বা payment information জড়িত থাকলে কী করবেন তা জানুন।",

            suspiciousTitle: "সন্দেহজনক কার্যকলাপ",

            suspiciousText:
                "সন্দেহজনক লিংক, malware, fake login page এবং অস্বাভাবিক activity সম্পর্কে জানুন।",

            emergencyTitle: "জরুরি সাহায্য",

            emergencyText:
                "আপনার account, device অথবা টাকা ঝুঁকিতে থাকলে তাৎক্ষণিক নিরাপত্তা পদক্ষেপ নিন।",

            getHelp: "সাহায্য নিন →",

            learnTitle: "🎓 সাইবার নিরাপত্তা শিখুন",

            learnText:
                "সহজ কিছু অভ্যাস শিখুন যা আপনার ডিজিটাল জীবনকে আরও নিরাপদ করতে পারে।",

            learnButton: "শেখা শুরু করুন →",

            toolsTitle: "🛠️ CyberCare Tools",

            toolsText:
                "আপনার ডিজিটাল নিরাপত্তা বাড়ানোর জন্য সহজ কিছু tools।",

            scamChecker: "স্ক্যাম চেকার",

            scamCheckerText:
                "সন্দেহজনক মেসেজে স্ক্যাম বা ফিশিং-এর সাধারণ লক্ষণ আছে কিনা দেখুন।",

            passwordChecker: "পাসওয়ার্ড চেকার",

            passwordCheckerText:
                "আপনার password-এর strength locally পরীক্ষা করুন।",

            privacyChecker: "প্রাইভেসি চেকলিস্ট",

            privacyCheckerText:
                "গুরুত্বপূর্ণ privacy ও security settings পরীক্ষা করুন।",

            safetyScore: "সাইবার সেফটি স্কোর",

            safetyScoreText:
                "আপনার সামগ্রিক cybersecurity অভ্যাস পরীক্ষা করুন।",

            checkMessage: "মেসেজ পরীক্ষা করুন",
            checkPassword: "পাসওয়ার্ড পরীক্ষা করুন",
            startChecklist: "চেকলিস্ট শুরু করুন",
            checkScore: "আমার স্কোর দেখুন",

            aboutTitle: "🛡️ CyberCare সম্পর্কে",

            aboutText1:
                "CyberCare সাধারণ ডিজিটাল নিরাপত্তা সমস্যার ক্ষেত্রে মানুষকে সহজ ও ব্যবহারিক cybersecurity guidance প্রদান করে।",

            aboutText2:
                "সতর্ক থাকুন। আপনার account সুরক্ষিত রাখুন। কখনো password, OTP বা recovery code কারও সঙ্গে share করবেন না।",

            footerText:
                "নিরাপদ থাকুন। সুরক্ষিত থাকুন।"
        }

    };


    /* =========================
       2. APPLY LANGUAGE
    ========================== */

    function applyLanguage() {

        const t = translations[currentLanguage];

        if (!t) return;

        const logo =
            document.querySelector(".logo span");

        if (logo)
            logo.textContent = t.logo;


        const heroH1 =
            document.querySelector(".hero h1");

        const heroH2 =
            document.querySelector(".hero h2");

        const heroP =
            document.querySelector(".hero p");

        const emergencyBtn =
            document.getElementById("emergencyBtn");

        if (heroH1)
            heroH1.textContent = t.heroTitle;

        if (heroH2)
            heroH2.textContent = t.heroSubtitle;

        if (heroP)
            heroP.textContent = t.heroText;

        if (emergencyBtn)
            emergencyBtn.textContent = t.emergency;


        const services =
            document.querySelector(".services");

        if (services) {

            const h2 =
                services.querySelector("h2");

            const p =
                services.querySelector(".section-text");

            if (h2)
                h2.textContent = t.servicesTitle;

            if (p)
                p.textContent = t.servicesText;

        }


        const serviceCards =
            document.querySelectorAll(".service-card");

        const serviceData = [

            [t.accountTitle, t.accountText],
            [t.scamTitle, t.scamText],
            [t.phoneTitle, t.phoneText],
            [t.fraudTitle, t.fraudText],
            [t.suspiciousTitle, t.suspiciousText],
            [t.emergencyTitle, t.emergencyText]

        ];

        serviceCards.forEach(function (card, index) {

            const h3 = card.querySelector("h3");
            const p = card.querySelector("p");
            const btn = card.querySelector(".help-btn");

            if (serviceData[index]) {

                if (h3)
                    h3.textContent = serviceData[index][0];

                if (p)
                    p.textContent = serviceData[index][1];

            }

            if (btn)
                btn.textContent = t.getHelp;

        });


        const learn =
            document.getElementById("learn");

        if (learn) {

            const h2 = learn.querySelector("h2");
            const p = learn.querySelector("p");
            const btn = learn.querySelector("button");

            if (h2)
                h2.textContent = t.learnTitle;

            if (p)
                p.textContent = t.learnText;

            if (btn)
                btn.textContent = t.learnButton;

        }


        const tools =
            document.getElementById("tools");

        if (tools) {

            const h2 =
                tools.querySelector("h2");

            const p =
                tools.querySelector(".section-text");

            if (h2)
                h2.textContent = t.toolsTitle;

            if (p)
                p.textContent = t.toolsText;


            const toolCards =
                tools.querySelectorAll(".tool-card");

            const toolData = [

                [t.scamChecker, t.scamCheckerText],
                [t.passwordChecker, t.passwordCheckerText],
                [t.privacyChecker, t.privacyCheckerText],
                [t.safetyScore, t.safetyScoreText]

            ];

            toolCards.forEach(function (card, index) {

                const h3 = card.querySelector("h3");
                const p = card.querySelector("p");
                const btn = card.querySelector(".tool-btn");

                if (toolData[index]) {

                    if (h3)
                        h3.textContent = toolData[index][0];

                    if (p)
                        p.textContent = toolData[index][1];

                }

                if (btn) {

                    const buttons = [
                        t.checkMessage,
                        t.checkPassword,
                        t.startChecklist,
                        t.checkScore
                    ];

                    btn.textContent = buttons[index];

                }

            });

        }


        const about =
            document.getElementById("about");

        if (about) {

            const h2 =
                about.querySelector("h2");

            const paragraphs =
                about.querySelectorAll("p");

            if (h2)
                h2.textContent = t.aboutTitle;

            if (paragraphs[0])
                paragraphs[0].textContent = t.aboutText1;

            if (paragraphs[1])
                paragraphs[1].textContent = t.aboutText2;

        }


        const footer =
            document.querySelector("footer");

        if (footer) {

            const paragraphs =
                footer.querySelectorAll("p");

            if (paragraphs[0])
                paragraphs[0].textContent = t.footerText;

        }


        if (languageText)
            languageText.textContent = currentLanguage;


        localStorage.setItem(
            "cybercare-language",
            currentLanguage
        );

    }


    if (languageBtn) {

        languageBtn.addEventListener(
            "click",
            function () {

                currentLanguage =
                    currentLanguage === "EN"
                        ? "BN"
                        : "EN";

                applyLanguage();

            }
        );

    }


    /* =========================
       3. DARK MODE
    ========================== */

    const themeBtn =
        document.getElementById("themeBtn");

    const savedTheme =
        localStorage.getItem("cybercare-theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (themeBtn)
            themeBtn.textContent = "☀️";

    }


    if (themeBtn) {

        themeBtn.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "dark-mode"
                );

                const dark =
                    document.body.classList.contains(
                        "dark-mode"
                    );

                themeBtn.textContent =
                    dark ? "☀️" : "🌙";

                localStorage.setItem(
                    "cybercare-theme",
                    dark ? "dark" : "light"
                );

            }
        );

    }


    /* =========================
       4. SIDE MENU
    ========================== */

    const menuBtn =
        document.getElementById("menuBtn");

    const sideMenu =
        document.getElementById("sideMenu");

    const closeMenu =
        document.getElementById("closeMenu");

    const menuOverlay =
        document.getElementById("menuOverlay");


    function openMenu() {

        if (sideMenu)
            sideMenu.classList.add("active");

        if (menuOverlay)
            menuOverlay.classList.add("active");

        document.body.style.overflow = "hidden";

    }


    function closeSideMenu() {

        if (sideMenu)
            sideMenu.classList.remove("active");

        if (menuOverlay)
            menuOverlay.classList.remove("active");

        document.body.style.overflow = "";

    }


    if (menuBtn)
        menuBtn.addEventListener("click", openMenu);

    if (closeMenu)
        closeMenu.addEventListener(
            "click",
            closeSideMenu
        );

    if (menuOverlay)
        menuOverlay.addEventListener(
            "click",
            closeSideMenu
        );


    document.querySelectorAll(".menu-item")
        .forEach(function (item) {

            item.addEventListener(
                "click",
                function () {

                    const target =
                        item.getAttribute("data-menu");

                    closeSideMenu();

                    const section =
                        document.getElementById(target);

                    if (target === "emergency") {

                        openEmergencyTool();

                        return;

                    }

                    if (section) {

                        setTimeout(function () {

                            section.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }, 200);

                    }

                }
            );

        });


    /* =========================
       5. TOOL MODAL
    ========================== */

    function createModal(title, content) {

        const old =
            document.getElementById(
                "cybercare-tool-modal"
            );

        if (old)
            old.remove();


        const overlay =
            document.createElement("div");

        overlay.id =
            "cybercare-tool-modal";

        overlay.style.cssText = `
            position:fixed;
            inset:0;
            z-index:99999;
            background:rgba(0,0,0,0.75);
            display:flex;
            align-items:center;
            justify-content:center;
            padding:18px;
            overflow-y:auto;
        `;


        const modal =
            document.createElement("div");

        modal.style.cssText = `
            width:100%;
            max-width:650px;
            max-height:90vh;
            overflow-y:auto;
            background:#ffffff;
            color:#111827;
            border-radius:22px;
            padding:25px;
            position:relative;
            box-shadow:0 25px 70px rgba(0,0,0,0.45);
        `;


        modal.innerHTML = `

            <button
                id="toolModalClose"
                type="button"
                style="
                    position:absolute;
                    right:14px;
                    top:14px;
                    width:38px;
                    height:38px;
                    border:none;
                    border-radius:10px;
                    background:#f1f5f9;
                    font-size:20px;
                    cursor:pointer;
                "
            >
                ✕
            </button>

            <div style="padding-right:45px;">

                <h2 style="margin-top:0;">
                    ${title}
                </h2>

            </div>

            <div id="toolModalContent">
                ${content}
            </div>

        `;


        overlay.appendChild(modal);
        document.body.appendChild(overlay);


        document
            .getElementById("toolModalClose")
            .addEventListener(
                "click",
                function () {
                    overlay.remove();
                }
            );


        overlay.addEventListener(
            "click",
            function (event) {

                if (event.target === overlay)
                    overlay.remove();

            }
        );


        return modal;

    }


    /* =========================
       6. SCAM CHECKER
    ========================== */

    function openScamChecker() {

        const title =
            currentLanguage === "BN"
                ? "🔎 স্ক্যাম চেকার"
                : "🔎 Scam Checker";


        const content =
            currentLanguage === "BN"

                ? `
                    <p>
                        সন্দেহজনক message এখানে paste করুন।
                        CyberCare কিছু সাধারণ scam warning sign
                        পরীক্ষা করবে।
                    </p>

                    <textarea
                        id="scamInput"
                        placeholder="মেসেজ এখানে paste করুন..."
                        style="
                            width:100%;
                            min-height:150px;
                            padding:14px;
                            border:1px solid #cbd5e1;
                            border-radius:12px;
                            resize:vertical;
                            box-sizing:border-box;
                        "
                    ></textarea>

                    <button
                        id="scamAnalyze"
                        style="
                            margin-top:12px;
                            width:100%;
                            padding:13px;
                            border:none;
                            border-radius:11px;
                            background:#2563eb;
                            color:white;
                            font-weight:bold;
                            cursor:pointer;
                        "
                    >
                        মেসেজ পরীক্ষা করুন
                    </button>

                    <div
                        id="scamResult"
                        style="margin-top:18px;"
                    ></div>
                `

                : `
                    <p>
                        Paste a suspicious message below.
                        CyberCare will check for common scam
                        warning signs.
                    </p>

                    <textarea
                        id="scamInput"
                        placeholder="Paste the message here..."
                        style="
                            width:100%;
                            min-height:150px;
                            padding:14px;
                            border:1px solid #cbd5e1;
                            border-radius:12px;
                            resize:vertical;
                            box-sizing:border-box;
                        "
                    ></textarea>

                    <button
                        id="scamAnalyze"
                        style="
                            margin-top:12px;
                            width:100%;
                            padding:13px;
                            border:none;
                            border-radius:11px;
                            background:#2563eb;
                            color:white;
                            font-weight:bold;
                            cursor:pointer;
                        "
                    >
                        Check Message
                    </button>

                    <div
                        id="scamResult"
                        style="margin-top:18px;"
                    ></div>
                `;


        const modal =
            createModal(title, content);


        modal
            .querySelector("#scamAnalyze")
            .addEventListener(
                "click",
                function () {

                    const text =
                        modal.querySelector(
                            "#scamInput"
                        ).value.trim();


                    if (!text) {

                        modal.querySelector(
                            "#scamResult"
                        ).innerHTML =
                            currentLanguage === "BN"
                                ? "<p>⚠️ আগে একটি message দিন।</p>"
                                : "<p>⚠️ Please enter a message first.</p>";

                        return;

                    }


                    const lower =
                        text.toLowerCase();


                    const warningWords = [

                        "otp",
                        "verify",
                        "verification",
                        "password",
                        "urgent",
                        "immediately",
                        "click",
                        "link",
                        "winner",
                        "prize",
                        "refund",
                        "bank",
                        "upi",
                        "payment",
                        "account blocked",
                        "account suspended",
                        "claim",
                        "crypto",
                        "investment"

                    ];


                    const found =
                        warningWords.filter(
                            word =>
                                lower.includes(word)
                        );


                    let risk =
                        "Low";


                    if (found.length >= 4)
                        risk = "High";

                    else if (found.length >= 2)
                        risk = "Medium";


                    const result =
                        modal.querySelector(
                            "#scamResult"
                        );


                    if (currentLanguage === "BN") {

                        result.innerHTML = `

                            <div style="
                                padding:16px;
                                border-radius:14px;
                                background:#f8fafc;
                                border:1px solid #e2e8f0;
                            ">

                                <h3>
                                    ফলাফল: ${risk === "High"
                                        ? "🔴 উচ্চ ঝুঁকি"
                                        : risk === "Medium"
                                            ? "🟠 মাঝারি ঝুঁকি"
                                            : "🟢 কম ঝুঁকি"}
                                </h3>

                                <p>
                                    ${found.length
                                        ? "যে warning sign পাওয়া গেছে: " +
                                          found.join(", ")
                                        : "কোনও সাধারণ warning keyword পাওয়া যায়নি।"}
                                </p>

                                <p>
                                    ⚠️ এই checker কোনও message-কে
                                    নিশ্চিতভাবে safe বা scam বলে না।
                                    সন্দেহ থাকলে link-এ click করবেন না
                                    এবং official website/app দিয়ে
                                    তথ্য যাচাই করুন।
                                </p>

                            </div>

                        `;

                    } else {

                        result.innerHTML = `

                            <div style="
                                padding:16px;
                                border-radius:14px;
                                background:#f8fafc;
                                border:1px solid #e2e8f0;
                            ">

                                <h3>
                                    Result:
                                    ${
                                        risk === "High"
                                            ? "🔴 High Risk"
                                            : risk === "Medium"
                                                ? "🟠 Medium Risk"
                                                : "🟢 Lower Risk"
                                    }
                                </h3>

                                <p>
                                    ${
                                        found.length
                                            ? "Warning signs found: " +
                                              found.join(", ")
                                            : "No common warning keywords were detected."
                                    }
                                </p>

                                <p>
                                    ⚠️ This checker cannot confirm that
                                    a message is safe or fraudulent.
                                    If you are unsure, do not click links
                                    and verify the request through the
                                    official website or app.
                                </p>

                            </div>

                        `;

                    }

                }
            );

    }


    /* =========================
       7. PASSWORD CHECKER
    ========================== */

    function openPasswordChecker() {

        const title =
            currentLanguage === "BN"
                ? "🔐 পাসওয়ার্ড চেকার"
                : "🔐 Password Checker";


        const content =
            currentLanguage === "BN"

                ? `
                    <p>
                        Password নিচে লিখুন। এটি শুধু আপনার browser-এ
                        পরীক্ষা করা হবে এবং CyberCare কোথাও পাঠাবে না।
                    </p>

                    <input
                        id="passwordInput"
                        type="password"
                        autocomplete="off"
                        placeholder="Password লিখুন..."
                        style="
                            width:100%;
                            padding:13px;
                            border:1px solid #cbd5e1;
                            border-radius:11px;
                            box-sizing:border-box;
                        "
                    >

                    <button
                        id="passwordAnalyze"
                        style="
                            margin-top:12px;
                            width:100%;
                            padding:13px;
                            border:none;
                            border-radius:11px;
                            background:#2563eb;
                            color:#ffffff;
                            font-weight:bold;
                            cursor:pointer;
                        "
                    >
                        Password পরীক্ষা করুন
                    </button>

                    <div
                        id="passwordResult"
                        style="margin-top:18px;"
                    ></div>
                `

                : `
                    <p>
                        Enter a password below. It is checked only
                        in your browser and is not sent or saved by CyberCare.
                    </p>

                    <input
                        id="passwordInput"
                        type="password"
                        autocomplete="off"
                        placeholder="Enter password..."
                        style="
                            width:100%;
                            padding:13px;
                            border:1px solid #cbd5e1;
                            border-radius:11px;
                            box-sizing:border-box;
                        "
                    >

                    <button
                        id="passwordAnalyze"
                        style="
                            margin-top:12px;
                            width:100%;
                            padding:13px;
                            border:none;
                            border-radius:11px;
                            background:#2563eb;
                            color:#ffffff;
                            font-weight:bold;
                            cursor:pointer;
                        "
                    >
                        Check Password
                    </button>

                    <div
                        id="passwordResult"
                        style="margin-top:18px;"
                    ></div>
                `;


        const modal =
            createModal(title, content);


        modal
            .querySelector("#passwordAnalyze")
            .addEventListener(
                "click",
                function () {

                    const password =
                        modal.querySelector(
                            "#passwordInput"
                        ).value;


                    if (!password) {

                        modal.querySelector(
                            "#passwordResult"
                        ).innerHTML =
                            currentLanguage === "BN"
                                ? "<p>⚠️ Password দিন।</p>"
                                : "<p>⚠️ Enter a password.</p>";

                        return;

                    }


                    let score = 0;


                    if (password.length >= 8)
                        score++;

                    if (password.length >= 12)
                        score++;

                    if (/[A-Z]/.test(password))
                        score++;

                    if (/[a-z]/.test(password))
                        score++;

                    if (/[0-9]/.test(password))
                        score++;

                    if (/[^A-Za-z0-9]/.test(password))
                        score++;


                    let level;


                    if (score <= 2)
                        level =
                            currentLanguage === "BN"
                                ? "🔴 দুর্বল"
                                : "🔴 Weak";

                    else if (score <= 4)
                        level =
                            currentLanguage === "BN"
                                ? "🟠 মাঝারি"
                                : "🟠 Moderate";

                    else
                        level =
                            currentLanguage === "BN"
                                ? "🟢 শক্তিশালী"
                                : "🟢 Strong";


                    const tips =
                        currentLanguage === "BN"

                            ? `
                                <ul>
                                    <li>কমপক্ষে 12 characters ব্যবহার করুন।</li>
                                    <li>বড় ও ছোট হাতের অক্ষর ব্যবহার করুন।</li>
                                    <li>সংখ্যা ও symbol ব্যবহার করুন।</li>
                                    <li>একই password একাধিক account-এ ব্যবহার করবেন না।</li>
                                    <li>সম্ভব হলে password manager ব্যবহার করুন।</li>
                                </ul>
                            `

                            : `
                                <ul>
                                    <li>Use at least 12 characters.</li>
                                    <li>Use uppercase and lowercase letters.</li>
                                    <li>Include numbers and symbols.</li>
                                    <li>Do not reuse the same password across accounts.</li>
                                    <li>Consider using a password manager.</li>
                                </ul>
                            `;


                    modal.querySelector(
                        "#passwordResult"
                    ).innerHTML = `

                        <div style="
                            padding:16px;
                            border-radius:14px;
                            background:#f8fafc;
                            border:1px solid #e2e8f0;
                        ">

                            <h3>
                                ${
                                    currentLanguage === "BN"
                                        ? "Strength: "
                                        : "Strength: "
                                }

                                ${level}
                            </h3>

                            <p>
                                ${
                                    currentLanguage === "BN"
                                        ? "ভালো password-এর সঙ্গে ব্যক্তিগত তথ্য, নাম, জন্মতারিখ বা সহজ অনুমানযোগ্য শব্দ ব্যবহার করা উচিত নয়।"
                                        : "Avoid personal information, names, birthdays and easily guessed words."
                                }
                            </p>

                            ${tips}

                        </div>

                    `;

                }
            );

    }


    /* =========================
       8. PRIVACY CHECKLIST
    ========================== */

    function openPrivacyChecklist() {

        const title =
            currentLanguage === "BN"
                ? "📱 প্রাইভেসি চেকলিস্ট"
                : "📱 Privacy Checklist";


        const items =
            currentLanguage === "BN"

                ? [
                    "আমি গুরুত্বপূর্ণ account-এ 2FA চালু করেছি।",
                    "আমি আমার social media privacy settings পরীক্ষা করেছি।",
                    "আমি অপ্রয়োজনীয় app permissions বন্ধ করেছি।",
                    "আমি আমার recovery email ও phone number পরীক্ষা করেছি।",
                    "আমি unknown logged-in devices সরিয়েছি।",
                    "আমি public profile-এ অতিরিক্ত personal information রাখি না।",
                    "আমি সন্দেহজনক link-এ click করি না।",
                    "আমি গুরুত্বপূর্ণ account-গুলোর জন্য আলাদা password ব্যবহার করি।"
                ]

                : [
                    "I have enabled 2FA on important accounts.",
                    "I have reviewed my social media privacy settings.",
                    "I have removed unnecessary app permissions.",
                    "I have checked my recovery email and phone number.",
                    "I have removed unknown logged-in devices.",
                    "I do not expose unnecessary personal information publicly.",
                    "I avoid clicking suspicious links.",
                    "I use different passwords for important accounts."
                ];


        let html = `
            <p>
                ${
                    currentLanguage === "BN"
                        ? "প্রতিটি বিষয় সম্পন্ন হলে check করুন।"
                        : "Check each item after reviewing it."
                }
            </p>
        `;


        items.forEach(function (item, index) {

            html += `

                <label style="
                    display:flex;
                    gap:12px;
                    align-items:flex-start;
                    padding:13px;
                    margin:7px 0;
                    background:#f8fafc;
                    border-radius:11px;
                    cursor:pointer;
                ">

                    <input
                        type="checkbox"
                        class="privacy-check"
                        data-index="${index}"
                        style="margin-top:5px;"
                    >

                    <span>
                        ${item}
                    </span>

                </label>

            `;

        });


        html += `

            <div
                id="privacyResult"
                style="margin-top:18px;"
            ></div>

        `;


        const modal =
            createModal(title, html);


        function updatePrivacyResult() {

            const checks =
                modal.querySelectorAll(
                    ".privacy-check"
                );


            let completed = 0;


            checks.forEach(function (check) {

                if (check.checked)
                    completed++;

            });


            const total = checks.length;


            const percentage =
                Math.round(
                    (completed / total) * 100
                );


            modal.querySelector(
                "#privacyResult"
            ).innerHTML = `

                <div style="
                    padding:15px;
                    background:#eff6ff;
                    border-radius:13px;
                ">

                    <strong>
                        ${
                            currentLanguage === "BN"
                                ? "অগ্রগতি: "
                                : "Progress: "
                        }

                        ${percentage}%
                    </strong>

                    <p style="margin-bottom:0;">
                        ${completed} / ${total}
                    </p>

                </div>

            `;

        }


        modal
            .querySelectorAll(".privacy-check")
            .forEach(function (check) {

                check.addEventListener(
                    "change",
                    updatePrivacyResult
                );

            });


        updatePrivacyResult();

    }


    /* =========================
       9. CYBER SAFETY SCORE
    ========================== */

    function openSafetyScore() {

        const title =
            currentLanguage === "BN"
                ? "🛡️ সাইবার সেফটি স্কোর"
                : "🛡️ Cyber Safety Score";


        const questions =
            currentLanguage === "BN"

                ? [
                    "আমি গুরুত্বপূর্ণ account-এ 2FA ব্যবহার করি।",
                    "আমি প্রতিটি গুরুত্বপূর্ণ account-এ আলাদা password ব্যবহার করি।",
                    "আমি OTP, password বা recovery code কারও সঙ্গে share করি না।",
                    "আমি সন্দেহজনক link যাচাই না করে click করি না।",
                    "আমি account-এর login activity নিয়মিত দেখি।",
                    "আমি phone ও apps update রাখি।",
                    "আমি গুরুত্বপূর্ণ data-এর backup রাখি।",
                    "আমি social media privacy settings পরীক্ষা করি।",
                    "আমি online payment করার সময় সতর্ক থাকি।",
                    "আমি সন্দেহজনক message/report/block করতে জানি।"
                ]

                : [
                    "I use 2FA on important accounts.",
                    "I use different passwords for important accounts.",
                    "I never share OTPs, passwords or recovery codes.",
                    "I do not click suspicious links without verifying them.",
                    "I review account login activity.",
                    "I keep my phone and apps updated.",
                    "I maintain backups of important data.",
                    "I review social media privacy settings.",
                    "I stay careful when making online payments.",
                    "I know how to report and block suspicious messages."
                ];


        let html = "";


        questions.forEach(function (question, index) {

            html += `

                <label style="
                    display:flex;
                    gap:12px;
                    align-items:flex-start;
                    padding:13px;
                    margin:7px 0;
                    background:#f8fafc;
                    border-radius:11px;
                    cursor:pointer;
                ">

                    <input
                        type="checkbox"
                        class="score-check"
                        data-index="${index}"
                        style="margin-top:5px;"
                    >

                    <span>
                        ${question}
                    </span>

                </label>

            `;

        });


        html += `

            <button
                id="calculateScore"
                type="button"
                style="
                    width:100%;
                    margin-top:15px;
                    padding:13px;
                    border:none;
                    border-radius:11px;
                    background:#2563eb;
                    color:#ffffff;
                    font-weight:bold;
                    cursor:pointer;
                "
            >
                ${
                    currentLanguage === "BN"
                        ? "স্কোর দেখুন"
                        : "Calculate Score"
                }
            </button>

            <div
                id="scoreResult"
                style="margin-top:18px;"
            ></div>

        `;


        const modal =
            createModal(title, html);


        modal
            .querySelector("#calculateScore")
            .addEventListener(
                "click",
                function () {

                    const checks =
                        modal.querySelectorAll(
                            ".score-check"
                        );


                    let completed = 0;


                    checks.forEach(function (check) {

                        if (check.checked)
                            completed++;

                    });


                    const total =
                        checks.length;


                    const score =
                        Math.round(
                            (completed / total) * 100
                        );


                    let message;


                    if (score >= 80) {

                        message =
                            currentLanguage === "BN"
                                ? "🟢 আপনার cybersecurity habits ভালো। নিয়মিত review চালিয়ে যান।"
                                : "🟢 Your cybersecurity habits look good. Keep reviewing them regularly.";

                    }

                    else if (score >= 50) {

                        message =
                            currentLanguage === "BN"
                                ? "🟠 আপনার security আরও উন্নত করা দরকার।"
                                : "🟠 Your security habits could be improved.";

                    }

                    else {

                        message =
                            currentLanguage === "BN"
                                ? "🔴 আপনার cybersecurity habits আরও শক্ত করা জরুরি।"
                                : "🔴 Your cybersecurity habits need significant improvement.";

                    }


                    modal.querySelector(
                        "#scoreResult"
                    ).innerHTML = `

                        <div style="
                            padding:18px;
                            background:#eff6ff;
                            border-radius:15px;
                            text-align:center;
                        ">

                            <div style="
                                font-size:42px;
                                font-weight:bold;
                            ">
                                ${score}%
                            </div>

                            <h3>
                                ${
                                    currentLanguage === "BN"
                                        ? "Cyber Safety Score"
                                        : "Cyber Safety Score"
                                }
                            </h3>

                            <p>
                                ${message}
                            </p>

                        </div>

                    `;

                }
            );

    }


    /* =========================
       10. TOOL BUTTONS
    ========================== */

    document
        .querySelectorAll(".tool-open-btn")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const tool =
                        button.getAttribute(
                            "data-tool"
                        );


                    if (tool === "scam")
                        openScamChecker();

                    else if (tool === "password")
                        openPasswordChecker();

                    else if (tool === "privacy")
                        openPrivacyChecklist();

                    else if (tool === "score")
                        openSafetyScore();

                }
            );

        });


    /* =========================
       11. EMERGENCY
    ========================== */

    function openEmergencyTool() {

        const title =
            currentLanguage === "BN"
                ? "🚨 জরুরি সাইবার সাহায্য"
                : "🚨 Emergency Cyber Help";


        const content =
            currentLanguage === "BN"

                ? `
                    <div style="
                        padding:16px;
                        background:#fff1f2;
                        border-radius:14px;
                    ">

                        <h3>যদি এখনই ঝুঁকি থাকে</h3>

                        <ol>
                            <li>আপনার account password পরিবর্তন করুন।</li>
                            <li>Unknown devices logout করুন।</li>
                            <li>2FA চালু করুন।</li>
                            <li>Bank/payment account ঝুঁকিতে থাকলে provider-এর সঙ্গে দ্রুত যোগাযোগ করুন।</li>
                            <li>Screenshot, message, transaction ID এবং অন্যান্য evidence সংরক্ষণ করুন।</li>
                            <li>সন্দেহজনক ব্যক্তিকে OTP বা recovery code দেবেন না।</li>
                        </ol>

                    </div>
                `

                : `
                    <div style="
                        padding:16px;
                        background:#fff1f2;
                        border-radius:14px;
                    ">

                        <h3>If you may be at immediate cyber risk</h3>

                        <ol>
                            <li>Change the affected account password.</li>
                            <li>Sign out unknown devices.</li>
                            <li>Enable 2FA.</li>
                            <li>Contact your bank/payment provider quickly if money is at risk.</li>
                            <li>Save screenshots, messages, transaction IDs and other useful evidence.</li>
                            <li>Never give OTPs or recovery codes to the suspected attacker.</li>
                        </ol>

                    </div>
                `;


        createModal(title, content);

    }


    const emergencyButton =
        document.getElementById("emergencyBtn");


    if (emergencyButton) {

        emergencyButton.addEventListener(
            "click",
            openEmergencyTool
        );

    }


    /* =========================
       12. LEARN
    ========================== */

    const learnBtn =
        document.getElementById("learnBtn");


    if (learnBtn) {

        learnBtn.addEventListener(
            "click",
            function () {

                const title =
                    currentLanguage === "BN"
                        ? "🎓 সাইবার নিরাপত্তা শেখা"
                        : "🎓 Learn Cybersecurity";


                const content =
                    currentLanguage === "BN"

                        ? `
                            <h3>শুরু করার জন্য ৭টি গুরুত্বপূর্ণ অভ্যাস</h3>

                            <ol>
                                <li>প্রতিটি গুরুত্বপূর্ণ account-এ 2FA ব্যবহার করুন।</li>
                                <li>একই password একাধিক জায়গায় ব্যবহার করবেন না।</li>
                                <li>OTP ও recovery code কাউকে দেবেন না।</li>
                                <li>সন্দেহজনক link-এ click করার আগে যাচাই করুন।</li>
                                <li>Phone ও apps update রাখুন।</li>
                                <li>Social media privacy settings পরীক্ষা করুন।</li>
                                <li>গুরুত্বপূর্ণ data-এর backup রাখুন।</li>
                            </ol>
                        `

                        : `
                            <h3>7 important habits to start with</h3>

                            <ol>
                                <li>Use 2FA on important accounts.</li>
                                <li>Do not reuse passwords across accounts.</li>
                                <li>Never share OTPs or recovery codes.</li>
                                <li>Verify suspicious links before opening them.</li>
                                <li>Keep your phone and apps updated.</li>
                                <li>Review social media privacy settings.</li>
                                <li>Keep backups of important data.</li>
                            </ol>
                        `;


                createModal(title, content);

            }
        );

    }


    /* =========================
       13. STARTUP
    ========================== */

    applyLanguage();

    console.log(
        "🛡️ CyberCare loaded successfully."
    );

});
