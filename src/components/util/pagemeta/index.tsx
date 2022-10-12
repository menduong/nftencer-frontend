import React from 'react';
import { Helmet } from 'react-helmet';
import logo from 'assets/images/ccn_logoOF.png';
import gtag, { install } from 'ga-gtag';
interface Props {
  title: string;
}

install('G-367HCBT3P8');
export const Pagemeta: React.FC<Props> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon"  href={logo} sizes="16x16" />
      <meta name="naver-site-verification" content="fff5aa1d2ca09aa8ce9da616973fc4ef96f97734" ></meta>
      <meta name="title" content="COCONUT.GLOBAL"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content="COCONUT.GLOBAL"></meta>
      <meta property="og:description" content="인플루언서들의 NFT 숏폼 서비스 , 숏폼 영상 찍고 거래해 보자"></meta>
      <meta property="og:image" content="https://app.coconut.global/ccn_logoOF.png"></meta>
      <meta property="og:url" content="https://app.coconut.global"></meta>
      <meta name="description" content="인플루언서들의 NFT 숏폼 서비스 , 숏폼 영상 찍고 거래해 보자."></meta>
    

    </Helmet>
  );
};
