var chessBoard = require('../../src/js/chapter2/chessBoard'),
    board = chessBoard();


describe('Chessboard', function () {
    "use strict";
    
    it('should fail', function () {
        expect(board.generateBoard()).toEqual("# # # #\n" +
        " # # # #\n" +
        "# # # #\n" +
        " # # # #\n" +
        "# # # #\n" +
        " # # # #\n" +
        "# # # #\n" +
        " # # # #\n");
    });
});