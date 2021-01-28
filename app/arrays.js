exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {

    return arr.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    });
  },

  remove: function(arr, item) {
    return arr.filter(function(value, index) {
      return value !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    var target = arr.indexOf(item);

    if (target === -1) {
      return arr;
    }

    arr.splice(target, 1);

    return this.removeWithoutCopy(arr, item);
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let counter = 0;
    arr.forEach(function (value) {
      if (value === item) {
        counter ++;
      }
    });

    return counter;
  },

  duplicates: function(arr) {
    let knowItems = [];

    return arr.filter(function (value, index) {
      if (arr.indexOf(value, index + 1) !== -1 && knowItems.indexOf(value) === -1) {
        knowItems.push(value);
        return true;
      }

      return false;
    })
  },

  square: function(arr) {
    return arr.map(function (value) {
      return value * value;
    })
  },

  findAllOccurrences: function(arr, target) {
    let indexesFound = [];

    arr.forEach(function(value, index) {
      if (value === target) {
        indexesFound.push(index);
      }
    });

    return indexesFound;
  }
};
