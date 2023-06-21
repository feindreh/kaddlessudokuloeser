import "./app.css"
import Sudoku from "./sudoku";
import Buttons from "./buttons";
import { useState } from "react";
import SudokuSolver from "./sudokuSolver";

const makeEmptySudoku = () => {
  const arr = []
  for(let i = 0; i<9;i++){
      const row = []
      for(let j = 0; j<9 ; j++){
          row.push("")
      }
      arr.push(row)
  }
  return arr
}

const viable = new Set()
for(let i = 1; i<=9;i++){
    viable.add(""+i)
}
viable.add("")

function App() {

  const [sudoku,setSudoku] = useState(makeEmptySudoku())
  const [solving,setSolving] = useState(false)


  const updateSudoku = (x,y,value) => {
    const newSudoku = [...sudoku]
    newSudoku[x][y] = value
    setSudoku(newSudoku) 
  }
  const resetSudoku = () => {
    if(solving){return}
    setSudoku(makeEmptySudoku())
  }
  const refreshSudoku = () => {
    const newSudoku = [...sudoku]
    setSudoku(newSudoku) 
  }
  const solveSudoku = async () => {
    if(solving){console.log("blocked");return}
    setSolving(true)
    // check input
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
