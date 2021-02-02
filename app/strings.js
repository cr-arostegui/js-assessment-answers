exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let expression = '(\\w)\\1{' + amount + ',}';
    let regex = new RegExp(expression, 'g');
    let regexResult = regex.exec(str);

    while(regexResult !== null) {
      var stringFound = regexResult[0];
      str = str.replace(stringFound, stringFound.slice(0, amount));

      let regex = new RegExp(expression, 'g');
      regexResult = regex.exec(str);      
    }

    return str;

  },

  wordWrap: function(str, cols) {
    let words = str.split(' ');
    let result = '';
    let accum = 0;
    let accumString = '';

    words.forEach(function(word, index) {
      if (accum == 0 && word.length >= cols) {
        result += word;
        result = result.trim();
        if (index != words.length - 1) {
          result += '\n';
        }
      } else {
        if (word.length + accum >= cols) {
          result += accumString;
          result = result.trim();
          result += '\n';

          if (index == words.length - 1) {            
            result += word;
          }

          accumString = word + ' ';
          accum = word.length;
        } else {
          accumString += word + ' ';
          accum += word.length;
        }
      }
    });

    return result;
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
