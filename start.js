let bingusPoints = 0;
let hasKnife = false;
let weapon = "knife";

function addPoints(){
    bingusPoints += 1;
    save();
    window.location.href = "./index.html"
}

function stayInJail(){
    save();
    window.location.href = "./StayInJail.html"
}

function EscapeJail(){
    save();
    window.location.href = "./EscapeJail.html"
}

function load(){
    // variableName = localStorage.getItem("variableName") ?? default;
    bingusPoints = Number(localStorage.getItem("bingusPoints")) ?? 0;
}

function save(){
    // localStorage.setItem("variableName", variableName);
    localStorage.setItem("bingusPoints", bingusPoints);
}

load();
setInterval(save, 10);