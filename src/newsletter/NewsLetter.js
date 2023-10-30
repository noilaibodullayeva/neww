import { TextField, Typography, Box, Button } from "@mui/material";
import Img6 from "../images/9.jpg"
function NewsLetter() {
    return (
        <Box sx={styles.bigBox}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'right',
                width: {md:'50%', xs:'100%'},
                backgroundColor: '#014273',
                height:{md:'300px', xs:'310px'}
            }}>
                <Typography sx={styles.news}>
                    Subscribe Newsletter
                </Typography>
                <Typography sx={styles.typoget}>Get Started By choosing from one of our pre-build page<br /> templates to showcase your properties</Typography>
                <Box sx={{
                    marginLeft: {md:'40%', xs:'2%'},
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'right',
                    gap: '10px',
                }}>
                    <TextField label="Enter your Email" variant="standard" sx={{
                        color: '#fff',
                        width: '410px',
                        borderBottom: '#fff'
                    }} />
                    <Button variant='contained' sx={{
                        width: '120px',
                        textAlign: 'right'
                    }}>Subscribe</Button>
                </Box>

            </Box>
            <Box sx={{
                backgroundImage: `url(${Img6})`,
                width: {md:'50%', xs:'100%'},
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                marginTop: 0,
                backgroundPositionY: 1,
                height:{md:'300px', xs:'400px'}
            }}>
            </Box>
        </Box>
    )
}

export default NewsLetter

const styles = {
    bigBox:{
        display: 'flex',
            flexDirection: { md: 'row', xs: 'column' },
            justifyContent: 'center',
            width: '100%',
            height: {md:'300px', xs:'800px'},
            marginTop:'40px'
    },
    news: {
        fontSize: '30px',
        fontWeight: 'bolder',
        fontStyle: 'normal',
        textAlign: {md:'right', xs:'left'},
        color: '#fff',
        margin:{md:'6% 5% 0 0', xs:'3% 0 0 2%'}
    },
    typoget: {
        marginTop: '10px',
        textAlign: {md:'right', xs:'left'},
        color: '#fff',
        fontSize: '18px',
        fontFamily: 'monoscape',
        fontStyle: 'normal',
        marginRight: '5%',
        marginBottom: '20px',
        marginLeft:{md:0, xs:'2%'}
    }
}