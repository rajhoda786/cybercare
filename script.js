const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileSidebar = document.getElementById("mobileSidebar");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

const themeBtn = document.getElementById("themeBtn");

const problemInput = document.getElementById("problemInput");
const searchBtn = document.getElementById("searchBtn");


// ==============================
// MOBILE MENU OPEN
// ==============================

function openMenu() {

    mobileSidebar.classList.add("show");
    menuOverlay.classList.add("show");

}


// ==============================
// MOBILE MENU CLOSE
// ==============================

function closeMobileMenu() {

    mobileSidebar.classList.remove("show");
    menuOverlay.classList.remove("show");

}


mobileMenuBtn.addEventListener(
    "click",
    openMenu
);


closeMenu.addEventListener(
    "click",
    closeMobileMenu
);


menuOverlay.addEventListener(
    "click",
    closeMobileMenu
);


// ==============================
// DARK MODE
// ==============================

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀";

    } else {

        themeBtn.textContent = "☾";

    }

});


// ==============================
// SEARCH
// ==============================

function searchProblem() {

    const problem = problemInput.value.trim();

    if (problem === "") {

        problemInput.focus();

        return;

    }

    alert(
        "আপনার সমস্যা: " + problem +
        "\n\nপরবর্তী ধাপে CyberCare এই সমস্যার জন্য সঠিক সমাধান দেখাবে।"
    );

}


searchBtn.addEventListener(
    "click",
    searchProblem
);


problemInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            searchProblem();

        }

    }
);


// ==============================
// POPULAR SEARCH BUTTONS
// ==============================

const popularButtons = document.querySelectorAll(
    ".popular-searches button"
);


popularButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        problemInput.value = button.textContent;

        problemInput.focus();

    });

});
