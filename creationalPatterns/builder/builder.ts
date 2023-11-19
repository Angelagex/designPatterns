
export enum DOUGH {
    FLAT = "flat",
    THICK = "thick",
    HOUSE = "house"
}

export enum SAUCE {
    NEAPOLITAN = "neapolitan",
    AMERICAN = "american",
    HOUSE = "house"
}

export enum SIZE {
    SMALL = "small",
    MEDIUM = "medium",
    BIG = "big"
}

export const Tip = 0.07

interface Builder {
    addSize(size: SIZE): void
    addDough(dough: DOUGH): void;
    addSauce(sauce: SAUCE): void;
    addAdditions(additions: String[]): void;
}

export class PizzaBuilder implements Builder {
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

export class CheckBuilder {
    private check: Check;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.check = new Check();
    }

    public addPizzas(pizza: Pizza): void {
        this.check.pizzas.push(pizza);
    }

    public getProduct(): Check {
        const result = this.check;
        this.reset();
        return result;
    }
}

export class Pizza {
    public size: SIZE;
    public dough: DOUGH;
    public sauce: SAUCE;
    public additions: String[] = [];

    public describeOrder(): void {
        console.log(`Base: ${this.dough} dough, ${this.sauce} sauce \nAdditions: ${this.additions.join(", ")} \n`);
    }
}

export class Check {
    public tip: number
    public check: number
    public pizzas: Pizza[] = []

    public calculate(): void {
        this.check = this.pizzas
            .map(pizza => this.getSizeValue(pizza.size) + pizza.additions.length * 2)
            .reduce((acc, el) => acc + el, 0)
        console.log(`Your check is: $${this.check} \nWould you like to add any tip? uwu\n...\n`);
    }

    private getSizeValue(size: SIZE) {
        switch (size) {
            case 'small':
                return 8;
            case 'medium':
                return 12;
            default:
                return 15;
        }
    }

    public addTip(tip?: number | undefined) {
        !tip ? this.tip = (this.check * Tip) : this.tip += tip
        console.log(`Thanks for the tip! <3 \n`)

    }

    public getTotal(): void {
        console.log(`Your total check is: $${this.check + this.tip}\n Thanks for comming! *Sexy glance*`);
    }
}

export class Director {
    private pizzaBuilder: PizzaBuilder;

    public setBuilder(pizzaBuilder: PizzaBuilder): void {
        this.pizzaBuilder = pizzaBuilder;
    }

    public buildClassicItalian(size: SIZE): Pizza {
        this.pizzaBuilder.addDough(DOUGH.THICK);
        this.pizzaBuilder.addSauce(SAUCE.NEAPOLITAN)
        this.pizzaBuilder.addAdditions(["Pepperoni", "Mozzarella"])
        this.pizzaBuilder.addSize(size)
        return this.pizzaBuilder.getProduct()
    }

    public buildFourCheese(size: SIZE): Pizza {
        this.pizzaBuilder.addDough(DOUGH.THICK);
        this.pizzaBuilder.addSauce(SAUCE.HOUSE)
        this.pizzaBuilder.addAdditions(["Pecorino", "Mozzarella", "Roquefort", "Robiola"])
        this.pizzaBuilder.addSize(size)
        return this.pizzaBuilder.getProduct()
    }

    public buildMexican(size: SIZE): Pizza {
        this.pizzaBuilder.addDough(DOUGH.FLAT);
        this.pizzaBuilder.addSauce(SAUCE.NEAPOLITAN)
        this.pizzaBuilder.addAdditions(["Corn", "Mozzarella", "Jalapenos", "Meat"])
        this.pizzaBuilder.addSize(size)
        return this.pizzaBuilder.getProduct()
    }
}
