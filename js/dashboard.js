const totalBalance = document.getElementById("total-balance");
const totalEntries = document.getElementById("total-entries");
const totalExits = document.getElementById("total-exits");
export function updateBalance() {
    const totalEntriesValidation = (totalEntries === null || totalEntries === void 0 ? void 0 : totalEntries.textContent) || "0";
    const totalExitsValidation = (totalExits === null || totalExits === void 0 ? void 0 : totalExits.textContent) || "0";
    const totalEntriesValue = Number(totalEntriesValidation);
    const totalExitsValue = Number(totalExitsValidation);
    if (totalBalance) {
        const total = totalEntriesValue - totalExitsValue;
        totalBalance.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
}
//# sourceMappingURL=dashboard.js.map