import Button from "./Button"

export default function ExperienceCard({
  image,
  title,
  description,
  href = "/",
  aspectRatio = "4/3",
  buttonText = "この記事を見る",
}) {
  const aspectClasses = {
    "4/3": "aspect-[4/3]",
    "16/9": "aspect-video",
    "1/1": "aspect-square",
  }

  return (
    <div className="bg-white overflow-hidden shadow-lg flex flex-col h-full">
      <img
        src={image}
        alt=""
        className={`w-full ${aspectClasses[aspectRatio]} object-cover`}
      />

      <div className="p-6 flex flex-col h-full">
        <h3 className="text-[#006500] text-2xl font-bold mb-4">
          {title}
        </h3>

        <p className="text-[#003000] leading-7 mb-6">
          {description}
        </p>

        <div className="mt-auto">
          <Button href={href} width="w-60">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  )
}
