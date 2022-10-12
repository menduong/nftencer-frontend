import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from 'components/templates/layout';
import { Section } from 'components/organisms/section';
import { Form, Formik } from 'formik';
import { createSchema, initialValue } from 'components/pages/create/form';
import { Heading } from 'components/molecules/heading';
import { Fieldrow } from 'components/molecules/fieldrow';
import { TextFieldFormik } from 'components/atoms/textfield';
import { Textarea } from 'components/atoms/textarea';
import { Button } from 'components/atoms/button';
import { navigate } from 'gatsby-link';
import { Modal } from 'components/organisms/modal';
import { ModalHeader } from 'components/molecules/modalHeader';
import { StepItem } from 'components/molecules/stepItem';
import { Steps } from 'components/organisms/steps';
import { useWallet } from 'use-wallet';
import { Text } from 'components/atoms/text';
import { useDispatch, useSelector } from 'react-redux';
import { approveNFT, createNFT, createTokenURI, getCreateStore, resetStore, sellNFT } from 'store/createNFT';
import { commonStart } from 'store/common';
import { ButtonContainer } from 'components/molecules/buttonContainer';

export const Profile: React.FC = () => {
  const wallet = useWallet();
  const dispatch = useDispatch();
  const { currentStep, tokenURI } = useSelector(getCreateStore);
  const CreateSteps = [
    {
      description: 'Call contract method',
      title: 'Upload files and Mint tocken',
      handleClick: () => {
        dispatch(tokenURI ? createNFT.started({}) : createTokenURI.started({}));
      },
    },
    {
      description: 'Approve perfoming transactions with your wallet',
      title: 'Approve',
      handleClick: () => {
        dispatch(approveNFT.started({}));
      },
    },
    {
      description: 'Sign sell order using your wallet',
      title: 'Sign sell order',
      handleClick: () => {
        dispatch(sellNFT.started({}));
      },
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    currentStep.number === CreateSteps.length &&
      setTimeout(() => {
        setModalOpen(false);
      }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep.number]);

  useEffect(() => {
    if (!modalOpen) {
      dispatch(resetStore());
      currentStep.number === CreateSteps.length && navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, modalOpen]);

  return (
    <div className="p-create">
      <Layout title="Profile">
        <Section className="p-create_main">
          <Heading type="h4">Edit profile</Heading>
          <Text>You can set prefered user name, create your brandedprofile URL and manage other person settings</Text>
          <Formik
            initialValues={initialValue}
            validationSchema={createSchema}
            onSubmit={values => {
              dispatch(commonStart({ nextAction: createTokenURI.started({ data: values }) }));
              setModalOpen(!!wallet.account);
            }}
            validateOnMount
          >
            {({ values }) => {
              const previewSrc = URL && values.file ? URL.createObjectURL(values.file) : '';
              const previewType = values.file && values.file.type;
              return (
                <Form className="p-create_form">
                  <div className="p-create_inputs">
                    <Fieldrow fieldName="User Name" name="name">
                      <TextFieldFormik name="name" placeholder="Enter your user name" />
                    </Fieldrow>
                    <Fieldrow fieldName="BIO" >
                      <Textarea name="description" placeholder="Tell about yoursefl in few words" maxLength={500} />
                    </Fieldrow>
                    
                    <ButtonContainer>
                      <Button type="submit" modifiers="bid" anchor={{ href: '/' }}>
                        Update profile
                      </Button>
                    </ButtonContainer>
                  </div>
                  <div className="p-create_review">
                    <div className="p-create_reviewbox">
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </Section>
        <Modal isOpen={modalOpen} handleClose={() => setModalOpen(false)}>
          <ModalHeader title="FOLLOW STEPS" handleClose={() => setModalOpen(false)} />
          <Steps>
            {CreateSteps.map((step, idx) => {
              const iconName =
                currentStep.number > idx
                  ? 'tick-success'
                  : currentStep.number === idx
                  ? currentStep.status
                  : 'tick-step';
              return <StepItem key={idx} iconName={iconName} {...step} handleClick={step.handleClick} />;
            })}
          </Steps>
          <Text> After processing , popup is automatically closed. Wait for a moment. </Text>
        </Modal>
      </Layout>
    </div>
  );
};

export default hot(Profile);
