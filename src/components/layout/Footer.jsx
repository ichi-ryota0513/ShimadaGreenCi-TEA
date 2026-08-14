import Navigation from "../shered/Navigation"

export default function Footer() {
  return (
    <>
      <footer className="bg-[#3A8A43] text-white py-12 mt-8 text-center flex flex-col items-center">

        <img
          src="/logo/logo.png"
          alt="Logo"
          className="h-10 mx-auto mb-8"
        />

        <p className="text-md">
          島田市市長戦略部広報プロモーション課シティプロモーション・移住促進担当<br />
          島田市中央町1-1　TEL：0547-36-7355　FAX：0547-34-1425
        </p>
      </footer>
      <div className="bg-green-800 text-white text-center pt-8 pb-2 w-full">
        <p className="mb-8">
          ※当サイトは、地方創生★政策アイデアコンテスト応募用のモップアップとして作成されたものです。<br />
          島田市、島田市緑茶化計画の公式サイトではありませんのでご注意ください。
        </p>
        <p>&copy; 「角川ドワンゴ学園 Green Tea-m」 All Rights Reserved.</p>
      </div>
    </>
  )
}
