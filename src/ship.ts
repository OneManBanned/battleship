export default class Ship  {

    key: number;
    length: number;
    isSunk: boolean;

    constructor(key: number, length: number) {
        this.key = key
        this.length = length;
        this.isSunk = false;
    }

    hit() {
        --this.length;
    }

}
