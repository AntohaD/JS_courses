var Game = (function(){
    var counter = 0;
    var myGame = null;

    function createGame() {
        myGame = 'game';
        counter++;
        return myGame;
    }

    return {
        getCounter: function() {
            return counter;
        },
        getGame: function() {
            return myGame || createGame();
        }
    }
})();

console.log(Game.getGame());
console.log(Game.getGame());
console.log(Game.getCounter());