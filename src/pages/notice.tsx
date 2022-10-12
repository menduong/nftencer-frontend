import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from 'components/templates/layout';
import { Section } from 'components/organisms/section';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Heading } from 'components/molecules/heading';
import Tabs from '@material-ui/core/Tabs';
import { Form, Formik } from 'formik';
import axios from 'axios';
import { createSchema, initialValue } from 'components/pages/create/form';
import Tab from '@material-ui/core/Tab';
import { Parser } from 'html-to-react'
import Grid from '@material-ui/core/Grid';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={4}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
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

export const userguilde: React.FC = () => {
  const classes = useStyles();
  const result = window.location.href?.substring(window.location.href.indexOf("="));
  const result_final = parseInt(result.substring(1));
  const [value, setValue] = React.useState(result_final);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const [reg, regSet] = useState(Array);
  const Getevent = async ()=> {
    try {
    const listevent = await axios.get (`${process.env.ADDRESS_API}/event/paging?status=0&limit=99&offset=0`);
    const ListEvent = listevent.data.reports;
    regSet(ListEvent);
    }catch {
      console.log("error get notice")
    }
  }

  useEffect(() => {
    Getevent();
  }, []);

  return (
    <div className="p-explore">
        <Formik initialValues={initialValue} validationSchema={createSchema}   onSubmit={values => {
            }}
            validateOnMount
        >
          {({ values }) => {
  return (
<Form>
    <div className="p-explore">
      <div className="p-create">
        <Layout title="Notice">
          <Section className="p-explore_Notice">
          <div className={classes.root}>
          <Grid
            container
            spacing={1}
          >
            <Grid item xs={3}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs"
              className={classes.tabs}
            >
            {reg.map((item,idx) =>(
              <Tab className={classes.tab} key={idx} label={item?.title} {...a11yProps(idx)} />
            ))}
            </Tabs>
            </Grid>
            <Grid item xs={9}>
            {reg.map((items,i) =>(
              <div className="notice">
                <TabPanel key={i} value={value} index={i}>
                  <img className="notice_img" src={items.banner}/>
                  <div className="notice_title">  
                    <Heading type="h1">{items.title}</Heading>
                  </div>
                  <div>
                    <div className="npm">{Parser().parse(items.content)}</div>
                  </div>
                </TabPanel>
              </div>
             ))}
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

export default hot(userguilde);
