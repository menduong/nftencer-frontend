import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Field } from 'formik';
import { Image } from 'components/atoms/image';
import { Text } from 'components/atoms/text';

interface Props {
  name: string;
  value: string;
  src: string;
}

export const Collection: React.FC<Props> = props => {
  return (
    <label className="m-collection">
      <Field type="radio" name={props.name} value={props.value} />
      <div className="m-collection_indicator">
        <div className="m-collection_image">
          <Image src={props.src} alt="" />
        </div>
        <Text size="14" modifiers="bold">
          {props.value}
        </Text>
      </div>
    </label>
  );
};

export default hot(Collection);
