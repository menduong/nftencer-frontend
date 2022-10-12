import React from 'react';
import { storiesOf } from '@storybook/react';
import { Textarea } from './index';
import { Formik, Form } from 'formik';

storiesOf('Components|atoms/Textarea', module).add('normal', () => (
  <Formik initialValues={{ test: true }} onSubmit={() => {}}>
    <Form>
      <Textarea name="abc" placeholder="abc" />
    </Form>
  </Formik>
));
