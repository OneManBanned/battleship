import pkg from "prompt-sync";
import inputValidator from "./inputValidation";

const prompt = pkg();
const { validate } = inputValidator()

export default function inputCoordinate(axis: string): string {
    let input = ""

    while(!validate(input)) {
    input = prompt(`Enter ${axis} number you wish to fire on: `);
    if (!validate(input)) console.log("Enter a number between 0-9")
    }

     return input;
}
