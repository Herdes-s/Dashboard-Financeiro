export function toggleMenu(): void {
  const menu = document.getElementById("menu-container");

  menu?.addEventListener("click", (): void => {
    const main = document.querySelector(".main");

    if (main) {
      main.classList.toggle("show-menu");
    }
  });
}

export function switchTab(): void {
  const abas = document.querySelectorAll(".nav-abas");
  const contents = document.querySelectorAll(".aba-content");

  abas.forEach((aba) => {
    aba.addEventListener("click", (event: Event) => {
      event.preventDefault();

      abas.forEach((btn) => btn.classList.remove("active"));
      aba.classList.add("active");

      const idContent = aba.getAttribute("data-target");
      contents.forEach((content) => {
        content.classList.remove("active");
        if (content.id === idContent) {
          content.classList.add("active");
        }
      });
    });
  });
}
