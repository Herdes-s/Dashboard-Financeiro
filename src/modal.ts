import { carregarTransacoes, salvarTransacoes } from "./storage.js";
import { renderizarTransacoes } from "./transacoes.js";
import type { Transacao } from "./types.js";

const modal = document.querySelector<HTMLDialogElement>("#modal");
const btnNew = document.querySelector<HTMLButtonElement>("#btn-new");
const btnCancelar = document.querySelector<HTMLButtonElement>("#btn-cancelar");
const form = document.querySelector<HTMLFormElement>("#form");

export function abrirModal(): void {
  if (modal && !modal.open) {
    modal.showModal();
  }
}

export function fecharModal(): void {
  if (modal?.open) {
    modal.close();
  }
}

export function inicializarModal(): void {
  btnNew?.addEventListener("click", abrirModal);
  btnCancelar?.addEventListener("click", fecharModal);

  if (!form) return;

  form.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();

    const formData = new FormData(form);
    const descricao = String(formData.get("description") ?? "").trim();
    const valor = Number(formData.get("amount"));
    const categoria = String(formData.get("category") ?? "").trim();
    const data = String(formData.get("date") ?? "");

    const novaTransacao: Transacao = {
      descricao,
      valor,
      categoria,
      data,
    };

    // A validação de cadastro será ampliada quando implementarmos as transações.
    if (
      !descricao ||
      !Number.isFinite(valor) ||
      valor <= 0 ||
      !categoria ||
      !data
    ) {
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
