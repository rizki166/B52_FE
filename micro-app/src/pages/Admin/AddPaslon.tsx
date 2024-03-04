
import profile from "../../assets/image 1.png";
import NavbarDashbord from "../../components/NavbarDashbord";
function AddPaslon() {
  return (
    <div className="bg-white w-full h-full ">
      <NavbarDashbord />
      <header className="">
        <h1 className="text-center font-bold text-3xl text-yellow-900 p-10">
          ADD PASLON
        </h1>
        <section className=" flex justify-center gap-10 pb-10">
          <img src={profile} alt="Poto profile" className="w-3/12 h-96" />
          <div className="flex flex-col w-4/12">
            <label className="font-bold text-gray-600">Nama</label>
            <input
              type="text"
              name="namePaslon "
              id="namepaslon"
              className="w-full h-10 ring-2 ring-black w-full mt-2 ring-offset-slate-50  rounded"
            />

            <label className="font-bold text-gray-600">Nomer Urut</label>
            <input
              type="text"
              name="namePaslon "
              id="namepaslon"
              className="w-full h-10 ring-2 ring-black w-full mt-2 ring-offset-slate-50  rounded"
            />

            <label className="font-bold text-gray-600">Visi&Misi</label>
            <input
              type="text"
              name="namePaslon "
              id="namepaslon"
              className="w-full h-52 h-10 ring-2 ring-black w-full mt-2 ring-offset-slate-50  rounded"
            />

            <button className="w-11/12 h-10 bg-yellow-900 mt-5 rounded-xl  text-white font-bold text-2xl"
              >SUBMIT</button>
          </div>
        </section>
      </header>
    </div>
  );
}

export default AddPaslon;
