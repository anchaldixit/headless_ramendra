"use client";

import { FormEvent, useState } from "react";

// Contact section — Next.js form connected to WordPress REST API
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    city: "",
    contact: "",
    session_type: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  /**
   * Handle input changes
   */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove field error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const updatedErrors = { ...prev };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }

    // Remove previous messages
    setSubmitError("");
    setSuccessMessage("");
  };

  /**
   * Validate form
   */
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Please enter your email or phone.";
    }

    if (!formData.session_type) {
      newErrors.session_type = "Please select a session type.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /**
   * Submit form
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitError("");
    setSuccessMessage("");

    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      /**
       * Safely handle response.
       * This prevents:
       * Unexpected token '<', "<!DOCTYPE..." is not valid JSON
       */
      const contentType = response.headers.get("content-type") || "";

      let data;

      if (contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();

        throw new Error(
          `Server returned an unexpected response (${response.status}).`
        );
      }

      if (!response.ok) {
        throw new Error(
          data?.message || "Unable to submit the form. Please try again."
        );
      }

      /**
       * Success
       * Stay on the same page.
       */
      setSuccessMessage(
        "Thank you for getting in touch. Your enquiry has been submitted successfully."
      );

      /**
       * Clear form after successful submission
       */
      setFormData({
        name: "",
        organisation: "",
        city: "",
        contact: "",
        session_type: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error("Contact form error:", error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#103f4b] w-full py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[150px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left: heading + WhatsApp */}
          <div className="lg:w-[405px] shrink-0">

            <p className="font-sans font-bold text-[#fecb69] text-[18px] tracking-[2.16px] uppercase mb-3">
              GET IN TOUCH
            </p>

            <h2 className="font-serif not-italic text-white text-[48px] lg:text-[64px] leading-normal mb-5">
              Tell Ramen
              <br />
              what you have
              <br />
              <em className="font-serif italic text-[#fecb69]">
                in mind.
              </em>
            </h2>

            <p className="font-serif not-italic text-white text-[20px] leading-normal mb-2">
              Share a few details and start the conversation.
            </p>

            <p className="font-serif not-italic text-white text-[20px] leading-[40px] mb-6">
              Or message on
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=9044558419&amp;text=Hi,%20I’d%20like%20to%20discuss%20my books%20needs.&amp;type=phone_number&amp;app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="border border-white/30 flex items-center gap-2 px-4 py-3 w-fit font-sans font-semibold text-white text-[18px] hover:border-white transition-colors"
            >
              <img
                src="/assets/a1730.png"
                alt=""
                width={21}
                height={21}
                className="shrink-0"
              />

              WhatsApp
            </a>
          </div>

          {/* Right: form */}
          <form
            className="flex-1"
            onSubmit={handleSubmit}
            aria-label="Contact Ramendra Kumar"
            noValidate
          >

            {/* Name + Organisation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-sans font-normal text-white text-[18px] mb-10"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  className="w-full bg-transparent border-0 border-b border-white/24 text-white text-[18px] outline-none pb-4 focus:border-white transition-colors"
                />

                {errors.name && (
                  <p className="text-red-300 text-[14px] mt-2">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Organisation */}
              <div>
                <label
                  htmlFor="organisation"
                  className="block font-sans font-normal text-white text-[18px] mb-10"
                >
                  Organisation
                </label>

                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  value={formData.organisation}
                  onChange={handleChange}
                  autoComplete="organization"
                  className="w-full bg-transparent border-0 border-b border-white/24 text-white text-[18px] outline-none pb-4 focus:border-white transition-colors"
                />
              </div>

            </div>

            {/* City + Email / Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">

              {/* City */}
              <div>
                <label
                  htmlFor="city"
                  className="block font-sans font-normal text-white text-[18px] mb-10"
                >
                  City
                </label>

                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  autoComplete="address-level2"
                  className="w-full bg-transparent border-0 border-b border-white/24 text-white text-[18px] outline-none pb-4 focus:border-white transition-colors"
                />
              </div>

              {/* Email / Phone */}
              <div>
                <label
                  htmlFor="contact"
                  className="block font-sans font-normal text-white text-[18px] mb-10"
                >
                  Email or phone
                </label>

                <input
                  id="contact"
                  name="contact"
                  type="text"
                  value={formData.contact}
                  onChange={handleChange}
                  autoComplete="email"
                  className="w-full bg-transparent border-0 border-b border-white/24 text-white text-[18px] outline-none pb-4 focus:border-white transition-colors"
                />

                {errors.contact && (
                  <p className="text-red-300 text-[14px] mt-2">
                    {errors.contact}
                  </p>
                )}
              </div>

            </div>

            {/* Type of session */}
            <div className="mb-12">

              <div className="relative mb-10">

                <label
                  htmlFor="session_type"
                  className="block font-sans font-normal text-white text-[18px] mb-2"
                >
                  Type of session
                </label>

                <select
                  id="session_type"
                  name="session_type"
                  value={formData.session_type}
                  onChange={handleChange}
                  className={`w-full appearance-none bg-transparent border-0 text-[18px] leading-[40px] outline-none cursor-pointer pr-10 ${
                    formData.session_type
                      ? "text-white"
                      : "text-white/60"
                  }`}
                >
                  <option value="" disabled>
                    Please select
                  </option>

                  <option value="Keynote">Keynote</option>

                  <option value="Panel Discussion">
                    Panel Discussion
                  </option>

                  <option value="Workshop">
                    Workshop
                  </option>

                  <option value="Talk">
                    Talk
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>

                <img
                  src="/assets/9a4b8.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="absolute right-2 bottom-2 pointer-events-none"
                />

              </div>

              <div className="w-full h-px bg-white/24" />

              {errors.session_type && (
                <p className="text-red-300 text-[14px] mt-2">
                  {errors.session_type}
                </p>
              )}

            </div>

            {/* Message */}
            <div className="mb-12">

              <div className="mb-10">

                <label
                  htmlFor="message"
                  className="block font-sans font-normal text-white text-[18px] mb-2"
                >
                  Your message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your audience, preferred date and location"
                  className="w-full bg-transparent border-0 text-white/60 text-[18px] leading-[40px] outline-none resize-none placeholder:text-white/60"
                />

              </div>

              <div className="w-full h-px bg-white/24" />

              {errors.message && (
                <p className="text-red-300 text-[14px] mt-2">
                  {errors.message}
                </p>
              )}

            </div>

            {/* Success message */}
            {successMessage && (
              <div className="mb-6">
                <p className="text-[#fecb69] text-[18px] leading-[28px]">
                  {successMessage}
                </p>
              </div>
            )}

            {/* Error message */}
            {submitError && (
              <div className="mb-6">
                <p className="text-red-300 text-[16px] leading-[28px]">
                  {submitError}
                </p>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#bd2e65] text-white font-sans font-semibold text-[18px] px-6 py-3 hover:bg-[#a02455] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Connect with Ramen"}
            </button>

            <p className="font-sans font-normal text-white text-[16px] leading-[28px] mt-6 max-w-[592px]">
              Cancer-related talks share personal experience and do not
              offer medical advice.
            </p>

          </form>
        </div>
      </div>
    </section>
  );
}