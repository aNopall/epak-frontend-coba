import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Img = styled('img')({
  margin: '0 auto 10px 0',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ProfilePage() {
  return (
    <>
    <Typography sx={{ fontSize: 28 }} className="font-bold ml-[50px] mt-40 mb-[-20px]">
      Identitas Pribadi
    </Typography>
    <Paper
      sx={{
        p: 5,
        margin: '50px 50px 0px 50px',
        boxShadow: 'none',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container>
        <Grid item xs={12} sm container direction="column" className="justify-center">
          <Img alt="complex" src="assets/images/logos/red-bg.svg"/>
        <Button component="span" className="w-[137px] mr-auto mt-0 bg-[#36A1EF] hover:bg-[#318CCE]">
          Unggah Foto
        </Button>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Nama
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              Asep
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Tanggal Lahir
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              1999-01-13
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Tempat Lahir
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              Jakarta
            </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Agama
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              Islam
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Jenis Kelamin
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              Laki-laki
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Gol. Darah
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              O
            </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Email
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              admin@admin.com
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Nomor Telepon
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              08xxxxxxxxxx
            </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>

    <Typography sx={{ fontSize: 28 }} className="font-bold ml-[50px] mt-40 mb-[-20px]">
      Identitas Guru
    </Typography>
    <Paper
      sx={{
        p: 5,
        margin: '50px 50px 0px 50px',
        boxShadow: 'none',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              NIP
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              196302121993012001
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              NUPTK
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              4534741642300043
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              NRG
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              120271278156
            </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              No. KAPREG
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              H.067626
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Jabatan
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              Guru Madya
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              TMT Jabatan
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              2013-08-26
            </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Pangkat
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              IV/b
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              TMT Pangkat
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              2017-10-01
            </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>

    <Typography sx={{ fontSize: 28 }} className="font-bold ml-[50px] mt-40 mb-[-20px]">
      Informasi Tugas Guru
    </Typography>
    <Paper
      sx={{
        p: 5,
        margin: '50px 50px 0px 50px',
        boxShadow: 'none',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Tugas
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              Mengajar Kelas 1
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Jenjang
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              Dikdas
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Sekolah
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              SD 1 Jakarta
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Mulai Bertugas
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              01 Desember 2022
            </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid item xs>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Alamat Unit Kerja
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              Jl. H Arsyad Jakarta Pusat No.4 Rt.06/07
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Kecamatan
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              Kedungtuban
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Kabupaten
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              Blora
            </Typography>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Provinsi
            </Typography>
            <Typography sx={{ fontSize: 25 }} color="text.primary" className="font-600 mb-20">
              Jawa Tengah
            </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </>
  );
}