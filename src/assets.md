background image = 'https://images.unsplash.com/photo-1579280921028-21d4e5005a77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

                       

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
                                            console.log(todos);
                                            console.log(obj.status);
                                            return obj2
                                        }))
                                    }} value={obj.status} type="checkbox" name="" id="" />
                                </div>
                                <div className="list"><h3>{obj.text}</h3></div>
                                <div className="right">
                                    <i className="fas fa-times"></i>
                                </div>
                            </div>
                        )
                    })}

    ///////////////for completed//////////////
                    {todos.map((obj) => {
                        if (obj.status) {
                            return (<h1>{obj.text}</h1>)
                        }
                        return null
                    })}