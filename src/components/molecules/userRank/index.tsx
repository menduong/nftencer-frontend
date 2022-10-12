import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Icon, IconName } from 'components/atoms/icon';
import { UserAvatar } from 'components/molecules/userAvatar';
import { Text } from 'components/atoms/text';
import { UserType } from 'lib/constants';

export type UserRankType = {
  rank?: number;
  image: string;
  alt: string;
  name: string;
  point?: number;
  userType?: UserType;
};

interface Props extends UserRankType {
  size?: 'mid';
}

export const UserRank: React.FC<Props> = props => {
  return (
    <div className="m-userrank">
      {props.rank && (
        <div className="m-userrank_number">
          {props.rank <= 3 ? <Icon iconName={`top${props.rank}` as IconName} /> : `${props.rank}.`}
        </div>
      )}
      <UserAvatar src={props.image} alt={props.alt} modifiers={props.size} hasTick />
      <div className="m-userrank-info">
        <Text size="18" modifiers="bold">
          {props.name}
        </Text>
        {props.point && (
          <Text size="14" modifiers={['bold', 'gray']} unit="BMP">
            {props.point}
          </Text>
        )}
        {props.userType && (
          <Text size="14" modifiers={['bold', 'gray']}>
            {props.userType}
          </Text>
        )}
      </div>
    </div>
  );
};

export default hot(UserRank);
