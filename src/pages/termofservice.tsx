import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from 'components/templates/layout';
import { Section } from 'components/organisms/section';
import { Form, Formik } from 'formik';
import { createSchema, initialValue } from 'components/pages/create/form';
import { Text } from 'components/atoms/text';
import Grid from '@material-ui/core/Grid';

export const userguilde: React.FC = () => {
  return (
    <div className="p-create">
      <Layout title="Term Of Service">
        <Formik
          initialValues={initialValue}
          validationSchema={createSchema}
          onSubmit={values => {
          }}
          validateOnMount
        >
          {({ values, isValid, setTouched, touched }) => {
            return (
              <Form className="p-create_form">
                <div className="p-create_guilde">
                  <Section className="p-explore__mainNotice">
                    <Grid
                      container
                      spacing={1}
                      direction="row"
                      alignItems="stretch"
                    >
                      <Grid alignItems="center" item xs={12}>
                        <div className="p-explore_headerTerm">
                          <h1>TERMS OF SERVICE</h1>
                        </div>
                      </Grid>
                      <ol className="p-explore_counterList">
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}> Introduction
                              </Text>
                          </div>
                          <ol className="p-explore_counterList">
                            <li>
                              <Text modifiers={['noBold', 'inline']}>
                                Welcome to the Coconut website (“Site”), owned and operated by Coconut Limited. Coconut Limited is an established company and located in Vietnam. We follow all applicable local and international laws. d/b/a Coconut (“Coconut”, “we”, “us” or “our”). We at Coconut attempt to maintain the maximum level of compliance. These Terms of Service (“Terms”) govern users’ access to and use of the Site including without limitation:
                                </Text>
                              <ol className="p-explore_counterList">
                                <li>
                                  <Text modifiers={['noBold', 'inline']}>
                                    The creation, purchase, sale (including by way of auction (“Auction”) in accordance with our Auction rules, exchange, or modification of unique non-fungible tokens (NFTs), implemented on the Binance Smart Chain network (“BSC”) or other Blockchain (which will be integrated in the future) using smart contracts (“Cryptoassets”) on our platform (“Platform”);
                                    </Text>
                                </li>
                                <li>
                                  <Text modifiers={['noBold', 'inline']}>
                                    Our online and/or mobile services; and
                                    </Text>
                                </li>
                                <li>
                                  <Text modifiers={['noBold', 'inline']}>
                                    Software provided on or in connection with those services, (collectively, the “Service”).
                                    </Text>
                                </li>
                              </ol>
                            </li>
                            <Text modifiers={['noBold', 'inline']}>A detailed description of the Service is set out in section 3 below.</Text>
                            <li>
                              <Text modifiers={['noBold', 'inline']}>
                                YOU SHALL READ THESE TERMS CAREFULLY BEFORE ACCESSING THE PLATFORM AND/OR USING THE SERVICE(S) AND REVIEW THE TERMS PERIODICALLY AND REGULARLY FOR CHANGES AND UPDATES. BY ACCESSING THE PLATFORM AND/OR USING THE SERVICE(S) YOU AGREE TO BE BOUND BY THESE TERMS AND AGREE THAT SUCH TERMS CONSTITUTE A LEGALLY BINDING AGREEMENT BETWEEN YOU AND US, Coconut. IF YOU DO NOT AGREE TO BE FULLY BOUND BY THESE TERMS YOU MUST NOT ACCESS THE PLATFORM AND/OR USE THE SERVICE(S).
                                </Text>
                            </li>
                            <li>
                              <Text modifiers={['noBold', 'inline']}>
                                IF YOU ARE ACCEPTING THESE TERMS ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY,YOU REPRESENT THAT YOU HAVE THE LEGAL AUTHORITY TO ACCEPT THE TERMS ON THAT ENTITY’S BEHALF, IN WHICH CASE “YOU” WILL MEAN THAT ENTITY. IF YOU DO NOT HAVE THIS AUTHORITY OR IF YOU DO NOT AGREE TO BE FULLY BOUND BY THESE TERMS, YOU MUST NOT ACCESS THE PLATFORM AND/OR USE THE SERVICE(S) IN ANY WAY.
                                </Text>
                            </li>
                            <li>
                              <Text modifiers={['noBold', 'inline']}>
                                Coconut RESERVES THE RIGHT TO CHANGE OR MODIFY THESE TERMS FROM TIME TO TIME. IF WE MAKE CHANGES TO THESE TERMS, WE WILL NOT PROVIDE NOTICE OF SUCH CHANGES AND THE AMENDED TERMS SHALL HAVE IMMEDIATE EFFECT UPON BEING POSTED ON THE SITE, SUBJECT TO ANY APPLICABLE LAW. BY CONTINUING TO ACCESS THE PLATFORM AND/OR USE THE SERVICE(S), YOU CONFIRM YOUR ACCEPTANCE OF THE REVISED TERMS AND ALL OF THE TERMS INCORPORATED THEREIN BY REFERENCE. WE ENCOURAGE YOU TO REVIEW THE TERMS FREQUENTLY TO ENSURE THAT YOU UNDERSTAND THE TERMS AND CONDITIONS THAT APPLY WHEN YOU ACCESS THE PLATFORM AND/OR USE THE SERVICE(S). ALL USERS SHALL IMMEDIATELY DISCONTINUE THEIR USE OF THE SERVICE(S) SHOULD THEY DISAGREE TO BE FULLY BOUND BY THE AMENDED TERMS.
                                </Text>
                            </li>
                          </ol>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}> Eligibility and Compliance
                              </Text>
                          </div>
                          <ol className="p-explore_counterList">
                            <li>
                              <Text modifiers={['noBold', 'inline']}>
                                You must access the Platform and/or use the Service(s) in accordance with the Terms, in addition to the laws of your country of residence, country of citizenship, and any other relevant laws that may be applicable to you.
                                </Text>
                            </li>
                            <li>
                              <Text modifiers={['noBold', 'inline']}>
                                It is your sole responsibility to check and ensure whether you are legally permitted to access the Platform and/or use the Service(s) under the laws of your country of residence, country of citizenship, and any other relevant laws that are applicable to you.
                                </Text>
                            </li>
                            <li>
                              <Text modifiers={['noBold', 'inline']}>
                                When you connect a wallet (as described in section 6 below), you represent and warrant (collectively referred to as the “
                                </Text>
                              <Text modifiers={['inline']}>Representations and Warranties</Text>
                              <Text modifiers={['noBold', 'inline']}>”) to Coconut that:</Text>
                              <ol className="p-explore_counterList">
                                <li>
                                  <Text modifiers={['noBold', 'inline']}>
                                    You are 18 years of age or more and possess the capacity to form a binding contract,and have the full capacity to accept these Terms, use the Service(s) and conduct any transactions on the Platform (“Transaction”);
                                    </Text>
                                </li>
                                <li>
                                  <Text modifiers={['noBold', 'inline']}>
                                    If requested by us, you will provide us with accurate, true and complete information about yourself (including, but not limited to, your name and email address);
                                    </Text>
                                </li>
                                <li>
                                  <Text modifiers={['noBold', 'inline']}>
                                    If you are an individual using the Service(s), you are not using the Service as an agent, proxy, or otherwise on behalf of another user and you have sole and complete control, access and ownership of all keys and passwords to your Account (as defined in section 6.1 below);
                                    </Text>
                                </li>
                                <li>
                                  <Text modifiers={['noBold', 'inline']}>
                                    If you are representing a company or other legal entity, you are acting as their authorized representative, and both you and the entity you represent will be bound by and comply with these Terms;
                                    </Text>
                                </li>
                                <li>
                                  <Text modifiers={['noBold', 'inline']}>
                                    Your access to the Platform, use of the Service(s) and all activities being conducted on the Platform are and will be in full compliance with these Terms and all relevant laws and regulations, and such access, use and activities are not prohibited by any applicable laws or regulations, and is not for any illegal or immoral purposes;
                                    </Text>
                                </li>
                                <li>
                                  <Text modifiers={['noBold', 'inline']}>
                                    By accessing the Platform and/or using the Service(s), You have not, and will not, infringe any representations, covenants, restrictions and rights of any other party;
                                    </Text>
                                </li>
                                <li>
                                  <Text modifiers={['noBold', 'inline']}>
                                    You have obtained, all rights, licenses, consents, permissions, power and/or authority necessary or otherwise to create, sell, buy or exchange the Cryptoassets.
                                    </Text>
                                </li>
                                <li>
                                  <Text modifiers={['noBold', 'inline']}>
                                    You have and will continue to abide by the laws of your country of residence, country of citizenship, and any other relevant laws that are applicable to You, including but not limited to reporting any trading activities or profits for taxation purposes;
                                    </Text>
                                </li>
                                <li>
                                  <Text modifiers={['noBold', 'inline']}>
                                    You have not been suspended or removed from any other exchange (whether crypto exchange or otherwise) for any reason;
                                    </Text>
                                </li>
                                <li>
                                  <Text modifiers={['noBold', 'inline']}>
                                    You are experienced in Cryptoassets and understand the risks involved in Transactions involving Cryptoassets including but not limited to, the risk of purchasing counterfeit assets, mislabeled assets, assets that are vulnerable to metadata decay, assets on smart contracts with bugs, and assets that may become nontransferable;
                                    </Text>
                                </li>
                                <li>
                                  <Text modifiers={['noBold', 'inline']}>
                                    You have received or had access to all necessary independent legal and financial advice prior to using the Service(s) and have not relied and will not rely on any statements, announcements, notices, advertisements, materials and/or information as published by Coconut to enter into any Transaction; and
                                    </Text>
                                </li>
                                <li>
                                  <Text modifiers={['noBold', 'inline']}>
                                    You have not and will not be accessing the Platform with any device, software or system that alters your IP address to be different from your physical location, including, but not limited to, any and all Virtual Private Network (VPN) Services.
                                    </Text>
                                </li>
                              </ol>
                            </li>

                          </ol>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}> Coconut Service
                              </Text>
                            <ol className="p-explore_counterList">
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Coconut offers a decentralized social network, including an NFT marketplace platform for the creation, purchase, sale, exchange, or modification of unique non-fungible tokens (NFTs), implemented on the Binance Smart Chain blockchain (and other blockchains which will be integrated in the future) using smart contracts. Coconut only provides a Platform to facilitate Transactions between you and other users (customer to customer), but Coconut will not be storing or holding any Cryptoassets on behalf of any user. Users will be able to access Cryptoasset prices, trade information and utilize any trading agreements as made available on the Platform in order to conduct a Transaction. All Transactions are executed by the participating users in accordance with the terms and conditions of the smart contract between and as determined by the participating users.
                                  </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  The Platform may be accessible via website. The Service(s) is/are being offered on a self-service basis, subject to payment of the Fees. All users must ensure they access the Platform from a secure and trustworthy source or device.
                                  </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  The Service will only be accessible after the users have performed the Procedure (as defined in section 6.1). Users must comply with the Procedure, which we, Coconut, may change from time to time. Failure to do so may result in failure in accessing the Service(s).
                                  </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Coconut has no duty/responsibility and cannot control the quality of Cryptoassets (including NFTs) involved in any Transaction, the authenticity or accuracy of the Transaction information, or the ability of each party to a Transaction to fulfill each of their obligations in their agreement. You are responsible for double-checking and ensuring the accuracy of the trade details of all Transactions, your trading counterparty’s details, the price and nature of the Cryptoassets (including NFTs) and/or your own risk appetite prior to entering into any Transaction(s).
                                  </Text>
                              </li>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}> Using Coconut service
                              </Text>
                            <ol className="p-explore_counterList">
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Usage of the Service(s) will incur fees (the “Service Fees”). The Service Fees include:
                                  </Text>
                                <ol className="p-explore_counterList">
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      A fee based on percentage when a Sale or Purchase Transaction occurs; and
                                      </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Royalty Fees.
                                      </Text>
                                  </li>
                                </ol>
                                <Text modifiers={['noBold', 'inline']}>Details of the Service Fees can be found at:</Text>
                                <Text modifiers={['noBold', 'inline']}><a href="https://Coconut.medium.com/Coconut-service-fees-5f15f393a21c">https://Coconut.medium.com/Coconut-service-fees-5f15f393a21c</a> . Coconut reserves the right to make any changes to the Service Fees without prior notice. Users are responsible for checking the Fees of Coconut regularly before executing any Transaction that may incur Service Fees. The Service Fees will not include third party fees that may arise out of or in connection with the creation, sale or exchange of Cryptoassets.
                                  </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  You must provide all equipment and software necessary to access the Platform and/or use the Service(s), including but not limited to, a mobile device that is suitable to access the Platform and/or use the Service(s). You are solely responsible for any fees, including internet connection or mobile fees, that you incur when using the Service(s).
                                  </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  You agree that Coconut assumes no responsibility and accepts no liability to you or any third parties in connection with any suspension, termination, cancellation or freezing of your Account pursuant to section 5 below, and that on the occurrence of such an event:
                                  </Text>
                                <ol className="p-explore_counterList">
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Coconut is not obliged to keep or disclose to you any information from within your Account;
                                      </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Subject to our Privacy Policy, Coconut may continue to keep your User Information (as defined in section 15.2) and all the Transaction information from your use of the Service(s);
                                      </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Coconut has the right to delete unfulfilled Transactions agreed with another user before suspension or termination;
                                      </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      You will immediately arrange to disconnect any Account you have connected to the Platform. Coconut shall not be responsible for any loss associated with your Account; and
                                      </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      All rights and licenses granted hereunder to you shall terminate immediately and Coconut shall be entitled to disconnect you from the Platform.
                                      </Text>
                                  </li>
                                </ol>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  You may only use the Service(s) by linking your digital wallet on supported bridge extensions such as MetaMask wallet (https://metamask.io) or Coin98 wallet ( <a href="https://coin98.com/wallet">https://coin98.com/wallet</a> ) or Binance Chain wallet (https://www.binance.org/en).
                                  </Text>
                              </li>
                              <Text modifiers={['noBold', 'inline']}>
                                We will ask you to download a supported electronic wallet extension and connect and unlock your digital wallet with that extension. Once you submit an order to sell or purchase a Cryptoasset, your order is passed on to the applicable extension, which completes the Transaction on your behalf. We do not own your crypto wallet’s private keys and cannot access your funds without your confirmation.
                                </Text>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  ALL TRANSACTIONS ON THE PLATFORM ARE FACILITATED AND RUN BY THIRD-PARTY ELECTRONIC WALLET EXTENSIONS. BY USING THE SERVICE, YOU ACKNOWLEDGE AND AGREE THAT YOU ARE GOVERNED BY THE TERMS OF SERVICE AND PRIVACY POLICY FOR THE APPLICABLE EXTENSIONS. FOR METAMASK, THOSE TERMS ARE AVAILABLE AT (https://metamask.io/terms.html) AND (https://metamask.io/privacy.html). FOR COIN98, https://docs.coin98.com/legal/terms-of-service. FOR BINANCE CHAIN WALLET,<a href="https://www.binance.org/en/terms">https://www.binance.org/en/terms</a>).
                                  </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  The Service may not be available, or the Platform may not be accessible depending on the user’s residence, geographic location, and/or nationality (which may be determined by the user’s IP address). If a user is located within one of the jurisdictions listed in https://home.treasury.gov/ policy-issues/financial-sanctions/sanctions-programs-and-country-information (collectively the “Restricted Jurisdiction”), such users shall not be permitted to access the Platform and/or use the Service(s).
                                  </Text>
                              </li>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Suspension of your use of Service
                              </Text>
                            <ol className="p-explore_counterList">
                              <Text modifiers={['noBold', 'inline']}>
                                You agree that Coconut has full discretion at any time, for any reason and without prior notification to you to suspend or terminate your access to the Platform and/or part or all of the Service(s), including but not limited to compliance with law, in response to a subpoena, court order or other binding governmental or regulatory order, or to enforce transaction limits and to temporarily or permanently freeze (cancel) your permission to use your Account.
                                </Text>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Wallet and Security
                              </Text>
                            <ol className="p-explore_counterList">
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  To use the Service(s), you will need to open an account (“Account”) by connecting your wallet. After connecting your wallet, you will be prompted for a signature request for authentication. After signing and ticking/checking the box that you have read, understood and agree to the Terms, you will be authenticated and your Account will be opened (the “Procedure”).
                                  </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  You are solely responsible for the equipment, services, software, applications, such as MetaMask or any third-party product or service that you use to access your Account. You are liable for all activities taking place in your Account, including but not limited to information disclosure, online agreements, or purchase of Cryptoassets or digital assets from any service providers to your wallet. You must immediately notify us if you discover or otherwise suspect any security breaches related to your Account and/or the Service. Coconut will block multiple Accounts of the same user.
                                  </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  You agree that you will not:
                                  </Text>
                                <ol className="p-explore_counterList">
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Create another Account if we’ve disabled one you had unless you have our written permission first;
                                      </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Buy, sell, rent or lease access to your Account unless you have our written permission first;
                                      </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Share your Account with anyone; and
                                      </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Log in or try to log in to access the Service(s) through unauthorized third-party applications or clients.
                                      </Text>
                                  </li>
                                </ol>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  You are solely responsible for keeping your Account secure. You must utilize all reasonable efforts to protect your Account, including without limitation, any unauthorized access or use of personally identifiable information. We recommend that you keep your Account password secure and always log-off from the Platform when leaving the device through which you accessed the Platform. You are advised to use various security measures to protect your Account. In the event that your Account is breached or compromised, you shall make arrangements to protect your Account and/or discontinue any connection between your Account and the Platform. You agree and acknowledge that you are solely responsible for any damages arising from or relating to any authorized or unauthorized use of your Account.
                                  </Text>
                              </li>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Anti-Money Laundering
                              </Text>
                            <ol className="p-explore_counterList">
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Coconut may require you to provide additional information and documents at the request of any competent authority or in case of application of any applicable law or regulation, including laws related to anti-money laundering, or for counteracting financing of terrorism. Coconut may also require you to provide additional information and documents in cases where it has reasons to believe that:
                                  </Text>
                                <ol className="p-explore_counterList">
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Your Account is being used for money laundering or for any other illegal activity; or
                                      </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Transactions performed via your Account were performed in breach of these Terms.
                                      </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      In such cases, Coconut, in its sole discretion, may pause or cancel your Transactions and suspend your access to the Platform and/or use of the Service(s) until such additional information and documents are reviewed by Coconut and accepted as satisfying the requirements of the applicable law. If you do not provide complete and accurate information and documents in response to such a request within a reasonable time frame, your Account shall be terminated.
                                      </Text>
                                  </li>
                                </ol>
                              </li>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Communications
                              </Text>
                            <ol className="p-explore_counterList">
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  By creating an Account, you consent to receive electronic communications from Coconut (e.g., via email or by posting notices to the Service). These communications may include notices about your Account (e.g., such as transactional information) and are part of your relationship with us. You agree that any notices, agreements, disclosures, or other communications that we send to you electronically will satisfy any legal communication requirements, including, but not limited to, that such communications be in writing. You should maintain copies of electronic communications from us by printing a paper copy or saving an electronic copy. We may also send you promotional communications via email, including, but not limited to, newsletters, special offers, surveys and other news and information we think will be of interest to you. You may opt out of receiving these promotional emails at any time by contacting us at <a href="support@Coconut.com">support@Coconut.com</a>.
                                  </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  By submitting personal data to us, you agree to the terms of our Privacy Policy and you expressly consent to the collection, use and disclosure of your personal data in accordance with the Privacy Policy.
                                  </Text>
                              </li>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Ownership
                              </Text>
                            <ol className="p-explore_counterList">
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Unless otherwise indicated in writing by us, the Coconut logo and all designs, text, graphics, pictures, information, data, software embodied (including all source and object code) in the Service and Platform, sound files, other files and the selection and arrangement thereof (collectively, “Content”) are the proprietary property of Coconut or our affiliates, licensees or users, as applicable and is protected by copyright, trademark and other intellectual property laws. Nothing in these Terms shall grant the user any such property rights and/or ownership rights and shall not be an assignment of such rights.
                                  </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Notwithstanding anything to the contrary in these Terms, the Platform, Service(s), and Content may include software components provided by Coconut or its affiliates or a third party that are subject to separate license terms, in which case those license terms will govern such software components.
                                  </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  The Content that may appear on the Service(s) and/or Platform are trademarks of Coconut or our affiliates and may not be copied, imitated or used, in whole or in part, without our prior written permission. You may not use any meta tags or other “hidden text” utilizing “Coconut” or any other name, trademark or product or service name of Coconut or our affiliates without our prior written permission. In addition, the look and feel of the Content, including, without limitation, all page headers, custom graphics, button icons and scripts, constitute the service mark, trademark or trade dress of Coconut and may not be copied, imitated or used, in whole or in part, without our prior written permission. All other trademarks, registered trademarks, product names and Coconut names or logos mentioned on the Platform are the property of their respective owners and may not be copied, imitated or used, in whole or in part, without the permission of the applicable trademark holder. Reference to any products, services, processes or other information by name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship or recommendation by Coconut.
                                  </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Any rights with respect to the Content which are not expressly granted herein are reserved by Coconut.
                                  </Text>
                              </li>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Ownership
                              </Text>
                            <ol className="p-explore_counterList">
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  You are hereby granted a limited, non-exclusive, non-transferable, non-sub licensable, non-perpetual, personal and revocable license to access the Platform, use the Service(s) and Content. However, the license is subject to these Terms and does not include any right to:
                                  </Text>
                                <ol className="p-explore_counterList">
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Sell, resell or commercially use the Service or Content;
                                      </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Distribute, publicly perform or publicly display any Content;
                                      </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Modify or otherwise make any derivative uses of the Service(s) or Content, or any portion thereof;
                                      </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Use any data mining, robots or similar data gathering or extraction methods;
                                      </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Download (other than page caching) any portion of the Site, except as expressly permitted by us; and
                                      </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Use the Service(s) or Content other than for their intended purposes.
                                      </Text>
                                  </li>
                                </ol>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  You shall not remove any copyright, trademark or other proprietary notices that have been placed on the Site.
                                  </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  You shall not exploit the Service(s) in any unauthorized way whatsoever, including but not limited to trespassing or materially burdening network capacity.
                                  </Text>
                              </li>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Hyperlinks
                              </Text>
                            <ol className="p-explore_counterList">
                              <Text modifiers={['noBold', 'inline']}>
                                You are granted a limited, nonexclusive, nontransferable right to create a text hyperlink through the Service(s) for non-commercial purposes, provided that such link does not portray Coconut or our affiliates or any of our products or services in a false, misleading, derogatory or otherwise defamatory manner, and provided further that the linked site does not contain any adult or illegal material or any material that is offensive, harassing or otherwise objectionable. This limited right may be revoked at any time. You may not use a logo or other proprietary graphic of Coconut to link to the Service or Content without our express written permission. Further, you may not use, frame or utilize framing techniques to enclose any Coconut trademark, logo or other proprietary information, including the images found on the Platform, the content of any text or the layout or design of any page, or form contained on a page without our express written consent.
                                  </Text>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Notifications and Third-Party Service
                              </Text>
                            <ol className="p-explore_counterList">
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  All of Coconut’s notifications will be made publicly known at the Site. In the event that any notification relates to any changes in the Service(s), the Platform, Fees and/or Coconut, such notification shall be effective immediately upon being posted on the Site. It is your sole responsibility to check from time to time for new notifications on the Website.
                                  </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Notwithstanding anything to the contrary in these Terms, the Service(s) and Content may include software components provided by Coconut or its affiliates or a third party that are subject to separate license terms, in which case those license terms will govern such software components.For example, when you click to get more details about any of the Cryptoassets sold through the Platform, you will notice a third party link to the website from which the Cryptoasset originated. Such website may include license terms governing the use of such Cryptoasset. In the event you purchase such Cryptoasset through the Platform, you are required to comply with said terms.
                                  </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  The Service(s) may contain links to third-party websites (“Third-Party Websites”) and applications (“Third-Party Applications”). When you click on a link to a Third-Party Website or Third-Party Application, we will NOT warn you that you have left our Site. These Terms and policies will no
                                  longer govern you and you will be subject to the terms and conditions (including privacy policies) of
                                  the Third-Party Website or destination. Such Third-Party Websites and Third-Party Applications are
                                  not under the control of Coconut. Coconut is not responsible for any Third-Party Websites or
                                  Third-Party Applications. Coconut provides these Third-Party Websites and Third-Party
                                  Applications only as a convenience and does not review, approve, monitor, endorse, warrant, or
                                  make any representations with respect to Third-Party Websites or Third-Party Applications, or their
                                  products or services. You use all links in Third-Party Websites, and Third-Party Applications at your
                                  own risk. You should review all applicable agreements and policies, including privacy and data
                                  gathering practices, of any Third-Party Websites or Third-Party Applications, and should make any
                                  inquiry and or investigation you feel necessary or appropriate before proceeding with any
                                  transaction with any third party.
                                  </Text>
                              </li>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>User Conduct
                              </Text>
                            <ol className="p-explore_counterList">
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  You agree that you will not violate any law, contract, intellectual property or other third party right,
                                  and that you are solely responsible for your conduct, while using the Service(s). You agree that you
                                  will abide by these Terms and will not:
                                  </Text>
                                <ol className="p-explore_counterList">
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Provide false or misleading information to Coconut;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Create Cryptoasset names, listings and their descriptions, smart contract names, and
                                      collections including profanity or overtly sexual content;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Use or attempt to use another user’s account without authorization from that user and
                                      Coconut;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Create or list counterfeit items;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Pose as another person or create a misleading username;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Use the Service(s) in any manner that could interfere with, disrupt, negatively affect or
                                      inhibit other users from fully enjoying the Service(s), or that could damage, disable, overburden
                                      or impair the functioning of the Service(s) in any manner;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Develop, utilize, or disseminate any software, or interact with any Application Programming
                                      Interface (“API”) in any manner, that could damage, harm, or impair the Service(s);
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Reverse engineer any aspect of the Service(s), or do anything that might discover or
                                      reveal source code, bypass or circumvent measures employed to prevent or limit access
                                      to any Service(s), area or code of the Service(s);
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Attempt to circumvent any content-filtering techniques we employ, or attempt to access
                                      any feature or area of the Platform and/or Service(s) that you are not authorized to access;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Use any robot, spider, crawler, scraper, script, browser extension, offline reader or other
                                      automated means or interface not authorized by us to access the Platform and/or Service(
                                      s), extract data or otherwise interfere with or modify the rendering of the Site’s
                                      pages or functionality;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Use data collected from the Platform and/or Service(s) to contact individuals, companies,
                                      or other persons or entities;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Use data collected from the Platform and/or Service(s) for any direct marketing activity
                                      (including without limitation, email marketing, SMS marketing, telemarketing, and direct
                                      marketing);
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Bypass or ignore instructions that control all automated access to the Platform and/or
                                      Service(s);
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Use the Platform and/or Service(s) for any illegal or unauthorized purpose, or engage in,
                                      encourage or promote any activity that violates these Terms;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Use the Network to carry out any illegal activities, including but not limited to money
                                      laundering, terrorist financing or deliberately engaging in activities designed to adversely
                                      affect the performance of the Network, Platform or its Service(s);
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Engage in wash trading or other deceptive or manipulative trading activities on the
                                      Platform;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Place misleading bids or offers;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Use the Service(s) to carry out any financial activities subject to registration or licensing,
                                      including but not limited to creating, listing, or buying securities, commodities, options,
                                      real estate, or debt instruments; or
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Use the Service(s) to participate in fundraising for a business, protocol, or platform,
                                      including but not limited to creating, listing, or buying assets that are redeemable for
                                      financial instruments, assets that give owner’s rights to participate in an initial coin
                                      offering (ICO), or any securities offering, or assets that entitle owners to financial
                                      rewards, including but not limited to, DeFi yield bonuses, staking bonuses, and burn
                                      discounts.
                                    </Text>
                                  </li>
                                </ol>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Coconut facilitates trade among a diverse community of buyers and sellers. Openness is one of
                                  our most prized values, and we are committed to providing a Platform for the exchange of
                                  Cryptoassets linked to controversial content. These policies ensure that the Platform offers the
                                  widest selection of assets possible while promoting trust and respect, as well as adherence to the
                                  law. Coconut has always exercised judgment in allowing or disallowing certain assets, listings,
                                  smart contracts, and collections consistent with the spirit of openness in a worldwide community
                                  of users of a radical new technology. We carefully consider the complete situation and all its
                                  details in light of our policies before deciding whether to remove inappropriate assets, listings,
                                  smart contracts, and collections when we discover them or they are brought to our attention.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Cryptoassets linked to assets, listings, smart contracts, and collections that Coconut deems
                                  inappropriate, disruptive, or illegal are prohibited on Coconut. Coconut reserves the right to
                                  determine the appropriateness of listings on its site and remove any listing at any time. If you
                                  create or offer an asset, listing, smart contract, or collection in violation of these policies, we will
                                  take corrective actions, as appropriate. Coconut cannot destroy or impound your assets or smart
                                  contracts, but we reserve the right to destroy inappropriate metadata stored on our servers (as
                                  applicable).
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Cryptoassets linked to assets, listings, smart contracts, and collections that include metadata that
                                  violates international or Vietnamese intellectual property laws, promotes suicide or self-harm,
                                  incites hate or violence against others, degrades or doxes another individual, depicts minors in
                                  sexually suggestive situations, or is otherwise illegal in Vietnam are prohibited on Coconut and
                                  will be removed without prior notice.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Cryptoassets linked to assets, listings, smart contracts, and collections created or used primarily
                                  or substantially for the purpose of raising funds for the known terrorist organizations listed in the
                                  notice of the United Nations (Anti-Terrorism Measures) Ordinance (Cap. 575) as updated from
                                  time to time (https://www.sb.gov.hk/eng/special/terrorist/terrorist.html) and on the
                                  https://www.state.gov/foreign-terrorist-organizations/ are prohibited on the Platform and will be
                                  removed. The sale of Cryptoassets linked to stolen assets, assets taken without authorization, and
                                  otherwise illegally obtained assets on Coconut is prohibited. If you have reason to believe that
                                  any Cryptoasset on our Platform is linked to an asset that was illegally obtained, please contact us
                                  immediately. Listing any Cryptoasset linked to illegally obtained assets will result in your listings
                                  being cancelled, your assets being hidden, or your Account being suspended.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Coconut only provides a Platform to facilitate Transactions between you and other users
                                  (customer to customer), but Coconut will not be storing or holding any Cryptoassets on behalf
                                  of any user. Users will be able to access Cryptoasset prices, trade information and utilize any
                                  trading agreements as made available on the Platform in order to conduct a Transaction. All
                                  Transactions are executed by the participating users in accordance with the terms and conditions
                                  of the smart contract between and as determined by the participating users. If there is a dispute
                                  between users, we will not be responsible for users' violations of our terms of service or the law.
                                  Users should carefully learn about the legitimacy of the digital assets (including NFTs) they are
                                  about to buy.
                                    </Text>
                              </li>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Age Restrictions and Prohibited Content
                              </Text>
                            <ol className="p-explore_counterList">
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  If the user is an individual, the user must be 18 years old or older and possess the capacity to form
                                  a binding contract and have the full capacity to accept these Terms, use the Service and conduct
                                  any Transactions. Anyone under 18 years old may use a parent or guardian's Account but only with
                                  permission and involvement of the Account owner. The Account owner assumes all associated
                                  risks and is responsible for everything performed with that Account.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Cryptoassets linked to assets, listings, smart contracts, and collections that include metadata that
                                  violates international or Vietnamese intellectual property laws, promotes suicide or self-harm,
                                  incites hate, dangerous acts, horror, or violence against others, degrades or doxes another
                                  individual, depicts minors in sexually suggestive situations, or is otherwise illegal in Vietnam are
                                  prohibited on Coconut and will be removed without prior notice.
                                    </Text>
                              </li>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>User Information and Copyright
                              </Text>
                            <ol className="p-explore_counterList">
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  You are solely responsible for your use of the Service(s) and for any User Information you provide,
                                  including compliance with applicable laws, rules, and regulations. We take no responsibility for
                                  the User Information posted or listed via the Service. You retain your rights to any User
                                  Information you submit, post, or display using the Service(s).
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  By submitting, posting or displaying User Information on or through the Service(s), you grant us a
                                  worldwide, non-exclusive, sublicensable, royalty-free license to use, copy, modify, and display any
                                  text, content, files, communications, comments, feedback, suggestions, ideas, concepts, questions,
                                  data or other content that you submit or post on the Platform and/or through the Service(s) or
                                  through tools or applications we provide for posting or sharing such content (collectively “User
                                  Information”) for our lawful business purposes, including to provide, promote, and improve the
                                  Service(s). Coconut does not claim that submitting, posting or displaying User Information on the
                                  Platform and/or through the Service(s) gives Coconut any ownership or resale rights of your User
                                  Information.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  You represent and warrant that you have, or have obtained, all rights, licenses, consents, permissions,
                                  power and/or authority necessary to grant the rights granted herein for any User Information
                                  that you submit, post or display on the Platform and/or through the Service(s). You agree that
                                  such User Information will not contain material subject to copyright or other proprietary rights,
                                  unless you have necessary permission or are otherwise legally entitled to post the material and
                                  grant the license described above to Coconut.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Coconut will remove content in response to formal infringement claims at any time without
                                  prior notice to the user and will terminate a user's access to the Service(s) if the user is a repeat
                                  infringer.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Formal infringement claims regarding content on the Platform or Service(s) must include:
                                    </Text>
                                <ol className="p-explore_counterList">
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Written communication detailing C to G (“Infringement Notice”) and addressed to <a href="legal@Coconut.com">legal@Coconut.com</a>
                                      .
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      A physical or electronic signature of someone authorized to act on behalf of the
                                      copyright owner (if applicable);
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Identification of the copyrighted work(s) allegedly infringed;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Identification of material claimed to be infringed upon, reasonably sufficient to permit
                                      Coconut to locate the material;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      Information reasonably sufficient to permit Coconut to contact the complaining party.
                                      This can be an address, phone number, email address, or other suitable method of
                                      contact;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      A statement that the “complaining party has a good faith belief that use of the material
                                      in the manner complained of is not authorized by the copyright owner, its agent or the
                                      law”; and
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      A statement that the information in the Infringement Notice is accurate and, under
                                      penalty of perjury, that the complainant is authorized to act on behalf of copyright
                                      owner.
                                    </Text>
                                  </li>
                                </ol>
                              </li>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Indemnification
                              </Text>
                            <ol className="p-explore_counterList">
                              <Text modifiers={['noBold', 'inline']}>
                                To the fullest extent permitted by applicable law, you agree to indemnify, defend and hold harmless
                                Coconut, and our respective past, present and future employees, officers, directors, contractors,
                                consultants, equity holders, suppliers, vendors, service providers, parent companies, subsidiaries,
                                affiliates, agents, representatives, predecessors, successors and assigns (individually and collectively,
                                the “Coconut Parties”), from and against all actual or alleged third party claims, damages, awards,
                                judgments, losses, liabilities, obligations, penalties, interest, fees, expenses (including, without
                                limitation, attorneys’ fees and expenses) and costs (including, without limitation, debt collection
                                expenses, court costs, costs of settlement and costs of pursuing indemnification and insurance), of every
                                kind and nature whatsoever, whether known or unknown, foreseen or unforeseen, matured or
                                unmatured, or suspected or unsuspected, in law or equity, whether in tort, contract or otherwise
                                (collectively, “Claims”), including, but not limited to, damages to property or personal injury, that are
                                caused by, arise out of or are related to:
                                    </Text>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Your use or misuse of the Service(s), User Information or Cryptoassets;
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Your participation in any Transaction
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Any Representations and Warranties given by you being untrue;
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Any breach of any of these Terms; and
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Any claim against you by any third-party, including another user or
                                  MetaMask/Coin98/Binance Chain wallet. You agree to promptly notify Coconut of any
                                  third-party Claims and cooperate with the Coconut Parties in defending such Claims.
                                  You further agree that the Coconut Parties shall have control of the defense or
                                  settlement of any third-party Claims. THIS INDEMNITY IS IN ADDITION TO, AND NOT IN
                                  LIEU OF, ANY OTHER LEGAL RIGHTS AVAILABLE TO US INCLUDING ANY OTHER
                                  INDEMNITIES SET FORTH IN A WRITTEN AGREEMENT BETWEEN YOU AND Coconut.
                                    </Text>
                              </li>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Disclaimers
                              </Text>
                            <ol className="p-explore_counterList">
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  EXCEPT AS EXPRESSLY PROVIDED TO THE CONTRARY IN WRITING BY Coconut, THE SERVICE,
                                  CONTENT CONTAINED THEREIN, AND CRYPTOASSETS LISTED THEREIN ARE PROVIDED ON AN
                                  “AS IS”AND “AS AVAILABLE” BASIS WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
                                  EITHER EXPRESS OR IMPLIED. Coconut MAKE NO WARRANTY THAT THE SERVICE(S): (A) WILL
                                  MEET YOUR REQUIREMENTS; (B) WILL BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE,
                                  OR ERROR-FREE BASIS; OR (C) WILL BE ACCURATE, RELIABLE, COMPLETE, LEGAL, OR SAFE.
                                  Coconut DISCLAIMS ALL OTHER WARRANTIES OR CONDITIONS, EXPRESS OR IMPLIED,
                                  INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OR CONDITIONS OF
                                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT AS
                                  TO THE SERVICE(S), CONTENT CONTAINED THEREIN. WE WILL NOT BE LIABLE FOR ANY LOSS OF
                                  ANY KIND FROM ANY ACTION TAKEN OR TAKEN IN RELIANCE ON MATERIAL OR INFORMATION,
                                  CONTAINED ON THE PLATFORM. WHILE Coconut ATTEMPTS TO MAKE YOUR ACCESS TO AND
                                  USE OF THE SERVICE(S) AND CONTENT SAFE, Coconut CANNOT AND DOES NOT REPRESENT
                                  OR WARRANT THAT THE SERVICE(S), CONTENT, ANY CRYPTOASSETS LISTED ON OUR SERVICE OR
                                  OUR SERVERS ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE CANNOT
                                  GUARANTEE THE SECURITY OF ANY DATA THAT YOU DISCLOSE ONLINE. YOU ACCEPT THE
                                  INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND DEALING ONLINE OVER THE
                                  INTERNET AND WILL NOT HOLD US RESPONSIBLE FOR ANY BREACH OF SECURITY UNLESS IT IS
                                  DUE TO OUR GROSS NEGLIGENCE.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  GIVEN THAT THE PLATFORM IS OPERATING IN A DECENTRALIZED MANNER, THERE WILL BE
                                  MINIMUM INTERFERENCE FROM Coconut IN THE OPERATION OF THE PLATFORM. ONCE A
                                  TRANSACTION HAS BEEN INITIATED BY A USER THAT RESULTS IN A BROADCAST TO THE
                                  NETWORK, IT WILL NOT BE POSSIBLE NOR WOULD IT BE Coconut’S RESPONSIBILITY TO HALT
                                  ANY TRANSACTION SHOULD THE USER SUBSEQUENTLY DISCOVER THAT THE TRANSACTION HAS
                                  BEEN MADE TO AN INCORRECT WALLET ADDRESS. IT IS YOUR RESPONSIBILITY TO CHECK ALL
                                  DETAILS OF THE TRANSACTION PRIOR TO PROCEEDING.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  YOU ACCEPT RESPONSIBILITIES FOR ALL YOUR ACTIVITIES AND CONTENTS ON THE PLATFORM
                                  INCLUDING TRANSACTIONS. YOU FURTHER ACKNOWLEDGE THAT Coconut DOES NOT ACT AS
                                  YOUR BROKER, INTERMEDIARY, AGENT, ADVISOR OR CREDITOR WITH RESPECT TO ANY
                                  TRANSACTION YOU AKE OR PROPOSE TO MAKE ON THE PLATFORM AND OWES YOU NO
                                  FIDUCIARY DUTY (EXCEPT FOR THE Coconut HELPER SERVICE). ANY COMMUNICATION BY
                                  Coconut TO YOU SHALL NOT BE CONSTRUED UNDER ANY CIRCUMSTANCES AS LEGAL, TAX,
                                  ACCOUNTING OR FINANCIAL ADVICE.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Coconut ONLY PROVIDES A PLATFORM TO FACILITATE TRANSACTIONS BETWEEN THE BUYER
                                  AND SELLER BUT IS NOT A PARTY TO ANY TRANSACTION OR AGREEMENT BETWEEN THE BUYER
                                  AND SELLER OF CRYPTOASSETS OR BETWEEN ANY USERS. YOU BEAR FULL RESPONSIBILITY FOR
                                  VERIFYING THE IDENTITY, LEGITIMACY, AND AUTHENTICITY OF CRYPTOASSETS YOU PURCHASE
                                  ON THE PLATFORM. NOTWITHSTANDING INDICATORS AND MESSAGES THAT SUGGEST
                                  VERIFICATION INCLUDING KNOW YOUR CUSTOMER (KYC), Coconut MAKES NO CLAIMS ABOUT
                                  THE IDENTITY, LEGITIMACY, OR AUTHENTICITY OF CRYPTOASSETS ON THE PLATFORM.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSS AND TAKE NO
                                  RESPONSIBILITY FOR, AND WILL NOT BE LIABLE TO YOU FOR ANY USE OF CRYPTOASSETS,
                                  INCLUDING BUT NOT LIMITED TO ANY LOSSES, DAMAGES OR CLAIMS ARISING FROM:
                                    </Text>
                                <ol className="p-explore_counterList">
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      USER ERROR SUCH AS FORGOTTEN PASSWORDS, INCORRECTLY CONSTRUCTED
                                      TRANSACTIONS, OR MISTYPED ADDRESSES;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      SERVER FAILURE OR DATA LOSS;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      CORRUPTED WALLET FILES;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      UNAUTHORIZED ACCESS TO YOUR ACCOUNT; OR
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      ANY UNAUTHORIZED THIRD PARTY ACTIVITIES, INCLUDING WITHOUT LIMITATION THE
                                      USE OF VIRUSES, PHISHING, BRUTE-FORCING OR OTHER MEANS OF ATTACK AGAINST
                                      THE SERVICE OR CRYPTOASSETS.
                                    </Text>
                                  </li>
                                </ol>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  CRYPTOASSETS ARE INTANGIBLE DIGITAL ASSETS. THEY EXIST ONLY BY VIRTUE OF THE
                                  OWNERSHIP RECORD MAINTAINED IN THE NETWORK. ANY TRANSFER OF TITLE THAT MIGHT
                                  OCCUR IN ANY UNIQUE DIGITAL ASSET OCCURS ON THE DECENTRALIZED LEDGER WITHIN THE
                                  NETWORK. WE DO NOT GUARANTEE THAT Coconut OR ANY Coconut PARTY CAN EFFECT
                                  THE TRANSFER OF TITLE OR RIGHT IN ANY CRYPTOASSETS.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Coconut IS NOT RESPONSIBLE FOR LOSSES ARISING OUT OF OR RELATING TO VULNERABILITY
                                  OR ANY KIND OF FAILURE, ABNORMAL BEHAVIOR OF SOFTWARE (E.G., WALLET, SMART CONTRACT),
                                  BLOCKCHAINS OR ANY OTHER FEATURES OF THE CRYPTOASSETS. Coconut IS NOT
                                  RESPONSIBLE FOR LOSSES ARISING OUT OF OR RELATING TO LATE REPORT BY DEVELOPERS OR
                                  REPRESENTATIVES (OR NO REPORT AT ALL) OF ANY ISSUES WITH THE BLOCKCHAIN SUPPORTING
                                  CRYPTOASSETS INCLUDING FORKS, TECHNICAL NODE ISSUES OR ANY OTHER ISSUES HAVING
                                  FUND LOSSES AS A RESULT.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  THE CHARACTERISTICS OF THE CRYPTOASSETS CREATED THROUGH THE SERVICE ON OUR
                                  PLATFORM SHALL BE DETERMINED BY THE CREATOR. Coconut HAS NO INVOLVEMENT OR
                                  RESPONSIBILITY IN THE DESIGN OF THE CRYPTOASSET.
                                    </Text>
                              </li>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Acknowledging & Accepting Assumption of Risk
                              </Text>
                            <ol className="p-explore_counterList">
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  The prices of blockchain assets are extremely volatile. Fluctuations in the price of other digital
                                  assets could materially and adversely affect the Cryptoassets, which may also be subject to
                                  significant price volatility. We cannot guarantee that any purchasers of Cryptoassets will not lose
                                  money.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  You are solely responsible for determining what, if any, taxes apply to your Transactions which
                                  includes, but is not limited to any income, profit and/or capital gains tax. Neither Coconut nor
                                  any other Coconut Party is responsible for determining the taxes that apply to Transactions nor
                                  will they provide any tax related information to the users.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Coconut does not store, send, or receive Cryptoassets. This is because Cryptoassets exist only by
                                  virtue of the ownership record maintained on its supporting blockchain. Any transfer of
                                  Cryptoassets occurs within the supporting blockchain and not on this Service.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  There are risks associated with using an Internet based currency, including but not limited to, the
                                  risk of hardware, software and Internet connections, the risk of malicious software introduction,
                                  and the risk that third parties may obtain unauthorized access to information stored within your
                                  Account. You accept and acknowledge that Coconut will not be responsible for any
                                  communication failures, disruptions, errors, distortions or delays you may experience when using
                                  the Service(s), however caused.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  A lack of use or public interest in the creation and development of distributed ecosystems could
                                  negatively impact the development of those ecosystems and related applications and could
                                  therefore also negatively impact the potential utility or value of Cryptoassets.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  The regulatory regime governing blockchain technologies, cryptocurrencies, and tokens is
                                  uncertain, and new regulations or policies may materially, adversely affect the development of
                                  the Service(s) and the utility of Cryptoassets.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  The Service will rely on third-party platforms such as MetaMask to perform the Transactions. If:
                                    </Text>
                                <ol className="p-explore_counterList">
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      We are unable to maintain a good relationship with such platform providers;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      The terms and conditions or pricing of such platform providers change;
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      We violate or cannot comply with the terms and conditions of such platforms; or
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      If any of such platforms loses market share or falls out of favor or is unavailable for a
                                      prolonged period of time, access to and use of the Service(s) will suffer.
                                    </Text>
                                  </li>

                                </ol>

                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  There are risks associated with purchasing Cryptoassets, including but not limited to, the risk of
                                  purchasing counterfeit assets, mislabeled assets, assets that are vulnerable to metadata decay,
                                  assets on smart contracts with bugs, and assets that may become untransferable. Coconut
                                  reserves the right to hide collections, contracts, and Cryptoassets affected by any of these issues
                                  or by other issues. Cryptoassets you purchase may become inaccessible on Coconut. Under no
                                  circumstances shall the inability to view your assets on Coconut serve as grounds for a claim
                                  against Coconut.
                                    </Text>
                              </li>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Limitation of Liability
                              </Text>
                            <ol className="p-explore_counterList">
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  If any of such platforms loses market share or falls out of favor or is unavailable for a
                                  prolonged period of time, access to and use of the Service(s) will suffer.
                                    </Text>
                                <ol className="p-explore_counterList">
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      ANY TERMINATION OR SUSPENSION OF THE SERVICE(S)
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      OUR DISCONTINUATION OF ANY OR ALL OF THE SERVICE(S) AND/OR PLATFORM; OR
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      WITHOUT LIMITING ANY OBLIGATIONS UNDER ANY SEPARATELY AGREED
                                      SERVICE-LEVEL AGREEMENTS, ANY UNANTICIPATED OR UNSCHEDULED DOWNTIME OF
                                      ALL OR A PORTION OF THE PLATFORM AND/OR SERVICE(S) OR PLATFORM FOR ANY
                                      REASON, INCLUDING AS A RESULT OF:
                                    </Text>
                                    <ol className="p-explore_counterList">
                                      <li>
                                        <Text modifiers={['noBold', 'inline']}>
                                          POWER OUTAGES, SYSTEM FAILURES OR OTHER INTERRUPTIONS;
                                    </Text>
                                      </li>
                                      <li>
                                        <Text modifiers={['noBold', 'inline']}>
                                          THE COST OF PROCUREMENT OF SUBSTITUTE GOODS OR THE SERVICE(S) OR
                                          PLATFORM;
                                    </Text>
                                      </li>
                                      <li>
                                        <Text modifiers={['noBold', 'inline']}>
                                          ANY INVESTMENTS, EXPENDITURES, OR COMMITMENTS BY YOU OR YOUR
                                          USE OF OR ACCESS TO THE SERVICE(S) OR THE PLATFORM; OR
                                    </Text>
                                      </li>
                                      <li>
                                        <Text modifiers={['noBold', 'inline']}>
                                          ANY UNAUTHORIZED ACCESS TO, ALTERATION OF, OR THE DELETION,
                                          DESTRUCTION, DAMAGE, LOSS OR FAILURE TO STORE ANY OF YOUR
                                          CONTENT OR OTHER DATA.
                                    </Text>
                                      </li>
                                    </ol>

                                  </li>

                                </ol>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, IN NO EVENT SHALL THE
                                  MAXIMUM AGGREGATE LIABILITY OF Coconut ARISING OUT OF OR IN ANY WAY RELATED TO
                                  THESE TERMS, THE ACCESS TO THE PLATFORM AND/OR USE OF THE SERVICE(S), CONTENT,
                                  CRYPTOASSETS, OR ANY CRYPTOASSETS PURCHASED ON THE PLATFORM EXCEEDS THE AMOUNT
                                  RECEIVED BY Coconut FROM THE SALE OF CRYPTOASSETS ON THE PLATFORM THAT IS THE
                                  SUBJECT OF THE CLAIM. THE FOREGOING LIMITATIONS OF LIABILITY SHALL NOT APPLY TO:
                                    </Text>
                                <ol className="p-explore_counterList">
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      DEATH OR PERSONAL INJURY CAUSED BY Coconut OR Coconut
                                      PARTIES’ NEGLIGENCE; OR
                                    </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>
                                      ANY INJURY CAUSED BY Coconut OR Coconut PARTIES’ FRAUD OR FRAUDULENT
                                      MISREPRESENTATION.
                                    </Text>
                                  </li>
                                </ol>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  NOTHING IN THESE TERMS SHALL EXCLUDE OR LIMIT LIABILITY OF EITHER PARTY FOR FRAUD,
                                  DEATH OR BODILY INJURY CAUSED BY NEGLIGENCE, VIOLATION OF LAWS, OR ANY OTHER ACTIVITY
                                  THAT CANNOT BE LIMITED OR EXCLUDED BY LEGITIMATE MEANS.
                                    </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>
                                  Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages,
                                  so the above limitation or exclusion may not apply to you. Some jurisdictions also limit disclaimers
                                  or limitations of liability for personal injury from consumer products, so this limitation may not
                                  apply to personal injury claims.
                                    </Text>
                              </li>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Assignment
                              </Text>
                            <ol className="p-explore_counterList">
                              <Text modifiers={['noBold', 'inline']}>You may not assign or transfer any of your obligations or rights without the written consent from
                              Coconut.
                              </Text>
                              <Text modifiers={['noBold', 'inline']}>Coconut shall not be liable for any delay or failure to perform its obligations under these Terms which is
                              caused by an event or sequence of events beyond its reasonable control. Such events shall include acts of
                              God, flood, drought, earthquake or other natural disaster; disease, epidemic or pandemic such as
                              COVID-19 and the lockdown of territories or states as a result of the pandemic; terrorist attack, civil war,
                              civil commotion or riots, war, threat of or preparation for war, armed conflict, imposition of sanctions,
                              embargo, or breaking off of diplomatic relations; nuclear, chemical or biological contamination; any law or
                              any action taken by a government or public authority, including without limitation imposing an export or
                              import restriction, quota or prohibition, or failing to grant or renew a necessary licence or consent;
                              collapse of buildings, fire, explosion or accident; any labour or trade dispute, strikes, industrial action or
                              lockouts; and interruption or failure of utility service.
                              </Text>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Force Majeure
                              </Text>
                            <ol className="p-explore_counterList">
                              <Text modifiers={['noBold', 'inline']}>Coconut shall not be liable for any delay or failure to perform its obligations under these Terms which is
                              caused by an event or sequence of events beyond its reasonable control. Such events shall include acts of
                              God, flood, drought, earthquake or other natural disaster; disease, epidemic or pandemic such as
                              COVID-19 and the lockdown of territories or states as a result of the pandemic; terrorist attack, civil war,
                              civil commotion or riots, war, threat of or preparation for war, armed conflict, imposition of sanctions,
                              embargo, or breaking off of diplomatic relations; nuclear, chemical or biological contamination; any law or
                              any action taken by a government or public authority, including without limitation imposing an export or
                              import restriction, quota or prohibition, or failing to grant or renew a necessary licence or consent;
                              collapse of buildings, fire, explosion or accident; any labour or trade dispute, strikes, industrial action or
                              lockouts; and interruption or failure of utility service.
                              </Text>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Language
                              </Text>
                            <ol className="p-explore_counterList">
                              <Text modifiers={['noBold', 'inline']}>Notwithstanding any other provision of these Terms, any translation of the Terms is provided for your
                              convenience. The meanings of terms, conditions and representations herein are subject to definitions and
                              interpretations in English. You agree that in the event of any conflict between the English version of the
                              foregoing documents and any other translations, the English version shall prevail.
                              </Text>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>No Partnership
                              </Text>
                            <ol className="p-explore_counterList">
                              <Text modifiers={['noBold', 'inline']}>Coconut and the user are and intend to remain independent parties. Nothing in these Terms shall be
                              deemed or construed to create the relationship of a principal and agent or partnership or joint venture,
                              or that of an employee and employer between Coconut and the user and Coconut shall not assume any
                              fiduciary duties to the user.
                              </Text>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Termination
                              </Text>
                            <ol className="p-explore_counterList">
                              <Text modifiers={['noBold', 'inline']}>Notwithstanding anything contained in these Terms, we reserve the right, without notice and in our sole
                              discretion, to terminate your right to access or use the Service(s) at any time and for any or no reason,
                              and you acknowledge and agree that we shall have no liability or obligation to you in such event and that
                              you will not be entitled to a refund of any amounts that you have already paid to us, to the fullest extent
                              permitted by applicable law.
                              </Text>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Severability
                              </Text>
                            <ol className="p-explore_counterList">
                              <Text modifiers={['noBold', 'inline']}>If any term, clause or provision of these Terms is held invalid or unenforceable, then that term, clause or
                              provision will be severable from these Terms and will not affect the validity or enforceability of any
                              remaining part of that term, clause or provision, or any other term, clause or provision of these Terms.
                              </Text>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Survival
                              </Text>
                            <ol className="p-explore_counterList">
                              <Text modifiers={['noBold', 'inline']}>The following sections will survive the expiration or termination of these Terms and the termination of
                              your Account: all defined terms and Sections 1-3 and 6-32.
                              </Text>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Disputes and Arbitration
                              </Text>
                            <ol className="p-explore_counterList">
                              <Text modifiers={['noBold', 'inline']}>Vietnam law will govern any dispute related to these terms or your use of Coconut.
                              </Text>
                              <Text modifiers={['noBold']}>You and the company agree to seek injunctions related to these terms only in local, state or federal
                              court or where is related to stated laws. Neither you nor the company will object to jurisdiction, Coconut,
                              or venue in those courts. However, our company reserves the right to nominate the arbitration as VIAC
                              (VIETNAM INTERNATIONAL ABRITRATION CENTER) or others at our discretion.
                              </Text>
                              <Text modifiers={['noBold']}>Other than to seek an injunction or for claims under the Computer Fraud and Abuse Act, you and the
                              company will resolve any dispute through the binding arbitration following the American Arbitration
                              Association or others which will be determined by our company . Arbitration will follow the
                              AAA’s Commercial Arbitration Rules and Supplementary Procedures for Consumer Related Disputes.
                              Arbitration will take place in Vietnam, or location nominated by our company. You will settle any dispute
                              as an individual, and not as part of a class action or other representative proceeding, whether as the
                              plaintiff or a class member. No arbitrator will consolidate any dispute with any other arbitration without
                              the company’s permission.
                              </Text>
                              <Text modifiers={['noBold']}>Any arbitration award will include costs of the arbitration, reasonable attorneys’ fees, and reasonable costs
                              for witnesses. You and the company may enter arbitration awards in VIAC (VIETNAM INTERNATIONAL
ARBITRATION CENTER) as <a href="https://www.viac.vn/">https://www.viac.vn/</a>
                              </Text>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>KYC Process and Verified Label/ Fake Label
                              </Text>
                            <ol className="p-explore_counterList">
                              <li>
                                <Text modifiers={['noBold', 'inline']}>To make it easy for users to verify the identity of themselves and other users, Coconut provides
                                "Verified" labels to users who have verified their identity through the KYC procedure. The KYC
                                procedure requires users to provide information including their citizen ID card photo, a photo of
                                their face, and a photo of their face with the ID card.
                              </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>Coconut has no obligation or responsibility to store or provide this information to users,
                                Coconut is only a Decentralized service designed to help users trade Digital Assets with each
                                other. We do not guarantee that the Verified or KYC information provided by the users is correct.
                                It is the user's sole responsibility to check the accuracy of other users' information and the Digital
                                Assets' legitimacy they are about to purchase. We are also not responsible for compensation if
                                users suffer losses due to fraudulent, fake or unauthentic information.
                              </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>In the event of a dispute between users, and receiving a request by an international or national
                                court to provide user information, (including KYC information), we will comply and provide this
                                information to the court. Users will be responsible for all their actions on our Platform.
                              </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>Fake labels are assigned by us to users who have Digital Assets associated with counterfeit
                                content. We reserve the right to place this label on any account we suspect to be in violation of our
                                terms without prior notice. Users need to contact legal@Coconut.com or support@Coconut.com
                                and provide information to prove that the data or information previously provided is accurate and
                                legitimate if they wish to have the Fake label removed from their account.
                              </Text>
                              </li>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Note to Users Outside of Vietnam
                              </Text>
                            <ol className="p-explore_counterList">
                              <Text modifiers={['noBold']}>Coconut operates a global service with our company based in Vietnam. By using our Site and Service(s),
                              data collected on our non-Vietnam users may be transferred out of the country in which it was collected
                              and processed at our head office in Vietnam as well as at partners of Coconut for purposes described in
                              our Privacy Policy, including for the processing of cryptocurrency transactions.
                              </Text>
                              <Text modifiers={['noBold']}>Vietnam, European Economic Area (“EEA”) Member States, and other countries all have different laws.
                              When your information is moved from your home country to another country, the laws and rules that
                              protect your personal information in the country to which your information is transferred may be
                              different from those in the country in which you live. For example, the circumstances in which law
                              enforcement can access personal information may vary from country to country. In particular, if your
                              information is in Vietnam, it may be accessed by government authorities in accordance with Vietnam law.
                              </Text>
                              <Text modifiers={['noBold']}>To the extent that Coconut is deemed to transfer personal information outside of the EEA, we rely on
                              the following legal basis to transfer your information:
                              </Text>
                              <Text modifiers={['noBold']}>Necessary for the performance of the Contract between Coconut and its Users
                              </Text>
                              <Text modifiers={['noBold']}>Coconut provides a service; you can choose whether or not to use our Service(s). Using Coconut
                              is voluntary and up to the User. As we operate in countries worldwide and use first and third party
                              technical infrastructure in countries and regions including, but not limited to, Vietnam and the
                              European Union, in order to deliver our Service(s) to you, we need to transfer your personal
                              information to Vietnam and to other jurisdictions as necessary to provide said Service(s). Simply
                              put, we cannot provide you with our Service(s) and perform our contract with you without moving
                              your personal information around the world. For further information regarding the jurisdictions in
                              which our first and third party technical infrastructure are located, please contact us through our
                              contact details indicated in section 1.3.
                              </Text>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Privacy Policy
                              </Text>
                            <ol className="p-explore_counterList">
                              <Text modifiers={['noBold', 'inline']}>Please refer to our Privacy Policy for information about how we collect, use and share your personal
                              information.
                              </Text>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Coconut Helper Service
                              </Text>
                            <ol className="p-explore_counterList">

                              <li>
                                <Text modifiers={['noBold', 'inline']}>To create a service to help users who access digital assets for the first time, Coconut provides a
                                Helper Service. With this service, Coconut will help first-time users gain access to Digital Assets
                                and the blockchain environment with steps that include: creating NFTs from their digital content,
                                posting those assets (NFTs) for sale at prices determined by that user, transferring the digital assets
                                (cryptocurrency) they obtained from the sale of their NFTs to their crypto wallet.
                              </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>We have no obligation or liability for the accuracy or legitimacy of these NFTs. Users of the
                                Coconut Helper Service will be fully responsible for their NFTs and the content associated with
                                those NFTs.
                              </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>Users of the Coconut Helper Service shall keep and protect their own digital wallet private keys
                                (i.e. Metamask wallet). We do not hold and will not require holding your digital wallet's private key.
                                It is your responsibility to check the accuracy of the information relating to your Digital Assets and
                                NFTs. Coconut is solely a platform designed to help connect buyers and sellers.
                              </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>Users of Coconut’s Helper Service shall verify the desired selling price you want us to list for you.
                                Once the transaction between users has completed, we cannot cancel the transaction due to the
                                nature of blockchain. (All of the transactions occur on the blockchain not on our platform)
                              </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>Content associated with NFTs that violates our policies will be taken down without prior notice and
                                infringing accounts will be terminated.
                              </Text>
                              </li>
                              <li>
                                <Text modifiers={['noBold', 'inline']}>Users of Coconut’s Helper Service must also accept and comply with all of our Terms of Service. If
                                you do not agree to any of our terms, you should stop accessing and using the platform
                                immediately.
                              </Text>
                              </li>
                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Being censored label
                              </Text>
                            <ol className="p-explore_counterList">
                              <Text modifiers={['noBold']}>In order to improve the quality and ensure that there is no content that is unhealthy or contrary to
                              current regulations of Vietnam and international laws uploaded to Coconut, Coconut will receive
                              reports relating to CryptoAssets (including NFTs) from users in 2 ways. The first is from the report button
                              on Coconut and the second is from e-mail to legal@Coconut.com or support@Coconut.com . Coconut
                              then will review those reports and decide whether to remove those reported Cryptoassets from
                              Coconut or not.
                              </Text>
                              <Text modifiers={['noBold']}>Cryptoassets linked to assets, listings, smart contracts, and collections that include metadata that
                              violates international or Vietnamese intellectual property laws, promotes suicide or self-harm, incites
                              hate, dangerous acts, horror, or violence against others, degrades or doxes another individual, depicts
                              minors in sexually suggestive situations, or is otherwise illegal in Vietnam are prohibited on Coconut
                              and will be removed without prior notice. Therefore, Cryptoassets (including NFTs) that have been
                              reported and are in the process of being censored by Coconut will be labeled "Being censored". Users
                              should consider carefully before purchasing Cryptoassets (including NFTs) with Being censored label as
                              they may be removed from Coconut without notice. However, keep in mind that Coconut only deletes
                              Cryptoassets so that they don't show up on Coconut, those Cryptoassets still exist on the blockchains
                              they were created from due to the nature of blockchain technology.
                              </Text>
                              <Text modifiers={['noBold']}>The Cryptoassets (including NFTs) censoring process will be executed within 3 days for reports related to
                              content (including pornographic, violent, hateful, dangerous acts). The Cryptoassets (including NFTs) censoring
                              process will be executed within 1 month for reports related to content copyright disputes.
                              </Text>
                              <Text modifiers={['noBold']}>It is your sole responsibility to check that the contents of Cryptoassets (including NFTs) are compliant
                              with Coconut regulations prior to purchase. We will not bear any responsibility if you are damaged in
                              any way when participating in Cryptoassets trading on Coconut. You agree and confirm that you understand
                              the types of labels attached to Cryptoassets on Coconut.
                              </Text>
                              <Text modifiers={['noBold']}>All users must comply with Coconut regulations and applicable Vietnamese & international laws at all
                              times.
                              </Text>

                            </ol>
                          </div>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Miscellaneous
                              </Text>
                            <ol className="p-explore_counterList">
                              <Text modifiers={['noBold']}>These Terms, together with the Privacy Policy, constitute the entire agreement between you and
                              Coconut relating to your access to the Platform and use of the Service(s). These Terms, and any rights
                              and licenses granted hereunder, may not be transferred or assigned by you without the prior written
                              consent of Coconut for any previous, concurrent or subsequent circumstance. Coconut’s failure to
                              assert any right or provision under these Terms shall not constitute a waiver of such right or provision.
                              Except as otherwise provided herein, these Terms are intended solely for the benefit of the parties and
                              are not intended to confer third-party beneficiary rights upon any other person or entity.
                              </Text>

                            </ol>
                          </div>
                        </li>
                      </ol>
                    </Grid>
                  </Section>
                </div>
              </Form>

            );
          }}
        </Formik>
      </Layout>
    </div>
  );
};

export default hot(userguilde);
