import request from "request";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.ZIPCODE_API_KEY;
const zipCodeUrl = process.env.URL;

let distance = {
  find: (req, res, next) => {
    request(
      zipCodeUrl +
        apiKey +
        "/distance.json/" +
        req.params.zipcode1 +
        "/" +
        req.params.zipcode2 +
        "/mile",
      (error, response, body) => {
        if (!error && response.statusCode == 200) {
          response = JSON.parse(body);
          res.send(response);
        } else {
          console.log(response.statusCode + response.body);
          res.send(response.body);
        }
      }
    );
  },
};

export default distance;
