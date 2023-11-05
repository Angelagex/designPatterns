interface Stats {
    strenght: number
    magic: number
    agility: number
    defense: number
    health: number
}

interface Hero {
    name: string;
    element: string
    stats: Stats;
    train(): string;
    castHability(): number;
}

class Warrior implements Hero {

    name: string
    stats: Stats
    element: string

    constructor(name:string, luckyNumber: number, element: string) {
        this.name = name
        this.element = element
        this.stats = {
            strenght: 4 * luckyNumber,
            agility: 4 * luckyNumber,
            defense: 4 * luckyNumber,
            magic: 1 * luckyNumber,
            health: 100 * luckyNumber,
        }
    }

    castHability(): number {
        let random =  Math.ceil((Math.random() * 3))
        return (this.stats as any).strenght * random
    }

    train(): string {
        let random =  Math.ceil((Math.random() * 4))
        let message = ""
        switch(random) {
            case 1: {
                this.stats.strenght += 2
                message = `Trained in Strength, \n${this.stats.strenght - 2} > ${this.stats.strenght}`
            }
            case 2: {
                this.stats.agility += 2
                message = `Trained in Agility, \n${this.stats.agility - 2} > ${this.stats.agility}`
            }
            case 3: {
                this.stats.defense += 2
                message = `Trained in Defense,\n${this.stats.defense - 2} > ${this.stats.defense}`
            }
            case 4: {
                this.stats.magic += 2
                message = `Trained in Magic, \n${this.stats.magic - 2} > ${this.stats.magic}`
            }
        }
        return message
    }
    
}

let w = new Warrior("Angel", 3, "wind")
console.log(w.train())