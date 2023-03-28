import { useRouter } from "next/router";
import styles from "../../../styles/patients.module.css";
import PatientReport from "./patientReport";
const fictionalPatientes = [
  {
    key: 1,
    name: "Pedro Victor",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090098517411889202/149071.png",
    nextSession: "Próxima Sessão: 05/04/2023 - 18:00",
    report:
      "Útimo Relato (13/03/2023): Coloquei todos os meus amigos em um esquema de pirâmide.",
  },

  {
    key: 2,
    name: "Athus Henrique",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090097261935075338/161155061_1241445503314611_653890240512899675_n.jpg?width=513&height=514",
    nextSession: "Próxima Sessão: 13/05/2023 - 15:00",
    report:
      "Útimo Relato (13/03/2023): Briguei com meu amigo por conta de um trabalho da faculdade.",
  },
  {
    key: 3,
    name: "Luís Henrique",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090098517411889202/149071.png",
    nextSession: "Próxima Sessão: 13/05/2023 - 16:00",
    report:
      "Útimo Relato (13/03/2023): Um amigo brigou comigo por conta de um trabalho da faculdade.",
  },
  {
    key: 4,
    name: "Iggor Rafael",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090048913295294514/179012210_4551639534941718_6061324844753987059_n.jpg?width=513&height=514",
    nextSession: "Próxima Sessão: 02/04/2023 - 9:00",
    report:
      "Útimo Relato (30/03/2023): Reprovei na prova do Detran, o instrutor me sabotou!!",
  },

  {
    key: 5,
    name: "Rafael Lagos",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090097655650201650/324675685_160673636376376_9014816814753545186_n.jpg?width=514&height=514",
    nextSession: "Próxima Sessão: 02/04/2023 - 9:00",
    report:
      "Último Relato (20/03/2023): Estou viciado em Fortnite, jogo o dia todo.",
  },
  {
    key: 6,
    name: "Iggor Rafael",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090048913295294514/179012210_4551639534941718_6061324844753987059_n.jpg?width=513&height=514",
    nextSession: "Próxima Sessão: 02/04/2023 - 9:00",
    report: "Útimo Relato (27/03/2023): Estou com medo da prova do Detran.",
  },
  {
    key: 7,
    name: "Athus Henrique",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090097261935075338/161155061_1241445503314611_653890240512899675_n.jpg?width=513&height=514",
    nextSession: "Próxima Sessão: 21/03/2023 - 18:00",
    report:
      "Último Relato (14/03/2023): Chorei muito vendo um comercial do itaú...",
  },

  {
    key: 8,
    name: "Pedro Victor",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090098517411889202/149071.png",
    nextSession: "Próxima Sessão: 21/03/2023 - 18:00",
    report:
      "Último Relato (12/03/2023): discuti com meu amigo e ele avançou pra me atacar.",
  },
  {
    key: 9,
    name: "Rafael Rios",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090097655650201650/324675685_160673636376376_9014816814753545186_n.jpg?width=514&height=514",
    nextSession: "Próxima Sessão: 02/04/2023 - 9:00",
    report:
      "Último Relato (02/03/2023): Sou ruim no Ping-Pong, perco toda hora, não sei o que fazer!!",
  },
];

const Patients = () => {
  const router = useRouter();

  const patients_reports = fictionalPatientes.map((patient) => (
    <PatientReport
      userIcone={patient.userIcone}
      name={patient.name}
      nextSession={patient.nextSession}
      report={patient.report}
      key={patient.key}
    ></PatientReport>
  ));

  return (
    <div className={styles.main_container}>
      <div className={styles.upbar}>
        <h1>Lista de Pacientes</h1>
      </div>

      <ul>{patients_reports}</ul>
    </div>
  );
};

export default Patients;
