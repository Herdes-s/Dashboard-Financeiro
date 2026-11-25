// === IMPORTES ===

// --- toggleMenu: controla a abertura do menu ---
// --- switchTab: controla a troca das abas ---
import { toggleMenu, switchTab } from "./features.js";

// --- Calculos do Dashboard ---
import { updateBalance } from "./dashboard.js";

// --- Construção do gráfico ---
import { graphc } from "./renderChart.js";

// --- Abrir, fechar e controlar o formulário ---
import { inicializarModal } from "./modal.js";
import { renderizarTransacoes } from "./transacoes.js";
import { carregarTransacoes } from "./storage.js";

// === ORGANIZADOR DE CHAMADA DE FUNÇÕES ===

function inicializarAplicacao(): void {
  const valores = updateBalance();
  
  toggleMenu();
  switchTab();
  graphc(valores.entrada, valores.saida);
  inicializarModal();
  renderizarTransacoes(carregarTransacoes());
}

// --- Garante que os elementos do HTML existam antes de registrar os eventos. ---
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", inicializarAplicacao, { once: true });
} else {
  inicializarAplicacao();
}
