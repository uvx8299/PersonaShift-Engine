
let mood = "穩定";
let trust = 50;

function changeMood(event) {
    let log = document.getElementById("log");
    let moodSpan = document.getElementById("mood");
    let trustSpan = document.getElementById("trust");

    if (event === "壓力事件") {
        trust -= 10;
        mood = "焦慮";
        log.innerHTML += "<p>遭遇壓力，LYF-4322 顯現焦慮。</p>";
    } else if (event === "支持事件") {
        trust += 15;
        mood = "穩定";
        log.innerHTML += "<p>受到支持，LYF-4322 重拾穩定。</p>";
    }

    trust = Math.max(0, Math.min(trust, 100));
    moodSpan.innerText = mood;
    trustSpan.innerText = trust;
}
