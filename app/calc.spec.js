const expect = require("chai").expect;
const calc = require("./calc");

describe("Calc", () => {
  it("should return distance in mile O for London latitude and longitude", () => {
    const lat2_london = 51.5074;
    const lon2_london = 0.1278;

    const result = calc(lat2_london, lon2_london);

    expect(result).to.be.equal(0);
  });
  it("should return distance in mile less than 50 miles for person living in London", () => {
    const lat2 = 50.89417;
    const lon2 = 0.03583;

    const result = calc(lat2, lon2);

    expect(result).to.be.lessThan(50);
  });
  it("should return distance in mile greater than 50 miles for person living out of London", () => {
    const lat2 = 12.89417;
    const lon2 = 9.03583;

    const result = calc(lat2, lon2);

    expect(result).to.be.greaterThan(50);
  });
});
