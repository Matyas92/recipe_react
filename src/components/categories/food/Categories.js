import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import CategoriesList from './CategoriesList';

const Categories = () => {
const [recipes, setRecipes ] = useState([])

//Throws the basic categories as beef, chicken etc...
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      setRecipes(result.data.categories)
    }
    fetchItems()

  },[])
//looping the recipes with map then givigin to the CategoriesList component
 
  return (
    <Box 
     sx={{ 
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
     }}
    > 

{recipes.map((recipe)=>( 

    <CategoriesList key={recipe.idCategory} recipe={recipe}> </CategoriesList>

    ))} 

    </Box>
  )
}

export default Categories;