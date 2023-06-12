

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

  return (<input onChange = {handleChange} className = "sqr" value={value}/>);
}
export default SudokuSquare;