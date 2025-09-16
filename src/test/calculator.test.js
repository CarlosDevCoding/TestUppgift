import { test, expect } from "vitest";
import { createCalculator } from "../lib/Calculator"; 

test("Adderar två tal korrekt", () => {
  const calculator = createCalculator();
  expect(calculator.add(123, 456)).toBe(579);
}); 

test("Subtraherar två tal korrekt", () => {  
  const calculator = createCalculator();
  expect(calculator.subtract(987, 654)).toBe(333);
});

test("Multiplicerar två tal korrekt", () => {  
  const calculator = createCalculator();
  expect(calculator.multiply(123, 456)).toBe(56088);
}); 
test("Dividerar två tal korrekt", () => {  
  const calculator = createCalculator();
  expect(calculator.divide(987, 654)).toBe(1.5091743119266055);
}); 