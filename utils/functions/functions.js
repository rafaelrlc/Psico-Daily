export const formatData = (data) => {
  const formattedData = data.map((item) => {
    const startDate = new Date(item.startDate);
    console.log(startDate);
    const hora = startDate.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const diaFormatado = startDate.toLocaleString("en-US", {
      day: "2-digit",
    });

    const mesFormatado = startDate.toLocaleString("en-US", {
      month: "2-digit",
    });

    const formattedItem = {
      ...item,
      startDate: `${diaFormatado}/${mesFormatado} às ${hora}`,
      dia: diaFormatado,
      hora: hora,
      mes: mesFormatado,
    };
  });

  return formattedData;
};

export function combineDateTime(dateString, timeString) {
  const date = new Date(dateString);
  const time = new Date(timeString);

  const combinedDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    time.getHours(),
    time.getMinutes(),
    time.getSeconds(),
    time.getMilliseconds()
  );

  return combinedDate;
}
