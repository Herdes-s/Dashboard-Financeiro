export function toggleMenu() {
    const menu = document.getElementById("menu-container");
    menu === null || menu === void 0 ? void 0 : menu.addEventListener("click", () => {
        const main = document.querySelector(".main");
        if (main) {
            main.classList.toggle("show-menu");
        }
    });
}
export function switchTab() {
    const abas = document.querySelectorAll(".nav-abas");
    const contents = document.querySelectorAll(".aba-content");
    abas.forEach((aba) => {
        aba.addEventListener("click", (event) => {
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
//# sourceMappingURL=features.js.map