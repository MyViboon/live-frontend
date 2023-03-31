import { useState, useEffect } from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://3.0.93.26:5000/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" align="center">
          User List
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {users.map(user => (
          <Grid item xs={12} md={6} lg={4} key={user.id}>
            <Paper variant="outlined">
              <Box p={2}>
                <Typography variant="h6" gutterBottom>
                  {user.fname} {user.lname}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Username: {user.username}
                </Typography>
                <Typography variant="body2">
                  ID: {user.id}
                </Typography>
                <Box mt={2}>
                  <img src={user.avatar} alt={`${user.fname} ${user.lname}`} style={{ maxWidth: '70%' }} />
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
