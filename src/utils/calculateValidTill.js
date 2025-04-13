export const calculateValidTill = (duration) => {
  const months = parseInt(duration, 10);
  const date = new Date();
  date.setMonth(date.getMonth() + months);
  return date.toISOString().split("T")[0];
};
