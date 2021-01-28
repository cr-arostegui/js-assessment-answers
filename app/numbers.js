exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >>> (bit - 1));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var result = (num >>> 0).toString(2);

    var zeroPrefix = 8 - result.length;

    for (let index = 0; index < zeroPrefix; index++) {
      result = '0' + result;
    }

    return result;
  },

  multiply: function(a, b) {
    return parseFloat((a * b).toPrecision(1));
  }
};
