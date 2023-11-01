import { Home, HomeMax, HomeMini, LocalPostOffice, Villa } from "@mui/icons-material";
import { Box, Button, IconButton, Typography, styled } from "@mui/material";

function Explore() {

    const ByExplore = styled('Typography')(({ theme }) => ({
        color: '#222',
        fontWeight: 'bold',
        fontFamily: 'monoscape',
        fontSize: '35px',
        display: 'flex',
        justifyContent: 'left',
        width: '220px'
    }))

    const TypoGet = styled('Typography')(({ theme }) => ({
        color: '#777',
        fontSize: '18px',
        fontFamily: 'monoscape',
        fontStyle: 'normal',
        width: '359px',
        textAlign: 'left',
    }));

    return (
        <Box sx={styles.boxx}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '15px',
                marginLeft:{md:0, xs:'50px'}
            }}>
                <ByExplore>
                    Explore by Property Type
                </ByExplore>
                <TypoGet>Get Started By choosing from one of our pre-build page templates to showcase your properties</TypoGet>
                <Button variant="contained" sx={styles.button}>View All Preperty</Button>
            </Box>
            <Box sx={{
                display: {md:'flex', xs:'none'},
                flexDirection: { md: 'row', xs: 'column' },
                justifyContent: 'center',
                gap: '35px',
                width: ' 550px',
                backgroundColor: '#fff',
                height: '150px',
                marginTop: '5%'
            }}>
                <Box color='#0B4877' display='flex' flexDirection='column' justifyContent='center'>
                    <Home  sx={{ m: '0 0 5px 30px', fontSize: '70px' }} />
                    <Typography>Home & Apartment</Typography>
                </Box>
                <Box color='#0B4877' display='flex' flexDirection='column' justifyContent='center'>
                    <Villa sx={{ m: '0 0 5px 0px', fontSize: '70px' }} />
                    <Typography>Vila</Typography>
                </Box>
                <Box color='#0B4877' display='flex' flexDirection='column' justifyContent='center'>
                    <HomeMini sx={{ m: '0 0 5px 0px', fontSize: '70px' }} />
                    <Typography>Studio</Typography>
                </Box>
                <Box color='#0B4877' display='flex' flexDirection='column' justifyContent='center'>
                    <LocalPostOffice sx={{ m: '0 0 5px 0px', fontSize: '70px' }}/>
                    <Typography>Office</Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default Explore

const styles = {
    boxx: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        justifyContent: 'center',
        backgroundColor: '#F1F4F8',
        height:'300px',
        marginTop: {md:'80px', xs:'50px'},
        gap:'30px'
    },
    button: {
        backgroundColor: "#06ADFE",
        width: "200px",
        fontSize: '13px',
        '&:hover': {
            backgroundColor: "#06ADFE",
        },
        ikon: {
            fontSize: '40px',
            color: '#0B4877'
        }
    }
}