/**
 * @author: Rezvee Rahman
 * @date:   07/11/2025
 *
 * @details: This is a config for vuepress
 */

import { viteBundler } from "@vuepress/bundler-vite"
import { defaultTheme } from "@vuepress/theme-default"
import { defineUserConfig } from "vuepress"

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme(),

    lang : "en-US",
    title: "Rezvee Rahman (CS)",
    description: "Just introducing my self..."
})