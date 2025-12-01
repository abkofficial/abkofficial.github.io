function loadNav() {
  fetch("nav.html")
    .then(res => res.text())
    .then(html => {
      const placeholder = document.getElementById("nav-placeholder");
      placeholder.innerHTML = html;

      // Wait for nav to be in DOM
      setTimeout(() => {
        const nav = document.querySelector(".topNav");

        if (nav) {
          const updatePadding = () => {
            const height = nav.offsetHeight;
            document.body.style.paddingTop = height + "px";
          };

          // Set initial padding
          updatePadding();

          // Adjust on resize
          window.addEventListener("resize", updatePadding);
        }
      }, 50);
    });
}

loadNav();
