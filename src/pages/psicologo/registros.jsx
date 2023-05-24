import Navbar from "@/components/Navbar";
import PrivateRoute from "@/components/Routes/PrivateRoute";

const Registros = () => {
  return (
    <div>
      <Navbar type="psico" />
      <PrivateRoute allowedRoute={"Psicologo"}>
        <div>REGISTROOSSS</div>
      </PrivateRoute>
    </div>
  );
};

export default Registros;
