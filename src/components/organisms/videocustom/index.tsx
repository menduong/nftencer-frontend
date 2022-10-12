import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from 'components/atoms/button';
import IconButton from "@material-ui/core/IconButton";
import { resetStore } from 'store/createNFT';
import Grid from "@material-ui/core/Grid";
import VolumeUp from "@material-ui/icons/VolumeUp";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeMute from "@material-ui/icons/VolumeOff";
import logo from 'assets/images/censored.png';
import { Modalcensored } from 'components/organisms/modalcensored';
import { Modal } from 'components/organisms/modal';
import { ModalHeader } from 'components/molecules/modalHeader';
import { videoMute,videoUnmute } from 'store/buyNFT';
import { commonStart } from 'store/common';


const useStyles = makeStyles((theme) => ({
  controlsWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    '&:hover': {
      visibility: "visible",
   },
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
  },
  bottomIconsRight: {
    color: "white!important",
    marginLeft:"200px",
    marginBottom:"50px",
  },
  bottomIconsRightCensored: {
    color: "white!important",
    marginLeft:"80px",
  },

  volumeSlider: {
    width: 100,
  },
}));

interface Props {
  onPlayPause: any,
  onMute: any,
  ref:any;
  playing: any,
  played: any,
  muted: any,
  volume: any,
  visible?: boolean,
  status?:any,
}

export const Controls: React.FC<Props> = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modalOpenCensored, setModalOpenCensored] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    useEffect(() => {
      if (!modalOpenCensored) {
        dispatch(resetStore());
        // currentStep.number === CreateSteps.length && navigate('/');
      }
  
    }, [dispatch, modalOpenCensored]);
  return(
       <div ref={props.ref} className={classes.controlsWrapper}>
        <Grid
          container
          direction="column"
          justify="space-between"
          style={{ flexGrow: 1 }}
        >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ padding: 16 }}
          >

            <Grid item> 
              { props.status == "1"? (
                 <Grid container alignItems="center">
          
                 <div
                   className={classes.bottomIcons}
                 >
                   <Button modifiers="transparent" handleClick={() => setModalOpenCensored(true)}>
                    <img height="30px" width="140px" src={logo} loading="lazy" />
                   </Button>
                 </div>
              { !props.muted ? (
                 <IconButton
                 style={{visibility:'visible'}}
                   onClick={() => {dispatch(commonStart({ nextAction: videoMute() }))}}
                   className={`${classes.bottomIconsRightCensored}`}
                 >
                   {props.muted ? (
                     <VolumeMute fontSize="large" />
                   ) : props.volume > 0.5 ? (
                     <VolumeUp fontSize="large" />
                   ) : (
                     <VolumeDown fontSize="large" />
                   )}
                 </IconButton>
              ) : (
                 <IconButton
                 style={{visibility:'visible'}}
                   onClick={() => {dispatch(commonStart({ nextAction: videoUnmute() }))}}
                   className={`${classes.bottomIconsRightCensored}`}
                 >
                   {props.muted ? (
                     <VolumeMute fontSize="large" />
                   ) : props.volume > 0.5 ? (
                     <VolumeUp fontSize="large" />
                   ) : (
                     <VolumeDown fontSize="large" />
                   )}
                 </IconButton>
              )}
               </Grid>
              ): (
              <Grid container alignItems="center">
                { !props.muted ? (
                 <IconButton
                 style={{visibility:'visible'}}
                   onClick={() => {dispatch(commonStart({ nextAction: videoMute() }))}}
                   className={`${classes.bottomIconsRight}`}
                 >
                   {props.muted ? (
                     <VolumeMute fontSize="large" />
                   ) : props.volume > 0.5 ? (
                     <VolumeUp fontSize="large" />
                   ) : (
                     <VolumeDown fontSize="large" />
                   )}
                 </IconButton>
              ) : (
                 <IconButton
                 style={{visibility:'visible'}}
                   onClick={() => {dispatch(commonStart({ nextAction: videoUnmute() }))}}
                   className={`${classes.bottomIconsRight}`}
                 >
                   {props.muted ? (
                     <VolumeMute fontSize="large" />
                   ) : props.volume > 0.5 ? (
                     <VolumeUp fontSize="large" />
                   ) : (
                     <VolumeDown fontSize="large" />
                   )}
                 </IconButton>
              )}
              </Grid>
              )}
            </Grid>

            
          </Grid>
        </Grid>
        <Modal modifiers="claim" isOpen={modalOpenCensored} handleClose={() => setModalOpenCensored(false)}>
        <ModalHeader title="" handleClose={() => setModalOpenCensored(false)} />
        <Modalcensored />
      </Modal>
      </div>
  );
};

export default hot(Controls);
