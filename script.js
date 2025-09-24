// ===== Highlight Active Nav Link =====
const navLinks = document.querySelectorAll(".nav-list a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.parentElement.classList.add("active");
  }
});

// ===== Contact Form Validation =====
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    alert("✅ Message sent successfully!");
    form.reset();
  });
}
