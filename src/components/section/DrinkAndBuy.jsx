import Button from "../shered/Button"
import Card from "../shered/Card"
import greenCiTea from "../../assets/drink-and-buy/green-ci-tea.jpg"
import chaCola from "../../assets/drink-and-buy/cha-cola.jpg"
import chaponika from "../../assets/drink-and-buy/chaponika.jpg"

export default function DrinkAndBuy() {
  return (
    <section
      id="drink-and-buy"
      className="bg-[#f5faf5] pt-16 pb-20 px-4 md:px-8 flex flex-col items-center text-center w-full scroll-mt-20"
    >
      <h2 className="text-[#006500] text-4xl font-bold mb-2">
        緑茶を飲む・買う
      </h2>
      <p className="text-[#006500]/70 text-2xl font-semibold mb-12">
        - DRINK AND BUY -
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
        {/* カード1 */}
        <Card
          image={greenCiTea}
          title="オリジナル緑茶ブランド「Green Ci-Tea」"
          description="「Green Ci-Tea Vol.1」「Green Ci-Tea Vol.2」は、7種類の緑茶と2種類のギフトセットを用意しています。"
          aspectRatio="16/9"
        />

        {/* カード2 */}
        <Card
          image={chaCola}
          title="緑茶化計画オリジナル商品「茶コーラ」"
          description="市内に本社を置く木村飲料株式会社の大人気商品「茶コーラ」の、島田市緑茶化計画版が完成しました。"
          aspectRatio="16/9"
        />

        {/* カード3 */}
        <Card
          image={chaponika}
          title="緑茶化計画オリジナル商品「チャポニカ学習帳」"
          description="ショウワノート株式会社が販売する本家「ジャポニカ学習帳」に倣った、島田市緑茶化計画版の学習帳が完成しました。"
          aspectRatio="16/9"
        />
      </div>

      <Button href="/" width="w-80">
        And More
      </Button>
    </section>
  )
}
