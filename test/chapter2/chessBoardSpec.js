var chessBoard = require('../../src/js/chapter2/chessBoard'),
    board = chessBoard();


describe('Chessboard', function () {
    "use strict";

    it('should generate an 8 x 8 board by default', function () {
        expect(board.generateBoard()).toEqual(
            "# # # #\n" +
            " # # # #\n" +
            "# # # #\n" +
            " # # # #\n" +
            "# # # #\n" +
            " # # # #\n" +
            "# # # #\n" +
            " # # # #\n"
        );
    });

    it('shoulds generate a board based on a passed size', function () {
        expect(board.generateBoard(2)).toEqual(
            "# # # #\n" +
            " # # # #\n"
        );

        expect(board.generateBoard(10)).toEqual(
            "# # # #\n" +
            " # # # #\n" +
            "# # # #\n" +
            " # # # #\n" +
            "# # # #\n" +
            " # # # #\n" +
            "# # # #\n" +
            " # # # #\n" +
            "# # # #\n" +
            " # # # #\n"
        );
    });
});