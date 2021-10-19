import React, { useContext } from 'react'
import '../Home/Home.css'
import { AppContext } from '../../context';


function Active() {   
    const { todos, setTodos } = useContext(AppContext)
    const {handlePage}=useContext(AppContext)
    


    return (
        <div className='activeBody'>
            <div className='top'>
                <span className="back" onClick={handlePage}> Home</span>
            </div>
            <div className="head">
                <h1>Active ToDos</h1>
            </div>
            <div className="activeInput">
                
                {todos.map((obj) => {
                    if (obj.status==='false' && obj.cancel==='false'){                   
                    return ( 
                        <div className="activeInputs">
                            <div className="left">
                                <input onChange={(e) => {
                                    console.log(e.target.checked);
                                    console.log(obj);
                                    setTodos(todos.filter(obj2 => {
                                        if (obj2.id === obj.id) {
                                            obj2.status = e.target.checked
                                        }
                                        console.log(obj2);
                                        console.log(todos);
                                        console.log("this is obj",obj);
                                        return obj2
                                    }))
                                }} value={obj.status} type="checkbox" />
                                 <span class="tooltiptext">Completed</span>
                                <br></br>
                            </div>
                            <div className="listText">
                                
                            <h3> {obj.text.todo}</h3>
                            </div>
                            <div className="right">
                                <i onClick={(e) => {
                                     obj.cancel='true'
                                    setTodos(todos.filter(obj2 => {
                                        if (obj2.id === obj.id) {
                                            obj2.cancel = "true"
                                        }
                                        console.log(obj2);
                                        return obj2
                                    }))
                                }} value={obj.cancel} className="fas fa-times"></i>
                             <span class="tooltiptext">Cancel</span>

                            </div>
                        </div>
                    ) }
                    return null
                })}
            </div>


        </div>
    )
}

export default Active
