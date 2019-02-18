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
                    this.computerMove();
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
    
	
	computerMove() {
		//offence
		let sum1 = this.state.data[0][0] + this.state.data[1][1] + this.state.data[2][2];
		if (sum1 == 2) {
			if (this.state.data[0][0] == 0) this.generateMove(0,0,1);
			if (this.state.data[1][1] == 0) this.generateMove(1,1,1);
			if (this.state.data[2][2] == 0) this.generateMove(2,2,1);
			return;
		} 
		
		let sum2 = this.state.data[0][2] + this.state.data[1][1] + this.state.data[2][0];
		if (sum2 == 2) {
			if (this.state.data[0][2] == 0) this.generateMove(0,2,1);
			if (this.state.data[1][1] == 0) this.generateMove(1,1,1);
			if (this.state.data[2][0] == 0) this.generateMove(2,0,1);
			return;
		} 
		
		for (let i = 0; i < 3; i++) {
			let sum3 = this.state.data[i][0] + this.state.data[i][1] + this.state.data[i][2];
			if (sum3 == 2) {
				if (this.state.data[i][0] == 0) this.generateMove(i,0,1);
				if (this.state.data[i][1] == 0) this.generateMove(i,1,1);
				if (this.state.data[i][2]== 0) this.generateMove(i,2,1);
				return;
			}
			
			let sum4 = this.state.data[0][i] + this.state.data[1][i] + this.state.data[2][i];
			if (sum4 == 2) {
				if (this.state.data[0][i]== 0) this.generateMove(0,i,1);
				if (this.state.data[1][i] == 0) this.generateMove(1,i,1);
				if (this.state.data[2][i] == 0) this.generateMove(2,i,1);
				return;
			}
		}
		
		//defence move
		sum1 = this.state.data[0][0] + this.state.data[1][1] + this.state.data[2][2];
		if (sum1 == 18) {
			if (this.state.data[0][0] == 0) this.generateMove(0,0,1);
			if (this.state.data[1][1] == 0) this.generateMove(1,1,1);
			if (this.state.data[2][2] == 0) this.generateMove(2,2,1);
			return;
		} 
		
		sum2 = this.state.data[0][2] + this.state.data[1][1] + this.state.data[2][0];
		if (sum2 == 18) {
			if (this.state.data[0][2] == 0) this.generateMove(0,2,1);
			if (this.state.data[1][1] == 0) this.generateMove(1,1,1);
			if (this.state.data[2][0] == 0) this.generateMove(2,0,1);
			return;
		} 
		
		for (let i = 0; i < 3; i++) {
			let sum3 = this.state.data[i][0] + this.state.data[i][1] + this.state.data[i][2];
			if (sum3 == 18) {
				if (this.state.data[i][0] == 0) this.generateMove(i,0,1);
				if (this.state.data[i][1] == 0) this.generateMove(i,1,1);
				if (this.state.data[i][2]== 0) this.generateMove(i,2,1);
				return;
			}
			
			let sum4 = this.state.data[0][i] + this.state.data[1][i] + this.state.data[2][i];
			if (sum4 == 18) {
				if (this.state.data[0][i]== 0) this.generateMove(0,i,1);
				if (this.state.data[1][i] == 0) this.generateMove(1,i,1);
				if (this.state.data[2][i] == 0) this.generateMove(2,i,1);
				return;
			}
		}
		
		sum1 = this.state.data[0][0] + this.state.data[1][1] + this.state.data[2][2];
		if (sum1 == 0) {
			this.generateMove(0,0,1);
			return;
		} else if (sum1 == 1 ) {
			if (this.state.data[2][2] == 0) this.generateMove(2,2,1);else  this.generateMove(1,1,1);
			return;
		} 
		
		sum2 = this.state.data[0][2] + this.state.data[1][1] + this.state.data[2][0];
		if (sum2 == 0) {
			this.generateMove(0,2,1);;
			return;
		} else if (sum2 == 1) {
			if (this.state.data[2][0] == 0) this.generateMove(2,0,1); else  this.generateMove(1,1,1);
			return;
		}
		
		for (let i = 0; i < 3; i++) {
			let sum3 = this.state.data[i][0] + this.state.data[i][1] + this.state.data[i][2];
			if (sum3 == 0) {
				this.generateMove(i,0,1);
				return;
			}	 else if (sum3 == 1 ) {
				if (this.state.data[i][2]== 0) this.generateMove(i,2,1);else  this.generateMove(i,1,1);
				return;
			}
			
			let sum4 = this.state.data[0][i] + this.state.data[1][i] + this.state.data[2][i];
			if (sum4 == 0) {
				this.generateMove(0,i,1);
				return;
			}	 else if (sum4 == 1 ) {
				if (this.state.data[2][i] == 0) this.generateMove(2,i,1); else  this.generateMove(1,i,1);
				return;
			}
		}
		
		for (let i = 0; i < this.state.data.length; i++) {
			for (let j = 0; j < this.state.data[i].length; j++) {
				if (this.state.data[i][j] == 0) {
					this.generateMove(i,j,1);
					return;
				}
			}
        } 
	}























}
 
export default SettingPage;