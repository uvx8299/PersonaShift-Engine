
let characters = {};

fetch('characters.json')
  .then(response => response.json())
  .then(data => {
    characters = data;
    const select = document.getElementById("characterSelect");
    Object.keys(characters).forEach(key => {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = key;
      select.appendChild(option);
    });
    select.addEventListener("change", () => updateChart(select.value));
    updateChart(select.value);
  });

function updateChart(characterName) {
  const ctx = document.getElementById('shiftChart').getContext('2d');
  const memory = characters[characterName].history;

  const labels = memory.map(entry => entry.timestamp);
  const datasets = Object.keys(memory[0].traits).map(trait => ({
    label: trait,
    data: memory.map(entry => entry.traits[trait]),
    fill: false,
    tension: 0.2
  }));

  if (window.myChart) window.myChart.destroy();
  window.myChart = new Chart(ctx, {
    type: 'line',
    data: { labels, datasets },
    options: {
      responsive: true,
      plugins: { legend: { position: 'top' } },
      scales: { y: { min: 0, max: 1 } }
    }
  });
}
