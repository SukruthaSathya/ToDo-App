import React, { useContext } from 'react'
import { AppContext } from '../../context'
import '../Home/Home.css'


function Cancelled() {

    const { todos, setTodos, handlePage } = useContext(AppContext)

    return (
        <div className="activeBody">
            <div className='top'>
                <span className="back" onClick={handlePage}>Home</span>
            </div>
            <div className="head">
                <h1>Cancelled</h1>
            </div>
            <div className="activeInput">
                {todos.map((obj) => {
                    if (obj.cancel === "true") {
                        return (
                            <div className="activeInputs">
                                <div className="listText">
                                    <h3>{obj.text.todo}</h3>
                                </div>
                                <div className="right">
                                    <i onClick={() => {
                                        setTodos(todos.filter(obj2 => {
                                            if (obj2.id === obj.id) {
                                                obj2 = null
                                            }
                                            return obj2
                                        }))
                                    }} className="fas fa-times"></i>
                                    <span class="tooltiptext">Remove</span>
                                </div>
                            </div>
                        )
                    }
                    return null
                })}
            </div>
        </div>
    )
}

export default Cancelled
