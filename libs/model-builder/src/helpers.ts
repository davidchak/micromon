export const generateNewId = () => {
  return Math.round(Math.random() * 10000000000).toString();
}
