const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (!el) return

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

export default function Navigation() {
  return (
    <nav className="hidden md:flex items-center gap-8 text-white/80">
      <button
        onClick={() => scrollToSection("about")}
        className="group text-center transition-colors hover:text-white"
      >
        <span className="block text-lg leading-tight">
          緑茶化計画とは
        </span>
        <span className="block text-xs uppercase opacity-60 tracking-[0.09em]">
          About
        </span>
      </button>

      <button
        onClick={() => scrollToSection("activities")}
        className="group text-center transition-colors hover:text-white"
      >
        <span className="block text-lg leading-tight">
          取り組み
        </span>
        <span className="block text-xs uppercase opacity-60 tracking-[0.09em]">
          Activities
        </span>
      </button>

      <button
        onClick={() => scrollToSection("drink-and-buy")}
        className="group text-center transition-colors hover:text-white"
      >
        <span className="block text-lg leading-tight">
          飲む・買う
        </span>
        <span className="block text-xs uppercase opacity-60 tracking-[0.09em]">
          Drink & Buy
        </span>
      </button>

      <button
        onClick={() => scrollToSection("experience")}
        className="group text-center transition-colors hover:text-white"
      >
        <span className="block text-lg leading-tight">
          体験する
        </span>
        <span className="block text-xs uppercase opacity-60 tracking-[0.09em]">
          Experience
        </span>
      </button>
    </nav>
  )
}
