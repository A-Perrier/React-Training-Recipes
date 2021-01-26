import React from 'react';
import './Recipe.css';

const Recipe = ({title, image, ingredients, healthLabels}) => {
  
  return (
    <div className="recipe">
      <h1 className="title">{title}</h1>
      <ul className="labels">
        {healthLabels.map((healthLabel, k) => 
        <li className="health-label" key={k}>{healthLabel}</li>
        )}
      </ul>
      <img src={image} alt=""/>
      <ul>
        {ingredients.map((ingredient, k) => 
        <li key={k}>{ingredient}</li>)}
      </ul>
    </div>
  )
}

export default Recipe