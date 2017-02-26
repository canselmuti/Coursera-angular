(function () {
'use strict';

angular.module('TezApp', [])
.controller('TezController', TezController);

TezController.$inject = ['$scope'];
function TezController($scope) {
  $scope.saveToPc   = function(data, fileName){
    if(!data){
      console.error('No data found! (FROM: __Muti)');
      return;
    }

    if(!fileName){
      fileName = 'download.json';
    }

    //typeof ne işe yarar, bak....
    if(typeof data == 'object'){
      data = JSON.stringify(data, undefined, 2);
    }

    var blob = new Blob([data], {type: 'text/json'});

    //FOR IE
    if(window.navigator && window.navigator.msSaveOrOpenBlob){
      window.navigator.msSaveOrOpenBlob(blob, fileName);
    }
    else{
      var e = document.createEvent("MouseEvents"),
          a = document.createEvent('a');

      a.download = fileName;
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initEvent('click', true, false, window,
          0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
    }
  };
}

})();
