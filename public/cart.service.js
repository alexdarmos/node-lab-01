function CartService($http, $q) {
    const service = this;

    service.getCart = () => {
        return $q(function(resolve, reject)  {
            $http.get('/cart-items')
            .then( (response) => {
                // console.log(response.data);
                resolve(response.data);
            })
            .catch( (error) => {
                console.log(error);
                reject(error);
            })
        })
    }

}


angular.module("CartApp")
.service("CartService", ["$http", "$q", CartService]);