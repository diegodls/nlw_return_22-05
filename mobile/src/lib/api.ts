import axios from "axios";

const API_URL = ""; 
//When running locally, we use the ip of the pc that is running ours server, to see your ip, open a terminal and type "ipconfig" on windows or "ifconfig" on linux/mac(without quotes).

export const api = axios.create({
  baseURL: `${API_URL}`,
});
