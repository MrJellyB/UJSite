var app = angular.module('band', [] );

(function(){
	app.controller('SiteController', ['$scope', function($scope){
		this.mainViews = objVisible;
		this.articles = [{}];
		buildData();
		this.articles = posts;
		$("#div-body").hide();
		$("#div-body").ready(function(){
			$("#div-body").fadeIn();
		});
		$("#div-body").unload(function(){
			$("#div-body").fadeOut();
		});

		$scope.toggleVisible = function(value) {

			for (var index = 0; index < objVisible.length; index++) {
				$("#div-body" + index).hide();
			};

			$("#div-body" + value).toggle(
				"blind", {
					duration: 2000
			});
		};
	}]);

	app.controller('CommentsController', function() {
		this.block = {};
		this.buildComment = function(article) {
			article.comments.push(this.block);
		};
	});

	// Direcives

	app.directive('tabsHead', function(){
		return {
			restrict: 'E',
			templateUrl: "./includes/tabs-head.html"
		};
	});

	app.directive('tabComments', function(){
		return {
			restrict: 'E',
			templateUrl: "./includes/tabs/commentsTab.html"
		};
	});

	var posts = [{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!",
		comments : [{
			header : "a Nice Header",
			text : "test test",
			author : "me",
			date : new Date().getDate()
		}]
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	},
	{
		author : "Shvacher Noam",
		headline : "My first article",
		body : "greetins, this is my first article, " + 
				"i hope that everyone likes it!"
	}];

	// var objVisible = [
	// 		{div_body : true},
	// 		{div_body : false},
	// 		{div_body : false},
	// 		{div_body : false}
	// 	];

	var objVisible = [
			{div_body : function(value) {$("#div-body" + value).slideToggle()}},
			{div_body : function(value) {$("#div-body" + value).slideToggle()}},
			{div_body : function(value) {$("#div-body" + value).slideToggle()}},
			{div_body : function(value) {$("#div-body" + value).slideToggle()}}
		];
}
)();

function buildData()
{
	publishPosts();
}

function publishPosts()
{
	var post;

	for (var i = 0; i < 10; i++) {
		try{
			post = {
				author : "Shvacher Noam",
				headline : "My first article",
				body : "greetins, this is my first article, " + 
						"i hope that everyone likes it!"
			}

			app.articles.add(post);
		} 
		catch(e){
		}
	};
}

// function toggleVisible(i)
// {
// 	app.mainViews[i].div_body = true;
// }