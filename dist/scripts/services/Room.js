(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
           
        var addNewChatRoom = function(newChatRoomName) {
            rooms.$add({$value: newChatRoomName})    
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