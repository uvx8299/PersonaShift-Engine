
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
    document.getElementById("log").innerHTML = "<p>已載入角色：" + current + "</p>";
}

function getTone(info) {
    if (info.trust >= 70) return "溫和、親切";
    if (info.trust >= 40) return "中性、觀察中";
    if (info.trust < 40 && info.trust >= 20) return "懷疑、冷淡";
    return "攻擊性、諷刺";
}

function changeMood(event) {
    let info = characters[current];
    let log = document.getElementById("log");
    if (event === "壓力事件") {
        info.trust += info.trustDelta.negative;
        info.mood = "焦慮";
        log.innerHTML += `<p><b>[${current}]</b> 遭遇壓力：<i>"你為什麼老是這樣？"</i></p>`;
    } else if (event === "支持事件") {
        info.trust += info.trustDelta.positive;
        info.mood = "穩定";
        log.innerHTML += `<p><b>[${current}]</b> 感受到支持：<i>"謝謝你，我好像好多了。"</i></p>`;
    }
    info.trust = Math.max(0, Math.min(info.trust, 100));
    document.getElementById("mood").innerText = info.mood;
    document.getElementById("trust").innerText = info.trust;
    document.getElementById("tone").innerText = getTone(info);
}
