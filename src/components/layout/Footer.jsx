import logo from "../../assets/logo/logo.png"

export default function Footer() {
  return (
    <>
      <footer className="mt-8 flex flex-col items-center bg-[#3A8A43] px-4 py-10 text-center text-white sm:px-6 md:px-8 md:py-12">

        <img
          src={logo}
          alt="Logo"
          className="mx-auto mb-6 h-8 md:mb-8 md:h-10"
        />

        <p className="max-w-2xl text-sm leading-6 md:text-base md:leading-7">
          島田市市長戦略部広報プロモーション課シティプロモーション・移住促進担当<br />
          島田市中央町1-1　TEL：0547-36-7355　FAX：0547-34-1425
        </p>
      </footer>
      <div className="w-full bg-green-800 px-4 pb-4 pt-6 text-center text-white sm:px-6 md:px-8 md:pb-2 md:pt-8">
        <p className="mx-auto mb-6 max-w-3xl text-xs leading-6 sm:text-sm md:mb-8 md:text-base md:leading-7">
          ※当サイトは、地方創生★政策アイデアコンテスト応募用のモックアップとして作成されたものです。<br />
          島田市、島田市緑茶化計画の公式サイトではありませんのでご注意ください。
        </p>
        <p className="text-xs leading-6 sm:text-sm md:text-base">
          &copy; 「角川ドワンゴ学園 Green Tea-m」 All Rights Reserved.
        </p>
      </div>
    </>
  )
}
