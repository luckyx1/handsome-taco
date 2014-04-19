Bot.register('handsome-taco', function(board_state, player_state, move) {
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

    if(!player_state.phase1)
    {
      if(check_to_turn(color))
      {

        choose_turn(color);
      }
      else if (Math.abs(them.y - me.y) <= 1)
      { 
        move_straight(color == "blue" ? 3 : 0);
      }
      else if(them.y > me.y + 1)
      {
        move(color == "blue" ? 3 : 5)
      }
      else if(them.y < me.y - 1)
      {

      }
    }
    else
    {
      //phase 2
      phase2_choose(color);
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
    }

    function phase2_choose(color)
    {
       if (_.contains(moves, me.sharp_left())) {
        move(me.sharp_left());
      } else if (_.contains(moves, me.left())) {
        move(me.left());
      } else if(_.contains(moves, me.straight())) {
        move(me.straight());
      } else if(_.contains(moves, me.right())) {
        move(me.right());
      } else {
        move(me.sharp_right());
      }
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
        move((dir - 1 + 6)%6);
      }
      else
      {
        move(dir);
      }
    }
})