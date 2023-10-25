import { Box, Card, Divider, styled, Typography } from "@mui/material"
import ImgBg from "../images/4.webp"
import { Domain, Home, MapsHomeWork } from "@mui/icons-material"


const Help = styled('Typography')(({ theme }) => ({
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'monoscape',
    fontSize: '35px',
    textAlign: 'center',
    mt: '3%'
}))

const Bg = styled('Box')(({ theme }) => ({
    color: '#fff',
    fontFamily: 'monoscape',
    fontSize: '25px',
    textAlign: 'center',
    mt: '3%',
    backgroundColor: '#00A0EB',
    justifyContent: 'center',
    width: {md:'900px', xs:'90%'},
    height: {md:'320px', xs:'900px'},
    margin: {md: '2% 20.3% 0 20.3%', xs: '2% 10px 0 10px'},
    display: 'flex',
    flexDirection: { md: 'row', xs: 'column' },
    // justifyContent: 'space-between'
}))

const CardSt = styled('Card')(({ theme }) => ({
    color: '#fff',
    fontFamily: 'monoscape',
    fontSize: '25px',
    textAlign: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    width: '300px',
    height: '280px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}))

const Sell = styled('Typography')(({ theme }) => ({
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'monoscape',
    fontSize: '20px',
    textAlign: 'center',
    mb:'1%'
}))

const TypoGet = styled('Typography')(({ theme }) => ({
    color: '#fff',
    fontSize: '14px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    m: '2% 0 2% 0',
    width: { md: '200px', xs: '250px' },
    textAlign: 'center',
    fontWeight:200
}));

function Banner3() {
    return (
        <Box sx={styles.bg6}>
            <Help>How we help people?</Help>
            <Bg>
                <CardSt>
                    <Home sx={{m:'0 0 5px 100px', fontSize:'90px'}} />
                    <Sell>Sell Home or Office</Sell>
                    <TypoGet>Get Started By choosing from one of our pre-build page templates to showcase your properties</TypoGet>
                </CardSt>
                <Divider/>
                <CardSt>
                    <Domain sx={{m:'0 0 5px 100px', fontSize:'90px'}} />
                    <Sell>Rent Home or Office</Sell>
                    <TypoGet>Get Started By choosing from one of our pre-build page templates to showcase your properties</TypoGet>
                </CardSt>
                <CardSt>
                    <MapsHomeWork sx={{m:'0 0 5px 100px', fontSize:'90px'}}/>
                    <Sell>Find Next</Sell>
                    <TypoGet>Get Started By choosing from one of our pre-build page templates to showcase your properties</TypoGet>
                </CardSt>
            </Bg>
        </Box>
    )
}

export default Banner3

const styles = {
    bg6: {
        backgroundImage: `url(${ImgBg})`,
        width: '100%',
        backgroundRepeat: "no-repeat",
        display: 'flex',
        flexDirection: 'column',
        height: '500px',
        backgroundSize: "cover",
        marginTop: 0,
        backgroundPositionY: 1,
        justifyContent: 'center'
    }
}