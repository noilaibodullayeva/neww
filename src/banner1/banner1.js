import { Box, styled, Typography, Button } from "@mui/material";
import Img2 from "../images/banner bg.jpg"

const TypoBed = styled('Typography')(({ theme }) => ({
    color: '#fff',
    fontSize: '18px',
    fontFamily: 'monospace',
    fontStyle: 'normal',
    m: '2% 0 2% 0'
}));

const TypoLight = styled('Typography')(({ theme }) => ({
    color: '#fff',
    fontSize: '24px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    m: '2% 0 2% 0'
}));

const TypoGet = styled('Typography')(({ theme }) => ({
    color: '#fff',
    fontSize: '20px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    m: '2% 0 2% 0',
    width: { md: '400px', xs: '250px' }
}));

const TypoCost = styled('Typography')(({ theme }) => ({
    color: '#fff',
    fontSize: '26px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    m: '2% 0 2% 0'
}));

const Buttonn = styled('Button')(({ theme }) => ({
    color: '#fff',
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    width: '120px',
    height: '45px',
    bgColor: '#06ADFE',
    borderRadius: '3px',
    m: '2% 0 2% 0'
}));

function Banner1() {
    return (
        <Box sx={styles.bg3}>
            <Box sx={styles.boxx}>
                <TypoBed>3 Bed - 2 Bath - 2200 Sq Ft</TypoBed>
                <TypoLight>Light House NY</TypoLight>
                <TypoGet>Get Started By choosing from one of our pre-build page templates to showcase your properties</TypoGet>
                <TypoCost>$ 3,272</TypoCost>
                <Buttonn>View Property</Buttonn>
            </Box>
        </Box>
    )
}

export default Banner1

const styles = {
    bg3: {
        backgroundImage: `url("../images/banner bg.jpg")`,
        width: '100%',
        backgroundRepeat: "no-repeat",
        display: 'flex',
        flexDirection: 'column',
        height: '700px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPositionY: 1,
        justifyContent: 'center'
    },
    boxx: {
        width: '450px',
        display: 'flex',
        flexDirection: 'column',
        margin: {md: '10% 0 10% 200px', xs: '50px 0 20px 30px'}
    }
}