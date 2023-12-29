import Header from './Component/Header'
import Index from './pages/Index';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' index element={<><Header/><Index/></>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
