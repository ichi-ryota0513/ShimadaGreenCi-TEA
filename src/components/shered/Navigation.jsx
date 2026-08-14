const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (!el) return

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

const navigationItems = [
  { id: "about", label: "緑茶化計画とは", subLabel: "About" },
  { id: "activities", label: "取り組み", subLabel: "Activities" },
  { id: "drink-and-buy", label: "飲む・買う", subLabel: "Drink & Buy" },
  { id: "experience", label: "体験する", subLabel: "Experience" },
]

export default function Navigation({ mobile = false, open = true, onNavigate }) {
  const handleNavigate = (id) => {
    scrollToSection(id)
    onNavigate?.()
  }

  return (
    <nav
      className={mobile
        ? `flex md:hidden flex-col overflow-hidden bg-[#3A8A43] px-4 text-white transition-[max-height,opacity,transform,visibility] duration-500 ease-in-out will-change-[max-height,opacity,transform] ${open
          ? "visible max-h-[calc(100vh-4rem)] translate-y-0 opacity-100"
          : "invisible pointer-events-none max-h-0 -translate-y-1 opacity-0"}`
        : "hidden md:flex items-center gap-8 text-white/80"}
      aria-hidden={mobile ? !open : undefined}
    >
      {navigationItems.map(({ id, label, subLabel }) => (
        <button
          key={id}
          onClick={() => handleNavigate(id)}
          className={mobile
            ? "group flex w-full items-center justify-between border-t border-white/20 py-4 text-left transition-colors hover:text-white"
            : "group text-center transition-colors hover:text-white"}
        >
          <span className={mobile ? "text-lg leading-tight" : "block text-lg leading-tight"}>
            {label}
          </span>
          <span className={mobile
            ? "text-xs uppercase tracking-[0.09em] opacity-60"
            : "block text-xs uppercase tracking-[0.09em] opacity-60"}
          >
            {subLabel}
          </span>
        </button>
      ))}
    </nav>
  )
}
