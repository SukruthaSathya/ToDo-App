import React,{useState,useEffect, useContext} from 'react'
import './Home.css';
import { useHistory} from 'react-router'
import { AppContext } from '../../context';

function Home() {
    const [todo, setTodo] = useState('')
    const [day, setDay] = useState('initial')
    const history=useHistory()
    const {todos}=useContext(AppContext)
    const {setTodos}=useContext(AppContext)
    
    
    useEffect(() => {
        const today = new Date();
        setDay(today.toLocaleDateString('en', { weekday: 'long' }));
        console.log("useEffect day called",day);
    },[day])

    useEffect(()=>{
        console.log("useEffect todo called",{todos});
       
    },[todos])

    const onAddTodo=()=>{
        setTodos([...todos,{id: Date.now(), text:{todo}, status:'false', cancel:'false'}])
        console.log(todos);
    }
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
                        <i onClick={()=> onAddTodo() }
                            className="fas fa-plus"></i>
                          
                    </div>
                    
                </div>
            </div>
            <div className="bottomDiv">
                <div className="todos">
                    <h1 className="highlight" onClick={()=>{
                        history.push('/active');
                        
                    }}  >Active ToDos</h1>
                   
                </div>
                <div className="completed">
                    <h1 className="highlight" onClick={()=>{
                        history.push('/completed')
                    }}>Completed</h1>


                </div>
                <div className="cancelled">
                    <h1 className="highlight" onClick={()=>{
                        history.push('/cancelled')
                    }}>Cancelled</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
