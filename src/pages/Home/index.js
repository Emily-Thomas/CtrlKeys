import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../react-auth0-spa';

function Home() {
  const { isAuthenticated } = useAuth0();
  return (
    <Box
      textAlign={{ sm: 'center' }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignContent="center"
      height="100vh"
      m={{ xs: 4, sm: '0 auto' }}
      bgcolor="secondary.main"
    >
      <Typography variant="h1" component="h1" gutterBottom color="textPrimary">
        Let's take a shortcut to learning...
      </Typography>
      <Typography variant="h4">
        Learn short cut key commands with us to improve your day to day use of
        technology.
      </Typography>
      {isAuthenticated && (
        <Box width="300px" margin="0 auto" mt="20px">
          <Button component={Link} to="/lessons" variant="contained">
            Go to your Lessons
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Home;
