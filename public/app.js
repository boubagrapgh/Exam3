(function(){
	var app = angular.module('Myhotels',['ngRoute']);

	app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl :'partials/main.html',
		name : 'main',
		controller : 'mainController'
	})
  .when('/corinthia.html', {
		templateUrl :'partials/corinthia.html',
		name : 'corinthia',
		controller : 'corinthiaController'
	})
  .when('/carlton.html', {
    templateUrl :'partials/carlton.html',
    name : 'carlton',
    controller : 'carltonController'
  })
  .when('/palentino.html', {
    templateUrl :'partials/palentino.html',
    name : 'palentino',
    controller : 'palentinoController'
  })
}]);
app.controller('MyhotelsCtrl', function(){
});
// app.controller('mainController', function($scope){
// $scope.dernierHotel = {};
// $scope.dernierHotel=[
//   {
//     name :'Hotel Océan',
//     stars : '4',
//     description :"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.Le Lorem Ipsum est le faux texte standard de imprimerie depuis les années 1500",
//     photos:'img/hotel/newHotel/new2.jpg'
//   }
//   {
//       name :'Hotel TATUM',
//       stars : '5',
//       description :"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.Le Lorem Ipsum est le faux texte standard de imprimerie depuis les années 1500",
//       photos:'img/hotel/newHotel/newH3.jpg'
//     }
//     {
//         name :'Hotel PALAVAS LES FLOTS',
//         stars : '5',
//         description :"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.Le Lorem Ipsum est le faux texte standard de imprimerie depuis les années 1500",
//         photos:'img/hotel/newHotel/newH5.jpg'
//       }]
// });
//
// app.controller('corinthiaController', function($scope){
//
// })
	//directives////////////////HEADER FOOTER//////////////////////////////

	app.directive('header', function(){
		return{
			restrict : 'A',
			name : 'header',
			templateUrl : 'partials/commun/header.html'
		}
	});

	app.directive('footer', function(){
		return{
			restrict : 'A',
			name : 'footer',
			templateUrl : 'partials/commun/footer.html'
		}
	});



	app.directive('main', function(){
		return{
			restrict : 'E',
			name :'main',
			templateUrl : 'partials/main.html'
		}
	});

	 app.directive('sass', function(){
	return{
			restrict :'E',
			name :'sass',
			templateUrl :'partials/sass.html'
		}
	});




})();/////////////:fin function app revision
