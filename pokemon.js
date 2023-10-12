
class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        return (Math.random() * 100) < this.luck
    }

    attackPokemon(adversaire) {

        let dammage = this.attack - adversaire.defense
        let life = adversaire.hp - dammage
        console.log(adversaire.name + " s'est pris une tatane de " + dammage + " dégats, il lui reste " + life)
        adversaire.hp = life 
    }

    death() {
        if(this.hp <= 0) {
            console.log("Le pokemon " + this.name + " est mort, fin du duel")

            return true
        }
        else {
            return false
        }
    }
}

let gobou = new Pokemon("gobou", 9, 5, 33, 59)
let terracool = new Pokemon("terracool", 12, 7, 45, 42)

console.log("pré fight")


function pokemonDuel(poke1, poke2) {

    while(!poke1.death() && !poke2.death()) {
        if(poke1.isLucky()) {
            poke1.attackPokemon(poke2)
        }
        else {
            console.log( poke2.name + " a eu de la chance")
        }

        if(poke2.isLucky()) {
            poke2.attackPokemon(poke1)
        }

        else {
            console.log(poke1.name +" a eu de la chance")
        }
    }
}

pokemonDuel(gobou, terracool)







