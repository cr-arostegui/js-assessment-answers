exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let result = [];
    let self = this;
    let startCounting = true;
    
    if (dirName) {
      startCounting = dirName === data['dir'];
    }

    if (data['files'].length) {
      data['files'].forEach(function (value) {
        if (typeof value === 'object') {
          result = result.concat(self.listFiles(value, startCounting ? undefined : dirName));
        } else if (startCounting) {
          result.push(value);
        }
      });
    }

    return result;
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
