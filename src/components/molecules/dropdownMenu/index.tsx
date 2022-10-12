import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Text } from 'components/atoms/text';

type DropdownMenuModifier = 'foo' | 'bar';
type Modifier = 'noti';
interface DropdownMenuProps {
  modifiers?: Modifier | DropdownMenuModifier | DropdownMenuModifier[];
  groupName?: string;
  additionGroups?: { name: string; items: React.ReactNode }[];
}

export const DropdownMenu: React.FC<DropdownMenuProps> = props => {
 
  return <div className={mapModifiers('m-dropdownmenu', props.modifiers)}>{props.children}</div>;
};

interface DropDownItemGroupProps {
  groupName?: string;
}

export const DropDownItemGroup: React.FC<DropDownItemGroupProps> = props => (
  <div className="m-dropdown_group">
    <Text modifiers={['black']}>{props.groupName}</Text>
    <ul className="m-dropdown_list">{props.children}</ul>
  </div>
);
interface DropdownItemProps {
  active?: boolean;
  handleClick?: (e: React.MouseEvent) => void;
}

export const DropdownItem: React.FC<DropdownItemProps> = props => {
  
  return (
    <li className={mapModifiers('m-dropdownitem', props.active && 'active')} onClick={props.handleClick}>
      {props.children}
    </li>
  );
};

export default hot(DropdownMenu);
