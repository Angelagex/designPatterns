import { CheckBuilder, DOUGH, Director, PizzaBuilder, SAUCE, SIZE } from "./builder";

function clientCode(director: Director) {
    const pizzaBuilder = new PizzaBuilder();
    const checkBuilder = new CheckBuilder()
    director.setBuilder(pizzaBuilder);

    console.log('Welcome!\nWhat would you like to taste? :3');
    const italianPizza1 = director.buildClassicItalian(SIZE.BIG)
    console.log(`Here's your Italian Pizza! ^^`)
    italianPizza1.describeOrder()
    checkBuilder.addPizzas(italianPizza1)

    const fourCheesePizza1 = director.buildFourCheese(SIZE.MEDIUM)
    console.log(`Here's your 4 Cheese Pizza! ^^`)
    fourCheesePizza1.describeOrder()
    checkBuilder.addPizzas(fourCheesePizza1)
    
    // The Builder pattern can be used without a Director class.
    pizzaBuilder.addDough(DOUGH.HOUSE)
    pizzaBuilder.addSauce(SAUCE.NEAPOLITAN)
    pizzaBuilder.addAdditions(["Pepperoni, Corn, Mozarella, Jalapenos, Buffala's Cheese, Anchovies, Meat"])
    pizzaBuilder.addSize(SIZE.BIG)
    const customPizza1 = pizzaBuilder.getProduct()
    console.log(`Here's your Custom Monster Pizza! ^^`)
    customPizza1.describeOrder()
    checkBuilder.addPizzas(customPizza1)

    const bill = checkBuilder.getProduct()
    bill.calculate()
    bill.addTip()
    bill.getTotal()
}

const director = new Director();
clientCode(director);