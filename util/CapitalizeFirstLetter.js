export const CapitalizeFirstLetter = (word) => {
  if (!word?.length) {
    return;
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
};
