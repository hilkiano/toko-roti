import create from 'zustand';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import { Link, useNavigate } from 'react-router-dom';

export const useTokoRotiStore = create((set) => ({
  source: '',
  setSource: (newSource) => set({ source: newSource }),
  name: '',
  setName: (newName) => set({ name: newName }),
  email: '',
  setEmail: (newEmail) => set({ email: newEmail }),
  hp: '',
  setHp: (newHp) => set({ hp: newHp }),
  amount: '',
  setAmount: (newAmount) => set({ amount: newAmount }),
  desc: '',
  setDesc: (newDesc) => set({ desc: newDesc }),
  rows: [],
  setRows: (newRows) => set({ rows: newRows })
}));

export const TokoRotiForm = () => {
  const navigate = useNavigate();
  const { rows, setRows, source, setSource, name, setName, email, setEmail, hp, setHp, amount, setAmount, desc, setDesc } = useTokoRotiStore();
  const sources = [
    'Whatsapp',
    'Call',
    'Email'
  ];
  const addRow = () => {
    if (isDataValid) {
      const arr = [
        ...rows,
        {
          source,
          name,
          email,
          hp,
          amount,
          desc
        }
      ];
      setRows(arr);
      navigate('/');
    }
  }
  const isDataValid = !!source && !!name && !!hp && !!amount;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <FormControl sx={{ mt: '1em' }} fullWidth>
        <InputLabel id="select-source">Sumber Pesanan</InputLabel>
        <Select
          labelId='select-source'
          value={source}
          label="Sumber Pesanan"
          onChange={(e) => setSource(e.target.value)}
        >
          {sources.map((source) => {
            return (
              <MenuItem key={source} value={source}>{source}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <TextField
        id="name"
        label="Nama"
        variant="outlined"
        fullWidth
        required
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="hp"
        label="HP"
        variant="outlined"
        fullWidth
        required
        margin="normal"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
      />
      <TextField
        id="amount"
        label="Jumlah Roti"
        variant="outlined"
        fullWidth
        required
        margin="normal"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <TextField
        multiline
        rows={3}
        id="desc"
        label="Keterangan"
        variant="outlined"
        fullWidth
        margin="normal"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <Box
        sx={{ mt: '1em' }}
        component="span"
        display="flex"
        justifyContent="end"
        alignItems="center"
      >
        <Link to="/">
          <Button
            variant="outlined"
            sx={{ mr: '1em' }}
            onClick={() => { }}
            size="large"
          >
            Batalkan
          </Button>
        </Link>

        <Button
          variant="contained"
          onClick={addRow}
          size="large"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </form>
  )
}