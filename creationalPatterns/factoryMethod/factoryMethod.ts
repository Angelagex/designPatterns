export interface Stats {
    strength: number
    magic: number
    agility: number
    defense: number
    health: number
}

export interface Hero {
    name: string;
    element: string
    stats: Stats;
    castHability(): number;
    updateStat(stat: StatsKeys, amount: number): number;
    changeName(name: string): string;
    attack(): number;
}

export enum StatsKeys {
    STRENGTH = "strength",
    MAGIC = "magic",
    AGILITY = "agility",
    DEFENSE = "defense",
    HEALTH = "health"
}

export class Warrior implements Hero {

    name: string
    stats: Stats
    element: string

    constructor(name: string, luckyNumber: number, element: string) {
        this.name = name
        this.element = element
        this.stats = {
            strength: Math.round(7 * luckyNumber / 1.5),
            agility: Math.round(3 * luckyNumber / 1.5),
            defense: Math.round(4 * luckyNumber / 1.5),
            magic: Math.round(2 * luckyNumber / 1.5),
            health: Math.round(100 * luckyNumber / 1.5),
        }
    }
    attack(): number {
        return this.stats.strength
    }
    changeName(name: string): string {
        this.name = name
        return `New hero name is ${this.name}!`
    }

    
    castHability(): number {
        let random = Math.ceil((Math.random() * 3))
        return (this.stats as any).strength * random
    }

    updateStat(stat: StatsKeys, amount: number): number {
        if (!Object.keys(this.stats).includes(stat)) throw new Error("Invalid stat")
        return this.stats[stat] += amount
    }
}

export class Mage implements Hero {

    name: string
    stats: Stats
    element: string

    constructor(name: string, luckyNumber: number, element: string) {
        this.name = name
        this.element = element
        this.stats = {
            strength: Math.round(2 * luckyNumber / 1.5),
            agility: Math.round(3 * luckyNumber / 1.5),
            defense: Math.round(4 * luckyNumber / 1.5),
            magic: Math.round(8 * luckyNumber / 1.5),
            health: Math.round(90 * luckyNumber / 1.5),
        }
    }
    attack(): number {
        return this.stats.magic
    }
    changeName(name: string): string {
        this.name = name
        return `New hero name is ${this.name}!`
    }

    castHability(): number {
        let random = Math.ceil((Math.random() * 3))
        return (this.stats as any).magic * random
    }

    updateStat(stat: StatsKeys, amount: number): number {
        if (!Object.keys(this.stats).includes(stat)) throw new Error("Invalid stat")
        return this.stats[stat] += amount
    }

}

export class Rogue implements Hero {

    name: string
    stats: Stats
    element: string

    constructor(name: string, luckyNumber: number, element: string) {
        this.name = name
        this.element = element
        this.stats = {
            strength: Math.round(4 * luckyNumber / 1.5),
            agility: Math.round(10 * luckyNumber / 1.5),
            defense: Math.round(3 * luckyNumber / 1.5),
            magic: Math.round(2 * luckyNumber / 1.5),
            health: Math.round(95 * luckyNumber / 1.5),
        }
    }
    attack(): number {
        return this.stats.strength
    }
    changeName(name: string): string {
        this.name = name
        return `New hero name is ${this.name}!`
    }

    castHability(): number {
        let random = Math.ceil((Math.random() * 3))
        return (this.stats as any).agility * random
    }

    updateStat(stat: StatsKeys, amount: number): number {
        if (!Object.keys(this.stats).includes(stat)) throw new Error("Invalid stat")
        return this.stats[stat] += amount
    }

}


abstract class Factory {



    public abstract factoryMethod(): Hero;

    public showStats(hero: Hero): string {
        let message = `${hero.name}, is a ${hero.element} hero.\n`
        for (const [key, value] of Object.entries(hero.stats)) {
            message += `${key}: ${value}\n`
        }
        return message
    }

    public elementRoulette(): string {
        let random = Math.ceil((Math.random() * 6))
        let element = ""
        switch (random) {
            case 1: {
                element = "Water"
                break;
            }
            case 2: {
                element = "Fire"
                break;
            }
            case 3: {
                element = "Earth"
                break;
            }
            case 4: {
                element = "Wind"
                break;
            }
            case 5: {
                element = "Lightning"
                break;
            }
            default: {
                element = "Darkness"
                break;
            }
        }
        return element
    }

    public abstract train(hero: Hero): string;
}

export class WarriorFactory extends Factory {

    public factoryMethod(): Hero {
        let random = Math.ceil((Math.random() * 3))
        console.log("A new warrior was born!");
        
        return new Warrior("Warrior", random, super.elementRoulette())
    }
    public train(hero: Hero): string {
        const newStat = hero.updateStat(StatsKeys.STRENGTH, 2)
        return `Trained in Strength, \n${newStat - 2} > ${newStat}`
    }
}

export class MageFactory extends Factory {
    public factoryMethod(): Hero {
        let random = Math.ceil((Math.random() * 3))
        console.log("A new mage was born!");
        
        return new Mage("Mage", random, super.elementRoulette())
    }
    public train(hero: Hero): string {
        const newStat = hero.updateStat(StatsKeys.MAGIC, 2)
        return `Trained in Magic, \n${newStat - 2} > ${newStat}`
    }
}

export class RogueFactory extends Factory {
    public factoryMethod(): Hero {
        let random = Math.ceil((Math.random() * 3))
        console.log("A new rogue was born!");
        
        return new Rogue("Rogue", random, super.elementRoulette())
    }
    public train(hero: Hero): string {
        const newStat = hero.updateStat(StatsKeys.AGILITY, 2)
        return `Trained in Agility, \n${newStat - 2} > ${newStat}`
    }
}
