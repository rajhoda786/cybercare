const $ = s => document.querySelector(s);

const problems = {
  "facebook": "Facebook লগইন/হ্যাক সমস্যা হলে আগে পাসওয়ার্ড পরিবর্তন, লগইন সেশন চেক এবং 2FA চালু করুন।",
  "whatsapp": "WhatsApp সমস্যা হলে নম্বর, SMS/OTP, ইন্টারনেট এবং Linked Devices চেক করুন।",
  "otp": "OTP না এলে নেটওয়ার্ক, SMS inbox, blocked numbers এবং কিছুক্ষণ অপেক্ষা করে আবার চেষ্টা করুন।",
  "phone": "ফোন গরম হলে ব্যাকগ্রাউন্ড অ্যাপ, চার্জার/কেবল, ব্যাটারি ব্যবহার ও সফটওয়্যার আপডেট পরীক্ষা করুন।",
  "upi": "UPI সমস্যা হলে transaction status, bank balance, UPI PIN এবং bank/app support চেক করুন।",
  "hack": "অ্যাকাউন্ট হ্যাক সন্দেহ হলে password বদলান, সব sessions logout করুন এবং 2FA চালু করুন।"
};

function findProblem(q){
  q=q.toLowerCase();
  if(q.includes("facebook")||q.includes("ফেসবুক")) return problems.facebook;
  if(q.includes("whatsapp")||q.includes("হোয়াটসঅ্যাপ")) return problems.whatsapp;
  if(q.includes("otp")||q.includes("ওটিপি")) return problems.otp;
  if(q.includes("গরম")||q.includes("overheat")||q.includes("battery")) return problems.phone;
  if(q.includes("upi")||q.includes("bank")||q.includes("ব্যাংক")) return problems.upi;
  if(q.includes("hack")||q.includes("হ্যাক")) return problems.hack;
  return "সমস্যাটি আরও নির্দিষ্ট করে লিখুন—যেমন “OTP আসছে না”, “Facebook hacked”, “ফোন গরম হচ্ছে”। CyberCare আপনার জন্য সম্ভাব্য সমাধান দেখাবে।";
}

$("#searchForm").addEventListener("submit", e=>{
  e.preventDefault();
  const q=$("#problemInput").value.trim();
  const box=$("#searchResult");
  box.textContent=q ? "💡 "+findProblem(q) : "একটি সমস্যা লিখে খুঁজুন।";
  box.style.display="block";
});

document.querySelectorAll(".popular button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    $("#problemInput").value=btn.textContent;
    $("#searchForm").dispatchEvent(new Event("submit"));
  });
});

$("#menuBtn").addEventListener("click",()=>$("#mobileMenu").classList.toggle("show"));
$("#themeBtn").addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  $("#themeBtn").textContent=document.body.classList.contains("dark")?"☀":"☾";
});

document.querySelectorAll("[data-action]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const action=btn.dataset.action;
    if(action==="report") window.open("https://cybercrime.gov.in/","_blank");
    else if(action==="scan") alert("Phone Safety Scan: এই featureটি browser permission পেলে নিরাপত্তা checks চালাবে।");
    else if(action==="scam") alert("Scam Check: সন্দেহজনক link/message এখানে analyse করার flow যোগ করা যাবে।");
    else alert("CyberCare Help Center: এই sectionটি পরবর্তী A–Z guide/diagnosis module-এর সঙ্গে যুক্ত হবে।");
  });
});
