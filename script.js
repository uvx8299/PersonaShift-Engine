
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
    document.getElementById("log").innerHTML = "<p>已載入角色：" + current + "</p>";
}

function changeMood(event) {
    let info = characters[current];
    let log = document.getElementById("log");
    if (event === "壓力事件") {
        info.trust += info.trustDelta.negative;
        info.mood = "焦慮";
        log.innerHTML += "<p>[" + current + "] 遭遇壓力，顯現焦慮。</p>";
    } else if (event === "支持事件") {
        info.trust += info.trustDelta.positive;
        info.mood = "穩定";
        log.innerHTML += "<p>[" + current + "] 受到支持，恢復穩定。</p>";
    }
    info.trust = Math.max(0, Math.min(info.trust, 100));
    document.getElementById("mood").innerText = info.mood;
    document.getElementById("trust").innerText = info.trust;
}
