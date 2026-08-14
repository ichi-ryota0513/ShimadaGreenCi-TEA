import { HOME_URL } from "../../utils/site"

export default function AnnouncementItem({
  date,
  category,
  title,
  href = HOME_URL,
}) {
  return (
    <article className="w-full border-b border-[#006500]/20">
      <a
        href={href}
        className="group relative block py-4 hover:bg-[#f5faf5]/50 md:py-5"
      >
      <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-3 px-3 text-left sm:gap-x-4 sm:px-4 md:flex md:gap-4">
        <div className="flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-4">
          <time className="text-xs text-[#006500]/60 md:text-sm">
            {date}
          </time>

          <span className="border border-[#006500]/30 px-2.5 py-0.5 text-[11px] text-[#006500] md:px-3 md:py-1 md:text-xs">
            {category}
          </span>
        </div>

        <h3 className="min-w-0 pr-8 text-sm font-medium leading-6 text-[#333] md:flex-1 md:pr-0 md:text-base md:leading-normal">
          {title}
        </h3>

        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-[#006500] transition-transform duration-300 group-hover:translate-x-1 sm:right-4 md:right-5 md:text-xl">
          →
        </span>
      </div>
      </a>
    </article>
  )
}
