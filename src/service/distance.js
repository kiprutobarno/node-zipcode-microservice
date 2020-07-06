import request from 'request';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.ZIPCODE_API_KEY;
const zipCodeUrl = 'https://www.zipcodeapi.com/rest/';

const distance = {
  find: (req, res) => {
    request(
      `${zipCodeUrl + apiKey}/distance.json/${req.params.zipcode1}/${
        req.params.zipcode2
      }/mile`,
      (error, response, body) => {
        if (!error && response.statusCode === 200) {
          res.send(JSON.parse(body));
        } else {
          res.status(response.statusCode).send(response.body);
        }
      }
    );
  }
};

export default distance;
