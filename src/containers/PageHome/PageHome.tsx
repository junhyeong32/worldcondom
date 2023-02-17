import React from "react";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionPromo1 from "components/SectionPromo1";
import { Helmet } from "react-helmet";
import SectionHero2 from "components/SectionHero/SectionHero2";
import SectionSliderLargeProduct from "components/SectionSliderLargeProduct";
import SectionSliderProductCard from "components/SectionSliderProductCard";
import DiscoverMoreSlider from "components/DiscoverMoreSlider";
import SectionGridMoreExplore from "components/SectionGridMoreExplore/SectionGridMoreExplore";
import SectionPromo2 from "components/SectionPromo2";
import SectionSliderCategories from "components/SectionSliderCategories/SectionSliderCategories";
import SectionGridFeatureItems from "./SectionGridFeatureItems";
import SectionGridFeatureItems2 from "./SectionGridFeatureItems2";
import SectionPromo3 from "components/SectionPromo3";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import SectionMagazine5 from "containers/BlogPage/SectionMagazine5";
import Heading from "components/Heading/Heading";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import { PRODUCTS, SPORT_PRODUCTS } from "data/data";

function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <Helmet>
        <title>Ciseco || Ecommerce Template</title>
      </Helmet>

      {/* SECTION HERO */}
      <SectionHero2 />

      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-15">
        <div className=" dark:border-slate-700">
          <SectionHowItWork />
        </div>
        <SectionGridFeatureItems />

        <SectionPromo1 />

        <div className="flex flex-col justify-center items-center">
          <h2 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.2] tracking-tight">
            콘돔 브랜드
          </h2>
          <span className="block mt-6 text-slate-500 dark:text-slate-400 ">
            전 세계 모든 브랜드 총집합! 월드콘돔
          </span>
        </div>

        <SectionGridFeatureItems2
          heading="고급 국산 콘돔"
          data={[
            PRODUCTS[4],
            SPORT_PRODUCTS[5],
            PRODUCTS[7],
            SPORT_PRODUCTS[1],
            // PRODUCTS[6],
          ]}
        />

        <SectionGridFeatureItems2
          heading="고급 수입 콘돔"
          data={[
            PRODUCTS[4],
            SPORT_PRODUCTS[5],
            PRODUCTS[7],
            SPORT_PRODUCTS[1],
            // PRODUCTS[6],
          ]}
        />

        <SectionPromo2 />

        <SectionGridFeatureItems2
          heading="스페셜 세트"
          data={[
            PRODUCTS[4],
            SPORT_PRODUCTS[5],
            PRODUCTS[7],
            SPORT_PRODUCTS[1],
            // PRODUCTS[6],
          ]}
        />

        <SectionGridFeatureItems2
          heading="대용량 콘돔"
          data={[
            PRODUCTS[4],
            SPORT_PRODUCTS[5],
            PRODUCTS[7],
            SPORT_PRODUCTS[1],
            // PRODUCTS[6],
          ]}
        />

        <div className="flex flex-col justify-center items-center">
          <h2 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.2] tracking-tight">
            배너
          </h2>
        </div>
      </div>

      {/* <div className="mt-24 lg:mt-32">
        <DiscoverMoreSlider />
      </div> */}

      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        {/* SECTION */}

        {/* SECTION */}

        {/* SECTION */}
        {/* <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          <SectionGridMoreExplore />
        </div> */}

        {/* <SectionSliderProductCard heading="젤(윤활제)" subHeading="ㅇㅇㅇㅇ" /> */}

        {/*  */}

        {/* SECTION 3 */}
        <SectionSliderLargeProduct
          heading="낀듯 안낀듯.. 초박형♡"
          cardStyle="style2"
        />

        <div className="flex flex-col justify-center items-center">
          <h2 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.2] tracking-tight">
            배너
          </h2>
        </div>

        {/*  */}
        {/* <SectionSliderCategories /> */}

        {/* SECTION */}
        {/* <SectionPromo3 /> */}

        {/* SECTION */}

        <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          <div>
            <Heading rightDescText="BLOG">유익한 정보</Heading>
            <SectionMagazine5 />
            <div className="flex mt-16 justify-center">
              <ButtonSecondary>Show all blog articles</ButtonSecondary>
            </div>
          </div>
        </div>

        {/*  */}
        <SectionClientSay />
      </div>
    </div>
  );
}

export default PageHome;
