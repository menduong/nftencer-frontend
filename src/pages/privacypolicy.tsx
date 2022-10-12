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
      <Layout title="Privacy Policy">
        <Formik
          initialValues={initialValue}
          validationSchema={createSchema}
          onSubmit={values => {
          }}
          validateOnMount
        >
          {({ }) => {
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
                          <h1>Coconut Privacy Policy</h1>
                        </div>
                      </Grid>
                      <div className="p-explore_contentPolicy">
                        <Text>
                          Coconut Limited d/b/a Coconut (“Coconut”, “we” or “us”) values the privacy of our users and is committed to protecting your personal data. We have prepared this Privacy Policy to describe to you our practices regarding the Personal Data (as defined in section 2 below) we collect from users of our website, located at https://www.coconut.global/ (the “Site”) and online services provided through the Site (collectively, the“Service”).
                        </Text>
                      </div>
                      <ol className="p-explore_counterList">
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}> Important Information and Who We Are
                              </Text>
                          </div>
                          <ol className="p-explore_counterList">
                            <li>
                              <Text modifiers={['inline', 'term', 'Nodecor']}>
                                Purpose of this Privacy Policy
                                </Text>
                              <Text modifiers={['textIndent', 'noBold']}>
                                This Privacy Policy aims to provide you with information on how we collect and process your Personal Data when you visit our Site , or through your use of the Service(s) including any data you may provide when you register for or use the Service, sign up for alerts or newsletters, create, list, sell or purchase a digital asset or contact us with a question or request for help. The Site and the Services are not intended for children and we do not knowingly collect data relating to children. It is important that you read this Privacy Policy together with any other privacy or fair processing policy we may provide on specific instances when we are collecting or processing Personal Data about you so that you are fully aware of how and why we are using your data. This Privacy Policy supplements other notices and privacy policy documents and is not intended to override them.
                                </Text>
                            </li>
                            <li>
                              <Text modifiers={['inline', 'term', 'Nodecor']}>
                                Data Controller
                                </Text>
                              <Text modifiers={['textIndent', 'noBold']}>
                                Coconut Limited is the controller and is responsible for the handling of your Personal Data.
                                </Text>
                            </li>
                            <li>
                              <Text modifiers={['inline', 'term', 'Nodecor']}>
                                Contact Details
                                </Text>
                              <Text modifiers={['textIndent', 'noBold']}>
                                If you have any questions or complaints about this Privacy Policy or our privacy practices or if you have a request to exercise your rights, please feel free to contact us at <a href="mailto:support@coconut.global" >support@coconut.global</a>
                              </Text>
                            </li>
                            <li>
                              <Text modifiers={['inline', 'term', 'Nodecor']}>
                                Complaints
                                </Text>
                              <Text modifiers={['textIndent', 'noBold']}>
                                You have the right to make a complaint about the way we process your Personal Data to a supervisory authority. You may contact your local data protection regulatory authority. We would, however, appreciate the chance to deal with your concerns before you approach a data protection regulatory authority, so please feel free to contact us in the first instance.
                                </Text>
                            </li>
                          </ol>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}> Types of Data We Collect
                              </Text>
                            <br />
                          </div>
                          <Text modifiers={['textIndent', 'inline', 'paddingTop']}>“Personal Data” </Text>
                          <Text modifiers={['noBold', 'inline', 'paddingTop']}>
                            means data that allows someone to identify or contact you, including, for example, your name, address, telephone number, e-mail address, as well as any other non-public information about you that is associated with or linked to any of the foregoing data. “Anonymous Data” means data, including aggregated and de-identified data, that is not associated with or linked to your Personal Data; Anonymous Data does not, by itself, permit the identification of individual persons.
                            </Text>
                          <Text modifiers={['noBold', 'paddingTop']}>
                            We may collect, use, store and transfer different kinds of Personal Data about you which we have grouped together as follows:
                            </Text>
                          <ol className="p-explore_counterList">
                            <li>
                              <Text modifiers={['inline']}>“Identity Data” </Text>
                              <Text modifiers={['inline', 'noBold']}>including first name, last name, and username or similar identifier, and date of birth.</Text>
                            </li>
                            <li>
                              <Text modifiers={['inline']}>“Contact Data”</Text>
                              <Text modifiers={['inline', 'noBold']}> including email address.</Text>
                            </li>
                            <li>
                              <Text modifiers={['inline']}>“Financial Data” </Text>
                              <Text modifiers={['inline', 'noBold']}>including BEP-20 wallet address.</Text>
                            </li>
                            <li>
                              <Text modifiers={['inline']}>“Transaction Data” </Text>
                              <Text modifiers={['inline', 'noBold']}>including details about payments to and from you and other details of any transactions you enter into using our Services.</Text>
                            </li>
                            <li>
                              <Text modifiers={['inline']}>“Technical Data” </Text>
                              <Text modifiers={['inline', 'noBold']}>including internet protocol (IP) address, your login data, browser type and version, date/time stamp, time zone setting and location, browser plug-in types and versions, operating system and platform, clickstream data, Internet service provider (“ISP”), referring/exit pages, and other technology on the devices you use to access this Site.</Text>
                            </li>
                            <li>
                              <Text modifiers={['inline']}>“Profile Data” </Text>
                              <Text modifiers={['inline', 'noBold']}>including your username or similar identifier, BEP-20 wallet address, product registration number, digital assets you list for sale or purchase or collect through the Site, past activity record, digital assets or user profiles that you bookmark or like, your interests, preferences, feedback, reviews and survey responses, comments you post in our community spaces, and information you decide to share via social networks.</Text>
                            </li>
                            <li>
                              <Text modifiers={['inline']}>“Usage Data” </Text>
                              <Text modifiers={['inline', 'noBold']}>including information about how you use our Site and Services.</Text>
                            </li>
                            <li>
                              <Text modifiers={['inline']}>“Marketing and Communications Data” </Text>
                              <Text modifiers={['inline', 'noBold']}>including your preferences in receiving marketing from us and our third parties and your communication preferences.</Text>
                            </li>
                          </ol>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            We also collect, use and share aggregated data such as statistical or demographic data for any purpose. Aggregated data could be derived from your Personal Data but is not considered personal data in law as this data will not directly or indirectly reveal your identity. For example, we may aggregate your Usage Data to calculate the percentage of users accessing a specific website feature. However, if we combine or connect aggregated data with your Personal Data so that it can directly or indirectly identify you, we treat the combined data as personal Data which will be used in accordance with this Privacy Policy.
                            </Text>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            Please note that we do not collect any special categories of Personal Data about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, genetic and biometric data). Nor do we collect any information about criminal convictions and offences.
                            </Text>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            Where we need to collect Personal Data by law, or under the terms of a contract we have with you, and you fail to provide that data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with the Service(s) ). In this case, we may have to cancel the provision of the Service to you or you may not be able to access the Service(s) and we will notify you if this is the case at that time through a pop-up notification when you attempt to use the Service.
                            </Text>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}> How Your Personal Data is Collected
                              </Text>
                            <br />
                          </div>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            We use different methods to collect Personal Data and Anonymous Data from and about you, as described below:
                            </Text>
                          <ol className="p-explore_counterList">
                            <li>
                              <Text modifiers={['inline', 'noBold']}>Information You provide Us</Text>
                              <ol className="p-explore_counterList">
                                <li>
                                  <Text modifiers={['inline', 'noBold']}>We may collect your Financial Data from you via the Site and/or the Service when you first subscribe to our Service(s) by connecting your wallet or making use of any of our Services.</Text>
                                </li>
                                <li>
                                  <Text modifiers={['inline', 'noBold']}>We may collect your Identity and Contact Data from you via the Site and/or the Service(s) when you subscribe to our publications or request marketing to be sent to you.</Text>
                                </li>
                                <li>
                                  <Text modifiers={['inline', 'noBold']}>If you provide us feedback or contact us via e-mail, we will collect your Identity and Contact Data, as well as any other content included in the e-mail, in order to send you a reply.</Text>
                                </li>
                                <li>
                                  <Text modifiers={['inline', 'noBold']}>We also collect other types of Personal Data that you provide to us voluntarily, such as your Technical and Profile Data, and other requested information if you contact us via e-mail regarding support for the Service(s).</Text>
                                </li>
                                <li>
                                  <Text modifiers={['inline', 'noBold']}>We may also collect Personal Data at other points in our Service that state that Personal Data is being collected.</Text>
                                </li>
                              </ol>
                            </li>
                            <li>
                              <Text modifiers={['inline', 'noBold']}>Information Collected via Technology</Text>
                              <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                                As you navigate through and interact with our Site and/or Service(s), we may use automatic data collection technologies to collect certain Technical Data about your equipment, browsing actions and patterns, including:
                                </Text>
                              <ol className="p-explore_counterList">
                                <li>
                                  <Text modifiers={['inline', 'noBold']}>Information Collected by Our Servers. To make our Service more useful to you, our servers (which may be hosted by a third-party service provider) collect Technical and Profile Data from you, including your browser type, operating system, IP address, domain name, BEP-20 address, wallet type, and/or a date/time stamp for your visit.</Text>
                                </li>
                                <li>
                                  <Text modifiers={['inline', 'noBold']}>2 Log Files. As is true of most websites, we gather certain Technical Data automatically and store it in log files. This information includes IP addresses, browser type, ISP, referring/exit pages, operating system, date/time stamp, and clickstream data. We use this information to analyze trends, administer the Service, track users’ movements around the Site, gather demographic information about our user base as a whole, and better tailor our Service(s) to our users’ needs. For example, some of the information may be collected so that when you visit the Site, it will recognize you and the information could then be used to serve advertisements and other information appropriate to your interests.</Text>
                                </li>
                                <li>
                                  <Text modifiers={['inline', 'noBold']}>Cookies. Like many online services, we use cookies to collect information. “Cookies” are files with a small amount of data, which may include an anonymous unique identifier, that a website sends to your browser while you are viewing the website and gets stored on your computer’s hard drive. It is widely used in order to make work and to improve their efficiency, as well as to provide website usage information to the website owner. We may use both session Cookies (which expire once you close your web browser) and persistent Cookies (which stay on your computer until you delete them) to provide you with a more personal and interactive experience on our Site. This type of information is collected to make the Site and Service(s) more useful to you and to tailor your experience with us to meet your special interests and needs.</Text>
                                </li>
                                <li>
                                  <Text modifiers={['inline', 'noBold']}>Pixel Tag. In addition, we use “Pixel Tags” (also referred to as clear Gifs, Web beacons, or Web bugs). Pixel Tags are tiny graphic images with a unique identifier, similar in function to Cookies, that are used to track online movements of Web users. In contrast to Cookies, which are stored on a user’s computer hard drive, Pixel Tags are embedded invisibly in Web pages. Pixel Tags also allow us to send e-mail messages in a format users can read, and they tell us whether e-mails have been opened to ensure that we are sending only messages that are of interest to our users. We may use this information to reduce or eliminate messages sent to a user. We do not tie the information gathered by Pixel Tags to our users’ Personal Data.</Text>
                                </li>
                                <li>
                                  <Text modifiers={['inline', 'noBold']}>How We Respond to Do Not Track Signals. We do not currently respond to “Do Not Track” signals or other mechanisms that might enable users to opt out of tracking on our Site.</Text>
                                </li>
                                <li>
                                  <Text modifiers={['inline', 'noBold']}>Analytics Services. In addition to the tracking technologies we have in place, other companies may set their own cookies or similar tools when you visit our Site or use our Service(s), and collect your Technical, Identity and Usage Data. This includes third party analytics services, including but not limited to Google Analytics (“Analytics Services”), that we engage to help analyze how users use the Service. We may receive reports based on these parties’ use of these tools on an individual or aggregate basis. We use the information we get from Analytics Services only to improve our Service(s). We may also transmit to the Analytics Services the information generated by the Cookies or other technologies that we place relating to your use of our Service(s) (the “Analytics Information”). The Analytics Services use the Analytics Information to compile reports on user activity. The Analytics Services may also transfer information to third parties where required to do so by law, or where such third parties process Analytics Information on their behalf. Each Analytics Services’ ability to use and share Analytics Information is restricted by such Analytics Services’ Terms of Use and Privacy Policy. By using our Service, you consent to the processing of data about you by Analytics Services in the manner and for the purposes set out above. For a full list of Analytics Services that we engage, please contact us through the means provided in section 1.3.</Text>
                                </li>

                              </ol>
                            </li>
                            <li>
                              <Text modifiers={['inline', 'noBold']}>Information Collected from Third Party Companies</Text>
                              <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                                We may receive Personal and/or Anonymous Data about you from companies that we partner with to provide our Services by way of a co-branded or private-labeled website or companies that offer their products and/or services on our Site. In particular, MetaMask and other cryptocurrency wallets provide us with your BEP-20 address and certain other information you choose to share with them. These third party companies may supply us with your Personal Data such as Identity, Financial, Transaction and Profile Data. We may add this to the information we have already collected from you via our Site and/or Service(s) in order to improve it.
                                </Text>
                            </li>
                          </ol>

                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Use of Your Personal Data
                              </Text>
                            <ol className="p-explore_counterList">
                              <li>
                                <Text modifiers={['inline', 'noBold']}>Legal Basis on which we Process your Personal Data</Text>
                                <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                                  We will only use your Personal Data when the law allows us to. Most commonly, we will use your
                                  Personal Data in the following circumstances:
                                </Text>
                                <Text modifiers={['noBold', 'textIndent']}>
                                  For the provision of the Service(s). Where it is necessary for our legitimate interests (or those of a
                                  third party) and your interests and fundamental rights do not override those interests. Where we
                                  need to comply with a legal obligation. Generally, we do not rely on consent as a legal basis for
                                  processing your Personal Data although we will get your consent before sending third party direct
                                  marketing communications to you via e-mail or text message. You have the right to withdraw
                                  consent to marketing at any time by contacting us.
                                </Text>
                              </li>
                              <li>
                                <Text modifiers={['inline', 'noBold']}>Purposes for which We will use your Personal Data</Text>
                                <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                                  In general, Personal Data you submit to us is used either to respond to requests that you make, or to
                                  aid us in serving you better. We use your Personal Data in the following ways:
                                </Text>
                                <ol className="p-explore_counterList">
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>to identify you as a user in our system;
                              </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>to provide improved administration of our Service(s);
                              </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>to provide the Service you request, including but not limited to facilitating your cryptocurrency
                                    transactions through MetaMask (https://metamask.io) or other cryptocurrency wallets;
                              </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>to improve the quality of user experience when you interact with our Service(s);
                              </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>to evaluate system security and stability;
                              </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>to protect you and other users from any conduct that violates the Terms of Service or to prevent
                                    abuse or harassment of any user;
                              </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>to display your username or similar identifier next to the digital assets you wish to sell on the Site;
                              </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>to respond to your inquiries related to employment opportunities or other requests;
                              </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>to send newsletters, surveys, offers, and other promotional materials related
                              </Text>
                                  </li>
                                  <li>
                                    <Text modifiers={['noBold', 'inline']}>to our Service(s) and for other marketing purposes of Coconut.
                              </Text>
                                  </li>
                                </ol>
                              </li>
                              <Text modifiers={['noBold', 'textIndent']}>
                                We may also use your Personal Data to contact you about our own and third parties’ goods and services
                                that may be of interest to you.
                                </Text>
                              <Text modifiers={['noBold', 'textIndent']}>
                                Below, we have set out a description of all the ways we plan to use your Personal Data matched
                                against the legal basis that we rely on to do so. We have also identified what our legitimate interests
                                are where appropriate.
                                </Text>
                              <Text modifiers={['noBold', 'textIndent']}>
                                Please note that we may process your Personal Data for more than one lawful ground depending on
                                the specific purpose for which we are using your data. Please contact us if you need details about the
                                specific legal ground we are relying on to process your Personal Data where more than one ground
                                has been set out in the table below.
                                </Text>
                              <table className="p-explore_table">
                                <tr>
                                  <th>Purpose/Activity</th>
                                  <th>Type of data</th>
                                  <th>Lawful basis for
                                  processing including
                              basis of legitimate interest</th>
                                </tr>
                                <tr>
                                  <td>To register an account for
                                  you as a new user when
                              you connect your wallet to our Service </td>
                                  <td>Financial</td>
                                  <td>Performance of a contract with you</td>
                                </tr>
                                <tr>
                                  <td>To process and deliver our Service to you including:<br /><p>1. Facilitating transactions and other interactions between creators, traders and collectors of digital assets<br />2. Fulfilling orders<br />3. Managing, processing,collecting and transferring payments, fees and charges, and royalties<br />4. Collecting and recovering money owed to us</p></td>
                                  <td>1. Financial<br />2. Transaction<br />3. Profile<br />4. Usage<br />5. Marketing and Communications

                              </td>
                                  <td>1. Performance of a contract with you<br />2. Necessary for our legitimate interests (for running our business and to recover debts due to us)</td>
                                </tr>
                                <tr>
                                  <td>1. To manage our relationship with you which will include:<br />2. Asking you to leave a review or take a survey<br />3. Keeping you informed of Coconut’s business and product development<br />4. Providing customer support<br />5. Responding to your requests and inquiries
                              </td>
                                  <td>
                                    1. Identity<br />
                                2. Contact<br />
                                3. Financial<br />
                                4. Technical<br />
                                5. Transaction<br />
                                6. Profile<br />
                                7. Usage<br />
                                8. Marketing and Communications<br />
                                  </td>
                                  <td>
                                    1. Performance of a contract with you<br />
                                2. Necessary to comply with a legal obligation<br />
                                3. Necessary for our legitimate interests (to keep our records updated and to study how users use our Services and how prospective users respond to our marketing campaign)<br />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    To administer and protect our business and this Site (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data)
                              </td>
                                  <td>
                                    1. Identity<br />
                                2. Financial<br />
                                3. Technical<br />
                                4. Transaction<br />
                                  </td>
                                  <td>
                                    1. Necessary for our legitimate interests (for running our business, provision of administration and IT services, network security, to prevent fraud and in the context of a business reorganisation or group restructuring exercise)<br />
                                2. Necessary to comply with a legal obligation<br />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you
                              </td>
                                  <td>
                                    1. Identity<br />
                                2. Contact<br />
                                3. Profile<br />
                                4. Usage<br />
                                5. Marketing and Communications<br />
                                6. Technical<br />
                                  </td>
                                  <td>
                                    Necessary for our legitimate interests (to study how users use our Services, to develop them, to grow our business and to inform our marketing strategy)</td>
                                </tr>
                                <tr>
                                  <td>
                                    To use data analytics to improve our Site, Service, marketing, customer relationships and experiences
                              </td>
                                  <td>
                                    1. Technical<br />
                                2. Usage<br />
                                  </td>
                                  <td>
                                    Necessary for our legitimate interests (to define types of users for our Services, to keep our Site updated and relevant, to develop our business and to inform our marketing strategy)</td>
                                </tr>
                                <tr>
                                  <td>
                                    To make suggestions and recommendations to you about goods or services that may be of interest to you
                              </td>
                                  <td>
                                    1. Identity<br />
                                2. Contact<br />
                                3. Technical<br />
                                4. Usage<br />
                                5. Profile<br />
                                6. Marketing and Communications<br />
                                  </td>
                                  <td>
                                    Necessary for our legitimate interests (to develop our Services and grow our business)</td>
                                </tr>
                                <tr>
                                  <td>
                                    Relevant for individuals seeking employment at Coconut
                              </td>
                                  <td>
                                    1. Identity<br />
                                2. Contact<br />
                                  </td>
                                  <td>
                                    1.Performance of a contract with you<br />
                                2. Necessary for our legitimate interests (to develop and grow our business)<br /></td>
                                </tr>
                              </table>
                              <Text >Marketing</Text>
                              <Text modifiers={['noBold', 'textIndent']}>
                                We strive to provide you with choices regarding certain Personal Data uses, particularly around
                                marketing and advertising. We may use your Data including: Identity, Contact, Technical,
                                Transaction, Usage and Profile to form a view on what we think you may want or need, or what may be
                                of interest to you. This is how we decide which products, services and offers may be relevant for you.
                                </Text>
                              <Text modifiers={['noBold', 'textIndent']}>
                                You will receive marketing communications from us if you have requested information from us.
                                </Text>
                              <Text >Change of Purpose</Text>
                              <Text modifiers={['noBold', 'textIndent']}>
                                We will only use your Personal Data for the purposes for which we collected it, unless we reasonably
                                consider that we need to use it for another reason and that reason is compatible with the original
                                purpose. If you wish to get an explanation as to how the processing for the new purpose is compatible
                                with the original purpose, please contact us through the contact details indicated in section 1.3.
                                </Text>
                              <Text modifiers={['noBold', 'textIndent']}>
                                If we need to use your Personal Data for an unrelated purpose, we will notify you and we will explain
                                the legal basis which allows us to do so.
                                </Text>
                              <Text modifiers={['noBold', 'textIndent']}>
                                Please note that we may process your Personal Data without your knowledge or consent, in
                                compliance with the above rules, where this is required or permitted by law.
                                </Text>
                              <Text >Definitions</Text>
                              <Text modifiers={['noBold', 'textIndent']}>
                                For the purpose of this section:
                                </Text>
                              <Text size="24" modifiers={['textIndent', 'inline']}>“Legitimate Interest”</Text>
                              <Text modifiers={['noBold', 'textIndent', 'inline']}>
                                means the interest of our business in conducting and managing our business
                                to enable us to give you the best service(s)/product(s), as well as the best and most secure experience.
                                We make sure we consider and balance any potential impact on you (both positive and negative)
                                and your rights before we process your Personal Data for our legitimate interests. We do not use your
                                Personal Data for activities where our interests are overridden by the impact on you (unless we have
                                your consent or are otherwise required or permitted to by law). You can obtain further information
                                about how we assess our legitimate interests against any potential impact on you in respect of specific
                            activities by contacting us.<br /><br />
                              </Text>
                              <Text size="24" modifiers={['textIndent', 'inline']}>“Performance of Contract”</Text>
                              <Text modifiers={['noBold', 'textIndent', 'inline']}>
                                means processing your data where it is necessary for the
                                performance of a contract to which you are a party or to take steps at your request before entering
                            into such a contract.<br /><br />
                              </Text>
                              <Text size="24" modifiers={['textIndent', 'inline']}>“Comply with a legal obligation”</Text>
                              <Text modifiers={['noBold', 'textIndent', 'inline']}>
                                means processing your Personal Data where it is necessary
                            for compliance with a legal obligation that we are subject to.<br /><br />
                              </Text>
                              <li>
                                <Text modifiers={['inline', 'noBold']}>Anonymous Data</Text>
                                <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                                  We may create Anonymous Data records from Personal Data by excluding information (such as your
                                  name) that makes the data personally identifiable to you. We use this Anonymous Data to analyze
                                  request and usage patterns so that we may enhance the content of our Service(s) and improve Service
                                  navigation. We reserve the right to use Anonymous Data for any purpose and to disclose Anonymous
                                  Data to third parties without restriction.
                                </Text>
                              </li>
                            </ol>
                          </div>

                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}> Disclosure of Your Personal Data
                              </Text>
                            <br />
                          </div>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            We may share and disclose your Personal Data as described below and as described elsewhere in
                            this Privacy Policy. We require all third parties to respect the security of your Personal Data and to
                            treat it in accordance with the law. We do not allow our third party service providers to use your
                            Personal Data for their own purposes and only permit them to process your Personal Data for
                            specified purposes and in accordance with our instructions.
                            </Text>
                          <ol className="p-explore_counterList">
                            <li>
                              <Text modifiers={['inline', 'noBold']}>Third Party Service Providers
                            </Text>
                              <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                                We may share your Personal Data with third party service providers who we work with to provide
                                you with our Service(s), as well as to conduct quality assurance testing, to facilitate the creation of
                                accounts and/or to provide technical support.
                                </Text>
                            </li>
                            <li>
                              <Text modifiers={['inline', 'noBold']}>Affiliates
                            </Text>
                              <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                                We may share some or all of your Personal Data with our parent company, subsidiaries, joint ventures,
                                or other companies under a common control (“Affiliates”), in which case we will require
                                our Affiliates to honor this Privacy Policy.
                                </Text>
                            </li>
                            <li>
                              <Text modifiers={['inline', 'noBold']}>Corporate Restructuring
                            </Text>
                              <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                                We may share some or all of your Personal Data in connection with or during the negotiation of any
                                merger, financing, acquisition or dissolution transaction or proceeding involving the sale, transfer,
                                divestiture, or disclosure of all or a portion of our business or assets. In the event of an insolvency,
                                bankruptcy, or receivership, Personal Data may also be transferred as a business asset. If another
                                company acquires our company, business, or assets, that company will possess the Personal Data
                                collected by us and will assume the rights and obligations regarding your Personal Data as described
                                in this Privacy Policy.
                                </Text>
                            </li>
                            <li>
                              <Text modifiers={['inline', 'noBold']}>As Legally Required
                            </Text>
                              <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                                Regardless of any choices you make regarding your Personal Data (as described in section 8 below),
                                Coconut may disclose Personal Data if it believes in good faith that such disclosure is necessary (a)
                                in connection with any legal investigation; (b) to comply with relevant laws or to respond to
                                subpoenas or warrants served on Coconut; (c) to protect or defend the rights or property of
                                Coconut or users of the Service(s); and/or (d) to investigate or assist in preventing any violation or
                                potential violation of the law, this Privacy Policy, or our Terms of Service.
                                </Text>
                            </li>
                            <li>
                              <Text modifiers={['inline', 'noBold']}>Other Disclosures
                            </Text>
                              <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                                We may also disclose your Personal Data to fulfill the purpose for which you provide it, for any other
                                purpose disclosed by us when you provide it, or with your consent. We do not sell your Personal
                                Data.
                                </Text>
                            </li>
                          </ol>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Third Party Websites
                              </Text>
                            <br />
                          </div>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            Our Site and Services may contain links to third party websites, plug-ins and applications. When you
                            click on a link to any other website or location or enable those connections, you will leave our Site and
                            Services and be redirected to another site where another entity may collect Personal Data or
                            Anonymous Data from you or share your data. You may also find marketplaces powered by the Service
                            on other websites. We have no control over, do not review, and cannot be responsible for, these third
                            party websites, their content or their privacy policy. Please be aware that the terms of this Privacy
                            Policy do not apply to these third party websites or content, or to any collection of your Personal Data
                            after you click on links to such third party websites. We encourage you to read the privacy policies of
                            every website you visit. The links to third party websites or locations are for your convenience and do
                            not signify our endorsement of such third parties or their products, content or websites.
                            </Text>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Third-Party Wallet Extensions
                              </Text>
                            <br />
                          </div>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            For conducting cryptocurrency transactions we use third-party electronic wallet extensions such as
                            (but not limited to) MetaMask. Your interactions with MetaMask and/or any third-party electronic
                            wallet extensions are governed by the applicable privacy policies.
                            </Text>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Your Choices Regarding Information
                              </Text>
                            <br />
                          </div>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            As a user of our Site and Service, you have several choices regarding our use and the disclosure of
                            your personal information:
                            </Text>
                          <ol className="p-explore_counterList">
                            <li>
                              <Text modifiers={['textIndent', 'inline']}>Email Communications.</Text>
                              <Text modifiers={['noBold', 'textIndent', 'inline']}>
                                We may periodically send you free, opt-in newsletters and e-mails that
                                directly promote the use of our Services. When you receive newsletters or promotional
                                communications from us, you may indicate a preference to stop receiving further
                                communications from us at any time and you will have the opportunity to “opt-out” by following
                                the unsubscribe instructions provided in the e-mail you receive or by contacting us directly (our
                                contact information is given in section 1.3 above). Where you opt out of receiving these
                                marketing messages, this will not apply to Personal Data provided to us as a result of your use
                                of our Service, your participation in a transaction on our Site or other transactions or
                                experience.
                              </Text>
                            </li>
                            <li>
                              <Text modifiers={['textIndent', 'inline']}>Cookies.</Text>
                              <Text modifiers={['noBold', 'textIndent', 'inline']}>
                                If you decide at any time that you no longer wish to accept Cookies from our Services
                                for any of the purposes described above, then you can instruct your browser, by changing its
                                settings, to stop accepting all or some of the Cookies or to prompt you before accepting a
                                Cookie from the websites you visit. Please consult your browser’s technical information. If you
                                disable or refuse Cookies, however, you may not be able to use all or portions of our Services or
                                the Site may become inaccessible to you and/or may not function properly. If you have any questions
                                about how to disable or modify Cookies, please let us know by contacting us directly at the
                                contact information we have provided in section 1.3 above.
                              </Text>
                            </li>
                            <li>
                              <Text modifiers={['textIndent', 'inline']}>Third-Party Marketing.</Text>
                              <Text modifiers={['noBold', 'textIndent', 'inline']}>
                                We will get your express opt-in consent before we share your Personal
                                Data with any third party for marketing purposes.
                              </Text>
                            </li>
                          </ol>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}> Your Legal Rights
                              </Text>
                            <br />
                          </div>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            Under certain circumstances, you have rights under data protection laws in relation to your Personal
                            Data. Depending on your location and subject to applicable law, you may have the following rights with
                            regard to the Personal Data we collect about you:
                            </Text>
                          <ol className="p-explore_counterList">
                            <li>
                              <Text modifiers={['noBold', 'inline']}>The right to request access to your Personal Data (commonly known as a “data subject access
                              request”). This enables you to receive a copy of the Personal Data we hold about you and to
                              check that we are lawfully processing it.
                              </Text>
                            </li>
                            <li>
                              <Text modifiers={['noBold', 'inline']}>The right to request that Coconut rectifies or updates Personal Data that we hold about
                              you that is inaccurate, incomplete or outdated. However, we may need to verify the accuracy
                              of the new data you provide to us.
                              </Text>
                            </li>
                            <li>
                              <Text modifiers={['noBold', 'inline']}>The right to request that Coconut erase your Personal Data in certain circumstances
                              provided by law. This enables you to ask us to delete or remove Personal Data where there is
                              no good reason for us continuing to process it. You also have the right to ask us to delete or
                              remove your Personal Data where you have successfully exercised your right to object to
                              processing (see below), where we may have processed your information unlawfully or where
                              we are required to erase your Personal Data to comply with local law. Note, however, that we
                              may not always be able to comply with your request of erasure for specific legal reasons
                              which will be notified to you, if applicable, at the time of your request.
                              </Text>
                            </li>
                            <li>
                              <Text modifiers={['noBold', 'inline']}>The right to object to Coconut processing your Personal Data where we are relying on a
                              legitimate interest (or those of a third party) and there is something about your particular
                              situation which makes you want to object to processing on this ground as you feel it impacts
                              on your fundamental rights and freedoms. You also have the right to object where we are
                              processing your Personal Data for direct marketing purposes. In some cases, we may
                              demonstrate that we have compelling legitimate grounds to process your information which
                              override your rights and freedoms.
                              </Text>
                            </li>
                            <li>
                              <Text modifiers={['noBold', 'inline']}>The right to request that Coconut restrict the usage or processing of your Personal Data in
                              certain circumstances. This enables you to ask us to suspend the processing of your Personal
                              Data in scenarios such as: if you want us to establish the data’s accuracy; where our use of the
                              data is unlawful but you do not want us to erase it; where you need us to hold the data even
                              if we no longer require it as you need it to establish, exercise or defend legal claims; or you
                              have objected to our use of your data but we need to verify whether we have overriding
                              legitimate grounds to use it.
                              </Text>
                            </li>
                            <li>
                              <Text modifiers={['noBold', 'inline']}>The right to request that Coconut export, if technically and legally feasible, your Personal
                              Data that we hold in service to another company or to you. We will provide to you, or a third
                              party you have chosen, your Personal Data in a structured, commonly used, machine-readable
                              format. Note that this right only applies to automated information which you initially
                              provided consent for us to use or where we used the information to perform a contract with
                              you.
                              </Text>
                            </li>
                            <li>
                              <Text modifiers={['noBold', 'inline']}>The right to withdraw consent at any time where we are relying on consent to process your
                              Personal Data. However, this will not affect the lawfulness of any processing carried out
                              before you withdraw your consent. If you withdraw your consent, we may not be able to provide
                              certain products or services to you. We will advise you if this is the case at the time you
                              withdraw your consent.
                              </Text>
                            </li>

                          </ol>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            If you wish to exercise any of the rights set out above, you may contact Coconut as described in
                            section 1.3 above. We take each request seriously, and will comply with your request to the extent
                            required by applicable law. We will not be able to respond to a request if we no longer hold your
                            Personal Data.
                            </Text>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            Please note that the Service employs smart contracts that collect information that is then stored on a
                            blockchain that we do not control. If you use the Service, you are consenting to allow your information
                            to be cryptographically transmitted and stored on that blockchain, and any deletion or modification of
                            that information (to the extent possible on a blockchain) is governed by the terms of the relevant
                            smart contract.
                            </Text>
                          <Text modifiers={['inline']}>No Fee Usually Required</Text>
                          <Text modifiers={['noBold', 'textIndent']}>
                            You will not have to pay a fee to access your Personal Data (or to exercise any of the other rights).
                            However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive.
                            Alternatively, we could refuse to comply with your request in these circumstances.
                                </Text>
                          <Text modifiers={['inline']}>What We May Need from You</Text>
                          <Text modifiers={['noBold', 'textIndent']}>
                            For your protection, we may need to verify your identity before responding to your request to ensure
                            your right to access your Personal Data (or to exercise any of your other rights). This is a security
                            measure to ensure that Personal Data is not disclosed to any person who has no right to receive it. This
                            may include verifying that the e-mail address from which you sent the request matches your e-mail
                            address that we have on file. We may also contact you to ask you for further information in relation to
                            your request to speed up our response.
                                </Text>
                          <Text modifiers={['inline']}>Time Limit to Respond</Text>
                          <Text modifiers={['noBold', 'textIndent']}>
                            We try to respond to all legitimate requests within one month. Occasionally it could take us longer
                            than a month if your request is particularly complex or you have made a number of requests. In this
                            case, we will notify you and keep you updated.
                                </Text>

                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}> Data Retention
                              </Text>
                            <br />
                          </div>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            We may retain your Personal Data for as long as you continue to use the Service, have an account with
                            us, or for as long as is reasonably necessary to fulfill the purposes we collected it for as outlined in this
                            Privacy Policy. You can ask us to close your account by contacting us as described in section 1.3 above,
                            and we will delete your Personal Data on request where the condition(s) is met (please see section 9
                            above for further information). We may, however, retain Personal Data for an additional period as is
                            permitted or required under applicable laws, for legal, tax, regulatory, accounting or reporting
                            reasons, or for legitimate and lawful business purposes. We may also retain your Personal Data for a
                            longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in
                            respect to our relationship with you.
                            </Text>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            To determine the appropriate retention period for Personal Data, we consider the amount, nature and
                            sensitivity of the Personal Data, the potential risk of harm from unauthorised use or disclosure of your
                            Personal Data, the purposes for which we process your Personal Data and whether we can achieve
                            those purposes through other means, and the applicable legal, regulatory, tax, accounting or other
                            requirements.
                            </Text>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            In some circumstances we will anonymize your Personal Data (so that it can no longer be associated
                            with you) for research or statistical purposes, in which case we may use this information indefinitely
                            without further notice to you.
                            </Text>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}> Data Protection
                              </Text>
                            <br />
                          </div>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            We care about the security of your information and use physical, administrative, and technological
                            safeguards to preserve the integrity and security of all information collected through our Site.
                            </Text>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            We have put in place appropriate security measures to prevent your Personal Data from being
                            accidentally lost, used or accessed in an unauthorised way, altered or disclosed. However, no security
                            system is impenetrable and we cannot guarantee the security of our systems 100%. In the event that
                            any information under our control is compromised as a result of a breach of security, we will take steps
                            to investigate the situation and, where appropriate, notify those individuals whose information may
                            have been compromised and take other steps in accordance with any applicable laws and regulations.
                            </Text>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            In addition, we also limit access to your Personal Data to those employees and third party partners who
                            have a business need to know principle. They will only process your Personal Data on our instructions
                            and they are subject to a duty of confidentiality.
                            </Text>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            We have put in place procedures to deal with any suspected Personal Data breach and will notify you
                            and any applicable regulator of a breach where we are legally required to do so.
                            </Text>

                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Age Restriction
                              </Text>
                            <br />
                          </div>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            The Service(s) we provide is intended for those aged 18 years or older. We do not intentionally gather
                            Personal Data from visitors under the age of 18. If a person under 18 submits Personal Data to
                            Coconut and we learn that the Personal Data is the information of a child under 18, we will attempt
                            to delete the information as soon as possible. If you believe that a person under 18 may be using our
                            Service(s), or we might have any Personal Data from a person under 18, please contact us at our
                            contact details indicated in section 1.3.
                            </Text>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Note to Users Outside of Vietnam
                              </Text>
                            <br />
                          </div>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            Coconut operates a global service with our company based in Vietnam. By using our Site and
                            Service(s), data collected on our non-Vietnam users may be transferred out of the country in which it
                            was collected and processed at our head office in Vietnam as well as at partners of Coconut for
                            purposes described in our Privacy Policy, including for the processing of cryptocurrency transactions.
                            </Text>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            Vietnam, European Economic Area (“EEA”) Member States, and other countries all have different laws.
                            When your information is moved from your home country to another country, the laws and rules that
                            protect your personal information in the country to which your information is transferred may be
                            different from those in the country in which you live. For example, the circumstances in which law
                            enforcement can access personal information may vary from country to country. In particular, if your
                            information is in Vietnam, it may be accessed by government authorities in accordance with Vietnam law.
                            </Text>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            To the extent that Coconut is deemed to transfer personal information outside of the EEA, we rely on
                            the following legal basis to transfer your information:
                            </Text>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            Necessary for the performance of the Contract between Coconut and its Users
                            </Text>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            Coconut provides a service chosen voluntarily for use by you, the user; you can choose whether or not
                            to use our Service(s). As we operate in countries worldwide and use first and third party technical
                            infrastructure in countries and regions including but not limited to Vietnam and the European Union to
                            deliver our Service to you, we need to transfer your personal information to Vietnam and to other
                            jurisdictions as necessary to provide our Service(s) to you. Simply put, we cannot provide you with our
                            Service(s) and perform our contract with you without moving your personal information around the
                            world. For further information regarding the jurisdictions in which our first and third party technical
                            infrastructure are located, please contact us through our contact details indicated in section 1.3.
                            </Text>
                        </li>
                        <li>
                          <div className="p-explore_counterListLi">
                            <Text modifiers={['inline', 'term']}>Changes to This Privacy Policy
                              </Text>
                            <br />
                          </div>
                          <Text modifiers={['noBold', 'paddingTop', 'textIndent']}>
                            This Privacy Policy may be updated from time to time for any reason. If we believe that the changes are
                            material, we will also let you know through posting about the changes on our Site. The date the Privacy
                            Policy was last revised is identified at the beginning of this Privacy Policy. It is important that the
                            Personal Data we hold about you is accurate and current. You are responsible for ensuring we have an
                            up-to-date active and deliverable email address for you, and for keeping us informed if your Personal
                            Data changes during your relationship with us. We also encourage you to periodically visit our Site and
                            this Privacy Policy to check for any changes.
                            </Text>
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
