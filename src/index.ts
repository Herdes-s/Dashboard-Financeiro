import { toggleMenu, switchTab } from "./features.js";
import { updateBalance } from "./dashboard.js";
import { abrirModal, fecharModal } from "./modal.js";

toggleMenu();
updateBalance();

document.addEventListener("DOMContentLoaded", () => {
    switchTab()
})

fecharModal()
abrirModal()