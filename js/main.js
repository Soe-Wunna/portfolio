

// ===== Mobile menu =====
function initMobileMenu() {
    const menuButton = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector("#site-nav");


    function setMenuOpen(isOpen) {
        siteNav.classList.toggle("open", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
    };

    menuButton.addEventListener("click", () => {
        const isOpen = siteNav.classList.contains("open");
        setMenuOpen(!isOpen);
    });

    const navLinks = siteNav.querySelectorAll("a");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            setMenuOpen(false);
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && siteNav.classList.contains("open")) {
            setMenuOpen(false);
            menuButton.focus();
        };
    });

    const desktopQuery = window.matchMedia("(min-width: 768px)");

    desktopQuery.addEventListener("change", (event) => {
        if (event.matches) {
            setMenuOpen(false);
        };
    });
};

initMobileMenu();

// ===== Theme toggle =====
function initThemeToggle() {
    const themeButton = document.querySelector(".theme-toggle");
    const root = document.documentElement;

    function applyTheme(theme) {
        root.setAttribute("data-theme", theme);
        themeButton.setAttribute("aria-pressed", String(theme === "dark"))
    };

    applyTheme("light");
    themeButton.addEventListener("click", () => {
        const currentTheme = root.getAttribute("data-theme");
        applyTheme(currentTheme === "dark" ? "light" : "dark");
    });
};

initThemeToggle();