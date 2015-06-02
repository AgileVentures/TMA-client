'use strict';

app.factory('authInterceptor', function ($q, SessionStoreService) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if (SessionStoreService.getToken()) {
        config.headers.token = SessionStoreService.getToken();
      }
      return config;
    },
    response: function (response) {
      if (response.status === 403) {
        SessionStoreService.destroy();
      }
      return response || $q.when(response);
    }
  };
});
