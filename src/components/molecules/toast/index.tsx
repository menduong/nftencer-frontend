import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Icon } from 'components/atoms/icon';
import { Text } from 'components/atoms/text';

interface Props {
  handleClose: () => void;
}

export const Toast: React.FC<Props> = props => {
  useEffect(() => {
    setTimeout(props.handleClose, 50000);
  }, [props.handleClose]);

  return (
    <div className="m-toast">
      <div className="m-toast_icon">
        <Icon iconName="tick" />
      </div>
      {props.children && <Text>{props.children}</Text>}
    </div>
  );
};

export default hot(Toast);
