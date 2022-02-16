export const validateTitle = (value: string): [boolean, string[]] => {
  let isValid = true,
    errors = [];
  if (value.length === 0) {
    isValid = false;
    errors.push("Title cannot be empty");
  }
  return [isValid, errors];
};

export const validateText = (value: string): [boolean, string[]] => {
  let isValid = true,
    errors = [];

  const extraCharacters = value.length - 1000;
  if (extraCharacters > 0) {
    isValid = false;
    errors.push(`Text contains ${extraCharacters} extra characters`);
  }
  return [isValid, errors];
};
