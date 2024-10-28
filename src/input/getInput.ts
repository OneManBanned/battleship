import pkg from "prompt-sync";
import inputValidator from "./inputValidation";

const prompt = pkg();
const { validate } = inputValidator();

export function inputCoordinate(axis: string) {
  let input;

  while (!validate(input)) {
    input = prompt(`Enter ${axis} number you wish to fire on: `);
    if (!validate(input)) console.log("Enter a number between 0-9");
  }

  return input;
}

export function inputShipKey(): string {
  let key: string | undefined;

  key = prompt("Enter the ship key to move");

  return key;
}

export function inputShipMovement(): string {
  let dir: string | undefined;

  dir = prompt("Enter a direction? [ 'up', 'down', 'left', right' ]");

  return dir;
}

