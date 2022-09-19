const APIURL = `http://localhost:28407/api/Vehicle`;

export async function getListVehicle() {
  const res = await fetch(`${APIURL}`, {
    method: "GET",
  });
  const json = await res.json();
  return json;
}

export async function deleteVehicle(id) {
  const res = await fetch(`${APIURL}${id}`, {
    method: "DELETE",
    // headers: new Headers({
    //   Authorization: localStorage.getItem("token"),
    // }),
  });
  const json = await res.json();
  return json;
}

export async function updateVehicle(id, data) {
  const res = await fetch(`${APIURL}`, {
    method: "PUT",
    // headers: new Headers({
    //   Authorization: localStorage.getItem("token"),
    // }),
    data,
  });
  const json = await res.json();
  return json;
}

export async function createVehicle(data) {
  const res = await fetch(`${APIURL}/Vehicle`, {
    method: "POST",
    // headers: new Headers({
    //   Authorization: localStorage.getItem("token"),
    // }),
    data,
  });
  const json = await res.json();
  return json;
}
