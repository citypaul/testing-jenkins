var chessBoard = require('../../src/js/chapter2/chessBoard');

describe('Chessboard', function () {
   it('should fail', function () {
      expect(chessBoard().smeg).toEqual('something');
   });
});