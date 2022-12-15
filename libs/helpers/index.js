export const genId = (prefix) => {
  return `${prefix}_${Math.round(Math.random()*100000)}`;
}