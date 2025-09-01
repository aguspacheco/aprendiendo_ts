// 2) funcion que reibe dos valores y retorna su multiplicacion

import { sum } from "./lib/sum.js";
function multiplicar(a: number, b: number): number {
  return a * b;
}

const producto = multiplicar(6, 7);
console.log("Resultado multiplicacion (6 * 7):", producto);

// 3) interfaz Persona
interface Persona {
  nombre: string;
  edad: number;
}

const persona: Persona = {
  nombre: "Ana",
  edad: 29,
};

console.log("Persona -> nombre:", persona.nombre);
console.log("Persona -> edad", persona.edad);

// 4) Uso el modulo de suma
const resultadoSuma = sum(3, 5);
console.log("Resultado suma (3 + 5):", resultadoSuma);
