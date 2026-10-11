import { toggleMenu, switchTab } from "./features.js";
import { updateBalance } from "./dashboard.js";

toggleMenu();
updateBalance();

document.addEventListener("DOMContentLoaded", () => {
    switchTab()
})