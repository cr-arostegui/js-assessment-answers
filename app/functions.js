exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function (str2) {
      return str + ', ' + str2; 
    }
  },

  makeClosures: function(arr, fn) {
    let result = [];

    arr.forEach(function(value) {
      result.push(function() {
        return fn(value)
      });
    });

    return result;
  },

  partial: function(fn, str1, str2) {
    return function(punctuation) {
      return fn(str1, str2, punctuation);
    }
  },

  useArguments: function() {
    var args = Array.from(arguments);
    return args.reduce(function(acc, currentVal) {
      return acc + currentVal;
    });
  },

  callIt: function(fn) {
    var args = Array.from(arguments);
    args.shift();
    return fn.apply(null, args);;
  },

  partialUsingArguments: function(fn) {
    var args = Array.from(arguments);
    args.shift();

    return function () {
      var args2 = Array.from(arguments);
      return args.length ? fn.apply(null, args.concat(args2)) : fn.apply(null, args2);
    }
  },

  curryIt: function(fn) {
    let accumulativeArgs = [];

    var newFn = function (num) {
      accumulativeArgs.push(num);
      
      if (accumulativeArgs.length === 3) {
        return fn.apply(null, accumulativeArgs);
      }

      return newFn;
    }

    return newFn;
  }
};