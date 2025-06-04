
let characters = {};
let current = "";
let memory = {};

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
    select.value = Object.keys(characters)[0];
    loadCharacter();
  });

function loadCharacter() {
    current = document.getElementById("character").value;
    if (!memory[current]) memory[current] = [];
    let info = characters[current];
    document.getElementById("charName").innerText = "角色：" + current;
    document.getElementById("mood").innerText = info.mood;
    document.getElementById("trust").innerText = info.trust;
    document.getElementById("tone").innerText = getTone(info);
    document.getElementById("log").innerHTML = `<p>已載入角色：${current}</p>`;
    renderMemory();
}

function getTone(info) {
    if (info.trust >= 70) return "溫和、親切";
    if (info.trust >= 40) return "中性、觀察中";
    if (info.trust < 40 && info.trust >= 20) return "懷疑、冷淡";
    return "攻擊性、諷刺";
}

function triggerEvent(type) {
    let info = characters[current];
    let story = "";
    let eventLabel = "";
    if (type === "support") {
        info.trust += info.trustDelta.positive;
        info.mood = "感激";
        story = `「我知道你一直都在，我會記住這份溫暖。」`;
        eventLabel = "獲得支持";
    } else if (type === "doubt") {
        info.trust += Math.floor(info.trustDelta.negative / 2);
        info.mood = "懷疑";
        story = `「你是不是還有其他打算？」`;
        eventLabel = "產生懷疑";
    } else if (type === "betray") {
        info.trust += info.trustDelta.negative * 2;
        info.mood = "背叛";
        story = `「我再也不會相信你了！」`;
        eventLabel = "遭受背叛";
    }

    info.trust = Math.max(0, Math.min(info.trust, 100));
    document.getElementById("mood").innerText = info.mood;
    document.getElementById("trust").innerText = info.trust;
    document.getElementById("tone").innerText = getTone(info);
    document.getElementById("log").innerHTML = `<p><b>[${current}]</b>：${story}</p>`;

    memory[current].unshift(`事件：${eventLabel}（信任=${info.trust}，情緒=${info.mood}）`);
    if (memory[current].length > 5) memory[current].pop();
    renderMemory();
}

function renderMemory() {
    let memoryLog = document.getElementById("memory-log");
    memoryLog.innerHTML = "";
    memory[current].forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        memoryLog.appendChild(li);
    });
}
