const totalBalance = document.getElementById(
  "total-balance",
) as HTMLElement | null;

const totalEntries = document.getElementById(
  "total-entries",
) as HTMLElement | null;

const totalExits = document.getElementById("total-exits") as HTMLElement | null;

type ValoresDashboard = {
  entrada: number;
  saida: number;
}

// --- CALCULA O TOTAL ---

export function updateBalance(): ValoresDashboard {
  const totalEntriesValidation = totalEntries?.textContent || "0";
  const totalExitsValidation = totalExits?.textContent || "0";

  const totalEntriesValue: number = Number(totalEntriesValidation);
  const totalExitsValue: number = Number(totalExitsValidation);

  if (totalBalance) {
    const total = totalEntriesValue - totalExitsValue;

    totalBalance.textContent = total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return { entrada: totalEntriesValue, saida: totalExitsValue };
}
