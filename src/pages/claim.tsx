import React, { useMemo } from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from 'components/templates/layout';
import { Section } from 'components/organisms/section';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Text } from 'components/atoms/text';
import { Form, Formik } from 'formik';
import {  getCommon} from 'store/common';
import { Unit } from 'components/pages/create/form';
import { Button } from 'components/atoms/button';
import { RouteComponentProps } from '@reach/router';
import chart from 'assets/images/marketplace.png';
import chart2 from 'assets/images/chart2.png';
import {
  ExploreSchema,
  exploreSchema,
  SortDefaultValue,
} from 'components/pages/explore/form';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
    width:'100%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width:'300px!important',
    alignItems:'flex-start',
  },
  tabpanel: {

  },
  tab:{
    width:'300px!important',
    display:'flex',
    alignItems:'flex-start!important',
  },
}));

export const Claim: React.FC<RouteComponentProps> = props => {
  const { errorMessage } = useSelector(getCommon);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const params = new URLSearchParams(props.location?.search);
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };


  const initialValue: ExploreSchema = useMemo(
    () => ({
      unit: Unit[0],
      productCategory:'Created Items',
      productSort: params.get('sort') || SortDefaultValue,
      verify: false,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );


  
 
  return (
    <div className="p-explore">
        <Formik initialValues={initialValue} validationSchema={exploreSchema} onSubmit={() => { }}>
          {({ values }) => {
  return (
<Form>
    <div className="p-explore">

      <div className="p-create">
        <Layout title="Create NFT">
          <Section className="p-explore_mainNotice">
            <div className="claim">
              <Grid
                container
                spacing={9}
                direction="row"
                justify="center"
                alignItems="stretch"
              >
                 <Grid item xs={4}>
                  <Text>
                  If you want to get CONUT marketplace mining reward then you must make at least 1 NFT purchase or create at least 1 NFT on Coconut
                  </Text>
                  <Text>
                  Your CONUT marketplace mining reward will be calculated every Tuesday, meaning after Tuesday you can claim your previous CONUT mining reward.
                  </Text>
                  <Text>
                  CONUT mining reward will accumulate over time. You have to pay a network gas fee every time you claim CONUT mining reward.
                  </Text>
                 </Grid>
                 <Grid item xs={4}>
                   <Text>
                   Every Tuesday 60.000 CONUT tokens are distributed to uploaders(creators) and buyers who bought NFT during that week before. 50% to the NFT uploaders(creators) and 50% to the NFT buyers.
                   </Text>
                   <Text>
                    Uploaders and Buyers will be received 50% of the distributed amount. This allocated amount of tokens is divided by the total number of participants who upload or purchase NFT items on Coconut and those with the most total quantity of Upload/ Purchase will receive more CONT.
                   </Text>
                 </Grid>  
              </Grid>
            </div>
            <div className="claim">
              <Grid
                container
                spacing={9}
                direction="row"
                justify="center"
                alignItems="stretch"
              >
                <Grid item xs={4}>
                  <div className="claim_historyReward">
                    <div className="claim_content">
                      <Grid  item xs={12}>
                          <Text size="24" modifiers="bold">
                            Your Claiming History 
                          </Text>
                        </Grid>
                      </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="claim_totalReward">
                    <div className="claim_content">
                      <Grid  item xs={12}>
                        <Text size="24" modifiers="bold">
                          Total unclaimed reward
                        </Text>
                        <Text size="24" modifiers={['bold','inline']}>
                          2000
                        </Text>
                        <Text modifiers="inline">
                          CONT
                        </Text>
                        <Button disabled modifiers="totalClaim">
                          CLAIM
                        </Button>
                      </Grid>
                    </div>
                  </div>
                </Grid>  
              </Grid>
            </div>

            <div className="claim_content-detail1">
              <Grid
                container
                spacing={9}
                justify="center"
                alignItems="center"
                direction="column"
              >
                <Grid item xs={2}>
                  <div className="claim_break">
                  </div>
                </Grid>
                <Grid item xs={5}>
                  <Text>
                  Top 25 users with the highest total of NFT purchase times + volume will receive a total reward of 14,000 CONUT from the total reward of 30,000 for the buyers. And users outside the top 25 get tokens by calculating: 16,000 CONUT divided by the total number of users outside the top 25 that week.
                  </Text>
                  <Text>
                  The specific amount of CONUT tokens that the top 25 users with the highest total of NFT purchase times + volume receive:
                  </Text>
                </Grid>
                <Grid item xs={2}>
                  <div className="claim_break">
                  </div>
                </Grid>
                <Grid item xs={10}>
                  <Text>
                Outside top 25 = 16,000 CONT/Total number of users outside the top 25 that week Similarly, we have: Top 25 users with the highest total of NFT upload times will receive a total reward of 14,000 CONUT from the total reward of 30,000 for the uploaders. And users outside the top 25 get tokens by calculating: 16,000 CONUT divided by the total number of users outside the top 25 that week.
                  </Text>
                  <Text>
                  Note: To ensure that the amount of CONUT tokens is properly allocated to users and attracts more users coming to our service:
                  </Text>
                  <ul className="claim_list">
                    <li>
                    If there are less than 25 NFT uploaders(minters) that week: Each user will receive up to 50 CONUT tokens
                    </li>
                    <li>
                    If there are less than 25 NFT buyers that week: Each person will receive up to 50 CONUT tokens
                    </li>
                    <li>
                    If there are less than 150 NFT uploaders(minters) that week: Each user outside the top 25 NFT uploaders will receive up to 50 CONUT tokens
                    </li>
                    <li>
                    If there are less than 150 NFT buyers that week: Each user outside the top 25 NFT buyers will receive up to 50 CONUT tokens
                    </li>
                  </ul>
                  <Text>
                  If one of these cases occurs, the balance after Coconut reward the mining tokens for users will be returned to the Marketplace Mining System fund to be distributed to the next users in the future.
                  </Text>
                  <img className="claim_marketplaceIMG" src={chart} ></img>
                </Grid>
                <Grid item xs={2}>
                  <div className="claim_break">
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="claim">
              <Grid
                container
                spacing={9}
                direction="row"
                justify="center"
                alignItems="center"
                >
                <Grid item xs={7}>
                  <img src={chart2} />
                </Grid>
                <Grid item xs= {4}>
                  <Text>
                  We reserve a right to alter Marketplace mining process to ensure that any potential attempts to cheat the system and demolish the fairness of our process can be eliminated.
                  </Text>
                </Grid>
                <Grid item xs={12}>
                <Button anchor={{ href: '/' }} >Done</Button>
                </Grid>
              </Grid>
            </div>
          </Section>
        </Layout>
      </div>


    </div>
    </Form>
);
}}
</Formik>
</div>
);
};

export default hot(Claim);
