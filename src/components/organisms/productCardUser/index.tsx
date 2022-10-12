import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Heading } from 'components/molecules/heading';
import { Text } from 'components/atoms/text';
import { Image, ImageProps } from 'components/atoms/image';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import { Icon } from 'components/atoms/icon';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'components/atoms/link';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from "react-i18next";
import { useWallet } from 'use-wallet';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { UserType, VideoType, VideoTypes } from 'lib/constants';
import { Button } from 'components/atoms/button';
import { Video } from 'components/molecules/video';
import { Tooltip } from 'components/molecules/tooltip';
import Typography from '@material-ui/core/Typography';
import { ButtonContainer } from 'components/molecules/buttonContainer';
import { Modal } from 'components/organisms/modal';
import { ModalHeader } from 'components/molecules/modalHeader';
import { useDispatch, useSelector } from 'react-redux';
import { resetStore } from 'store/createNFT';
import axios from 'axios';
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
  view?: any;
  mediaType?: 'gif' | 'png' | 'image' | VideoType;
  unit?: string;
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    boxShadow: 'none',
  },
  formControlLabel: {
    color: '#797979',
    marginTop: '5px!important',
    fontSize: '18px',
    '& label': { fontSize: '18px' }
  },
  font: {
    fontSize: '18px',
  },

  formControl: {
    margin: '20px',
    fontSize: '18px',
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

export const ProductcardUser: React.FC<ProductProps> = props => {
  const productLink = `/view?id=${props.id}`;
  const classes1 = useStyles1();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const wallet = useWallet();
  const [reportModal, setreportModal] = useState(false);
  const [ModalOpenreport, setModalOpenreport] = useState(false);
  const [ModalOpendelete, setModalOpendelete] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [modalOpenShare, setModalOpenShare] = useState(false);
  const [modalmobile, setmodalmobile] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [state, setState] = React.useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
  });
  const { first, second, third, fourth, fifth, sixth } = state;
  const error = [first, second, third, fourth, fifth, sixth].filter((v) => v).length > 1;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const deleteItem = async () => {
    await axios.delete(`${process.env.ADDRESS_API}/nft?id=${props.id}`);
    window.location.reload();

  }

  const reportitem = async () => {
    const query = window.location.href
    const result = query?.substring(query.indexOf("="));
    if (state.first == true) {
      const reportItem1 = await axios.post(`${process.env.ADDRESS_API}/report?collectible_id=${props.id}&account_id=${wallet.account}&report_type_id=1`)
    } else if (state.second == true) {
      const reportItem2 = await axios.post(`${process.env.ADDRESS_API}/report?collectible_id=${props.id}&account_id=${wallet.account}&report_type_id=2`)
    } else if (state.third == true) {
      const reportItem3 = await axios.post(`${process.env.ADDRESS_API}/report?collectible_id=${props.id}&account_id=${wallet.account}&report_type_id=3`)
    } else if (state.fourth == true) {
      const reportItem4 = await axios.post(`${process.env.ADDRESS_API}/report?collectible_id=${props.id}&account_id=${wallet.account}&report_type_id=4`)
    } else if (state.fifth == true) {
      const reportItem5 = await axios.post(`${process.env.ADDRESS_API}/report?collectible_id=${props.id}&account_id=${wallet.account}&report_type_id=5`)
    } else if (state.sixth == true) {
      const reportItem6 = await axios.post(`${process.env.ADDRESS_API}/report?collectible_id=${props.id}&account_id=${wallet.account}&report_type_id=6`)
    } else {
      console.log("Error Report Item")
    }
    setModalOpenreport(false)
    setreportModal(true)
  }

  useEffect(() => {
    if (!modalOpenShare) {
      dispatch(resetStore());
      // currentStep.number === CreateSteps.length && navigate('/');
    }

  }, [dispatch, modalOpenShare]);
  useEffect(() => {
    if (!ModalOpendelete) {
      dispatch(resetStore());
    }

  }, [dispatch, ModalOpendelete]);
  return (
    <article className={mapModifiers('o-productcardMyItem', props.modifiers, props.isPreview && 'preview')}>
      {props.isPreview ? (
        <ProductPreview {...props} />
      ) : (
          <>
            <Link href={productLink}>
              <div className="o-productcardMyItem_media">
                {VideoTypes.includes(props.mediaType || '') ? (
                  <Video fill={true} src={props.src} />
                ) : (
                    <Image src={props.src} alt={props.alt} />
                  )}
                <span className="o-productcard_view"><Icon iconName='play' />{props.view}</span>
              </div>
            </Link>
            <Button modifiers={['iconshare']}><Icon modifiers={['tiny']} iconName='sharelink' /></Button>

            <Modal isOpen={ModalOpendelete} handleClose={() => setModalOpendelete(false)}>
              <ModalHeader title="Why are you reporting?" handleClose={() => setModalOpendelete(false)} />
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
              </Typography>
              <Typography align="center" >
                <button className=" o-productcard_reportButton " >Report</button>
              </Typography>
            </Modal>
            <div className="o-productcardMyItem_info">
              <div className="o-productcardMyItem_heading">
                <div className="o-productcardMyItem_lead">
                  <Link href={productLink}>
                    <Heading type="h4" title={props.title}>
                      {props.title}
                    </Heading>
                  </Link>
                </div>
              </div>
              <div className="o-productcardMyItem_bmp">
                <div className="o-productcardMyItem_price">
                  <Text modifiers={['black']} inline unit={props.unit}>
                    {props.price}
                  </Text>
                </div>
                <ul className="o-productcardMyItem_userlist">
                  <div>
                    <button className="threedots" onClick={() => setModalOpenreport(true)}><Icon modifiers={['small']} iconName="report" /></button>
                  </div>
                </ul>
              </div>
            </div>
            <Tooltip />
          </>
        )}
      <Modal modifiers="error" isOpen={modalmobile} handleClose={() => setmodalmobile(false)}>
        <ModalHeader title={t("View.Sorry")} handleClose={() => setmodalmobile(false)} />
        <Text modifiers={['bold', 'center']}>{t("View.SorryD")}</Text>
        <ButtonContainer>
          <Button modifiers="buy" handleClick={() => { setmodalmobile(false) }}>
            OK
          </Button>
        </ButtonContainer>
      </Modal>
      <Modal isOpen={ModalOpenreport} handleClose={() => setModalOpenreport(false)}>
        <ModalHeader mod title={t("reportpopup.Title")} handleClose={() => setModalOpenreport(false)} />
        <FormControl error={error} component="fieldset" className={classes.formControl}>
          <FormGroup>
            <FormControlLabel
              className={classes.font}
              control={<Checkbox checked={first} onChange={handleChange} name="first" />}
              label={<Typography className={classes.formControlLabel}>{t("reportpopup.Copyright")}</Typography>}
            />
            <FormControlLabel
              control={<Checkbox checked={second} onChange={handleChange} name="second" />}
              label={<Typography className={classes.formControlLabel}>{t("reportpopup.Sexual")}</Typography>}
            />
            <FormControlLabel
              control={<Checkbox checked={third} onChange={handleChange} name="third" />}
              label={<Typography className={classes.formControlLabel}>{t("reportpopup.Violent")}</Typography>}
            />
            <FormControlLabel
              control={<Checkbox checked={fourth} onChange={handleChange} name="fourth" />}
              label={<Typography className={classes.formControlLabel}>{t("reportpopup.Hateful")}</Typography>}
            />
            <FormControlLabel
              control={<Checkbox checked={fifth} onChange={handleChange} name="fifth" />}
              label={<Typography className={classes.formControlLabel}>{t("reportpopup.Harmful")}</Typography>}
            />
            <FormControlLabel
              control={<Checkbox checked={sixth} onChange={handleChange} name="sixth" />}
              label={<Typography className={classes.formControlLabel}>{t("reportpopup.Spam")}</Typography>}
            />
          </FormGroup>
          {error && (<FormLabel component="legend">Pick one *</FormLabel>
          )}
        </FormControl>
        <div className="buttoncontainer_report">
          <Button disabled={error} handleClick={() => reportitem()} type="submit" modifiers="createbig">
            {t("Myitem.Report")}
          </Button>
        </div>
      </Modal>
      <Modal modifiers="price" isOpen={reportModal} handleClose={() => setreportModal(false)}>
        <ModalHeader modifiers="report" title="Thank you for submitting your report to us." handleClose={() => setreportModal(false)} />
        <Text modifiers={['report']}>We will process the report you submitted as quickly as possible.</Text>
        <Text modifiers={['report', 'inline']}>Processing time for reports of piracy will typically be 5-7 business days. For more convenience in the settlement process, please send related documents to email:</Text>
        <Text modifiers={['report', 'inline']}><a href="mailto:support@coconut.global">support@coconut.global</a></Text>
        <Text modifiers={['report']}>We will process the report you submitted as quickly as possible.</Text>
        <Text modifiers={['report', 'inline']}>Contact us:</Text>
        <Text modifiers={['report', 'inline']}><a href="mailto:support@coconut.global">support@coconut.global</a></Text>
      </Modal>
    </article>
  );
};

const ProductPreview: React.FC<ProductProps> = props => {
  return (
    <>
      <div className="o-productcardMyItem_media">
        {(props.src &&
          (VideoTypes.includes(props.mediaType || '') ? (
            <Video key={props.src} src={props.src} />
          ) : (
              <Image src={props.src} alt={props.alt} />
            ))) || (
            <Text size="14" modifiers="lightgray">
              Media Review22
            </Text>
          )}
      </div>
      <div className="o-productcardMyItem_info">
        <div className="o-productcardMyItem_heading">
          <div className="o-productcardMyItem_lead">
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
        <div className="o-productcardMyItem_bmp">
          <div className="o-productcardMyItem_price">
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

export default hot(ProductcardUser);
