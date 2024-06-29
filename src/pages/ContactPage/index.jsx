import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavLink } from "react-router-dom";

const schema = yup
  .object({
    fullName: yup
      .string()
      .required("Please enter your first name")
      .min(3, "Your first name should be at least 3 characters"),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email format")
      .typeError("Please enter a valid email address"),
    subject: yup
      .string()
      .required("Please enter your subject")
      .min(3, "Your subject name should be at least 3 characters"),
    // .typeError("Your subject should consist of letters"),
    body: yup
      .string()
      .required("Please enter your message")
      .min(3, "Your message should be at least 3 characters"),
  })
  .required();

function ContactPage() {
  document.title = "Contact Us | eCom";

  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setIsSubmitted(true);
    console.log({ data });
    reset();
  };

  return (
    <>
      <h1>Contact Us</h1>
      {isSubmitted ? (
        <div>
          <p>Thank you for your submission!</p>
          <NavLink to="/">Go Home</NavLink>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="John Kovalsky" {...register("fullName")} />
            <p>{errors.fullName?.message}</p>
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input placeholder="email@domain.com" {...register("email")} />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              placeholder="I have a question about..."
              {...register("subject")}
            />
            <p>{errors.subject?.message}</p>
          </div>
          <div>
            <label htmlFor="body">Message</label>
            <input placeholder="Your message here..." {...register("body")} />
            <p>{errors.body?.message}</p>
          </div>
          <button className="contact-button" type="submit">
            Submit
          </button>
        </form>
      )}
    </>
  );
}

export default ContactPage;
