import * as yup from "yup";

const mobileRegExp = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
const validationSchema = yup.object().shape({
  firstname: yup
    .string()
    .max(45, "Firstname not more than 45 words")
    .required("Please enter your first name"),
  lastname: yup
    .string()
    .max(45, "Lastname not more than 45 words")
    .required("Please enter your Last name"),
  passfield: yup
    .string()
    .min(8, "Please enter minimum 8 digit")
    .required("Password fiels is required"),

  mobNumber: yup
    .string()
    .min(10, "Please enter valid mobile number")
    .max(10, "Please enter valid mobile number")
    .matches(mobileRegExp, "please check the number format ")
    .required("Please enter your mobile number"),

  cpass: yup
    .string()
    .min(8, "Please enter minimum 8 digit")
    .required("Password fiels is required")
    .test("passwords-match", "Passwords must match", function(value) {
      return this.parent.passfield === value;
    })
});

export default validationSchema;
