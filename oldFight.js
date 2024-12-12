let log = ""
let turn = 0
let logEl = document.getElementById("log")

let canSuperAttack = true

let playerHealth = 100
let enemyHealth = 100
let enemyDamage = 5


function attack(damage, chance){
    if (Math.random() < chance){
        addLog("You win! Enemy took " + damage + " damage!")
        enemyHealth -= damage
        addLog("Enemy health: " + enemyHealth)
        
    } else {
        addLog("Attack missed!")
    }
    enemyTurn()
    updateLog()
}

function enemyTurn(){
    addLog("Enemy attacks you!")
    playerHealth -= enemyDamage
    addLog("Player health: " + playerHealth)
}

function addLog(message){
    log += message + "\n"
}

function updateLog(){
    logEl.innerHTML = log;
    turn++
    addLog("Turn " + turn)
}
updateLog()

if (canSuperAttack){
    document.getElementById("superAttackButton").hidden = false
}