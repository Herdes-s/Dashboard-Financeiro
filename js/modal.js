const modal = document.querySelector("#modal");
const btnNew = document.querySelector("#btn-new");
const btnCancelar = document.querySelector("#btn-cancelar");
const form = document.querySelector("#from");
export function abrirModal() {
    modal === null || modal === void 0 ? void 0 : modal.showModal();
}
export function fecharModal() {
    modal === null || modal === void 0 ? void 0 : modal.close();
}
if (btnNew && modal) {
    btnNew.addEventListener("click", abrirModal);
}
if (btnCancelar) {
    btnCancelar.addEventListener("click", fecharModal);
}
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const nome = formData.get("nome");
        console.log(`Dados enviados: ${nome}`);
        fecharModal();
        form.reset();
    });
}
//# sourceMappingURL=modal.js.map