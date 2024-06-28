import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  document.title = "Contact Us | eCom";
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("fullName", {
          required: true,
          minLength: 3,
        })}
      />
      <input
        {...register("email", {
          pattern: /[A-Za-z]{3}/,
          required: true,
        })}
      />
      <input
        {...register("subject", {
          required: true,
          minLength: 3,
        })}
      />
      <input
        {...register("body", {
          required: true,
          minLength: 3,
        })}
      />
      <input type="submit" />
    </form>
  );
}

export default Contact;
