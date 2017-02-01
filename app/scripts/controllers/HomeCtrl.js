(function() {
    function HomeCtrl( $scope, Room, Message, $uibModal) {
        $scope.rooms = Room.all;
        $scope.activeRoom = null;
        $scope.roomName = null;
        
        $scope.open = function() {
            var newChatRoomModal = $uibModal.open({
                templateUrl: '/templates/newChatRoomModal.html',
                controller: 'ModalCtrl'
            })

            newChatRoomModal.result.then(function(newChatRoomName) {
                Room.addNewRoom(newChatRoomName);
            })          
        } 
        
        $scope.setActiveChatRoom = function(room) {
            $scope.activeRoom = room;
            $scope.roomName = room.name;
            $scope.messages = Message.getByRoomId(room.$id);
        }
        
        
        
        $scope.sendNewMessages = function() {
                $scope.newMessage.roomId = $scope.activeRoom.$id;
                $scope.newMessage.username = "Sam";              
                Message.send($scope.newMessage);
        }
    
    }
    
    
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', HomeCtrl] );
})();
