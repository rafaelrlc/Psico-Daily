import React, { useState } from "react";
import { useAuth } from "@/context/auth/authProvider";
import useConfig from "../../../../utils/functions/useConfig";

const UserImage = () => {
  const { accessToken } = useAuth();

  const [image, setImage] = useState(null);

  const config = useConfig(accessToken);

  const submitHandler = () => {
    // Perform the API call to change the picture using the selected image
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
    console.log(image);
  };

  const fileInputText = image ? image.name : "Alterar";

  return (
    <div className="pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Perfil Público
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-6">
        <div className="col-span-full">
          <label
            htmlFor="about"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Sobre
          </label>
          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              rows="3"
              placeholder="Fale um pouco sobre você..."
              className="block w-full  p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-[0.9rem] sm:leading-6"
            ></textarea>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Fale um pouco sobre você.
          </p>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Foto de Perfil
          </label>
          <div className="mt-2 flex items-center justify-between gap-x-3">
            <div className="flex gap-3 items-center">
              <svg
                className="h-12 w-12 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="relative">
                <input
                  type="file"
                  name="image"
                  onChange={handleFileUpload}
                  className="absolute w-full h-full opacity-0 cursor-pointer"
                />
                <span className="rounded-md bg-white px-2.5 py-1.5 max-h-[30px] text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  {fileInputText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserImage;
