import Button from "../shered/Button"
import Card from "../shered/Card"
import ryokuchapost from "../../assets/activities/ryokuchapost.jpg"
import station from "../../assets/activities/station.jpeg"
import gakkouyuugu from "../../assets/activities/gakkouyuugu.jpg"

export default function Activities() {
  return (
    <section
      id="activities"
      className="bg-[#ffffff] pt-16 pb-20 px-4 md:px-8 flex flex-col items-center text-center w-full scroll-mt-20"
    >
      <h2 className="text-[#006500] text-4xl font-bold mb-2">
        これまでの取り組み
      </h2>
      <p className="text-[#006500]/70 text-2xl font-semibold mb-12">
        - ACTIVITIES -
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
        {/* カード1 */}
        <Card
          image={ryokuchapost}
          title="郵便ポストを緑茶化！"
          description="市役所前の郵便ポストを緑茶色（緑茶グリーン）に模様替えしました！"
          aspectRatio="1/1"
        />

        {/* カード2 */}
        <Card
          image={station}
          title="島田駅を緑茶化！"
          description="JR島田駅の約80mのガラス面が、島田市緑茶化計画により華やかになりました！"
          aspectRatio="1/1"
        />

        {/* カード3 */}
        <Card
          image={gakkouyuugu}
          title="学校の遊具を緑茶化！"
          description="島田第一小学校の遊具などを緑茶色に塗装する奉仕活動を行いました！"
          aspectRatio="1/1"
        />
      </div>

      <Button href="/" width="w-80">
        And More
      </Button>

    </section>
  )
}
