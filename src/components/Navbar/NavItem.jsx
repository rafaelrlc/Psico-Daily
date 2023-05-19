import React from "react";

export const NavItem = (props) => {
  return (
    <li
      onClick={() => props.action()}
      className="hover:cursor-pointer hover:rotate-[-2deg] "
    >
      <a className="block rounded hover:text-gray-300 p-2">{props.label}</a>
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
          <Icon size={props.size ? props.size : 20} />
        ) : (
          <img src={props.src} className="w-[50px] text-white" />
        )}
        <a className="block rounded hover:text-gray-300">{props.label}</a>
      </div>
    </li>
  );
};
