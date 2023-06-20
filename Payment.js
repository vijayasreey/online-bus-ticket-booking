import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const handlePayment = () => {
    // Implement your payment logic here
    console.log('Processing payment...');
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiryDate);
    console.log('CVV:', cvv);
    navigate('/viewticket');
  };

  return (
    <Container maxWidth="sm">
      <br/><br/>
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Payment Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Card Number"
              fullWidth
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Expiry Date"
              fullWidth
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="CVV"
              fullWidth
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handlePayment}
            >
              Process Payment
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <br/><br/>
    </Container>
  );
};

export default PaymentPage;
