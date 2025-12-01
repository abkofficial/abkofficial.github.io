fetch("nav.html")
  .then(response => response.text())
  .then(data => {
      document.getElementById("nav-placeholder").innerHTML = data;

      // Wait for nav to be inserted, then adjust padding
      const nav = document.querySelector(".topNav");

      if (nav) {
        const updatePadding = () => {
          document.body.style.paddingTop = nav.offsetHeight + "px";
        };

        updatePadding();               // Set initial padding
        window.addEventListener("resize", updatePadding);  // Update on resize
  });
