import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
	Chip, Stack
} from '@mui/material';

import { Mood as MoodIcon, MoodBad as MoodBadIcon } from '@mui/icons-material';
import {deleteTodo, editTodo} from "./client";
import TodoDrawerForm from "./TodoDrawerForm";
import {useState, useEffect} from 'react'


const removeTodo = (todoId, callback) => {
	deleteTodo(todoId).then(() => {
		// successNotification("Student deleted", `Student with ${todoId} was deleted`);
		// console.log(callback);
		console.log(callback);
		callback();
	}).catch(err => {
		// err.response.json().then(res => {
		// 	console.log(res);
			// errorNotification(
			// 	"There was an issue",
			// 	`${res.message} [${res.status}] [${res.error}]`
			// )
		// });
	});
}

const edit_Todo = (todo, callback) => {
	editTodo(todo).then(() => {
		// successNotification("Student deleted", `Student with ${todoId} was deleted`);
		// console.log(callback);
		console.log(callback);
		callback();
	}).catch(err => {
		// err.response.json().then(res => {
		// 	console.log(res);
			// errorNotification(
			// 	"There was an issue",
			// 	`${res.message} [${res.status}] [${res.error}]`
			// )
		// });
	});
}

function TodoCard({id, text, done, fetchTodos}) {
	const [showDrawer, setShowDrawer] = useState(false);

	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
					<Chip
						color={done ? "success" : "error"}
						icon={done ? <MoodIcon/> : <MoodBadIcon /> }
						label={`id - ${id}`}/>
				</Typography>
				<Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
					{text}
				</Typography>
			</CardContent>
			<Stack direction="row" spacing={2}>
				<CardActions>
					<Button onClick={() => removeTodo(id, fetchTodos)} size="small">Delete</Button>
				</CardActions>
				<CardActions>
					<Button
						onClick={() => setShowDrawer(!showDrawer)}
						variant="contained"
						size="small">
						Edit
					</Button>
					<TodoDrawerForm
						showDrawer={showDrawer}
						setShowDrawer={setShowDrawer}
						fetchTodos={fetchTodos}
					/>
				</CardActions>
				{/*<CardActions>*/}
				{/*	{!done ? <Button size="small">Mark as done</Button> : null}*/}
				{/*</CardActions>*/}
			</Stack>

		</Card>
	);
}

export default TodoCard;