import axios from "axios";

// usually I make some service and from one place I handle
// all requests and I have more input fields in *request* function
// to make easier handling
const request = async (typeOfRequest: string, object = {}) => {
  let response = null;
  const url = "https://cyrap.com/football_data.json";

  if (typeOfRequest === "GET") {
    try {
        // for some reason here I have problem with CORS maybe on this route is not
        // supported but I use some other request to show you that I know to use this
        // if this is ok for you
        //
        //await axios
        //         .get(url, {
        //           headers: {
        //             "Access-Control-Allow-Origin": "*",
        //             "Content-Type" : "application/x-www-form-urlencoded",
        //             "Access-Control-Allow-Methods": "GET"
        //           },
        //           proxy: {
        //             host: '104.236.174.88',
        //             port: 3128
        //           }
        //         })
        //         .then(resp => {
        //           console.log(resp)
        //           response = resp;
        //         });
        // response = await fetch(url)
        //     .then(response => response.text())
        //     .then(contents => console.log(contents))

        await axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(resp => (response = resp))

        return response

        return response;
    } catch (e) {
      console.log("GET Error:", e);
    }
  }
};

export default request;
