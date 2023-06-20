import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Label } from '@mui/icons-material';
import { Button, Input, TextField } from '@mui/material';


function BusSchedules(props) {
  const { posts, title } = props;

  return (
    <Grid>
        <br/><br/>
    <a href="/bookseat">Hyderabd To Bangalore 7.30 AM   Price  760</a><br/><br/>
    <a href="/bookseat">Vijayavada To Bangalore 8.30 AM  Price  800</a><br/><br/>
    <a href="/bookseat">Proddatur To Bangalore 10.30 AM  Price  900</a><br/><br/>
    <a href="/bookseat">Kurnool To Bangalore 11.30 AM  Price  1000</a><br/><br/>
    <a href="/bookseat">Hyderabd To Kadapa 12.30 PM  Price  500</a><br/><br/>
    <a href="/bookseat">Proddatur To Bangalore 1.30 PM Price  650</a><br/><br/>
    <a href="/bookseat">Pulivendula To Bangalore 2.30 PM   800</a><br/><br/>
    <a href="/bookseat">Guntur To Bangalore 3.30 PM  Price  900</a><br/><br/>
    <br/><br/>
    </Grid>
  );
}



export default BusSchedules;