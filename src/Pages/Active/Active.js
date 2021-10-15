import React,{useContext, useEffect} from 'react'
import '../Home/Home.css'
import {useHistory} from 'react-router'
import { AppContext } from '../../context';


function Active() {
    const history=useHistory()
    const handlePage=(e)=>{
        e.preventDefault()
        return(
        history.push('/'))
    }
    const {todos}=useContext(AppContext)
    
    useEffect(()=>{
        console.log(todos);
    },[todos])
    

    return (
        <div>
        <div className='top'>
            <span className="back" onClick={handlePage}> Home</span>
        </div>
        <div className="activeTodoList">
            <h1>Text here{todos.text}</h1>
        </div>
        </div>
    )
}

export default Active
