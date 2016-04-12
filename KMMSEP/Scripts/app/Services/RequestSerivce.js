app.service('RequestService', ['$http', function ($http) {
    this.get = function (url, deffered) {
        $http.get(url)
            .success(function (responce) {
                deffered.resolve(responce);
            })
            .error(function (error) {
                deffered.reject(error);
            })
    };

    this.post = function (url, data, deffered) {
        $http.post(url, data)
            .success(function (responce) {
                deffered.resolve(responce);
            })
            .error(function (error) {
                deffered.reject(error);
            })
    };

    this.delete = function (url, deffered) {
        $http.delete(url)
            .success(function (responce) {
                deffered.resolve(responce);
            })
            .error(function (error) {
                deffered.reject(error);
            })
    };
}])