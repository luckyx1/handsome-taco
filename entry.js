Bot.register('DummyBot', function(board_state, player_state, move) {
  // Bot code, then call move!
  	var me = board_state.me;
  	var them = board_state.them;
  	var board = board_state.board;
  	//initially moves should be go right
  	var moves = board.safe_directions(me);
  	//add code for random
  	player_state.direction = ((player_state.direction || 0);
  	//check if I'm red or blue before deciding
    if (_.contains(moves, me.right())) {
      move(me.right());
    } else if(_.contains(moves, me.left())) {
      move(me.left());
    } else {
      move(me.straight());
    }
  
})