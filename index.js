const btn = document.getElementById("themeBtn");

// Load user preference on page load
window.onload = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
  }
};

// Button click action
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // Save the current theme
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Add animation class
  btn.classList.add("animate");

  // Remove it after animation ends
  setTimeout(() => btn.classList.remove("animate"), 300);
});
