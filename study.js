async function AddData() {
  let endpoint = "https://jsonplaceholder.typicode.com/users";
  const request = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-Type": "application/json" },
  });

  const response = await fetch(request);
  console.log(response);
}
AddData();
const data = { username: "John Snow", age: 22 };
