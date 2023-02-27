import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import {Typography} from "@mui/material";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";

function Login() {
    const redirectToRegistrationPage = () => {
        window.location.href="/register";
    };

    const schema = yup.object().shape({
        email: yup.string().email().required("Email is required."),
        password: yup.string().min(1).required("Password is required."),
    });

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const sendToApi = async (jsonData) => {
        let response = await fetch("http://localhost:8082/api/v1/auth/authenticate", {
            headers: { 'Content-Type': 'application/json'},
            method: "POST",
            body: jsonData
        });

        // let jsonResponse = await response.json();
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormLabel>Email</FormLabel>
                <input {...register("email")} type="email" placeholder="johndoe@email.com"/>
                <p className="error">{errors.email?.message}</p>
                <FormLabel>Password</FormLabel>
                <input {...register("password")} type="password" placeholder="password"/>
                <p className="error">{errors.password?.message}</p>
                <br/>
                <br/>
                <input sx={{mt: 1}} type="submit"/>
            </form>


            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                    // html input attribute
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                    name="password"
                    type="password"
                    placeholder="password"
                />
            </FormControl>

            <Button sx={{ mt: 1 /* margin top */ }}>
                Log in
            </Button>
            <Typography
                fontSize="sm"
                sx={{ alignSelf: 'center' }}
            >
                Don't have an account? <button onClick={redirectToRegistrationPage}>Create one.</button>
            </Typography>

        </div>
    );
}

export default Login;