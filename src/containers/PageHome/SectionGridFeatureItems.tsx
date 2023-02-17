import React, { FC } from "react";
import HeaderFilterSection from "components/HeaderFilterSection";
import ProductCard from "components/ProductCard";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Product, PRODUCTS } from "data/data";

//
export interface SectionGridFeatureItemsProps {
  data?: Product[];
  headerFilter?: boolean;
}

const SectionGridFeatureItems: FC<SectionGridFeatureItemsProps> = ({
  data = PRODUCTS,
  headerFilter = true,
}) => {
  return (
    <div
      className="nc-SectionGridFeatureItems relative"
      style={{ marginTop: "5rem" }}
    >
      {headerFilter && <HeaderFilterSection heading="실시간 상품 랭킹" />}
      <div
        className={`grid gap-8 product_container template-col-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 `}
      >
        {data.map((item, index) => (
          <ProductCard
            data={item}
            key={index}
            className="product_card_mobile"
          />
        ))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        <ButtonPrimary loading>Show me more</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionGridFeatureItems;
