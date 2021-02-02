exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    let regex = new RegExp(/[0-9]/);
    return regex.test(str);
  },

  containsRepeatingLetter: function(str) {
    let regex = new RegExp(/(\D)\1/g);
    return regex.test(str);
  },

  endsWithVowel: function(str) {
    let regex = new RegExp(/(a|e|i|o|u)$/gi);
    return regex.test(str);
  },

  captureThreeNumbers: function(str) {
    let regex = new RegExp(/\d{3}/g);
    let result = regex.exec(str);
    return  result ? result[0] : false;
  },

  matchesPattern: function(str) {
    let regex = new RegExp(/^(\d){3}-(\d){3}-(\d){4}$/g);
    return  regex.test(str);
  },

  isUSD: function(str) {
    let regex = new RegExp(/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/g);
    return  regex.test(str);
  }
};
