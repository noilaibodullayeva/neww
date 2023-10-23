import { Box } from '@mui/material';
import './App.css';
import Header from './header/Header';
import Header2 from './header2/Header2';
import Banner1 from './banner1/banner1';
// import { Route, Router, Routes } from 'react-router-dom';
// import SignIn from './sign ion/SignIn';

function App() {
  return (
    <Box>
      <Header />
      {/* <Routes>
        <Route path="/singin" element={<SignIn />} />
      </Routes> */}
      <Header2 />
      <Banner1/>
    </Box>
  );
}

export default App;
