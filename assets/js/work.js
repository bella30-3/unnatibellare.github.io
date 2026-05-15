


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
function renderCertGrid(certifications, containerId = 'certGrid') {

const grid = document.getElementById('certGrid');

/* ─── DATA ───────────────────────────────────────────────────────────────────
* Edit this array to add / remove certifications.
* `image` can be a URL or a base64 data URI; leave as "" to show placeholder.
*/
const certifications = [
 {
   icon: "🏆",
   name: "Certified Scrum Product Owner (CSPO)",
   issuer: "Scrum Alliance",
   year: "2023",
   id: "CSPO-2023-001234",
   image: ""
 },
 {
   icon: "📜",
   name: "Professional Scrum Product Owner (PSPO)",
   issuer: "Scrum.org",
   year: "2023",
   id: "PSPO-I-2023-567890",
   image: ""
 },
 {
   icon: "🎓",
   name: "Product Management Certificate",
   issuer: "Product School",
   year: "2022",
   id: "PS-CERT-2022-123456",
   image: ""
 },
 {
   icon: "📊",
   name: "Product Analytics Certification",
   issuer: "Mixpanel",
   year: "2022",
   id: "MIX-ANALYTICS-2022-789",
   image: ""
 },
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

certifications.forEach((cert, i) => {
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
        <span class="close-hint">click to flip back</span>
      </div>
    </div>`;

  // Toggle flip on click or Enter / Space
  const toggle = () => item.classList.toggle('flipped');
  item.addEventListener('click', toggle);
  item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });

  grid.appendChild(item);
});
}
