import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Icon, IconName } from 'components/atoms/icon';


interface Props {
  iconName: IconName;
}

export const Icontext: React.FC<Props> = props => {
  return (
    <div className="a-icontext">
      <Icon iconName={props.iconName} />
      {props.children}
    </div>
  );
};

export default hot(Icontext);
