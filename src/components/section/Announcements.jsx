import AnnouncementItem from "../shered/AnnouncementItem"

export default function Announcements() {
  return (
    <section
      id="announcements"
      className="bg-[#ffffff] pt-16 pb-20 px-4 md:px-8 flex flex-col items-center text-center w-full scroll-mt-20"
    >
      <h2 className="text-[#006500] text-2xl font-bold mb-2">
        お知らせ
      </h2>

      <p className="text-[#006500]/70 text-lg font-semibold mb-8">
        - ANNOUNCEMENTS -
      </p>

      <div className="w-full max-w-4xl">
        <AnnouncementItem
          date="2026.08.10"
          category="イベント"
          title="島田市緑茶化計画のイベントを開催します"
        />

        <AnnouncementItem
          date="2026.08.01"
          category="ニュース"
          title="新しい緑茶体験コンテンツを公開しました"
        />

        <AnnouncementItem
          date="2026.07.25"
          category="お知らせ"
          title="ホームページをリニューアルしました"
        />

        <div className="mt-6 pr-4 w-full flex justify-end">
          <a
            href="/"
            className="group inline-flex items-center gap-2 text-md text-[#006500] transition-colors duration-300 hover:text-[#006500]"
          >
            過去のお知らせ
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

    </section>
  )
}
