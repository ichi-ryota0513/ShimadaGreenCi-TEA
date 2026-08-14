import { useEffect, useRef, useState } from "react";
import mainVisual from "../../assets/hero/mainvisual.jpg";
import slideGreenTea01 from "../../assets/hero/slide_green_tea_01.jpg";
import slideGreenTea02 from "../../assets/hero/slide_green_tea_02.jpg";
import slideGreenTea03 from "../../assets/hero/slide_green_tea_03.jpg";

const slides = [
  {
    image: mainVisual,
    link: "/",
  },
  {
    image: slideGreenTea01,
    link: "/",
  },
  {
    image: slideGreenTea03,
    link: "/",
  },
  {
    image: slideGreenTea02,
    link: "/",
  },
];

// 最後→最初、最初→最後を自然につなげるための複製
const loopSlides = [
  slides[slides.length - 1],
  ...slides,
  slides[0],
];

export default function Hero() {
  // 実際のスライドは1番から開始
  const [current, setCurrent] = useState(1);

  // アニメーション中かどうか
  const [isMoving, setIsMoving] = useState(false);

  // 自動再生用タイマー
  const timerRef = useRef(null);

  // スライドを次へ
  const nextSlide = () => {
    if (isMoving) return;

    setIsMoving(true);
    setCurrent((prev) => prev + 1);
  };

  // スライドを前へ
  const prevSlide = () => {
    if (isMoving) return;

    setIsMoving(true);
    setCurrent((prev) => prev - 1);
  };

  // 自動再生
  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [isMoving]);

  // スライド移動終了後の処理
  const handleTransitionEnd = () => {
    // 最後の複製スライドまで来た
    if (current === loopSlides.length - 1) {
      setIsMoving(false);

      // アニメーションなしで本物の1枚目へ移動
      requestAnimationFrame(() => {
        setCurrent(1);
      });

      return;
    }

    // 最初の複製スライドまで来た
    if (current === 0) {
      setIsMoving(false);

      // アニメーションなしで本物の最後へ移動
      requestAnimationFrame(() => {
        setCurrent(slides.length);
      });

      return;
    }

    setIsMoving(false);
  };

  // 現在表示している実際のスライド番号
  const activeIndex =
    current === 0
      ? slides.length - 1
      : current === loopSlides.length - 1
        ? 0
        : current - 1;

  return (
    <section className="relative aspect-[16/9] w-full overflow-hidden px-2 sm:px-4 md:aspect-[1600/774] md:px-12">
      {/* スライド */}
      <div
        className={`flex h-full ${
          isMoving
            ? "transition-transform duration-500 ease-in-out"
            : ""
        }`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {loopSlides.map((slide, index) => (
          <a
            key={`${slide.image}-${index}`}
            href={slide.link}
            className="block h-full min-w-full"
          >
            <img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover"
            />
          </a>
        ))}
      </div>
      
      {/* 左グラデーション */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#f9fdf9]/40 to-transparent sm:w-16 md:w-24" />

      {/* 右グラデーション */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#f9fdf9]/40 to-transparent sm:w-16 md:w-24" />

      {/* 左ボタン */}
      <button
        onClick={prevSlide}
        disabled={isMoving}
        aria-label="前の画像へ"
        className="
          absolute left-2 top-1/2 z-20
          flex h-9 w-9
          -translate-y-1/2
          items-center justify-center
          rounded-full
          bg-black/40
          text-2xl text-white
          shadow-lg
          backdrop-blur-sm
          transition-all duration-300
          hover:scale-110
          hover:bg-[#3A8A43]/40
          active:scale-95
          sm:left-4 sm:h-10 sm:w-10 md:left-6 md:h-12 md:w-12
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* 右ボタン */}
      <button
        onClick={nextSlide}
        disabled={isMoving}
        aria-label="次の画像へ"
        className="
          absolute right-2 top-1/2 z-20
          flex h-9 w-9
          -translate-y-1/2
          items-center justify-center
          rounded-full
          bg-black/40
          text-2xl text-white
          shadow-lg
          backdrop-blur-sm
          transition-all duration-300
          hover:scale-110
          hover:bg-[#3A8A43]/40
          active:scale-95
          sm:right-4 sm:h-10 sm:w-10 md:right-6 md:h-12 md:w-12
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* インジケーター */}
      <div className="
        absolute bottom-2 left-1/2 z-20
        flex -translate-x-1/2 items-center gap-1
        sm:bottom-4 sm:gap-2 md:bottom-6
      ">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isMoving) return;

              setIsMoving(true);
              setCurrent(index + 1);
            }}
            aria-label={`${index + 1}枚目へ`}
            className={`
              flex h-6 items-center px-1
              after:block after:h-1
              transition-all duration-300
              ${
                index === activeIndex
                  ? "after:w-8 after:bg-white sm:after:w-10"
                  : "after:w-4 after:bg-white/40 hover:after:bg-white/70 sm:after:w-5"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}
