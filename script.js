/* ============================================================
   CYBERCARE — COMPLETE A TO Z DIGITAL SAFETY ENGINE
   ------------------------------------------------------------
   IMPORTANT:
   - Does NOT inject a new homepage UI
   - Does NOT create Quick Help outside the existing menu
   - Does NOT create Service Selector outside the existing menu
   - Keeps existing HTML/UI intact as much as possible
   - Adds searchable A-Z problem database
   - Step-by-step guidance
   - Facebook / Instagram / WhatsApp / Google / Gmail
   - YouTube / AdSense / Android / Cyber Fraud
   - Women Safety / Privacy / Password / Scam / Phishing
============================================================ */

"use strict";

/* ============================================================
   OFFICIAL HELP LINKS
============================================================ */

const CC_LINKS = {
    facebook: "https://www.facebook.com/help/",
    facebookRecovery: "https://www.facebook.com/login/identify/",
    facebookHacked: "https://www.facebook.com/hacked",

    instagram: "https://help.instagram.com/",
    instagramRecovery:
        "https://www.instagram.com/accounts/password/reset/",

    whatsapp: "https://faq.whatsapp.com/",

    google: "https://support.google.com/",
    googleRecovery:
        "https://accounts.google.com/signin/recovery",
    googleSecurity:
        "https://myaccount.google.com/security",

    gmail:
        "https://support.google.com/mail/",

    youtube:
        "https://support.google.com/youtube/",

    youtubeStudio:
        "https://studio.youtube.com/",

    adsense:
        "https://support.google.com/adsense/",

    android:
        "https://support.google.com/android/",

    chrome:
        "https://support.google.com/chrome/",

    cybercrime:
        "https://www.cybercrime.gov.in/"
};

/* ============================================================
   GUIDE BUILDER
============================================================ */

function ccGuide(
    service,
    category,
    problem,
    icon,
    steps,
    check,
    dont,
    official
) {
    return {
        service,
        category,
        problem,
        icon,
        steps,
        check,
        dont,
        official
    };
}

/* ============================================================
   COMPLETE PROBLEM DATABASE
============================================================ */

const CYBERCARE_GUIDES = [

/* ========================= FACEBOOK ========================= */

ccGuide(
"Facebook",
"Login & Recovery",
"Facebook password ভুলে গেছি",
"🔐",
[
"Facebook login page খুলুন।",
"আপনার mobile number, email বা username দিয়ে account খুঁজুন।",
"Forgot password / Forgotten password নির্বাচন করুন।",
"যে recovery method আপনার হাতে আছে সেটি নির্বাচন করুন।",
"Verification code দিয়ে নতুন password তৈরি করুন।",
"Login করার পরে Security settings খুলুন।",
"অচেনা device/session থাকলে logout করুন।",
"Two-factor authentication চালু করুন।"
],
"Recovery email বা phone এখনও আপনার হাতে আছে কি না দেখুন।",
"OTP, password বা recovery code কাউকে দেবেন না।",
CC_LINKS.facebookRecovery
),

ccGuide(
"Facebook",
"Login & Recovery",
"Facebook account-এ login হচ্ছে না",
"🔑",
[
"Internet connection পরীক্ষা করুন।",
"Email/phone/username সঠিকভাবে লিখেছেন কি না দেখুন।",
"Forgot password দিয়ে recovery চেষ্টা করুন।",
"অন্য browser বা Facebook app দিয়ে চেষ্টা করুন।",
"Account locked বা restricted message দেখাচ্ছে কি না দেখুন।",
"অচেনা login বা security alert থাকলে account recovery করুন।"
],
"Login screen-এ exact error message কী দেখাচ্ছে সেটি খেয়াল করুন।",
"একই password বারবার randomভাবে চেষ্টা করবেন না।",
CC_LINKS.facebook
),

ccGuide(
"Facebook",
"Account Recovery",
"পুরোনো SIM নেই",
"📱",
[
"Facebook account recovery page খুলুন।",
"Account-এর নাম, username, email বা পুরোনো number দিয়ে account খুঁজুন।",
"পুরোনো number-এ code পাঠানোর option থাকলে অন্য recovery option দেখুন।",
"আগে যুক্ত থাকা recovery email ব্যবহার করুন।",
"Facebook যে identity/recovery verification option দেয় তা সম্পূর্ণ করুন।",
"Account ফিরে পেলে নতুন phone number যোগ করুন।",
"Recovery email-ও updated রাখুন।"
],
"পুরোনো email এখনও access করা যায় কি না পরীক্ষা করুন।",
"কোনো third-party 'account recovery agent'-কে password দেবেন না।",
CC_LINKS.facebookRecovery
),

ccGuide(
"Facebook",
"Security",
"কেউ আমার Facebook password পরিবর্তন করেছে",
"🚨",
[
"আপনার email inbox ও SMS পরীক্ষা করুন।",
"Password change notification থাকলে সেটি review করুন।",
"Facebook-এর hacked-account recovery ব্যবহার করুন।",
"Account access পেলে নতুন password দিন।",
"Where you're logged in অংশে গিয়ে অচেনা device logout করুন।",
"Email এবং phone number পরিবর্তন হয়েছে কি না দেখুন।",
"Two-factor authentication চালু করুন।"
],
"Email account-টিও secure করুন।",
"হ্যাকারকে টাকা দিয়ে account ফেরত নেওয়ার চেষ্টা করবেন না।",
CC_LINKS.facebookHacked
),

ccGuide(
"Facebook",
"Security",
"Facebook account hacked",
"🛡️",
[
"Official hacked-account recovery page ব্যবহার করুন।",
"Account access পেলে password পরিবর্তন করুন।",
"সব অচেনা login session logout করুন।",
"Email/phone number পরীক্ষা করুন।",
"Two-factor authentication চালু করুন।",
"Connected apps এবং permissions review করুন।",
"বন্ধুদের জানান hacked account থেকে আসা suspicious message যেন তারা বিশ্বাস না করে।"
],
"Google/Gmail বা অন্য recovery account-ও secure করুন।",
"হ্যাকারকে OTP, recovery code বা টাকা দেবেন না।",
CC_LINKS.facebookHacked
),

ccGuide(
"Facebook",
"Two-Factor Authentication",
"Facebook 2FA কাজ করছে না",
"🔐",
[
"Account recovery করে access নিশ্চিত করুন।",
"Security settings খুলুন।",
"Two-factor authentication method পরীক্ষা করুন।",
"পুরোনো phone/authenticator unavailable হলে available recovery option ব্যবহার করুন।",
"Account access পাওয়ার পরে নতুন authentication method যোগ করুন।",
"Recovery codes নিরাপদ জায়গায় রাখুন।"
],
"Phone number এবং recovery email updated আছে কি না দেখুন।",
"Recovery code screenshot করে public জায়গায় রাখবেন না।",
CC_LINKS.facebook
),

ccGuide(
"Facebook",
"Login",
"Facebook login code আসছে না",
"🔢",
[
"Phone number বা email সঠিক আছে কি না পরীক্ষা করুন।",
"SMS network কাজ করছে কি না পরীক্ষা করুন।",
"Spam/Junk folder দেখুন যদি email ব্যবহার করেন।",
"কিছুক্ষণ অপেক্ষা করে নতুন code request করুন।",
"অন্য available verification method থাকলে সেটি ব্যবহার করুন।"
],
"SIM-এ SMS receive হচ্ছে কি না পরীক্ষা করুন।",
"Verification code কাউকে দেবেন না।",
CC_LINKS.facebook
),

ccGuide(
"Facebook",
"Account Status",
"Facebook account locked বা restricted",
"🔒",
[
"Login করার সময় Facebook যে message দেখাচ্ছে সেটি পড়ুন।",
"Account Status এবং Support Inbox পরীক্ষা করুন।",
"Review বা appeal option থাকলে official process ব্যবহার করুন।",
"Facebook যে verification চায় তা সঠিকভাবে সম্পূর্ণ করুন।",
"Account ফিরে এলে security ও policy status review করুন।"
],
"Restriction-এর exact কারণ আগে বুঝুন।",
"Fake document বা ভুল তথ্য submit করবেন না।",
CC_LINKS.facebook
),

ccGuide(
"Facebook",
"Monetization",
"Facebook monetization eligible হচ্ছে না",
"💰",
[
"Professional Dashboard খুলুন।",
"Monetization section-এ eligibility status দেখুন।",
"কোন requirement পূরণ হয়নি তা শনাক্ত করুন।",
"Account Status ও policy violations পরীক্ষা করুন।",
"Content originality এবং policy compliance review করুন।",
"যে requirement বাকি আছে সেটি পূরণ করুন।",
"Eligibility update হলে আবার status পরীক্ষা করুন।"
],
"Policy violation বা restriction আগে পরীক্ষা করুন।",
"Fake followers, views বা engagement কিনবেন না।",
CC_LINKS.facebook
),

ccGuide(
"Facebook",
"Monetization",
"Facebook monetization setup করতে পারছি না",
"⚙️",
[
"Professional Dashboard > Monetization খুলুন।",
"Available monetization product নির্বাচন করুন।",
"Identity, payment এবং tax-related information পরীক্ষা করুন।",
"অসম্পূর্ণ field পূরণ করুন।",
"Payment information সঠিক রাখুন।",
"Required verification সম্পূর্ণ করুন।",
"Submit করার পরে review status দেখুন।"
],
"Payment এবং identity information-এর spelling/ownership পরীক্ষা করুন।",
"অন্য ব্যক্তির payment account ব্যবহার করবেন না।",
CC_LINKS.facebook
),

ccGuide(
"Facebook",
"Monetization",
"Facebook monetization restricted",
"⚠️",
[
"Professional Dashboard-এর Monetization status খুলুন।",
"Restriction-এর কারণ পড়ুন।",
"Account Status পরীক্ষা করুন।",
"Policy violation থাকলে বিষয়টি বুঝুন।",
"Review/appeal option থাকলে official appeal করুন।",
"Future content policy-compliant রাখুন।"
],
"Restriction-এর exact reason save করে রাখুন।",
"Fake engagement দিয়ে restriction bypass করার চেষ্টা করবেন না।",
CC_LINKS.facebook
),

ccGuide(
"Facebook",
"Monetization",
"Facebook earnings দেখাচ্ছে না",
"📊",
[
"Professional Dashboard খুলুন।",
"Earnings section-এ যান।",
"Date range সঠিক আছে কি না দেখুন।",
"Estimated ও finalized earnings আলাদা কি না দেখুন।",
"Payment/payout status পরীক্ষা করুন।",
"Payment hold আছে কি না দেখুন।",
"Policy বা eligibility restriction পরীক্ষা করুন।"
],
"Dashboard-এর warning/notification পড়ুন।",
"অচেনা agency-কে login details দেবেন না।",
CC_LINKS.facebook
),

ccGuide(
"Facebook",
"Pages",
"Facebook Page admin access নেই",
"📄",
[
"অন্য কোনো trusted admin আছে কি না পরীক্ষা করুন।",
"Page access settings দেখুন।",
"আপনার access remove হয়েছে কি না দেখুন।",
"Personal Facebook account hacked হলে আগে সেটি recover করুন।",
"Official Page access/recovery process ব্যবহার করুন।",
"Page ফিরে পেলে trusted admins ও security settings review করুন।"
],
"Personal profile এবং Page—দুটির security পরীক্ষা করুন।",
"অচেনা কাউকে admin access দেবেন না।",
CC_LINKS.facebook
),

ccGuide(
"Facebook",
"Safety",
"Facebook fake profile / impersonation",
"🎭",
[
"Fake profile-এর screenshot নিন।",
"Profile URL এবং username সংরক্ষণ করুন।",
"Profile report করুন।",
"যার নামে fake account তৈরি হয়েছে তাকেও জানানো ভালো।",
"Threat/blackmail থাকলে evidence আলাদা করে রাখুন।"
],
"Profile URL ও screenshots রাখুন।",
"Fake account-এর সঙ্গে ঝগড়া করবেন না।",
CC_LINKS.facebook
),

ccGuide(
"Facebook",
"Content",
"Facebook post remove হয়েছে",
"📝",
[
"Notification খুলে removal reason পড়ুন।",
"Account Status পরীক্ষা করুন।",
"Content policy কোন অংশে সমস্যা করেছে তা বুঝুন।",
"Review/appeal option থাকলে official review request করুন।",
"Future content policy অনুযায়ী তৈরি করুন।"
],
"Removal notification-এর screenshot রাখুন।",
"Repeatedly একই violating content repost করবেন না।",
CC_LINKS.facebook
),

ccGuide(
"Facebook",
"Safety",
"Facebook harassment",
"🚫",
[
"Harassing message/comment-এর screenshot রাখুন।",
"Profile বা account block/restrict করুন।",
"Content বা message report করুন।",
"Privacy settings শক্ত করুন।",
"Threat বা blackmail থাকলে evidence backup করুন।",
"প্রয়োজনে cybercrime/police assistance নিন।"
],
"Username, URL, date এবং time সংরক্ষণ করুন।",
"Harasser-এর সঙ্গে দীর্ঘ argument করবেন না।",
CC_LINKS.facebook
),

/* ========================= INSTAGRAM ======================== */

ccGuide(
"Instagram",
"Login",
"Instagram password ভুলে গেছি",
"🔐",
[
"Instagram login screen খুলুন।",
"Forgot password নির্বাচন করুন।",
"Username/email/phone দিন।",
"Available recovery option নির্বাচন করুন।",
"Code দিয়ে নতুন password তৈরি করুন।",
"Login করার পরে Security settings review করুন।"
],
"Recovery email বা phone access আছে কি না দেখুন।",
"Recovery code কাউকে দেবেন না।",
CC_LINKS.instagramRecovery
),

ccGuide(
"Instagram",
"Security",
"Instagram hacked",
"🚨",
[
"Instagram security email পরীক্ষা করুন।",
"Password পরিবর্তনের সুযোগ থাকলে সঙ্গে সঙ্গে পরিবর্তন করুন।",
"Email/phone number পরিবর্তন হয়েছে কি না দেখুন।",
"Login activity পরীক্ষা করুন।",
"অচেনা sessions remove করুন।",
"Two-factor authentication চালু করুন।",
"Connected apps review করুন।"
],
"আপনার email account-ও secure করুন।",
"হ্যাকারকে টাকা বা code দেবেন না।",
CC_LINKS.instagram
),

ccGuide(
"Instagram",
"Security",
"Instagram 2FA সমস্যা",
"🔑",
[
"Account recovery করে login করুন।",
"Security settings খুলুন।",
"Two-factor authentication method পরীক্ষা করুন।",
"Available backup/recovery method ব্যবহার করুন।",
"Account access ফিরে পেলে নতুন secure method যোগ করুন।"
],
"Recovery email/phone updated আছে কি না দেখুন।",
"Backup code public জায়গায় রাখবেন না।",
CC_LINKS.instagram
),

ccGuide(
"Instagram",
"Privacy",
"Instagram unwanted DM / harassment",
"🚫",
[
"Message-এর screenshot রাখুন।",
"Profile block বা restrict করুন।",
"Message/profile report করুন।",
"Message controls শক্ত করুন।",
"Privacy settings review করুন।",
"Threat থাকলে evidence backup করুন।"
],
"Username এবং message-এর date/time সংরক্ষণ করুন।",
"Harasser-এর সঙ্গে personal information share করবেন না।",
CC_LINKS.instagram
),

ccGuide(
"Instagram",
"Safety",
"Instagram blackmail",
"🛑",
[
"Blackmailer-কে টাকা দেবেন না।",
"আর কোনো ছবি/video পাঠাবেন না।",
"সব threatening message-এর screenshot রাখুন।",
"Username এবং profile URL সংরক্ষণ করুন।",
"Evidence backup করুন।",
"Platform report/block ব্যবহার করুন।",
"ভারতে গুরুতর cybercrime হলে National Cyber Crime Reporting Portal ব্যবহার করুন।"
],
"Evidence delete করবেন না।",
"Blackmailer-এর সঙ্গে দেখা করতে যাবেন না।",
CC_LINKS.cybercrime
),

ccGuide(
"Instagram",
"Creator",
"Instagram monetization সমস্যা",
"💰",
[
"Professional Dashboard খুলুন।",
"Monetization/eligibility status পরীক্ষা করুন।",
"Account Status ও policy issues দেখুন।",
"Payment/identity information review করুন।",
"অসম্পূর্ণ requirements পূরণ করুন।",
"Official review/appeal option থাকলে ব্যবহার করুন।"
],
"Account restriction আগে পরীক্ষা করুন।",
"Third-party monetization service-কে password দেবেন না।",
CC_LINKS.instagram
),

/* ========================= WHATSAPP ========================= */

ccGuide(
"WhatsApp",
"Account",
"WhatsApp verification code আসছে না",
"📱",
[
"Country code ও phone number সঠিক কিনা দেখুন।",
"SIM-এ SMS/call receive হচ্ছে কি না পরীক্ষা করুন।",
"Network পরীক্ষা করুন।",
"কিছুক্ষণ অপেক্ষা করে আবার code request করুন।",
"বারবার code request করবেন না।",
"SIM unavailable হলে operator-এর মাধ্যমে number recovery বিবেচনা করুন।"
],
"SIM active এবং আপনার control-এ আছে কি না দেখুন।",
"Verification code কাউকে দেবেন না।",
CC_LINKS.whatsapp
),

ccGuide(
"WhatsApp",
"Security",
"WhatsApp account অন্য কেউ নিয়েছে",
"🚨",
[
"আপনার number দিয়ে WhatsApp আবার register করার চেষ্টা করুন।",
"SMS verification code ব্যবহার করুন।",
"Two-step verification PIN চাইলে recovery option অনুসরণ করুন।",
"Linked Devices খুলুন।",
"অচেনা device logout করুন।",
"Two-step verification চালু করুন।",
"Contacts-কে suspicious message সম্পর্কে জানান।"
],
"Linked Devices list পরীক্ষা করুন।",
"WhatsApp verification code কাউকে দেবেন না।",
CC_LINKS.whatsapp
),

ccGuide(
"WhatsApp",
"Privacy",
"WhatsApp-এ কেউ বিরক্ত করছে",
"🚫",
[
"Message/call log-এর evidence রাখুন।",
"Number block করুন।",
"Report করুন।",
"Privacy settings শক্ত করুন।",
"Groups privacy review করুন।",
"Unknown callers silence করার option থাকলে ব্যবহার করুন।"
],
"Threat থাকলে evidence backup করুন।",
"অচেনা link বা file খুলবেন না।",
CC_LINKS.whatsapp
),

ccGuide(
"WhatsApp",
"Privacy",
"WhatsApp privacy settings",
"🔒",
[
"WhatsApp Settings খুলুন।",
"Privacy section খুলুন।",
"Last seen/online visibility review করুন।",
"Profile photo visibility সীমিত করুন।",
"About এবং Status visibility review করুন।",
"Groups-এ কে add করতে পারবে সেটি সীমিত করুন।",
"Unknown callers silence option ব্যবহার করতে পারেন।"
],
"আপনার প্রয়োজন অনুযায়ী visibility নির্বাচন করুন।",
"Public profile-এ sensitive information রাখবেন না।",
CC_LINKS.whatsapp
),

/* ========================= GOOGLE =========================== */

ccGuide(
"Google",
"Account Recovery",
"Google password ভুলে গেছি",
"🔐",
[
"Google Account Recovery খুলুন।",
"Email address দিন।",
"Google-এর verification process অনুসরণ করুন।",
"আগের password মনে থাকলে সঠিকভাবে দিন।",
"Recovery phone/email ব্যবহার করুন।",
"Account ফিরে পেলে Security Checkup করুন।",
"Two-step verification চালু করুন।"
],
"Recovery information updated আছে কি না দেখুন।",
"কাউকে Google password বা verification code দেবেন না।",
CC_LINKS.googleRecovery
),

ccGuide(
"Google",
"Security",
"Google account hacked",
"🚨",
[
"Google Account Security page খুলুন।",
"Password পরিবর্তন করুন।",
"Recent security activity দেখুন।",
"Your devices থেকে অচেনা device sign out করুন।",
"Third-party apps access review করুন।",
"Recovery email/phone পরীক্ষা করুন।",
"Two-step verification চালু করুন।"
],
"Recovery email account-ও secure করুন।",
"Unknown recovery service-কে টাকা দেবেন না।",
CC_LINKS.googleSecurity
),

/* ========================= GMAIL ============================ */

ccGuide(
"Gmail",
"Email",
"Gmail-এ email আসছে না",
"📩",
[
"Spam/Junk folder পরীক্ষা করুন।",
"Google storage full কিনা দেখুন।",
"Search দিয়ে email খুঁজুন।",
"Filters পরীক্ষা করুন।",
"Blocked addresses পরীক্ষা করুন।",
"Forwarding settings review করুন।",
"অন্য browser/device থেকে Gmail পরীক্ষা করুন।"
],
"Google storage available আছে কি না দেখুন।",
"অচেনা attachment খুলবেন না।",
CC_LINKS.gmail
),

ccGuide(
"Gmail",
"Security",
"Gmail hacked",
"🚨",
[
"Google account recovery করুন।",
"Password পরিবর্তন করুন।",
"Recent security activity দেখুন।",
"Unknown devices sign out করুন।",
"Third-party access remove করুন।",
"Gmail forwarding পরীক্ষা করুন।",
"অচেনা filters remove করুন।",
"Two-step verification চালু করুন।"
],
"Recovery phone/email পরীক্ষা করুন।",
"OTP বা password share করবেন না।",
CC_LINKS.googleSecurity
),

/* ========================= YOUTUBE ========================== */

ccGuide(
"YouTube",
"Channel",
"YouTube channel hacked",
"🚨",
[
"Google account secure করুন।",
"Password পরিবর্তন করুন।",
"Unknown devices sign out করুন।",
"YouTube Studio খুলুন।",
"Channel permissions review করুন।",
"অচেনা manager/access remove করুন।",
"Suspicious videos/settings review করুন।",
"Official support/recovery route ব্যবহার করুন।"
],
"Google account এবং YouTube channel দুটোই পরীক্ষা করুন।",
"কাউকে channel login code দেবেন না।",
CC_LINKS.youtube
),

ccGuide(
"YouTube",
"Monetization",
"YouTube monetization হচ্ছে না",
"💰",
[
"YouTube Studio খুলুন।",
"Earn/Monetization section দেখুন।",
"Eligibility requirements পরীক্ষা করুন।",
"Channel policy status দেখুন।",
"Copyright এবং Community Guidelines issues পরীক্ষা করুন।",
"যে requirement পূরণ হয়নি সেটি পূরণ করুন।",
"Eligible হলে official application process অনুসরণ করুন।"
],
"Policy issue আগে ঠিক করুন।",
"Fake subscribers/views কিনবেন না।",
CC_LINKS.youtube
),

ccGuide(
"YouTube",
"Copyright",
"YouTube copyright issue",
"©️",
[
"YouTube Studio-তে Content/Copyright section দেখুন।",
"Claim নাকি strike সেটি বুঝুন।",
"Claim-এর details পড়ুন।",
"আপনার rights থাকলে official dispute process ব্যবহার করুন।",
"Copyrighted content ব্যবহারের permission আছে কি না পরীক্ষা করুন।"
],
"Copyright notice-এর details সংরক্ষণ করুন।",
"মিথ্যা copyright dispute submit করবেন না।",
CC_LINKS.youtube
),

/* ========================= ADSENSE ========================== */

ccGuide(
"AdSense",
"Account Setup",
"AdSense account setup করতে পারছি না",
"💰",
[
"AdSense account-এ sign in করুন।",
"Payments section খুলুন।",
"Identity/payment information পরীক্ষা করুন।",
"অসম্পূর্ণ fields পূরণ করুন।",
"নাম ও payment information সঠিক রাখুন।",
"Google verification সম্পূর্ণ করুন।",
"Warning বা hold থাকলে সেটির instruction অনুসরণ করুন।"
],
"Account owner এবং payment information consistent কি না দেখুন।",
"অন্যের payment details ব্যবহার করবেন না।",
CC_LINKS.adsense
),

ccGuide(
"AdSense",
"Payment",
"AdSense payment পাচ্ছি না",
"💳",
[
"Payments page খুলুন।",
"Payment threshold পূরণ হয়েছে কি না দেখুন।",
"Payment hold আছে কি না দেখুন।",
"Identity verification status পরীক্ষা করুন।",
"Payment method সঠিক আছে কি না দেখুন।",
"Payment history review করুন।"
],
"Hold-এর কারণ আগে চিহ্নিত করুন।",
"Payment release করার নামে কাউকে টাকা দেবেন না।",
CC_LINKS.adsense
),

/* ========================= ANDROID ========================== */

ccGuide(
"Android",
"Phone",
"Google Assistant / Gemini কাজ করছে না",
"🎙️",
[
"Internet connection পরীক্ষা করুন।",
"Google app update করুন।",
"Settings > Apps > Google খুলুন।",
"Microphone permission পরীক্ষা করুন।",
"Google app-এর cache clear করে চেষ্টা করুন।",
"Assistant/Gemini settings review করুন।",
"Phone restart করুন।",
"Microphone অন্য app-এ কাজ করছে কি না পরীক্ষা করুন।"
],
"Microphone permission এবং internet আগে পরীক্ষা করুন।",
"Unknown assistant/mod APK install করবেন না।",
CC_LINKS.android
),

ccGuide(
"Android",
"Internet",
"Wi-Fi connected কিন্তু internet নেই",
"📶",
[
"Wi-Fi disconnect করে আবার connect করুন।",
"Router restart করুন।",
"অন্য device-এ internet আছে কি না পরীক্ষা করুন।",
"Network forget করে আবার connect করুন।",
"Airplane mode on/off করুন।",
"VPN থাকলে temporary disable করে পরীক্ষা করুন।",
"সব device-এ সমস্যা হলে ISP/router পরীক্ষা করুন।"
],
"সমস্যা শুধু phone-এ নাকি সব device-এ তা আগে দেখুন।",
"Unknown public Wi-Fi-তে banking করবেন না।",
CC_LINKS.android
),

ccGuide(
"Android",
"Storage",
"Phone storage full",
"💾",
[
"Settings > Storage খুলুন।",
"Large files দেখুন।",
"Downloads পরিষ্কার করুন।",
"Unused apps uninstall করুন।",
"Photos/videos backup করুন।",
"Messaging app-এর unnecessary media delete করুন।",
"Trash/Recycle Bin empty করুন।"
],
"Important files আগে backup করুন।",
"System files না বুঝে delete করবেন না।",
CC_LINKS.android
),

ccGuide(
"Android",
"Lost Phone",
"Phone হারিয়ে গেছে",
"📍",
[
"অন্য device থেকে Google Find My Device ব্যবহার করুন।",
"Phone locate করার চেষ্টা করুন।",
"Phone lock করুন।",
"ফিরে পাওয়ার সম্ভাবনা না থাকলে remote erase বিবেচনা করুন।",
"SIM operator-এর সঙ্গে যোগাযোগ করুন।",
"Banking/UPI apps এবং গুরুত্বপূর্ণ accounts secure করুন।",
"প্রয়োজনে police report করুন।"
],
"Phone-এ screen lock ছিল কি না মনে করুন।",
"নিজে গিয়ে সন্দেহভাজন ব্যক্তির সঙ্গে confrontation করবেন না।",
CC_LINKS.android
),

/* ========================= CYBER FRAUD ====================== */

ccGuide(
"Cyber Fraud",
"UPI",
"UPI fraud হয়েছে",
"💸",
[
"আর কোনো টাকা পাঠাবেন না।",
"Transaction ID/UTR সংরক্ষণ করুন।",
"Screenshot নিন।",
"Bank/UPI provider-এর official fraud reporting channel ব্যবহার করুন।",
"UPI app-এর dispute/report option ব্যবহার করুন।",
"ভারতে cyber financial fraud হলে National Cyber Crime Reporting Portal-এ দ্রুত report করার কথা বিবেচনা করুন।",
"প্রয়োজনে bank account/card secure করুন।"
],
"Amount, date, time, UTR এবং receiver details সংরক্ষণ করুন।",
"Refund পাওয়ার নামে আবার টাকা দেবেন না।",
CC_LINKS.cybercrime
),

ccGuide(
"Cyber Fraud",
"OTP",
"কেউ OTP চেয়েছে",
"🚨",
[
"OTP কাউকে বলবেন না।",
"OTP কোন service-এর তা পড়ুন।",
"আপনি নিজে transaction শুরু না করলে OTP ব্যবহার করবেন না।",
"Suspicious activity হলে password পরিবর্তন করুন।",
"Banking OTP হলে bank-এর official fraud channel-এ যোগাযোগ করুন।"
],
"OTP message-এ transaction/service name দেখুন।",
"Customer care সেজে কেউ OTP চাইলে দেবেন না।",
CC_LINKS.cybercrime
),

ccGuide(
"Cyber Fraud",
"Phishing",
"Suspicious link পেয়েছি",
"🔗",
[
"Link-এ click করবেন না।",
"Sender যাচাই করুন।",
"Urgent payment/password request সন্দেহ করুন।",
"Official website নিজে browser-এ খুলুন।",
"Click করে password দিয়ে ফেললে password সঙ্গে সঙ্গে পরিবর্তন করুন।",
"Banking information দিলে bank-এর official fraud channel-এ যোগাযোগ করুন।"
],
"Website address/domain carefully দেখুন।",
"Unknown shortened link খুলবেন না।",
CC_LINKS.cybercrime
),

ccGuide(
"Cyber Fraud",
"Online Shopping",
"Online shopping scam",
"🛒",
[
"Order/payment screenshots রাখুন।",
"Transaction ID সংরক্ষণ করুন।",
"Seller/store-এর details সংরক্ষণ করুন।",
"Platform-এর official dispute/refund process ব্যবহার করুন।",
"Bank/payment provider-কে fraud report করুন।",
"প্রয়োজনে cybercrime portal-এ report করুন।"
],
"Payment proof এবং communication save করুন।",
"Refund-এর জন্য আবার টাকা দেবেন না।",
CC_LINKS.cybercrime
),

ccGuide(
"Cyber Fraud",
"Job Scam",
"Fake job scam",
"💼",
[
"Scammer-এর number/profile/email সংরক্ষণ করুন।",
"Payment proof রাখুন।",
"আর কোনো টাকা দেবেন না।",
"Bank/payment provider-কে report করুন।",
"Platform-এ scam report করুন।",
"Cybercrime report করার কথা বিবেচনা করুন।"
],
"Job offer-এর domain/email/number সংরক্ষণ করুন।",
"Registration fee বা security deposit-এর নামে বারবার টাকা দেবেন না।",
CC_LINKS.cybercrime
),

/* ========================= WOMEN SAFETY ===================== */

ccGuide(
"Women Safety",
"Phone Harassment",
"ফোন করে বিরক্ত করছে",
"📞",
[
"Call log-এর screenshot রাখুন।",
"Number block করুন।",
"Spam protection/call blocking ব্যবহার করুন।",
"Personal information share করবেন না।",
"Threat থাকলে trusted person-কে জানান।",
"Repeated stalking/threat হলে appropriate authorities-এর assistance নিন।",
"Evidence delete করবেন না।"
],
"Number, date, time এবং threat-এর details লিখে রাখুন।",
"অপরিচিত ব্যক্তির সঙ্গে দেখা করতে যাবেন না।",
CC_LINKS.cybercrime
),

ccGuide(
"Women Safety",
"Online Harassment",
"Social media-তে harassment",
"🛡️",
[
"Message/comment-এর screenshot নিন।",
"Username এবং profile URL সংরক্ষণ করুন।",
"Account block/restrict করুন।",
"Message/profile report করুন।",
"Privacy settings শক্ত করুন।",
"Threat/blackmail থাকলে evidence backup করুন।",
"প্রয়োজনে cybercrime/police assistance নিন।"
],
"Date/time সহ evidence রাখুন।",
"Harasser-কে টাকা বা private information দেবেন না।",
CC_LINKS.cybercrime
),

ccGuide(
"Women Safety",
"Stalking",
"কেউ online/offline stalk করছে",
"🚨",
[
"ঘটনার date/time/place লিখে রাখুন।",
"Digital evidence সংরক্ষণ করুন।",
"Trusted family/friend-কে জানান।",
"Social media privacy settings review করুন।",
"Live location public করবেন না।",
"অপরিচিত ব্যক্তির সঙ্গে একা দেখা করবেন না।",
"Repeated threat/stalking হলে appropriate authority-এর সাহায্য নিন।"
],
"Evidence নিরাপদ জায়গায় backup করুন।",
"Stalker-এর সঙ্গে নিজে গিয়ে confrontation করবেন না।",
CC_LINKS.cybercrime
),

ccGuide(
"Women Safety",
"Blackmail",
"Private photo/video দিয়ে blackmail করছে",
"🛑",
[
"Blackmailer-কে টাকা দেবেন না।",
"আর কোনো private photo/video পাঠাবেন না।",
"সব threat/message-এর screenshot রাখুন।",
"Username/profile URL সংরক্ষণ করুন।",
"Evidence backup করুন।",
"Platform-এ report/block করুন।",
"বিশ্বাসযোগ্য family/friend-কে জানান।",
"ভারতে cybercrime reporting route ব্যবহার করুন।"
],
"Evidence delete করবেন না।",
"Blackmailer-এর সঙ্গে দেখা করতে যাবেন না।",
CC_LINKS.cybercrime
),

/* ========================= PRIVACY ========================== */

ccGuide(
"Privacy",
"Account Security",
"আমার account কোথায় login আছে দেখতে চাই",
"👁️",
[
"Account-এর Security settings খুলুন।",
"Logged-in devices/session list দেখুন।",
"অচেনা device শনাক্ত করুন।",
"Unknown session sign out করুন।",
"Suspicious activity থাকলে password পরিবর্তন করুন।",
"Two-factor authentication চালু করুন।"
],
"Device name ও last active information মিলিয়ে দেখুন।",
"শুধু approximate location দেখে সিদ্ধান্ত নেবেন না।",
CC_LINKS.googleSecurity
),

ccGuide(
"Cyber Security",
"Passwords",
"নিরাপদ password বানাতে চাই",
"🔑",
[
"প্রতিটি গুরুত্বপূর্ণ account-এ আলাদা password ব্যবহার করুন।",
"Long passphrase ব্যবহার করুন।",
"Password manager ব্যবহার করতে পারেন।",
"Two-factor authentication চালু করুন।",
"Recovery email/phone updated রাখুন।",
"Leaked বা reused password পরিবর্তন করুন।"
],
"একই password একাধিক account-এ ব্যবহার করেছেন কি না দেখুন।",
"Password public notes বা social media chat-এ রাখবেন না।",
"https://www.cisa.gov/secure-our-world/use-strong-passwords"
),

/* ========================= BROWSER ========================== */

ccGuide(
"Browser",
"Security",
"Browser-এ suspicious popup আসছে",
"🌐",
[
"Popup-এ click করবেন না।",
"Suspicious tab বন্ধ করুন।",
"Browser notification permissions review করুন।",
"Unknown extensions remove করুন।",
"Browser update করুন।",
"Suspicious app install হয়ে থাকলে uninstall করুন।",
"Account password/permissions review করুন।"
],
"কোন website থেকে popup আসছে তা দেখুন।",
"Popup বলছে phone infected—এমন message দেখে random cleaner/security app install করবেন না।",
CC_LINKS.chrome
)

];

/* ============================================================
   SEARCH / NORMALIZATION
============================================================ */

function ccNormalize(value) {

    return String(value || "")
        .toLowerCase()
        .replace(/[^\w\u0980-\u09ff\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function ccSearch(query) {

    const q = ccNormalize(query);

    if (!q) {
        return CYBERCARE_GUIDES;
    }

    const words = q.split(" ");

    return CYBERCARE_GUIDES
        .map(item => {

            const text = ccNormalize(
                [
                    item.service,
                    item.category,
                    item.problem,
                    ...item.steps,
                    item.check,
                    item.dont
                ].join(" ")
            );

            let score = 0;

            if (ccNormalize(item.problem).includes(q)) {
                score += 100;
            }

            if (ccNormalize(item.service).includes(q)) {
                score += 60;
            }

            if (ccNormalize(item.category).includes(q)) {
                score += 40;
            }

            words.forEach(word => {

                if (word.length < 2) return;

                if (text.includes(word)) {
                    score += 10;
                }

            });

            return {
                item,
                score
            };

        })
        .filter(result => result.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(result => result.item);
}

/* ============================================================
   SERVICE / CATEGORY FILTER
============================================================ */

function ccServices() {

    return [
        ...new Set(
            CYBERCARE_GUIDES.map(item => item.service)
        )
    ];

}

function ccCategories(service = "") {

    return [
        ...new Set(
            CYBERCARE_GUIDES
                .filter(item =>
                    !service ||
                    item.service === service
                )
                .map(item => item.category)
        )
    ];

}

function ccProblems(service = "", category = "") {

    return CYBERCARE_GUIDES.filter(item => {

        return (
            (!service || item.service === service) &&
            (!category || item.category === category)
        );

    });

}

/* ============================================================
   HTML SAFETY
============================================================ */

function ccEscape(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}

/* ============================================================
   GUIDE HTML
============================================================ */

function ccGuideHTML(item) {

    const steps = item.steps.map((step, index) => {

        return `
            <div class="cc-dynamic-step">
                <span class="cc-dynamic-step-number">
                    ${index + 1}
                </span>

                <span class="cc-dynamic-step-text">
                    ${ccEscape(step)}
                </span>
            </div>
        `;

    }).join("");

    return `
        <article class="cc-dynamic-guide">

            <div class="cc-dynamic-header">

                <div class="cc-dynamic-icon">
                    ${item.icon}
                </div>

                <div>
                    <small>
                        ${ccEscape(item.service)}
                        •
                        ${ccEscape(item.category)}
                    </small>

                    <h3>
                        ${ccEscape(item.problem)}
                    </h3>
                </div>

            </div>

            <div class="cc-dynamic-body">

                <h4>What you should do</h4>

                <div class="cc-dynamic-steps">
                    ${steps}
                </div>

                <div class="cc-dynamic-check">
                    <strong>🔎 আগে যা check করবেন:</strong>
                    <br>
                    ${ccEscape(item.check)}
                </div>

                <div class="cc-dynamic-dont">
                    <strong>⚠️ যা করবেন না:</strong>
                    <br>
                    ${ccEscape(item.dont)}
                </div>

                <a
                    class="cc-dynamic-official"
                    href="${ccEscape(item.official)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Official Help / Report →
                </a>

            </div>

        </article>
    `;

}

/* ============================================================
   FIND EXISTING RESULT CONTAINER
   ------------------------------------------------------------
   IMPORTANT:
   We only use existing elements.
   We DO NOT create homepage sections automatically.
============================================================ */

function ccFindResultContainer() {

    const selectors = [

        "#results",
        "#searchResults",
        "#guideResults",
        "#guidesContainer",
        "#guides",
        "#resultsContainer",
        ".results",
        ".guide-results",
        ".guides-container"

    ];

    for (const selector of selectors) {

        const element =
            document.querySelector(selector);

        if (element) {
            return element;
        }

    }

    return null;

}

/* ============================================================
   RENDER RESULTS
============================================================ */

function ccRender(items, container = null) {

    const target =
        container ||
        ccFindResultContainer();

    if (!target) {

        console.warn(
            "CyberCare: existing result container not found."
        );

        return;

    }

    if (!items.length) {

        target.innerHTML = `
            <div class="cc-dynamic-empty">

                <div>🔍</div>

                <h3>
                    Problem not found
                </h3>

                <p>
                    অন্যভাবে লিখে আবার চেষ্টা করুন।
                    যেমন:
                    <br>
                    <b>password ভুলে গেছি</b>
                    <br>
                    <b>account hacked</b>
                    <br>
                    <b>SIM নেই</b>
                    <br>
                    <b>monetization</b>
                </p>

            </div>
        `;

        return;

    }

    target.innerHTML =
        items.map(ccGuideHTML).join("");

}

/* ============================================================
   SEARCH INPUT CONNECTOR
============================================================ */

function ccFindSearchInput() {

    const selectors = [

        "#searchInput",
        "#search",
        "#searchBox",
        "#guideSearch",
        "#problemSearch",
        ".search-input",
        "input[type='search']"

    ];

    for (const selector of selectors) {

        const element =
            document.querySelector(selector);

        if (element) {
            return element;
        }

    }

    return null;

}

function ccConnectSearch() {

    const input =
        ccFindSearchInput();

    const resultContainer =
        ccFindResultContainer();

    if (!input || !resultContainer) {

        console.log(
            "CyberCare search: existing search/result elements not detected."
        );

        return;

    }

    let timer = null;

    input.addEventListener("input", () => {

        clearTimeout(timer);

        timer = setTimeout(() => {

            const query =
                input.value.trim();

            if (!query) {

                /*
                   IMPORTANT:
                   Empty search restores the existing
                   UI state only if the current result
                   container is intended for guides.
                */

                return;

            }

            const results =
                ccSearch(query);

            ccRender(
                results,
                resultContainer
            );

        }, 120);

    });

}

/* ============================================================
   EXISTING MENU BUTTON SUPPORT
   ------------------------------------------------------------
   If existing HTML has data-service / data-category /
   data-problem attributes, this automatically works.
============================================================ */

function ccConnectExistingMenu() {

    document.addEventListener("click", event => {

        const serviceButton =
            event.target.closest(
                "[data-service]"
            );

        if (serviceButton) {

            const service =
                serviceButton.dataset.service;

            const results =
                ccProblems(service);

            const container =
                ccFindResultContainer();

            if (container) {

                ccRender(
                    results,
                    container
                );

            }

            return;

        }

        const categoryButton =
            event.target.closest(
                "[data-category]"
            );

        if (categoryButton) {

            const category =
                categoryButton.dataset.category;

            const results =
                ccProblems(
                    "",
                    category
                );

            const container =
                ccFindResultContainer();

            if (container) {

                ccRender(
                    results,
                    container
                );

            }

            return;

        }

        const problemButton =
            event.target.closest(
                "[data-problem]"
            );

        if (problemButton) {

            const problem =
                problemButton.dataset.problem;

            const results =
                ccSearch(problem);

            const container =
                ccFindResultContainer();

            if (container) {

                ccRender(
                    results,
                    container
                );

            }

        }

    });

}

/* ============================================================
   DARK MODE — ONLY USE EXISTING TOGGLE
============================================================ */

function ccConnectDarkMode() {

    const toggle =
        document.querySelector(
            "#darkModeToggle"
        ) ||
        document.querySelector(
            "[data-dark-mode]"
        );

    if (!toggle) {
        return;
    }

    const saved =
        localStorage.getItem(
            "cybercare-dark-mode"
        );

    if (saved === "true") {

        document.body.classList.add(
            "dark-mode"
        );

    }

    toggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark-mode"
            );

            localStorage.setItem(
                "cybercare-dark-mode",
                document.body.classList.contains(
                    "dark-mode"
                )
            );

        }
    );

}

/* ============================================================
   LANGUAGE SUPPORT
   ------------------------------------------------------------
   Does NOT create a new language UI.
   It only connects to existing buttons if present.
============================================================ */

const CC_LANG = {

    en: {
        searchPlaceholder:
            "Search your problem..."
    },

    bn: {
        searchPlaceholder:
            "আপনার সমস্যাটি লিখুন..."
    }

};

function ccSetLanguage(language) {

    const data =
        CC_LANG[language] ||
        CC_LANG.en;

    const input =
        ccFindSearchInput();

    if (input) {

        input.placeholder =
            data.searchPlaceholder;

    }

    localStorage.setItem(
        "cybercare-language",
        language
    );

}

function ccConnectLanguage() {

    const languageButtons =
        document.querySelectorAll(
            "[data-language]"
        );

    languageButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                ccSetLanguage(
                    button.dataset.language
                );

            }
        );

    });

    const saved =
        localStorage.getItem(
            "cybercare-language"
        );

    if (saved) {
        ccSetLanguage(saved);
    }

}

/* ============================================================
   GLOBAL CYBERCARE API
   ------------------------------------------------------------
   Useful for existing HTML buttons.
============================================================ */

window.CyberCare = {

    guides:
        CYBERCARE_GUIDES,

    search:
        ccSearch,

    services:
        ccServices,

    categories:
        ccCategories,

    problems:
        ccProblems,

    render:
        ccRender,

    openProblem(problem) {

        const results =
            ccSearch(problem);

        ccRender(results);

    },

    openService(service) {

        const results =
            ccProblems(service);

        ccRender(results);

    },

    openCategory(category) {

        const results =
            ccProblems("", category);

        ccRender(results);

    },

    getStats() {

        return {

            totalProblems:
                CYBERCARE_GUIDES.length,

            totalServices:
                ccServices().length,

            totalCategories:
                ccCategories().length

        };

    }

};

/* ============================================================
   START
============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
           Connect only to EXISTING elements.
           Nothing new is injected into the homepage.
        */

        ccConnectSearch();

        ccConnectExistingMenu();

        ccConnectDarkMode();

        ccConnectLanguage();

        console.log(
            "CyberCare A-Z Digital Safety Engine loaded."
        );

        console.log(
            "Problems:",
            CYBERCARE_GUIDES.length
        );

        console.log(
            "Services:",
            ccServices().length
        );

    }
);
/* ============================================================
   CYBERCARE — FINAL SYSTEM CONNECTOR
   ------------------------------------------------------------
   CONNECTS THE EXISTING HTML TO THE EXISTING A-Z ENGINE
   ------------------------------------------------------------
   DO NOT DELETE THE EXISTING SCRIPT.JS DATABASE.
   PASTE THIS BLOCK AT THE VERY END OF script.js
============================================================ */

(function () {
    "use strict";

    /* =========================================================
       SMALL HELPERS
    ========================================================= */

    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);

    function safeScrollTo(id) {
        const el = document.getElementById(id);

        if (!el) return false;

        el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        return true;
    }

    function closeMenu() {
        const menu = $("#sideMenu");
        const overlay = $("#menuOverlay");

        if (menu) menu.classList.remove("active");
        if (overlay) overlay.classList.remove("active");

        document.body.classList.remove("menu-open");
    }

    function openMenu() {
        const menu = $("#sideMenu");
        const overlay = $("#menuOverlay");

        if (menu) menu.classList.add("active");
        if (overlay) overlay.classList.add("active");

        document.body.classList.add("menu-open");
    }

    /* =========================================================
       DYNAMIC GUIDE MODAL
    ========================================================= */

    function createGuideModal() {

        let modal = $("#cybercareGuideModal");

        if (modal) return modal;

        modal = document.createElement("div");

        modal.id = "cybercareGuideModal";
        modal.className = "guide-overlay";

        modal.innerHTML = `
            <div
                class="guide-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="ccGuideTitle"
            >

                <button
                    type="button"
                    class="guide-close"
                    id="ccGuideClose"
                    aria-label="Close"
                >
                    ✕
                </button>

                <h2 id="ccGuideTitle">
                    CyberCare Guide
                </h2>

                <div
                    id="ccGuideBody"
                    class="guide-content"
                ></div>

                <button
                    type="button"
                    class="guide-ok"
                    id="ccGuideOk"
                >
                    ✓ Got it
                </button>

            </div>
        `;

        document.body.appendChild(modal);

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {
                closeGuideModal();
            }

        });

        $("#ccGuideClose").addEventListener(
            "click",
            closeGuideModal
        );

        $("#ccGuideOk").addEventListener(
            "click",
            closeGuideModal
        );

        return modal;
    }

    function closeGuideModal() {

        const modal = $("#cybercareGuideModal");

        if (modal) {
            modal.remove();
        }

        document.body.classList.remove("modal-open");
    }

    function openGuide(item) {

        if (!item) return;

        const modal = createGuideModal();

        const title = $("#ccGuideTitle");
        const body = $("#ccGuideBody");

        if (!title || !body) return;

        title.textContent =
            `${item.icon || "🛡️"} ${item.problem}`;

        let html = "";

        html += `
            <div style="
                margin-bottom:15px;
                color:#64748b;
                font-size:13px;
                font-weight:700;
            ">
                ${item.service || ""}
                •
                ${item.category || ""}
            </div>
        `;

        html += `
            <h3>What you should do</h3>
            <ol>
        `;

        (item.steps || []).forEach(function (step) {

            html += `
                <li>
                    ${escapeHTML(step)}
                </li>
            `;

        });

        html += `</ol>`;

        if (item.check) {

            html += `
                <div style="
                    margin-top:15px;
                    padding:13px;
                    border-radius:12px;
                    background:#eff6ff;
                    color:#1e40af;
                ">
                    <strong>🔎 Check:</strong><br>
                    ${escapeHTML(item.check)}
                </div>
            `;

        }

        if (item.dont) {

            html += `
                <div style="
                    margin-top:12px;
                    padding:13px;
                    border-radius:12px;
                    background:#fff7ed;
                    color:#9a3412;
                ">
                    <strong>⚠️ Don't:</strong><br>
                    ${escapeHTML(item.dont)}
                </div>
            `;

        }

        if (item.official) {

            html += `
                <a
                    href="${escapeAttribute(item.official)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    style="
                        display:block;
                        margin-top:15px;
                        padding:13px;
                        border-radius:11px;
                        background:#2563eb;
                        color:white;
                        text-align:center;
                        font-weight:800;
                    "
                >
                    Official Help / Report →
                </a>
            `;

        }

        body.innerHTML = html;

        modal.classList.add("active");

        document.body.classList.add("modal-open");
    }

    function escapeHTML(value) {

        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function escapeAttribute(value) {
        return escapeHTML(value);
    }

    /* =========================================================
       FIND BEST GUIDE
    ========================================================= */

    function findGuide(query) {

        if (
            typeof ccSearch !== "function" ||
            typeof CYBERCARE_GUIDES === "undefined"
        ) {
            return null;
        }

        const results = ccSearch(query);

        return results && results.length
            ? results[0]
            : null;
    }

    function openProblem(query) {

        const item = findGuide(query);

        if (item) {
            openGuide(item);
            return true;
        }

        return false;
    }

    /* =========================================================
       SEARCH SYSTEM
    ========================================================= */

    function connectSearch() {

        const input = $("#problemSearch");
        const resultsBox = $("#searchResults");
        const clearBtn = $("#clearSearch");

        if (!input || !resultsBox) return;

        let timer = null;

        function renderSearchResults(query) {

            query = String(query || "").trim();

            if (!query) {

                resultsBox.innerHTML = "";

                return;
            }

            if (
                typeof ccSearch !== "function"
            ) {
                resultsBox.innerHTML = `
                    <div class="search-result">
                        Search system unavailable.
                    </div>
                `;

                return;
            }

            const results = ccSearch(query);

            if (!results.length) {

                resultsBox.innerHTML = `
                    <div class="search-result">
                        <h3>🔍 Problem not found</h3>

                        <p>
                            অন্যভাবে লিখে আবার চেষ্টা করুন।
                            যেমন:
                            <br>
                            <b>account hacked</b>
                            <br>
                            <b>blackmail</b>
                            <br>
                            <b>UPI fraud</b>
                            <br>
                            <b>password ভুলে গেছি</b>
                        </p>
                    </div>
                `;

                return;
            }

            const topResults = results.slice(0, 6);

            resultsBox.innerHTML =
                topResults.map(function (item, index) {

                    return `
                        <div
                            class="search-result"
                            data-result-index="${index}"
                        >

                            <h3>
                                ${item.icon || "🛡️"}
                                ${escapeHTML(item.problem)}
                            </h3>

                            <p>
                                ${escapeHTML(item.service)}
                                •
                                ${escapeHTML(item.category)}
                            </p>

                            <button
                                type="button"
                                class="result-help"
                                data-open-result="${index}"
                            >
                                View Step-by-Step Help →
                            </button>

                        </div>
                    `;

                }).join("");

            resultsBox
                .querySelectorAll("[data-open-result]")
                .forEach(function (button) {

                    button.addEventListener(
                        "click",
                        function () {

                            const index =
                                Number(
                                    button.dataset.openResult
                                );

                            openGuide(topResults[index]);

                        }
                    );

                });
        }

        input.addEventListener(
            "input",
            function () {

                clearTimeout(timer);

                timer = setTimeout(
                    function () {
                        renderSearchResults(
                            input.value
                        );
                    },
                    100
                );

            }
        );

        input.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    renderSearchResults(
                        input.value
                    );

                }

            }
        );

        if (clearBtn) {

            clearBtn.addEventListener(
                "click",
                function () {

                    input.value = "";

                    resultsBox.innerHTML = "";

                    input.focus();

                }
            );

        }
    }

    /* =========================================================
       QUICK HELP
    ========================================================= */

    const QUICK_HELP_MAP = {

        "Account Recovery":
            "Facebook account hacked",

        "Scam & Phishing":
            "Suspicious link পেয়েছি",

        "Online Fraud":
            "UPI fraud হয়েছে",

        "Phone Security":
            "Phone security"
    };

    function connectQuickHelp() {

        $$("[data-service]").forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const service =
                            button.dataset.service;

                        const query =
                            QUICK_HELP_MAP[service] ||
                            service;

                        closeMenu();

                        const input =
                            $("#problemSearch");

                        if (input) {

                            input.value = query;

                            input.dispatchEvent(
                                new Event("input", {
                                    bubbles: true
                                })
                            );

                            safeScrollTo("services");

                            setTimeout(
                                function () {

                                    const item =
                                        findGuide(query);

                                    if (item) {
                                        openGuide(item);
                                    }

                                },
                                250
                            );

                        }

                    }
                );

            }
        );
    }

    /* =========================================================
       3-DOT MENU
    ========================================================= */

    function connectMenu() {

        const menuBtn = $("#menuBtn");
        const closeBtn = $("#closeMenu");
        const overlay = $("#menuOverlay");

        if (menuBtn) {

            menuBtn.addEventListener(
                "click",
                function () {

                    const menu =
                        $("#sideMenu");

                    if (
                        menu &&
                        menu.classList.contains("active")
                    ) {
                        closeMenu();
                    } else {
                        openMenu();
                    }

                }
            );

        }

        if (closeBtn) {

            closeBtn.addEventListener(
                "click",
                closeMenu
            );

        }

        if (overlay) {

            overlay.addEventListener(
                "click",
                closeMenu
            );

        }

        document.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Escape") {
                    closeMenu();
                    closeGuideModal();
                }

            }
        );

        $$(".menu-item").forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const target =
                            button.dataset.menu;

                        closeMenu();

                        if (target === "services") {

                            safeScrollTo(
                                "services"
                            );

                            setTimeout(
                                function () {

                                    const input =
                                        $("#problemSearch");

                                    if (input) {
                                        input.focus();
                                    }

                                },
                                450
                            );

                            return;
                        }

                        if (
                            target ===
                            "womenSafety"
                        ) {

                            safeScrollTo(
                                "womenSafety"
                            );

                            return;
                        }

                        if (
                            target ===
                            "emergency"
                        ) {

                            safeScrollTo(
                                "emergency"
                            );

                            return;
                        }

                        if (target === "tools") {

                            safeScrollTo(
                                "tools"
                            );

                            return;
                        }

                        if (target === "learn") {

                            safeScrollTo(
                                "learn"
                            );

                            return;
                        }

                    }
                );

            }
        );
    }

    /* =========================================================
       DARK MODE
    ========================================================= */

    function connectDarkMode() {

        const button = $("#themeBtn");

        if (!button) return;

        const saved =
            localStorage.getItem(
                "cybercare-dark-mode"
            );

        if (saved === "true") {

            document.body.classList.add(
                "dark-mode"
            );

            button.textContent = "☀️";

        } else {

            button.textContent = "🌙";

        }

        button.addEventListener(
            "click",
            function () {

                const active =
                    document.body.classList.toggle(
                        "dark-mode"
                    );

                localStorage.setItem(
                    "cybercare-dark-mode",
                    active ? "true" : "false"
                );

                button.textContent =
                    active ? "☀️" : "🌙";

            }
        );
    }

    /* =========================================================
       LANGUAGE
       EN → বাংলা → हिन्दी → EN
    ========================================================= */

    const LANGS = [
        "EN",
        "বাংলা",
        "हिन्दी"
    ];

    const LANGUAGE_TEXT = {

        EN: {
            placeholder:
                "Example: someone is blackmailing me...",
            help:
                "Find My Problem",
            emergency:
                "🚨 I Need Help Now"
        },

        "বাংলা": {
            placeholder:
                "আপনার সমস্যাটি লিখুন...",
            help:
                "আমার সমস্যা খুঁজুন",
            emergency:
                "🚨 এখনই সাহায্য চাই"
        },

        "हिन्दी": {
            placeholder:
                "अपनी समस्या लिखें...",
            help:
                "मेरी समस्या खोजें",
            emergency:
                "🚨 मुझे अभी मदद चाहिए"
        }

    };

    function setLanguage(lang) {

        const data =
            LANGUAGE_TEXT[lang] ||
            LANGUAGE_TEXT.EN;

        const languageText =
            $("#languageText");

        const search =
            $("#problemSearch");

        const helpButton =
            $("#quickHelpBtn");

        const emergencyButton =
            $("#emergencyBtn");

        if (languageText) {
            languageText.textContent = lang;
        }

        if (search) {
            search.placeholder =
                data.placeholder;
        }

        if (helpButton) {
            helpButton.textContent =
                "🔎 " + data.help;
        }

        if (emergencyButton) {
            emergencyButton.textContent =
                data.emergency;
        }

        localStorage.setItem(
            "cybercare-language",
            lang
        );
    }

    function connectLanguage() {

        const button =
            $("#languageBtn");

        if (!button) return;

        let current =
            localStorage.getItem(
                "cybercare-language"
            ) || "EN";

        if (!LANGS.includes(current)) {
            current = "EN";
        }

        setLanguage(current);

        button.addEventListener(
            "click",
            function () {

                const index =
                    LANGS.indexOf(current);

                current =
                    LANGS[
                        (index + 1) %
                        LANGS.length
                    ];

                setLanguage(current);

            }
        );
    }

    /* =========================================================
       HERO BUTTONS
    ========================================================= */

    function connectHeroButtons() {

        const emergency =
            $("#emergencyBtn");

        const quick =
            $("#quickHelpBtn");

        if (emergency) {

            emergency.addEventListener(
                "click",
                function () {

                    safeScrollTo(
                        "emergency"
                    );

                }
            );

        }

        if (quick) {

            quick.addEventListener(
                "click",
                function () {

                    safeScrollTo(
                        "services"
                    );

                    setTimeout(
                        function () {

                            const input =
                                $("#problemSearch");

                            if (input) {
                                input.focus();
                            }

                        },
                        450
                    );

                }
            );

        }
    }

    /* =========================================================
       WOMEN SAFETY
    ========================================================= */

    const WOMEN_MAP = {

        harassment:
            "ফোন করে বিরক্ত করছে",

        blackmail:
            "Private photo/video দিয়ে blackmail করছে",

        private:
            "Private photo/video দিয়ে blackmail করছে",

        fakeprofile:
            "fake profile",

        photo:
            "photo misuse",

        stalking:
            "কেউ online/offline stalk করছে"
    };

    function connectWomenSafety() {

        $$("[data-women]").forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const key =
                            button.dataset.women;

                        const query =
                            WOMEN_MAP[key] ||
                            key;

                        const item =
                            findGuide(query);

                        if (item) {
                            openGuide(item);
                        } else {

                            openGenericGuide(
                                button.innerText
                            );

                        }

                    }
                );

            }
        );
    }

    /* =========================================================
       EMERGENCY
    ========================================================= */

    const EMERGENCY_MAP = {

        account:
            "কেউ আমার Facebook password পরিবর্তন করেছে",

        money:
            "UPI fraud হয়েছে",

        blackmail:
            "Private photo/video দিয়ে blackmail করছে",

        phone:
            "Phone hacked"
    };

    function connectEmergency() {

        $$("[data-emergency]").forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const key =
                            button.dataset.emergency;

                        const query =
                            EMERGENCY_MAP[key] ||
                            key;

                        const item =
                            findGuide(query);

                        if (item) {

                            openGuide(item);

                        } else {

                            openGenericGuide(
                                button.innerText
                            );

                        }

                    }
                );

            }
        );
    }

    /* =========================================================
       GENERIC GUIDE
    ========================================================= */

    function openGenericGuide(title) {

        const modal =
            createGuideModal();

        const heading =
            $("#ccGuideTitle");

        const body =
            $("#ccGuideBody");

        if (!heading || !body) return;

        heading.textContent =
            "🛡️ " + title;

        body.innerHTML = `

            <h3>Immediate Safety Steps</h3>

            <ol>
                <li>Stay calm and do not panic.</li>

                <li>
                    Save screenshots, messages,
                    transaction IDs and other evidence.
                </li>

                <li>
                    Do not share OTP, password,
                    UPI PIN or recovery codes.
                </li>

                <li>
                    Do not send additional money
                    or sensitive information.
                </li>

                <li>
                    Secure the affected account,
                    device or payment method.
                </li>

                <li>
                    Use the official support/reporting
                    channel for the affected service.
                </li>

                <li>
                    If there is immediate physical danger,
                    contact local emergency services.
                </li>
            </ol>

            <div style="
                margin-top:15px;
                padding:13px;
                border-radius:12px;
                background:#fff7ed;
                color:#9a3412;
            ">
                <strong>⚠️ Important</strong><br>
                Never give your OTP, password,
                UPI PIN or recovery code to someone
                claiming to be customer support.
            </div>
        `;

        modal.classList.add("active");

        document.body.classList.add(
            "modal-open"
        );
    }

    /* =========================================================
       SAFETY TOOLS
    ========================================================= */

    function openTool(tool) {

        const modal =
            createGuideModal();

        const heading =
            $("#ccGuideTitle");

        const body =
            $("#ccGuideBody");

        if (!heading || !body) return;

        let title = "";
        let content = "";

        if (tool === "scam") {

            title = "🎣 Scam Scanner";

            content = `

                <h3>Paste the suspicious message</h3>

                <textarea
                    id="ccScamInput"
                    style="
                        width:100%;
                        min-height:130px;
                        padding:12px;
                        border:1px solid #cbd5e1;
                        border-radius:12px;
                        resize:vertical;
                    "
                    placeholder="Paste SMS / WhatsApp / email text here..."
                ></textarea>

                <button
                    id="ccScamCheck"
                    class="guide-ok"
                    style="margin-top:10px;"
                >
                    🔍 Check Warning Signs
                </button>

                <div
                    id="ccScamResult"
                    style="margin-top:12px;"
                ></div>
            `;

        }

        else if (tool === "password") {

            title = "🔐 Password Checker";

            content = `

                <h3>Basic password strength check</h3>

                <input
                    id="ccPasswordInput"
                    type="password"
                    autocomplete="off"
                    placeholder="Type a password to test"
                    style="
                        width:100%;
                        height:48px;
                        padding:0 12px;
                        border:1px solid #cbd5e1;
                        border-radius:12px;
                    "
                >

                <button
                    id="ccPasswordCheck"
                    class="guide-ok"
                    style="margin-top:10px;"
                >
                    Check Strength
                </button>

                <div
                    id="ccPasswordResult"
                    style="margin-top:12px;"
                ></div>

                <p style="
                    margin-top:12px;
                    font-size:12px;
                    color:#64748b;
                ">
                    Password is checked locally in your browser.
                    It is not sent anywhere by this tool.
                </p>
            `;

        }

        else if (tool === "url") {

            title = "🔗 URL Checker";

            content = `

                <h3>Check basic suspicious patterns</h3>

                <input
                    id="ccUrlInput"
                    type="url"
                    placeholder="https://example.com"
                    style="
                        width:100%;
                        height:48px;
                        padding:0 12px;
                        border:1px solid #cbd5e1;
                        border-radius:12px;
                    "
                >

                <button
                    id="ccUrlCheck"
                    class="guide-ok"
                    style="margin-top:10px;"
                >
                    Check URL
                </button>

                <div
                    id="ccUrlResult"
                    style="margin-top:12px;"
                ></div>
            `;

        }

        else if (tool === "privacy") {

            title = "🔒 Privacy Checklist";

            content = `

                <h3>Review these settings</h3>

                <ol>
                    <li>Use a screen lock.</li>
                    <li>Enable 2FA on important accounts.</li>
                    <li>Review logged-in devices.</li>
                    <li>Remove unknown apps.</li>
                    <li>Review app permissions.</li>
                    <li>Keep Android/iOS updated.</li>
                    <li>Keep recovery email and phone updated.</li>
                    <li>Do not share OTP or recovery codes.</li>
                </ol>
            `;

        }

        else if (tool === "evidence") {

            title = "🧾 Evidence Checklist";

            content = `

                <h3>Preserve evidence</h3>

                <ol>
                    <li>Take screenshots.</li>
                    <li>Keep original messages.</li>
                    <li>Save profile usernames and URLs.</li>
                    <li>Record date and time.</li>
                    <li>Save transaction ID / UTR for financial fraud.</li>
                    <li>Keep email headers where relevant.</li>
                    <li>Make a safe backup.</li>
                    <li>Do not edit the original evidence.</li>
                </ol>
            `;

        }

        else if (tool === "score") {

            title = "🛡️ Cyber Safety Score";

            content = `

                <h3>Quick Security Score</h3>

                <p>
                    Answer these questions:
                </p>

                <label>
                    <input type="checkbox" class="cc-score">
                    I use different passwords for important accounts.
                </label>

                <br><br>

                <label>
                    <input type="checkbox" class="cc-score">
                    I use 2FA.
                </label>

                <br><br>

                <label>
                    <input type="checkbox" class="cc-score">
                    My phone has a screen lock.
                </label>

                <br><br>

                <label>
                    <input type="checkbox" class="cc-score">
                    I review account login sessions.
                </label>

                <br><br>

                <label>
                    <input type="checkbox" class="cc-score">
                    I don't share OTP/PIN/passwords.
                </label>

                <button
                    id="ccScoreCheck"
                    class="guide-ok"
                    style="margin-top:15px;"
                >
                    Calculate Score
                </button>

                <div
                    id="ccScoreResult"
                    style="margin-top:12px;"
                ></div>
            `;

        }

        else {

            title = "🛡️ CyberCare Tool";

            content = `
                <p>
                    This CyberCare tool is ready.
                    Follow the safety steps shown here
                    and use official support channels
                    for serious incidents.
                </p>
            `;

        }

        heading.textContent = title;
        body.innerHTML = content;

        modal.classList.add("active");

        document.body.classList.add(
            "modal-open"
        );

        connectToolActions(tool);
    }

    function connectToolActions(tool) {

        if (tool === "scam") {

            const button =
                $("#ccScamCheck");

            if (!button) return;

            button.addEventListener(
                "click",
                function () {

                    const text =
                        (
                            $("#ccScamInput")?.value ||
                            ""
                        ).toLowerCase();

                    const warnings = [];

                    const patterns = [
                        ["otp", "Requests an OTP"],
                        ["pin", "Requests a PIN"],
                        ["password", "Requests a password"],
                        ["urgent", "Uses urgency"],
                        ["click", "Pushes you to click"],
                        ["payment", "Requests payment"],
                        ["refund", "Mentions a refund"],
                        ["prize", "Promises a prize"],
                        ["verify", "Requests verification"],
                        ["account blocked", "Claims the account is blocked"]
                    ];

                    patterns.forEach(
                        function (item) {

                            if (
                                text.includes(
                                    item[0]
                                )
                            ) {
                                warnings.push(
                                    item[1]
                                );
                            }

                        }
                    );

                    const result =
                        $("#ccScamResult");

                    if (!result) return;

                    if (!text.trim()) {

                        result.innerHTML = `
                            <div style="
                                padding:12px;
                                border-radius:11px;
                                background:#fff7ed;
                                color:#9a3412;
                            ">
                                Paste a message first.
                            </div>
                        `;

                        return;
                    }

                    if (warnings.length) {

                        result.innerHTML = `
                            <div style="
                                padding:13px;
                                border-radius:11px;
                                background:#fef2f2;
                                color:#991b1b;
                            ">
                                <strong>
                                    ⚠️ Warning signs found
                                </strong>

                                <ul style="padding-left:20px;">
                                    ${warnings.map(
                                        x => `<li>${x}</li>`
                                    ).join("")}
                                </ul>

                                <p>
                                    Do not click suspicious
                                    links or share OTP/PIN/passwords.
                                </p>
                            </div>
                        `;

                    } else {

                        result.innerHTML = `
                            <div style="
                                padding:13px;
                                border-radius:11px;
                                background:#f0fdf4;
                                color:#166534;
                            ">
                                No obvious warning keyword
                                was detected. This does NOT prove
                                the message is safe.
                            </div>
                        `;

                    }

                }
            );

        }

        if (tool === "password") {

            const button =
                $("#ccPasswordCheck");

            if (!button) return;

            button.addEventListener(
                "click",
                function () {

                    const value =
                        $("#ccPasswordInput")?.value ||
                        "";

                    const result =
                        $("#ccPasswordResult");

                    if (!result) return;

                    let score = 0;

                    if (value.length >= 12)
                        score++;

                    if (/[A-Z]/.test(value))
                        score++;

                    if (/[a-z]/.test(value))
                        score++;

                    if (/[0-9]/.test(value))
                        score++;

                    if (/[^A-Za-z0-9]/.test(value))
                        score++;

                    let message;

                    if (score <= 2) {

                        message =
                            "🔴 Weak — use a longer unique passphrase.";

                    } else if (score <= 4) {

                        message =
                            "🟠 Moderate — improve length and uniqueness.";

                    } else {

                        message =
                            "🟢 Stronger pattern — still use 2FA and never reuse it.";

                    }

                    result.innerHTML = `
                        <div style="
                            padding:13px;
                            border-radius:11px;
                            background:#f8fafc;
                        ">
                            ${message}
                        </div>
                    `;

                }
            );

        }

        if (tool === "url") {

            const button =
                $("#ccUrlCheck");

            if (!button) return;

            button.addEventListener(
                "click",
                function () {

                    const value =
                        $("#ccUrlInput")?.value ||
                        "";

                    const result =
                        $("#ccUrlResult");

                    if (!result) return;

                    let warnings = [];

                    try {

                        const url =
                            new URL(value);

                        if (
                            url.protocol !==
                            "https:"
                        ) {
                            warnings.push(
                                "The URL is not using HTTPS."
                            );
                        }

                        if (
                            url.hostname.includes(
                                "xn--"
                            )
                        ) {
                            warnings.push(
                                "The domain uses punycode."
                            );
                        }

                        if (
                            url.hostname.split(".")
                                .length > 4
                        ) {
                            warnings.push(
                                "The domain has many subdomains."
                            );
                        }

                    } catch (error) {

                        warnings.push(
                            "This is not a valid URL."
                        );

                    }

                    if (warnings.length) {

                        result.innerHTML = `
                            <div style="
                                padding:13px;
                                border-radius:11px;
                                background:#fff7ed;
                                color:#9a3412;
                            ">
                                <strong>
                                    ⚠️ Review carefully
                                </strong>

                                <ul style="padding-left:20px;">
                                    ${warnings.map(
                                        x => `<li>${x}</li>`
                                    ).join("")}
                                </ul>

                                <p>
                                    This is only a basic
                                    pattern check and cannot
                                    prove whether a website is safe.
                                </p>
                            </div>
                        `;

                    } else {

                        result.innerHTML = `
                            <div style="
                                padding:13px;
                                border-radius:11px;
                                background:#f0fdf4;
                                color:#166534;
                            ">
                                No basic warning pattern
                                was detected. Still verify
                                the domain before logging in.
                            </div>
                        `;

                    }

                }
            );

        }

        if (tool === "score") {

            const button =
                $("#ccScoreCheck");

            if (!button) return;

            button.addEventListener(
                "click",
                function () {

                    const checks =
                        $$(".cc-score");

                    let score = 0;

                    checks.forEach(
                        function (check) {

                            if (check.checked) {
                                score++;
                            }

                        }
                    );

                    const result =
                        $("#ccScoreResult");

                    if (!result) return;

                    let text = "";

                    if (score <= 2) {

                        text =
                            "🔴 Your security needs improvement.";

                    } else if (score <= 4) {

                        text =
                            "🟠 Good start, but there are still gaps.";

                    } else {

                        text =
                            "🟢 Excellent basic security habits.";

                    }

                    result.innerHTML = `
                        <div style="
                            padding:13px;
                            border-radius:11px;
                            background:#eff6ff;
                            color:#1e40af;
                        ">
                            <strong>
                                Score: ${score}/5
                            </strong>
                            <br>
                            ${text}
                        </div>
                    `;

                }
            );

        }
    }

    function connectTools() {

        $$("[data-tool]").forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        closeMenu();

                        openTool(
                            button.dataset.tool
                        );

                    }
                );

            }
        );
    }

    /* =========================================================
       LEARNING SYSTEM
    ========================================================= */

    const LEARN_GUIDES = {

        password: {
            title: "🔐 Password Safety",
            text: `
                <h3>Safer password habits</h3>
                <ol>
                    <li>Use a unique password for important accounts.</li>
                    <li>Prefer a long passphrase.</li>
                    <li>Use a password manager if suitable.</li>
                    <li>Enable 2FA.</li>
                    <li>Never share passwords or recovery codes.</li>
                </ol>
            `
        },

        "2fa": {
            title: "🔑 Two-Factor Authentication",
            text: `
                <h3>Add another protection layer</h3>
                <ol>
                    <li>Open the account Security settings.</li>
                    <li>Find Two-Factor Authentication.</li>
                    <li>Choose an available secure method.</li>
                    <li>Save recovery codes securely.</li>
                    <li>Never share those codes.</li>
                </ol>
            `
        },

        phishing: {
            title: "🎣 Phishing Awareness",
            text: `
                <h3>Common warning signs</h3>
                <ul>
                    <li>Unexpected urgent messages.</li>
                    <li>Requests for OTP/password/PIN.</li>
                    <li>Suspicious domains.</li>
                    <li>Unexpected payment requests.</li>
                    <li>Threats that your account will be blocked.</li>
                </ul>
            `
        },

        privacy: {
            title: "🔒 Privacy",
            text: `
                <h3>Protect personal information</h3>
                <ol>
                    <li>Review app permissions.</li>
                    <li>Limit unnecessary location access.</li>
                    <li>Use strong screen lock.</li>
                    <li>Review logged-in devices.</li>
                    <li>Keep software updated.</li>
                </ol>
            `
        },

        phone: {
            title: "📱 Phone Security",
            text: `
                <h3>Keep your phone safer</h3>
                <ol>
                    <li>Install updates.</li>
                    <li>Remove unknown apps.</li>
                    <li>Review accessibility permissions.</li>
                    <li>Review device administrator apps.</li>
                    <li>Use a screen lock.</li>
                    <li>Secure important accounts.</li>
                </ol>
            `
        },

        financial: {
            title: "💳 Financial Safety",
            text: `
                <h3>Protect payments</h3>
                <ol>
                    <li>Never share UPI PIN.</li>
                    <li>Never share OTP.</li>
                    <li>Verify the recipient before payment.</li>
                    <li>Don't install remote-control apps on request.</li>
                    <li>Report suspected fraud quickly.</li>
                </ol>
            `
        }

    };

    function connectLearning() {

        $$("[data-learn]").forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const key =
                            button.dataset.learn;

                        const guide =
                            LEARN_GUIDES[key];

                        if (!guide) return;

                        const modal =
                            createGuideModal();

                        const heading =
                            $("#ccGuideTitle");

                        const body =
                            $("#ccGuideBody");

                        if (!heading || !body)
                            return;

                        heading.textContent =
                            guide.title;

                        body.innerHTML =
                            guide.text;

                        modal.classList.add(
                            "active"
                        );

                        document.body.classList.add(
                            "modal-open"
                        );

                    }
                );

            }
        );
    }

    /* =========================================================
       HOME MODE
       Keep important sections visible.
    ========================================================= */

    function connectHomeMode() {

        document.body.classList.add(
            "cybercare-clean-home"
        );

        /*
         * We DO NOT permanently hide sections.
         * The user must be able to access them
         * from the menu.
         */

        const hiddenSelectors = [
            "#womenSafety",
            "#tools",
            "#learn"
        ];

        function hideSecondary() {

            hiddenSelectors.forEach(
                function (selector) {

                    const el =
                        document.querySelector(
                            selector
                        );

                    if (el) {
                        el.dataset.ccHidden =
                            "true";

                        el.style.display =
                            "none";
                    }

                }
            );
        }

        function showSection(id) {

            const el =
                document.getElementById(id);

            if (!el) return;

            el.style.display = "";

            el.dataset.ccHidden =
                "false";

            el.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

        hideSecondary();

        $$(".menu-item").forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const target =
                            button.dataset.menu;

                        if (
                            target ===
                            "womenSafety"
                        ) {
                            showSection(
                                "womenSafety"
                            );
                        }

                        if (
                            target === "tools"
                        ) {
                            showSection(
                                "tools"
                            );
                        }

                        if (
                            target === "learn"
                        ) {
                            showSection(
                                "learn"
                            );
                        }

                    }
                );

            }
        );

    }

    /* =========================================================
       RE-OPEN HIDDEN SECTION FIX
    ========================================================= */

    function connectSectionVisibility() {

        function reveal(id) {

            const el =
                document.getElementById(id);

            if (!el) return;

            el.style.display = "";

            el.classList.add(
                "cybercare-visible-section"
            );

        }

        $$("[data-menu]").forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const target =
                            button.dataset.menu;

                        if (
                            target ===
                            "womenSafety"
                        ) {
                            reveal(
                                "womenSafety"
                            );
                        }

                        if (
                            target === "tools"
                        ) {
                            reveal("tools");
                        }

                        if (
                            target === "learn"
                        ) {
                            reveal("learn");
                        }

                        if (
                            target === "emergency"
                        ) {
                            reveal(
                                "emergency"
                            );
                        }

                    }
                );

            }
        );
    }

    /* =========================================================
       BODY CLASS FIX
       The old CSS hides secondary sections whenever
       cybercare-clean-home exists.
       Override that behavior here.
    ========================================================= */

    function installVisibilityCSS() {

        const style =
            document.createElement("style");

        style.id =
            "cybercare-final-visibility-fix";

        style.textContent = `

            body.cybercare-clean-home
            #womenSafety.cybercare-visible-section,
            body.cybercare-clean-home
            #tools.cybercare-visible-section,
            body.cybercare-clean-home
            #learn.cybercare-visible-section {
                display: block !important;
            }

            .guide-overlay {
                display: flex;
            }

            .guide-overlay.active {
                display: flex !important;
            }

            body.modal-open {
                overflow: hidden;
            }

            .cc-dynamic-guide {
                margin: 10px 0;
            }

            .cc-dynamic-step {
                display: flex;
                gap: 10px;
                margin-bottom: 10px;
            }

            .cc-dynamic-step-number {
                width: 27px;
                min-width: 27px;
                height: 27px;
                border-radius: 50%;
                background: #2563eb;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 800;
                font-size: 12px;
            }

            .cc-dynamic-step-text {
                flex: 1;
            }

            @media (max-width:600px) {

                .guide-overlay {
                    padding: 10px !important;
                }

                .guide-modal {
                    max-height: 92vh !important;
                    padding: 18px !important;
                }

            }

        `;

        document.head.appendChild(style);
    }

    /* =========================================================
       FINAL START
    ========================================================= */

    function startCyberCareFinalSystem() {

        try {

            installVisibilityCSS();

            connectMenu();

            connectSearch();

            connectQuickHelp();

            connectHeroButtons();

            connectDarkMode();

            connectLanguage();

            connectWomenSafety();

            connectEmergency();

            connectTools();

            connectLearning();

            connectHomeMode();

            connectSectionVisibility();

            console.log(
                "✅ CyberCare Final System Connected"
            );

            console.log(
                "📚 Guides:",
                typeof CYBERCARE_GUIDES !== "undefined"
                    ? CYBERCARE_GUIDES.length
                    : 0
            );

        } catch (error) {

            console.error(
                "❌ CyberCare System Error:",
                error
            );

        }

    }

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            startCyberCareFinalSystem
        );

    } else {

        startCyberCareFinalSystem();

    }

})();
