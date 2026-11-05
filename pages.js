const pageMenuButton = document.getElementById("menuToggle");
const pageNav = document.getElementById("mainNav");
pageMenuButton?.addEventListener("click", () => {
  const isOpen = pageMenuButton.getAttribute("aria-expanded") !== "true";
  pageMenuButton.setAttribute("aria-expanded", String(isOpen));
  pageMenuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  pageNav?.classList.toggle("open", isOpen);
});
pageNav?.addEventListener("click", event => {
  if (!event.target.closest("a")) return;
  pageMenuButton?.setAttribute("aria-expanded", "false");
  pageMenuButton?.setAttribute("aria-label", "Open navigation");
  pageNav.classList.remove("open");
});
document.querySelectorAll(".current-year").forEach(node => node.textContent = new Date().getFullYear());