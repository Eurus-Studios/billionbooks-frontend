// data.js
export const categories = [
  { id: 1, title: "Any books at 999", url: "/categories/999" },
  { id: 2, title: "Book boxes", url: "/categories/book-boxes" },
  { id: 3, title: "E-books", url: "/categories/e-books" },
  { id: 4, title: "Bestsellers", url: "/categories/bestsellers" },
  { id: 5, title: "Hardcover", url: "/categories/hardcover" },
  { id: 6, title: "Hindi books", url: "/categories/hindi-books" },
  { id: 7, title: "Bookmarks", url: "/categories/bookmarks" },
  { id: 8, title: "Book sleeves", url: "/categories/book-sleeves" },
  { id: 9, title: "Fiction", url: "/categories/fiction" },
  { id: 10, title: "Non Fiction", url: "/categories/non-fiction" },
  { id: 11, title: "Novel", url: "/categories/novel" },
  {
    id: 12,
    title: "Business & Economics",
    url: "/categories/business-economics",
  },
  {
    id: 13,
    title: "Premium Bookset Collection",
    url: "/categories/premium-bookset",
  },
];

export const navigationItems = [
  {
    id: 1,
    title: "DASHBOARD",
    url: "/dashboard",
  },
  {
    id: 2,
    title: "SHOP BY CATEGORIES",
    url: "/shop",
  },
  {
    id: 3,
    title: "YOUR ORDERS",
    url: "/orders",
  },
  {
    id: 4,
    title: "PAGES",
    url: "/pages",
    submenu: [
      { id: 41, title: "FAQS", url: "/pages/submenu1" },
      { id: 42, title: "Contact Us", url: "/pages/submenu2" },
      { id: 42, title: "Disclaimer", url: "/pages/submenu2" },
      { id: 42, title: "Privacy Policy", url: "/pages/submenu2" },
      { id: 42, title: "T&C", url: "/pages/submenu2" },
      { id: 42, title: "Return & Refund Policy", url: "/pages/submenu2" },
      {
        id: 42,
        title: "Shipping Policy & Delivery Timeline",
        url: "/pages/submenu2",
      },
      // Add more submenu items here
    ],
  },
  {
    id: 5,
    title: "LOGIN",
    url: "/login",
  },
  {
    id: 6,
    title: "HELP DESK",
    url: "/help",
    submenu: [
      { id: 61, title: "WhatsaApp", url: "/help/submenu1" },
      { id: 62, title: "Call us", url: "/help/submenu2" },
      { id: 62, title: "Mail us", url: "/help/submenu2" },
      
    ],
  },
  {
    id: 7,
    title: "MY WALLET",
    url: "/wallet",
  },
];
