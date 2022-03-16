import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import axios from 'axios';
import Box from '@mui/material/Box';

import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';

import { useParams } from "react-router-dom";

//React Stack component
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';


import { FacebookShareButton } from "react-share";



//MUI Template
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


//Single recipe shows one recipe based on the ID
const Single = () => {
  const { id } = useParams();
  const [receipt, setReceipt ] = useState('')
//UseEffect loads when the page loads as well, also load when reloads
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios('https://www.themealdb.com/api/json/v1/1/search.php?s=' + id)
      setReceipt(result.data.meals[0])
    }
    fetchItems()

  },[])


  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (

<Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      p: 5
       }}>

    <Card sx={{ maxWidth: 800, boxShadow: 3  }}>


      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={receipt.strMeal}
        subheader={receipt.strTags}
      />
      <CardMedia
        component="img"
        height="500"
        image={receipt.strMealThumb}
         alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <Stack direction="row" spacing={2}>
        <Item sx={{ fontSize: 20 }}>{receipt.strMeasure1} {receipt.strIngredient1} </Item>
        <Item sx={{ fontSize: 20 }} >   {receipt.strMeasure2} {receipt.strIngredient2}</Item>
        <Item sx={{ fontSize: 20 }}> {receipt.strMeasure3} {receipt.strIngredient3}  </Item>
        <Item sx={{ fontSize: 20 }}> {receipt.strMeasure4} {receipt.strIngredient4}  </Item>
        <Item sx={{ fontSize: 20 }}> {receipt.strMeasure5} {receipt.strIngredient5}  </Item>
        <Item sx={{ fontSize: 20 }}> {receipt.strMeasure6} {receipt.strIngredient6}  </Item>
        <Item sx={{ fontSize: 20 }}> {receipt.strMeasure7} {receipt.strIngredient7}  </Item>


        </Stack>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

      <a href={receipt.strYoutube}>

          <IconButton aria-label="add to favorites">
            <YouTubeIcon />
          </IconButton>
</a>

        <IconButton aria-label="share">
        <FacebookShareButton url={`https://www.themealdb.com/api/json/v1/1/filter.php?c=' + ${receipt.strMeal}`}>
        <ShareIcon />

        </FacebookShareButton>           </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
       
          <Typography paragraph>
          {receipt.strInstructions}

          </Typography>
          <Typography paragraph>
          
          </Typography>
          <Typography>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Box>
   
  )
}

export default Single