Bot.register('DummyBot', function(board_state, player_state, move) {
  // Bot code, then call move!
    var color = board_state.me.color;
    var me = board_state.me;
    var them = board_state.them;
    var board = board_state.board;
    //initially moves should be go right
    var moves = board.safe_directions(me);

    if(!("phase1" in player_state))
    {
      player_state.phase1 = false;
    }

    if(!("phase2" in player_state))
    {
      player_state.phase2 = false;
    }

    if(!("phase3" in player_state))
    {
      player_state.phase3 = false;
    }

    if(!player_state.phase1)
    {
      if(check_to_turn(color))
      {
        player_state.phase1 = true;
        choose_turn(color);
      }
      else
      {
        mv = move_straight(color == "blue" ? 3 : 0);
        tag = false;
        for(i = 0; i < moves.length; i++)
        {
          if(moves[i] == mv)
            tag = true;
        }
        if(tag)
        {
          move(mv);
        }
        else
        {
          player_state.phase1 = true;
          choose_turn(color);
        }
      }
    }
    else if(!player_state.phase2)
    {
      phase2_choose(color);
    }
    else
    {
    }

    function check_to_turn(color)
    {
      var x = board_state.me.x;
      var target = board_state.them.x + (color == "blue" ? 1 : -1);
          target = (color == "blue" ? (target < 10 ? 10 : target) : (target > 19 ? 19 : target));
      if(x == target)
      {
        return true;
      }
      return false;
    }

    function phase2_choose(color)
    {
      ;
    }

    function choose_turn(color)
    {
      if(1 in moves)
      {
        move(1);
      }
      else
      {
        move(4);
      }
    }

    function move_straight(dir)
    {
      if(board_state.me.last_move == dir)
      {
        return ((dir - 1 + 6)%6);
      }
      else
      {
        return (dir);
      }
    }

    function phase2_choose(color)
    {
      var tag = false;
      for(i = 0 ; i < moves.length; i++)
      {
        if(moves[i] == board_state.me.last_move)
          tag = true;
      }
      if(tag)
      {
        move(board_state.me.last_move);
      }
      else
      {
        player_state.phase2 = true;
        phase3_choose(color);
      }
    }
})