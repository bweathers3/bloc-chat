(function() {
    function HomeCtrl( $scope, $uibModal, Room) {
        this.rooms = Room.all;   
        $scope.rooms = this.rooms;    
  
        $scope.open = function() {
            var newChatRoomModal = $uibModal.open({
                templateUrl: '/templates/newChatRoomModal.html',
                controller: 'ModalCtrl'
            });

            newChatRoomModal.result.then(function (newChatRoomName) {
                Room.addNewRoom(newChatRoomName);
            })
        } 
    
    }
    
    
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', '$uibModal','Room', HomeCtrl] );
})();
