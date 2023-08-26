export const formatMoney = (amount: number) => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

export function getDateTime () {
  const fechaHoraActual = new Date();

  const year = fechaHoraActual.getFullYear()
  const month = String(fechaHoraActual.getMonth() + 1).padStart(2, '0')
  const day = String(fechaHoraActual.getDate()).padStart(2, '0')
  const hours = String(fechaHoraActual.getHours()).padStart(2, '0')
  const minutes = String(fechaHoraActual.getMinutes()).padStart(2, '0')
  const seconds = String(fechaHoraActual.getSeconds()).padStart(2, '0')
  
  const fechaHoraMySQL = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`

  return new Date(fechaHoraMySQL)
}

export function formatDate (datetime: string) {
  const dateObject = new Date(datetime);
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1; // Los meses en JavaScript son base 0, por lo que debemos sumar 1 al resultado
  const year = dateObject.getFullYear();

  // Formatear el día y el mes para asegurarse de que tengan dos dígitos
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}-${formattedMonth}-${year}`;
}