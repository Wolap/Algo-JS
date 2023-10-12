
const listName = ["Jean", "Robert", "Catherine", "JF", "Danielle"]
const listCaracteristiques = ["nerd", "sportif", "idiot", "détective", "chanceux", "normal", "bark"]

class Survivants {
    constructor(name, caracteristiques, probaDeath, probaDammage, probaDeathDammage) {
        this.nameSurvi = name
        this.caracteristiques = caracteristiques
        this.probaDeath = probaDeath
        this.probaDammage = probaDammage
        this.probaDeathDammage = probaDeathDammage
    }
}

class Tueur {
    constructor(name, vie) {
        this.nameTueur = name
        this.vieTueur = vie
    }
}


function randomizer(list) {
    return Math.floor(Math.random() * list.length) //juste pour avoir un random entier
}


let survivant1 = new Survivants(listName[randomizer(listName)], listCaracteristiques[randomizer(listCaracteristiques)], 0.2, 0.9, 0.1)
let survivant2 = new Survivants(listName[randomizer(listName)], listCaracteristiques[randomizer(listCaracteristiques)], 0.3, 0.6, 0.1)
let survivant3 = new Survivants(listName[randomizer(listName)], listCaracteristiques[randomizer(listCaracteristiques)], 0.1, 0.9, 0.2)
let survivant4 = new Survivants(listName[randomizer(listName)], listCaracteristiques[randomizer(listCaracteristiques)], 0.4, 0.9, 0.1)
let survivant5 = new Survivants(listName[randomizer(listName)], listCaracteristiques[randomizer(listCaracteristiques)], 0.2, 0.9, 0.2)

let tueur = new Tueur("Jason", 100)

let listSurvi = [survivant1, survivant2, survivant3, survivant4, survivant5]

// retirer la classe tueur, mettre dans le while et revoir la condition 

function Massacre(tueur, listSurvi) {

    let listMort = []

    while(listSurvi.length > 1 && tueur.vieTueur >= 0) {
        
        let randomSurvi = listSurvi[randomizer(listSurvi)]
        let randint = Math.random()

        if(randomSurvi.probaDeath >= randint) {
            listMort.push(randomSurvi.nameSurvi)
            listSurvi.splice(randomSurvi, 1)
            console.log(tueur.nameTueur + " a tué " + randomSurvi.nameSurvi)
        }

        else if(randomSurvi.probaDammage >= randint) {
            tueur.vieTueur -= 10
            console.log(randomSurvi.nameSurvi + " a esquivé et a infligé 10 dégâts")

        }

        else if(randomSurvi.probaDeathDammage >= randint) {
            listMort.push(randomSurvi.nameSurvi)
            listSurvi.splice(randomSurvi, 1)
            tueur.vieTueur -= 15
            console.log(tueur.nameTueur + " a tué " + randomSurvi.nameSurvi + " mais a pris 15 dégâts")            
        }
    }

    if(tueur.vieTueur <= 0) {
        console.log("Jason a gagné, tous les survivants sont morts")
    }

    else {
        console.log("Les survivants ont gagné " + listMort)
    }
}

Massacre(tueur, listSurvi)



