import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Icon, IconName } from 'components/atoms/icon';
import { Text } from 'components/atoms/text';
import { useFormikContext } from 'formik';

type Modifier = 'border';
interface Props {
  iconName?: IconName;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: 'radio' | 'checkbox';
  name?: string;
  checked?: boolean;
  value?: string | number;
  amount?: number;
  modifiers?: Modifier | Modifier[];
}

interface FormikProps extends Omit<Props, 'name'> {
  name: string;
}

export const CheckInput: React.FC<Props> = props => {
  return (
    <label
      className={mapModifiers(
        'a-checkinput',
        props.iconName && 'icon',
        typeof props.amount === 'number' && 'amount',
        props.modifiers
      )}
    >
      <input
        type={props.type || 'checkbox'}
        name={props.name}
        className="a-checkinput_input"
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        checked={props.checked}
        value={props.value}
      />
      <div className="a-checkinput_indicator">
        {props.iconName ? <Icon iconName={props.iconName} /> : <Text>{props.children}</Text>}
        {typeof props.amount === 'number' && (
          <Text size="12" modifiers="gray" inline>
            {props.amount}
          </Text>
        )}
      </div>
    </label>
  );
};

export const CheckInputFormik: React.FC<FormikProps> = props => {
  const { handleBlur, handleChange, values } = useFormikContext<any>();
  return (
    <CheckInput
      {...props}
      handleChange={e => {
        handleChange(e);
        props.handleChange && props.handleChange(e);
      }}
      handleBlur={e => {
        handleBlur(e);
        props.handleBlur && props.handleBlur(e);
      }}
      checked={values[props.name] === props.value}
    />
  );
};

export default hot(CheckInput);
