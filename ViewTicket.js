import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Label } from '@mui/icons-material';
import { Button, Input, TextField } from '@mui/material';


function ViewTicket(props) {
  const { posts, title } = props;

  return (
    <Grid>
       <h1>Happy Journy</h1>
       <h1>Ticket has been Confirmed.</h1>
    </Grid>
  );
}



export default ViewTicket;