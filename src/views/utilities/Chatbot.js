import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

const Shadow = () => {
  return (
    <PageContainer title="AskITbot" description="This is the ChatBot tab">

      <DashboardCard title="AskITbot">
      <iframe src="https://www.chatbase.co/chatbot-iframe/vBG5q6923BnRXxW1299YH"  title="Inline Frame Example" frameBorder={0}
    width="100%"
    height="650"></iframe>
      </DashboardCard>
    </PageContainer>
  );
};

export default Shadow;
