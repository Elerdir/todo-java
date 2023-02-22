import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import {Typography} from "@mui/material";
import Registration from "./Registration";


function Login({login, setLogin}) {
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
                endDecorator={<Link href="/sign-up">Sign up</Link>}
                fontSize="sm"
                sx={{ alignSelf: 'center' }}
            >
                {/*todo: how to redirect?*/}
                {/*Don't have an account? <button onClick={}>Create one.</button>*/}
            </Typography>

        </div>
    );

}

export default Login;