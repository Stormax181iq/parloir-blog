export default function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const pad = (num) => num.toString().padStart(2, "0");

  return `${pad(day)}/${pad(month)}/${year} ${pad(hours)}:${pad(minutes)}`;
}
