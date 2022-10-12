import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { useDispatch } from 'react-redux';
import avatar from 'assets/images/ccn_logoOF.png';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Modal } from 'components/organisms/modal';
import { FacebookShareButton, TelegramShareButton, TwitterShareButton } from "react-share";
import { useMediaQuery } from 'react-responsive'
import { Form, Formik } from 'formik';
import { FileInput } from 'components/atoms/fileinput';
import { createSchema, initialValue } from 'components/pages/create/form';
import { useClipboard } from "use-clipboard-hook";
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { ModalHeader } from 'components/molecules/modalHeader';
import { resetStore } from 'store/createNFT';
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
type Modifier = 'nobackground' | 'nopadding' | 'nomargin';

interface Props {
  modifiers?: Modifier | Modifier[];
  className?: string;
  useDiv?: boolean;
  username?: string;
  address?: any;
  infoBio?: any;
  wallet?: any;
  avatar?: any;
  cover?: any;

}
const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,

      },
    },
    root1: {
      '& > *': {
        margin: theme.spacing(2),
        width: 400,
        marginBottom: 10,
      },
    },
    font_basic: {
      '& > *': {
        fontFamily: 'Cabin',
        fontStyle: 'normal',
        fontWeight: 'bold',
      },
      [theme.breakpoints.down('sm')]: {
        textAlign: "left",
      },
    },
    font: {
      '& > *': {
        fontFamily: 'Cabin',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#797979',
        marginBottom: 30,
      },
      [theme.breakpoints.down('sm')]: {
        textAlign: "left",
        position: "relative",
        top: "50px"
      },
    },
    buttonUp: {
      '& > *': {
        backgroundColor: 'linear-gradient(100.93deg, #D565C3 -13.26%, #ABD3EA 101.12%)',


      },
    },
  }),
);
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
      boxShadow: 'none',
      [theme.breakpoints.down('sm')]: {
        position: "relative",
        backgroundColor: 'transparent',
        top: "50px",
        left: "70px",
      },
    },
    Mui: {
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    textField: {
      backgroundColor: '#E9E9E9',
    },
    pos: {
      marginBottom: 12,
    },
  }),
);
const defaultPropsD = {
  bgcolor: 'white',
  m: 1,
  border: 0.1,
  style: { width: '20rem', height: '12rem', border: 'dashed' },
  image: 'assets/images/uploadim.svg',
};
export const User: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();
  const classes1 = useStyles1();
  const [modalOpenShare, setModalOpenShare] = useState(false);
  const [modalOpenProfile, setmodalOpenProfile] = useState(false);
  const [modalOpenReport, setmodalOpenReport] = useState(false);
  const message = 'Copied';
  const isMobile = useMediaQuery({
    query: '(max-width: 800px)'
  })
  const [datas, dataSet] = useState<any>(Array)
  const [id, idSet] = useState<any>(Array)
  const { ref, copy } = useClipboard({
    onSuccess: (text) => enqueueSnackbar(message, {
      variant: 'success',
    }),
  });
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const refresh = async () => {
    const query = window.location.href
    const result = query?.substring(query.indexOf("="));
    const id_numberr = result.replace(result.substring(0, 1), "")
    const id_number = id_numberr.replace(id_numberr.substring(12, 42), "...")
    dataSet(id_number)
    idSet(id_numberr)
  }
  useEffect(() => {
    refresh()
  }, [datas]);

  useEffect(() => {
    if (!modalOpen) {
      dispatch(resetStore());
      // currentStep.number === CreateSteps.length && navigate('/');
    }

  }, [dispatch, modalOpen]);

  useEffect(() => {
    if (!modalOpenProfile) {
      dispatch(resetStore());
      // currentStep.number === CreateSteps.length && navigate('/');
    }

  }, [dispatch, modalOpenProfile]);
  useEffect(() => {
    if (!modalOpenReport) {
      dispatch(resetStore());
      // currentStep.number === CreateSteps.length && navigate('/');
    }

  }, [dispatch, modalOpenReport]);

  useEffect(() => {
    if (!modalOpenShare) {
      dispatch(resetStore());
      // currentStep.number === CreateSteps.length && navigate('/');
    }

  }, [dispatch, modalOpenShare]);

  return (
    <section className='o-section1'
      style={{
        backgroundImage: `url(${props.cover})`
      }}
    >
      <Modal isOpen={modalOpenReport} handleClose={() => setmodalOpenReport(false)}>
        <ModalHeader title="Why are you reporting?" handleClose={() => setmodalOpenReport(false)} />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
        </Grid>
        <Typography align="center" >
          <form className={classes1.root1} >
            <span className="font-bio">Describe why you think this item should be removed from marketplace.</span>
          </form>
        </Typography>
        <Typography align="center" >
          <form className={classes1.root1} >
            <TextField
              name="name"
              className={classes.textField}
              id="outlined-multiline-static"
              multiline
              rows={4}
              variant="outlined"
              placeholder="Tell us some detail"
              inputProps={{ maxLength: 500 }}
            ></TextField>
          </form>
          <p className="limitletter">{count}/500</p>
        </Typography>
        <Typography align="center" >
          <Button className={classes1.buttonUp} color='black' size='big'>Report</Button>
        </Typography>
      </Modal>
      {/* ///////////////////// UPLOAD COVER //////////////////////////////
 ////////////////////////////////////////////////////////////////////// */}
      <Modal isOpen={modalOpen} handleClose={() => setModalOpen(false)}>
        <ModalHeader title="Upload cover photo" handleClose={() => setModalOpen(false)} />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Button  {...defaultPropsD} display="flex" justifyContent="center" ></Button>
          <Grid item xs={8} >
          </Grid>
        </Grid>
        <Typography align="center" >
          <form className={classes1.root1} >
            <span className="font-bio">Upload new cover for your profile page. We recommend to upload images in 1440x260 resolution</span>
          </form>
        </Typography>
        <Typography align="center" >
          <Button className={classes1.buttonUp} color='pink' size='big'>Upload</Button>
        </Typography>
      </Modal>

      <Modal isOpen={modalOpenShare} handleClose={() => setModalOpenShare(false)}>
        <ModalHeader title="Share this NFT" handleClose={() => setModalOpenShare(false)} />
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="center"
        >
          <Grid className="buttonedit" item xs={3} >
            <ul>
              <button className="share-button">
                <TwitterShareButton
                  url={window.location.href}
                  title="#CoconutGlobal , #NFT"
                  className="Demo__some-network__share-button">
                  <li><Icon className="i-icon" size='big' name='twitter' /></li>
                  <li className="span-icon"><span > Twitter</span></li>
                </TwitterShareButton>
              </button>
            </ul>

          </Grid>
          <Grid className="buttonedit" item xs={3} >

            <ul>
              <button className="share-button" >
                <FacebookShareButton
                  url={window.location.href}
                  title="#CoconutGlobal , #NFT"
                  className="Demo__some-network__share-button">
                  <li>
                    <Icon className="i-icon" size='big' name='facebook' /></li>
                  <li className="span-icon"><span > Facebook</span></li>
                </FacebookShareButton>

              </button>
            </ul>

          </Grid>
          <Grid className="buttonedit" item xs={3} >

            <ul>
              <button className="share-button">
                <TelegramShareButton
                  url={window.location.href}
                  title="#CoconutGlobal , #NFT"
                  className="Demo__some-network__share-button">
                  <li>
                    <Icon className="i-icon" size='big' name='telegram plane' /></li>
                  <li className="span-icon"><span > Telegram</span></li>
                </TelegramShareButton>

              </button>
            </ul>

          </Grid>
          <Grid className="buttonedit" item xs={3} >
            <button onClick={() => copy()} className="share-button" >
              <ul>
                <li>
                  <Icon className="i-icon" size='big' name='share' /></li>
                <span ref={ref} defaultValue={window.location.href} className="hidden">{window.location.href}</span>
                <li className="span-icon"><span > Copy</span></li>
              </ul>
            </button>
          </Grid>
        </Grid>
      </Modal>
      <Modal isOpen={modalOpenProfile} handleClose={() => setmodalOpenProfile(false)}>
        <ModalHeader title="Edit profile" handleClose={() => setmodalOpenProfile(false)} />
        <Formik
          initialValues={initialValue}
          validationSchema={createSchema}
          onSubmit={async values => {
            const data = new FormData();
            data.append('upload_file', values.file);
            await axios.put(`${process.env.ADDRESS_API}/account?id=1&username=luthien`
            )
          }}
          validateOnMount
        >
          {({ values, isValid, setTouched, touched }) => {
            const previewSrc = URL && values.file ? URL.createObjectURL(values.file) : '';
            const previewType = values.file && values.file.type;
            const [value, setValues] = React.useState({
              bio: '',
              name: '',
            });
            const handleChangeForm = name => event => {
              setValues({ ...value, [name]: event.target.value });
            };
            const handleChangeFormname = bio => event => {
              setValues({ ...value, [bio]: event.target.value });
            };
            const updateAvatar = async () => {

              const data = new FormData()
              data.append('upload_file', values.file);
              data.append('username', values.username);
              if (previewSrc) {
                try {
                  await axios.put(`${process.env.ADDRESS_API}/account/avatar?id=${props.address}`, data, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                  })
                }
                catch{
                  console.log('Error loaidng rejected data');
                }
              }
              await axios.put(`${process.env.ADDRESS_API}/account?id=${props.address}&username=${value.name}&info=${value.bio}`)
              window.location.reload();
            }
            return (
              <Form className="p-create_form">
                <Grid
                  container
                  spacing={3}
                  direction="column"
                  alignItems="center"
                  justify="center"
                >
                  {previewSrc ? (<div></div>) : (<FileInput
                    name="file"
                    setTouched={() => !touched.file && setTouched({ ...touched, file: true })}
                  />)}
                  <img className={
                    previewSrc ? `ImgReview` : ``
                  } src={previewSrc}></img>
                  <Card className={classes.root}>
                    <CardContent >
                      <Typography align="center" >
                        <span className="font-bio">We recommend an image of at least 400x400.</span>
                      </Typography>
                      <Typography align="center" >
                        <form className={classes1.root} noValidate autoComplete="off">
                          <TextField inputProps={{ min: 0, style: { textAlign: 'center' } }} onChange={handleChangeForm("name")} id="standard-basic" label="Name" defaultValue={props.username} ></TextField>
                        </form>
                      </Typography>
                    </CardContent>
                  </Card>
                  <Typography align="center" >
                    <form className={classes1.root1} >
                      <TextField
                        name="name"
                        className={classes.textField}
                        id="outlined-multiline-static"
                        label="Bio"
                        multiline
                        rows={4}
                        onChange={handleChangeFormname("bio")}
                        variant="outlined"
                        defaultValue={props.infoBio}
                        inputProps={{ maxLength: 500 }}
                      ></TextField>
                    </form>
                    <span className="limitletter">{count}/500</span>
                    <Button onClick={() => updateAvatar()} type="submit" className={classes1.buttonUp} color='pink' size='big'>Upload</Button>
                  </Typography>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Modal>
      <Grid
        className="avatar-user"
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <img className="avatar-display" src={props.avatar ? props.avatar : avatar}
        />
        <Grid item xs={10} >

          <Card className={classes.root}>
            <CardContent className={classes.Mui}>
              <Typography className={classes1.font_basic} align="center" variant="h5" >
                <span>{props.username}</span>
              </Typography>
              <Typography gutterBottom className={classes1.font_basic} align="center" >
                {isMobile ? (
                  <button className="button_copied" onClick={() => copy()}>
                    <span ref={ref} className="font-id" >{datas}</span>
                    <span className="icon-copied"></span>
                  </button>
                ) : (
                    <div>
                      <span ref={ref} className="font-id" >{id}</span>
                      <Button circular onClick={() => copy()} className="IconCopy" icon='copy outline'>
                      </Button>
                    </div>
                  )}
              </Typography>

            </CardContent>
          </Card>
        </Grid>
        <div className="tag_address">
          <Typography gutterBottom className={classes1.font} align="left" variant="h5" component="h2">
            <span >{props.infoBio}</span>
          </Typography>
        </div>
        <Grid
          className="button-handle"
          container
          spacing={3}
          alignItems="center"
          justify="center"
        >
          <Grid className="buttonedit" item xs={6} >
            <button className="user-button" onClick={() => setmodalOpenReport(true)}>
              <Icon className={classes1.font_basic} size='small' name='edit' /> Report
                  </button>
          </Grid>
          <Grid className="buttonedit" item xs={6} >
            <button className="user-button" onClick={() => setModalOpenShare(true)} >
              <Icon className={classes1.font_basic} size='small' name='share' />  Share
                </button>
          </Grid>
        </Grid>
      </Grid>

    </section>


  );
};

export default hot(User);
