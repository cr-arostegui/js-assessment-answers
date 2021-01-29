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
    let permutations = [];

    let getPermutations = function (arr, index) {
      let pivotIndex = index;
      var pivotValue = arr[pivotIndex];
      
      if (pivotIndex === arr.length - 1) {
        permutations.push(arr);
      }

      for (let i = pivotIndex; i < arr.length; i++) {
        var newArr = arr.slice();
        newArr[pivotIndex] = arr[i];
        newArr[i] = pivotValue;

        getPermutations(newArr, pivotIndex + 1);
      }
    }

    getPermutations(arr, 0);
    return permutations;

  },

  fibonacci: function(n) {

    if (n <= 1) {
      return n;
    }

    return this.fibonacci(n-1) + this.fibonacci(n-2);
  },

  validParentheses: function(n) {

  }
};
