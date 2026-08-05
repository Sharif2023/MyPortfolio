export const PROJECTS = [
  { 
    name: "Amar Recipe", key: "amar_recipe", live: "https://amar-recipe.vercel.app/", github: "https://github.com/Sharif2023/Amar_Recipe", 
    thumbnail: "assets/project_thumbnail/amar_recipe.jpg", featured: true, language: "JavaScript", category: "Full-Stack",
    problem: "Finding authentic Bangladeshi recipes online is scattered and unreliable — there's no dedicated, clean platform for Food Lovers.", 
    stack: ["React", "Vite", "Tailwind CSS", "PHP", "PostgreSQL (Supabase)", "Vercel", "Render", "Docker", "Resend API"], 
    impact: "A live recipe-sharing platform used by friends and family across Bangladesh, featuring a fully Bengali-localized user experience. The platform enables community interaction through recipe submissions, request posts, 5-star ratings, and reporting tools, while an administrative moderation system ensures content quality and safe community participation.", 
    learning: `
      <div class="learning-category">
        <span class="learning-header"><i class="bi bi-window-sidebar"></i> Modern Frontend Development</span>
        <p>Built responsive, mobile-first interfaces using React and Tailwind CSS with a focus on reusable components, clean UI architecture, and smooth user interactions.</p>
      </div>
      <div class="learning-category">
        <span class="learning-header"><i class="bi bi-database-lock"></i> Backend Engineering</span>
        <p>Implemented secure PHP backend services including authentication with bcrypt, media upload handling, content moderation workflows, and API endpoints for real-time user interactions.</p>
      </div>
      <div class="learning-category">
        <span class="learning-header"><i class="bi bi-cloud-check"></i> Deployment & Cloud Management</span>
        <p>Deployed the full-stack application using <strong>Vercel (frontend), Render with Docker (backend services),</strong> and <strong>Supabase PostgreSQL (database)</strong>. Managed environment variables, production secrets, CORS configuration, and integrated transactional email delivery using the Resend API.</p>
      </div>
      <div class="learning-category">
        <span class="learning-header"><i class="bi bi-diagram-3"></i> Database & System Design</span>
        <p>Designed PostgreSQL schemas supporting recipe management, user roles, moderation logs, ratings, and reporting workflows to maintain data integrity and traceability.</p>
      </div>
      <div class="learning-category">
        <span class="learning-header"><i class="bi bi-shield-lock"></i> Admin & Community Tools</span>
        <p>Built a multi-role admin dashboard enabling administrators to view, edit, and remove recipes, verify user recipe submissions, and manage content reports through role-based moderation. Implemented a root admin layer to control admin roles, approve new admin requests, and manage platform staff. The system also includes chat, notifications, moderation history, privacy settings, and profile management to support efficient community governance.</p>
      </div>
    `, 
    requiresContact: true 
  },
  { 
    name: "StudyNest", key: "studynest", live: "https://studynest-edu.vercel.app/", github: "https://github.com/Sharif2023/StudyNest", 
    thumbnail: "assets/project_thumbnail/studynest.jpg", featured: true, language: "JavaScript", category: "Full-Stack",
    problem: "University students often face academic isolation and fragmented study habits. StudyNest unifies the student journey by providing a centralized digital campus for live interactive sessions, AI-aided document analysis, and peer-validated resources.", 
    stack: ["React 19", "Framer Motion", "Three.js", "Bento Grid", "Vercel Serverless PHP", "Node.js", "WebSockets", "Python/Flask", "PostgreSQL (NHost)", "Cloudinary", "Render", "JWT"], 
    impact: "Enhanced Collaboration: Thousands of potential study hours facilitated via low-latency synchronized video rooms and virtual whiteboards. AI-Powered Learning: Automates the analysis of complex study materials, providing instant summaries and anti-plagiarism guardrails for students. Academic Social Proof: Builds a competitive yet supportive community through global rankings and professional-grade Q&A interactions. (Production sessions securely backed by PDO PostgreSQL on NHost).",
    learning: `
      <div class="learning-category">
        <span class="learning-header"><i class="bi bi-clouds"></i> Multi-Cloud Orchestration</span>
        <p>Coordinating multiple backend runtimes (PHP, Node, Python) into a seamless, unified user experience across Vercel and Render.</p>
      </div>
      <div class="learning-category">
        <span class="learning-header"><i class="bi bi-broadcast"></i> Scalable Real-time Architecture</span>
        <p>Implementing WebRTC for media streams and WebSockets for real-time state sync across multiple concurrent users.</p>
      </div>
      <div class="learning-category">
        <span class="learning-header"><i class="bi bi-palette"></i> Ultra-Premium UI/UX Engineering</span>
        <p>Designing high-performance, animated interfaces that feel "alive" through advanced CSS, motion libraries (Framer Motion), and 3D shaders (Three.js).</p>
      </div>
      <div class="learning-category notice-box" style="margin-top: 20px; padding: 15px; background: rgba(var(--accent-color-rgb), 0.1); border-left: 4px solid var(--accent-color); border-radius: 4px;">
        <span class="learning-header" style="color: var(--accent-color); font-weight: 700;"><i class="bi bi-info-circle-fill"></i> IMPORTANT: Deployment Note</span>
        <p style="margin-bottom: 10px;">StudyNest is a distributed project across Vercel and Render. Initial service spin-up may take a few moments on the first load.</p>
        <span class="learning-header" style="color: var(--accent-color); font-weight: 700;"><i class="bi bi-person-badge"></i> UIU Student ID & Email Patterns</span>
        <ul style="list-style: disc; margin-left: 20px; font-size: 0.9em;">
          <li><strong>Student ID Pattern:</strong> A 9-digit code (e.g., 011 223 344). First 3 digits represent Dept (011=CSE, 111=BBA), followed by Batch/Year (221), and Serial Number.</li>
          <li><strong>Email Pattern (Official):</strong> &lt;FirstInitial&gt;&lt;LastName&gt;&lt;Last6DigitsOfID&gt;@&lt;program&gt;.uiu.ac.bd</li>
          <li><strong>Simplified/App:</strong> [student_id]@stu.uiu.ac.bd is commonly used for secondary portal logins.</li>
        </ul>
      </div>
    `
  },
  { 
    name: "CamSociety Laraval", key: "camsociety_laraval", live: "https://camsociety-backend.onrender.com/", github: "https://github.com/Sharif2023/CamSociety_Laraval", 
    thumbnail: "assets/project_thumbnail/camsociety.jpg", featured: false, language: "PHP", category: "Frontend",
    problem: "Professional photographers often struggle to find a centralized platform that combines a marketplace for digital assets with a robust system for finding and booking local event assignments. Clients also lack a transparent, verified way to hire professionals directly.", 
    stack: ["Laravel 11 (PHP 8.2)", "React 18", "Inertia.js", "Vite", "Tailwind CSS", "Headless UI", "MySQL/SQLite", "Docker", "Render", "SMTP/Mailtrap"], 
    impact: "Streamlined the photography gig economy by providing a centralized marketplace for assets and a reliable booking pipeline. This professionalized the connection between creators and clients, enabling photographers to monetize their work instantly while reducing booking friction for organizers.",
    learning: `
      <div class="learning-category">
        <span class="learning-header"><i class="bi bi-window-sidebar"></i> Modern Full-Stack Integration</span>
        <p>Gained hands-on experience in building a full-stack application by integrating Laravel with React via Inertia.js, creating a seamless single-page application experience with a powerful backend.</p>
      </div>
      <div class="learning-category">
        <span class="learning-header"><i class="bi bi-shield-lock"></i> Advanced Authentication & Security</span>
        <p>Developed practical skills in managing multi-role authentication, implementing secure database transactions, and ensuring data integrity across complex workflows.</p>
      </div>
      <div class="learning-category">
        <span class="learning-header"><i class="bi bi-box-seam"></i> DevOps & Cloud Deployment</span>
        <p>Practical experience in configuring Dockerized environments for consistent development and seamless cloud deployment on Render, along with SMTP configuration for robust communication.</p>
      </div>
    `
  },
  { 
    name: "UIU Health Care", key: "uiu-health-care", live: "https://uiu-healthcare.infinityfreeapp.com/", github: "https://github.com/Sharif2023/UIU-Health-Care", 
    thumbnail: "assets/project_thumbnail/uiu_health_care.jpg", featured: false, language: "PHP", category: "Full-Stack",
    problem: "University students have no easy way to book appointments, access medical records, or communicate with on-campus doctors.", 
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "InfinityFree Hosting"], 
    impact: "A functional healthcare portal for UIU that simplifies student-doctor interactions and appointment booking - live and accessible.", 
    learning: "<p>Learned multi-role authentication systems, form validation, and real-world deployment on shared hosting.</p>",
    requiresContact: true 
  },
  { 
    name: "Service Booking Platform", key: "service-booking-platform", live: "https://servicehub-platform.vercel.app/", github: "https://github.com/Sharif2023/Service-Booking-Platform", 
    thumbnail: "assets/project_thumbnail/servicehub.jpg", featured: true, language: "JavaScript", category: "Full-Stack",
    problem: "Traditional service booking methods are often inefficient, lacking a centralized platform for both users and administrators to manage complex scheduling and payments professionally.", 
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Stripe", "Nodemailer", "JWT"], 
    impact: "Full-stack enterprise service booking platform used for professional service management, featuring a dynamic catalog, multi-step booking engine, and administrative control center. It streamlines the connection between service providers and clients through secure transactions and automated communication.", 
    learning: `
      <div class="learning-category">
        <span class="learning-header"><i class="bi bi-diagram-3"></i> Enterprise Architecture & Database</span>
        <p>Architected a robust backend with PostgreSQL, implementing connection pooling and optimized indexing for high-performance data retrieval and transaction management in an enterprise environment.</p>
      </div>
      <div class="learning-category">
        <span class="learning-header"><i class="bi bi-shield-lock"></i> Advanced Security & RBAC</span>
        <p>Implemented industry-standard security measures including bcrypt hashing, JWT-based authentication, and a comprehensive Admin Dashboard with role-based access control (RBAC).</p>
      </div>
      <div class="learning-category">
        <span class="learning-header"><i class="bi bi-credit-card"></i> API Integration & Automation</span>
        <p>Integrated Stripe API for PCI-compliant payment processing with secure webhooks, and engineered an automated email notification system using Nodemailer with HTML templates.</p>
      </div>
      <div class="learning-category">
        <span class="learning-header"><i class="bi bi-shield-check"></i> Access Control & Reliability Testing</span>
        <p><strong>Multi-Level Guards:</strong> Implemented AuthMiddleware and AdminRoute to ensure only verified users can book and only authorized admins can access business analytics.</p>
        <p><strong>Payment Success Scenario:</strong> Verified robust handling of successful transactions using Stripe's test card (4242 4242 4242 4242), triggering automated database updates and confirmation emails.</p>
        <p><strong>Edge Case Handling:</strong> Validated system resilience against payment failures using declined card simulation (4000 0000 0000 0002), ensuring graceful user feedback without data corruption.</p>
      </div>
    `,
    requiresContact: true 
  },
  { 
    name: "UIUSupplements", key: "uiusupplements", live: "http://uiusupplements.yzz.me/", github: "https://github.com/Sharif2023/UIUSupplements", 
    thumbnail: "assets/project_thumbnail/uiu_supplements.jpg", featured: false, language: "PHP", category: "Full-Stack",
    problem: "Local supplement retailers in Bangladesh have no professional e-commerce presence to reach campus customers.", 
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"], 
    impact: "Helped a local business launch an online supplement store — enabling product listing, cart, and order management for campus customers.", 
    learning: "<p>Built a complete e-commerce flow including cart logic, order management, and admin dashboard from scratch.</p>",
    requiresContact: true 
  },
];

export const CERTIFICATIONS = [
  { logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg", year: "2026", title: "Master HTML & CSS by building real world projects", issuer: "Udemy · Anisul Islam", description: "Advanced mastery of semantic HTML5 and CSS3 through building complex, professional-grade websites.", tags: ["HTML5", "CSS3", "Layout Design"], verifyUrl: "https://www.udemy.com/certificate/UC-4ec4ae25-0e8b-4829-8986-e88ef1c4e9f0/", viewUrl: "/assets/certifications/UC-4ec4ae25-0e8b-4829-8986-e88ef1c4e9f0.pdf" },
  { logo: "https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg", year: "2026", title: "Responsive Web Design", issuer: "freeCodeCamp", description: "Mastered HTML5, CSS3, Flexbox, CSS Grid through 300+ hours of hands-on projects.", tags: ["HTML5", "CSS3", "Flexbox", "Grid"], verifyUrl: "https://www.freecodecamp.org/certification/sharif2024/responsive-web-design", viewUrl: "/assets/certifications/www.freecodecamp.org_certification_sharif2024_responsive-web-design.png" },
  { logo: "https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg", year: "2026", title: "Front-End Development Libraries", issuer: "freeCodeCamp", description: "Built projects using React, Redux, Bootstrap, jQuery, and Sass.", tags: ["React", "Redux", "Bootstrap", "jQuery"], verifyUrl: "https://www.freecodecamp.org/certification/sharif2024/front-end-development-libraries", viewUrl: "/assets/certifications/www.freecodecamp.org_certification_sharif2024_front-end-development-libraries.jpg.png" },
  { logo: "https://cdn.ostad.app/public/upload/2024-03-20T04-26-32.799Z-ostad_logo_light@512x%20(2).png", year: "2025", title: "ABCD of TypeScript", issuer: "Ostad · ID: C38139", description: "TypeScript fundamentals: static typing, interfaces, generics, and OOP patterns.", tags: ["TypeScript", "OOP", "Generics"], verifyUrl: "https://ostad.app/share/certificate/c38139-shariful-islam", viewUrl: "/assets/certifications/Shariful Islam-ABCD of TypeScript-C38139.pdf" },
  { logo: "https://cdn.ostad.app/public/upload/2024-03-20T04-26-32.799Z-ostad_logo_light@512x%20(2).png", year: "2025", title: "Build Projects with PHP", issuer: "Ostad · ID: C38227", description: "Applied PHP to build real-world web applications with server-side logic and database integration.", tags: ["PHP", "MySQL", "Backend"], verifyUrl: "https://ostad.app/share/certificate/c38227-shariful-islam", viewUrl: "/assets/certifications/Shariful Islam-Build Project with PHP 1-C38227.pdf" },
  { logo: "https://cdn.ostad.app/public/upload/2024-03-20T04-26-32.799Z-ostad_logo_light@512x%20(2).png", year: "2026", title: "PHP Laravel Workshop", issuer: "Ostad · ID: C39227", description: "Hands-on Laravel: MVC, Eloquent ORM, routing, Blade templates, and RESTful API design.", tags: ["Laravel", "MVC", "Eloquent", "REST API"], verifyUrl: "https://ostad.app/share/certificate/c39227-shariful-islam", viewUrl: "/assets/certifications/Shariful Islam-PHP laravel workshop 1-C39227.pdf" },
  { logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Code.org_logo.svg/1280px-Code.org_logo.svg.png", year: "2022", title: "Hour of Code Achievement", issuer: "code.org", description: "Completed structured coding exercises and foundational CS concepts.", tags: ["CS Fundamentals", "Logic", "Algorithms"], viewUrl: "/assets/certifications/My Achievement code.org.jpg" },
  { logo: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg", year: "2026", title: "Master Git and GitHub - Beginner to Expert", issuer: "Udemy", description: "Version control training: Git fundamentals, branching, pull requests, rebasing, and GitHub collaboration.", tags: ["Git", "GitHub", "Version Control"], verifyUrl: "https://ude.my/UC-ab0c3aba-e0d7-470f-941b-d3e3b05b2310", viewUrl: "/assets/certifications/UC-ab0c3aba-e0d7-470f-941b-d3e3b05b2310.pdf" },
  { logo: "https://www.google.com/s2/favicons?domain=grameenphone.academy&sz=128", year: "2026", title: "Smart CV", issuer: "Grameenphone Academy", description: "Professional expertise in crafting impactful CVs focused on personal branding and recruiter psychology.", tags: ["CV Writing", "Personal Branding", "Career"], verifyUrl: "https://www.grameenphone.academy/cert/436120e21cbb", viewUrl: "/assets/certifications/certificate-smart-cv.pdf" },
];

export const SKILLS = {
  frontend: { icon: "bi-code-slash", label: "Frontend Development", items: [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }, 
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }, 
    { name: "JavaScript (ES6+)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }, 
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }, 
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }, 
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" }, 
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" }, 
    { name: "Svelte", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg", invert: true }
  ] },
  ui: { icon: "bi-palette", label: "UI & Animation", items: [
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }, 
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }, 
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }, 
    { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/framer.svg", invert: true }, 
    { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg", invert: true }
  ] },
  backend: { icon: "bi-hdd-network", label: "Backend & Full-Stack", items: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }, 
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }, 
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" }, 
    { name: "Inertia.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/inertia.svg", invert: true },
    { name: "JWT", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jsonwebtokens.svg", invert: true },
    { name: "Axios Interception", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/axios.svg", invert: true },
    { name: "REST API", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openapiinitiative.svg", invert: true },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true }, 
    { name: "Socket.io", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg", invert: true } 
  ] },
  database: { icon: "bi-database", label: "Database & Services", items: [
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }, 
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }, 
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }, 
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" }, 
    { name: "Resend API", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/resend.svg", invert: true }
  ] },
  payment: { icon: "bi-credit-card", label: "Payment Gateways", items: [
    { name: "Stripe", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stripe.svg", invert: true },
    { name: "SSLCommerz", icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/icons/credit-card.svg", invert: true },
    { name: "AmarPay", icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/icons/wallet.svg", invert: true },
    { name: "UddoktaPay", icon: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/icons/cash-coin.svg", invert: true }
  ] },
  tools: { icon: "bi-tools", label: "Tools & DevOps", items: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }, 
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
    { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
    { name: "Composer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg" }, 
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" }, 
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }, 
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg", invert: true }, 
    { name: "Render", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/render.svg", invert: true }, 
    { name: "AWS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg", invert: true },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cloudflare.svg", invert: true },
    { name: "n8n", icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/n8n.svg", invert: true },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Swagger", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },
    { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
    { name: "Apache", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
    { name: "DigitalOcean", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" },
    { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" }
  ] },
};
