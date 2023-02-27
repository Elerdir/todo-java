import './App.css';
import {Container} from "@mui/material";
import Login from "./login/Login";
import Registration from "./login/Registration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./todo/TodoList";

function App() {
    return (
        <Container maxWidth="sm">
            <div>
                <Router>
                    <Routes>
                        <Route path={"/"} element={<Login/>}></Route>
                        <Route path={"/register"} element={<Registration/>}></Route>
                        <Route path={"/todos"} element={<TodoList/>}></Route>
                        <Route path={"*"} element={<h1>Page you typed in does not exist here.</h1>}></Route>
                    </Routes>
                </Router>
            </div>
        </Container>
    )
}

export default App;
