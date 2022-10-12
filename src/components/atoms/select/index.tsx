import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Field } from 'formik';

interface Props {
  name: string;
}

export const Select: React.FC<Props> = props => {
  return (
    <Field className="a-select" as="select" name={props.name}>
      {props.children}
    </Field>
  );
};

export default hot(Select);
