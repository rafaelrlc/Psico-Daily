import React from "react";
import { Divider } from "@mui/material";

export const MessageNotification = (props) => {
  return (
    <div className="px-5 py-1 h-20">
      <div className="flex items-center">
        <div className="relative inline-block shrink-0">
          <img
            className="w-14 h-14 rounded-full"
            src="https://media.discordapp.net/attachments/714891795129171983/1102445653050789928/user.png"
          />
          <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
        <div className="ml-3 text-sm font-normal">
          <div className="text-sm font-semibold text-gray-900 ">
            {props.username}
          </div>
          <div className="text-sm font-light">{props.message}</div>
          <span className="text-xs font-medium text-blue-600 ">
            {props.time}
          </span>
        </div>
      </div>
      <div className="mt-4">
        <Divider />
      </div>
    </div>
  );
};

export const RequestNotification = (props) => {
  const handleAccept = () => {
    props.handleAccept(props.id);
  };

  const handleReject = () => {
    props.handleReject(props.id);
  };
  return (
    <div className="px-5 py-1 h-30">
      <div className="flex items-center gap-1">
        <div className="relative inline-block shrink-0">
          <img
            className="w-14 h-14 rounded-full"
            src="https://media.discordapp.net/attachments/714891795129171983/1102445653050789928/user.png"
          />
        </div>
        <div className="ml-3 text-sm font-normal">
          <div className="text-sm  text-gray-900 flex flex-col gap-1">
            <span className="font-semibold">{props.psicologoNome}</span>
            <span className="font-light">Deseja adicionar você</span>
          </div>
          <div className="flex gap-3 mt-3 ">
            <button
              className="bg-green-400 hover:bg-green-500 text-white font-semibold py-1 px-3 rounded"
              onClick={handleAccept}
            >
              Aceitar
            </button>
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded"
              onClick={handleReject}
            >
              Recusar
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Divider />
      </div>
    </div>
  );
};
