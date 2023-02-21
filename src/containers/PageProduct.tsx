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
import SectionGridFeatureItems2 from "./PageHome/SectionGridFeatureItems2";
import HeaderFilterSection from "components/HeaderFilterSection";

export interface PageProductProps {
  className?: string;
}

const urlByData = [
  {
    href: "/product/best",
    name: "BEST 상품",
    desc: "월드콘돔에서 현재 가장 잘 나가는 BEST 상품!",
  },
  {
    href: "/product/sepcial",
    name: "특수콘돔",
    desc: "특수콘돔(기능성 콘돔)은 일반형 과는 달리 특수한 기능이 접목되어 있는 콘돔을 말합니다.",
  },
  {
    href: "/product/time",
    name: "타임세일",
    desc: "금주의 타임세일 상품들! 알뜰하고 실속있게 미리미리 준비하세요!",
  },
  {
    href: "/product/love",
    name: "러브/마사지젤",
    desc: "이건 사랑의 묘약..♡기분좋은 사랑을 원하는 당신에겐 선택이 아닌 필수!",
  },
  {
    href: "/product/brand",
    name: "콘돔 브랜드",
    desc: "전 세계 모든 콘돔 브랜드 총 집합! World Condoms. 가장 신뢰할 수 있는 품질의 브랜드만 엄선하여 소개해드립니다.",
  },
  {
    href: "/product/thin",
    name: "초박형 콘돔",
    desc: "매우 두께가 얇은 형태로 많은 분들이 가장 선호하는 대표적인 종류. 낀듯 안낀듯한 느낌의 사용감으로 만족감이 굉장히 큽니다.",
  },
  {
    href: "/product/delay",
    name: "사정지연 콘돔",
    desc: "대한민국 남성 3명 중 1명꼴로 겪으시는 빠른 사정으로 인한 고민을 극복할 수 있도록 만들어진 기능성 상품! 약한(극소량) 마취가 되어 평균보다 2~3배 이상의 시간 동안 사랑을 나누실 수 있습니다♡",
  },
  {
    href: "/product/spin",
    name: "돌기 콘돔",
    desc: "작은 돌기들이 일정한 간격으로 겉면에 오돌토돌하게 돌출 되어있어, 사랑을 나눌 때 더 큰 자극과 색다른 시간을 선사해줍니다. ",
  },
  {
    href: "/product/finger",
    name: "손가락 콘돔",
    desc: "맨손으로 여성의 중요 부위를 자극할 때, 생길 수 있는 상처로 세균에 감염될 위험이 있어 손가락에 끼워 플레이합니다. 사랑하는 그녀의 몸을 소중히 지켜주세요.",
  },
  {
    href: "/product/marble",
    name: "구슬 콘돔",
    desc: "움직임에 따라 이 구슬은 여성의 몸안 구석구석을 굴러다닙니다. 스팟이 어디에 있든 이 구슬은 항상 닿을 수 있어 그녀의 쾌감을 대폭 증진 시킵니다. 오직 월드콘돔에서만 만나보실 수 있습니다!",
  },
  {
    href: "/product/okamoto",
    name: "오카모토",
    desc: "Okamoto는 85년의 전통을 자랑하는 콘돔 최고 품질의 세계적 리더입니다. 일본 판매량 1위! 초박형 상품이 가장 대표적이며 실키하고 자연스러운 느낌을 제공합니다.",
  },
  {
    href: "/product/uni",
    name: "유니더스",
    desc: "유니더스는 우리나라의 가장 대표적인 콘돔 브랜드로 저렴한 가격의 가성비와, 대표 상품인 유니더스 롱러브의 엄청난 인기로 국내 1위 시장점유율을 가지게 되었습니다.  ",
  },
  {
    href: "/product/sagami",
    name: "사가미",
    desc: "Sagami는 일본 최초의 콘돔 제조업체입니다. 세계에서 가장 얇은 콘돔 중 하나를 제공하며, 거의 착용하지 않은듯한 느낌으로 파트너에게 열을 전달합니다.",
  },
  {
    href: "/product/durex",
    name: "듀렉스",
    desc: "Durex는 영국의 콘돔 브랜드로 글로벌 시장의 30%를 차지하는,세계에서 가장 많이 판매되는 브랜드 중 하나입니다. 나선형태와 돌기가 있는 형태의 특수콘돔이 인기가 좋습니다.",
  },
  {
    href: "/product/set",
    name: "Set 상품",
    desc: "월드콘돔에서만 구매 가능! Special Set구성 패키지와 대용량 상품.",
  },
  {
    href: "/product/popular",
    name: "인기콘돔 SET",
    // desc: "구슬 콘돔은 오직 월드콘돔에서만 만나보실 수 있는 특수한 기능이 담긴 발명품으로 움직임에 따라 이 구슬이 여성의 몸안 구석구석을 굴러다닙니다. 여성의 스팟이 어디에 있든 이 구슬은 항상 닿을 수 있어 남녀의 쾌감을 대폭 증진 시킵니다.",
  },
  {
    href: "/product/cdgel",
    name: "CD+GEL SET",
    // desc: "구슬 콘돔은 오직 월드콘돔에서만 만나보실 수 있는 특수한 기능이 담긴 발명품으로 움직임에 따라 이 구슬이 여성의 몸안 구석구석을 굴러다닙니다. 여성의 스팟이 어디에 있든 이 구슬은 항상 닿을 수 있어 남녀의 쾌감을 대폭 증진 시킵니다.",
  },
  {
    href: "/product/big",
    name: "대용량 상품",
    // desc: "구슬 콘돔은 오직 월드콘돔에서만 만나보실 수 있는 특수한 기능이 담긴 발명품으로 움직임에 따라 이 구슬이 여성의 몸안 구석구석을 굴러다닙니다. 여성의 스팟이 어디에 있든 이 구슬은 항상 닿을 수 있어 남녀의 쾌감을 대폭 증진 시킵니다.",
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
              {urlByData.map(
                (data, key) => data.href === location.pathname && data.name
              )}
            </h2>
            <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
              {urlByData.map(
                (data, key) => data.href === location.pathname && data.desc
              )}
            </span>
          </div>

          <hr className="border-slate-200 dark:border-slate-700" />
          <main>
            <div className="relative space-y-24 my-24 lg:space-y-32 lg:my-32">
              {/* {PRODUCTS.map((item, index) => (
                <ProductCard data={item} key={index} />
              ))} */}
              <SectionGridFeatureItems2
                heading={urlByData.map(
                  (data, key) => data.href === location.pathname && data.name
                )}
                filter={
                  (location.pathname === "/product/special" ||
                    location.pathname === "/product/set" ||
                    location.pathname === "/product/brand") &&
                  true
                }
                navItemList={
                  location.pathname === "/product/special"
                    ? [
                        "전체",
                        "초박형 콘돔",
                        "사정지연 콘돔",
                        "돌기 콘돔",
                        "손가락 콘돔",
                        "구슬 콘돔",
                      ]
                    : location.pathname === "/product/set"
                    ? ["전체", "인기콘돔 SET", "CD+GEL SET", "대용량 상품"]
                    : location.pathname === "/product/brand" && [
                        "전체",
                        "오카모토",
                        "유니더스",
                        "사가미",
                        "듀렉스",
                      ]
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

            <SectionSliderLargeProduct cardStyle="style2" />

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
