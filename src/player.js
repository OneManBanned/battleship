"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gameboard_1 = require("./gameboard");
var Player = /** @class */ (function () {
    function Player() {
        this.playerBoard = new gameboard_1.default;
    }
    Player.prototype.fire = function (opponent, coords) {
        var playerBoard = opponent.playerBoard;
        var shipKey = playerBoard.checkGrid(coords);
        if (!isNaN(shipKey)) {
            var targetShip = playerBoard.ships[shipKey];
            targetShip.hit();
        }
    };
    return Player;
}());
exports.default = Player;
