import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Phone number format should be 123-45-67")
    .required("Required"),
});

function ContactForm({ handleSubmit }) {
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor="name" className={css.label}>
              Name
            </label>
            <Field
              type="text"
              name="name"
              id="name"
              className={`${css.input} ${
                errors.name && touched.name ? css.inputError : ""
              }`}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={css.errorMessage}
            />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="number" className={css.label}>
              Number
            </label>
            <Field
              type="tel"
              name="number"
              id="number"
              className={`${css.input} ${
                errors.number && touched.number ? css.inputError : ""
              }`}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.errorMessage}
            />
          </div>

          <button type="submit" className={css.submitButton}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
