postApp.factory('Post', ['$resource', function($resource){
  return $resource('/posts/:id:format/:action:actionFormat',{ id: "@id", format: ".json" }, {
	create: { method: 'POST'},
    show: { method: 'GET'},
    query: { method: 'GET', isArray: true },
    update: { method: 'PUT', params: {id: '@id'}},
    delete: { method: 'DELETE', params: {id: '@id'} },
    show_comments: {method: 'GET', params: {action: 'comment_show', format: '', actionFormat: '.json'}, isArray: true },
  });
}]);

