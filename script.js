
let characters = {};
let current = "";

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
    let info = characters[current];
    document.getElementById("charName").innerText = "角色：" + current;
    document.getElementById("mood").innerText = info.mood;
    document.getElementById("trust").innerText = info.trust;
    document.getElementById("tone").innerText = getTone(info);
    document.getElementById("story").innerHTML = `<p>角色 ${current} 正在等待你的選擇。</p>`;
}

function getTone(info) {
    if (info.trust >= 70) return "溫和、親切";
    if (info.trust >= 40) return "中性、觀察中";
    if (info.trust < 40 && info.trust >= 20) return "懷疑、冷淡";
    return "攻擊性、諷刺";
}

function triggerEvent(type) {
    let info = characters[current];
    let storyDiv = document.getElementById("story");
    let result = "";
    if (type === "support") {
        info.trust += info.trustDelta.positive;
        info.mood = "感激";
        result = `<b>[${current}]</b>：「我知道你一直都在，我會記住這份溫暖。」`;
    } else if (type === "doubt") {
        info.trust += Math.floor(info.trustDelta.negative / 2);
        info.mood = "懷疑";
        result = `<b>[${current}]</b>：「你是不是還有其他打算？」`;
    } else if (type === "betray") {
        info.trust += info.trustDelta.negative * 2;
        info.mood = "背叛";
        result = `<b>[${current}]</b>：「我再也不會相信你了！」`;
    }
    info.trust = Math.max(0, Math.min(info.trust, 100));
    document.getElementById("mood").innerText = info.mood;
    document.getElementById("trust").innerText = info.trust;
    document.getElementById("tone").innerText = getTone(info);
    storyDiv.innerHTML = `<p>${result}</p>`;
}
