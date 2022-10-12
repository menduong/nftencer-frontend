import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from 'components/templates/layout';
import { Form, Formik } from 'formik';
import { createSchema, initialValue } from 'components/pages/create/form';
import { Button } from 'components/atoms/button';
import connect1 from 'assets/images/connect1.png';
import connect2 from 'assets/images/connect2.png';
import connect3 from 'assets/images/connect3.png';
import connect4 from 'assets/images/connect4.png';

export const userguildeconnect: React.FC = () => {
  return (
    <div className="p-create">
      <Layout title="Create NFT">
          <Formik
            initialValues={initialValue}
            validationSchema={createSchema}
            onSubmit={values => {
            }}
            validateOnMount
          >
            {({ values, isValid, setTouched, touched }) => {
              return (
                <Form className="p-create_form">
                  <div className="p-create_guilde">
                    <img className="p-create_imgConnect" src={connect1}></img>
                    <img className="p-create_imgConnect" src={connect2}></img>
                    <img className="p-create_imgConnect" src={connect3}></img>
                    <img className="p-create_imgConnect" src={connect4}></img>
                    <div className="p-create_buttonDone">
                      <Button anchor={{ href: '/' }} modifiers="bigDone">Done+</Button>
                    </div>
                  </div>
                </Form>
                
              );
            }}
          </Formik>
      </Layout>
    </div>
  );
};

export default hot(userguildeconnect);
