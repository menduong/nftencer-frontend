import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { UserAvatar } from '../userAvatar';
import { Text } from 'components/atoms/text';
import { Icon, IconName } from 'components/atoms/icon';

type Modifier = 'foo' | 'bar';

export interface ViewTabItemProps {
  modifiers?: Modifier | Modifier[];
  image: string;
  alt?: string;
  lead: React.ReactNode | string;
  by?: string;
  name?: string;
  additionInfo?: React.ReactNode;
  hasTick?: boolean;
  userType?: boolean;
  date?:string;
}

export const ViewTabItem: React.FC<ViewTabItemProps> = props => {
  return (
    <div className={mapModifiers('m-viewtabitem', props.modifiers)}>
      <div className="m-viewtabitem_tabss">
      <UserAvatar src={props.image} alt="" modifiers="mid" />
      <div className="m-viewtabitem_info">
        {typeof props.lead === 'string' ? (
          <Text size="14" modifiers={['bold', 'gray']}>
            {props.lead}
          </Text>
        ) : (
          props.lead
        )}
        {((props.by || props.name)&& props.userType) && (
          <Text size="14" modifiers={['lightgray']}>
            {props.by && 'by'}{' '}
            <Text inline size="14" modifiers="bold">
              0x123456
            </Text>
          </Text>
        )}
        {props.additionInfo}
      </div>
      </div>
      {(!props.userType && !props.date) && (
      <div><button><Icon modifiers={['large']} iconName="threedots" /></button></div>
      )}
    </div>
  );
};

export default hot(ViewTabItem);
