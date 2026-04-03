const API_ENDPOINT = "https://witzapi.de/api/joke";

export async function fetchJoke() {
  const res = await fetch(API_ENDPOINT);
  const data = await res.json();
  console.log(data);
  return data[0].text;
}
