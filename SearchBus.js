import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import { DatePicker } from '@mui/lab';
import {useNavigate} from 'react-router-dom';

const BusSearchPage = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching buses...');
    console.log('Source:', source);
    console.log('Destination:', destination);
    console.log('Date:', date);
    navigate('/busschedule');
  };

  return (
    
    <Container maxWidth="sm">
      <br/><br/>
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Bus Search
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Source"
              fullWidth
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Destination"
              fullWidth
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <DatePicker
              label="Date"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSearch}
            >
              Search Buses
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <br/><br/>
    </Container>
  );
};

export default BusSearchPage;
