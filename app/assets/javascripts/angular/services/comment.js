postApp.factory('Comment', ['$resource', function($resource){
  return $resource('/comments/:id:format/:action:actionFormat',{ id: "@id", format: ".json" }, {
	create: { method: 'POST'},
    show: { method: 'GET'},
    query: { method: 'GET', isArray: true },
    update: { method: 'PUT', params: {id: '@id'}},
    delete: { method: 'DELETE', params: {id: '@id'} }
  });
}]);

