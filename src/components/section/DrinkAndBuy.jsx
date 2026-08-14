import Button from "../shered/Button"
import Card from "../shered/Card"
import greenCiTea from "../../assets/drink-and-buy/green-ci-tea.jpg"
import chaCola from "../../assets/drink-and-buy/cha-cola.jpg"
import chaponika from "../../assets/drink-and-buy/chaponika.jpg"
import { HOME_URL } from "../../utils/site"

export default function DrinkAndBuy() {
  return (
    <section
      id="drink-and-buy"
      className="flex w-full scroll-mt-20 flex-col items-center bg-[#f5faf5] px-6 py-12 text-center sm:px-8 md:px-12 md:py-16"
    >
      <h2 className="mb-2 text-2xl font-bold text-[#006500] md:text-4xl">
        緑茶を飲む・買う
      </h2>
      <p className="mb-8 text-lg font-semibold text-[#006500]/70 md:mb-12 md:text-2xl">
        - DRINK AND BUY -
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-10 sm:mb-16">
        {/* カード1 */}
        <Card
          image={greenCiTea}
          title={
            <>
              オリジナル緑茶ブランド<br />
              「Green Ci-Tea」
            </>
          }
          description="「Green Ci-Tea Vol.1」「Green Ci-Tea Vol.2」は、7種類の緑茶と2種類のギフトセットを用意しています。"
          aspectRatio="16/9"
        />

        {/* カード2 */}
        <Card
          image={chaCola}
          title={
            <>
              緑茶化計画オリジナル商品<br />
              「茶コーラ」
            </>
          }
          description="市内に本社を置く木村飲料株式会社の大人気商品「茶コーラ」の、島田市緑茶化計画版が完成しました。"
          aspectRatio="16/9"
        />

        {/* カード3 */}
        <Card
          image={chaponika}
          title={
            <>
              緑茶化計画オリジナル商品<br />
              「チャポニカ学習帳」
            </>
          }
          description="ショウワノート株式会社が販売する本家「ジャポニカ学習帳」に倣った、島田市緑茶化計画版の学習帳が完成しました。"
          aspectRatio="16/9"
        />
      </div>

      <Button
        href={HOME_URL}
        width="w-50 sm:w-80"
        variant="primary"
      >
        And More
      </Button>
    </section>
  )
}
