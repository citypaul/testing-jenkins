var chessBoard = require('../../src/js/chapter2/chessBoard'),
    board = chessBoard();
"use strict";

describe('Chessboard', function () {
   it('should fail', function () {
      expect(board.generateBoard()).toEqual("# # # #\n # # # #\n# # # #\n # # # #\n# # # #\n # # # #\n# # # #\n # # # #\n");
   });
});