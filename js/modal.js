import { carregarTransacoes, salvarTransacoes } from "./storage.js";
import { renderizarTransacoes } from "./transacoes.js";
const modal = document.querySelector("#modal");
const btnNew = document.querySelector("#btn-new");
const btnCancelar = document.querySelector("#btn-cancelar");
const form = document.querySelector("#form");
export function abrirModal() {
    if (modal && !modal.open) {
        modal.showModal();
    }
}
export function fecharModal() {
    if (modal === null || modal === void 0 ? void 0 : modal.open) {
        modal.close();
    }
}
export function inicializarModal() {
    btnNew === null || btnNew === void 0 ? void 0 : btnNew.addEventListener("click", abrirModal);
    btnCancelar === null || btnCancelar === void 0 ? void 0 : btnCancelar.addEventListener("click", fecharModal);
    if (!form)
        return;
    form.addEventListener("submit", (event) => {
        var _a, _b, _c;
        event.preventDefault();
        const formData = new FormData(form);
        const descricao = String((_a = formData.get("description")) !== null && _a !== void 0 ? _a : "").trim();
        const valor = Number(formData.get("amount"));
        const categoria = String((_b = formData.get("category")) !== null && _b !== void 0 ? _b : "").trim();
        const data = String((_c = formData.get("date")) !== null && _c !== void 0 ? _c : "");
        const novaTransacao = {
            descricao,
            valor,
            categoria,
            data,
        };
        // A validação de cadastro será ampliada quando implementarmos as transações.
        if (!descricao ||
            !Number.isFinite(valor) ||
            valor <= 0 ||
            !categoria ||
            !data) {
            form.reportValidity();
            return;
        }
        // carrega os dados salvos no navegador na variavel transacoes.
        const transacoes = carregarTransacoes();
        // adiciona novaTransacao dentro da variavel que carregou os dados existente no naavegador.
        transacoes.push(novaTransacao);
        // salva todos os dados que já tinha salvo e os novos para não perder nenhum
        salvarTransacoes(transacoes);
        renderizarTransacoes(transacoes);
        fecharModal();
        form.reset();
    });
}
//# sourceMappingURL=modal.js.map