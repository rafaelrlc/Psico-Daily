import React from "react";
import { useState } from "react";

import { AiOutlineMessage } from "react-icons/ai";

import { VscCalendar } from "react-icons/vsc";
import Tooltip from "@mui/material/Tooltip";
import PatientModal from "./PatientModal";
import { useRouter } from "next/router";
const Patient = ({ username, email, id }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const { push } = useRouter();
  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <li className="flex justify-between items-center gap-x-6 py-5">
        <div className="flex gap-x-4 items-center">
          <img
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            src="https://media.discordapp.net/attachments/714891795129171983/1102445653050789928/user.png"
            alt=""
          />
          <div className="min-w-0 flex-auto">
            <p
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-700 hover:cursor-pointer"
              onClick={() => {
                push(`/psicologo/pacientes/${id}`);
              }}
            >
              {username}
            </p>
            <p className="text-xs leading-5 text-gray-500">{email}</p>
          </div>
        </div>
        <div className="sm:flex sm:items-center gap-8">
          <div className="flex gap-4 items-center">
            {/* <h2 className="text-xs leading-5 text-gray-500 hidden sm:block">
              Próxima Consulta: <time datetime="2023-01-23T13:23Z">19/06</time>
            </h2> */}
            <div className="flex gap-4  p-2 rounded-lg">
              {/* <button>
                <RiUserLine
                  size={26}
                  className="text-gray-700 hover:text-gray-500"
                />
              </button> */}
              <Tooltip title="Enviar Mensagem">
                <button onClick={() => openModal("sendMessage")}>
                  <AiOutlineMessage
                    size={26}
                    className="text-gray-700 hover:text-gray-500"
                  />
                </button>
              </Tooltip>

              <Tooltip title="Marcar Consulta">
                <button onClick={() => openModal("calendar")}>
                  <VscCalendar
                    size={26}
                    className="text-gray-700 hover:text-gray-500"
                  />
                </button>
              </Tooltip>
            </div>

            {showModal && (
              <PatientModal
                closeModal={closeModal}
                type={modalType}
                id={id}
                userEmail={email}
              />
            )}
          </div>
        </div>
      </li>
    </div>
  );
};

export default Patient;
