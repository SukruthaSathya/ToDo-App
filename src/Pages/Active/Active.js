import React from 'react'
import '../Home/Home.css'
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
        <div className='top'>
            <span className="back" onClick={handlePage}> Home</span>
        </div>
        <div>
            
        </div>
        </div>
    )
}

export default Active
