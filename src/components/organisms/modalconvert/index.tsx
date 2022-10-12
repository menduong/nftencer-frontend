import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Grid from '@material-ui/core/Grid';
import { Text } from 'components/atoms/text';
import { Button } from 'components/atoms/button';
import { ModalHeader } from 'components/molecules/modalHeader';
import { resetStore } from 'store/createNFT';
import { Heading } from 'components/molecules/heading';
import guilde from 'assets/images/guildeconvert.png';
import { Link } from 'gatsby';
type Modifier = 'overflowx' | 'overflowy' | 'overhidden' | 'error' | 'center';

interface Props {
  link?: string;
}


export const Modalconvert: React.FC<Props> = props => {

  return (
<>
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={12} >
        <Heading>Guide for file covert</Heading>
        <Text> If the preview of the selected file does not appear, or if the file is over 100mb, go to the site below:</Text>
        <Text> Please upload on coconut again after converting the file.</Text>
      </Grid>
      <Grid item xs={12} >
        <Button modifiers="getCoin"><a style={{color:"black"}} target="_blank" href="https://video-converter.com/"> Move to Video Convert (Free)</a></Button>
      </Grid>
    </Grid>
    
    <Grid
    container
    spacing={2}
    direction="column"
    alignItems="flex-start"
    justify="flex-start"
  >
    <Grid alignItems="flex-start" item xs={12} >
      <Text>&gt;&nbsp; 이용 안내</Text>
      </Grid>
      <Grid item xs={12} >
        <img style={{width:"500px"}} src={guilde} />
      </Grid>
    </Grid>
</>
  )
};

export default hot(Modalconvert);
