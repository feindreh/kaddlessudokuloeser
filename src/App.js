import "./css/app.css"
import Sudoku from "./components/sudoku";
import Buttons from "./components/buttons";
import { useState } from "react";
import SudokuSolver from "./sudokuSolver";
import makeEmptySudoku from "./helper";

function App(props) {

  const {bigReset} = props

  const [sudoku,setSudoku] = useState(makeEmptySudoku())
  const [solving,setSolving] = useState(false)


  const updateSudoku = (x,y,value) => {
    const newSudoku = [...sudoku]
    newSudoku[x][y] = value
    setSudoku(newSudoku) 
  }
  const resetSudoku = () => {
      bigReset()
  }
  const refreshSudoku = () => {
    const newSudoku = [...sudoku]
    setSudoku(newSudoku) 
  }
  const solveSudoku = async () => {
    if(solving){return}
    setSolving(true)
    // check input
    const viable = new Set()
    for(let i = 1; i<=9;i++){
        viable.add(""+i)
    }
    viable.add("")
    for(let x = 0; x < sudoku.length;x++){
      for(let y = 0;y < sudoku.length;y++){
        const val = sudoku[x][y]
        if( viable.has(val) === false){console.log("wrong at",x,y);return}
      }
    }
    await SudokuSolver(sudoku,refreshSudoku)
    setSolving(false)
    setSudoku([...sudoku])
  }
  


  return (
    <div id="wrap">
      <Sudoku solving = {solving} sudoku = {sudoku} update = {updateSudoku}/>
      <Buttons reset = {resetSudoku} solve = {solveSudoku}/>
    </div>
  );

  
}

export default App;
