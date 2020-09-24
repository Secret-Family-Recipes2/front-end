import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be atleast 3 characters or longer"),

  email: yup.string().email("email is required"),
  username: yup
    .string()
    .required("Please enter a Username")
    .min(6, "Username must be at least 6 characters long")
    .max(10, "Now you're getting carried away, username is too long"),

  level: yup
    .string()
    .oneOf(["novice", "homeCook", "hobbyist", "private", "pro"]),

  password: yup
    .string()
    .label("Password")
    .required()
    .min(2, "Seems a bit short...")
    .max(10, "We prefer insecure system, try a shorter password."),
  // passwordConfirmation: yup
  //   .string()
  //   .required()
  //   .label("Confirm password")
  //   .test("passwords-match", "Passwords must match ya fool", function (value) {
  //     return this.parent.password === value;
  // }),

  // password: yup.string().required("Password is required"),

  // passwordConfirmation: yup
  //   .string()
  //   .oneOf([yup.ref("password"), null], "Passwords must match"),

  american: yup.boolean(),
  mexican: yup.boolean(),
  french: yup.boolean(),
  italian: yup.boolean(),
});
