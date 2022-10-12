import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import ReactTooltip, { Offset } from 'react-tooltip';
import { Tooltip } from 'components/molecules/tooltip';
import { mapModifiers } from 'lib/component';
import {trigger } from 'store/buyNFT';
import { commonStart } from 'store/common';
import { useDispatch,useSelector } from 'react-redux';
import { getBuyStore } from 'store/buyNFT';
type Modifier = 'flex-end';
interface Props {
  trigger?: React.ReactNode;
  id?: string;
  offset?: Offset;
  modifiers?: Modifier | Modifier[];
  handleClick?: (e: React.MouseEvent) => void;
}

export const Dropdown: React.FC<Props> = props => {

  return (
    <div className={mapModifiers('m-dropdown', props.modifiers)} onBlur={() => {props.handleClick;ReactTooltip.hide()}}>
      <div  className="m-dropdown_trigger" data-tip data-for={props.id} data-event="click">
        {props.trigger}
      </div>
      {props.children && (
        <Tooltip id={props.id} clickable={true} offset={props.offset || { left: 5 }} place="bottom" delayHide={200}>
          {props.children}
        </Tooltip>
      )}
    </div>
  );
};

export default hot(Dropdown);
