import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './component/Signin';
import Login from './component/Login';
import Home from './component/Home';
import { DataProvider } from './component/DataContext';
import More from './component/More';



function App() {
  return (
<DataProvider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin />}></Route>
          <Route path='/signup' element={<Signin />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/more' element={<More/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </DataProvider>
  );
}

export default App;
