import Navbar from "@/components/Navbar";
import PrivateRoute from "@/components/Routes/PrivateRoute";

const Info = () => {
  return (
    <div>
      <Navbar type="psico" />
      <PrivateRoute allowedRoute={"Psicologo"}>
        {" "}
        <h1>info</h1>
      </PrivateRoute>
    </div>
  );
};

export default Info;
