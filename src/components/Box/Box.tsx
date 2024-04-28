import { useState } from "react";

function Box({ children }: React.PropsWithChildren<{}>) {
  const [btnOpen, setBtnOpen] = useState(true);

  return (
    <div className="relative rounded-lg bg-slate-800">
      <button
        className="absolute right-1 top-1 z-10 h-6 w-6 rounded-full bg-slate-50 text-slate-800"
        onClick={() => setBtnOpen((open) => !open)}
      >
        {btnOpen ? "+" : "-"}
      </button>
      {btnOpen && children}
    </div>
  );
}

export default Box;
