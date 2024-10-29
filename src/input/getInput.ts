import pkg from "prompt-sync";
import { validateNumber, validateText } from "./inputValidation";

const prompt = pkg();

export function inputCoordinate(axis: string) {
    let input: string = "";

    while (!validateNumber(input)) {
        input = prompt(`Enter ${axis} number you wish to fire on: `);
        if (!validateNumber(input)) console.log("Enter a number between 0-9");
    }

    return input;
}

export function inputShipKey() {
    let key: string = "";

    while (!validateNumber(key)) {
        key = prompt("Enter the ship key you want to move: ");
        if (!validateNumber(key)) console.log("Enter a key between 0-9");
    }

    return key;
}

export function inputShipMovement(): string {
    let dir = "";

    while (!validateText(dir)) {
    dir = prompt("Enter a direction? [ 'up', 'down', 'left', right' ] | 'q' to continue: ");
        if (!validateText(dir)) console.log("Not a valid direction.");
    }

    return dir;
}
