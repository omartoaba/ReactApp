import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Reservations from './Components/Reservations';
import Container from './Components/Container';
import { ChakraProvider } from '@chakra-ui/react';
import Login from './Components/Login';
function App() {
  return (
    <BrowserRouter>
    <ChakraProvider>
      <Container>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/reservations" element={<Reservations/>}></Route>
        </Routes>
      </Container>
    </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
 