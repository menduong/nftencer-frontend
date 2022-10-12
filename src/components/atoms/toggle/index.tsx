import { Field } from 'formik';
import { mapModifiers } from 'lib/component';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Text } from '../text';

interface Props {
  name: string;
  label?: string;
}

export const Toggle: React.FC<Props> = props => {
  return (
    <label className={mapModifiers('a-toggle', props.label && 'withlabel')}>
      <Field type="checkbox" className="a-toggle_input" name={props.name} />
      <div className="a-toggle_indicator">
        {props.label && <Text>{props.label}</Text>}
        <span></span>
      </div>
    </label>
  );
};

export default hot(Toggle);
