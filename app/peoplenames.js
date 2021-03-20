const axios = require("axios");
const calculation = require("./calc.js");

async function getAllPeople() {
  let allPeople = [];
  let nearPeople = [];
  await axios
    .get("https://bpdts-test-app.herokuapp.com/city/London/users")
    .then((response) => {
      const namesData = JSON.parse(JSON.stringify(response.data));
      allPeople = namesData.map((x) => `${x.first_name} ${x.last_name}`);
    })
    .catch((error) => {
      console.error(error);
    });

  await axios
    .get("https://bpdts-test-app.herokuapp.com/users")
    .then((response) => {
      var namesData = JSON.parse(JSON.stringify(response.data));

      namesData.forEach((element) => {
        if (element.latitude && element.longitude) {
          let mile = calculation(element.latitude, element.longitude);
          if (mile <= 50) {
            nearPeople.push(`${element.first_name} ${element.last_name}`);
          }
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });

  return [...allPeople, ...nearPeople];
}

module.exports.getAllPeople = getAllPeople;
