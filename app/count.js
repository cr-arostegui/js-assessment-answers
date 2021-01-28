exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let result = start;
    console.log(result);

    let timer = setInterval(function() {
      result++;
      if (result === end) {
        clearInterval(timer);
      }

      console.log(result);
    }, 100);

    return {
      cancel: function() {
        clearInterval(timer);
      }
    };
  }
};
