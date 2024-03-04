import { Carousel } from "@material-tailwind/react";
import profile from '../../assets/profile.svg'

function CarouselDefault() {
  return (
    <Carousel
      className="rounded-xl"
      placeholder={<></>} 
    >
    <section className="flex justify-center mt-10 p-10 ">
          <div className="flex gap-5 w-8/12 h-full bg-white p-10">
            <div>
              <img src={profile} alt="paslon profile" />
            </div>

            <div>
              <h2 className="text-yellow-900 text-2xl">Nomor Urut : 1</h2>
              <h1 className="text-red-900 text-3xl"> CINTARA SURYA PALOH</h1>
              <div className="mt-5 text-yellow-900 text-lg">
                <h4>Visi & Misi:</h4>
                <p> Memindahkan indonesia ke isekai</p>
                <p>Nonton anime 3x sehari</p>
                <p> Melakukan peresapan pada budaya jepang</p>
              </div>
              <div className="mt-5 text-yellow-900 text-lg">
                <h4>Koalisi</h4>
                <p>Partai Persatuan Wiboo</p>
                <p>Partai Redbull.</p>
                <p>Partai Black Magic</p>
              </div>
            </div>
          </div>

          
        </section>
      
    </Carousel>
 
 
  );
}

export default CarouselDefault;
