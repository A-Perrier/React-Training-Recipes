import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID =  /* Put yours from https://www.edamam.com/ */;
  const APP_KEY = /* Put yours from https://www.edamam.com/ */;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('vegan');

  useEffect( () => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const datas = await response.json();

    setRecipes(datas.hits);
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <h1 className="head-title">Food Search API</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={handleChange}/>
        <button className="search-button" type="submit">Rechercher</button>
      </form>
        {query ? 
          <p className="query">Recherche actuelle : {query}</p> : 
          <p className="query">"Aucune recherche en cours"</p>
        }
      <div className="recipes-container">
        {recipes.map((recipe, k) => 
          <Recipe key={k} title={recipe.recipe.label} image={recipe.recipe.image} ingredients={recipe.recipe.ingredientLines} healthLabels={recipe.recipe.healthLabels}/>
        )}
      </div>
    </div>
  );
}

export default App;
