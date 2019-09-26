import * as yup from "yup";

const mobileRegExp = /^([0]([.][0-9]+)?|[1-9]([0-9]+)?([.][0-9]+)?)$/;
const validationSchema = yup.object().shape({
  verificationValue: yup
    .string()
    .required("please enter otp")
    .min(4, "Please enter valid otp")
    .max(4, "Please enter valid otp")
    .matches(mobileRegExp, "please check the number format "),

  newPass: yup
    .string()
    .min(8, "Please enter minimum 8 digit")
    .required("Password fiels is required"),

  confirmPass: yup
    .string()
    .min(8, "Please enter minimum 8 digit")
    .required("Password fiels is required")
    .test("passwords-match", "Passwords must match", function(value) {
      return this.parent.newPass === value;
    })
});

export default validationSchema;
