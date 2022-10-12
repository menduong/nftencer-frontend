import React from 'react';
import { storiesOf } from '@storybook/react';
import { FileInput } from './index';
import { Form, Formik } from 'formik';

storiesOf('Components|atoms/Fileinput', module).add('normal', () => (
  <Formik initialValues={{ test: true }} onSubmit={() => {}}>
    <Form>
      <FileInput name="abc" label="PNG, GIF, WEBP, MP4 or MP3. Max 30mb. "></FileInput>
    </Form>
  </Formik>
));
