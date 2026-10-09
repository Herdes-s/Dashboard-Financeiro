export function graphc(entrada, saida) {
    const mockData = [
        { label: 'Entrada', value: entrada },
        { label: 'Saida', value: saida },
    ];
    const chartElement = document.getElementById('my-chart');
    if (!chartElement)
        return;
    chartElement.innerHTML = "";
    const maxValue = Math.max(...mockData.map(d => d.value));
    mockData.forEach(item => {
        const bar = document.createElement('div');
        bar.classList.add('chart-bar');
        const barHeightPercent = (item.value / maxValue) * 100;
        bar.style.height = `${barHeightPercent}%`;
        bar.title = `${item.label}: R$ ${item.value}`;
        chartElement.appendChild(bar);
    });
}
//# sourceMappingURL=graphic.js.map