import { Box, Checkbox, FormLabel, Input, OutlinedInput, TextField, Typography } from "@mui/material"
import Img1 from "../images/banner bg.jpg"

function SignIn() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Box sx={styles.bg}>
            <Box sx={styles.login}>
                <Typography sx={{ fontSize: '20px', color: '#222', textAlign: 'center' }}>Login</Typography>
                <Typography sx={{ fontSize: '16px', color: '#777', textAlign: 'center' }}>Enter login details to get acces</Typography>
                <Box>
                    <FormLabel>Username or email adress</FormLabel>
                    <Input placeholder="Username/Email adress" width='90%' borderRadius='0' />
                    <FormLabel>Pasword</FormLabel>
                    <TextField
                        id="outlined-password-input"
                        label="Enter Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', }}> <Checkbox {...label} defaultChecked /> <Typography>Keep Me Logged In</Typography></Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'roboto',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'blue',
                                textDecoration: 'none',
                            }}
                        >Forgot Password?</Typography>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default SignIn

const styles = {
    bg: {
        backgroundImage: `url(${Img1})`,
        width: '100%',
        backgroundRepeat: "no-repeat",
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        height: '700px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPositionY: 1,
        justifyContent: 'center'
    },
    login: {
        bgColor: '#fff',
        width: '400px',
        height: '700px',
        justifyContant: 'center',
        display: 'flex',
        flexDirection: 'column'
    }
}