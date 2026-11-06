
// ===== Project data =====
const projects = [
    {
        title: "Personal Portfolio",
        description: "This site: a responsive portfolio built with plain HTML, CSS and JavaScript.",
        category: "Websites",
        technologies: ["HTML", "CSS", "JavaScript"],
        url: "https://github.com/Soe-Wunna/portfolio"
    },
    {
        title: "Badminton project",
        description: "A responsive school badminton tournament full stack website",
        category: "Full stack Websites",
        technologies: ["React", "PostgreSQL", "Node.js"],
        url: ""
    },
    {
        title: "E-commerce",
        description: "Still in progress: only backend site of an E-commerce website",
        category: "Backend",
        technologies: ["Node.js", "Mongodb", "Express.js"],
        url: ""
    },
    {
        title: "To-do-List App",
        description: "To do list app.",
        category: "Application",
        technologies: ["HTML", "CSS", "JavaScript"],
        url: ""
    }
]

// ===== Project cards =====
function createProjectCard(project) {
    const card = document.createElement("article");
    card.className = "project-card";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const techList = document.createElement("ul");
    techList.className = "tech-list";
    project.technologies.forEach((tech) => {
        const item = document.createElement("li");
        item.textContent = tech;
        techList.append(item);
    })

    const link = document.createElement("a");
    link.className = "button";
    link.href = project.url;
    link.textContent = `View ${project.title}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    card.append(title, description, techList, link);
    return card;
}

function renderProjects(list) {
    const container = document.querySelector("#project-list");
    container.replaceChildren();

    list.forEach((project) => {
        container.append(createProjectCard(project));
    })
}
renderProjects(projects);

// ===== Project filters =====
function initProjectFilters() {
    const filterGroup = document.querySelector(".filters");
    const resultsCount = document.querySelector("#results-count");

    const categories = ["All", ...new Set(projects.map((project) => project.category))];

    function applyFilter(category) {
        const visible = category === "All"
            ? projects
            : projects.filter((project) => project.category === category);

        renderProjects(visible);

        resultsCount.textContent = `Showing ${visible.length} of ${projects.length} projects`;

        filterGroup.querySelectorAll("button").forEach((button) => {
            button.setAttribute("aria-pressed", String(button.textContent === category));
        });
    }

    categories.forEach((category) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "filter-button";
        button.textContent = category;
        button.setAttribute("aria-pressed", "false");
        button.addEventListener("click", () => applyFilter(category));
        filterGroup.append(button);
    });


    applyFilter("All");
}

initProjectFilters();

// ===== Contact form =====
function initContactForm() {
    const form = document.querySelector("#contact-form");
    const status = document.querySelector("#form-status");
    const counter = document.querySelector("#message-count");

    const fields = {
        name: document.querySelector("#name"),
        email: document.querySelector("#email"),
        message: document.querySelector("#message")
    };

    const validators = {
        name: (value) =>
            value.length >= 2 ? "" : "Please enter a name at least 2 characters",
        email: (value) =>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Please enter a valid email address, like name@example.com.",
        message: (value) => {
            if (value.length < 20) return `Message must be at least 20 characters (now ${value.length}).`;
            if (value.length > 500) return `Message must be 500 characters or fewer (now ${value.length}).`;
            return "";
        }
    };

    function validateField(name) {
        const field = fields[name];
        const errorElement = document.querySelector(`#${name}-error`);
        const errorMessage = validators[name](field.value.trim());

        errorElement.textContent = errorMessage;

        if (errorMessage) {
            field.setAttribute("aria-invalid", "true");
        } else {
            field.removeAttribute("aria-invalid");
        }
        return errorMessage === "";
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        status.textContent = "";

        const names = Object.keys(fields);
        const results = names.map((name) => validateField(name));
        const firstInvalid = names.find((name, index) => !results[index]);

        if (firstInvalid) {
            fields[firstInvalid].focus();
            return;
        }

        status.textContent = "Demo only. Your message has not been sent.";
    })
}
initContactForm();




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
        themeButton.setAttribute("aria-pressed", String(theme === "dark"));
    }

    const STORAGE_KEY = "theme";

    function getSavedTheme() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved === "dark" || saved === "light" ? saved : null;
        } catch (error) {
            return null;
        }
    }

    function saveTheme(theme) {
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (error) {
            // storage unavailable: the theme still works for this visit
        }
    }

    applyTheme(getSavedTheme() ?? "light");

    themeButton.addEventListener("click", () => {
        const current = root.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        applyTheme(next);
        saveTheme(next);
    });
};

initThemeToggle();

