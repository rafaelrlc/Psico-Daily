import { useRouter } from "next/router";
import styles from "./patients.module.css";
import PatientReport from "./patientReport";
const fictionalPatientes = [
  {
    key: 1,
    name: "Rafael Ribeiro",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090098517411889202/149071.png",
    nextSession: "Próxima Sessão: 21/03/2023 - 18:00",
    report:
      "Útimo Relato (13/03/2023): quse agredi meu amigo por conta de uma aposta.",
  },
  {
    key: 2,
    name: "Athus Henrique",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090097261935075338/161155061_1241445503314611_653890240512899675_n.jpg?width=513&height=514",
    nextSession: "Próxima Sessão: 13/05/2023 - 15:00",
    report:
      "Útimo Relato (13/03/2023): quse agredi meu amigo por conta de um trabalho de faculdade.",
  },
  {
    key: 3,
    name: "Virgínia Fonseca",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090048913295294514/179012210_4551639534941718_6061324844753987059_n.jpg?width=513&height=514",
    nextSession: "Próxima Sessão: 02/04/2023 - 9:00",
    report:
      "Útimo Relato (27/03/2023): Estou com medo de IAs tomar meu trabalho como artista.",
  },

  {
    key: 4,
    name: "Rafael",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090097655650201650/324675685_160673636376376_9014816814753545186_n.jpg?width=514&height=514",
    nextSession: "Próxima Sessão: 02/04/2023 - 9:00",
    report:
      "Último Relato (20/03/2023): Estou viciado em Fortnite, jogo o dia todo.",
  },
  {
    key: 5,
    name: "Athus Henrique",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090097261935075338/161155061_1241445503314611_653890240512899675_n.jpg?width=513&height=514",
    nextSession: "Próxima Sessão: 21/03/2023 - 18:00",
    report:
      "Último Relato (14/03/2023): chorei muito vendo um comercial do itaú...",
  },
  {
    key: 6,
    name: "Pedro Victor",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090097261935075338/161155061_1241445503314611_653890240512899675_n.jpg?width=513&height=514",
    nextSession: "Próxima Sessão: 21/03/2023 - 18:00",
    report:
      "Último Relato (12/03/2023): discuti com meu amigo e ele avançou pra...",
  },
  {
    key: 7,
    name: "Rafael Ribeiro",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090098517411889202/149071.png",
    nextSession: "Próxima Sessão: 21/03/2023 - 18:00",
    report:
      "Último Relato (12/03/2023): saí no soco com dois assaltantes na rua,...",
  },
  {
    key: 8,
    name: "Rafael Ribeiro",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090098517411889202/149071.png",
    nextSession: "Próxima Sessão: 21/03/2023 - 18:00",
    report:
      "Último Relato (12/03/2023): saí no soco com dois assaltantes na rua,...",
  },
  {
    key: 9,
    name: "Rafael Ribeiro",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090098517411889202/149071.png",
    nextSession: "Próxima Sessão: 21/03/2023 - 18:00",
    report:
      "Último Relato (12/03/2023): saí no soco com dois assaltantes na rua,...",
  },
  {
    key: 10,
    name: "Rafael Ribeiro",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090098517411889202/149071.png",
    nextSession: "Próxima Sessão: 21/03/2023 - 18:00",
    report:
      "Último Relato (12/03/2023): saí no soco com dois assaltantes na rua,...",
  },
  {
    key: 11,
    name: "Rafael Ribeiro",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090098517411889202/149071.png",
    nextSession: "Próxima Sessão: 21/03/2023 - 18:00",
    report:
      "Último Relato (12/03/2023): saí no soco com dois assaltantes na rua,...",
  },
  {
    key: 12,
    name: "Rafael Ribeiro",
    userIcone:
      "https://media.discordapp.net/attachments/714891795129171983/1090098517411889202/149071.png",
    nextSession: "Próxima Sessão: 21/03/2023 - 18:00",
    report:
      "Último Relato (12/03/2023): saí no soco com dois assaltantes na rua,...",
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
