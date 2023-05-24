import Navbar from "@/components/Navbar";
import PrivateRoute from "@/components/Routes/PrivateRoute";

const Consultas = () => {
  return (
    <div>
      <Navbar type="psico" />
      <PrivateRoute allowedRoute={"Psicologo"}>
        <h1>consultas</h1>
      </PrivateRoute>
    </div>
  );
};

export default Consultas;
