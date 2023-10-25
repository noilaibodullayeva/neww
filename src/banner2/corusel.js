
import { Divider, IconButton, styled, Typography } from "@mui/material";
import ImgC1 from "../images/2.jpg"
import ImgC2 from "../images/3.jpg"
import ImgC3 from "../images/4.webp"
import { Bathroom, Bed, Build } from "@mui/icons-material";

var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

const Cost = styled('Typography')(({ theme }) => ({
    color: '#4AC1FF',
    fontSize: '20px',
    fontFamily: 'san-serif',
    fontStyle: 'normal',
    m: '2% 0 2% 0',
    textAlign: 'left',
}));

const Home = styled('Typography')(({ theme }) => ({
    color: '#222',
    fontSize: '22px',
    fontFamily: 'san-serif',
    fontStyle: 'normal',
    m: '2% 0 2% 0',
    textAlign: 'left',
    fontWeight: 500
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

var DemoCarousel = React.createClass({
    render() {
        return (
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <div sx={{ width: '500px', height: '400px', borderRadius: 'none' }}>
                        <img src={ImgC1} />
                        <Cost>$ 6728</Cost>
                        <Home>Classical Home</Home>
                        <TypoGet>Get Started By choosing from one of our pre-build page templates to showcase your properties</TypoGet>
                        <Divider width='100%' color="#777" />
                        <div display='flex' flexDirection='row' justifyContent='space-between'>
                            <IconButton>
                                <Bed /> <Typography>2 bedroom</Typography>
                            </IconButton>
                            <IconButton>
                                <Bathroom /> <Typography>2 bathroom</Typography>
                            </IconButton>
                            <IconButton>
                                <Build /> <Typography>1050 Sq Ft</Typography>
                            </IconButton>
                        </div>
                    </div>
                    <div sx={{ width: '500px', height: '400px', borderRadius: 'none' }}>
                        <img src={ImgC2} />
                        <Cost>$ 6728</Cost>
                        <Home>Classical Home</Home>
                        <TypoGet>Get Started By choosing from one of our pre-build page templates to showcase your properties</TypoGet>
                        <Divider width='100%' color="#777" />
                        <div display='flex' flexDirection='row' justifyContent='space-between'>
                            <IconButton>
                                <Bed /> <Typography>2 bedroom</Typography>
                            </IconButton>
                            <IconButton>
                                <Bathroom /> <Typography>2 bathroom</Typography>
                            </IconButton>
                            <IconButton>
                                <Build /> <Typography>1050 Sq Ft</Typography>
                            </IconButton>
                        </div>
                    </div>
                    <div sx={{ width: '500px', height: '400px', borderRadius: 'none' }}>
                        <img src={ImgC3} />
                        <Cost>$ 6728</Cost>
                        <Home>Classical Home</Home>
                        <TypoGet>Get Started By choosing from one of our pre-build page templates to showcase your properties</TypoGet>
                        <Divider width='100%' color="#777" />
                        <div display='flex' flexDirection='row' justifyContent='space-between'>
                            <IconButton>
                                <Bed /> <Typography>2 bedroom</Typography>
                            </IconButton>
                            <IconButton>
                                <Bathroom /> <Typography>2 bathroom</Typography>
                            </IconButton>
                            <IconButton>
                                <Build /> <Typography>1050 Sq Ft</Typography>
                            </IconButton>
                        </div>
                    </div>
                </div>

            </Carousel>
        );
    }
});
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default DemoCarousel