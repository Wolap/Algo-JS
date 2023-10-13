

class Attaquants {
    constructor(name, capa, role) {
        this.nameAtta = name
        this.capa = capa
        this.role = role
    }
}

class Defenseurs {
    constructor(name, capa, role) {
        this.nameDef = name
        this.capa = capa
        this.role = role
    }
}

let attack1 = new Attaquants("Omen", "smoker", "attaquants")
let attack2 = new Attaquants("Phoenix", "flasher", "attaquants")
let attack3 = new Attaquants("Jet", "killer", "attaquants")
let attack4 = new Attaquants("Fade", "rien", "attaquants")
let attack5 = new Attaquants("Chamber", "rien", "attaquants")

let def1 = new Attaquants("Omen", "smoker", "defenseurs")
let def2 = new Attaquants("Phoenix", "flasher", "defenseurs")
let def3 = new Attaquants("Jet", "killer", "defenseurs")
let def4 = new Attaquants("Fade", "rien", "defenseurs")
let def5 = new Attaquants("Chamber", "rien", "defenseurs")

let listAttack = [attack1.nameAtta, attack2.nameAtta, attack3.nameAtta, attack4.nameAtta, attack5.nameAtta]
let listDef = [def1.nameDef, def2.nameDef, def3.nameDef, def4.nameDef, def5.nameDef]


function getRandomInt(max) { // random entre 0 et un max défini
    return Math.floor(Math.random() * max);
}

// ne pas splice la liste, il faut faire un compteur de mort un pour chaque équipe, on le réinitialise à chaque manche
function Partie(nbMortAttack, nbMortDef) {

    spikeChance = 0
    spikePose = false
    mancheAttack = 0
    mancheDef = 0

    while(mancheAttack != 13 && mancheDef != 13) {

        if(getRandomInt(2) == 0) {
            nbMortDef += 1
            spikeChance = 60
            console.log("Chance de poser le spike = " + spikeChance)
        }
        else {
            nbMortAttack += 1
            spikeChance = 40
            console.log("Chance de poser le spike = " + spikeChance)
        }
    
        if(spikeChance > (Math.random() * 100)) {

            spikePose = true
            chanceAttack = 70
            console.log("Le spike a été posé")
            
            while(spikePose) {
    
                if(chanceAttack > (Math.random() * 100)) {
                    nbMortDef += 1
                }
                else {
                    nbMortAttack += 1
                }
    
                if(nbMortAttack != 5 && nbMortDef != 5) {
                    spikePose = false
                }
            }
        }
        else {
            console.log("Le spike n'a pas été posé")
            while(nbMortAttack != 5 && nbMortDef != 5) {
                
                if(getRandomInt(2) == 0) {
                    nbMortDef += 1
                    console.log("Spike non posé, un défenseur est mort")
                }
                else {
                    nbMortAttack += 1
                    console.log("Spike non posé, un attaquant est mort")
                }
            }

        }

        if(nbMortAttack == 5) {
            mancheDef += 1
            nbMortAttack = 0
            nbMortDef = 0
            console.log("Manche gagné pour les defenseurs, attaquants " + mancheAttack + " - " + mancheDef + " defenseurs")
        }
        else { 
            mancheAttack += 1
            nbMortAttack = 0
            nbMortDef = 0
            console.log("Manche gagné pour les defenseur, attaquants " + mancheAttack + " - " + mancheDef + " defenseurs")
        }
    } 

    if(mancheAttack == 13) {
        console.log("VICTOIRE ATTAQUANTS, score : attanquants " + mancheAttack + " - " + mancheDef + " defenseurs")
    }
    else {
        console.log("VICTOIRE DEFENSEURS, score : attaquants " + mancheAttack + " - " + mancheDef + " defenseurs")

    }
}

Partie(0, 0)










