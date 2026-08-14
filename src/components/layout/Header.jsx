import Navigation from "../shered/Navigation"
import logo from "../../assets/logo/logo.png"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#3A8A43]">
      <div className="max-w-6xl mx-auto px-8 h-16 md:h-20 flex items-center justify-center md:justify-between">
        {/* Logo */}
        <div className="text-white font-bold tracking-wide text-xl md:text-2xl text-center">
          <a href="/">
            <img src={logo} alt="Logo" className="h-8 mx-auto" />
          </a>
        </div>

        {/* Navigation */}
        <Navigation />
      </div>
    </header>
  )
}
