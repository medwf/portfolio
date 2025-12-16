import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  if (!hasLocale(routing.locales, locale)) {
    locale = routing.defaultLocale;
    // console.log("from has local: ", locale);
  }

  // console.log(routing.locales, locale, routing.defaultLocale);

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
