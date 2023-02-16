import React, { FC } from "react";
import NcImage from "shared/NcImage/NcImage";
import rightImgDemo from "images/rightLargeImg.png";
import rightLargeImgDark from "images/rightLargeImgDark.png";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Logo from "shared/Logo/Logo";
import ButtonSecondary from "shared/Button/ButtonSecondary";

export interface SectionPromo1Props {
  className?: string;
}

const SectionPromo1: FC<SectionPromo1Props> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionPromo1 relative flex flex-col lg:flex-row items-center ${className}`}
      data-nc-id="SectionPromo1"
    >
      <div className="relative flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <Logo className="w-28" />
        <h2 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.2] tracking-tight">
          금주의 타임세일!
        </h2>
        <span className="block mt-6 text-slate-500 dark:text-slate-400 ">
          월드콘돔에서 진행하는 금주의 타임세일 상품들!
          <br /> 알뜰하고 실속있게 미리미리 준비하세요.
        </span>
        <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
          <ButtonPrimary href="/page-collection" className="">
            상품 보러가기
          </ButtonPrimary>
          <ButtonSecondary
            href="/page-search"
            className="border border-slate-100 dark:border-slate-700"
          >
            구매하기
          </ButtonSecondary>
        </div>
      </div>
      <div className="relative flex-1 max-w-xl lg:max-w-none">
        <NcImage containerClassName="block dark:hidden" src={rightImgDemo} />
        <NcImage
          containerClassName="hidden dark:block"
          src={rightLargeImgDark}
        />
      </div>
    </div>
  );
};

export default SectionPromo1;
