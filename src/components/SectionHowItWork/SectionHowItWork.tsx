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
    title: "상품 & 검색",
    desc: "검색을 통해 상품을 쉽게 찾을 수 있습니다",
  },
  {
    id: 2,
    img: HIW2img,
    imgDark: HIW2img,
    title: "상품 담기",
    desc: "구매하려는 상품을 선택하여 장바구니에 추가하기",
  },
  {
    id: 3,
    img: HIW3img,
    imgDark: HIW3img,
    title: "당일 배송",
    desc: "오후 5시 이전 주문 시 당일배송",
  },
  {
    id: 4,
    img: HIW4img,
    imgDark: HIW4img,
    title: "상품 사용하기",
    desc: "받으신 상품을 사용설명서에 맞게 사용하기",
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
              <Badge
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
              />
              <h3 className="text-base font-semibold">{item.title}</h3>
              <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">
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
