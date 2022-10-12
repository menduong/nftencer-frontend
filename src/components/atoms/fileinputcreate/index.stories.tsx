import React from 'react';
import { storiesOf } from '@storybook/react';
import { FileInputcreate } from './index';
import { Form, Formik } from 'formik';

storiesOf('Components|atoms/Fileinputcreate', module).add('normal', () => (
  <Formik initialValues={{ test: true }} onSubmit={() => {}}>
    <Form>
      <FileInputcreate name="abc" label="PNG, GIF, WEBP, MP4 or MP3. Max 30mb. "></FileInputcreate>
    </Form>
  </Formik>
));
