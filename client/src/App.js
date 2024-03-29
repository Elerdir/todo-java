import './App.css';
import {Container} from "@mui/material";
import Login from "./login/Login";
import Registration from "./login/Registration";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import TodoList from "./todo/TodoList";
import {getToken} from "./localStorage/LocalStorage";
import {getListOfAppUsers} from "./client";

function isTokenExisting() {
    return getToken() !== null;
}

function App() {
    return (
        <Container maxWidth="sm">
            <div>
                <Router>
                    <Routes>
                        <Route path={"/login"} element={<Login/>}></Route>
                        <Route path={"/register"} element={<Registration/>}></Route>
                        <Route path={"/list-of-app-users"} element={getListOfAppUsers ? getListOfAppUsers(getToken()) : "není"}></Route>
                        <Route path={"/"} element={isTokenExisting() ? <TodoList /> : <Navigate to={"/login"}/>}></Route>
                        <Route path={"*"} element={<h1>Page you typed in does not exist here.</h1>}></Route>
                    </Routes>
                </Router>
            </div>
        </Container>
    )
}

export default App;
