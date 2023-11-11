import { EnemiesFactory, GroundEnemiesFactory, SeaEnemiesFactory, SkyEnemiesFactory } from "./abtractFactory"

// Abstract Factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes.

// StageType Enum
enum StageType {
    GROUND = "ground",
    SEA = "sea",
    SKY = "sky"
}

// Function to generate stage type
function stageTypeGenerator(): StageType {
    const random = Math.random()
    if (random > 0.66) {
        return StageType.GROUND
    }
    else if (random > 0.33) {
        return StageType.SEA
    }
    return StageType.SKY
}

// Function to select appropriate factory based on stage type
function factorySelector(stageType: StageType): EnemiesFactory {
    switch (stageType) {
        case StageType.GROUND:
            return new GroundEnemiesFactory();
        case StageType.SEA:
            return new SeaEnemiesFactory();
        default:
            return new SkyEnemiesFactory();
    }
}

// Main function
function app(stageType: StageType,factory: EnemiesFactory) {
    console.log("Game Started!", " \n");
    console.log(`Welcome to the ${stageType} stage`);

    const enemy = factory.createEnemy()
    const boss = factory.createBoss()
    enemy.shout();
    const damageTaken = boss.shoutAndCast()
    console.log(`You took ${damageTaken} damage`, " \n");
}

// Generate stage type and call main function
const stageType = stageTypeGenerator()
app(stageType, factorySelector(stageType))