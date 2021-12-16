import axios from "axios";
const API: string = "https://api.exchangerate.host";

export async function getAllRates(baseCurrency: string) {
  const response = await axios
    .get(`${API}/latest?base=${baseCurrency}`)
    .then((response) => response || {});

  if (response.status !== 200) {
    throw new Error(response.statusText || "Could not fetch currency.");
  }
  
  return response.data;
}

export async function getSingleRate(from: string, to: string, amount: number) {
  const response = await axios
    .get(`${API}/convert?from=${from}&to=${to}&amount=${amount}`)
    .then((response) => response || {});

  if (response.status !== 200) {
    throw new Error(response.statusText || "Could not fetch currency.");
  }

  return response.data;
}
