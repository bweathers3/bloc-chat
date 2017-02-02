(function() {
    function HomeCtrl( $scope, Room, Message, $uibModal, $cookies) {
        $scope.rooms = Room.all;
        $scope.activeRoom = null;
        $scope.roomName = null;
        $scope.currentUser = $cookies.get('blocChatCurrentUser');
        console.log("current User", $scope.currentUser);
        
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
            $scope.currentUser = $cookies.get('blocChatCurrentUser');
            $scope.messages = Message.getByRoomId(room.$id);

        }
        
        
        $scope.sendNewMessages = function() {
                $scope.newMessage.roomId = $scope.activeRoom.$id;
                $scope.newMessage.username = $scope.currentUser;              
                Message.send($scope.newMessage);
                $scope.newMessage.content = '';
        }
    
    }
    
    
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', '$cookies', HomeCtrl] );
})();
