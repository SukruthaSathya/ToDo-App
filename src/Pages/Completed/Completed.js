import React from 'react'
import { useHistory } from 'react-router'

function Completed() {
    const history=useHistory()
    const handlePage=(e)=>{
        e.preventDefault()
        return(
        history.push('/'))
    }

    return (
        <div>
            <span onClick={handlePage}>Completed</span>
        </div>
    )
}

export default Completed
