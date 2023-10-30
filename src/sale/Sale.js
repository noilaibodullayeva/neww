import { Box } from "@mui/material"
import { Divider, IconButton, styled, Typography } from "@mui/material";
import ImgC1 from "../images/2.jpg"
import ImgC2 from "../images/3.jpg"
import { Bathroom, Bed, House } from "@mui/icons-material";

function Sale() {

    const Sale = styled('Typography')(({ theme }) => ({
        color: '#222',
        fontWeight: 'bold',
        fontFamily: 'monoscape',
        fontSize: '35px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
    }))

    const Cost = styled('Typography')(({ theme }) => ({
        color: '#4AC1FF',
        fontSize: '20px',
        fontFamily: 'san-serif',
        fontStyle: 'normal',
        textAlign: 'left',
    }));

    const Home = styled('Typography')(({ theme }) => ({
        color: '#222',
        fontSize: '22px',
        fontFamily: 'san-serif',
        fontStyle: 'normal',
        m: '2% 0 2% 0',
        textAlign: 'left',
        fontWeight: 'bold'
    }));

    const TypoGet = styled('Typography')(({ theme }) => ({
        color: '#777',
        fontSize: '14px',
        fontFamily: 'roboto',
        fontStyle: 'normal',
        width: { md: '400px', xs: '250px' },
        textAlign: 'left',
    }));

    return (
        <Box sx={{ marginTop: '50px' }}>
            <Sale marginBottom='20px'>
                Properties for sale
            </Sale>
            <Box sx={{
                display: 'flex',
                flexDirection: { md: 'row', xs: 'column' },
                justifyContent: { md: 'center', xs: 'center' },
                gap: '20px',
                marginTop: '20px'
            }}>
                <Box sx={styles.boxSm}>
                    <img src={ImgC1}  sx={styles.img}/>
                    <Cost sx={styles.mar}>$ 6728</Cost>
                    <Home sx={styles.mar}>Classical Home</Home>
                    <TypoGet sx={styles.mar}>Get Started By choosing from one of our pre-build page templates to showcase your properties</TypoGet>
                    <Divider width='100%' color="#777" />
                    <Box display='flex' flexDirection='row' justifyContent='space-between' mt='10px'>
                        <IconButton>
                            <Bed /> <Typography sx={styles.typo}>2 bedroom</Typography>
                        </IconButton>
                        <IconButton>
                            <Bathroom /> <Typography sx={styles.typo}>2 bathroom</Typography>
                        </IconButton>
                        <IconButton>
                            <House /> <Typography sx={styles.typo}>1050 Sq Ft</Typography>
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={styles.boxSm}>
                    <img src={ImgC2}  sx={styles.img} />
                    <Cost sx={styles.mar}>$ 6728</Cost>
                    <Home sx={styles.mar}>Classical Home</Home>
                    <TypoGet sx={styles.mar}>Get Started By choosing from one of our pre-build page templates to showcase your properties</TypoGet>
                    <Divider width='100%' color="#777" />
                    <Box display='flex' flexDirection='row' justifyContent='space-between' mt='10px'>
                        <IconButton>
                            <Bed /> <Typography sx={styles.typo}>2 bedroom</Typography>
                        </IconButton>
                        <IconButton>
                            <Bathroom /> <Typography sx={styles.typo}>2 bathroom</Typography>
                        </IconButton>
                        <IconButton>
                            <House /> <Typography sx={styles.typo}>1050 Sq Ft</Typography>
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={styles.boxSm}>
                    <img src={ImgC1} sx={styles.img} />
                    <Cost sx={styles.mar}>$ 6728</Cost>
                    <Home sx={styles.mar}>Classical Home</Home>
                    <TypoGet sx={styles.mar}>Get Started By choosing from one of our pre-build page templates to showcase your properties</TypoGet>
                    <Divider width='100%' color="#777" />
                    <Box display='flex' flexDirection='row' justifyContent='space-between' mt='10px'>
                        <IconButton>
                            <Bed /> <Typography sx={styles.typo}>2 bedroom</Typography>
                        </IconButton>
                        <IconButton>
                            <Bathroom /> <Typography sx={styles.typo}>2 bathroom</Typography>
                        </IconButton>
                        <IconButton>
                            <House /> <Typography sx={styles.typo}>1050 Sq Ft</Typography>
                        </IconButton>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Sale

const styles = {
    boxSm: {
        width: { md: '360px', xs: '99%' },
        height: {md:'420px', xs:'570px'},
        borderRadius: 'none',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #000',
        marginTop: { md: 0, xs: '10px' }
    },
    typo: {
        color: '#000',
        ml: '0.00001%'
    },
    mar: {
        m: '3% 0 1.5% 7%'
    },
    img: {
        width: {md: '400px', xs: '99%'},
        height: {
            md: '250px', xs: '230px'
        }
    }
}