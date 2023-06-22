import App from "./App"
import { useState } from "react"


const AppWrap = () => {
    const [id,setId] = useState(0)
    const bigReset = () => {
        setId(id+1)
    }
    return (
        <App key = {id} bigReset = {bigReset}/>
    )
}

export default AppWrap