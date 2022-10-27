import { hot } from 'react-hot-loader/root';
import { mapModifiers } from 'lib/component';
import { Icon } from 'components/atoms/icon';
import { Heading } from 'components/molecules/heading';
import { Text } from 'components/atoms/text';
import { Spinner } from 'components/atoms/spinner';
import Grid from '@material-ui/core/Grid';
import { DropdownMenu, DropdownItem } from 'components/molecules/dropdownMenu';
import { Dropdown } from 'components/molecules/dropdown';
import Badge from '@material-ui/core/Badge';
import { Button } from 'components/atoms/button';
import React, { useEffect, useState, } from 'react';
import { useTranslation } from 'react-i18next';
import { connectWallet } from 'lib/apiCommon';

interface Props {
    address: any ;
}


const digitalWallet = [
    {
        type : "Metamask",
        src:"metamask",
        title:"Metamask Wallet",
        text:"The most popular wallet right now in crypto-currency",
        disable:false,
    },
    {
        type : "Binance",
        src:"binance",
        title:"Binance Chain Wallet",
        text:"Easy to create and use, Best wallet for new users",
        disable:true,
    }   ,
    {
        type : "C98",
        src:"c98",
        title:"Coin98 Wallet",
        text:"Convenient wallet supports various blockchains",
        disable:true,
    }   
]

export const Wallet: React.FC<Props> = props => {
    const { t, i18n } = useTranslation();
    return (
        <div>
            <Dropdown trigger={
                <Button modifiers={['noBackground', 'connectwallet']}>
                    {t("mainMenu.Connect")}
                </Button>
            }
                id="wallet"
            >
                <DropdownMenu modifiers="wallet">
                    <DropdownItem>
                        <div className="o-wallet">
                            <div className="o-wallet_contain">
                                <div style={{padding:"0px 30px 15px 30px",borderBottom:"1px solid rgba(0, 0, 0, 0.1)"}}>
                                    <Heading>Connect Your Wallet</Heading>
                                    <Text modifiers={["titleNoti"]}>We do not own your private keys and cannot access your funds without your confirmation.
                                    </Text>
                                </div>
                                <div className="o-wallet_component">
                                    <Grid
                                        container
                                        spacing={0}
                                       
                                    >
                                        {digitalWallet.map (item => (
                                            <>
                                            <button onClick={() => { connectWallet(props.address)}} disabled={item.disable} className="connect-button" >
                                            <Grid className="o-wallet_contain" item xs={3} >
                                            <Icon modifiers="wallet" iconName={item.src}/>
                                            </Grid>
                                            <Grid className="o-wallet_contain" item xs={9} >
                                            <Heading type="h4">{item.title}</Heading>
                                            <Text modifiers={["titleNoti"]}>{item.text}</Text>
                                            </Grid>
                                            </button>
                                            </>
                                        ))}
                                       
                                    </Grid>
                                </div>
                            </div>
                        </div>
                    </DropdownItem>
                </DropdownMenu>

            </Dropdown>
        </div>

    );
};

export default hot(Wallet);
