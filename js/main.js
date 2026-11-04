

// ===== Mobile menu =====
const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

console.log(menuButton);
console.log(siteNav);

function setMenuOpen(isOpen) {
    siteNav.classList.toggle("open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
}

menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.contains("open");
    setMenuOpen(!isOpen);
})
