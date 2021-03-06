import axios from "axios";

export const getHelloWorld = async (uri: string) => {
  const { data } = await axios.get(`http://${uri}:8000/`);
  console.log(data);
  return String(data);
};
