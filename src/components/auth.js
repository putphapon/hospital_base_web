import { useLocation, Navigate } from "react-router-dom"

export const setToken = (token) => {
    localStorage.setItem('temitope', token)
}

export const fetchToken = (token) => {
    return localStorage.getItem('temitope')
}

export const RequireToken = (props) => {

    let { children } = props
    let auth = fetchToken()
    let location = useLocation()

    if(!auth){
        return <Navigate to='/' state ={{from : location}}/>
    }
    return children;
}