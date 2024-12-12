let bingusPoints = 0;
let hasKnife = false;
let weapon = "";

function addPoints(){
    bingusPoints += 1;
    save();
    window.location.href = "./index.html"
}

function stayInJail(){
    save();
    window.location.href = "./StayInJail.html"
}

function escapeJail(){
    save();
    window.location.href = "./escapeJail.html"
}

function load(){
    // variableName = localStorage.getItem("variableName") ?? default;
    bingusPoints = Number(localStorage.getItem("bingusPoints")) ?? bingusPoints;
    weapon = localStorage.getItem("weapon") ?? "";
    hasKnife = Boolean(localStorage.getItem("hasKnife")) ?? false;
}

function save(){
    // localStorage.setItem("variableName", variableName);
    localStorage.setItem("bingusPoints", bingusPoints);
    localStorage.setItem("weapon", weapon);
    localStorage.setItem("hasKnife", hasKnife);
}

load();
setInterval(save, 10);