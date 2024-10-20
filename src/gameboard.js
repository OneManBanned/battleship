"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var ship_1 = require("../src/ship");
var Gameboard = /** @class */ (function () {
    function Gameboard() {
        this.ships = Gameboard.createShips();
        this.board = Gameboard.createBoard();
    }
    Gameboard.prototype.placeShip = function (coords, key) {
        var shipLength = this.ships[key].length - 1;
        var availableGrid = 0;
        var yAxis = coords.y;
        if (this.checkGrid(coords) === undefined && this.checkEmptyAdjacent(coords, key)) {
            for (var i = 0; i < shipLength; ++i) {
                var nextCoords = { x: coords.x, y: yAxis };
                if (this.checkGrid(nextCoords) === undefined && this.checkEmptyAdjacent(nextCoords, key)) {
                    availableGrid++;
                    yAxis++;
                }
            }
            yAxis = coords.y;
            if (shipLength === availableGrid) {
                for (var i = 0; i <= shipLength; ++i) {
                    this.board[coords.x][yAxis] = key;
                    yAxis++;
                }
            }
        }
    };
    Gameboard.prototype.shipsSunk = function () {
        for (var ship in this.ships) {
            if (!this.ships[ship].isSunk)
                return false;
        }
        return true;
    };
    Gameboard.prototype.checkGrid = function (coords) {
        return this.board[coords.x][coords.y];
    };
    Gameboard.prototype.checkEmptyAdjacent = function (coords, key) {
        var dir = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        for (var i = 0; i < dir.length; i++) {
            var _a = dir[i], x = _a[0], y = _a[1];
            if (coords.x + x >= 0 && coords.x + x <= 9 &&
                coords.y + y >= 0 && coords.y + y <= 9) {
                var gridKey = this.checkGrid({ x: coords.x + x, y: coords.y + y });
                if (gridKey !== key && gridKey !== undefined) {
                    return false;
                }
            }
        }
        return true;
    };
    Gameboard.prototype.defaultShipPlacement = function () {
        var _this = this;
        var defaultShipCoords = [{ x: 1, y: 1 }, { x: 1, y: 3 }, { x: 1, y: 5 }, { x: 1, y: 7 }, { x: 3, y: 1 }, { x: 3, y: 4 }, { x: 3, y: 7 }, { x: 5, y: 1 }, { x: 5, y: 5 }, { x: 7, y: 1 }];
        defaultShipCoords.map(function (coords, index) { return _this.placeShip(coords, index); });
    };
    Gameboard.createShips = function () {
        var container = {};
        var totalShips = 10;
        var shipLengths = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
        for (var i = 0; i < totalShips; i++) {
            container[i] = new ship_1.default(i, shipLengths[i]);
        }
        return container;
    };
    Gameboard.createBoard = function () {
        var rows = 10;
        var columns = 10;
        return __spreadArray([], Array(rows), true).map(function () { return Array(columns).fill(undefined); });
    };
    return Gameboard;
}());
exports.default = Gameboard;
