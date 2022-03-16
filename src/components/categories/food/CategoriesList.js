import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";

const CategoriesList = ({recipe}) => {
//List of the categories shown here

//Open or not open in order when clicked on 'More' it shows more or basically just 40 char as stated below
  const [open, setOpen] = React.useState(false);
const handleClick = () => {
      setOpen(!open);
    }; 
  return (

    <Card sx={{ maxWidth: 400, p:5, m:5, maxHeight: 800, boxShadow: 3 }}>
    <Link to={`/food/${recipe.strCategory}`}>
                <Button size="small">View</Button>
                </Link>

          <CardMedia
            component="img"
            height="200"
            image={recipe.strCategoryThumb}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {recipe.strCategory}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              { open ? recipe.strCategoryDescription : recipe.strCategoryDescription.slice(0,40)+ "..."}
            </Typography>
          </CardContent>
          <CardActions>
          <Button onClick={handleClick} size="small">More</Button>
          </CardActions>
        </Card>
        
  )
}

export default CategoriesList