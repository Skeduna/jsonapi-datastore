(function() {
  angular
    .module('beauby.jsonApiDataStore', [])
    .factory('JsonApiDataStore', function() {
      return {
        Store: JsonApiDataStore,
        Model: JsonApiDataStoreModel
      };
    });
  <%= contents %>
})();
