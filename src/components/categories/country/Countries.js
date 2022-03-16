import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";
import Spinner from '../../Spinner'

//Category by countries
const Countries = () => {

const [countries, setCountries ] = useState([])
const [countrySelected, setCountrySelected] = useState([]);

const [cuisine, setCuisine ] = useState([])
const [isLoading, setIsLoading ] = useState(true)
//Loads the list of the countries then putting to the countries list as to go to the below Select Options 
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      setCountries(result.data.meals)
    }
    fetchItems()
  },[])

//Selecting the country below with a select option
  const handleChange = (event) => {
    setCountrySelected(event.target.value);
  };

//Setting the country and the recipes of this country
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countrySelected}`)
      setCuisine(result.data.meals)
      setIsLoading(false)

    }
    fetchItems()
//When the country is selected loads the content to the board as below can see
  },[countrySelected])

  console.log(cuisine)

  return (
   
<>

{isLoading ?  <Spinner />
    :
<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={countrySelected}
          label="Country"
          onChange={handleChange}
        >
        
{countries.map((country, id) => (
    <MenuItem key={id} value={country.strArea}>{country.strArea}</MenuItem>

      ))}

        </Select>
      </FormControl>
      
      </Box>
}
      {cuisine ? (
        <Box 
     sx={{ 
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
     }}
    >       {cuisine.map((food) => (
        
        <Link style={{ textDecoration: 'none' }} to={`/singlerecipe/${food.strMeal}`}>

        <Card sx={{ width: 200,  height: 220, p:5,   boxShadow: 0,  }}>
          <CardMedia
            component="img"
            height="140"
            image={food.strMealThumb}
            alt=""
            sx={{ borderRadius: 3 }}
          />
          <CardContent>
            <Typography  component="div">
              {food.strMeal}
            </Typography>
            <Typography  component="div">
            </Typography>

          </CardContent>
        </Card>
        </Link>

         ))}

         </Box>
    ) : (
      <div>Select One</div>
    )
  }
   

</>
    

  )
}

export default Countries;