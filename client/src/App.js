import {useState, useEffect} from 'react'
import {getAllTodos} from "./client";
import './App.css';
import TodoCard from "./TodoCard";

import {Button} from "antd";
import {Container} from "@mui/material";
import TodoDrawerForm from "./TodoDrawerForm";

import Login from "./login/Login";

import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';

import { Route, useNavigate, Link, Routes } from "react-router-dom";

function App() {
    const [todos, setTodos] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [showDrawer, setShowDrawer] = useState(false);
    const [login, setLogin] = useState(false);

    // const navigate = useNavigate();
    const redirectToLoginPage = () => {
        //Redirect to the python page
        // navigate("/login");
        window.location.href="/login"
    };

    const fetchTodos = () =>
        getAllTodos()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTodos(data);
            }).catch(err => {
            console.log(err.response);
            err.response.json().then(res => {
                console.log(res);
                //errorNotification("nastala chybka", `${res.message} [${res.status}]`);
            });
        }).finally(() => setFetching(false));

    useEffect(() => {
        console.log("component is mounted");
        fetchTodos();
    }, []);

    // if (todos.length <= 0) {
    //   return "no data";
    // }

    return (
        <Container maxWidth="sm">
            <div>

                <Login/>

                {/*<CssVarsProvider>*/}
                {/*    <Sheet variant="outlined">*/}
                {/*        <div>*/}
                {/*            <Typography level="h4" component="h1">*/}
                {/*                Welcome!*/}
                {/*            </Typography>*/}
                {/*            <Typography level="body2">Sign in to continue.</Typography>*/}
                {/*        </div>*/}

                {/*    </Sheet>*/}
                {/*</CssVarsProvider>*/}

                {/*<br/>*/}
                {/*<br/>*/}
                {/*todo: we dont need this*/}
                {/*<Button*/}
                {/*    onClick={redirectToLoginPage}*/}
                {/*    variant="contained">*/}
                {/*    Login*/}
                {/*</Button>*/}


                {/*<Routes>*/}
                {/*    <Route path="/login" element={<Login />} />*/}
                {/*    /!*<Route path="/" element={<Home />} />*!/*/}
                {/*</Routes>*/}
                <br/>
                <br/>
                <br/>

                {/*todo: create a condition*/}
                {/*<h1>List of todos</h1>*/}
                {/*<Button*/}
                {/*    onClick={() => setShowDrawer(!showDrawer)}*/}
                {/*    variant="contained">*/}
                {/*    New todo*/}
                {/*</Button>*/}
                {/*<TodoDrawerForm*/}
                {/*    showDrawer={showDrawer}*/}
                {/*    setShowDrawer={setShowDrawer}*/}
                {/*    fetchTodos={fetchTodos}*/}
                {/*/>*/}
                {/*/!*<Empty/>*!/*/}
                {/*{todos && todos.length > 0 ? todos.map(t => {*/}
                {/*    return <div>*/}
                {/*        <TodoCard id={t.id} text={t.text} done={t.done} fetchTodos={fetchTodos}/>*/}
                {/*        /!*<TodoCard {...t}>*!/*/}
                {/*        /!*<Button variant="outlined" startIcon={<DeleteIcon />}>*!/*/}
                {/*        /!*    Delete*!/*/}
                {/*        /!*</Button>*!/*/}
                {/*        /!*</TodoCard>*!/*/}
                {/*        <br/>*/}
                {/*    </div>*/}
                {/*}) : "no todos"}*/}
            </div>
        </Container>
    )
}

export default App;
