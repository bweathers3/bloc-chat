(function() {
    function Message($firebaseArray) {    
        var messageRef = firebase.database().ref().child("messages");  
        var messageReference = firebase.database().ref().child("messages").orderByChild('roomId');
        
        var messages = $firebaseArray(messageRef);
            
            Message.send = function(sendMessage) {
                sendMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
                messages.$add(sendMessage);
            }
            
            Message.getByRoomId = function(roomId) {              
                return $firebaseArray(messageReference.equalTo(roomId));
            }
      
            return Message;
        }


    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();