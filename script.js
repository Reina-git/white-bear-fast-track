$("#save-card").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

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
   if (textLength > 240 || textLength < 1) {
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
   if (textLength > 240 || textLength < 1) {
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

// $("#edit-imagery-input, #edit-answer-input").keyup(function () {
//    const imageryInput = $("#edit-imagery-input").val();
//    const answerInput = $("#edit-answer-input").val();
//    const imageryTextLength = text.length;
//    const answerTextLength = text.length;

//    $("#edit-answer-char-count").html(answerTextLength);
//    $("#edit-imagery-char-count").html(imageryTextLength);
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
   const delimiter = `@`;
   const indexOfEmail = lowerCasedEmail.indexOf(delimiter);
   const localEmail = emailInput.slice(0, indexOfEmail);
   // console.log(`the local part of ${emailInput} is ${localEmail}.`);

   if (emailInput.length < 1) {
      $("#enterEmail").removeClass("d-none");
      $("#email-sign-up").addClass("is-invalid");
   } else {
      $("#enterEmail").addClass("d-none");
      $("#email-sign-up").removeClass("is-invalid");
      // console.log(`The trimmed and normalized email is ${localEmail}.`);
   }

   if (passwordInput.length === 0) {
      $("#enterPassword").removeClass("d-none");
      $("#password-sign-up").addClass("is-invalid");
   } else if (passwordInput.length < 9 && passwordInput.length > 0) {
      $("#passwordLenth").removeClass("d-none");
      $("#password-sign-up").addClass("is-invalid");
      $("#enterPassword").addClass("d-none");
      $("#differentPassword").addClass("d-none");
   } else if (
      lowerCasedPassword.includes(localEmail) &&
      localEmail.length >= 4
   ) {
      $("#differentPassword").removeClass("d-none");
      $("#password-sign-up").addClass("is-invalid");
   } else {
      $("#enterPassword").addClass("d-none");
      $("#passwordLenth").addClass("d-none");
      $("#differentPassword").addClass("d-none");
      $("#password-sign-up").removeClass("is-invalid");
   }
});
