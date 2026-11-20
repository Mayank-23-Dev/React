import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUser, setToggle }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const imageUrl = watch("image");

  const formSubmit = (data) => {
    setUser((prev) => [...prev, data]);
    reset();
    setToggle(true);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start py-4">
      {/* Left side: Heading, Highlights & Contact Info */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs font-semibold text-zinc-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Registration Portal
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            Create user
          </h1>
          <p className="text-zinc-500 text-sm leading-relaxed mt-2">
            Fill in the details to register and validate a new profile for your directory or platform.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-zinc-200/70 shadow-2xs">
            <div className="w-7 h-7 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0 text-zinc-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-900">Instant Sync</p>
              <p className="text-xs text-zinc-500">Profiles appear immediately in your directory list.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-zinc-200/70 shadow-2xs">
            <div className="w-7 h-7 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0 text-zinc-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-900">Live Validation</p>
              <p className="text-xs text-zinc-500">Real-time format validation for email, phone and avatar.</p>
            </div>
          </div>
        </div>

        {/* Contact info list with clean card */}
        <div className="bg-white rounded-xl border border-zinc-200/80 p-4 shadow-2xs flex flex-col gap-3">
          <p className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">Contact & Support</p>
          <div className="flex flex-col gap-2.5 text-xs text-zinc-600 font-medium">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-md bg-zinc-100 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span>support@mayank-dev.in</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-md bg-zinc-100 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span>Chungi, Kalyanpur, Kanpur - 208017</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-md bg-zinc-100 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span>+91 9214551234</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Form Card */}
      <div className="lg:col-span-7 bg-white rounded-2xl border border-zinc-200/90 shadow-sm p-6 sm:p-8">
        <div className="mb-5 pb-4 border-b border-zinc-100">
          <h2 className="text-lg font-bold text-zinc-900">User Information</h2>
          <p className="text-xs text-zinc-500 mt-0.5">Please provide valid information to generate the user profile.</p>
        </div>

        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(formSubmit)}>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-zinc-700">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              placeholder="e.g. Alex Henderson"
              className="w-full h-10 px-3.5 bg-zinc-50/50 hover:bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 rounded-lg text-sm border border-zinc-200 focus:bg-white focus:outline-none focus:border-zinc-800 focus:ring-1 focus:ring-zinc-800 transition-all"
            />
            {errors.name && <p className="text-rose-500 text-xs">{errors.name?.message}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-zinc-700">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="e.g. alex@example.com"
              className="w-full h-10 px-3.5 bg-zinc-50/50 hover:bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 rounded-lg text-sm border border-zinc-200 focus:bg-white focus:outline-none focus:border-zinc-800 focus:ring-1 focus:ring-zinc-800 transition-all"
            />
            {errors.email && <p className="text-rose-500 text-xs">{errors.email?.message}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-zinc-700">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              {...register("mobile", {
                required: "Mobile is required",
                pattern: {
                  value: /^\+?[1-9]\d{1,14}$/,
                  message: "Invalid phone number format",
                },
              })}
              type="tel"
              placeholder="e.g. +14155552671"
              className="w-full h-10 px-3.5 bg-zinc-50/50 hover:bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 rounded-lg text-sm border border-zinc-200 focus:bg-white focus:outline-none focus:border-zinc-800 focus:ring-1 focus:ring-zinc-800 transition-all"
            />
            {errors.mobile && <p className="text-rose-500 text-xs">{errors.mobile?.message}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-zinc-700">
                Avatar Image URL <span className="text-rose-500">*</span>
              </label>
              {imageUrl && (
                <span className="text-[11px] text-zinc-500">Live preview active</span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <input
                {...register("image", {
                  required: "Image URL is required",
                })}
                type="url"
                placeholder="https://images.unsplash.com/..."
                className="flex-1 h-10 px-3.5 bg-zinc-50/50 hover:bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 rounded-lg text-sm border border-zinc-200 focus:bg-white focus:outline-none focus:border-zinc-800 focus:ring-1 focus:ring-zinc-800 transition-all"
              />
              {imageUrl && (
                <div className="w-10 h-10 rounded-lg border border-zinc-200 overflow-hidden shrink-0 bg-zinc-100 shadow-2xs">
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              )}
            </div>
            {errors.image && <p className="text-rose-500 text-xs">{errors.image?.message}</p>}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 bg-zinc-900 hover:bg-black text-white rounded-lg font-medium text-sm transition-all duration-150 active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Add User to Directory</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
