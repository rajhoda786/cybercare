const services = document.querySelectorAll("li");

services.forEach((service) => {
    service.addEventListener("click", () => {
        alert("CyberCare: " + service.textContent + "\n\nOur help section is coming soon.");
    });
});
