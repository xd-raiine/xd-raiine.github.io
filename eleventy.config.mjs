import Image from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css", "src/js": "js" });
  eleventyConfig.addPassthroughCopy({
    "node_modules/@fontsource/anton/files/anton-latin-400-normal.woff2": "fonts/anton.woff2",
    "node_modules/@fontsource-variable/inter-tight/files/inter-tight-latin-wght-normal.woff2": "fonts/inter-tight.woff2",
    "node_modules/@fontsource-variable/inter-tight/files/inter-tight-latin-wght-italic.woff2": "fonts/inter-tight-italic.woff2",
    "node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2": "fonts/jetbrains-mono.woff2",
  });

  // Responsive images: resizes and converts to AVIF/WebP with a JPEG fallback.
  // Originals are never edited, only resized and compressed.
  eleventyConfig.addAsyncShortcode("image", async (src, alt, sizes = "100vw", cls = "", loading = "lazy") => {
    if (alt === undefined) throw new Error(`Missing alt text for ${src}`);
    const meta = await Image(`src/assets/img/${src}`, {
      widths: [480, 960, 1440, 2000],
      formats: ["avif", "webp", "jpeg"],
      outputDir: "_site/img/",
      urlPath: "/img/",
      sharpJpegOptions: { quality: 82 },
    });
    return Image.generateHTML(meta, { alt, sizes, class: cls, loading, decoding: "async" });
  });

  eleventyConfig.addCollection("work", (api) =>
    api.getFilteredByGlob("src/work/*.md").sort((a, b) => a.data.order - b.data.order)
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk", "md"],
    markdownTemplateEngine: "njk",
  };
}
