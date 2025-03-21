document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const section = document.getElementById(targetId);
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  const contactForm = document.querySelector("form");
  contactForm.addEventListener("submit", function () {
    alert("Thank you for contacting me! I’ll get back to you soon.");
  });
  
  const footer = document.querySelector("footer");
  footer.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
