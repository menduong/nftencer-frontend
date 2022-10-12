import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Field, useFormikContext } from 'formik';
import { Icon } from 'components/atoms/icon';
import { Button } from 'components/atoms/button';

type Modifier = 'search'|'price';

interface Props {
  modifiers?: Modifier | Modifier[];
  unit?: string;
  type?: 'text' | 'tel' | 'password' | 'number' | 'search';
  placeholder?: string;
  name: string;
  useFormik?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
  readonly?: boolean;
}

export const Textfield: React.FC<Props> = ({
  modifiers,
  type,
  placeholder,
  unit,
  name,
  useFormik,
  readonly,
  ...props
}) => {
  return (
    <div className={mapModifiers('a-textfield', modifiers)}>
      <div className="a-textfield_input">
        {!useFormik ? (
          <input type={type} placeholder={placeholder} name={name}>
            
          </input>
        ) : (
          <Field type={type} placeholder={placeholder} name={name} readOnly={readonly} />
        )}
        <Button
          modifiers="icon"
          handleClick={e => {
            if (!useFormik) {
              ((e?.target as Element).previousSibling as HTMLInputElement).value = '';
            } else props.setFieldValue && props.setFieldValue(name, '');
          }}
        >
          <Icon iconName="cross" />
        </Button>
      </div>
      {unit && <span className="a-textfield_unit">{unit}</span>}
    </div>
  );
};

export const TextFieldFormik: React.FC<Props> = props => {
  const { setFieldValue } = useFormikContext();
  return <Textfield {...props} setFieldValue={setFieldValue} useFormik />;
};

export default hot(Textfield);
