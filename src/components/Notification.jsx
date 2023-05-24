import React from "react";
import { Divider } from "@mui/material";
import { useRouter } from "next/router";

const Notification = (props) => {
  const messageNotification = (
    <div className="px-5 py-1">
      <div class="flex items-center">
        <div class="relative inline-block shrink-0">
          <img
            class="w-12 h-12 rounded-full"
            src="https://media.discordapp.net/attachments/714891795129171983/1102445653050789928/user.png"
          />
          <span class="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
            <svg
              aria-hidden="true"
              class="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
        <div class="ml-3 text-sm font-normal">
          <div class="text-sm font-semibold text-gray-900 ">
            {props.username}
          </div>
          <div class="text-sm font-normal">{props.message}</div>
          <span class="text-xs font-medium text-blue-600 ">{props.time}</span>
        </div>
      </div>
      <div className="mt-4">
        <Divider />
      </div>
    </div>
  );

  return <div>{messageNotification}</div>;
};
export default Notification;
