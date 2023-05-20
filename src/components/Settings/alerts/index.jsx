import React from "react";
import CheckBox from "./CheckBox";

const UserAlerts = () => {
  return (
    <div className="flex flex-col gap-12 justify-center mt-4 text-xl">
      <CheckBox
        label={"Notificações de Email"}
        description={
          "Voce recebera notificações no seu email sobre o PsicoDaily"
        }
        isChecked={true}
      />
      <CheckBox
        label={"Perfil Público"}
        description={"Seu perfil será público para outros usuários"}
        isChecked={true}
      />
      <CheckBox
        label={"Alertas no Site"}
        description={"Voce recebera alertas no PsicoDaily"}
        isChecked={true}
      />
      <CheckBox
        label={"Notificações de Email"}
        description={"Eu desejo receber notificações no meu E-mail"}
        isChecked={true}
      />
    </div>
  );
};

export default UserAlerts;
