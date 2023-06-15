import "./app.css"
import Sudoku from "./sudoku";
import Buttons from "./buttons";
import { useState } from "react";


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
    await SudokuSolver(sudoku)
    setSolving(false)
    setSudoku([...sudoku])
  }
  async function SudokuSolver(grid){
    const validMap = (map) => {
      for (const key in map) {
        if (map[key] > 1) { return false; }
      }
      return true;
    };
    function isValid(x, y) {
      // check x
      const xmap = {};
      for (let i = 0; i < 9; i++) {
        if (grid[i][y] === '') { continue; }
        xmap[grid[i][y]] ? xmap[grid[i][y]]++ : xmap[grid[i][y]] = 1;
      }
      if (validMap(xmap) === false) { return false; }
  
      // check y
  
      const ymap = {};
      for (let i = 0; i < 9; i++) {
        if (grid[x][i] === '') { continue; }
        ymap[grid[x][i]] ? ymap[grid[x][i]]++ : ymap[grid[x][i]] = 1;
      }
      if (validMap(ymap) === false) { return false; }
  
      // check box
  
      const xStart = Math.floor(x / 3) * 3;
      const yStart = Math.floor(y / 3) * 3;
      const bmap = {};
      for (let i = xStart; i < xStart + 3; i++) {
        for (let j = yStart; j < yStart + 3; j++) {
          if (grid[i][j] === '') { continue; }
          bmap[grid[i][j]] ? bmap[grid[i][j]]++ : bmap[grid[i][j]] = 1;
        }
      }
      if (validMap(bmap) === false) { return false; }
  
      return true;
    }
    const bt = async(x, y) => {
      if (y >= 9) { return true; }
      if (x >= grid.length) { return  await bt(0, y + 1); }
      if (grid[x][y] !== '') { return  await bt(x + 1, y); }
      for (let i = 1; i <= 9; i++) {
        function timeout(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }
        grid[x][y] = `${i}`;
        refreshSudoku()
        await timeout(10)
        if (isValid(x, y) === false) { continue; }
        
        if ( await bt(x + 1, y)) { return true; }
      }
      grid[x][y] = '';
      return false;
    };
    await bt(0, 0);
  };







  return (
    <div id="wrap">
      <Sudoku sudoku = {sudoku} update = {updateSudoku}/>
      <Buttons reset = {resetSudoku} solve = {solveSudoku}/>
    </div>
  );

  
}

export default App;
