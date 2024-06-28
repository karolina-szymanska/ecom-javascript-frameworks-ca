import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup
      .string()
      .required("Please enter your first name")
      .min(3, "Your first name should be at least 3 characters"),
    // .typeError("Your full name should consist of letters"),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email format")
      // .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Invalid email format")
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
    // .typeError("Your message should consist of letters"),
  })
  .required();

function ContactPage() {
  document.title = "Contact Us | eCom";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("fullName")} />
          <p>{errors.fullName?.message}</p>
        </div>
        <div>
          <input {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input {...register("subject")} />
          <p>{errors.subject?.message}</p>
        </div>
        <div>
          <input {...register("body")} />
          <p>{errors.body?.message}</p>
        </div>
        <button className="contact-button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default ContactPage;
