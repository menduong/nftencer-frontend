import { Button } from 'components/atoms/button';
import { Icon } from 'components/atoms/icon';
import { Link } from 'components/atoms/link';
import { throttle } from 'lodash';
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { useDispatch, useSelector } from 'react-redux';
import { getBalanceStore, getBUSD, getCONT } from 'store/getBalance';
import { useWallet } from 'use-wallet';
import { getBuyStore } from 'store/buyNFT';
import { MenuChunk } from './chunk';
import { Text } from 'components/atoms/text';
import { ButtonContainer } from 'components/molecules/buttonContainer';
import { Modal } from 'components/organisms/modal';
import { ModalHeader } from 'components/molecules/modalHeader';
import { connectWallet } from 'lib/apiCommon';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import clsx from 'clsx';
import ListItem from '@material-ui/core/ListItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import logoGlobal from 'assets/images/ccnglobal_logo_ver1.png'
import { resetStore } from 'store/createNFT';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { useEthers } from "@usedapp/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu,
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  list: {
    width: 250,
    textAlign: "center",
    justifyContent: "center",
    height: "100%",
    marginTop: "50px",
  },
  ListItemText: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "25px",
    paddingTop: "25px",
    backgroundColor: "transparent !important",
  },
  Accord: {
    backgroundColor: "transparent !important",
  },
  Summary: {
    backgroundColor: "transparent !important",
    border: 'none',
    width: '100px',
    left: '80px'
  },
  Summarylast: {
    backgroundColor: "transparent !important",
    border: 'none',
    width: '100px',
    left: '140px'
  },
  detail: {
    display: "flex",
    padding: "8px 16px 16px",
    position: "relative",
    backgroundColor: "transparent !important",
  },
  heading: {
    flexShrink: 0,
    background: 'transparent',
  },
  fullList: {
    width: 'auto',
    height: '100%',
  },
  Fragment: {
    height: '100%',
  },
});
type Anchor = 'top' | 'left' | 'bottom' | 'right';


export const Header: React.FC = () => {
  const wallet = useWallet();
  const dispatch = useDispatch();
  const [isSticky, setSticky] = useState(false);
  const { t } = useTranslation();
  const { isKR} = useSelector(getBuyStore);
  const [openHambugerMenu, setOpenHambugerMenu] = useState(false);
  const [modalOpenShare, setModalOpenShare] = useState(false);
  const [modalmobile, setmodalmobile] = useState(false);
  const classes = useStyles();
  const [reg, regSet] = useState(Array);
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const {activateBrowserWallet, account } = useEthers();
  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div onClick={toggleDrawer(anchor, false)}>
          <ListItem className={classes.ListItemText} button>
            <Button handleClick={() => setmodalmobile(true)}>{t("mainMenu.Myitem")}</Button>
          </ListItem>
        </div>
        <div onClick={toggleDrawer(anchor, false)}>
          <ListItem className={classes.ListItemText} button>
            <Button anchor={{ href: '/' }} >Explore</Button>
          </ListItem>
        </div>
        <ListItem className={classes.ListItemText} button>
          <Button anchor={{ href: 'https://thankful-raclette-226.notion.site/COCONUT-d5dc804f50564430a1d6482be1907571' }} >FAQ</Button>
        </ListItem>
        <ListItem className={classes.ListItemText}>
          <Button > <Accordion className={classes.Accord} style={{ boxShadow: "none" }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary style={{ boxShadow: "none" }}
              className={classes.Summary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>Community</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.detail}>
              <Button anchor={{ href: 'https://twitter.com/Coconut_Global' }}><Icon iconName="twitterb" /></Button>
              <Button anchor={{ href: 'https://www.instagram.com/coconut_global' }}><Icon iconName="instagramb" /></Button>
              <Button anchor={{ href: 'https://t.me/Coconut_notice' }}><Icon iconName="telegramb" /></Button>
              <Button anchor={{ href: 'https://coconut-global.medium.com' }}><Icon iconName="mediumb" /></Button>
             
            </AccordionDetails>
          </Accordion>
          </Button>
        </ListItem>
        <ListItem className={classes.ListItemText}>
          <Button > <Accordion className={classes.Accord} style={{ boxShadow: "none" }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary style={{ boxShadow: "none" }}
              className={classes.Summarylast}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>More</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.detail}>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                <Button anchor={{ href: '' }}  >Contact us</Button>
                </Grid>
                <Grid item xs={6}>
                </Grid>
                <Grid item xs={6}>
                <Button anchor={{ href: 'https://www.notion.so/CONUT-TOKEN-f751f8c45b6247d1a6434e8f88bf6a03' }} >CONUT Token</Button>
                </Grid>
                <Grid item xs={6}>
                <Button anchor={{ href: 'https://www.notion.so/ConteNFT-28ddfedca1a548bba7af855f695c2bf6?showMoveTo=true&saveParent=true' }} >Notice</Button>
                </Grid>

              </Grid>
            </AccordionDetails>
          </Accordion>
          </Button>
        </ListItem>
      </List>
      <div onClick={toggleDrawer(anchor, false)} className="o-header_connect-mobile">
        <Button handleClick={() => setmodalmobile(true)} modifiers="connectmobile"> {t("mainMenu.Connect") }</Button>
      </div>
    </div>
  )

  useEffect(() => {
    if (wallet.account) {
      dispatch(getBUSD.started({ account: wallet.account }));
      dispatch(getCONT.started({ account: wallet.account }));

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet?.status, wallet.balance]);
  const balance = useSelector(getBalanceStore);

  useEffect(() => {
    if (!modalmobile) {
      dispatch(resetStore());
      // currentStep.number === CreateSteps.length && navigate('/');
    }

  }, [dispatch, modalmobile]);


  useEffect(() => {
    const handleScroll = throttle(() => {
      const header = document.querySelector('.o-header');
      const layout = document.querySelector('.t-layout');
      const isSticky = (header && window.pageYOffset > header.getBoundingClientRect().top) || false;
      const onTop = window.pageYOffset === 0;
      setSticky(isSticky);
      layout?.classList.toggle('u-sticky', isSticky && !onTop);
    }, 150);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={'o-header u-sticky'}>
      <a href="/">
        <img className="b-logo" src={logoGlobal}/>
      </a>

      <div className="o-header_main">
        <Modal modifiers="error" isOpen={modalOpenShare} handleClose={() => setModalOpenShare(false)}>
          <Text modifiers={['bold', 'center']}>{t("mainMenu.ConnectD")}</Text>
          <ButtonContainer>
            <Button modifiers="bid" handleClick={() => setModalOpenShare(false)}>
              Cancel
          </Button>
            <Button modifiers="buy" handleClick={() => { connectWallet(wallet); setModalOpenShare(false) }}>
            {t("mainMenu.Connect")}
          </Button>
          </ButtonContainer>
        </Modal>
        <ul className="o-header_menu">
          <li>
            {wallet.status === 'connected'? (
              <Link modifiers={['font']}
                href={"/myitem?id=" + wallet.account}>
                {t("mainMenu.Myitem")}</Link>
            ) : (
                <button className="o-header_button-menuItem"
                  onClick={() => setModalOpenShare(true)}
                >
                   {t("mainMenu.Myitem")}</button>
              )}
          </li>
        </ul>
        <ul className="o-header_menu">
        { isKR ? (
          <a className="o-header_menulist" href="https://thankful-raclette-226.notion.site/FAQ-536073d3c70248e9a6998acf2a439e05
          " target="_blank">FAQ</a>):(
            <a className="o-header_menulist" href="https://thankful-raclette-226.notion.site/COCONUT-d5dc804f50564430a1d6482be1907571" target="_blank">FAQ</a>
          )}

        </ul>
        <ul className="o-header_menu">
          <Menu menuButton={<MenuButton className="o-header_menulist">{t("mainMenu.Community")} &#x276F;</MenuButton>}>
            
            <MenuItem className="o-header_link-text" href="https://twitter.com/Coconut_Global" target="_blank">Twitter</MenuItem>
            <MenuItem className="o-header_link-text" href="https://www.instagram.com/coconut_global" target="_blank">Instagram</MenuItem>
            <MenuItem className="o-header_link-text" href="https://t.me/Coconut_notice" target="_blank">Telegram</MenuItem>
            <MenuItem className="o-header_link-text" href="https://coconut-global.medium.com" target="_blank">Medium</MenuItem>
          </Menu>
        </ul>
        <ul className="o-header_menu">
          <Menu menuButton={<MenuButton className="o-header_menulist">{t("mainMenu.More")} &#x276F;</MenuButton>}>
            { isKR ? (
              <MenuItem target="_blank" href="https://thankful-raclette-226.notion.site/CONUT-948323109be34a58bfec723c7b201787"  >{t("mainMenu.ConutToken")}</MenuItem>
            ) : (
            <MenuItem target="_blank" href="https://thankful-raclette-226.notion.site/CONUT-TOKEN-f751f8c45b6247d1a6434e8f88bf6a03"  >{t("mainMenu.ConutToken")}</MenuItem>
             ) }
            <SubMenu style={{ textDecoration: 'none' }} label={t("mainMenu.Contact")}>
              <MenuItem href="mailto:support@coconut.global" className="o-header_link-text"> <a href="mailto:support@coconut.global" target="_blank">{t("mainMenu.Business")}</a></MenuItem>
              <MenuItem href="mailto:support@coconut.global" className="o-header_link-text"> <a href="mailto:support@coconut.global" target="_blank">CS</a></MenuItem>
            </SubMenu>
            <MenuItem href="/notice">{t("mainMenu.Notice")}</MenuItem>
            <MenuItem href="/termofservice">{t("mainMenu.Term")}</MenuItem>
            <MenuItem href="/termofservice">{t("mainMenu.Policy")}</MenuItem>
          </Menu>
        </ul>
        <MenuChunk wallet={wallet} balanceBUSD={balance.BUSD} balanceCONT={balance.CONUT} />     
        <div className="o-header_hambuger">
          {(['top'] as Anchor[]).map((anchor) => (
            <React.Fragment key={anchor}>
              <button onClick={toggleDrawer(anchor, true)}>
                <Icon iconName="hamburger" /></button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      </div>
      {openHambugerMenu && (
        <div >
          {(['top'] as Anchor[]).map((anchor) => (
            <React.Fragment key={anchor}>
              <button onClick={toggleDrawer(anchor, true)}>{anchor}</button>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
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
    </header>
  );
};

export default hot(Header);
