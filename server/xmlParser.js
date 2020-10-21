const xml2js = require("xml2js");
const fs = require('fs');

const parseXml = path =>
  new Promise((resolve, reject) => {
    const parser = new xml2js.Parser();
    fs.readFile(`${__dirname}${path}`, (err, data) => {
      parser.parseString(data, (parseErr, result) => {
        if (parseErr) {
          return reject(parseErr);
        }
        return resolve(result);
      });
    });
  });

module.exports = parseXml;