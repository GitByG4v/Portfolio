$(function() {
    // Configuration
    const JSON_PATH = 'data/content.json';
    
    // Injected Fallback Data (to ensure rendering works even on file:// protocol)
    const DEFAULT_DATA = {
        "hero": {
            "title": "Hi, I'm Gavaskar",
            "subtitle": "Computer Science Intern"
        },
        "about": {
            "title": "A Little Bit About Me",
            "image": "img/headshot1-square4.png",
            "description": "Hi! I'm Gavaskar, a Computer Science intern passionate about Full Stack Development, UI/UX Design, and DevOps. Currently, I'm a third-year student at <a href=\"https://www.tc.esn.ac.lk\" target=\"_blank\">Eastern University, Trincomalee Campus</a>, pursuing a degree in <a href=\"https://dcs.tc.esn.ac.lk\" target=\"_blank\">Computer Science</a>. I love creating engaging digital experiences, building scalable web apps, and exploring innovative solutions through design and development.<br><br>Outside of tech, I enjoy music, traveling, and discovering new places."
        },
        "tldr": [
            { "icon": "fa-keyboard-o", "title": "Computer Science Intern" },
            { "icon": "fa-pencil", "title": "UI/UX Designer" },
            { "icon": "fa-tree", "title": "Full Stack Developer" }
        ],
        "services": [
            {
                "icon": "fa-laptop",
                "title": "UI/UX Design",
                "description": "I design intuitive and responsive interfaces for web and mobile applications. My work focuses on usability, accessibility, and applying HCI principles to create enjoyable digital experiences. I use tools like Figma for wireframing, prototyping, and user testing."
            },
            {
                "icon": "fa-code",
                "title": "Full Stack Development",
                "description": "I develop web applications using technologies like React.js, Node.js, Express.js, MongoDB, PHP, SQL, and FastAPI. I focus on clean, maintainable code and building scalable, responsive solutions with modern frameworks and DevOps tools."
            },
            {
                "icon": "fa-cogs",
                "title": "IT & DevOps",
                "description": "I have hands-on experience in Linux system administration, Docker, Kubernetes, and Infrastructure as Code (IaC). I manage virtualized environments, troubleshoot systems, and deploy applications efficiently for both learning projects and real-world use cases."
            }
        ],
        "experience": {
            "description": "I have experience in web development, UI/UX design, and IT projects, with hands-on work in full-stack applications, DevOps tools, and responsive design. I'm passionate about building innovative digital solutions and continuously learning in this fast-evolving tech industry.",
            "skills": [
                { "img": "img/skills/html.png", "title": "HTML" },
                { "img": "img/skills/css.png", "title": "CSS" },
                { "img": "img/skills/C.png", "title": "C" },
                { "img": "img/skills/js.png", "title": "JavaScript" },
                { "img": "img/skills/java.png", "title": "Java" },
                { "img": "img/skills/python.png", "title": "Python" },
                { "img": "img/skills/figma.png", "title": "Figma" },
                { "img": "img/skills/docker.png", "title": "Docker" },
                { "img": "img/skills/kubernetes.png", "title": "Kubernetes" },
                { "img": "img/skills/react.png", "title": "React" },
                { "img": "img/skills/node.png", "title": "Node.js" },
                { "img": "img/skills/mongodb.png", "title": "MongoDB" },
                { "img": "img/skills/github.png", "title": "GitHub" },
                { "img": "img/skills/mysql.png", "title": "MySQL" },
                { "img": "img/skills/php.png", "title": "PHP" }
            ]
        },
        "achievements": [
            {
                "type": "achievement",
                "image": "img/achivements/ach1.jpg",
                "emoji": "🏆",
                "title": "Finalist - Yarl Geek Challenge",
                "subtitle": "Senior - (Season 14)",
                "description": "A prestigious hackathon where our team <b>TRISOLUTION</b> developed and pitched an innovative tech solution, securing a spot in the grand finale."
            },
            {
                "type": "achievement",
                "image": "img/achivements/ach2.jpg",
                "emoji": "🌟",
                "title": "Cre8X 2.0 - TOP 8",
                "subtitle": "National UI/UX Design Competition",
                "description": "Recognized our team <b>UXperts-Pro</b> for outstanding UI/UX design in a national-level competition, focusing on user-centric and visually appealing digital interfaces."
            }
        ],
        "projects": [
            {
                "id": "courseSourceModal",
                "image": "img/bookstore.jpg",
                "title": "Book Store Web App",
                "description": "A full-stack CRUD app built with MongoDB, Express, React, and Node.js. Features authentication, REST APIs, and a responsive frontend built with React.js.",
                "tech": "MERN Stack Project",
                "visitLink": "#",
                "sourceLink": "https://github.com/GitByG4v/BookShop-MERN.git"
            },
            {
                "id": "feedbackLoopModal",
                "image": "img/jobportal.jpg",
                "title": "Job Portal Website",
                "description": "A full-featured job portal with job filtering, pagination, and secure authentication (email/Google). Responsive UI built with Tailwind CSS.",
                "tech": "MERN Stack Project",
                "visitLink": "#",
                "sourceLink": "https://github.com/GitByG4v/MERN-JobPortal.git"
            },
            {
                "id": "webdevModal",
                "image": "img/whatsapp-redesign.png",
                "title": "WhatsApp Redesign",
                "description": "Prototyped new features like message scheduling and anonymous polling. Applied HCI principles and validated the design with real users.",
                "tech": "UI/UX Project",
                "visitLink": "#",
                "sourceLink": "https://github.com/GitByG4v/Figma-Project.git"
            },
            {
                "id": "fontipsumsModal",
                "image": "img/Desktop_HomePage.jpeg",
                "title": "Medicinal Plant ID System",
                "description": "Microservices-based ML application for identifying medicinal plants with multilingual data and a web interface. Project ongoing as a final year research project.",
                "tech": "Final Year Project",
                "visitLink": "#",
                "sourceLink": "https://github.com/GitByG4v/medicinal-plant-microservices.git"
            },
            {
                "id": "nuwitModal",
                "image": "img/3d-website.jpg",
                "title": "3D Website Frontend",
                "description": "Interactive 3D website built with React and Spline. Focused on frontend interactivity and smooth user experience.",
                "tech": "React + Spline Project",
                "visitLink": "#",
                "sourceLink": "https://github.com/GitByG4v/3D_Website.git"
            },
            {
                "id": "oneCardForAllModal",
                "image": "img/UIUX-projects.jpg",
                "title": "UI/UX Design Projects",
                "description": "Multiple app and website prototypes created in Figma with wireframing, user testing, and HCI design principles applied.",
                "tech": "Figma Prototypes",
                "visitLink": "#",
                "sourceLink": "https://www.figma.com/design/7qTROQcVsOnLr7rDsp73vX/Final-Figma-Project?node-id=0-1&t=FKcSWjO484GFfxAE-1"
            }
        ],
        "contact": {
            "email": "g4v.dev@gmail.com",
            "message": "just want to chat, feel free to shoot me an email!"
        },
        "social": [
            { "id": "facebook", "icon": "fa-facebook", "link": "https://www.facebook.com/" },
            { "id": "twitter", "icon": "fa-twitter", "link": "https://twitter.com/" },
            { "id": "instagram", "icon": "fa-instagram", "link": "https://instagram.com/" },
            { "id": "spotify", "icon": "fa-spotify", "link": "https://play.spotify.com/user/" },
            { "id": "codepen", "icon": "fa-codepen", "link": "http://codepen.io/" },
            { "id": "github", "icon": "fa-github", "link": "https://github.com/GitByG4v" },
            { "id": "linkedin", "icon": "fa-linkedin", "link": "https://www.linkedin.com/in/g4v/" }
        ],
        "backgrounds": {
            "hero": "img/mountain-dusk.jpeg",
            "resume": "img/laptop-blur.jpg",
            "cv_url": "resume2025.pdf"
        },
        "footer": {
            "copyright": "Gavaskar 2025"
        }
    };

    async function initPortfolio() {
        let data = DEFAULT_DATA;
        try {
            const response = await fetch(JSON_PATH + '?t=' + Date.now());
            if (response.ok) {
                data = await response.json();
                console.log('Loaded data from content.json');
            }
        } catch (error) {
            console.warn('Using fallback data (local file access)');
        }
        
        applyBackgrounds(data.backgrounds);
        renderHero(data.hero);
        renderAbout(data.about);
        renderTLDR(data.tldr);
        renderServices(data.services);
        renderExperience(data.experience);
        renderAchievements(data.achievements);
        renderProjects(data.projects);
        renderContact(data.contact);
        renderSocial(socialLinksArray(data.social)); 
        renderFooter(data.footer);

        // Initialize animations after content is loaded
        if (window.initAnimations) {
            window.initAnimations();
        }
    }

    function socialLinksArray(social) {
        // Enforce backward compatibility if social is an object
        if (!Array.isArray(social)) {
            return Object.keys(social).map(id => ({ id, ...social[id] }));
        }
        return social;
    }

    function applyBackgrounds(backgrounds) {
        if (!backgrounds) return;
        if (backgrounds.hero) {
            $('#intro').css({
                'background-image': `url(${backgrounds.hero})`,
                'background-size': 'cover',
                'background-attachment': 'fixed'
            });
        }
        if (backgrounds.resume) {
            $('#resume').css({
                'background-image': `url(${backgrounds.resume})`,
                'background-size': 'cover',
                'background-attachment': 'fixed'
            });
        }
        if (backgrounds.cv_url) {
            $('#resume-button a').attr('href', backgrounds.cv_url);
        }
    }

    function renderHero(hero) {
        $('#hero-title').html(hero.title);
        $('#hero-subtitle').html(hero.subtitle);
    }

    function renderAbout(about) {
        if (about.title) $('#about-title').html(about.title);
        $('#prof-pic').attr('src', about.image);
        $('#about-text').html(about.description);
    }

    function renderTLDR(tldr) {
        let html = '<div id="tl-dr"><h3>TL;DR?&nbsp;&nbsp;Self Proclamations:</h3>';
        tldr.forEach(item => {
            html += `
                <div class="tldr-proc">
                    <div class="tldr-icon"><i class="fa ${item.icon}"></i></div>
                    <h5>${item.title}</h5>
                </div>`;
        });
        html += '</div>';
        $('#tldr-container').html(html);
    }

    function renderServices(services) {
        const container = $('#services-container');
        // Clear existing static headings if needed, keeping only the H2
        container.find('.wp2').remove(); 
        services.forEach((service, index) => {
            const delay = index === 1 ? 'delay-025s' : (index === 2 ? 'delay-05s' : '');
            container.append(`
                <div class="col-md-4 wp2 ${delay}">
                    <div class="icon"><i class="fa ${service.icon}"></i></div>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>`);
        });
    }

    function renderExperience(exp) {
        $('#experience-description').text(exp.description);
        const container = $('#skills-container');
        container.empty();
        if (exp.skills && Array.isArray(exp.skills)) {
            exp.skills.forEach(skill => {
                if (skill && skill.img && skill.img.trim() !== "" && skill.img !== "undefined") {
                    container.append(`
                        <div class="tech-item"><img src="${skill.img}" alt="${skill.title || ''}" title="${skill.title || ''}"></div>`);
                }
            });
        }
    }

    function renderAchievements(ach) {
        const container = $('#achievements-certificates-container');
        container.empty();
        ach.forEach(item => {
            container.append(`
                <div class="col-md-4 col-sm-6 col-xs-12 achievement-card-wrapper wp5" style="margin-bottom:30px;">
                    <div class="achievement-card" data-type="${item.type}">
                        <div class="card-image-container" style="background: url('${item.image}') no-repeat center center / cover;"></div>
                        <div class="initial-content">
                            <p class="card-title">
                                <span class="card-emoji">${item.emoji}</span>
                                <strong>${item.title}</strong><br>
                                <span class="card-subtitle">${item.subtitle}</span>
                            </p>
                        </div>
                        <div class="description-overlay">
                            <p>${item.description}</p>
                        </div>
                    </div>
                </div>`);
        });
    }

    function renderProjects(projects) {
        const container = $('#projects-container');
        const modalContainer = $('#modals-placeholder');
        container.empty();
        modalContainer.empty();

        projects.forEach((proj) => {
            container.append(`
                <div class="col-md-4 col-sm-6 col-xs-12 project-card wp5" style="margin-bottom:30px;">
                    <div class="portfolio-item" data-toggle="modal" href="#${proj.id}">
                        <div class="portfolio-overlay"></div>
                        <div class="links">
                            <a class="image-link"><i class="fa fa-search-plus"></i></a>
                        </div>
                        <img src="${proj.image}" alt="${proj.title}" style="width:100%; height: auto; display: block;">
                        <div class="portfolio-info">
                            <h3>${proj.title}</h3>
                        </div>
                    </div>
                </div>`);

            modalContainer.append(`
                <div class="modal fade" id="${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 class="modal-title">${proj.title}</h4>
                                <h6 class="modal-title-description">${proj.tech}</h6>
                            </div>
                            <div class="modal-body">
                                <p><img class="img-responsive img-centered" src="${proj.image}" alt=""></p>
                                <p class="modal-description">${proj.description}</p>
                                <p class="visit">
                                    ${proj.visitLink !== '#' ? `<a href="${proj.visitLink}" target="_blank" id="visit-btn">Visit Site</a> or ` : ''}
                                    <a href="${proj.sourceLink}" target="_blank" id="visit-btn">View Source</a>
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>`);
        });
    }

    function renderContact(contact) {
        if (contact.title) $('#contact-title').html(contact.title);
        $('#contact-message').text(contact.message);
        $('#email-button').attr('href', `mailto:${contact.email}`);
    }

    function renderSocial(social) {
        const container = $('#social-links');
        container.empty();
        social.forEach(platform => {
            container.append(`
                <li><a id="${platform.id}" href="${platform.link}" target="_blank"><i class="fa ${platform.icon}"></i></a></li>`);
        });
    }

    function renderFooter(footer) {
        $('#copyright-text').html(`<i class="fa fa-copyright"></i> ${footer.copyright}`);
    }

    // Call init
    initPortfolio();
});
