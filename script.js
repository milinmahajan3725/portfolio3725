/* =====================================================
   MILIN MAHAJAN PORTFOLIO
   INTERACTIVE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ELEMENTS
    ========================= */

    const modal = document.getElementById("projectModal");
    const modalClose = document.getElementById("modalClose");

    const modalNumber = document.getElementById("modalNumber");
    const modalTitle = document.getElementById("modalTitle");
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("modalDescription");
    const modalTech = document.getElementById("modalTech");

    const pdfButton = document.getElementById("pdfButton");
    const downloadPdf = document.getElementById("downloadPdf");
    const codeButton = document.getElementById("codeButton");
    const githubButton = document.getElementById("githubButton");

    const navbar = document.querySelector(".navbar");


    /* =================================================
       PROJECT DATA
    ================================================= */

    const projects = {

        sales: {

            number: "PROJECT 01",

            title: "Sales Data Analysis",

            image:
                "assets/projects/sales-data/sales-data.jpg",

            description:
                "A data analysis project using Python and Excel.",

            technologies: [
                "Python",
                "Excel"
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

            title: "Cyber Security Internship",

            image:
                "assets/projects/cyber-security/cyber-security.jpg",

            description:
                "Cyber Security Internship focused on Vulnerability Assessment.",

            technologies: [
                "Cyber Security",
                "Vulnerability Assessment"
            ],

            pdf:
                "assets/projects/cyber-security/cyber-security.pdf",

            code:
                "assets/projects/cyber-security/cyber-security.py",

            github:
                "https://github.com/mahajanmilin3024"

        }

    };


    /* =================================================
       PROJECT MODAL
    ================================================= */

    const projectCards =
        document.querySelectorAll(".project-card");


    projectCards.forEach(card => {

        card.addEventListener("click", () => {

            const projectId =
                card.dataset.project;

            const project =
                projects[projectId];

            if (!project) return;


            /* Basic Information */

            modalNumber.textContent =
                project.number;

            modalTitle.textContent =
                project.title;

            modalDescription.textContent =
                project.description;


            /* Image */

            modalImage.src =
                project.image;

            modalImage.alt =
                project.title;


            /* Technologies */

            modalTech.innerHTML = "";

            project.technologies.forEach(tech => {

                const tag =
                    document.createElement("span");

                tag.textContent = tech;

                modalTech.appendChild(tag);

            });


            /* Buttons */

            pdfButton.href =
                project.pdf;

            downloadPdf.href =
                project.pdf;

            codeButton.href =
                project.code;

            githubButton.href =
                project.github;


            /* Open */

            modal.classList.add("active");

            document.body.style.overflow =
                "hidden";

        });

    });


    /* =================================================
       CLOSE MODAL
    ================================================= */

    function closeModal() {

        modal.classList.remove("active");

        document.body.style.overflow =
            "";

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


    /* Click outside */

    if (modal) {

        modal.addEventListener(
            "click",
            event => {

                if (
                    event.target === modal
                ) {

                    closeModal();

                }

            }
        );

    }


    /* ESC */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                modal.classList.contains("active")
            ) {

                closeModal();

            }

        }
    );


    /* =================================================
       NAVBAR SCROLL EFFECT
    ================================================= */

    window.addEventListener(
        "scroll",
        () => {

            if (!navbar) return;

            if (window.scrollY > 30) {

                navbar.style.boxShadow =
                    "0 5px 20px rgba(18, 100, 216, 0.08)";

            } else {

                navbar.style.boxShadow =
                    "none";

            }

        }
    );


    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    window.addEventListener(
        "scroll",
        () => {

            let current = "";

            sections.forEach(section => {

                const sectionTop =
                    section.offsetTop - 100;

                if (
                    window.scrollY >= sectionTop
                ) {

                    current =
                        section.getAttribute("id");

                }

            });


            navLinks.forEach(link => {

                link.style.color = "";

                if (
                    link.getAttribute("href") ===
                    `#${current}`
                ) {

                    link.style.color =
                        "#1264d8";

                }

            });

        }
    );


    /* =================================================
       SMOOTH SCROLL
    ================================================= */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href");

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) return;

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });


    /* =================================================
       SCROLL REVEAL ANIMATION
    ================================================= */

    const revealElements =
        document.querySelectorAll(
            ".section-title, .section-label, " +
            ".about-content, .skill-card, " +
            ".project-card, .contact-box"
        );


    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(20px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

    });


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =================================================
       PROJECT IMAGE ERROR HANDLING
    ================================================= */

    if (modalImage) {

        modalImage.addEventListener(
            "error",
            () => {

                modalImage.alt =
                    "Project image not available";

                console.warn(
                    "Project image not found."
                );

            }
        );

    }


    /* =================================================
       BUTTON CLICK EFFECT
    ================================================= */

    const buttons =
        document.querySelectorAll(
            ".btn, .nav-resume, " +
            ".contact-button, .modal-buttons a"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                button.style.transform =
                    "scale(0.97)";

                setTimeout(() => {

                    button.style.transform =
                        "";

                }, 120);

            }
        );

    });


    /* =================================================
       RESUME LINK
    ================================================= */

    const resumeLinks =
        document.querySelectorAll(
            'a[href*="Milin_Mahajan_Resume.pdf"]'
        );


    resumeLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                console.log(
                    "Resume opened."
                );

            }
        );

    });


    /* =================================================
       GITHUB LINKS
    ================================================= */

    const githubLinks =
        document.querySelectorAll(
            'a[href*="github.com"]'
        );


    githubLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                console.log(
                    "GitHub profile opened."
                );

            }
        );

    });


    /* =================================================
       PAGE LOADED
    ================================================= */

    document.body.classList.add(
        "page-loaded"
    );


    console.log(
        "Milin Mahajan Portfolio Loaded Successfully."
    );

});
