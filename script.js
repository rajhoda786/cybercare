const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const guides = {
  facebook: {
    title: "Facebook Login বা Hack সমস্যা",
    text: "Facebook account-এ ঢুকতে না পারলে বা hack সন্দেহ হলে নিচের ধাপগুলো অনুসরণ করুন।",
    steps: [
      "facebook.com/hacked খুলুন।",
      "আপনার account identify করুন।",
      "Password পরিবর্তন করুন।",
      "অচেনা device থেকে logout করুন।",
      "Two-factor authentication চালু করুন।"
    ],
    link: "https://www.facebook.com/hacked"
  },

  whatsapp: {
    title: "WhatsApp সমস্যা",
    text: "WhatsApp নম্বর, OTP, internet এবং Linked Devices পরীক্ষা করুন।",
    steps: [
      "Phone number সঠিক আছে কি না দেখুন।",
      "Network signal ও SMS inbox পরীক্ষা করুন।",
      "WhatsApp update করুন।",
      "Linked Devices থেকে অচেনা device logout করুন।",
      "OTP কারও সঙ্গে share করবেন না।"
    ],
    link: "https://faq.whatsapp.com/"
  },

  otp: {
    title: "OTP আসছে না",
    text: "Network signal, SMS inbox, blocked numbers এবং SIM status পরীক্ষা করুন।",
    steps: [
      "Network signal পরীক্ষা করুন।",
      "ফোন restart করুন।",
      "SMS inbox full কি না দেখুন।",
      "Blocked numbers list পরীক্ষা করুন।",
      "কিছুক্ষণ পরে আবার OTP request করুন।"
    ],
    link: ""
  },

  phone: {
    title: "ফোন গরম বা Battery সমস্যা",
    text: "Background apps বন্ধ করুন এবং charger ও software update পরীক্ষা করুন।",
    steps: [
      "অপ্রয়োজনীয় apps বন্ধ করুন।",
      "Original charger ব্যবহার করুন।",
      "ফোন রোদে বা অতিরিক্ত গরম জায়গায় রাখবেন না।",
      "Battery usage থেকে বেশি খরচ করা app দেখুন।",
      "Software update থাকলে update করুন।"
    ],
    link: ""
  },

  upi: {
    title: "UPI বা Banking সমস্যা",
    text: "Unknown transaction বা financial fraud হলে দ্রুত 1930-এ ফোন করুন।",
    steps: [
      "Transaction ID ও screenshot সংরক্ষণ করুন।",
      "Bank-এর official customer-care-এ ফোন করুন।",
      "UPI app-এ transaction report করুন।",
      "Financial fraud হলে 1930-এ ফোন করুন।",
      "cybercrime.gov.in-এ complaint করুন।"
    ],
    link: "https://cybercrime.gov.in/"
  },

  hack: {
    title: "Account Hack সন্দেহ",
    text: "Account নিরাপদ করতে দ্রুত password ও security settings পরিবর্তন করুন।",
    steps: [
      "Account-এ login করার চেষ্টা করুন।",
      "Password পরিবর্তন করুন।",
      "অচেনা email, phone number ও device সরিয়ে দিন।",
      "সব active sessions logout করুন।",
      "Two-factor authentication চালু করুন।"
    ],
    link: ""
  },

  scam: {
    title: "Scam ও Phishing",
    text: "সন্দেহজনক link, message বা call থেকে সাবধান থাকুন।",
    steps: [
      "সন্দেহজনক link খুলবেন না।",
      "Click করে থাকলে page বন্ধ করুন।",
      "Password দিয়ে থাকলে সঙ্গে সঙ্গে পরিবর্তন করুন।",
      "Bank details দিলে 1930-এ ফোন করুন।",
      "Message ও screenshot সংরক্ষণ করুন।"
    ],
    link: "https://cybercrime.gov.in/"
  },

  password: {
    title: "Password Security",
    text: "প্রতিটি account-এর জন্য আলাদা ও strong password ব্যবহার করুন।",
    steps: [
      "কমপক্ষে ১২ অক্ষরের password ব্যবহার করুন।",
      "প্রতিটি account-এ আলাদা password রাখুন।",
      "Password কারও সঙ্গে share করবেন না।",
      "Password manager ব্যবহার করতে পারেন।",
      "Two-factor authentication চালু করুন।"
    ],
    link: ""
  },

  network: {
    title: "SIM ও Network সমস্যা",
    text: "Signal, SIM, mobile data এবং operator settings পরীক্ষা করুন।",
    steps: [
      "Airplane mode on করে আবার off করুন।",
      "Phone restart করুন।",
      "SIM খুলে আবার বসান।",
      "Mobile data settings পরীক্ষা করুন।",
      "Operator customer-care-এ যোগাযোগ করুন।"
    ],
    link: ""
  }
};

function identifyGuide(query) {
  const text = query.toLowerCase();

  if (text.includes("facebook") || text.includes("ফেসবুক")) {
    return "facebook";
  }

  if (
    text.includes("whatsapp") ||
    text.includes("হোয়াটসঅ্যাপ") ||
    text.includes("হোয়াটসঅ্যাপ")
  ) {
    return "whatsapp";
  }

  if (text.includes("otp") || text.includes("ওটিপি")) {
    return "otp";
  }

  if (
    text.includes("গরম") ||
    text.includes("battery") ||
    text.includes("ব্যাটারি")
  ) {
    return "phone";
  }

  if (
    text.includes("upi") ||
    text.includes("bank") ||
    text.includes("ব্যাংক")
  ) {
    return "upi";
  }

  if (
    text.includes("scam") ||
    text.includes("phishing") ||
    text.includes("প্রতারণা")
  ) {
    return "scam";
  }

  if (
    text.includes("password") ||
    text.includes("পাসওয়ার্ড") ||
    text.includes("পাসওয়ার্ড")
  ) {
    return "password";
  }

  if (
    text.includes("network") ||
    text.includes("sim") ||
    text.includes("সিম")
  ) {
    return "network";
  }

  if (text.includes("hack") || text.includes("হ্যাক")) {
    return "hack";
  }

  return null;
}

function openGuide(key) {
  const guide = guides[key];

  if (!guide) return;

  const overlay = $("#modalOverlay");
  const title = $("#modalTitle");
  const content = $("#modalContent");

  if (!overlay || !title || !content) return;

  title.textContent = guide.title;

  content.innerHTML = `
    <p>${guide.text}</p>

    <h3>ধাপে ধাপে করুন</h3>

    <ol>
      ${guide.steps
        .map((step) => `<li>${step}</li>`)
        .join("")}
    </ol>

    <div class="guide-warning">
      <strong>মনে রাখবেন:</strong>
      OTP, PIN, CVV বা password কাউকে দেবেন না।
    </div>

    ${
      guide.link
        ? `
          <a
            class="btn primary-btn modal-link"
            href="${guide.link}"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Help খুলুন →
          </a>
        `
        : ""
    }
  `;

  overlay.classList.add("show");
  document.body.classList.add("modal-open");
}

function closeGuide() {
  $("#modalOverlay")?.classList.remove("show");
  document.body.classList.remove("modal-open");
}

function searchProblem() {
  const input = $("#problemSearch");
  const result = $("#searchResults");

  if (!input || !result) return;

  const query = input.value.trim();

  if (!query) {
    result.innerHTML = "<p>একটি সমস্যা লিখে খুঁজুন।</p>";
    result.style.display = "block";
    return;
  }

  const key = identifyGuide(query);

  if (!key) {
    result.innerHTML = `
      <p>এই সমস্যার guide এখনও যোগ করা হয়নি।</p>
      <p>যেমন: Facebook hack, OTP সমস্যা, UPI fraud বা ফোন গরম।</p>
    `;

    result.style.display = "block";
    return;
  }

  const guide = guides[key];

  result.innerHTML = `
    <div class="result-card">
      <h3>${guide.title}</h3>
      <p>${guide.text}</p>

      <button class="btn primary-btn" id="resultGuideBtn">
        বিস্তারিত গাইড দেখুন →
      </button>
    </div>
  `;

  result.style.display = "block";

  $("#resultGuideBtn")?.addEventListener("click", () => {
    openGuide(key);
  });
}

$("#searchBtn")?.addEventListener("click", searchProblem);

$("#problemSearch")?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    searchProblem();
  }
});

$("#heroSearchBtn")?.addEventListener("click", () => {
  $("#search")?.scrollIntoView({
    behavior: "smooth"
  });

  setTimeout(() => {
    $("#problemSearch")?.focus();
  }, 500);
});

$$("[data-search]").forEach((button) => {
  button.addEventListener("click", () => {
    const input = $("#problemSearch");

    if (!input) return;

    input.value = button.dataset.search;
    searchProblem();
  });
});

$$("[data-guide]").forEach((button) => {
  button.addEventListener("click", () => {
    openGuide(button.dataset.guide);
  });
});

$("#closeModal")?.addEventListener("click", closeGuide);

$("#modalOverlay")?.addEventListener("click", (event) => {
  if (event.target.id === "modalOverlay") {
    closeGuide();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeGuide();
  }
});

$("#menuBtn")?.addEventListener("click", () => {
  const menu = $("#mobileMenu");
  const button = $("#menuBtn");

  menu?.classList.toggle("show");

  if (menu?.classList.contains("show")) {
    button.textContent = "×";
  } else {
    button.textContent = "☰";
  }
});

$$(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    $("#mobileMenu")?.classList.remove("show");

    if ($("#menuBtn")) {
      $("#menuBtn").textContent = "☰";
    }
  });
});

$("#themeBtn")?.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const darkMode = document.body.classList.contains("dark");

  localStorage.setItem(
    "cybercare-theme",
    darkMode ? "dark" : "light"
  );

  $("#themeBtn").textContent = darkMode ? "☀️" : "🌙";
});

if (localStorage.getItem("cybercare-theme") === "dark") {
  document.body.classList.add("dark");

  if ($("#themeBtn")) {
    $("#themeBtn").textContent = "☀️";
  }
}

$$(".mobile-bottom-nav button").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;

    document.querySelector(target)?.scrollIntoView({
      behavior: "smooth"
    });
  });
});
