import React,{useState,useEffect} from 'react'
import './Home.css';

function Home() {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')
    const [day, setDay] = useState('')

    useEffect(() => {
        const today = new Date();
        setDay(today.toLocaleDateString('en', { weekday: 'long' }));
        console.log(day);
    }, [])
    return (
        <div className="app">
            <div className="topDiv">
                <div className="mainHeading">
                    <h1>ToDo List</h1>
                </div>
                <div className="subHeading">
                    <br />
                    <h2>Whoop, it's {day} 🌝 ☕ </h2>
                </div>
                <div className="input">
                    <div className="inputs">
                        <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
                        <i onClick={() => setTodos([...todos, { id: Date.now(), text: todo, status: false }])} className="fas fa-plus"></i>
                    </div>
                </div>
            </div>
            <div className="bottomDiv">
                <div className="todos">
                    <h1 className="highlight">Active ToDos</h1>
                    {todos.map((obj) => {

                        return (
                            <div className="todo">
                                <div className="left">
                                    <input onChange={(e) => {
                                        console.log(e.target.checked);
                                        console.log(obj);
                                        setTodos(todos.filter(obj2 => {
                                            if (obj2.id === obj.id) {
                                                obj2.status = e.target.checked
                                            }
                                            console.log(obj2);
                                            return obj2
                                        }))
                                    }} value={obj.status} type="checkbox" name="" id="" />
                                </div>
                                <div className="right">
                                    <i className="fas fa-times"></i>
                                </div>
                            </div>
                        )
                    })}

                    {todos.map((obj) => {
                        if (obj.status) {
                            return (<h1>{obj.text}</h1>)
                        }
                        return null
                    })}
                </div>
                <div className="completed">
                    <h1 className="highlight">Completed</h1>


                </div>
                <div className="cancelled">
                    <h1 className="highlight">Cancelled</h1>
                </div>
            </div>
        </div>
    )
}

export default Home