import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Image from "material-ui-image";
import { Link } from "react-router-dom";

import Spinner from '../../Spinner'

//Lazy Load NPM

//Pagination
import Pagination from '@mui/material/Pagination';

const Ingredients = () => {

  const [page, setPage ] = useState(0)
  const [isLoading, setIsLoading ] = useState(true)



const [ingredients, setIngredients ] = useState([])
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
      setIngredients(result.data.meals)
       setIsLoading(false)

    }
    fetchItems()
  },[])

  //PAGINATION
  const allthePosts = Math.ceil(ingredients.length/20)
  const wantedContentPerPost = 20 * page
  const slicedIngredients= ingredients.slice(wantedContentPerPost, wantedContentPerPost + 20)


  return (
    <>   
   
  
    <Box sx={{display: 'flex', justifyContent: 'center', m: 5 }}>
     <Pagination 
count={allthePosts-1} 
color="secondary" 
  defaultPage={1}
  value={page}
  onChange={(event, value) => setPage(value)}
/>
</Box>
{isLoading ?  <Spinner />
    :

    <Box sx={{ 
      borderBottom: 1,
      borderColor: 'divider',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      }}>

      {slicedIngredients.map((ing) => (
        <Link style={{ textDecoration: 'none' }} to={`/ingredient/${ing.strIngredient}`}>
        <Card sx={{width: 200, height: 400,  boxShadow: 0 }} >
       <Image
        src={`https://www.themealdb.com/images/ingredients/${ing.strIngredient}.png`}
        sx={{ borderRadius: 3 }}

      />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {ing.strIngredient}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {ing.strType}
          </Typography>
        </CardContent>
    </Card>
    </Link>
     
         ))}
         </Box>
        }
 
</>

  )
}

export default Ingredients;