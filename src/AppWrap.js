import App from "./App"
import { useState } from "react"
import makeEmptySudoku from "./helper"

const AppWrap = () => {

    const [id,setId] = useState(0)
    const [startSudoku,setStartSudoku] = useState(makeEmptySudoku())

    const hardReset = () => {
        setId(id+1)
        setStartSudoku(makeEmptySudoku())
    }
    const softReset = (old) => {
        setId(id+1)
        setStartSudoku(old.map((row) => row.map((n) => n)))
    }

    return (
        <App key = {id} hardReset = {hardReset} softReset = {softReset}  startSudoku = {startSudoku}/>
    )
}

export default AppWrap