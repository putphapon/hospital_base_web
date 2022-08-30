import { BrowserRouter, Route, Routes } from 'react-router-dom'


// import App from "./App"
import { RequireToken } from "./components/auth"
import Login from "./components/login"
import Register from "./components/register"
import Dashboard from "./components/dashboard"
import Profiles from "./components/profile"
import { useState } from 'react'

const Apps = () => {

    // let accessType = '0' // '0' หมอ '1' คนไข้
    // let [accessType, setAccessType] = useState('-1')

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route  path="/dashboard" 
                        element={ 
                            <RequireToken> 
                                <Dashboard /> 
                            </RequireToken>
                        } 
                />
                <Route path="/profile" element={ 
                            <RequireToken> 
                                <Profiles /> 
                            </RequireToken>
                        } 
                />
            </Routes>
        </BrowserRouter>
    )
}

const MyRoutes = () => {
    return ( 
        <Apps/>
    )
}

export default MyRoutes