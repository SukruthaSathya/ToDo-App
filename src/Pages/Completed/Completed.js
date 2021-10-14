import React from 'react'
import { useHistory } from 'react-router'
import '../Home/Home.css'

function Completed() {
    const history=useHistory()
    const handlePage=(e)=>{
        e.preventDefault()
        return(
        history.push('/'))
    }

    return (
        <div className="top">
            <span className="back" onClick={handlePage}>Home</span>
        </div>
    )
}

export default Completed
