export default function Button({
  children,
  href = "#",
  width = "w-fit",
  variant = "secondary",
  className = "",
}) {
  const variantClasses = {
    primary: `
      bg-[#006500] text-white border-2 border-[#006500]
      hover:bg-transparent hover:text-[#006500]
    `,
    secondary: `
      bg-transparent text-[#006500] border-2 border-[#006500]
      hover:bg-[#006500] hover:text-white
    `,
  }

  return (
    <a
      href={href}
      className={`
        group flex ${width} max-w-full items-center justify-center gap-3
        mx-auto py-3
        rounded-none
        transition-all duration-300
        ${variantClasses[variant]}
        ${className}
      `}
    >
      <span>{children}</span>

      <span className="transition-transform duration-300 group-hover:translate-x-2">
        →
      </span>
    </a>
  )
}
