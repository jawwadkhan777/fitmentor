import React from "react";
import './index.css';
import { useFormik } from "formik";
import { contactSchema } from "../../schemas";
import pic from "../../assets/contactPic.jpeg"

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: contactSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  // console.log(errors);

  return (
    <div className="contact">
      <div className="contact_left">
        <form className="contact_left_form" onSubmit={handleSubmit}>
          <h1>Welcome!</h1>
          <p>Contact with the team Smart_Dev</p>
          <div className="contact_left_form_inputFields">
            <div className="inputBox">
              <label htmlFor="name">Enter Your Name</label>
              <input
                type="name"
                autoComplete="off"
                name="name"
                placeholder="Full Name"
                value={values.name}
                onChange={handleChange}
              />
            </div>
              {errors.name && touched.name ? (<p className="validation">{errors.name}</p>) : null}
            <div className="inputBox">
              <label htmlFor="email">Enter Your Email</label>
              <input
                // type="email"
                autoComplete="off"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
              {errors.email && touched.email ? (<p className="validation">{errors.email}</p>):null}
            <div className="inputBox">
              <label htmlFor="comment">Leave Your Message</label>
              <textarea
                name="message"
                id="messafe"
                autoComplete="off"
                placeholder="message"
                cols="30"
                rows="10"
                value={values.comment}
                onChange={handleChange}
              />
            </div>
              {errors.message && touched.message ? (<p className="validation">{errors.message}</p>):null}
          </div>
          <div className="contact_submission">
            <p>Thanks for your contact!</p>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <div className="contact_right">
        <img src={pic} alt="loading..." />
      </div>
    </div>
  )
}

export default Contact