// ============================================================
// CYBERCARE — FINAL CLEAN COMPLETE SCRIPT
// Account Recovery + Social Media Desk + Women's Safety
// Blackmail + Intimate Photo/Video Leak + Safety Tools
// Phone Safety + Search + Learn + Emergency + EN/বাংলা + Dark Mode
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const esc = v =>
    String(v ?? "").replace(/[&<>"']/g, c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;"
    }[c]));

  const sideMenu = $("#sideMenu");
  const menuOverlay = $("#menuOverlay");
  const problemSearch = $("#problemSearch");
  const searchResults = $("#searchResults");
  const languageBtn = $("#languageBtn");
  const languageText = $("#languageText");
  const themeBtn = $("#themeBtn");

  // ==========================================================
  // MENU
  // ==========================================================

  function closeMenu() {
    sideMenu?.classList.remove("active");
    menuOverlay?.classList.remove("active");
    document.body.classList.remove("menu-open");
  }

  function openMenu() {
    sideMenu?.classList.add("active");
    menuOverlay?.classList.add("active");
    document.body.classList.add("menu-open");
  }

  $("#menuBtn")?.addEventListener("click", openMenu);
  $("#closeMenu")?.addEventListener("click", closeMenu);
  menuOverlay?.addEventListener("click", closeMenu);

  function scrollTo(id) {
    $("#" + id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    closeMenu();
  }

  // ==========================================================
  // THEME
  // ==========================================================

  let dark =
    localStorage.getItem("cybercare-theme") === "dark";

  function applyTheme() {
    document.body.classList.toggle("dark-mode", dark);

    if (themeBtn) {
      themeBtn.textContent =
        dark ? "☀️" : "🌙";
    }
  }

  applyTheme();

  themeBtn?.addEventListener("click", () => {

    dark = !dark;

    localStorage.setItem(
      "cybercare-theme",
      dark ? "dark" : "light"
    );

    applyTheme();

  });

  // ==========================================================
  // GUIDE MODAL
  // ==========================================================

  function showGuide(title, html) {

    $("#cybercareModal")?.remove();

    const modal =
      document.createElement("div");

    modal.id =
      "cybercareModal";

    modal.innerHTML = `
      <div class="guide-overlay">

        <div class="guide-modal">

          <button
            class="guide-close"
            type="button">
            ✕
          </button>

          <h2>${esc(title)}</h2>

          <div class="guide-content">
            ${html}
          </div>

          <button
            class="guide-ok"
            type="button">
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
      ?.addEventListener("click", e => {

        if (
          e.target.classList.contains(
            "guide-overlay"
          )
        ) {
          modal.remove();
        }

      });

    $$("[data-cc-copy]", modal)
      .forEach(button => {

        button.addEventListener(
          "click",
          () =>
            copyText(
              button.dataset.ccCopy
            )
        );

      });

  }

  async function copyText(text) {

    try {

      await navigator.clipboard.writeText(
        text
      );

    } catch {

      const textarea =
        document.createElement("textarea");

      textarea.value =
        text;

      document.body.appendChild(
        textarea
      );

      textarea.select();

      document.execCommand("copy");

      textarea.remove();

    }

    alert(
      "Copied / কপি হয়েছে"
    );

  }

  // ==========================================================
  // SOCIAL MEDIA DATA
  // ==========================================================

  const social = {

    facebook: {
      icon: "📘",
      name: "Facebook",
      link:
        "https://www.facebook.com/hacked",

      issues: [

        [
          "🔐 Account hacked",

          [
            "Secure the connected email first.",
            "Use the official hacked-account recovery page.",
            "Change the password.",
            "Review active sessions and devices.",
            "Check recovery email and phone.",
            "Enable 2FA.",
            "Review posts, messages and profile changes you did not make."
          ]

        ],

        [
          "🎭 Fake profile / impersonation",

          [
            "Save profile URL.",
            "Take screenshots.",
            "Save username.",
            "Report the profile as impersonation.",
            "Warn trusted contacts if necessary."
          ]

        ],

        [
          "🛡️ After recovery",

          [
            "Use a unique password.",
            "Remove unknown sessions.",
            "Remove suspicious connected apps.",
            "Review privacy settings.",
            "Keep 2FA enabled."
          ]

        ]

      ]
    },


    instagram: {
      icon: "📸",
      name: "Instagram",
      link:
        "https://www.instagram.com/hacked/",

      issues: [

        [
          "🔐 Account hacked",

          [
            "Secure the email account.",
            "Use official Instagram recovery.",
            "Change the password.",
            "Review Login Activity.",
            "Check recovery email and phone.",
            "Enable 2FA."
          ]

        ],

        [
          "🎭 Fake profile",

          [
            "Save the profile URL.",
            "Take screenshots.",
            "Save username.",
            "Use the official impersonation report.",
            "Warn contacts if necessary."
          ]

        ],

        [
          "🔒 Privacy",

          [
            "Review mentions.",
            "Review tags.",
            "Remove unknown followers.",
            "Review location visibility.",
            "Review account privacy."
          ]

        ]

      ]
    },


    whatsapp: {
      icon: "💬",
      name: "WhatsApp",
      link:
        "https://faq.whatsapp.com/",

      issues: [

        [
          "🚨 Account stolen",

          [
            "Register the number again using the official WhatsApp app.",
            "Never share the verification code.",
            "Review Linked Devices.",
            "Log out unknown devices.",
            "Enable two-step verification."
          ]

        ],

        [
          "⚠️ Scam messages sent from your account",

          [
            "Tell contacts the account was compromised.",
            "Tell them not to send money.",
            "Tell them not to share OTPs.",
            "Save evidence."
          ]

        ],

        [
          "🔒 Privacy",

          [
            "Review profile visibility.",
            "Review group privacy.",
            "Review live-location sharing.",
            "Review linked devices."
          ]

        ]

      ]
    },


    google: {
      icon: "🔵",
      name: "Google / Gmail",
      link:
        "https://accounts.google.com/signin/recovery",

      issues: [

        [
          "🔐 Account compromised",

          [
            "Change the password.",
            "Review recent security activity.",
            "Review Your Devices.",
            "Remove unknown devices.",
            "Check recovery email.",
            "Check recovery phone.",
            "Review third-party access.",
            "Enable 2-Step Verification."
          ]

        ],

        [
          "📧 Gmail checks",

          [
            "Review forwarding settings.",
            "Review filters.",
            "Check Sent Mail.",
            "Check Trash.",
            "Check unknown delegates.",
            "Check suspicious login alerts."
          ]

        ]

      ]
    },


    youtube: {
      icon: "▶️",
      name: "YouTube",
      link:
        "https://support.google.com/youtube/",

      issues: [

        [
          "🚨 Channel hacked",

          [
            "Secure the Google account controlling the channel.",
            "Change password.",
            "Enable 2-Step Verification.",
            "Review channel permissions.",
            "Review managers.",
            "Check unknown uploads.",
            "Check unknown livestreams.",
            "Check monetization changes."
          ]

        ]

      ]
    },


    telegram: {
      icon: "✈️",
      name: "Telegram",
      link:
        "https://telegram.org/support",

      issues: [

        [
          "🔐 Account access",

          [
            "Open Devices / Active Sessions.",
            "Terminate unknown sessions.",
            "Enable Two-Step Verification.",
            "Secure the phone/SIM."
          ]

        ],

        [
          "📞 Harassment",

          [
            "Save username.",
            "Save messages.",
            "Save screenshots.",
            "Report the account/content.",
            "Block the person.",
            "Tighten privacy settings."
          ]

        ]

      ]
    },


    snapchat: {
      icon: "👻",
      name: "Snapchat",
      link:
        "https://help.snapchat.com/",

      issues: [

        [
          "🔐 Account hacked",

          [
            "Use official recovery.",
            "Change password.",
            "Review sessions.",
            "Review devices.",
            "Enable available security options."
          ]

        ],

        [
          "🎭 Fake account",

          [
            "Save screenshots.",
            "Save profile URL.",
            "Use official reporting.",
            "Secure your own account."
          ]

        ]

      ]
    },


    x: {
      icon: "𝕏",
      name: "X",
      link:
        "https://help.x.com/",

      issues: [

        [
          "🔐 Account hacked",

          [
            "Secure email.",
            "Change password.",
            "Review sessions.",
            "Revoke suspicious connected apps.",
            "Check email changes.",
            "Enable 2FA."
          ]

        ],

        [
          "🎭 Impersonation",

          [
            "Save URL.",
            "Take screenshots.",
            "Report account/content.",
            "Block or restrict as appropriate."
          ]

        ]

      ]
    },


    tiktok: {
      icon: "🎵",
      name: "TikTok",
      link:
        "https://support.tiktok.com/",

      issues: [

        [
          "🔐 Account hacked",

          [
            "Change password.",
            "Review devices.",
            "Remove unknown devices.",
            "Enable 2-step verification.",
            "Review privacy settings.",
            "Review linked accounts."
          ]

        ],

        [
          "🎭 Impersonation",

          [
            "Save URL.",
            "Save screenshots.",
            "Report account/content.",
            "Secure your own account."
          ]

        ]

      ]
    }

  };

  // ==========================================================
  // SOCIAL MEDIA HELP DESK
  // ==========================================================

  function masterAccountDesk() {

    const cards =
      Object.entries(social)
        .map(([key, platform]) => `

          <button
            class="ccfl-platform"
            data-master-platform="${key}">

            <span>
              ${platform.icon}
            </span>

            <b>
              ${platform.name}
            </b>

            <small>
              Hacked • Login • Privacy • Abuse • Recovery
            </small>

          </button>

        `)
        .join("");

    showGuide(
      "🌐 Social Media Help Desk — A to Z",

      `

        <div class="ccfa-alert">

          <b>
            শুধু সাধারণ জ্ঞান নয়।
          </b>

          <br><br>

          Platform বেছে নিলে CyberCare দেখাবে:

          <br>

          <b>
            কী হয়েছে →
            এখন কী করবে →
            Evidence →
            Report →
            Secure →
            Recover →
            Prevention
          </b>

        </div>


        <div class="ccfl-platform-grid">

          ${cards}

        </div>

      `
    );


    $$("[data-master-platform]")
      .forEach(button => {

        button.addEventListener(
          "click",
          () =>
            masterPlatformGuide(
              button.dataset.masterPlatform
            )
        );

      });

  }


  function masterPlatformGuide(key) {

    const platform =
      social[key];

    if (!platform)
      return;


    const common = `

      <div class="ccfa-alert">

        <b>
          প্রথমে এই কাজগুলো করুন
        </b>

      </div>


      <h3>
        STEP 1 — Stop the damage
      </h3>

      <ol>

        <li>
          OTP, password, PIN বা recovery
          code কাউকে দেবেন না।
        </li>

        <li>
          Unofficial recovery agent-কে
          টাকা দেবেন না।
        </li>

        <li>
          Connected email-ও compromised হলে
          আগে সেটি secure করুন।
        </li>

      </ol>


      <h3>
        STEP 2 — Evidence সংরক্ষণ
      </h3>

      <ol>

        <li>
          Screenshots নিন।
        </li>

        <li>
          Username/profile/channel URL
          save করুন।
        </li>

        <li>
          Security email/message save করুন।
        </li>

        <li>
          Date ও time লিখে রাখুন।
        </li>

      </ol>


      <h3>
        STEP 3 — Account Recover
      </h3>

      <ol>

        <li>
          নিচের official recovery link
          ব্যবহার করুন।
        </li>

        <li>
          Access ফিরে পেলে password পরিবর্তন করুন।
        </li>

        <li>
          Active sessions/devices দেখুন।
        </li>

        <li>
          Unknown device remove করুন।
        </li>

        <li>
          Recovery email/phone check করুন।
        </li>

        <li>
          2FA / Two-Step Verification
          চালু করুন।
        </li>

      </ol>


      <h3>
        STEP 4 — কী কী ক্ষতি হয়েছে দেখুন
      </h3>

      <ol>

        <li>
          Unknown posts check করুন।
        </li>

        <li>
          Messages check করুন।
        </li>

        <li>
          Comments check করুন।
        </li>

        <li>
          Profile changes check করুন।
        </li>

        <li>
          Connected apps check করুন।
        </li>

        <li>
          Contacts-কে attacker message
          করলে তাদের সতর্ক করুন।
        </li>

      </ol>


      <h3>
        STEP 5 — Report
      </h3>

      <ol>

        <li>
          Platform-এর official abuse/report
          option ব্যবহার করুন।
        </li>

        <li>
          Fake profile হলে impersonation
          report করুন।
        </li>

        <li>
          Threat/blackmail হলে evidence
          preserve করুন।
        </li>

      </ol>


      <h3>
        STEP 6 — Prevention
      </h3>

      <ol>

        <li>
          Long unique password ব্যবহার করুন।
        </li>

        <li>
          অন্য website-এ একই password
          ব্যবহার করবেন না।
        </li>

        <li>
          2FA চালু রাখুন।
        </li>

        <li>
          Regularly active sessions check করুন।
        </li>

        <li>
          Verification code কখনও share করবেন না।
        </li>

      </ol>

    `;


    const extra = {

      facebook: `

        <h3>
          📘 Facebook — Extra Checks
        </h3>

        <ol>

          <li>
            Email/phone changes check করুন।
          </li>

          <li>
            Login Activity check করুন।
          </li>

          <li>
            Posts ও messages check করুন।
          </li>

          <li>
            Page/admin access check করুন।
          </li>

          <li>
            Payment/ad activity থাকলে
            সেটাও check করুন।
          </li>

        </ol>

      `,


      instagram: `

        <h3>
          📸 Instagram — Extra Checks
        </h3>

        <ol>

          <li>
            Login Activity check করুন।
          </li>

          <li>
            Changed email/phone check করুন।
          </li>

          <li>
            Security emails check করুন।
          </li>

          <li>
            Connected apps check করুন।
          </li>

          <li>
            Profile changes check করুন।
          </li>

        </ol>

      `,


      whatsapp: `

        <h3>
          💬 WhatsApp — Extra Checks
        </h3>

        <ol>

          <li>
            Number takeover হলে official
            WhatsApp app দিয়ে number re-register করুন।
          </li>

          <li>
            Linked Devices খুলুন।
          </li>

          <li>
            Unknown device remove করুন।
          </li>

          <li>
            Two-step verification চালু করুন।
          </li>

          <li>
            Contacts-কে fake money/OTP request
            সম্পর্কে সতর্ক করুন।
          </li>

        </ol>

      `,


      google: `

        <h3>
          🔵 Google / Gmail — Extra Checks
        </h3>

        <ol>

          <li>
            Recent Security Activity দেখুন।
          </li>

          <li>
            Your Devices দেখুন।
          </li>

          <li>
            Recovery email/phone check করুন।
          </li>

          <li>
            Gmail forwarding check করুন।
          </li>

          <li>
            Gmail filters check করুন।
          </li>

          <li>
            Delegates check করুন।
          </li>

          <li>
            Sent Mail check করুন।
          </li>

          <li>
            Third-party access check করুন।
          </li>

        </ol>

      `,


      youtube: `

        <h3>
          ▶️ YouTube — Extra Checks
        </h3>

        <ol>

          <li>
            Controlling Google account secure করুন।
          </li>

          <li>
            Channel permissions check করুন।
          </li>

          <li>
            Managers check করুন।
          </li>

          <li>
            Unknown uploads check করুন।
          </li>

          <li>
            Unknown livestream check করুন।
          </li>

          <li>
            Monetization changes check করুন।
          </li>

        </ol>

      `,


      telegram: `

        <h3>
          ✈️ Telegram — Extra Checks
        </h3>

        <ol>

          <li>
            Devices / Active Sessions খুলুন।
          </li>

          <li>
            Unknown sessions terminate করুন।
          </li>

          <li>
            Two-Step Verification চালু করুন।
          </li>

          <li>
            SIM/phone secure করুন।
          </li>

        </ol>

      `,


      snapchat: `

        <h3>
          👻 Snapchat — Extra Checks
        </h3>

        <ol>

          <li>
            Sessions/devices check করুন।
          </li>

          <li>
            Password change করুন।
          </li>

          <li>
            Login verification চালু করুন।
          </li>

          <li>
            Privacy/contact settings check করুন।
          </li>

        </ol>

      `,


      x: `

        <h3>
          𝕏 X — Extra Checks
        </h3>

        <ol>

          <li>
            Active sessions check করুন।
          </li>

          <li>
            Suspicious connected apps revoke করুন।
          </li>

          <li>
            Email/phone changes check করুন।
          </li>

          <li>
            Profile changes check করুন।
          </li>

          <li>
            2FA চালু করুন।
          </li>

        </ol>

      `,


      tiktok: `

        <h3>
          🎵 TikTok — Extra Checks
        </h3>

        <ol>

          <li>
            Devices check করুন।
          </li>

          <li>
            Unknown devices remove করুন।
          </li>

          <li>
            Password change করুন।
          </li>

          <li>
            2-step verification চালু করুন।
          </li>

          <li>
            Privacy settings check করুন।
          </li>

          <li>
            Linked accounts check করুন।
          </li>

        </ol>

      `

    }[key] || "";


    showGuide(

      `${platform.icon} ${platform.name} — Complete A to Z Help`,

      `

        ${extra}

        ${common}


        <a
          class="ccfa-link"
          href="${platform.link}"
          target="_blank"
          rel="noopener">

          🔗 Open Official
          ${esc(platform.name)}
          Recovery / Help

        </a>


        <div class="ccfa-note">

          ⚠️ CyberCare কখনও আপনার
          password, OTP, PIN বা recovery
          code চাইবে না।

        </div>


        <button
          class="ccfa-back"
          data-back-social>

          ← Back to Social Media Help Desk

        </button>

      `

    );


    $("[data-back-social]")
      ?.addEventListener(
        "click",
        masterAccountDesk
      );

  }

  // ==========================================================
  // WOMEN'S SAFETY
  // ==========================================================

  function masterWomenDesk() {

    showGuide(

      "👩 Women's Digital Safety — A to Z Help",

      `

        <div class="ccfa-alert">

          <b>
            শুধু information নয় —
            practical step-by-step help.
          </b>

          <br><br>

          Exact problem নির্বাচন করুন।
          CyberCare দেখাবে:

          <br><br>

          <b>
            কী হয়েছে →
            এখন কী করবে →
            Evidence →
            Report →
            Account Secure →
            Removal →
            Prevention
          </b>

        </div>


        <div class="ccfl-platform-grid">


          <button
            class="ccfl-platform"
            data-master-w="harassment">

            📞

            <b>
              Harassment / Repeated Calls
            </b>

            <small>
              Messages • Calls • Abuse
            </small>

          </button>


          <button
            class="ccfl-platform"
            data-master-w="blackmail">

            ⚠️

            <b>
              Blackmail / Sextortion
            </b>

            <small>
              Threats • Money • Coercion
            </small>

          </button>


          <button
            class="ccfl-platform"
            data-master-w="leak">

            🛑

            <b>
              Private Photo / Video Leak
            </b>

            <small>
              Removal • Reporting • Evidence
            </small>

          </button>


          <button
            class="ccfl-platform"
            data-master-w="fake">

            🎭

            <b>
              Fake Profile / Impersonation
            </b>

            <small>
              Report • Protect • Recover
            </small>

          </button>


          <button
            class="ccfl-platform"
            data-master-w="photo">

            📸

            <b>
              Photo Misuse
            </b>

            <small>
              Unauthorized use
            </small>

          </button>


          <button
            class="ccfl-platform"
            data-master-w="stalking">

            👁️

            <b>
              Online Stalking
            </b>

            <small>
              Tracking • Monitoring
            </small>

          </button>


          <button
            class="ccfl-platform"
            data-master-w="location">

            📍

            <b>
              Location / Privacy Safety
            </b>

            <small>
              Live location • Permissions
            </small>

          </button>


        </div>

      `
    );


    $$("[data-master-w]")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const type =
              button.dataset.masterW;


            if(type === "blackmail")
              return blackmail();


            if(type === "leak")
              return intimateLeak();


            const guides = {

              harassment: [
                "📞 Harassment / Repeated Calls — A to Z",

                `

                <h3>
                  STEP 1 — Stop unnecessary contact
                </h3>

                <ol>

                  <li>
                    You do not have to reply.
                  </li>

                  <li>
                    Do not threaten back.
                  </li>

                  <li>
                    Do not share address,
                    OTP, password or private
                    information.
                  </li>

                </ol>


                <h3>
                  STEP 2 — Preserve evidence
                </h3>

                <ol>

                  <li>
                    Screenshot messages/comments.
                  </li>

                  <li>
                    Save call logs.
                  </li>

                  <li>
                    Save username/profile URL/number.
                  </li>

                  <li>
                    Note date and time.
                  </li>

                </ol>


                <h3>
                  STEP 3 — Secure yourself
                </h3>

                <ol>

                  <li>
                    Block/restrict after
                    preserving evidence.
                  </li>

                  <li>
                    Review who can call/message/
                    tag/mention you.
                  </li>

                  <li>
                    Review sessions/devices.
                  </li>

                  <li>
                    Enable 2FA.
                  </li>

                </ol>


                <h3>
                  STEP 4 — Report
                </h3>

                <p>
                  Use the platform's official
                  harassment/abuse reporting route.
                </p>

                `
              ],


              fake: [
                "🎭 Fake Profile / Impersonation — A to Z",

                `

                <ol>

                  <li>
                    Save fake profile URL.
                  </li>

                  <li>
                    Screenshot profile and username.
                  </li>

                  <li>
                    Save copied photos/details.
                  </li>

                  <li>
                    Report it as impersonation/fake account.
                  </li>

                  <li>
                    Warn people who may be contacted.
                  </li>

                  <li>
                    Secure your real account.
                  </li>

                  <li>
                    Review active sessions.
                  </li>

                </ol>

                `
              ],


              photo: [
                "📸 Photo Misuse — A to Z",

                `

                <ol>

                  <li>
                    Save post/profile URL.
                  </li>

                  <li>
                    Take screenshots.
                  </li>

                  <li>
                    Record username.
                  </li>

                  <li>
                    Record date/time.
                  </li>

                  <li>
                    Do not repeatedly download
                    or reshare the material.
                  </li>

                  <li>
                    Report through the platform's
                    privacy/abuse route.
                  </li>

                  <li>
                    If intimate content is involved,
                    use the Private Photo / Video
                    Leak section.
                  </li>

                  <li>
                    Secure your accounts.
                  </li>

                </ol>

                `
              ],


              stalking: [
                "👁️ Online Stalking / Tracking — A to Z",

                `

                <h3>
                  Check these first
                </h3>

                <ol>

                  <li>
                    Live-location sharing.
                  </li>

                  <li>
                    Unknown logged-in devices.
                  </li>

                  <li>
                    Location permissions.
                  </li>

                  <li>
                    Camera/microphone permissions.
                  </li>

                  <li>
                    Accessibility permissions.
                  </li>

                  <li>
                    Unknown connected apps.
                  </li>

                </ol>


                <h3>
                  Then do this
                </h3>

                <ol>

                  <li>
                    Change important passwords
                    from a trusted device if
                    compromise is suspected.
                  </li>

                  <li>
                    Enable 2FA.
                  </li>

                  <li>
                    Preserve repeated messages,
                    threats and URLs.
                  </li>

                  <li>
                    Restrict/block/report as
                    appropriate.
                  </li>

                </ol>

                `
              ],


              location: [
                "📍 Location / Privacy Safety — A to Z",

                `

                <ol>

                  <li>
                    Turn off unnecessary
                    live-location sharing.
                  </li>

                  <li>
                    Review Google/Maps location.
                  </li>

                  <li>
                    Review WhatsApp location.
                  </li>

                  <li>
                    Review social media location.
                  </li>

                  <li>
                    Review app location permissions.
                  </li>

                  <li>
                    Review photo/location sharing.
                  </li>

                  <li>
                    Remove unknown sessions/devices.
                  </li>

                  <li>
                    Change passwords and enable 2FA.
                  </li>

                </ol>

                `
              ]

            };


            const guide =
              guides[type];

            if(guide)
              showGuide(
                guide[0],
                guide[1]
              );

          }
        );

      });

  }

  // ==========================================================
  // BLACKMAIL
  // ==========================================================

  function blackmail() {

    showGuide(

      "⚠️ Blackmail / Sextortion — Complete A to Z",

      `

        <div class="ccfa-alert">

          ❤️

          <b>
            এটা আপনার দোষ নয়।
          </b>

          <br><br>

          টাকা দেবেন না।
          আরও ছবি/video পাঠাবেন না।

        </div>


        <h3>
          STEP 1 — এখনই যা করবেন
        </h3>

        <ol>

          <li>
            Blackmailer-কে টাকা দেবেন না।
          </li>

          <li>
            আরও ছবি/video পাঠাবেন না।
          </li>

          <li>
            Threat-এর reply দিয়ে ঝামেলা
            বাড়াবেন না।
          </li>

        </ol>


        <h3>
          STEP 2 — Evidence রাখুন
        </h3>

        <ol>

          <li>
            Screenshot নিন।
          </li>

          <li>
            Username save করুন।
          </li>

          <li>
            Profile URL save করুন।
          </li>

          <li>
            Threat messages save করুন।
          </li>

          <li>
            Money demand থাকলে সেটিও save করুন।
          </li>

          <li>
            Date/time লিখে রাখুন।
          </li>

        </ol>


        <h3>
          STEP 3 — Account secure করুন
        </h3>

        <ol>

          <li>
            Email password পরিবর্তন করুন।
          </li>

          <li>
            Social account password পরিবর্তন করুন।
          </li>

          <li>
            Active sessions check করুন।
          </li>

          <li>
            2FA চালু করুন।
          </li>

        </ol>


        <h3>
          STEP 4 — Report
        </h3>

        <ol>

          <li>
            Platform-এ report করুন।
          </li>

          <li>
            Evidence সংরক্ষণ করুন।
          </li>

          <li>
            Money পাঠিয়ে থাকলে bank/payment
            provider-কে দ্রুত জানান।
          </li>

        </ol>


        <h3>
          STEP 5 — দ্বিতীয় scam থেকে সাবধান
        </h3>

        <p>

          কেউ যদি বলে সে blackmailer-কে
          hack করে দেবে বা 100% content delete
          করে দেবে এবং তার জন্য টাকা চায় —
          বিশ্বাস করবেন না।

        </p>

      `
    );

  }

  // ==========================================================
  // PRIVATE PHOTO / VIDEO LEAK
  // ==========================================================

  function intimateLeak() {

    const complaint =

`Subject: Non-consensual sharing of my intimate image/video

My intimate image/video is being shared online without my consent.

Platform/website: [NAME]
Profile/page/channel: [NAME]
Username/ID: [USERNAME]
URL(s): [LINK]
Date/time noticed: [DATE/TIME]

I did not consent to the publication or distribution of this intimate content.

I have preserved relevant URLs, screenshots and supporting evidence.

I request that the matter be investigated and appropriate action be taken to stop further circulation and address the reported content according to applicable law and platform policy.

Evidence available:
- Profile/page URL
- Post/video URL
- Screenshots
- Username/phone number
- Messages/threats
- Date/time information`;


    showGuide(

      "🛑 Private Photo / Video Leak — Complete A to Z",

      `

        <div class="ccfa-alert">

          ❤️

          <b>
            এটা আপনার দোষ নয়।
          </b>

          <br><br>

          টাকা দেবেন না।
          আরও content পাঠাবেন না।
          Content নিজে থেকে reshare করবেন না।

        </div>


        <h3>
          STEP 1 — Evidence সংরক্ষণ
        </h3>

        <ol>

          <li>
            Post/profile screenshot করুন।
          </li>

          <li>
            প্রতিটি URL copy করুন।
          </li>

          <li>
            Username save করুন।
          </li>

          <li>
            Date/time note করুন।
          </li>

          <li>
            Threat messages save করুন।
          </li>

        </ol>


        <h3>
          STEP 2 — Platform-এ Report
        </h3>

        <ol>

          <li>
            Official app/site নিজে খুলুন।
          </li>

          <li>
            Privacy / Non-consensual
            intimate imagery / Abuse
            report option ব্যবহার করুন।
          </li>

          <li>
            Original URL এবং evidence দিন।
          </li>

          <li>
            Report/reference number থাকলে
            save করুন।
          </li>

        </ol>


        <h3>
          STEP 3 — StopNCII
        </h3>

        <p>

          Eligible adults-এর ক্ষেত্রে
          StopNCII device-এর ওপর image/video
          থেকে hash তৈরি করতে পারে।

          Original media সাধারণত upload না করেই
          hash তৈরি করার ব্যবস্থা ব্যবহার করে।

          Participating platforms matching content
          detect করতে পারে।

        </p>


        <a
          class="ccfa-link"
          href="https://stopncii.org/create-your-case/"
          target="_blank"
          rel="noopener">

          🛡️ Open StopNCII — Create a Case

        </a>


        <ol>

          <li>
            Official StopNCII site খুলুন।
          </li>

          <li>
            Eligibility check করুন।
          </li>

          <li>
            Relevant image/video নির্বাচন করুন।
          </li>

          <li>
            Hash/case process complete করুন।
          </li>

          <li>
            Case Number/PIN নিরাপদে রাখুন।
          </li>

        </ol>


        <div class="ccfa-note">

          ⚠️ StopNCII পুরো internet থেকে
          content delete করার guarantee দেয় না।

          Platform report এবং প্রয়োজন হলে
          government complaint-ও করুন।

        </div>


        <h3>
          STEP 4 — India Government Cyber Crime Portal
        </h3>

        <p>

          India-তে cybercrime report করার জন্য
          National Cyber Crime Reporting Portal
          ব্যবহার করা যায়।

        </p>


        <a
          class="ccfa-link"
          href="https://www.cybercrime.gov.in/"
          target="_blank"
          rel="noopener">

          🇮🇳 Open National Cyber Crime
          Reporting Portal

        </a>


        <ol>

          <li>
            Official portal খুলুন।
          </li>

          <li>
            আপনার situation-এর সঙ্গে মেলে এমন
            cybercrime reporting category নির্বাচন করুন।
          </li>

          <li>
            Accurate incident details দিন।
          </li>

          <li>
            URL, username, date/time দিন।
          </li>

          <li>
            প্রয়োজনীয় evidence attach করুন।
          </li>

          <li>
            Complaint/reference number save করুন।
          </li>

        </ol>


        <h3>
          STEP 5 — Ready Complaint
        </h3>


        <textarea
          class="cc-copy-area"
          rows="12"
          readonly>${esc(complaint)}</textarea>


        <button
          class="cc-copy"
          data-cc-copy="${esc(complaint)}">

          📋 Copy Complaint

        </button>


        <h3>
          STEP 6 — যদি অনেক website-এ ছড়িয়ে যায়
        </h3>

        <ol>

          <li>
            প্রতিটি website-এর URL আলাদা করে save করুন।
          </li>

          <li>
            প্রতিটি platform-এ report করুন।
          </li>

          <li>
            সব known URL government complaint-এ
            include করুন।
          </li>

        </ol>

      `
    );

  }

  // ==========================================================
  // SAFETY TOOLS
  // ==========================================================

  function safetyTools() {

    showGuide(

      "🧰 CyberCare Safety Tools",

      `

        <div class="cc-tool">

          <h3>
            🔎 Suspicious URL Checker
          </h3>

          <input
            id="ccUrl"
            placeholder="Paste suspicious URL">

          <button
            id="ccUrlCheck">

            Check

          </button>

          <div id="ccUrlResult"></div>

        </div>


        <div class="cc-tool">

          <h3>
            🔐 Password Strength
          </h3>

          <input
            id="ccPass"
            type="password"
            placeholder="Checked locally only">

          <button
            id="ccPassCheck">

            Check

          </button>

          <div id="ccPassResult"></div>

        </div>


        <div class="cc-tool">

          <h3>
            🧾 Evidence Checklist
          </h3>

          <ul>

            <li>
              Screenshot
            </li>

            <li>
              Username/profile URL
            </li>

            <li>
              Messages/call logs
            </li>

            <li>
              Date/time
            </li>

            <li>
              Transaction ID
            </li>

          </ul>

        </div>

      `
    );


    $("#ccUrlCheck")
      ?.addEventListener(
        "click",
        () => {

          const result =
            $("#ccUrlResult");

          const raw =
            $("#ccUrl")
              ?.value
              .trim();


          try {

            const url =
              new URL(raw);

            const warnings = [];


            if(
              url.protocol !== "https:"
            ) {

              warnings.push(
                "HTTPS is not being used"
              );

            }


            if(
              url.hostname.includes("xn--")
            ) {

              warnings.push(
                "Punycode domain"
              );

            }


            if(url.username) {

              warnings.push(
                "Username embedded in URL"
              );

            }


            result.innerHTML =
              warnings.length

                ? `⚠️ ${warnings.join(" • ")}`

                : `
                  🟡 No obvious warning sign detected.
                  This does not guarantee the website is safe.
                `;


          } catch {

            result.textContent =
              "🔴 Invalid URL";

          }

        }
      );


    $("#ccPassCheck")
      ?.addEventListener(
        "click",
        () => {

          const password =
            $("#ccPass")
              ?.value || "";

          let score = 0;


          if(password.length >= 8)
            score++;

          if(password.length >= 12)
            score++;

          if(password.length >= 16)
            score++;

          if(/[a-z]/.test(password))
            score++;

          if(/[A-Z]/.test(password))
            score++;

          if(/[0-9]/.test(password))
            score++;

          if(/[^A-Za-z0-9]/.test(password))
            score++;


          $("#ccPassResult")
            .textContent =

              score >= 6
                ? "🟢 Strong"

                : score >= 4
                  ? "🟡 Moderate"

                  : "🔴 Weak";

        }
      );

  }

  // ==========================================================
  // SEARCH
  // ==========================================================

  const problems = [

    {
      keywords: [
        "hacked",
        "facebook",
        "instagram",
        "whatsapp",
        "google",
        "gmail",
        "youtube",
        "account",
        "login"
      ],

      title:
        "🌐 Social Media / Account Recovery",

      action:
        masterAccountDesk
    },


    {
      keywords: [
        "blackmail",
        "sextortion",
        "threat"
      ],

      title:
        "⚠️ Blackmail / Sextortion",

      action:
        blackmail
    },


    {
      keywords: [
        "private photo",
        "private video",
        "leak",
        "intimate"
      ],

      title:
        "🛑 Private Photo / Video Leak",

      action:
        intimateLeak
    },


    {
      keywords: [
        "harassment",
        "call",
        "message",
        "abuse"
      ],

      title:
        "📞 Harassment",

      action:
        () =>
          masterWomenDesk()
    },


    {
      keywords: [
        "fake profile",
        "impersonation"
      ],

      title:
        "🎭 Fake Profile",

      action:
        () =>
          masterWomenDesk()
    },


    {
      keywords: [
        "photo",
        "picture",
        "image"
      ],

      title:
        "📸 Photo Misuse",

      action:
        () =>
          masterWomenDesk()
    },


    {
      keywords: [
        "stalking",
        "tracking",
        "location"
      ],

      title:
        "👁️ Online Stalking",

      action:
        () =>
          masterWomenDesk()
    },


    {
      keywords: [
        "upi",
        "bank",
        "money",
        "fraud",
        "payment",
        "transaction"
      ],

      title:
        "💳 Online / Financial Fraud",

      action:
        () =>
          showGuide(
            "💳 Online & Financial Fraud",

            `

              <ol>

                <li>
                  Contact your bank/payment provider
                  immediately.
                </li>

                <li>
                  Report the transaction as fraudulent.
                </li>

                <li>
                  Save transaction ID, amount,
                  time and screenshots.
                </li>

                <li>
                  Use official cybercrime reporting
                  channels where applicable.
                </li>

              </ol>

            `
          )
    },


    {
      keywords: [
        "phishing",
        "otp",
        "fake website",
        "scam"
      ],

      title:
        "🎣 Scam / Phishing",

      action:
        () =>
          showGuide(
            "🎣 Scam & Phishing",

            `

              <ol>

                <li>
                  Stop.
                </li>

                <li>
                  Do not share OTP/password/UPI PIN.
                </li>

                <li>
                  Verify the sender independently.
                </li>

                <li>
                  If you entered a password,
                  change it from the official app/site.
                </li>

              </ol>

            `
          )
    },


    {
      keywords: [
        "phone",
        "spyware",
        "unknown app",
        "malware"
      ],

      title:
        "📱 Phone Security",

      action:
        () =>
          showGuide(
            "📱 Phone Security",

            `

              <ol>

                <li>
                  Review unknown apps.
                </li>

                <li>
                  Review camera/microphone/location/
                  SMS/accessibility permissions.
                </li>

                <li>
                  Update the phone.
                </li>

                <li>
                  Secure important accounts from
                  a trusted device if compromise is suspected.
                </li>

              </ol>

            `
          )
    }

  ];


  problemSearch?.addEventListener(
    "input",
    () => {

      const query =
        problemSearch.value
          .toLowerCase()
          .trim();


      if(!searchResults)
        return;


      searchResults.innerHTML =
        "";


      if(!query)
        return;


      const results =
        problems.filter(
          item =>
            item.keywords.some(
              key =>
                query.includes(key)
            )
        );


      if(!results.length) {

        searchResults.innerHTML = `

          <div class="search-result">

            <h3>
              🔎 No exact guide found
            </h3>

            <p>
              Try:
              hacked,
              blackmail,
              intimate photo,
              UPI fraud,
              fake profile,
              harassment,
              phishing
              or phone security.
            </p>

          </div>

        `;

        return;

      }


      results.forEach(item => {

        const div =
          document.createElement("div");

        div.className =
          "search-result";


        div.innerHTML = `

          <h3>
            ${item.title}
          </h3>

          <button
            class="result-help">

            Open A–Z Help →

          </button>

        `;


        $(".result-help", div)
          .addEventListener(
            "click",
            item.action
          );


        searchResults
          .appendChild(div);

      });

    }
  );

  // ==========================================================
  // OLD SERVICE BUTTONS
  // ==========================================================

  $$(".help-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const service =
            (
              button.dataset.service ||
              button.textContent ||
              ""
            )
            .trim()
            .toLowerCase();


          if(
            service ===
            "account recovery"
          ) {

            masterAccountDesk();
            return;

          }


          if(
            service.includes("scam")
          ) {

            showGuide(
              "🎣 Scam & Phishing",

              `

                <ol>

                  <li>
                    Do not click suspicious links.
                  </li>

                  <li>
                    Never share OTP/password/UPI PIN.
                  </li>

                  <li>
                    Verify independently.
                  </li>

                  <li>
                    If money was lost,
                    contact your bank/payment provider.
                  </li>

                </ol>

              `
            );

            return;

          }


          if(
            service.includes("online fraud")
          ) {

            showGuide(
              "💳 Online & Financial Fraud",

              `

                <ol>

                  <li>
                    Contact bank/payment provider.
                  </li>

                  <li>
                    Report fraudulent transaction.
                  </li>

                  <li>
                    Save transaction ID.
                  </li>

                  <li>
                    Save screenshots.
                  </li>

                </ol>

              `
            );

            return;

          }


          if(
            service.includes("phone")
          ) {

            showGuide(
              "📱 Phone Security",

              `

                <ol>

                  <li>
                    Review unknown apps.
                  </li>

                  <li>
                    Review permissions.
                  </li>

                  <li>
                    Review accessibility access.
                  </li>

                  <li>
                    Update device.
                  </li>

                </ol>

              `
            );

            return;

          }


          showGuide(
            button.textContent.trim(),
            `
              <p>
                Follow the official recovery
                and reporting process.
              </p>
            `
          );

        }
      );

    });

  // ==========================================================
  // OLD WOMEN BUTTONS
  // ==========================================================

  $$(".women-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          masterWomenDesk();

        }
      );

    });

  // ==========================================================
  // TOOLS BUTTONS
  // ==========================================================

  $$(".tool-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const tool =
            button.dataset.tool;


          if(tool === "url") {

            safetyTools();
            return;

          }


          if(tool === "password") {

            showGuide(
              "🔐 Password Safety",

              `

                <ul>

                  <li>
                    Use long unique passwords.
                  </li>

                  <li>
                    Never reuse important passwords.
                  </li>

                  <li>
                    Enable 2FA.
                  </li>

                </ul>

              `
            );

            return;

          }


          if(tool === "privacy") {

            showGuide(
              "📱 Privacy Checklist",

              `

                <ul>

                  <li>
                    Location sharing
                  </li>

                  <li>
                    Camera/microphone
                  </li>

                  <li>
                    Connected devices
                  </li>

                  <li>
                    Active sessions
                  </li>

                  <li>
                    Third-party apps
                  </li>

                </ul>

              `
            );

            return;

          }


          if(tool === "evidence") {

            showGuide(
              "🧾 Evidence Checklist",

              `

                <ul>

                  <li>
                    Screenshots
                  </li>

                  <li>
                    Username/profile URL
                  </li>

                  <li>
                    Messages/call logs
                  </li>

                  <li>
                    Date/time
                  </li>

                  <li>
                    Transaction ID
                  </li>

                </ul>

              `
            );

            return;

          }


          safetyTools();

        }
      );

    });

  // ==========================================================
  // EMERGENCY
  // ==========================================================

  $$("[data-emergency]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const type =
            button.dataset.emergency;


          if(type === "account") {

            masterAccountDesk();
            return;

          }


          if(type === "money") {

            showGuide(
              "💳 Money / Payment Fraud — Emergency",

              `

                <ol>

                  <li>
                    Contact bank/payment provider immediately.
                  </li>

                  <li>
                    Report fraudulent transaction.
                  </li>

                  <li>
                    Save transaction ID.
                  </li>

                  <li>
                    Save screenshots.
                  </li>

                </ol>

              `
            );

            return;

          }


          if(type === "blackmail") {

            blackmail();
            return;

          }


          showGuide(
            "📱 Phone Compromised — Emergency",

            `

              <ol>

                <li>
                  Stop sensitive activity.
                </li>

                <li>
                  Preserve evidence.
                </li>

                <li>
                  Use a trusted device when possible.
                </li>

                <li>
                  Review powerful permissions.
                </li>

                <li>
                  Update the phone.
                </li>

                <li>
                  Secure important accounts.
                </li>

              </ol>

            `
          );

        }
      );

    });

  // ==========================================================
  // MASTER CLICK ROUTER
  // THIS IS THE IMPORTANT PART
  // ==========================================================

  document.addEventListener(
    "click",
    event => {

      const element =
        event.target.closest(
          "button,a,[role='button'],.help-btn,.women-btn,.menu-item,.tool-btn"
        );


      if(!element)
        return;


      const text =
        (
          element.textContent ||
          ""
        )
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();


      const menu =
        (
          element.dataset.menu ||
          ""
        )
        .toLowerCase();


      const service =
        (
          element.dataset.service ||
          ""
        )
        .toLowerCase();


      // ------------------------------------------------------
      // WOMEN'S SAFETY
      // ------------------------------------------------------

      const isWomen =
        menu === "women" ||
        text.includes("women's safety") ||
        text.includes("women safety") ||
        text.includes("women’s safety") ||
        text.includes("women's digital safety");


      // ------------------------------------------------------
      // ACCOUNT RECOVERY
      // ------------------------------------------------------

      const isAccount =
        menu === "social" ||
        text.includes("account recovery") ||
        text.includes("social media help desk") ||
        service === "account recovery";


      // ------------------------------------------------------
      // SAFETY TOOLS
      // ------------------------------------------------------

      const isTools =
        menu === "tools" ||
        text.includes("safety tools") ||
        text === "cybercare tools" ||
        text.includes("cybercare safety tools");


      // IMPORTANT:
      // Women's Safety MUST NEVER open Safety Tools.

      if(isWomen) {

        event.preventDefault();
        event.stopImmediatePropagation();

        masterWomenDesk();

        return;

      }


      if(isAccount) {

        event.preventDefault();
        event.stopImmediatePropagation();

        masterAccountDesk();

        return;

      }


      if(isTools) {

        event.preventDefault();
        event.stopImmediatePropagation();

        safetyTools();

        return;

      }

    },
    true
  );

  // ==========================================================
  // 3 DOT MENU
  // ==========================================================

  $$(".menu-item")
    .forEach(item => {

      item.addEventListener(
        "click",
        () => {

          const target =
            item.dataset.menu;


          if(target === "social") {

            masterAccountDesk();
            closeMenu();
            return;

          }


          if(target === "women") {

            masterWomenDesk();
            closeMenu();
            return;

          }


          if(target === "tools") {

            scrollTo("tools");
            return;

          }


          if(target === "services") {

            scrollTo("services");
            return;

          }


          if(target === "learn") {

            scrollTo("learn");
            return;

          }


          if(target === "india") {

            scrollTo("india");
            return;

          }


          if(target === "about") {

            scrollTo("about");
            return;

          }


          if(target === "emergency") {

            scrollTo("emergency");
            return;

          }

        }
      );

    });


  // ==========================================================
  // ADD SOCIAL MEDIA HELP DESK TO 3 DOT
  // ==========================================================

  if(
    sideMenu &&
    !$("[data-menu='social']", sideMenu)
  ) {

    const button =
      document.createElement("button");

    button.type =
      "button";

    button.className =
      "menu-item";

    button.dataset.menu =
      "social";

    button.innerHTML =
      "🌐 Social Media Help Desk";


    button.addEventListener(
      "click",
      () => {

        masterAccountDesk();
        closeMenu();

      }
    );


    sideMenu.appendChild(
      button
    );

  }

  // ==========================================================
  // ENSURE SAFETY TOOLS MENU
  // ==========================================================

  $$(".menu-item")
    .forEach(item => {

      const text =
        (
          item.textContent ||
          ""
        )
        .trim()
        .toLowerCase();


      if(
        text.includes("safety tools") &&
        !item.dataset.menu
      ) {

        item.dataset.menu =
          "tools";

      }

    });

  // ==========================================================
  // HERO BUTTONS
  // ==========================================================

  $("#emergencyBtn")
    ?.addEventListener(
      "click",
      () =>
        scrollTo("emergency")
    );


  $("#quickHelpBtn")
    ?.addEventListener(
      "click",
      () => {

        scrollTo("search");

        setTimeout(
          () =>
            problemSearch?.focus(),
          400
        );

      }
    );

  // ==========================================================
  // LEARN
  // ==========================================================

  $$(".learn-card")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const type =
            button.dataset.learn;


          const data = {

            password: [
              "🔐 Password Safety",
              "Use long unique passwords and 2FA."
            ],

            "2fa": [
              "🔑 Two-Factor Authentication",
              "Enable 2FA on email, social and financial accounts where available."
            ],

            phishing: [
              "🎣 Phishing",
              "Verify unexpected links and requests independently."
            ],

            privacy: [
              "🔒 Privacy",
              "Review who can contact you, see your information and access location."
            ],

            phone: [
              "📱 Phone Security",
              "Keep the OS updated and review apps and permissions."
            ],

            financial: [
              "💳 Financial Safety",
              "Never share OTPs, UPI PINs or banking credentials."
            ]

          };


          const result =
            data[type] || [

              "🎓 Learn Cybersecurity",

              "Stay alert, verify unexpected requests and use official support channels."

            ];


          showGuide(
            result[0],
            `<p>${esc(result[1])}</p>`
          );

        }
      );

    });

  // ==========================================================
  // LANGUAGE
  // ==========================================================

  let bengali =
    false;


  const translations = {

    "Protecting People. Securing Digital Lives.":
      "মানুষকে সুরক্ষিত রাখা। ডিজিটাল জীবনকে নিরাপদ রাখা।",

    "How Can We Help You?":
      "আমরা কীভাবে সাহায্য করতে পারি?",

    "Women's Digital Safety":
      "নারীদের ডিজিটাল নিরাপত্তা",

    "CyberCare Tools":
      "CyberCare টুলস",

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
      "অনলাইন স্টকিং"

  };


  function translate() {

    $$(
      "h1,h2,h3,h4,p,button,strong,small,a,.section-badge"
    )
      .forEach(node => {

        if(
          !node.dataset.ccOriginal
        ) {

          node.dataset.ccOriginal =
            node.textContent.trim();

        }


        const original =
          node.dataset.ccOriginal;


        if(
          bengali &&
          translations[original]
        ) {

          node.textContent =
            translations[original];

        }


        if(!bengali) {

          node.textContent =
            original;

        }

      });


    if(languageText) {

      languageText.textContent =
        bengali
          ? "বাংলা"
          : "EN";

    }

  }


  languageBtn
    ?.addEventListener(
      "click",
      () => {

        bengali =
          !bengali;

        translate();

      }
    );

  // ==========================================================
  // PHONE SAFETY
  // ==========================================================

  function createPhoneScanUI() {

    if(
      $("#cybercare-phone-scan")
    )
      return;


    const hero =
      $(".hero");


    if(!hero)
      return;


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

        A normal website cannot secretly
        inspect all installed apps, private
        files or every permission.

        CyberCare checks what the browser
        can safely see and guides you
        through the rest.

      </p>


      <div class="scan-actions">

        <button
          class="scan-primary-btn"
          id="startPhoneScan">

          🔍 Start Safety Scan

        </button>


        <button
          class="scan-secondary-btn"
          id="manualSafetyCheck">

          📋 Manual Safety Check

        </button>

      </div>


      <div
        id="phoneScanResults"
        class="scan-results">
      </div>

    `;


    hero.insertAdjacentElement(
      "afterend",
      section
    );


    $("#startPhoneScan")
      ?.addEventListener(
        "click",
        runPhoneScan
      );


    $("#manualSafetyCheck")
      ?.addEventListener(
        "click",
        () => {

          showGuide(
            "📱 Complete Phone Safety Check",

            `

              <ol>

                <li>
                  Review installed apps.
                </li>

                <li>
                  Review camera/microphone/
                  location/SMS permissions.
                </li>

                <li>
                  Review accessibility
                  and device-admin access.
                </li>

                <li>
                  Review unknown-app
                  installation permissions.
                </li>

                <li>
                  Review VPN/profiles/certificates.
                </li>

                <li>
                  Update the phone.
                </li>

                <li>
                  Secure important accounts
                  from a trusted device if needed.
                </li>

              </ol>

            `
          );

        }
      );

  }


  async function runPhoneScan() {

    const results =
      $("#phoneScanResults");


    if(!results)
      return;


    const checks = [

      [
        "Secure context",
        window.isSecureContext
      ],

      [
        "Notifications",
        typeof Notification !== "undefined"
          ? Notification.permission
          : "unavailable"
      ],

      [
        "Device",
        /Android|iPhone|iPad|iPod/i
          .test(navigator.userAgent)
          ? "mobile"
          : "desktop/tablet"
      ]

    ];


    results.innerHTML = `

      <div
        class="scan-summary scan-attention">

        <h3>
          🟡 Basic scan complete
        </h3>

        <p>

          This is a browser-level screening,
          not proof that a phone is hacked
          or completely safe.

        </p>

      </div>


      <div class="scan-finding-grid">

        ${
          checks
            .map(
              item => `

                <article
                  class="scan-finding manual">

                  <h4>
                    🟡 ${esc(item[0])}
                  </h4>

                  <p>
                    ${esc(item[1])}
                  </p>

                </article>

              `
            )
            .join("")
        }

      </div>

    `;

  }


  createPhoneScanUI();

  // ==========================================================
  // ESCAPE KEY
  // ==========================================================

  document.addEventListener(
    "keydown",
    event => {

      if(
        event.key === "Escape"
      ) {

        closeMenu();

        $("#cybercareModal")
          ?.remove();

      }

    }
  );

  // ==========================================================
  // CSS FOR NEW UI
  // ==========================================================

  const style =
    document.createElement("style");


  style.id =
    "cybercare-final-script-style";


  style.textContent = `

    .ccfl-platform-grid {

      display: grid;

      grid-template-columns:
        repeat(2, minmax(0, 1fr));

      gap: 10px;

      margin: 12px 0;

    }


    .ccfl-platform {

      border:
        1px solid #d9e1ea;

      border-radius:
        14px;

      background:
        #f8fafc;

      padding:
        13px;

      cursor:
        pointer;

      text-align:
        left;

      min-height:
        82px;

    }


    .ccfl-platform span {

      font-size:
        22px;

      margin-right:
        5px;

    }


    .ccfl-platform b {

      display:
        block;

      font-size:
        15px;

      margin-top:
        5px;

    }


    .ccfl-platform small {

      display:
        block;

      opacity:
        .7;

      margin-top:
        4px;

    }


    .ccfa-alert,
    .ccfa-note {

      padding:
        13px;

      border-radius:
        12px;

      margin:
        10px 0;

      background:
        #eef6ff;

      border:
        1px solid #c9ddf7;

    }


    .ccfa-link {

      display:
        block;

      padding:
        12px;

      border-radius:
        10px;

      background:
        #edf5ff;

      margin:
        12px 0;

      font-weight:
        700;

      text-decoration:
        none;

    }


    .ccfa-back {

      border:
        0;

      border-radius:
        9px;

      padding:
        10px 12px;

      margin-bottom:
        10px;

      cursor:
        pointer;

    }


    .cc-copy {

      border:
        0;

      border-radius:
        9px;

      padding:
        10px 14px;

      background:
        #2563eb;

      color:
        #fff;

      font-weight:
        700;

      cursor:
        pointer;

    }


    .cc-copy-area {

      width:
        100%;

      box-sizing:
        border-box;

      border:
        1px solid #cfd7e2;

      border-radius:
        10px;

      padding:
        10px;

    }


    .cc-tool {

      padding:
        13px;

      margin:
        10px 0;

      border:
        1px solid #e1e7ee;

      border-radius:
        12px;

      background:
        #f8fafc;

    }


    .cc-tool input {

      width:
        100%;

      box-sizing:
        border-box;

      padding:
        10px;

      border:
        1px solid #ccd5df;

      border-radius:
        9px;

      margin:
        5px 0;

    }


    .cc-tool button {

      padding:
        10px 13px;

      border:
        0;

      border-radius:
        9px;

      background:
        #2563eb;

      color:
        #fff;

      font-weight:
        700;

    }


    .cc-tool div {

      margin-top:
        8px;

    }


    .dark-mode .ccfl-platform,
    .dark-mode .cc-issue,
    .dark-mode .cc-tool {

      background:
        #111827;

      color:
        #f3f4f6;

      border-color:
        #374151;

    }


    .dark-mode .ccfa-link {

      background:
        #172554;

      color:
        #e5efff;

    }


    .dark-mode .ccfa-alert,
    .dark-mode .ccfa-note {

      background:
        #172554;

      border-color:
        #334155;

    }


    @media(max-width:430px) {

      .ccfl-platform-grid {

        grid-template-columns:
          1fr 1fr;

      }


      .ccfl-platform {

        padding:
          10px;

        min-height:
          88px;

      }

    }

  `;


  document.head.appendChild(
    style
  );


  console.log(
    "CyberCare Final Clean Script loaded successfully."
  );

});
