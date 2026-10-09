export function toggleMenu() {
  const menu = document.getElementById("menu-container");

  menu?.addEventListener("click", () => {
    const main = document.querySelector(".main");

    if (main) {
      main.classList.toggle("show-menu");
    }
  });
}
