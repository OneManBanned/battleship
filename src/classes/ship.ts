import { Point } from "../../types/types";

export default class Ship {
    key: number;
    length: number;
    isSunk: boolean;
    location: Point

    constructor(key: number, length: number, coords: Point) {
        this.key = key;
        this.length = length;
        this.isSunk = false
        this.location = coords
    }

    hit() {
        --this.length;
        if (this.length === 0) this.sink();
    }

    private sink() { this.isSunk = true; }
    
}
