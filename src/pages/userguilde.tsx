import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from 'components/templates/layout';
import { Form, Formik } from 'formik';
import { createSchema, initialValue } from 'components/pages/create/form';
import Divider from '@material-ui/core/Divider';
import { Icon } from 'components/atoms/icon';
import { Text } from 'components/atoms/text';
import Grid from '@material-ui/core/Grid';
import main_img from 'assets/images/howtouse_main.png';
import bottom_fade from 'assets/images/bottom_fade.png';
import setup_1 from 'assets/images/Slide1.png';
import setup_2 from 'assets/images/Slide2.png';
import setup_3 from 'assets/images/Slide3.png';
import setup_4 from 'assets/images/Slide4.png';
import setup_5 from 'assets/images/Slide5.png';
import setup_6 from 'assets/images/Slide6.png';
import setup_7 from 'assets/images/Slide7.png';
import setup_8 from 'assets/images/Slide8.png';
import setup_9 from 'assets/images/Slide9.png';
import setup_10 from 'assets/images/Slide10.png';
import setup_11 from 'assets/images/Slide11.png';
import setup_12 from 'assets/images/Slide12.png';
import setup_13 from 'assets/images/Slide13.png';
import setup_14 from 'assets/images/Slide14.png';
import setup_15 from 'assets/images/Slide15.png';
import setup_16 from 'assets/images/Slide16.png';
import setup_17 from 'assets/images/Slide17.png';
import setup_18 from 'assets/images/Slide18.png';
import setup_19 from 'assets/images/Slide19.png';
import setup_20 from 'assets/images/Slide20.png';
import setup_21 from 'assets/images/Slide21.png';
import setup_22 from 'assets/images/Slide22.png';
import setup_23 from 'assets/images/Slide23.png';
import setup_24 from 'assets/images/Slide24.png';
import setup_25 from 'assets/images/Slide25.png';
import setup_26 from 'assets/images/Slide26.png';
import { useTranslation } from "react-i18next";

export const userguilde: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="p-create">
      <Layout title="User Guilde">
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
                  <section className="sectionguidle">
                    <div className="sectionguidle_Main">
                      <img className="p-create_img" src={main_img} />
                      <img className="p-create_imgFade" src={bottom_fade} />
                    </div>
                    <Grid
                      className="sectionguidle_box"
                      container
                      spacing={5}
                      justify="center"
                    >
                      <Grid justify="center" item xs={7}>
                        <h2>{t("howUse.use")}</h2>
                      </Grid>
                      <Grid justify="center" item xs={5}>
                        <ol>
                          <li>{t("howUse.create")}</li>
                          <li>{t("howUse.setting")}</li>
                          <li>{t("howUse.connect")}</li>
                          <li>{t("howUse.howCreate")}</li>
                          <li>{t("howUse.howBuy")}</li>
                          <li>{t("howUse.howResell")}</li>
                        </ol>
                      </Grid>
                    </Grid>
                  </section>
                  <div className="sectionguidle_sub">
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                      justify="center"
                    >
                      <Grid justify="center" item xs={6}>
                        <h1>1.&nbsp; &nbsp; {t("howUse.create")}”</h1>
                        <ul>
                          <li><span>{t("howUse.howCreate_define1")}</span></li>
                          <li><span>{t("howUse.howCreate_define2")}</span></li>
                        </ul>
                      </Grid>
                      <Grid justify="center" item xs={6}>
                        <img className="p-create_imgGuilde" src={setup_1} />
                      </Grid>
                    </Grid>
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                    >
                      <Grid item xs={9}>
                        <Text>{t("howUse.howCreate_step1")}</Text>
                        <Text>{t("howUse.howCreate_step2")}</Text>
                      </Grid>
                      <Grid item xs={4}></Grid>
                      <Grid item xs={8}>
                        <img className="p-create_imgGuilde2" src={setup_2} />
                      </Grid>
                    </Grid>
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                    >
                      <Grid item xs={9}>
                        <Text>{t("howUse.howCreate_step3")}</Text>
                      </Grid>
                      <Grid item xs={12}>
                        <img className="p-create_imgGuilde2" src={setup_3} />
                      </Grid>
                    </Grid>
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                    >
                      <Grid item xs={6}>
                        <h2>{t("howUse.howCreate_head1")}</h2>
                        <Text>{t("howUse.howCreate_head1_step1")}</Text>
                        <Text>{t("howUse.howCreate_head1_step2")}</Text>
                      </Grid>
                      <Grid item xs={6}>
                        <img className="p-create_imgGuilde2" src={setup_4} />
                        <Text>{t("howUse.howCreate_head1_step3")}</Text>
                      </Grid>
                    </Grid>
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                      justify="center"
                    >
                      <Grid justify="center" item xs={6}>
                        <ul>
                          <li><span>{t("howUse.howCreate_head1_step4")}</span></li>
                          <li><span>{t("howUse.howCreate_head1_step5")}</span></li>
                          <li><span>{t("howUse.howCreate_head1_step6")}</span></li>
                          <li><span>{t("howUse.howCreate_head1_step7")}</span></li>
                          <li><span>{t("howUse.howCreate_head1_step8")}</span></li>
                        </ul>
                      </Grid>
                      <Grid justify="center" item xs={6}>
                        <img className="p-create_imgGuilde2" src={setup_5} />
                      </Grid>
                    </Grid>
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                    >
                      <Grid item xs={6}>
                        <h2>{t("howUse.howCreate_head2")}</h2>
                        <Text>{t("howUse.howCreate_head2_step1")}</Text>
                      </Grid>
                      <Grid item xs={6}>
                        <img className="p-create_imgGuilde2" src={setup_6} />
                      </Grid>
                    </Grid>
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                    >
                      <Grid item xs={12}>
                        <h1>2.&nbsp; &nbsp;{t("howUse.setting")}</h1>
                      </Grid>
                      <Grid item xs={12}>
                        <img className="p-create_imgGuilde2" src={setup_7} />
                      </Grid>
                    </Grid>
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                    >
                      <Grid item xs={6}>
                        <h2>{t("howUse.setting_head")}</h2>
                        <Text>{t("howUse.setting_head_detail1")}</Text>
                      </Grid>
                      <Grid item xs={6}>
                        <img className="p-create_imgGuilde2" src={setup_8} />
                      </Grid>
                    </Grid>
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                    >
                      <Grid item xs={6}>
                        <h2>{t("howUse.setting_head2")}</h2>
                        <Text>{t("howUse.setting_head2_detail1")}</Text>
                      </Grid>
                      <Grid item xs={6}>
                        <img className="p-create_imgGuilde2" src={setup_9} />
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                    >
                      <Grid item xs={6}>
                        <h2>{t("howUse.setting_head3")}</h2>
                        <ul className="p-create_noticelist">
                          <li className="p-create_textlist">Network Name:</li>
                          <span> Smart Chain</span>
                          <li className="p-create_textlist">New RPC URL:</li>
                          <span> https://bsc-dataseed.binance.org/</span>
                          <li className="p-create_textlist">ChainID:</li>
                          <span> 56</span>
                          <li className="p-create_textlist">Symbol</li>
                          <span> BNB</span>
                          <li className="p-create_textlist">Block Explorer</li>
                          <a href="https://bscscan.com/">https://bscscan.com/</a>
                        </ul>
                        <div className="sectionguidle_sub_button">{t("howUse.setting_head3_detail1")}&nbsp;&nbsp;&nbsp;&nbsp;<Icon iconName="done"/></div>
                      </Grid>
                      <Grid item xs={6}>
                        <img className="p-create_imgGuilde2" src={setup_10} />
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                    >
                      <Grid item xs={6}>
                        <h2>{t("howUse.setting_head4")}</h2>
                        <ul>
                          <li><span>{t("howUse.setting_head4_detail1")}</span></li>
                          <li><span>{t("howUse.setting_head4_detail2")}</span></li>
                          <li><span>{t("howUse.setting_head4_detail3")}</span></li>
                          <li><span>{t("howUse.setting_head4_detail4")}</span></li>
                          <li><span>{t("howUse.setting_head4_detail5")}</span></li>
                        </ul>
                      </Grid>
                      <Grid item xs={6}>
                        <img className="p-create_imgGuilde2" src={setup_11} />
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                      justify="center"
                    >
                      <Grid item xs={12}>
                        <h1>3.&nbsp; &nbsp;{t("howUse.connect")}</h1>
                      </Grid>
                      <Grid item xs={6}>
                        <div>
                          <img className="p-create_imgGuilde2" src={setup_12} />
                        </div>
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                    >
                      <Grid item xs={8}>
                        <h2>{t("howUse.connect_head")}</h2>
                        <Text>{t("howUse.connect_head_detail1")}</Text>
                        <Text>{t("howUse.connect_head_detail2")}</Text>
                      </Grid>
                      <Grid item xs={12}>
                        <img className="p-create_imgGuilde2" src={setup_13} />
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                    >
                      <Grid item xs={6}>
                        <h2>{t("howUse.connect_head2")}</h2>
                        <Text>{t("howUse.connect_head2_detail1")}</Text>
                        <Text>{t("howUse.connect_head2_detail2")}</Text>
                      </Grid>
                      <Grid item xs={6}>
                        <img className="p-create_imgGuilde2" src={setup_14} />
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                      justify="center"
                    >
                      <Grid item xs={12}>
                      <div className="sectionguidle_sub_center">
                        <h1>4.&nbsp; &nbsp;{t("howUse.howCreate")}</h1>
                      </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div>
                          <img className="p-create_imgGuilde2" src={setup_15} />
                        </div>
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                      justify="center"
                    >
                      <Grid item xs={12}>
                      <div className="sectionguidle_sub_center">
                        <h2>{t("howUse.howCreate_head")}</h2>
                        <Text>{t("howUse.howCreate_head_detail1")}</Text>
                        <Text>{t("howUse.howCreate_head_detail2")}</Text>
                      </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div>
                          <img className="p-create_imgGuilde2" src={setup_16} />
                        </div>
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                    // justify="center"
                    >
                      <Grid item xs={8}>
                        <h2>{t("howUse.howCreate_head3")}</h2>
                        <Text>{t("howUse.howCreate_head3_detail1")}</Text>
                        <Text>{t("howUse.howCreate_head3_detail2")}</Text>
                        <Text>{t("howUse.howCreate_head3_detail3")}</Text>
                      </Grid>
                      <Grid item xs={12}>
                        <img className="p-create_imgGuilde_top" src={setup_17} />
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                    // justify="center"
                    >
                      <Grid item xs={8}>
                        <h2>{t("howUse.howCreate_head4")}</h2>
                      </Grid>
                      <Grid item xs={12}>
                        <img className="p-create_imgGuilde2" src={setup_18} />
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                    // justify="center"
                    >
                      <Grid item xs={8}>
                        <h2>{t("howUse.howCreate_head5")}</h2>
                      </Grid>
                      <Grid item xs={12}>
                        <img className="p-create_imgGuilde2" src={setup_19} />
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid
                      className="sectionguidle_sub_containtFull"
                      container
                      spacing={5}
                      justify="center"
                    >
                      <Grid item xs={6}>
                        <div>
                          <img className="p-create_imgGuilde2" src={setup_20} />
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <h1>5.&nbsp; &nbsp;{t("howUse.howBuy")}</h1>
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                      justify="center"
                    >
                      <Grid item xs={6}>
                        <div>
                          <img className="p-create_imgGuilde2" src={setup_21} />
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <h2>{t("howUse.howBuy_head")}</h2>
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                      justify="center"
                    >
                      <Grid item xs={6}>
                        <h2>{t("howUse.howBuy_head2")}</h2>
                      </Grid>
                      <Grid item xs={6}>
                        <div>
                          <img className="p-create_imgGuilde2" src={setup_22} />
                        </div>
                      </Grid>
                      
                    </Grid>
                    {/*  */}
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                      justify="center"
                    >
                      <Grid item xs={5}>
                        <h2>{t("howUse.howBuy_head3")}</h2>
                      </Grid>
                      <Grid item xs={7}>
                        <div>
                          <img className="p-create_imgGuilde2" src={setup_23} />
                        </div>
                      </Grid>
                      
                    </Grid>
                    {/*  */}
                    <Grid
                      className="sectionguidle_sub_containtFull"
                      container
                      spacing={5}
                      justify="center"
                    >
                      
                      <Grid item xs={10}>
                        <h1>6.&nbsp; &nbsp;{t("howUse.howResell")}</h1>
                      </Grid>
                      <Grid item xs={12}>
                        <div>
                          <img className="p-create_imgGuilde2" src={setup_24} />
                        </div>
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                      justify="center"
                    >
                      
                      <Grid item xs={7}>
                        <h2>{t("howUse.howResell_head")}</h2>
                      </Grid>
                      <Grid item xs={12}>
                        <div>
                          <img className="p-create_imgGuilde2" src={setup_25} />
                        </div>
                      </Grid>
                    </Grid>
                    {/*  */}
                    <Grid
                      className="sectionguidle_sub_containt"
                      container
                      spacing={5}
                      justify="center"
                    >
                      
                      <Grid item xs={7}>
                        <h2>{t("howUse.howResell_head2")}</h2>
                      </Grid>
                      <Grid item xs={12}>
                        <div>
                          <img className="p-create_imgGuilde2" src={setup_26} />
                        </div>
                      </Grid>
                    </Grid>
                    {/*  */}
                  </div>

                </div>
                <div className="p-create_reviewGuilde">
                  <div className="p-create_userguildeBox">
                    <h2>Setup BSC in Metamask Wallet:</h2>
                    <ul className="p-create_noticelist">
                      <li className="p-create_textlist">Network Name:</li>
                      <li className="p-create_textlistnone">
                        <span>Smart Chain</span></li>
                      <li className="p-create_textlist">New RPC URL:</li>
                      <li className="p-create_textlistnone">
                        <a href="https://bsc-dataseed.binance.org/">https://bsc-dataseed.binance.org/</a></li>
                      <li className="p-create_textlist">ChainID:</li>
                      <li className="p-create_textlistnone"><span> 56</span></li>
                      <li className="p-create_textlist">Symbol</li>
                      <li className="p-create_textlistnone"><span> BNB</span></li>
                      <li className="p-create_textlist">Block Explorer</li>
                      <li className="p-create_textlistnone"><a href="https://bscscan.com/">https://bscscan.com/</a></li>

                    </ul>
                    <Divider style={{ background: 'black' }} />
                    <ul className="p-create_noticelist">
                      <li className="p-create_textlist">CONUT token: </li>
                      <li className="p-create_textlistnone"><span>
                        0x323249642f3a4519134a0926cb7797077e49de76</span></li>
                      <li className="p-create_textlist">BUSD token: </li>
                      <li className="p-create_textlistnone"><span>
                        0xe9e7cea3dedca5984780bafc599bd69add087d56</span></li>

                    </ul>
                  </div>

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
