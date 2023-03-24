import * as yup from "yup";

export const loginSchema = yup.object({
  fullname: yup
    .string()
    .max(35, "Limite máximo de 35 caracteres")
    .required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório."),
  confirmEmail: yup
    .string()
    .email("E-mail inválido")
    .required("Campo obrigatório."),
  password: yup
    .string()
    .max(30, "Limite máximo de 30 caracteres.")
    .required("Campo obrigatório.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Deve conter 8 caracteres, uma letra maiúscula um número e um caractere espeical"
    ),
  confirmPassword: yup
    .string()
    .max(30, "Limite máximo de 30 caracteres.")
    .required("Campo obrigatório.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Deve conter 8 caracteres, uma letra maiúscula um número e um caractere espeical"
    ),
});
