describe("Address", function() {
  describe("fullAddress", function() {
    it("returns the full address with nice formatting", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "123 4th Ave";
      testAddress.city = "Portland";
      testAddress.state = "Oregon";
      testAddress.zipCode = "97217";
      testAddress.fullAddress().should.equal("123 4th Ave, Portland, Oregon 97217");
    });
  });
});

describe("PhoneNumber", function() {
  describe("valid", function() {
    it("returns true if the phone number is 10 characters long", function() {
      var testNumber = Object.create(PhoneNumber);
      testNumber.number = "1234567890";
      testNumber.valid().should.equal(true);
    });
    it("returns false if the phone number is not 10 characters long", function() {
      var testNumber = Object.create(PhoneNumber);
      testNumber.number = "123456789";
      testNumber.valid().should.equal(false);
    });
    it("returns false if the phone number contains non-number characters", function() {
      var testNumber = Object.create(PhoneNumber);
      testNumber.number = "123456789v";
      testNumber.valid().should.equal(false);
    });
  });
});
describe("Address", function() {
  describe("valid", function() {
    it("returns true if the zip code is 5 characters long", function() {
      var testAddress = Object.create(Address);
      testAddress.zipCode = "12345";
      testAddress.street = " ";
      testAddress.city = "Portland";
      testAddress.state = "OR";
      testAddress.valid().should.equal(true);
    });
    it("returns false if the zip code is not 5 characters long", function() {
      var testAddress = Object.create(Address);
      testAddress.zipCode = "12345435";
      testAddress.street = " ";
      testAddress.city = "Portland";
      testAddress.state = "OR";
      testAddress.valid().should.equal(false);
    });
    it("returns false if the zip code has any characters other than numbers", function() {
      var testAddress = Object.create(Address);
      testAddress.zipCode = "123r5";
      testAddress.street = " ";
      testAddress.city = "Portland";
      testAddress.state = "OR";
      testAddress.valid().should.equal(false);
    });
    it("returns true if the street input is not blank", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "43 jfd";
      testAddress.city = "Portland";
      testAddress.state = "OR";
      testAddress.zipCode = "12345";
      testAddress.valid().should.equal(true);
    });
    it("returns false if the street input is blank", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "";
      testAddress.city = "Portland";
      testAddress.state = "OR";
      testAddress.zipCode = "12345";
      testAddress.valid().should.equal(false);
    });
    it("returns true if the city input is not blank", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "43 jfd";
      testAddress.city = "Portland";
      testAddress.state = "OR";
      testAddress.zipCode = "12345";
      testAddress.valid().should.equal(true);
    });
    it("returns false if the city input is blank", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "Bold St.";
      testAddress.city = "";
      testAddress.state = "OR";
      testAddress.zipCode = "12345";
      testAddress.valid().should.equal(false);
    });
    it("returns false if the city input any numbers", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "Bold St.";
      testAddress.city = "Portland3";
      testAddress.state = "OR";
      testAddress.zipCode = "12345";
      testAddress.valid().should.equal(false);
    });
    it("returns true if the state input is not blank", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "43 jfd";
      testAddress.city = "Portland";
      testAddress.state = "OR";
      testAddress.zipCode = "12345";
      testAddress.valid().should.equal(true);
    });
    it("returns false if the state input is blank", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "Bold St.";
      testAddress.city = "Portland";
      testAddress.state = "";
      testAddress.zipCode = "12345";
      testAddress.valid().should.equal(false);
    });
    it("returns false if the state input any numbers", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "Bold St.";
      testAddress.city = "Portland";
      testAddress.state = "O3R";
      testAddress.zipCode = "12345";
      testAddress.valid().should.equal(false);
    });
  });
});  
