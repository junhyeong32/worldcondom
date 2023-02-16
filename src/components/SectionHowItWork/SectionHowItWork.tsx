import React, { FC } from "react";
import NcImage from "shared/NcImage/NcImage";
import HIW1img from "images/HIW1img.png";
import HIW2img from "images/HIW2img.png";
import HIW3img from "images/HIW3img.png";
import HIW4img from "images/HIW4img.png";
import VectorImg from "images/VectorHIW.svg";
import Badge from "shared/Badge/Badge";

export interface SectionHowItWorkProps {
  className?: string;
  data?: typeof DEMO_DATA[0][];
}

const DEMO_DATA = [
  {
    id: 1,
    img: HIW1img,
    imgDark: HIW1img,
    title: "신규 회원 가입시",
    desc: "2,000원 적립금!",
  },
  {
    id: 2,
    img: HIW2img,
    imgDark: HIW2img,
    title: "3만원 이상 구매시",
    desc: "배송비 무료!",
  },
  {
    id: 3,
    img: HIW3img,
    imgDark: HIW3img,
    title: "상품명 미노출",
    desc: "안심 비밀배송!",
  },
  {
    id: 4,
    img: HIW4img,
    imgDark: HIW4img,
    title: "오후 4시이전 주문 시",
    desc: "내일 도착 당일배송!",
  },
];

const SectionHowItWork: FC<SectionHowItWorkProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  return (
    <div
      className={`nc-SectionHowItWork ${className}`}
      data-nc-id="SectionHowItWork"
    >
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 xl:gap-20">
        <img
          className="hidden md:block absolute inset-x-0 top-5"
          src={VectorImg}
          alt="vector"
        />
        {data.map((item: typeof DEMO_DATA[number], index: number) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center max-w-xs mx-auto"
          >
            <NcImage
              containerClassName="mb-4 sm:mb-10 max-w-[140px] mx-auto"
              className="rounded-3xl"
              src={item.img}
            />
            <div className="text-center mt-auto space-y-5">
              {/* <Badge
                name={`Step ${index + 1}`}
                color={
                  !index
                    ? "red"
                    : index === 1
                    ? "indigo"
                    : index === 2
                    ? "yellow"
                    : "purple"
                }
              /> */}
              <h3 className="text-base font-semibold">{item.title}</h3>
              <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6 text-red-600 font-semibold">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionHowItWork;
