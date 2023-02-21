import { NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";

const MEGAMENU_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/#",
    name: "Clothing",
    children: [
      { id: ncNanoId(), href: "#", name: "Activewear" },
      { id: ncNanoId(), href: "#", name: "Coats & Jackets" },
      { id: ncNanoId(), href: "#", name: "Sleep & Lounge" },
      { id: ncNanoId(), href: "#", name: "Sweatshirts" },
      { id: ncNanoId(), href: "#", name: "Hoodies" },
      { id: ncNanoId(), href: "#", name: "Underwear" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Accessories",
    children: [
      { id: ncNanoId(), href: "#", name: "Sunglasses" },
      { id: ncNanoId(), href: "#", name: "Gloves" },
      { id: ncNanoId(), href: "#", name: "Scarves" },
      { id: ncNanoId(), href: "#", name: "Wallets" },
      { id: ncNanoId(), href: "#", name: "Watches" },
      { id: ncNanoId(), href: "#", name: "Belts" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Shoes",
    children: [
      { id: ncNanoId(), href: "#", name: "Boots" },
      { id: ncNanoId(), href: "#", name: "Loafers " },
      { id: ncNanoId(), href: "#", name: "Slip-Ons" },
      { id: ncNanoId(), href: "#", name: "Slippers" },
      { id: ncNanoId(), href: "#", name: "Sneakers" },
      { id: ncNanoId(), href: "#", name: "Counterfeit" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Brands",
    children: [
      { id: ncNanoId(), href: "#", name: "Full Nelson" },
      { id: ncNanoId(), href: "#", name: "Backpacks" },
      { id: ncNanoId(), href: "#", name: "My Way" },
      { id: ncNanoId(), href: "#", name: "Significant Other" },
      { id: ncNanoId(), href: "#", name: "Re-Arranged" },
      { id: ncNanoId(), href: "#", name: "Counterfeit" },
    ],
  },
];

export const MEGAMENU_TEMPLATES: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/#",
    name: "Home Page",
    children: [
      { id: ncNanoId(), href: "/", name: "Home  1" },
      { id: ncNanoId(), href: "/home2", name: "Home  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Header  1" },
      { id: ncNanoId(), href: "/home2", name: "Header  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Coming Soon" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "특수콘돔",
    children: [
      { id: ncNanoId(), href: "/product/thin", name: "초박형 콘돔" },
      { id: ncNanoId(), href: "/product/delay", name: "사정지연 콘돔" },
      { id: ncNanoId(), href: "/product/spin", name: "돌기 콘돔" },
      { id: ncNanoId(), href: "/product/finger", name: "손가락 콘돔" },
      { id: ncNanoId(), href: "/product/marble", name: "구슬 콘돔" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Other Pages",
    children: [
      { id: ncNanoId(), href: "/checkout", name: "Checkout Page" },
      { id: ncNanoId(), href: "/page-search", name: "Search Page" },
      { id: ncNanoId(), href: "/cart", name: "Cart Page" },
      { id: ncNanoId(), href: "/account", name: "Accout Page" },
      { id: ncNanoId(), href: "/account-my-order", name: "Order Page" },
      { id: ncNanoId(), href: "/subscription", name: "Subscription" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Blog Page",
    children: [
      { id: ncNanoId(), href: "/blog", name: "Blog Page" },
      { id: ncNanoId(), href: "/blog-single", name: "Blog Single" },
      { id: ncNanoId(), href: "/about", name: "About Page" },
      { id: ncNanoId(), href: "/contact", name: "Contact Page" },
      { id: ncNanoId(), href: "/login", name: "Login" },
      { id: ncNanoId(), href: "/signup", name: "Signup" },
    ],
  },
];

const Special: NavItemType[] = [
  { id: ncNanoId(), href: "/product/thin", name: "초박형 콘돔" },
  { id: ncNanoId(), href: "/product/delay", name: "사정지연 콘돔" },
  { id: ncNanoId(), href: "/product/spin", name: "돌기 콘돔" },
  { id: ncNanoId(), href: "/product/finger", name: "손가락 콘돔" },
  { id: ncNanoId(), href: "/product/marble", name: "구슬 콘돔" },
];

const Brand: NavItemType[] = [
  { id: ncNanoId(), href: "/product/okamoto", name: "오카모토" },
  { id: ncNanoId(), href: "/product/uni", name: "유니더스" },
  { id: ncNanoId(), href: "/product/sagami", name: "사가미" },
  { id: ncNanoId(), href: "/product/durex", name: "듀렉스" },
];

const Set: NavItemType[] = [
  { id: ncNanoId(), href: "/product/popular", name: "인기콘돔 SET" },
  { id: ncNanoId(), href: "/product/cdgel", name: "CD+GEL SET" },
  { id: ncNanoId(), href: "/product/big", name: "대용량 상품" },
];

export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/product/best",
    name: "Best 상품",
    // type: "megaMenu",
    // children: MEGAMENU_DEMO,
  },
  {
    id: ncNanoId(),
    href: "/product/time",
    name: "타임세일",
  },
  {
    id: ncNanoId(),
    href: "/product/sepcial",
    name: "특수콘돔",
    type: "dropdown",
    children: Special,
  },

  {
    id: ncNanoId(),
    href: "/product/set",
    name: "Set 상품",
    type: "dropdown",
    children: Set,
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "러브/마사지젤",
  },
  {
    id: ncNanoId(),
    href: "/product/brand",
    name: "브랜드별 콘돔",
    type: "dropdown",
    children: Brand,
  },
  {
    id: ncNanoId(),
    href: "/community",
    name: "COMMUNITY",
  },
];
