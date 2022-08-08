import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { TokoRotiForm } from '../store/tokoRotiStore';

const Form = () => {

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Card
            sx={{ minWidth: "360px", maxWidth: "400px" }}
          >
            <CardContent>
              <TokoRotiForm />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Form;