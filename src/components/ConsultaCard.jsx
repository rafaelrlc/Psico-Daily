import React from "react";

const ConsultaCard = (props) => {
  return (
    <li>
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 flex flex-col gap-2">
            <p>Próxima Consulta:</p>
            <div>
              {" "}
              <p>Data : {props.dia + "/" + props.mes}</p>
              <p> Hora : {props.hora}</p>
            </div>
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus fugit magni porro distinctio unde minus veniam soluta
          ratione aperiam, quae officia doloremque animi recusandae quasi rem
          assumenda molestias? Similique, molestiae.
        </p>
      </div>
    </li>
  );
};

export default ConsultaCard;
