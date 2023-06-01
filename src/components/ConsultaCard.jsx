import AxiosApi from "@/services/api";
import React from "react";

const ConsultaCard = (props) => {
  const { privateApi } = AxiosApi();

  const startDate = new Date(props.startDate);
  const formattedDate = startDate.toLocaleDateString("pt-br");
  const formattedTime = startDate.toLocaleTimeString([], {
    hour12: false,
    timeStyle: "short",
  });

  const cancelConsulta = async () => {
    try {
      const response = await privateApi.delete(`/consulta/${props.id}`);
      console.log(response);
      props.fetchItems();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <li>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm1">
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 flex flex-col gap-2">
            <div className="flex flex-col gap-2 font-light">
              <p>Data: {formattedDate}</p>
              <p>Hora: {formattedTime}</p>
            </div>
          </h5>
        </a>
        <h2 className="mt-5 text-gray-700">Descrição:</h2>
        <p class="break-all mt-1 text-sm text-gray-500">{props.desc}</p>
        <div className="flex gap-3 mt-3 justify-end">
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
            onClick={cancelConsulta}
          >
            Cancelar
          </button>
        </div>
      </div>
    </li>
  );
};

export default ConsultaCard;
