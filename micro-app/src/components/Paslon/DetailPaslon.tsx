import { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";
function DetailPaslon() {
  const data = {
    labels: ["Cintara Surya Paloh", "Cintara", "Surya surya"],
    datasets: [
      {
        label: "",
        data: [78, 25, 40],
        backgroundColor: [
          "rgb(255,99,132)",
          "rgb(54,162,235)",
          "rgb(255,205,86)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    async function loadChartJS() {
      await import("chart.js/auto");
    }
    loadChartJS();
  }, []);

  return (
    <>
      <section>
        <div className="w-full h-full bg-white gap-5 p-12 ">
          <h1 className="font-bold text-3xl text-center p-10">
            INFO PEMILU TERUPDATE
          </h1>

          <section className="flex  flex-wrap  gap-5 ml-20">
            <div className=" w-5/12">
              <h1 className="text-4xl font-bold  text-center">Hasil:</h1>
              <Pie data={data} />
            </div>
            <div className="flex flex-col p-10 gap-5">
              <div>
                <div className="w-[30rem] bg-rose-400 flex  p-3 pl-10  gap-5 rounded-md">
                  <div className="w-[80px] h-[118px] bg-black text-center bg-red-800 rounded-xl" style={{
                    MozBorderRadius: "5px",
                    border: "3px solid white",
                  }}>
                    <p className="text-white font-bold text-[19px]">
                      No. Paslon
                    </p>
                    <p className="text-white text-4xl">3</p>
                  </div>
                  <div className="flex flex-col font-bold text-2xl text-red-900" style={{
                    
                    WebkitTextStroke: "1px white",
                    WebkitTextStrokeColor: "white",
                  }}>
                    <h1>CINTARA SURYA PALOH</h1>
                    <p>78%</p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="w-[30rem] bg-yellow-400 flex  p-3 pl-10  gap-5 rounded-md">
                  <div className="w-[80px] h-[118px] bg-black text-center bg-yellow-900 rounded-xl"style={{
                    MozBorderRadius: "5px",
                    border: "3px solid white",
                  }}>
                    <p className="text-white font-bold text-[19px]">
                      No. Paslon
                    </p>
                    <p className="text-white text-4xl">3</p>
                  </div>
                  <div className="flex flex-col font-bold text-2xl text-yellow-900" style={{
                                        WebkitTextStroke: "1px white",
                                        WebkitTextStrokeColor: "white",
                  }}>
                    <h1>SURYA SURYA</h1>
                    <p>45%</p>
                  </div>
                </div>
              </div>

              <div >
                <div className="w-[30rem] bg-blue-300 flex  p-3 pl-10  gap-5 rounded-md">
                  <div className="w-[80px] h-[118px] bg-black text-center bg-blue-900 rounded-xl" style={{
                     MozBorderRadius: "5px",
                     border: "3px solid white",
                  }}>
                    <p className="text-white font-bold text-[19px]">
                      No. Paslon
                    </p>
                    <p className="text-white text-4xl">3</p>
                  </div>
                  <div className="flex flex-col font-bold text-2xl text-blue-900" style={{
                                        WebkitTextStroke: "1px white",
                                        WebkitTextStrokeColor: "white",
                  }}>
                    <h1>CINTARA </h1>
                    <p>25%</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="w-11/12 h-10 mt-10 bg-yellow-900 text-white font-bold text-[20px] rounded-md">
                  <Link to="/ModalVote">
                  MASUKAN SUARA MU
                  </Link>
                </button>
              </div>
            </div>
          </section>
        </div>
        <h1 className="text-yellow-900 font-bold text-3xl text-center mt-20">
          INFO PASLON
        </h1>
      </section>
    </>
  );
}

export default DetailPaslon;
