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
      document.getElementById("save-card").disabled = true;
      document.getElementById("char-count").classList.add("text-danger");
      document.getElementById("char-count").classList.remove("text-muted");
   } else {
      document.getElementById("save-card").disabled = false;
      document.getElementById("char-count").classList.add("text-muted");
   }

   // if (textLength > 240 || textLength < 1) {
   //    document.getElementById("save-card").disabled = true;
   //    $("#create-answer-char").toggleClass("text-danger text-muted");
   // } else {
   //    document.getElementById("save-card").disabled = false;
   // }
   //update the character counter on the page

   $("#answer-char-count").html(textLength);
});

// let createAnswerInputCharsCount = 0;

// $("#create-answer-input").keypress(function () {
//    console.log("let's add 1");
//    createAnswerInputCharsCount += 1;

//    console.log("Total inputted chars: ", createAnswerInputCharsCount);
//    $("#answer-char-count").html(createAnswerInputCharsCount);
// });

// let editImageryInputCharsCount = 0;

// $("#edit-imagery-input").keypress(function () {
//    console.log("let's add 1");
//    editImageryInputCharsCount += 1;

//    console.log("Total inputted chars: ", editImageryInputCharsCount);
//    $("#edit-imagery-char-count").html(editImageryInputCharsCount);
// });

// let editAnswerInputCharsCount = 0;

// $("#edit-answer-input").keypress(function () {
//    console.log("let's add 1");
//    editAnswerInputCharsCount += 1;

//    console.log("Total inputted chars: ", editAnswerInputCharsCount);
//    $("#edit-answer-char-count").html(editAnswerInputCharsCount);
// });

// edit-imagery charachter counter
// $("#edit-imagery-input").keyup(function (e) {
//    console.log("Event: ", e);

//    // get the text from the textarea
//    const text = e.target.value;

//    // check the length of the text
//    const textLength = text.length;

//    if (textLength > 240 || textLength < 1) {
//       console.log("you are over 250 characters");

//       document.getElementById("save-card").disabled = true;
//       $("#Top-Bottom-Counter").toggleClass("text-danger text-muted");
//    } else {
//       document.getElementById("save-card").disabled = false;
//    }

//    //update the character counter on the page

//    $("#edit-imagery-char-count").html(textLength);
// });

// edit-answer charachter counter
$("#edit-answer-input, #edit-imagery-input").keyup(function (e) {
   console.log("Event: ", e);

   // get the text from the textarea
   const text = e.target.value;

   // check the length of the text
   const textLength2 = text.length;
   const textLength = text.length;

   if (textLength2 > 240 || textLength2 < 1) {
      console.log("you are over 250 characters");

      document.getElementById("save-card").disabled = true;
      $("#Top-Bottom-Counter").toggleClass("text-danger text-muted");
   } else {
      document.getElementById("save-card").disabled = false;
   }

   //update the character counter on the page
   $("#edit-imagery-char-count").html(textLength);
   $("#edit-answer-char-count").html(textLength2);
});
