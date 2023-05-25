import Navbar from "@/components/Navbar";
import PrivateRoute from "@/components/Routes/PrivateRoute";
import AdicionarPacientes from "@/components/AdicionarPacientes";
const AddPacientes = () => {
  return (
    <div>
      <Navbar type="psico" />

      <AdicionarPacientes></AdicionarPacientes>
    </div>
  );
};

export default AddPacientes;
