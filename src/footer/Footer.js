import { Facebook, Instagram, LocationCityRounded, Pinterest, Telegram } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

function Footer() {
    return (
        <Box sx={styles.footerBox}>
            <Box sx={{
                display: 'flex',
                flexDirection: { md: 'row', xs: 'column' },
                justifyContent: 'center',
                gap: '30px'
            }}>
                <Box sx={{
                    marginLeft: { md: 0, xs: '20px' }
                }}>
                    <IconButton sx={styles.logoIcon}>
                        <LocationCityRounded fontSize='10px' />
                        <Typography sx={styles.typoKonato}
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                        >Konato</Typography>
                    </IconButton>
                    <Typography sx={{
                        fontSize: '16px',
                        fontFamily: 'monoscape',
                        textAlign: 'left',
                        color: '#777',
                    }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Consectetur repellendus delectus vitae!</Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '10px',
                        justifyContent: 'left',
                        marginTop: '15px'
                    }}>
                        <Instagram sx={styles.icon1} />
                        <Telegram sx={styles.icon1} />
                        <Facebook sx={styles.icon1} />
                        <Pinterest sx={styles.icon1} />
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: "row",
                    justifyContent: {md:'center', xs:'left'},
                    ml:{md:0, xs:'20px'},
                    gap: '30px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                fontSize: '22px',
                                fontWeight: 'bold',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                marginBottom: '15px',
                                color: '#000'
                            }}
                        >Navigation</Typography>
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '300',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                color: '#777',
                                textDecoration: 'none',
                            }}
                        >Home</Typography>
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '300',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                color: '#777',
                                textDecoration: 'none',
                            }}
                        >About</Typography>
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '300',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                color: '#777',
                                textDecoration: 'none',
                            }}
                        >Services</Typography>
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '300',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                color: '#777',
                                textDecoration: 'none',
                            }}
                        >Blog</Typography>
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '300',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                color: '#777',
                                textDecoration: 'none',
                            }}
                        >Contact</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                fontSize: '22px',
                                fontWeight: 'bold',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                marginBottom: '15px',
                                color: '#000'
                            }}
                        >Services</Typography>
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '300',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                color: '#777',
                                textDecoration: 'none',
                            }}
                        >Drone Mapping</Typography>
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '300',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                color: '#777',
                                textDecoration: 'none',
                            }}
                        >Real State</Typography>
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '300',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                color: '#777',
                                textDecoration: 'none',
                            }}
                        >Commercial</Typography>
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '300',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                color: '#777',
                                textDecoration: 'none',
                            }}
                        >Construction</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: "row",
                    justifyContent: {md:'center', xs:'left'},
                    ml:{md:0, xs:'20px'},
                    gap: '30px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                fontSize: '22px',
                                fontWeight: 'bold',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                marginBottom: '15px',
                                color: '#000'
                            }}
                        >Support</Typography>
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '300',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                color: '#777',
                                textDecoration: 'none',
                            }}
                        >Drone Mapping</Typography>
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '300',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                color: '#777',
                                textDecoration: 'none',
                            }}
                        >Real State</Typography>
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '300',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                color: '#777',
                                textDecoration: 'none',
                            }}
                        >Commercial</Typography>
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontSize: '14px',
                                fontWeight: '300',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                color: '#777',
                                textDecoration: 'none',
                            }}
                        >Construction</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                fontSize: '22px',
                                fontWeight: 'bold',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                marginBottom: '15px',
                                color: '#000'
                            }}
                        >Contact</Typography>
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontSize: '16px',
                                fontWeight: '300',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                color: '#777'
                            }}
                        >Drone Mapping</Typography>
                        <Typography
                            variant="h3"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontSize: '16px',
                                fontWeight: '300',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                color: '#777'
                            }}
                        >realestate@gmail.com</Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                fontSize: '20px',
                                fontWeight: '300',
                                fontFamily: 'monoscape',
                                fontStyle: 'normal',
                                color: '#06ADFE',
                                fontWeight: 'bold'
                            }}
                        >10(87)738-3940</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                width: '100%',
                height: "35px",
                backgroundColor: '#F2F6F9',
                marginTop: '100px',
                marginBottom: '70px'
            }}>
                <Typography sx={{
                    fontSize: '16px',
                    color: '#777',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>Copywrite 2023 All rights reserved| This tmplate is made with 💙 by <Typography sx={{ color: '#06ADFE', ml: '5px', fontWeight: 'bold' }}>noila</Typography></Typography>
            </Box>
        </Box>
    )
}

export default Footer

const styles = {
    footerBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#fff',
        height: { md: '500px', xs: '700px' }
    },
    logoIcon: {
        color: '#05B0FE',
        left: 0
    },
    typoKonato: {
        mr: 2,
        display: { xs: 'flex', md: 'flex' },
        fontFamily: 'roboto',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
        textAlign: 'center'
    },
    icon1: {
        fontSize: '20px',
        color: '#777'
    }
}