const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('basicTemplate', 'layouts/page.njk');
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPassthroughCopy("src/images");
    return {
        dir: {
            input: "src",
            output: "dist",
        },
        dataTemplateEngine: "njk"
    }
};
