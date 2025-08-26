
"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(formData: FormData) {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid form data. " + parsed.error.errors.map(e => e.message).join(' '),
    };
  }
  
  // Here you would typically send an email, e.g., using Resend or Nodemailer
  // For this example, we'll just log it and simulate a success response.
  console.log("New contact form submission:", parsed.data);

  return {
    success: true,
    message: "Thank you for your message! I'll get back to you soon.",
  };
}
