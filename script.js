/* =========================================================
   NAGRIX - MAIN JAVASCRIPT
   Citizen | Officer | Admin | University | Company
========================================================= */


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function scrollToPortals() {
    const portals = document.getElementById("portals");

    if (portals) {
        portals.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* =========================================================
   PORTAL FUNCTIONS
========================================================= */

function openCitizen() {
    window.location.href = "citizen.html";
}

function openOfficer() {
    window.location.href = "officer.html";
}

function openAdmin() {
    window.location.href = "admin.html";
}

function openUniversity() {
    window.location.href = "university.html";
}

function openCompany() {
    window.location.href = "company.html";
}

function openInnovation() {
    window.location.href = "innovation.html";
}


/* =========================================================
   SAFE NAVIGATION
   Prevents errors if a page is not created yet
========================================================= */

function navigateToPage(page) {

    if (!page) {
        return;
    }

    window.location.href = page;
}


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (!navbar) {
        return;
    }

    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }

});


/* =========================================================
   SMOOTH SCROLL FOR NAVIGATION LINKS
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".portal-card, .workflow-item, .innovation-content, .hero-content, .hero-visual"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal-hidden");
        revealObserver.observe(element);
    });

}


/* =========================================================
   PORTAL CARD CLICK SUPPORT
========================================================= */

document.querySelectorAll(".portal-card").forEach(function (card) {

    card.addEventListener("click", function (event) {

        /*
         * If user clicked a button or link,
         * don't trigger card navigation twice.
         */

        if (
            event.target.closest("button") ||
            event.target.closest("a")
        ) {
            return;
        }

        if (card.classList.contains("citizen-card")) {
            openCitizen();
        }

        else if (card.classList.contains("officer-card")) {
            openOfficer();
        }

        else if (card.classList.contains("admin-card")) {
            openAdmin();
        }

        else if (card.classList.contains("university-card")) {
            openUniversity();
        }

        else if (card.classList.contains("company-card")) {
            openCompany();
        }

    });

});


/* =========================================================
   AI CORE STATUS
========================================================= */

function updateAIStatus() {

    const aiStatus = document.querySelector(".ai-status");

    if (!aiStatus) {
        return;
    }

    const statusMessages = [
        "Civic Intelligence Active",
        "AI Problem Analysis Active",
        "Smart Routing Active",
        "Civic Data Processing",
        "Innovation Network Active"
    ];

    let index = 0;

    setInterval(function () {

        index++;

        if (index >= statusMessages.length) {
            index = 0;
        }

        aiStatus.innerHTML =
            "<span>●</span> " + statusMessages[index];

    }, 4000);

}

updateAIStatus();


/* =========================================================
   HERO AI CIRCLE ANIMATION
========================================================= */

const aiCircle = document.querySelector(".ai-circle");

if (aiCircle) {

    aiCircle.addEventListener("mouseenter", function () {
        aiCircle.classList.add("ai-active");
    });

    aiCircle.addEventListener("mouseleave", function () {
        aiCircle.classList.remove("ai-active");
    });

}


/* =========================================================
   WORKFLOW ACTIVE EFFECT
========================================================= */

const workflowItems = document.querySelectorAll(".workflow-item");

workflowItems.forEach(function (item) {

    item.addEventListener("mouseenter", function () {

        workflowItems.forEach(function (otherItem) {
            otherItem.classList.remove("workflow-active");
        });

        item.classList.add("workflow-active");

    });

});


/* =========================================================
   INNOVATION FLOW ANIMATION
========================================================= */

const innovationFlow = document.querySelector(".innovation-flow");

if (innovationFlow) {

    const innovationItems =
        innovationFlow.querySelectorAll(":scope > div");

    innovationItems.forEach(function (item, index) {

        item.addEventListener("mouseenter", function () {

            item.classList.add("innovation-active");

        });

        item.addEventListener("mouseleave", function () {

            item.classList.remove("innovation-active");

        });

    });

}


/* =========================================================
   UNIVERSITY COLLABORATION
========================================================= */

function startUniversityCollaboration() {

    const universityData = {
        type: "university",
        message: "University collaboration initiated"
    };

    localStorage.setItem(
        "nagrix_collaboration",
        JSON.stringify(universityData)
    );

    openUniversity();
}


/* =========================================================
   COMPANY COLLABORATION
========================================================= */

function startCompanyCollaboration() {

    const companyData = {
        type: "company",
        message: "Industry collaboration initiated"
    };

    localStorage.setItem(
        "nagrix_collaboration",
        JSON.stringify(companyData)
    );

    openCompany();
}


/* =========================================================
   COLLABORATION TYPE
========================================================= */

function getCollaborationType() {

    const data =
        localStorage.getItem("nagrix_collaboration");

    if (!data) {
        return null;
    }

    try {
        return JSON.parse(data);
    }

    catch (error) {

        console.error(
            "Collaboration data error:",
            error
        );

        return null;
    }

}


/* =========================================================
   UNIVERSITY RESEARCH FLOW
========================================================= */

function openUniversityResearch() {

    const researchData = {
        project: "Civic Problem Research",
        source: "NAGRIX",
        timestamp: new Date().toISOString()
    };

    localStorage.setItem(
        "nagrix_university_research",
        JSON.stringify(researchData)
    );

    window.location.href = "university.html";
}


/* =========================================================
   COMPANY DEVELOPMENT FLOW
========================================================= */

function openCompanyDevelopment() {

    const developmentData = {
        project: "Civic Solution Development",
        source: "NAGRIX",
        timestamp: new Date().toISOString()
    };

    localStorage.setItem(
        "nagrix_company_development",
        JSON.stringify(developmentData)
    );

    window.location.href = "company.html";
}


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuButton =
    document.querySelector(".mobile-menu");

const navigation =
    document.querySelector(".navbar nav");

if (mobileMenuButton && navigation) {

    mobileMenuButton.addEventListener(
        "click",
        function () {

            navigation.classList.toggle(
                "mobile-nav-open"
            );

        }
    );

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        document.querySelectorAll(".mobile-nav-open")
            .forEach(function (element) {

                element.classList.remove(
                    "mobile-nav-open"
                );

            });

    }

});


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "NAGRIX Civic Intelligence Platform initialized."
        );

        console.log(
            "Citizen Portal: Ready"
        );

        console.log(
            "Officer Portal: Ready"
        );

        console.log(
            "Admin Command Center: Ready"
        );

        console.log(
            "University Collaboration: Ready"
        );

        console.log(
            "Company Collaboration: Ready"
        );

    }
);


/* =========================================================
   FIREBASE CONNECTION STATUS
========================================================= */

window.addEventListener(
    "load",
    function () {

        /*
         * firebase-config.js is loaded as a module.
         * This check simply confirms that the page
         * has loaded without blocking the UI.
         */

        console.log(
            "NAGRIX Firebase module loading completed."
        );

    }
);


/* =========================================================
   GLOBAL NAGRIX OBJECT
   Useful for other pages
========================================================= */

window.NAGRIX = {

    openCitizen: openCitizen,

    openOfficer: openOfficer,

    openAdmin: openAdmin,

    openUniversity: openUniversity,

    openCompany: openCompany,

    openInnovation: openInnovation,

    startUniversityCollaboration:
        startUniversityCollaboration,

    startCompanyCollaboration:
        startCompanyCollaboration,

    openUniversityResearch:
        openUniversityResearch,

    openCompanyDevelopment:
        openCompanyDevelopment,

    getCollaborationType:
        getCollaborationType

};


/* =========================================================
   END OF NAGRIX SCRIPT
========================================================= */