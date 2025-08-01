import React from "react";

const Diamond = ({ label, className = "", ...props }) => (
  <div
    className={`w-48 h-48 bg-[#f7f8fa] flex items-center justify-center shadow-md rotate-45 ${className}`}
    {...props}
  >
    <span className="block w-40 text-center font-roobertTrial font-semibold text-lg text-black -rotate-45 select-none leading-tight">
      {label}
    </span>
  </div>
);

export default Diamond;