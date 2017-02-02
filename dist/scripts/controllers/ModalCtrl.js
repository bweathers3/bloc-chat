(function() {
    function ModalCtrl($scope, $uibModalInstance, $cookies){
        $scope.text = "";
        $scope.textNewName = "";

        $scope.ok = function(){
            $uibModalInstance.close($scope.text);
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
        
        
        $scope.createUserName = function () {
            $cookies.put('blocChatCurrentUser', $scope.textNewName);
            $uibModalInstance.close();
            }
        
        
       
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModalInstance', '$cookies', ModalCtrl])
})();