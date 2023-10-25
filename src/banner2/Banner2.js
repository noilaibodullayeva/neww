
import { Box, styled } from "@mui/material";
// import DemoCarousel from "./corusel";

const TypoBed = styled('Typography')(({ theme }) => ({
    color: '#222',
    fontSize: '26px',
    fontFamily: 'san-serif',
    fontStyle: 'normal',
    m: '2% 0 2% 0',
    textAlign: 'center',
    fontWeight: 'bold'
}));

const TypoGet = styled('Typography')(({ theme }) => ({
    color: '#777',
    fontSize: '20px',
    fontFamily: 'san-serif',
    fontStyle: 'normal',
    m: '2% 0 2% 0',
    width: { md: '400px', xs: '250px' },  
    textAlign: 'center',
}));

function Banner2() {
    return (
        <Box>
            <Box sx={{marginTop: {md: '5%', xs: '2%'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', mb: '2%'}}>
                <TypoBed>Display latest & Featured Properties</TypoBed>
                <TypoGet>Get Started By choosing from one of our pre-build page templates to showcase your properties</TypoGet>
            </Box>
            {/* <Box>
                <DemoCarousel/>
            </Box> */}
        </Box>
    )
}

export default Banner2