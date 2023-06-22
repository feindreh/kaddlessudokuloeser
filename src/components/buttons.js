function Buttons(props){

    const {reset,solve,stop} = props




    return(
        <div id="buttons">
            <button type="button" onClick = {solve}>Solve</button>
            <button type="button" onClick = {stop}>Stop</button>
            <button type="button" onClick = {reset}>Reset</button>
        </div>
    )
}

export default Buttons