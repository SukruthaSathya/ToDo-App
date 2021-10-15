import React, { useContext, useEffect } from 'react'
import '../Home/Home.css'
import { useHistory } from 'react-router'
import { AppContext } from '../../context';


function Active() {
    const history = useHistory()
    const handlePage = (e) => {
        e.preventDefault()
        return (
            history.push('/'))
    }
    const { todos } = useContext(AppContext)

    useEffect(() => {
        console.log(todos);
    }, [todos])


    return (
        <div className='activeBody'>
            <div className='top'>
                <span className="back" onClick={handlePage}> Home</span>
            </div>
            <div className="head">
               <h1>Active ToDos</h1>
            </div>
            <div className="input">
                <div className="inputs">
                    <div className="left">
                        <input type="checkbox" />
                    </div>
                    <div className="listText">
                        <h3>Hello</h3>
                    </div>
                    <div className="right">
                    <i className="fas fa-times"></i>
                    </div>
                </div>
            </div>
                
        
        </div>
    )
}

export default Active
