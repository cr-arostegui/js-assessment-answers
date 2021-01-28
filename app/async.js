exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function (resolve, reject) {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise(function (resolve, reject) {
      let xmlHttp = new XMLHttpRequest();
      xmlHttp.onload = function() {
        let data = JSON.parse(xmlHttp.responseText);
        let result = [];

        for (const key in data['people']) {
          result.push(data['people'][key]['name']);
        }

        result.sort()
        resolve(result);
      };

      xmlHttp.open('GET', url);
      xmlHttp.send();
    })    
  }
};
