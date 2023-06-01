import React from "react";

export const NavItem = (props) => {
  return (
    <li
      onClick={() => props.action()}
      className="hover:cursor-pointer hover:rotate-[-2deg] "
    >
      <a className="block rounded hover:text-gray-200 p-2 text-base text-white font-light">
        {props.label}
      </a>
    </li>
  );
};

export const NavItemIcon = (props) => {
  const Icon = props.icon;
  return (
    <li
      onClick={() => props.action()}
      className="hover:cursor-pointer hover:rotate-[-2deg] "
    >
      <div className="flex items-center gap-4">
        {props.icon ? (
          <Icon className="text-2xl sm:text-lg" />
        ) : (
          <img src={props.src} className="w-[45px] text-white" />
        )}
        <a className="md:block hidden rounded hover:text-gray-300 font-light ">
          {props.label}
        </a>
      </div>
    </li>
  );
};
