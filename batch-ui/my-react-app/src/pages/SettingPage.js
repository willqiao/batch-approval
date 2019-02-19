import React, { Component } from 'react';
import TicCell from '../TicCell';

class SettingPage extends Component {
    constructor(props) {
        super(props);
        this.state = { data :
            [[0,0,0],
            [0,0,0],
            [0,0,0]] ,

            isEnd:false
        }
        this.userMove = this.userMove.bind(this);
        this.isOver = this.isOver.bind(this);
        this.win = this.win.bind(this);
        this.computerMove = this.computerMove.bind(this);
        this.generateMove = this.generateMove.bind(this);
        this.score = this.score.bind(this);
        this.findOptions = this.findOptions.bind(this);
    }
    generateMove (i, j, value) {
        let newstate = JSON.parse(JSON.stringify(this.state.data));
        newstate[i][j] = value;
        // this.state.data[i][j] = value;
        this.setState({data:newstate}, ()=>{
            if (this.isOver()) {
                window.M.toast({html: this.winner});
            } else {
                if (value == 9) {
                    let moves = []
                    this.computerMove( true, 0, moves);
                    let keys = moves[moves.length -1].split("_");
                    this.generateMove(keys[0],keys[1],1);
                }
            }
        });

        
    }

    render() { 
        return ( 
            <div>
            {this.state.data.map((row, i)=> {
                return <div key={'row'+i}>
                    {row.map((cell,j)=><TicCell key={'cell' +j} value={this.state.data[i][j]} onclickevent={this.userMove} i={i} j={j}/>)}
                </div>            
            })
            }
            </div> 
        );
        
    }




    isOver() {
        console.log(this.state, "over", this.winner);
		//8 scenario:
		let result = false;
		for (let i = 0; i < 3; i++) {
			result = this.win(this.state.data[i][0] + this.state.data[i][1] + this.state.data[i][2]);
			if (result == true) return true;
			result = this.win(this.state.data[0][i] + this.state.data[1][i] + this.state.data[2][i]);
			if (result == true) return true;
        }
        console.log(this.state, "over1", this.winner);
		result = this.win(this.state.data[0][0] + this.state.data[1][1] + this.state.data[2][2]);
		if (result == true) return true;
		result = this.win(this.state.data[0][2] + this.state.data[1][1] + this.state.data[2][0]);
		if (result == true) return true;
        console.log(this.state, "over2", this.winner);

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                console.log(this.state.data[i][j], this.state.data[i][j]==0);
                if (this.state.data[i][j] == 0) {
                    return false;
                }
            }
        }
        console.log(this.state, "over3", this.winner);
        this.winner = "Tie";
        
		return true;
	}
	
	win(sum) {
        
		if (sum == 3) {
        this.winner = "Computer is winning";
		return true;
		} else if (sum == 27) {
            this.winner = "User is winning";
			return true;
        }
		return false;
	}

	userMove(i, j) {
        this.generateMove(i,j,9);
		
		//computer move:
		
    }
    
	
    findOptions() {
        let options = [];
		for (let i = 0; i < this.state.data.length; i++) {
			for (let j = 0; j < this.state.data[i].length; j++) {
				if (this.state.data[i][j] == 0) {
					options[options.length] = i+"_"+j;
				}
			}
		}
		return options;
	}
    
    

	computerMove( isComputer, start, moves) {
		let score =  this.score();
		let options = this.findOptions();
		if (score == 10 || score == -10) {
			return score;
		} else if (options.length == 0) {
			return score;
		}
		
		if (isComputer) {
			let bestValue = -100;
			let bestMove = "";
			for (let i = 0; i < options.length; i++) {
			//computer move Max
                let keys = options[i].split("_");
				let f = Number(keys[0]);
				let s = Number(keys[1]);
				
				this.state.data[f][s] = 1;
				if (this.score() == 10) {
					bestValue = 10;
					bestMove = options[i];
					this.state.data[f][s] = 0;
					break;
				}
				let possibleBestMoveFromOpponent = this.computerMove(false, start+1, moves);
//				if (start == 0) System.out.println("Computer possibleBestMoveFromOpponent" + possibleBestMoveFromOpponent + options[i]);
				if (possibleBestMoveFromOpponent > bestValue) {
					bestValue = possibleBestMoveFromOpponent;
					bestMove = options[i];
				}
				
				this.state.data[f][s] = 0;
			}
			moves[moves.length] = bestMove;
			return bestValue;
		} else {//user move min value
			let bestValue = 100;
			let bestMove = "";
			for (let i = 0; i < options.length; i++) {
			//user move min
				let keys = options[i].split("_");
				let f = Number(keys[0]);
				let s = Number(keys[1]);
				
				this.state.data[f][s] = 9;
				if (this.score() == -10) {
					bestValue = -10;
					bestMove = options[i];
					this.state.data[f][s] = 0;
					break;
				}
				let possibleBestMoveFromOpponent = this.computerMove(true, start+1, moves);
				if (possibleBestMoveFromOpponent < bestValue) {
					bestValue = possibleBestMoveFromOpponent;
					bestMove = options[i];
				}
				this.state.data[f][s] = 0;
			}
			moves[moves.length] = bestMove;
			return bestValue;
		}
			
	}
	
	score() {
		//8 scenario:
		let result = false;
		for (let i = 0; i < 3; i++) {
			let sum = this.state.data[i][0] + this.state.data[i][1] + this.state.data[i][2];
			if (sum == 3) return 10;//computer
			if (sum == 27) return -10;//user
			
			sum = this.state.data[0][i] + this.state.data[1][i] + this.state.data[2][i];
			if (sum == 3) return 10;//computer
			if (sum == 27) return -10;//user
		}
		
		let sum = this.state.data[0][0] + this.state.data[1][1] + this.state.data[2][2];
		if (sum == 3) return 10;//computer
		if (sum == 27) return -10;//user
		sum = this.state.data[0][2] + this.state.data[1][1] + this.state.data[2][0];
		if (sum == 3) return 10;//computer
		if (sum == 27) return -10;//user
		
		return 0;
	}






















}
 
export default SettingPage;