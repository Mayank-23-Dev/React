import React from "react";

const Usercard = ({ user, onDelete }) => {
  return (
    <div className="w-full bg-white rounded-2xl border border-zinc-200/80 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-4">
      <div className="flex items-start gap-4">
        {/* User Avatar */}
        <div className="relative h-16 w-16 rounded-xl overflow-hidden bg-zinc-100 shrink-0 border border-zinc-200 shadow-2xs">
          <img
            className="object-cover h-full w-full"
            src={user.image}
            alt={user.name || "User avatar"}
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80";
            }}
          />
        </div>

        {/* User Info */}
        <div className="flex flex-col gap-1 min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base font-bold text-zinc-900 truncate">
              {user.name}
            </h3>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shrink-0">
              <span className="w-1 h-1 rounded-full bg-emerald-500" />
              Active
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-zinc-500 truncate mt-0.5">
            <svg
              className="w-3.5 h-3.5 text-zinc-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="truncate">{user.email}</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-zinc-500 truncate">
            <svg
              className="w-3.5 h-3.5 text-zinc-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>{user.phone || user.mobile}</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-zinc-100">
        <span className="text-[11px] text-zinc-400 font-medium">Verified Profile</span>
        <div className="flex items-center gap-2">
          {onDelete && (
            <button
              onClick={onDelete}
              className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg font-medium text-xs tracking-wide transition-all active:scale-95 cursor-pointer"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Usercard;
