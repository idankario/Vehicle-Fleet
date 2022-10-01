export function isLicensePlate(licensePlate) {
  if (/^[A-Za-z0-9]{4,8}$/.test(licensePlate)) return "";
  return "Please enter a valid license plate";
}

export function isModel(model) {
  if (/^[A-Za-z0-9]{4,8}$/.test(model)) return "";
  return "Please enter a valid israel Number Address";
}

export async function checkFormVehicle(data, setError) {
  // eslint-disable-next-line camelcase
  const { model, licensePlate } = data;

  const eModel = isModel(model);
  const eLicensePlate = isLicensePlate(licensePlate);
  setError({
    eModel,
    eLicensePlate,
  });
  if (eModel.length || eLicensePlate.length) return 0;
  return 1;
}
