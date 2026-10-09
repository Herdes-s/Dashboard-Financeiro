const totalBalance = document.getElementById(
  "total-balance",
) as HTMLElement | null;

const totalEntries = document.getElementById(
  "total-entries",
) as HTMLElement | null;

const totalExits = document.getElementById("total-exits") as HTMLElement | null;

export function updateBalance() {
  const totalEntriesValidation = totalEntries?.textContent || "0";
  const totalExitsValidation = totalExits?.textContent || "0";

  const totalEntriesValue: number = Number(totalEntriesValidation);
  const totalExitsValue: number = Number(totalExitsValidation);

  if (totalBalance) {
    const total = totalEntriesValue - totalExitsValue;

    totalBalance.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
  }
}
