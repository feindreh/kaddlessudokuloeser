function Buttons(props){

    const {reset,solve} = props




    return(
        <div id="buttons">
            <button type="button" onClick = {solve}>Solve</button>
            <button type="button" onClick = {reset}>Reset</button>
        </div>
    )
}

export default Buttons