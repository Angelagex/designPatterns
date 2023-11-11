// Define Enemy interface
export interface Enemy {
    health: number
    strength: number
    level: number
    attribute: string
    shout(): void;
}

// Define enemies interface
export interface Boss {
    health: number
    strength: number
    level: number
    attribute: string
    specialAttack: { name: string, damage: number}
    shoutAndCast(): number;
}


// Define SeaEnemies abstract class
export abstract class SeaEnemies implements Enemy {
    abstract health: number
    abstract strength: number
    abstract level: number
    abstract shout(): void;
    attribute = "water";
}

// Define SeaBoss abstract class
export abstract class SeaBoss implements Boss {
    abstract health: number
    abstract strength: number
    abstract level: number
    abstract shoutAndCast(): number 
    attribute = "water";
    specialAttack = { name: "tsunami", damage: 25}

}

// Define GroundEnemies abstract class
export abstract class GroundEnemies implements Enemy {
    abstract health: number
    abstract strength: number
    abstract level: number
    abstract shout(): void;
    attribute = "earth";
}

// Define GroundBoss abstract class
export abstract class GroundBoss implements Boss {
    abstract health: number
    abstract strength: number
    abstract level: number
    abstract shoutAndCast(): number
    attribute = "earth";
    specialAttack = { name: "earthquake", damage: 25}
}

// Define SkyEnemies abstract class
export abstract class SkyEnemies implements Enemy {
    abstract health: number
    abstract strength: number
    abstract level: number
    abstract shout(): void;
    attribute = "air";
}

// Define SkyBoss abstract class
export abstract class SkyBoss implements Boss {
    abstract health: number
    abstract strength: number
    abstract level: number
    abstract shoutAndCast(): number 
    attribute = "air";
    specialAttack = { name: "tornado", damage: 25}
}

// Define SeaEnemies products
export class TidalSerpent extends SeaEnemies {
    shout(): void {
        console.log("I'm a TidalSerpent! I'm gonna defeat you!");
    }
    health = 80;
    strength = 5;
    level = 1;
}
export class AbyssalMarauder extends SeaEnemies {
    shout(): void {
        console.log("I'm a AbyssalMarauder! I'm gonna defeat you!");
    }
    health = 160;
    strength = 12;
    level = 2;
}
export class Leviathan extends SeaBoss {
    health = 380;
    strength = 20;
    level = 3;
    shoutAndCast(): number {
        console.log(`I'm a Leviathan and your worst Nigthmare!\n
        Casting Hability: ${this.specialAttack.name}`, " \n");
        return this.specialAttack.damage;
    }
}

// Define GroundEnemies products
export class ShadowStalker extends GroundEnemies {
    shout(): void {
        console.log("I'm a ShadowStalker! I'm gonna defeat you!");
    }
    health = 80;
    strength = 5;
    level = 1;
}
export class QuakeReaver extends GroundEnemies {
    shout(): void {
        console.log("I'm a QuakeReaver! I'm gonna defeat you!");
    }
    health = 160;
    strength = 12;
    level = 2;
}
export class TerraBlighter extends GroundBoss {
    health = 380;
    strength = 20;
    level = 3;
    shoutAndCast(): number {
        console.log(`I'm a TerraBlighter and your worst Nigthmare!\n
        Casting Hability: ${this.specialAttack.name}`, " \n");
        return this.specialAttack.damage;
    }
}
// Define SkyEnemies products
export class AeroPhantom extends SkyEnemies {
    shout(): void {
        console.log("I'm a AeroPhantom! I'm gonna defeat you!");
    }
    health = 80;
    strength = 5;
    level = 1;
}
export class NimbusDrifter extends SkyEnemies {
    shout(): void {
        console.log("I'm a NimbusDrifter! I'm gonna defeat you!");
    }
    health = 160;
    strength = 12;
    level = 2;
}
export class CelestialRaptor extends SkyBoss {
    health = 380;
    strength = 20;
    level = 3;
    shoutAndCast(): number {
        console.log(`I'm a CelestialRaptor and your worst Nigthmare!\n
        Casting Hability: ${this.specialAttack.name}`, " \n");
        return this.specialAttack.damage;
    }
}

// Define EnemiesFactory interface
export interface EnemiesFactory {
    createEnemy(): Enemy;
    createBoss(): Boss;
}

export class SeaEnemiesFactory implements EnemiesFactory {
    public createEnemy(): SeaEnemies {
        if (Math.random() > 0.5){
            return new AbyssalMarauder();
        }
        return new TidalSerpent();
    }

    public createBoss(): SeaBoss {
        return new Leviathan();
    }
}
export class GroundEnemiesFactory implements EnemiesFactory {
    public createEnemy(): GroundEnemies {
        if (Math.random() > 0.5) {
            return new QuakeReaver();
        }
        return new ShadowStalker();
    }

    public createBoss(): GroundBoss {
        return new TerraBlighter();
    }
}
export class SkyEnemiesFactory implements EnemiesFactory {
    public createEnemy(): SkyEnemies {
        if (Math.random() > 0.5) {
            return new AeroPhantom();
        }
        return new NimbusDrifter();
    }
    public createBoss(): SkyBoss {
        return new CelestialRaptor();
    }
}