import React from 'react';
import { Typography, Grid, Table, Box, CardContent } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import BlankCard from 'src/components/shared/BlankCard';



const EmbeddingsPage = () => {
  return (
    <PageContainer title="Embeddings" description="this is the embeddings page">

      <DashboardCard title="Embed el sitio...">
        <Typography fontWeight={400}>Para incorporar el ChatBot en cualquier lugar de tu sitio web, solo escribe esta linea de texto en tu codigo principal de html: </Typography>
        <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table>
                
                </Table>
            </Box>
      </DashboardCard>
    </PageContainer>
  );
};
export default EmbeddingsPage;
