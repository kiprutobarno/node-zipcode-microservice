import * as properties from '../../package.json';
import distance from '../service/distance';

const controller = {
  about: (req, res) => {
    const aboutInfo = {
      name: properties.name,
      version: properties.version
    };
    return res.json(aboutInfo);
  },
  getDistance: (req, res) => {
    distance.find(req, res, (err, dist) => {
      if (err) res.send(err);
      return res.json(dist);
    });
  }
};

export default controller;
