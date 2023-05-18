import React from "react";
import CheckBox from "./CheckBox";

const UserAlerts = () => {
  return (
    <div className="flex flex-col gap-12 justify-center mt-4 text-xl">
      <CheckBox
        label={"Notificações de Email"}
        description={
          "Voce recebera notificações no seu email sobre o PsicoDaily."
        }
      />
      <CheckBox
        label={"Perfil Público"}
        description={"Seu perfil será público para outros usuários."}
      />
      <CheckBox
        label={"Alertas no Site"}
        description={"Voce recebera alertas no PsicoDaily."}
      />
      <CheckBox
        label={"Notificações de Email"}
        description={"Eu desejo receber notificações no meu email"}
      />
    </div>
  );
};

export default UserAlerts;
