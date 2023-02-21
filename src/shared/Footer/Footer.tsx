import Logo from "shared/Logo/Logo";
import SocialsList1 from "shared/SocialsList1/SocialsList1";
import { CustomLink } from "data/types";
import React from "react";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: [] | CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Best 상품",
    menus: [],
  },
  {
    id: "1",
    title: "타임세일",
    menus: [],
  },
  {
    id: "2",
    title: "특수콘돔",
    menus: [
      { href: "/product/thin", label: "초박형 콘돔" },
      { href: "/product/delay", label: "사정지연 콘돔" },
      { href: "/product/spin", label: "돌기 콘돔" },
      { href: "/product/finger", label: "손가락 콘돔" },
      { href: "/product/marble", label: "구슬 콘돔" },
    ],
  },
  {
    id: "3",
    title: "Set 상품",
    menus: [
      { href: "/product/popular", label: "인기콘돔 SET" },
      { href: "/product/cdgel", label: "CD+GEL SET" },
      { href: "/product/big", label: "대용량 상품" },
    ],
  },
  {
    id: "4",
    title: "러브/마사지젤",
    menus: [],
  },
  {
    id: "6",
    title: "브랜드별 콘돔",
    menus: [
      { href: "/product/okamoto", label: "오카모토" },
      { href: "/product/uni", label: "유니더스" },
      { href: "/product/sagami", label: "사가미" },
      { href: "/product/durex", label: "듀렉스" },
    ],
  },
  {
    id: "7",
    title: "COMMUNITY",
    menus: [],
  },
];

// menus: [
//       { href: "#", label: "Best practices" },
//       { href: "#", label: "Support" },
//       { href: "#", label: "Developers" },
//       { href: "#", label: "Learn design" },
//     ],

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu?.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative felx direction-row py-20 lg:pt-28 lg:pb-24 border-t border-neutral-200 dark:border-neutral-700">
      {/* <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
        <div className="col-span-2 md:col-span-1">
          <Logo />
        </div>
        <div className="col-span-2 flex items-center md:col-span-3">
          <SocialsList1 className="flex items-center space-x-2 lg:space-x-0 lg:flex-col lg:space-y-3 lg:items-start" />
        </div>
      </div> */}
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  );
};

export default Footer;
