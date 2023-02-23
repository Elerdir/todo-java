import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import {Typography} from "@mui/material";

function Login() {
    const redirectToRegistrationPage = () => {
        window.location.href="/register";
    };

    return (
        <div>
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