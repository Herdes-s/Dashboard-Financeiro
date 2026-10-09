
interface ChartData {
    label: string;
    value: number;
}


export function graphc( entrada: number, saida: number) {
    

    const mockData: ChartData[] = [
        {label: 'Entrada', value: entrada},
        {label: 'Saida', value: saida},
    ]

    const chartElement = document.getElementById('my-chart') as HTMLElement | null;
    if (!chartElement) return;

    chartElement.innerHTML = "";

    const maxValue = Math.max(...mockData.map(d => d.value));

    mockData.forEach(item => {
        const bar = document.createElement('div');
        bar.classList.add('chart-bar');

        const barHeightPercent = (item.value / maxValue) * 100;
        bar.style.height = `${barHeightPercent}%`

        bar.title = `${item.label}: R$ ${item.value}`;

        chartElement.appendChild(bar);
    })

}
