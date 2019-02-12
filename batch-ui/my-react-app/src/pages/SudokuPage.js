import React, { Component } from 'react';
const all_number_set = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);

// [['5', '3', '4', '6', '7', '8', '9', '1', '2'],
//  ['6', '7', '2', '1', '9', '5', '3', '4', '8'],
//  ['1', '9', '8', '3', '4', '2', '5', '6', '7'],
//  ['8', '5', '9', '7', '6', '1', '4', '2', '3'],
//  ['4', '2', '6', '8', '5', '3', '7', '9', '1'],
//  ['7', '1', '3', '9', '2', '4', '8', '5', '6'],
//  ['9', '6', '1', '5', '3', '7', '2', '8', '4'],
//  ['2', '8', '7', '4', '1', '9', '6', '3', '5'],
//  ['3', '4', '5', '2', '8', '6', '1', '7', '9']]

class SudokuPage extends Component {
    matrix = [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]];
    constructor(props) {
        super(props);
        // const matrix = Array.from({length:9}, (_, id)=>{
        //     return Array.from({length:9}, (_, id)=>[id]);
        // })

        
        console.log(this.matrix);
        this.state = { matrix:this.matrix }
        this.solveHandler = this.solveHandler.bind(this);
        this.solveHandlerHelper = this.solveHandlerHelper.bind(this);
        this.validateSudoku = this.validateSudoku.bind(this);
        this.flip = this.flip.bind(this);
        this.reset = this.reset.bind(this);
        this.findAll = this.findAll.bind(this);
        this.findAllAvailableOptionMap = this.findAllAvailableOptionMap.bind(this);

    }

    validateSudoku() {
        
    }

    findAllAvailableOptionMap(i, j) {
        let cell = this.matrix[i][j];

        if (cell === '.') {
            let optionSet = new Set();
            Array(9).fill(1).forEach((_, k)=>{
                this.matrix[i][k] === '.' ? optionSet.has('.') : optionSet.add(this.matrix[i][k]);
            });

            Array(9).fill(1).forEach((_, k)=>{
                this.matrix[k][j] === '.' ? optionSet.has('.') : optionSet.add(this.matrix[k][j]);
            });

            // i/3
            Array(3).fill(1).forEach((_,tempI)=>{
                Array(3).fill(1).forEach((_,tempJ)=>{
                    let cell = this.matrix[tempI + Math.floor(i/3) * 3][tempJ + Math.floor(j/3) * 3];
                    cell === '.' ? optionSet.has('.') : optionSet.add(cell);
                });
            });

            let difference = new Set([...all_number_set].filter((item)=> !optionSet.has(item)));
            return difference;
        }        
    }


    findAll(i, j) {
        let cell = this.matrix[i][j];

        let optionSet = new Set();
        Array(9).fill(1).forEach((_, k)=>{
            this.matrix[i][k] === '.' ? optionSet.has('.') : optionSet.add(this.matrix[i][k]);
        });

        Array(9).fill(1).forEach((_, k)=>{
            this.matrix[k][j] === '.' ? optionSet.has('.') : optionSet.add(this.matrix[k][j]);
        });

        // i/3
        Array(3).fill(1).forEach((_,tempI)=>{
            Array(3).fill(1).forEach((_,tempJ)=>{
                let cell = this.matrix[tempI + Math.floor(i/3) * 3][tempJ + Math.floor(j/3) * 3];
                cell === '.' ? optionSet.has('.') : optionSet.add(cell);
            });
        });

        let difference = new Set([...all_number_set].filter((item)=> !optionSet.has(item)));
        return difference;
      
    }


    solveHandler() {
        // let newmatrix = JSON.parse(JSON.stringify(this.state.matrix));
        // newmatrix[0][0] = 'G'
        // 

        let backup = JSON.parse(JSON.stringify(this.matrix));   
        
        if (this.solveHandlerHelper(null) == false) {
            this.setState({ matrix: backup});
            window.M.toast({html: 'No Solution!'})

        } else {
            window.M.toast({html: 'Found Solution!'})
        }
        // console.log(mymap);
        // console.log(mymap.get('0_1'));
        
    }
    solveHandlerHelper(options) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let cell = this.matrix[i][j];
                if (cell === '.') {
                    options = this.findAllAvailableOptionMap(i, j);
                    if (options == null || options.size === 0) return false;

                    options = [...options];
                    for (var temp = 0; temp < options.length; temp ++) {
                        console.log('loop ', i , j, options, options[temp]);
                        this.matrix[i][j] = options[temp];

                        let newmatrix = JSON.parse(JSON.stringify(this.matrix));                        
                        
                        // let mypromise =new Promise(resolve => {
                        //     setTimeout(() => {
                        //         this.setState({matrix:newmatrix}, () => resolve());
                        //     }, 3000);
                        //     });

                        // await mypromise;

                        this.setState({matrix:newmatrix});
                        
                        let newoptions = this.findAllAvailableOptionMap(i, j);
                        let result = this.solveHandlerHelper(newoptions);
                        if (result == true) {
                            console.log('find ', i , j, options, newoptions);
                            return true;
                        } else {
                            console.log('cant find ', i , j, options, newoptions);
                        }
                    }
                    
                    this.matrix[i][j] = '.';
                    console.log('run out of options ', i , j, options);
                    return false;
                }


                
            }
        }

        return true;
        
    }

    flip(i,j) {
        let options = this.findAll(i,j);
        if (options == null || options.size === 0 ) {
            return;
        } 
        options.add('.');
        options.add(this.matrix[i][j]);
        
        
        console.log(options);
        let arr = [...options].sort();
        let newval = this.matrix[i][j];
        for (let tem = 0; tem < arr.length; tem ++) {
            console.log(this.matrix[i][j], arr[tem] === this.matrix[i][j], arr[tem], tem)
            if (arr[tem] === this.matrix[i][j]) {
                if (tem == arr.length - 1) {
                    newval = arr[0];
                } else {
                    newval = arr[tem+1];
                }
                break;
            }
        }

        this.matrix[i][j] = newval;
        let newmatrix = JSON.parse(JSON.stringify(this.matrix));        
        this.setState({matrix:newmatrix});
        
    }

    reset() {
        this.matrix = [
            ["5","3",".",".","7",".",".",".","."],
            ["6",".",".","1","9","5",".",".","."],
            [".","9","8",".",".",".",".","6","."],
            ["8",".",".",".","6",".",".",".","3"],
            ["4",".",".","8",".","3",".",".","1"],
            ["7",".",".",".","2",".",".",".","6"],
            [".","6",".",".",".",".","2","8","."],
            [".",".",".","4","1","9",".",".","5"],
            [".",".",".",".","8",".",".","7","9"]];
        this.setState({matrix:this.matrix});
    }

    render() {
            
        return <div>
            <a className="waves-effect waves-light btn" onClick={this.solveHandler}>Start Solving Sudoku</a>
            <a className="waves-effect waves-light btn" style={{marginLeft:'30px'}} onClick={this.reset}>Reset</a>
            <br/><br/>

            {   
            this.state.matrix.map((row,i) => {
                return <div className="row" key={'row'+i}>
                    {row.map( (cell,j) =>  <div className='squareStyle left' key={'cell' +j} onClick={()=>this.flip(i,j)}>{cell}</div> )}
                </div>
            })
            }
        
        </div>;
    }
}
 
export default SudokuPage;