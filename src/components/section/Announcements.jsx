import AnnouncementItem from "../shered/AnnouncementItem"

export default function Announcements() {
  return (
    <section
      id="announcements"
      className="w-full scroll-mt-20 bg-[#ffffff] px-6 py-12 text-center sm:px-8 md:px-12 md:py-16"
    >
      <h2 className="mb-2 text-xl font-bold text-[#006500] md:text-2xl">
        お知らせ
      </h2>

      <p className="mb-8 text-base font-semibold text-[#006500]/70 md:text-lg">
        - ANNOUNCEMENTS -
      </p>

      <div className="mx-auto w-full max-w-4xl">
        <AnnouncementItem
          date="2026.08.15"
          category="お知らせ"
          title="島田市緑茶化計画の公式SNSアカウントを開設しました。"
          href="/"
        />

        <AnnouncementItem
          date="2026.08.15"
          category="お知らせ"
          title="島田市緑茶化計画の公式ECサイトがオープンしました。"
          href="/"
        />

        <AnnouncementItem
          date="2026.08.15"
          category="お知らせ"
          title="島田市緑茶化計画の公式ホームページをリニューアルしました。"
          href="/"
        />

        <div className="mt-6 pr-4 w-full flex justify-end">
          <a
            href="/"
            className="group inline-flex items-center gap-2 text-md text-[#006500] transition-colors duration-300 hover:text-[#006500]"
          >
            過去のお知らせ
            <span className="text-xl pr-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

    </section>
  )
}
