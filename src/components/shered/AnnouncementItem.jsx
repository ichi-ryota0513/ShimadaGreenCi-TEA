export default function AnnouncementItem({
  date,
  category,
  title,
}) {
  return (
    <article className="group w-full border-b border-[#006500]/20 py-5 hover:bg-[#f5faf5]/50">
      <div className="flex items-center gap-4 text-left px-4">
        <time className="text-sm text-[#006500]/60">
          {date}
        </time>

        <span className="px-3 py-1 text-xs text-[#006500] border border-[#006500]/30">
          {category}
        </span>

        <h3 className="flex-1 text-[#333] font-medium">
          {title}
        </h3>

        <span className="mr-2 text-[#006500] text-xl transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </div>
    </article>
  )
}
