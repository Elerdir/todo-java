import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
	Chip, Stack
} from '@mui/material';

import { Mood as MoodIcon, MoodBad as MoodBadIcon } from '@mui/icons-material';
import {deleteTodo} from "./client";
import App from "./App";


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

const TodoCard = ({id, text, done}) => {
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
					<Button onClick={() => removeTodo(id, App.fetchTodos)} size="small">Delete</Button>
				</CardActions>
				<CardActions>
					{!done ? <Button size="small">Mark as done</Button> : null}
				</CardActions>
			</Stack>

		</Card>
	);
}

export default TodoCard;