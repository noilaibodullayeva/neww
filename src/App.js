import { Box } from '@mui/material';
import './App.css';
import Header from './header/Header';
import Header2 from './header2/Header2';
import Banner1 from './banner1/banner1';
import Banner2 from './banner2/Banner2';
import Banner3 from './banner3/Banner3';

function App() {
  return (
    <Box>
      <Header />
      <Header2 />
      <Banner1/>
      <Banner2/>
      <Banner3/>
    </Box>
  );
}

export default App;
