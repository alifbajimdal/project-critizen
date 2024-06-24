import HomeImg from "../assets/image/casual.png"
import "../style/hero.css"

export default function Hero() {
  return (
    <div className="flex justify-between mt-[100px] mx-[100px]">
        <div className="w-[628px]">
            <h1 className="text-[64px] font-bold text-left text-white">Gerakan Jogja <br/>Bebas <span className="span">Hoax</span></h1>
            <p className="text-3xl font-medium mt-6 text-left text-white">Sebagai masyarakat, kita harus kritis menerima sebuah berita untuk mencegah terjadinya disinformasi ataupun hoax  yang dapat merugikan</p>
        </div>
        <div className="image">
            <img alt="casual" src={HomeImg} width={464}/>
        </div>
    </div>
  )
}
