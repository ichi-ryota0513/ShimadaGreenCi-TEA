import Button from "../shered/Button"

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#f5faf5] pt-16 pb-20 px-4 md:px-8 flex flex-col items-center text-center w-full scroll-mt-20"
    >
      <h2 className="text-[#006500] text-4xl font-bold mb-2">
        島田市緑茶化計画とは？
      </h2>
      <p className="text-[#006500]/70 text-2xl font-semibold mb-12">
        - ABOUT -
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-8">
        <img
          src="/logo/icon_white.png"
          alt="logo"
          className="w-72 h-72 object-contain mb-8 border-2 border-[#3A8A43]"
        />
        <img
          src="/logo/icon_green.jpg"
          alt="logo"
          className="w-72 h-72 object-contain mb-8 border-2 border-[#3A8A43]"
        />
      </div>

      <p className="text-[#003000] text-xl mb-12">
        島田市が誇る緑茶への愛と魅力を活用し、まち全体を「緑茶グリーン」に染めていくシティプロモーションです。<br />
        市民の緑茶への誇りを高め、まちづくりや観光、国内外へのPR、産業振興につなげることで、<br />
        島田市を「世界でもっとも緑茶を愛するまち」として発信し、人やまちを元気にすることを目指しています。
      </p>

      <Button
        href="/"
        width="w-80"
        variant="primary"
      >
        詳しくはこちら
      </Button>
    </section>
  )
}
