import React from "react";

const Signin = ({ onNavigate }) => {
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
              className="px-3.5 py-1.5 rounded-lg font-label-lg text-label-lg bg-primary-container text-on-primary font-semibold shadow-sm cursor-pointer"
              onClick={() => onNavigate?.("signin")}
            >
              Sign In
            </button>
            <button
              type="button"
              className="px-3.5 py-1.5 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface border border-outline-variant/60 hover:bg-surface-container-low transition-colors cursor-pointer"
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
        <div className="flex flex-col w-full items-center justify-center relative overflow-hidden py-space-md">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[320px] bg-gradient-to-b from-primary-fixed/40 via-surface-container/20 to-transparent blur-3xl pointer-events-none rounded-full"></div>

          {/* Main Auth Card Container */}
          <div className="relative w-full max-w-[440px] bg-surface-container-lowest rounded-xl shadow-xl p-space-md sm:p-space-xl z-10 transition-all">
            {/* Header Block */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-space-md group">
                <div className="absolute inset-0 bg-primary/10 rounded-xl blur-md group-hover:blur-lg transition-all"></div>
                <div className="relative w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center shadow-sm overflow-hidden p-2.5">
                  <img
                    alt="Auth Brand Logo"
                    className="w-full h-full object-contain drop-shadow-sm"
                    src="https://lh3.googleusercontent.com/aida/ALJJyrByjKVK41Rr3pJYnQnLxzC1GrBbOgNdQdq9KBAm5FV-LpoaR6G7j9r7ddtJE1TJv8Q-z3yhDAXXYAz-LEAd-jmhaF8ZhM-_duZRbL9t82hoOBWUsciH9KfqxEcBa_yZcF9GoHQ7tA-kXTOzJ9X5ObXBinqZTuCIn-fvQ56OnCh5yHNIadvxmi-ZzZTAVhT-dq_WM3Ma01zTHEbv1AXiNoPO6pGtkFpL6obBoTWWg-yM"
                  />
                </div>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Welcome back
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs max-w-xs">
                Enter your credentials to access your account
              </p>
            </div>

            {/* Credentials Form */}
            <form className="space-y-space-md mt-space-lg" id="login-form" onSubmit={(e) => e.preventDefault()}>
              {/* Email Field */}
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-space-xs" htmlFor="email">
                  Email address
                </label>
                <div className="relative flex items-center">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                  </div>
                  <input
                    autoComplete="email"
                    className="w-full h-11 pl-10 pr-space-md bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder:text-outline-variant font-body-md text-body-md rounded-lg shadow-sm focus:outline-none focus:shadow-[0_0_0_3px_rgba(67,56,202,0.18)] transition-all duration-150"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-space-xs">
                  <label className="font-label-md text-label-md text-on-surface" htmlFor="password">
                    Password
                  </label>
                  <a className="font-label-sm text-label-sm text-primary hover:text-primary-container transition-colors" href="#">
                    Forgot password?
                  </a>
                </div>
                <div className="relative flex items-center">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                    <span className="material-symbols-outlined text-[18px]">lock</span>
                  </div>
                  <input
                    autoComplete="current-password"
                    className="w-full h-11 pl-10 pr-11 bg-surface-container-low focus:bg-surface-container-lowest text-on-surface placeholder:text-outline-variant font-body-md text-body-md rounded-lg shadow-sm focus:outline-none focus:shadow-[0_0_0_3px_rgba(67,56,202,0.18)] transition-all duration-150"
                    id="password"
                    name="password"
                    placeholder="••••••••••••"
                    required
                    type="password"
                  />
                  <button
                    aria-label="Toggle password visibility"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-on-surface transition-colors cursor-pointer"
                    id="toggle-pwd-btn"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]" id="pwd-icon">
                      visibility
                    </span>
                  </button>
                </div>
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center justify-between pt-space-xs">
                <label className="flex items-center gap-space-sm cursor-pointer select-none group">
                  <div className="relative flex items-center">
                    <input className="peer sr-only" id="remember" name="remember" type="checkbox" />
                    <div className="w-[18px] h-[18px] rounded bg-surface-container-low peer-checked:bg-primary-container peer-focus:shadow-[0_0_0_2px_rgba(67,56,202,0.2)] transition-all flex items-center justify-center shadow-inner">
                      <svg className="w-3 h-3 text-on-primary opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                    Remember me for 30 days
                  </span>
                </label>
              </div>

              {/* Primary Submit Button */}
              <button
                className="w-full h-11 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-space-sm shadow-md hover:shadow-lg transition-all duration-150 active:scale-[0.99] cursor-pointer mt-space-md"
                id="submit-btn"
                type="submit"
              >
                <span id="btn-text">Sign in</span>
                <span className="material-symbols-outlined text-[18px] animate-spin hidden" id="btn-spinner">
                  progress_activity
                </span>
              </button>
            </form>

            {/* Footer Prompt */}
            <div className="mt-space-lg text-center font-body-sm text-body-sm text-on-surface-variant">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                className="font-label-md text-label-md text-primary hover:text-primary-container ml-1 font-semibold underline underline-offset-2 transition-colors cursor-pointer"
                onClick={() => onNavigate?.("signup")}
              >
                Sign up
              </button>
            </div>
          </div>

          {/* Trust & Security Badges at Card Bottom */}
          <div className="mt-space-md flex flex-wrap items-center justify-center gap-space-md text-on-surface-variant">
            <div className="flex items-center gap-1.5 font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
              <span>256-bit SSL Encrypted</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
            <div className="flex items-center gap-1.5 font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px] text-secondary">shield</span>
              <span>SOC-2 Certified</span>
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

export default Signin;
