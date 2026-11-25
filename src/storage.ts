import type { Transacao } from "./types.js";

export function salvarTransacoes(transacoes: Transacao[]): void {
  localStorage.setItem("transacoes", JSON.stringify(transacoes));
}

export function carregarTransacoes(): Transacao[] {
  try {
    const dados = localStorage.getItem("transacoes");

    return dados ? (JSON.parse(dados) as Transacao[]) : [];
  } catch (erro) {
    console.error("Erro ao carregar transações: ", erro);
    return [];
  }
}
