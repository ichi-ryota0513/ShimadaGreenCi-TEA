import Button from "../shered/Button"
import Card from "../shered/Card"
import experience1 from "../../assets/experience/experience1.png"
import experience2 from "../../assets/experience/experience2.jpg"
import experience3 from "../../assets/experience/experience3.jpg"

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#ffffff] pt-16 pb-20 px-4 md:px-8 flex flex-col items-center text-center w-full scroll-mt-20"
    >
      <h2 className="text-[#006500] text-4xl font-bold mb-2">
        緑茶を体験する
      </h2>
      <p className="text-[#006500]/70 text-2xl font-semibold mb-16">
        - EXPERIENCE -
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
        {/* カード1 */}
        <Card
          image={experience1}
          title="島田の緑茶観光"
          description="大井川流域で様々な体験と共に極上の一服を！"
        />

        {/* カード2 */}
        <Card
          image={experience2}
          title="茶摘みと茶畑DEいっぷく"
          description="茶摘みを学び、製茶を学び、茶畑で極上の一服を。"
        />

        {/* カード3 */}
        <Card
          image={experience3}
          title="蓬莱橋DEいっぷく"
          description="世界最長の木造歩道橋「蓬莱橋」で、川風に吹かれて極上の一服を。"
        />
      </div>

      <Button href="/" width="w-80">
        And More
      </Button>
    </section>
  )
}
