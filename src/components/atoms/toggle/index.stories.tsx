import React from 'react';
import { storiesOf } from '@storybook/react';
import { Toggle } from './index';
import { Formik, Form } from 'formik';

storiesOf('Components|atoms/Toggle', module).add('normal', () => (
  <Formik initialValues={{ test: true }} onSubmit={() => {}}>
    <Form>
      <Toggle name="test">Sample test</Toggle>
    </Form>
  </Formik>
));
