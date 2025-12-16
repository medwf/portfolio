import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {};

/**
 * createNextIntlPlugin automatically configures
 * default config takes from `i18n/request.ts` file
 */
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
