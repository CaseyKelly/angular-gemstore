(function() {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.guitar = guitar;
  });

  var guitar = {
    make: 'Gibson',
    model: 'Les Paul Custom',
    year: 1973,
    description: 'Cherry sunburst with rosewood inlay',
    photoUrl: 'http://www.jimihocking.com/_images/_guitars/1973lespaul_sunburst.jpg'
  };
})();
