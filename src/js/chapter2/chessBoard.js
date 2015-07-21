module.exports = function () {

    "use strict";

    function generateBoard(size) {

        var oddLine = "# # # #\n",
            evenLine = " # # # #\n",
            result = '',
            i;
//
        size = size || 8;

        for (i = 1; i <= size; i = i + 1) {
            result += (i % 2) ? oddLine : evenLine;
        }
//        return result;
    }

    return {
        generateBoard: generateBoard
    };
};
