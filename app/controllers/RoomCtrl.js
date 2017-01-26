(function() {
    function RoomCtrl($scope, Room) {
        this.rooms = Room.all;
    }
    
    $scope.rooms = this.rooms;
    
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', 'Room', RoomCtrl] );
})();
