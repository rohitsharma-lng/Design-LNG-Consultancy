'use client'

import { useState } from 'react'
import './contactUs.css'

type FormState = {
  name: string
  email: string
  mobile: string
  message: string
}

const initialState: FormState = {
  name: '',
  email: '',
  mobile: '',
  message: '',
}

export default function ContactUsForm() {
  const [form, setForm] = useState<FormState>(initialState)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Contact form submitted:', form)
  }

  return (
    <section>
      <div className="cu-container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left column */}
        <div className="flex flex-col gap-7">
          <h2 className="cu-heading m-0">Want to talk about your project?</h2>

          <p className="cu-desc m-0">
            Give us a call or drop by anytime, we endeavour to answer all
            enquiries within 24 hours on business days. We will be happy to
            answer your questions.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="tel:+917717305144"
              className="cu-contact-btn cu-contact-btn--phone"
            >
              <span className="cu-contact-icon inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M20.52 3.48A11.87 11.87 0 0 0 12.01 0C5.4 0 .02 5.37.02 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a11.95 11.95 0 0 0 5.81 1.48h.01c6.6 0 11.98-5.37 11.98-11.98 0-3.2-1.25-6.2-3.48-8.4Zm-8.51 18.4h-.01a9.94 9.94 0 0 1-5.06-1.39l-.36-.21-3.68.96.98-3.59-.24-.37a9.93 9.93 0 1 1 18.42-5.27c0 5.49-4.47 9.87-10.05 9.87Zm5.5-7.4c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15s-.78.98-.95 1.18c-.18.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.52-.08-.15-.68-1.65-.93-2.26-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.52.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.17 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35Z" />
                </svg>
              </span>
              +91-771 730 5144
            </a>

            <a
              href="mailto:info@lngconsultancy.co.za"
              className="cu-contact-btn cu-contact-btn--email"
            >
              <span className="cu-contact-icon inline-flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              info@lngconsultancy.co.za
            </a>
          </div>
        </div>

        {/* Right column — form card */}
        <div className="cu-card">
          <h3 className="cu-card-title m-0">Ready to Get Started?</h3>

          <p className="cu-card-subtitle">
            Your email address will not be published. Required fields are
            marked *
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              required
              value={form.name}
              onChange={handleChange}
              className="cu-input"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                value={form.email}
                onChange={handleChange}
                className="cu-input"
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number*"
                required
                value={form.mobile}
                onChange={handleChange}
                className="cu-input"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message..*"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="cu-input cu-textarea"
            />

            <div className="cu-captcha flex items-center gap-3">
              <input type="checkbox" className="cu-captcha-check" />
              <span className="cu-captcha-label">I&apos;m not a robot</span>
              <span className="cu-captcha-meta ml-auto text-right">
                reCAPTCHA
                <br />
                Privacy - Terms
              </span>
            </div>

            <button type="submit" className="btn-gradient cu-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
