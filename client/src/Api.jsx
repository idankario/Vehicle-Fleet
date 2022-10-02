const APIURL = `https://localhost:7027/api/Vehicles`;

export async function getListVehicle() {
  const res = await fetch(`${APIURL}`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}

export async function deleteVehicle(licensePlate) {
  const res = await fetch(`${APIURL}/${licensePlate}`, {
    method: "DELETE",
    // headers: new Headers({
    //   Authorization: localStorage.getItem("token"),
    // }),
  });
  const json = await res.json();
  return json;
}

export async function updateVehicle(data, licensePlate) {
  const res = await fetch(`${APIURL}/${licensePlate}`, {
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json;
}

export async function createVehicle(data) {
  const res = await fetch(`${APIURL}`, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return json;
}
