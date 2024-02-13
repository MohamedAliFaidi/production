const EMAIL_REGEX=/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const validateEmail = (email) => {
    if (email.match(EMAIL_REGEX)) {
      return true;
    }
    return false;
  };


const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_MAX_LENGTH = 30;
const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const validatePasword = (password) => {
  // TODO add more password validation
  if (!PASSWORD_REGEX.test(password)) {
    return false;
  } else if (
    password.length < PASSWORD_MIN_LENGTH ||
    password.length > PASSWORD_MAX_LENGTH
  ) {
    return false;
  }
  return true;
};

