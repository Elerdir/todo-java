import {useState, useEffect} from 'react'
import {getAllTodos} from "./client";
import './App.css';
import TodoCard from "./TodoCard";

import {Button} from "antd";
import {Container} from "@mui/material";
import TodoDrawerForm from "./TodoDrawerForm";

import States from "./states/States";

function App() {
    const [todos, setTodos] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [showDrawer, setShowDrawer] = useState(false);

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
                <h1>List of todos</h1>
                <Button
                    onClick={() => setShowDrawer(!showDrawer)}
                    variant="contained">
                    New todo
                </Button>
                <TodoDrawerForm
                    showDrawer={showDrawer}
                    setShowDrawer={setShowDrawer}
                    fetchTodos={fetchTodos}
                />
                {/*<Empty/>*/}
                {todos && todos.length > 0 ? todos.map(t => {
                    return <div>
                        <TodoCard id={t.id} text={t.text} state={t.state} fetchTodos={fetchTodos}/>
                        {/*<TodoCard {...t}>*/}
                        {/*<Button variant="outlined" startIcon={<DeleteIcon />}>*/}
                        {/*    Delete*/}
                        {/*</Button>*/}
                        {/*</TodoCard>*/}
                        <br/>
                    </div>
                }) : "no todos"}
            </div>
        </Container>
    )
}

export default App;
