import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import { Link } from "react-router-dom";
import Spinner from '../../Spinner'

//Detailed recipe of one that was clicked on

//Params here used to get that ID
const CategoriesDetails = () => {
  const { id } = useParams();
  const [solidRecipe, setSolidRecipe ] = useState([])
  const [isLoading, setIsLoading ] = useState(true)

  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + id)
      setSolidRecipe(result.data.meals)
      setIsLoading(false)
    }
    fetchItems()

  },[])

console.log(solidRecipe)

  return (
    <>
    {isLoading ?  <Spinner />
    :
    <Box 
     sx={{ 
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
     }}
    > 
       
       {solidRecipe.map((recipe)=>( 
        <Link style={{ textDecoration: 'none' }} to={`/singlerecipe/${recipe.strMeal}`}>

        <Card sx={{ width: 200, p:5, height: 150,   boxShadow: 0,  }}>
          <CardMedia
            component="img"
            height="140"
            image={recipe.strMealThumb}
            alt=""
            sx={{ borderRadius: 3 }}
            
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipe.strMeal}
            </Typography>
          
          </CardContent>
          </Card>
        </Link>
       ))} 
</Box>

}
</>
  );
}
 
export default CategoriesDetails;