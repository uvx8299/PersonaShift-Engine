
let characters = {};
let chart;

fetch('characters.json')
  .then(response => response.json())
  .then(data => {
    characters = data;
    let select = document.getElementById("character");
    for (let key in characters) {
        let option = document.createElement("option");
        option.value = key;
        option.text = key + "（" + characters[key].type + "）";
        select.appendChild(option);
    }
    updateRadarChart();
  });

function updateRadarChart() {
    const selected = document.getElementById("character").value;
    const info = characters[selected];
    const trust = info.trust;
    const bias = info.bias || 0;
    const factors = info.personality || {
        感性: 50,
        理性: 50,
        衝動: 30,
        自律: 70,
        外向: 40,
        內省: 60
    };

    const labels = Object.keys(factors);
    const values = Object.values(factors);

    const data = {
        labels: labels,
        datasets: [{
            label: selected + " 的人格傾向",
            data: values,
            fill: true,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            pointBackgroundColor: "rgb(54, 162, 235)",
            tension: 0.3
        }]
    };

    const config = {
        type: 'radar',
        data: data,
        options: {
            responsive: true,
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    };

    if (chart) {
        chart.destroy();
    }
    const ctx = document.getElementById('radarChart');
    chart = new Chart(ctx, config);
}
