function iconPath(code, isDay = true) {
    const key = `${code}-${isDay ? 'day' : 'night'}`;
    const file = ICON_MAP[key] || ICON_MAP[code] || "wi-cloudy.svg";
    return new URL(file, ICON_BASE).href;
}



const $ = {
    location: document.getElementById("location"),
    tempNow: document.getElementById("temp-now"),
    hiLowSp: document.querySelectorAll(".hi-low span"),
    descToday: document.getElementById("desc-today"),
    iconToday: document.getElementById("icon-today"),
    forecastList: document.querySelector(".forecast-list"),
    historyBtn: document.getElementById("open-history"),
    manualPanel: document.getElementById("manual-panel"),
    manualForm: document.getElementById("manual-form"),
    latInput: document.getElementById("lat-input"),
    lonInput: document.getElementById("lon-input")
};

ensureHistoryListContainer();

function renderWeather(data) {


}

function loadHistory() {
    try {
        return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
    } catch {
        return [];
    }
}

function saveHistory(entry) {
    const key = (e) => `${Number(e.latitude).toFixed(4)},${Number(e.longitude).toFixed(4)}`;
    let arr = loadHistory();
    const k = key(entry);
    arr = arr.filter((e) => key(e) !== k);
    arr.unshift({latitude: entry.latitude, longitude: entry.longitude});
    if (arr.length > 10) arr = arr.slice(0, 10);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(arr));
    renderHistory(arr);
}

function ensureHistoryListContainer() {
    const nav = document.querySelector("nav[aria-label='Recent locations']");
    if (!document.getElementById("history-list")) {
        const ul = document.createElement("ul");
        ul.id = "history-list";
        ul.className = "history-list";
        ul.setAttribute("role", "list");
        ul.hidden = true;
        nav.appendChild(ul);
    }
    renderHistory(loadHistory());
}

function renderHistory(arr) {
    const ul = document.getElementById("history-list");
    if (!ul) return;
    ul.innerHTML = "";
    arr.forEach((e) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "history-item";
        btn.dataset.lat = e.latitude;
        btn.dataset.lon = e.longitude;
        btn.textContent = `lat ${Number(e.latitude).toFixed(4)}, lon ${Number(e.longitude).toFixed(4)}`;
        li.appendChild(btn);
        ul.appendChild(li);
    });
}

$.historyBtn.addEventListener("click", () => {
    const ul = document.getElementById("history-list");
    if (ul) ul.hidden = !ul.hidden;
});

document.addEventListener("click", (ev) => {
    const btn = ev.target.closest(".history-item");
    if (!btn) return;
    const lat = parseFloat(btn.dataset.lat);
    const lon = parseFloat(btn.dataset.lon);
    useLocation(lat, lon);
    const ul = document.getElementById("history-list");
    if (ul) ul.hidden = true;
});