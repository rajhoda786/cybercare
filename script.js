/* ============================================================
   CYBERCARE — ADVANCED DIGITAL HELP ENGINE
   Search + Diagnosis + Guides + Security Tools + Scan
   Dark Mode + Language + Emergency + Feedback
============================================================ */

"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/* =========================
   UI HELPERS
========================= */

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function openModal(content) {
  $("#modalContent").innerHTML = content;
  $("#modal").classList.add("show");
}

function closeModal() {
  $("#modal").classList.remove("show");
}

$("#closeModal").addEventListener("click", closeModal);

$("#modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") closeModal();
});

/* =========================
   SIDE MENU
========================= */

function openMenu() {
  $("#sideMenu").classList.add("open");
  $("#overlay").classList.add("show");
}

function closeMenu() {
  $("#sideMenu").classList.remove("open");
  $("#overlay").classList.remove("show");
}

$("#menuBtn").addEventListener("click", openMenu);
$("#closeMenu").addEventListener("click", closeMenu);
$("#overlay").addEventListener("click", closeMenu);

$$(".menu-item[data-section]").forEach(button => {
  button.addEventListener("click", () => {
    const section = document.getElementById(button.dataset.section);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }

    closeMenu();
  });
});

/* =========================
   DARK MODE
========================= */

const savedTheme = localStorage.getItem("cybercare-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

$("#themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "cybercare-theme",
    document.body.classList.contains("dark")
      ? "dark"
      : "light"
  );
});

/* =========================
   GUIDE DATABASE
========================= */

const guides = {

  phone: {
    title: "📱 Phone Problems",
    steps: [
      "Identify the exact symptom: heating, battery drain, lag, storage or app crash.",
      "Restart the phone and check whether the problem remains.",
      "Check available storage and remove unnecessary files/apps.",
      "Update the operating system and affected apps.",
      "Review battery usage to identify unusually active apps.",
      "Review app permissions.",
      "If the problem continues, test in Safe Mode where supported.",
      "Do not factory-reset before backing up important data."
    ]
  },

  overheating: {
    title: "🔥 Phone Overheating",
    steps: [
      "Stop heavy gaming/video processing temporarily.",
      "Remove the phone from direct sunlight or hot environments.",
      "Check Battery settings for unusually active apps.",
      "Close unnecessary background apps.",
      "Remove the charger if the device becomes unusually hot while charging.",
      "Use the original or trusted compatible charger.",
      "Update the phone and apps.",
      "If overheating continues even during light use, get the device professionally inspected."
    ]
  },

  battery: {
    title: "🔋 Battery Draining Quickly",
    steps: [
      "Open Battery settings and check usage by app.",
      "Restrict background activity for apps that consume unusually high power.",
      "Reduce unnecessary location, Bluetooth and hotspot usage.",
      "Lower excessive screen brightness.",
      "Check whether a recently installed app caused the change.",
      "Update the operating system.",
      "If battery health is poor, consider professional battery replacement."
    ]
  },

  internet: {
    title: "🌐 Internet / Wi-Fi Not Working",
    steps: [
      "Check whether other devices have the same problem.",
      "Turn Wi-Fi/mobile data off and on.",
      "Restart the router if using Wi-Fi.",
      "Forget and reconnect to the Wi-Fi network.",
      "Check whether airplane mode is disabled.",
      "Try another website or app.",
      "Test another network if possible.",
      "If every device is affected, contact the ISP."
    ]
  },

  accounts: {
    title: "🔐 Account Login Problem",
    steps: [
      "Confirm the username/email/phone number.",
      "Use the official password-reset page.",
      "Do not use recovery links received from unknown people.",
      "Check whether 2FA is requesting verification.",
      "Review recent security activity.",
      "Sign out unknown devices.",
      "Change the password if compromise is suspected.",
      "Enable 2FA after recovery."
    ]
  },

  google: {
    title: "🔎 Google / Gmail / Assistant",
    steps: [
      "Check that the Google account is signed in.",
      "Check internet connectivity.",
      "Update Google and related apps.",
      "Review microphone permissions for Assistant.",
      "Check language and Assistant settings.",
      "Restart the device.",
      "Clear cache for the affected app where appropriate.",
      "Use Google's official account recovery/help route for account problems."
    ]
  },

  social: {
    title: "📲 Social Media Account Problem",
    steps: [
      "Open the platform's official app or website.",
      "Check login/security notifications.",
      "Review active sessions and unknown devices.",
      "Change the password if anything looks suspicious.",
      "Enable 2FA.",
      "Check connected third-party apps.",
      "Save evidence before reporting harassment or unauthorized access.",
      "Never share OTPs or recovery codes."
    ]
  },

  payments: {
    title: "💳 UPI / Banking Problem",
    steps: [
      "Do not share your UPI PIN, OTP or banking password.",
      "Check whether the transaction actually completed.",
      "Save the transaction/reference ID.",
      "Check the bank statement.",
      "For unauthorized transactions, contact the bank immediately.",
      "Preserve screenshots and relevant messages.",
      "For suspected cyber financial fraud in India, report promptly through the official cybercrime channels."
    ]
  },

  scam: {
    title: "🚨 Scam / Fraud Check",
    steps: [
      "Stop interacting with the suspicious person.",
      "Do not click unknown links.",
      "Never share OTP, PIN, password or recovery code.",
      "Check the sender identity independently.",
      "Take screenshots before deleting anything.",
      "If money was lost, contact the bank immediately.",
      "Report the incident through the appropriate official channel."
    ]
  },

  computer: {
    title: "💻 Computer Problems",
    steps: [
      "Restart the computer.",
      "Check storage space.",
      "Install pending operating system updates.",
      "Update the affected application.",
      "Check browser extensions if the issue is browser-related.",
      "Run the built-in security/antivirus checks.",
      "Back up important data before major repairs."
    ]
  },

  adsense: {
    title: "💰 AdSense Problems",
    steps: [
      "Open the official AdSense dashboard.",
      "Check notifications and policy messages.",
      "Review payment and identity-verification status.",
      "Check whether ads are restricted or limited.",
      "Review traffic and invalid-activity warnings.",
      "Do not click your own ads or encourage others to do so.",
      "Use the official Google AdSense support process for account-specific issues."
    ]
  },

  documents: {
    title: "📄 Digital Documents",
    steps: [
      "Confirm the file type and extension.",
      "Try opening the file with a trusted application.",
      "Check whether the file is corrupted.",
      "Avoid unknown document attachments from suspicious senders.",
      "Keep a backup of important documents.",
      "Use official document portals whenever sensitive information is involved."
    ]
  }
};

/* =========================
   GUIDE OPENING
========================= */

function showGuide(id) {

  const guide = guides[id];

  if (!guide) {
    showToast("Guide not available yet.");
    return;
  }

  const steps = guide.steps
    .map((step, index) => `
      <div class="step">
        <strong>Step ${index + 1}</strong><br>
        ${step}
      </div>
    `)
    .join("");

  openModal(`
    <h2>${guide.title}</h2>
    <p>Follow these steps in order. If the problem remains, use the alternative troubleshooting path below.</p>
    ${steps}

    <hr style="margin:18px 0">

    <button class="primary-btn" onclick="showAlternative('${id}')">
      🔄 Try Alternative Solution
    </button>
  `);
}

function showAlternative(id) {

  const alternatives = {
    phone: [
      "Try Safe Mode if supported.",
      "Remove recently installed suspicious apps.",
      "Check storage and system updates.",
      "Back up important data before a reset."
    ],

    internet: [
      "Test another network.",
      "Restart router.",
      "Forget and reconnect Wi-Fi.",
      "Check ISP outage information."
    ],

    accounts: [
      "Try official recovery.",
      "Secure the email account first.",
      "Sign out unknown sessions.",
      "Enable 2FA after recovery."
    ],

    payments: [
      "Check bank statement.",
      "Save transaction ID.",
      "Contact bank immediately for unauthorized transactions.",
      "Report cyber fraud promptly."
    ],

    social: [
      "Use official recovery.",
      "Secure email first.",
      "Remove unknown sessions.",
      "Enable 2FA."
    ]
  };

  const list = alternatives[id] || [
    "Restart the affected service.",
    "Update the application.",
    "Try the official support route.",
    "Preserve important evidence before making major changes."
  ];

  openModal(`
    <h2>🔄 Alternative Solutions</h2>
    ${list.map(x => `<div class="step">• ${x}</div>`).join("")}
  `);
}

$$("[data-guide]").forEach(button => {
  button.addEventListener("click", () => {
    showGuide(button.dataset.guide);
  });
});

/* =========================
   SEARCH ENGINE
========================= */

const searchDatabase = [
  ["phone overheating", "overheating"],
  ["mobile heating", "overheating"],
  ["phone hot", "overheating"],
  ["battery drain", "battery"],
  ["battery draining", "battery"],
  ["phone battery", "battery"],
  ["wifi not working", "internet"],
  ["wifi problem", "internet"],
  ["internet not working", "internet"],
  ["mobile data", "internet"],
  ["google assistant", "google"],
  ["gmail login", "accounts"],
  ["google account hacked", "accounts"],
  ["whatsapp hacked", "social"],
  ["instagram hacked", "social"],
  ["facebook hacked", "social"],
  ["social media hacked", "social"],
  ["upi fraud", "payments"],
  ["upi not working", "payments"],
  ["bank fraud", "payments"],
  ["payment failed", "payments"],
  ["scam call", "scam"],
  ["fraud message", "scam"],
  ["phishing", "scam"],
  ["computer slow", "computer"],
  ["adsense", "adsense"],
  ["pdf problem", "documents"]
];

function searchCyberCare(query) {

  query = query.toLowerCase().trim();

  if (!query) {
    $("#searchResults").innerHTML = "";
    return;
  }

  const matches = searchDatabase.filter(item =>
    item[0].includes(query) ||
    query.includes(item[0])
  );

  if (!matches.length) {

    $("#searchResults").innerHTML = `
      <div class="result-item">
        ❌ No exact guide found.<br>
        <small>Try words such as: hacked, battery, Wi-Fi, UPI, scam, Gmail, WhatsApp...</small>
      </div>
    `;

    return;
  }

  $("#searchResults").innerHTML = matches
    .slice(0, 8)
    .map(item => `
      <div class="result-item" data-search-guide="${item[1]}">
        🔎 ${item[0]}
      </div>
    `)
    .join("");

  $$("[data-search-guide]").forEach(item => {
    item.addEventListener("click", () => {
      showGuide(item.dataset.searchGuide);
    });
  });
}

$("#searchBtn").addEventListener("click", () => {
  searchCyberCare($("#searchInput").value);
});

$("#searchInput").addEventListener("input", e => {
  searchCyberCare(e.target.value);
});

$("#searchInput").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    searchCyberCare(e.target.value);
  }
});

/* =========================
   PHONE SCAN
========================= */

$("#scanBtn").addEventListener("click", runPhoneScan);

async function runPhoneScan() {

  openModal(`
    <h2>📱 CyberCare Phone Safety Scan</h2>
    <p>Browser-based safety audit starting...</p>
    <div class="step">🔍 Checking browser environment...</div>
  `);

  await wait(500);

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  const checks = [
    {
      name: "Secure Context",
      value: window.isSecureContext
        ? "PASS"
        : "Check site security"
    },
    {
      name: "HTTPS",
      value: location.protocol === "https:"
        ? "PASS"
        : "Use HTTPS"
    },
    {
      name: "Browser",
      value: navigator.userAgent
        ? "Detected"
        : "Unknown"
    },
    {
      name: "Network",
      value: navigator.onLine
        ? "Online"
        : "Offline"
    },
    {
      name: "Connection Type",
      value: connection?.effectiveType || "Not available"
    },
    {
      name: "Cookies",
      value: navigator.cookieEnabled
        ? "Enabled"
        : "Disabled"
    },
    {
      name: "Battery API",
      value: "Browser dependent"
    }
  ];

  openModal(`
    <h2>📱 CyberCare Phone Safety Scan</h2>

    <p>
      This is a <strong>browser-based audit</strong>.
      A normal website cannot secretly inspect your entire phone,
      installed apps, private files or passwords.
    </p>

    ${checks.map(check => `
      <div class="step">
        <strong>${check.name}</strong><br>
        ${check.value}
      </div>
    `).join("")}

    <hr style="margin:18px 0">

    <h3>🛡️ Recommended Checks</h3>

    <div class="step">✓ Update your operating system</div>
    <div class="step">✓ Review installed apps</div>
    <div class="step">✓ Review app permissions</div>
    <div class="step">✓ Enable screen lock</div>
    <div class="step">✓ Enable 2FA on important accounts</div>
    <div class="step">✓ Check unusual battery/data usage</div>
    <div class="step">✓ Keep backups of important files</div>
  `);
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* =========================
   SECURITY TOOLS
========================= */

$("#passwordTool").addEventListener("click", () => {

  openModal(`
    <h2>🔑 Password Checker</h2>

    <input
      id="passwordInput"
      class="modal-input"
      type="password"
      placeholder="Enter a password locally"
    >

    <button class="primary-btn" id="checkPassword">
      Check Strength
    </button>

    <div id="passwordResult"></div>

    <p style="margin-top:15px">
      Your password is evaluated locally by this page.
      Never enter a real password into an untrusted website.
    </p>
  `);

  $("#checkPassword").addEventListener("click", () => {

    const password = $("#passwordInput").value;

    let score = 0;

    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    let result =
      score <= 2 ? "Weak" :
      score === 3 ? "Moderate" :
      "Strong";

    $("#passwordResult").innerHTML = `
      <div class="step">
        <strong>Result: ${result}</strong><br>
        Length: ${password.length}
      </div>
    `;
  });
});

$("#phishingTool").addEventListener("click", () => {

  openModal(`
    <h2>🎣 Phishing Scanner</h2>

    <input
      id="phishingInput"
      class="modal-input"
      placeholder="Paste suspicious URL or message"
    >

    <button class="primary-btn" id="scanPhishing">
      Analyze
    </button>

    <div id="phishingResult"></div>
  `);

  $("#scanPhishing").addEventListener("click", () => {

    const text = $("#phishingInput").value.toLowerCase();

    const warningWords = [
      "urgent",
      "verify now",
      "otp",
      "password",
      "winner",
      "prize",
      "account suspended",
      "click here",
      "crypto",
      "refund"
    ];

    const found = warningWords.filter(word =>
      text.includes(word)
    );

    let message = found.length
      ? "⚠️ Suspicious indicators found. Do not click or share sensitive information."
      : "ℹ️ No obvious indicator found. This does not guarantee that the message is safe.";

    $("#phishingResult").innerHTML = `
      <div class="step">
        ${message}
      </div>

      ${
        found.length
          ? `<div class="step">Indicators: ${found.join(", ")}</div>`
          : ""
      }
    `;
  });
});

$("#privacyTool").addEventListener("click", () => {

  openModal(`
    <h2>🔒 Privacy Checklist</h2>

    <div class="step">☐ Screen lock enabled</div>
    <div class="step">☐ Strong unique passwords</div>
    <div class="step">☐ 2FA enabled</div>
    <div class="step">☐ Location sharing reviewed</div>
    <div class="step">☐ App permissions reviewed</div>
    <div class="step">☐ Unknown devices removed</div>
    <div class="step">☐ Recovery email/phone updated</div>
    <div class="step">☐ Important data backed up</div>
  `);
});

$("#twoFATool").addEventListener("click", () => {

  openModal(`
    <h2>🛡️ 2FA Setup Guide</h2>

    <div class="step">1. Open the official account security settings.</div>
    <div class="step">2. Find Two-Step Verification / 2FA.</div>
    <div class="step">3. Prefer an authenticator app where appropriate.</div>
    <div class="step">4. Save recovery codes securely.</div>
    <div class="step">5. Never share verification codes with anyone.</div>
  `);
});

$("#leakTool").addEventListener("click", () => {

  openModal(`
    <h2>🔓 Data Leak Check</h2>

    <p>
      CyberCare does not need your password to explain breach checking.
    </p>

    <div class="step">
      Use a trusted breach-checking service and enter only the information
      that service explicitly requires.
    </div>

    <div class="step">
      If your email appears in a breach, change reused passwords immediately.
    </div>

    <div class="step">
      Enable 2FA on important accounts.
    </div>
  `);
});

$("#scoreTool").addEventListener("click", () => {

  openModal(`
    <h2>📊 Cyber Safety Score</h2>

    <div class="step">
      <label><input type="checkbox" class="score-check"> 2FA enabled</label>
    </div>

    <div class="step">
      <label><input type="checkbox" class="score-check"> Unique passwords</label>
    </div>

    <div class="step">
      <label><input type="checkbox" class="score-check"> Phone updated</label>
    </div>

    <div class="step">
      <label><input type="checkbox" class="score-check"> App permissions reviewed</label>
    </div>

    <div class="step">
      <label><input type="checkbox" class="score-check"> Backup enabled</label>
    </div>

    <button class="primary-btn" id="calculateScore">
      Calculate Score
    </button>

    <div id="scoreResult"></div>
  `);

  $("#calculateScore").addEventListener("click", () => {

    const checks = $$(".score-check");

    const completed = [...checks]
      .filter(x => x.checked)
      .length;

    const score = completed * 20;

    $("#scoreResult").innerHTML = `
      <div class="step">
        <strong>Your Cyber Safety Score: ${score}/100</strong>
      </div>
    `;
  });
});

/* =========================
   LANGUAGE
========================= */

const translations = {

  en: {
    tagline: "Protecting People. Securing Digital Lives.",
    scanPhone: "Scan Your Phone",
    heroTitle: "What do you need help with?",
    heroText: "Search your problem and CyberCare will guide you step-by-step."
  },

  bn: {
    tagline: "মানুষকে সুরক্ষিত রাখা। ডিজিটাল জীবনকে নিরাপদ রাখা।",
    scanPhone: "ফোন স্ক্যান করুন",
    heroTitle: "আপনার কী বিষয়ে সাহায্য প্রয়োজন?",
    heroText: "সমস্যা লিখুন, CyberCare ধাপে ধাপে সমাধানের পথ দেখাবে।"
  },

  hi: {
    tagline: "लोगों की सुरक्षा। डिजिटल जीवन की सुरक्षा।",
    scanPhone: "फोन स्कैन करें",
    heroTitle: "आपको किस चीज़ में मदद चाहिए?",
    heroText: "अपनी समस्या खोजें और CyberCare आपको चरण-दर-चरण मार्गदर्शन देगा।"
  }

};

let currentLanguage =
  localStorage.getItem("cybercare-language") || "en";

function setLanguage(lang) {

  currentLanguage = lang;

  localStorage.setItem(
    "cybercare-language",
    lang
  );

  $$("[data-i18n]").forEach(element => {

    const key = element.dataset.i18n;

    if (translations[lang]?.[key]) {
      element.textContent =
        translations[lang][key];
    }
  });

  showToast(
    lang === "bn"
      ? "বাংলা ভাষা চালু হয়েছে"
      : lang === "hi"
        ? "हिंदी भाषा सक्रिय है"
        : "English enabled"
  );
}

$("#languageBtn").addEventListener("click", () => {

  const next =
    currentLanguage === "en"
      ? "bn"
      : currentLanguage === "bn"
        ? "hi"
        : "en";

  setLanguage(next);
});

setLanguage(currentLanguage);

/* =========================
   FEEDBACK
========================= */

$("#saveFeedback").addEventListener("click", () => {

  const text = $("#feedbackText").value.trim();

  if (!text) {
    showToast("Please describe the problem first.");
    return;
  }

  const existing =
    JSON.parse(
      localStorage.getItem("cybercare-feedback") || "[]"
    );

  existing.push({
    text,
    date: new Date().toISOString()
  });

  localStorage.setItem(
    "cybercare-feedback",
    JSON.stringify(existing)
  );

  $("#feedbackText").value = "";

  $("#feedbackStatus").textContent =
    "✓ Feedback saved on this device.";

  showToast("Feedback saved.");
});

/* =========================
   ONLINE / OFFLINE STATUS
========================= */

window.addEventListener("online", () => {
  showToast("🌐 Internet connection restored.");
});

window.addEventListener("offline", () => {
  showToast("⚠️ You are currently offline.");
});

/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", e => {

  if (e.key === "Escape") {
    closeModal();
    closeMenu();
  }

});

/* =========================
   INITIALIZATION
========================= */

console.log(
  "CyberCare initialized successfully."
);

console.log(
  "Features loaded:",
  Object.keys(guides).length,
  "core troubleshooting guides."
);
