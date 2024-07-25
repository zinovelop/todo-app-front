import './TodoApp.css'
import { Route,Routes, BrowserRouter} from 'react-router-dom'
import React from 'react'
import ListTodos from './ListTodos'
import Logout from './Logout'
import Header from "./Header";
import Login from "./Login";
import Error from "./Error";
import Footer from "./Footer";
import Welcome from "./Welcome";
import AuthProvider from "./security/AuthContext";



export default  function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/welcome/:username' element={<Welcome />} />
                        <Route path='/todos' element={<ListTodos />} />
                        <Route path='/logout' element={<Logout />} />

                        <Route path='/*' element={<Error />} />

                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}

