export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./templates/**/*.{html,vue}", // add your folder(s)
    "./resources/views/**/*.blade.php", // (Laravel example)
    "./server/**/*.{ejs,hbs,twig,njk}", // (Node templating example)
  ],
  theme: { extend: {} },
  plugins: [],
};
