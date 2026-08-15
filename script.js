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
  const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    "\"":"&quot;",
    "'":"&#039;"
  }[c]));

  const sideMenu = $("#sideMenu");
  const menuOverlay = $("#menuOverlay");
  const problemSearch = $("#problemSearch");
  const searchResults = $("#searchResults");
  const languageBtn = $("#languageBtn");
  const languageText = $("#languageText");
  const themeBtn = $("#themeBtn");

  function closeMenu(){
    sideMenu?.classList.remove("active");
    menuOverlay?.classList.remove("active");
    document.body.classList.remove("menu-open");
  }

  function openMenu(){
    sideMenu?.classList.add("active");
    menuOverlay?.classList.add("active");
    document.body.classList.add("menu-open");
  }

  $("#menuBtn")?.addEventListener("click", openMenu);
  $("#closeMenu")?.addEventListener("click", closeMenu);
  menuOverlay?.addEventListener("click", closeMenu);

  function scrollTo(id){
    $("#" + id)?.scrollIntoView({
      behavior:"smooth",
      block:"start"
    });
    closeMenu();
  }

  // ==========================================================
  // THEME
  // ==========================================================

  let dark =
    localStorage.getItem("cybercare-theme") === "dark";

  function applyTheme(){
    document.body.classList.toggle("dark-mode", dark);

    if(themeBtn){
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
  // MODAL
  // ==========================================================

  function showGuide(title, html){

    $("#cybercareModal")?.remove();

    const m =
      document.createElement("div");

    m.id = "cybercareModal";

    m.innerHTML = `
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

    document.body.appendChild(m);

    $(".guide-close",m)
      ?.addEventListener(
        "click",
        () => m.remove()
      );

    $(".guide-ok",m)
      ?.addEventListener(
        "click",
        () => m.remove()
      );

    $(".guide-overlay",m)
      ?.addEventListener("click",e => {

        if(
          e.target.classList
            .contains("guide-overlay")
        ){
          m.remove();
        }

      });

    $("[data-cc-close]",m)
      ?.addEventListener(
        "click",
        () => m.remove()
      );

    $$("[data-cc-copy]",m)
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


  async function copyText(text){

    try{

      await navigator.clipboard.writeText(
        text
      );

    }catch{

      const t =
        document.createElement("textarea");

      t.value = text;

      document.body.appendChild(t);

      t.select();

      document.execCommand("copy");

      t.remove();

    }

    alert("Copied / কপি হয়েছে");

  }


  // ==========================================================
  // SOCIAL MEDIA HELP DESK
  // ==========================================================

  const social = {

    facebook:{
      icon:"📘",
      name:"Facebook",
      link:"https://www.facebook.com/hacked",

      issues:[

        [
          "🔐 Account hacked",

          [
            "Secure the connected email first.",
            "Use the official hacked-account recovery page.",
            "Change the password.",
            "Review active sessions/devices.",
            "Check recovery email and phone.",
            "Enable 2FA.",
            "Review posts, messages and profile changes you did not make."
          ]
        ],

        [
          "🎭 Fake profile / impersonation",

          [
            "Save profile URL and screenshots.",
            "Report the profile as impersonation.",
            "Warn trusted contacts if needed."
          ]
        ],

        [
          "🛡️ After recovery",

          [
            "Use a unique password.",
            "Remove unknown sessions/apps.",
            "Review privacy settings.",
            "Keep 2FA enabled."
          ]
        ]

      ]
    },


    instagram:{
      icon:"📸",
      name:"Instagram",
      link:"https://www.instagram.com/hacked/",

      issues:[

        [
          "🔐 Account hacked",

          [
            "Secure email.",
            "Use official recovery.",
            "Change password.",
            "Review Login Activity.",
            "Check recovery email/phone.",
            "Enable 2FA."
          ]
        ],

        [
          "🎭 Fake profile",

          [
            "Save URL/screenshots.",
            "Use the official impersonation report.",
            "Warn contacts if necessary."
          ]
        ],

        [
          "🔒 Privacy",

          [
            "Review mentions/tags.",
            "Remove unknown followers.",
            "Review location and contact visibility."
          ]
        ]

      ]
    },


    whatsapp:{
      icon:"💬",
      name:"WhatsApp",
      link:"https://faq.whatsapp.com/",

      issues:[

        [
          "🚨 Account stolen",

          [
            "Register the number again using the official app.",
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
            "Tell them not to send money or OTPs.",
            "Save evidence."
          ]
        ]

      ]
    },


    google:{
      icon:"🔵",
      name:"Google / Gmail",
      link:"https://accounts.google.com/signin/recovery",

      issues:[

        [
          "🔐 Account compromised",

          [
            "Change password.",
            "Review recent security activity.",
            "Review Your Devices.",
            "Remove unknown devices.",
            "Check recovery email/phone.",
            "Review third-party access.",
            "Enable 2-Step Verification."
          ]
        ],

        [
          "📧 Gmail checks",

          [
            "Review forwarding.",
            "Review filters.",
            "Check Sent Mail and Trash.",
            "Check unknown delegates/access."
          ]
        ]

      ]
    },


    youtube:{
      icon:"▶️",
      name:"YouTube",
      link:"https://support.google.com/youtube/",

      issues:[

        [
          "🚨 Channel hacked",

          [
            "Secure the Google account controlling the channel.",
            "Change password.",
            "Enable 2-Step Verification.",
            "Review channel permissions/managers.",
            "Check unknown uploads/livestreams."
          ]
        ]

      ]
    },


    telegram:{
      icon:"✈️",
      name:"Telegram",
      link:"https://telegram.org/support",

      issues:[

        [
          "🔐 Account access",

          [
            "Review active sessions.",
            "Terminate unknown sessions.",
            "Enable Two-Step Verification.",
            "Secure the phone/SIM."
          ]
        ],

        [
          "📞 Harassment",

          [
            "Save username/messages.",
            "Report content/account.",
            "Block the person.",
            "Tighten privacy settings."
          ]
        ]

      ]
    },


    snapchat:{
      icon:"👻",
      name:"Snapchat",
      link:"https://help.snapchat.com/",

      issues:[

        [
          "🔐 Account hacked",

          [
            "Use official recovery.",
            "Change password.",
            "Review sessions.",
            "Enable available security options."
          ]
        ],

        [
          "🎭 Fake account",

          [
            "Save screenshots/URL.",
            "Use official reporting.",
            "Secure your own account."
          ]
        ]

      ]
    },


    x:{
      icon:"𝕏",
      name:"X",
      link:"https://help.x.com/",

      issues:[

        [
          "🔐 Account hacked",

          [
            "Secure email.",
            "Change password.",
            "Review sessions.",
            "Revoke suspicious connected apps.",
            "Enable 2FA."
          ]
        ],

        [
          "🎭 Impersonation",

          [
            "Save URL/screenshots.",
            "Report account/content.",
            "Block/restrict as appropriate."
          ]
        ]

      ]
    },


    tiktok:{
      icon:"🎵",
      name:"TikTok",
      link:"https://support.tiktok.com/",

      issues:[

        [
          "🔐 Account hacked",

          [
            "Change password.",
            "Review devices.",
            "Remove unknown devices.",
            "Enable 2-step verification.",
            "Review privacy/security settings."
          ]
        ],

        [
          "🎭 Impersonation",

          [
            "Save URL/screenshots.",
            "Report account/content.",
            "Secure your own account."
          ]
        ]

      ]
    }

  };


  function platformGuide(key){

    const p = social[key];

    if(!p) return;

    const blocks =
      p.issues.map(issue => `

        <article class="cc-issue">

          <h3>
            ${esc(issue[0])}
          </h3>

          <ol>
            ${
              issue[1]
                .map(x => `<li>${esc(x)}</li>`)
                .join("")
            }
          </ol>

        </article>

      `).join("");


    showGuide(
      `${p.icon} ${p.name} — A to Z Help`,

      `
        <button
          class="ccfa-back"
          data-cc-back>
          ← Back to Social Media Help Desk
        </button>

        ${blocks}

        <a
          class="ccfa-link"
          href="${p.link}"
          target="_blank"
          rel="noopener">
          🔗 Open Official Help / Recovery
        </a>

        <div class="ccfa-note">
          ⚠️ CyberCare never asks for your
          password, OTP, PIN or recovery code.
        </div>
      `
    );


    $("[data-cc-back]")
      ?.addEventListener(
        "click",
        socialDesk
      );

  }


  function socialDesk(){

    const cards =
      Object.entries(social)
        .map(([key,p]) => `

          <button
            class="ccfl-platform"
            data-platform="${key}">

            <span>${p.icon}</span>

            <b>${p.name}</b>

            <small>
              Recovery • Security • Abuse • Privacy
            </small>

          </button>

        `)
        .join("");


    showGuide(
      "🌐 Social Media Help Desk",

      `
        <div class="ccfa-alert">

          <b>
            Choose your platform.
          </b>

          <br>

          CyberCare gives practical steps:
          what happened → what to do →
          evidence → report → secure →
          recovery → prevention.

        </div>

        <div class="ccfl-platform-grid">
          ${cards}
        </div>
      `
    );


    $$(".ccfl-platform")
      .forEach(button => {

        button.addEventListener(
          "click",
          () =>
            platformGuide(
              button.dataset.platform
            )
        );

      });

  }


  // ==========================================================
  // WOMEN'S SAFETY
  // ==========================================================

  const women = {

    harassment:{
      title:"📞 Harassment / Repeated Calls",

      html:`

        <h3>
          Immediate steps
        </h3>

        <ol>
          <li>You do not have to reply.</li>
          <li>Save screenshots, call logs, usernames, URLs and timestamps.</li>
          <li>Block/restrict after preserving evidence when appropriate.</li>
          <li>Review who can call, message, tag and mention you.</li>
        </ol>

        <h3>
          Do not
        </h3>

        <ul>
          <li>Do not threaten back.</li>
          <li>Do not share private information to make them stop.</li>
        </ul>

      `
    },


    photo:{
      title:"📸 Photo Misuse",

      html:`

        <ol>
          <li>Screenshot the post/profile.</li>
          <li>Copy the URL.</li>
          <li>Note date/time.</li>
          <li>Report through the platform's privacy/abuse process.</li>
          <li>Do not pay anyone promising guaranteed deletion.</li>
          <li>Secure your account and enable 2FA.</li>
        </ol>

      `
    },


    fakeprofile:{
      title:"🎭 Fake Profile / Impersonation",

      html:`

        <ol>
          <li>Save profile URL.</li>
          <li>Save screenshots and username.</li>
          <li>Report impersonation through the platform.</li>
          <li>Warn trusted contacts if needed.</li>
          <li>Secure your real account.</li>
        </ol>

      `
    },


    stalking:{
      title:"👁️ Online Stalking",

      html:`

        <ol>
          <li>Save repeated messages/calls/comments.</li>
          <li>Review live-location sharing.</li>
          <li>Review account sessions and connected devices.</li>
          <li>Review location permissions.</li>
          <li>Change passwords and enable 2FA.</li>
          <li>Block/report repeated abuse where appropriate.</li>
        </ol>

      `
    }

  };


  function womenMenu(){

    showGuide(
      "👩 Women's Digital Safety",

      `

        <div class="ccfl-platform-grid">

          <button
            class="ccfl-platform"
            data-wg="harassment">

            📞
            <b>Harassment</b>

            <small>
              Calls • Messages • Abuse
            </small>

          </button>


          <button
            class="ccfl-platform"
            data-wg="blackmail">

            ⚠️
            <b>Blackmail / Sextortion</b>

            <small>
              Threats • Money • Coercion
            </small>

          </button>


          <button
            class="ccfl-platform"
            data-wg="leak">

            🛑
            <b>Private Photo / Video Leak</b>

            <small>
              Removal • Reporting • Evidence
            </small>

          </button>


          <button
            class="ccfl-platform"
            data-wg="fakeprofile">

            🎭
            <b>Fake Profile</b>

            <small>
              Impersonation
            </small>

          </button>


          <button
            class="ccfl-platform"
            data-wg="photo">

            📸
            <b>Photo Misuse</b>

            <small>
              Unauthorized use
            </small>

          </button>


          <button
            class="ccfl-platform"
            data-wg="stalking">

            👁️
            <b>Online Stalking</b>

            <small>
              Tracking • Monitoring
            </small>

          </button>

        </div>

      `
    );


    $$("[data-wg]")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const type =
              button.dataset.wg;

            if(type === "blackmail")
              return blackmail();

            if(type === "leak")
              return intimateLeak();

            const guide =
              women[type];

            if(guide)
              showGuide(
                guide.title,
                guide.html
              );

          }
        );

      });

  }


  function blackmail(){

    showGuide(
      "⚠️ Blackmail / Sextortion — A to Z",

      `

        <div class="ccfa-alert">
          ❤️
          <b>
            This is not your fault.
          </b>

          Do not pay and do not send
          more content.
        </div>


        <ol>

          <li>
            Do not pay.
          </li>

          <li>
            Do not send additional photos/videos.
          </li>

          <li>
            Save screenshots, username,
            profile URL, threats, demands
            and timestamps.
          </li>

          <li>
            Secure email/social accounts
            and enable 2FA.
          </li>

          <li>
            Report the account/content
            on the platform.
          </li>

          <li>
            If money was sent, contact
            the bank/payment provider
            immediately.
          </li>

          <li>
            Beware of strangers promising
            guaranteed deletion or hacking
            the blackmailer.
          </li>

          <li>
            If there is physical danger,
            prioritize physical safety and
            seek appropriate official help.
          </li>

        </ol>

      `
    );

  }


  function intimateLeak(){

    const complaint =

`Subject: Non-consensual sharing of my intimate image/video

My intimate image/video is being shared online without my consent.

Platform/website: [NAME]
Profile/page/channel: [NAME]
Username/ID: [USERNAME]
URL(s): [LINK]
Date/time noticed: [DATE/TIME]

I did not consent to the publication or distribution of this intimate content. I have preserved relevant URLs, screenshots and other supporting evidence.

I request that the matter be investigated and appropriate action be taken to stop further circulation and address the reported content according to applicable law and platform policy.

Evidence available:
- Profile/page URL
- Post/video URL
- Screenshots
- Username/phone number
- Messages/threats
- Date/time information`;


    showGuide(
      "🛑 Intimate Photo / Video Leak — Complete A to Z",

      `

        <div class="ccfa-alert">

          ❤️
          <b>
            This is not your fault.
          </b>

          Do not pay, do not send more
          content and do not reshare the
          intimate material.

        </div>


        <h3>
          1. Preserve evidence
        </h3>

        <ol>

          <li>
            Screenshot the post/profile.
          </li>

          <li>
            Copy every URL.
          </li>

          <li>
            Save username and date/time.
          </li>

          <li>
            Keep threat messages.
          </li>

        </ol>


        <h3>
          2. Report the platform
        </h3>

        <ol>

          <li>
            Open the official app/site yourself.
          </li>

          <li>
            Use its privacy/intimate-content/
            non-consensual imagery reporting route.
          </li>

          <li>
            Submit the original URL and
            evidence requested.
          </li>

        </ol>


        <h3>
          3. StopNCII
        </h3>

        <p>

          For eligible adults (18+) who
          have the image/video, StopNCII
          can create a hash on the device
          and help participating platforms
          detect matching content.

          It is not a guarantee of removal
          from the entire internet.

        </p>


        <a
          class="ccfa-link"
          href="https://stopncii.org/create-your-case/"
          target="_blank"
          rel="noopener">

          🛡️ Open StopNCII — Create a Case

        </a>


        <h3>
          4. India Government Cyber Crime Portal
        </h3>

        <p>

          Use the official National Cyber
          Crime Reporting Portal for an
          online complaint.

          Save the complaint/reference number.

        </p>


        <a
          class="ccfa-link"
          href="https://www.cybercrime.gov.in/"
          target="_blank"
          rel="noopener">

          🇮🇳 Open National Cyber Crime
          Reporting Portal

        </a>


        <h3>
          5. Ready-to-copy complaint
        </h3>


        <textarea
          class="cc-copy-area"
          rows="11"
          readonly>${esc(complaint)}</textarea>


        <button
          class="cc-copy"
          data-cc-copy="${esc(complaint)}">

          📋 Copy Complaint

        </button>


        <h3>
          6. If it appears on multiple sites
        </h3>

        <p>

          Save each URL separately,
          report each platform, and include
          all known URLs in the government
          complaint.

        </p>


        <div class="ccfa-note">

          ⚠️ StopNCII does not automatically
          delete content from the entire internet.

          Use platform reporting and government
          reporting when appropriate.

        </div>

      `
    );

  }


  // ==========================================================
  // SAFETY TOOLS
  // ==========================================================

  function safetyTools(){

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
            <li>Screenshot</li>
            <li>Username/profile URL</li>
            <li>Messages/call logs</li>
            <li>Date/time</li>
            <li>Transaction ID if money is involved</li>
          </ul>

        </div>

      `
    );


    $("#ccUrlCheck")
      ?.addEventListener(
        "click",
        () => {

          const out =
            $("#ccUrlResult");

          const raw =
            $("#ccUrl")?.value.trim();

          try{

            const u =
              new URL(raw);

            const warnings = [];

            if(
              u.protocol !== "https:"
            )
              warnings.push(
                "HTTPS is not being used"
              );

            if(
              u.hostname.includes("xn--")
            )
              warnings.push(
                "Punycode domain"
              );

            if(u.username)
              warnings.push(
                "Username embedded in URL"
              );

            out.innerHTML =
              warnings.length

              ? `⚠️ ${warnings.join(" • ")}`

              : `
                🟡 No obvious warning sign detected.
                This is not a guarantee that the site is safe.
              `;

          }catch{

            out.textContent =
              "🔴 Invalid URL";

          }

        }
      );


    $("#ccPassCheck")
      ?.addEventListener(
        "click",
        () => {

          const p =
            $("#ccPass")?.value || "";

          let score = 0;

          if(p.length >= 8) score++;
          if(p.length >= 12) score++;
          if(p.length >= 16) score++;

          if(/[a-z]/.test(p)) score++;
          if(/[A-Z]/.test(p)) score++;
          if(/[0-9]/.test(p)) score++;
          if(/[^A-Za-z0-9]/.test(p)) score++;

          $("#ccPassResult").textContent =
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
      k:[
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

      t:
        "🌐 Social Media / Account Recovery",

      fn:
        socialDesk
    },


    {
      k:[
        "blackmail",
        "sextortion",
        "threat"
      ],

      t:
        "⚠️ Blackmail / Sextortion",

      fn:
        blackmail
    },


    {
      k:[
        "private photo",
        "private video",
        "leak",
        "intimate"
      ],

      t:
        "🛑 Intimate Photo / Video Leak",

      fn:
        intimateLeak
    },


    {
      k:[
        "harassment",
        "call",
        "message",
        "abuse"
      ],

      t:
        "📞 Harassment",

      fn:
        () =>
          showGuide(
            "📞 Harassment",
            women.harassment.html
          )
    },


    {
      k:[
        "fake profile",
        "impersonation"
      ],

      t:
        "🎭 Fake Profile",

      fn:
        () =>
          showGuide(
            women.fakeprofile.title,
            women.fakeprofile.html
          )
    },


    {
      k:[
        "photo",
        "picture",
        "image"
      ],

      t:
        "📸 Photo Misuse",

      fn:
        () =>
          showGuide(
            women.photo.title,
            women.photo.html
          )
    },


    {
      k:[
        "stalking",
        "tracking",
        "location"
      ],

      t:
        "👁️ Online Stalking",

      fn:
        () =>
          showGuide(
            women.stalking.title,
            women.stalking.html
          )
    },


    {
      k:[
        "upi",
        "bank",
        "money",
        "fraud",
        "payment",
        "transaction"
      ],

      t:
        "💳 Online / Financial Fraud",

      fn:
        () =>
          showGuide(
            "💳 Online & Financial Fraud",

            `
              <ol>
                <li>
                  Contact your bank/payment provider immediately.
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
                  channels in India where applicable.
                </li>
              </ol>
            `
          )
    },


    {
      k:[
        "phishing",
        "otp",
        "fake website",
        "scam"
      ],

      t:
        "🎣 Scam / Phishing",

      fn:
        () =>
          showGuide(
            "🎣 Scam & Phishing",

            `
              <ol>
                <li>Stop.</li>
                <li>
                  Do not share OTP/password/UPI PIN.
                </li>
                <li>
                  Verify the sender independently.
                </li>
                <li>
                  If you entered a password,
                  change it from the official site/app.
                </li>
              </ol>
            `
          )
    },


    {
      k:[
        "phone",
        "spyware",
        "unknown app",
        "malware"
      ],

      t:
        "📱 Phone Security",

      fn:
        () =>
          showGuide(
            "📱 Phone Security",

            `
              <ol>
                <li>Review unknown apps.</li>
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

      const q =
        problemSearch.value
          .toLowerCase()
          .trim();

      if(!searchResults)
        return;

      searchResults.innerHTML = "";

      if(!q)
        return;

      const hits =
        problems.filter(
          p =>
            p.k.some(
              k => q.includes(k)
            )
        );


      if(!hits.length){

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


      hits.forEach(p => {

        const d =
          document.createElement("div");

        d.className =
          "search-result";

        d.innerHTML = `

          <h3>
            ${p.t}
          </h3>

          <button
            class="result-help">

            Open A–Z Help →

          </button>

        `;

        $(".result-help",d)
          .addEventListener(
            "click",
            p.fn
          );

        searchResults.appendChild(d);

      });

    }
  );


  // ==========================================================
  // SERVICE BUTTONS
  // ==========================================================

  $$(".help-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const service =
            button.dataset.service ||
            button.textContent.trim();

          const lower =
            service.toLowerCase();


          // IMPORTANT:
          // ONLY Account Recovery goes to Social Desk.
          // Women's Safety is NOT intercepted here.

          if(
            lower ===
            "account recovery"
          ){

            socialDesk();

            return;
          }


          if(
            lower.includes("scam")
          ){

            showGuide(
              "🎣 Scam & Phishing",

              `
                <ol>

                  <li>
                    Do not click another
                    suspicious link.
                  </li>

                  <li>
                    Never share OTP/password/
                    UPI PIN.
                  </li>

                  <li>
                    Verify independently.
                  </li>

                  <li>
                    If money was lost,
                    contact your bank/payment
                    provider immediately.
                  </li>

                </ol>
              `
            );

            return;
          }


          if(
            lower.includes("online fraud")
          ){

            showGuide(
              "💳 Online & Financial Fraud",

              `
                <ol>

                  <li>
                    Contact your bank/payment
                    provider immediately.
                  </li>

                  <li>
                    Report the transaction
                    as fraudulent.
                  </li>

                  <li>
                    Save transaction ID
                    and screenshots.
                  </li>

                  <li>
                    Use official cybercrime
                    reporting channels.
                  </li>

                </ol>
              `
            );

            return;
          }


          if(
            lower.includes("phone")
          ){

            showGuide(
              "📱 Phone Security",

              `
                <ol>

                  <li>
                    Review unknown apps.
                  </li>

                  <li>
                    Review permissions
                    and accessibility.
                  </li>

                  <li>
                    Update your device.
                  </li>

                  <li>
                    Secure accounts from
                    a trusted device if needed.
                  </li>

                </ol>
              `
            );

            return;
          }


          showGuide(
            service,
            "Follow the official recovery and reporting process and preserve evidence."
          );

        }
      );

    });


  // ==========================================================
  // WOMEN BUTTONS
  // ==========================================================

  $$(".women-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const type =
            button.dataset.women;


          if(type === "private")
            return intimateLeak();


          if(type === "blackmail")
            return blackmail();


          const guide =
            women[type];


          if(guide){

            showGuide(
              guide.title,
              guide.html
            );

          }else{

            womenMenu();

          }

        }
      );

    });


  // ==========================================================
  // TOOLS
  // ==========================================================

  $$(".tool-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const tool =
            button.dataset.tool;


          if(tool === "scam"){

            showGuide(
              "🔎 Scam Checker",

              `
                <ul>

                  <li>
                    Urgent pressure
                  </li>

                  <li>
                    OTP/password request
                  </li>

                  <li>
                    Suspicious link
                  </li>

                  <li>
                    Advance payment
                  </li>

                  <li>
                    Fake authority/job/prize
                  </li>

                </ul>
              `
            );

          }

          else if(tool === "password"){

            showGuide(
              "🔐 Password Safety",

              `
                <ul>

                  <li>
                    Use long unique passwords.
                  </li>

                  <li>
                    Do not reuse banking passwords.
                  </li>

                  <li>
                    Enable 2FA.
                  </li>

                </ul>
              `
            );

          }

          else if(tool === "url"){

            safetyTools();

          }

          else if(tool === "privacy"){

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

          }

          else if(tool === "evidence"){

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

          }

          else{

            safetyTools();

          }

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


          if(type === "account")
            return socialDesk();


          if(type === "money"){

            return showGuide(
              "💳 Money / Payment Fraud — Emergency",

              `
                <ol>

                  <li>
                    Contact bank/payment provider
                    immediately.
                  </li>

                  <li>
                    Report fraudulent transaction.
                  </li>

                  <li>
                    Save transaction ID
                    and screenshots.
                  </li>

                  <li>
                    Use official cybercrime
                    reporting.
                  </li>

                </ol>
              `
            );

          }


          if(type === "blackmail")
            return blackmail();


          showGuide(
            "📱 Phone Compromised — Emergency",

            `
              <ol>

                <li>
                  Stop sensitive activity
                  on the suspected device.
                </li>

                <li>
                  Preserve evidence.
                </li>

                <li>
                  Use a trusted device
                  when possible.
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
  // 3-DOT MENU
  // IMPORTANT:
  // NO generic "safety" matching.
  // Women's Safety will never open Safety Tools.
  // ==========================================================

  $$(".menu-item")
    .forEach(item => {

      item.addEventListener(
        "click",
        () => {

          const target =
            item.dataset.menu;


          if(target === "social"){

            socialDesk();
            closeMenu();
            return;

          }


          if(target === "women"){

            scrollTo("women");
            return;

          }


          if(target === "tools"){

            scrollTo("tools");
            return;

          }


          if(target === "services"){

            scrollTo("services");
            return;

          }


          if(target === "learn"){

            scrollTo("learn");
            return;

          }


          if(target === "india"){

            scrollTo("india");
            return;

          }


          if(target === "about"){

            scrollTo("about");
            return;

          }


          if(target === "emergency"){

            scrollTo("emergency");
            return;

          }

        }
      );

    });


  // Add Social Media Help Desk to 3-dot menu
  // only if it doesn't already exist.

  if(
    sideMenu &&
    !$(\"[data-menu='social']\",sideMenu)
  ){

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

        socialDesk();
        closeMenu();

      }
    );

    sideMenu.appendChild(button);

  }


  // Make sure existing Safety Tools
  // menu item has the correct target.

  $$(".menu-item")
    .forEach(item => {

      const text =
        (
          item.textContent || ""
        )
        .trim()
        .toLowerCase();

      if(
        text.includes("safety tools") &&
        !item.dataset.menu
      ){

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
      () => scrollTo("emergency")
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

            password:[
              "🔐 Password Safety",
              "Use long unique passwords and 2FA."
            ],

            "2fa":[
              "🔑 Two-Factor Authentication",
              "Enable 2FA on email, social and financial accounts where available."
            ],

            phishing:[
              "🎣 Phishing",
              "Verify unexpected links and requests independently."
            ],

            privacy:[
              "🔒 Privacy",
              "Review who can contact you, see your information and access location."
            ],

            phone:[
              "📱 Phone Security",
              "Keep the OS updated and review apps and permissions."
            ],

            financial:[
              "💳 Financial Safety",
              "Never share OTPs, UPI PINs or banking credentials."
            ]

          };


          const d =
            data[type] ||
            [
              "🎓 Learn Cybersecurity",
              "Stay alert, verify unexpected requests and use official support channels."
            ];


          showGuide(
            d[0],
            `<p>${esc(d[1])}</p>`
          );

        }
      );

    });


  // ==========================================================
  // LANGUAGE
  // ==========================================================

  let bn = false;

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


  function translate(){

    $$(
      "h1,h2,h3,h4,p,button,strong,small,a,.section-badge"
    )
    .forEach(node => {

      if(
        !node.dataset.ccOriginal
      ){

        node.dataset.ccOriginal =
          node.textContent.trim();

      }


      const original =
        node.dataset.ccOriginal;


      if(
        bn &&
        translations[original]
      ){

        node.textContent =
          translations[original];

      }


      if(!bn){

        node.textContent =
          original;

      }

    });


    if(languageText){

      languageText.textContent =
        bn ? "বাংলা" : "EN";

    }

  }


  languageBtn
    ?.addEventListener(
      "click",
      () => {

        bn = !bn;

        translate();

      }
    );


  // ==========================================================
  // PHONE SAFETY
  // ==========================================================

  function createPhoneScanUI(){

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
        runScan
      );


    $("#manualSafetyCheck")
      ?.addEventListener(
        "click",
        () =>
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
                  Review accessibility and
                  device-admin access.
                </li>

                <li>
                  Review unknown-app
                  installation permissions.
                </li>

                <li>
                  Review VPN/profiles/
                  certificates.
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
          )
      );

  }


  async function runScan(){

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
              x => `

                <article
                  class="scan-finding manual">

                  <h4>
                    🟡 ${esc(x[0])}
                  </h4>

                  <p>
                    ${esc(x[1])}
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
  // ESC KEY
  // ==========================================================

  document.addEventListener(
    "keydown",
    event => {

      if(event.key === "Escape"){

        closeMenu();

        $("#cybercareModal")
          ?.remove();

      }

    }
  );


  // ==========================================================
  // ADD-ON CSS
  // ==========================================================

  const style =
    document.createElement("style");

  style.id =
    "cybercare-final-script-style";


  style.textContent = `

    .ccfl-platform-grid{
      display:grid;
      grid-template-columns:
        repeat(2,minmax(0,1fr));
      gap:10px;
      margin:12px 0;
    }


    .ccfl-platform{
      border:1px solid #d9e1ea;
      border-radius:14px;
      background:#f8fafc;
      padding:13px;
      cursor:pointer;
      text-align:left;
      min-height:82px;
    }


    .ccfl-platform span{
      font-size:22px;
      margin-right:5px;
    }


    .ccfl-platform b{
      display:block;
      font-size:15px;
      margin-top:5px;
    }


    .ccfl-platform small{
      display:block;
      opacity:.7;
      margin-top:4px;
    }


    .ccfa-alert,
    .ccfa-note{
      padding:13px;
      border-radius:12px;
      margin:10px 0;
      background:#eef6ff;
      border:1px solid #c9ddf7;
    }


    .ccfa-link{
      display:block;
      padding:12px;
      border-radius:10px;
      background:#edf5ff;
      margin:12px 0;
      font-weight:700;
      text-decoration:none;
    }


    .ccfa-back{
      border:0;
      border-radius:9px;
      padding:10px 12px;
      margin-bottom:10px;
      cursor:pointer;
    }


    .cc-issue{
      padding:12px;
      margin:10px 0;
      background:#f8fafc;
      border:1px solid #e1e7ee;
      border-radius:12px;
    }


    .cc-copy{
      border:0;
      border-radius:9px;
      padding:10px 14px;
      background:#2563eb;
      color:#fff;
      font-weight:700;
      cursor:pointer;
    }


    .cc-copy-area{
      width:100%;
      box-sizing:border-box;
      border:1px solid #cfd7e2;
      border-radius:10px;
      padding:10px;
    }


    .cc-tool{
      padding:13px;
      margin:10px 0;
      border:1px solid #e1e7ee;
      border-radius:12px;
      background:#f8fafc;
    }


    .cc-tool input{
      width:100%;
      box-sizing:border-box;
      padding:10px;
      border:1px solid #ccd5df;
      border-radius:9px;
      margin:5px 0;
    }


    .cc-tool button{
      padding:10px 13px;
      border:0;
      border-radius:9px;
      background:#2563eb;
      color:#fff;
      font-weight:700;
    }


    .cc-tool div{
      margin-top:8px;
    }


    .dark-mode .ccfl-platform,
    .dark-mode .cc-issue,
    .dark-mode .cc-tool{
      background:#111827;
      color:#f3f4f6;
      border-color:#374151;
    }


    .dark-mode .ccfa-link{
      background:#172554;
      color:#e5efff;
    }


    .dark-mode .ccfa-alert,
    .dark-mode .ccfa-note{
      background:#172554;
      border-color:#334155;
    }


    @media(max-width:430px){

      .ccfl-platform-grid{
        grid-template-columns:1fr 1fr;
      }

      .ccfl-platform{
        padding:10px;
        min-height:88px;
      }

    }

  `;


  document.head.appendChild(style);


  console.log(
    "CyberCare Final Clean Script loaded successfully."
  );

});
