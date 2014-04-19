Starting the name searching...done.
move(1) goes 90 degress up
move(2) goes 145 degress, north west
move(3) goes 175 degress, south west
move(4) goes 180 degress down
move(5) goes 235 degrees, south east
move(6) goes 45 degrees, north east

notes on objects and what they can do

given: function(board_state, player_state, move)

board_state: Object
//it has the following three objects
	board: window.Board
		//calling board allows the following
		surrounding_titles(boardstate.me)
			//return objects of surrounding tiles
		safe_direction(boardstate.me)
			//return array of locations to go
		safe_surrounding_tiles(boardstate.me)
			//don't understand this but think its a chain
		new corrdinates from dir(boardstate.me,3)
			//returns cordinates "width and height" of newly inputed move
	//location of user
	me: Object
	//location of opponnent
	them: Object
		["last_move"]
		["x"]
		["y"]
