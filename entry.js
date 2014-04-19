Bot.register('DummyBot', function(board_state, player_state, move) {
  // Bot code, then call move!
    var color = board_state.me.color;
  	var me = board_state.me;
  	var them = board_state.them;
  	var board = board_state.board;
  	//initially moves should be go right
  	var moves = board.safe_directions(me);

    if(!(phase1 in player_state))
    {
      player_state.phase1 = false;
    }
  	//check if I'm red or blue before deciding
    if(color == "blue")
    {
      // I'm right!
      if(!player_state.phase1)
      {
        if(check_to_turn(color))
        {
          player_state.phase1 = true;
          choose_turn(color);
        }
        else
          move_straight(3);
      }
    }
    else
    {
      // I'm left!
      if(!player_state.phase1)
      {
        if(check_to_turn(color))
        {
          player_state.phase1 = true;
          choose_turn(color);
        }
        else
          move_straight(0);
      }
    }

    function check_to_turn(color)
    {
      var x = board_state.me.x;
      var target = board_state.them.x + (color == "blue" ? 1 : -1)
      if(x == target)
      {
        return true;
      }
    }

    function phase2_choose(color)
    {
      ;
    }

    function choose_turn(color)
    {
      if(color == "blue")
      {
        if(3 in moves)
        {
          move(3);
          player_state.phase2 = "down";
        }
        else
        {
          move(2);
          player_state.phase2 = "up";
        }
      }
      else
      {
        if(0 in moves)
        {
          move(0);
          player_state.phase2 = "up";
        }
        else
        {
          move(5);
          player_state.phase2 = "down";
        }
      }
    }

    function move_straight(dir)
    {
      if(board_state.me.last_move == dir)
      {
        move((dir - 1 + 6)%6);
      }
      else
      {
        move(dir);
      }
    }
})