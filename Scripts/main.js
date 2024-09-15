document.getElementById("toggle-btn").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  const navLinks = document.querySelectorAll(".nav-links li");
  const logo = document.getElementById("logo");

  // Toggle sidebar width
  sidebar.classList.toggle("collapsed");

  // Hide logo when sidebar is collapsed
  if (sidebar.classList.contains("collapsed")) {
    logo.classList.add("hidden");
    navLinks.forEach((link, index) => {
      if (index >= 4) {
        link.classList.add("hidden-icon");
      }
    });
  } else {
    logo.classList.remove("hidden");
    navLinks.forEach((link) => {
      link.classList.remove("hidden-icon");
    });
  }
});
