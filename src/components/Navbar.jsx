import { useState } from "react";

const links = [
  { label: "Home", href: "#" },
  { label: "Popular", href: "#popular" },
  { label: "Top rated", href: "#top-rated" },
  { label: "Watchlist", href: "#watchlist" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleClick = (label) => {
    setActive(label);
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0a17]/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-white"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            Movie<span className="text-violet-400">Node</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => handleClick(label)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === label
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:brightness-110 sm:block"
          >
            Sign in
          </button>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg text-gray-300 hover:bg-white/10 md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 stroke-current"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 px-5 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => handleClick(label)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                    active === label
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="mt-3 w-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2.5 text-sm font-semibold text-white"
          >
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
