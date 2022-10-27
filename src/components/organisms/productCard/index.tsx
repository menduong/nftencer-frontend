import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Heading } from 'components/molecules/heading';
import { Text } from 'components/atoms/text';
import { Image, ImageProps } from 'components/atoms/image';
import { Icon, IconName } from 'components/atoms/icon';
import { Link } from 'components/atoms/link';
import { useWallet } from 'use-wallet';
import axios from 'axios';
import { UserAvatar } from 'components/molecules/userAvatar';
import { UserType, VideoType, VideoTypes } from 'lib/constants';
import { Button } from 'components/atoms/button';
import { Video } from 'components/molecules/video';
import { Tooltip } from 'components/molecules/tooltip';
import { Modal } from 'components/organisms/modal';
import { Modalshare } from 'components/organisms/modalshare';
import { ModalHeader } from 'components/molecules/modalHeader';
import { useDispatch, useSelector } from 'react-redux';
import { resetStore } from 'store/createNFT';
type Modifier = 'foo' | 'bar';

export type User = { src: string; alt: string; type: UserType; name: string };
export interface ProductProps extends Omit<ImageProps, 'modifiers'> {
  modifiers?: Modifier | Modifier[];
  title: string;
  price?: number;
  bidPrice?: string | number;
  userList?: User[];
  amount?: number;
  collection?: string;
  isPreview?: boolean;
  id?: string | number;
  mediaType?: 'gif' | 'png' | 'image' | VideoType;
  unit?: string;
  address?: string;
  totallike?: any;
  userid?: string;
  view?: number;
  creator?: string;
  creator_acc?: string;
  liked?:boolean;
  owner:string;
  owneraddress:string;
  ownerAvatar: string | any;
}


export const Productcard: React.FC<ProductProps> = props => {
  const wallet = useWallet();
  const [like, setLike] = useState({ isLike:props.liked? true: false, amount: props.amount });
  const likevolume = props.totallike;
  const productLink = `/view?id=${props.id}`;
  const dispatch = useDispatch();
  const [ModalOpendelete, setModalOpendelete] = useState(false);
  const serviceFee = Number(process.env.SERVICE_FEE);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [ModalResell, setModalResell] = useState(false);
  const [modalOpenShare, setModalOpenShare] = useState(false);
  const [modalInception, setmodalInception] = useState(false);
  
  useEffect(() => {
    if (!ModalResell) {
      dispatch(resetStore());
      // currentStep.number === CreateSteps.length && navigate('/');
    }

  }, [dispatch, ModalResell]);
  useEffect(() => {
    if (!ModalOpendelete) {
      dispatch(resetStore());
    }

  }, [dispatch, ModalOpendelete]);
  useEffect(() => {
    if (!modalOpenShare) {
      dispatch(resetStore());
      // currentStep.number === CreateSteps.length && navigate('/');
    }

  }, [dispatch, modalOpenShare]);
  const view = async () => {
    try {
    // const viewer = await axios.post(`${process.env.ADDRESS_API}/view?collectible_id=${props.id}`)
    }catch {
      console.log("update number of View error")
    }
  }
  const numberLike = async () => {
    if (!like.isLike) {
      const liked = await axios.post(`${process.env.ADDRESS_API}/nft/like?collectible_id=${props.id}&account_id=${props.userid}&action=1`)
      setLike({
        isLike: !like.isLike,
        amount: !like.isLike && typeof props.amount === 'number' && props.liked===false ? props.amount + 1 : props.amount,
      })
    } else {
      const unliked = await axios.post(`${process.env.ADDRESS_API}/nft/like?collectible_id=${props.id}&account_id=${props.userid}&action=0`)
      setLike({
        isLike: !like.isLike,
        amount: like.isLike && typeof props.amount === 'number' && props.liked ? props.amount -1 : props.amount,
      })
    }
  }
  return (
    <article className={mapModifiers('o-productcard', props.modifiers, props.isPreview && 'preview')}>
      {props.isPreview ? (
        <ProductPreview {...props} />
      ) : (
          <>
            {/* <Link handleClick={() => view()} href={productLink}> */}
              <div className="o-productcard_media">
                {VideoTypes.includes(props.mediaType || '') ? (
                  <Video src={props.src} />
                ) : (
                    <Image src={props.src} alt={props.alt} />
                  )}
                <span className="o-productcard_view"><Icon modifiers="large32" iconName='multiAvatar' />{props.view}</span>

              </div>

            {/* </Link> */}
            {/* {wallet?.status === 'connected' ?
              (
                <button
                  onClick={() => numberLike()
                  }
                  className="o-productcard_like">
                    {props.totallike + like.amount}&nbsp;&nbsp;
                  <Icon iconName={like.isLike ? 'heartred' : 'heartoutline'} />
                </button>
              ) : (
                
                <button
                  onClick={() => setmodalInception(true)}
                  className="o-productcard_like">
                    {props.totallike + like.amount}&nbsp;&nbsp;
                  <Icon iconName={like.isLike ? 'heartred' : 'heartoutline'} />
                </button>
              )
            } */}
            <Button handleClick={() => setModalOpenShare(true)} modifiers={['iconshare']}><Icon modifiers={['large32']} iconName='threedots' />111</Button>
            <Modal isOpen={modalOpenShare} handleClose={() => setModalOpenShare(false)}>
              <ModalHeader title="Share this NFT" handleClose={() => setModalOpenShare(false)} />
              <Modalshare link={productLink} />
            </Modal>
            
            <div className="o-productcard_info">
              <div className="o-productcard_heading">
                <div className="o-productcard_lead">
                  <Link href={productLink}>
                    <Heading type="h4" title={props.title}>
                      {props.title}
                    </Heading>
                  </Link>
                </div>
              </div>
              <div className="o-productcard_bmp">
                <div className="o-productcard_price">
                  <Text modifiers={['black']} inline unit={props.unit}>
                    {props.price}
                  </Text>
                </div>
                <ul className="o-productcard_userlist">
                  <li

                    className={`o-productcard_user o-productcard_user-1`}
                  >
                    <UserAvatar src={props.ownerAvatar} userAddress={props.owneraddress} modifiers="small" />
                  </li>
                </ul>
              </div>
            </div>
            <Tooltip />
          </>
        )}
    </article>
  );
};

const ProductPreview: React.FC<ProductProps> = props => {
  return (
    <>
      <div className="o-productcard_media">
        {(props.src &&
          (VideoTypes.includes(props.mediaType || '') ? (
            <Video key={props.src} src={props.src} />
          ) : (
              <Image src={props.src} alt={props.alt} />
            ))) || (
            <Text size="14" modifiers="lightgray">
              Media Review
            </Text>
          )}

      </div>
      <div className="o-productcard_info">
        <div className="o-productcard_heading">
          <div className="o-productcard_lead">
            <Heading type="h4" title={props.title}>
              {props.title || (
                <Text size="14" inline modifiers="lightgray">
                  [Name]
                </Text>
              )}
            </Heading>
            <Text modifiers={['gray', 'bold']} size="12" inline>
              {props.collection}
            </Text>
          </div>
        </div>
        <div className="o-productcard_bmp">
          <div className="o-productcard_price">
            <Text modifiers={['blue', 'bold']} inline unit={props.unit}>
              {props.price}
            </Text>
            <Text modifiers={['gray']} size="14" inline>
              1 of 1
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default hot(Productcard);
