import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { RiUserLine } from "react-icons/ri";
import { VscCalendar } from "react-icons/vsc";
import Link from "next/link";
import PatientModal from "../PatientModal";
import { useState } from "react";
import { Divider } from "@mui/material";
import Datepicker from "react-tailwindcss-datepicker";
const Patient = ({ username, email, id }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
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
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {username}
            </p>
            <p className="text-xs leading-5 text-gray-500">{email}</p>
          </div>
        </div>
        <div className="sm:flex sm:items-center gap-8">
          <div className="flex gap-4 items-center">
            <h2 className="text-xs leading-5 text-gray-500 hidden sm:block">
              Próxima Consulta: <time datetime="2023-01-23T13:23Z">19/06</time>
            </h2>
            <div className="flex gap-4 bg-[#f9f9f9] p-2 rounded-lg">
              <button>
                <RiUserLine size={26} className="text-gray-700" />
              </button>
              <button onClick={() => openModal("sendMessage")}>
                <AiOutlineMessage
                  size={26}
                  className="text-gray-700 hover:text-gray-500"
                />
              </button>
              <button onClick={() => openModal("calendar")}>
                <VscCalendar
                  size={26}
                  className="text-gray-700 hover:text-gray-500"
                />
              </button>
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
