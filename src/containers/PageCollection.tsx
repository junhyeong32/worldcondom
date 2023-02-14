import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Pagination from "shared/Pagination/Pagination";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import SectionSliderCollections from "components/SectionSliderLargeProduct";
import SectionPromo1 from "components/SectionPromo1";
import ProductCard from "components/ProductCard";
import TabFilters from "./TabFilters";
import { PRODUCTS, SPORT_PRODUCTS } from "data/data";
import SectionSliderProductCard from "components/SectionSliderProductCard";

export interface PageCollectionProps {
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

const PageCollection: FC<PageCollectionProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageCollection ${className}`}
      data-nc-id="PageCollection"
    >
      <Helmet>
        <title>Collection || Ciseco Ecommerce Template</title>
      </Helmet>

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
        <div className="space-y-10 lg:space-y-14">
          {/* HEADING */}
          <div className="max-w-screen-sm">
            <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
              특수콘돔
            </h2>
            <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
              특수콘돔(기능성 콘돔)은 일반 콘돔과는 달리 특수한 기능이
              접목되어있는 콘돔을 말합니다. 이 특수한 기능들의 종류에는 초박형,
              사정지연, 돌기(돌출), 손가락, 구슬 등으로 나뉠 수 있습니다. 전
              세계 모든 브랜드의 제품들을 만나보세요.
            </span>
          </div>

          <hr className="border-slate-200 dark:border-slate-700" />
          <main>
            {/* TABS FILTER */}
            {/* <TabFilters /> */}

            {/* LOOP ITEMS */}

            <div className="relative space-y-24 my-24 lg:space-y-32 lg:my-32">
              {/* {PRODUCTS.map((item, index) => (
                <ProductCard data={item} key={index} />
              ))} */}
              {cardList.map((item, key) => (
                <SectionSliderProductCard
                  heading={item.heading}
                  subHeading={item.rightDescText}
                  data={[
                    PRODUCTS[4],
                    SPORT_PRODUCTS[5],
                    PRODUCTS[7],
                    SPORT_PRODUCTS[1],
                    PRODUCTS[6],
                  ]}
                />
              ))}
            </div>

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

export default PageCollection;
