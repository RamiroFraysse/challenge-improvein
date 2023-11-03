import { TypeWithKey } from "@/models"

export const getValidationError = (errorCode:string) =>{
  const codeMatcher:TypeWithKey<string> = {
    required:"This field is required",
    minlength:"This field must be at least {requiredLength} characters long",
    maxlength:"This field must be at most {requiredLength}",
    email:"This is not a valid email",
    pattern:"This value is not valid",
    ERR_NETWORK:"Se rompio la red",
    ERR_BAD_REQUEST:"Bad request",
    UNAUTHORIZED: "Please log in to continue",
    BAD_REQUEST: "Invalid format on sent data",
    FORBIDDEN:"You don't have permission to execute that",
    INTERNAL_SERVER_ERROR: "There has been an error, please try again later",
    EMAIL_IN_ACCOUNT: "The entered email already has an account, please enter a new one",
   'auth/email-already-in-use':"The email already in use"
  }
  const codeMatcherFirebase:TypeWithKey<string> = {
    'auth/invalid-email': "The email address you provided is invalid. Please make sure it's a valid email address and try again",
    'auth/email-already-in-use':"The email already in use",
    'auth/invalid-login-credentials':'Invalid login credentials. Please check your email and password and try again',
  }
  return codeMatcher[errorCode] || codeMatcherFirebase[errorCode] || 'error';
}