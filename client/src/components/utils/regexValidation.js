export function isLicensePlate(licensePlate) {
  if (/^[0-9]||[a-z]||[A-Z]{4,8}$/.test(licensePlate)) return "";
  return "Please enter a valid license plate";
}

export function isModel(model) {
  if (/^[0-9]||[a-z]||[A-Z]{4,8}$/.test(model)) return "";
  return "Please enter a valid israel Number Address";
}

export async function checkFormVehicle(data, setError) {
  // eslint-disable-next-line camelcase
  const { model, manufacturers } = data;

  const eModel = isModel(model);
  const eLicensePlate = isLicensePlate(manufacturers);
  setError({
    eModel,
    eLicensePlate,
  });
  if (eModel.length || eLicensePlate.length) return 0;
  return 1;
}
