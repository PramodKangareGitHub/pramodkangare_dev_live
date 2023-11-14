"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "../lib/utils";
import ContactFormEmail from "../email/ContactFormEmail";
import { renderAsync } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    const html = await renderAsync(
      ContactFormEmail({
        senderEmail,
        message,
      }) as React.ReactElement
    );

    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "pramodkangare1@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: html,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
