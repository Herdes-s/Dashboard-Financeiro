export function renderizarTransacoes(transacoes) {
    const listaTransacoes = document.querySelector("#transaction-list");
    if (!listaTransacoes)
        return;
    listaTransacoes.innerHTML = "";
    transacoes.forEach((transacao) => {
        const transaction = document.createElement("div");
        const date = document.createElement("div");
        const title = document.createElement("p");
        const price = document.createElement("span");
        transaction.classList.add("transaction");
        date.classList.add("date");
        title.classList.add("transaction-title");
        price.classList.add("price");
        const [ano, mes, dia] = transacao.data.split("-");
        title.textContent = transacao.descricao;
        price.textContent = transacao.valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        date.textContent = `${dia}/${mes}/${ano}`;
        transaction.appendChild(title);
        transaction.appendChild(price);
        transaction.appendChild(date);
        listaTransacoes.appendChild(transaction);
    });
}
//# sourceMappingURL=transacoes.js.map