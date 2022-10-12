import React, { useRef, useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Button } from 'semantic-ui-react'
import { getExploreStore, getProductList, GetProductListReq, getTotalVolume } from 'store/explore';
import { Icon } from 'components/atoms/icon';
import axios from 'axios';
import  Controls  from '../../organisms/videocustom';
import { useDispatch, useSelector } from 'react-redux';
import { Waypoint } from 'react-waypoint';
import ReactPlayer from "react-player";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import logo from 'assets/images/icon-censored.svg';
import { approveBUSD, approveCONT, closeModal, getBuyStore, getProduct, openModal, purchase } from 'store/buyNFT';
import { useMediaQuery } from 'react-responsive'
interface Props {
  src: string;
  view?:boolean;
  fill?:boolean;
  colID?: any;
  detail?: boolean;
  censored?: any;
}
const useStyles = makeStyles((theme) => ({
  playerWrapper: {
    width: "100%",

    position: "relative",
  },

  controlsWrapper: {
    visibility: "hidden",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  topControls: {
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(2),
  },
  middleControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomWrapper: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },

  bottomControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  button: {
    margin: theme.spacing(1),
  },
  controlIcons: {
    color: "#777",

    fontSize: 50,
    transform: "scale(0.9)",
    "&:hover": {
      color: "#fff",
      transform: "scale(1)",
    },
  },

  bottomIcons: {
    color: "#999",
    "&:hover": {
      color: "#fff",
    },
  },

  volumeSlider: {
    width: 100,
  },
}));

let count = 0;
export const Video: React.FC<Props> = props => {
  const vidRef = useRef<any>(null);
  const controlsRef = useRef(null);
  const [width, setWidth] = useState(0);
  const { isMute, isSuccess, product, isGetDone } = useSelector(getBuyStore);
  const classes = useStyles();
  const [state, setState] = useState({
    pip: false,
    playing: true,
    controls: false,
    light: false,
    muted: false,
    played: 0,
    duration: 0,
    playbackRate: 1.0,
    volume: 1,
    loop: false,
    seeking: false,
  });
  const {
    playing,
    controls,
    muted,
    loop,
    played,
  } = state;

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };



  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
  };
  const isMobile = useMediaQuery({
    query: '(max-width: 840px)'
  })
  const playerContainerRef = useRef(null);
  const store = useSelector(getExploreStore);
  const handlePlayVideo = async () => {
    try {
    const playPromise = vidRef.current.play();
    if (playPromise !== undefined) {

    playPromise.then(async _ => {
      // Automatic playback started!
      // Show playing UI.
      if (shouldPlay == false) {
      vidRef.current.pause();
      } else {
        vidRef.current.play();
        // await axios.post(`${process.env.ADDRESS_API}/view?collectible_id=${props.colID}`)
      }
    })
    .catch(() => {
      void 0
    });

    }
    } catch {
      console.log ("fail video display")
    }
  }
    const [shouldPlay, updatePlayState] = useState<any>(false);
    const [isloading, setisLoading] = useState(true);
    const [data, dataSet] = useState(false)
    const handleMouseMove = () => {
      dataSet(true)
      count = 0;
    };
  
    const hanldeMouseLeave = () => {
      dataSet(false)
      count = 0;
    };

    const handleEnterViewport = function() {
      updatePlayState(true);
      setisLoading(!isloading);
    }
    let handleExitViewport = function() {
      updatePlayState(false);
      setisLoading(!isloading);
    }
    useEffect (()=>{
      handlePlayVideo()
    },[isloading])
    
    useEffect (()=>{
    
    
      setWidth(vidRef.current.getBoundingClientRect().width);
    }, []);
      
  return (
    <div className="video-product"
      onMouseMove={handleMouseMove}
      onMouseLeave={hanldeMouseLeave}
      ref={playerContainerRef}>
      
    {props.view? (
      <Waypoint 
      onEnter={handleEnterViewport}
      onLeave={handleExitViewport}
      topOffset="80%"
    >
    <div className="m-video">
    <div>
      <video
        className="video__player"
        ref={vidRef}
        src={props.src}
        autoPlay={playing}
        controls={false}
        loop={true}
        muted={isMute}
      >
      </video>
      <Controls
        ref={controlsRef}
        onPlayPause={handlePlayPause}
        playing={playing}
        played={played}
        onMute={hanldeMute}
        muted={isMute}
        volume='0'
        visible={data}
        status={props.censored}
      />
      </div>
      </div>
      </Waypoint>
    ):
    props.fill? (
      <Waypoint 
      onEnter={handleEnterViewport}
      onLeave={handleExitViewport}
      topOffset="30%"
    >
      <div className="m-video">
      <video  id="videom" ref={vidRef}  className="video__player_fill"   controlsList= 'nodownload' autoPlay={true} muted={true} loop src={props.src}></video>
    
    </div>
    </Waypoint>
    ) : (
      <Waypoint 
      onEnter={handleEnterViewport}
      onLeave={handleExitViewport}
      topOffset="30%"
    >
      {props.detail? (
        <div className="m-video">
        {isMobile? ( 
        <video id="videom" ref={vidRef}  className="video__player_InviewMobileDetail" playsInline  autoPlay={true} muted={true} loop src={props.src}></video>) :(
        <video id="videom" ref={vidRef}  className="video__player_Inview"  autoPlay={true} muted={true} loop src={props.src}></video>
        )}
      
        </div>
      ) : (
      <div className="m-video">
      {isMobile? ( 
      <video id="videom" ref={vidRef}  className="video__player_InviewMobile"   autoPlay={true} playsInline muted={true} loop src={props.src}>
        

      </video>) :(
      <video id="videom" ref={vidRef}  className="video__player_Inview"  autoPlay={true} muted={true} loop src={props.src}></video>
      )}
    
      </div>
      )}
    </Waypoint>
    )
    }
    </div>
  );
};

export default hot(Video);
