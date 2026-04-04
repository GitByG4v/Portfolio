$(function () {
    let currentData = null;
    let githubApi = null;

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
                "description": "I design intuitive and responsive interfaces for web and mobile applications. My work focuses on usability, accessibility, and applying HCI principles to create enjoyable digital experiences."
            },
            {
                "icon": "fa-code",
                "title": "Full Stack Development",
                "description": "I develop web applications using technologies like React.js, Node.js, Express.js, MongoDB, PHP, SQL, and FastAPI."
            },
            {
                "icon": "fa-cogs",
                "title": "IT & DevOps",
                "description": "I have hands-on experience in Linux system administration, Docker, Kubernetes, and Infrastructure as Code (IaC)."
            }
        ],
        "experience": {
            "description": "I have experience in web development, UI/UX design, and IT projects, with hands-on work in full-stack applications, DevOps tools, and responsive design.",
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
                "description": "A prestigious hackathon where our team <b>TRISOLUTION</b> developed and pitched an innovative tech solution."
            },
            {
                "type": "achievement",
                "image": "img/achivements/ach2.jpg",
                "emoji": "🌟",
                "title": "Cre8X 2.0 - TOP 8",
                "subtitle": "National UI/UX Design Competition",
                "description": "Recognized our team <b>UXperts-Pro</b> for outstanding UI/UX design in a national-level competition."
            }
        ],
        "projects": [
            {
                "id": "courseSourceModal",
                "image": "img/bookstore.jpg",
                "title": "Book Store Web App",
                "description": "A full-stack CRUD app built with MongoDB, Express, React, and Node.js.",
                "tech": "MERN Stack Project",
                "visitLink": "#",
                "sourceLink": "https://github.com/GitByG4v/BookShop-MERN.git"
            },
            {
                "id": "feedbackLoopModal",
                "image": "img/jobportal.jpg",
                "title": "Job Portal Website",
                "description": "A full-featured job portal with job filtering, pagination, and secure authentication.",
                "tech": "MERN Stack Project",
                "visitLink": "#",
                "sourceLink": "https://github.com/GitByG4v/MERN-JobPortal.git"
            },
            {
                "id": "webdevModal",
                "image": "img/whatsapp-redesign.png",
                "title": "WhatsApp Redesign",
                "description": "Prototyped new features like message scheduling and anonymous polling.",
                "tech": "UI/UX Project",
                "visitLink": "#",
                "sourceLink": "https://github.com/GitByG4v/Figma-Project.git"
            },
            {
                "id": "fontipsumsModal",
                "image": "img/Desktop_HomePage.jpeg",
                "title": "Medicinal Plant ID System",
                "description": "Microservices-based ML application for identifying medicinal plants with multilingual data.",
                "tech": "Final Year Project",
                "visitLink": "#",
                "sourceLink": "https://github.com/GitByG4v/medicinal-plant-microservices.git"
            },
            {
                "id": "nuwitModal",
                "image": "img/3d-website.jpg",
                "title": "3D Website Frontend",
                "description": "Interactive 3D website built with React and Spline.",
                "tech": "React + Spline Project",
                "visitLink": "#",
                "sourceLink": "https://github.com/GitByG4v/3D_Website.git"
            },
            {
                "id": "oneCardForAllModal",
                "image": "img/UIUX-projects.jpg",
                "title": "UI/UX Design Projects",
                "description": "Multiple app and website prototypes created in Figma.",
                "tech": "Figma Prototypes",
                "visitLink": "#",
                "sourceLink": "https://www.figma.com/design/7qTROQcVsOnLr7rDsp73vX/Final-Figma-Project?node-id=0-1&t=FKcSWjO484GFfxAE-1"
            }
        ],
        "contact": {
            "title": "Get In Touch!",
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

    // --- Authentication & Initialization ---

    const savedToken = localStorage.getItem('gh_token');
    const savedUser = localStorage.getItem('admin_user');
    if (savedToken && savedToken !== 'demo' && savedUser === 'GgAaVvAaSsKkAaRr2027') {
        $('#admin-username').val(savedUser);
        $('#github-token').val(savedToken);
        authenticate(savedToken);
    }

    $('#login-btn').click(function () {
        const username = $('#admin-username').val();
        const token = $('#github-token').val();

        if (username !== 'GgAaVvAaSsKkAaRr2027') {
            return alert('Invalid username.');
        }

        if (!token) return alert('Access key required.');
        authenticate(token);
    });

    $('#admin-username, #github-token').keypress(function (e) { if (e.which == 13) $('#login-btn').click(); });

    $('#logout-btn').click(function () {
        localStorage.removeItem('gh_token');
        localStorage.removeItem('admin_user');
        location.reload();
    });

    async function authenticate(token) {
        const btn = $('#login-btn');
        btn.html('<i class="fa fa-spinner fa-spin"></i> Verifying Credentials...').prop('disabled', true);

        if (token.toLowerCase() === 'demo') {
            currentData = DEFAULT_DATA;
            $('#login-overlay').fadeOut(); $('#dashboard').fadeIn();
            populateForms(currentData);
            $('#save-all-btn').prop('disabled', true).text('Commit Disabled (Demo Mode)');
            $('#status-text').text('Demo mode: local preview only.').css('color', '#ff9800');
            return;
        }

        try {
            githubApi = new GitHubAPI(token);
            const fileData = await githubApi.getFile();
            const content = JSON.parse(decodeURIComponent(escape(atob(fileData.content))));
            localStorage.setItem('gh_token', token);
            localStorage.setItem('admin_user', 'GgAaVvAaSsKkAaRr2027');
            currentData = content;
            $('#login-overlay').fadeOut(); $('#dashboard').fadeIn();
            populateForms(currentData);
        } catch (error) {
            console.error(error); alert('Access denied: ' + error.message);
            btn.html('<i class="fa fa-lock"></i> Verify Identity').prop('disabled', false);
        }
    }

    // --- Image/File Logic ---
    $(document).on('input change', '.image-input', function () {
        const url = $(this).val();
        const preview = $(this).closest('.row, .admin-card').find('.img-preview');
        preview.attr('src', url);
    });

    window.handleFileUpload = async function (input, folder = 'uploads') {
        if (!githubApi) return alert('You must be logged in with a real token to upload files!');
        const file = input.files[0];
        if (!file) return;

        let $btn = $(input).next('button'); 
        if ($btn.length === 0) $btn = $(input).parent().find('button');
        if ($btn.length === 0) $btn = $(input).closest('.row, .admin-card').find('button'); 

        const originalHtml = $btn.html();
        $btn.addClass('loading').html('<i class="fa fa-spinner fa-spin"></i> Uploading...');

        const status = $('#status-text');
        status.text(`Uploading ${file.name}...`).css('color', '#fff');

        const reader = new FileReader();
        reader.onload = async function (e) {
            try {
                const base64 = e.target.result.split(',')[1];
                const downloadUrl = await githubApi.uploadFile(base64, `${Date.now()}_${file.name}`, folder);

                const $input = $(input).closest('.row, .admin-card').find('.image-input, input[name="cv-url"], input[type="text"]');
                $input.val(downloadUrl).trigger('change');

                if ($input.attr('name') === 'cv-url') {
                    $('#current-cv-link').attr('href', downloadUrl).show();
                }

                status.text('File uploaded successfully!').css('color', '#4caf50');
            } catch (error) {
                alert('Upload failed: ' + error.message);
                status.text('Upload failed.').css('color', '#f44336');
            } finally {
                $btn.removeClass('loading').html(originalHtml);
            }
        };
        reader.readAsDataURL(file);
    };

    // --- Form Management ---

    function populateForms(data) {
        // Hero
        $('#hero-form [name="title"]').val(data.hero.title);
        $('#hero-form [name="subtitle"]').val(data.hero.subtitle);
        $('#hero-form [name="hero-bg"]').val(data.backgrounds.hero).trigger('change');

        // About
        $('#about-form [name="about-title"]').val(data.about.title);
        $('#about-form [name="description"]').val(data.about.description);
        $('#about-form [name="image"]').val(data.about.image).trigger('change');
        renderTLDRList(data.tldr);

        // Passion (Services)
        renderServicesList(data.services || []);

        // Experience
        $('#experience-form [name="description"]').val(data.experience.description);
        renderSkillsList(data.experience.skills);

        // Achievements / Projects
        renderAchievementsList(data.achievements);
        renderProjectsList(data.projects);

        // Connect (Social, Contact, Footer)
        renderSocialList(data.social);
        $('#contact-form [name="contact-title"]').val(data.contact.title || "Get In Touch!");
        $('#contact-form [name="email"]').val(data.contact.email);
        $('#contact-form [name="message"]').val(data.contact.message);
        $('#footer-form [name="copyright"]').val(data.footer.copyright);

        // Resume
        $('#resume-admin-form [name="resume-bg"]').val(data.backgrounds.resume).trigger('change');
        $('#resume-admin-form [name="cv-url"]').val(data.backgrounds.cv_url);
        if (data.backgrounds.cv_url) {
            $('#current-cv-link').attr('href', data.backgrounds.cv_url).show();
        } else {
            $('#current-cv-link').hide();
        }
    }

    // --- List Renderers ---

    window.renderTLDRList = function (items) {
        let html = '';
        items.forEach((item, i) => {
            html += `
                <div class="tldr-item admin-card" data-index="${i}">
                    <div class="row">
                        <div class="col-md-4"><input type="text" class="form-control item-icon" value="${item.icon}" placeholder="fa-icon"></div>
                        <div class="col-md-6"><input type="text" class="form-control item-title" value="${item.title}" placeholder="Title"></div>
                        <div class="col-md-2"><button type="button" class="btn-cms btn-cms-danger" onclick="removeItem(this)">Delete</button></div>
                    </div>
                </div>`;
        });
        $('#tldr-list').html(html);
    };

    window.renderServicesList = function (services) {
        let html = '';
        services.forEach((s, i) => {
            html += `
                <div class="service-item admin-card">
                    <div class="row">
                        <div class="col-md-2"><label>Icon</label><input type="text" class="form-control srv-icon" value="${s.icon}"></div>
                        <div class="col-md-4"><label>Title</label><input type="text" class="form-control srv-title" value="${s.title}"></div>
                        <div class="col-md-5"><label>Description</label><input type="text" class="form-control srv-desc" value="${s.description}"></div>
                        <div class="col-md-1"><button type="button" class="btn-cms btn-cms-danger" onclick="removeItem(this)">X</button></div>
                    </div>
                </div>`;
        });
        $('#services-list').html(html);
    };

    window.renderSkillsList = function (skills) {
        let html = '';
        skills.forEach((skill, i) => {
            html += `
                <div class="skill-item col-md-4">
                    <div class="admin-card">
                        <div class="text-center"><img src="${skill.img}" class="img-preview img-thumbnail" style="height:60px; margin-bottom:10px;"></div>
                        <input type="hidden" class="skill-img image-input" value="${skill.img}">
                        <input type="file" class="hidden-file-input" style="display:none;" onchange="handleFileUpload(this)">
                        <button type="button" class="btn-cms btn-xs btn-block" onclick="$(this).closest('.admin-card').find('input[type=file]').click()">Upload</button>
                        <input type="text" class="form-control skill-title" value="${skill.title}" placeholder="Skill Name">
                        <button type="button" class="btn-cms btn-cms-danger btn-block" onclick="removeItem(this)">Delete</button>
                    </div>
                </div>`;
        });
        $('#skills-list').html(html);
    };

    window.renderAchievementsList = function (ach) {
        let html = '';
        ach.forEach((item, i) => {
            html += `
                <div class="achievement-item admin-card">
                    <div class="row">
                        <div class="col-md-3">
                            <img src="${item.image}" class="img-preview img-thumbnail" style="max-height:80px; margin-bottom:10px;">
                            <input type="hidden" class="ach-image image-input" value="${item.image}">
                            <input type="file" style="display:none;" onchange="handleFileUpload(this)">
                            <button type="button" class="btn-cms btn-xs btn-block" onclick="$(this).closest('.admin-card').find('input[type=file]').click()">Upload Image</button>
                            <label>Emoji Icon</label><input type="text" class="form-control ach-emoji" value="${item.emoji}">
                        </div>
                        <div class="col-md-4">
                            <label>Title</label><input type="text" class="form-control ach-title" value="${item.title}">
                            <label>Subtitle</label><input type="text" class="form-control ach-subtitle" value="${item.subtitle}">
                        </div>
                        <div class="col-md-4">
                            <label>Description</label><textarea class="form-control ach-desc" rows="4">${item.description}</textarea>
                        </div>
                        <div class="col-md-1"><button type="button" class="btn-cms btn-cms-danger" onclick="removeItem(this)">X</button></div>
                    </div>
                </div>`;
        });
        $('#achievements-list').html(html);
    };

    window.renderProjectsList = function (projects) {
        let html = '';
        projects.forEach((proj, i) => {
            html += `
                <div class="project-item admin-card" data-id="${proj.id}">
                    <div class="row">
                        <div class="col-md-3 text-center">
                            <img src="${proj.image}" class="img-preview img-thumbnail" style="max-height:100px; margin-bottom:10px;">
                            <input type="hidden" class="proj-image image-input" value="${proj.image}">
                            <input type="file" style="display:none;" onchange="handleFileUpload(this)">
                            <button type="button" class="btn-cms btn-xs btn-block" onclick="$(this).closest('.admin-card').find('input[type=file]').click()">Upload Thumbnail</button>
                            <label>ID (Modal)</label><input type="text" class="form-control proj-id" value="${proj.id}">
                        </div>
                        <div class="col-md-4">
                            <label>Title</label><input type="text" class="form-control proj-title" value="${proj.title}">
                            <label>Tech Stack</label><input type="text" class="form-control proj-tech" value="${proj.tech}">
                            <label>Source Link</label><input type="text" class="form-control proj-source" value="${proj.sourceLink}">
                        </div>
                        <div class="col-md-4">
                            <label>Description</label><textarea class="form-control proj-desc" rows="5">${proj.description}</textarea>
                        </div>
                        <div class="col-md-1"><button type="button" class="btn-cms btn-cms-danger" onclick="removeItem(this)">X</button></div>
                    </div>
                </div>`;
        });
        $('#projects-list').html(html);
    };

    window.renderSocialList = function (social) {
        let html = '';
        social.forEach((s, i) => {
            html += `
                <div class="social-item admin-card">
                    <div class="row">
                        <div class="col-md-3"><label>Platform ID</label><input type="text" class="form-control soc-id" value="${s.id}"></div>
                        <div class="col-md-4"><label>Icon (fa-)</label><input type="text" class="form-control soc-icon" value="${s.icon}"></div>
                        <div class="col-md-4"><label>Link</label><input type="text" class="form-control soc-link" value="${s.link}"></div>
                        <div class="col-md-1"><button type="button" class="btn-cms btn-cms-danger" onclick="removeItem(this)">X</button></div>
                    </div>
                </div>`;
        });
        $('#social-links-list').html(html);
    };

    window.addTLDR = () => { currentData.tldr.push({ icon: 'fa-star', title: 'New' }); renderTLDRList(currentData.tldr); };
    window.addService = () => { if (!currentData.services) currentData.services = []; currentData.services.push({ icon: 'fa-star', title: 'New', description: '' }); renderServicesList(currentData.services); };
    window.addSkill = () => { currentData.experience.skills.push({ img: '', title: '' }); renderSkillsList(currentData.experience.skills); };
    window.addAchievement = () => { currentData.achievements.push({ type: 'achievement', image: '', emoji: '🏆', title: 'New', subtitle: '', description: '' }); renderAchievementsList(currentData.achievements); };
    window.addProject = () => { currentData.projects.push({ id: 'newModal' + Date.now(), image: '', title: 'New Project', description: '', tech: '', visitLink: '#', sourceLink: '' }); renderProjectsList(currentData.projects); };
    window.addSocial = () => { currentData.social.push({ id: 'new', icon: 'fa-link', link: '' }); renderSocialList(currentData.social); };
    window.removeItem = (btn) => { 
        let $item = $(btn).closest('.skill-item, .tldr-item, .service-item, .achievement-item, .project-item, .social-item, .admin-card');
        // If it's a skill logo, we need to remove the col-md-4 wrapper (.skill-item)
        if ($item.hasClass('admin-card') && $item.parent().hasClass('skill-item')) {
            $item = $item.parent();
        }
        $item.addClass('removing').fadeOut(300, function () { $(this).remove(); }); 
    };

    // --- Save Logic ---

    $('#save-all-btn').click(async function () {
        const btn = $(this); const status = $('#status-text');
        btn.prop('disabled', true).text('Committing Changes...'); status.text('Preparing data...').css('color', '#fff');

        try {
            const updatedData = {
                hero: { title: $('#hero-form [name="title"]').val(), subtitle: $('#hero-form [name="subtitle"]').val() },
                about: {
                    title: $('#about-form [name="about-title"]').val(),
                    image: $('#about-form [name="image"]').val(),
                    description: $('#about-form [name="description"]').val()
                },
                tldr: [], services: [],
                experience: { description: $('#experience-form [name="description"]').val(), skills: [] },
                achievements: [], projects: [],
                contact: {
                    title: $('#contact-form [name="contact-title"]').val(),
                    email: $('#contact-form [name="email"]').val(),
                    message: $('#contact-form [name="message"]').val()
                },
                social: [],
                backgrounds: {
                    hero: $('#hero-form [name="hero-bg"]').val(),
                    resume: $('#resume-admin-form [name="resume-bg"]').val(),
                    cv_url: $('#resume-admin-form [name="cv-url"]').val()
                },
                footer: { copyright: $('#footer-form [name="copyright"]').val() }
            };

            $('.tldr-item:not(.removing)').each(function () { updatedData.tldr.push({ icon: $(this).find('.item-icon').val(), title: $(this).find('.item-title').val() }); });
            $('.service-item:not(.removing)').each(function () { updatedData.services.push({ icon: $(this).find('.srv-icon').val(), title: $(this).find('.srv-title').val(), description: $(this).find('.srv-desc').val() }); });
            $('.skill-item:not(.removing)').each(function () { updatedData.experience.skills.push({ img: $(this).find('.skill-img').val(), title: $(this).find('.skill-title').val() }); });
            $('.achievement-item:not(.removing)').each(function () { updatedData.achievements.push({ type: 'achievement', image: $(this).find('.ach-image').val(), emoji: $(this).find('.ach-emoji').val(), title: $(this).find('.ach-title').val(), subtitle: $(this).find('.ach-subtitle').val(), description: $(this).find('.ach-desc').val() }); });
            $('.project-item:not(.removing)').each(function () { updatedData.projects.push({ id: $(this).find('.proj-id').val(), image: $(this).find('.proj-image').val(), title: $(this).find('.proj-title').val(), tech: $(this).find('.proj-tech').val(), description: $(this).find('.proj-desc').val(), sourceLink: $(this).find('.proj-source').val(), visitLink: "#" }); });
            $('.social-item:not(.removing)').each(function () { updatedData.social.push({ id: $(this).find('.soc-id').val(), icon: $(this).find('.soc-icon').val(), link: $(this).find('.soc-link').val() }); });

            await githubApi.updateFile(updatedData);
            status.text('Successfully saved and deployed!').css('color', '#4caf50');
            currentData = updatedData;
        } catch (error) {
            console.error(error); status.text('Error: ' + error.message).css('color', '#f44336');
        } finally { btn.prop('disabled', false).text('Commit & Push Changes'); }
    });
});
