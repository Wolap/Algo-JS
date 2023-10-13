

function Trajet(personnages, santeMental) {
    const list = ["Fight Song-Eve", "Anissa-Wejdene", "SmileFlower-Seventeen", "Hana-INI", "Firework-&TEAM"]

    function randomizer(list) {
        return Math.floor(Math.random() * list.length) //juste pour avoir un random entier
    }

    let nbTaxis = 0
    let feux = 30

    for(feux; feux >= 0; feux --) {
        let random = list[randomizer(list)]
        
        if( random == "Anissa-Wejdene") {
            santeMental --
            nbTaxis ++
            console.log("La musique joué est NULLE aka " + random + personnages + 
            " change donc de taxi, la santé mental est a " + santeMental + "plus que " + feux + " feux rouges")
        }
        else {
            console.log("La musiques " + random + " est bien " + personnages + 
            " reste dans le taxi, plus que " + feux + " feux rouges")
        }
        
        if(santeMental == 0) {
            console.log("John est mort mentalement, perdu")
        }

        if(feux == 0) {
            console.log(personnages + " est bien arrivé chez lui avec toute sa tête")
        }
    }
}


Trajet("John", 10)


