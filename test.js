$("#letsGoButton").click(function () {
   const emailInput = $("#email-sign-up").val();
   const passwordInput = $("#password-sign-up").val();
   const lowerCasedPassword = passwordInput.toLowerCase();
   const trimmedEmail = emailInput.trim();
   const lowerCasedEmail = trimmedEmail.toLowerCase();
   const delimiter = `@`;
   const indexOfEmail = lowerCasedEmail.indexOf(delimiter);
   const localEmail = emailInput.slice(0, indexOfEmail);

   if (lowerCasedPassword.includes(localEmail) && localEmail.length >= 4) {
      console.log(
         `All or part of your email address cannot be used in your password.`
      );
   }
});
