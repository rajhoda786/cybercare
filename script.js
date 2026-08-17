const $ = s => document.querySelector(s);


/* =========================================================
   CYBERCARE PROBLEM DATABASE
========================================================= */

const problems = {

    facebook:
        "Facebook লগইন বা হ্যাক সমস্যা হলে প্রথমে password পরিবর্তন করুন, Login Sessions চেক করুন এবং 2FA চালু করুন।",

    whatsapp:
        "WhatsApp সমস্যা হলে নম্বর, SMS/OTP, internet connection এবং Linked Devices চেক করুন।",

    otp:
        "OTP না এলে network signal, SMS inbox, blocked numbers এবং SIM status চেক করুন। কিছুক্ষণ পরে আবার চেষ্টা করুন।",

    phone:
        "ফোন গরম হলে background apps বন্ধ করুন, charger/cable পরীক্ষা করুন, battery usage দেখুন এবং software update চেক করুন।",

    upi:
        "UPI সমস্যা হলে transaction status, bank balance, UPI PIN এবং সংশ্লিষ্ট bank/app support চেক করুন।",

    hack:
        "অ্যাকাউন্ট হ্যাক সন্দেহ হলে সঙ্গে সঙ্গে password পরিবর্তন করুন, অন্য সব sessions logout করুন এবং 2FA চালু করুন।"
};


/* =========================================================
   FIND PROBLEM
========================================================= */

function findProblem(q){

    q = q.toLowerCase();

    if(
        q.includes("facebook") ||
        q.includes("ফেসবুক")
    ){
        return problems.facebook;
    }

    if(
        q.includes("whatsapp") ||
        q.includes("হোয়াটসঅ্যাপ") ||
        q.includes("হোয়াটসঅ্যাপ")
    ){
        return problems.whatsapp;
    }

    if(
        q.includes("otp") ||
        q.includes("ওটিপি")
    ){
        return problems.otp;
    }

    if(
        q.includes("গরম") ||
        q.includes("overheat") ||
        q.includes("battery") ||
        q.includes("ব্যাটারি")
    ){
        return problems.phone;
    }

    if(
        q.includes("upi") ||
        q.includes("bank") ||
        q.includes("ব্যাংক") ||
        q.includes("বাংক")
    ){
        return problems.upi;
    }

    if(
        q.includes("hack") ||
        q.includes("হ্যাক")
    ){
        return problems.hack;
    }

    return `
        সমস্যাটি আরও নির্দিষ্ট করে লিখুন।

        যেমন:
        “OTP আসছে না”
        “Facebook hacked”
        “ফোন গরম হচ্ছে”
        “UPI payment failed”
    `;
}


/* =========================================================
   SEARCH
========================================================= */

const searchForm = $("#searchForm");
const problemInput = $("#problemInput");
const searchResult = $("#searchResult");

if(searchForm){

    searchForm.addEventListener("submit", e => {

        e.preventDefault();

        const q = problemInput.value.trim();

        if(!q){

            searchResult.textContent =
                "একটি সমস্যা লিখে খুঁজুন।";

        }else{

            searchResult.textContent =
                "💡 " + findProblem(q);

        }

        searchResult.style.display = "block";

    });

}


/* =========================================================
   POPULAR SEARCH
========================================================= */

document
.querySelectorAll(".popular button")
.forEach(btn => {

    btn.addEventListener("click", () => {

        if(!problemInput || !searchForm){
            return;
        }

        problemInput.value = btn.textContent.trim();

        searchForm.dispatchEvent(
            new Event("submit")
        );

    });

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = $("#menuBtn");
const mobileMenu = $("#mobileMenu");

if(menuBtn && mobileMenu){

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("show");

    });

}


document
.querySelectorAll("#mobileMenu a")
.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("show");

    });

});


/* =========================================================
   DARK MODE
========================================================= */

const themeBtn = $("#themeBtn");

if(themeBtn){

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const dark =
            document.body.classList.contains("dark");

        themeBtn.textContent =
            dark ? "☀" : "☾";

        localStorage.setItem(
            "cybercare-theme",
            dark ? "dark" : "light"
        );

    });


    const savedTheme =
        localStorage.getItem("cybercare-theme");

    if(savedTheme === "dark"){

        document.body.classList.add("dark");

        themeBtn.textContent = "☀";

    }

}


/* =========================================================
   ACTIONS
========================================================= */

document
.querySelectorAll("[data-action]")
.forEach(btn => {

    btn.addEventListener("click", () => {

        const action =
            btn.dataset.action;


        if(action === "report"){

            window.open(
                "https://cybercrime.gov.in/",
                "_blank"
            );

            return;
        }


        if(action === "emergency"){

            window.location.href =
                "tel:1930";

            return;
        }


        if(action === "scan"){

            alert(
                "🛡️ CyberCare Phone Safety Check\n\n" +
                "এই সেকশনটি আপনার অনুমতি নিয়ে " +
                "সম্ভাব্য নিরাপত্তা checks করার জন্য তৈরি করা হবে।"
            );

            return;
        }


        if(action === "scam"){

            alert(
                "🔎 Scam Check\n\n" +
                "সন্দেহজনক link বা message বিশ্লেষণের " +
                "flow এখানে যুক্ত করা যাবে।"
            );

            return;
        }


        if(action === "facebook"){

            alert(problems.facebook);

            return;
        }


        if(action === "phone"){

            alert(problems.phone);

            return;
        }


        if(action === "otp"){

            alert(problems.otp);

            return;
        }


        if(action === "upi"){

            alert(problems.upi);

            return;
        }


        if(action === "hack"){

            alert(problems.hack);

            return;
        }


        alert(
            "CyberCare Help Center\n\n" +
            "এই sectionটি পরবর্তী A–Z guide ও smart diagnosis module-এর সঙ্গে যুক্ত হবে।"
        );

    });

});
