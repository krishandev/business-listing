"use client";

import { useState } from "react";
import { Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // You can connect this with email API later
    console.log("Contact Form Submitted:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#356B27] via-[#468432] to-[#6AB04C] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Contact Us</h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-50">
            Have a question, suggestion or need help with your business listing?
            We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#356B27]">
                Get In Touch
              </h2>

              <p className="mt-3 text-gray-600 leading-7">
                Reach out to us for support, partnerships, advertising or any
                questions related to LocalBiz.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-green-100 p-3 text-[#356B27]">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="mt-1 text-gray-600">
                      support@localbiz.com
                    </p>
                  </div>
                </div>

               

              
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-green-100 p-3 text-[#356B27]">
                    <Clock className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      Working Hours
                    </p>
                    <p className="mt-1 text-gray-600">
                      Monday - Saturday
                      <br />
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional Map Placeholder */}
            <div className="rounded-3xl bg-white p-4 shadow-sm">
              <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-100 text-center text-gray-500">
                Google Map / Office Location Here
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-2xl font-bold text-[#356B27]">
              Send a Message
            </h2>

            <p className="mt-3 text-gray-600">
              Fill out the form below and we will get back to you soon.
            </p>

            {submitted && (
              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-green-700">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="h-14 w-full rounded-2xl border border-gray-200 px-4 text-gray-900 outline-none transition focus:border-[#468432] focus:ring-4 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="h-14 w-full rounded-2xl border border-gray-200 px-4 text-gray-900 outline-none transition focus:border-[#468432] focus:ring-4 focus:ring-green-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter subject"
                  className="h-14 w-full rounded-2xl border border-gray-200 px-4 text-gray-900 outline-none transition focus:border-[#468432] focus:ring-4 focus:ring-green-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-2xl border border-gray-200 px-4 py-4 text-gray-900 outline-none transition focus:border-[#468432] focus:ring-4 focus:ring-green-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#FFA02E] px-8 font-semibold text-white transition hover:bg-[#f28c12]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}