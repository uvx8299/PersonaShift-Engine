
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
  });

function saveProgress() {
  const selected = document.getElementById("characterSelect").value;
  const character = characters[selected];
  localStorage.setItem("PersonaShift_" + selected, JSON.stringify(character));
  document.getElementById("output").textContent = `✅ 已儲存 ${selected} 角色進度。`;
}

function loadProgress() {
  const selected = document.getElementById("characterSelect").value;
  const data = localStorage.getItem("PersonaShift_" + selected);
  if (data) {
    const loaded = JSON.parse(data);
    document.getElementById("output").textContent = `📂 載入結果：\n` + JSON.stringify(loaded, null, 2);
  } else {
    document.getElementById("output").textContent = `⚠️ 尚未儲存 ${selected} 的進度。`;
  }
}
