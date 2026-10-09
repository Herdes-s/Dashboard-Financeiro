export function toggleMenu() {
    const menu = document.getElementById("menu-container");
    menu === null || menu === void 0 ? void 0 : menu.addEventListener("click", () => {
        const main = document.querySelector(".main");
        if (main) {
            main.classList.toggle("show-menu");
        }
    });
}
//# sourceMappingURL=toggleMenu.js.map