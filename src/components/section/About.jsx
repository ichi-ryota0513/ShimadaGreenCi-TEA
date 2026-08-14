import Button from "../shered/Button"
import iconWhite from "../../assets/logo/icon_white.png"
import iconGreen from "../../assets/logo/icon_green.jpg"
import { HOME_URL } from "../../utils/site"

export default function About() {
  return (
    <section
      id="about"
      className="flex w-full scroll-mt-20 flex-col items-center bg-[#f5faf5] px-6 py-12 text-center sm:px-8 md:px-12 md:py-16"
    >
      <h2 className="mb-2 text-2xl font-bold text-[#006500] md:text-4xl">
        島田市緑茶化計画とは？
      </h2>
      <p className="mb-8 text-lg font-semibold text-[#006500]/70 md:mb-12 md:text-2xl">
        - ABOUT -
      </p>

      <div className="mb-8 flex w-full max-w-2xl flex-row items-center justify-center gap-3 sm:gap-6 md:gap-12">
        <img
          src={iconWhite}
          alt="logo"
          className="aspect-square min-w-0 flex-1 border-2 border-[#3A8A43] object-contain md:mb-8 md:h-72 md:w-72 md:flex-none"
        />
        <img
          src={iconGreen}
          alt="logo"
          className="aspect-square min-w-0 flex-1 border-2 border-[#3A8A43] object-contain md:mb-8 md:h-72 md:w-72 md:flex-none"
        />
      </div>

      <p className="mb-10 max-w-5xl text-base leading-7 text-[#003000] md:mb-12 md:text-xl md:leading-8">
        島田市が誇る緑茶への愛と魅力を活用し、まち全体を「緑茶グリーン」に染めていくシティプロモーションです。<br />
        市民の緑茶への誇りを高め、まちづくりや観光、国内外へのPR、産業振興につなげることで、<br />
        島田市を「世界でもっとも緑茶を愛するまち」として発信し、人やまちを元気にすることを目指しています。
      </p>

      <Button
        href={HOME_URL}
        width="w-50 sm:w-80"
        variant="primary"
      >
        詳しくはこちら
      </Button>
    </section>
  )
}
