"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var Battleship = /** @class */ (function () {
    function Battleship() {
        this.player1 = new player_1.default();
        this.player2 = new player_1.default();
        this.player1.playerBoard.defaultShipPlacement();
        this.player2.playerBoard.defaultShipPlacement();
    }
    Battleship.prototype.printBoard = function (player) {
        var self = player;
        for (var row = 0; row <= 9; row++) {
            var r = "";
            for (var col = 0; col <= 9; col++) {
                var shipKey = self.playerBoard.board[row][col];
                var shipSunk = void 0;
                if (!isNaN(shipKey))
                    shipSunk = self.playerBoard.ships[shipKey].isSunk;
                if (shipSunk || shipKey === undefined) {
                    r += "-";
                }
                else {
                    r += "s";
                }
            }
            console.log(r);
        }
    };
    return Battleship;
}());
exports.default = Battleship;
