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
      $("#save-card").disabled = true;
      $("#char-count").addClass("text-danger");
      $("#char-count").removeClass("text-muted");
   } else {
      $("#save-card").disabled = false;
      $("#char-count").addClass("text-muted");
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
      $("#char-count").addClass("text-danger");
      $("#char-count").removeClass("text-muted");
   } else {
      $("#save-card").disabled = false;
      $("#char-count").addClass("text-muted");
   }

   $("#answer-char-count").html(textLength);
});

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
   const user = {
      email: getEmail(),
      password: getPassword(),
      createdAt: getCreatedAt(),
      id: getId(),
      emailTld: getTld(),
      socialProfiles: [
         {
            site: "facebook",
            siteId: "530c2716-36e2-4a80-93b7-0e8483d629e1",
            username: "",
            image: {
               sm: "",
               orig: "",
            },
         },
         {
            site: "twitter",
            siteId: "79023b4d-57a2-406b-8efe-bda47fb1696c",
            username: "",
            image: {
               sm: "",
               md: "",
               orig: "",
            },
         },
      ],
   };

   const email = getEmail();
   const password = getPassword();
   const createdAt = getCreatedAt();
   const id = getId();
   const emailTld = getTld();

   let activeUser = deepCopy(user);
   activeUser.isActive = true;
   activeUser.createdAt = Date.now(createdAt);

   // for (let i = 0; i < activeUser.socialProfiles.length; i++) {
   //    const socialProfile = activeUser.socialProfiles[i];
   //    delete socialProfile.image.sm;
   //    delete socialProfile.image.md;
   // }

   activeUser.socialProfiles.forEach((socialProfile) => {
      delete socialProfile.image.sm;
      delete socialProfile.image.md;
   });

   // console.log(activeUser);

   const users = [user, activeUser];

   const currentUsers = users
      .map((user) => {
         const newUser = {
            id: user.id,
            email: user.email,
            password: user.password,
            createdAt: user.createdAt,
            // isActive: user.isActive,
            isActive: getUserStatus(user),
         };
         return newUser;
      })
      .filter((user) => {
         return user.isActive === true;
      });

   // console.log(users);
   const currentUser = [...currentUsers];

   console.log(currentUsers);
   console.log(currentUser);

   const passwordError = getPasswordError(password, email);

   if (passwordError !== "") {
      showError("#sign-up-password", passwordError);
   } else {
      hideError("#sign-up-password", passwordError);
   }

   const emailError = getEmailError(email);
   if (emailError !== "") {
      showError("#sign-up-email", emailError);
   } else {
      hideError("#sign-up-email", emailError);
   }

   if (passwordError === "" && emailError === "") {
      console.log(user);
      console.log(activeUser);
   }
});
function getUserStatus(user) {
   const userStatus = "";
   // console.log(user);
   if (user.isActive === undefined) {
      return (status = false);
   }
   return user.isActive;
}

function getEmail() {
   const emailInput = $("#sign-up-email-input").val();
   const email = emailInput.trim().toLowerCase();
   return email;
}

function getTld(email) {
   const emailInput = $("#sign-up-email-input").val();
   const emailToSplit = emailInput.trim().toLowerCase();
   const splitEmail = emailToSplit.split(".");
   const emailTld = splitEmail[1];
   return emailTld;
}

function getPassword() {
   const password = $("#sign-up-password-input").val();
   return password;
}
function getCreatedAt() {
   new Date(Date.now());
   let whenButtonClicked = new Date(Date.now());
   // whenButtonClicked = new Date(2020, 3, 1); //uncomment to test that the date is working.
   const year = whenButtonClicked.getFullYear();
   const month = whenButtonClicked.getMonth() + 1;
   const day = whenButtonClicked.getDate();
   // const millisecond = whenButtonClicked.getMilliseconds();
   // const millisecondString = String(millisecond);
   const yyyy = String(year);
   const unpaddedMonth = String(month);
   const unpaddedDay = String(day);

   const dd = padLeft(unpaddedDay);
   const mm = padLeft(unpaddedMonth);

   const results = yyyy + mm + dd;
   const dateCreated = Number(results);
   // console.log(createdAt);

   return dateCreated;
}
function getId() {
   const whenButtonClicked = new Date(Date.now());
   const millisecond = whenButtonClicked.getMilliseconds();
   const millisecondString = String(millisecond);
   const paddedMillisecondStr = millisecondString.padStart(3, "0");
   randomUniqId = getRandomInt(0, 999);
   randomUniqIdString = String(randomUniqId).padStart(3, "0");
   const id = randomUniqIdString + paddedMillisecondStr;
   return id;
}

function getEmailError(emailInput) {
   if (emailInput.length === 0) {
      return "Please enter your email address.";
   } else {
      return "";
   }
}

function showError(element, message) {
   $(`${element}-error`).html(message);
   $(`${element}-input`).addClass("is-invalid");

   // console.log(element);
}
function hideError(element, message) {
   $(`${element}-error`).html(message);
   $(`${element}-input`).removeClass("is-invalid");
}
// get a random number between 0 and 999
function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max + 1 - min) + min);
}
function padLeft(str) {
   // let str = "";
   if (str.length < 2) {
      str = 0 + str;
   } else {
      str = str;
   }
   return str;
}
function deepCopy(obj) {
   const str = JSON.stringify(obj); // json.stringify() turns the object into a string
   return safelyParseJson(str);
}

function safelyParseJson(str) {
   try {
      JSON.parse(str);
   } catch {
      // if error return the original value
      return str;
   }
   return JSON.parse(str);
}

function padLeft(str) {
   // let str = "";
   if (str.length < 2) {
      str = 0 + str;
   } else {
      str = str;
   }
   return str;
}
