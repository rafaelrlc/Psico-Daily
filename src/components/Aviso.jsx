import React from "react";

const Aviso = (props) => {
  const hora = props.data?.slice(11, 16);
  const data = new Date(props.data);
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const diaFormatado = dia < 10 ? "0" + dia : dia;
  const mesFormatado = mes < 10 ? "0" + mes : mes;

  return (
    <li className="flex justify-between gap-x-6 py-5 ">
      <div className="flex gap-x-4 px-2 ">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src="https://media.discordapp.net/attachments/714891795129171983/1102445653050789928/user.png"
          alt=""
        />
        <div className="min-w-0 flex-auto">
          <div className="text-sm  leading-6 text-gray-900">
            {props.senderName}{" "}
            {props.data && (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Enviada em {diaFormatado + "/" + mesFormatado}
                <time datetime="2023-01-23T13:23Z"> às {hora}</time>
              </p>
            )}
          </div>
          <div className="break-all mt-1 text-sm text-gray-500">
            {props.text}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Aviso;
