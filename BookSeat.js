import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { CheckBox, Label } from '@mui/icons-material';
import { Button, Input, TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useNavigate} from 'react-router-dom';

function BookSeat() {
  const [checked, setChecked] = React.useState(true);
  const navigate = useNavigate();
  const handlePayment = (event) => {
    event.preventDefault();
          navigate("/payment");

  };
  return (
    <Grid>
    Select Seats
  <table>
  <tr><td> <FormControlLabel control={<CheckBox checked={checked} color="primary"/>}label="Seat 1"/></td>
  <td> <FormControlLabel control={<CheckBox checked={checked} color="primary"/>}label="Seat 2"/></td>
  </tr>
  <tr><td> <FormControlLabel control={<CheckBox color="primary"/>}label="Seat 3"/></td>
  <td> <FormControlLabel control={<CheckBox checked={checked} color="primary"/>}label="Seat 4"/></td>
  </tr>
  <tr><td> <FormControlLabel control={<CheckBox checked={checked} color="primary"/>}label="Seat 5"/></td>
  <td> <FormControlLabel control={<CheckBox checked={checked} color="primary"/>}label="Seat 6"/></td>
  </tr>
  <tr><td> <FormControlLabel control={<CheckBox checked={checked} color="primary"/>}label="Seat 7"/></td>
  <td> <FormControlLabel control={<CheckBox checked={checked} color="primary"/>}label="Seat 8"/></td>
  </tr>
  <tr><td> <FormControlLabel control={<CheckBox checked={checked} color="primary"/>}label="Seat 9"/></td>
  <td> <FormControlLabel control={<CheckBox checked={checked} color="primary"/>}label="Seat 10"/></td>
  </tr>
  <tr><td> <FormControlLabel control={<CheckBox checked={checked} color="primary"/>}label="Seat 11"/></td>
  <td> <FormControlLabel control={<CheckBox checked={checked} color="primary"/>}label="Seat 12"/></td>
  </tr>
  <tr><td> <FormControlLabel control={<CheckBox checked={checked} color="primary"/>}label="Seat 13"/></td>
  <td> <FormControlLabel control={<CheckBox checked={checked} color="primary"/>}label="Seat 14"/></td>
  </tr>
    </table>
   <br/><br/>\
   <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
               onClick={handlePayment}
              >
               Goto Payment
              </Button>

    </Grid>
  );
}



export default BookSeat;