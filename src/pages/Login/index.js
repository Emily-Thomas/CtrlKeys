import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { GoogleLogin } from 'react-google-login';

function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  };
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
      <Typography variant="h1" component="h1" gutterBottom color="textPrimary">
        Login.
      </Typography>
      {/* <form noValidate autoComplete="off">
      <Box display="flex" justifyContent="center">
        <Box mr={1} mb={5}>
          <TextField label="Email"  variant="outlined" />
        </Box>
        <Box ml={1}>
          <TextField label="Password"  variant="outlined"  />
        </Box>
      </Box>
      <Button>
        Login with Google
      </Button>
    </form> */}
      <Box width="300px">
        <GoogleLogin
          clientId="547871048649-b807lg4mt131rb4k8hughlor521lt30g.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </Box>
    </Box>
  );
}

export default Login;
