export const options = {
  title: "",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-gray-100 ",
    todayBtn: "",
    clearBtn: "bg-gray-200 border-none hover:bg-gray-300",
    icons: "bg-gray-100 hover:bg-gray-100",
    text: "hover:text-indigo-700",
    disabledText: "",
    input: "",
    inputIcon: "",
    selected: "bg-indigo-700",
  },
  icons: {
    prev: () => <span className="text-sm">{"<"}</span>,
    next: () => <span className="text-sm">{">"}</span>,
  },
  datepickerclassNames: "sm:top-20 top-0 ",
  defaultDate: null,
  language: "pt-BR",
};
