import React from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { StepIcon } from 'components/molecules/stepItem';

export type IconName =
  | StepIcon
  | 'arrow'
  | 'deletecolor'
  | 'redelete'
  | 'arrow-down'
  | 'bid'
  | 'close'
  | 'close-modal'
  | 'cross'
  | 'coin'
  | '400'
  | 'filter'
  | 'report'
  | 'delete'
  | 'plus'
  | 'resell'
  | 'threedots'
  | 'bell'
  | 'binance'
  | 'sharelink'
  | 'hamburger'
  | 'heartoutline'
  | 'heartred'
  | 'heart'
  | 'heart-active'
  | 'more'
  | 'search'
  | 'search-not-found'
  | 'share'
  | 'tick'
  | 'top1'
  | 'top2'
  | 'upload'
  | 'top3'
  | 'shareicon'
  | 'play'
  | 'twit'
  | 'teleg'
  | 'fb'
  | 'c98'
  | 'metamask'
  | 'playpink'
  | 'uploadim'
  | 'eye'
  | 'copiedwhite'
  | 'createitem'
  | 'firetab'
  | 'threedotNobackground'
  | 'discord'
  | 'newtab'
  | 'cointab'
  | 'medaltab'
  | 'tagtab'
  | 'dollar'
  | 'smile'
  | 'backtotop'
  | 'wallet'
  | 'flagEN'
  | 'flagVN'
  | 'flagKR'
  | 'logo2'
  | 'bellnoti'
  | 'metamaskfox'
  | 'down'
  | 'arrowright'
  | 'questionmark'
  | 'logomini'
  | 'dotgreen'
  | 'ioma'
  | 'multicircle'
  | 'censored'
  | 'single'
  | 'multi'
  | 'medium'
  | 'mediumb'
  | 'instagram'
  | 'twitterb'
  | 'instagramb'
  | 'telegramb'
  | 'ccn_logo'
  | 'done'
  | 'maint'
  | 'myitem'
  | 'explore'
  | 'Sidemenu'
  | 'moreMenu'
  | 'faq'
  | 'multiAvatar'
  | 'bag'
  | 'greenDot'
  | 'fly'
  | 'camera'
  | 'history'
  | 'messages';

interface Props {
  iconName: IconName;
  modifiers?: Modifier | Modifier[];
  children?: any;
}
type Modifier = 'colorDelete'|'colorResell'|'tiny'|'small'| 'medium'|'large'| 'mini' |'middle' | 'superlarge' | 'create' | 'custom' | 'filterexplore' | 'large32' | 'flag' |'logoClaim' | 'marginLeft' | '32px' |'60px' |'dotgreen' | 'new' | 'ioma' | 'ultra'|'flex' | 'sideabar' | 'SuperUltra' | 'Avatar' | 'free' |'camera';

export const Icon: React.FC<Props> = props => {
  return <span className={mapModifiers('a-icon', props.iconName, props.modifiers)} >{props.children}</span>;
};

export default hot(Icon);
