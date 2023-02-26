import { BrowserRouter } from 'react-router-dom';

import Router from './routes';

import 'animate.css';
import "swiper/css";
import "swiper/css/pagination";

import './App.css';
import './custom.css';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
