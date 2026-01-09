/* =========================
   WELCOME TEXT ANIMATION
========================= */
window.addEventListener("load", () => {
  const welcome = document.getElementById("welcomeText");
  if (!welcome) return;

  welcome.classList.add(
    "transition-all",
    "duration-1000",
    "opacity-100",
    "-translate-y-2"
  );

  setTimeout(() => {
    welcome.classList.remove("opacity-100");
    welcome.classList.add("opacity-0", "-translate-y-8");
  }, 4000);
});

/* =========================
   SEGMENTS LOGIC
========================= */
const container = document.getElementById("segmentsContainer");

function createSegment(index = 1) {
  const div = document.createElement("div");
  div.className = "segment";

  div.innerHTML = `
    <input type="text" placeholder="Départ" required>
    <input type="text" placeholder="Destination" required>
    <input type="date" required>
  `;
  return div;
}

function resetSegments() {
  container.innerHTML = "";
  container.appendChild(createSegment());
}

/* =========================
   TRIP TYPE
========================= */
document.querySelectorAll('input[name="tripType"]').forEach(radio => {
  radio.addEventListener("change", () => {
    resetSegments();

    if (radio.value === "Aller-retour") {
      container.appendChild(createSegment(2));
    }

    if (radio.value === "Multi-villes") {
      container.appendChild(createSegment(2));
      container.appendChild(createSegment(3));
    }
  });
});

/* =========================
   INIT
========================= */
resetSegments();

/* =========================
   WHATSAPP SUBMIT
========================= */
document.getElementById("heroForm").addEventListener("submit", e => {
  e.preventDefault();

  const tripType = document.querySelector('input[name="tripType"]:checked').value;
  const passengers = document.getElementById("passengersHero").value;

  let message = `✈️ *Demande de devis – Terra Voyage*%0A`;
  message += `Type de voyage : ${tripType}%0A`;
  message += `Passagers : ${passengers}%0A%0A`;

  document.querySelectorAll(".segment").forEach((seg, i) => {
    const inputs = seg.querySelectorAll("input");
    message += `Segment ${i + 1} : ${inputs[0].value} → ${inputs[1].value} le ${inputs[2].value}%0A`;
  });

  const phone = "243854442103";
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
});
const menuBtn = document.getElementById("menuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const mobileMenu = document.getElementById("mobileMenuPanel");
const mobileOverlay = document.getElementById("mobileOverlay");

function openMenu() {
  mobileMenu.classList.remove("translate-x-full");
  mobileOverlay.classList.remove("hidden");
}

function closeMenu() {
  mobileMenu.classList.add("translate-x-full");
  mobileOverlay.classList.add("hidden");
}

menuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
mobileOverlay.addEventListener("click", closeMenu);
