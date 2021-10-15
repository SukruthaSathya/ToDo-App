import {createContext,useState} from 'react'


export const AppContext = createContext(null)

function Post({children}){
    const [todos, setTodos] = useState([])

    return(
   <AppContext.Provider value={{todos,setTodos}}>
       {children}
   </AppContext.Provider>
    )
}

export default Post