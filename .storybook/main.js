module.exports = {
  stories: [
    "../packages/**/stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/**/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto"
    });
    return config;
  },
  docs: {
    autodocs: true
  }
};
