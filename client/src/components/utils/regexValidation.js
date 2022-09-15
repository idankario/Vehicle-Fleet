export function isLicensePlate(licensePlate) {
  if (/^[0-9]||[a-z]||[A-Z]{4,8}$/.test(licensePlate)) return "";
  return "Please enter a valid license plate";
}

export function isModel(model) {
  if (/^[0-9]||[a-z]||[A-Z]{4,8}$/.test(model)) return "";
  return "Please enter a valid israel Number Address";
}
export function isName(name) {
  if (
    // eslint-disable-next-line no-useless-escape
    /(^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z][a-zA-Z0-9._]+(?<![_.])$)/.test(
      name
    )
  )
    return "";
  return "Please enter a valid name";
}

export async function checkFormVehicle(data, setError) {
  // eslint-disable-next-line camelcase
  const { phone_number, username } = data;

  const ePhone = isLicensePlate(phone_number);

  const eUsername = isName(username);
  setError({
    eUsername,

    ePhone,
  });

  if (eUsername.length || ePhone.length) return 0;
  return 1;
}
