import { Navigate } from "react-router-dom"


let Protect = ({children})=>{
    let isAuth = localStorage.getItem('isAuth')

    if(isAuth){
        return <Navigate to='/login' />
    }
    else{
        return children;
    }
}

export default Protect