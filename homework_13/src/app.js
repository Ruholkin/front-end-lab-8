let myApp = angular.module('myApp', ['data'])
.controller('DemoController', function DemoController($scope, posts) {
    $scope.allPosts = posts;
    $scope.displayedPosts = posts;

    $scope.isAdding = false;
    $scope.categories = ['All'];
    $scope.errorClass = '';
    $scope.defaultPhoto = 'assets/default.jpg';

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

    $scope.addingPost = () => {
    	$scope.isAdding = true;
    };

    $scope.cancel = () => {
    	$scope.isAdding = false;
    };

    $scope.createPost = () => {
    	if( $scope.title && $scope.newCategories && $scope.description ) {
    		$scope.errorClass = '';
    		let newPhoto = $scope.photo || $scope.defaultPhoto;
    		let newPost = {
    			title: $scope.title,
    			description: $scope.description,
    			categories: $scope.newCategories.split(/[ ,]+/),
    			url: newPhoto,
    			isEditing: false
    		};

    		$scope.allPosts.push(newPost);
    		$scope.isAdding = false;

    		$scope.title = '';
    		$scope.newCategories = '';
    		$scope.description = '';
    		$scope.photo = '';
    	} else {
    		$scope.errorClass += 'errorClass';
    	}    	
    };

    $scope.postEditing = (post) => {
    	if( post.title && post.description && post.categories ){
    		post.categories = post.categories.toString().split(/[ ,]+/);
    		post.isEditing = false;
    		if( !post.url ) {
    			post.url = $scope.defaultPhoto;
    		}
    		$scope.errorClass = '';
    	}else {
    		$scope.errorClass += 'errorClass';
    	}
    };
});