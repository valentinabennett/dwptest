let expect = require("chai").expect;
const nock = require("nock");
const london = require("../app/peoplenames.js");

describe("PeopleNames", () => {
  beforeEach(() => {
    const response = ["Cat Green", "Dog Red"];

    nock("https://bpdts-test-app.herokuapp.com")
      .get("/city/London/users")
      .reply(200, response);

    nock("https://bpdts-test-app.herokuapp.com")
      .get("/users")
      .reply(200, response);
  });

  it("should return people of London", () => {
    const names = london.getAllPeople();

    expect(names).to.be.not.null;
    return names.then((people) => {
      expect(people).to.have.length(2);
    });
  });
});
