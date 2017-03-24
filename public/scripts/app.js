angular
  .module('API-zoo', ['ngRoute'])
  .config(config)
  //this controller should match the controller in public/scripts/controllers/ApiZooIndexController
  .controller('ZooIndexController', ZooIndexController);

  config.$inject = ['$routeProvider', '$locationProvider'];
    function config( $routeProvider, $locationProvider ) {
      $routeProvider
      .when('/', {
        template: 'templates/animalsList',
        controller: 'ZooIndexController',
        controllersAs: 'zooIndexCtrl'
      })
      .when('animals/:id', {
        template: 'This will show the animals!',
        controller: 'ZooShowController',
        controllersAs: 'zooShowCtrl'
      });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }
