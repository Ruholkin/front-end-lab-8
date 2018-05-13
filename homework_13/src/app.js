let myApp = angular.module('myApp', ['data'])
.controller('DemoController', function DemoController($scope, posts) {
    $scope.allPosts = posts;
    $scope.displayedPosts = posts;

    $scope.categories = ['All'];

    $scope.getUniqueCategories = ( array, categories ) => {
    	let unique = categories.map( el => [].concat(el.categories)); 
    	let newArray = [];

    	 for(let i = 0; i < unique.length; i++){
    	 	newArray = newArray.concat(unique[i]);
    	 }

    	array = array.concat(newArray);
    	array = array.filter((v, i, a) => a.indexOf(v) === i );
    	return array;
    }

    $scope.categories = $scope.getUniqueCategories( $scope.categories, $scope.allPosts );

    $scope.sortingByCategories = (category) => {
    	if( category === 'All'){
    		$scope.displayedPosts = $scope.allPosts;
    	} else {
    		$scope.displayedPosts = $scope.allPosts.filter( el => {
    			let searchValue = el.categories.join('');
      		return searchValue.indexOf(category) !== -1;
    		});
    	}
    };

    $scope.sortingByTitle = () => {
    	let title = $scope.search.toLowerCase();
    	$scope.displayedPosts = $scope.allPosts.filter( el => el.title.toLowerCase().indexOf(title) !== -1);
    };
});