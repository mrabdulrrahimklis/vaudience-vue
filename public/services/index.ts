import axios from "axios";

const request = async (typeOfRequest: string) => {
  const url = "https://cyrap.com/football_data.json";
  let response = null;
  const config = {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    "Postman-Token": "<calculated when request is sent>"
  };

  if (typeOfRequest === "GET") {
    try {
      response = await axios
        .get("https://cyrap.com/football_data.json")
        .then(resp => (response = resp));
      return response;
    } catch (e) {
      console.log("GET Error:", e);
    }
  }
};

export default request;
