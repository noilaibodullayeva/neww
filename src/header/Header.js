import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
// import singin from '../sign ion/SignIn';
import { LocationCityRounded } from '@mui/icons-material';
// import { Routes, useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import {
//   BrowserRouter as Router, Link,
//   useLocation
// } from "react-router-dom";

const pages = ['Home', 'Property', 'About', 'Blog', 'Contact'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // const navigate = useNavigate()

    //  const location = useLocation();
    //     console.log(location);

    return (
        <AppBar sx={styles.container}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
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
                            color: 'inherit',
                            textDecoration: 'none',
                            textAlign: 'center'
                        }}
                    >
                        <IconButton sx={styles.logoIcon}>
                            <LocationCityRounded fontSize='10px' />
                        </IconButton>
                        Konato
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <IconButton sx={styles.logoIcon}>
                            <LocationCityRounded fontSize='10px' />
                        </IconButton>
                        Konato
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', }, color: '#fff', marginLeft: '15px' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    ml: 2,
                                    color: 'white',
                                    display: 'block',
                                    fontFamily: 'monospace',
                                    transition: ' all .3s ease-out 0s',
                                    fontSize: '18px'
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                        <Box sx={{ display: 'flex', flexDirection: 'row', mt: { md: '1%', xs: '0.5%' }, ml: { md: '43%' } }}>
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    flexGrow: 1,
                                    fontFamily: 'roboto',
                                    fontWeight: 500,
                                    letterSpacing: '.1rem',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    fontSize: '18px',
                                }}
                            >
                                Call us:
                            </Typography>
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                color='#fff'

                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    flexGrow: 1,
                                    fontFamily: 'roboto',
                                    fontWeight: 500,
                                    letterSpacing: '.1rem',
                                    color: '#fff',
                                    borderBottom: '1px dashed #06ADFE',
                                    fontSize: '18px'
                                }}
                            >
                                +10 (78)356 3276
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>

                        <Box>
                            <Button
                                component="a"
                                href='/SignIn.js'
                                sx={{
                                    bgColor: '#06ADFE',
                                    color: '#fff',
                                    width: '100px',
                                    height: '40px',
                                    margin: '3px 4px',
                                    borderRadius: 0,
                                }}
                                variant='contained'
                            // onClick={() => navigate("/singin")}
                            >
                                {/* <nav >
                                    <NavLink to='/SignIn'> */}
                                {/* <Routes>
                                        <Routes to='/singin'>Sign In</Routes>
                                    </Routes> */}

                                {/* </NavLink>
                                </nav> */}
                                Sign In
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;


const styles = {
    container: {
        position: "static",
        backgroundColor: '#014273',
    },
    logoIcon: {
        color: '#05B0FE',
        // fontSize: '60px'
        left: 0
    }
}