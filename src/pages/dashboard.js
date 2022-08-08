import React, {useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import { useTokoRotiStore } from '../store/tokoRotiStore';

const Dashboard = () => {
  const rows = useTokoRotiStore.getState().rows;

  useEffect(() => {
    useTokoRotiStore.setState((state) => {
      state.setSource('')
      state.setName('')
      state.setEmail('')
      state.setHp('')
      state.setAmount('')
      state.setDesc('')
    })
  }, []);

  return (
    <>
      <Grid sx={{ mt: '3em' }} container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item md={4}>
          <Card sx={{ m: '0 auto', width: 200 }}>
            <CardContent>
              <Typography align='center' variant="h5" gutterBottom>
                Whatsapp
              </Typography>
              <Typography align='center' sx={{ fontSize: 18 }} color="text.secondary">
                {rows.filter(row => row.source === "Whatsapp").length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ m: '0 auto', width: 200 }}>
            <CardContent>
              <Typography align='center' variant="h5" gutterBottom>
                Call
              </Typography>
              <Typography align='center' sx={{ fontSize: 18 }} color="text.secondary">
                {rows.filter(row => row.source === "Call").length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card sx={{ m: '0 auto', width: 200 }}>
            <CardContent>
              <Typography align='center' variant="h5" gutterBottom>
                Email
              </Typography>
              <Typography align='center' sx={{ fontSize: 18 }} color="text.secondary">
                {rows.filter(row => row.source === "Email").length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid sx={{ mt: '5em', pl: '2em', pr: '2em' }} container>
        <Grid item md={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nama</TableCell>
                  <TableCell>Sumber Pesanan</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>HP</TableCell>
                  <TableCell align="right">Jumlah Roti</TableCell>
                  <TableCell>Keterangan</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.source}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.hp}</TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                    <TableCell>{row.desc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item md={12}>
          <Box
            sx={{ mt: '4em' }}
            component="span"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link to="/form">
              <Button
                variant="contained"
                onClick={() => { }}
                size="large"
              >
                Isi Form
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;