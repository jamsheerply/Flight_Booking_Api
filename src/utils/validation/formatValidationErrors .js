const formatValidationErrors = (errorsArray) => {
  return errorsArray.map((error) => error.msg).join(",");
};

module.exports = formatValidationErrors;
