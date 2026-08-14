import { useState } from "react"
import Navigation from "../shered/Navigation"
import logo from "../../assets/logo/logo.png"
import { HOME_URL } from "../../utils/site"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#3A8A43]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold tracking-wide text-xl md:text-2xl">
          <a href={HOME_URL}>
            <img src={logo} alt="Logo" className="h-6 md:h-8" />
          </a>
        </div>

        {/* PC navigation */}
        <Navigation />

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md text-white transition-colors hover:bg-white/10 md:hidden"
        >
          <span className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-opacity duration-200 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-transform duration-200 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile navigation */}
      <Navigation
        mobile
        open={isMenuOpen}
        onNavigate={() => setIsMenuOpen(false)}
      />
    </header>
  )
}
