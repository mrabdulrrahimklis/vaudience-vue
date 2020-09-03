import axios from "axios";

const request = async (typeOfRequest: string) => {
  let response = null;
  const url = "https://cyrap.com/football_data.json";

  if (typeOfRequest === "GET") {
    try {
      await axios
        .get(url, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type" : "application/x-www-form-urlencoded",
            "Access-Control-Allow-Methods": "GET"
          },
          proxy: {
            host: '104.236.174.88',
            port: 3128
          }
        })
        .then(resp => {
          console.log(resp)
          response = resp;
        });
      return response;
    } catch (e) {
      console.log("GET Error:", e);
    }
  }
};

export default request;
