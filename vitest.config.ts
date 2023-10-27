import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    dir: "./src/tests",
    include: ["./unit/**/*.{test,spec}.{js,ts,jsx,tsx}"],
    globals: true,
  },
});
