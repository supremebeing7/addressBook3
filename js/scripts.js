var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  initialize: function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.addresses = [];
    this.phoneNumbers = [];
  },
  all: [],
  create: function(firstName, lastName) {
    var newContact = Object.create(Contact);
    newContact.initialize(firstName, lastName);
    Contact.all.push(newContact);
    return newContact;
  },
  createAddress: function(street, city, state, zip) {
    var newAddress = Address.create(street, city, state, zip);
    this.addresses.push(newAddress);
    return newAddress;
  },
  createPhoneNumber: function(number) {
    var newPhoneNumber = PhoneNumber.create(number);
    this.phoneNumbers.push(newPhoneNumber);
    return newPhoneNumber;
  }
};


var Address = {
  initialize: function(street, city, state, zip) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zipCode = zip;
  },
  all: [],
  create: function(street, city, state, zip) {
    var newAddress = Object.create(Address);
    newAddress.initialize(street, city, state, zip);
    Address.all.push(newAddress);
    return newAddress;
  },
  fullAddress: function() {
    return this.street + ", " + this.city + ", " + this.state + " " + this.zipCode;
  },
  valid: function() {
    var nonNumberRE = /\D/;
    var numberRE = /\d/;
    var validZip = !nonNumberRE.test(this.zipCode) && this.zipCode.length === 5;
    var validStreet = this.street.length > 0;
    var validCity = this.city.length > 0 && !numberRE.test(this.city);
    var validState = this.state.length > 0 && !numberRE.test(this.state);

    return validZip && validStreet && validCity && validState; 
  }
};

var PhoneNumber = {
  all: [],
  create: function(number) {
    var newPhoneNumber = Object.create(PhoneNumber);
    newPhoneNumber.initialize(number);
    PhoneNumber.all.push(newPhoneNumber);
    return newPhoneNumber;
  },
  initialize: function(number) {
    this.number = number;
  },
  formattedNumber: function() {
    return "(" + this.number.slice(0,3) + ") " + this.number.slice(3,6) + "-" + this.number.slice(6);
  },
  valid: function() {
    var re = /\D/;
    return !re.test(this.number) && this.number.length === 10;
  }
};

$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' + 
                                 '<div class="form-group">' + 
                                   '<label for="new-street">Street</label>' + 
                                   '<input type="text" class="form-control new-street">' + 
                                 '</div>' + 
                                 '<div class="form-group">' + 
                                   '<label for="new-city">City</label>' + 
                                   '<input type="text" class="form-control new-city">' + 
                                 '</div>' + 
                                 '<div class="form-group">' + 
                                   '<label for="new-state">State</label>' + 
                                   '<input type="text" class="form-control new-state">' + 
                                 '</div>' + 
                                 '<div class="form-group">' + 
                                   '<label for="new-zip-code">Zip Code</label>' + 
                                   '<input type="text" class="form-control new-zip-code">' + 
                                 '</div>' + 
                               '</div>');
  });

  $("#add-phone-number").click(function() {
    $("#new-phone-numbers").append('<div class="new-phone-number">' +
                                      '<div class="form-group">' +
                                        '<label for="new-number">Phone Number</label>' +
                                        '<input type="text" class="form-control new-number">' +
                                      '</div>' +
                                    '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var invalidInputCounter = 0;
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = Contact.create(inputtedFirstName, inputtedLastName);
   
    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedZipCode = $(this).find("input.new-zip-code").val();

      var newAddress = newContact.createAddress(inputtedStreet, inputtedCity, inputtedState, inputtedZipCode);
      

      if(!newAddress.valid()){
        invalidInputCounter ++;
        alert(newAddress.fullAddress() + " is not a valid address!  Please correct and re-enter");
      }

    });

    $(".new-phone-number").each(function() {
      var inputtedPhoneNumber = $(this).find("input.new-number").val();
      var newPhoneNumber = newContact.createPhoneNumber(inputtedPhoneNumber);
      

      if(!newPhoneNumber.valid()){
        invalidInputCounter ++;
        alert(newPhoneNumber.number + " is not a valid phone number! Please correct and re-enter.");
      } 

 
    })

    if(invalidInputCounter === 0) {
      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");      

      //Ask about this being within/outside of if test.
      $(".contact").last().click(function() {
        $("#show-contact").show();

        $("#show-contact h2").text(newContact.fullName());
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);

        $("ul#addresses").text("");
        newContact.addresses.forEach(function(address) {
          $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
        });

        $("ul#phone-numbers").text("");
        newContact.phoneNumbers.forEach(function(phoneNumber) {
          $("ul#phone-numbers").append("<li>" + phoneNumber.formattedNumber() + "</li>");
        });
      });

      this.reset();
    }
  });
});
