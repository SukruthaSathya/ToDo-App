import {createContext,useState} from 'react'
import { useHistory } from 'react-router'


export const AppContext = createContext(null)

function Post({children}){
    const [todos, setTodos] = useState([])
    const history=useHistory()
    const handlePage = (e) => {
        e.preventDefault()

        return (
            history.push('/'))
    }

    return(
   <AppContext.Provider value={{todos,setTodos,handlePage}}>
       {children}
   </AppContext.Provider>
    )
}

export default Post