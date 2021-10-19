background image = 'https://images.unsplash.com/photo-1579280921028-21d4e5005a77?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

                       

                        
const removeTodo=(obj)=>{
        const arr=todos
        arr.splice(arr.findIndex(a=> a.id===obj.id),1);
        setTodos(arr)
    }