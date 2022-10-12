import React from 'react';
import { storiesOf } from '@storybook/react';
import { MultiSelect } from './index';
import { Categories } from 'lib/constants';
import { Form, Formik } from 'formik';

storiesOf('Components|atoms/Mutiselect', module).add('normal', () => (
  <Formik initialValues={{ categories: [{ id: 1, name: 'Art' }] }} onSubmit={() => {}}>
    {({ values }) => (
      <Form>
        <MultiSelect options={Categories} name="categories" selectedValues={values.categories} />
      </Form>
    )}
  </Formik>
));
