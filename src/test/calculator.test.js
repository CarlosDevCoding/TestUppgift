import { test, expect } from "vitest";
import { createCalculator } from "../lib/Calculator"; 

test("Adderar två tal korrekt", () => {
  const calculator = createCalculator();
  expect(calculator.add(2, 3)).toBe(5);
}); 