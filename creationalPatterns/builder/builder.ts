
enum DOUGH {
    FLAT = "flat",
    THICK = "thick",
    HOUSE = "house"
}

enum SAUCE {
    NEAPOLITAN = "neapolitan",
    AMERICAN = "american",
    HOUSE = "house"
}

enum SIZE {
    SMALL = "small",
    MEDIUM = "medium",
    BIG = "big"
}

const Tip = 0.07

interface Builder {
    addSize(size: SIZE): void
    addDough(dough: DOUGH): void;
    addSauce(sauce: SAUCE): void;
    addAdditions(additions: String[]): void;
}

class PizzaBuilder implements Builder {
    private pizza: Pizza;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.pizza = new Pizza();
    }

    public addSize(size: SIZE): void {
        this.pizza.size = size;
    }

    public addDough(dough: DOUGH): void {
        this.pizza.dough = dough;
    }

    public addSauce(sauce: SAUCE): void {
        this.pizza.sauce = sauce;
    }

    public addAdditions(additions: String[]): void {
        additions.forEach(item => this.pizza.additions.push(item))
    }

    public getProduct(): Pizza {
        const result = this.pizza;
        this.reset();
        return result;
    }
}

class Pizza {
    public size: SIZE;
    public dough: DOUGH;
    public sauce: SAUCE;
    public additions: String[] = [];

    public describeOrder(): void {
        console.log(`Base: ${this.dough} dough, ${this.sauce} sauce \nAdditions: ${this.additions.join(", ")} \n`);
    }
}

class Check {
    public size: SIZE;
    public dough: DOUGH;
    public sauce: SAUCE;
    public additions: String[] = [];
    public tip: number
    public check: number

    public getCheck(): void {
        this.check = 8 + this.additions.length * 2
        console.log(`Your check is: $${this.check} \n`);
    }

    public addTip(tip: number | undefined) {
        !tip ? this.tip = (this.check * Tip) : this.tip += tip
        console.log(`Thanks for the tip! <3 \n`)

    }

    public getTotal(): void {
        console.log(`Your check is: $${this.check + this.tip}`);

    }
}
