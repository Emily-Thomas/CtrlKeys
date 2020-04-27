import React from 'react';
import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
import LessonCard from '../../components/LessonCard';

function Lessons() {
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
      alignItems="center"
    >
      <LessonCard />
    </Box>
  );
}

export default Lessons;
