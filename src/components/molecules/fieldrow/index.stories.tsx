import React from 'react';
import { storiesOf } from '@storybook/react';
import { Fieldrow } from './index';
import { TextFieldFormik } from 'components/atoms/textfield';
import { Formik, Form } from 'formik';

storiesOf('Components|molecules/Fieldrow', module)
  .add('normal', () => (
    <Formik initialValues={{ firstName: '', lastName: '', email: '' }} onSubmit={() => {}}>
      <Form>
        <Fieldrow
          isOptional
          fieldName="Instant sale price"
          lead="Enter the price for which the item will be instantly sold"
          toggleName="test1"
          caption={['Service fee 0%', 'You will receive 0 BMP $0.00']}
        >
          <TextFieldFormik name="input" placeholder="Enter price for one piece" type="text" />
        </Fieldrow>
      </Form>
    </Formik>
  ))
  .add('2col', () => (
    <Formik initialValues={{ firstName: '', lastName: '', email: '' }} onSubmit={() => {}}>
      <Form>
        <Fieldrow fieldName="Properties">
          <TextFieldFormik placeholder="placeholder" type="text" name="i1" />
          <TextFieldFormik placeholder="placeholder" type="text" name="i2" />
        </Fieldrow>
      </Form>
    </Formik>
  ));
