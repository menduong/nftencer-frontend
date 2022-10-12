import React from 'react';
import { storiesOf } from '@storybook/react';
import { Collection } from './index';
import { Form, Formik } from 'formik';

storiesOf('Components|molecules/Collection', module).add('normal', () => (
  <Formik initialValues={{ abc: 'NFT' }} onSubmit={() => {}}>
    <Form>
      <Collection
        name="abc"
        value="NFT"
        src="https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmfNA7QWXzSp5G7qwkR9DxR225AGbtxjtfGDKrX2s9TV2N&w=100"
      />
      <Collection
        name="abc"
        value="Rarible"
        src="https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmfNA7QWXzSp5G7qwkR9DxR225AGbtxjtfGDKrX2s9TV2N&w=100"
      />
    </Form>
  </Formik>
));
