var faker = require("faker");

module.exports={

  

  // app.get("/", function (req, res) {
  //   res.status(200).send({ message: 'Goku can beat up Superman!' });
  // });

  users: (req, res) => {
    var data = ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      username: faker.internet.userName(),
      email: faker.internet.email()
    });
    res.status(200).send(data);
  }


}