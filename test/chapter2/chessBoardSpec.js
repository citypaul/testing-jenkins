describe('Chessboard', function () {
    "use strict";
    
    var chessBoard = require('../../src/js/chapter2/chessBoard'),
        board = chessBoard();


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

    it('should generate a board based on a passed size', function () {
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
