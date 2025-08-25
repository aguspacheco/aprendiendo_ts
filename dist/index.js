"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
// 2) funcion que reibe dos valores y retorna su multiplicacion
const sum_1 = require("./lib/sum");
function multiplicar(a, b) {
    return a * b;
}
const producto = multiplicar(6, 7);
console.log("Resultado multiplicacion (6 * 7):", producto);
const persona = {
    nombre: "Ana",
    edad: 29,
};
console.log("Persona -> nombre:", persona.nombre);
console.log("Persona -> edad", persona.edad);
// 4) Uso el modulo de suma
const resultadoSuma = (0, sum_1.sum)(3, 5);
console.log("Resultado suma (3 + 5):", resultadoSuma);
//# sourceMappingURL=index.js.map