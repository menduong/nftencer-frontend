import { useFormikContext } from 'formik';
import React from 'react';
import { hot } from 'react-hot-loader/root';

interface Props {
  name: string;
  placeholder?: string;
  maxLength?: number;
  value?:string;
}

export const Textarea: React.FC<Props> = props => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { handleBlur, handleChange } = useFormikContext<any>();
  return (
    <textarea
      className="a-textarea"
      placeholder={props.placeholder}
      name={props.name}
      onBlur={handleBlur}
      onChange={handleChange}
      maxLength={props.maxLength}
      value={props.value}
    >
      {props.children}
    </textarea>
  );
};

export default hot(Textarea);
