import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import Button from "../../components/button/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValid =
      formData.fullName.length >= 3 &&
      formData.subject.length >= 3 &&
      isValidEmail(formData.email) &&
      formData.body.length >= 3;
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log(formData);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <section
          className="col-10 mx-auto my-5 d-flex flex-column gap-2"
          id={styles.contactOutro}
        >
          <h1 className="mb-md-5">Contact us</h1>
          <div className="row">
            <div
              className="col-md-6 d-flex flex-column justify-content-center my-4 order-md-1"
              id={styles.contactSuccess}
            >
              <h2 className="mb-3 fs-4">
                We have just received your message! ✉
              </h2>
              <p className="mb-0">
                We promise to look into your message and get back to you as soon
                as we can.
              </p>
              <p>Thank you kindly for your time and effort!</p>
              <p className="fst-italic">- Team Vendora</p>
            </div>
            <div className="col-md-6 order-md-0">
              <img
                src="/images/contact.webp"
                alt="customer support employee"
                className="img-fluid"
              />
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section
        className="col-10 mx-auto my-5 d-flex flex-column gap-2"
        id={styles.contactIntro}
      >
        <h1 className="mb-4">Contact us</h1>
        <p>
          We're thrilled you're here! Whether you have a question, a brilliant
          idea to share, or just want to say hello, we're all ears. Our team is
          dedicated to providing you with the support you need and making sure
          your experience with us is as smooth and enjoyable as possible.
        </p>
        <p>
          Don't hesitate to fill out the form below with your details and
          message. We promise to get back to you as soon as we can. Let's start
          a conversation and make great things happen together!
        </p>
      </section>
      <form
        onSubmit={handleSubmit}
        className="col-10 d-flex flex-column gap-3 border-black border p-4 mb-5 mx-auto bg-white rounded"
        id={styles.contactForm}
      >
        {["fullName", "subject", "email", "body"].map((field) => (
          <div key={field} className={styles.floatingLabelGroup}>
            <input
              type={field === "email" ? "email" : "text"}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              minLength="3"
              className={styles.floatingInput}
              placeholder=" "
            />
            <label htmlFor={field} className={styles.floatingLabel}>
              {field === "fullName" && "Full Name"}
              {field === "subject" && "Subject"}
              {field === "email" && "Email"}
              {field === "body" && "Body"}
            </label>
            <div className="small fst-italic">
              {field !== "email"
                ? "Must be at least 3 characters."
                : "Must be a valid email address."}
            </div>
          </div>
        ))}
        <Button
          type="submit"
          disabled={!isFormValid}
          variant={isFormValid ? "round" : "disabled"}
        >
          Submit
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
