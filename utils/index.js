module.exports = {
    ArrayIsArray: function (inputArray) {
        return Array.isArray(inputArray);
    },
    RgbToColorAnsi: function (r, g, b) {
        // this r|0 will convert any number into int
        return `\x1b[38;2;${r | 0};${g | 0};${b | 0}m`;
    },
    RgbToBackgroundColorAnsi: function (r, g, b) {
        // this r|0 will convert any number into int
        return `\x1b[48;2;${r|0};${g|0};${b|0}m`;
    }
};
