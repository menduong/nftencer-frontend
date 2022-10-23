import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Link } from 'gatsby';
import axios from 'axios';
import banner from 'assets/images/NFTencer/banner.png';
import Carousel from 'react-material-ui-carousel'
type Modifier = 'overflowx' | 'overflowy' | 'overhidden' | 'error' | 'center';

interface Props {
  link?: string;
}
export const Carouselt: React.FC<Props> = props => {
  const [reg, regSet] = useState(Array);
  const getBanner = async () => {
    try {
      const listevent = await axios.get(`https://api.nftencer.global/banner/paging?status=0&limit=99&offset=0`);
      const ListBanner = listevent.data.banners;
      regSet(ListBanner);
    } catch {
      console.log("error get Banner")
    }
  }


  useEffect(() => {
    getBanner()
  }, []);
  return (
    <div className="carousel_containt">

      <Carousel
        className="carousel"
        indicators={true}
        navButtonsAlwaysVisible={true}
        activeIndicatorIconButtonProps={{
          style: {
            color: 'gray',
            fontSize: '10px' // 2
          }
        }}
        indicatorIconButtonProps={{
          style: {
            position: 'relative',
            color: 'white',  // 3,
            fontSize: "10px",

          }

        }}
      >
        {/* {
          reg?.map((item, i) =>
            <Link to={item.link}>
              <img key={i} src={banner} />
            </Link>
          )
        } */}
         <img alt="banner" src={banner} />
      </Carousel>
    </div>
  )
};

export default hot(Carouselt);
