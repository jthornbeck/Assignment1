angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      console.log();
      $scope.listings.push($scope.entries);
      //gotta clear entries or will edit prior object
      $scope.entries = "";
    };
    $scope.deleteListing = function(index) {
      console.log(index);
      for(entries in $scope.listings) {
        if(index.name == $scope.listings[entries].name) {
          $scope.listings.splice(entries,1);
        }
      }
    };
    $scope.showDetails = function(index) {
      console.log(index);
      $scope.detailedInfo = index;
    };
  }
]);
