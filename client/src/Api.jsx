const APIURL = `http://localhost:3000`;

export async function getListVehicle() {
  // const res = await fetch(`${APIURL}/ListVehicle`, {
  //   method: "GET",
  //   // headers: new Headers({
  //   //   Authorization: localStorage.getItem("token"),
  //   // }),
  // });
  // const json = await res.json();
  return "";
}

export async function deleteVehicle(id) {
  const res = await fetch(`${APIURL}/Vehicle/${id()}`, {
    method: "DELETE",
    // headers: new Headers({
    //   Authorization: localStorage.getItem("token"),
    // }),
  });
  const json = await res.json();
  return json;
}

export async function updateVehicle(id, data) {
  const res = await fetch(`${APIURL}/Vehicle/${id()}`, {
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
