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
  describe("initialize", function() {
    it("initializes phone numbers", function() {
      var testNumber = Object.create(PhoneNumber);
      testNumber.initialize("1234567890");
      testNumber.number.should.equal("1234567890");
    });
  });
  describe("create", function() {
    it("creates a phone number", function() {
      var testNumber = PhoneNumber.create("1234567890");
      PhoneNumber.isPrototypeOf(testNumber).should.equal(true);
      testNumber.number.should.equal("1234567890");
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
  describe("initialize", function() {
    it("initializes an address object", function() {
      var testAddress = Object.create(Address);
      testAddress.initialize("1 First St.", "Portland", "OR", "97217");
      testAddress.street.should.equal("1 First St.");
      testAddress.city.should.equal("Portland");
      testAddress.state.should.equal("OR");
      testAddress.zipCode.should.equal("97217");
    });
  });
});  

describe("Contact", function() {
  describe("initialize", function() {
    it("initializes a Contact object", function() {
      var testContact = Object.create(Contact);
      testContact.initialize("Bob", "Johnson")
      testContact.firstName.should.equal("Bob");
      testContact.lastName.should.equal("Johnson");
      testContact.addresses.should.eql([]);
    });
  });
  describe("create", function() {
    it("creates a Contact object", function() {
      var testContact = Contact.create();
      Contact.isPrototypeOf(testContact).should.equal(true);
    });
  });
  describe("createAddress", function() {
    it("creates an address object", function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      Address.isPrototypeOf(testAddress).should.equal(true);
    });

    it("adds the address to the addresses property of the contact", function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      testContact.addresses.should.eql([testAddress]);
    });
  });
  describe("createPhoneNumber", function() {
    it("creates a phone number object", function() {
      var testContact = Contact.create();
      var testPhoneNumber = testContact.createPhoneNumber();
      PhoneNumber.isPrototypeOf(testPhoneNumber).should.equal(true);
    });
  });
});
