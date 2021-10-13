import React from 'react'
import { useHistory } from 'react-router'

function Cancelled() {
    const history=useHistory()
    const handlePage=(e)=>{
        e.preventDefault()
        return(
        history.push('/'))
    }

    return (
        <div>
            <span onClick={handlePage}>Cancelled</span>
        </div>
    )
}

export default Cancelled
