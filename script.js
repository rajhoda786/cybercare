document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       CYBERCARE LANGUAGE SYSTEM
    ========================== */

    const languageBtn = document.getElementById("languageBtn");
    const languageText = document.getElementById("languageText");

    let currentLanguage =
        localStorage.getItem("cybercare-language") || "EN";


    /* =========================
       TRANSLATIONS
    ========================== */

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
            getHelp: "Get Help →",

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

            learnTitle: "🎓 Learn Cybersecurity",
            learnText:
                "Learn simple habits that can make your digital life safer.",
            learnButton: "Start Learning →",

            toolsTitle: "🛠️ CyberCare Tools",
            toolsText:
                "Simple tools to improve your digital safety.",

            scamChecker: "Scam Checker",
            scamCheckerText:
                "Check suspicious messages for common warning signs.",

            passwordChecker: "Password Checker",
            passwordCheckerText:
                "Learn how to create stronger and safer passwords.",

            privacyChecker: "Privacy Checklist",
            privacyCheckerText:
                "Review important privacy and security settings.",

            safetyScore: "Cyber Safety Score",
            safetyScoreText:
                "Check your overall cybersecurity habits.",

            comingSoon: "Coming Soon",

            aboutTitle: "🛡️ About CyberCare",
            aboutText1:
                "CyberCare provides simple, practical cybersecurity guidance to help people respond to common digital safety problems.",
            aboutText2:
                "Stay alert. Protect your accounts. Never share passwords, OTPs or recovery codes.",

            footerText: "Stay Safe. Stay Secure.",
            copyright:
                "© 2026 CyberCare. Built for a safer digital world."

        },


        BN: {

            logo: "সাইবারকেয়ার",

            heroTitle: "সাইবারকেয়ার",
            heroSubtitle: "মানুষকে সুরক্ষিত রাখা। ডিজিটাল জীবনকে নিরাপদ রাখা।",
            heroText:
                "হ্যাক হওয়া অ্যাকাউন্ট, প্রতারণা, স্ক্যাম, প্রাইভেসি সমস্যা এবং বিভিন্ন ডিজিটাল হুমকির ক্ষেত্রে সহজ ও ব্যবহারিক সাইবার নিরাপত্তা সহায়তা।",
            emergency: "🚨 আমার এখনই সাহায্য দরকার",

            servicesTitle: "আমরা কীভাবে সাহায্য করতে পারি?",
            servicesText:
                "আপনার সমস্যাটি নির্বাচন করুন এবং ধাপে ধাপে নির্দেশনা পান।",

            accountTitle: "অ্যাকাউন্ট পুনরুদ্ধার",
            accountText:
                "হ্যাক বা অন্যভাবে ঝুঁকিতে পড়া সোশ্যাল মিডিয়া ও অনলাইন অ্যাকাউন্ট পুনরুদ্ধার এবং নিরাপদ করুন।",
            getHelp: "সাহায্য নিন →",

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

            learnTitle: "🎓 সাইবার নিরাপত্তা শিখুন",
            learnText:
                "সহজ কিছু অভ্যাস শিখুন যা আপনার ডিজিটাল জীবনকে আরও নিরাপদ করতে পারে।",
            learnButton: "শেখা শুরু করুন →",

            toolsTitle: "🛠️ CyberCare Tools",
            toolsText:
                "আপনার ডিজিটাল নিরাপত্তা বাড়ানোর জন্য সহজ কিছু tools।",

            scamChecker: "স্ক্যাম চেকার",
            scamCheckerText:
                "সন্দেহজনক মেসেজে সাধারণ scam-এর লক্ষণ আছে কিনা দেখুন।",

            passwordChecker: "পাসওয়ার্ড চেকার",
            passwordCheckerText:
                "কীভাবে আরও শক্তিশালী ও নিরাপদ password তৈরি করবেন তা জানুন।",

            privacyChecker: "প্রাইভেসি চেকলিস্ট",
            privacyCheckerText:
                "গুরুত্বপূর্ণ privacy ও security settings পরীক্ষা করুন।",

            safetyScore: "সাইবার সেফটি স্কোর",
            safetyScoreText:
                "আপনার সামগ্রিক cybersecurity অভ্যাস পরীক্ষা করুন।",

            comingSoon: "শীঘ্রই আসছে",

            aboutTitle: "🛡️ CyberCare সম্পর্কে",
            aboutText1:
                "CyberCare সাধারণ ডিজিটাল নিরাপত্তা সমস্যার ক্ষেত্রে মানুষকে সহজ ও ব্যবহারিক cybersecurity guidance প্রদান করে।",
            aboutText2:
                "সতর্ক থাকুন। আপনার account সুরক্ষিত রাখুন। কখনো password, OTP বা recovery code কারও সঙ্গে share করবেন না।",

            footerText: "নিরাপদ থাকুন। সুরক্ষিত থাকুন।",
            copyright:
                "© 2026 CyberCare. একটি নিরাপদ ডিজিটাল বিশ্বের জন্য তৈরি।"

        }

    };


    /* =========================
       APPLY LANGUAGE
    ========================== */

    function applyLanguage() {

        const t = translations[currentLanguage];

        if (!t) return;


        /* LOGO */

        const logo = document.querySelector(".logo span");
        if (logo) logo.textContent = t.logo;


        /* HERO */

        const heroH1 = document.querySelector(".hero h1");
        const heroH2 = document.querySelector(".hero h2");
        const heroP = document.querySelector(".hero p");
        const emergencyBtn =
            document.getElementById("emergencyBtn");

        if (heroH1) heroH1.textContent = t.heroTitle;
        if (heroH2) heroH2.textContent = t.heroSubtitle;
        if (heroP) heroP.textContent = t.heroText;

        if (emergencyBtn)
            emergencyBtn.textContent = t.emergency;


        /* SERVICES */

        const servicesSection =
            document.querySelector(".services");

        if (servicesSection) {

            const h2 =
                servicesSection.querySelector("h2");

            const p =
                servicesSection.querySelector(".section-text");

            if (h2) h2.textContent = t.servicesTitle;
            if (p) p.textContent = t.servicesText;

        }


        /* SERVICE CARDS */

        const cards =
            document.querySelectorAll(".service-card");

        if (cards.length >= 6) {

            const data = [

                [t.accountTitle, t.accountText],
                [t.scamTitle, t.scamText],
                [t.phoneTitle, t.phoneText],
                [t.fraudTitle, t.fraudText],
                [t.suspiciousTitle, t.suspiciousText],
                [t.emergencyTitle, t.emergencyText]

            ];

            cards.forEach(function (card, index) {

                const h3 = card.querySelector("h3");
                const p = card.querySelector("p");
                const btn = card.querySelector(".help-btn");

                if (data[index]) {

                    if (h3)
                        h3.textContent = data[index][0];

                    if (p)
                        p.textContent = data[index][1];

                }

                if (btn)
                    btn.textContent = t.getHelp;

            });

        }


        /* LEARN */

        const learn =
            document.getElementById("learn");

        if (learn) {

            const h2 = learn.querySelector("h2");
            const p = learn.querySelector("p");
            const btn = learn.querySelector("button");

            if (h2) h2.textContent = t.learnTitle;
            if (p) p.textContent = t.learnText;
            if (btn) btn.textContent = t.learnButton;

        }


        /* TOOLS */

        const tools =
            document.getElementById("tools");

        if (tools) {

            const h2 = tools.querySelector("h2");
            const p = tools.querySelector(".section-text");

            if (h2) h2.textContent = t.toolsTitle;
            if (p) p.textContent = t.toolsText;

            const toolCards =
                tools.querySelectorAll(".tool-card");

            if (toolCards.length >= 4) {

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

                    if (btn)
                        btn.textContent = t.comingSoon;

                });

            }

        }


        /* ABOUT */

        const about =
            document.getElementById("about");

        if (about) {

            const h2 = about.querySelector("h2");
            const paragraphs =
                about.querySelectorAll("p");

            if (h2)
                h2.textContent = t.aboutTitle;

            if (paragraphs[0])
                paragraphs[0].textContent = t.aboutText1;

            if (paragraphs[1])
                paragraphs[1].textContent = t.aboutText2;

        }


        /* FOOTER */

        const footer =
            document.querySelector("footer");

        if (footer) {

            const p =
                footer.querySelectorAll("p");

            if (p[0])
                p[0].textContent = t.footerText;

            if (p[1])
                p[1].textContent = t.copyright;

        }


        /* BUTTON */

        if (languageText) {
            languageText.textContent = currentLanguage;
        }


        /* SAVE */

        localStorage.setItem(
            "cybercare-language",
            currentLanguage
        );

    }


    /* =========================
       LANGUAGE BUTTON
    ========================== */

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
       DARK MODE
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

                if (
                    document.body.classList.contains(
                        "dark-mode"
                    )
                ) {

                    themeBtn.textContent = "☀️";

                    localStorage.setItem(
                        "cybercare-theme",
                        "dark"
                    );

                } else {

                    themeBtn.textContent = "🌙";

                    localStorage.setItem(
                        "cybercare-theme",
                        "light"
                    );

                }

            }
        );

    }


    /* =========================
       SIDE MENU
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


    /* =========================
       MENU NAVIGATION
    ========================== */

    document.querySelectorAll(".menu-item")
        .forEach(function (item) {

            item.addEventListener(
                "click",
                function () {

                    const target =
                        item.getAttribute(
                            "data-menu"
                        );

                    closeSideMenu();

                    if (target === "emergency") {

                        alert(
                            currentLanguage === "BN"
                                ? "জরুরি সাহায্য section শীঘ্রই আরও উন্নত করা হবে।"
                                : "Emergency Help will be expanded soon."
                        );

                        return;
                    }

                    const section =
                        document.getElementById(target);

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
       GET HELP
    ========================== */

    document.querySelectorAll(".help-btn")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const service =
                        button.getAttribute(
                            "data-service"
                        );

                    alert(
                        currentLanguage === "BN"
                            ? "এই Help System আমরা পরের ধাপে A–Z করব।"
                            : "The A–Z Help System will be added in the next step."
                    );

                }
            );

        });


    /* =========================
       EMERGENCY
    ========================== */

    if (emergencyBtn) {

        emergencyBtn.addEventListener(
            "click",
            function () {

                alert(
                    currentLanguage === "BN"
                        ? "জরুরি সাহায্য system পরের ধাপে তৈরি করা হবে।"
                        : "Emergency Help system will be built next."
                );

            }
        );

    }


    /* =========================
       LEARN
    ========================== */

    const learnBtn =
        document.getElementById("learnBtn");

    if (learnBtn) {

        learnBtn.addEventListener(
            "click",
            function () {

                alert(
                    currentLanguage === "BN"
                        ? "Cybersecurity Learning section পরের ধাপে তৈরি করা হবে।"
                        : "Cybersecurity Learning section will be built next."
                );

            }
        );

    }


    /* =========================
       STARTUP
    ========================== */

    applyLanguage();

    console.log(
        "🛡️ CyberCare loaded successfully."
    );

});
