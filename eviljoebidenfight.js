let log = ""
let turn = 0
let logEl = document.getElementById("log")

let canSuperAttack = hasKnife
let playerHealth = 100
let enemyHealth = 100
let enemyDamage = 5
let joeChance = .5

if (canSuperAttack) {
    document.getElementById("superAttackButton").hidden = false
}

function attack(damage, chance, critDamage, critChance) {
    if (Math.random() < critChance) {
        enemyHealth -= critDamage

        addLog("You hit evil Joe with a powerful swipe of your claw! Very cutesy. Very demure.")

        addLog("Enemy health: " + enemyHealth)
    } else {

        if (Math.random() < chance) {
            enemyHealth -= damage

            addLog("You hit evil Joe with a Bingus Bite! Very sharp!")

            addLog("Enemy health: " + enemyHealth)

        } else {
            addLog("Attack missed!")
        }
    }
    enemyTurn()
    updateLog()
}

function superAttack(superDamage, superChance, superCritDamage, superCritChance) {
    if (Math.random() < superCritChance) {
        enemyHealth -= superCritDamage

        addLog("your knife slips from your grip while you go in for your attack! But wait! As it flies through the air, it slices through a stage wire holding a spotlight. The spotlight falls and crushes Evil Joe Biden! Exceedingly Lucky!")
    }
    else {
        if (Math.random() < superChance) {
            enemyHealth -= superDamage
            addLog("You slash evil Joe with your knife! Very deadly!")

            addLog("Enemy health: " + enemyHealth)
        }
        else {
            addLog("Attack Missed!")
        }
    }
    enemyTurn()
    updateLog()
}

function enemyTurn() {
    if (enemyHealth < 0) {
        window.location.href = "./victory.html"
    }
    else {
        if (Math.random() < joeChance) {
            addLog("you deftly dodge biden's blast!")
        }
        else {
            addLog("Biden hits you with his Biden Blast!")
            playerHealth -= enemyDamage
            addLog("Player health: " + playerHealth)
            if (playerHealth < 0) {
                window.location.href = "./gameOver.html"
            }
        }
    }
}

function addLog(message) {
    log += message + "\n"
}

function updateLog() {
    logEl.innerHTML = log;
    turn++
    addLog("Turn " + turn)
}
updateLog()