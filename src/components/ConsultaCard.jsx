import React from "react";
import ModalTest from "../../utils/ModalTest";
const ConsultaCard = (props) => {
  return (
    <li>
      <div class="max-w-sm p-6 bg-white border border-gray-400 rounded-lg shadow">
        <a href="#">
          <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 flex flex-col gap-2">
            <p className="text-3xl">Próxima Consulta:</p>
            <div>
              {" "}
              <p>Data : {props.dia + "/" + props.mes}</p>
              <p> Hora : {props.hora}</p>
            </div>
          </h5>
        </a>
        {/* <p class="mb-3 text-gray-700 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus fugit magni porro distinctio unde minus veniam soluta.
        </p> */}
        <div className="flex gap-3 mt-3 justify-end">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
            Cancelar
          </button>
          {/* <ModalTest /> */}
        </div>
      </div>
    </li>
  );
};

export default ConsultaCard;
