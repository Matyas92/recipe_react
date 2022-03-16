import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

//Homepage, landing page

//MUI Template used here
export default function StickyFooter() {
  return (
    <>  
      <Container
      
       component="main" sx={{ mt: 4, mb: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Your recipe for today!
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {'If you know what to eat just search for the recipe. '}
            {'In case you would like to surprise yourself or do not know what to eat, click random.'}
          </Typography>
          <Typography variant="body1"> Used here the FreeMealDB, a free API.</Typography>
  
        <Box
        component="img"
        sx={{
          height:'70%' ,
          width: '70%',
          borderRadius: '2%',
          mt: 2

        }}
        alt="The house from the offer."
        src="https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg"
      />

      </Container>

    <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
        
        </Container>
      </Box>
</>
  );
}