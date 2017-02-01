(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        var messageReference = firebase.database().ref().child("messages").orderByChild('roomId');
           
        var addNewChatRoom = function(newChatRoomName) {
            rooms.$add({name: newChatRoomName})    
        };

        return {
            all: rooms,
            addNewRoom: addNewChatRoom
        };
        
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();