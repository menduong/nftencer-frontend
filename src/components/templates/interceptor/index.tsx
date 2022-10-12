import React, { useEffect , useState } from 'react';
import { useWallet } from 'use-wallet';
import { hot } from 'react-hot-loader/root';
import Web3 from 'web3';
import { BUSDContract, CONTContract, NFTContract, SimpleExchangeContract } from 'lib/smartContract';
import axios from 'axios';
import { getBuyStore } from 'store/buyNFT';
import { useMediaQuery } from 'react-responsive'
import { useDispatch, useSelector } from 'react-redux';
import { closeConnectModal, getCommon, setAccount } from 'store/common';
import { Button } from 'components/atoms/button';
import { Modal } from 'components/organisms/modal';
import { Text } from 'components/atoms/text';
import { connectWallet } from 'lib/apiCommon';
import { ButtonContainer } from 'components/molecules/buttonContainer';
import ReactModal from 'react-modal';
import { ModalHeader } from 'components/molecules/modalHeader';
import { Modalinstalmetamsk } from 'components/organisms/modalinstalmetamask';
import {openModalIn, closeModalIn } from 'store/buyNFT';
import { useTranslation } from "react-i18next";

const Interceptor: React.FC = props => {
  const wallet = useWallet();
  const { isOpen } = useSelector(getBuyStore);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [reg, regSet] = useState(Array);
  const isMobile = useMediaQuery({
    query: '(max-width: 840px)'
  })
  const { errorMessage } = useSelector(getCommon);
  const accounts = async() => {
      try {
    const accounts  = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      const profile=    await axios.post(`${process.env.ADDRESS_API}/account?address=${account}`)
    wallet.connect('injected')
    regSet(account)
      }catch (error) {
        console.log(error)
      }

  }

  const checkaccount = async () => {
    if (window.ethereum) {
      try {
        // check if the chain to connect to is installed
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x38' }], //Mainet chainId must be in hexadecimal numbers
          // params: [{ chainId: '0x61' }], // Testnet chainId must be in hexadecimal numbers
        });
      } catch (error) {
        // This error code indicates that the chain has not been added to MetaMask
        // if it is not, then install it into the user MetaMask
        if (error.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  // chainId: '0x61',
                  chainId: '0x38',
                  rpcUrl: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
                },
              ],
            });
          } catch (addError) {
            console.error(addError);
          }
        }
        console.error(error);
      }
    } else {
      // if no window.ethereum then MetaMask is not installed
      // alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
      // setModalOpenClaim(true)
      { !isMobile ? (
      dispatch(openModalIn())) : (console.log("mobile"));
      }
    } 
  }
  const handleCloseModal = () => {
    dispatch(closeModalIn());
  };

  useEffect(() => {
    NFTContract.initialize(wallet.account);
    SimpleExchangeContract.initialize(wallet.account);
    BUSDContract.initialize(wallet.account);
    CONTContract.initialize(wallet.account);
    dispatch(setAccount({ account: wallet.account || '' }));
    errorMessage && wallet.account && dispatch(closeConnectModal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch,wallet.account]);
  useEffect(() => {
    checkaccount()
  }, []);
  useEffect(() => {
    accounts()
  }, []);

  useEffect(() => {
    if (window && typeof window.ethereum !== 'undefined') {
      window.web3 = new Web3(window.ethereum);
      if (sessionStorage.getItem('isConnected') === 'connected') {
      }
    } else sessionStorage.setItem('isConnected', '');
    document && ReactModal.setAppElement(document.body);
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <>
      {props.children}
      <Modal
        isOpen={!!errorMessage}
        handleClose={() => {
          dispatch(closeConnectModal());
        }}
        modifiers="error"
      >
        <Text modifiers={['bold', 'center']}>{errorMessage}</Text>
        <ButtonContainer>
          <Button modifiers="bid" handleClick={() => dispatch(closeConnectModal())}>
            Cancel
          </Button>
          <Button modifiers="buy" handleClick={() => connectWallet(wallet)}>
          {t("mainMenu.Connect")}
          </Button>
        </ButtonContainer>
      </Modal>
      <Modal modifiers="instalMetamask" isOpen={isOpen} handleClose={handleCloseModal}>
        <ModalHeader title="" handleClose={handleCloseModal} />
        <Modalinstalmetamsk />
      </Modal>
    </>
  );
};
export default hot(Interceptor);
