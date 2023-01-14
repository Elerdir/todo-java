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
					<Button onClick={() => deleteTodo()} size="small">Delete</Button>
				</CardActions>
				<CardActions>
					{!done ? <Button size="small">Mark as done</Button> : null}
				</CardActions>
			</Stack>

		</Card>
	);
}

export default TodoCard;