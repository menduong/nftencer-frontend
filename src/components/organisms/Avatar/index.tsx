import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { useDispatch } from 'react-redux';
import avatar from 'assets/images/noneAvatar.svg';
import TextField from '@material-ui/core/TextField';
import { Toast } from 'components/molecules/toast';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Modal } from 'components/organisms/modal';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";
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
import { useTranslation } from "react-i18next";
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
  resultaddress: any;
}
const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
        backgroundColor: "transparent",
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
    },
    font: {
      '& > *': {
        fontFamily: 'Cabin',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#797979',
        marginBottom: 30,
      },
    },
    buttonUp: {
      '& > *': {
        backgroundColor: 'linear-gradient(100.93deg, #D565C3 -13.26%, #ABD3EA 101.12%)',
      },
    },
  }),
);
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    boxShadow: 'none',
    backgroundColor: "transparent"
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
});
const defaultProps = {
  bgcolor: 'white',
  m: 1,
  border: 0.1,
  style: { width: '15rem', height: '15rem', border: 'dashed' },
};
const defaultProps1 = {
  bgcolor: 'white',
  m: 1,
  border: 0.1,
  style: { width: '20rem', height: '12rem', border: 'dashed' },
  image: 'assets/images/uploadim.svg',
};
export const Avatar: React.FC<Props> = (props) => {
  const [style, setStyle] = useState({ display: 'none', transform: `none`, transition: `none` });
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const classes = useStyles();
  const classes1 = useStyles1();
  const [modalOpenShare, setModalOpenShare] = useState(false);
  const [modalOpenProfile, setmodalOpenProfile] = useState(false);
  const [modalOpenReport, setmodalOpenReport] = useState(false);
  const message = 'Copied';
  const [datas, dataSet] = useState<any>(Array)
  const { t } = useTranslation();
  const { ref, copy } = useClipboard({
    onSuccess: (text) => enqueueSnackbar(message, {
      variant: 'success',
    }),
  });
  const [datacover, datacoverSet] = useState<any>(Array)
  const [dataddress, dataddressSet] = useState<any>(Array)
  const [datauserinfo, datauserinfoSet] = useState<any>(Array)
  const [dataid, dataidSet] = useState<any>(Array)
  const [loading, setLoading] = useState(true);
  const [loadingavatar, setloadingavatar] = useState(true);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const refresh = async () => {
    const query = window.location.href
    const result = query?.substring(query.indexOf("="));
    const profile = await axios.get(`${process.env.ADDRESS_API}/account?id${result}`)
    const userAva = profile.data.avartar.String
    const userCover = profile.data.cover.String
    const useraddress = profile.data.address
    const userinfo = profile.data.info.String
    const usernameid = profile.data.username.String
    dataSet(userAva)
    datacoverSet(userCover)
    dataddressSet(useraddress)
    dataidSet(usernameid)
    datauserinfoSet(userinfo)
  }
  useEffect(() => {
    refresh()
  }, [loading]);
  useEffect(() => {
    refresh()
  }, [loadingavatar]);
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
      // currentSt.number === CreateSteps.length && navigate('/');
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
        backgroundColor: "#E6E6E6",
        backgroundImage: `url(${datacover})`
      }}
      onMouseEnter={e => {
        setStyle({ display: 'block', transform: `translateY(-20px)`, transition: `transform 250ms` });
      }}
      onMouseLeave={e => {
        setStyle({ display: 'none', transform: `none`, transition: `none` })
      }}>
      <label className='Change-avatar' htmlFor="icon-button-file" style={style}>
        <Button circular onClick={() => setModalOpen(true)} className="IconCopy" icon='photo'>
        </Button>
      </label>
      <Modal isOpen={modalOpenReport} handleClose={() => setmodalOpenReport(false)}>
        <ModalHeader title={t("reportpopup.Title")} handleClose={() => setmodalOpenReport(false)} />
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
          <Button onClick={() => setmodalOpenReport(false)} className={classes1.buttonUp} color='black' size='big'>Report</Button>
        </Typography>
      </Modal>
      <Modal isOpen={modalOpen} handleClose={() => setModalOpen(false)}>
        <ModalHeader title="Upload cover photo" handleClose={() => setModalOpen(false)} /><Formik
          initialValues={initialValue}
          validationSchema={createSchema}
          onSubmit={async values => {
            const data = new FormData();
            data.append('upload_file', values.file);
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
            const updateCover = async () => {

              const data = new FormData()
              data.append('upload_file', values.file);
              if (previewSrc) {
                try {
                  const uploadPass = await axios.put(`${process.env.ADDRESS_API}/account/cover?id=${dataddress}`, data, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                  })
                }
                catch{
                  console.log('Error loaidng rejected data');
                }
              }
              setLoading(false);
              setModalOpen(false)
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
                        <span className="font-bio">Upload new cover for your profile page. We recommend to upload images in 1440x260 resolution</span>
                      </Typography>
                    </CardContent>
                  </Card>
                  <Typography align="center" >
                    <Button onClick={() => updateCover()} type="submit" className={classes1.buttonUp} color='pink' size='big'>Upload</Button>
                  </Typography>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Modal>
      <Modal isOpen={modalOpenShare} handleClose={() => setModalOpenShare(false)}>
        <ModalHeader title={t("sharepopup.share")} handleClose={() => setModalOpenShare(false)} />
        <Grid
          container
          spacing={2}
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
                <li className="span-icon"><span > {t("sharepopup.Copy")}</span></li>
              </ul>
            </button>
          </Grid>
        </Grid>
      </Modal>
      <Modal isOpen={modalOpenProfile} handleClose={() => setmodalOpenProfile(false)}>
        {success ? (
          <Toast handleClose={() => setmodalOpenProfile(false)}>Done !</Toast>
        ) : (
            <>
              <ModalHeader title={t("Myitem.Editprofile")} handleClose={() => setmodalOpenProfile(false)} />
              <Formik
                initialValues={initialValue}
                validationSchema={createSchema}
                onSubmit={values => {
                  const data = new FormData();
                  data.append('upload_file', values.file);
                  // )
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
                  const [previewSrcc, setImgPreview] = useState<any | null>(null);
                  const handleChangeForm = name => event => {
                    setValues({ ...value, [name]: event.target.value });
                  };
                  const handleChangeFormname = bio => event => {
                    setValues({ ...value, [bio]: event.target.value });
                  };
                  const updateAvatar = async () => {
                    const data = new FormData()
                    data.append('upload_file', values.file);

                    if (previewSrc) {
                      try {
                        await axios.put(`${process.env.ADDRESS_API}/account/avatar?id=${props.address}`, data, {
                          headers: {
                            'Content-Type': 'multipart/form-data',
                          },
                        })
                        setSuccess(!success)
                      }
                      catch{
                        console.log('Error loaidng rejected data');
                      }
                    }
                    if (value.name.length > 0 && value.bio.length > 0) {
                      try {
                        await axios.put(`${process.env.ADDRESS_API}/account?id=${props.address}&username=${value.name}&info=${value.bio}`)
                        setSuccess(!success)
                      }
                      catch{
                        console.log('Error loaidng rejected data');
                      }
                    } else if (value.bio.length == 0 && value.name.length > 0) {
                      try {
                        await axios.put(`${process.env.ADDRESS_API}/account?id=${props.address}&username=${value.name}&info=${props.infoBio}`)
                        setSuccess(!success)
                      }
                      catch{
                        console.log('Error loaidng rejected data');
                      }
                    } else if (value.bio.length > 0 && value.name.length == 0) {
                      try {
                        await axios.put(`${process.env.ADDRESS_API}/account?id=${props.address}&username=${props.username}&info=${value.bio}`)
                        setSuccess(true)
                      }
                      catch{
                        console.log('Error loaidng rejected data');
                      }
                    } else {
                      console.log("FAIL")
                    }
                    setloadingavatar(false)
                    setLoading(!loading)
                    setmodalOpenProfile(false)
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
                          <CardContent>
                            <Typography align="center" >
                              <span className="font-bio">{t("Myitem.recommend")}</span>
                            </Typography>
                            <Typography align="center" >
                              <form className={classes1.root} noValidate autoComplete="off">
                                <TextField placeholder="enter your name" inputProps={{ min: 0, style: { textAlign: 'center' } }} onChange={handleChangeForm("name")} id="standard-basic" label={t("create.Name")} defaultValue={dataid} ></TextField>
                              </form>
                            </Typography>
                          </CardContent>
                        </Card>
                        <Typography align="center" >
                          <form className={classes1.root1} >
                            <TextField
                              name="name"
                              className={classes.textField}
                              placeholder="Tell us your detail"
                              id="outlined-multiline-static"
                              label={t("Myitem.Bio")}
                              multiline
                              rows={4}
                              onChange={handleChangeFormname("bio")}
                              variant="outlined"
                              defaultValue={datauserinfo}
                              inputProps={{ maxLength: 500 }}
                            ></TextField>
                          </form>
                          <span className="limitletter">{count}/500</span>
                          <Button onClick={() => { updateAvatar(); setSuccess(!success) }} className={classes1.buttonUp} color='pink' size='big'>{t("Myitem.Upload")}</Button>
                        </Typography>
                      </Grid>
                    </Form>
                  );
                }}
              </Formik>
            </>
          )}
      </Modal>
      <Grid
        className="avatar-user"
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <img className="avatar-display" src={datas ? datas : avatar}
        />
        <Grid item xs={10} >
          <Card className={classes.root}>
            <CardContent >
              <Typography className={classes1.font_basic} align="center" variant="h5" >
                <span>{dataid}</span>
              </Typography>
              <Typography gutterBottom className={classes1.font_basic} align="center" >
                <span ref={ref} className="font-id" >{dataddress}</span>
                <Button circular onClick={() => copy()} className="IconCopy" icon='copy outline'>
                </Button>
              </Typography>
              <Typography gutterBottom className={classes1.font} align="center" variant="h5" component="h2">
                <span >{datauserinfo}</span>
              </Typography>
              <Grid
                className="button-handle"
                container
                spacing={3}
                alignItems="center"
                justify="center"
              >
                <Grid className="buttonedit" item xs={6} >
                  <button className="user-button" onClick={() => { setSuccess(false); setmodalOpenProfile(true) }}>
                    <Icon className={classes1.font_basic} size='small' name='edit' /> {t("Myitem.Edit")}
                  </button>
                </Grid>
                <Grid className="buttonedit" item xs={6} >
                  <button className="user-button" onClick={() => setModalOpenShare(true)} >
                    <Icon className={classes1.font_basic} size='small' name='share' />  {t("Myitem.Share")}
                  </button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>


  );
};

export default hot(Avatar);
