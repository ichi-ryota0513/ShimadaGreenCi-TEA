import Button from "../shered/Button"
import Card from "../shered/Card"
import ryokuchapost from "../../assets/activities/ryokuchapost.jpg"
import station from "../../assets/activities/station.jpeg"
import gakkouyuugu from "../../assets/activities/gakkouyuugu.jpg"
import { HOME_URL } from "../../utils/site"

export default function Activities() {
  return (
    <section
      id="activities"
      className="flex w-full scroll-mt-20 flex-col items-center bg-[#ffffff] px-6 py-12 text-center sm:px-8 md:px-12 md:py-16"
    >
      <h2 className="mb-2 text-2xl font-bold text-[#006500] md:text-4xl">
        これまでの取り組み
      </h2>
      <p className="mb-8 text-lg font-semibold text-[#006500]/70 md:mb-12 md:text-2xl">
        - ACTIVITIES -
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-10 sm:mb-16">
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
