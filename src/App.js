import logo from './logo.svg';
import './App.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import {router} from './lib/router';


function App() {
  return (
  <ChakraProvider>
    <RouterProvider router={router}/>
  </ChakraProvider>
  );
}

export default App;
