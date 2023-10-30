import { Box, styled, Typography } from "@mui/material";
import ImgAgent1 from "../images/5.webp"
import ImgAgent2 from "../images/6.jpg"
import ImgAgent3 from "../images/8.jpg"

function Agents() {

    const Name = styled('Typography')(({ theme }) => ({
        color: '#222',
        fontWeight: 'bold',
        fontFamily: 'monoscape',
        fontSize: '25px',
        textAlign: 'center',
        marginTop: '10px'
    }))

    return (
        <Box backgroundColor='#fff' width='100%'>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <Typography sx={{
                    textAlign: 'center',
                    color: '#000',
                    fontWeight: 'bold',
                    fontFamily: 'monoscape',
                    fontSize: '35px',
                    margin: '30px 0 10px 0'
                }} >Our Agents</Typography>
                <Typography sx={{
                    marginTop: '10px',
                    textAlign: 'center',
                    color: '#777',
                    fontSize: '18px',
                    fontFamily: 'monoscape',
                    fontStyle: 'normal',
                    marginBottom: '20px'
                }}>Get Started By choosing from one of our pre-build page templates to showcase your properties</Typography>
            </Box>
            <Box sx={styles.imgagent}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: { md: '280px', xs: '100%' }
                }}>
                    <img src={ImgAgent1} sx={{
                        width: { md: "250px", xs: '100%' },
                        height: "300px"
                    }} />
                    <Name>Jimmy Changa</Name>
                    <Typography sx={{
                        marginTop: '10px',
                        color: '#777',
                        fontSize: '18px',
                        fontFamily: 'monoscape',
                        fontStyle: 'normal',
                        textAlign: 'center'
                    }}>Real Estate Agent</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: { md: '280px', xs: '100%' }
                }}>
                    <img src={ImgAgent2} sx={{
                        width: { md: "250px", xs: '100%' },
                        height: "300px"
                    }} />
                    <Name>Jimmy Changa</Name>
                    <Typography sx={{
                        marginTop: '10px',
                        color: '#777',
                        fontSize: '18px',
                        fontFamily: 'monoscape',
                        fontStyle: 'normal',
                        textAlign: 'center'
                    }}>Real Estate Agent</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: { md: '280px', xs: '100%' }
                }}>
                    <img src={ImgAgent3} sx={{
                        width: { md: "250px", xs: '100%' },
                        height: "300px"
                    }} />
                    <Name>Jimmy Changa</Name>
                    <Typography sx={{
                        marginTop: '10px',
                        color: '#777',
                        fontSize: '18px',
                        fontFamily: 'monoscape',
                        fontStyle: 'normal',
                        textAlign: 'center'
                    }}>Real Estate Agent</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: { md: '280px', xs: '100%' }
                }}>
                    <img src={ImgAgent2} sx={{
                        width: { md: "250px", xs: '100%' },
                        height: "300px"
                    }} />
                    <Name>Jimmy Changa</Name>
                    <Typography sx={{
                        marginTop: '10px',
                        color: '#777',
                        fontSize: '18px',
                        fontFamily: 'monoscape',
                        fontStyle: 'normal',
                        textAlign: 'center'
                    }}>Real Estate Agent</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Agents

const styles = {
    imgagent: {
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        justifyContent: 'center',
        gap: '10px',
    },
}