
import profile from "../../assets/image2.png";
import NavbarDashbord from "../../components/NavbarDashbord";

function AddPaslon() {
  return (
    <div className="">
      <NavbarDashbord />
      <header>
        <h1 className="text-center text-4xl font-bold text-yellow-900 mt-10">
          LIST PASLON
        </h1>
        <table className="max-w-full mx-auto mt-20">
          <thead>
            <tr className="border-current bg-white bg-gray-100">
              <th className="border px-4 ">No Urut</th>
              <th className="border px-12">image</th>
              <th className="border px-10">Name</th>
              <th className="border  px-6">Visi&Misi</th>
              <th className="border  px-3">Koaslisi</th>
            </tr>
          </thead>
          <tbody >
            <tr className=" border-black bg-white w-full">
              <td className="border px-4 text-center">1</td>
              <img src={profile} alt="profile" className="w-6/12 ml-10 p-1" />
              <td className="border px-10">Cintara Surya Paloh</td>
              <td className="border px-3  ">
                <p>Memindahkan Indonesia ke Isekai.</p>
                <p>Nonton anime 3x sehari.</p>
                <p>Melakukan peresapan pada budaya jepang.</p>
              </td>
              <td className="border w-56">
                <p> Partai Persatuan Wiboo.</p>
                <p> Partai Redbull.</p>
                <p>Partai Black Magic. </p>
              </td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default AddPaslon;
