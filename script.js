/* ============================================================
   CYBERCARE — A TO Z DIGITAL PROBLEM SOLVER
   VERSION: FULL PROBLEM LIBRARY
   ------------------------------------------------------------
   Covers:
   Facebook, Instagram, WhatsApp, Google/Gmail, YouTube,
   AdSense, Android/Phone, UPI/Payments, Cyber Fraud,
   Women Safety, Email, Browser, Privacy, Passwords,
   Social Media Safety, Blackmail, Harassment, etc.
============================================================ */

"use strict";

/* ============================================================
   OFFICIAL LINKS
============================================================ */

const OFFICIAL = {
    facebook: "https://www.facebook.com/help/",
    instagram: "https://help.instagram.com/",
    whatsapp: "https://faq.whatsapp.com/",
    google: "https://support.google.com/",
    gmail: "https://support.google.com/mail/",
    youtube: "https://support.google.com/youtube/",
    adsense: "https://support.google.com/adsense/",
    android: "https://support.google.com/android/",
    youtubeStudio: "https://support.google.com/youtube/",
    cybercrime: "https://www.cybercrime.gov.in/",
    googleAccount: "https://accounts.google.com/signin/recovery/",
    facebookRecovery: "https://www.facebook.com/login/identify/",
    instagramRecovery: "https://www.instagram.com/accounts/password/reset/",
    whatsappSecurity: "https://faq.whatsapp.com/general/account-and-profile/about-two-step-verification/",
    youtubeStudioLogin: "https://studio.youtube.com/",
    googleSecurity: "https://myaccount.google.com/security"
};

/* ============================================================
   HELPER
============================================================ */

function makeGuide(service, category, problem, icon, steps, check, avoid, official) {
    return {
        service,
        category,
        problem,
        icon,
        steps,
        check,
        avoid,
        official
    };
}

/* ============================================================
   COMPLETE GUIDE DATABASE
============================================================ */

const CYBERCARE_GUIDES = [

/* ============================================================
   FACEBOOK — LOGIN & ACCOUNT
============================================================ */

makeGuide(
"Facebook",
"Login & Account",
"Password ভুলে গেছি",
"🔐",
[
"Facebook login page খুলুন।",
"আপনার account-এর সঙ্গে যুক্ত mobile number বা email দিন।",
"Forgot password / Forgotten password option নির্বাচন করুন।",
"যে recovery option দেখায় সেটি বেছে নিন।",
"Verification code পেলে code দিয়ে নতুন password তৈরি করুন।",
"নতুন password অন্য কোনো website-এ ব্যবহার করা password-এর মতো রাখবেন না।",
"Password পরিবর্তনের পরে Security settings খুলে অচেনা device/session থেকে logout করুন।"
],
"আপনার account-এর email বা phone এখনও ব্যবহার করতে পারছেন কি না দেখুন।",
"কাউকে OTP, login code বা password দেবেন না।",
OFFICIAL.facebookRecovery
),

makeGuide(
"Facebook",
"Login & Account",
"পুরোনো SIM/phone number নেই",
"📱",
[
"Facebook-এর account recovery page খুলুন।",
"আপনার account name, email বা পুরোনো number দিয়ে account খুঁজুন।",
"পুরোনো number-এ code পাঠানোর option থাকলে এবং সেটি ব্যবহার করতে না পারলে অন্য recovery option খুঁজুন।",
"আগে account-এ যুক্ত থাকা email address ব্যবহার করার চেষ্টা করুন।",
"Facebook যে identity/recovery verification option দেয় সেটি সম্পূর্ণ করুন।",
"Account ফিরে পেলে সঙ্গে সঙ্গে নতুন phone number ও recovery email যোগ করুন।"
],
"পুরোনো email এখনও access করা যায় কি না পরীক্ষা করুন।",
"অচেনা third-party recovery service-কে টাকা দেবেন না।",
OFFICIAL.facebookRecovery
),

makeGuide(
"Facebook",
"Security",
"কেউ আমার Facebook password পরিবর্তন করেছে",
"🚨",
[
"প্রথমে নিজের email inbox এবং SMS পরীক্ষা করুন—password/email change-এর notification এসেছে কি না দেখুন।",
"Facebook-এর official hacked/recovery flow ব্যবহার করুন।",
"Account-এ ঢুকতে পারলে password সঙ্গে সঙ্গে পরিবর্তন করুন।",
"Security and Login/Where you're logged in অংশে গিয়ে অচেনা device logout করুন।",
"Email address ও phone number পরিবর্তন হয়েছে কি না পরীক্ষা করুন।",
"Two-factor authentication চালু করুন।",
"অচেনা connected apps এবং sessions remove করুন।"
],
"অচেনা login notification থাকলে সেটি গুরুত্বসহকারে পরীক্ষা করুন।",
"কাউকে recovery code বা password দেবেন না।",
" https://www.facebook.com/hacked "
),

makeGuide(
"Facebook",
"Security",
"Facebook account hacked",
"🛡️",
[
"অচেনা device থেকে account access বন্ধ করার চেষ্টা করুন।",
"Facebook-এর official hacked-account recovery ব্যবহার করুন।",
"Password পরিবর্তন করুন।",
"Recovery email এবং phone number পরীক্ষা করুন।",
"অচেনা sessions logout করুন।",
"Two-factor authentication চালু করুন।",
"অচেনা posts/messages/apps থাকলে review করুন।",
"বন্ধুদের জানিয়ে দিন hacked account থেকে আসা suspicious message যেন তারা বিশ্বাস না করে।"
],
"আপনার email account-ও নিরাপদ আছে কি না পরীক্ষা করুন।",
"হ্যাকারকে টাকা দিয়ে account ফেরত নেওয়ার চেষ্টা করবেন না।",
"https://www.facebook.com/hacked"
),

makeGuide(
"Facebook",
"Login & Account",
"Login code আসছে না",
"🔢",
[
"Phone number/email সঠিক আছে কি না পরীক্ষা করুন।",
"SMS-এর পরিবর্তে অন্য available verification option দেখুন।",
"Spam/Junk folder পরীক্ষা করুন যদি email ব্যবহার করেন।",
"কিছুক্ষণ অপেক্ষা করে নতুন code request করুন।",
"একই সঙ্গে বারবার code request করবেন না।",
"Account access ফিরে পেলে 2FA settings review করুন।"
],
"SIM network এবং SMS receiving কাজ করছে কি না পরীক্ষা করুন।",
"কাউকে verification code দেবেন না।",
OFFICIAL.facebook
),

makeGuide(
"Facebook",
"Security",
"Two-Factor Authentication সমস্যা",
"🔑",
[
"Account recovery-এর মাধ্যমে আগে account access নিশ্চিত করুন।",
"Security settings খুলুন।",
"Two-factor authentication method পরীক্ষা করুন।",
"পুরোনো authenticator/phone হারিয়ে গেলে available recovery method ব্যবহার করুন।",
"Account access পাওয়ার পরে নতুন secure authentication method যোগ করুন।",
"Recovery codes নিরাপদ জায়গায় রাখুন।"
],
"আপনার primary email এবং phone number এখনও accessible কি না দেখুন।",
"Recovery code screenshot করে public জায়গায় রাখবেন না।",
OFFICIAL.facebook
),

makeGuide(
"Facebook",
"Account Status",
"Account locked / restricted",
"🔒",
[
"Login করার সময় Facebook যে exact message দেখাচ্ছে সেটি পড়ুন।",
"Account Status / Support Inbox পরীক্ষা করুন।",
"যদি review/appeal option থাকে সেটি ব্যবহার করুন।",
"Facebook যে তথ্য বা verification চায় তা সঠিকভাবে দিন।",
"একই issue-এর জন্য বারবার random appeal পাঠাবেন না।",
"Account ফিরে এলে policy এবং security settings review করুন।"
],
"Restriction-এর কারণ কী দেখাচ্ছে তা আগে বুঝুন।",
"Fake documents বা ভুল তথ্য submit করবেন না।",
OFFICIAL.facebook
),

/* ============================================================
   FACEBOOK — MONETIZATION
============================================================ */

makeGuide(
"Facebook",
"Monetization",
"Monetization eligible হচ্ছি না",
"💰",
[
"Professional Dashboard খুলুন।",
"Monetization section-এ eligibility status দেখুন।",
"কোন requirement পূরণ হয়নি সেটি শনাক্ত করুন।",
"Page/profile policy status পরীক্ষা করুন।",
"Content originality এবং policy compliance review করুন।",
"যে requirement এখনও পূরণ হয়নি সেটি পূরণ করার পরিকল্পনা করুন।",
"Eligibility status update হতে সময় লাগলে অপেক্ষা করুন।"
],
"Account Status/Policy violations আগে পরীক্ষা করুন।",
"কেউ টাকা নিলে monetization guarantee করবে—এমন দাবিতে বিশ্বাস করবেন না।",
OFFICIAL.facebook
),

makeGuide(
"Facebook",
"Monetization",
"Monetization setup করতে পারছি না",
"⚙️",
[
"Professional Dashboard > Monetization খুলুন।",
"Available monetization product নির্বাচন করুন।",
"Identity, payment এবং tax-related information-এর status দেখুন।",
"যে field incomplete আছে সেটি সম্পূর্ণ করুন।",
"Name/payment information যেন official documents-এর সঙ্গে consistent থাকে তা নিশ্চিত করুন।",
"Submit করার পরে review status দেখুন।"
],
"Payment account এবং identity information সঠিক কি না পরীক্ষা করুন।",
"অন্য ব্যক্তির payment information ব্যবহার করবেন না।",
OFFICIAL.facebook
),

makeGuide(
"Facebook",
"Monetization",
"Monetization বন্ধ/Restricted হয়ে গেছে",
"⚠️",
[
"Professional Dashboard-এর Monetization status খুলুন।",
"Restriction-এর reason পড়ুন।",
"Account Status ও policy violations পরীক্ষা করুন।",
"যদি appeal/review option থাকে সেটি ব্যবহার করুন।",
"ভবিষ্যতের content যেন policy-compliant হয় তা নিশ্চিত করুন।",
"Review শেষ না হওয়া পর্যন্ত suspicious third-party workaround ব্যবহার করবেন না।"
],
"Restriction-এর exact reason সংরক্ষণ করুন।",
"Fake engagement বা paid fake views দিয়ে সমস্যার সমাধান করার চেষ্টা করবেন না।",
OFFICIAL.facebook
),

makeGuide(
"Facebook",
"Monetization",
"Earnings দেখাচ্ছে না",
"📊",
[
"Professional Dashboard-এর earnings section খুলুন।",
"কোন monetization product থেকে income আসার কথা তা পরীক্ষা করুন।",
"Date range সঠিক আছে কি না দেখুন।",
"Estimated এবং finalized earnings আলাদা হতে পারে—দুটো status পরীক্ষা করুন।",
"Payment account এবং payout status পরীক্ষা করুন।",
"Policy/eligibility restriction আছে কি না দেখুন।"
],
"Dashboard-এ কোনো warning বা payout hold আছে কি না দেখুন।",
"অচেনা ব্যক্তি/agency-কে account login দেবেন না।",
OFFICIAL.facebook
),

makeGuide(
"Facebook",
"Pages",
"Page-এর admin access নেই",
"📄",
[
"আপনার অন্য কোনো admin account আছে কি না পরীক্ষা করুন।",
"Page access settings খুলুন।",
"আপনার access remove করা হয়েছে কি না দেখুন।",
"Account hacked হলে আগে personal account recover করুন।",
"Page access recovery/report option থাকলে official process ব্যবহার করুন।",
"Future-এর জন্য একাধিক trusted admin এবং security method রাখুন।"
],
"Page এবং personal profile দুটির security পরীক্ষা করুন।",
"অচেনা কাউকে admin access দেবেন না।",
OFFICIAL.facebook
),

makeGuide(
"Facebook",
"Safety",
"Fake Facebook profile / impersonation",
"🎭",
[
"Fake profile-এর profile URL সংরক্ষণ করুন।",
"Profile-এর screenshots নিন।",
"Facebook-এর impersonation/report option ব্যবহার করুন।",
"যদি আপনার পরিচিত কারও নামে fake account হয় তাকেও report করতে বলুন।",
"Threat/blackmail থাকলে evidence সংরক্ষণ করুন।",
"Financial fraud হলে cybercrime report করার কথা বিবেচনা করুন।"
],
"Profile URL, username এবং relevant screenshots রাখুন।",
"Fake account-এর সঙ্গে ঝগড়া বা personal information share করবেন না।",
OFFICIAL.facebook
),

/* ============================================================
   INSTAGRAM
============================================================ */

makeGuide(
"Instagram",
"Login & Account",
"Instagram password ভুলে গেছি",
"🔐",
[
"Instagram login screen খুলুন।",
"Forgot password নির্বাচন করুন।",
"Username, email বা phone number দিন।",
"Available recovery method ব্যবহার করুন।",
"Code দিয়ে নতুন password সেট করুন।",
"Login-এর পরে Security settings review করুন।"
],
"Recovery email/phone access আছে কি না দেখুন।",
"Recovery code কাউকে দেবেন না।",
OFFICIAL.instagramRecovery
),

makeGuide(
"Instagram",
"Security",
"Instagram hacked",
"🚨",
[
"Email inbox-এ Instagram-এর security notification খুঁজুন।",
"Password পরিবর্তনের সুযোগ থাকলে সঙ্গে সঙ্গে পরিবর্তন করুন।",
"Email/phone number পরিবর্তন হয়েছে কি না পরীক্ষা করুন।",
"অচেনা login/session remove করুন।",
"Two-factor authentication চালু করুন।",
"Connected apps review করুন।",
"Friends-কে suspicious DM সম্পর্কে সতর্ক করুন।"
],
"আপনার email account-ও secure করুন।",
"হ্যাকারকে টাকা বা personal information দেবেন না।",
OFFICIAL.instagram
),

makeGuide(
"Instagram",
"Safety",
"Instagram harassment / unwanted messages",
"🚫",
[
"প্রথমে evidence হিসেবে screenshots রাখুন।",
"Sender-কে block/restrict করুন।",
"Message বা profile report করুন।",
"Privacy settings শক্ত করুন।",
"Message controls থেকে unwanted requests সীমিত করুন।",
"Threat বা blackmail থাকলে evidence আলাদা করে সংরক্ষণ করুন।"
],
"Username, date/time এবং message screenshots রাখুন।",
"Harasser-এর সঙ্গে দীর্ঘ argument করবেন না।",
OFFICIAL.instagram
),

makeGuide(
"Instagram",
"Safety",
"Blackmail / intimate photo threat",
"🛑",
[
"Blackmailer-কে টাকা দেবেন না।",
"আর কোনো ছবি, ভিডিও বা personal information পাঠাবেন না।",
"সব message, profile URL, username এবং payment demand-এর evidence রাখুন।",
"Account block/report করার আগে প্রয়োজনীয় evidence সংরক্ষণ করুন।",
"Threat থাকলে trusted person-কে জানান।",
"ভারতে হলে serious cybercrime/financial fraud-এর ক্ষেত্রে National Cyber Crime Reporting Portal ব্যবহার করুন।",
"নিজের নিরাপত্তা ঝুঁকিতে থাকলে local emergency/police assistance নিন।"
],
"Evidence delete না করে নিরাপদ backup রাখুন।",
"Blackmailer-এর কথামতো দেখা করতে যাবেন না।",
OFFICIAL.cybercrime
),

makeGuide(
"Instagram",
"Creator",
"Instagram monetization সমস্যা",
"💰",
[
"Professional Dashboard খুলুন।",
"Monetization/eligibility status পরীক্ষা করুন।",
"Policy violations এবং account status দেখুন।",
"Payment/identity information-এর incomplete field পূরণ করুন।",
"Eligibility requirement-এর কোন অংশ বাকি আছে তা দেখুন।",
"Official review/appeal option থাকলে সেটি ব্যবহার করুন।"
],
"Account Status আগে পরীক্ষা করুন।",
"Third-party monetization seller-কে password দেবেন না।",
OFFICIAL.instagram
),

/* ============================================================
   WHATSAPP
============================================================ */

makeGuide(
"WhatsApp",
"Account",
"WhatsApp verification code আসছে না",
"📱",
[
"Phone number এবং country code সঠিক কিনা দেখুন।",
"SIM-এ SMS ও call receive হচ্ছে কিনা পরীক্ষা করুন।",
"Network connection পরীক্ষা করুন।",
"কিছুক্ষণ অপেক্ষা করে আবার verification request করুন।",
"বারবার request করে temporary delay তৈরি করবেন না।",
"SIM unavailable হলে আগে mobile operator-এর মাধ্যমে number recovery-এর চেষ্টা করুন।"
],
"SIM active এবং আপনার control-এ আছে কি না নিশ্চিত করুন।",
"Verification code কাউকে দেবেন না।",
OFFICIAL.whatsapp
),

makeGuide(
"WhatsApp",
"Security",
"WhatsApp account অন্য কেউ নিয়েছে",
"🚨",
[
"আপনার phone number দিয়ে WhatsApp-এ আবার registration করার চেষ্টা করুন।",
"SMS verification code ব্যবহার করুন।",
"Two-step verification PIN চাইলে available recovery process অনুসরণ করুন।",
"Linked Devices পরীক্ষা করুন।",
"অচেনা device logout করুন।",
"Two-step verification চালু করুন।",
"Contacts-কে জানিয়ে দিন hacked account থেকে আসা message যেন তারা বিশ্বাস না করে।"
],
"Linked Devices list পরীক্ষা করুন।",
"কোনো WhatsApp verification code কাউকে দেবেন না।",
OFFICIAL.whatsapp
),

makeGuide(
"WhatsApp",
"Privacy",
"অচেনা মানুষ WhatsApp-এ বিরক্ত করছে",
"🚫",
[
"অচেনা number-এর message-এর screenshots রাখুন।",
"Number block করুন।",
"Report option ব্যবহার করুন।",
"Privacy settings review করুন।",
"Profile photo, about এবং status কে দেখতে পারবে তা সীমিত করুন।",
"Group privacy settings শক্ত করুন।"
],
"Threat/blackmail থাকলে evidence রাখুন।",
"অচেনা link খুলবেন না।",
OFFICIAL.whatsapp
),

makeGuide(
"WhatsApp",
"Privacy",
"WhatsApp privacy settings",
"🔒",
[
"WhatsApp Settings খুলুন।",
"Privacy section-এ যান।",
"Last seen/online visibility সীমিত করুন।",
"Profile photo visibility review করুন।",
"Groups-এ কে add করতে পারবে সেটি সীমিত করুন।",
"Calls from unknown numbers silence করার option থাকলে ব্যবহার করুন।",
"Disappearing messages প্রয়োজন অনুযায়ী ব্যবহার করুন।"
],
"আপনার privacy preference অনুযায়ী settings নির্বাচন করুন।",
"Public profile information-এ sensitive information রাখবেন না।",
OFFICIAL.whatsapp
),

/* ============================================================
   GOOGLE / GMAIL
============================================================ */

makeGuide(
"Google",
"Account",
"Google password ভুলে গেছি",
"🔐",
[
"Google account recovery page খুলুন।",
"আপনার email address দিন।",
"Google যে verification method দেয় সেটি ব্যবহার করুন।",
"আগের password মনে থাকলে সঠিকভাবে দিন।",
"Recovery phone/email access থাকলে সেটি ব্যবহার করুন।",
"Account ফিরে পেলে Security Checkup করুন।",
"Two-step verification চালু করুন।"
],
"Recovery information updated আছে কি না দেখুন।",
"Google account recovery-এর নামে কাউকে password দেবেন না।",
OFFICIAL.googleAccount
),

makeGuide(
"Gmail",
"Security",
"Gmail hacked",
"🚨",
[
"Google account recovery ব্যবহার করুন।",
"Password পরিবর্তন করুন।",
"Google Account > Security খুলুন।",
"Recent security activity পরীক্ষা করুন।",
"Your devices থেকে অচেনা device remove/sign out করুন।",
"Third-party apps access review করুন।",
"Gmail forwarding এবং filters পরীক্ষা করুন—অচেনা forwarding থাকলে remove করুন।",
"Two-step verification চালু করুন।"
],
"Recovery email এবং phone number পরীক্ষা করুন।",
"OTP বা password কারও সঙ্গে share করবেন না।",
OFFICIAL.googleSecurity
),

makeGuide(
"Gmail",
"Email",
"Email আসছে না",
"📩",
[
"Spam/Junk folder পরীক্ষা করুন।",
"Storage full কিনা দেখুন।",
"Internet connection পরীক্ষা করুন।",
"Search দিয়ে email খুঁজুন।",
"Filters এবং blocked addresses পরীক্ষা করুন।",
"Forwarding settings পরীক্ষা করুন।",
"অন্য device/browser থেকে Gmail খুলে দেখুন।"
],
"Google storage available আছে কি না পরীক্ষা করুন।",
"অচেনা email-এর attachment/link খুলবেন না।",
OFFICIAL.gmail
),

/* ============================================================
   YOUTUBE
============================================================ */

makeGuide(
"YouTube",
"Channel",
"YouTube channel hacked",
"🚨",
[
"Google account recovery করুন।",
"Password পরিবর্তন করুন।",
"Google Security page থেকে unknown devices sign out করুন।",
"YouTube channel-এর videos, permissions এবং branding পরীক্ষা করুন।",
"অচেনা managers/permissions remove করুন।",
"Official YouTube support/recovery route ব্যবহার করুন।"
],
"Google account এবং channel দুটির security পরীক্ষা করুন।",
"Recovery-এর নামে কাউকে login code দেবেন না।",
OFFICIAL.youtube
),

makeGuide(
"YouTube",
"Monetization",
"YouTube monetization হচ্ছে না",
"💰",
[
"YouTube Studio খুলুন।",
"Earn/Monetization section দেখুন।",
"Eligibility requirement কী দেখাচ্ছে তা পরীক্ষা করুন।",
"Channel policy status পরীক্ষা করুন।",
"Copyright এবং Community Guidelines issues দেখুন।",
"যে requirement পূরণ হয়নি সেটি পূরণ করুন।",
"Eligible হলে official application process অনুসরণ করুন।"
],
"Channel status এবং policy issues আগে দেখুন।",
"Fake views/subscribers কিনবেন না।",
OFFICIAL.youtube
),

makeGuide(
"AdSense",
"Payment",
"AdSense account setup করতে পারছি না",
"💳",
[
"AdSense account-এ sign in করুন।",
"Payments section খুলুন।",
"Identity/payment information-এর status পরীক্ষা করুন।",
"Required fields সম্পূর্ণ করুন।",
"Name ও payment information সঠিক রাখুন।",
"Google যে verification চায় সেটি সম্পূর্ণ করুন।",
"কোনো warning থাকলে সেটির exact instruction অনুসরণ করুন।"
],
"AdSense এবং Google account একই security standards-এ রাখুন।",
"AdSense account বিক্রি/ভাড়া/transfer করার চেষ্টা করবেন না।",
OFFICIAL.adsense
),

makeGuide(
"AdSense",
"Payment",
"AdSense payment পাচ্ছি না",
"💰",
[
"Payments page খুলুন।",
"Payment threshold পূরণ হয়েছে কি না দেখুন।",
"Payment hold আছে কি না পরীক্ষা করুন।",
"Identity verification status পরীক্ষা করুন।",
"Bank/payment method সঠিক আছে কি না দেখুন।",
"Payment history review করুন।",
"Official AdSense help/support ব্যবহার করুন।"
],
"Payment hold-এর কারণ আগে চিহ্নিত করুন।",
"অচেনা ব্যক্তি payment release করার নামে টাকা চাইলে দেবেন না।",
OFFICIAL.adsense
),

/* ============================================================
   ANDROID / PHONE
============================================================ */

makeGuide(
"Android",
"Phone",
"Google Assistant চালু হচ্ছে না",
"🎙️",
[
"Internet connection পরীক্ষা করুন।",
"Google app update করুন।",
"Phone Settings > Apps > Google খুলুন।",
"Permissions এবং microphone access পরীক্ষা করুন।",
"Google app-এর cache clear করে আবার চেষ্টা করুন।",
"Google Assistant/Gemini settings পরীক্ষা করুন।",
"Phone restart করুন।",
"তারপর voice activation আবার setup করুন।"
],
"Microphone অন্য app-এ কাজ করছে কি না পরীক্ষা করুন।",
"Unknown assistant/mod APK install করবেন না।",
OFFICIAL.android
),

makeGuide(
"Android",
"Internet",
"Wi-Fi connected কিন্তু internet নেই",
"📶",
[
"Wi-Fi disconnect করে আবার connect করুন।",
"Router restart করুন।",
"অন্য device-এ internet কাজ করছে কি না দেখুন।",
"Phone-এর Wi-Fi network forget করে আবার password দিয়ে connect করুন।",
"Airplane mode কয়েক সেকেন্ড চালু করে বন্ধ করুন।",
"DNS/VPN ব্যবহার করলে temporary disable করে পরীক্ষা করুন।",
"Router-এর সমস্যা হলে ISP-এর সঙ্গে যোগাযোগ করুন।"
],
"শুধু আপনার phone-এ সমস্যা নাকি সব device-এ সমস্যা তা আগে বুঝুন।",
"Unknown public Wi-Fi-তে banking করবেন না।",
OFFICIAL.android
),

makeGuide(
"Android",
"Phone",
"Phone storage full",
"💾",
[
"Settings > Storage খুলুন।",
"Large files এবং unused apps চিহ্নিত করুন।",
"Unnecessary downloads delete করুন।",
"WhatsApp/Telegram media review করুন।",
"Photos/videos backup করে প্রয়োজনহীন files delete করুন।",
"Unused apps uninstall করুন।",
"Recycle Bin/Trash empty করুন।"
],
"Important photos/documents আগে backup করুন।",
"System files না বুঝে delete করবেন না।",
OFFICIAL.android
),

makeGuide(
"Android",
"Security",
"Phone হারিয়ে গেছে",
"📍",
[
"অন্য device থেকে Google Find My Device ব্যবহার করুন।",
"Phone-এর location দেখা গেলে নিরাপদভাবে retrieve করার চেষ্টা করুন।",
"Phone lock করুন।",
"Phone পাওয়া না গেলে প্রয়োজন অনুযায়ী remote erase বিবেচনা করুন।",
"SIM operator-এর সঙ্গে যোগাযোগ করে SIM block/reissue করুন।",
"Banking/UPI এবং important accounts-এর sessions/password secure করুন।",
"Police report প্রয়োজন হলে করুন।"
],
"Phone-এ screen lock ছিল কি না মনে করুন।",
"নিজে গিয়ে অপরাধীর সঙ্গে confrontation করবেন না।",
OFFICIAL.android
),

/* ============================================================
   PASSWORD & GENERAL SECURITY
============================================================ */

makeGuide(
"Cyber Security",
"Passwords",
"Password নিরাপদ করতে চাই",
"🔑",
[
"প্রতিটি গুরুত্বপূর্ণ account-এর জন্য আলাদা password ব্যবহার করুন।",
"লম্বা passphrase ব্যবহার করুন।",
"Password manager ব্যবহার করতে পারেন।",
"Two-factor authentication চালু করুন।",
"Recovery email এবং phone number updated রাখুন।",
"পুরোনো বা leaked password reuse করবেন না।"
],
"একই password একাধিক account-এ আছে কি না পরীক্ষা করুন।",
"Password notes public chat/gallery-তে রাখবেন না।",
"https://www.cisa.gov/secure-our-world/use-strong-passwords"
),

/* ============================================================
   CYBER FRAUD
============================================================ */

makeGuide(
"Cyber Fraud",
"UPI / Payment",
"UPI scam হয়েছে",
"💸",
[
"আর কোনো টাকা পাঠাবেন না।",
"Transaction ID, UTR, screenshots এবং messages সংরক্ষণ করুন।",
"আপনার bank/UPI provider-এর official fraud reporting channel-এ দ্রুত report করুন।",
"UPI app-এর transaction dispute/report option ব্যবহার করুন।",
"ভারতে cyber financial fraud হলে দ্রুত National Cyber Crime Reporting Portal-এ report করার কথা বিবেচনা করুন।",
"প্রয়োজনে bank account/card temporarily secure করুন।"
],
"Transaction time, amount, UTR এবং receiver details সংরক্ষণ করুন।",
"Refund পাওয়ার নামে দ্বিতীয়বার টাকা দেবেন না।",
OFFICIAL.cybercrime
),

makeGuide(
"Cyber Fraud",
"OTP",
"OTP চাওয়া হয়েছে",
"🚨",
[
"OTP কাউকে বলবেন না।",
"কোন service-এর OTP তা বুঝুন।",
"আপনি নিজে transaction শুরু না করলে OTP ব্যবহার করবেন না।",
"Account suspicious মনে হলে password পরিবর্তন করুন।",
"Banking OTP হলে bank-এর official channel-এ report করুন।"
],
"OTP message-এ transaction/service-এর নাম পড়ুন।",
"Customer care সেজে কেউ OTP চাইলে দেবেন না।",
OFFICIAL.cybercrime
),

makeGuide(
"Cyber Fraud",
"Phishing",
"Suspicious link পেয়েছি",
"🔗",
[
"Link-এ click করবেন না।",
"Sender-এর identity যাচাই করুন।",
"Message-এ urgent payment/password request থাকলে সন্দেহ করুন।",
"Official website নিজে browser-এ টাইপ করে খুলুন।",
"Click করে ফেললে password দিলে সঙ্গে সঙ্গে password পরিবর্তন করুন।",
"Banking information দিলে bank-এর official fraud channel-এ যোগাযোগ করুন।"
],
"Domain name carefully পরীক্ষা করুন।",
"Shortened/unknown links trust করবেন না।",
OFFICIAL.cybercrime
),

/* ============================================================
   WOMEN SAFETY
============================================================ */

makeGuide(
"Women Safety",
"Harassment",
"Phone call করে বিরক্ত করছে",
"📞",
[
"প্রথমে repeated calls-এর screenshots/call logs রাখুন।",
"Number block করুন।",
"Phone-এর spam protection/call blocking ব্যবহার করুন।",
"Unknown callers-এর সঙ্গে personal information share করবেন না।",
"Threat থাকলে trusted person-কে জানান।",
"Serious threat/stalking হলে local authorities-এর assistance নিন।",
"Digital evidence delete করবেন না।"
],
"Number, date, time এবং threatening content লিখে রাখুন।",
"অপরিচিত ব্যক্তির সঙ্গে দেখা করতে যাবেন না।",
OFFICIAL.cybercrime
),

makeGuide(
"Women Safety",
"Online Harassment",
"Facebook/Instagram/WhatsApp-এ harassment",
"🛡️",
[
"Harassing messages-এর screenshots নিন।",
"Profile/number/username সংরক্ষণ করুন।",
"Block এবং report করুন।",
"Privacy settings শক্ত করুন।",
"Mutual contacts-এর মাধ্যমে personal information leak হচ্ছে কি না দেখুন।",
"Threat/blackmail থাকলে evidence backup করুন।",
"প্রয়োজনে cybercrime/police assistance নিন।"
],
"Evidence-এ date/time এবং profile URL রাখুন।",
"Harasser-কে ভয় পেয়ে টাকা বা আরও ছবি দেবেন না।",
OFFICIAL.cybercrime
),

makeGuide(
"Women Safety",
"Stalking",
"কেউ online/offline follow বা stalk করছে",
"🚨",
[
"ঘটনার date, time, place এবং digital evidence নোট করুন।",
"Trusted family/friend-কে জানান।",
"Location sharing এবং social media privacy review করুন।",
"Live location public post করবেন না।",
"অপরিচিত person-এর সঙ্গে একা দেখা করবেন না।",
"Repeated threat/stalking হলে authorities-এর assistance নিন।"
],
"Evidence নিরাপদ জায়গায় backup রাখুন।",
"নিজে গিয়ে stalker-এর সঙ্গে confrontation করবেন না।",
OFFICIAL.cybercrime
),

makeGuide(
"Women Safety",
"Blackmail",
"Private photo/video দিয়ে blackmail",
"🛑",
[
"Blackmailer-কে টাকা দেবেন না।",
"আর কোনো private photo/video পাঠাবেন না।",
"Threatening messages-এর screenshots এবং account details রাখুন।",
"Evidence backup করুন।",
"Platform-এ report/block করুন।",
"Trusted person-কে জানান—একা handle করার প্রয়োজন নেই।",
"ভারতে হলে cybercrime reporting route ব্যবহার করুন।"
],
"Evidence delete করবেন না।",
"Blackmailer-এর সঙ্গে দেখা করতে যাবেন না।",
OFFICIAL.cybercrime
),

/* ============================================================
   EMAIL / BROWSER / PRIVACY
============================================================ */

makeGuide(
"Browser",
"Privacy",
"Browser-এ suspicious popup আসছে",
"🌐",
[
"Popup-এ click করবেন না।",
"Suspicious tab বন্ধ করুন।",
"Browser notification permissions পরীক্ষা করুন।",
"Unknown extensions remove করুন।",
"Browser update করুন।",
"Suspicious app install হয়ে থাকলে uninstall করুন।",
"Account password/permissions review করুন।"
],
"কোন website থেকে popup আসছে তা খেয়াল করুন।",
"Popup বলছে 'আপনার phone infected'—এমন message দেখে random app install করবেন না।",
"https://support.google.com/chrome/"
),

makeGuide(
"Privacy",
"Account Security",
"আমার account কোথায় কোথায় login আছে জানতে চাই",
"👁️",
[
"Account-এর Security settings খুলুন।",
"Logged-in devices/session list দেখুন।",
"অচেনা device শনাক্ত করুন।",
"Unknown session sign out করুন।",
"Password পরিবর্তন করুন যদি suspicious activity দেখেন।",
"Two-factor authentication চালু করুন।"
],
"Device name, location এবং last active time মিলিয়ে দেখুন।",
"শুধু location দেখে সিদ্ধান্ত নেবেন না—VPN/mobile network-এর কারণে location ভুল হতে পারে।",
OFFICIAL.googleSecurity
)

];

/* ============================================================
   EXTRA UNIVERSAL PROBLEM CATEGORIES
============================================================ */

const EXTRA_CATEGORIES = [
    "Account Recovery",
    "Hacked Account",
    "Password",
    "2FA",
    "Login",
    "Privacy",
    "Safety",
    "Harassment",
    "Blackmail",
    "Scam",
    "Fraud",
    "UPI",
    "Payment",
    "Monetization",
    "Creator",
    "Page",
    "Email",
    "Phone",
    "Android",
    "Internet",
    "Browser",
    "Women Safety",
    "Cyber Crime"
];

/* ============================================================
   SEARCH ENGINE
============================================================ */

function normalizeText(text) {
    return String(text || "")
        .toLowerCase()
        .replace(/[^\w\u0980-\u09ff\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function searchCyberCare(query) {

    const q = normalizeText(query);

    if (!q) return CYBERCARE_GUIDES;

    const words = q.split(" ");

    return CYBERCARE_GUIDES
        .map(item => {

            const fullText = normalizeText(
                item.service + " " +
                item.category + " " +
                item.problem + " " +
                item.steps.join(" ") + " " +
                item.check + " " +
                item.avoid
            );

            let score = 0;

            if (normalizeText(item.problem).includes(q)) score += 100;
            if (normalizeText(item.service).includes(q)) score += 60;
            if (normalizeText(item.category).includes(q)) score += 40;

            words.forEach(word => {
                if (word.length > 1 && fullText.includes(word)) {
                    score += 10;
                }
            });

            return { item, score };

        })
        .filter(x => x.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(x => x.item);
}

/* ============================================================
   SERVICE FILTER
============================================================ */

function getServices() {
    return [...new Set(
        CYBERCARE_GUIDES.map(item => item.service)
    )];
}

function getCategories(service) {
    return [
        ...new Set(
            CYBERCARE_GUIDES
                .filter(item => !service || item.service === service)
                .map(item => item.category)
        )
    ];
}

function getProblems(service, category) {
    return CYBERCARE_GUIDES.filter(item =>
        (!service || item.service === service) &&
        (!category || item.category === category)
    );
}

/* ============================================================
   UI HELPERS
============================================================ */

function escapeHTML(text) {
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function createGuideCard(item) {

    const steps = item.steps.map((step, index) => `
        <div class="cc-step">
            <div class="cc-step-number">${index + 1}</div>
            <div class="cc-step-text">${escapeHTML(step)}</div>
        </div>
    `).join("");

    return `
        <article class="cc-guide-card">

            <div class="cc-guide-header">
                <div class="cc-guide-icon">${item.icon}</div>

                <div>
                    <div class="cc-service-name">
                        ${escapeHTML(item.service)}
                    </div>

                    <h3>
                        ${escapeHTML(item.problem)}
                    </h3>

                    <span class="cc-category">
                        ${escapeHTML(item.category)}
                    </span>
                </div>
            </div>

            <div class="cc-guide-section">
                <h4>✅ কী করবেন</h4>
                <div class="cc-steps">
                    ${steps}
                </div>
            </div>

            <div class="cc-info success">
                <strong>🔎 আগে এটা দেখুন:</strong>
                ${escapeHTML(item.check)}
            </div>

            <div class="cc-info danger">
                <strong>⚠️ যা করবেন না:</strong>
                ${escapeHTML(item.avoid)}
            </div>

            <a
                class="cc-official-button"
                href="${item.official}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Official Help / Report →
            </a>

        </article>
    `;
}

/* ============================================================
   RENDER RESULTS
============================================================ */

function renderGuides(items, container) {

    if (!container) return;

    if (!items.length) {

        container.innerHTML = `
            <div class="cc-no-result">
                <div class="cc-no-result-icon">🔍</div>
                <h3>সমস্যাটি খুঁজে পাওয়া যায়নি</h3>
                <p>
                    অন্যভাবে লিখে চেষ্টা করুন।
                    যেমন: <b>password ভুলে গেছি</b>,
                    <b>account hacked</b>,
                    <b>SIM নেই</b>,
                    <b>monetization</b>।
                </p>
            </div>
        `;

        return;
    }

    container.innerHTML = items.map(createGuideCard).join("");
}

/* ============================================================
   AUTO CONNECT EXISTING SEARCH
============================================================ */

function connectSearch() {

    const input =
        document.querySelector("#searchInput") ||
        document.querySelector("#search") ||
        document.querySelector(".search-input");

    const results =
        document.querySelector("#results") ||
        document.querySelector("#searchResults") ||
        document.querySelector("#guidesContainer") ||
        document.querySelector("#guides");

    if (!input || !results) return;

    let timer;

    input.addEventListener("input", function () {

        clearTimeout(timer);

        timer = setTimeout(() => {

            const query = input.value.trim();

            if (!query) {
                renderGuides(CYBERCARE_GUIDES, results);
                return;
            }

            const found = searchCyberCare(query);

            renderGuides(found, results);

        }, 150);

    });
}

/* ============================================================
   SERVICE SELECTOR
============================================================ */

function createServiceSelector() {

    if (document.querySelector("#cybercareServiceSelector")) return;

    const wrapper = document.createElement("section");

    wrapper.id = "cybercareServiceSelector";

    wrapper.className = "cc-service-selector";

    wrapper.innerHTML = `

        <div class="cc-selector-title">
            <span>🛡️</span>
            <div>
                <h2>What do you need help with?</h2>
                <p>Choose a service or search your problem.</p>
            </div>
        </div>

        <div class="cc-service-buttons">

            ${getServices().map(service => `

                <button
                    type="button"
                    class="cc-service-btn"
                    data-service="${escapeHTML(service)}"
                >
                    ${getServiceIcon(service)}
                    <span>${escapeHTML(service)}</span>
                </button>

            `).join("")}

        </div>

    `;

    const target =
        document.querySelector("#guidesContainer") ||
        document.querySelector("#guides") ||
        document.querySelector("#results") ||
        document.body;

    target.parentNode.insertBefore(wrapper, target);

    wrapper.querySelectorAll(".cc-service-btn").forEach(button => {

        button.addEventListener("click", () => {

            const service = button.dataset.service;

            const results =
                document.querySelector("#results") ||
                document.querySelector("#searchResults") ||
                document.querySelector("#guidesContainer") ||
                document.querySelector("#guides");

            renderGuides(
                getProblems(service),
                results
            );

            results?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });
}

function getServiceIcon(service) {

    const icons = {
        "Facebook": "📘",
        "Instagram": "📸",
        "WhatsApp": "💬",
        "Google": "🔵",
        "Gmail": "📧",
        "YouTube": "▶️",
        "AdSense": "💰",
        "Android": "📱",
        "Cyber Fraud": "🚨",
        "Women Safety": "🛡️",
        "Privacy": "🔒",
        "Browser": "🌐",
        "Cyber Security": "🔐"
    };

    return icons[service] || "🛡️";
}

/* ============================================================
   QUICK HELP
============================================================ */

const QUICK_HELP = [

    {
        title: "Account hacked",
        icon: "🚨",
        query: "hacked account"
    },

    {
        title: "Password forgotten",
        icon: "🔑",
        query: "password ভুলে"
    },

    {
        title: "Blackmail",
        icon: "🛑",
        query: "blackmail"
    },

    {
        title: "Harassment",
        icon: "🚫",
        query: "harassment"
    },

    {
        title: "UPI fraud",
        icon: "💸",
        query: "UPI scam"
    },

    {
        title: "Monetization",
        icon: "💰",
        query: "monetization"
    },

    {
        title: "Phone lost",
        icon: "📱",
        query: "phone হারিয়ে"
    },

    {
        title: "Suspicious link",
        icon: "🔗",
        query: "suspicious link"
    }

];

function createQuickHelp() {

    if (document.querySelector("#cybercareQuickHelp")) return;

    const section = document.createElement("section");

    section.id = "cybercareQuickHelp";

    section.className = "cc-quick-help";

    section.innerHTML = `

        <div class="cc-quick-title">
            <h2>⚡ Quick Help</h2>
            <p>Common problems</p>
        </div>

        <div class="cc-quick-grid">

            ${QUICK_HELP.map(item => `

                <button
                    type="button"
                    class="cc-quick-btn"
                    data-query="${escapeHTML(item.query)}"
                >
                    <span>${item.icon}</span>
                    <strong>${escapeHTML(item.title)}</strong>
                </button>

            `).join("")}

        </div>
    `;

    document.body.prepend(section);

    section.querySelectorAll(".cc-quick-btn").forEach(button => {

        button.addEventListener("click", () => {

            const query = button.dataset.query;

            const input =
                document.querySelector("#searchInput") ||
                document.querySelector("#search") ||
                document.querySelector(".search-input");

            const results =
                document.querySelector("#results") ||
                document.querySelector("#searchResults") ||
                document.querySelector("#guidesContainer") ||
                document.querySelector("#guides");

            if (input) input.value = query;

            renderGuides(searchCyberCare(query), results);

            results?.scrollIntoView({
                behavior: "smooth"
            });

        });

    });
}

/* ============================================================
   EMERGENCY SAFETY BANNER
============================================================ */

function createSafetyBanner() {

    if (document.querySelector("#cybercareSafetyBanner")) return;

    const banner = document.createElement("div");

    banner.id = "cybercareSafetyBanner";

    banner.className = "cc-safety-banner";

    banner.innerHTML = `
        <div>
            <strong>🚨 Immediate danger?</strong>
            <span>
                If someone is threatening you or you are physically unsafe,
                move to a safe place and contact a trusted person or
                appropriate local emergency service.
            </span>
        </div>
    `;

    document.body.prepend(banner);
}

/* ============================================================
   DARK MODE
============================================================ */

function setupDarkMode() {

    const existing =
        document.querySelector("#darkModeToggle") ||
        document.querySelector("[data-dark-mode]");

    if (existing) {

        existing.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            localStorage.setItem(
                "cybercare-dark-mode",
                document.body.classList.contains("dark-mode")
            );

        });

    }

    if (
        localStorage.getItem("cybercare-dark-mode") === "true"
    ) {
        document.body.classList.add("dark-mode");
    }
}

/* ============================================================
   LANGUAGE SUPPORT
============================================================ */

const LANGUAGE_TEXT = {

    en: {
        help: "What do you need help with?",
        search: "Search your problem"
    },

    bn: {
        help: "আপনার কী সমস্যা হয়েছে?",
        search: "আপনার সমস্যাটি লিখুন"
    }

};

function setLanguage(lang) {

    const data = LANGUAGE_TEXT[lang] || LANGUAGE_TEXT.en;

    const title =
        document.querySelector("#cybercareTitle");

    const search =
        document.querySelector("#searchInput") ||
        document.querySelector("#search");

    if (title) title.textContent = data.help;

    if (search) search.placeholder = data.search;

    localStorage.setItem("cybercare-language", lang);
}

/* ============================================================
   STATISTICS
============================================================ */

function getCyberCareStats() {

    return {
        totalGuides: CYBERCARE_GUIDES.length,
        services: getServices().length,
        categories: [
            ...new Set(CYBERCARE_GUIDES.map(x => x.category))
        ].length
    };

}

/* ============================================================
   GLOBAL CYBERCARE API
============================================================ */

window.CyberCare = {

    guides: CYBERCARE_GUIDES,

    search: searchCyberCare,

    services: getServices,

    categories: getCategories,

    problems: getProblems,

    stats: getCyberCareStats,

    openGuide(problem) {

        const found = searchCyberCare(problem);

        const results =
            document.querySelector("#results") ||
            document.querySelector("#searchResults") ||
            document.querySelector("#guidesContainer") ||
            document.querySelector("#guides");

        renderGuides(found, results);

        results?.scrollIntoView({
            behavior: "smooth"
        });

    },

    language: setLanguage

};

/* ============================================================
   START CYBERCARE
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    connectSearch();

    setupDarkMode();

    createSafetyBanner();

    createQuickHelp();

    /*
       Service selector is created only if there is
       already a guides/results container.
    */

    const target =
        document.querySelector("#guidesContainer") ||
        document.querySelector("#guides") ||
        document.querySelector("#results") ||
        document.querySelector("#searchResults");

    if (target) {
        createServiceSelector();
        renderGuides(CYBERCARE_GUIDES, target);
    }

    const savedLanguage =
        localStorage.getItem("cybercare-language");

    if (savedLanguage) {
        setLanguage(savedLanguage);
    }

    console.log(
        "CyberCare loaded:",
        getCyberCareStats()
    );

});
