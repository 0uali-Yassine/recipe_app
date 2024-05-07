import './index.css';
import Main from './component/Main';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Recipe from './component/Recipe';
import Filterrecipes from './component/Filterrecipes';
import Text from './component/Text';

function App() {
  
  return (
    <div className="App scroll-smooth ">
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/recipe' element={<Recipe/>}/>
            <Route path='/filter' element={<Filterrecipes/>}/>
            <Route path='/search' element={<Text/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
