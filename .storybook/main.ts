import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: [
    "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
};

export default config;
