import './App.css';
import { Navbar } from './Components/Navbar/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { CreateRecipe } from './Pages/CreateRecipe';
import { MyRecipe } from './Pages/MyRecipe';
import { Favourites } from './Pages/Favourites';
import { LoginSignup } from './Pages/LoginSignup';
import { Profile } from './Pages/Profile';
import { Footer } from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter><Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createrecipe' element={<CreateRecipe/>}/>
        <Route path='/myrecipe' element={<MyRecipe/>}/>
        <Route path='/favourite' element={<Favourites/>}/>
        <Route path='/loginsignup' element={<LoginSignup/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Footer/>
      
      </BrowserRouter>
      
      
    </div>
    
  );
}

export default App;
