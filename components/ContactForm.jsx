"use client";

import { useState } from "react";
import styles from "@/styles/legal.module.scss";

const CONTACT_EMAIL = "hello@ghost-movie-app.vercel.app";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // No fake "message sent" — we open the user's mail client with a
  // prefilled email so the message genuinely reaches us.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" value={form.name} onChange={update} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={update}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" value={form.subject} onChange={update} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={form.message} onChange={update} required />
      </div>
      <button type="submit" className={styles.submitBtn}>
        Send Message
      </button>
    </form>
  );
}
