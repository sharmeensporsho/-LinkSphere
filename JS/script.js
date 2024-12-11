document.addEventListener("DOMContentLoaded", () => {
  // Add stagger effect to social links
  const socialLinks = document.querySelectorAll(".social-link");
  socialLinks.forEach((link, index) => {
    link.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
  });

  // Add hover effects
  socialLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.transform = "translateY(-5px) scale(1.02)";
      link.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    });

    link.addEventListener("mouseout", () => {
      link.style.transform = "translateY(0) scale(1)";
      link.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    });

    // Add click effect
    link.addEventListener("click", function (e) {
      // Create ripple effect
      const ripple = document.createElement("div");
      ripple.classList.add("ripple");

      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Intersection Observer for lazy loading
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });

  // Dark/Light mode toggle (if needed)
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
  }
});

// Optional: Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
