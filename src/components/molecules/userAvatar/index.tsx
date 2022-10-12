import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Image, ImageProps } from 'components/atoms/image';
import { Icon } from 'components/atoms/icon';
import { Link } from 'components/atoms/link';
import { useWallet } from 'use-wallet';
type Modifier = 'small' | 'mid' | 'tiny';

interface Props extends Omit<ImageProps, 'modifiers'> {
  modifiers?: Modifier | Modifier[];
  hasTick?: boolean;
  userAddress?:string;
  scr?:string | any;
}

export const UserAvatar: React.FC<Props> = props => {
  return (
    <div className={mapModifiers('m-useravatar', props.modifiers)}>
      <Link modifiers={['avatar']} href={"/userpage?id="+props.userAddress}>
        <Image src={props.src} alt={props.alt} modifiers="small" />
        {props.hasTick && (
          <i className="m-useravatar_icon">
            <Icon iconName="tick" />
          </i>
        )}
      </Link>
    </div>
  );
};

export default hot(UserAvatar);
