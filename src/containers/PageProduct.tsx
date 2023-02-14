import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Pagination from "shared/Pagination/Pagination";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import SectionSliderCollections from "components/SectionSliderLargeProduct";
import SectionPromo1 from "components/SectionPromo1";
import ProductCard from "components/ProductCard";
import TabFilters from "./TabFilters";
import { PRODUCTS, SPORT_PRODUCTS } from "data/data";
import SectionSliderProductCard from "components/SectionSliderProductCard";
import SectionSliderLargeProduct from "components/SectionSliderLargeProduct";

export interface PageProductProps {
  className?: string;
}

const cardList = [
  {
    heading: "Best Sellers",
    rightDescText: "초박형 콘돔",
  },
  {
    heading: "Best Sellers",
    rightDescText: "사정지연 콛돔",
  },
  {
    heading: "Best Sellers",
    rightDescText: "돌기콘돔",
  },
  {
    heading: "Best Sellers",
    rightDescText: "손가락 콘돔",
  },
  {
    heading: "Best Sellers",
    rightDescText: "구슬 콘돔",
  },
];

const PageProduct: FC<PageProductProps> = ({ className = "" }) => {
  const location = useLocation();
  const productName = location.pathname.split("/")[2];

  return (
    <div className={`nc-PageProduct ${className}`} data-nc-id="PageProduct">
      <Helmet>
        <title>Collection || Ciseco Ecommerce Template</title>
      </Helmet>

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
        <div className="space-y-10 lg:space-y-14">
          {/* HEADING */}
          <div className="max-w-screen-sm">
            <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
              {productName === "thin"
                ? "초박형 콘돔"
                : productName === "delay"
                ? "사정지연 콘돔"
                : productName === "spin"
                ? "돌기 콘돔"
                : productName === "finger"
                ? "손가락 콘돔"
                : "구슬 콘돔"}
            </h2>
            <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
              {productName === "thin"
                ? "초박형 콘돔은 매우 두께가 얇은 형태로 많은 분들이 선호하는 대표적인 콘돔의 종류입니다. 피임은 철저하게 해야하지만 콘돔의 두께로 인해 이물감을 느끼는 많은 남성,여성 분들이 낀듯 안낀듯한 느낌의 사용감으로 만족감이 굉장히 큰 상품입니다."
                : productName === "delay"
                ? "사정지연 콘돔은 연령을 불문하고 대한민국 남성 3명 중 1명꼴로 겪으시는 빠른 사정으로 인한 고민을 극복할 수 있도록 만들어진 상품입니다. 콘돔을 씌우면 약한(극소량) 마취가 되어 평균보다 2~3배 이상의 시간 동안 사랑을 나누실 수 있습니다."
                : productName === "spin"
                ? "돌기 콘돔(돌출형 콘돔)은 상품마다 모양이나 크기가 제각각이지만, 대게 작은 돌기들이 일정한 간격으로 겉면에 오돌토돌하게 돌출 되어있는 기능성 상품입니다. 수 많은 돌기들이 사랑을 나눌 때 여성의 몸안을 더욱 더 자극시키기 때문에 더 큰 자극과 색다른 시간이 필요하다면 돌기형을 강력 추천드립니다."
                : productName === "finger"
                ? "손가락 콘돔은 맨손으로 여성의 중요 부위를 자극할 떄, 손톱으로 인해 생길 수 있는 상처로 세균에 감염될 위험이 있어 손가락에 끼워서 사용합니다. 남자의 손에 끼운 후 핸즈 플레이를 할 수 있고, 여성 혼자서 셀프 플레이에 사용할 수 있습니다. 성별과 관계없이 평균 손가락 크기를 고려해 만들었으며 최대 세 손가락까지 커버할 수 있습니다."
                : "구슬 콘돔은 오직 월드콘돔에서만 만나보실 수 있는 특수한 기능이 담긴 발명품으로 움직임에 따라 이 구슬이 여성의 몸안 구석구석을 굴러다닙니다. 여성의 스팟이 어디에 있든 이 구슬은 항상 닿을 수 있어 남녀의 쾌감을 대폭 증진 시킵니다."}
            </span>
          </div>

          <hr className="border-slate-200 dark:border-slate-700" />
          <main>
            <div className="relative space-y-24 my-24 lg:space-y-32 lg:my-32">
              {/* {PRODUCTS.map((item, index) => (
                <ProductCard data={item} key={index} />
              ))} */}
              <SectionSliderProductCard
                heading={
                  productName === "thin"
                    ? "초박형 콘돔"
                    : productName === "delay"
                    ? "사정지연 콘돔"
                    : productName === "spin"
                    ? "돌기 콘돔"
                    : productName === "finger"
                    ? "손가락 콘돔"
                    : "구슬 콘돔"
                }
                data={[
                  PRODUCTS[4],
                  SPORT_PRODUCTS[5],
                  PRODUCTS[7],
                  SPORT_PRODUCTS[1],
                  PRODUCTS[6],
                ]}
              />
            </div>

            <SectionSliderLargeProduct  cardStyle="style2" />

            {/* PAGINATION */}
            {/* <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
              <Pagination />
              <ButtonPrimary loading>Show me more</ButtonPrimary>
            </div> */}
          </main>
        </div>

        {/* === SECTION 5 === */}
        {/* <hr className="border-slate-200 dark:border-slate-700" /> */}

        {/* <SectionSliderCollections /> */}

        {/* SUBCRIBES */}
        {/* <SectionPromo1 /> */}
      </div>
    </div>
  );
};

export default PageProduct;
