/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

import { COLORS } from "../helpers/colors.ts";


class Document {
    constructor(
        public title: string,
        private content: string,
        public author: string
    ) { }

    clone(): Document {
        return new Document(this.title, this.content, this.author);
    }

    displayInfo(): void {
        console.log(`%cTitle: ${this.title}`, COLORS.blue);
        console.log(`Content: ${this.content}`);
        console.log(`Author: ${this.author}`);
    }
}

//! Uso del Patrón Prototype

function main(): void {
    // Crear un documento original
    const originalDoc = new Document(
        "Diseño de Patrones",
        "Contenido sobre patrones de diseño...",
        "Isaac Vega"
    );

    console.log({ originalDoc });
    console.log("%cDocumento Original:", COLORS.green);
    originalDoc.displayInfo();

    // Clonar el documento original

    // const clonedDoc = structuredClone(originalDoc);
    const clonedDoc = originalDoc.clone();

    clonedDoc.title = "Diseño de Patrones - Copia";
    clonedDoc.author = "María Gómez";
    console.log("\n%cDocumento Clonado:", COLORS.orange);
    console.log({ clonedDoc });
    clonedDoc.displayInfo();
}

main();