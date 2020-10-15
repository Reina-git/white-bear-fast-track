$("#save-card").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
   // console.log("Here are the most insecure passwords:", mostInsecurePasswords);
});
// make the error message show up and go away when clicked
$("#back-card").click(function () {
   $("#overlay-error").toggleClass("d-flex d-none");
});

$("#show-delete").click(function () {
   $("#delete-button").toggleClass("d-flex d-none");
});

$("#sign-up-button").click(function () {
   $("#sign-up-card").toggle();
   $("#sign-up-button").toggleClass("d-flex d-none");
});
// create-imagery charachter counter
$("#create-imagery-input").keyup(function (e) {
   // get the text from the textarea
   const text = e.target.value;
   // check the length of the text
   const textLength = text.length;
   if (textLength > 240 || textLength === 0) {
      document.getElementById("save-card").disabled = true;
      document.getElementById("char-count").classList.add("text-danger");
      document.getElementById("char-count").classList.remove("text-muted");
   } else {
      document.getElementById("save-card").disabled = false;
      document.getElementById("char-count").classList.add("text-muted");
   }
   //update the character counter on the page
   $("#imagery-char-count").html(textLength);
});

// create-answer charachter counter
$("#create-answer-input").keyup(function (e) {
   // get the text from the textarea
   const text = e.target.value;

   // check the length of the text
   const textLength = text.length;
   if (textLength > 240 || textLength === 0) {
      $("#save-card").addClass("disabled");
      document.getElementById("char-count").classList.add("text-danger");
      document.getElementById("char-count").classList.remove("text-muted");
   } else {
      document.getElementById("save-card").disabled = false;
      document.getElementById("char-count").classList.add("text-muted");
   }

   $("#answer-char-count").html(textLength);
});

// $("#edit-cards-total").log(function (e) {
//    $("#edit-imagery-input").keyup(function (e) {
//       console.log("Event: ", e);
//       const text = e.target.value;
//       $("#edit-imagery-char-count").html(textLength);
//    });
// });

$("#edit-imagery-input, #edit-answer-input").keyup(function () {
   const imageryInput = $("#edit-imagery-input").val();
   const answerInput = $("#edit-answer-input").val();
   if (imageryInput.length > 240) {
      $("#edit-imagery-char-count").addClass("text-danger");
   } else {
      $("#edit-imagery-char-count").removeClass("text-danger");
   }
   if (answerInput.length > 240) {
      $("#edit-answer-char-count").addClass("text-danger");
   } else {
      $("#edit-answer-char-count").removeClass("text-danger");
   }
   if (
      imageryInput.length > 0 &&
      imageryInput.length <= 240 &&
      answerInput.length > 0 &&
      answerInput.length <= 240
   ) {
      $("#edit-save-card").removeClass("disabled");
   } else {
      $("#edit-save-card").addClass("disabled");
   }
   $("#edit-imagery-char-count").html(imageryInput.length);
   $("#edit-answer-char-count").html(answerInput.length);
});

$("#letsGoButton").click(function () {
   const emailInput = $("#email-sign-up").val();
   const passwordInput = $("#password-sign-up").val();
   const lowerCasedPassword = passwordInput.toLowerCase();
   const trimmedEmail = emailInput.trim();
   const lowerCasedEmail = trimmedEmail.toLowerCase();
   // can do multiple string methods in one line to one constant
   const normalizedEmail = emailInput.trim().toLowerCase();
   const delimiter = `@`;
   const indexOfEmail = lowerCasedEmail.indexOf(delimiter);
   const localEmail = emailInput.slice(0, indexOfEmail);

   // console.log(`the local part of ${emailInput} is ${localEmail}.`);

   // combine mostInsecurePasswords and secondMostInsecurePasswords

   const allPasswords = [
      ...mostInsecurePasswords,
      ...secondMostInsecurePasswords,
   ].flat();
   const allUniqPasswords = [...new Set(allPasswords)];

   const firstPasswords = allUniqPasswords.slice(
      0,
      allUniqPasswords.indexOf("skywalker")
   );

   const secondPasswords = allUniqPasswords.slice(
      allUniqPasswords.indexOf("skywalker") + 1,
      allUniqPasswords.indexOf("obama2016")
   );

   const thirdPasswords = allUniqPasswords.slice(
      allUniqPasswords.indexOf("obama2016") + 1
   );

   const firstAndSecondPassowords = firstPasswords.concat(secondPasswords);
   const unacceptablePasswords = firstAndSecondPassowords.concat(
      thirdPasswords
   );
   console.log(unacceptablePasswords);

   if (emailInput.length < 1) {
      $("#email-error").removeClass("d-none");
      $("#email-error").html(" Please enter your email address.");
      $("#email-sign-up").addClass("is-invalid");
   } else {
      $("#email-error").addClass("d-none");
      $("#email-sign-up").removeClass("is-invalid");
      // console.log(`The trimmed and normalized email is ${localEmail}.`);
   }
   // If there is no password then error message and red input box
   if (passwordInput.length === 0) {
      $("#password-error").removeClass("d-none");
      $("#password-error").html("Please create a password.");
      $("#password-sign-up").addClass("is-invalid");

      // If the password is too short, then error message and red box but not other error messages
   } else if (passwordInput.length < 9) {
      $("#password-error").html("Your password must be at least 9 characters.");
      $("#password-sign-up").addClass("is-invalid");
      $("#password-error").removeClass("d-none");

      // if the password is the same as the first part/ local of the email address and the local part
      // is longer than 4 characters then error message and red box but not all other errors
   } else if (
      lowerCasedPassword.includes(localEmail) &&
      localEmail.length >= 4
   ) {
      $("#password-error").removeClass("d-none");
      $("#password-error").html(
         "All or part of your email address cannot be used in your password."
      );
      $("#password-sign-up").addClass("is-invalid");
   } else if (unacceptablePasswords.includes(lowerCasedPassword)) {
      $("#password-error").removeClass("d-none");
      $("#password-error").html(
         `Your password contains a commonly used password, ${passwordInput} can be easily discovered by attackers. Please use something else.`
      );
      $("#password-sign-up").addClass("is-invalid");
      // else no error messages or red boxes
   } else {
      $("#email-error").addClass("d-none");
      $("#password-error").addClass("d-none");
      $("#differentPassword").addClass("d-none");
      $("#password-sign-up").removeClass("is-invalid");
   }
});
