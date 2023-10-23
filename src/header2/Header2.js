import { Box, Button, Container, FormControl, Input, InputBase, InputLabel, MenuItem, Select, TextField, Toolbar, styled } from "@mui/material";
import React from "react";
import { Bathroom, BedRounded } from "@mui/icons-material";

const Inputt = styled('Input')(({ theme }) => ({
    paddingLeft: '10px',
    border: '1px solid #777',
    width: '500px',
    borderRadius: '4px',
    height: '40px',
}));

function Header2() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={styles.bg2}>
            <Container maxWidth="xl"  >
                <Toolbar>
                    <Box sx={styles.container}>
                        <Box width='30%'>
                        <Inputt placeholder="Enter Keyword..." />
                    </Box>
                    <Box sx={{ display: { md: 'flex', xs: 'none' }, flexDirection: 'row', width: '45%', ml:'22%' }} >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Rent</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                value={age}
                                label="Rent"
                                onChange={handleChange}
                                sx={{
                                    width: '100px',
                                    height: '45px'
                                }}
                            >
                                <MenuItem value={10}>Rent 1</MenuItem>
                                <MenuItem value={20}>Rent 2</MenuItem>
                                <MenuItem value={30}>Rent 3</MenuItem>
                                <MenuItem value={40}>Rent 4</MenuItem>
                                <MenuItem value={50}>Rent 5</MenuItem>
                                <MenuItem value={60}>Rent 6</MenuItem>
                                <MenuItem value={70}>Rent 7</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" ><BedRounded/>Bed</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-selectt"
                                value={age}
                                label="Bed"
                                onChange={handleChange}
                                sx={{
                                    width: '100px',
                                    height: '45px'
                                }}
                            >
                                <MenuItem value={10}>Bed 1</MenuItem>
                                <MenuItem value={20}>Bed 2</MenuItem>
                                <MenuItem value={30}>Bed 3</MenuItem>
                                <MenuItem value={40}>Bed 4</MenuItem>
                                <MenuItem value={50}>Bed 5</MenuItem>
                                <MenuItem value={60}>Bed 6</MenuItem>
                                <MenuItem value={70}>Bed 7</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label"><Bathroom/>Bath</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-selecttt"
                                value={age}
                                label="Bath"
                                onChange={handleChange}
                                sx={{
                                    width: '100px',
                                    height: '45px',
                                }}
                            >
                                <MenuItem value={10}>Bath 1</MenuItem>
                                <MenuItem value={20}>Bath 2</MenuItem>
                                <MenuItem value={30}>Bath 3</MenuItem>
                                <MenuItem value={40}>Bath 4</MenuItem>
                                <MenuItem value={50}>Bath 5</MenuItem>
                                <MenuItem value={60}>Bath 6</MenuItem>
                                <MenuItem value={70}>Bath 7</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            component="a"
                            sx={{
                                bgColor: '#014273',
                                color: '#fff',
                                width: '300px',
                                height: '43px',
                                margin: '1px 4px',
                                borderRadius: '3px',
                            }}
                            variant='contained'>
                            Sign In
                        </Button>
                    </Box> 
                    </Box>
                   


                </Toolbar>
            </Container>
        </Box>
    )
}

export default Header2

const styles = {
    bg2: {
        bgColor: '#fff',
        width: '100%',
        display: {md: 'block', xs: 'none'},
        height: '50px'
    },
    container: {
        display:'flex',
        flexDirection:'row',
        width:'70%',
        justifyContent:'center',
        margin: '1% 15%'
        }
}