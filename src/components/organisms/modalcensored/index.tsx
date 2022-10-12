import React from 'react';
import { hot } from 'react-hot-loader/root';
import Grid from '@material-ui/core/Grid';
import { Text } from 'components/atoms/text';
import { Link } from 'components/atoms/link';
type Modifier = 'overflowx' | 'overflowy' | 'overhidden' | 'error' | 'center';

interface Props {
  link?:string;
}


export const Modalcensored: React.FC<Props> = props => {
  return (
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12} >
            <Text modifiers="censored"> This Cryptoasset (NFT) has been reported by another user for suspected content standards violations, and is likely to be removed from the platform by Coconut without prior notice. Therefore, Users should consider carefully before purchasing this Cryptoasset (NFT). Learn more about Being Censored Label <Link href="/termofservice"> here</Link>.
            </Text>
          </Grid>
        </Grid>
  
  ) 
};

export default hot(Modalcensored);
