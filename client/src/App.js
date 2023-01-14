import {useState, useEffect} from 'react'
import {addNewTodo, deleteTodo, getAllTodos} from "./client";
import './App.css';
import TodoCard from "./TodoCard";

import {Badge, Breadcrumb, Button, Divider, Layout, Menu, Spin, Table, Tag} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {Container, Stack} from "@mui/material";
import TodoDrawerForm from "./TodoDrawerForm";

function DeleteIcon() {
    return null;
}

function App() {
  const [todos, setTodos] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
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
                    variant="contained" >
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
                        {/* <TodoCard id={t.id} todo={t.todo} done={t.done}/> */}
                        <TodoCard {...t}>
                            <Button variant="outlined" startIcon={<DeleteIcon />}>
                                Delete
                            </Button>
                        </TodoCard>
                        <br/>
                    </div>
                }) : "no todos"}
            </div>
        </Container>
    )
}

export default App;
