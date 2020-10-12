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

let createImageryInputCharsCount = 0;

$("#create-imagery-input").keypress(function () {
   console.log("let's add 1");
   createImageryInputCharsCount += 1;

   console.log("Total inoutted chars: ", createImageryInputCharsCount);
   $("#imagery-char-count").html(createImageryInputCharsCount);
});

let createAnswerInputCharsCount = 0;

$("#create-answer-input").keypress(function () {
   console.log("let's add 1");
   createAnswerInputCharsCount += 1;

   console.log("Total inputted chars: ", createAnswerInputCharsCount);
   $("#answer-char-count").html(createAnswerInputCharsCount);
});

let editImageryInputCharsCount = 0;

$("#edit-imagery-input").keypress(function () {
   console.log("let's add 1");
   editImageryInputCharsCount += 1;

   console.log("Total inputted chars: ", editImageryInputCharsCount);
   $("#edit-imagery-char-count").html(editImageryInputCharsCount);
});

let editAnswerInputCharsCount = 0;

$("#edit-answer-input").keypress(function () {
   console.log("let's add 1");
   editAnswerInputCharsCount += 1;

   console.log("Total inputted chars: ", editAnswerInputCharsCount);
   $("#edit-answer-char-count").html(editAnswerInputCharsCount);
});
