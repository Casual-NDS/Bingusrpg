function takeKnife(){
    hasKnife = true
    alert("You have obtained the Knife! Ooo Sharp! Happy Stab Stab!")
}
function outsideHavok(){
    window.location.href = "./outsideHavok.html"
    save()
}
function save(){
    // localStorage.setItem("variableName", variableName);
    localStorage.setItem("bingusPoints", bingusPoints);
    localStorage.setItem("weapon", weapon);
    localStorage.setItem("hasKnife", hasKnife);
}