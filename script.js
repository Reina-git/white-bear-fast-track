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

$("#create-imagery-input").keydown(function (e) {
   const key = e.which;
   console.log(key);

   // If the key the user pressed is a backspace, decrement the count
   if (key === 8) {
      console.log("the user pressed backspace");
      createImageryInputCharsCount--;
      if (createImageryInputCharsCount < 0) {
         console.log("you are negative");
         createImageryInputCharsCount = 0;
      }
   } else if (key === 16) {
      console.log("shift was pressed.");
   } else if (key === 18) {
      console.log("alt was pressed.");
   } else if (key === 91) {
      console.log("command");
   } else {
      // else, increment the count
      console.log("the user pressed any other key");
      createImageryInputCharsCount += 1;
   }
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
