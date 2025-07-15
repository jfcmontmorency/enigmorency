module.exports = function(eleventyConfig) {
  // Ajouter le filtre date
  eleventyConfig.addFilter("date", function(date, format) {
    const d = new Date(date);
    
    // Format simple pour l'année
    if (format === "yyyy") {
      return d.getFullYear();
    }
    
    // Format par défaut
    return d.toLocaleDateString();
  });

  // Ajouter une variable globale pour la date actuelle
  eleventyConfig.addGlobalData("now", new Date());

  // Copier les fichiers statiques vers leur destination
  eleventyConfig.addPassthroughCopy({"src/assets/images": "assets/images"});

  // Ajouter les fichiers SCSS partiels au watch
  eleventyConfig.addWatchTarget("src/assets/scss/_*.scss");

  // Configuration SCSS
  const sass = require('sass');
  
  eleventyConfig.addTemplateFormats("scss");
  
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function(inputContent, inputPath) {
      let parsed = require("path").parse(inputPath);
      if (parsed.name.startsWith("_")) {
        return;
      }

      let result = sass.compileString(inputContent, {
        loadPaths: [parsed.dir || "."],
        style: "expanded"
      });

      return async (data) => {
        return result.css;
      };
    },
    getData: function(inputPath) {
      // Rediriger la sortie vers le dossier css au lieu de scss
      let parsed = require("path").parse(inputPath);
      if (parsed.dir.includes('scss')) {
        return {
          permalink: inputPath.replace('/scss/', '/css/').replace('.scss', '.css').replace('src/', '')
        };
      }
      return {};
    }
  });

  return {
    pathPrefix: process.env.ELEVENTY_ENV === 'production' ? "/enigmorency/" : "/enigmorency/",
    dir: {
      input: "src",
      includes: "_includes", 
      data: "_data",
      output: "_site"
    }
  };
};