import "../style/form.css";

export default function Form() {
  return (
    <div className="content-container flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-6 text-center text-white">
        Laporkan Berita Hoax di Sekitarmu, Yuk
      </h1>
      <div className="content p-8 rounded-lg shadow-lg w full max-w-lg">
        <form className="">
          <div>
            <label htmlFor="email" className="block text-white">Email</label>
            <input type="text" id="email" name="email" className="input-field w-full p-2 border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="Judul" className="block text-white">Judul</label>
            <input type="" id="judul" name="judul" className="input-field w-full p-2 border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="view" className="block text-white">Link Atau URL</label>
            <input type="text" id="judul" name="judul" className="input-field w-full p-2 border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-white">Deskripsi</label>
            <textarea name="deskripsi" id="deskripsi" className="input-field w-full p-2 border-gray-300 rounded-md"></textarea>
          </div>
          <div className="flex justify-center mt-7">
          <button className="btn-orange text-white px-10 py-3 rounded-md shadow-lg">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
