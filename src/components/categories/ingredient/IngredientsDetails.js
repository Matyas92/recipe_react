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

//useParams here to bring id here to load in useEffect
const IngredientsDetails = () => {
  const { id } = useParams();
  const [containsRecipe, setContainsRecipe ] = useState([])
  //isLoading if it is loading set to true then shows spinning.gif when it is false it disappears
  const [isLoading, setIsLoading ] = useState(true)

  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + id)
      setContainsRecipe(result.data.meals)
      setIsLoading(false)

    }
    fetchItems()

  },[])

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

       {containsRecipe.map((recipe)=>( 
        <Link style={{ textDecoration: 'none' }} to={`/singlerecipe/${recipe.strMeal}`}>
        <Card sx={{ width: 200, height: 230, boxShadow: 0, p:5 }}>
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
 
export default IngredientsDetails;