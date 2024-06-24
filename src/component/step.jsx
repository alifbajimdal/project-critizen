import image1 from "../assets/image/step-1.png"
import image2 from "../assets/image/step-2.png"
import image3 from "../assets/image/step-3.png"
import "../style/step.css"

export default function Step() {
  return (
    <div className="mx-16 mt-28">
        <div className="flex gap-4 items-center">
            <h1 className="w-[550px] text-right font-bold text-[64px] text-white">3 Cara Melaporkan <span className="text-secondary">Hoax</span></h1>
            <p className="w-[750px] font-bold text-[36px] text-white">Gunakan langkah berikut dalam upaya mencegah beredarnya berita hoax semakin marak dalam kehidupan bermasyarakat</p>
        </div>
        <div className="grid grid-cols-3 gap-[70px] mt-28">
            <div className="step">
                <img alt="link" src={image1}/>
                <p className="mt-7 font-bold text-[28px]">Tempel halaman url berita Hoax yang anda temukan</p>
            </div>
            <div className="step">
                <img alt="" src={image2}/>
                <p className="mt-7 font-bold text-[28px]">Buka website Critizen.com lalu klik aduan</p>
            </div>
            <div className="step">
                <img alt="" src={image3}/>
                <p className="mt-7 font-bold text-[28px]">Menuju halaman Whatsapp ke nomor PPID D.I.Yogyakarta</p>
            </div>
        </div>
    </div>
  )
}
