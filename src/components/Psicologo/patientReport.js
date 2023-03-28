import styled from "styled-components";
import { BiCalendar } from "react-icons/bi";
const DownContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0.95rem;
  margin-right: 2rem;

  &:hover {
    background-color: rgb(221, 221, 221);
    border-radius: 2rem;
    cursor: pointer;
  }

  &:last-child {
    margin-bottom: 3rem;
  }

  & img {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin-right: 1rem;
  }

  & .next_session {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  & .usr_info {
    width: 100%;
  }
`;

const PatientReport = ({ userIcone, name, report, nextSession }) => {
  return (
    <DownContainer>
      <img src={userIcone} />
      <div className="usr_info">
        <h2>{name}</h2>
        <p>{report}</p>
      </div>
      <div className="next_session">
        <BiCalendar size={"45px"}></BiCalendar>
        <h3>{nextSession}</h3>
      </div>
    </DownContainer>
  );
};

export default PatientReport;
