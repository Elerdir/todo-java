import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

function Registration({register, setRegister}) {
    return (
        <div>
            <FormControl>
                <FormLabel>First name</FormLabel>
                <Input
                    name="firstName"
                    type="text"
                    placeholder="john"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Last name</FormLabel>
                <Input
                    name="lastName"
                    type="text"
                    placeholder="doe"
                />
            </FormControl>
            {/*Todo: make it a list*/}
            <FormControl>
                <FormLabel>Application</FormLabel>
                <Input
                    // html input attribute
                    name="application"
                    type="text"
                    placeholder="todo"
                />
            </FormControl>
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
                Sign up
            </Button>
        </div>
    );

}

export default Registration;