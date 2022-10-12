import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Grid from '@material-ui/core/Grid';
import { Text } from 'components/atoms/text';
import { Button } from 'components/atoms/button';
import { useSnackbar } from 'notistack';
import { Link } from 'gatsby';
type Modifier = 'overflowx' | 'overflowy' | 'overhidden' | 'error' | 'center';

interface Props {
  link?:string;
}


export const Modalclaim: React.FC<Props> = props => {
  
  return (
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12} >
            <Text> Unfortunately, you are not eligible to receive CONUT token.</Text>
            <Text> <Link to="/claim">Click here</Link> to learn about Mining Reward CONUT tokens!</Text>
          </Grid>
          <Grid item xs={12} >
            <Button modifiers="getCoin" disabled> Get CONT</Button>
          </Grid>
        </Grid>
  ) 
};

export default hot(Modalclaim);
