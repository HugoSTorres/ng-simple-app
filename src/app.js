var angular = require('angular');
var PostsController = require('./controllers/posts');
var PostsService = require('./services/posts');

var simpleApp = angular.module('simple-app', []);

simpleApp.controller('PostsController', PostsController);

simpleApp.service('posts', PostsService);
