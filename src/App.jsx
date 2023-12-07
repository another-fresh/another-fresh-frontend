import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Pages/Main';
import List from './Pages/List';
import Checkout from './Pages/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/list' element={<List />} />
          <Route path='/checkout/:id' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
