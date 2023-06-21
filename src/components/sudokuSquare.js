

function SudokuSquare(props) {

  const {x,y,update,value} = props

  const handleChange = (e) => {
    let string = e.target.value
    if(string.length !== 1){
      string = string[string.length-1]
    }
    if(string === undefined){string = ""}
    update(x,y,string)
  }
  let xStart = x+1 + Math.floor(x/3)
  let xEnd = x+2 + Math.floor(x/3)
  let yStart = y+1 + Math.floor(y/3)
  let yEnd = y+2 + Math.floor(y/3)
  return (<input onChange = {handleChange} className = "sqr" value={value} style={{ gridArea:`${xStart}/${yStart}/${xEnd}/${yEnd}`}}/>);
}
export default SudokuSquare;