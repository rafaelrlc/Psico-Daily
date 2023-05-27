import { useState } from "react";

import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";

import { MessageNotification, RequestNotification } from "./Notification";
import AxiosApi from "@/services/api";

const NotificationCard = (props) => {
  const { privateApi } = AxiosApi();
  const Icon = props.icon;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    props.fetchNotifs();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRequestAccept = async (notifId) => {
    const data = {
      notifId: notifId,
    };
    try {
      const response = await privateApi.post("/accept", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      props.fetchNotifs();
    }
  };

  const handleRequestReject = async (id) => {
    try {
      await privateApi.delete(`/notif/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      props.fetchNotifs();
    }
  };

  return (
    <div>
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
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.32))",
            mt: 0.5,
            width: "400px",
            maxHeight: "300px",
            borderRadius: "20px",
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
        <div className="flex flex-col">
          <div className="flex flex-col gap-3 mt-2">
            {props.requestNotifications.map((notif) => (
              <RequestNotification
                key={notif._id}
                id={notif._id}
                handleAccept={handleRequestAccept}
                handleReject={handleRequestReject}
              />
            ))}
            {props.messageNotifications.map((notif) => (
              <MessageNotification
                message={notif.message}
                username={notif.username}
                time={notif.time}
                key={notif.id}
              />
            ))}
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default NotificationCard;
