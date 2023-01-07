import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
	Chip, Stack
} from '@mui/material';

import { Mood as MoodIcon, MoodBad as MoodBadIcon } from '@mui/icons-material';


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
					{id ? <Button size="small">Delete</Button> : null}
				</CardActions>
				<CardActions>
					{!done ? <Button size="small">Mark as done</Button> : null}
				</CardActions>
			</Stack>

		</Card>
	);
}

export default TodoCard;