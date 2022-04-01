import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function ProfilePage() {
return (
    <>
    <Typography sx={{ fontSize: 28 }} className="font-bold ml-[50px] mt-40 mb-[-20px]">
    Tentang Aplikasi
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
                    <Typography sx={{ 
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        color: '#212121',
                    }}
                    >
                        Salah satu tugas pada Subdirektorat Penilaian Kinerja dan Pengembangan Karier Direktorat Pembinaan Guru Pendidikan Dasar adalah melaksanakan penyusunan bahan perumusan, koordinasi, dan pelaksanaan kebijakan, norma, standar, prosedur, kriteria, bimbingan teknis dan supervisi, penilaian kinerja, dan pengembangan karier guru pada pendidikan dasar. Dalam menjalankan tugas ini terdapat permasalahan yaitu: Belum optimalnya pelaksanaan NSPK terkait pengembangan karier guru, Menumpuknya berkas Daftar Usulan Penilaian Angka Kredit Guru Golongan ruang IV/b ke atas; Belum optimalnya proses penilaian angka kredit bagi Guru Golongan IV/b ke atas; Lamanya proses penilaian sehingga banyak guru terlambat naik pangkat; Guru kesulitan memenuhi persyaratan pengusulan kenaikan pangkat; dan Belum optimalnya pengelolaan informasi tentang status penilaian dan penetapan angka kredit bagi Guru Golongan IV/b ke atas.
                    </Typography>
                    <Typography sx={{ 
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        color: '#212121',
                        margin: '20px 0 0 0'
                    }}
                    >
                        Berdasarkan permasalahan tersebut di atas, maka perlu adanya suatu inovasi untuk mengatasinya dengan cara membuat suatu program proyek perubahan yang dapat menginformasikan status dan hasil penilaian dan penetapan angka kredit guru, yaitu dengan cara membuat suatu laman/web info secara dalam jaringan (daring/online) yang disebut dengan e-PAK Guru sehingga dapat membantu para guru untuk mendapatkan informasi secara cepat dan akurat.
                    </Typography>
                    <Typography sx={{ 
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        color: '#212121',
                        margin: '20px 0 0 0'
                    }}
                    >
                        Proses pembuatan laman/web e-PAK Guru sebagai berikut.
                    </Typography>
                    <Typography sx={{ 
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        color: '#212121',
                        margin: '20px 0 0 0'
                    }}
                    >
                        <li>Persiapan Sebelum pelaksanaan proyek perubahan, penulis berkoordinasi dengan mentor serta membentuk tim efetktif yang akan membantu penulis melaksanakan program proyek perubahan. Hasil dari tahapan persiapan ini adalah SK Tim Proyek Perubahan dan jadwal rencana kegiatan projek perubahan.</li>
                        <li>Pelaksanaan Pelaksanaan proyek perubahan ini erdiri dari pembuatan e-PAK Guru, penyusunan buku panduan (Manual Book), uji keterbacaan buku panduan (Manual Book), Perbaikan buku panduan (Manual Book) e-PAK Guru, Uji coba laman/web e-PAK Guru, Perbaikan e-PAK Guru, penyusunan instrumen evaluasi.</li>
                        <li>Pelaporan Setelah melaksanakan program proyek perubahan dalam mengembangkan laman/web e-PAK Guru, penulis menyusun laporan pelaksanaan proyek perubahan jangka pendek.</li>
                        <li>Produk dari proyek perubahan ini adalah laman/web e-PAK Guru yang dapat diakses melalui <a link href="#"> http://118.98.166.190:8081 </a> atau <a link href="#"> http://bit.ly/epakguru </a>, buku panduan (Manual Book), dan video penggunaan lama/web e-PAK Guru. Dalam laman/web e-PAK Guru ini, guru dapat mengetahui status berkas DUPAK, surat hasil penilaian angka kredit (jika sudah di verifikasi oleh Sekretariat), serta kekurangan angka kredit guru untuk apelan berikutnya</li>
                    </Typography>
                    <Typography sx={{ 
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        color: '#212121',
                        margin: '20px 0 0 0'
                    }}
                    >
                        Hasil evaluasi laman/web e-PAK Guru menunjukkan bahwa laman/web e-PAK Guru adalah media informasi yang cepat dan tepat dalam memberikan informasi tentang hasil penilaian dan penetapan angka kredit guru Pegawai Negeri Sipil (PNS) golongan ruang IV/b ke atas. Proses penilaian dan penetapan angka kredit menjadi lebih singkat, efektif, dan efisien.
                    </Typography>
                    <Typography sx={{ 
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        color: '#212121',
                        margin: '20px 0 0 0'
                    }}
                    >
                        Lebih jauh lagi, dampak positip dari penggunaan laman/web e-PAK Guru dapat memberikan konstribusi yang positif terhadap guru, sehingga guru menjadi lebih termotivasi dan antusias untuk mengembangkan kariernya.
                    </Typography>
                    <Typography sx={{ 
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        color: '#212121',
                        margin: '20px 0 0 0'
                    }}
                    >
                        KONTAK KAMI:<br/>
                        Subdirektorat Penilaian Kinerja dan Pengembangan Karier<br/>
                        Direktorat Pembinaan Guru Pendidikan Dasar<br/>
                        Direktorat Jenderal Guru dan Tenaga Kependidikan<br/>
                        Kementerian Pendidikan dan Kebudayaan<br/>
                        WA/SMS: 081383060257<br/>
                    </Typography>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
        </Paper>
    </>
);
}