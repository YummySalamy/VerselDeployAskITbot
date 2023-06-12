import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const Configuration = () => {
  return (
    <PageContainer title="configuracion" description="this is the config page">

      <DashboardCard title="Configuración">
        <Typography>Pestaña de configuración</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default Configuration;
