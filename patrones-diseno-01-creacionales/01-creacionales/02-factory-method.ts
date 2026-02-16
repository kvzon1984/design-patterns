/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Hamburger {
  prepare(): void;
}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando una %cChickenHamburger 🍔🍗', COLORS.blue);
  }
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando una %cBeefHamburger 🍔🥩', COLORS.red);
  }
}

abstract class Restaurant {
  protected abstract createHamburger(): Hamburger;

  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}

class ChickenRestaurant extends Restaurant {
  createHamburger(): Hamburger {
    return new ChickenHamburger();
  }
}

class BeefRestaurant extends Restaurant {
  createHamburger(): Hamburger {
    return new BeefHamburger();
  }
}

//! Uso del Factory Method

function main(): void {

    let restaurant: Restaurant;
    const typeBurger = prompt('¿Qué tipo de hamburguesa deseas? (chicken/beef)');
    switch (typeBurger) {
        case 'chicken':
            restaurant = new ChickenRestaurant();
            break;
        case 'beef':
            restaurant = new BeefRestaurant();
            break;
        default:
            throw new Error("Opción no valida");
    }

    restaurant.orderHamburger();

}

main();