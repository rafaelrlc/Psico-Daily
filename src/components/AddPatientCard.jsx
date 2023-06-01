import { useState } from "react";

import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";

import AxiosApi from "@/services/api";
import { Divider } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { HiOutlineMail } from "react-icons/hi";
import { TbSend } from "react-icons/tb";

const AddPatientCard = (props) => {
  const { privateApi } = AxiosApi();
  const Icon = props.icon;

  const [anchorEl, setAnchorEl] = useState(null);
  const [email, setEmail] = useState("");

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email == "") {
      return;
    }
    const data = {
      pacEmail: email,
    };
    console.log("Email:", email);
    try {
      const response = await privateApi.post("/notif", data);
      console.log(response);
      toast.success("Solicitação enviada!");
    } catch (error) {
      console.log(error);
      toast.error("Usuário não encontrado.");
    }

    setEmail("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex items-center">
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Icon size={25} color="white" className="hover:rotate-[-6deg]" />
      </IconButton>
      <Toaster />

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 1px 1px rgba(0,0,0,0.32))",
            mt: 0.5,
            width: "260px",
            maxHeight: "300px",
            borderRadius: "10px",
            overflow: "",
            overflowY: "hidden",

            bgcolor: "#fdfdfd",
            "&:hover": {
              overflowY: "auto", // Show scrollbar only on hover
            },
            "&::-webkit-scrollbar": {
              width: "0.7rem",
              display: "none",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "4px",
              backgroundColor: "rgba(0,0,0,.1)",
            },
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className="flex flex-col px-4 py-3">
          <h1 className="mb-2 text-[0.95rem] text-gray-500">
            Adicionar Paciente
          </h1>
          <Divider />
          <div className="flex gap-3 mt-5 justify-between items-center ">
            <form className="relative">
              <input
                className="rounded-lg p-1 pl-8 text-black  border-[2px] border-[#dedddd] outline-none box-border  text-sm"
                placeholder="E-mail"
                onChange={handleEmailChange}
                type="email"
                value={email}
              />
              <HiOutlineMail
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </form>

            <button
              type="submit"
              className="focus:outline-none text-sm text-white bg-[#574dc1] hover:bg-[#40379f] 2  rounded-lg p-[0.4rem] flex items-center justify-center"
              style={{ width: "30px" }}
              onClick={submitHandler}
            >
              <TbSend size={17} />
            </button>
          </div>
        </div>
      </Menu>
      <h1 onClick={handleClick} className="hover:cursor-pointer">
        Adicionar Paciente
      </h1>
    </div>
  );
};

export default AddPatientCard;
