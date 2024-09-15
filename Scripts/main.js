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
        link.style.display = "none";  // Hide extra links
      }
    });
  } else {
    logo.classList.remove("hidden");
    navLinks.forEach((link) => {
      link.style.display = "flex";  // Show all links
    });
  }
});


document.getElementById("more-bottom-navbar").addEventListener("click", function () {
  const moreItemsBottom = document.getElementById("more-items-bottom");
  
  // Toggle visibility of the more items in bottom navbar
  if (moreItemsBottom.style.display === "none") {
      moreItemsBottom.style.display = "flex";
  } else {
      moreItemsBottom.style.display = "none";
  }
});
