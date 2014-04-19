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
      else
      {
        //phase 2
        choose_turn(color);
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
      else
      {
        //phase 2
        choose_turn(color);
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

    function wall_avoid()
    {
      var x = me.x
      var y = me.y
      var top = new Array();
      top[0]=0;
      top[1]=1;
      top[2]=2;
      var left_warning=false;
      var right_warning=false;
      var top_warning=false;
      var bottom_warning=false;
      if (x - 1 > 0){
        left_warning=true;
      }else if(x +1 >29){
        right_warning = true;
      }else if(y - 1 >0){
        top_warning=true;
      }else if(y+1 >14){
        bottom_warning = true;
      }else{
        //do nothing
      }
      if(top_warning || right_warning || bottom_warning | left_warning){
        //if one of the warnings are possible, turn around
          if(me.last_move in top){
            //this means it heading towards the top
            if (_.contains(moves, 3) {
              move_straight(3);
            }else if(_.contains(moves,4)){
              move_straight(4);
            }else if(_.contains(moves,5)){
              move_straight(5);
            }
          }else{
            //heading towards the bottom
            if (_.contains(moves, 0) {
              move_straight(0);
            }else if(_.contains(moves,1)){
              move_straight(1);
            }else if(_.contains(moves,2)){
              move_straight(2);
            }
          }
      }
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