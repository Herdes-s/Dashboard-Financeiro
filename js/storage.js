export function salvarTransacoes(transacoes) {
    localStorage.setItem("transacoes", JSON.stringify(transacoes));
}
export function carregarTransacoes() {
    try {
        const dados = localStorage.getItem("transacoes");
        return dados ? JSON.parse(dados) : [];
    }
    catch (erro) {
        console.error("Erro ao carregar transações: ", erro);
        return [];
    }
}
//# sourceMappingURL=storage.js.map