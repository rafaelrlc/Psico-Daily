import * as yup from "yup";

export const registerPacienteSchema = yup.object({
  name: yup
    .string()
    .max(35, "Limite máximo de 35 caracteres")
    .required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório."),
  cpf: yup
    .string()
    .max(11, "CPF Inválido")
    .min(11, "CPF Inválido")
    .required("Campo obrigatório"),
  confirmEmail: yup
    .string()
    .email("E-mail inválido")
    .required("Campo obrigatório."),
  password: yup
    .string()
    .max(30, "Limite máximo de 30 caracteres.")
    .required("Campo obrigatório."),
  confirmPassword: yup
    .string()
    .max(30, "Limite máximo de 30 caracteres.")
    .required("Campo obrigatório."),
});

export const registerPsicologoSchema = yup.object({
  fullname: yup
    .string()
    .max(35, "Limite máximo de 35 caracteres")
    .required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório."),
  cpf: yup
    .string()
    .max(11, "CPF Inválido")
    .min(11, "CPF Inválido")
    .required("Campo obrigatório"),
  crp: yup.string().required("Campo obrigatório"),
  confirmEmail: yup
    .string()
    .email("E-mail inválido")
    .required("Campo obrigatório."),
  password: yup
    .string()
    .max(30, "Limite máximo de 30 caracteres.")
    .required("Campo obrigatório."),

  confirmPassword: yup
    .string()
    .max(30, "Limite máximo de 30 caracteres.")
    .required("Campo obrigatório."),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("E-mail inválido")
    .required("Campo obrigatório. Informe um e-mail válido."),
  password: yup
    .string()
    .max(30, "Limite máximo de 30 caracteres.")
    .required("Campo obrigatório. Informe uma senha válida."),
});

export const newRegistroSchema = yup.object({
  title: yup
    .string()
    .max(30, "Limite máximo de 30 caracteres.")
    .required("Campo obrigatório. Informe um título."),
  description: yup
    .string()
    .max(300, "Limite máximo de 300 caracteres.")
    .required("Campo obrigatório. Informe uma descrição."),
});

export const editDataSchema = yup.object({
  name: yup
    .string()
    .max(30, "Limite máximo de 30 caracteres.")
    .required("Campo obrigatório. Informe um título."),
  username: yup
    .string()
    .max(300, "Limite máximo de 300 caracteres.")
    .required("Campo obrigatório. Informe uma descrição."),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório."),
  currentPassword: yup
    .string()
    .max(300, "Limite máximo de 300 caracteres.")
    .required("Campo obrigatório. Informe uma descrição."),
  newPassword: yup
    .string()
    .max(30, "Limite máximo de 300 caracteres.")
    .required("Campo obrigatório. Informe uma descrição."),
});
