


  /*  function swap() {
      var image = document.getElementById('w-node-_418bb595-ea41-09e5-9730-ddc791b21257-3e4a858a');
      image.classList.add('fade-out'); // Start fade out

      setTimeout(function() {
        // Change source after fade out
        if (image.src.match("assets/images/makephoto-1778093170416-removebg-preview-removebg-preview.png")) {
          image.src = "assets/images/realmebella.png";
        } else {
          image.src = "assets/images/makephoto-1778093170416-removebg-preview-removebg-preview.png";
        }
        image.classList.remove('fade-out'); // Fade back in
      }, 500); // Matches CSS transition time
    }
*/


function createFlipCard(cert) {
  const item = document.createElement('div');
  item.className = 'cert-item';
  item.setAttribute('role', 'button');
  item.setAttribute('tabindex', '0');
  item.setAttribute('aria-label', `${cert.name} — click to flip`);
  const backContent = cert.image
    ? `<img src="${cert.image}" alt="${cert.name} certificate">`
    : `<div class="cert-back-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M3 9h18M9 21V9"/>
        </svg>
        <span>Add your certificate<br>image via the <code>image</code> key</span>
       </div>`;
  item.innerHTML = `
    <div class="cert-card">
      <div class="cert-front">
        <span class="cert-icon">${cert.icon}</span>
        <span class="cert-name">${cert.name}</span>
        <span class="cert-issuer">${cert.issuer}</span>
        <div class="cert-meta">
          <span class="cert-year">${cert.year}</span>
          <span class="cert-id">ID: ${cert.id}</span>
        </div>
      </div>
      <div class="cert-back">
        ${backContent}
        <button class="fullscreen-btn" aria-label="View fullscreen">⛶ Full Screen</button>
        <span class="close-hint">click to flip back</span>
      </div>
    </div>`;

    // disable right click on the back image
item.querySelector('.cert-back').addEventListener('contextmenu', e => e.preventDefault());

// fullscreen button
const fsBtn = item.querySelector('.fullscreen-btn');
if (fsBtn) {
  fsBtn.addEventListener('click', e => {
    e.stopPropagation(); // don't trigger the flip
    const img = item.querySelector('.cert-back img');
    if (img) img.requestFullscreen?.();
  });
}

  const toggle = () => item.classList.toggle('flipped');
  item.addEventListener('click', toggle);
  item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
  return item;
}

function createProjectCard(project, index) {
  const item = document.createElement('div');
  item.className = 'project-entry';

  item.innerHTML = `
    <div class="project-header">
      <span class="project-number">0${index + 1}</span>
      <div class="project-meta">
        <div class="project-top-line">
          <span class="project-company">${project.company}</span>
          <span class="project-role">${project.role}</span>
        </div>
        <h2 class="project-title">
          ${project.name}
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link-icon">↗</a>
        </h2>
        <p class="project-summary">${project.summary}</p>
        <div class="project-actions">
          <button class="toggle-btn" aria-expanded="false">Show details <span class="toggle-arrow">∧</span></button>
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="case-study-btn">Open case study ↗</a>
        </div>
      </div>
      <div class="project-thumb">
        <img src="${project.image}" alt="${project.name}">
      </div>
    </div>

    <div class="project-details" hidden>
      <div class="project-tags">
        ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="project-body">
        <div class="project-challenge">
          <h4>THE CHALLENGE</h4>
          <p>${project.challenge}</p>
        </div>
        <div class="project-results">
          <h4>KEY RESULTS</h4>
          <ul>
            ${project.results.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
    <hr class="project-divider">
  `;

  // toggle
  const btn = item.querySelector('.toggle-btn');
  const details = item.querySelector('.project-details');
  btn.addEventListener('click', () => {
    const isHidden = details.hasAttribute('hidden');
    if (isHidden) {
      details.removeAttribute('hidden');
      btn.innerHTML = 'Hide details <span class="toggle-arrow">∧</span>';
    } else {
      details.setAttribute('hidden', '');
      btn.innerHTML = 'Show details <span class="toggle-arrow">∨</span>';
    }
  });

  return item;
}


function renderCertGrid(containerId = 'certGrid') {
  const cert_grid = document.getElementById(containerId);

  certifications = [
  {
    icon: "🎓",
    name: "Master of Science in Management",
    issuer: "Technical University of Munich",
    year: "2024",
    id: "CSPO-2023-001234",
    image: ""
  },
  {
    icon: "📜",
    name: "Professional Scrum Product Owner (PSPO)",
    issuer: "Scrum.org",
    year: "2026",
    id: "Work in Progress",
    image: ""
  },
  {
    icon: "🎓",
    name: "Bachelor of Science in IT",
    issuer: "Mumbai University",
    year: "2014",
    id: "PS-CERT-2022-123456",
    image: ""
  },
  {
    icon: "🌐",
    name: "Google Cloud Platform",
    issuer: "Google",
    year: "2026",
    id: "Work in Progress",
    image: ""
  }
  // ── add more rows below ──────────────────────────────────────────────────
  // {
  //   icon: "☁️",
  //   name: "AWS Certified Solutions Architect",
  //   issuer: "Amazon Web Services",
  //   year: "2024",
  //   id: "AWS-SAA-2024-99999",
  //   image: ""
  // },
  ];

  certifications.forEach(cert => cert_grid.appendChild(createFlipCard(cert)));
}



function renderProjectGrid( containerId = 'projectGrid') {

const project_grid = document.getElementById(containerId);



const projects = [
{
  company: "Hackathon",
  role: "OpenClaw",
  name: "AI Venture Intel",
  summary: "",
  link: "https://bella30-3.github.io/venture-intel/",
  image: "assets/images/ai-venture-2.png",
  tags: ["Openclaw", "API", "AI"],
  challenge: "Founders spend countless hours on cold outreach, while investors are flooded with pitches, yet very few introductions actually lead to meaningful....",
  results: [
    "⚡ Reduced integration time by 95% (from 6-8 weeks to 3 days)",
    "💰 Generated $25M ARR within 18 months",
    "🎯 Achieved 98% customer satisfaction score"
  ]
},
{
  company: "Mavi Holding",
  role: "Dashboard",
  name: "Executive Summary",
  summary: "",
  link: "https://sales-mock.streamlit.app/",
  image: "assets/images/Dashboardmavi.png",
  tags: ["Openclaw", "API", "AI"],
  challenge: "Founders spend countless hours on cold outreach, while investors are flooded with pitches, yet very few introductions actually lead to meaningful....",
  results: [
    "⚡ Reduced integration time by 95% (from 6-8 weeks to 3 days)",
    "💰 Generated $25M ARR within 18 months",
    "🎯 Achieved 98% customer satisfaction score"
  ]
},
,
{
  company: "Claude",
  role: "Claude Code",
  name: "Coming Soon",
  summary: "",
  link: "https://bella30-3.github.io/venture-intel/",
  image: "assets/img/claude-sg.png",
  tags: ["Claude", "API", "AI"],
  challenge: "Founders spend countless hours on cold outreach, while investors are flooded with pitches, yet very few introductions actually lead to meaningful....",
  results: [
    "⚡ Reduced integration time by 95% (from 6-8 weeks to 3 days)",
    "💰 Generated $25M ARR within 18 months",
    "🎯 Achieved 98% customer satisfaction score"
  ]
},
,
{
  company: "Personal",
  role: "Instagram Hashtags",
  name: "Search Upgrade",
  summary: "",
  link: "https://bella30-3.github.io/venture-intel/...",
  image: "assets/img/ai-venture-intel.png",
  tags: ["Openclaw", "API", "AI"],
  challenge: "Founders spend countless hours on cold outreach, while investors are flooded with pitches, yet very few introductions actually lead to meaningful....",
  results: [
    "⚡ Reduced integration time by 95% (from 6-8 weeks to 3 days)",
    "💰 Generated $25M ARR within 18 months",
    "🎯 Achieved 98% customer satisfaction score"
  ]
}
];
  // ── add more rows below ──────────────────────────────────────────────────
  // {
  //   icon: "☁️",
  //   name: "AWS Certified Solutions Architect",
  //   issuer: "Amazon Web Services",
  //   year: "2024",
  //   id: "AWS-SAA-2024-99999",
  //   image: ""
  // },


  projects.forEach((project, i) => project_grid.appendChild(createProjectCard(project, i)));
}
