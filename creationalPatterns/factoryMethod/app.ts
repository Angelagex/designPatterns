import { Hero, RogueFactory, WarriorFactory } from "./factoryMethod";

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fight(hero1: Hero, hero2: Hero): Promise<string> {
    let health1 = hero1.stats.health;
    let health2 = hero2.stats.health;

    const attackInterval1 = 1000 / hero1.stats.agility; // In milliseconds
    const attackInterval2 = 1000 / hero2.stats.agility;

    while (health1 > 0 || health2 > 0) {
        let random = Math.round(Math.random()*20)
        console.log("Lucky number of the round is: ", random);
        
        // Hero 1 attacks Hero 2
        health2 -= hero1.attack();
        console.log(`${hero1.name} attacked ${hero2.name}! ${hero2.name}'s health: ${health2}`);

        if (health2 <= 0) {
            console.log(`${hero1.name} wins the fight!`);
            break;
        }

        await sleep(attackInterval1);

         // Check if Hero 1 gets an extra attack based on agility
         if ( random < hero1.stats.agility) {
            health2 -= hero1.attack();
            console.log(`${hero1.name} attacked again! ${hero2.name}'s health: ${health2}`);

            if (health2 <= 0) {
                console.log(`${hero1.name} wins the fight!`);
                break;
            }

            await sleep(attackInterval1);
        }
         if ( random == hero1.stats.agility) {
            health2 -= hero1.attack();
            console.log(`${hero1.name} has performed a special attack! ${hero2.name}'s health: ${health2}`);

            if (health2 <= 0) {
                console.log(`${hero1.name} wins the fight!`);
                break;
            }

            await sleep(attackInterval1);
        }

        // Hero 2 attacks Hero 1
        health1 -= hero2.attack();
        console.log(`${hero2.name} attacked ${hero1.name}! ${hero1.name}'s health: ${health1}`);

        if (health1 <= 0) {
            console.log(`${hero2.name} wins the fight!`);
            break;
        }

        await sleep(attackInterval2);

         // Check if Hero 2 gets an extra attack based on agility
         if (random < hero2.stats.agility) {
            health1 -= hero2.attack();
            console.log(`${hero2.name} attacked again! ${hero1.name}'s health: ${health1}`);

            if (health1 <= 0) {
                console.log(`${hero2.name} wins the fight!`);
                break;
            }

            await sleep(attackInterval1);
        }
        if (random == hero2.stats.agility) {
            health1 -= hero2.castHability();
            console.log(`${hero2.name} has performed a special attack! ${hero1.name}'s health: ${health1}`);

            if (health1 <= 0) {
                console.log(`${hero2.name} wins the fight!`);
                break;
            }

            await sleep(attackInterval1);
        }
    }

    return "The fight has ended!";
}

export default fight;
function app() {
    console.log("Game Started!", " \n");
    const warrior1 = new WarriorFactory().factoryMethod()
    console.log(warrior1.changeName("Leonidas"), " \n");

    const rogue1 = new RogueFactory().factoryMethod()
    console.log(rogue1.changeName("Roger"), " \n");

    console.log(new WarriorFactory().showStats(warrior1), " \n")
    console.log(new RogueFactory().showStats(rogue1), " \n")
    
    console.log(fight(rogue1, warrior1))
}
app()