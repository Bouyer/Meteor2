/**
* Templates
*/

emaiLogin="Anonymous";

Template.messages.messages = function() {
  return Messages.find({}, { sort: { time: -1 }});
}

Template.utilisateurs.utilisateurs = function() {
  return Utilisateurs.find();
}


Template.register.events({
  'submit #register-form' : function(e, t) {
    e.preventDefault();
    var email = t.find('#account-email').value
    , password = t.find('#account-password').value;

    // Trim and validate the input
    var email = trimInput(email);

    if (isValidPassword(password)){
      Utilisateurs.insert({email: email, password : password}, function(err){
        if (err) {
          // Inform the user that account creation failed
        } else {
          // Success. Account has been created and the user
          // has logged in successfully. 
        }
      
      });
    }
  return false;

  }
});


Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      if (emaiLogin === "Anonymous" & emaiLogin === "")
        var emaiLogin = "Anonymous";
      var message = document.getElementById('message');

      if (message.value != '') {
        Messages.insert({
          name: emaiLogin,
          message: message.value,
          time: Date.now(),
        });

        document.getElementById('message').value = '';
        message.value = '';
      }
    }
  }
}



Template.login.events({
  'submit #login-form' : function(e, t){
    e.preventDefault();
    // retrieve the input field values
    var emaill = t.find('#login-email').value
    , passwordd = t.find('#login-password').value;

    // Trim and validate your fields here.... 

    // If validation passes, supply the appropriate fields to the
    // Meteor.loginWithPassword() function.
    var User=Utilisateurs.findOne({email:emaill});
    if(User.password === password )
      emaiLogin = email;
  }
});

var trimInput = function(val) {
  return val.replace(/^\s*|\s*$/g, "");
}

var isValidPassword = function(val) {
  if (val.length<= 6) {
    return true;
  } else {
    Session.set('displayMessage', 'Error &amp; Too short.')
    return false; 
  }
}







