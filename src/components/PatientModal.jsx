import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

import AxiosApi from "@/services/api";

import Datepicker from "tailwind-datepicker-react";

import toast, { Toaster } from "react-hot-toast";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const options = {
  title: "",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-gray-100 ",
    todayBtn: "",
    clearBtn: "bg-gray-200 border-none hover:bg-gray-300",
    icons: "bg-gray-100 hover:bg-gray-100",
    text: "hover:text-indigo-700",
    disabledText: "",
    input: "",
    inputIcon: "",
    selected: "bg-indigo-700",
  },
  icons: {
    prev: () => <span className="text-sm">{"<"}</span>,
    next: () => <span className="text-sm">{">"}</span>,
  },
  datepickerclassNames: "sm:top-20 top-0 ",
  defaultDate: null,
  language: "pt-BR",
};

const MAX_MESSAGE_LENGTH = 300;
const MAX_DESC_LENGTH = 300;

const PatientModal = (props) => {
  const { privateApi } = AxiosApi();

  const [psicMessage, setPsicMessage] = useState("");

  const [consultaMessage, setConsultaMessage] = useState("");

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(Date());
  const [time, setTime] = useState("");

  const handleMessageChange = (e) => {
    const message = e.target.value;
    if (message.length <= MAX_MESSAGE_LENGTH) {
      setPsicMessage(message);
    }
  };

  const handleConsultaMessage = (e) => {
    const message = e.target.value;
    if (message.length <= MAX_DESC_LENGTH) {
      setConsultaMessage(message);
    }
  };

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    console.log(selectedDate);
  };

  const handleClose = (state) => {
    console.log(state);
    setShowCalendar(state);
  };

  const submitMessage = async () => {
    if (psicMessage == "") {
      toast.error("Preencha os campos.");
      return;
    }
    const data = {
      receiverId: props.id,
      text: psicMessage,
      data: Date(),
    };
    try {
      const response = await privateApi.post("/mensagem", data);
      console.log(response);
      toast.success("Mensagem Enviada.");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao enviar mensagem.");
    }
    setPsicMessage("");
  };

  const submitConsulta = async () => {
    console.log("day: ", selectedDate);
    console.log("time: ", time.$d);

    console.log(consultaMessage);

    if (time === "") {
      toast.error("Preencha um Horário");
      return;
    }

    const resultDate = combineDateTime(selectedDate, time);
    console.log(resultDate);

    const data = {
      startDate: resultDate,
      pacId: props.id,
      desc: consultaMessage,
    };

    try {
      const response = await privateApi.post("/consulta", data);
      console.log(response);
      toast.success("Consulta Marcada");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao marcar consulta.");
    }
  };

  function combineDateTime(dateString, timeString) {
    const date = new Date(dateString);
    const time = new Date(timeString);

    const combinedDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      time.getHours(),
      time.getMinutes(),
      time.getSeconds(),
      time.getMilliseconds()
    );

    return combinedDate;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
      <div className="relative w-full sm:max-w-2xl max-w-[80%] sm:max-h-[full]">
        <div className="relative bg-white rounded-lg shadow-xl">
          <div className="flex items-center justify-between p-4 pb-1">
            <h3 className="text-xl font-semibold text-gray-900">
              {props.type === "sendMessage"
                ? "Enviar Aviso"
                : "Marcar Consulta"}
            </h3>
            <button
              onClick={() => props.closeModal()}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <AiOutlineClose size={22} />
            </button>
          </div>
          <div className="p-3">
            {props.type === "sendMessage" && (
              <div className="w-full border border-gray-200 rounded-lg bg-gray-50 shadow-sm ">
                <form className="px-2 py-2 pb-0 bg-white rounded-t-lg relative">
                  <textarea
                    id="comment"
                    rows="12"
                    className="w-full text-gray-900 bg-white outline-none text-sm resize-none"
                    placeholder="Escreva uma mensagem..."
                    required
                    onChange={handleMessageChange}
                    value={psicMessage}
                  ></textarea>
                  <p className="text-xs text-gray-400 absolute bottom-[4rem] right-2">
                    {psicMessage.length}/{MAX_MESSAGE_LENGTH}
                  </p>
                  <div className="flex items-center justify-between px-3 py-2 border-t mt">
                    <p className="text-xs text-gray-400">
                      Para: {props.userEmail}
                    </p>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={submitMessage}
                        className="focus:outline-none text-sm text-white bg-[#574dc1] hover:bg-[#40379f] focus:ring-2 focus:ring-indigo-900 rounded-lg px-3 py-[0.35rem]"
                      >
                        Enviar Mensagem
                      </button>
                    </div>
                  </div>
                </form>
                <Toaster />
              </div>
            )}
            {props.type === "calendar" && (
              <div>
                <form>
                  <div className="mb-6">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-800 ml-1"
                    >
                      Data
                    </label>
                    <div className="shadow-xs bg-white">
                      <Datepicker
                        options={options}
                        onChange={handleDateChange}
                        show={showCalendar}
                        setShow={handleClose}
                      />
                    </div>
                  </div>
                  <div className="mb-3 relative">
                    <label className="block mb-2 text-sm font-medium text-gray-800 ml-1">
                      Horário
                    </label>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        className="text-sm"
                        onChange={(newValue) => setTime(newValue)}
                      />
                    </LocalizationProvider>
                    <label className="block mb-2 text-sm font-medium text-gray-800 mt-5 ml-1">
                      Descrição
                    </label>
                    <textarea
                      id="comment"
                      rows="12"
                      className="w-full text-gray-900  outline-none text-sm border rounded p-2 border-gray-300 resize-none"
                      placeholder="Escreva uma mensagem..."
                      required
                      onChange={handleConsultaMessage}
                      value={consultaMessage}
                    ></textarea>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs text-gray-400 absolute bottom-[3.5rem] right-2">
                        {consultaMessage.length}/{MAX_DESC_LENGTH}
                      </p>
                      <button
                        type="button"
                        onClick={submitConsulta}
                        className="focus:outline-none text-sm text-white bg-[#574dc1] hover:bg-[#40379f] focus:ring-2 focus:ring-indigo-900 rounded-lg px-3 py-[0.5rem]"
                      >
                        Salvar
                      </button>
                    </div>
                  </div>
                </form>
                <Toaster />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientModal;
