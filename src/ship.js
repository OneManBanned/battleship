"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ship = /** @class */ (function () {
    function Ship(key, length) {
        this.key = key;
        this.length = length;
        this.isSunk = false;
    }
    Ship.prototype.hit = function () {
        --this.length;
        if (this.length === 0)
            this.sink();
    };
    Ship.prototype.sink = function () { this.isSunk = true; };
    return Ship;
}());
exports.default = Ship;
