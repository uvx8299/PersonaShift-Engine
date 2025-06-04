
const characters = {
    "LYF-4322": { mood: "穩定", trust: 50, trustDelta: { positive: 15, negative: -10 } },
    "NX-74": { mood: "不安", trust: 30, trustDelta: { positive: 10, negative: -20 } }
};

let current = "LYF-4322";

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
    let moodSpan = document.getElementById("mood");
    let trustSpan = document.getElementById("trust");

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
    moodSpan.innerText = info.mood;
    trustSpan.innerText = info.trust;
}
