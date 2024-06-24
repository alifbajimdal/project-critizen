import Image1 from "../assets/image/berita1.png";
import Image2 from "../assets/image/berita2.png";
import Image3 from "../assets/image/berita3.png";
import Image4 from "../assets/image/berita4.png";
import Image5 from "../assets/image/berita5.png";
import { Link } from "react-router-dom";
import "../style/berita.css";

export default function Berita() {
  return (
    <section className="Page">
      <div className="grid grid-cols-3 gap-3">
        <div className="container1 col-span-2 px-8 py-9">
          <h1 className="berita-news">Berita / News</h1>
          <div className="tagline">
            <hr />
            <p>kamis, 5 Mei 2024</p>
            <h2>Wisata Seto Pangaribowo, Reni Susanti</h2>
            <p>Tim Redaksi</p>
          </div>
          <div className="img-berita">
            <img src={Image1} alt="berita"/>
          </div>
          <h1>
            Pemerintah DIY Pastikan Ganti Pejabat Bupati Kulon Progo dan
            Walikota Yogyakarta
          </h1>
          <p>
            YOGYAKARTA, Pemerintah Daerah Istimewa Yogyakarta (DIY) memastikan
            bakal mengganti dua penjabat (pj) Bupati Kulon Progo dan pj Wali
            Kota Yogyakarta. Sekretaris Daerah DIY, Beny Suharsono mengatakan,
            menjelang 22 Mei 2024, Pemerintah DIY telah memproses tahapan
            penggantian pj di dua wilayah tersebut. <br /><br />

            “Kita sudah mengevaluasi baik kota (Yogyakarta) maupun Kulon Progo, secara administrasi juga
            sudah bersurat ke Mendagri untuk mendapatkan arahan tentang
            penyegaran baik di kota maupun Kulon Progo,” jelas Beny, Sabtu
            (4/5/2024). <br /><br />

            Beny mengungkapkan, untuk Kulon Progo sudah jelas
            disampaikan Gubernur Daerah Istimewa Yogyakarta (DIY) pada saat
            acara syawalan bahwa posisi pj akan diganti. Sedangkan di Kota
            Yogyakarta, salah satu yang menjadi bahan evaluasi adalah sekelompok
            masyarakat mempertanyakan kenapa banyak gambar pj wali kota
            menjelang Idul Fitri kemarin. Hal ini mengundang banyak spekulasi
            bahwa pj Wali Kota Yogyakarta akan maju dalam kontestasi Pilkada
            Kota Yogyakarta 2024. <br /><br />

            “Begitu juga kota (Yogyakarta), selama ini kan
            ramai baliho dan sebagainya ya itu jadi bagian evaluasi kalau itu
            benar-benar terjadi gambar-gambar dan sebagainya kita akan evaluasi
            supaya benar-benar netral,” jelas Beny. “Kemarin pemilu saja
            berusaha netral kok apalagi untuk skup yang lebih kecil kita jaga
            ASN jangan di bawa ke sana kemari,” beber Beny. <br /><br />

            Dia menambahkan, saat ini Pemerintah DIY telah mengirimkan 3 nama kepada Kementerian
            Dalam Negeri untuk menggantikan dua penjabat tersebut. Saat ini
            Pemerintah dIY sedang menunggu arahan dari Kemendagri. “Sudah
            dikirim (ke Kemendagri) tinggal menunggu arahan, kita tidak bisa
            mendahului, harus ada 3 nama tidak boleh tunggal datanya semua
            lengkap baik di Kulon Progo maupun kota (Yogyakarta).
          </p>
        </div>
        <div className="side-bar">
          <div className="kategori-berita">
            <h2>Kategori Berita</h2>
            <Link to="">Berita Hoax</Link>
            <br />
            <Link to="">Disinformasi</Link>
          </div>
          <div className="berita-populer">
            <div className="berita-side">
              <img src={Image2} alt="berita1" className="img-side" />
              <h3>
                Soal latihan silat berujung mahasiswanya tewas, intiper:Tak izin
                kampus
              </h3>
              <Link>
                <span>Selengkapnya</span>
              </Link>
            </div>
            <div className="berita-side">
              <img src={Image3} alt="berita1" className="img-side" />
              <h3>
                Sesal dosen UPN Jogja pelaku pelecehan yang kini dicopot dari
                ketua jurusan
              </h3>
              <Link>
                <span>Selengkapnya</span>
              </Link>
            </div>
            <div className="berita-side">
              <img src={Image4} alt="berita1" className="img-side" />
              <h3>
                Kelihatan cahaya hijau di langit jogja yang ternyata meteor
              </h3>
              <Link>
                <span>Selengkapnya</span>
              </Link>
            </div>
            <div className="berita-side">
              <img src={Image5} alt="berita1" className="img-side" />
              <h3>
                ingatkan wajib belajar 12 tahun, sultan HB X minta anak
                perempuan tak diberlakukan
              </h3>
              <Link>
                <span>Selengkapnya</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
