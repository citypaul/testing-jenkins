module.exports = function () {

    function generateBoard (size) {

        var oddLine = "# # # #\n",
            evenLine = " # # # #\n",
            size = size || 8,
            result = '';

        for (var i = 1; i <= size; i = i + 1) {
            result += (i % 2) ? oddLine : evenLine;
        }
        return result;
    }

    return {
        generateBoard: generateBoard
    };
};