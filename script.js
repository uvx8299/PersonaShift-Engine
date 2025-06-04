
let characters = {};
let current = "";
let trustBias = {};
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
    if (!trustBias[current]) trustBias[current] = 0;
    if (!memory[current]) memory[current] = [];
    let info = characters[current];
    document.getElementById("charName").innerText = "角色：" + current;
    document.getElementById("trust").innerText = info.trust;
    document.getElementById("tone").innerText = getTone(info.trust);
    document.getElementById("bias").innerText = trustBias[current];
    updateContext();
}

function getTone(trust) {
    if (trust >= 70) return "溫和、親切";
    if (trust >= 40) return "中性、觀察中";
    if (trust < 40 && trust >= 20) return "懷疑、冷淡";
    return "攻擊性、諷刺";
}

function triggerEvent(type) {
    let info = characters[current];
    let change = 0;
    if (type === "support") {
        change = info.trustDelta.positive;
        trustBias[current] += 1;
        memory[current].unshift("你支持了角色。");
    } else if (type === "doubt") {
        change = Math.floor(info.trustDelta.negative / 2);
        trustBias[current] -= 1;
        memory[current].unshift("你讓角色感到懷疑。");
    } else if (type === "betray") {
        change = info.trustDelta.negative * 2;
        trustBias[current] -= 2;
        memory[current].unshift("你背叛了角色。");
    }

    info.trust = Math.max(0, Math.min(info.trust + change, 100));
    if (memory[current].length > 5) memory[current].pop();

    document.getElementById("trust").innerText = info.trust;
    document.getElementById("bias").innerText = trustBias[current];
    document.getElementById("tone").innerText = getTone(info.trust);

    updateContext();
}

function updateContext() {
    let contextBox = document.getElementById("context-output");
    let info = characters[current];
    const context = {
        character_id: current,
        type: info.type,
        trust_level: info.trust,
        bias_shift: trustBias[current],
        tone: getTone(info.trust),
        memory_snippet: memory[current]
    };
    contextBox.innerText = JSON.stringify(context, null, 2);
}
