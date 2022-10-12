import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Heading } from 'components/molecules/heading';
import { Text } from 'components/atoms/text';
import { Image, ImageProps } from 'components/atoms/image';
import { Link } from 'components/atoms/link';
import { UserType, VideoType, VideoTypes } from 'lib/constants';
import { Video } from 'components/molecules/video';
import { Tooltip } from 'components/molecules/tooltip';

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
}

export const Productcard: React.FC<ProductProps> = props => {
  const [like, setLike] = useState({ isLike: false, amount: props.amount });
  const productLink = `/view?id=${props.id}`;
  return (
    <article className={mapModifiers('o-productcard', props.modifiers, props.isPreview && 'preview')}>
      {props.isPreview ? (
        <ProductPreview {...props} />
      ) : (
        <>
          <Link href={productLink}>
            <div className="o-productcard_media">
              {VideoTypes.includes(props.mediaType || '') ? (
                <Video src={props.src} />
              ) : (
                <Image src={props.src} alt={props.alt} />
              )}
            </div>
          </Link>
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
                <Text modifiers={['blue', 'bold']} inline unit={props.unit}>
                  {props.price}
                </Text>
                <Text modifiers={['gray']} size="14" inline>
                  1 of 1
                </Text>
              </div>
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
            Media Review1
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
