/**
 * Main AngularJS Web Application
 */
var app = angular.module('angularjs', ['ngRoute']);

/**
 * Configure the Routes
 */
 
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "pages/home.html", controller: "PageCtrl"})
    .when("/about", {templateUrl: "pages/about.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "pages/services.html", controller: "PageCtrl"})
    .when("/portfolio", {templateUrl: "pages/portfolio.html", controller: "PageCtrl"})
    .when("/news", {templateUrl: "pages/news.html", controller: "PageCtrl"})
	.when("/contact", {templateUrl: "pages/contact.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "pages/404.html", controller: "PageCtrl"});
}]);


/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function () {
  console.log("Page Controller reporting for duty.");
});