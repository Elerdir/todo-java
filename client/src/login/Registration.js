import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

function Registration() {
	const schema = yup.object().shape({
		firstName: yup.string().required("First name is required."),
		lastName: yup.string().required("Last name is required."),
		app: yup.string().required("Application name is required."),
		email: yup.string().email().required("Email is required."),
		password: yup.string().min(1).required("Password is required."),
		confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords have to match. ").required("Confirm password is required."),
	});

	const { register, handleSubmit, formState: {errors}} = useForm({
		resolver: yupResolver(schema)
	});

	const sendToApi = async (jsonData) => {
		let response = await fetch("api/v1/auth/register", {
			headers: { 'Content-Type': 'application/json'},
			method: "POST",
			body: jsonData
		});

		let jsonResponse = await response.json();
		// TODO: do we need to use token in todo app?
		const token = "";

		if (response.status === 200) {
			window.location.href="/todos";
		} else {
			//     todo: else exception "email with this app is already registered"
			console.log(response.status);
		}

	}

	const onSubmit = (data) => {
		sendToApi(JSON.stringify(data));
	}

	return (
		<div>
			{/*<FormControl>*/}
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormLabel>First name</FormLabel>
				<input {...register("firstName")} type="text" placeholder="john"/>
				<p className="error">{errors.firstName?.message}</p>
				<FormLabel>Last name</FormLabel>
				<input {...register("lastName")} type="text" placeholder="doe"/>
				<p className="error">{errors.lastName?.message}</p>
				<FormLabel>Application name</FormLabel>
				{/*todo: should it add user or application?*/}
				<input {...register("app")} type="text" placeholder="todo"/>
				<p className="error">{errors.app?.message}</p>
				<FormLabel>Email</FormLabel>
				<input {...register("email")} type="email" placeholder="johndoe@email.com"/>
				<p className="error">{errors.email?.message}</p>
				<FormLabel>Password</FormLabel>
				<input {...register("password")} type="password" placeholder="password"/>
				<p className="error">{errors.password?.message}</p>
				<FormLabel>Confirm password</FormLabel>
				<input {...register("confirmPassword")} type="password" placeholder="confirm password"/>
				<p className="error">{errors.confirmPassword?.message}</p>
				<br/>
				<br/>
				<input sx={{mt: 1}} type="submit"/>
			</form>
			{/*</FormControl>*/}
		</div>
	);
}

export default Registration;