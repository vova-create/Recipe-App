import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Recipe from "./Recipe";

function App() {
    const [query, setQuery] = useState('')

    const appId = 'd135d085';
    const appKeys = '846a97944c2575bcdec34e1f69b9fba2';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKeys}&from=0&to=3&calories=591-722&health=alcohol-free`;


    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    console.log(recipes)

const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
}
    const updateSearch = (e) => {
        setSearch(e.target.value)
    }
    const getRecipe =  async () => {
        const recipe =  await fetch(url);
        const data =  await recipe.json()
        setRecipes(data.hits)
    }
    useEffect(() => {
        getRecipe();
    }, [query])

    return (
    <div className="App">
<h1>App Recipe</h1>
        <form  onSubmit={getSearch} className='form'>
            <input className='form-input-text' type="text" value={search} onChange={updateSearch}/>
            <button  className='form-btn' type='submit'>Search</button>
        </form>
        {recipes.map((item) => (
            <Recipe key={item.recipe.label} label={item.recipe.label} img={item.recipe.image} ingredients={item.recipe.ingredients}/>
        ))}
    </div>
  );
}

export default App;
