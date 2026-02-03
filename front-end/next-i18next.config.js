module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "nl",
    locales: ["nl", "en"],
  },
  ns: ["common"],
  defaultNS: "common",
  localePath: "./public/locales",
  detection: {
    order: ["cookie", "htmlTag"],
    caches: ["cookie"],
  },
};
