import React from "react";

const Register = ({ onNavigate }) => {
  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-7xl mx-auto px-margin flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            <img
              alt="Auth Brand Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/ALJJyrByjKVK41Rr3pJYnQnLxzC1GrBbOgNdQdq9KBAm5FV-LpoaR6G7j9r7ddtJE1TJv8Q-z3yhDAXXYAz-LEAd-jmhaF8ZhM-_duZRbL9t82hoOBWUsciH9KfqxEcBa_yZcF9GoHQ7tA-kXTOzJ9X5ObXBinqZTuCIn-fvQ56OnCh5yHNIadvxmi-ZzZTAVhT-dq_WM3Ma01zTHEbv1AXiNoPO6pGtkFpL6obBoTWWg-yM"
            />
            <span className="font-label-lg text-label-lg text-on-surface">AuthCore</span>
          </div>
          {/* Always visible header buttons */}
          <nav className="flex items-center gap-2 sm:gap-space-md">
            <button
              type="button"
              className="px-3.5 py-1.5 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface border border-outline-variant/60 hover:bg-surface-container-low transition-colors cursor-pointer"
              onClick={() => onNavigate?.("signin")}
            >
              Sign In
            </button>
            <button
              type="button"
              className="px-3.5 py-1.5 rounded-lg font-label-lg text-label-lg bg-primary-container text-on-primary font-semibold shadow-sm cursor-pointer"
              onClick={() => onNavigate?.("signup")}
            >
              Sign Up
            </button>
          </nav>
          <div className="flex items-center gap-space-md">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full pt-16 flex-1 flex flex-col items-center justify-center bg-surface px-margin-sm md:px-margin py-space-xl">
        <div className="flex flex-col w-full items-center justify-center py-space-sm md:py-space-lg">
          {/* Subtle decorative ambient background glows (strictly bounded) */}
          <div className="relative w-full max-w-xl flex flex-col items-center">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute -bottom-16 -right-12 w-72 h-72 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

            {/* Main Registration Card */}
            <div className="w-full bg-surface-container-lowest rounded-xl shadow-[0_4px_24px_rgba(11,28,48,0.06),0_1px_3px_rgba(11,28,48,0.04)] px-6 py-8 md:px-10 md:py-10 transition-all">
              {/* Card Header */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-space-md">
                  <div className="w-14 h-14 rounded-xl bg-surface-container-low flex items-center justify-center shadow-sm">
                    <img
                      alt="Auth Brand Logo"
                      className="w-9 h-9 object-contain"
                      src="https://lh3.googleusercontent.com/aida/ALJJyrByjKVK41Rr3pJYnQnLxzC1GrBbOgNdQdq9KBAm5FV-LpoaR6G7j9r7ddtJE1TJv8Q-z3yhDAXXYAz-LEAd-jmhaF8ZhM-_duZRbL9t82hoOBWUsciH9KfqxEcBa_yZcF9GoHQ7tA-kXTOzJ9X5ObXBinqZTuCIn-fvQ56OnCh5yHNIadvxmi-ZzZTAVhT-dq_WM3Ma01zTHEbv1AXiNoPO6pGtkFpL6obBoTWWg-yM"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary-container flex items-center justify-center shadow">
                    <span className="material-symbols-outlined text-[12px] text-on-primary">verified_user</span>
                  </div>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  Create your account
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-sm">
                  Get started with your free 14-day trial. No credit card required.
                </p>
              </div>

              {/* Registration Form */}
              <form className="space-y-space-md mt-space-lg" id="signup-form" onSubmit={(e) => e.preventDefault()}>
                {/* Full Name Field */}
                <div>
                  <label className="block font-label-lg text-label-lg text-on-surface mb-space-xs" htmlFor="full-name">
                    Full Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline">
                      <span className="material-symbols-outlined text-[20px]">person</span>
                    </span>
                    <input
                      className="w-full h-11 pl-11 pr-4 bg-surface-container-low focus:bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container/20 focus:shadow-sm transition-all"
                      id="full-name"
                      name="name"
                      placeholder="Jane Doe"
                      required
                      type="text"
                    />
                  </div>
                </div>

                {/* Work Email Field */}
                <div>
                  <label className="block font-label-lg text-label-lg text-on-surface mb-space-xs" htmlFor="work-email">
                    Work Email
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline">
                      <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                    </span>
                    <input
                      className="w-full h-11 pl-11 pr-4 bg-surface-container-low focus:bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container/20 focus:shadow-sm transition-all"
                      id="work-email"
                      name="email"
                      placeholder="jane@company.com"
                      required
                      type="email"
                    />
                  </div>
                </div>

                {/* Password Field with Visibility Toggle */}
                <div>
                  <div className="flex items-center justify-between mb-space-xs">
                    <label className="block font-label-lg text-label-lg text-on-surface" htmlFor="password">
                      Password
                    </label>
                    <span className="font-label-sm text-label-sm text-outline" id="strength-label">
                      Required
                    </span>
                  </div>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-outline">
                      <span className="material-symbols-outlined text-[20px]">lock</span>
                    </span>
                    <input
                      className="w-full h-11 pl-11 pr-11 bg-surface-container-low focus:bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container/20 focus:shadow-sm transition-all"
                      id="password"
                      name="password"
                      placeholder="••••••••••••"
                      required
                      type="password"
                    />
                    <button
                      aria-label="Toggle password visibility"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-on-surface transition-colors"
                      id="toggle-pwd-btn"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[20px]" id="pwd-icon">
                        visibility
                      </span>
                    </button>
                  </div>

                  {/* Real-Time Password Strength Meter (4 Segments) */}
                  <div aria-hidden="true" className="mt-space-xs grid grid-cols-4 gap-1.5">
                    <div className="h-1 rounded-full bg-surface-container-highest transition-colors duration-300" id="bar-1"></div>
                    <div className="h-1 rounded-full bg-surface-container-highest transition-colors duration-300" id="bar-2"></div>
                    <div className="h-1 rounded-full bg-surface-container-highest transition-colors duration-300" id="bar-3"></div>
                    <div className="h-1 rounded-full bg-surface-container-highest transition-colors duration-300" id="bar-4"></div>
                  </div>

                  {/* Password Requirement Indicators */}
                  <div className="mt-space-sm grid grid-cols-3 gap-2">
                    <div className="flex items-center gap-1 text-outline transition-colors" id="req-length">
                      <span className="material-symbols-outlined text-[14px]" id="icon-length">
                        radio_button_unchecked
                      </span>
                      <span className="font-body-sm text-body-sm leading-none">8+ chars</span>
                    </div>
                    <div className="flex items-center gap-1 text-outline transition-colors" id="req-number">
                      <span className="material-symbols-outlined text-[14px]" id="icon-number">
                        radio_button_unchecked
                      </span>
                      <span className="font-body-sm text-body-sm leading-none">1+ number</span>
                    </div>
                    <div className="flex items-center gap-1 text-outline transition-colors" id="req-symbol">
                      <span className="material-symbols-outlined text-[14px]" id="icon-symbol">
                        radio_button_unchecked
                      </span>
                      <span className="font-body-sm text-body-sm leading-none">1+ symbol</span>
                    </div>
                  </div>
                </div>

                {/* Terms Agreement Checkbox */}
                <div className="pt-space-xs">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      className="mt-1 w-4 h-4 rounded text-primary-container focus:ring-primary-container/20 cursor-pointer"
                      id="terms-check"
                      required
                      type="checkbox"
                    />
                    <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed select-none">
                      I agree to the{" "}
                      <a className="text-primary hover:text-primary-container underline underline-offset-2 transition-colors" href="#">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a className="text-primary hover:text-primary-container underline underline-offset-2 transition-colors" href="#">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                </div>

                {/* Primary Submit Button */}
                <button
                  className="w-full h-11 mt-space-sm bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group active:scale-[0.99]"
                  type="submit"
                >
                  <span>Create account</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </form>

              {/* Footer Prompt inside card */}
              <div className="mt-space-lg text-center pt-space-md bg-surface-container-low/50 rounded-lg py-3">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="font-label-lg text-label-lg text-primary hover:text-primary-container font-semibold underline underline-offset-2 transition-colors cursor-pointer ml-1"
                    onClick={() => onNavigate?.("signin")}
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </div>

            {/* Security & Social Proof Micro-Banner */}
            <div className="w-full mt-space-lg grid grid-cols-1 sm:grid-cols-3 gap-space-sm text-center sm:text-left px-2">
              <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low/70">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-label-md text-label-md text-on-surface font-semibold truncate">
                    Enterprise SOC2
                  </h4>
                  <p className="font-body-sm text-body-sm text-outline truncate">Certified security</p>
                </div>
              </div>
              <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low/70">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-label-md text-label-md text-on-surface font-semibold truncate">
                    Instant Setup
                  </h4>
                  <p className="font-body-sm text-body-sm text-outline truncate">Ready in under 2 mins</p>
                </div>
              </div>
              <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low/70">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[18px]">credit_card_off</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-label-md text-label-md text-on-surface font-semibold truncate">
                    Risk-Free Trial
                  </h4>
                  <p className="font-body-sm text-body-sm text-outline truncate">No card required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-low py-space-md shadow-[0_-1px_6px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-margin flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <div className="font-body-sm text-body-sm text-on-surface-variant">
            © 2024 AuthCore Security Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-space-lg">
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">
              Terms of Service
            </a>
            <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">
              Security Notice
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Register;
