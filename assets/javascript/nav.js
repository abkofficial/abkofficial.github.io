function loadNav() {
  fetch("nav.html")
    .then(response => response.text())
    .then(html => {
      const placeholder = document.getElementById("nav-placeholder");
      if (!placeholder) return;
      placeholder.innerHTML = html;
    })
    .catch(err => {
      console.error("Failed to load nav:", err);
    });
}

// Make sure DOM is ready before we look for #nav-placeholder
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadNav);
} else {
  loadNav();
}
