/* =====================================================
   MILIN MAHAJAN PORTFOLIO
   PROJECT MODAL SYSTEM
===================================================== */


/* =====================================================
   PROJECT DATA
===================================================== */

const projects = {

    sales: {

        number: "PROJECT 01",

        title: "Sales Data Analysis",

        image:
            "assets/projects/sales-data/sales-data.jpg",

        description:
            "A data analysis project using Python and Excel to analyze sales performance, identify trends, understand business patterns and generate useful insights from the dataset.",

        technologies: [
            "Python",
            "Excel",
            "Pandas",
            "Data Analysis",
            "Data Visualization"
        ],

        pdf:
            "assets/projects/sales-data/sales-data.pdf",

        code:
            "assets/projects/sales-data/sales-data.py",

        github:
            "https://github.com/mahajanmilin3024"

    },


    cyber: {

        number: "PROJECT 02",

        title: "Cyber Security Vulnerability Assessment",

        image:
            "assets/projects/cyber-security/cyber-security.jpg",

        description:
            "A cybersecurity project focused on understanding basic security concepts, identifying vulnerabilities and performing vulnerability assessment to improve digital security.",

        technologies: [
            "Cyber Security",
            "Vulnerability Assessment",
            "Network Security",
            "Security Analysis"
        ],

        pdf:
            "assets/projects/cyber-security/cyber-security.pdf",

        code:
            "assets/projects/cyber-security/cyber-security.py",

        github:
            "https://github.com/mahajanmilin3024"

    }

};


/* =====================================================
   GET MODAL ELEMENTS
===================================================== */

const modal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalNumber =
    document.getElementById("modalNumber");

const modalTitle =
    document.getElementById("modalTitle");

const modalImage =
    document.getElementById("modalImage");

const modalDescription =
    document.getElementById("modalDescription");

const modalTech =
    document.getElementById("modalTech");

const pdfButton =
    document.getElementById("pdfButton");

const downloadPdf =
    document.getElementById("downloadPdf");

const codeButton =
    document.getElementById("codeButton");

const githubButton =
    document.getElementById("githubButton");


/* =====================================================
   PROJECT CARDS
===================================================== */

const projectCards =
    document.querySelectorAll(".project-card");


/* =====================================================
   OPEN PROJECT
===================================================== */

projectCards.forEach(card => {

    card.addEventListener("click", function () {

        const projectId =
            this.getAttribute("data-project");

        openProject(projectId);

    });

});


/* =====================================================
   OPEN PROJECT FUNCTION
===================================================== */

function openProject(projectId) {

    const project =
        projects[projectId];


    if (!project) {

        console.error(
            "Project not found:",
            projectId
        );

        return;

    }


    /* PROJECT NUMBER */

    modalNumber.textContent =
        project.number;


    /* PROJECT TITLE */

    modalTitle.textContent =
        project.title;


    /* PROJECT IMAGE */

    modalImage.src =
        project.image;

    modalImage.alt =
        project.title;


    /* DESCRIPTION */

    modalDescription.textContent =
        project.description;


    /* TECHNOLOGIES */

    modalTech.innerHTML = "";


    project.technologies.forEach(technology => {

        const tag =
            document.createElement("span");

        tag.textContent =
            technology;

        modalTech.appendChild(tag);

    });


    /* PDF */

    pdfButton.href =
        project.pdf;


    downloadPdf.href =
        project.pdf;


    /* SOURCE CODE */

    codeButton.href =
        project.code;


    /* GITHUB */

    githubButton.href =
        project.github;


    /* OPEN MODAL */

    modal.classList.add("active");


    /* PREVENT BODY SCROLL */

    document.body.style.overflow =
        "hidden";

}


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeProject() {

    modal.classList.remove("active");

    document.body.style.overflow =
        "";

}


/* =====================================================
   CLOSE BUTTON
===================================================== */

modalClose.addEventListener(
    "click",
    closeProject
);


/* =====================================================
   CLICK OUTSIDE MODAL
===================================================== */

modal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === modal
        ) {

            closeProject();

        }

    }
);


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeProject();

        }

    }
);


/* =====================================================
   RESUME DOWNLOAD TRACKING
===================================================== */

const resumeLinks =
    document.querySelectorAll(
        'a[href*="Milin_Mahajan_Resume.pdf"]'
    );


resumeLinks.forEach(link => {

    link.addEventListener(
        "click",
        function () {

            console.log(
                "Resume opened."
            );

        }
    );

});


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 30) {

            navbar.style.boxShadow =
                "0 8px 30px rgba(16, 24, 40, 0.06)";

        } else {

            navbar.style.boxShadow =
                "none";

        }

    }
);


/* =====================================================
   IMAGE ERROR HANDLING
===================================================== */

modalImage.addEventListener(
    "error",
    function () {

        this.style.display =
            "none";

        console.warn(
            "Project image not found:",
            this.src
        );

    }
);


/* =====================================================
   SMOOTH NAVIGATION
===================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    targetId === "#" ||
                    targetId === ""
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "🚀 Milin Mahajan Portfolio Loaded Successfully!"
);
