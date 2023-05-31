import React, { useEffect, useState } from "react";
import Patient from "./Patient";
import { patientFakeList } from "../../../utils/data/ficData";
import AxiosApi from "@/services/api";
import { Divider } from "@mui/material";

const PatientsList = () => {
  const { privateApi } = AxiosApi();

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await privateApi.get("/psic_users");
        console.log(response.data);
        setPatients(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPatients();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <Divider style={{ width: "80%" }}>
        <h1 className="text-xl mb-3 font-light text-gray-500 text-center">
          Seus Pacientes
        </h1>
      </Divider>
      <ul role="list" className="divide-y divide-gray-100 w-[85vw]">
        {patients.map((patient) => (
          <Patient
            username={patient.name}
            email={patient.email}
            key={patient._id}
            id={patient._id}
          ></Patient>
        ))}
      </ul>
    </div>
  );
};

export default PatientsList;
