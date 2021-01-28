exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    let result = [];

    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        result.push(key + ': ' + obj[key]);
      }
    }

    return result;
  }
};
