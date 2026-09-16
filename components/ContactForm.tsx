"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };

  const handleSendAnother = () => {
    setIsSubmitted(false);
    reset();
  };

  return (
    <div id="contact" className=" mb-">
      <h1 className="flex flex-col justify-center text-center lg:text-left text-white font-extrabold text-[54px] md:text-[80px] lg:text-[94px] leading-tight mb-10">
        LET&apos;S WORK
        <span className="text-textGray-100">TOGETHER</span>
      </h1>

      <div className="bg-[#1c1b19]/40 backdrop-blur-xl border border-white/[0.05] p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] group-hover:bg-orange-500/10 transition-all duration-700" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] group-hover:bg-orange-500/10 transition-all duration-700" />

        {!isSubmitted ? (
          <form
            className="flex flex-col gap-6 relative z-10"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col flex-1 gap-2.5">
                <label htmlFor="fullName" className="text-textGray-400 text-xs">
                  Your Full Name
                </label>

                <input
                  id="fullName"
                  className={`w-full text-gray-300 text-sm bg-[#1e1c1b] p-2.5 rounded-lg placeholder-gray-600 border outline-none focus:bg-[#252321] transition-all duration-200 placeholder:text-xs ${
                    errors.fullName
                      ? "border-red-500/70 focus:border-red-500"
                      : "border-white/[0.07] focus:border-orange-500/60"
                  }`}
                  type="text"
                  placeholder="john doe"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                />

                {errors.fullName && (
                  <span className="text-red-400 text-xs">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col flex-1 gap-2.5">
                <label htmlFor="email" className="text-textGray-400 text-xs">
                  Email Address
                </label>

                <input
                  id="email"
                  className={`w-full text-gray-300 text-sm bg-[#1e1c1b] p-2.5 rounded-lg placeholder-gray-600 border outline-none focus:bg-[#252321] transition-all duration-200 placeholder:text-xs ${
                    errors.email
                      ? "border-red-500/70 focus:border-red-500"
                      : "border-white/[0.07] focus:border-orange-500/60"
                  }`}
                  type="email"
                  placeholder="john@example.com"
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />

                {errors.email && (
                  <span className="text-red-400 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col flex-1 gap-2.5">
              <label htmlFor="subject" className="text-textGray-400 text-xs">
                Subject of Interest
              </label>

              <select
                id="subject"
                className="w-full text-gray-300 text-sm bg-[#1e1c1b] p-2.5 rounded-lg border border-white/[0.07] outline-none focus:border-orange-500/60 focus:bg-[#252321] transition-all duration-200 cursor-pointer"
                {...register("subject", {
                  required: "Please select a subject",
                })}
              >
                <option
                  value=""
                  disabled
                  className="text-textGray-400 text-sm bg-[#1e1c1b]"
                >
                  Select a subject
                </option>

                <option
                  value="freelance"
                  className="text-textGray-400 text-sm bg-[#1e1c1b]"
                >
                  Freelance Project
                </option>

                <option
                  value="job"
                  className="text-textGray-400 text-sm bg-[#1e1c1b]"
                >
                  Job Opportunity
                </option>

                <option
                  value="hi"
                  className="text-textGray-400 text-sm bg-[#1e1c1b]"
                >
                  Just Saying Hi!
                </option>
              </select>

              {errors.subject && (
                <span className="text-red-400 text-xs">
                  {errors.subject.message}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col flex-1 gap-2.5">
              <label htmlFor="message" className="text-textGray-400 text-xs">
                Message
              </label>

              <textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={6}
                className={`w-full text-gray-300 text-sm bg-[#1e1c1b] p-2.5 rounded-lg placeholder-gray-600 border outline-none focus:bg-[#252321] transition-all duration-200 placeholder:text-xs ${
                  errors.message
                    ? "border-red-500/70 focus:border-red-500"
                    : "border-white/[0.07] focus:border-orange-500/60"
                }`}
                {...register("message", {
                  required: "Message is required",
                })}
              />

              {errors.message && (
                <span className="text-red-400 text-xs">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit */}
            <div className="pt-5">
              <button
                type="submit"
                className="w-full bg-white text-black font-bold py-4 rounded-2xl text-lg tracking-widest uppercase hover:bg-orange-500 hover:text-white transition-all duration-500 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)] hover:shadow-orange-500/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Send Message
              </button>
            </div>
          </form>
        ) : (
          /* Success State */
          <div className="flex flex-col items-center justify-center text-center py-12 px-4 gap-4 relative z-10 animate-fadeIn">
            <div className="h-16 w-16 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 mb-2">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="36"
                width="36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>

            <h3 className="text-white text-2xl font-bold tracking-tight">
              Message Received!
            </h3>

            <p className="text-gray-400 max-w-md text-sm sm:text-base leading-relaxed">
              Thank you for reaching out. Your message has been sent
              successfully, and I will get back to you shortly.
            </p>

            <button
              type="button"
              onClick={handleSendAnother}
              className="mt-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
            >
              Send Another Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
