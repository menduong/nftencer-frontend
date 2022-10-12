import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import ReactTooltip, { TooltipProps } from 'react-tooltip';
import { mapModifiers } from 'lib/component';
import {trigger,refreshnoti } from 'store/buyNFT';
import { commonStart } from 'store/common';
import { useDispatch,useSelector } from 'react-redux';
import { getBuyStore } from 'store/buyNFT';

export const Tooltip: React.FC<TooltipProps> = props => {
  const { isTrigger} = useSelector(getBuyStore);
  const dispatch = useDispatch();
  return (
    <div className={mapModifiers('m-tooltip', !props.children && 'boxshadow')}>
      <ReactTooltip afterShow={()=>{dispatch(commonStart({ nextAction: trigger() }));dispatch(commonStart({ nextAction: refreshnoti() }))}} {...props} type="light" delayShow={props.delayShow || 200} effect="solid">
        {props.children}
      </ReactTooltip>
    </div>
  );
};

export default hot(Tooltip);
