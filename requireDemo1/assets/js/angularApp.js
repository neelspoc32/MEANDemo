var app = angular.module('app', ['ngRoute'])
 .factory('Todos', function(){
      return [
        { name: 'AngularJS Directives', completed: true },
        { name: 'Data binding', completed: true },
        { name: '$scope', completed: true },
        { name: 'Controllers and Modules', completed: true },
        { name: 'Templates and routes', completed: true },
        { name: 'Filters and Services', completed: false },
        { name: 'Get started with Node/ExpressJS', completed: false },
        { name: 'Setup MongoDB database', completed: false },
        { name: 'Be awesome!', completed: false },
      ];
    })

.controller('TodoController',['$scope','Todos',function($scope,Todos){
	$scope.todos = Todos;
}])

.controller('TodoDetailCtrl', ['$scope', '$routeParams', 'Todos', function ($scope, $routeParams, Todos) {
    $scope.todo = Todos[$routeParams.id];
  }])

.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl:'/todos.html',
			controller: 'TodoController'
		})

		.when('/:id',{
			templateUrl: '/todoDetails.html',
			controller: 'TodoDetailCtrl'
		})

		.when('/test',{
			templateUrl:'/test.html',
			controller:'test'
		})
}])

.controller('test',['$scope','Todos',function($scope,Todos){
	console.log('test');
	$scope.todos = Todos;
	console.log(Todos);	
}]);

app.directive('hello', [function () {
  return {
    restrict: 'CEMA', // C: class, E: element, M: comments, A: attributes
    replace: true, // replaces original content with template
    template: '<span><br>Hello</span>'
  }
}]);

/*app.controller('TodoController',function($scope){
	$scope.todos = [
	{name : 'Cleaning dishes',completed:true},
	{name : 'Completing app',completed:false},
	{name : 'Bathing',completed:true},
	{name : 'skateboard',completed:false}

	]
});*/
/*function TodoController($scope){
$scope.todos = [
	{name : 'Cleaning dishes',completed:true},
	{name : 'Completing app',completed:false},
	{name : 'Bathing',completed:true},
	{name : 'skateboard',completed:false}

	]
}*/