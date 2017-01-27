(function(){
    angular.module('starter')
            .service('SocketService', ['socketFactory', function(socketFactory){
                return socketFactory ({
                    ioSocket: io.connect('http://xxx.com:9000')
                });    
            }]);
})();