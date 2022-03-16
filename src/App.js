import './App.css';
import ButtonAppBar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Random from './components/Random';
import Search from './components/Search';
import Home from './components/Home';
import AllCategory from './components/categories/AllCategory';
import CategoriesDetails from './components/categories/food/CategoriesDetails';
import IngredientsDetails from './components/categories/ingredient/IngredientsDetails';
import SingleRecipe from './components/categories/SingleRecipe';

function App() {
  //Using Routes ButtonAppBar functions as header it is constant never disappears
  return (
    <div className="App">

<ButtonAppBar/>

  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/random-recipe" element={<Random />} />
  <Route path="/search" element={<Search />} />
  <Route path="/categories" element={<AllCategory />} />
  <Route path="/food/:id" element={<CategoriesDetails />} /> 
  <Route path="/ingredient/:id" element={<IngredientsDetails />} /> 
  <Route path="/singlerecipe/:id" element={<SingleRecipe />} /> 

 </Routes>

    </div>
  );
}

export default App;
