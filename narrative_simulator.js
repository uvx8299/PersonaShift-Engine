
let characters = {};
let events = {};

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
  });

fetch('events.json')
  .then(response => response.json())
  .then(data => {
    events = data;
    const select = document.getElementById("eventSelect");
    Object.keys(events).forEach(key => {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = key;
      select.appendChild(option);
    });
  });

function simulate() {
  const cName = document.getElementById("characterSelect").value;
  const eName = document.getElementById("eventSelect").value;
  const character = characters[cName];
  const event = events[eName];

  if (!character || !event) {
    document.getElementById("output").textContent = "角色或事件資料遺失。";
    return;
  }

  let output = `🎭 [角色] ${cName}
🗓 [事件] ${eName}
`;
  output += `🌐 [背景] ${event.description}

`;

  output += `🧠 [人格影響]：
`;
  for (let trait in event.traitImpact) {
    let delta = event.traitImpact[trait];
    let original = character.traits[trait] || 0.5;
    let updated = Math.min(1, Math.max(0, original + delta));
    output += `- ${trait}: ${original.toFixed(2)} → ${updated.toFixed(2)}
`;
  }

  output += `
📜 [模擬反應]：${event.reaction}`;

  document.getElementById("output").textContent = output;
}
