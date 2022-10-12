import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import { Text } from 'components/atoms/text';
import { Icon } from 'components/atoms/icon';
import { useSnackbar } from 'notistack';
import { Link } from 'gatsby';
import { openModalIn, closeModalIn,refreshLang } from 'store/buyNFT';
import { useDispatch, useSelector } from 'react-redux';
import { commonStart } from 'store/common';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type Modifier = 'overflowx' | 'overflowy' | 'overhidden' | 'error' | 'center';

interface Props {
  link?: string;
}


export const Modalinstalmetamsk: React.FC<Props> = props => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  
  return (
    <>

      <Grid
        container
        spacing={1}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12} >
          <Text>{t("mainMenu.instal1")}
            </Text>
        </Grid>
        <Grid item xs={12} >
          <Text> {t("mainMenu.instal2")}</Text>

        </Grid>
      </Grid>
      <Grid
        className="containInt"
        container
        spacing={4}
      >
        <Grid item xs={6} >
          <button className="hoverButton">
            <a href="https://metamask.io/download.html">
              <div className="bg-yelow">

                <Text modifiers="flexstart">{t("mainMenu.download")}
           </Text>
                <div className="bg-yelow_icon">
                  <Icon modifiers="32px" iconName="metamaskfox" />
                  <Icon iconName="down" />
                </div>
              </div>
            </a>
          </button>
        </Grid>
        <Grid item xs={6} >
          <button onClick={() => { dispatch(commonStart({ nextAction: closeModalIn() })); }}>
            <div className="bg-pink">
              <Text modifiers="flexstart"> {t("mainMenu.skip")}</Text>
              <div className="bg-yelow_icon">
                <Icon modifiers="60px" iconName="ccn_logo" />
                <Icon iconName="arrowright" />
              </div>
            </div>
          </button>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
      >
        <Grid item xs={1}>
          <Icon iconName="questionmark" />
        </Grid>
        <Grid item xs={7} >
          <Link onClick={() => { dispatch(commonStart({ nextAction: closeModalIn() })); }} to="/userguilde">
            <div className="howconnect">
              <Text>{t("mainMenu.howconnect")}</Text>
            </div>
          </Link>
        </Grid>
      </Grid>
    </>
  )
};

export default hot(Modalinstalmetamsk);
