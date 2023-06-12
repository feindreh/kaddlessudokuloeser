import SudokuSquare from "./sudokuSquare";


function Sudoku(props) {
    const {sudoku,update} = props
    return (<div id="sudoku">
        {sudoku.map((row,x) => {
            return row.map((n,y) => <SudokuSquare value = {n}update={update}key={""+x+y}x={x} y={y}/>)
        })}
    </div>);
}

export default Sudoku;

