import { Button } from 'components/atoms/button';
import { Icon } from 'components/atoms/icon';
import { Link } from 'components/atoms/link';
import { throttle } from 'lodash';
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { useDispatch, useSelector } from 'react-redux';
import { useWallet } from 'use-wallet';
import { getBuyStore } from 'store/buyNFT';
import { MenuChunk } from './chunk';
import { Text } from 'components/atoms/text';
import { ButtonContainer } from 'components/molecules/buttonContainer';
import { Modal } from 'components/organisms/modal';
import { ModalHeader } from 'components/molecules/modalHeader';
import { connectWallet } from 'lib/apiCommon';
import Grid from '@material-ui/core/Grid';
// import List from '@material-ui/core/List';
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
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

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
  contain: {
    // textAlign: "center"
    padding: "15px 0px",
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


export const Sidebar: React.FC = () => {
  const wallet = useWallet();
  const dispatch = useDispatch();
  const [isSticky, setSticky] = useState(false);
  const { t } = useTranslation();
  const { isKR } = useSelector(getBuyStore);
  const [openHambugerMenu, setOpenHambugerMenu] = useState(false);
  const [modalOpenShare, setModalOpenShare] = useState(false);
  const [modalmobile, setmodalmobile] = useState(false);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const { activateBrowserWallet, account } = useEthers();
  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [open, setOpen] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickMore = () => {
    setOpenMore(!openMore);
  };

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
      const onTop = window.pageYOffset === 4000;
      setSticky(isSticky);
      layout?.classList.toggle('u-sticky', isSticky && !onTop);
    }, 4000);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header>
      <div >
        <Grid
          container
          spacing={0}
        >

          <List>
            {wallet.status === 'connected' ? (
              <Link
                href={"/myitem?id=" + wallet.account}>
                <ListItemButton>
                  <ListItemIcon>
                    <Icon modifiers="small" iconName="myitem" />
                  </ListItemIcon>

                  <ListItemText primary="My item" />

                </ListItemButton>
              </Link>
            ) : (
                <ListItemButton >
                  <button onClick={() => setModalOpenShare(true)} style={{display:"flex",alignItems:"center"}}>
                  <ListItemIcon>
                    <Icon modifiers="small" iconName="myitem" />
                  </ListItemIcon>
                  <ListItemText primary="My item" />
                  </button>
                </ListItemButton>
              )}
            <a style={{color: "inherit"}} target="_blank" href="https://thankful-raclette-226.notion.site/NFTencer-FAQ-6e6a7f1ca9a84bf68b0eff361aefca79">
            <ListItemButton>
              <ListItemIcon>
                <Icon modifiers="small" iconName="faq" />
              </ListItemIcon>
              <ListItemText primary="FAQ" />
            </ListItemButton>
            </a>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <Icon modifiers="small" iconName="ioma" />
              </ListItemIcon>
              <ListItemText primary="Community" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List className="o-header_listMui" component="div" disablePadding>
                <a style={{color: "inherit"}} target="_blank" href="https://twitter.com/NFTENCER">
                  <ListItemButton className="o-header_listMuiButton" sx={{ pl: 4 }}>
                      <ListItemText primary="Twitter" />
                  </ListItemButton>
                </a>
                <a style={{color: "inherit"}} target="_blank" href="https://www.instagram.com/nft_encer/">
                  <ListItemButton className="o-header_listMuiButton" sx={{ pl: 4 }}>
                    <ListItemText primary="Instagram" />
                </ListItemButton>
                </a>
                <a style={{color: "inherit"}} target="_blank" href="https://t.me/nftencer">
                  <ListItemButton className="o-header_listMuiButton" sx={{ pl: 4 }}>
                    <ListItemText primary="Telegram" />
                  </ListItemButton>
                </a>
                {/* <a target="_blank" href="https://t.me/nftencer">
                  <ListItemButton className="o-header_listMuiButton" sx={{ pl: 4 }}>
                    <ListItemText primary="Medium" />
                  </ListItemButton>
                </a> */}
              </List>
            </Collapse>

            <ListItemButton onClick={handleClickMore}>
              <ListItemIcon>
                <Icon modifiers="small" iconName="moreMenu" />
              </ListItemIcon>
              <ListItemText primary="More" />
              {openMore ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openMore} timeout="auto" unmountOnExit>
              <List className="o-header_listMui" component="div" disablePadding>
                <a style={{color: "inherit"}} target="_blank" href="https://docs.google.com/document/d/1PnL_TTuJBGC6O_27GAhCTy088rWhsQDpTMUzQUg3fDc/edit?usp=sharing">
                  <ListItemButton className="o-header_listMuiButton" sx={{ pl: 4 }}>
                      <ListItemText primary="Term of service"/>
                  </ListItemButton>
                </a>
                <a style={{color: "inherit"}} target="_blank" href="https://docs.google.com/document/d/1l8rozHTIwDo83gpjzLgVHEl_ZmMAYvmYKUTNoNzxVWI/edit?usp=sharing">
                  <ListItemButton className="o-header_listMuiButton" sx={{ pl: 4 }}>
                    <ListItemText primary="Privacy Policy" />
                </ListItemButton>
                </a>
              </List>
            </Collapse>

          </List>


          {/* <Grid className="o-header_contain" justify="center" item xs={12} spacing={0}>
            {wallet.status === 'connected' ? (
              <Link
                href={"/myitem?id=" + wallet.account}>
                <Icon modifiers="small" iconName="myitem" />&nbsp;{t("mainMenu.Myitem")}</Link>
            ) : (
                <button className="o-header_button-menuItem"
                  onClick={() => setModalOpenShare(true)}
                ><Icon modifiers="small" iconName="myitem" />&nbsp;{t("mainMenu.Myitem")}</button>
              )}
          </Grid>


          <Grid className="o-header_contain" justify="center" item xs={12} spacing={0}>
            {isKR ? (
              <a className="" href="" target="_blank"><Icon modifiers="small" iconName="faq" />&nbsp;&nbsp;FAQ</a>) : (
                <a className="" href="" target="_blank"><Icon modifiers="small" iconName="faq" />&nbsp;&nbsp;FAQ</a>
              )}
          </Grid>



          <Grid justify="center" item xs={12} spacing={0}>
            <Menu
              direction="right"
              align="center"
              menuButton={<MenuButton className="o-header_menulist"><Icon modifiers="small" iconName="ioma" />&nbsp;{t("mainMenu.Community")}</MenuButton>}
            >
              <MenuItem className="o-header_link-text" href="" target="_blank">Twitter</MenuItem>
              <MenuItem className="o-header_link-text" href="" target="_blank">Instagram</MenuItem>
              <MenuItem className="o-header_link-text" href="" target="_blank">Telegram</MenuItem>
              <MenuItem className="o-header_link-text" href="" target="_blank">Medium</MenuItem>
            </Menu>
          </Grid>



          <Grid justify="center" item xs={12} spacing={0}>
            <Menu
              direction="right"
              align="center"
              menuButton={<MenuButton className="o-header_menulist"><Icon modifiers="small" iconName="moreMenu" />&nbsp;&nbsp;{t("mainMenu.More")} </MenuButton>}
            >
              {isKR ? (
                <MenuItem target="_blank" href=""  >{t("mainMenu.ConutToken")}</MenuItem>
              ) : (
                  <MenuItem target="_blank" href=""  >{t("mainMenu.ConutToken")}</MenuItem>
                )}
              <SubMenu style={{ textDecoration: 'none' }} label={t("mainMenu.Contact")}>
                <MenuItem href="" className="o-header_link-text"> <a href="" target="_blank">{t("mainMenu.Business")}</a></MenuItem>
                <MenuItem href="" className="o-header_link-text"> <a href="" target="_blank">CS</a></MenuItem>
              </SubMenu>
              <MenuItem href="/notice">{t("mainMenu.Notice")}</MenuItem>
              <MenuItem href="/termofservice">{t("mainMenu.Term")}</MenuItem>
              <MenuItem href="/termofservice">{t("mainMenu.Policy")}</MenuItem>
            </Menu>
          </Grid> */}




        </Grid>
        {/* <Grid justify="center" item xs={12} spacing={0}>
              <Text modifiers="tittleFollowing"><Icon iconName="greenDot"/>Following</Text>
        </Grid> */}
      </div>
      <div>

      </div>
    </header>
  );
};

export default hot(Sidebar);
