$("#letsGoButton").click(function () {
   const emailInput = $("#sign-up-email-input").val();
   const passwordInput = $("#sign-up-password-input").val();
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

const squareList = (arr) => {
   // Only change code below this line
   const positiveNumbers = arr
      .filter((number) => {
         if (Number.isInteger(number)) {
            return number;
         }
      })
      .filter((number) => {
         return number >= 0;
      })
      .map((number) => {
         return Math.pow(number, 2);
      });
   console.log(positiveNumbers);
   return (arr = positiveNumbers);
   // Only change code above this line
};
const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
console.log(squaredIntegers);
