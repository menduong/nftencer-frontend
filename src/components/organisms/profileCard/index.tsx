import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Image } from 'components/atoms/image';
import { UserAvatar } from 'components/molecules/userAvatar';
import { Text } from 'components/atoms/text';
import { mapModifiers } from 'lib/component';
import { Link } from 'components/atoms/link';

export interface ProfileProps {
  modifiers?: 'hasavatarborder';
  background: string;
  avatar: string;
  name: string;
  asideInfo?: string;
  by?: string;
  followers?: number;
  id?:string;
  status?:number;
  cover:string;
}

export const ProfileCard: React.FC<ProfileProps> = props => {
  return (
    <article className={mapModifiers('o-profilecard', props.modifiers)}>
      <div className="o-profilecard_background">
        <Image src={props.cover} alt="" />
      </div>
      <UserAvatar userAddress={props.id} alt="" src={props.avatar} />
      <div className="o-profilecard_profile">
        <Text modifiers="bold">{props.name}</Text>
        {(props.asideInfo || props.followers || props.by) && (
          <Text size="14" modifiers="lightgray">
            {props.asideInfo || (props.followers && `${props.followers} follower`) || (
              <>
                by{' '}
                <Link modifiers="user" href="/#">
                  {props.by}
                </Link>
              </>
            )}
          </Text>
        )}
      </div>
    </article>
  );
};

export default hot(ProfileCard);
