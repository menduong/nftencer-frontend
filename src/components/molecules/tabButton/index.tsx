import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Button } from 'components/atoms/button';
import { Text } from 'components/atoms/text';
import { Field } from 'formik';

type Modifier = 'foo' | 'bar' | 'explore' |'category';

interface Props {
  modifiers?: Modifier | Modifier[];
  explore?: boolean;
  category?: boolean;
  active?: boolean;
  handleClick?: () => void;
  useFormik?: boolean;
  value?: string;
  name?: string;
}

export const TabButton: React.FC<Props> = props => {
  return props.useFormik ? (
    <label className={mapModifiers('m-tabbutton', props.modifiers)}>
      <Field type="radio" value={props.value} className="m-tabbutton_input" name={props.name} />
      <div className="m-tabbutton_indicator" onClick={props.handleClick}>
      { props.explore? (
        <Text modifiers={["centerexplore",'explore']} size="18">{props.children}</Text>
        ):(
        <Text modifiers={["center"]} size="18">{props.children}</Text>
         )}
      </div>
    </label>
  ) : (
    <div className={mapModifiers('m-tabbutton', props.modifiers, props.active && 'active')}>
      {props.category? (
         <Button modifiers={['category']} handleClick={props.handleClick}>
           #&nbsp;{props.children}
       </Button>
      ) : (
      <Button modifiers={['asText']} handleClick={props.handleClick}>
        <Text modifiers={props.active ? 'active' : void 0} size="18">
          {props.children}
        </Text>
      </Button>
      )}
    </div>
  );
};

export default hot(TabButton);
