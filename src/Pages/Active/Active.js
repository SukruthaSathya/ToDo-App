import React from 'react'
import {useHistory} from 'react-router'

function Active() {
    const history=useHistory()
    const handlePage=(e)=>{
        e.preventDefault()
        return(
        history.push('/'))
    }

    return (
        <div>

            <span onClick={handlePage}>active</span>
        </div>
    )
}

export default Active
